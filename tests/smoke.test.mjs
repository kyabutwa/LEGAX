import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const read=(path)=>readFile(new URL(path,import.meta.url),"utf8");

test("Phase 33 canonical runtime and account entry are wired",async()=>{
 const contracts=await read("../src/core/contracts.ts");
 const runtime=await read("../src/core/runtime.ts");
 const worker=await read("../src/worker.ts");
 const auth=await read("../src/auth.ts");
 const account=await read("../src/account-entry-v2.ts");
 const recovery=await read("../src/recovery.ts");
 const join=await read("../src/join.ts");
 const onboarding=await read("../src/onboarding-entry.ts");
 const landing=await read("../src/ui/landing.ts");
 assert.match(contracts,/noAuthorizationNoConsequentialAction:\s*true/);
 assert.match(contracts,/noParallelAuthorityChain:\s*true/);
 assert.match(contracts,/noParallelExecutionEngine:\s*true/);
 assert.match(runtime,/decision\.effect !== "ALLOW"/);
 assert.match(worker,/handleAccountEntry/);
 assert.match(worker,/handleRecovery/);
 assert.match(worker,/\/api\/health/);
 assert.match(worker,/\/api\/database\/health/);
 assert.match(auth,/PBKDF2/);
 assert.match(auth,/PASSWORD_CONFIRMATION_MISMATCH/);
 assert.match(auth,/primary_credential_id/);
 assert.match(account,/Confirm password/);
 assert.match(account,/Forgot password/);
 assert.match(recovery,/account_recovery_challenges/);
 assert.match(recovery,/Reset password/);
 assert.match(recovery,/password_confirmation/);
 assert.match(join,/Join as a Participant/);
 assert.match(join,/Join a Community/);
 assert.match(join,/Join as a Community/);
 assert.match(join,/Join as a Provider/);
 assert.match(join,/Join as an Organization/);
 assert.match(onboarding,/legax\.participations/);
 assert.match(onboarding,/legax\.participants/);
 assert.match(landing,/Choose your LegaX path/);
 assert.match(landing,/real LegaX account/);
 assert.doesNotMatch(landing,/dashboard|social proof|testimonials/i);
});

test("Phase 33 runtime has no legacy product names",async()=>{
 const files=[
  "../src/core/contracts.ts","../src/core/runtime.ts","../src/http/problem.ts",
  "../src/worker.ts","../src/ui/page.ts","../src/ui/app-shell.ts","../src/ui/people.ts",
  "../src/ui/control-plane.ts","../src/ui/landing.ts","../src/data/database.ts",
  "../src/auth.ts","../src/account-entry-v2.ts","../src/recovery.ts",
  "../db/migrations/0005_canonical_legax_schema.sql","../wrangler.jsonc","../package.json"
 ];
 for(const file of files){const content=await read(file);assert.doesNotMatch(content,/LegaKeys|LegaPin/);}
});

test("Canonical migration is non-duplicating",async()=>{
 const migration=await read("../db/migrations/0005_canonical_legax_schema.sql");
 assert.match(migration,/ALTER SCHEMA legakeys RENAME TO legax/);
 assert.match(migration,/product_name = 'LegaX'/);
 assert.match(migration,/canonical_schema = 'legax'/);
 assert.doesNotMatch(migration,/CREATE SCHEMA legax/);
});
