import { neon } from "@neondatabase/serverless";
import { currentAccount, type AuthEnv } from "./auth";
import { renderLegaXPage } from "./ui/page";

type Kind="community"|"provider"|"organization";
function db(env:AuthEnv){if(!env.DATABASE_URL)throw new Error("DATABASE_NOT_CONFIGURED");return neon(env.DATABASE_URL);}
function esc(v:string){return v.replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]||c));}
function page(title:string,active:any,content:string){return renderLegaXPage({title,active,content});}
function shell(title:string,eyebrow:string,lede:string,body:string){return `<section class="page-hero"><p class="eyebrow">${esc(eyebrow)}</p><h1>${esc(title)}</h1><p class="lede">${lede}</p></section>${body}<style>.ops-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}.ops-card{display:flex;flex-direction:column;gap:8px;padding:20px;border:1px solid var(--line);border-radius:20px;background:var(--surface)}.ops-card strong{font-size:18px}.ops-card span{color:var(--muted);line-height:1.45}.ops-card b{font-size:10px;text-transform:uppercase;letter-spacing:.08em;color:var(--dim)}.ops-form{max-width:720px;padding:22px;border:1px solid var(--line);border-radius:22px;background:var(--surface)}.ops-form label{display:grid;gap:7px;margin:14px 0}.ops-form input,.ops-form textarea,.ops-form select{width:100%;box-sizing:border-box;padding:12px 14px;border:1px solid var(--line);border-radius:12px;background:rgba(0,0,0,.12);color:var(--text)}.ops-form button{margin-top:8px}.notice{padding:14px 16px;border:1px solid var(--line);border-radius:14px;margin:14px 0;background:rgba(255,255,255,.03)}@media(max-width:820px){.ops-grid{grid-template-columns:1fr}}
</style>`;}


export async function loadHomeSnapshot(env:AuthEnv,account:any){
 const sql=db(env);
 const rows=await sql`SELECT
  (SELECT count(*) FROM legax.participations p JOIN legax.accounts a ON a.account_id=${account.account_id} WHERE p.identity_id=a.identity_id AND p.state='ACTIVE')::int AS participations,
  (SELECT count(*) FROM legax.community_profiles)::int AS communities,
  (SELECT count(*) FROM legax.provider_profiles)::int AS providers,
  (SELECT count(*) FROM legax.organization_profiles)::int AS organizations,
  (SELECT count(*) FROM legax.commerce_products WHERE publication_state='PUBLIC' AND lifecycle_state='ACTIVE')::int AS public_products,
  (SELECT count(*) FROM legax.services WHERE lifecycle_state='ACTIVE')::int AS services`;
 return rows[0]||{participations:0,communities:0,providers:0,organizations:0,public_products:0,services:0};
}

export async function handleOperating(request:Request,env:AuthEnv,path:string):Promise<Response>{
 const account=await currentAccount(env,request);
 if(!account)return new Response(null,{status:303,headers:{location:"/account"}});
 try{
  if(request.method==="POST"){
   const form=await request.formData(), action=String(form.get("action")||"");
   if(action==="create-context")return await createContext(env,account,path,String(form.get("name")||"").trim());
   if(action==="request-community")return await requestCommunity(env,account,String(form.get("community_entity_id")||""));
  }
  if(path==="/communities")return await communities(env);
  if(path==="/providers")return await contexts(env,"provider");
  if(path==="/organizations")return await contexts(env,"organization");
  if(path==="/services")return await services(env);
  if(path==="/market")return await market(env);
  if(path==="/orders")return await orders(env,account);
  if(path==="/account/settings")return await settings(env,account);
  return page("Not found","Overview",shell("Not found","LegaX","The requested operating surface does not exist.","<section class=notice>Choose a real LegaX operating surface from home.</section>"));
 }catch(error){
  console.error("LegaX operating surface failed",error);
  return page("Operation unavailable","Overview",shell("Operation unavailable","LegaX","The requested operation could not be completed safely.","<section class=notice role=alert>The operation was not completed. No consequential state was claimed.</section><a class=button href="/">Return home</a>"));
 }
}

async function createContext(env:AuthEnv,account:any,path:string,name:string):Promise<Response>{
 if(name.length<2||name.length>160) return page("Create context","Account",shell("Name required","Governed context","Enter a clear name for the context(),","<section class=notice>Use at least 2 characters.</section><a class=button href=\""+esc(path)+"\">Back</a>"));
 const kind:Kind=path==="/providers"?"provider":path==="/organizations"?"organization":"community";
 const sql=db(env);
 const identity=await sql`SELECT i.identity_id,i.entity_id FROM legax.accounts a JOIN legax.identities i ON i.identity_id=a.identity_id WHERE a.account_id=${account.account_id} LIMIT 1`;
 if(!identity.length)throw new Error("IDENTITY_NOT_FOUND");
 const owner=identity[0].entity_id, entityId=crypto.randomUUID(), workspaceId=crypto.randomUUID(), now=new Date().toISOString();
 const entityType=kind==="community"?"COMMUNITY":kind==="provider"?"PROVIDER":"ORGANIZATION";
 const workspaceType=kind==="community"?"COMMUNITY_OPERATING":kind==="provider"?"PROVIDER_OPERATING":"ORGANIZATION_OPERATING";
 await sql`INSERT INTO legax.entities(entity_id,entity_type,canonical_name,display_name,lifecycle_state,effective_from) VALUES(${entityId},${entityType},${name},${name},'ACTIVE',now())`;
 await sql`INSERT INTO legax.workspaces(id,workspace_type,name,purpose,scope_ref,lifecycle,governance_ref,version,created_at,updated_at) VALUES(${workspaceId},${workspaceType},${name},${kind+" operating context"},${entityId},'ACTIVE',${entityId},1,${now},${now})`;
 if(kind==="community"){
  await sql`INSERT INTO legax.community_profiles(community_entity_id,workspace_id,operator_entity_id,onboarding_state) VALUES(${entityId},${workspaceId},${owner},'ACTIVE')`;
 }else if(kind==="provider"){
  await sql`INSERT INTO legax.provider_profiles(provider_entity_id,workspace_id,onboarding_state) VALUES(${entityId},${workspaceId},'ACTIVE')`;
 }else{
  await sql`INSERT INTO legax.organization_profiles(organization_entity_id,workspace_id,onboarding_state) VALUES(${entityId},${workspaceId},'ACTIVE')`;
 }
 await sql`INSERT INTO legax.participations(identity_id,context_entity_id,state,scope,effective_from) VALUES(${identity[0].identity_id},${entityId},'ACTIVE',${JSON.stringify({relationship_type:kind.toUpperCase()+"_OPERATOR",source:"SELF_ONBOARDING"})}::jsonb,now())`;
 return new Response(null,{status:303,headers:{location:path}});
}

async function communities(env:AuthEnv):Promise<Response>{
 const sql=db(env);
 const rows=await sql`SELECT e.entity_id,e.display_name,cp.onboarding_state,cp.plan_state,cp.created_at,COUNT(cr.id)::int AS roster_count FROM legax.community_profiles cp JOIN legax.entities e ON e.entity_id=cp.community_entity_id LEFT JOIN legax.community_roster cr ON cr.community_entity_id=cp.community_entity_id AND cr.state='ACTIVE' GROUP BY e.entity_id,e.display_name,cp.onboarding_state,cp.plan_state,cp.created_at ORDER BY cp.created_at DESC LIMIT 50`;
 const cards=rows.map((r:any)=>`<article class="ops-card"><strong>${esc(String(r.display_name||"Community"))}</strong><span>${esc(String(r.roster_count))} active participant relationships</span><b>${esc(String(r.onboarding_state))} · ${esc(String(r.plan_state))}</b><form method="post"><input type="hidden" name="action" value="request-community"><input type="hidden" name="community_entity_id" value="${esc(String(r.entity_id))}"><button type="submit">Request to join</button></form></article>`).join("");
 return page("Communities","Overview",shell("Communities","20A · Community network","Existing communities are real records. Joining is a governed relationship, not account creation.",`<div class="ops-grid">${cards||"<section class=notice>No communities are currently available.</section>"}</div>`));
}

async function requestCommunity(env:AuthEnv,account:any,communityId:string):Promise<Response>{
 const sql=db(env);
 const identity=await sql`SELECT i.identity_id,i.entity_id FROM legax.accounts a JOIN legax.identities i ON i.identity_id=a.identity_id WHERE a.account_id=${account.account_id} LIMIT 1`;
 if(!identity.length)throw new Error("IDENTITY_NOT_FOUND");
 const exists=await sql`SELECT invitation_id FROM legax.community_invitations WHERE community_entity_id=${communityId} AND target_entity_id=${identity[0].entity_id} AND state='PENDING' AND expires_at>now() LIMIT 1`;
 if(!exists.length) await sql`INSERT INTO legax.community_invitations(invitation_id,community_entity_id,target_entity_id,relationship_type,invitation_kind,state,message,created_by_entity_id) VALUES(${crypto.randomUUID()},${communityId},${identity[0].entity_id},'MEMBER','SELF_REQUEST','PENDING','Requested through LegaX community discovery.',${identity[0].entity_id})`;
 return new Response(null,{status:303,headers:{location:"/communities"}});
}

async function contexts(env:AuthEnv,kind:"provider"|"organization"):Promise<Response>{
 const sql=db(env), type=kind==="provider"?"PROVIDER":"ORGANIZATION";
 const rows=kind==="provider"
  ? await sql`SELECT e.entity_id,e.display_name,p.onboarding_state,p.created_at FROM legax.provider_profiles p JOIN legax.entities e ON e.entity_id=p.provider_entity_id ORDER BY p.created_at DESC LIMIT 50`
  : await sql`SELECT e.entity_id,e.display_name,p.onboarding_state,p.created_at FROM legax.organization_profiles p JOIN legax.entities e ON e.entity_id=p.organization_entity_id ORDER BY p.created_at DESC LIMIT 50`;
 const cards=rows.map((r:any)=>`<article class="ops-card"><strong>${esc(String(r.display_name||type))}</strong><span>Operating context ready for configuration.</span><b>${esc(String(r.onboarding_state))}</b></article>`).join("");
 const label=kind==="provider"?"Providers":"Organizations";
 return page(label,"Overview",shell(label,kind==="provider"?"20C · Provider network":"20B · Organization network",kind==="provider"?"Providers expose services, teams, capacity, delivery and customer operations.":"Organizations operate governance, teams, work, resources and services.",`<div class="ops-grid">${cards||"<section class=notice>No "+label.toLowerCase()+" has joined yet. The creation workflow is ready.</section>"}</div><form class="ops-form" method="post"><input type="hidden" name="action" value="create-context"><label>Name<input name="name" required maxlength="160" placeholder="Your ${kind} name"></label><button type="submit">Create ${kind} operating context</button></form>`));
}

async function services(env:AuthEnv):Promise<Response>{
 const sql=db(env);const rows=await sql`SELECT service_id,canonical_name,description,lifecycle_state,native_or_provider_mode FROM legax.services ORDER BY canonical_name`;
 const cards=rows.map((r:any)=>`<article class="ops-card"><strong>${esc(String(r.canonical_name))}</strong><span>${esc(String(r.description||"Governed LegaService"))}</span><b>${esc(String(r.lifecycle_state))} · ${esc(String(r.native_or_provider_mode))}</b></article>`).join("");
 return page("LegaServices","Services",shell("LegaServices","Real service registry","These are canonical LegaService records, not decorative cards. Service offerings, availability and provider delivery remain separate operational records.",`<div class="ops-grid">${cards}</div>`));
}

async function market(env:AuthEnv):Promise<Response>{
 const sql=db(env);const rows=await sql`SELECT p.product_id,p.name,p.description,p.product_type,p.base_price,p.currency_code,v.variant_id,v.name AS variant_name,v.price AS variant_price,v.currency_code AS variant_currency,COALESCE(i.quantity_available,0) AS quantity_available FROM legax.commerce_products p LEFT JOIN legax.commerce_variants v ON v.product_id=p.product_id AND v.lifecycle_state='ACTIVE' LEFT JOIN legax.commerce_inventory i ON i.variant_id=v.variant_id WHERE p.publication_state='PUBLIC' AND p.lifecycle_state='ACTIVE' ORDER BY p.created_at DESC LIMIT 100`;
 const cards=rows.map((r:any)=>`<article class="ops-card"><strong>${esc(String(r.name))}</strong><span>${esc(String(r.description||"Product"))}</span><span>${esc(String(r.variant_name||"Default"))} · ${r.variant_price??r.base_price??"Price on request"} ${esc(String(r.variant_currency||r.currency_code||""))}</span><b>${Number(r.quantity_available)>0?"AVAILABLE":"UNAVAILABLE"} · qty ${esc(String(r.quantity_available))}</b></article>`).join("");
 return page("LegaMarket","Services",shell("LegaMarket","Commerce","Products expose what is offered; availability is evaluated separately; delivery is a separate fulfillment commitment.",`<div class="ops-grid">${cards||"<section class=notice>No public products are published yet. Providers and organizations can create them from their operating context.</section>"}</div>`));
}

async function orders(env:AuthEnv,account:any):Promise<Response>{
 const sql=db(env);const rows=await sql`SELECT o.order_id,o.order_state,o.payment_state,o.fulfillment_state,o.total_amount,o.currency_code,o.created_at FROM legax.commerce_orders o JOIN legax.accounts a ON a.account_id=${account.account_id} JOIN legax.identities i ON i.identity_id=a.identity_id WHERE o.buyer_entity_id=i.entity_id ORDER BY o.created_at DESC LIMIT 50`;
 const cards=rows.map((r:any)=>`<article class="ops-card"><strong>Order ${esc(String(r.order_id).slice(0,8))}</strong><span>${esc(String(r.total_amount))} ${esc(String(r.currency_code||""))}</span><b>${esc(String(r.order_state))} · ${esc(String(r.payment_state))} · ${esc(String(r.fulfillment_state))}</b></article>`).join("");
 return page("Orders","Services",shell("Orders","Commerce","Order, payment and fulfillment states remain separate so a payment or provider response never masquerades as delivery.",`<div class="ops-grid">${cards||"<section class=notice>No orders yet.</section>"}</div>`));
}

async function settings(env:AuthEnv,account:any):Promise<Response>{
 const sql=db(env);
 if(account && false) return page("Settings","Account","");
 const rows=await sql`SELECT language,appearance,compact_mode,notifications,privacy FROM legax.account_settings WHERE account_id=${account.account_id} LIMIT 1`;
 const s=rows[0]||{language:"en",appearance:"system",compact_mode:false,notifications:{},privacy:{}};
 return page("Settings","Account",shell("Account settings","Personal control plane","Personal settings remain separate from community, organization and provider administration.",`<form class="ops-form"><h2>Preferences</h2><label>Language<select><option selected>${esc(String(s.language))}</option></select></label><label>Appearance<select><option selected>${esc(String(s.appearance))}</option></select></label><label>Compact mode<input type="checkbox" ${s.compact_mode?"checked":""} disabled></label><div class="notice">Security, notification and privacy settings are governed separately from operating-context authority.</div></form>`));
}
