# LegaX — Core Execution Engine

## 24 — Core Execution Engine

**Status:** Foundational runtime architecture — defines the governed runtime that receives authorized commands, schedules and executes work, persists progress, coordinates workers and dependencies, handles retries/timeouts/cancellation/leases, records outcomes, survives failure, and drives reconciliation without manufacturing authority.

## 1. Purpose

The Core Execution Engine (CEE) is the runtime execution plane of LegaX.

It is the machinery that turns a valid Phase 16 command into controlled execution across local computation, database transactions, queues, workers, external providers, physical controllers, economic systems, long-running workflows, scheduled work, and asynchronous callbacks.

Phase 16 defines **what a command is and the contract under which it may execute**.

Phase 24 defines **how a runtime safely carries that command from acceptance to completion, failure, cancellation, uncertainty, reconciliation, or compensation**.

The CEE must therefore solve a different problem from API Architecture, Authorization, State Machines, Events, Providers, or the operating systems.

The central problem is:

> A command may be authorized correctly and still fail, stall, duplicate, lose its worker, encounter an external timeout, outlive its original context, or partially execute.

The engine must make those conditions explicit rather than hiding them behind a synchronous function call.

## 2. Architectural position

The canonical execution plane is:

**REQUEST → AUTHENTICATION → CONTEXT → AUTHORIZATION → COMMAND → EXECUTION GATE → ENGINE ACCEPTANCE → SCHEDULING → LEASE → ATTEMPT → EFFECT → OUTCOME → STATE/EVENT/EVIDENCE → RECONCILIATION**

For a local operation:

**COMMAND → GATE → TRANSACTIONAL EXECUTOR → STATE + OUTBOX → COMMIT → EVENT**

For asynchronous work:

**COMMAND → DURABLE EXECUTION → TASK → WORKER LEASE → ATTEMPT → RESULT → NEXT TASK/FINALIZATION**

For external work:

**COMMAND → GATE → EXTERNAL OPERATION → PROVIDER OUTCOME → RECONCILIATION → CANONICAL OUTCOME**

For a long-running workflow:

**WORKFLOW INSTANCE → DURABLE STATE → TASKS/WAITING → SIGNAL/CALLBACK/TIMER → NEXT DECISION → TASKS → FINAL OUTCOME**

For an uncertain operation:

**ATTEMPT → UNKNOWN → EXECUTION FROZEN → RECONCILIATION → RESOLVED OUTCOME**

The engine never changes the governing meaning of authorization.

## 3. Definition

The Core Execution Engine is the governed runtime responsible for:

- accepting valid executable commands;
- binding execution to authorization;
- creating durable execution instances;
- scheduling work;
- selecting eligible workers;
- issuing leases/fences;
- executing attempts;
- enforcing deadlines;
- applying retry policies;
- handling cancellation;
- coordinating long-running workflows;
- isolating failures;
- recording progress and outcomes;
- dispatching events;
- invoking provider adapters;
- managing external-operation state;
- initiating reconciliation;
- initiating compensation where authorized;
- preserving causal and execution history;
- preventing duplicate consequential effects;
- exposing execution status without making status itself authority.

The CEE is not:

- an authorization engine;
- an identity provider;
- an access-control policy engine;
- a database;
- an event broker;
- a workflow definition language by itself;
- a provider;
- a payment processor;
- a community/organization/provider operating system;
- an AI authority;
- a generic job queue with business authority.

## 4. Architectural boundary

The CEE owns **execution mechanics and runtime state**.

The authoritative domain owns **business state**.

Authorization owns **permission decisions**.

Phase 16 owns the **command contract**.

Phase 15 owns **state-transition semantics**.

Phase 17 owns **canonical event semantics**.

Phase 18 owns **evidence semantics**.

Phase 19 owns **provider integration boundaries**.

Phase 21 owns **security architecture**.

Phase 22 owns **privacy/governance processing boundaries**.

Phase 23 owns **API interface architecture**.

The CEE coordinates these contracts; it does not replace them.

## 5. Non-negotiable rule

**NO AUTHORIZATION → NO CONSEQUENTIALLY EFFECTFUL EXECUTION.**

A task in a queue is not authorization.

A worker credential is not authorization.

A workflow instance is not authorization.

A scheduler is not authorization.

A lease is not authorization.

A provider acceptance is not authorization.

An AI proposal is not authorization.

A retry is not authorization.

An administrator's technical access to the engine is not unrestricted business authority.

## 6. Engine versus command

A command answers:

**What exact operation is LegaX instructed to attempt?**

The engine answers:

**How is that operation durably scheduled, attempted, observed, retried, completed, cancelled, reconciled, or escalated?**

The engine MUST NOT rewrite the material meaning of a command.

If the engine changes a material command parameter, target, amount, recipient, scope, action, or required condition, the command must be rejected or reauthorized according to Phase 16.

## 7. Engine versus authorization

The engine consumes an authorization decision.

It does not manufacture one.

The engine may invoke the authorization service again when Phase 16 requires freshness or revalidation.

A worker's possession of a valid engine task MUST NOT be interpreted as proof that the worker may perform every operation represented by that task.

## 8. Engine versus state ownership

The engine may hold execution state such as:

- execution instance status;
- attempt status;
- lease status;
- retry schedule;
- queue position;
- worker assignment;
- timeout/deadline;
- reconciliation status.

It MUST NOT silently become authoritative for domain state merely because it stores a projection of that state.

The authoritative domain remains responsible for its canonical business/resource state.

## 9. Core execution object model

The engine operates around distinct objects:

- Command
- Execution
- Task
- Attempt
- Lease
- Worker
- Worker Pool
- Queue
- Schedule
- Workflow Instance
- Wait State
- Signal
- Timer
- External Operation
- Outcome
- Reconciliation Case
- Compensation Command
- Execution Event
- Execution Evidence Reference

These identities MUST remain distinct.

## 10. Command identity

The engine must preserve:

- command_id;
- command_type;
- command_version;
- authorization_id;
- actor;
- target;
- idempotency scope/key;
- correlation_id;
- causation_id;
- policy version;
- state preconditions;
- deadline;
- execution constraints.

The engine may add execution identifiers but must not replace the command identity.

## 11. Execution identity

Each accepted command creates one logical execution identity:

**execution_id**

An execution may have:

- zero or more tasks;
- one or more attempts;
- one or more worker leases;
- zero or more external operations;
- zero or more waiting periods;
- one governed terminal outcome.

Execution identity is distinct from command identity.

A retry does not create a new business command.

A worker restart does not create a new execution.

A workflow retry/recovery mechanism must preserve the logical execution identity where the underlying contract defines one logical operation.

## 12. Attempt identity

Every concrete attempt receives:

**attempt_id**

Attempt identity allows LegaX to distinguish:

**ONE COMMAND → ONE EXECUTION → MANY ATTEMPTS**

An attempt records:

- worker;
- start time;
- lease;
- attempt number;
- input fingerprint;
- execution environment;
- timeout/deadline;
- result;
- error;
- external references;
- heartbeat/progress where applicable;
- completion evidence.

## 13. Task identity

A Task is a durable unit of executable work scheduled by the engine.

A task must identify:

- task_id;
- execution_id;
- task_type;
- task_version;
- input reference;
- required capability of worker runtime;
- queue;
- priority;
- schedule/deadline;
- retry policy;
- lease policy;
- security classification;
- tenant/domain scope;
- correlation/causation;
- dependency/precondition;
- status.

A task is not a permission object.

## 14. Worker identity

A worker is an execution agent operated by LegaX or an approved execution boundary.

Worker identity must be independently attributable.

A worker can be:

- a process;
- service instance;
- serverless runtime;
- container;
- edge runtime;
- device agent;
- provider adapter worker;
- specialized execution fleet.

Worker identity is not the identity of the human or organization whose command is being executed.

The engine must preserve both:

**BUSINESS ACTOR → COMMAND → EXECUTION → WORKER**

## 15. Worker authorization boundary

Workers may execute only tasks issued to their eligible execution scope.

Worker authentication proves the worker is an approved execution component.

Worker authorization determines whether that worker may receive/perform that class of execution task.

Neither substitutes for the business authorization bound to the command.

## 16. Queue model

Queues are durable scheduling boundaries.

A queue may classify work by:

- domain;
- service;
- task type;
- priority;
- geographic/physical locality;
- data sensitivity;
- worker capability;
- provider;
- tenant/community/organization scope;
- latency class;
- reliability class;
- resource constraints.

Queue membership MUST NOT expand authority.

A task moved between queues retains its original command and authorization bindings.

## 17. Scheduling

Scheduling determines when eligible work becomes available for execution.

Scheduling inputs may include:

- dependency readiness;
- priority;
- deadline;
- fairness;
- capacity;
- rate limits;
- worker availability;
- geographic constraints;
- maintenance windows;
- provider availability;
- resource availability.

Scheduling MUST NOT bypass execution gates.

A task that becomes runnable later must be revalidated when material authorization or state conditions require it.

## 18. Priority and fairness

The engine may support:

- priority classes;
- weighted fairness;
- tenant fairness;
- domain quotas;
- starvation prevention;
- deadline-aware scheduling;
- emergency queues under explicit governance.

Priority does not override authorization.

Emergency priority does not mean emergency authority.

High-priority work remains subject to security, privacy, safety, authorization, and execution contracts.

## 19. Admission control

Before accepting consequential execution, the engine may enforce:

- command validity;
- execution capacity;
- resource limits;
- queue availability;
- authorization binding;
- deadline validity;
- idempotency;
- policy constraints;
- security controls;
- privacy controls;
- dependency availability.

Admission failure means the engine has not accepted the execution.

Admission success does not mean business execution succeeded.

## 20. Durable execution

Consequential asynchronous work must not depend on a volatile process remaining alive.

The engine persists enough execution state to resume after:

- worker crash;
- process restart;
- network failure;
- node loss;
- deployment;
- temporary provider outage;
- queue interruption;
- long waits;
- human approval;
- scheduled delay.

Durability means **progress survives runtime failure**.

It does not mean every external side effect is magically exactly-once.

## 21. Event history versus business event

The engine may maintain internal execution history.

That history is not automatically the same as a Phase 17 canonical domain event stream.

Execution history records runtime progression.

Canonical domain events record governed domain occurrences.

The engine must explicitly map between them rather than treating every internal task transition as a business event.

## 22. Deterministic orchestration

Where workflow orchestration is replayed from durable history, workflow decision logic must be deterministic.

Non-deterministic external operations such as:

- network calls;
- database queries;
- current wall-clock reads;
- random generation;
- external provider calls;
- AI/model calls;

must occur through controlled execution activities or equivalent side-effect boundaries.

The workflow/orchestrator records the result required to resume safely.

## 23. Workflow definition versus workflow instance

A workflow definition describes a reusable execution pattern.

A workflow instance is one concrete execution.

A definition may evolve.

A running instance must remain historically interpretable under the version under which it was created.

Changing workflow code cannot silently reinterpret old execution history.

Versioning, compatibility, migration, and retirement must be explicit.

## 24. Workflow state

A workflow instance may contain:

- current logical state;
- pending task;
- completed task references;
- waiting conditions;
- timers;
- signals;
- child execution references;
- compensation state;
- external operation references;
- execution deadline;
- outcome;
- version.

Workflow state is execution state.

It does not become domain truth unless the authoritative domain accepts and records the resulting state.

## 25. Durable waiting

The engine must support waiting without keeping a worker process alive unnecessarily.

Waiting may occur for:

- time;
- provider callback;
- human approval;
- payment settlement;
- physical observation;
- resource availability;
- external reconciliation;
- another command/event.

A waiting execution remains durable and attributable.

## 26. Timers

Timers must be durable where execution depends on them.

A timer firing is an execution trigger, not authorization.

Scheduled commands must revalidate:

- authorization freshness;
- target state;
- policy;
- lifecycle;
- security;
- time window;
- required approvals;

before consequential execution.

## 27. Signals and callbacks

External signals/callbacks may advance an execution only after:

- source authentication;
- envelope validation;
- replay protection;
- deduplication;
- provenance recording;
- schema validation;
- domain interpretation;
- reconciliation where required.

A callback cannot directly mutate canonical state merely because it reached the engine.

## 28. Lease model

Workers receive leases for executable tasks when the execution requires exclusive or bounded ownership.

A lease should include:

- lease_id;
- task_id;
- worker_id;
- lease_version/token;
- acquired_at;
- expires_at;
- heartbeat policy;
- fencing token where required.

A lease expires independently of the worker's belief that it still owns the task.

## 29. Fencing

For consequential work where stale workers could produce duplicate or conflicting effects, the engine must use fencing.

Conceptually:

**LEASE N → WORKER N MAY EXECUTE**

If the lease advances:

**LEASE N+1 → WORKER N IS STALE**

A stale worker must be prevented from committing through the authoritative execution boundary.

A heartbeat alone is not sufficient protection against stale execution.

## 30. Heartbeats

Long-running attempts may emit heartbeats containing:

- attempt identity;
- worker identity;
- progress;
- checkpoint reference;
- health;
- last external reference;
- current stage.

Heartbeat data is operational evidence.

Heartbeat receipt does not prove business success.

## 31. Worker crash

If a worker crashes:

1. preserve execution identity;
2. preserve attempt history;
3. determine lease state;
4. determine whether the side effect could have occurred;
5. do not assume failure solely from worker death;
6. retry only when safe;
7. reconcile when the outcome may be unknown.

Worker failure is a runtime event, not automatically a business failure.

## 32. Lost worker versus lost effect

The engine must distinguish:

**WORKER LOST**

from:

**EFFECT NOT ESTABLISHED**

A worker can die after an external command was sent.

Therefore:

**WORKER FAILURE ≠ EXTERNAL EFFECT FAILURE**

This distinction is mandatory for consequential operations.

## 33. Retry architecture

Retries belong to the engine only after Phase 16 determines that retry is semantically permitted.

Retry policy includes:

- retryable errors;
- non-retryable errors;
- maximum attempts;
- maximum elapsed duration;
- backoff;
- jitter;
- deadline;
- concurrency policy;
- idempotency requirement;
- reconciliation-before-retry rule.

The engine must prevent independent retry layers from multiplying attempts uncontrollably.

## 34. Retry budget

Each execution should have a bounded retry budget.

A budget may include:

- maximum attempts;
- maximum total retry duration;
- maximum provider requests;
- maximum cost;
- maximum fan-out;
- maximum compensation attempts.

Exhaustion produces a governed terminal/escalation state, not silent looping.

## 35. Timeout taxonomy

The engine distinguishes:

- queue timeout;
- schedule-to-start timeout;
- execution timeout;
- attempt timeout;
- external request timeout;
- workflow deadline;
- provider operation deadline;
- overall command deadline.

A timeout does not automatically prove the business operation failed.

## 36. Cancellation

Cancellation is a governed state transition.

Cancellation must identify:

- who requested it;
- why;
- scope;
- timestamp;
- current state;
- whether the underlying operation is cancellable;
- whether cancellation is cooperative or forced;
- what happens to already-started external effects;
- whether reconciliation is required.

Cancellation does not erase attempts or events.

## 37. Cancellation versus compensation

Cancellation prevents or stops future work where possible.

Compensation addresses a material effect that already occurred.

They are not interchangeable.

Example:

**PAYMENT COMMAND CANCELLED BEFORE SUBMISSION**

is different from:

**PAYMENT SETTLED → FULFILLMENT FAILED → REFUND COMPENSATION**

## 38. Failure taxonomy

The engine must distinguish:

- validation failure;
- authorization denial;
- policy failure;
- precondition failure;
- concurrency conflict;
- dependency failure;
- worker failure;
- infrastructure failure;
- provider rejection;
- provider failure;
- timeout;
- cancellation;
- unknown outcome;
- reconciliation required;
- compensation required.

Collapsing all conditions into FAILED destroys recovery semantics.

## 39. Unknown outcome

UNKNOWN is a protected state.

The engine enters UNKNOWN when it cannot establish whether a consequential effect occurred.

Examples:

- request sent, response lost;
- worker crashed after dispatch;
- provider timeout after acceptance may have occurred;
- access controller command transmission uncertain;
- payment submission uncertain;
- booking creation uncertain.

While UNKNOWN:

- duplicate execution must be blocked where necessary;
- reconciliation must be initiated;
- evidence must be preserved;
- canonical success must not be fabricated.

## 40. Reconciliation engine

Reconciliation is an execution subsystem, not an afterthought.

It compares:

- LegaX intent;
- command;
- attempt;
- provider operation;
- provider state;
- physical observation;
- economic evidence;
- canonical domain state.

Reconciliation may produce:

- confirmed success;
- confirmed failure;
- pending;
- conflict;
- partial completion;
- compensation required;
- unresolved exception requiring human review.

## 41. Reconciliation authority

The engine must not decide what source is authoritative by convenience.

Authority comes from the relevant domain contract.

Examples:

- payment settlement authority belongs to the payment domain/provider settlement semantics;
- physical door state requires the resource/controller observation contract;
- booking capacity belongs to booking-domain canonical state;
- provider service completion follows the provider/domain contract.

The engine coordinates evidence; it does not invent truth.

## 42. External operation lifecycle

External operations may use:

**CREATED → DISPATCHING → SENT → ACCEPTED → PROCESSING → COMPLETED**

or:

**CREATED → SENT → UNKNOWN → RECONCILIATION → RESOLVED**

or:

**CREATED → REJECTED**

External acceptance is not automatically canonical completion.

## 43. Provider adapter boundary

All provider operations must pass through Phase 19 adapter semantics.

The engine must preserve:

- provider ID;
- adapter version;
- provider operation ID;
- provider event ID;
- provider idempotency key;
- request fingerprint;
- provider status;
- provider evidence;
- reconciliation state.

The engine cannot turn a provider API call into universal LegaX authority.

## 44. Physical execution

For physical operations:

**AUTHORIZATION → COMMAND → ACCESS/ENFORCEMENT → CONTROLLER → PHYSICAL EFFECT → OBSERVATION → RECONCILIATION**

The engine must distinguish:

- command sent;
- controller accepted;
- actuator activated;
- physical state observed.

A controller ACK is not automatically proof that the physical world reached the intended state.

## 45. Economic execution

For economic operations:

**AUTHORIZED INTENT → PAYMENT/ECONOMIC COMMAND → PROVIDER EXECUTION → AUTHORIZATION/PROCESSING → SETTLEMENT → RECONCILIATION**

The engine must distinguish:

- payment request;
- payment authorization;
- provider acceptance;
- processing;
- settlement;
- refund;
- dispute;
- reconciliation.

The engine cannot mark settlement merely because an API returned HTTP success.

## 46. Database execution

Local canonical state changes must use the authoritative domain transaction boundary.

The engine should:

1. acquire execution/idempotency boundary;
2. read current authoritative version;
3. validate preconditions;
4. revalidate authorization if required;
5. mutate state;
6. record transition/execution result;
7. record outbox event;
8. commit.

Remote network operations must not be held inside that database transaction.

## 47. Transactional outbox

Where a local state change requires a canonical event:

**STATE CHANGE + OUTBOX RECORD → SAME TRANSACTION → COMMIT → DISPATCH**

If dispatch fails after commit, the durable outbox remains.

If dispatch succeeds and acknowledgement is lost, duplicate publication is possible and consumers must be idempotent.

## 48. Inbox and deduplication

Consumers of execution-triggering messages should support:

**RECEIVE → VALIDATE → DEDUPLICATE → PROCESS → RECORD EFFECT → ACK**

Duplicate messages must not silently create duplicate business effects.

Deduplication scope must be explicit.

## 49. Execution events

The engine may emit execution events such as:

- execution.accepted;
- execution.started;
- task.scheduled;
- task.started;
- attempt.started;
- attempt.heartbeat;
- attempt.failed;
- attempt.timed_out;
- execution.retry_scheduled;
- execution.waiting;
- execution.cancel_requested;
- execution.cancelled;
- execution.unknown;
- reconciliation.started;
- reconciliation.resolved;
- execution.succeeded;
- execution.failed;
- compensation.requested;
- compensation.completed.

These are runtime occurrences.

A canonical domain event must be emitted only according to Phase 17 and the authoritative domain's rules.

## 50. Event and evidence relationship

The engine records what happened in execution.

Evidence supports reconstruction.

An execution event does not automatically establish domain truth.

The engine should preserve references to:

- command;
- authorization;
- attempt;
- worker;
- provider operation;
- request/response;
- state version;
- event;
- evidence;
- reconciliation decision.

## 51. Observability

The engine must be observable through:

- traces;
- metrics;
- logs;
- runtime events;
- execution histories.

Trace context should propagate across:

**API → ENGINE → QUEUE → WORKER → PROVIDER → CALLBACK → RECONCILIATION**

OpenTelemetry provides semantic conventions for spans, events, metrics, logs, messaging, RPC and related operations; these conventions support consistent correlation across distributed execution.

Observability must not become a source of unauthorized data exposure.

## 52. Trace identity

Where applicable preserve:

- trace_id;
- span_id;
- request_id;
- command_id;
- execution_id;
- attempt_id;
- task_id;
- correlation_id;
- causation_id;
- provider operation ID.

These identifiers answer different questions and must not be overloaded.

## 53. Execution metrics

Useful engine metrics include:

- queue latency;
- schedule-to-start latency;
- execution latency;
- attempt duration;
- retry count;
- timeout rate;
- cancellation rate;
- unknown outcome rate;
- reconciliation age;
- worker utilization;
- lease expiry rate;
- duplicate rejection rate;
- dead-letter rate;
- provider dependency latency;
- compensation rate;
- execution cost.

Metrics are operational signals, not authorization inputs by default.

## 54. Backpressure

The engine must protect itself and downstream systems from overload.

Backpressure may use:

- bounded queues;
- admission limits;
- concurrency limits;
- rate limits;
- per-provider quotas;
- per-domain quotas;
- per-tenant/community/org quotas;
- circuit breakers;
- load shedding;
- priority/fairness.

Backpressure must not silently drop consequential commands without an explicit outcome.

## 55. Dead-letter handling

A dead-letter execution is not deletion.

It must preserve:

- execution identity;
- command identity;
- reason;
- attempt history;
- retry history;
- evidence references;
- last known state;
- reconciliation requirements;
- operator action.

Reprocessing must be idempotency-safe.

## 56. Poison work

Repeatedly failing work must not consume infinite capacity.

The engine should detect:

- deterministic failure;
- repeated schema failure;
- incompatible task version;
- provider permanent rejection;
- authorization expiry;
- stale target;
- repeated dependency failure.

Poison work should move to a bounded terminal/review state.

## 57. Circuit breakers

Circuit breakers may prevent calls to degraded external dependencies.

A circuit breaker is a reliability mechanism.

It is not authorization.

Opening a circuit must produce explicit execution outcomes such as deferred, unavailable, or reconciliation-required according to the command contract.

## 58. Dependency graph

An execution may depend on:

- database;
- event dispatcher;
- provider;
- payment network;
- access controller;
- messaging system;
- object storage;
- AI service;
- identity service;
- authorization service.

Dependency failure must not automatically alter the meaning of authorization.

The engine should classify whether a dependency is:

- required before execution;
- required during execution;
- required for confirmation;
- required only for observability.

## 59. Authorization service failure

If authorization is required and unavailable, the engine must not silently assume ALLOW.

Possible outcomes:

- DENY;
- WAIT;
- RETRY;
- INDETERMINATE;
- REAUTHORIZATION_REQUIRED.

Only an explicit policy may permit bounded continuation for defined low-risk/offline cases.

## 60. Security boundary

The engine inherits Phase 21 security controls.

It must protect against:

- task forgery;
- task substitution;
- command substitution;
- replay;
- privilege escalation;
- stale worker execution;
- queue poisoning;
- cross-tenant execution;
- secret leakage;
- provider compromise;
- callback forgery;
- malicious task input;
- worker compromise;
- confused deputy;
- unauthorized operator action.

A valid worker credential cannot be used to execute an arbitrary command.

## 61. Tenant and scope isolation

Execution isolation must preserve applicable:

- organization scope;
- community scope;
- provider scope;
- participant scope;
- service scope;
- geographic scope;
- data scope;
- jurisdiction.

Cross-scope execution requires explicit authorization and domain rules.

A queue or worker pool must never become an implicit cross-tenant trust boundary.

## 62. Privacy boundary

The engine should minimize execution payloads.

Tasks should reference sensitive data rather than copying it when practical.

Logs and traces must not expose secrets or unnecessary sensitive information.

Phase 22 remains the canonical privacy/governance boundary.

Execution convenience cannot override data minimization, purpose limitation, retention, access, or rights controls.

## 63. Secret handling

Execution workers may require credentials for external systems.

Secrets must be:

- scoped;
- short-lived where possible;
- protected;
- rotated;
- audited;
- inaccessible to unrelated workers;
- excluded from ordinary logs;
- revocable.

Possession of a provider credential does not create LegaX authority.

## 64. AI execution

AI may propose or assist with:

- task classification;
- prioritization;
- routing;
- anomaly detection;
- workflow planning;
- summarization;
- prediction;
- retry recommendations;
- reconciliation suggestions.

AI must not silently:

- grant authority;
- modify command scope;
- bypass authorization;
- approve payment;
- extend execution authority;
- suppress evidence;
- turn an inference into canonical truth.

An AI-generated command remains subject to the normal command, authorization, execution, security, privacy and evidence contracts.

## 65. AI agents as workers

An AI agent may operate as an execution worker only with:

- explicit agent identity;
- bounded tools;
- bounded command types;
- bounded targets;
- bounded credentials;
- rate/cost limits;
- approval requirements where applicable;
- auditability;
- revocation;
- deterministic execution boundaries for consequential effects.

Tool availability is not authority.

## 66. Human-in-the-loop

The engine may pause execution for:

- approval;
- verification;
- review;
- safety confirmation;
- dispute;
- high-risk action.

The approval itself must be attributable and scoped.

Approval does not silently change the command.

If the approved material parameters differ, the engine must require the appropriate reauthorization/review.

## 67. Emergency execution

Emergency paths may reduce latency but cannot create unlimited authority.

An emergency execution contract must define:

- invoker;
- authority source;
- allowed operation;
- target scope;
- duration;
- resource limit;
- notification;
- evidence;
- post-action review;
- prohibited operations.

Emergency mode must remain auditable and bounded.

## 68. Offline execution

Offline execution may be required for physical or infrastructure scenarios.

Offline execution must use:

- pre-authorized bounded credentials or decisions;
- expiry;
- scope;
- replay protection;
- monotonic/nonce controls where appropriate;
- local evidence;
- reconciliation.

Offline mode must never become a permanent authorization bypass.

## 69. Scheduling and recurring execution

A recurring schedule is not one perpetual command.

Each consequential occurrence must produce a distinct execution/command instance under the schedule's governed semantics.

At each occurrence:

- validate schedule;
- validate lifecycle;
- validate authorization freshness;
- validate target state;
- enforce idempotency;
- create execution;
- execute;
- record outcome.

Changing a schedule does not rewrite historical executions.

## 70. Batch execution

Batch execution must explicitly define:

- per-item authorization;
- batch identity;
- per-item command identity;
- atomicity;
- partial success;
- retry;
- deduplication;
- ordering;
- concurrency;
- finalization.

A batch authorization must not automatically imply authorization for every item unless the authorization contract explicitly says so.

## 71. Fan-out and fan-in

Workflows may fan out into multiple tasks.

The engine must preserve:

- parent execution;
- child execution identities;
- dependency relationships;
- per-child authorization;
- per-child outcome;
- aggregation semantics.

Fan-out must respect resource and rate limits.

Fan-in must not hide partial failures.

## 72. Compensation and Saga-style execution

Distributed workflows may require compensation.

A compensation is:

**NEW COMMAND → NEW AUTHORIZATION → NEW EXECUTION → NEW EVENT/EVIDENCE**

It cannot erase the original execution history.

The engine should support compensation plans where a multi-step workflow cannot be atomically rolled back.

## 73. Exactly-once claims

The engine MUST distinguish:

- exactly-once workflow identity;
- effectively-once logical command semantics;
- at-least-once task delivery;
- at-least-once event delivery;
- exactly-once local database commit;
- uncertain external side effects.

Industry durable-execution systems demonstrate that durable workflow state, task retries, event history and idempotent activities can provide strong execution guarantees, but external operations still require explicit idempotency and reconciliation. Temporal documents durable event history, task retries and idempotency patterns; AWS Step Functions similarly distinguishes execution guarantees by workflow type.

LegaX must never advertise a stronger guarantee than the actual boundary supports.

## 74. Execution state machine

Canonical execution lifecycle:

**ACCEPTED → QUEUED → READY → LEASED → RUNNING → OUTCOME**

Possible branches:

**RUNNING → RETRY_SCHEDULED → QUEUED**

**RUNNING → WAITING → READY**

**RUNNING → UNKNOWN → RECONCILIATION_REQUIRED**

**RUNNING → CANCEL_REQUESTED → CANCELLED**

**RUNNING → FAILED**

**RUNNING → SUCCEEDED**

**UNKNOWN → RECONCILING → SUCCEEDED/FAILED/PENDING/COMPENSATION_REQUIRED/UNRESOLVED**

Terminal state transitions must be governed and durable.

## 75. Task state machine

Canonical task states:

- CREATED;
- QUEUED;
- READY;
- LEASED;
- RUNNING;
- WAITING;
- RETRY_SCHEDULED;
- SUCCEEDED;
- FAILED;
- CANCELLED;
- EXPIRED;
- UNKNOWN;
- DEAD_LETTERED.

A task state is not equivalent to business-domain state.

## 76. Lease state machine

**AVAILABLE → LEASED → HEARTBEATING → COMPLETED**

Failure branches:

**LEASED → EXPIRED**

**HEARTBEATING → EXPIRED**

**EXPIRED → REQUEUED**

A requeued task must not permit the stale worker to continue writing consequential state.

## 77. Reconciliation state machine

**NOT_REQUIRED → REQUIRED → IN_PROGRESS → EVIDENCE_COLLECTED → EVALUATED → RESOLVED**

Possible outcomes:

- CONFIRMED_SUCCESS;
- CONFIRMED_FAILURE;
- STILL_PENDING;
- CONFLICT;
- COMPENSATION_REQUIRED;
- HUMAN_REVIEW_REQUIRED.

## 78. Execution engine data boundary

Conceptual execution record:

- execution_id;
- command_id;
- command_version;
- status;
- actor_ref;
- authorization_id;
- target_ref;
- domain/service;
- context_ref;
- idempotency_scope;
- idempotency_key;
- command_fingerprint;
- workflow_ref;
- current_task_ref;
- current_attempt_ref;
- deadline;
- retry_policy;
- cancellation_state;
- reconciliation_state;
- compensation_ref;
- correlation_id;
- causation_id;
- trace_id;
- created_at;
- started_at;
- completed_at;
- updated_at.

The physical database schema is a later implementation concern.

## 79. Task data boundary

Conceptual task record:

- task_id;
- execution_id;
- task_type;
- task_version;
- queue;
- priority;
- worker_selector;
- status;
- input_ref;
- output_ref;
- lease_ref;
- retry_count;
- next_attempt_at;
- deadline_at;
- dependency_refs;
- security_scope;
- created_at;
- updated_at.

## 80. Attempt data boundary

Conceptual attempt record:

- attempt_id;
- execution_id;
- task_id;
- worker_id;
- lease_id;
- attempt_number;
- started_at;
- ended_at;
- outcome;
- error_class;
- error_reference;
- provider_operation_ref;
- checkpoint_ref;
- heartbeat_at;
- evidence_refs;
- trace_id.

## 81. Execution engine APIs

API Architecture governs external interface design.

The engine may expose:

- submit execution;
- get execution;
- cancel execution;
- retry/recover execution where permitted;
- approve waiting step;
- signal workflow;
- query task;
- operator inspection;
- reconciliation request;
- dead-letter inspection;
- health/readiness.

Consequential API operations still require Phase 23 + Phase 06 + Phase 16 semantics.

## 82. Engine commands versus domain commands

An engine command such as:

**START_EXECUTION**

is not equivalent to a business command such as:

**PAYMENT_CAPTURE**

The engine command controls runtime behavior.

The domain command defines the business effect.

Keeping these separate prevents the runtime from becoming a second business semantics layer.

## 83. Execution admission contract

The engine should accept a consequential command only when:

1. command envelope is valid;
2. command version is supported;
3. authorization reference exists;
4. authorization outcome permits the exact operation;
5. command fingerprint matches authorization;
6. idempotency rules pass;
7. deadline is valid;
8. required security/privacy gates pass;
9. execution scope is valid;
10. domain execution contract is registered.

Otherwise the engine returns a governed non-execution result.

## 84. Pre-execution gate

Before effectful execution:

**LOAD COMMAND → LOAD AUTHORIZATION → VALIDATE BINDING → CHECK FRESHNESS → CHECK TARGET → CHECK STATE → CHECK CONCURRENCY → RESERVE IDEMPOTENCY → EXECUTE**

For external operations:

**LOAD COMMAND → GATES → CREATE EXTERNAL OPERATION → DISPATCH → RECORD OUTCOME → RECONCILE**

## 85. Runtime crash recovery

After a process or node crash, recovery must determine:

- durable execution state;
- last committed task state;
- last lease;
- attempt status;
- whether external effect may have occurred;
- pending outbox messages;
- pending reconciliation;
- retry eligibility.

The engine must recover from durable state rather than infer completion from process memory.

## 86. Deployment and worker versioning

Workers and task definitions evolve.

The engine must preserve compatibility for in-flight work.

A deployment must not silently change the meaning of:

- task type;
- command version;
- input schema;
- output schema;
- retry semantics;
- side-effect semantics;
- authorization assumptions.

Long-running executions require version-aware worker routing or workflow migration semantics.

## 87. Backward compatibility

A task already accepted under version N must remain executable or migratable under a governed compatibility strategy.

Breaking changes require:

- new task version;
- migration;
- drain-and-replace;
- or explicit cancellation/recovery.

Never reinterpret old execution history using incompatible semantics.

## 88. Resource governance

The engine must govern:

- CPU;
- memory;
- concurrency;
- queue depth;
- database connections;
- provider calls;
- network bandwidth;
- execution duration;
- fan-out;
- storage;
- AI/model calls;
- cost.

Resource exhaustion must produce explicit execution outcomes rather than hidden partial execution.

## 89. Cost governance

Where execution has material cost, the command contract may include:

- cost class;
- maximum spend;
- provider budget;
- AI token/cost budget;
- execution duration budget;
- retry budget.

The engine must stop or escalate when a governed budget is exhausted.

Cost limits are not authority.

## 90. Reliability model

The CEE must be designed for:

- crash recovery;
- duplicate delivery;
- duplicate worker execution;
- delayed messages;
- out-of-order callbacks;
- provider outage;
- dependency degradation;
- network partitions;
- worker loss;
- queue overload;
- stale state;
- partial execution;
- deployment during execution.

Distributed execution cannot assume perfect connectivity.

## 91. Safety model

For high-consequence operations, the engine should support:

- precondition checks;
- approval gates;
- two-person controls where required;
- bounded execution;
- dry-run where appropriate;
- simulation;
- cancellation windows;
- rate limits;
- physical safety interlocks;
- reconciliation;
- human escalation.

Safety controls do not grant authority.

## 92. Execution isolation

The engine should isolate failures by:

- queue;
- worker pool;
- domain;
- provider;
- tenant/community/organization scope;
- priority class;
- resource pool.

One failing provider or workflow must not consume all execution capacity.

## 93. Cross-domain execution

When Domain A needs Domain B:

**DOMAIN A COMMAND → AUTHORIZATION → ENGINE → DOMAIN B COMMAND/API → DOMAIN B EXECUTION → DOMAIN B EVENT → DOMAIN A REACTION**

Domain A must not mutate Domain B's canonical state directly.

The engine provides coordination, not ownership transfer.

## 94. Community, organization and provider boundaries

The engine respects:

- 20A Community Management Network OS;
- 20B Organization Management Network OS;
- 20C Provider Management Network OS.

The engine may execute commands originating from these operating systems.

It does not become their governance layer.

Community scope is not organization scope.

Organization scope is not provider scope.

Provider execution scope is not universal LegaX authority.

## 95. LegaServices boundary

LegaServices own domain semantics.

The engine supplies common execution infrastructure for:

- LegaPay;
- LegaAccess;
- LegaRide;
- LegaNetwork;
- LegaBooking;
- LegaMarket;
- LegaFood;
- LegaHealth;
- LegaAds;
- LegaAward;
- LegaWork.

The engine must not embed service-specific business rules merely to simplify runtime implementation.

## 96. Access execution

LegaAccess owns access semantics.

The CEE may execute access commands, coordinate controller operations, wait for observations, and reconcile results.

It does not define who is authorized to enter.

## 97. Payment execution

LegaPay owns payment semantics.

The CEE may execute payment commands and provider interactions.

It does not define payment authority or settlement truth.

## 98. Booking execution

LegaBooking owns reservation semantics.

The CEE may execute booking commands.

It does not own capacity merely because it schedules the reservation task.

## 99. Work execution

LegaWork owns work-domain semantics.

The CEE may dispatch work tasks.

A worker receiving a task does not automatically become authorized to perform every action against the target.

## 100. Evidence reconstruction

Every consequential execution must support reconstruction:

**ACTOR → AUTHORIZATION → COMMAND → EXECUTION → TASK → ATTEMPT → WORKER → EFFECT/EXTERNAL OPERATION → OUTCOME → STATE → EVENT → EVIDENCE → RECONCILIATION**

The engine should make this chain queryable without requiring reconstruction from unrelated logs.

## 101. Audit and operator actions

Operator actions against the engine are consequential when they can:

- cancel execution;
- retry execution;
- requeue work;
- alter worker eligibility;
- change retry policies;
- bypass queues;
- resolve reconciliation;
- release dead letters;
- trigger compensation.

Such actions require explicit authorization, attribution and evidence.

Operator convenience must not become a hidden authority path.

## 102. Administrative repair

Repair tools must be separated from normal execution.

A repair must identify:

- actor;
- reason;
- affected execution;
- before state;
- intended correction;
- authorization;
- evidence;
- resulting state;
- event.

Direct database edits are not an acceptable normal execution mechanism.

## 103. Testing strategy

CEE testing must include:

- unit tests;
- command contract tests;
- authorization binding tests;
- idempotency tests;
- concurrency tests;
- lease/fencing tests;
- retry tests;
- timeout tests;
- cancellation tests;
- worker crash tests;
- provider failure tests;
- unknown-outcome tests;
- reconciliation tests;
- outbox/inbox tests;
- duplicate delivery tests;
- out-of-order tests;
- version compatibility tests;
- security tests;
- privacy/logging tests;
- load/backpressure tests;
- disaster/recovery tests;
- end-to-end domain tests.

## 104. Chaos and failure testing

The engine should deliberately test:

- worker termination after dispatch;
- network loss after provider submission;
- duplicate task delivery;
- delayed callback;
- callback replay;
- provider outage;
- database failover;
- queue duplication;
- lease expiration;
- stale worker;
- deployment during execution;
- clock skew within defined limits;
- partial fan-out;
- event dispatcher crash;
- reconciliation worker crash.

The objective is to verify that uncertainty remains explicit and duplicate effects are controlled.

## 105. Formal execution properties

The engine should preserve these properties:

### Safety

No consequential effect occurs outside the command's authorized scope.

### Liveness

Eligible execution eventually progresses or reaches an explicit terminal/review state.

### Durability

Accepted execution state survives runtime failure.

### Idempotency

Retrying the same logical operation does not create an unintended additional business effect.

### Attribution

Every consequential attempt identifies its command, execution and worker.

### Reconciliation

Uncertain distributed outcomes have a durable path to resolution.

### Isolation

One execution cannot silently corrupt another execution's state.

### Version integrity

Execution history remains interpretable under the versions that produced it.

## 106. Core invariants

1. The CEE is an execution runtime, not an authority system.
2. Authorization remains outside the engine's authority boundary.
3. Phase 16 remains the command contract.
4. Phase 15 remains the canonical state-transition contract.
5. Phase 17 remains the canonical event contract.
6. Phase 18 remains the evidence contract.
7. Phase 19 remains the provider boundary.
8. Phase 21 remains the security architecture.
9. Phase 22 remains the privacy/governance boundary.
10. Phase 23 remains the API architecture.
11. A task is not authority.
12. A queue is not authority.
13. A worker credential is not business authority.
14. A lease is not authority.
15. A scheduler is not authority.
16. An execution ID is not authorization.
17. Command identity remains distinct from execution identity.
18. Execution identity remains distinct from attempt identity.
19. Task identity remains distinct from command identity.
20. Worker identity remains distinct from business actor identity.
21. Retry does not create a new business command.
22. Worker restart does not create a new business operation.
23. Material command changes require reauthorization.
24. Authorization freshness is enforced where required.
25. Execution state is not domain state.
26. Domain state remains owned by its authoritative domain.
27. Queues do not expand scope.
28. Priority does not override authorization.
29. Emergency priority does not manufacture authority.
30. Scheduled execution is revalidated where required.
31. Recurring schedules create distinct governed execution instances.
32. Durable waiting does not preserve worker ownership indefinitely.
33. Leases expire.
34. Stale workers cannot pass fencing boundaries.
35. Heartbeats do not prove business success.
36. Worker failure does not prove external failure.
37. External effects are not hidden inside local DB transactions.
38. Local state and required outbox records commit atomically.
39. Event dispatch may be at-least-once.
40. Event consumers must tolerate duplicates.
41. Retry policy is explicit.
42. Retry budgets are bounded.
43. Retry does not bypass authorization.
44. Retry after unknown outcome requires safe semantics or reconciliation.
45. Timeout is not automatically failure.
46. Unknown is distinct from failed.
47. Unknown outcomes require reconciliation where consequential.
48. Provider acceptance is not automatically canonical success.
49. Controller acknowledgement is not automatically physical success.
50. Payment API success is not automatically settlement.
51. Reconciliation uses authoritative domain rules.
52. Provider callbacks are validated and deduplicated.
53. Provider events do not bypass domain state rules.
54. AI does not bypass execution gates.
55. AI does not grant authority.
56. AI worker credentials are bounded.
57. Human approval is scoped.
58. Approval does not silently modify the command.
59. Cancellation does not erase history.
60. Compensation is a new command.
61. Compensation requires its own authorization.
62. Compensation cannot erase the original event.
63. Dead letters preserve history.
64. Reprocessing is idempotency-safe.
65. Cross-domain execution preserves domain ownership.
66. Domain A cannot directly mutate Domain B's canonical state.
67. Engine runtime events are not automatically domain events.
68. Execution telemetry is not automatically evidence of business truth.
69. Execution logs must protect sensitive data.
70. Secrets are excluded from ordinary execution logs.
71. Provider credentials do not create LegaX authority.
72. Tenant/community/organization/provider isolation is preserved.
73. Queue placement does not change scope.
74. Worker selection does not change authority.
75. Admission success does not mean business success.
76. Accepted execution is not completed execution.
77. Durable execution does not mean universal exactly-once external effects.
78. Exactly-once claims are scoped to their actual boundary.
79. Workflow definitions and instances are distinct.
80. Workflow version changes are governed.
81. In-flight executions remain historically interpretable.
82. Non-deterministic external operations remain outside deterministic replay logic.
83. Timers are execution triggers, not authority.
84. Signals are untrusted until validated.
85. Callback signatures are not business authorization.
86. Backpressure cannot silently discard consequential commands.
87. Resource exhaustion produces explicit outcomes.
88. Circuit breakers do not alter authorization semantics.
89. Authorization service failure does not silently become ALLOW.
90. Offline execution is bounded and reconciled.
91. Emergency execution is bounded and reviewable.
92. Batch semantics define per-item authorization.
93. Fan-out preserves child identity and outcomes.
94. Fan-in preserves partial failure.
95. Operator actions are attributable.
96. Administrative repair is governed.
97. Direct canonical DB mutation is not a normal execution path.
98. Every consequential attempt has an attributable worker or execution boundary.
99. Every accepted asynchronous execution has durable status.
100. Every consequential execution has a failure path.
101. Every defined unknown state has a reconciliation path.
102. Every retryable operation has a bounded retry budget.
103. Every stale-worker risk has a fencing strategy.
104. Every external effect has an explicit side-effect boundary.
105. Every execution can be reconstructed to its authorization.
106. No execution may exceed the authority bound to its command.
107. No worker may manufacture business authority.
108. No runtime convenience may weaken canonical contracts.
109. No engine feature may create a parallel authority chain.
110. No consequential execution may proceed without the required authorization binding.
111. No consequential execution may silently broaden target scope.
112. No unknown outcome may silently become success.
113. No provider acceptance may silently become canonical completion.
114. No retry may silently become a second business operation.
115. No compensation may silently erase history.
116. No engine restart may silently duplicate an execution.
117. No stale lease holder may commit through a protected execution boundary.
118. No API status may be treated as proof of domain completion.
119. No telemetry signal may be promoted to truth without the appropriate evidence/verification contract.
120. No implementation is execution-ready until its failure, retry, concurrency, reconciliation and authorization paths are defined.

## 107. Contradiction tests

### A — Worker receives valid task but command authorization expired
Required: block/revalidate; never execute merely because the task exists.

### B — Queue contains a command for another tenant
Required: scope isolation prevents delivery/execution.

### C — Same command delivered twice
Required: same logical execution; no unintended duplicate effect.

### D — Same idempotency key with changed amount
Required: fingerprint conflict; reject.

### E — Worker crashes after external dispatch
Required: unknown/reconciliation unless success is established.

### F — Worker lease expires
Required: fencing prevents stale worker from committing.

### G — New worker receives requeued task
Required: old worker cannot continue consequential commit.

### H — Provider accepts payment but settlement is pending
Required: canonical state remains pending/processing.

### I — Provider response is lost
Required: unknown/reconciliation, not blind duplicate.

### J — Callback arrives twice
Required: deduplicate.

### K — Callback arrives out of order
Required: state transition rules prevent invalid regression.

### L — Workflow code changes while instance is running
Required: version compatibility/migration; no silent reinterpretation.

### M — Authorization service unavailable
Required: no silent ALLOW.

### N — AI recommends direct command
Required: normal authorization and execution gates still apply.

### O — Operator retries dead-letter command
Required: explicit authorization and idempotency-safe reprocessing.

### P — Timer fires after authorization expiry
Required: revalidate before consequential execution.

### Q — Batch partially succeeds
Required: explicit per-item outcomes.

### R — Provider outage triggers retry storm
Required: bounded retry budget and backoff/circuit protection.

### S — API returns 202
Required: execution remains non-terminal until actual outcome.

### T — Execution marked successful but domain transaction rolls back
Required: canonical success is not emitted.

### U — Event dispatcher crashes after DB commit
Required: outbox remains durable.

### V — Dispatcher publishes then crashes before acknowledgement
Required: duplicate event delivery is safe.

### W — Physical controller acknowledges command but sensor disagrees
Required: physical outcome remains unresolved/reconciled.

### X — Worker has provider credential but no valid LegaX command
Required: provider credential cannot authorize execution.

### Y — Organization operator has engine access but no domain authority
Required: operator cannot execute arbitrary business command.

### Z — Cross-domain worker attempts direct target-domain mutation
Required: target domain rejects/bounds the mutation.

### AA — Unknown payment is retried without reconciliation
Required: block retry where duplicate effect is possible.

### AB — Cancel requested after external effect
Required: cancellation cannot erase effect; reconcile/compensate as required.

### AC — Stale task version reaches a new worker
Required: version gate rejects or migrates task.

### AD — Queue priority is marked emergency
Required: emergency priority does not bypass authorization.

### AE — Engine restart occurs during execution
Required: durable state recovery; no silent duplicate business operation.

## 108. Readiness gate

Every consequential execution type must answer:

1. What command type does it execute?
2. Which domain owns the resulting state?
3. Which authorization decision permits it?
4. How is authorization bound to the command?
5. How is authorization freshness evaluated?
6. What is the execution identity?
7. What are the task and attempt identities?
8. What worker boundary executes it?
9. What queue is used?
10. What scope/isolation applies?
11. What admission controls apply?
12. What preconditions apply?
13. What state/version is protected?
14. What idempotency scope applies?
15. What happens on duplicate delivery?
16. What retry policy applies?
17. What is the retry budget?
18. What timeouts apply?
19. What is the overall deadline?
20. What happens if the worker crashes?
21. What happens if the lease expires?
22. What fencing mechanism applies?
23. What happens if the external request was sent but the response is lost?
24. How is UNKNOWN represented?
25. What reconciliation authority resolves UNKNOWN?
26. What external operation identifier is preserved?
27. What provider idempotency is supported?
28. What happens if a provider accepts but does not complete?
29. What events are runtime events?
30. What events are canonical domain events?
31. What evidence is retained?
32. How are traces correlated?
33. How are sensitive logs protected?
34. What happens under provider outage?
35. What prevents retry storms?
36. What happens under queue overload?
37. What happens when authorization is unavailable?
38. What happens when authorization is revoked while queued?
39. What happens when target state changes?
40. What happens when a workflow waits?
41. How are timers governed?
42. How are callbacks authenticated and deduplicated?
43. How are workflow versions handled?
44. How are in-flight executions recovered after deployment?
45. What is the cancellation contract?
46. What is the compensation contract?
47. What is the dead-letter policy?
48. What is the operator authorization model?
49. How are repairs audited?
50. How can the entire execution be reconstructed?
51. What are the security boundaries?
52. What privacy constraints apply?
53. What tenant/community/org/provider isolation applies?
54. What resource/cost limits apply?
55. What emergency/offline behavior applies?
56. What AI involvement is permitted?
57. What safety controls apply?
58. What chaos/failure tests prove the design?
59. What guarantees are actually provided?
60. What guarantees are explicitly not provided?

If any answer is ambiguous for a consequential execution type, that execution type is not implementation-ready.

## 109. Relationship to Phase 16

Phase 16 remains the canonical Command & Execution Contract.

Phase 24 implements the runtime needed to honor that contract.

The relationship is:

**PHASE 16 COMMAND CONTRACT → PHASE 24 EXECUTION RUNTIME → PHASE 17 EVENT CONTRACT / PHASE 18 EVIDENCE / PHASE 19 PROVIDER / DOMAIN STATE**

Phase 24 must not duplicate Phase 16's command semantics in a divergent implementation.

## 110. Relationship to Phase 15

Phase 15 defines governed state transitions.

Phase 24 provides the runtime mechanics for carrying out an authorized transition.

The engine may execute a transition but cannot declare a transition valid merely because a worker completed a function.

Canonical state remains governed by the authoritative domain.

## 111. Relationship to Phase 17

Phase 17 defines event identity, envelopes, ordering, delivery and canonical-vs-observational meaning.

Phase 24 produces runtime execution occurrences and triggers canonical events when domain contracts require them.

The engine does not redefine event truth.

## 112. Relationship to Phase 18

Phase 18 defines evidence semantics and provenance.

Phase 24 records execution evidence references and runtime evidence.

The engine cannot promote runtime logs into stronger evidence merely because they were generated internally.

## 113. Relationship to Phase 19

Phase 19 defines provider/adapters.

Phase 24 invokes provider adapters and tracks external operation lifecycle.

The engine does not absorb provider semantics into the core.

## 114. Relationship to Phase 21

Phase 21 defines cross-cutting security.

Phase 24 applies security controls to execution:

**IDENTITY → AUTHENTICATION → AUTHORIZATION → EXECUTION → OBSERVATION → RESPONSE**

Security controls can block execution but do not manufacture business authority.

## 115. Relationship to Phase 22

Phase 22 remains the privacy/governance boundary.

Phase 24 must enforce data minimization and scoped processing throughout tasks, logs, traces, worker inputs, execution history, evidence and reconciliation.

## 116. Relationship to Phase 23

Phase 23 governs APIs.

API requests submit commands or queries to the engine/domain.

The engine provides durable execution semantics behind asynchronous API operations.

**API ACCEPTED ≠ ENGINE COMPLETED ≠ DOMAIN STATE CONFIRMED**

## 117. Research basis

This architecture was checked against mature durable-execution and distributed-runtime patterns.

Temporal documents durable workflow state, event history, worker task execution, replay, retries, deterministic workflow constraints and idempotency; these patterns validate the separation between durable orchestration and side-effecting activities.

Temporal's current operation documentation also explicitly models asynchronous operations, retries, at-least-once execution and the need for idempotent handlers.

AWS Step Functions documents different workflow execution guarantees, including exactly-once Standard workflows and at-least-once Express workflows, reinforcing that execution guarantees must be scoped rather than generalized.

OpenTelemetry's current semantic conventions provide a useful observability model for traces, events, messaging and distributed execution correlation.

These references inform runtime engineering patterns; LegaX's canonical authority, state, event, evidence, provider, security, privacy and API contracts remain authoritative.

## 118. Canonical execution model

The complete LegaX execution model is:

**ACTOR/INTENT**
→ **AUTHENTICATION**
→ **PARTICIPATION/CONTEXT**
→ **AUTHORIZATION**
→ **COMMAND**
→ **EXECUTION GATES**
→ **ENGINE ADMISSION**
→ **DURABLE EXECUTION**
→ **SCHEDULING**
→ **LEASE**
→ **ATTEMPT**
→ **LOCAL OR EXTERNAL EFFECT**
→ **OUTCOME**
→ **STATE**
→ **EVENT**
→ **EVIDENCE**
→ **RECONCILIATION**
→ **COMPENSATION/REVIEW IF REQUIRED**

For distributed execution:

**COMMAND → EXECUTION → TASK → WORKER → EFFECT → OUTCOME → RECONCILIATION**

For uncertain execution:

**ATTEMPT → UNKNOWN → FREEZE DUPLICATIVE EFFECT → RECONCILE → RESOLVE**

For long-running execution:

**WORKFLOW → DURABLE STATE → TASK/WAIT → SIGNAL/TIMER/CALLBACK → TASK → OUTCOME**

## 119. Final architectural rules

### Rule 1 — The engine executes; it does not authorize

**ENGINE ACCESS ≠ BUSINESS AUTHORITY.**

### Rule 2 — The command remains the execution contract

The engine must not broaden or reinterpret a command.

### Rule 3 — Durable execution is not universal exactly-once execution

External effects require explicit idempotency and reconciliation.

### Rule 4 — Unknown is a protected state

The engine must preserve uncertainty until sufficient evidence resolves it.

### Rule 5 — Workers are execution agents, not authority holders

Worker credentials authorize technical participation in the execution plane, not arbitrary business actions.

### Rule 6 — Leases prevent stale execution

Where stale workers can cause harm, fencing is mandatory.

### Rule 7 — Domain state belongs to domains

The engine coordinates state transitions; it does not become the source of truth for every domain.

### Rule 8 — Runtime events are not automatically domain events

Execution history and canonical business occurrences remain distinct.

### Rule 9 — Retries are governed

No unbounded retry loops and no blind retry after an uncertain consequential effect.

### Rule 10 — Compensation is new history

A compensation never erases the original operation.

### Rule 11 — API acceptance is not execution completion

Asynchronous execution must remain observable and durable until a governed outcome exists.

### Rule 12 — AI cannot bypass the execution contract

AI may assist; it does not manufacture authority.

## Final execution-engine rule

**NO AUTHORIZATION → NO CONSEQUENTIALLY EFFECTFUL EXECUTION.**

**NO VALID COMMAND BINDING → NO EXECUTION.**

**NO FRESH REQUIRED CONDITIONS → NO CONSEQUENTIAL EXECUTION.**

**NO IDEMPOTENCY OR RECONCILIATION SAFETY → NO RETRY OF A POTENTIALLY DUPLICATIVE EFFECT.**

**NO FENCING WHERE STALE WORKERS CAN CAUSE HARM → NO SAFE CONCURRENT EXECUTION.**

**NO SUFFICIENT EVIDENCE → NO PROMOTION OF UNKNOWN OUTCOME TO CANONICAL SUCCESS.**

**NO DOMAIN OWNERSHIP → NO CANONICAL DOMAIN STATE MUTATION.**

**NO RECONCILIATION PATH → NO IMPLEMENTATION-READY DISTRIBUTED CONSEQUENTIAL EXECUTION.**

**NO PARALLEL AUTHORITY CHAIN.**

**Status:** Core Execution Engine architecture defined as the governed runtime layer between authorized commands and real-world/digital effects; implementation remains subordinate to Phases 01–23 and subsequent concrete infrastructure/runtime gates.
