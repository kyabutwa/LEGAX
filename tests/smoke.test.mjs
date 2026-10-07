import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const read=(path)=>readFile(new URL(path,import.meta.url),"utf8");

test("Phase 33 control-plane UI is governed and routed",async()=>{
 const contracts=await read("../src/core/contracts.ts");
 const runtime=await read("../src/core/runtime.ts");
 const worker=await read("../src/index.ts");
 const page=await read("../src/ui/page.ts");
 const shell=await read("../src/ui/app-shell.ts");
 const control=await read("../src/ui/control-plane.ts");

 assert.match(contracts,/noAuthorizationNoConsequentialAction:\s*true/);
 assert.match(contracts,/noParallelAuthorityChain:\s*true/);
 assert.match(contracts,/noParallelExecutionEngine:\s*true/);
 assert.match(contracts,/unknownExternalOutcomeIsNotSuccess:\s*true/);
 assert.match(runtime,/decision\.effect !== "ALLOW"/);
 assert.match(worker,/renderControlPlane/);
 assert.match(worker,/\/api\/health/);
 assert.match(worker,/\/api\/runtime-contract/);
 assert.match(worker,/\/api\/database\/health/);
 assert.match(worker,/readCanonicalDatabaseStatus/);
 assert.match(worker,/CAPABILITY_NOT_IMPLEMENTED/);

 for(const path of ["\/identity","\/people","\/participation","\/communities","\/organizations","\/providers","\/places","\/units","\/resources","\/services","\/access","\/requests","\/activity","\/evidence","\/commerce","\/account","\/administration"]){
  assert.match(control,new RegExp(path.replace("\\/","\\/")));
 }
 assert.match(page,/Open LegaX navigation/);
 assert.match(page,/Primary navigation/);
 assert.match(page,/prefers-reduced-motion/);
 assert.match(page,/mark-logo/);
 assert.match(page,/raw\.githubusercontent\.com\/kyabutwa\/LEGAX\/main\/IMG_1700\.jpeg/);
 assert.match(shell,/renderControlPlane/);
 assert.match(control,/No authoritative records are loaded into this surface/);
 assert.match(control,/UI presents authority; UI does not create authority/);
 assert.match(control,/Context \/ authorization required/);
});

test("Phase 33 runtime has no legacy product names",async()=>{
 const files=["../src/core/contracts.ts","../src/core/runtime.ts","../src/http/problem.ts","../src/index.ts","../src/ui/page.ts","../src/ui/app-shell.ts","../src/ui/people.ts","../src/ui/control-plane.ts","../src/data/database.ts","../db/migrations/0005_canonical_legax_schema.sql","../wrangler.jsonc","../package.json"];
 for(const file of files){const content=await read(file);assert.doesNotMatch(content,/LegaKeys|LegaPin/);}
});

test("Canonical schema migration remains explicit and non-duplicating",async()=>{
 const migration=await read("../db/migrations/0005_canonical_legax_schema.sql");
 assert.match(migration,/ALTER SCHEMA legakeys RENAME TO legax/);
 assert.match(migration,/product_name = 'LegaX'/);
 assert.match(migration,/canonical_schema = 'legax'/);
 assert.doesNotMatch(migration,/CREATE SCHEMA legax/);
});
