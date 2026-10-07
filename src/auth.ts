import { neon, Client } from "@neondatabase/serverless";

export interface AuthEnv { DATABASE_URL?: string; RESEND_API_KEY?: string; RESEND_FROM_EMAIL?: string }

const COOKIE="legax_session";
const SESSION_DAYS=30;

function db(env:AuthEnv){ if(!env.DATABASE_URL) throw new Error("DATABASE_NOT_CONFIGURED"); return neon(env.DATABASE_URL); }
function b64(bytes:ArrayBuffer|Uint8Array){ return btoa(String.fromCharCode(...new Uint8Array(bytes instanceof ArrayBuffer?bytes:bytes.buffer))); }
function hex(bytes:ArrayBuffer){ return [...new Uint8Array(bytes)].map(x=>x.toString(16).padStart(2,"0")).join(""); }
function unb64(value:string){ const s=atob(value); return Uint8Array.from(s,c=>c.charCodeAt(0)); }

async function passwordHash(password:string,salt=crypto.getRandomValues(new Uint8Array(16))):Promise<string>{
 const key=await crypto.subtle.importKey("raw",new TextEncoder().encode(password),"PBKDF2",false,["deriveBits"]);
 const bits=await crypto.subtle.deriveBits({name:"PBKDF2",salt,iterations:100000,hash:"SHA-256"},key,256);
 return `v1$${b64(salt)}$${b64(bits)}`;
}
async function passwordVerify(password:string,encoded:string){
 const [version,salt64,hash64]=encoded.split("$");
 if(version!=="v1"||!salt64||!hash64) return false;
 const actual=await passwordHash(password,unb64(salt64));
 const a=unb64(actual.split("$")[2]), b=unb64(hash64);
 if(a.length!==b.length) return false;
 let diff=0; for(let i=0;i<a.length;i++) diff|=a[i]^b[i];
 return diff===0;
}
async function tokenHash(token:string){ return hex(await crypto.subtle.digest("SHA-256",new TextEncoder().encode(token))); }
function validEmail(email:string){return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);}
function validPassword(password:string){return password.length>=10 && password.length<=200;}
function cookie(token:string,maxAge=SESSION_DAYS*86400){return `${COOKIE}=${token}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${maxAge}`;}

export async function createAccount(env:AuthEnv,input:{email:string,password:string,passwordConfirmation:string,displayName:string}){
 const email=input.email.trim().toLowerCase(), name=input.displayName.trim();
 if(!validEmail(email)) throw new Error("INVALID_EMAIL");
 if(!validPassword(input.password)) throw new Error("PASSWORD_TOO_WEAK");
 if(input.password!==input.passwordConfirmation) throw new Error("PASSWORD_CONFIRMATION_MISMATCH");
 if(name.length<1||name.length>120) throw new Error("INVALID_DISPLAY_NAME");

 const sql=db(env);
 const existing=await sql`SELECT 1 FROM legax.credentials WHERE credential_type='EMAIL_PASSWORD' AND lower(subject_reference)=${email} LIMIT 1`;
 if(existing.length) throw new Error("ACCOUNT_ALREADY_EXISTS");

 const secret=await passwordHash(input.password);
 const entityId=crypto.randomUUID(),identityId=crypto.randomUUID(),accountId=crypto.randomUUID(),credentialId=crypto.randomUUID();
 const rows=await sql`WITH e AS (
   INSERT INTO legax.entities(entity_id,entity_type,canonical_name,display_name,lifecycle_state,effective_from)
   VALUES(${entityId},'PERSON',${name},${name},'ACTIVE',now()) RETURNING entity_id
 ), p AS (
   INSERT INTO legax.persons(entity_id,display_name) SELECT entity_id,${name} FROM e RETURNING entity_id
 ), i AS (
   INSERT INTO legax.identities(identity_id,entity_id,identity_type,state,verification_state)
   SELECT ${identityId},entity_id,'PERSON','ACTIVE','UNVERIFIED' FROM p RETURNING identity_id
 ), a AS (
   INSERT INTO legax.accounts(account_id,identity_id,state)
   SELECT ${accountId},identity_id,'ACTIVE' FROM i RETURNING account_id
 ), c AS (
   INSERT INTO legax.credentials(credential_id,account_id,credential_type,state,subject_reference,verification_state,secret_reference)
   SELECT ${credentialId},account_id,'EMAIL_PASSWORD','ACTIVE',${email},'UNVERIFIED',${secret} FROM a RETURNING credential_id,account_id
 ), pa AS (
   UPDATE legax.accounts SET primary_credential_id=${credentialId},updated_at=now() WHERE account_id=${accountId} RETURNING account_id
 )
 INSERT INTO legax.account_settings(account_id) SELECT account_id FROM pa RETURNING account_id`;
 if(!rows.length) throw new Error("ACCOUNT_CREATE_FAILED");
