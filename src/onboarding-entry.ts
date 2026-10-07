import { neon } from "@neondatabase/serverless";
import { currentAccount, type AuthEnv } from "./auth";
import { renderLegaXPage } from "./ui/page";

type Intent="participant"|"join-community"|"community"|"provider"|"organization";
const labels:Record<Intent,string>={participant:"Join as a Participant","join-community":"Join a Community",community:"Join as a Community",provider:"Join as a Provider",organization:"Join as an Organization"};
const roles=["RESIDENT","MEMBER","WORKER","VISITOR","STUDENT","CONTRACTOR","OTHER"] as const;
function esc(v:string){return v.replace(/[&<>\"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'\"':"&quot;","'":"&#39;"}[c]||c));}
function intentOf(value:string|null):Intent{const v=value||"";return v==="participant"||v==="join-community"||v==="community"||v==="provider"||v==="organization"?v:"participant";}
export async function handleOnboarding(request:Request,env:AuthEnv):Promise<Response>{
 const url=new URL(request.url),intent=intentOf(url.searchParams.get("intent"));
 const account=await currentAccount(env,request);
 if(!account)return new Response(null,{status:303,headers:{location:"/account?intent="+encodeURIComponent(intent)}});
 if(request.method==="POST"&&intent==="participant"){
  const form=await request.formData(),role=String(form.get("relationship_type")||"OTHER");
  if(!roles.includes(role as typeof roles[number]))return renderOnboarding(account,intent,"Choose a valid participant relationship.",false);
  try{
   const sql=neon(env.DATABASE_URL!);
   const identityRows=await sql`SELECT identity_id FROM legax.accounts WHERE account_id=${account.account_id} LIMIT 1`;
   if(!identityRows.length)return renderOnboarding(account,intent,"The authenticated identity could not be resolved.",false);
   const identityId=identityRows[0].identity_id;
   const existing=await sql`SELECT participant_id FROM legax.participants WHERE identity_id=${identityId} LIMIT 1`;
   if(existing.length)return renderOnboarding(account,intent,null,true);
   const p=await sql`INSERT INTO legax.participations(identity_id,state,scope,effective_from) VALUES(${identityId},'ACTIVE',${JSON.stringify({relationship_type:role,source:"SELF_ONBOARDING"})}::jsonb,now()) RETURNING participation_id`;
   await sql`INSERT INTO legax.participants(participation_id,identity_id,state) VALUES(${p[0].participation_id},${identityId},'ACTIVE')`;
   return renderOnboarding(account,intent,null,true);
  }catch(error){console.error("LegaX participant onboarding failed",error);return renderOnboarding(account,intent,"The participant relationship could not be established yet.",false);}
 }
 return renderOnboarding(account,intent,null,false);
}
function renderOnboarding(account:any,intent:Intent,error:string|null,complete:boolean):Response{
 let body:string;
 if(intent==="participant"){
  body=complete?"<section class=\"account-next\"><strong>Participant relationship established.</strong><span>Your identity now has a participant relationship. This does not grant consequential authority.</span></section><a class=\"button primary\" href=\"/\">Continue to LegaX home</a>":"<section class=\"auth-card\"><p class=\"kicker\">People</p><h2>Choose your participant relationship</h2><p class=\"muted\">Choose resident or another legitimate participant relationship. This creates participation → participant; it does not create authority.</p><form method=\"post\">"+roles.map(r=>"<label class=\"role\"><input type=\"radio\" name=\"relationship_type\" value=\""+r+"\" "+(r==="RESIDENT"?"checked":"")+"><span>"+r.replace("_"," ")+"</span></label>").join("")+"<button type=\"submit\">Continue as participant</button></form></section>";
 }else if(intent==="join-community"){
  body="<section class=\"account-next\"><strong>Join an existing community</strong><span>Community discovery is live. A request creates a governed pending relationship; it does not grant membership until the community process accepts it.</span><a class=\"button primary\" href=\"/communities\">Discover communities</a></section>";
 }else{
  const target=intent==="community"?"/communities":intent==="provider"?"/providers":"/organizations";
  const label=intent==="community"?"community":intent==="provider"?"provider":"organization";
  const details=intent==="community"?"Create a real 20A community operating context with its own workspace and governance boundary.":intent==="provider"?"Create a real 20C provider operating context for service catalog, teams, capacity, dispatch and delivery.":"Create a real 20B organization operating context for governance, teams, work, resources and services.";
  body="<section class=\"ops-form\"><strong>"+labels[intent]+"</strong><p class=\"muted\">"+details+"</p><form method=\"post\" action=\""+target+"\"><input type=\"hidden\" name=\"action\" value=\"create-context\"><label>Name<input name=\"name\" required maxlength=\"160\" placeholder=\"Enter the "+label+" name\"></label><button type=\"submit\">Create "+label+" context</button></form></section><a class=\"button secondary\" href=\"/join\">Choose another path</a>";
 }
 const content="<section class=\"page-hero\"><p class=\"eyebrow\">Governed onboarding</p><h1>"+esc(labels[intent])+"</h1><p class=\"lede\">Signed in as "+esc(String(account.display_name||"your LegaX identity"))+". One identity and account; this is a separate domain context.</p></section>"+(error?"<div class=\"auth-error\" role=\"alert\">"+esc(error)+"</div>":"")+"<div class=\"onboarding-surface\">"+body+"</div><style>.onboarding-surface{max-width:760px}.ops-form{padding:22px;border:1px solid var(--line);border-radius:22px;background:var(--surface)}.ops-form label{display:grid;gap:7px;margin:14px 0}.ops-form input{padding:12px;border:1px solid var(--line);border-radius:12px;background:rgba(0,0,0,.12);color:var(--text)}.muted{color:var(--muted);line-height:1.55}.role{display:flex;align-items:center;gap:12px;padding:14px 0;border-top:1px solid var(--line);color:var(--text)}.role input{accent-color:#78dcff}</style>";
 return renderLegaXPage({title:labels[intent],active:"Account",content});
}
