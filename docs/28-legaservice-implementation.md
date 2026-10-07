# LegaX — LegaService Implementation

## 28 — LegaService Implementation

**Status:** Foundational implementation architecture contract — implementation-ready when the service-specific domain contract and readiness gate are satisfied.

## 1. Purpose

LegaService Implementation defines the repeatable engineering architecture through which a canonical LegaService is turned from a Phase 12 service contract into a production service without creating a parallel identity, authorization, state, event, evidence, execution, provider, privacy, security, API or persistence system.

Phase 12 answers:

**WHAT IS THIS SERVICE AND WHAT CONTRACT DOES IT OWN?**

Phase 28 answers:

**HOW IS THAT CONTRACT IMPLEMENTED, operated, tested, deployed, observed, evolved and reconciled in production?**

The implementation architecture therefore connects:

**SERVICE CONTRACT → DOMAIN MODEL → SERVICE API → AUTHORIZATION → COMMAND → CORE EXECUTION → DOMAIN STATE → EVENT/EVIDENCE → INTEGRATIONS → OBSERVABILITY → OPERATIONS**

The service implementation is a bounded implementation of a canonical LegaX domain. It is not the LegaX platform itself.

## 2. Core definition

A LegaService implementation is a production software system that implements one bounded LegaX service domain, exposes governed interfaces, applies domain rules, invokes shared LegaX contracts, persists service-owned state, coordinates authorized commands, emits canonical events, records evidence, integrates with providers, and remains observable, secure, testable, deployable and recoverable.

**IMPLEMENTATION REALIZES A CONTRACT; IT DOES NOT REDEFINE THE CONTRACT.**

A service implementation may contain:

- API handlers;
- application services;
- domain logic;
- repositories;
- persistence mappings;
- command handlers;
- event publishers;
- provider adapters;
- background workers;
- schedulers;
- caches;
- projections;
- validation;
- observability;
- configuration;
- operational controls.

These are implementation mechanisms, not new authority systems.

## 3. Non-duplication rule

**A LEGASERVICE IMPLEMENTATION MUST NOT CREATE A PARALLEL LEGAx AUTHORITY, AUTHORIZATION, IDENTITY, ACCESS, EXECUTION, EVENT, EVIDENCE OR SOURCE-OF-TRUTH SYSTEM.**

The service implementation consumes:

- Phase 02 Identity;
- Phase 03 Authentication;
- Phase 04 Account;
- Phase 05 Administration;
- Phase 06 Authorization;
- Phase 07 Access;
- Phase 08 Resources & Physical World;
- Phase 09 Economic & Commerce;
- Phase 10 Lifecycle & Policy;
- Phase 11 Events, Evidence & Intelligence;
- Phase 12 LegaServices;
- Phase 13 Canonical Domain Model;
- Phase 14 Canonical Relationship Model;
- Phase 15 Canonical State Machines;
- Phase 16 Command & Execution Contract;
- Phase 17 Canonical Event Contract;
- Phase 18 Evidence Contract;
- Phase 19 Provider/Adapter Architecture;
- Phase 20A Community Management Network OS;
- Phase 20B Organization Management Network OS;
- Phase 20C Provider Management Network OS;
- Phase 21 Security;
- Phase 22 Privacy/Governance;
- Phase 23 API;
- Phase 24 Core Execution Engine;
- Phase 25 Neon Database Architecture;
- Phase 26 CRM;
- Phase 27 RAG.

## 4. Service implementation position

Canonical runtime:

**CONSUMER → API → AUTHENTICATION → CONTEXT → AUTHORIZATION → DOMAIN VALIDATION → COMMAND → CORE EXECUTION → DOMAIN STATE → EVENT → EVIDENCE**

For reads:

**CONSUMER → API → AUTHENTICATION → CONTEXT → AUTHORIZATION → DOMAIN QUERY → AUTHORITATIVE STATE/PROJECTION → RESPONSE**

For external providers:

**AUTHORIZED COMMAND → CORE EXECUTION → SERVICE ADAPTER → PROVIDER → PROVIDER OUTCOME → EVIDENCE → RECONCILIATION → SERVICE STATE → EVENT**

For AI assistance:

**RAG/INTELLIGENCE → RECOMMENDATION/PROPOSAL → AUTHORIZATION → COMMAND → CORE EXECUTION**

## 5. Service boundary

Each LegaService must have an explicit boundary.

A service owns:

- its domain concepts;
- its domain invariants;
- its domain state;
- its service commands;
- its service queries;
- its service events;
- its service-owned persistence;
- its service-specific provider relationships;
- its service-specific workflows;
- its domain evidence;
- its domain operational metrics.

A service does not automatically own:

- global identity;
- global accounts;
- authorization policy;
- physical access;
- payment settlement;
- general organizational authority;
- community membership;
- provider identity;
- platform-wide execution.

## 6. Bounded context

A LegaService should be implemented as a bounded context where its domain language, invariants and consistency boundaries are explicit. Bounded contexts are a useful way to separate complex domains and clarify service boundaries in both monolithic and distributed architectures. citeturn0search5

The service boundary must answer:

- What concepts does this service own?
- What concepts does another domain own?
- Which state is authoritative here?
- Which state is only referenced?
- Which operations are commands?
- Which data is projected?
- Which events cross the boundary?
- Which provider assertions require reconciliation?

## 7. Service contract first

Implementation begins only after the Phase 12 service contract is sufficiently complete.

Required contract:

1. purpose;
2. domain boundary;
3. actors;
4. participants;
5. resources;
6. relationships;
7. commands;
8. queries;
9. state machines;
10. policies;
11. authorization requirements;
12. API surface;
13. events;
14. evidence;
15. integrations;
16. economic semantics where applicable;
17. security;
18. privacy;
19. intelligence;
20. operational requirements.

**NO SERVICE CODE BEFORE DOMAIN OWNERSHIP IS CLEAR ENOUGH TO IMPLEMENT SAFELY.**

## 8. Implementation layers

A reference LegaService implementation may contain:

**INTERFACE LAYER**
- HTTP/API;
- webhooks;
- event consumers;
- scheduled triggers;
- internal command endpoints.

**APPLICATION LAYER**
- command orchestration;
- query orchestration;
- transaction coordination;
- authorization binding;
- idempotency handling.

**DOMAIN LAYER**
- entities;
- value objects;
- aggregates where justified;
- domain rules;
- state transitions;
- domain policies.

**PERSISTENCE LAYER**
- repositories;
- SQL;
- projections;
- transaction boundaries;
- outbox/inbox.

**INTEGRATION LAYER**
- provider adapters;
- external APIs;
- message transports;
- access/resource controllers.

**EXECUTION LAYER**
- Phase 24 Core Execution Engine integration.

**OBSERVABILITY LAYER**
- logs;
- metrics;
- traces;
- audit/evidence references.

The layers are implementation boundaries, not authority boundaries.

## 9. Domain model implementation

The domain model should represent only concepts required by the service contract.

Typical components:

- aggregate/entity;
- value object;
- domain relationship;
- state;
- command;
- domain policy;
- domain event;
- reference to external concept.

Avoid creating giant universal aggregates.

**SERVICE MODEL ≠ ENTIRE LegaX DOMAIN MODEL**

## 10. Aggregate and consistency boundary

An aggregate or equivalent consistency boundary should be used only where atomic domain invariants require it.

Do not create an aggregate merely because two tables are related.

The implementation should distinguish:

- transactional consistency;
- eventual consistency;
- external consistency;
- projection consistency.

Cross-domain operations should generally use commands/events/reconciliation rather than distributed transactions across unrelated ownership boundaries.

## 11. Service-owned source of truth

For every persisted field, the implementation must answer:

- Who owns it?
- Who can change it?
- Which service is authoritative?
- Is it a projection?
- What is its freshness?
- What is its lifecycle?
- What evidence supports it?

A service must not duplicate another domain's source of truth merely for convenience.

## 12. References versus copies

Prefer governed references to authoritative external state when exact current state matters.

A service may maintain a projection when:

- performance requires it;
- search requires it;
- reporting requires it;
- local workflow requires it.

Projection metadata must identify:

- source domain;
- source record;
- source version;
- observed time;
- projection time;
- freshness;
- invalidation/rebuild strategy.

**PROJECTION ≠ SOURCE OF TRUTH**

## 13. API implementation

The API implementation follows Phase 23.

Canonical request path:

**REQUEST → PARSE → SCHEMA VALIDATION → AUTHENTICATION → CONTEXT → AUTHORIZATION → DOMAIN VALIDATION → PRECONDITIONS → COMMAND/QUERY**

OpenAPI 3.2.1 is the current published OpenAPI specification as of September 10, 2026 and should be used as the contract-description baseline for applicable HTTP APIs. citeturn0search0

The service implementation should maintain:

- OpenAPI description;
- operation IDs;
- schemas;
- error contracts;
- security requirements;
- idempotency semantics;
- pagination rules;
- versioning;
- deprecation.

## 14. API is not domain logic

Controllers/route handlers should not become the service's business authority.

Prefer:

**API → APPLICATION COMMAND/QUERY → DOMAIN**

rather than:

**API → SQL + business rules + provider call**

This allows the same domain operation to be safely invoked by:

- API;
- event consumer;
- scheduled task;
- worker;
- internal service;
- approved agent.

## 15. Authentication and authorization

Authentication establishes who/what is operating.

Authorization decides whether the actor may perform the requested operation.

The implementation must not replace Phase 06 with:

- route ownership;
- database ownership;
- JWT scope alone;
- role name alone;
- UI visibility;
- provider permission;
- internal service identity.

OWASP ASVS 5.0 requires resource servers to validate tokens and then enforce authorization against the requested resource and granted permissions; this aligns with the LegaX separation of authentication and authorization. citeturn0search41turn0search6

## 16. Authorization binding

Every consequential service command should carry or resolve an authorization reference.

Conceptual binding:

**actor + context + action + target + authorization_id + policy/version + expiry → command**

The command must not silently broaden:

- actor;
- target;
- scope;
- operation;
- quantity;
- resource;
- time;
- authority.

## 17. Authorization freshness

Before consequential execution, the implementation must validate that the authorization remains applicable.

Check:

- authorization state;
- expiry;
- target;
- action;
- scope;
- policy version where required;
- relevant lifecycle state;
- concurrency/version;
- revocation.

A previously allowed request cannot automatically execute forever.

## 18. Command implementation

Every consequential operation should be represented by a command contract.

Typical command fields:

- command_id;
- command_type;
- actor;
- authorization_id;
- target;
- requested_at;
- idempotency_key;
- correlation_id;
- causation_id;
- expected_version;
- parameters;
- policy/version references;
- provenance.

Command validation precedes execution.

## 19. Idempotency

Consequential commands must be idempotent according to their semantics.

The implementation must distinguish:

- duplicate request;
- retry;
- same command with same parameters;
- same idempotency key with different parameters;
- replayed event;
- repeated provider callback.

Same idempotency key + different material command must be rejected.

## 20. Core Execution integration

Phase 24 remains the execution runtime.

A LegaService must not implement its own competing queue/execution engine merely because it needs asynchronous work.

Canonical:

**SERVICE COMMAND → PHASE 16 CONTRACT → PHASE 24 CORE EXECUTION ENGINE → SERVICE HANDLER → OUTCOME**

The service may define handler logic, but the durable execution semantics remain centralized.

## 21. Transaction boundary

A service transaction should atomically protect state changes that belong to the same consistency boundary.

Where applicable:

**DOMAIN STATE CHANGE + OUTBOX EVENT → SAME DATABASE TRANSACTION → COMMIT**

External side effects must not be assumed atomic with a database transaction.

## 22. External side effects

For providers or external systems:

**LOCAL ACCEPTANCE → OUTBOUND COMMAND → EXTERNAL EXECUTION → PROVIDER OUTCOME → EVIDENCE → RECONCILIATION**

Do not hold a database transaction open while waiting for an external provider.

## 23. Unknown outcome

If an external request times out after transmission:

**TIMEOUT ≠ FAILURE**

**TIMEOUT ≠ SUCCESS**

The service should represent the outcome as unknown/pending/reconciliation-required according to the domain state machine.

Retry must be safe.

## 24. State machine implementation

Phase 15 governs service state transitions.

Implementation pattern:

**CURRENT STATE → REQUEST → VALIDATE → PRECONDITIONS → AUTHORIZATION → EXECUTE → NEW STATE → EVENT → EVIDENCE**

State transitions should use optimistic concurrency or equivalent controls.

Canonical database pattern:

**READ VERSION N → VALIDATE → AUTHORIZE → CONDITIONAL WRITE VERSION N → VERSION N+1**

Version mismatch requires re-evaluation.

## 25. Domain invariants

Domain invariants belong in the domain/application boundary rather than only the UI.

Examples:

- invalid state transitions rejected;
- required relationships exist;
- quantities are valid;
- lifecycle conditions hold;
- ownership boundaries respected;
- duplicate commands rejected;
- expired operations rejected.

Database constraints should reinforce important invariants but should not be the only expression of business semantics.

## 26. Validation layers

Separate:

**SCHEMA VALIDATION**
from
**AUTHORIZATION**
from
**DOMAIN VALIDATION**
from
**PRECONDITION VALIDATION**
from
**EXECUTION**

A syntactically valid request may still be unauthorized.

An authorized request may still violate current domain state.

## 27. Error architecture

Errors should distinguish at least:

- malformed request;
- unauthenticated;
- unauthorized;
- not found;
- conflict;
- invalid state;
- precondition failed;
- rate limited;
- dependency unavailable;
- timeout;
- unknown external outcome;
- reconciliation required;
- internal failure.

Do not expose sensitive implementation details.

Do not convert every failure to HTTP 500.

## 28. Event implementation

Phase 17 governs service events.

A service event should preserve:

- event_id;
- event_type;
- schema/version;
- source;
- subject;
- domain/service;
- occurrence time;
- correlation;
- causation;
- command reference;
- authorization reference where appropriate;
- provenance;
- payload;
- integrity metadata.

CloudEvents provides a common event-description model intended to improve consistency and portability across event producers and consumers; LegaX applies that principle through its own canonical event contract. citeturn0search1

## 29. Domain event versus integration event

A domain event represents a meaningful occurrence inside the service domain.

An integration event is the governed cross-boundary representation intended for consumers.

Do not expose every internal implementation event externally.

The mapping must be deliberate.

## 30. Outbox

Where a state change and event must remain consistent:

**TRANSACTION: DOMAIN WRITE + OUTBOX WRITE**

Then:

**COMMIT → OUTBOX DISPATCH → CONSUMER**

If dispatch fails, the outbox remains available for retry.

This prevents the dangerous split:

**DATABASE COMMIT SUCCESS + EVENT LOST**

## 31. Inbox and consumer idempotency

Event consumers should record processing state where required:

**RECEIVED → PROCESSING → PROCESSED**

Duplicate delivery must not create duplicate consequential effects.

CloudEvents standardizes event metadata, but LegaX still requires domain-specific idempotency and execution semantics. citeturn0search1

## 32. Event-driven service integration

Services should integrate through:

- synchronous API calls;
- commands;
- canonical events;
- projections;
- provider adapters.

Choose based on consistency and coupling requirements.

Do not turn every method call into an asynchronous event merely for fashion.

## 33. Query architecture

Queries should be optimized for reads without becoming hidden commands.

A query must not silently:

- mutate domain state;
- trigger payment;
- grant access;
- alter lifecycle;
- send external commands.

If a read requires a side effect, model it as a command.

## 34. CQRS where justified

A service may use separate command and query models where scale or complexity warrants it.

CQRS is optional.

Do not introduce CQRS merely because the service has APIs.

If projections are used:

**COMMAND MODEL → EVENT → PROJECTION → QUERY MODEL**

The projection remains rebuildable from authoritative inputs where the domain permits.

## 35. Persistence implementation

Neon/PostgreSQL remains the persistence substrate.

A LegaService implementation should define:

- service schema ownership;
- migrations;
- constraints;
- indexes;
- foreign keys where appropriate;
- uniqueness;
- lifecycle fields;
- version fields;
- audit/evidence references;
- outbox/inbox;
- retention;
- data classification.

The service must not bypass Phase 25 database architecture.

## 36. Migration architecture

Every schema change should be:

- versioned;
- reviewable;
- repeatable;
- forward-safe where possible;
- tested;
- observable;
- reversible where feasible.

Production migrations must account for:

- existing rows;
- locks;
- deployment order;
- backward compatibility;
- rollback limitations;
- concurrent traffic.

## 37. Expand-and-contract migration

For incompatible changes:

**EXPAND → DEPLOY COMPATIBLE CODE → BACKFILL/MIGRATE → SWITCH → CONTRACT**

Do not deploy a breaking schema and application change simultaneously unless the deployment model guarantees safety.

## 38. Service configuration

Configuration should distinguish:

- immutable build configuration;
- environment configuration;
- secrets;
- feature flags;
- policy/configuration data.

Secrets must never be source-controlled.

Security-sensitive configuration changes require governed operational controls.

## 39. Secrets

Provider/API credentials are integration secrets.

They are not LegaX authority.

Secret lifecycle:

**ISSUE → STORE → USE → ROTATE → REVOKE → RETIRE**

Service code should receive only the minimum secret scope required.

## 40. Provider integration

Provider integrations follow Phase 19.

Implementation boundary:

**SERVICE → ADAPTER CONTRACT → PROVIDER**

The adapter handles:

- authentication;
- protocol translation;
- request mapping;
- response mapping;
- provider errors;
- provider IDs;
- webhook validation;
- retries;
- reconciliation;
- rate limits.

Provider-specific semantics should not leak uncontrolled through the service's canonical domain model.

## 41. Provider identity

Provider IDs remain provider-scoped.

Example:

**provider_id + provider_object_id**

must not automatically become a universal LegaX object identity.

Mapping requires explicit registration.

## 42. Webhooks

Webhook implementation:

**RECEIVE → AUTHENTICATE SOURCE → VERIFY SIGNATURE → VALIDATE SCHEMA → DEDUPLICATE → RECORD ASSERTION → MAP → RECONCILE → EMIT CANONICAL EVENT IF JUSTIFIED**

Webhook arrival is not proof of canonical state.

## 43. Scheduled work

Scheduled work must be represented as a governed trigger.

A schedule does not itself grant authority.

For a consequential scheduled command:

**SCHEDULE → CREATE/ACTIVATE COMMAND → AUTHORIZATION → CORE EXECUTION**

Expired policy or authority must still prevent execution.

## 44. Background workers

Workers are execution infrastructure.

Worker identity must be explicit.

Worker possession of a queue message does not automatically grant unrestricted authority.

Workers must operate within:

- service scope;
- command scope;
- credential scope;
- authorization;
- resource limits.

## 45. Retry policy

Retries must be operation-specific.

Safe retry depends on:

- idempotency;
- error class;
- provider semantics;
- timeout semantics;
- state;
- concurrency;
- compensation.

Do not retry:

**UNKNOWN EXTERNAL OUTCOME**

blindly.

Reconcile first when necessary.

## 46. Rate limits and backpressure

Services should define:

- per-client limits;
- per-actor limits;
- per-provider limits;
- command throughput;
- queue capacity;
- concurrency;
- retry budgets.

Backpressure is required to prevent cascading failure.

## 47. Resilience

A production LegaService should define behavior for:

- dependency outage;
- database degradation;
- provider outage;
- queue delay;
- duplicate delivery;
- stale state;
- partial deployment;
- regional/network failure;
- credential failure;
- configuration error.

Graceful degradation must never silently weaken authorization.

## 48. Availability versus correctness

The service must not choose availability by silently violating correctness.

Examples:

- returning stale access authorization as current;
- treating provider timeout as success;
- using expired credentials;
- bypassing authorization because the policy service is unavailable.

Where safe, fail closed for consequential operations and expose an explicit unavailable/indeterminate state.

## 49. Security implementation

Security follows Phase 21 and should be implemented through:

- secure authentication integration;
- authorization enforcement;
- input validation;
- output encoding;
- secret protection;
- dependency security;
- secure API configuration;
- auditability;
- rate limiting;
- abuse detection;
- tenant isolation;
- secure provider integration;
- secure event handling.

OWASP ASVS is designed as a basis for testing application security controls, making it an appropriate implementation verification baseline. citeturn0search6

## 50. Authorization enforcement points

Authorization may be checked at:

- API boundary;
- application command handler;
- resource access layer;
- execution gate;
- provider adapter where provider authorization is also required.

These checks must implement the same canonical authorization semantics rather than create independent policy systems.

## 51. Defense in depth

A service may have multiple enforcement layers.

Example:

**API AUTHORIZATION → DOMAIN PRECONDITION → DATABASE CONSTRAINT → EXECUTION GATE**

Defense in depth must not create contradictory authorities.

The canonical authorization decision remains the governing permission decision.

## 52. Privacy implementation

Phase 22 governs privacy.

The service should implement:

- data classification;
- minimization;
- purpose tracking;
- access controls;
- retention;
- deletion;
- correction;
- export where applicable;
- sensitive-data handling;
- auditability.

Do not log sensitive payloads merely because application logs are convenient.

## 53. Data access

Service queries should return only data required for the authorized use case.

Avoid:

**SELECT EVERYTHING → FILTER IN UI**

Prefer:

**AUTHORIZED USE CASE → MINIMAL DATA QUERY**

This reduces privacy and security exposure.

## 54. Multi-tenant isolation

Where a service operates across organizations, communities, providers or other scopes, every query and command must carry explicit scope.

Tenant isolation must be enforced at more than the UI.

Potential layers:

- API;
- application;
- query;
- database/RLS;
- cache;
- events;
- provider integration.

## 55. Cache isolation

Caches must include authorization and scope.

A cached object accessible to one participant must not become visible to another merely because the request key is identical.

Cache invalidation must follow lifecycle and permission changes where required.

## 56. Observability

Every production service should expose:

**LOGS + METRICS + TRACES + EVENTS + EVIDENCE REFERENCES**

Observability should answer:

- what happened?
- when?
- where?
- for which service?
- for which command?
- under which authorization?
- with which dependency?
- what was the outcome?
- what remains unknown?

## 57. Trace propagation

Request/correlation/causation/trace identifiers should propagate across:

- API;
- service;
- queue;
- worker;
- provider adapter;
- event;
- Core Execution;
- database operations where practical.

These identifiers support accountability but are not themselves authorization.

## 58. Audit and evidence

Audit logging and evidence are not identical.

The implementation should record required evidence references according to Phase 18.

Do not assume every debug log is legally sufficient evidence.

## 59. Health endpoints

Services should expose operational health appropriate to their environment.

Separate:

- liveness;
- readiness;
- dependency health;
- business health.

A service being alive does not mean its domain operations are safe.

## 60. Metrics

Recommended categories:

### Traffic
- request rate;
- command rate;
- query rate.

### Reliability
- success;
- failure;
- timeout;
- unknown;
- reconciliation-required.

### Latency
- API latency;
- domain latency;
- provider latency;
- queue delay.

### Execution
- command age;
- retries;
- dead letters;
- active workers.

### Business
- service-specific outcomes.

### Security
- authorization denials;
- suspicious requests;
- provider anomalies.

Metrics must not leak sensitive information.

## 61. Deployment architecture

A service implementation should progress through:

**DEVELOPMENT → TEST → VALIDATION → STAGING → PRODUCTION**

Production promotion requires:

- tested artifact;
- schema compatibility;
- configuration;
- secrets;
- migrations;
- observability;
- rollback/recovery plan;
- authorization tests;
- security checks.

## 62. Immutable build artifact

Build artifacts should be identifiable by version/digest.

Deployment should make it possible to determine:

- what code ran;
- what configuration ran;
- what schema version ran;
- what dependency versions ran.

## 63. Feature flags

Feature flags may control rollout.

A feature flag must not be treated as an authorization system.

Security-sensitive behavior should not become accessible merely because a flag is enabled.

## 64. Backward compatibility

Service contracts should evolve deliberately.

For APIs/events:

- additive changes preferred;
- breaking changes versioned;
- consumers identified;
- deprecation periods defined;
- migration tested.

## 65. Event schema evolution

Events must be versioned under Phase 17.

Consumers must tolerate permitted evolution.

Never change an event's semantic meaning while keeping the same contract identity.

## 66. API versioning

API versioning should distinguish:

- contract version;
- implementation version;
- database schema version.

They are related but not identical.

## 67. Testing architecture

Implementation testing must occur at multiple levels:

**UNIT → DOMAIN → APPLICATION → INTEGRATION → CONTRACT → SECURITY → CONCURRENCY → FAILURE → END-TO-END → PRODUCTION VERIFICATION**

No single test level proves service correctness.

## 68. Unit tests

Test:

- domain rules;
- value objects;
- state transitions;
- policy calculations;
- validation;
- deterministic transformations.

Unit tests should not attempt to prove external-provider correctness.

## 69. Integration tests

Test:

- database;
- queues;
- event transport;
- provider adapters;
- authorization integration;
- external dependencies.

Use realistic failure conditions.

## 70. Contract tests

Test that:

- API matches OpenAPI;
- events match canonical event schemas;
- provider adapters match provider contracts;
- consumers can process supported versions.

## 71. Authorization tests

Every consequential command needs:

- allowed case;
- denied case;
- wrong target;
- wrong scope;
- expired authorization;
- revoked authorization;
- stale authorization;
- changed context;
- insufficient capability;
- insufficient authority;
- cross-tenant attempt.

## 72. Concurrency tests

Test:

- duplicate command;
- concurrent update;
- stale version;
- competing worker;
- repeated webhook;
- retry during state change.

Expected behavior must be deterministic and safe.

## 73. Failure-injection tests

Simulate:

- database failure;
- provider timeout;
- provider duplicate;
- network failure;
- event dispatch failure;
- worker crash;
- partial response;
- queue duplication;
- credential expiry.

Verify recovery/reconciliation.

## 74. Security tests

Use the Phase 21 baseline and OWASP ASVS.

Test:

- authentication;
- authorization;
- injection;
- access control;
- session/security;
- secret handling;
- API security;
- dependency vulnerabilities;
- tenant isolation;
- event/webhook security.

## 75. Privacy tests

Test:

- unauthorized field access;
- data minimization;
- retention;
- deletion propagation;
- correction;
- export;
- logs;
- caches;
- provider sharing.

## 76. Performance tests

Measure:

- p50/p95/p99 latency;
- throughput;
- concurrency;
- queue delay;
- database load;
- provider latency;
- cache hit rate.

Performance optimizations must not weaken policy enforcement.

## 77. Production verification

Deployment is not completion.

Verification should include:

**DEPLOY → HEALTH → AUTHENTICATION → AUTHORIZATION → READ → COMMAND → EXECUTION → EVENT → EVIDENCE → RECONCILIATION**

For provider-backed services:

**SERVICE → PROVIDER → PROVIDER OUTCOME → RECONCILIATION → CANONICAL STATE**

## 78. Rollback

Rollback must consider both code and database state.

Possible strategies:

- application rollback;
- feature rollback;
- configuration rollback;
- migration rollback;
- forward-fix;
- projection rebuild.

A rollback must not resurrect revoked permissions or obsolete security controls.

## 79. Disaster recovery

Each service should define:

- backup dependencies;
- recovery point objective;
- recovery time objective;
- restoration procedure;
- event replay strategy;
- projection rebuild;
- provider reconciliation;
- secret recovery;
- post-recovery validation.

## 80. Reconciliation

Reconciliation is a first-class implementation capability.

It is required where:

- provider state may differ;
- events may be delayed;
- external commands may be uncertain;
- projections may be stale;
- migrations may be partial;
- integrations may fail.

Canonical:

**EXPECTED STATE ↔ OBSERVED STATE → DIFFERENCE → RECONCILIATION → EVIDENCE → CORRECTED STATE/EVENT**

## 81. Service-specific workflows

A service may implement workflows, but workflow execution remains bounded by Phase 24.

A workflow should define:

- trigger;
- state;
- steps;
- dependencies;
- authorization points;
- timeout;
- retry;
- compensation;
- cancellation;
- outcome;
- evidence.

A workflow is not a second execution engine.

## 82. Long-running operations

Long-running operations should expose explicit status.

Example:

**REQUESTED → ACCEPTED → RUNNING → WAITING_EXTERNAL → COMPLETED/FAILED/CANCELLED/UNKNOWN/RECONCILIATION_REQUIRED**

Do not keep HTTP connections open simply to imitate synchronous execution.

## 83. Compensation

Compensation is not rollback in the database sense.

If an external side effect occurred, the service may need a compensating operation.

Example:

**PAYMENT CAPTURED → REFUND COMMAND**

not:

**ROLL BACK DATABASE → PRETEND PAYMENT NEVER HAPPENED**

## 84. Economic services

For services involving money:

- pricing;
- offer;
- order;
- payment;
- authorization;
- settlement;
- refund;
- dispute;

remain governed by Phase 09 and LegaPay where applicable.

A service may initiate a payment command but must not redefine payment settlement semantics.

## 85. Access-related services

For access:

**SERVICE REQUEST → AUTHORIZATION → LegaAccess → ENFORCEMENT → OUTCOME**

A LegaService must not implement a second physical-access authority system.

## 86. Resource-related services

For resources:

- resource identity;
- state;
- capacity;
- reservation;
- availability;

must follow Phase 08 and the owning service/domain.

## 87. Community-related services

Community operations remain subject to 20A.

A service may operate a community-facing capability but cannot silently turn service membership into community membership or authority.

## 88. Organization-related services

Organization operations remain subject to 20B.

Service implementation must not treat organization membership as unrestricted service authority.

## 89. Provider operations

Provider-side operations remain subject to 20C.

A LegaService may call provider capabilities through governed adapters but must not silently become the provider's internal operating system.

## 90. CRM integration

CRM may initiate or receive service workflows.

Canonical:

**CRM RELATIONSHIP/CASE → AUTHORIZED SERVICE COMMAND → SERVICE EXECUTION → SERVICE EVENT → CRM PROJECTION**

CRM is not the service source of truth.

## 91. RAG integration

RAG may assist service intelligence.

Canonical:

**SERVICE KNOWLEDGE → RAG → GROUNDED RECOMMENDATION → AUTHORIZATION IF ACTION → COMMAND**

RAG cannot execute service operations.

## 92. Intelligence integration

Intelligence may:

- forecast;
- summarize;
- classify;
- recommend;
- detect anomalies;
- propose routing.

It must not silently become service authority.

## 93. AI agent implementation

An agent interacting with a service requires:

- agent identity;
- user/delegator identity where applicable;
- task;
- scope;
- tools;
- operation allowlist;
- target constraints;
- authorization;
- confirmation;
- rate/quantity limits;
- audit;
- revocation.

**AGENT TOOL ≠ AUTHORITY**

## 94. Service-to-service authentication

Internal services must authenticate one another.

But:

**SERVICE AUTHENTICATION ≠ BUSINESS AUTHORIZATION**

A trusted service still needs permission for the requested operation and target.

## 95. Service-to-service authorization

Every internal consequential call should carry:

- caller identity;
- target service;
- operation;
- resource/target;
- scope;
- authorization context;
- correlation.

Do not create a blanket "internal services are trusted" rule.

## 96. Secrets and credentials

Each integration should use the narrowest credential scope.

Provider credentials are provider-scoped.

Service credentials are service-scoped.

No credential should imply universal LegaX authority.

## 97. Dependency management

Dependencies should be:

- versioned;
- scanned;
- reviewed;
- observable;
- replaceable where practical.

A third-party library must not silently introduce a new authority mechanism.

## 98. Supply chain

Build and deployment should protect:

- source;
- dependencies;
- build process;
- artifact;
- deployment credentials;
- runtime configuration.

Compromised dependencies must be detectable and recoverable.

## 99. Service template

A standard LegaService implementation template should contain:

**/api**
- routes/controllers
- request/response schemas

**/application**
- commands
- queries
- handlers
- orchestration

**/domain**
- entities
- value objects
- rules
- state transitions
- domain events

**/infrastructure**
- repositories
- database
- messaging
- provider adapters
- external clients

**/workers**
- asynchronous handlers

**/contracts**
- OpenAPI
- event schemas
- command schemas
- provider contracts

**/observability**
- logs
- metrics
- traces

**/tests**
- unit
- integration
- contract
- security
- concurrency
- failure

The exact repository layout may vary; the architectural responsibilities must remain.

## 100. Service implementation manifest

Each implemented LegaService should have a machine-readable manifest containing:

- service_id;
- service_name;
- version;
- domain;
- owner;
- API version;
- event schemas;
- commands;
- queries;
- state machines;
- dependencies;
- providers;
- data stores;
- queues;
- authorization requirements;
- privacy classification;
- deployment environments;
- health endpoints;
- observability;
- recovery configuration.

## 101. Service lifecycle

Implementation lifecycle:

**CONTRACTED → DESIGNED → SCAFFOLDED → IMPLEMENTED → UNIT_TESTED → INTEGRATION_TESTED → CONTRACT_VERIFIED → SECURITY_VERIFIED → STAGED → ACCEPTED → DEPLOYED → OBSERVED → EVOLVED → DEPRECATED → RETIRED**

A deployed service that has not passed required verification is not production-ready.

## 102. Service versioning

Service version must not be confused with:

- API version;
- event version;
- schema version;
- provider adapter version;
- policy version.

Each has its own lifecycle.

## 103. Environment isolation

Development, testing, staging and production must have separate:

- credentials;
- secrets;
- external provider environments where supported;
- data;
- event streams;
- indexes;
- caches.

Production data must not be copied into lower environments without appropriate governance.

## 104. Test data

Synthetic or appropriately governed test data should be used.

Test fixtures must not accidentally create:

- real payment effects;
- real access effects;
- real customer communications;
- real provider operations.

## 105. Operational ownership

Every service must have explicit ownership for:

- engineering;
- security;
- privacy;
- operations;
- domain product;
- incident response;
- provider integrations;
- data lifecycle.

An ownerless service is not production-ready.

## 106. Service SLOs

Define where applicable:

- availability;
- latency;
- correctness;
- freshness;
- queue delay;
- reconciliation age;
- recovery time.

Business-critical services require stronger SLOs than informational services.

## 107. Dependency budgets

A service should know which dependencies are critical.

For each dependency:

- timeout;
- retry;
- circuit breaker;
- fallback;
- failure mode;
- reconciliation;
- owner.

Do not allow unbounded retry chains.

## 108. Cascading failure protection

Use:

- timeouts;
- bounded retries;
- concurrency limits;
- circuit breaking;
- backpressure;
- bulkheads;
- queue limits.

These controls protect availability without bypassing authorization.

## 109. Data consistency strategy

Every service must explicitly classify operations as:

- strongly consistent within local boundary;
- eventually consistent;
- externally consistent through reconciliation;
- observational.

The implementation must not pretend distributed state is immediately consistent when it is not.

## 110. Read-after-write

Where user experience requires read-after-write consistency, define the mechanism:

- same transactional read;
- primary read;
- version token;
- command result;
- projection wait;
- explicit pending state.

Do not silently return stale projections as current state.

## 111. Pagination and large collections

Large queries require bounded:

- page size;
- cursor;
- sort;
- filters;
- time range.

Cursor pagination is preferred where stable traversal is required.

Authorization must apply to every page.

## 112. Bulk operations

Bulk commands must define:

- authorization per item or valid shared scope;
- idempotency;
- partial success;
- failure reporting;
- limits;
- transaction boundaries.

One authorized item does not authorize every item in a bulk request.

## 113. Search

Service search may use:

- PostgreSQL search;
- structured filters;
- external search;
- RAG where appropriate.

Search results remain subject to authorization.

Search relevance does not override data access.

## 114. Notifications

Notifications are side effects.

A service must define:

- recipient;
- purpose;
- authorization/privacy basis;
- delivery provider;
- idempotency;
- delivery status;
- retry;
- failure;
- evidence.

A database write should not imply that a message was delivered.

## 115. Files and media

File handling should define:

- ownership;
- access;
- classification;
- storage;
- scanning;
- lifecycle;
- retention;
- deletion;
- provenance.

Object storage is not automatically public.

## 116. Time

Service implementations must distinguish:

- request time;
- occurrence time;
- effective time;
- observed time;
- received time;
- recorded time;
- expiry.

Never use one timestamp for all semantics.

## 117. Jurisdiction

Services operating across jurisdictions must identify:

- applicable jurisdiction;
- regulatory constraints;
- data location;
- provider constraints;
- retention;
- cross-border transfer rules.

Jurisdiction is context, not authority.

## 118. Feature maturity

A service implementation should mature through:

### Level 1 — Contracted
Domain and ownership defined.

### Level 2 — Implemented
Core domain and API work.

### Level 3 — Integrated
Events, providers, database and execution integrated.

### Level 4 — Verified
Security, privacy, concurrency, failure and contract tests pass.

### Level 5 — Operated
Monitoring, SLOs, recovery and reconciliation proven.

### Level 6 — Production
Controlled deployment with verified real-world behavior.

## 119. Implementation readiness gate

A LegaService implementation is ready for production implementation only when:

- Phase 12 contract is complete;
- domain boundary is explicit;
- source-of-truth ownership is explicit;
- actor/participant model is explicit;
- commands are defined;
- queries are defined;
- state machines are defined;
- authorization requirements are defined;
- API contract exists;
- event contract exists;
- evidence requirements exist;
- provider integrations are bounded;
- persistence ownership is defined;
- migration strategy exists;
- idempotency exists;
- concurrency strategy exists;
- unknown-outcome strategy exists;
- reconciliation exists;
- security controls exist;
- privacy controls exist;
- observability exists;
- test strategy exists;
- deployment strategy exists;
- rollback/recovery exists;
- operational ownership exists;
- SLOs are defined where required;
- no parallel authority path exists.

## 120. Implementation verification matrix

For every service command, verify:

| Layer | Verification |
|---|---|
| Identity | Correct actor identity |
| Authentication | Valid authentication |
| Context | Correct participation/context |
| Authorization | Current applicable permission |
| Domain | Valid business invariants |
| State | Valid transition/version |
| Command | Idempotency + target binding |
| Execution | Phase 24 gate |
| Persistence | Correct transaction |
| Provider | Correct adapter if applicable |
| Event | Canonical event emitted |
| Evidence | Required evidence recorded |
| Reconciliation | Required external reconciliation |
| Observability | Traceable |
| Privacy | Data minimization |
| Security | Required controls |
| Recovery | Failure path defined |

## 121. Contradiction tests

### Test 1 — Service role
A service role is called "admin".
**Expected:** the name does not itself grant authority.

### Test 2 — Internal API
A trusted internal service calls another service.
**Expected:** authentication does not replace business authorization.

### Test 3 — Database access
A service can write its database.
**Expected:** database capability does not authorize every business operation.

### Test 4 — UI restriction
A button is hidden.
**Expected:** hidden UI is not authorization.

### Test 5 — Provider success
Provider returns success.
**Expected:** provider outcome is validated and reconciled before canonical state where required.

### Test 6 — Timeout
Provider times out.
**Expected:** unknown/reconciliation-required state, not automatic failure or success.

### Test 7 — Duplicate command
Same idempotency key arrives twice.
**Expected:** no duplicate consequential effect.

### Test 8 — Stale authorization
Authorization was valid when requested but revoked before execution.
**Expected:** execution is rejected or re-evaluated.

### Test 9 — Stale state
Command targets version N while state is N+1.
**Expected:** conditional execution fails and command is re-evaluated.

### Test 10 — Event failure
Database transaction commits but event dispatch fails.
**Expected:** outbox preserves the event for later dispatch.

### Test 11 — Event replay
Same event is delivered twice.
**Expected:** consumer idempotency prevents duplicate consequential effects.

### Test 12 — Cross-tenant request
Actor is authorized in Tenant A but requests Tenant B.
**Expected:** denied unless separately authorized.

### Test 13 — Service authentication
Service credential is valid.
**Expected:** only the credential's permitted service operations are available.

### Test 14 — RAG recommendation
RAG recommends an action.
**Expected:** recommendation does not authorize execution.

### Test 15 — AI agent
Agent has a tool.
**Expected:** tool availability does not equal permission.

### Test 16 — Scheduled command
Scheduled job fires.
**Expected:** authorization and lifecycle requirements are still enforced.

### Test 17 — Bulk command
Actor can modify one resource.
**Expected:** bulk operation does not automatically authorize unrelated resources.

### Test 18 — Projection
Local projection says ACTIVE while source says SUSPENDED.
**Expected:** authoritative domain wins and projection reconciles.

### Test 19 — API validation
Request matches OpenAPI schema.
**Expected:** schema validity does not imply authorization or domain validity.

### Test 20 — Provider webhook
Webhook signature is valid.
**Expected:** authenticity/integrity does not automatically establish business truth.

### Test 21 — Database rollback
External payment succeeded but local transaction rolled back.
**Expected:** payment is reconciled/compensated; database rollback does not erase external reality.

### Test 22 — Cache
Actor A retrieved sensitive data.
**Expected:** Actor B cannot receive it from cache without authorization.

### Test 23 — Migration
New code expects new schema.
**Expected:** deployment ordering prevents incompatible runtime state.

### Test 24 — Notification
Notification record is created.
**Expected:** it does not prove delivery.

### Test 25 — Worker
Worker consumes a queue item.
**Expected:** queue possession does not create unrestricted authority.

### Test 26 — Emergency mode
Emergency flag is enabled.
**Expected:** emergency behavior remains explicitly scoped, time-bounded and auditable.

### Test 27 — Service boundary
Another service needs a concept owned here.
**Expected:** it uses a governed API/event/reference rather than directly mutating the source.

### Test 28 — Direct SQL
Developer can execute SQL.
**Expected:** direct database access is not treated as business authorization.

### Test 29 — Retry
An external call may have succeeded but response was lost.
**Expected:** reconcile before unsafe retry.

### Test 30 — No authorization
Authenticated actor has no applicable permission.
**Expected:** no consequential service action executes.

## 122. Canonical implementation invariants

1. A LegaService implements a bounded domain contract.
2. Implementation does not redefine canonical semantics.
3. Service ownership is explicit.
4. Source-of-truth ownership is explicit.
5. Projections are distinguishable from source state.
6. API contracts are explicit.
7. Commands are explicit.
8. Queries are explicit.
9. State transitions are explicit.
10. Authorization is external to mere code reachability.
11. Authentication is not authorization.
12. Service authentication is not business authorization.
13. UI controls are not authorization.
14. Database access is not authority.
15. Provider credentials are not LegaX authority.
16. Worker possession is not authority.
17. Schedule possession is not authority.
18. RAG output is not authority.
19. AI output is not authority.
20. Tool availability is not authorization.
21. Consequential commands bind authorization.
22. Authorization must remain applicable at execution.
23. Commands require idempotency where consequential.
24. Commands require target binding.
25. Commands require concurrency protection where needed.
26. Stale state must not be silently overwritten.
27. Unknown external outcomes require reconciliation.
28. External side effects are not assumed transactional with local DB.
29. State and required outbox event should be atomically recorded.
30. Event consumers must handle duplicate delivery.
31. Provider assertions remain provider-scoped.
32. Provider outcomes require validation/reconciliation.
33. API validation is not business authorization.
34. Schema validity is not domain validity.
35. Queries must not hide consequential side effects.
36. Bulk operations require explicit scope.
37. Cross-tenant isolation is mandatory where applicable.
38. Cache scope must respect authorization.
39. Privacy applies to service data.
40. Sensitive data should be minimized.
41. Secrets are not authority.
42. Event IDs are not authorization.
43. Trace IDs are not authorization.
44. Error responses must not leak sensitive internals.
45. Service health does not imply business readiness.
46. Deployment does not imply verification.
47. Migration compatibility must be tested.
48. Rollback must account for external side effects.
49. Reconciliation is first-class.
50. Observability must preserve accountability.
51. Service implementation must support recovery.
52. Service-specific workflows remain under Core Execution.
53. Service-specific provider integrations remain under Phase 19.
54. Service state remains under Phase 15.
55. Service commands remain under Phase 16.
56. Service events remain under Phase 17.
57. Service evidence remains under Phase 18.
58. Service APIs remain under Phase 23.
59. Service persistence remains under Phase 25.
60. CRM remains a relationship/engagement layer.
61. RAG remains a grounding layer.
62. Intelligence remains non-authoritative by default.
63. Organization membership does not imply service authority.
64. Community membership does not imply service authority.
65. Provider affiliation does not imply unrestricted service authority.
66. Worker affiliation does not imply unrestricted customer-data access.
67. Context does not manufacture authority.
68. Jurisdiction does not manufacture authority.
69. Availability does not manufacture permission.
70. A successful deployment does not establish correctness.
71. A successful provider call does not automatically establish canonical state.
72. A successful DB write does not prove external execution.
73. An event does not itself create authority.
74. Evidence does not itself create authority.
75. A projection does not replace its source of truth.
76. Service-local policy cannot contradict higher canonical policy.
77. Service implementation must fail safely for consequential uncertainty.
78. Service dependencies require bounded timeouts.
79. Retry budgets must be bounded.
80. No unbounded retry chain is permitted.
81. Production index/cache/data writes require controlled identity.
82. Test environments must be isolated from production side effects.
83. Production secrets must not enter source control.
84. Every service has operational ownership.
85. Every critical service has recovery procedures.
86. Every critical command has failure semantics.
87. Every external side effect has outcome semantics.
88. Every externally consumed event has version semantics.
89. Every persisted migration is versioned.
90. Every protected endpoint enforces applicable authorization.
91. Every consequential operation is attributable.
92. Every consequential operation is observable.
93. Every consequential operation has required evidence.
94. Every unknown outcome has a reconciliation path.
95. Every high-impact capability has security verification.
96. Every sensitive capability has privacy verification.
97. Service boundaries must remain explicit as the system evolves.
98. New dependencies must not silently create authority paths.
99. New features must not silently create second source-of-truth systems.
100. New service implementations must remain compatible with the canonical LegaX architecture.
101. **NO AUTHORIZATION → NO CONSEQUENTIAL LEGASERVICE ACTION.**
102. **IMPLEMENTATION REALIZES CONTRACT; IT DOES NOT REDEFINE CONTRACT.**
103. **NO PARALLEL AUTHORITY CHAIN.**
104. **NO UNKNOWN EXTERNAL OUTCOME AS SUCCESS.**
105. **NO PROJECTION AS SILENT SOURCE OF TRUTH.**

## 123. Final architectural rule

**LegaService Implementation is the governed engineering architecture through which each LegaService contract becomes a secure, testable, observable, deployable and recoverable production service while preserving LegaX's canonical identity, authority, authorization, state, command, execution, event, evidence, provider, privacy, security, API and persistence boundaries.**

The implementation chain is:

**CONTRACT → BOUNDED DOMAIN → API/CONSUMERS → AUTHENTICATION → CONTEXT → AUTHORIZATION → DOMAIN VALIDATION → COMMAND → CORE EXECUTION → STATE → EVENT → EVIDENCE → PROVIDER/DEPENDENCY → RECONCILIATION → OBSERVABILITY → OPERATIONS**

The non-negotiable rule remains:

**NO AUTHORIZATION → NO CONSEQUENTIAL LEGASERVICE ACTION.**

## 124. Research basis

This architecture was cross-checked against current OpenAPI 3.2.1, OWASP ASVS 5.0, CloudEvents, and established bounded-context/service-architecture principles. OpenAPI provides the current interface-description baseline; OWASP ASVS provides a security verification baseline; CloudEvents provides standardized event metadata; bounded-context principles inform service ownership and separation. citeturn0search0turn0search6turn0search1turn0search5

Research informs implementation practice; the LegaX canonical contracts remain authoritative.
