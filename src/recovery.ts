import { neon } from "@neondatabase/serverless";
import { authError, type AuthEnv } from "./auth";
import { renderLegaXPage } from "./ui/page";

type RecoveryEnv = AuthEnv & { RESEND_API_KEY?: string; RESEND_FROM_EMAIL?: string; };

function db(env:RecoveryEnv){ if(!env.DATABASE_URL) throw new Error("DATABASE_NOT_CONFIGURED"); return neon(env.DATABASE_URL); }
function esc(v:string){return v.replace(/[&<>"']/g,c=>c==="&"?"&amp;":c==="<"?"&lt;":c===">"?"&gt;":c==='"'?"&quot;":"&#39;");}
function b64url(bytes:Uint8Array){return btoa(String.fromCharCode(...bytes)).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"");}
async function tokenHash(token:string){const bytes=new TextEncoder().encode(token);return [...new Uint8Array(await crypto.subtle.digest("SHA-256",bytes))].map(x=>x.toString(16).padStart(2,"0")).join("");}
function validPassword(password:string){return password.length>=10&&password.length<=200;}

async function sendRecoveryEmail(env:RecoveryEnv,email:string,token:string){
 if(!env.RESEND_API_KEY||!env.RESEND_FROM_EMAIL) throw new Error("RECOVERY_DELIVERY_NOT_CONFIGURED");
 const origin="https://legax.kyabutwabis-f.workers.dev";
 const link=origin+"/account/recovery?token="+encodeURIComponent(token);
 const body={
   from:env.RESEND_FROM_EMAIL,
   to:[email],
   subject:"Reset your LegaX password",
   html:"<!doctype html><html><body style='font-family:Arial,sans-serif;line-height:1.5'><h1>Reset your LegaX password</h1><p>Someone requested a password reset for your LegaX account.</p><p><a href='"+link+"' style='display:inline-block;padding:14px 20px;background:#173b7a;color:white;text-decoration:none;border-radius:10px'>Reset password</a></p><p>This link expires in 30 minutes and can be used once.</p><p>If you did not request this, you can ignore this email.</p></body></html>"
 };
 const response=await fetch("https://api.resend.com/emails",{method:"POST",headers:{"authorization":"Bearer "+env.RESEND_API_KEY,"content-type":"application/json","idempotency-key":"legax-recovery-"+token},body:JSON.stringify(body)});
 if(!response.ok) throw new Error("RECOVERY_DELIVERY_FAILED");
}

export async function requestPasswordRecovery(env:RecoveryEnv,emailInput:string){
 const email=emailInput.trim().toLowerCase();
 if(!email||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error("INVALID_EMAIL");
 const sql=db(env);
 const rows=await sql`SELECT a.account_id FROM legax.accounts a JOIN legax.credentials c ON c.account_id=a.account_id WHERE a.state='ACTIVE' AND c.state='ACTIVE' AND c.credential_type='EMAIL_PASSWORD' AND lower(c.subject_reference)=${email} LIMIT 1`;
 if(rows.length){
   const recent=await sql`SELECT COUNT(*)::int AS count FROM legax.account_recovery_challenges WHERE account_id=${rows[0].account_id} AND requested_at>now()-interval '1 hour'`;
   if(Number(recent[0]?.count||0)<3){
     const token=b64url(crypto.getRandomValues(new Uint8Array(32)));
     const hash=await tokenHash(token);
     await sql`UPDATE legax.account_recovery_challenges SET state='REVOKED',updated_at=now() WHERE account_id=${rows[0].account_id} AND state='ACTIVE'`;
     await sql`INSERT INTO legax.account_recovery_challenges(account_id,token_hash,state,expires_at,requested_from) VALUES(${rows[0].account_id},${hash},'ACTIVE',now()+interval '30 minutes','web')`;
     try{ await sendRecoveryEmail(env,email,token); }
     catch(error){
       await sql`UPDATE legax.account_recovery_challenges SET state='REVOKED',updated_at=now() WHERE token_hash=${hash} AND state='ACTIVE'`;
       throw error;
     }
   }
 }
 return "If an active LegaX account uses that email, a password-reset link has been sent.";
}

export async function resetPassword(env:RecoveryEnv,tokenInput:string,password:string,confirmation:string){
 const token=tokenInput.trim();
 if(!token) throw new Error("INVALID_RECOVERY_TOKEN");
 if(!validPassword(password)) throw new Error("PASSWORD_TOO_WEAK");
 if(password!==confirmation) throw new Error("PASSWORD_CONFIRMATION_MISMATCH");
 const hash=await tokenHash(token),sql=db(env);
 const rows=await sql`SELECT recovery_challenge_id,account_id FROM legax.account_recovery_challenges WHERE token_hash=${hash} AND state='ACTIVE' AND expires_at>now() AND consumed_at IS NULL LIMIT 1`;
 if(!rows.length) throw new Error("INVALID_RECOVERY_TOKEN");
 const key=await crypto.subtle.importKey("raw",new TextEncoder().encode(password),"PBKDF2",false,["deriveBits"]);
 const salt=crypto.getRandomValues(new Uint8Array(16));
 const bits=await crypto.subtle.deriveBits({name:"PBKDF2",salt,iterations:100000,hash:"SHA-256"},key,256);
 const secret="v1$"+btoa(String.fromCharCode(...salt))+"$"+btoa(String.fromCharCode(...new Uint8Array(bits)));
 await sql`UPDATE legax.credentials SET secret_reference=${secret},updated_at=now() WHERE account_id=${rows[0].account_id} AND credential_type='EMAIL_PASSWORD' AND state='ACTIVE'`;
 await sql`UPDATE legax.account_recovery_challenges SET state='CONSUMED',consumed_at=now(),updated_at=now() WHERE recovery_challenge_id=${rows[0].recovery_challenge_id} AND state='ACTIVE'`;
 await sql`UPDATE legax.sessions SET state='REVOKED',revoked_at=now() WHERE account_id=${rows[0].account_id} AND state='ACTIVE'`;
 return true;
}

export async function handleRecovery(request:Request,env:RecoveryEnv):Promise<Response>{
 const url=new URL(request.url),token=url.searchParams.get("token")||"";
 try{
   if(request.method==="POST"){
     const form=await request.formData(),action=String(form.get("action")||"");
     if(action==="request"){const message=await requestPasswordRecovery(env,String(form.get("email")||""));return renderRecovery(null,message,null);}
     if(action==="reset"){await resetPassword(env,token,String(form.get("password")||""),String(form.get("password_confirmation")||""));return new Response(null,{status:303,headers:{location:"/account?recovered=1"}});}
   }
   return renderRecovery(null,null,token);
 }catch(error){return renderRecovery(authError(error),null,token);}
}

function renderRecovery(error:string|null,message:string|null,token:string|null){
 const reset=!!token;
 const content=reset?
 `<section class="account-hero"><p class="eyebrow">Account recovery</p><h1>Choose a new password</h1><p class="lede">Create a new password and confirm it before your recovery link can be consumed.</p></section>${error?`<div class="auth-error" role="alert">${esc(error)}</div>`:""}<section class="auth-grid recovery-layout"><form method="post" class="auth-card recovery-card"><input type="hidden" name="action" value="reset"><p class="kicker">Secure recovery</p><h2>Set a new password</h2><label>New password<input name="password" type="password" autocomplete="new-password" minlength="10" required></label><label>Confirm new password<input name="password_confirmation" type="password" autocomplete="new-password" minlength="10" required></label><small>Minimum 10 characters. Both passwords must match.</small><button type="submit">Reset password</button></form><aside class="panel recovery-side"><p class="kicker">Recovery contract</p><h2>One-time access.</h2><p>The recovery token is single-use, expires after 30 minutes and revokes active sessions after a successful password reset.</p><a class="button secondary" href="/account">Back to account</a></aside></section>`:
 `<section class="account-hero"><p class="eyebrow">Account recovery</p><h1>Forgot your password?</h1><p class="lede">Request a single-use recovery link for your LegaX account.</p></section>${error?`<div class="auth-error" role="alert">${esc(error)}</div>`:""}${message?`<section class="account-next recovery-confirm"><strong>Recovery request accepted</strong><span>${esc(message)}</span></section>`:""}<section class="auth-grid recovery-layout"><form method="post" class="auth-card recovery-card"><input type="hidden" name="action" value="request"><p class="kicker">Account access</p><h2>Send recovery link</h2><label>Email<input name="email" type="email" autocomplete="email" required></label><button type="submit">Send recovery link</button></form><aside class="panel recovery-side"><p class="kicker">Privacy</p><h2>No account disclosure.</h2><p>LegaX does not reveal whether an email belongs to an account. A delivery confirmation is shown only after the delivery adapter accepts the request.</p><a class="button secondary" href="/account">Back to account</a></aside></section>`;
 return renderLegaXPage({title:"Account recovery",active:"Account",content});
}
