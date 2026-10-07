# LegaX — Neon Database Architecture

## 25 — Neon Database Architecture

**Status:** Foundational physical-data architecture contract — implementation-grade; this phase defines how the canonical LegaX model is physically represented and operated on Neon/PostgreSQL without redefining earlier semantic contracts.

## 1. Purpose

Neon Database Architecture defines the physical persistence architecture for LegaX on PostgreSQL delivered through Neon.

Its job is to answer a different question from the preceding architecture gates:

> How is the already-defined LegaX model durably represented, constrained, isolated, queried, migrated, backed up, branched, observed, and recovered in PostgreSQL/Neon?

This phase does **not** redefine Identity, Authentication, Account, Administration, Authorization, Access, Resources, Economic & Commerce, Lifecycle & Policy, Events, Evidence, LegaServices, the Canonical Domain Model, Relationships, State Machines, Commands, Providers, the Community/Organization/Provider operating systems, Security, Privacy/Governance, APIs, or the Core Execution Engine.

Those contracts remain authoritative.

The database is the persistence substrate that makes those contracts durable and enforceable where database enforcement is appropriate.

## 2. Non-duplication rule

The most important rule of this phase is:

**NEON DATABASE ARCHITECTURE IMPLEMENTS PRIOR CONTRACTS; IT DOES NOT CREATE PARALLEL CONTRACTS.**

A table is not a domain definition.

A column is not an authority.

A foreign key is not a complete relationship contract.

A database role is not a LegaX business role.

A PostgreSQL privilege is not LegaX Authority.

An RLS policy is not the entire LegaX Authorization engine.

A transaction is not a business state machine.

A row lock is not business authorization.

A migration is not a user command.

A database event/outbox row is not automatically the canonical Event Contract.

A provider record is not provider authority.

A cached projection is not automatically source of truth.

A materialized view is not a second canonical domain.

The physical database must therefore preserve the semantic distinctions already established rather than collapse them for implementation convenience.

## 3. Architectural position

The physical persistence path is:

**CANONICAL DOMAIN CONTRACT → RELATIONAL MODEL → CONSTRAINTS → TRANSACTION BOUNDARY → PERSISTENCE → EVENT/OUTBOX → EVIDENCE REFERENCES → PROJECTION/QUERY**

For a consequential operation:

**API/COMMAND → AUTHORIZATION → EXECUTION GATE → DATABASE TRANSACTION WHERE APPLICABLE → STATE CHANGE → OUTBOX/EVENT INTENT → COMMIT → DISPATCH → EXTERNAL EFFECT IF ANY → RECONCILIATION**

The database does not authorize a business operation merely because a connection can write a row.

The database must enforce structural integrity and security boundaries that belong at the persistence layer, while the LegaX Authorization and Core Execution contracts remain authoritative for business permission and execution semantics.

## 4. Neon physical architecture

Neon is the chosen PostgreSQL platform for this architecture.

The relevant Neon hierarchy is:

**PROJECT → BRANCH → COMPUTE ENDPOINT → POSTGRES DATABASE/SCHEMAS**

Neon separates durable storage from compute and supports isolated branches, copy-on-write branching, autoscaling and scale-to-zero behavior. Branches are suitable for isolated development, testing, preview and controlled recovery workflows. Production must remain protected and must not be treated as an experimentation environment.

The LegaX architecture therefore treats:

- **Neon Project** as an infrastructure/container boundary.
- **Production Branch** as the production database lineage and runtime persistence boundary.
- **Non-production Branches** as isolated environments derived under governed workflow.
- **Compute Endpoint** as the PostgreSQL execution endpoint, not durable ownership of the data.
- **PostgreSQL Database** as the relational database boundary.
- **Schemas** as namespace and ownership boundaries within PostgreSQL.
- **Tables** as physical persistence structures for governed concepts.
- **Indexes** as access-path structures, never semantic authority.
- **Constraints** as structural integrity enforcement.
- **Transactions** as atomicity boundaries for operations that genuinely belong in one database transaction.

Neon’s branch model must not be mistaken for Git-style semantic merge. Diverged database states are reconciled through controlled migrations or data operations rather than assuming database branches can be blindly merged.

## 5. Database is not the architecture

The database is one implementation layer of LegaX.

The architectural chain remains:

**ENTITY → IDENTITY → ACCOUNT → AUTHENTICATION → PARTICIPATION → CONTEXT → ROLE → CAPABILITY → AUTHORITY → AUTHORIZATION → ACCESS → COMMAND → EXECUTION → EVENT → EVIDENCE → INTELLIGENCE**

The physical database represents the durable portions of this model.

It may also persist:

- lifecycle state;
- relationships;
- policy references;
- resource representations;
- service records;
- economic records;
- provider references;
- execution records;
- event envelopes;
- evidence metadata;
- audit/security records;
- privacy/governance records;
- projections;
- reconciliation records.

But persistence does not make any of these concepts authoritative outside their defined ownership boundary.

## 6. Source-of-truth discipline

Every persisted concept must have an explicit:

- domain owner;
- source of truth;
- lifecycle owner;
- write authority;
- read model;
- external dependencies;
- evidence requirements;
- reconciliation rule where applicable.

The database must not become a universal source of truth merely because it contains a row.

A canonical record may be stored in Neon while its real-world state depends on external evidence or execution.

A provider assertion may be stored without becoming canonical truth.

A projection may be stored for performance without becoming the source of truth.

A cached record may become stale and must carry freshness semantics where material.

## 7. Bounded relational model

LegaX must not create one giant polymorphic table that attempts to represent every domain.

The relational model should use bounded domain structures connected through explicit stable references.

The database must preserve:

- Entity versus Identity;
- Identity versus Account;
- Account versus Participant;
- Participant versus Participation;
- Participation versus Context;
- Role versus Capability;
- Capability versus Authority;
- Authority versus Authorization;
- Authorization versus Access;
- Command versus Execution;
- Current State versus State History;
- Event versus Evidence;
- Evidence versus Truth;
- Provider Assertion versus Canonical State;
- Resource Representation versus Real-World Resource;
- Reservation versus Ownership;
- Payment Intent versus Settlement;
- Organization Membership versus Community Membership.

Where a concept has multiple subtypes, the database design must choose explicitly among normalized subtype tables, constrained type tables, or another governed representation. A generic JSON blob must not replace relational integrity where the relationship is consequential.

## 8. PostgreSQL schema strategy

The default architecture is PostgreSQL with explicit schemas used where a meaningful ownership or operational boundary exists.

A reasonable logical separation may include:

- `core` — shared persistence primitives and controlled references;
- `identity` — identity/account/participation persistence owned by the corresponding contracts;
- `authorization` — authority and authorization persistence required by the authorization architecture;
- `access` — access requests/decisions/enforcement records;
- `resource` — physical/digital/economic resource representations;
- `commerce` — economic records owned by economic/service domains;
- `execution` — commands, attempts, leases and execution records;
- `event` — event/outbox/inbox structures;
- `evidence` — evidence metadata and controlled references;
- `provider` — provider/adapter integration records;
- `governance` — privacy/governance persistence;
- `projection` — explicitly non-canonical read models;
- `ops` — operational metadata and reconciliation structures.

These are architectural candidates, not permission to create duplicate representations of the same concept.

A domain may instead use a different schema boundary when ownership, operational requirements or PostgreSQL constraints justify it.

The decisive rule is:

**SCHEMA BOUNDARY MUST FOLLOW DOMAIN OWNERSHIP, NOT UI SCREEN STRUCTURE.**

## 9. Table design

Every consequential table should define, as applicable:

- stable primary key;
- domain ownership;
- lifecycle/state;
- creation time;
- update time;
- version/concurrency field;
- source/provenance;
- scope/tenant/community/organization/provider reference where required;
- foreign keys;
- uniqueness rules;
- check constraints;
- deletion/disposition behavior;
- sensitivity classification;
- retention implications;
- audit/event linkage where required.

The database must avoid meaningless universal columns that create ambiguity.

For example, `owner_id` is insufficient where the semantic relationship could mean legal ownership, stewardship, custody, operational control, assignment or service responsibility. The relationship must be represented according to Phase 14.

## 10. Primary keys and identifiers

Primary keys must be stable, non-semantic identifiers.

The database should prefer identifiers that do not encode mutable business meaning.

Identifiers must not silently serve as:

- authorization;
- role;
- capability;
- tenant membership;
- provider trust;
- ownership;
- identity verification.

External provider identifiers must remain provider-scoped.

Where external IDs are stored, the database should preserve the provider/adapter namespace so two providers using the same identifier do not collide.

## 11. Foreign keys

Foreign keys provide structural referential integrity.

They do not by themselves prove:

- that a relationship is valid for a particular context;
- that a relationship is currently active;
- that a relationship is authorized;
- that a person owns a resource;
- that a provider assertion is true;
- that a participant may act;
- that a command is authorized.

Complex semantic relationships must therefore use additional lifecycle, scope, provenance and policy fields where required.

Cross-domain foreign keys should be introduced only where the persistence boundary genuinely requires hard relational integrity. Otherwise stable references plus explicit reconciliation may be safer.

## 12. Constraints are first-class controls

PostgreSQL constraints should enforce structural invariants wherever possible.

Relevant mechanisms include:

- NOT NULL;
- UNIQUE;
- PRIMARY KEY;
- FOREIGN KEY;
- CHECK;
- EXCLUSION constraints where appropriate;
- generated columns where deterministic derived storage is justified.

PostgreSQL provides these constraint categories as native data-definition mechanisms. Generated columns must obey PostgreSQL's restrictions, including immutable generation expressions and row-local semantics.

A database constraint should encode an invariant that belongs to persistence.

It must not encode a business rule whose evaluation requires external authority, live provider state, contextual policy or an external side effect unless the boundary has been deliberately designed for that purpose.

## 13. Unique constraints and idempotency

Idempotency is a physical database concern as well as a command/execution concern.

Where a consequential operation has a governed idempotency key, the database should provide a uniqueness boundary appropriate to its scope.

The uniqueness scope must be explicit.

Possible dimensions include:

- actor;
- account;
- client;
- service;
- command type;
- operation;
- tenant/community/organization/provider;
- environment.

A globally unique idempotency key must not be assumed unless the command contract requires it.

The database must distinguish:

**same key + same semantic request → repeatable governed result**

from:

**same key + materially different request → conflict**

Idempotency records must not become a second authorization mechanism.

## 14. Concurrency control

LegaX requires database concurrency control for material state.

The preferred conceptual pattern is:

**READ VERSION N → VALIDATE → AUTHORIZE → CONDITIONAL WRITE VERSION N → VERSION N+1**

A stale version must not silently overwrite newer state.

PostgreSQL transactions and appropriate isolation/locking mechanisms may implement this contract, but a row lock alone does not constitute authorization.

The database design must explicitly choose between:

- optimistic concurrency;
- row-level locking;
- advisory locking where justified;
- serializable transactions where justified;
- exclusion constraints;
- unique constraints;
- queue/lease fencing.

The least powerful mechanism that safely preserves the invariant should normally be preferred.

## 15. Transaction boundaries

A database transaction should represent one atomic persistence boundary, not an entire distributed workflow.

Strong candidates for one transaction include:

- canonical state mutation plus required outbox record;
- command acceptance plus durable command record where defined;
- idempotency registration plus local effect where safe;
- local state transition plus event intent;
- local evidence metadata registration plus corresponding local state where required.

External provider effects, physical actions, network calls, payment-network calls and long-running jobs generally must not be assumed to share the PostgreSQL transaction.

The architecture therefore preserves:

**LOCAL ATOMIC COMMIT ≠ DISTRIBUTED ATOMICITY**

## 16. Outbox persistence

Where Phase 17 requires reliable event publication after a local state change, the physical database should support the transactional outbox pattern:

**STATE CHANGE + EVENT OUTBOX RECORD → SAME DATABASE TRANSACTION → COMMIT → DISPATCHER → EVENT TRANSPORT**

The outbox row is an implementation record supporting publication.

It is not a substitute for the canonical Event Contract.

An outbox record must carry enough identity, type, version, ordering scope, correlation/causation and publication state to support safe dispatch and deduplication.

A failed publication after commit must not roll back the already committed local state.

## 17. Inbox and deduplication

Consumers of consequential external or asynchronous messages should use an inbox/deduplication boundary where replay is possible:

**RECEIVE → VALIDATE → DEDUPLICATE → PROCESS → RECORD RESULT → COMPLETE**

The database should make duplicate processing detectable.

Inbox state must not be confused with business state.

A message being marked processed does not prove that the business operation succeeded unless the business transaction and processing state were deliberately coupled.

## 18. Event persistence

Event persistence must follow Phase 17.

The database must preserve distinct identifiers for:

- event_id;
- event_type;
- event_version;
- command_id;
- authorization_id;
- execution_id/attempt_id where applicable;
- correlation_id;
- causation_id;
- trace_id;
- provider_event_id where applicable.

An event table must not collapse these identities into one generic transaction identifier.

Event records should preserve occurrence and relevant observation/receipt/recording/effective times according to the event contract.

## 19. Evidence persistence

Evidence persistence must follow Phase 18.

The database should normally store evidence metadata, provenance, integrity references, classification, lifecycle, retention and controlled object references.

Large binary evidence should not automatically be placed directly into relational rows merely because PostgreSQL can store it.

Where object storage is used, the relational database should retain a governed reference and integrity metadata rather than pretending the database itself contains the entire evidence object.

Evidence records must preserve provenance and must not be silently overwritten when a correction or supersession is required.

## 20. Current state versus history

The database may maintain both:

- current authoritative state;
- historical transition/event records.

These are not interchangeable.

Current state answers:

**What is the governed state now?**

History answers:

**What happened, under which version/policy/actor/context, and how did the state change?**

The system must not reconstruct historical truth from mutable current-state columns alone when the domain requires durable history.

Conversely, not every domain must become event-sourced.

Event recording and event sourcing remain distinct architectural choices.

## 21. Lifecycle persistence

Lifecycle fields must be explicit and constrained.

A state column without transition governance is insufficient.

The database may enforce:

- valid state vocabulary;
- not-null state;
- state-specific constraints;
- version increments;
- expiry timestamps;
- uniqueness;
- transition history references.

The database should not silently invent a transition merely because an UPDATE succeeded.

Phase 15 remains the canonical state-machine contract.

## 22. Temporal data

Where material, distinguish:

- occurred_at;
- observed_at;
- received_at;
- recorded_at;
- effective_at;
- expires_at;
- verified_at;
- superseded_at.

The database must not use one `updated_at` field as a substitute for all temporal meanings.

Time zone handling must be consistent, with UTC-normalized instants used for cross-system temporal comparison unless a domain explicitly requires another representation.

Local civil time and time zone identifiers should be retained separately where scheduling semantics depend on them.

## 23. Soft deletion, disposition and retention

Deletion is a lifecycle decision, not merely a SQL DELETE.

For each data class, define whether the canonical behavior is:

- physical deletion;
- logical deactivation;
- archival;
- anonymization/pseudonymization;
- supersession;
- retention until expiry;
- legal hold;
- restricted preservation.

Privacy/Governance remains the policy authority for retention, rights, purpose and disposition.

The database implements those governed outcomes.

A soft-delete flag must not be used as a universal solution because it can create stale, inaccessible or privacy-retained copies indefinitely.

## 24. Row-level security and database access

Where PostgreSQL Row-Level Security is used, it must provide database-level defense in depth for data isolation.

RLS may constrain access by:

- authenticated application identity;
- account;
- participant;
- organization;
- community;
- provider;
- service;
- environment;
- sensitivity;
- operational scope.

But:

**RLS POLICY ≠ LEGA X AUTHORIZATION ENGINE**

RLS must consume an already-established security/context boundary and must not invent authority from arbitrary row attributes.

A database connection with broad credentials must not be exposed to untrusted clients.

Application roles, migration roles, background-worker roles and administrative roles must be separated according to least privilege.

## 25. Database roles and privileges

PostgreSQL privileges answer:

**Which database principal may perform which database operation?**

LegaX Authorization answers:

**May this actor perform this specific consequential business action in this context?**

These are different layers.

Database roles should therefore be used for infrastructure and data-plane security:

- migration principal;
- application runtime principal;
- read-only reporting principal;
- controlled worker principal;
- operational maintenance principal;
- restricted administrative principal.

A PostgreSQL superuser or owner credential must never be treated as an application-level business authority.

## 26. Application connection model

Production application traffic should use appropriately scoped PostgreSQL credentials and connection handling.

The architecture must distinguish:

- application runtime connections;
- migration connections;
- administrative connections;
- background execution connections;
- provider/integration connections.

Connection pooling must not leak identity or authorization context between requests.

If transaction-local context is used for RLS or auditing, it must be established and cleared within the correct transaction boundary.

Long-lived connections must not retain stale actor/context information.

## 27. Secrets

Database credentials must never be stored in source code, committed to Git, embedded in client applications or exposed through logs.

Neon credentials are infrastructure credentials.

They are not:

- user credentials;
- LegaX Authority;
- provider authority;
- API authorization;
- service-level business permission.

Credential rotation must preserve safe deployment and rollback procedures.

Production and non-production credentials must remain isolated. Neon branch workflows can provide independent credentials for child branches; production credentials must not be reused in development or preview environments.

## 28. Migration architecture

Schema changes must be source-controlled and deterministic.

The canonical workflow is:

**DESIGN → MIGRATION → BRANCH TEST → INTEGRITY TEST → APPLICATION COMPATIBILITY TEST → SECURITY/PRIVACY REVIEW → PRODUCTION MIGRATION → VERIFICATION → RECONCILIATION**

Production schema changes must not depend on undocumented manual console edits.

Every migration should have:

- stable identifier;
- ordered execution;
- deterministic SQL;
- dependency awareness;
- compatibility strategy;
- transaction strategy;
- lock/availability analysis;
- rollback or forward-fix plan;
- data migration plan where required;
- verification queries;
- expected postconditions.

A migration is itself a consequential infrastructure operation and must be attributable and auditable.

## 29. Expand-and-contract migrations

Breaking schema changes should normally use an expand-and-contract strategy:

**EXPAND → DUAL-COMPATIBLE PERIOD → BACKFILL/VERIFY → SWITCH READ/WRITE → CONTRACT**

Avoid destructive changes that require application and database changes to deploy simultaneously unless the deployment boundary explicitly guarantees that compatibility.

Column renames, type changes, enum changes, constraint tightening and index changes must consider old and new application versions during rollout.

## 30. Migration idempotency

Migration systems must prevent:

- duplicate constraint creation;
- duplicate index creation;
- repeated data transformations;
- partial application;
- migration-order corruption;
- hidden manual state.

A migration that fails halfway must leave a known state or have a safe recovery procedure.

Do not solve migration problems by silently deleting migration history.

Historical migrations are part of the schema lineage.

## 31. Schema compatibility

The database contract must remain compatible with active API and execution versions during controlled deployment.

Compatibility must be evaluated for:

- reads;
- writes;
- constraints;
- indexes;
- nullability;
- enum/state values;
- foreign keys;
- generated values;
- triggers/functions;
- RLS policies;
- event/outbox structures.

The database must not make a deployed application impossible to roll back merely because a migration removed the fields it still requires.

## 32. Index architecture

Indexes exist to support governed access patterns.

Every material index should have:

- query justification;
- ownership;
- expected selectivity;
- write-cost awareness;
- lifecycle;
- monitoring.

Indexes may support:

- primary-key lookups;
- foreign-key access;
- uniqueness;
- state queries;
- time-range queries;
- event streams;
- idempotency;
- reconciliation;
- scoped searches.

Do not index every column.

Do not create indexes merely because a column exists.

Do not mistake an index for a business constraint unless uniqueness or another explicit constraint is actually defined.

## 33. Partial and covering indexes

Partial indexes may be used where the invariant and workload justify them, such as active records or pending work.

Covering/index-only strategies may be used where they materially improve read performance without compromising data governance.

The optimization must not expose data that a normal query would otherwise be forbidden to return.

Performance optimization never overrides authorization or privacy.

## 34. Partitioning

Partitioning should be introduced only where table size, lifecycle, retention, query locality or operational behavior justifies it.

Likely candidates may include very large:

- event streams;
- execution history;
- telemetry;
- audit/security records;
- evidence metadata;
- time-series operational records.

Partition keys must preserve the semantic query patterns and retention strategy.

PostgreSQL declarative partitioning physically divides one logical table into partitions and can improve performance when access is concentrated in relevant partitions, but poor partition choices can increase planning and operational complexity.

Partitioning must not create multiple semantic sources of truth.

## 35. JSON and semi-structured data

JSON/JSONB is appropriate for bounded extensibility, provider-specific payloads, metadata and fields whose structure genuinely varies.

JSON must not be used to avoid modeling stable consequential relationships.

If a field participates in:

- authorization;
- uniqueness;
- referential integrity;
- lifecycle;
- financial calculation;
- security control;
- reconciliation;
- critical querying;

it should normally have an explicit relational representation or a deliberate generated/indexed strategy.

Provider-specific raw payloads may remain in a source-scoped structure while canonical fields are normalized separately.

## 36. Functions and triggers

Database functions and triggers may enforce local invariants, maintain derived persistence, populate technical metadata, or support carefully bounded transactional behavior.

They must not hide major business authorization or external side effects.

Avoid triggers that:

- call external systems;
- silently create business authority;
- perform unpredictable network operations;
- make write behavior invisible to application developers;
- create hidden duplicate events;
- bypass the Core Execution Engine.

Database automation must remain observable and documented.

## 37. Stored procedures

Stored procedures may be appropriate for operations requiring a strongly controlled database transaction or high-integrity bulk operation.

A procedure must have:

- explicit owner;
- explicit input contract;
- authorization boundary;
- transaction semantics;
- error semantics;
- idempotency/concurrency behavior where relevant;
- audit/event behavior where relevant.

Procedure execution must not become a second business authorization engine.

## 38. Read models and projections

Projection tables, materialized views and denormalized read models are allowed when they are explicitly marked as projections.

A projection must identify:

- source-of-truth domain;
- refresh/update mechanism;
- freshness;
- rebuild strategy;
- consistency expectations;
- access controls.

A projection may be stale.

A projection must never silently overwrite the authoritative record.

## 39. Caching

Database-adjacent caches must preserve:

- authorization scope;
- tenant/community/organization/provider scope;
- sensitivity;
- freshness;
- invalidation;
- version;
- lifecycle.

A cached authorization result must never outlive its permitted validity conditions.

The database architecture does not make cache contents authoritative merely because they originated from a database query.

## 40. Multi-context isolation

LegaX operates across people, communities, organizations, providers and services.

The database must support explicit isolation dimensions where required.

A row belonging to one:

- community;
- organization;
- provider;
- service;
- environment;

must not become visible to another scope merely because both records exist in the same database.

However, scope columns must not be treated as authority by themselves.

The correct sequence remains:

**SCOPE → CONTEXT → AUTHORITY → AUTHORIZATION → DATA ACCESS**

## 41. Multi-tenant versus shared infrastructure

LegaX may use shared PostgreSQL infrastructure while preserving logical isolation.

Physical separation may be required for certain regulatory, security, contractual or operational boundaries.

The decision must consider:

- sensitivity;
- jurisdiction;
- customer/provider requirements;
- blast radius;
- performance;
- operational complexity;
- cost;
- retention;
- backup/recovery.

Shared database does not mean shared authorization.

Separate database does not automatically grant isolation if application controls are wrong.

## 42. Provider data

Provider-specific data must retain provider identity and provenance.

Provider payloads should distinguish:

- provider;
- adapter;
- provider object ID;
- provider event ID;
- provider status;
- received time;
- provider time;
- validation status;
- mapping version;
- reconciliation state.

Provider records must not silently overwrite canonical LegaX state without the Phase 19 validation/reconciliation path.

## 43. Economic data

Financially consequential data requires exactness and auditability.

Monetary values should use appropriate PostgreSQL numeric representation rather than floating-point approximations.

Currency must be explicit.

Payment, authorization, capture, settlement, refund, dispute and reconciliation records must remain distinct where their semantics differ.

The database must preserve provider references and idempotency boundaries.

The database must not turn a successful INSERT into a false claim that external funds settled.

## 44. Sensitive identity and biometric-related data

The database must not become a centralized unrestricted raw-biometric repository.

Where biometric or high-sensitivity identity evidence is legitimately processed, persistence must follow Phase 02 Identity, Phase 03 Authentication, Phase 07 Access, Phase 18 Evidence, Phase 21 Security and Phase 22 Privacy/Governance.

Prefer storing governed references, verification results, assurance metadata, provenance and evidence references rather than unnecessary raw biometric material.

Device-local biometric authentication should normally arrive as an authentication assertion rather than raw biometric data.

## 45. Audit and accountability

Database operations that materially affect security, authorization, governance, schema, execution or canonical state must be reconstructable.

Audit records must identify, as applicable:

- actor;
- account/service identity;
- operation;
- target;
- timestamp;
- context;
- authorization reference;
- command/execution reference;
- previous/new state references;
- source;
- result;
- correlation/causation;
- provenance.

Audit records must not become mutable application notes.

Audit persistence must also respect privacy and retention requirements.

## 46. Observability

Database observability should cover:

- connection saturation;
- query latency;
- errors;
- locks;
- deadlocks;
- transaction duration;
- replication/storage health where applicable;
- compute utilization;
- branch health;
- migration status;
- failed jobs;
- outbox backlog;
- inbox backlog;
- reconciliation backlog;
- constraint failures;
- RLS failures;
- unusual access patterns.

Observability data is telemetry.

Telemetry is not automatically canonical business truth.

## 47. Neon compute and scaling

Neon separates compute from durable storage, allowing compute capacity to scale independently of durable data. Current Neon architecture supports autoscaling and scale-to-zero patterns, but application architecture must still account for connection behavior, cold starts, workload bursts and capacity limits.

Scaling must therefore be evaluated against:

- request concurrency;
- connection counts;
- transaction duration;
- query plans;
- hot rows;
- lock contention;
- event throughput;
- execution workloads;
- background jobs;
- provider callbacks.

Autoscaling does not solve poor schema design or unbounded transactions.

## 48. Connection management

Serverless and edge workloads must not create uncontrolled database connection storms.

The architecture should use Neon-supported pooling/connection strategies appropriate to the runtime.

Connection lifecycle must be designed for:

- short requests;
- transactions;
- background workers;
- long-running execution;
- migrations.

Transaction state must never leak across requests.

## 49. Backup and recovery

Database durability must be designed around recovery objectives.

Define:

- RPO;
- RTO;
- recovery authority;
- restore procedure;
- verification procedure;
- data-loss boundaries;
- dependency recovery order;
- credential recovery;
- application compatibility after restore.

Neon branching and restore capabilities can support controlled recovery and migration testing, but recovery is a governed operational process, not merely pressing restore.

A restored database must be verified before being declared authoritative.

## 50. Disaster recovery

A disaster recovery architecture must preserve:

**DATABASE RECOVERY → SCHEMA VALIDATION → APPLICATION COMPATIBILITY → EVENT/OUTBOX RECONCILIATION → PROVIDER RECONCILIATION → CANONICAL STATE VALIDATION → RESUME**

External providers may have advanced while the database was unavailable.

Therefore restoration must not assume the database state is automatically identical to the external world.

Unknown outcomes remain unknown until reconciled.

## 51. Branch architecture

The recommended branch lifecycle is:

**PRODUCTION → CONTROLLED DEVELOPMENT/STAGING BRANCH → SHORT-LIVED TEST/PREVIEW BRANCHES**

Branches should be created for:

- migration testing;
- feature testing;
- integration testing;
- preview environments;
- recovery investigation;
- controlled data/schema experiments.

Production should be protected from casual experimentation.

Where production data contains sensitive information, non-production environments must use appropriate data minimization/anonymization controls before exposing data to broader development contexts. Neon documents separate branching patterns for production, staging and PII-sensitive environments.

## 52. Branch lineage

Every non-production branch must have identifiable:

- parent;
- creation point;
- purpose;
- owner;
- expiration/retention;
- schema lineage;
- data sensitivity;
- credentials.

A branch is not a separate LegaX universe.

It is an infrastructure environment containing a copy or lineage of persisted state.

## 53. Environment separation

At minimum distinguish:

- development;
- test;
- staging/pre-production;
- production.

Credentials, external provider endpoints, secrets, data and execution capabilities must be environment-specific.

A development database must never accidentally call a production payment/access/physical-control provider.

Production database credentials must not be placed into preview or development branches.

## 54. Migration testing on branches

A migration should be exercised against a representative branch before production.

Tests should include:

- schema application;
- existing-data compatibility;
- constraint validation;
- index creation;
- query-plan impact where material;
- RLS behavior;
- API compatibility;
- command/execution compatibility;
- event/outbox compatibility;
- rollback/forward-fix behavior;
- backfill correctness.

A successful migration on an empty database is not sufficient evidence for production readiness.

## 55. Data seeding

Seed data must be explicitly classified.

Seed data may include:

- static reference data;
- test fixtures;
- development identities;
- synthetic communities;
- synthetic providers;
- synthetic resources.

Production secrets, real personal data and real financial credentials must not be copied into test data merely for convenience.

## 56. Referential integrity and lifecycle integrity

The database should enforce hard integrity where possible:

- required parent exists;
- unique identifiers remain unique;
- impossible state combinations are rejected;
- dependent records follow governed disposition;
- provider-scoped IDs remain scoped;
- command references resolve;
- event references remain reconstructable;
- evidence references remain traceable.

When a rule depends on time, external state or policy, database constraints alone are insufficient.

## 57. Deletion and foreign-key strategy

Foreign-key actions must be selected deliberately.

Avoid blanket CASCADE behavior for consequential historical records.

For example, deleting an account should not casually delete:

- authorization history;
- command history;
- execution attempts;
- events;
- evidence;
- financial records;
- security records.

The correct behavior may be restriction, anonymization, archival, detachment or governed disposition.

Historical accountability must survive ordinary lifecycle changes where required.

## 58. Immutability

Certain records should be append-only or operationally immutable after finalization, including as applicable:

- canonical events;
- evidence records;
- finalized execution outcomes;
- financial settlement records;
- security audit records;
- migration history.

Correction should normally occur through:

- superseding record;
- correction event;
- reconciliation;
- governed amendment.

It must not silently rewrite history.

## 59. Database-level enforcement versus application enforcement

A rule belongs in the database when it is:

- structural;
- relational;
- invariant;
- local;
- transactionally enforceable.

A rule belongs above the database when it requires:

- authorization policy evaluation;
- live external state;
- provider interaction;
- human approval;
- complex context;
- cross-domain orchestration;
- AI interpretation;
- long-running workflow.

Some controls intentionally span both.

The architecture should avoid both extremes:

**everything in SQL**

and

**nothing enforced by the database.**

## 60. API relationship

Phase 23 defines API contracts.

Phase 25 defines how API operations persist data.

The relationship is:

**API CONTRACT → AUTHENTICATION → AUTHORIZATION → VALIDATION → COMMAND/QUERY → DATABASE OPERATION**

The API must not expose raw database tables as its public domain model merely because the tables exist.

Database migrations must not be triggered directly by ordinary API requests.

## 61. Core Execution Engine relationship

Phase 24 defines the runtime execution plane.

The database provides durable state for:

- command acceptance;
- execution attempts;
- leases/fencing where persisted;
- idempotency;
- retries;
- outcomes;
- reconciliation;
- outbox/inbox;
- durable workflow state.

The database must not become the execution engine itself.

A row saying `pending` is not execution.

An UPDATE is not completion.

A committed command record is not proof that an external side effect occurred.

## 62. State-machine relationship

Phase 15 defines valid states and transitions.

The database implements those states through:

- constrained values;
- transition records;
- versions;
- timestamps;
- transactional writes;
- triggers/functions where appropriate.

It does not independently invent alternative state machines.

## 63. Authorization relationship

Phase 06 remains authoritative for business authorization.

The database may enforce a defense-in-depth representation of authorization context, but must not infer authority from:

- row ownership alone;
- database role alone;
- organization membership alone;
- community membership alone;
- provider membership alone;
- possession of an identifier;
- presence of a record.

**NO AUTHORIZATION → NO CONSEQUENTIAL DATABASE-BACKED BUSINESS ACTION.**

## 64. Security relationship

Phase 21 defines cross-cutting security.

This database architecture implements relevant database controls:

- least-privileged database roles;
- credential isolation;
- encryption through the platform/security architecture;
- RLS where appropriate;
- auditability;
- secret separation;
- environment isolation;
- backup/recovery controls;
- safe migrations;
- query/resource controls.

Database security must not become a parallel business authorization architecture.

## 65. Privacy/Governance relationship

Phase 22 defines privacy/governance.

The database must support:

- purpose-bound persistence;
- data minimization;
- classification;
- retention;
- deletion/disposition;
- access control;
- rights workflows;
- legal hold;
- provenance;
- accountability;
- cross-border/jurisdictional requirements where applicable.

A database administrator's technical ability to read a row does not establish lawful or governed business access.

## 66. Provider relationship

Phase 19 remains the canonical provider boundary.

The database stores provider integration state and evidence but does not convert provider data into canonical truth without the required validation/reconciliation.

Provider-specific schema must not leak provider semantics into unrelated canonical domains.

## 67. Community/Organization/Provider operating systems

The operating systems in 20A, 20B and 20C remain domain owners.

The database must persist their governed records without creating duplicate operating systems inside PostgreSQL.

For example:

- a community table does not itself grant community administration;
- an organization table does not itself grant organizational authority;
- a provider table does not itself grant provider execution power;
- a worker assignment does not itself grant technical access;
- a service commitment does not itself grant payment authority.

## 68. Service ownership

LegaServices remain bounded domains.

The database architecture should not create one generic `service_transaction` table as the semantic source of every service.

Each service owns its domain records while using shared foundational references and contracts where appropriate.

Shared physical infrastructure does not mean shared semantic ownership.

## 69. Economic and commerce persistence

Economic records must preserve their domain boundaries.

Examples include:

- quote;
- offer;
- reservation;
- order;
- invoice;
- payment intent;
- payment attempt;
- authorization;
- capture;
- settlement;
- refund;
- dispute;
- reconciliation.

They must not be collapsed into one generic transaction record where that destroys lifecycle or accounting meaning.

## 70. Physical-world persistence

Physical resources should be represented with stable references to:

- resource;
- location;
- facility;
- unit;
- device;
- controller;
- provider;
- capability;
- operational state;
- observation.

A database record representing a door, vehicle, building, device or unit is not the physical object itself.

The database must preserve uncertainty when the physical state is not established.

## 71. Search architecture

Search indexes and full-text/search projections may be used for discovery.

Search results are not authorization decisions.

Search indexes must apply the same access/privacy boundaries as source data.

Sensitive fields should not be copied into search systems without a governed purpose.

## 72. Reporting and analytics

Analytical models may use projections, replicas, warehouse exports or other controlled pipelines.

Analytics must not silently become the operational source of truth.

Derived metrics must preserve:

- source period;
- source dataset;
- calculation version;
- freshness;
- uncertainty;
- aggregation scope.

AI-generated summaries must remain derived intelligence and must not rewrite operational records.

## 73. Data quality

Database quality checks should detect:

- orphan references;
- duplicate identities where prohibited;
- duplicate external identifiers within scope;
- invalid lifecycle combinations;
- missing required provenance;
- stale projections;
- impossible temporal relationships;
- broken event references;
- unresolved provider mappings;
- reconciliation backlog;
- invalid monetary representations.

Data-quality findings are evidence/signals, not automatic authority decisions.

## 74. Reconciliation tables and queues

Where external state can diverge, persist reconciliation work explicitly.

A reconciliation record may contain:

- reconciliation ID;
- domain;
- object;
- source;
- observed state;
- expected state;
- discrepancy;
- evidence references;
- attempt count;
- status;
- next action;
- last attempted time;
- resolved time;
- resolver/reference.

Reconciliation must not silently overwrite the canonical state without the domain's rules.

## 75. Long-running execution persistence

The database may persist:

- workflow state;
- command status;
- attempt records;
- leases;
- fencing tokens;
- retry counters;
- scheduled-at;
- timeout/deadline;
- cancellation state;
- compensation state;
- reconciliation state.

The engine owns runtime behavior.

The database provides durable coordination state.

A worker must prove current ownership before applying effects where fencing is required.

## 76. Scheduling persistence

Scheduled work should persist:

- schedule definition;
- next eligible execution;
- timezone;
- lifecycle;
- command template/reference;
- owner;
- scope;
- authorization requirements;
- deduplication policy.

A schedule is not authorization.

A scheduled command must still pass the required execution and authorization controls at execution time.

## 77. Queue persistence

Database-backed queues may be used for bounded workloads.

Queue records should support:

- visibility/claim semantics;
- attempts;
- lease expiry;
- fencing;
- retry policy;
- dead-letter/reconciliation state.

A queue claim is not business authority.

Queue access must be scoped and auditable.

## 78. Locking and deadlocks

Transactions must be designed to minimize lock duration.

Where multiple resources are updated, establish a deterministic lock ordering where practical.

Deadlocks must be treated as expected concurrency failures with bounded retry/re-evaluation, not as permission failures.

Long-running external calls must not hold critical database locks.

## 79. Isolation level

Transaction isolation should be selected according to the invariant being protected.

Do not assume the strongest isolation is always correct or affordable.

For each consequential transaction identify:

- read set;
- write set;
- conflict condition;
- acceptable anomalies;
- retry behavior;
- timeout;
- lock strategy.

Serialization failures must be retried only where the operation is safely retryable and authorization/command semantics remain valid.

## 80. Query architecture

Queries should be explicit about:

- source of truth;
- scope;
- freshness;
- authorization;
- ordering;
- pagination;
- consistency;
- sensitivity.

A query that reads a projection must not present it as authoritative without appropriate semantics.

## 81. Performance architecture

Performance work must follow measurement.

Priorities:

1. correct relational model;
2. correct constraints;
3. correct query patterns;
4. appropriate indexes;
5. bounded transactions;
6. connection discipline;
7. caching/projections where justified;
8. partitioning where justified;
9. compute scaling;
10. specialized optimization only when measured.

Do not denormalize the canonical model prematurely.

## 82. Query plan governance

Material queries should be tested with representative data.

Watch for:

- sequential scans on large operational tables;
- poor cardinality estimates;
- unbounded sorting;
- accidental cross-scope scans;
- N+1 application patterns;
- lock amplification;
- oversized result sets.

Database optimization must preserve privacy and authorization semantics.

## 83. Extensions

PostgreSQL extensions must be explicitly approved.

For every extension record:

- purpose;
- compatibility;
- security implications;
- migration behavior;
- backup/restore behavior;
- performance impact;
- portability;
- Neon support;
- ownership.

No extension should be introduced merely because it makes an implementation convenient.

## 84. Geographic and jurisdictional data

Where LegaX operates across jurisdictions, the database may need explicit:

- jurisdiction;
- country/region;
- legal entity;
- data residency classification;
- processing location;
- provider location;
- retention regime.

A geographic column must not automatically grant jurisdictional authority.

Location is context, not authority.

## 85. Encryption and sensitive fields

Sensitive data protection should use the security and privacy architecture rather than ad hoc application encryption scattered across tables.

For fields requiring application-level encryption, define:

- encryption purpose;
- key ownership;
- key rotation;
- searchable/non-searchable implications;
- integrity protection;
- recovery behavior;
- access policy;
- deletion behavior.

Encryption key possession is not business authorization.

## 86. Database monitoring and alerts

Critical alerts should include:

- failed migrations;
- schema drift;
- replication/storage anomalies where applicable;
- connection exhaustion;
- excessive locks;
- deadlocks;
- abnormal query latency;
- constraint failure spikes;
- outbox backlog;
- reconciliation backlog;
- unexpected privilege changes;
- RLS policy failures;
- backup/recovery anomalies.

Alerts should trigger governed operational responses, not automatically grant emergency business authority.

## 87. Schema drift prevention

Production schema must correspond to source-controlled migration history.

Detect and investigate:

- manually created tables;
- undocumented indexes;
- unmanaged constraints;
- changed functions;
- changed RLS policies;
- altered privileges;
- unexpected extensions.

Schema drift must not be normalized as a permanent operating method.

## 88. Migration observability

Every production migration should record:

- migration identifier;
- start/end time;
- actor/system;
- target environment;
- version before;
- version after;
- result;
- verification result;
- rollback/forward-fix reference if required.

The migration system must be able to answer:

**What changed, when, by whom/what, against which database, and did postconditions pass?**

## 89. Testing architecture

Database testing must include:

### Structural
- schema creation;
- migration ordering;
- constraints;
- indexes;
- foreign keys;
- generated values.

### Security
- role privileges;
- RLS;
- cross-scope access;
- sensitive-field protection;
- credential isolation.

### Integrity
- lifecycle;
- uniqueness;
- idempotency;
- concurrency;
- event/outbox atomicity;
- provider provenance.

### Operational
- migration on populated data;
- backup/restore;
- branch creation;
- branch isolation;
- connection behavior;
- failure recovery.

### Compatibility
- API;
- command/execution;
- event;
- evidence;
- provider;
- operating-system domains.

## 90. Physical database readiness gate

The database architecture is not implementation-ready until the following are explicitly answered:

1. What is the canonical Neon project?
2. Which branch is production?
3. Which PostgreSQL version is supported?
4. Which database is production?
5. Which schemas exist and why?
6. Which domain owns each table?
7. Which tables are canonical?
8. Which are projections?
9. Which are caches?
10. Which are external assertions?
11. Which are immutable?
12. Which are lifecycle-controlled?
13. Which fields require provenance?
14. Which relationships require foreign keys?
15. Which relationships require application reconciliation?
16. Which invariants use constraints?
17. Which operations require transactions?
18. Which require optimistic concurrency?
19. Which require locks?
20. Which require idempotency keys?
21. What is each idempotency scope?
22. Which records are outbox/inbox?
23. Which records are current state versus history?
24. Which data is sensitive?
25. What are the RLS boundaries?
26. Which database roles exist?
27. Which roles can migrate?
28. Which roles can write operational data?
29. How are credentials isolated?
30. What is the branch strategy?
31. What is the migration strategy?
32. What is the rollback/forward-fix strategy?
33. What are RPO/RTO targets?
34. How is restore verified?
35. How is provider divergence reconciled?
36. How is event publication reconciled?
37. How is schema drift detected?
38. How are query performance regressions detected?
39. How are retention/disposition requirements implemented?
40. How are cross-domain references protected?
41. How are production changes reviewed?
42. How are destructive migrations prevented?
43. How are long-running execution records fenced?
44. How are database failures surfaced to the Core Execution Engine?
45. How are database capabilities prevented from becoming parallel authority?

## 91. Canonical invariants

1. Neon is infrastructure, not LegaX authority.
2. PostgreSQL is persistence, not the entire domain architecture.
3. A table is not a domain definition.
4. A row is not authority.
5. A database role is not LegaX Authority.
6. A database privilege is not business authorization.
7. RLS is defense in depth, not the complete authorization engine.
8. Foreign keys provide structural integrity, not semantic authority.
9. Presence of a relationship row does not automatically grant permission.
10. Context columns do not manufacture authority.
11. Community membership does not become administration through storage.
12. Organization membership does not become authority through storage.
13. Provider membership does not become LegaX authority.
14. Worker assignment does not become technical access.
15. Identity and Account remain distinct.
16. Account and Participant remain distinct.
17. Participant and Participation remain distinct.
18. Capability and Authorization remain distinct.
19. Authorization and Access remain distinct.
20. Command and Execution remain distinct.
21. Event and Evidence remain distinct.
22. Evidence does not automatically become truth.
23. Provider assertions remain source-scoped.
24. Projections are not source of truth.
25. Caches are not source of truth.
26. Current state is not complete history.
27. History must not be silently rewritten.
28. External effects are not part of a PostgreSQL transaction unless technically and explicitly supported.
29. Local commit does not prove external completion.
30. Timeout does not prove failure.
31. Unknown outcome remains unknown until reconciliation.
32. Idempotency does not bypass authorization.
33. Uniqueness scope must be explicit.
34. Stale state must not silently overwrite newer state.
35. Consequential writes require concurrency protection where material.
36. Outbox records do not replace the Event Contract.
37. Inbox records do not prove business success by themselves.
38. Event identifiers remain distinct from command and authorization identifiers.
39. Evidence references preserve provenance.
40. Sensitive data is persisted only for governed purposes.
41. Raw biometric storage is not a default architecture.
42. Production credentials are isolated.
43. Migration credentials are not application credentials.
44. Development branches must not use production credentials.
45. Production is not an experimentation environment.
46. Branches do not merge like source-code branches.
47. Migration history is part of schema lineage.
48. Destructive migrations require explicit governance.
49. Schema drift is not an acceptable permanent deployment mechanism.
50. Database functions must not hide external side effects.
51. Triggers must not create parallel authority.
52. Scheduled work does not itself create authority.
53. Queue claims do not create authority.
54. Database locks do not create authority.
55. Compute scaling does not change business authority.
56. Restore does not automatically prove restored state is current.
57. Provider state may require reconciliation after restore.
58. Event publication may require reconciliation after restore.
59. Privacy policy does not itself grant database access.
60. Security controls do not manufacture authority.
61. AI-generated data does not become canonical merely by being stored.
62. AI cannot silently rewrite canonical records.
63. Monetary values require exact domain-appropriate representation.
64. Currency must remain explicit.
65. Payment storage does not prove settlement.
66. Physical resource rows do not prove physical state.
67. Location is not authority.
68. Search indexes do not grant access.
69. Analytics are not automatically operational truth.
70. Data quality findings are not automatically authorization decisions.
71. Database optimization must preserve access controls.
72. Denormalization must not create semantic duplicates.
73. A projection must identify its source of truth.
74. Every consequential table must have an explicit ownership boundary.
75. Cross-domain references must have deliberate integrity semantics.
76. Lifecycle state must remain governed by Phase 15.
77. Command persistence must remain governed by Phase 16/24.
78. Event persistence must remain governed by Phase 17.
79. Evidence persistence must remain governed by Phase 18.
80. Provider persistence must remain governed by Phase 19.
81. Security persistence must remain governed by Phase 21.
82. Privacy persistence must remain governed by Phase 22.
83. API persistence must remain governed by Phase 23.
84. No database operation may bypass required execution gates.
85. No database trigger may secretly execute an external consequential side effect.
86. No database credential may be exposed to an untrusted client.
87. No application endpoint may expose unrestricted raw tables.
88. No schema may be designed from UI screens alone.
89. No generic transaction table may replace bounded economic semantics.
90. No universal polymorphic table may replace domain ownership.
91. No database success status may be treated as external success without evidence.
92. No provider acknowledgement becomes canonical completion automatically.
93. No restored state becomes authoritative without validation where external divergence is possible.
94. No migration may silently destroy historical accountability.
95. No RLS policy may be treated as the sole business authorization decision.
96. No cache may outlive its governed security conditions.
97. No non-production environment may inherit production execution capability accidentally.
98. No database branch may become an independent authority system.
99. Database availability does not override authorization.
100. **NO AUTHORIZATION → NO CONSEQUENTIAL DATABASE-BACKED BUSINESS ACTION.**

## 92. Contradiction tests

### Test 1 — Row ownership
**Input:** user owns a row.
**Expected:** ownership relationship is evaluated through canonical relationship/authorization semantics; row ownership alone does not grant every operation.

### Test 2 — PostgreSQL admin
**Input:** database administrator can UPDATE a protected table.
**Expected:** technical database privilege is not represented as ordinary LegaX business authorization.

### Test 3 — RLS bypass
**Input:** application role can technically bypass RLS.
**Expected:** no client-accessible path exposes that privilege; privileged paths are separately controlled and audited.

### Test 4 — Provider status
**Input:** provider row says SETTLED.
**Expected:** provider assertion remains provider-scoped until reconciliation establishes canonical payment state.

### Test 5 — Duplicate command
**Input:** same idempotency key submitted twice.
**Expected:** one governed effect, repeatable result, no duplicate consequential effect.

### Test 6 — Conflicting idempotency
**Input:** same idempotency key with different request semantics.
**Expected:** conflict; second operation does not silently execute.

### Test 7 — Stale version
**Input:** UPDATE carries stale version.
**Expected:** conditional write fails; caller re-evaluates rather than overwriting.

### Test 8 — Outbox failure
**Input:** state commit succeeds but dispatcher fails.
**Expected:** state remains committed and outbox remains retryable; no false rollback.

### Test 9 — External timeout
**Input:** provider call times out after possible execution.
**Expected:** outcome becomes UNKNOWN/reconciliation-required, not automatic failure.

### Test 10 — Queue claim
**Input:** worker claims a queue row.
**Expected:** claim does not itself create business authorization.

### Test 11 — Schedule
**Input:** scheduled job becomes due.
**Expected:** execution still evaluates required command/authorization conditions.

### Test 12 — Community membership
**Input:** participant is stored in a community.
**Expected:** database membership does not create administration.

### Test 13 — Organization membership
**Input:** worker belongs to organization.
**Expected:** membership does not grant every organizational operation.

### Test 14 — Provider worker
**Input:** provider worker row exists.
**Expected:** worker affiliation does not automatically grant LegaX access to all provider/customer resources.

### Test 15 — Cached authorization
**Input:** cache says allow but authority has expired.
**Expected:** stale authorization is not used beyond its governed validity.

### Test 16 — Projection
**Input:** projection says a resource is available while canonical state says unavailable.
**Expected:** canonical source wins; projection is stale.

### Test 17 — Restore
**Input:** Neon restore returns a prior database snapshot.
**Expected:** external/provider divergence is assessed before declaring operational state current.

### Test 18 — Migration
**Input:** migration succeeds on empty database but fails against production data.
**Expected:** production migration is not declared ready.

### Test 19 — Delete account
**Input:** account is deactivated.
**Expected:** consequential historical events/evidence/financial records are not blindly cascaded away.

### Test 20 — Trigger side effect
**Input:** database trigger attempts external payment.
**Expected:** rejected architectural pattern; external consequential execution belongs behind the execution/provider boundaries.

### Test 21 — AI write
**Input:** AI writes a proposed policy into a canonical authority table.
**Expected:** proposal remains non-authoritative until governed human/system authorization establishes it.

### Test 22 — Raw biometric
**Input:** authentication flow provides a device-local biometric assertion.
**Expected:** no default raw biometric repository is created merely to persist the assertion.

### Test 23 — Search leakage
**Input:** sensitive record is omitted from source query but appears in search index.
**Expected:** search architecture is considered a privacy/security failure and corrected.

### Test 24 — Cross-community query
**Input:** one participant requests another community's record.
**Expected:** context and authorization are evaluated; shared database does not imply shared visibility.

### Test 25 — Payment precision
**Input:** monetary amount is stored in floating point.
**Expected:** design rejected for canonical monetary representation.

### Test 26 — Schema drift
**Input:** production contains undocumented table.
**Expected:** drift detected and governed; undocumented schema is not accepted as canonical.

### Test 27 — Production branch experiment
**Input:** developer tests destructive migration on production branch.
**Expected:** prohibited; use controlled branch workflow.

### Test 28 — Migration history deletion
**Input:** failed migration is removed from source history to make the next migration pass.
**Expected:** prohibited; repair through explicit forward-fix/recovery and preserve lineage.

### Test 29 — Database success
**Input:** local INSERT returns success after command submission.
**Expected:** database persistence success is not presented as external business completion.

### Test 30 — No authorization
**Input:** API/service has a valid database connection but no applicable LegaX authorization.
**Expected:** consequential business write is denied.

### Test 31 — Parallel authority
**Input:** a PostgreSQL role or trigger grants a permission that the LegaX authorization model did not grant.
**Expected:** prohibited; database implementation cannot create a parallel authority chain.

## 93. Readiness gate

Before physical implementation is declared ready:

- canonical domain ownership mapped to persistence;
- tables classified as canonical/projection/cache/assertion;
- no duplicate semantic source of truth;
- schema ownership documented;
- primary/foreign/unique/check constraints specified;
- lifecycle/version fields specified;
- idempotency scopes specified;
- concurrency strategy specified;
- transaction boundaries specified;
- outbox/inbox strategy specified;
- event/evidence references specified;
- provider provenance specified;
- RLS/security boundary specified;
- database roles specified;
- credential isolation specified;
- migration ordering specified;
- expand/contract strategy specified;
- branch strategy specified;
- production protection specified;
- backup/restore tested;
- reconciliation paths specified;
- performance baselines specified;
- retention/disposition mapped;
- sensitive-data handling mapped;
- API compatibility verified;
- Core Execution compatibility verified;
- provider integration compatibility verified;
- no parallel authority path;
- no legacy architecture contamination.

## 94. Relationship to all previous phases

**01 LegaX** defines the constitutional boundary.

**02 Identity** defines identity semantics.

**03 Authentication** defines authentication.

**04 Account** defines account semantics.

**05 Administration** defines governed administration.

**06 Authorization** defines business authorization.

**07 Access** defines enforcement.

**08 Resources & Physical World** defines resource semantics.

**09 Economic & Commerce** defines economic semantics.

**10 Lifecycle & Policy** defines lifecycle and policy semantics.

**11 Events, Evidence & Intelligence** defines the conceptual separation.

**12 LegaServices** defines service boundaries.

**13 Canonical Domain Model** defines canonical entities and concepts.

**14 Canonical Relationship Model** defines relationships.

**15 Canonical State Machines** defines state transitions.

**16 Command & Execution Contract** defines command/execution semantics.

**17 Canonical Event Contract** defines event semantics.

**18 Evidence Contract** defines evidence semantics.

**19 Provider/Adapter Architecture** defines external integration.

**20A Community Management Network OS** defines community operations.

**20B Organization Management Network OS** defines organization operations.

**20C Provider Management Network OS** defines provider operations.

**21 Security Architecture** defines cross-cutting security.

**22 Privacy/Governance Architecture** defines privacy and governance.

**23 API Architecture** defines interface contracts.

**24 Core Execution Engine** defines runtime execution.

**25 Neon Database Architecture** defines the physical persistence architecture that implements these contracts on PostgreSQL/Neon.

The database must therefore remain downstream of the semantic architecture and upstream of application persistence implementation.

## 95. Final architectural rule

**LegaX's Neon Database is the governed persistence substrate for the canonical ecosystem. It must preserve domain ownership, relationships, lifecycle, integrity, security, privacy, provenance, concurrency, idempotency, execution durability, event/evidence accountability and reconciliation without creating duplicate semantic sources of truth or a parallel authority system.**

The decisive boundary is:

**SEMANTICS → PHYSICAL MODEL → CONSTRAINTS → TRANSACTION → DURABLE STATE → EVENT/EVIDENCE → RECONCILIATION**

And the non-negotiable rule remains:

**NO AUTHORIZATION → NO CONSEQUENTIAL DATABASE-BACKED BUSINESS ACTION.**

## 96. Sources used for physical architecture research

- Neon branching and production/staging workflow guidance.
- Neon branching and isolated environment guidance.
- Neon PostgreSQL compute/storage/autoscaling architecture.
- PostgreSQL 18 data-definition and constraint documentation.
- PostgreSQL 18 generated-column documentation.
- PostgreSQL 18 declarative partitioning documentation.

Research is used to inform physical implementation choices; earlier LegaX contracts remain the semantic authority.
