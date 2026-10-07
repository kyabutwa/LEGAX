import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const read = (path) => readFile(new URL(path, import.meta.url), "utf8");

test("Phase 33 runtime contract is fail-closed", async () => {
  const contracts = await read("../src/core/contracts.ts");
  const runtime = await read("../src/core/runtime.ts");
  const worker = await read("../src/index.ts");
  const shell = await read("../src/ui/app-shell.ts");
  const page = await read("../src/ui/page.ts");
  const people = await read("../src/ui/people.ts");

  assert.match(contracts, /noAuthorizationNoConsequentialAction:\s*true/);
  assert.match(contracts, /noParallelAuthorityChain:\s*true/);
  assert.match(contracts, /noParallelExecutionEngine:\s*true/);
  assert.match(contracts, /unknownExternalOutcomeIsNotSuccess:\s*true/);
  assert.match(runtime, /decision\.effect !== "ALLOW"/);
  assert.match(worker, /"\/"/);
  assert.match(worker, /renderAppShell/);
  assert.match(worker, /"\/people"/);
  assert.match(worker, /renderPeople/);
  assert.match(worker, /"\/api\/health"/);
  assert.match(worker, /"\/api\/runtime-contract"/);
  assert.match(worker, /"\/api\/database\/health"/);
  assert.match(worker, /readCanonicalDatabaseStatus/);
  assert.match(worker, /CAPABILITY_NOT_IMPLEMENTED/);

  assert.match(shell, /Welcome Home/);
  assert.match(shell, /Bienvenue chez vous/);
  assert.match(shell, /renderLegaXPage/);
  assert.match(page, /aria-label="Open LegaX navigation"/);
  assert.match(page, /aria-label="Primary navigation"/);
  assert.match(page, /prefers-reduced-motion/);
  assert.match(page, /content-type.*text\\/html/);
  assert.match(people, /People & relationships/);
  assert.match(people, /Context required/);
  assert.match(people, /No people are loaded into this view/);
  assert.match(people, /authoritative read/);
});

test("Phase 33 has no legacy product names in runtime files", async () => {
  const files = [
    "../src/core/contracts.ts",
    "../src/core/runtime.ts",
    "../src/http/problem.ts",
    "../src/index.ts",
    "../src/ui/page.ts",
    "../src/ui/app-shell.ts",
    "../src/ui/people.ts",
    "../src/data/database.ts",
    "../db/migrations/0005_canonical_legax_schema.sql",
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
