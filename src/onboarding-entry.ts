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
 }else{
  const details=intent==="join-community"?"Join an existing community through an invitation or governed joining process. No community is created here.":intent==="community"?"Community creation is a distinct 20A operating context. Your identity and account are ready; its governed creation workflow is separate.":intent==="provider"?"Provider onboarding is a distinct 20C operating context for services, workers, resources and delivery.":"Organization onboarding is a distinct 20B operating context for governance, people, teams and work.";
  body="<section class=\"account-next\"><strong>"+labels[intent]+"</strong><span>"+details+"</span></section><a class=\"button secondary\" href=\"/join\">Choose another path</a> <a class=\"button primary\" href=\"/\">Continue to LegaX home</a>";
 }
 const content="<section class=\"page-hero\"><p class=\"eyebrow\">Governed onboarding</p><h1>"+esc(labels[intent])+"</h1><p class=\"lede\">Signed in as "+esc(String(account.display_name||"your LegaX identity"))+". One identity and account; this is a separate domain context.</p></section>"+(error?"<div class=\"auth-error\" role=\"alert\">"+esc(error)+"</div>":"")+"<div class=\"onboarding-surface\">"+body+"</div><style>.onboarding-surface{max-width:760px}.muted{color:var(--muted);line-height:1.55}.role{display:flex;align-items:center;gap:12px;padding:14px 0;border-top:1px solid var(--line);color:var(--text)}.role input{accent-color:#78dcff}</style>";
 return renderLegaXPage({title:labels[intent],active:"Account",content});
}
