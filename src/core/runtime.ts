import type {
  AuthorizationDecision,
  CommandEnvelope,
  RequestContext
} from "./contracts";

export function createRequestContext(request: Request): RequestContext {
  return {
    requestId: request.headers.get("x-request-id") ?? crypto.randomUUID(),
    traceId: request.headers.get("traceparent") ?? undefined
  };
}

function hasText(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export function assertConsequentialExecution(
  decision: AuthorizationDecision | undefined
): asserts decision is AuthorizationDecision {
  if (
    !decision ||
    decision.effect !== "ALLOW" ||
    !hasText(decision.authorizationId) ||
    !hasText(decision.reasonCode) ||
    !hasText(decision.decidedAt)
  ) {
    throw new Error("NO_AUTHORIZATION");
  }
}

export function bindCommand(
  input: Omit<CommandEnvelope, "commandId" | "createdAt">
): CommandEnvelope {
  const requiredFields: Array<[string, unknown]> = [
    ["commandType", input.commandType],
    ["requestId", input.requestId],
    ["authorizationId", input.authorizationId],
    ["idempotencyKey", input.idempotencyKey]
  ];

  for (const [field, value] of requiredFields) {
    if (!hasText(value)) {
      throw new Error(`INVALID_COMMAND_${field.toUpperCase()}`);
    }
  }

  if (
    input.expectedVersion !== undefined &&
    (!Number.isSafeInteger(input.expectedVersion) || input.expectedVersion < 0)
  ) {
    throw new Error("INVALID_COMMAND_EXPECTED_VERSION");
  }

  return {
    ...input,
    commandId: crypto.randomUUID(),
    createdAt: new Date().toISOString()
  };
}
