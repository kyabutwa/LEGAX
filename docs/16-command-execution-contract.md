# LegaX — Command & Execution Contract

## 16 — Command & Execution Contract

**Status:** Foundational execution architecture contract — defines how an authorized intent becomes an executable command and how consequential execution is bounded, retried, reconciled, compensated, and evidenced.

## 1. Purpose

Phase 16 closes the most important gap between semantic architecture and real-world execution.

Phases 01–15 establish what LegaX means, who relates to whom, what authority exists, how authorization is decided, how access is enforced, and how state transitions are governed.

This phase defines what happens **after authorization** and before, during, and after the consequential effect.

The governing problem is:

> An authorization decision is permission, not execution.

A safe execution architecture must prevent:

- executing a stale authorization;
- executing the wrong action or target;
- executing the same consequential command twice;
- committing database state while losing the corresponding event;
- publishing an event for a transaction that later rolls back;
- performing an external side effect inside a database transaction;
- retrying an unknown external outcome as though failure were proven;
- allowing concurrency to overwrite a material state change;
- treating provider acknowledgement as canonical completion;
- compensating by silently rewriting history;
- allowing an AI output, UI action, cached state, or provider assertion to bypass the execution contract.

Phase 16 therefore establishes a canonical command lifecycle, execution envelope, idempotency model, authorization binding, execution gates, transaction boundaries, side-effect boundaries, retry policy, concurrency model, outcome taxonomy, compensation, event/evidence guarantees, reconciliation, and operational controls.

## 2. Architectural position

The canonical control chain becomes:

**INTENT → TRANSITION REQUEST → AUTHORIZATION REQUEST → AUTHORIZATION DECISION → COMMAND → EXECUTION GATES → EXECUTION → OUTCOME → STATE → EVENT → EVIDENCE → RECONCILIATION**

For a purely local database operation:

**AUTHORIZED INTENT → COMMAND → PRECONDITIONS → DB TRANSACTION → STATE MUTATION + OUTBOX → COMMIT → EVENT DELIVERY**

For an external operation:

**AUTHORIZED INTENT → COMMAND → EXECUTION GATES → LOCAL COMMIT/OUTBOX → EXTERNAL EFFECT → PROVIDER/OBSERVED OUTCOME → RECONCILIATION → CANONICAL STATE**

For a physical operation:

**AUTHORIZED INTENT → COMMAND → ACCESS DECISION → ENFORCEMENT COMMAND → CONTROLLER/DEVICE → PHYSICAL OBSERVATION → RECONCILIATION**

For a multi-domain workflow:

**COMMAND → LOCAL COMMIT → EVENT → NEXT COMMAND → LOCAL/EXTERNAL EXECUTION → EVENT → RECONCILIATION/COMPENSATION**

No architecture may collapse these stages merely because a happy-path implementation makes them appear equivalent.

## 3. Core definitions

### 3.1 Intent

An **Intent** describes what an actor or governed system wants to accomplish.

Intent is not authorization and is not evidence that anything happened.

### 3.2 Transition Request

A **TransitionRequest** asks a governed state machine to move from one state to another.

### 3.3 Command

A **Command** is a durable, attributable, uniquely identified instruction to attempt a defined consequential operation.

A command is the canonical execution object between authorization and execution.

A command must identify:

- command ID;
- command type;
- command version;
- issuer/source;
- actor;
- identity/account where applicable;
- participation/context where applicable;
- authorization decision;
- authorization version/reference;
- target;
- requested operation;
- intended state transition where applicable;
- idempotency key;
- correlation ID;
- causation ID;
- policy version where material;
- state/version preconditions;
- execution deadline;
- retry policy;
- side-effect class;
- sensitivity;
- required evidence;
- lifecycle;
- current execution status.

### 3.4 Execution

**Execution** is the governed attempt to perform a command.

Execution is not the same as successful completion.

### 3.5 Execution Attempt

An **ExecutionAttempt** is one concrete attempt to perform a command.

A command may have multiple attempts while remaining one logical operation.

### 3.6 Outcome

An **ExecutionOutcome** records what LegaX can establish about an execution attempt.

Canonical outcome classes are:

- SUCCEEDED;
- FAILED;
- REJECTED;
- CANCELLED;
- TIMED_OUT;
- UNKNOWN;
- PENDING;
- RECONCILIATION_REQUIRED;
- COMPENSATION_REQUIRED.

UNKNOWN means LegaX cannot currently establish whether the consequential effect occurred.

UNKNOWN MUST NOT be converted to FAILED merely because the caller timed out.

### 3.7 Effect

An **Effect** is the actual material change produced by execution.

An accepted command is not an effect.

A provider acknowledgement is not automatically proof of the final effect.

### 3.8 Compensation

A **Compensation** is a new governed command intended to mitigate or reverse a prior consequential effect when direct rollback is impossible or inappropriate.

Compensation has its own authorization, execution, event, evidence, idempotency and reconciliation.

## 4. Command is not authorization

Authorization answers:

**May this actor perform this operation against this target under the evaluated conditions?**

Command answers:

**What exact operation is LegaX now instructed to attempt?**

Execution answers:

**What did LegaX actually attempt and what happened?**

These must remain distinct.

An ALLOW decision cannot be used as a generic bearer token for unrelated commands.

An authorization decision is bound to the command-relevant facts that were evaluated.

## 5. Authorization binding

Every consequential command MUST bind to the authorization decision that permits it.

The binding should preserve:

- authorization decision ID;
- decision outcome;
- decision timestamp;
- authorization policy version;
- authority references;
- scope;
- actor;
- account/session;
- participation;
- context;
- action;
- target;
- material request parameters;
- required conditions;
- decision expiry;
- decision consumption semantics.

The command MUST NOT mutate material action or target parameters after authorization without reauthorization.

If material facts change, LegaX must determine whether authorization remains valid.

Material changes include, where applicable:

- target;
- amount;
- resource;
- quantity;
- recipient;
- destination;
- scope;
- actor;
- participation;
- authority;
- role/capability;
- security assurance;
- policy version;
- resource state;
- ownership/control relationship;
- jurisdiction;
- risk;
- approval;
- time window.

## 6. Authorization freshness

An authorization may be:

- time-bounded;
- state-version-bounded;
- policy-version-bounded;
- target-bounded;
- quantity-bounded;
- scope-bounded;
- single-use;
- multi-use under explicit policy.

Freshness is not simply elapsed time.

A command must re-evaluate authorization when a material authorization input becomes stale or changes.

A short-lived authorization does not eliminate concurrency checks.

## 7. Command identity

Every consequential command MUST have a globally unique **command_id**.

The command ID is distinct from:

- request ID;
- authorization ID;
- transition ID;
- execution attempt ID;
- event ID;
- idempotency key;
- correlation ID;
- causation ID.

Recommended conceptual identifiers:

- **request_id** — inbound request identity;
- **intent_id** — business intent identity;
- **authorization_id** — authorization decision identity;
- **command_id** — logical execution instruction identity;
- **attempt_id** — one execution attempt identity;
- **idempotency_key** — duplicate-intent identity for a defined operation boundary;
- **correlation_id** — workflow correlation;
- **causation_id** — immediate causal predecessor;
- **event_id** — occurrence identity.

Identifiers MUST NOT be overloaded merely because they are all unique strings.

## 8. Idempotency contract

Idempotency protects against duplicate consequential effects when the same logical operation is retried.

The canonical rule is:

**Same idempotency scope + same key + semantically equivalent command = same logical operation.**

The system must persist enough information to distinguish:

- first execution;
- duplicate request;
- same key with different material parameters;
- currently executing duplicate;
- completed duplicate;
- expired idempotency record;
- conflicting reuse.

A reused idempotency key with materially different parameters MUST be rejected.

Idempotency records should preserve:

- key;
- scope;
- command fingerprint;
- command ID;
- first-seen time;
- expiry;
- execution status;
- canonical result/reference.

The idempotency window is domain-specific and must be explicit.

## 9. Idempotency is not exactly-once execution

LegaX MUST NOT claim universal exactly-once side effects across distributed systems.

Idempotency can provide a logical single-operation contract while external systems may still have uncertain delivery or duplicate processing behavior.

Therefore:

**Exactly-once business intent ≠ exactly-once network delivery ≠ exactly-once external physical effect.**

Where the external provider supports idempotency, LegaX should propagate a stable provider-safe idempotency token derived from the command contract.

Where it does not, LegaX must use reconciliation and/or provider-specific deduplication strategies.

## 10. Command fingerprint

A consequential command should have a deterministic material-input fingerprint.

The fingerprint should cover the fields that define the semantic operation, such as:

- command type/version;
- target;
- action;
- actor;
- authorization scope;
- material parameters;
- quantity/amount;
- recipient/destination;
- relevant policy version;
- relevant state preconditions.

Non-material transport metadata should not accidentally change semantic equivalence.

Fingerprint mismatch on idempotency-key reuse is a hard conflict.

## 11. Command lifecycle

Canonical command states:

- CREATED;
- VALIDATING;
- AUTHORIZATION_CHECK;
- READY;
- EXECUTING;
- WAITING_EXTERNAL;
- RETRY_SCHEDULED;
- SUCCEEDED;
- FAILED;
- REJECTED;
- CANCEL_REQUESTED;
- CANCELLED;
- TIMED_OUT;
- UNKNOWN;
- RECONCILIATION_REQUIRED;
- COMPENSATION_REQUIRED;
- COMPENSATED;
- EXPIRED.

Not every command uses every state.

Every command type MUST declare its permitted state subset and transitions.

## 12. Command state transition

Canonical lifecycle:

**CREATED → VALIDATING → AUTHORIZATION_CHECK → READY → EXECUTING → OUTCOME**

For external asynchronous work:

**EXECUTING → WAITING_EXTERNAL → PROVIDER/OBSERVED OUTCOME → RECONCILIATION → CANONICAL OUTCOME**

For retryable transient failure:

**EXECUTING → RETRY_SCHEDULED → EXECUTING**

For uncertain outcome:

**EXECUTING → UNKNOWN → RECONCILIATION_REQUIRED → RESOLVED**

For compensation:

**ORIGINAL COMMAND → COMPENSATION_REQUIRED → COMPENSATION COMMAND → EXECUTION → RECONCILIATION**

No transition may skip required governance gates.

## 13. Execution gate architecture

Before a consequential command enters irreversible execution, LegaX should evaluate the applicable gates:

1. command schema validity;
2. command version compatibility;
3. actor attribution;
4. authentication/session validity where required;
5. authorization binding;
6. authorization outcome;
7. authorization freshness;
8. authority validity;
9. scope;
10. target existence/lifecycle;
11. target state;
12. relationship validity;
13. policy version/freshness;
14. required approvals;
15. verification requirements;
16. security/risk conditions;
17. time window;
18. jurisdiction;
19. resource/capacity constraints;
20. concurrency/version;
21. idempotency;
22. execution deadline;
23. external dependency readiness;
24. privacy/data minimization constraints;
25. operational safety constraints.

A gate that returns UNKNOWN, STALE or INDETERMINATE MUST NOT silently pass for a consequential operation unless the command's explicit policy permits bounded continuation.

## 14. Execution gate result

Each gate should produce a structured result:

- PASS;
- FAIL;
- UNKNOWN;
- STALE;
- INDETERMINATE;
- NOT_APPLICABLE;
- REQUIRES_REAUTHORIZATION;
- REQUIRES_APPROVAL;
- REQUIRES_RECONCILIATION.

Gate results must be attributable and reconstructable.

## 15. Pre-execution revalidation

Authorization may have been correct when the command was created but invalid when it executes.

Therefore, immediately before consequential execution, LegaX must revalidate all material conditions that can change.

The canonical pattern is:

**READ CURRENT MATERIAL STATE → VALIDATE COMMAND BINDING → REVALIDATE AUTHORIZATION → CHECK CONCURRENCY → EXECUTE**

For high-risk operations, the revalidation should occur in the same transaction or atomic boundary as the state mutation whenever technically possible.

## 16. Database transaction boundary

A database transaction is the atomic boundary for local state that must change together.

A transaction may include:

- command creation/update;
- idempotency reservation;
- aggregate/resource state mutation;
- transition record;
- local execution record;
- event/outbox record;
- evidence reference;
- version increment.

A transaction MUST NOT hold a database transaction open while waiting on a remote network operation.

The rule is:

**DB atomicity protects LegaX-owned state. It does not make external side effects atomic.**

## 17. Transactional execution pattern

For a local consequential operation:

1. begin transaction;
2. lock or version-check the authoritative aggregate/resource;
3. verify command/idempotency uniqueness;
4. re-check material preconditions;
5. re-check authorization binding where required;
6. apply state mutation;
7. create transition/execution record;
8. create event/outbox record;
9. create evidence references;
10. increment/version the affected state;
11. commit;
12. publish/dispatch committed outbox records asynchronously.

If commit fails, none of the local state changes become canonical.

If commit succeeds, the outbox record guarantees the system has a durable obligation to publish the event.

## 18. Transactional outbox

LegaX should use a transactional outbox for events/messages that are consequences of local database state changes.

The database mutation and outbox record are committed in the same transaction.

A separate dispatcher publishes the outbox record.

The dispatcher may publish more than once under failure.

Consumers therefore MUST be idempotent.

The outbox is not itself proof that a remote consumer processed the event.

## 19. Event ordering

Where ordering is material, LegaX should preserve ordering per defined aggregate/stream key rather than attempting global ordering across the platform.

Ordering scope must be explicit.

Possible ordering key:

- resource ID;
- payment ID;
- booking ID;
- command stream;
- relationship ID;
- workflow ID.

Global total ordering is not a default requirement.

## 20. External side-effect boundary

External side effects include:

- payment provider instructions;
- access controller commands;
- network provisioning;
- SMS/email/push delivery where consequential;
- external booking;
- ride dispatch;
- provider API mutation;
- physical actuator operation;
- external record creation;
- financial instruction;
- third-party account changes.

These operations cannot normally participate in the same database transaction as LegaX state.

Therefore the architecture must explicitly model:

**LOCAL INTENT → EXTERNAL COMMAND → EXTERNAL OUTCOME → RECONCILIATION**

A remote call must never be hidden inside a supposedly atomic database mutation.

## 21. External command record

Every consequential external side effect should have an external command record containing:

- command ID;
- provider;
- provider operation;
- provider idempotency key where supported;
- request fingerprint;
- request timestamp;
- attempt ID;
- timeout/deadline;
- provider reference if returned;
- request/response evidence references;
- current external status;
- last known provider state;
- reconciliation state.

Secrets and sensitive payloads must be minimized and protected.

## 22. External outcome taxonomy

External calls can produce:

### ACCEPTED

Provider accepted the instruction, but final effect may still be pending.

### REJECTED

Provider explicitly rejected the instruction.

### FAILED

A failure occurred before the consequential effect was established.

### SUCCEEDED

Provider has supplied evidence sufficient under the domain contract to establish success.

### UNKNOWN

The result cannot be determined.

### PENDING

The provider reports an asynchronous operation still in progress.

### RECONCILIATION_REQUIRED

The provider response and LegaX canonical state cannot yet be safely aligned.

Provider ACCEPTED MUST NOT automatically become canonical SUCCEEDED.

## 23. Unknown outcomes

UNKNOWN is a first-class safety state.

Examples:

- network timeout after payment submission;
- connection lost after door command transmission;
- provider accepted request but response was lost;
- process crashed after sending external command;
- external provider is unavailable during status query.

When an outcome is UNKNOWN:

1. stop unsafe duplicate execution;
2. preserve the command and attempt identity;
3. preserve the provider reference if known;
4. mark reconciliation required;
5. query authoritative provider state where possible;
6. use provider webhook/event/evidence where available;
7. compare with LegaX state;
8. resolve to succeeded/failed/other governed state only when evidence is sufficient.

Unknown is not a failure shortcut.

## 24. Retry taxonomy

Retries are allowed only when the operation's semantics permit them.

Retry classes:

- VALIDATION retry — normally no;
- AUTHORIZATION retry — only after re-evaluation;
- TRANSIENT infrastructure retry — bounded;
- RATE_LIMIT retry — bounded with provider guidance;
- TIMEOUT retry — only if idempotency/unknown-outcome rules permit;
- EXTERNAL UNKNOWN retry — reconcile first where duplicate effect is possible;
- BUSINESS rejection retry — normally no unless state changes;
- CONCURRENCY conflict retry — re-read and re-evaluate;
- SERIALIZATION failure retry — retry the whole transaction;
- COMPENSATION retry — idempotent and bounded.

## 25. Retry policy

Every retryable command should define:

- maximum attempts;
- maximum elapsed time;
- retryable error classes;
- non-retryable error classes;
- timeout;
- backoff;
- jitter;
- deadline;
- concurrency behavior;
- idempotency requirements;
- reconciliation-before-retry rule.

Retries should not occur independently at multiple layers without a deliberate budget.

Retry storms are prohibited.

## 26. Backoff and jitter

Transient retries should use bounded exponential backoff with jitter where appropriate.

A conceptual schedule is:

**delay_n = min(max_delay, base × 2^n) + jitter**

The exact algorithm is domain/operational configuration, not semantic truth.

A command must stop retrying when:

- deadline expires;
- retry budget is exhausted;
- error is non-retryable;
- authorization becomes invalid;
- target state becomes incompatible;
- external outcome becomes unknown and requires reconciliation;
- compensation becomes necessary.

## 27. Timeout semantics

Timeout means:

**LegaX stopped waiting.**

Timeout does NOT mean:

**the external operation did not happen.**

Therefore every timeout must be classified according to the side-effect boundary:

- pre-send timeout;
- connection timeout before transmission;
- transmission uncertain;
- provider processing timeout;
- response timeout after probable submission.

Only a domain-specific protocol can establish whether a timed-out operation is safely retryable.

## 28. Concurrency control

LegaX must protect against concurrent commands targeting the same material state.

Supported strategies include:

- optimistic version checking;
- compare-and-swap;
- row-level locking;
- serializable transactions;
- explicit resource locks;
- provider-side concurrency tokens;
- unique constraints;
- capacity reservation;
- lease/fencing tokens.

The strategy must match the domain.

Canonical optimistic pattern:

**READ VERSION N → VALIDATE → AUTHORIZE → CONDITIONAL WRITE WHERE VERSION=N → VERSION N+1**

If zero rows are updated because the version changed:

**ABORT → RELOAD → RE-EVALUATE → REAUTHORIZE IF REQUIRED → RETRY OR DENY**

## 29. Concurrency and authorization

Authorization is not a substitute for concurrency control.

Two commands may both be authorized against the same state version but only one may be allowed to commit.

Example:

Two buyers are authorized to reserve the final unit of capacity.

Both may receive authorization based on available capacity.

The execution gate must resolve the race at the authoritative capacity boundary.

No double allocation.

## 30. Database isolation

The implementation may use:

- READ COMMITTED;
- REPEATABLE READ;
- SERIALIZABLE;
- explicit row locks;
- advisory/application locks;

according to the invariant being protected.

The architecture must state which consistency boundary is protected by which mechanism.

Serializable transactions still require application handling of serialization failures and retries.

No isolation level automatically solves external side effects.

## 31. Fencing

For operations where an old worker/process/device could continue acting after a newer command takes ownership, LegaX should use a fencing token or equivalent mechanism.

Examples:

- device control;
- scheduled jobs;
- long-running workflow workers;
- resource leases;
- provider sessions.

A stale worker with an old fencing token must be rejected at the authoritative write/enforcement boundary.

## 32. Command leases

Long-running commands may use leases.

A lease must define:

- holder;
- scope;
- acquisition time;
- expiry;
- renewal;
- fencing token;
- loss-of-lease behavior.

Lease expiration must not silently imply that external work stopped.

External state may require reconciliation.

## 33. Execution worker model

A worker executing commands should:

1. claim a command safely;
2. obtain a lease/fencing token if required;
3. verify command lifecycle;
4. verify deadline;
5. verify idempotency;
6. revalidate material authorization;
7. revalidate state/version;
8. execute the bounded operation;
9. persist outcome;
10. emit or enqueue event/evidence;
11. release/expire lease;
12. trigger reconciliation when required.

Workers are execution agents, not authority sources.

## 34. Direct execution prohibition

UI clients, AI agents, background workers, provider adapters and integration handlers MUST NOT directly mutate consequential canonical state while bypassing the command contract.

They must submit a command or invoke the canonical execution path.

This prevents:

- UI bypass;
- API bypass;
- worker bypass;
- AI bypass;
- provider callback bypass;
- migration/script bypass;
- hidden privileged code paths.

Administrative repair tools are themselves governed commands with explicit elevated authority and audit.

## 35. AI execution boundary

AI may:

- propose a command;
- classify a request;
- select a safe workflow;
- recommend a retry;
- detect anomalies;
- suggest compensation;
- prioritize reconciliation.

AI cannot create authority.

An AI-proposed consequential command must pass the same authorization and execution gates as any other command.

If bounded automation is pre-authorized, the automation policy must explicitly define:

- allowed command types;
- targets;
- limits;
- scope;
- conditions;
- duration;
- model/system identity;
- failure behavior;
- human escalation;
- audit/evidence.

## 36. Human approval binding

Where approval is required, the approval must be bound to the exact governed operation.

Approval should preserve:

- approver identity;
- authority;
- approval timestamp;
- object/target;
- operation;
- scope;
- amount/quantity where relevant;
- policy version;
- expiry;
- approval state;
- evidence.

Approval for one materially different command cannot be silently reused.

## 37. Separation of duties

Where policy requires separation of duties:

- requester and approver may need to differ;
- executor and approver may need to differ;
- policy administrator and operator may need to differ;
- evidence reviewer may need to differ from the actor.

Execution must check the applicable SoD constraints at the command boundary.

## 38. Command cancellation

Cancellation is itself a governed operation.

If execution has not begun, cancellation may prevent execution.

If execution is in progress, cancellation may produce:

- cancellation accepted;
- cancellation pending;
- cancellation failed;
- cancellation impossible;
- compensation required.

Cancellation does not erase history.

## 39. Deadlines and expiry

A command may have:

- authorization expiry;
- execution deadline;
- retry deadline;
- external provider expiry;
- compensation deadline.

Expiry prevents new execution after the defined boundary.

Expiry does not prove that a previously submitted external operation failed.

If an external operation may still exist after local expiry, reconciliation is required.

## 40. Partial execution

A command may partially complete.

Partial execution must be represented explicitly rather than hidden behind generic FAILED.

Examples:

- payment authorization succeeded but settlement pending;
- one item in a multi-item order fulfilled;
- one of several access points opened;
- provider accepted provisioning for one component;
- batch operation completed 8 of 10 targets.

The command model must identify completed, pending, failed and unknown components where partial semantics are supported.

## 41. Batch commands

A batch command must declare its atomicity policy:

- ALL_OR_NOTHING;
- PER_ITEM;
- BEST_EFFORT;
- THRESHOLD;
- ORDERED_PARTIAL;
- COMPENSATING.

A batch must not accidentally inherit atomicity from a UI button.

Each item should have attributable execution status.

## 42. Compensation model

Compensation is required when an earlier effect cannot be rolled back atomically and a later failure creates an unacceptable business state.

Compensation flow:

**DETECTED INCONSISTENCY → COMPENSATION REQUIRED → COMPENSATION AUTHORIZATION → COMPENSATION COMMAND → EXECUTION → OUTCOME → EVENT/EVIDENCE → RECONCILIATION**

Compensation may itself fail.

If compensation fails:

**COMPENSATION_FAILED → ESCALATION/RECONCILIATION_REQUIRED**

No silent reversal.

## 43. Compensation is not deletion

A completed payment followed by refund is:

**PAYMENT_SETTLED → REFUND_COMMAND → REFUND_SETTLED**

not:

**PAYMENT_SETTLED → delete payment → unpaid**

History remains intact.

## 44. Saga-style orchestration

Cross-domain workflows should use explicit orchestration or choreography with durable workflow state.

Example:

**Booking confirmed → Payment command → Payment settled → Access entitlement command → Access granted → Fulfillment command → Fulfillment completed**

If a later step fails:

- preserve earlier facts;
- issue explicit compensation where applicable;
- reconcile external systems;
- emit workflow events;
- maintain an auditable causal chain.

No distributed two-phase transaction should be assumed across independent services/providers.

## 45. Event creation boundary

For local state changes, events describing the committed mutation should be created within the same local transaction through the outbox pattern.

For external effects, an event may first describe:

- command dispatched;
- provider accepted;
- provider pending;
- provider outcome received;
- observation captured;
- reconciliation resolved.

Canonical completion event should only be emitted when the domain's completion criteria are satisfied.

## 46. Event semantics

Events must distinguish:

- command requested;
- command accepted;
- execution started;
- execution attempt;
- execution succeeded;
- execution failed;
- execution unknown;
- provider accepted;
- provider rejected;
- observation received;
- reconciliation started;
- reconciliation resolved;
- compensation requested;
- compensation completed.

An event says something occurred in LegaX's event model.

It does not automatically prove the physical/economic external fact described by a provider.

## 47. Evidence semantics

Every consequential execution should preserve evidence sufficient to reconstruct:

- who/what initiated it;
- which identity/account/session operated;
- which authority applied;
- which authorization decision applied;
- which policy version applied;
- which command was executed;
- which target was affected;
- which attempt occurred;
- which preconditions were checked;
- what execution result was received;
- what external evidence was received;
- what state changed;
- what event was emitted;
- whether reconciliation occurred.

Evidence should be minimized, integrity-protected where needed, access-controlled and retained according to policy.

## 48. Evidence classes

Potential evidence classes:

- authorization evidence;
- command evidence;
- database mutation evidence;
- provider response;
- webhook/event;
- controller acknowledgement;
- physical observation;
- financial settlement evidence;
- user confirmation;
- cryptographic proof;
- system telemetry;
- reconciliation record;
- human review;
- compensation evidence.

Evidence strength is domain-specific.

## 49. Auditability

The command contract must make it possible to answer:

**Who authorized this?**

**Who/what issued this command?**

**What exactly was requested?**

**Against which target?**

**Under which authority and policy?**

**At which state/version?**

**What execution attempt occurred?**

**What was the result?**

**What external provider said?**

**What did LegaX establish as canonical?**

**What evidence supports that conclusion?**

**What happened afterward?**

If the answer cannot be reconstructed, the execution path is not sufficiently governed.

## 50. Security boundary

Execution services must validate:

- caller identity/service identity;
- authentication/session where applicable;
- command signature/integrity where applicable;
- authorization binding;
- scope;
- target;
- freshness;
- idempotency;
- replay protection;
- privilege boundaries;
- secret handling;
- tenant/community isolation;
- data minimization;
- rate limits;
- abuse controls.

A valid command ID alone is never sufficient authority.

## 51. Replay protection

A previously executed command must not be replayed as a new consequential operation.

Replay protection may combine:

- command lifecycle;
- idempotency key;
- nonce;
- sequence number;
- authorization expiry;
- state/version;
- cryptographic signature;
- provider idempotency key.

Replay protection is especially important for:

- payment commands;
- access commands;
- credential operations;
- administrative changes;
- physical control;
- external provisioning.

## 52. Provider adapters

Provider adapters translate LegaX commands into provider-specific instructions.

Adapters must not:

- manufacture authority;
- broaden scope;
- reinterpret DENY as ALLOW;
- silently change target;
- silently change amount/quantity;
- hide unknown outcomes;
- declare canonical success without contractually sufficient evidence.

Adapter boundary:

**LegaX Command → Provider Request → Provider Response → Normalized External Outcome → Reconciliation**

Provider-specific semantics remain provider-specific.

## 53. Provider idempotency

If a provider supports idempotency, LegaX should use a stable provider-scoped key tied to the logical command.

If the provider does not support idempotency:

- avoid blind retries after uncertain submission;
- query status if possible;
- use provider references;
- reconcile before duplicate submission;
- escalate when the external state cannot be established.

## 54. Webhooks and callbacks

Provider callbacks are external assertions.

A callback handler must:

1. authenticate/verify the callback source;
2. validate schema/version;
3. locate the provider operation;
4. reject impossible state transitions;
5. preserve the raw/normalized evidence as appropriate;
6. update provider-state records;
7. reconcile against canonical state;
8. emit a governed event;
9. trigger compensation or escalation if required.

A callback must not bypass the command/state model.

## 55. Out-of-order external events

External callbacks may arrive:

- duplicated;
- delayed;
- out of order;
- after cancellation;
- after timeout;
- after local state changed.

The adapter must use:

- provider event ID;
- provider sequence/version where available;
- timestamps with care;
- state transition rules;
- idempotent processing;
- reconciliation.

Never assume network delivery order equals business-state order.

## 56. State mutation ownership

The domain that owns a canonical state is the only authority allowed to establish that state through its canonical execution path.

For example:

- payment state belongs to LegaPay;
- booking state belongs to LegaBooking;
- access enforcement state belongs to LegaAccess/resource domain;
- ride state belongs to LegaRide;
- network state belongs to LegaNetwork.

Other services submit commands or consume events.

Cross-domain services must not directly overwrite another domain's authoritative state.

## 57. Read model versus execution model

Read models may be:

- cached;
- eventually consistent;
- provider-derived;
- materialized;
- stale.

A read model may inform a command but cannot replace authoritative execution checks.

UI:

**shows state**

Execution:

**validates authoritative state**

## 58. Safe command response

The API response to a command must reflect the actual command state, not optimism.

Possible response states:

- accepted;
- executing;
- completed;
- rejected;
- failed;
- pending;
- unknown;
- reconciliation required.

An API should not return SUCCESS merely because the command was queued.

For asynchronous commands, return a durable command reference and current execution status.

## 59. Command status querying

A command status endpoint/read model should expose, where authorized:

- command ID;
- state;
- created time;
- current attempt;
- last known outcome;
- next retry;
- external provider reference;
- reconciliation status;
- final result when established.

Sensitive internal execution details should be minimized according to actor scope.

## 60. Exactly-once user experience

LegaX should provide an **exactly-once logical command experience** where possible:

- one logical intent;
- one command identity;
- stable retries;
- stable status;
- duplicate suppression;
- deterministic result reference.

This does not imply exactly-once delivery at every infrastructure layer.

## 61. Failure taxonomy

Execution failures should distinguish:

- VALIDATION_FAILED;
- AUTHORIZATION_DENIED;
- AUTHORIZATION_STALE;
- PRECONDITION_FAILED;
- CONCURRENCY_CONFLICT;
- RATE_LIMITED;
- DEPENDENCY_UNAVAILABLE;
- TIMEOUT;
- PROVIDER_REJECTED;
- PROVIDER_FAILED;
- EXECUTION_FAILED;
- UNKNOWN_OUTCOME;
- RECONCILIATION_REQUIRED;
- COMPENSATION_REQUIRED;
- SECURITY_BLOCKED;
- POLICY_BLOCKED;
- EXPIRED;
- CANCELLED.

The taxonomy is operationally meaningful and should not collapse all errors into 500-like generic failure.

## 62. Observability

Every command execution should be traceable using:

- command ID;
- attempt ID;
- correlation ID;
- causation ID;
- actor/service identity;
- target reference;
- provider reference;
- event ID.

Telemetry must not become the source of canonical business truth.

Logs and traces support diagnosis; command/state/evidence records establish governed execution history.

## 63. Metrics

Core execution metrics should include:

- command acceptance rate;
- execution latency;
- authorization rejection rate;
- concurrency conflict rate;
- retry rate;
- retry exhaustion;
- unknown outcome rate;
- reconciliation backlog;
- compensation rate;
- compensation failure rate;
- duplicate suppression rate;
- provider rejection rate;
- outbox backlog;
- event delivery latency;
- stale authorization rejection;
- command expiry rate.

Metrics are indicators, not authority.

## 64. Rate limits and overload

Execution paths must protect scarce resources.

Controls may include:

- per-actor limits;
- per-service limits;
- per-target limits;
- provider limits;
- queue limits;
- concurrency limits;
- admission control;
- circuit breaking;
- retry budgets.

When overloaded, LegaX should fail fast, defer, or queue according to command semantics rather than multiplying work through uncontrolled retries.

## 65. Dead-letter and poison commands

Commands that repeatedly fail due to persistent conditions may enter a governed dead-letter/review state.

A dead-letter command is not deleted.

It retains:

- command identity;
- failure history;
- attempts;
- evidence;
- last known state;
- reason;
- remediation path.

Reprocessing a dead-letter command requires explicit rules and must preserve idempotency.

## 66. Reconciliation architecture

Reconciliation compares independent records to establish the canonical outcome.

Inputs may include:

- LegaX command state;
- LegaX state;
- provider state;
- provider events;
- controller observations;
- financial statements;
- external confirmations;
- evidence.

Reconciliation outcomes:

- MATCHED;
- RESOLVED_SUCCESS;
- RESOLVED_FAILURE;
- PARTIAL;
- DISCREPANCY;
- UNKNOWN;
- ESCALATED;
- COMPENSATION_REQUIRED.

## 67. Reconciliation ownership

The domain owning the canonical state owns reconciliation policy for that state.

A shared reconciliation framework may provide infrastructure, but it must not redefine domain truth.

## 68. Physical-world execution

Physical execution is inherently harder than database execution.

For an access operation:

**Authorization → AccessDecision → EnforcementCommand → Controller → ControllerResult → PhysicalObservation → ResourceState**

Controller acknowledgement may prove command receipt, not that a door physically opened.

Where the physical state matters, observation or provider evidence is required.

Physical execution may have:

- sensor delay;
- device offline state;
- mechanical failure;
- duplicated command;
- human intervention;
- safety interlock;
- emergency override.

These must be represented rather than hidden.

## 69. Economic execution

For payment:

**PaymentIntent → Authorization → PaymentCommand → ProviderAttempt → ProviderOutcome → Settlement → Reconciliation**

A payment provider timeout after submission is UNKNOWN until reconciled.

A successful authorization is not settlement.

A settlement report is not necessarily internal reconciliation.

A refund is a new command.

## 70. Access-method execution

For hand/palm, face, fingerprint, QR, NFC or device authentication:

The method supplies an authentication/access assertion.

The execution contract still requires:

**Assertion → Authorization → Command → Enforcement → Outcome → Evidence**

Biometric modality does not become authority.

Device-local Face ID/fingerprint results do not bypass LegaX authorization.

## 71. Scheduled commands

A scheduled command stores:

- intended effective time;
- authorization context;
- policy version;
- target/version preconditions;
- expiry;
- cancellation rules;
- execution policy.

At execution time, LegaX must re-check material conditions.

A future authorization is not an eternal authorization.

## 72. Recurring commands

Recurring commands must create distinct execution instances.

A recurring schedule is not one infinitely reusable command.

Each execution should have:

- execution instance ID;
- schedule ID;
- generated command ID;
- authorization evaluation;
- current state/version;
- outcome;
- event/evidence.

Changes to policy, authority or target state may prevent later instances.

## 73. Emergency commands

Emergency execution may use bounded emergency authority.

Emergency commands must preserve:

- emergency reason;
- authority source;
- scope;
- affected target;
- start/end;
- actor;
- decision;
- execution;
- evidence;
- post-event review.

Emergency mode must not become unrestricted bypass infrastructure.

## 74. Administrative repair commands

Repairing canonical data is consequential.

Repair commands must be:

- explicit;
- authorized;
- scoped;
- attributable;
- idempotent where possible;
- version-aware;
- evidenced;
- reversible/compensatable where possible.

Direct SQL mutation that bypasses the command contract is not an acceptable normal operating path.

## 75. Migration and bootstrap commands

Schema/data migrations may operate at a privileged infrastructure boundary, but must still preserve:

- migration identity;
- version;
- actor/system;
- target environment;
- execution result;
- evidence;
- rollback/recovery strategy.

Production migrations must not be treated as ordinary user commands, but their consequential effects remain auditable.

## 76. Cross-domain command contract

When one LegaService requests another:

**Source Domain Command → Domain API/Command Contract → Target Domain Command → Target Execution → Target Event**

The source domain must not assume the target's state changed merely because the command was sent.

The target domain owns its state.

## 77. Command-to-event causal chain

The minimum causal chain for consequential operations is:

**Request → Authorization → Command → Attempt → Outcome → Event → Evidence**

For cross-domain workflows:

**Command A → Event A → Command B → Attempt B → Outcome B → Event B**

Correlation identifies the workflow.

Causation identifies the immediate predecessor.

## 78. Security and replay contradiction tests

### A — Stale authorization
Authorization allows payment for amount X. Command changes amount to Y.

**Required:** reject or reauthorize.

### B — Duplicate payment
Same logical payment command is retried.

**Required:** no duplicate payment effect.

### C — Lost response
Provider receives payment but response is lost.

**Required:** UNKNOWN/reconciliation, not blind duplicate retry.

### D — Concurrent booking
Two commands target final capacity.

**Required:** concurrency boundary prevents double allocation.

### E — Revoked authority
Authority is revoked while command waits.

**Required:** execution revalidates and blocks where required.

### F — Changed resource
Target becomes unavailable after authorization.

**Required:** precondition/concurrency gate blocks execution.

### G — Provider accepted
Provider accepts but settlement is pending.

**Required:** canonical payment remains processing/pending as defined.

### H — Controller acknowledgement
Door controller acknowledges command.

**Required:** enforcement acknowledgement does not automatically establish physical state.

### I — Callback replay
Same provider event arrives twice.

**Required:** callback processing is idempotent.

### J — Callback reorder
Provider sends event 2 before event 1.

**Required:** state transition rules prevent invalid regression.

### K — Worker lease expiry
Old worker continues after lease expiry.

**Required:** fencing prevents stale execution.

### L — AI proposal
AI proposes an irreversible command.

**Required:** normal authorization/execution gates still apply.

### M — Retry storm
Provider is unavailable.

**Required:** bounded retry budget/backoff; no uncontrolled amplification.

### N — Compensation
Fulfillment fails after payment settlement.

**Required:** refund/compensation is a new command.

### O — Outbox crash
DB commit succeeds and dispatcher crashes before publish.

**Required:** outbox remains durable and is retried.

### P — Publish duplicate
Dispatcher publishes then crashes before marking sent.

**Required:** consumer idempotency handles duplicate event.

### Q — Command key reuse
Same idempotency key is reused with different amount.

**Required:** fingerprint conflict is rejected.

### R — Direct mutation
UI attempts to update canonical state without command path.

**Required:** canonical mutation boundary rejects/bypasses no-go path.

### S — Expired command
Command deadline passes while queued.

**Required:** command does not execute.

### T — Partial batch
Eight of ten operations succeed.

**Required:** partial semantics are represented explicitly.

## 79. Command integrity invariants

1. Every consequential operation has a command identity.
2. Command ID is distinct from request, authorization, attempt and event IDs.
3. A command identifies an exact operation.
4. A command identifies its target.
5. A command binds to its authorization decision.
6. Authorization is not execution.
7. Execution is not outcome.
8. Outcome is not automatically canonical state.
9. Material command changes require reauthorization.
10. Authorization freshness is explicit.
11. Authority scope is preserved into execution.
12. Target scope is preserved into execution.
13. Idempotency is required where duplicate effects are possible.
14. Idempotency keys have an explicit scope.
15. Reuse with materially different parameters is rejected.
16. Idempotency does not claim universal exactly-once delivery.
17. Unknown outcome is distinct from failure.
18. Timeout is not proof of external failure.
19. External side effects are not hidden inside DB transactions.
20. Local state and outbox records commit atomically.
21. Event delivery may be at-least-once.
22. Event consumers are idempotent.
23. Ordering is defined per required stream, not globally by default.
24. Consequential execution rechecks material state.
25. Concurrency is controlled at the authoritative state boundary.
26. Serialization/concurrency conflicts are explicitly handled.
27. Stale workers cannot execute through a valid fencing boundary.
28. Workers do not create authority.
29. UI does not bypass commands.
30. AI does not bypass commands.
31. Provider callbacks do not bypass commands/state rules.
32. Provider assertions are not automatically canonical truth.
33. Provider acceptance is distinct from completion.
34. Physical controller acknowledgement is distinct from physical outcome.
35. Payment authorization is distinct from settlement.
36. Retry policy is explicit.
37. Retry budgets are bounded.
38. Retry backoff/jitter is used where appropriate.
39. Retry does not occur blindly after uncertain side effects.
40. Reconciliation is mandatory for defined unknown outcomes.
41. Compensation is a new governed operation.
42. Compensation cannot silently erase history.
43. Cancellation is governed.
44. Expiry is distinct from failure.
45. Scheduled commands are revalidated at execution.
46. Recurring schedules produce distinct command instances.
47. Emergency commands are bounded and reviewable.
48. Administrative repair is consequential and governed.
49. Batch atomicity is explicit.
50. Partial completion is explicit where supported.
51. Command attempts are individually attributable.
52. Command status is durable.
53. Command deadlines are enforced.
54. External provider references are preserved where material.
55. Provider event IDs are used for duplicate detection where available.
56. Out-of-order provider events are handled explicitly.
57. Cross-domain state ownership remains with the target domain.
58. Cross-domain commands do not imply target-state mutation.
59. Events preserve command/correlation/causation references where applicable.
60. Evidence supports consequential execution reconstruction.
61. Sensitive execution data is minimized.
62. Secrets are not exposed through generic execution logs.
63. Read models are not authoritative execution state merely because they are displayed.
64. Cached state cannot silently authorize consequential execution.
65. Direct canonical field mutation is prohibited as a normal execution path.
66. Reconciliation state is explicit.
67. Compensation failure has an escalation path.
68. Dead-letter commands preserve history.
69. Reprocessing is idempotency-safe.
70. Rate limits protect execution dependencies.
71. Retry storms are prevented.
72. Long-running execution uses leases/fencing where required.
73. Lost worker ownership cannot create duplicate effects.
74. Command versions remain historically interpretable.
75. Policy-version changes can trigger re-evaluation.
76. Security/risk changes can trigger reauthorization.
77. Authorization approvals remain scoped.
78. Approval cannot silently authorize a materially different command.
79. Consequential state mutation belongs to its authoritative domain.
80. No command may exceed the authority that permitted it.
81. No command may execute after its governing authorization has become invalid where revalidation is required.
82. No command may silently transform UNKNOWN into FAILED.
83. No command may silently transform PROVIDER_ACCEPTED into canonical success.
84. No command may silently transform a retry into a second business operation.
85. No event may claim stronger truth than the evidence supports.
86. No compensation may pretend the original event never happened.
87. No execution path may rely solely on AI inference as established fact.
88. No external system is trusted merely because it is connected.
89. Every consequential execution has a defined failure path.
90. Every defined unknown state has a reconciliation path.
91. Every compensatable failure has a compensation or escalation path.
92. Every command has a bounded lifecycle.
93. Every execution attempt has an attributable outcome.
94. Every authoritative state mutation is version/concurrency aware where required.
95. Every local state mutation that requires an event uses a reliable commit-to-event mechanism.
96. Every retryable operation has a retry budget.
97. Every asynchronous operation has durable status.
98. Every external effect has an explicit side-effect boundary.
99. Every consequential operation can be reconstructed to the authorization that permitted it.
100. No consequential operation is implementation-ready until the Phase 16 contradiction tests pass.

## 80. Canonical command data contract

Conceptually, a command contains:

- command_id
- command_type
- command_version
- status
- issuer
- actor
- identity_ref
- account_ref
- authentication_session_ref
- participant_ref
- participation_ref
- context_ref
- role_refs
- capability_refs
- authority_refs
- authorization_id
- authorization_version
- action
- target_ref
- requested_transition
- parameters
- material_fingerprint
- idempotency_scope
- idempotency_key
- state_version/precondition
- policy_version
- approval_refs
- security/risk context
- effective_at
- expires_at
- deadline_at
- retry_policy_ref
- correlation_id
- causation_id
- parent_command_id
- execution_attempt_refs
- external_operation_refs
- outcome
- reconciliation_status
- compensation_ref
- created_at
- updated_at

The physical database schema belongs to a later architecture gate and must be derived from this contract rather than guessed from UI needs.

## 81. Command execution contract

A command executor MUST implement the following logical contract:

**1. Accept**
- validate command envelope;
- assign/preserve command identity.

**2. Bind**
- verify authorization reference;
- verify command fingerprint;
- verify scope and target.

**3. Gate**
- evaluate lifecycle, policy, state, security, approval, freshness, concurrency and idempotency.

**4. Execute**
- perform only the authorized operation;
- enforce transaction/side-effect boundary.

**5. Record**
- persist attempt and outcome;
- preserve external references.

**6. Publish**
- emit reliable event through the defined event mechanism.

**7. Reconcile**
- resolve external/physical/economic uncertainty.

**8. Compensate**
- issue governed compensation where required.

## 82. Command execution pseudo-sequence

**REQUEST**

→ validate envelope

→ resolve actor

→ resolve authorization

→ compare command to authorized operation

→ validate lifecycle

→ validate target

→ validate state/version

→ validate policy/security/approval

→ reserve idempotency

→ acquire concurrency boundary

→ revalidate authorization

→ execute local mutation OR dispatch external command

→ record outcome

→ commit local state/outbox

→ release concurrency/lease

→ dispatch event

→ reconcile external state when required

→ finalize canonical state

→ emit completion/reconciliation event

This is a logical contract, not an implementation-specific function sequence.

## 83. Relationship to Phase 15

Phase 15 defined:

**STATE → TRANSITION REQUEST → VALIDATION → VERIFICATION/REVIEW → AUTHORIZATION → CONCURRENCY CHECK → EXECUTION → NEW STATE → EVENT → EVIDENCE → RECONCILIATION**

Phase 16 inserts the command execution contract into that flow:

**STATE → TRANSITION REQUEST → AUTHORIZATION → COMMAND → EXECUTION GATES → CONCURRENCY/IDEMPOTENCY → EXECUTION → OUTCOME → NEW STATE → EVENT → EVIDENCE → RECONCILIATION**

Phase 16 does not replace Phase 15.

It operationalizes the execution boundary that Phase 15 intentionally left implementation-neutral.

## 84. Relationship to Phase 14

Phase 14 establishes:

- relationship ownership;
- scope;
- lifecycle;
- source;
- inference boundaries;
- revocation.

Phase 16 must not turn relationships into implicit execution authority.

A relationship can be an input to authorization.

The command can only execute the authority that the authorization decision actually grants.

## 85. Relationship to Phase 13

Phase 13 establishes aggregate/domain boundaries and avoids one giant universal transaction.

Phase 16 enforces that principle:

- local domain state may be atomic;
- cross-domain operations use commands/events/workflows;
- external providers use explicit side-effect boundaries;
- reconciliation resolves distributed uncertainty.

## 86. Relationship to Phases 01–12

Phase 16 depends on:

- LegaX constitution;
- identity;
- authentication;
- account;
- administration;
- authorization;
- access;
- resources/physical world;
- economic/commerce;
- lifecycle/policy;
- events/evidence/intelligence;
- LegaServices.

No later implementation may weaken these distinctions for convenience.

## 87. Research basis

Phase 16 was deeply checked against current authoritative and mature engineering material, including:

- NIST SP 800-63-4 Digital Identity Guidelines for authentication/session assurance and identity-related security boundaries.
- NIST SP 800-207 Zero Trust Architecture for explicit authentication/authorization and resource-focused enforcement.
- NIST SP 800-207A for granular identity-tier authorization in cloud-native application architectures.
- PostgreSQL transaction isolation documentation for serializability, concurrency anomalies and retry handling.
- CloudEvents 1.0.2 for common event-envelope interoperability.
- AWS Builders' Library guidance on safe retries and idempotent APIs.
- AWS Well-Architected reliability guidance on bounded retries, exponential backoff, jitter, timeouts and avoiding retry storms.
- Transactional Outbox pattern literature for atomic local state plus durable event publication.
- Existing LegaX Phases 01–15 as the primary internal semantic contract.

Research informs this architecture; it does not override LegaX's canonical definitions.

## 88. Phase 16 readiness gate

Phase 16 is implementation-ready only when every consequential command type can answer:

1. What intent does it represent?
2. What action does it perform?
3. What target does it affect?
4. Which domain owns the resulting state?
5. Which authorization decision permits it?
6. Which authority permits that authorization?
7. What exact parameters were authorized?
8. How is command identity established?
9. What is the idempotency scope?
10. How are duplicate commands detected?
11. What happens if the idempotency key is reused with different parameters?
12. What authorization freshness rules apply?
13. Which execution gates apply?
14. Which preconditions apply?
15. Which state/version is protected?
16. What concurrency mechanism applies?
17. What database transaction boundary applies?
18. What must never occur inside that transaction?
19. Which external side effects exist?
20. How are external commands identified?
21. What provider idempotency exists?
22. What happens on timeout?
23. What happens when the external outcome is unknown?
24. What retries are allowed?
25. What is the retry budget?
26. What backoff/jitter applies?
27. What is the execution deadline?
28. What happens on concurrency conflict?
29. What happens when authorization is revoked while queued?
30. What happens when the target changes state?
31. What happens when a worker loses its lease?
32. What happens when a provider callback is duplicated?
33. What happens when callbacks arrive out of order?
34. What event is emitted?
35. What evidence is retained?
36. How is local state coupled reliably to event publication?
37. How is external state reconciled?
38. What compensation exists?
39. What happens if compensation fails?
40. Can the entire operation be reconstructed from request to final outcome?

If any answer is ambiguous, the command type is not implementation-ready.

## 89. Final architectural rules

### Rule 1 — Authorization is not execution

**ALLOW does not mean DONE.**

### Rule 2 — A command is an exact governed instruction

A command cannot silently broaden the authorization that created it.

### Rule 3 — Local atomicity stops at the system boundary

Database transactions protect LegaX-owned state; they do not magically include external providers.

### Rule 4 — Unknown is first-class

If LegaX cannot establish whether a side effect occurred, the result remains UNKNOWN until reconciliation.

### Rule 5 — Retries require idempotency or reconciliation

No blind retry of a potentially consequential unknown operation.

### Rule 6 — Concurrency is part of authorization safety

A command authorized against state N cannot blindly commit against materially changed state N+1.

### Rule 7 — Events follow committed facts

For local state changes, durable event intent is committed with the state through the outbox boundary.

### Rule 8 — Providers are assertion sources

Provider responses must be normalized and reconciled according to domain rules.

### Rule 9 — Compensation is new history

A compensating action never erases the original action.

### Rule 10 — Every consequential path is attributable

The platform must reconstruct:

**Actor → Authorization → Command → Attempt → Outcome → State → Event → Evidence → Reconciliation**

### Final execution rule

**NO AUTHORIZATION → NO COMMAND EXECUTION.**

**NO FRESH AUTHORIZATION BINDING → NO CONSEQUENTIAL EXECUTION.**

**NO CONCURRENCY SAFETY → NO CONSEQUENTIALLY SHARED STATE MUTATION.**

**NO IDEMPOTENCY OR RECONCILIATION SAFETY → NO RETRY OF A POTENTIALLY DUPLICATIVE EFFECT.**

**NO SUFFICIENT EVIDENCE → NO PROMOTION OF UNKNOWN EXTERNAL OUTCOME TO CANONICAL SUCCESS.**

**NO COMPENSATION/ESCALATION PATH → NO IMPLEMENTATION-READY DISTRIBUTED WORKFLOW.**

**Status:** Foundational command and execution contract — consequential execution identity, authorization binding, transaction boundaries, external side effects, idempotency, concurrency, retries, unknown outcomes, compensation, events, evidence, reconciliation and operational safeguards defined; implementation remains deferred until subsequent architecture gates are completed.
