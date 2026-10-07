import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const read = (path) => readFile(new URL(path, import.meta.url), "utf8");

test("Phase 33 runtime contract is fail-closed", async () => {
  const contracts = await read("../src/core/contracts.ts");
  const runtime = await read("../src/core/runtime.ts");
  const worker = await read("../src/index.ts");

  assert.match(contracts, /noAuthorizationNoConsequentialAction:\s*true/);
  assert.match(contracts, /noParallelAuthorityChain:\s*true/);
  assert.match(contracts, /noParallelExecutionEngine:\s*true/);
  assert.match(contracts, /unknownExternalOutcomeIsNotSuccess:\s*true/);
  assert.match(runtime, /decision\.effect !== "ALLOW"/);
  assert.match(worker, /"\/api\/health"/);
  assert.match(worker, /"\/api\/runtime-contract"/);
  assert.match(worker, /CAPABILITY_NOT_IMPLEMENTED/);
});

test("Phase 33 has no legacy product names in runtime files", async () => {
  const files = [
    "../src/core/contracts.ts",
    "../src/core/runtime.ts",
    "../src/http/problem.ts",
    "../src/index.ts",
    "../wrangler.jsonc",
    "../package.json"
  ];

  for (const file of files) {
    const content = await read(file);
    assert.doesNotMatch(content, /LegaKeys|LegaPin/);
  }
});
