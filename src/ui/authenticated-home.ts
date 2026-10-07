import { renderLegaXPage } from "./page";

type AccountView={display_name?:string;account_id:string;verification_state?:string};

const entryCards=[
 ["Participant","Join as a Participant","Resident and other participant relationships.","/onboarding?intent=participant","Available"],
 ["Community","Join a Community","Enter an existing community through its governed joining process.","/onboarding?intent=join-community","Invitation required"],
 ["Community management","Join as a Community","Enter the 20A community operating context.","/onboarding?intent=community","Governed workflow"],
 ["Provider","Join as a Provider","Enter the 20C provider service-delivery context.","/onboarding?intent=provider","Governed workflow"],
 ["Organization","Join as an Organization","Enter the 20B organization governance context.","/onboarding?intent=organization","Governed workflow"]
] as const;

const surfaces=[
 ["Identity","/identity"],["People","/people"],["Participation","/participation"],
 ["Communities","/communities"],["Organizations","/organizations"],["Providers","/providers"],
 ["Places","/places"],["Resources","/resources"],["LegaServices","/services"],
 ["Access","/access"],["Requests","/requests"],["Activity","/activity"],
 ["Evidence","/evidence"],["Commerce","/commerce"],["Account","/account"]
] as const;

function esc(v:string){return v.replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]||c));}

export function renderAuthenticatedHome(account:AccountView):Response{
 const name=esc(String(account.display_name||"Account"));
 const entries=entryCards.map(([title,description,detail,href,state])=>`<a class="entry-card" href="${href}"><span class="kicker">${title}</span><strong>${description}</strong><span>${detail}</span><b>${state}</b></a>`).join("");
 const nav=surfaces.map(([title,href])=>`<a class="surface-card" href="${href}">${title}</a>`).join("");
 const content=`<section class="page-hero"><p class="eyebrow">Authenticated LegaX home</p><h1>Welcome home, ${name}.</h1><p class="lede">Your LegaX account is authenticated. From here, identity, participation, operating contexts and LegaX surfaces stay connected without collapsing authentication into authority.</p></section>
<section class="account-grid"><article class="account-card"><span class="kicker">Account</span><strong>${name}</strong><span>${esc(String(account.account_id))}</span><span>Identity verification: ${esc(String(account.verification_state||"UNKNOWN"))}</span></article><article class="account-card"><span class="kicker">Session</span><strong>Authenticated</strong><span>Secure session is active.</span><span>Authentication does not itself grant authorization.</span></article></section>
<section class="panel" style="margin-top:18px"><p class="kicker">Your next governed context</p><h2>Continue into LegaX</h2><p>Choose a relationship or operating context only when it matches what you are actually entering. The available participant flow can establish participation; the other paths remain governed workflows rather than pretending to be complete.</p><div class="entry-grid">${entries}</div></section>
<section class="panel" style="margin-top:18px"><p class="kicker">LegaX operating surfaces</p><h2>Explore the foundation</h2><p>These surfaces are connected to the same canonical UI and runtime boundary. They show authoritative data only when the corresponding read/context implementation exists.</p><div class="surface-grid">${nav}</div></section>
<section class="account-next"><strong>Canonical boundary</strong><span>Identity ≠ Account ≠ Participant. Authentication ≠ Authorization. UI presents authority; UI does not create authority.</span><a class="button secondary" href="/account">Manage account</a></section>
<style>
.entry-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;margin-top:18px}.entry-card{display:flex;flex-direction:column;gap:8px;padding:20px;border:1px solid var(--line);border-radius:20px;background:var(--surface)}.entry-card strong{font-size:18px}.entry-card span:not(.kicker){color:var(--muted);line-height:1.45}.entry-card b{font-size:10px;letter-spacing:.09em;text-transform:uppercase;color:var(--dim)}.surface-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px;margin-top:18px}.surface-card{padding:16px;border:1px solid var(--line);border-radius:16px;background:rgba(255,255,255,.025);color:var(--muted)}.surface-card:hover{color:var(--text);background:rgba(255,255,255,.06)}@media(max-width:820px){.entry-grid,.surface-grid{grid-template-columns:1fr}}
</style>`;
 return renderLegaXPage({title:"Welcome Home",active:"Overview",content});
}
