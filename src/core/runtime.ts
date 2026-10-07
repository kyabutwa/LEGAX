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

export function assertConsequentialExecution(
  decision: AuthorizationDecision | undefined
): asserts decision is AuthorizationDecision {
  if (!decision || decision.effect !== "ALLOW") {
    throw new Error("NO_AUTHORIZATION");
  }
}

export function bindCommand(
  input: Omit<CommandEnvelope, "commandId" | "createdAt">
): CommandEnvelope {
  return {
    ...input,
    commandId: crypto.randomUUID(),
    createdAt: new Date().toISOString()
  };
}
