import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import ts from "typescript";

const runtimeSource = await readFile(
  new URL("../src/core/runtime.ts", import.meta.url),
  "utf8"
);
const compiled = ts.transpileModule(runtimeSource, {
  compilerOptions: {
    target: ts.ScriptTarget.ES2022,
    module: ts.ModuleKind.ESNext
  }
}).outputText;
const runtime = await import(
  `data:text/javascript;base64,${Buffer.from(compiled).toString("base64")}`
);

const allowedDecision = {
  authorizationId: "authz-123",
  effect: "ALLOW",
  decidedAt: "2026-10-08T00:00:00.000Z",
  reasonCode: "POLICY_ALLOWED"
};

test("request context preserves supplied request and trace identifiers", () => {
  const context = runtime.createRequestContext(new Request("https://legax.test/", {
    headers: {
      "x-request-id": "req-123",
      traceparent: "00-4bf92f3577b34da6a3ce929d0e0e4736-00f067aa0ba902b7-01"
    }
  }));
  assert.equal(context.requestId, "req-123");
  assert.equal(context.traceId, "00-4bf92f3577b34da6a3ce929d0e0e4736-00f067aa0ba902b7-01");
});

test("request context generates a request identifier when one is absent", () => {
  const context = runtime.createRequestContext(new Request("https://legax.test/"));
  assert.equal(typeof context.requestId, "string");
  assert.ok(context.requestId.length > 0);
});

test("only a structurally complete ALLOW decision permits consequential execution", () => {
  assert.doesNotThrow(() => runtime.assertConsequentialExecution(allowedDecision));
  for (const effect of ["DENY", "INDETERMINATE", "PENDING"]) {
    assert.throws(
      () => runtime.assertConsequentialExecution({ ...allowedDecision, effect }),
      { message: "NO_AUTHORIZATION" }
    );
  }
  assert.throws(() => runtime.assertConsequentialExecution(undefined), {
    message: "NO_AUTHORIZATION"
  });
});

test("malformed ALLOW decisions fail closed", () => {
  for (const patch of [
    { authorizationId: "" },
    { reasonCode: "   " },
    { decidedAt: "" }
  ]) {
    assert.throws(
      () => runtime.assertConsequentialExecution({ ...allowedDecision, ...patch }),
      { message: "NO_AUTHORIZATION" }
    );
  }
});

test("command binding preserves authorization and idempotency references", () => {
  const input = {
    commandType: "COMMUNITY_JOIN_REQUEST",
    requestId: "req-123",
    actorId: "actor-123",
    targetId: "community-123",
    authorizationId: "authz-123",
    idempotencyKey: "idem-123",
    expectedVersion: 0
  };
  const command = runtime.bindCommand(input);
  assert.equal(command.commandType, input.commandType);
  assert.equal(command.requestId, input.requestId);
  assert.equal(command.authorizationId, input.authorizationId);
  assert.equal(command.idempotencyKey, input.idempotencyKey);
  assert.equal(command.expectedVersion, 0);
  assert.ok(command.commandId);
  assert.ok(Number.isFinite(Date.parse(command.createdAt)));
});

test("command binding rejects missing authorization and idempotency bindings", () => {
  const base = {
    commandType: "COMMUNITY_JOIN_REQUEST",
    requestId: "req-123",
    authorizationId: "authz-123",
    idempotencyKey: "idem-123"
  };
  for (const patch of [
    { authorizationId: "" },
    { idempotencyKey: "  " },
    { requestId: "" },
    { commandType: "" }
  ]) {
    assert.throws(() => runtime.bindCommand({ ...base, ...patch }), /^Error: INVALID_COMMAND_/);
  }
});

test("command binding rejects invalid expected versions", () => {
  const base = {
    commandType: "COMMUNITY_JOIN_REQUEST",
    requestId: "req-123",
    authorizationId: "authz-123",
    idempotencyKey: "idem-123"
  };
  for (const expectedVersion of [-1, 1.5, Number.MAX_SAFE_INTEGER + 1]) {
    assert.throws(
      () => runtime.bindCommand({ ...base, expectedVersion }),
      { message: "INVALID_COMMAND_EXPECTED_VERSION" }
    );
  }
});
