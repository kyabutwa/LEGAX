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
  assert.match(worker, /"\/"/);\n  assert.match(worker, /renderAppShell/);\n  assert.match(worker, /"\/api\/health"/);
  assert.match(worker, /"\/api\/runtime-contract"/);\n  assert.match(worker, /"\/api\/database\/health"/);\n  assert.match(worker, /readCanonicalDatabaseStatus/);\n\n  const shell = await read("../src/ui/app-shell.ts");\n  assert.match(shell, /Welcome Home/);\n  assert.match(shell, /Bienvenue chez vous/);\n  assert.match(shell, /aria-label="Open LegaX navigation"/);\n  assert.match(shell, /prefers-reduced-motion/);\n  assert.match(shell, /content-type.*text\/html/);
  assert.match(worker, /CAPABILITY_NOT_IMPLEMENTED/);
});

test("Phase 33 has no legacy product names in runtime files", async () => {
  const files = [
    "../src/core/contracts.ts",
    "../src/core/runtime.ts",
    "../src/http/problem.ts",
    "../src/index.ts",\n    "../src/data/database.ts",\n    "../db/migrations/0005_canonical_legax_schema.sql",
    "../wrangler.jsonc",
    "../package.json"
  ];

  for (const file of files) {
    const content = await read(file);
    assert.doesNotMatch(content, /LegaKeys|LegaPin/);
  }
});

test("Canonical schema migration is explicit and non-duplicating", async () => {
  const migration = await read("../db/migrations/0005_canonical_legax_schema.sql");
  assert.match(migration, /ALTER SCHEMA legakeys RENAME TO legax/);
  assert.match(migration, /product_name = 'LegaX'/);
  assert.match(migration, /canonical_schema = 'legax'/);
  assert.doesNotMatch(migration, /CREATE SCHEMA legax/);
});
