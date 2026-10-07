export type LifecycleState =
  | "DRAFT"
  | "READY"
  | "PENDING"
  | "AUTHORIZED"
  | "IN_PROGRESS"
  | "BLOCKED"
  | "SUCCEEDED"
  | "FAILED"
  | "UNKNOWN"
  | "RECONCILIATION_REQUIRED"
  | "CANCELLED"
  | "EXPIRED";

export type AuthorizationEffect = "ALLOW" | "DENY" | "INDETERMINATE" | "PENDING";

export interface RequestContext {
  requestId: string;
  actorId?: string;
  accountId?: string;
  identityId?: string;
  participantId?: string;
  participationId?: string;
  contextId?: string;
  authenticationId?: string;
  authorizationId?: string;
  traceId?: string;
}

export interface AuthorizationDecision {
  authorizationId: string;
  effect: AuthorizationEffect;
  decidedAt: string;
  policyVersion?: string;
  reasonCode: string;
}

export interface CommandEnvelope {
  commandId: string;
  commandType: string;
  requestId: string;
  actorId?: string;
  targetId?: string;
  authorizationId: string;
  idempotencyKey: string;
  expectedVersion?: number;
  createdAt: string;
}

export interface CanonicalError {
  type: string;
  title: string;
  status: number;
  code: string;
  detail: string;
  requestId: string;
}

export const CORE_RULES = Object.freeze({
  noAuthorizationNoConsequentialAction: true,
  noParallelAuthorityChain: true,
  noParallelExecutionEngine: true,
  noParallelSourceOfTruth: true,
  unknownExternalOutcomeIsNotSuccess: true
});
