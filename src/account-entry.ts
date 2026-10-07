import { currentAccount, createAccount, signIn, signOut, authError, type AuthEnv } from "./auth";
import { renderLegaXPage } from "./ui/page";

const intents=["participant","join-community","community","provider","organization"];
function esc(v:string){return v.replace(/[&<>"\']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","\'":"&#39;"}[c]||c));}
function intentOf(v:string|null){return intents.includes(v||"")?v||"":"";}
function selectedLabel(v:string){const m:Record<string,string>={participant:"Join as a Participant","join-community:"Join a Community",community:"Join as a Community",provider:"Join as a Provider",organization:"Join as an Organization"};return m[v]||"Enter LegaX";}
function redirectWithSession(response:Response,next:string){if(response.status!==303)return response;const headers=new Headers(response.headers);headers.set("location",next);return new Response(null,{status:303,headers});}
export async function handleAccountEntry(request:Request,env:AuthEnv):Promise<Response>{
 const url=new URL(request.url),intent=intentOf(url.searchParams.get("intent"));
 try{
  if(request.method==="POST"){
   const form=await request.formData(),action=String(form.get("action")||""),chosen=intentOf(String(form.get("intent")||intent)),next=chosen?"/onboarding?intent="+encodeURIComponent(chosen):"/account";
   if(action==="create")return redirectWithSession(await createAccount(env,{email:String(form.get("email")||""),password:String(form.get("password")||""),displayName:String(form.get("display_name")||"")}),next);
   if(action==="signin")return redirectWithSession(await signIn(env,{email:String(form.get("email")||""),password:String(form.get("password")||"")}),next);
   if(action==="signout")return signOut(env,request);
  }
  return renderAccountEntry(await currentAccount(env,request),null,intent);
 }catch(error){return renderAccountEntry(null,authError(error),intent);}
}
function renderAccountEntry(account:any,error:string|null,intent:string):Response{
 const label=selectedLabel(intent);
 const content=account?"<section class=\"account-hero\"><p class=\"eyebrow\">Authenticated</p><h1>Your LegaX account</h1><p class=\"lede\">Your identity and account are active. Choose a separate governed context without creating another account.</p></section><section class=\"account-grid\"><article class=\"account-card\"><span class=\"kicker\">Signed in</span><strong>"+esc(String(account.display_name||"Account"))+"</strong><span>"+esc(String(account.account_id))+"</span><span>Identity verification: "+esc(String(account.verification_state))+"</span></article><article class=\"account-card\"><span class=\"kicker\">Security</span><strong>Session active</strong><span>HttpOnly secure session cookie</span><span>Password is stored as a derived credential.</span></article></section><section class=\"account-next\"><strong>Choose your LegaX path</strong><span>Identity ≠ Account ≠ Participant. Authentication ≠ Authorization.</span><a class=\"button primary\" href=\"/join\">Choose path</a></section>":
 "<section class=\"account-hero\"><p class=\"eyebrow\">LegaX entry</p><h1>"+esc(label)+"</h1><p class=\"lede\">One LegaX account can support many governed contexts. Choose the path you intend to enter.</p></section>"+(error?"<div class=\"auth-error\" role=\"alert\">"+esc(error)+"</div>":"")+"<section class=\"auth-grid\"><form method=\"post\" class=\"auth-card\"><input type=\"hidden\" name=\"action\" value=\"create\"><input type=\"hidden\" name=\"intent\" value=\""+esc(intent)+"\"><p class=\"kicker\">New to LegaX</p><h2>Create account</h2><label>Name<input name=\"display_name\" autocomplete=\"name\" required maxlength=\"120\"></label><label>Email<input name=\"email\" type=\"email\" autocomplete=\"email\" required></label><label>Password<input name=\"password\" type=\"password\" autocomplete=\"new-password\" minlength=\"10\" required><small>Minimum 10 characters.</small></label><button type=\"submit\">Create account</button></form><form method=\"post\" class=\"auth-card\"><input type=\"hidden\" name=\"action\" value=\"signin\"><input type=\"hidden\" name=\"intent\" value=\""+esc(intent)+"\"><p class=\"kicker\">Already have an account</p><h2>Sign in</h2><label>Email<input name=\"email\" type=\"email\" autocomplete=\"email\" required></label><label>Password<input name=\"password\" type=\"password\" autocomplete=\"current-password\" required></label><button type=\"submit\">Sign in</button></form></section><section class=\"account-next\"><strong>Choose before you continue</strong><span>These are different domain relationships, not different account types.</span><a href=\"/join\">View all paths</a></section>";
 return renderLegaXPage({title:"Account",active:"Account",content});
}