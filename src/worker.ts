import { readCanonicalDatabaseStatus } from "./data/database";
import { CORE_RULES } from "./core/contracts";
import { createRequestContext } from "./core/runtime";
import { problem } from "./http/problem";
import { renderControlPlane } from "./ui/control-plane";
import { renderLandingPage } from "./ui/landing";
import { handleAccountEntry } from "./account-entry-v2";
import { renderJoin } from "./join";
import { handleOnboarding } from "./onboarding-entry";
export interface Env { ENVIRONMENT:string; DATABASE_URL?:string; }
function json(data:unknown,requestId:string,status=200){return new Response(JSON.stringify(data),{status,headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store","x-request-id":requestId}});}
export default {async fetch(request:Request,env:Env):Promise<Response>{
 let requestId="unknown",pathname="unknown";
 try{
  const context=createRequestContext(request),url=new URL(request.url);requestId=context.requestId;pathname=url.pathname;
  if(pathname==="/account"||pathname==="/account/")return handleAccountEntry(request,env);
  if(pathname==="/join"||pathname==="/join/")return renderJoin();
  if(pathname==="/onboarding"||pathname==="/onboarding/")return handleOnboarding(request,env);
  if(request.method==="GET"&&pathname==="/")return renderLandingPage();
  if(request.method==="GET"&&!pathname.startsWith("/api/"))return renderControlPlane(pathname);
  if(request.method==="GET"&&pathname==="/api/health")return json({service:"legax",status:"ok",environment:env.ENVIRONMENT,runtime:"cloudflare-workers",phase:33,implementation:"canonical-foundation"},requestId);
  if(request.method==="GET"&&pathname==="/api/database/health"){try{return json({service:"legax",status:"ok",database:await readCanonicalDatabaseStatus(env)},requestId);}catch(error){const code=error instanceof Error?error.message:"DATABASE_ERROR";return problem(requestId,503,code,"Canonical database unavailable","The LegaX runtime cannot establish a verified connection to the canonical database contract.");}}
  if(request.method==="GET"&&pathname==="/api/runtime-contract")return json({phase:33,state:"IMPLEMENTED_FOUNDATION",rules:CORE_RULES,canonicalFlow:"REQUEST → AUTHENTICATION → CONTEXT → AUTHORIZATION → COMMAND → CORE EXECUTION → EVENT → EVIDENCE"},requestId);
  if(pathname.startsWith("/api/"))return problem(requestId,501,"CAPABILITY_NOT_IMPLEMENTED","Capability not implemented","This endpoint is intentionally unavailable until its canonical domain contract and runtime dependencies are implemented.");
  return problem(requestId,404,"NOT_FOUND","Not found","The requested resource does not exist.");
 }catch(error){console.error("LegaX Worker request failed",{requestId,method:request.method,pathname,error});return new Response(JSON.stringify({type:"about:blank",title:"Internal Server Error",status:500,requestId}),{status:500,headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store","x-request-id":requestId,"x-legax-runtime-error":"true"}});}
}};