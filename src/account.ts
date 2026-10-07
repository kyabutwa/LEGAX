import { currentAccount, createAccount, signIn, signOut, authError, type AuthEnv } from "./auth";
import { renderLegaXPage } from "./ui/page";

function esc(v:string){return v.replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]||c));}

export async function handleAccount(request:Request,env:AuthEnv):Promise<Response>{
 const url=new URL(request.url);
 try{
  if(request.method==="POST"){
   const form=await request.formData(), action=String(form.get("action")||"");
   if(action==="create") return createAccount(env,{email:String(form.get("email")||""),password:String(form.get("password")||""),displayName:String(form.get("display_name")||"")});
   if(action==="signin") return signIn(env,{email:String(form.get("email")||""),password:String(form.get("password")||"")});
   if(action==="signout") return signOut(env,request);
  }
  const account=await currentAccount(env,request);
  return renderAccount(account,null);
 }catch(error){
   let account=null;
   try{ account=await currentAccount(env,request); }
   catch(sessionError){ console.error("LegaX account error-state lookup failed",sessionError); }
   return renderAccount(account,authError(error));
 }
}

function renderAccount(account:any,error:string|null):Response{
 const content=account?`
 <section class="account-hero"><p class="eyebrow">Account</p><h1>Your LegaX account</h1><p class="lede">Authentication is active. Your account is connected to a canonical identity, while participation, context and authorization remain separate.</p></section>
 <section class="account-grid">
  <article class="account-card featured"><span class="kicker">Signed in</span><strong>${esc(String(account.display_name||"Account"))}</strong><span>${esc(String(account.account_id))}</span><span>Identity verification: ${esc(String(account.verification_state))}</span><span>Account state: ${esc(String(account.state))}</span></article>
  <article class="account-card"><span class="kicker">Security</span><strong>Session active</strong><span>HttpOnly secure session cookie</span><span>Password is stored as a derived credential, never plaintext.</span></article>
 </section>
 <form method="post" class="account-action"><input type="hidden" name="action" value="signout"><button type="submit">Sign out</button></form>
 <section class="account-next"><strong>Next governed context</strong><span>Choose a community, organization, provider or other participation context after authentication. Authentication does not grant authority.</span></section>`:
 `
 <section class="account-hero"><p class="eyebrow">Account</p><h1>Enter LegaX</h1><p class="lede">Create an account or sign in. Your account establishes authentication; it does not automatically create participation, authority or access.</p></section>
 ${error?`<div class="auth-error" role="alert">${esc(error)}</div>`:""}
 <section class="auth-grid">
  <form method="post" class="auth-card"><input type="hidden" name="action" value="create"><p class="kicker">New here</p><h2>Create account</h2><label>Name<input name="display_name" autocomplete="name" required maxlength="120"></label><label>Email<input name="email" type="email" autocomplete="email" required></label><label>Password<input name="password" type="password" autocomplete="new-password" minlength="10" required><small>Minimum 10 characters.</small></label><button type="submit">Create account</button></form>
  <form method="post" class="auth-card"><input type="hidden" name="action" value="signin"><p class="kicker">Already have one</p><h2>Sign in</h2><label>Email<input name="email" type="email" autocomplete="email" required></label><label>Password<input name="password" type="password" autocomplete="current-password" required></label><button type="submit">Sign in</button><span class="recovery-note">Password recovery will use the canonical recovery flow once the outbound delivery adapter is enabled.</span></form>
 </section>
 <section class="account-next"><strong>What happens after authentication?</strong><span>Identity → account → active context → governed authorization. A successful sign-in is never treated as permission to perform consequential actions.</span></section>`;
 return renderLegaXPage({title:"Account",active:"Account",content});
}
