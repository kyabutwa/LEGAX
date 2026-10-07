import { neon, Client } from "@neondatabase/serverless";

export interface AuthEnv { DATABASE_URL?: string }

const COOKIE="legax_session";
const SESSION_DAYS=30;

function db(env:AuthEnv){ if(!env.DATABASE_URL) throw new Error("DATABASE_NOT_CONFIGURED"); return neon(env.DATABASE_URL); }
function b64(bytes:ArrayBuffer|Uint8Array){ return btoa(String.fromCharCode(...new Uint8Array(bytes instanceof ArrayBuffer?bytes:bytes.buffer))); }
function hex(bytes:ArrayBuffer){ return [...new Uint8Array(bytes)].map(x=>x.toString(16).padStart(2,"0")).join(""); }
function unb64(value:string){ const s=atob(value); return Uint8Array.from(s,c=>c.charCodeAt(0)); }

async function passwordHash(password:string,salt=crypto.getRandomValues(new Uint8Array(16))):Promise<string>{
 const key=await crypto.subtle.importKey("raw",new TextEncoder().encode(password),"PBKDF2",false,["deriveBits"]);
 const bits=await crypto.subtle.deriveBits({name:"PBKDF2",salt,iterations:210000,hash:"SHA-256"},key,256);
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

export async function createAccount(env:AuthEnv,input:{email:string,password:string,displayName:string}){
 const email=input.email.trim().toLowerCase(), name=input.displayName.trim();
 if(!validEmail(email)) throw new Error("INVALID_EMAIL");
 if(!validPassword(input.password)) throw new Error("PASSWORD_TOO_WEAK");
 if(name.length<1||name.length>120) throw new Error("INVALID_DISPLAY_NAME");

 const secret=await passwordHash(input.password);
 const client=new Client(env.DATABASE_URL);
 let committed=false;
 try{
   await client.connect();
   await client.query("BEGIN");

   const existing=await client.query(
     "SELECT 1 FROM legax.credentials WHERE credential_type=$1 AND lower(subject_reference)=$2 LIMIT 1",
     ["EMAIL_PASSWORD",email]
   );
   if(existing.rows.length) throw new Error("ACCOUNT_ALREADY_EXISTS");

   const entity=(await client.query(
     "INSERT INTO legax.entities(entity_type,canonical_name,display_name,lifecycle_state,effective_from) VALUES($1,$2,$2,$3,now()) RETURNING entity_id",
     ["PERSON",name,"ACTIVE"]
   )).rows[0];

   await client.query(
     "INSERT INTO legax.persons(entity_id,display_name) VALUES($1,$2)",
     [entity.entity_id,name]
   );

   const identity=(await client.query(
     "INSERT INTO legax.identities(entity_id,identity_type,state,verification_state) VALUES($1,$2,$3,$4) RETURNING identity_id",
     [entity.entity_id,"PERSON","ACTIVE","UNVERIFIED"]
   )).rows[0];

   const account=(await client.query(
     "INSERT INTO legax.accounts(identity_id,state) VALUES($1,$2) RETURNING account_id",
     [identity.identity_id,"ACTIVE"]
   )).rows[0];

   const credential=(await client.query(
     "INSERT INTO legax.credentials(account_id,credential_type,state,subject_reference,verification_state,secret_reference) VALUES($1,$2,$3,$4,$5,$6) RETURNING credential_id",
     [account.account_id,"EMAIL_PASSWORD","ACTIVE",email,"UNVERIFIED",secret]
   )).rows[0];

   await client.query(
     "UPDATE legax.accounts SET primary_credential_id=$1,updated_at=now() WHERE account_id=$2",
     [credential.credential_id,account.account_id]
   );

   await client.query(
     "INSERT INTO legax.account_settings(account_id) VALUES($1)",
     [account.account_id]
   );

   await client.query("COMMIT");
   committed=true;
   return startSession(env,account.account_id as string);
 }catch(error){
   if(!committed){ try{await client.query("ROLLBACK")}catch{} }
   throw error;
 }finally{
   await client.end();
 }
}


export async function signIn(env:AuthEnv,input:{email:string,password:string}){
 const email=input.email.trim().toLowerCase();
 const sql=db(env);
 const rows=await sql`SELECT a.account_id,c.secret_reference FROM legax.accounts a JOIN legax.credentials c ON c.account_id=a.account_id WHERE a.state='ACTIVE' AND c.state='ACTIVE' AND c.credential_type='EMAIL_PASSWORD' AND lower(c.subject_reference)=${email} LIMIT 1`;
 if(!rows.length || !(await passwordVerify(input.password,String(rows[0].secret_reference)))) throw new Error("INVALID_CREDENTIALS");
 await sql`UPDATE legax.accounts SET last_authenticated_at=now(),updated_at=now() WHERE account_id=${rows[0].account_id}`;
 return startSession(env,rows[0].account_id as string);
}

async function startSession(env:AuthEnv,accountId:string){
 const token=b64(crypto.getRandomValues(new Uint8Array(32)));
 const hash=await tokenHash(token);
 const expires=new Date(Date.now()+SESSION_DAYS*86400000);
 const sql=db(env);
 await sql`INSERT INTO legax.sessions(account_id,state,session_secret_reference,expires_at,last_seen_at) VALUES(${accountId},'ACTIVE',${hash},${expires.toISOString()},now())`;
 return new Response(null,{status:303,headers:{location:"/account", "set-cookie":cookie(token)}});
}

export async function currentAccount(env:AuthEnv,request:Request){
 const header=request.headers.get("cookie")||"";
 const token=header.split(";").map(x=>x.trim()).find(x=>x.startsWith(COOKIE+"="))?.slice(COOKIE.length+1);
 if(!token) return null;
 const hash=await tokenHash(token), sql=db(env);
 const rows=await sql`SELECT a.account_id,e.display_name,i.verification_state,a.state,s.expires_at FROM legax.sessions s JOIN legax.accounts a ON a.account_id=s.account_id JOIN legax.identities i ON i.identity_id=a.identity_id JOIN legax.entities e ON e.entity_id=i.entity_id WHERE s.session_secret_reference=${hash} AND s.state='ACTIVE' AND a.state='ACTIVE' AND s.expires_at>now() LIMIT 1`;
 if(!rows.length) return null;
 await sql`UPDATE legax.sessions SET last_seen_at=now() WHERE session_secret_reference=${hash}`;
 return rows[0];
}

export async function signOut(env:AuthEnv,request:Request){
 const header=request.headers.get("cookie")||"", token=header.split(";").map(x=>x.trim()).find(x=>x.startsWith(COOKIE+"="))?.slice(COOKIE.length+1);
 if(token){const hash=await tokenHash(token); await db(env)`UPDATE legax.sessions SET state='REVOKED',revoked_at=now() WHERE session_secret_reference=${hash} AND state='ACTIVE'`;}
 return new Response(null,{status:303,headers:{location:"/account","set-cookie":cookie("",0)}});
}

export function authError(error:unknown){
 const code=error instanceof Error?error.message:"AUTH_ERROR";
 console.error("LegaX account operation failed", error);
 const messages:Record<string,string>={INVALID_EMAIL:"Enter a valid email address.",PASSWORD_TOO_WEAK:"Use a password of at least 10 characters.",INVALID_DISPLAY_NAME:"Enter your name.",ACCOUNT_ALREADY_EXISTS:"An account already exists for this email.",INVALID_CREDENTIALS:"Email or password is incorrect.",ACCOUNT_CREATE_FAILED:"The account could not be created."};
 return messages[code]||"The account operation could not be completed.";
}
