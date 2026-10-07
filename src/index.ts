import { readCanonicalDatabaseStatus } from "./data/database";
import { CORE_RULES } from "./core/contracts";
import { createRequestContext } from "./core/runtime";
import { problem } from "./http/problem";
import { renderControlPlane } from "./ui/control-plane";
import { handleAccount } from "./account";

export interface Env { ENVIRONMENT:string; DATABASE_URL?:string; }

function json(data:unknown,requestId:string,status=200):Response{
 return new Response(JSON.stringify(data),{status,headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store","x-request-id":requestId}});
}

export default {async fetch(request:Request,env:Env):Promise<Response>{
 const context=createRequestContext(request); const url=new URL(request.url);
 if(url.pathname==="/account" || url.pathname==="/account/") return handleAccount(request,env);
 if(request.method==="GET" && !url.pathname.startsWith("/api/")) return renderControlPlane(url.pathname);
 if(request.method==="GET" && url.pathname==="/api/health") return json({service:"legax",status:"ok",environment:env.ENVIRONMENT,runtime:"cloudflare-workers",phase:33,implementation:"canonical-foundation"},context.requestId);
 if(request.method==="GET" && url.pathname==="/api/database/health"){
  try{return json({service:"legax",status:"ok",database:await readCanonicalDatabaseStatus(env)},context.requestId);}
  catch(error){const code=error instanceof Error?error.message:"DATABASE_ERROR";return problem(context.requestId,503,code,"Canonical database unavailable","The LegaX runtime cannot establish a verified connection to the canonical database contract.");}
 }
 if(request.method==="GET" && url.pathname==="/api/runtime-contract") return json({phase:33,state:"IMPLEMENTED_FOUNDATION",rules:CORE_RULES,canonicalFlow:"REQUEST → AUTHENTICATION → CONTEXT → AUTHORIZATION → COMMAND → CORE EXECUTION → EVENT → EVIDENCE",deferredUntilCanonicalDependencies:["authentication","authorization-runtime","core-execution"]},context.requestId);
 if(url.pathname.startsWith("/api/")) return problem(context.requestId,501,"CAPABILITY_NOT_IMPLEMENTED","Capability not implemented","This endpoint is intentionally unavailable until its canonical domain contract and runtime dependencies are implemented.");
 return problem(context.requestId,404,"NOT_FOUND","Not found","The requested resource does not exist.");
}};
