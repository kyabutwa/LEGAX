# LegaX — Canonical Event Contract

## 17 — Canonical Event Contract

**Status:** Foundational event architecture contract.

## 1. Purpose

Phase 17 makes the LegaX Event a first-class implementation boundary.

Phases 11, 13, 15 and 16 established that events record meaningful occurrences, preserve causal/accountability chains, follow governed state transitions and connect command execution to evidence. This phase defines the exact contract by which an event is identified, structured, versioned, produced, transported, deduplicated, ordered, secured, retained, propagated, consumed, corrected and reconciled.

The central distinction is:

**An event is a governed record of an occurrence. It is not the occurrence itself, not delivery, not consumption, not evidence of every claim in its payload, and not authority.**

The canonical lifecycle is:

**OCCURRENCE → EVENT CONSTRUCTION → VALIDATION → PERSISTENCE → PUBLICATION → DELIVERY → CONSUMPTION → PROCESSING → RESULT/EVIDENCE**

For consequential local state:

**STATE MUTATION + EVENT INTENT → ATOMIC COMMIT → OUTBOX → PUBLICATION**

For external observations:

**EXTERNAL OCCURRENCE → INGESTION → AUTHENTICATION/VALIDATION → NORMALIZATION → PROVENANCE → EVENT → RECONCILIATION**

## 2. Architectural position

Phase 17 sits between execution/state and evidence/intelligence:

**AUTHORIZATION → COMMAND → EXECUTION → OUTCOME → AUTHORITATIVE STATE → EVENT → EVIDENCE → INTELLIGENCE**

It does not replace Phase 16.

Phase 16 answers **how an operation executes**.

Phase 17 answers **how the resulting occurrence is represented and propagated safely**.

Phase 17 does not require every domain to use event sourcing. Event recording and event-sourced state are separate architectural choices.

## 3. Core definitions

### 3.1 Event

An **Event** is a uniquely identifiable, structured, immutable-in-meaning record representing a named occurrence relevant to a defined LegaX domain, service, resource, workflow, governance process, external integration, or observation.

### 3.2 Domain Event

A domain event represents a business/domain occurrence that is meaningful to the authoritative domain.

Examples:

- payment.settled;
- booking.confirmed;
- access.granted;
- credential.revoked;
- resource.maintenance.started.

### 3.3 State-Transition Event

A state-transition event records that an authoritative state transition occurred.

It MUST reference the transition and the relevant prior/resulting state semantics where the domain requires them.

### 3.4 Integration Event

An integration event is a representation intentionally published for another bounded context or external system.

An integration event may be derived from an internal domain event. It is not automatically the same object as the internal event.

### 3.5 Observation Event

An observation event records that a system observed, received, measured or detected something.

It must preserve the distinction between:

**what was observed**

and

**what LegaX establishes as canonical truth**.

### 3.6 Command Event

A command-related event records command lifecycle occurrences such as requested, accepted, started, completed, failed, unknown or reconciled.

### 3.7 Audit Event

An audit event records a security, governance or accountability-relevant occurrence.

Audit events are not equivalent to every operational log.

### 3.8 Telemetry Event

Telemetry is operational measurement used to understand system behavior.

Telemetry MUST NOT automatically become canonical business history.

## 4. Event identity

Every event MUST have a unique **event_id** within its declared identity model.

CloudEvents establishes a strong interoperability baseline around source + id uniqueness and a stable event envelope. LegaX adopts that principle while adding its own domain identity and governance semantics.

LegaX must distinguish:

- event_id;
- event_type;
- event_version;
- source;
- occurrence sequence where applicable;
- command_id;
- execution_attempt_id;
- request_id;
- correlation_id;
- causation_id;
- idempotency_key;
- trace_id;
- span_id;
- provider_event_id.

These identifiers have different meanings and MUST NOT be casually substituted.

## 5. Event identity versus event type

**event_id** identifies one occurrence record.

**event_type** identifies the semantic structure/category.

For example:

- event_id = one specific payment settlement occurrence;
- event_type = `lega.pay.payment.settled`.

Dynamic identifiers MUST NOT be embedded in event type names.

OpenTelemetry's current event semantic conventions similarly require event names to identify event structures rather than individual dynamic occurrences.

## 6. Source identity

Every event MUST identify its source.

The source should identify the system, domain, service, device, provider adapter, or other producer responsible for originating the event representation.

Source identity does not mean the source is authoritative for every claim in the event.

For external events:

**external source identity ≠ LegaX canonical authority**

## 7. Event envelope

The canonical LegaX envelope contains, conceptually:

- event_id
- event_type
- event_version
- event_schema_ref
- spec_version
- source
- subject
- domain
- service
- occurrence_at
- observed_at
- recorded_at
- effective_at where applicable
- received_at where applicable
- correlation_id
- causation_id
- request_id where applicable
- command_id where applicable
- execution_attempt_id where applicable
- authorization_id where applicable
- transition_id where applicable
- idempotency_key where applicable
- trace_id
- span_id
- sequence/stream position where applicable
- producer_version
- tenant/community scope where applicable
- sensitivity classification
- retention class
- provenance reference
- evidence references
- data content type
- payload
- integrity metadata
- delivery metadata where appropriate

Not every field is mandatory for every event. Requirement level is event-type specific.

## 8. CloudEvents alignment

LegaX should use CloudEvents-compatible semantics at integration boundaries because CloudEvents provides a vendor-neutral event information model and standardized context attributes.

LegaX should align conceptually with:

- id;
- source;
- specversion;
- type;
- subject;
- time;
- datacontenttype;
- dataschema.

LegaX-specific extensions may carry command, authorization, causation, correlation, provenance, scope and governance references.

LegaX MUST NOT overload standard CloudEvents fields with different meanings.

## 9. Event type naming

Event types should be:

- stable;
- domain-qualified;
- semantic;
- machine-readable;
- non-dynamic;
- documented.

Recommended conceptual pattern:

**lega.<domain>.<subject>.<past-tense-occurrence>**

Examples:

- lega.pay.payment.authorized
- lega.pay.payment.settled
- lega.access.access.granted
- lega.booking.booking.confirmed
- lega.resource.unit.occupied
- lega.identity.credential.revoked

The exact naming registry belongs to the event catalog.

## 10. Event versioning

Every event type MUST have an independently managed schema/version contract.

LegaX must distinguish:

- envelope/spec version;
- event semantic version;
- payload schema version;
- producer implementation version.

Changing a producer implementation does not automatically mean the event schema changed.

CloudEvents explicitly leaves payload schema evolution to event producers and identifies type and dataschema as important tools for communicating event structure.

## 11. Compatibility rules

Schema evolution should prefer backward-compatible changes where consumers can safely ignore new fields.

Potentially breaking changes include:

- changing field meaning;
- changing requiredness;
- changing type;
- changing enum semantics;
- removing fields still required by supported consumers;
- changing event type meaning;
- changing timestamp semantics;
- changing authority/truth semantics.

A breaking semantic change should create a new version or event type according to the registry policy.

## 12. Event schema registry

LegaX should maintain a governed event catalog/registry containing:

- event type;
- version;
- owner domain;
- producer;
- schema;
- required fields;
- optional fields;
- semantic definitions;
- compatibility policy;
- sensitivity;
- retention;
- ordering requirements;
- delivery guarantees;
- authoritative status;
- allowed consumers;
- deprecation status.

No production event type should exist only as undocumented application code.

## 13. Event ownership

Each canonical event type MUST have an owning domain/service.

The owner is responsible for:

- semantic definition;
- schema;
- lifecycle;
- compatibility;
- publication rules;
- truth/authority semantics;
- security classification;
- retention classification;
- deprecation.

Consumers do not redefine the producer's event meaning.

## 14. Canonical versus derived events

A **canonical event** is emitted by or on behalf of the authoritative domain when the defined occurrence is established according to that domain's rules.

A **derived event** is generated from one or more other records/events.

Derived events must preserve provenance to their inputs.

A derived event MUST NOT be represented as though the authoritative domain directly asserted it.

## 15. Canonical versus observational events

This distinction is critical.

### Canonical event

Records an occurrence established by the authoritative domain.

Example:

**LegaPay.payment.settled**

### Observational event

Records that an external source reported something.

Example:

**Provider.reported.payment.settled**

The second event can trigger reconciliation.

It cannot silently become the first.

## 16. External assertion events

External providers may produce:

- callbacks;
- webhooks;
- status messages;
- sensor observations;
- financial statements;
- controller acknowledgements;
- partner events.

These are external assertions until validated and reconciled.

The event must preserve:

- external source;
- provider event ID;
- provider timestamp;
- received timestamp;
- provider operation/reference;
- raw evidence reference where retention permits;
- normalization result;
- validation result;
- reconciliation state.

## 17. Event truth classification

Every event should declare its semantic truth class where relevant:

- DECLARED;
- OBSERVED;
- VERIFIED;
- AUTHORITATIVE;
- INFERRED;
- PROPOSED;
- UNKNOWN.

This is not a replacement for event type.

It is an epistemic/provenance property.

A model-generated recommendation cannot be represented as an AUTHORITATIVE domain event merely because it was emitted by an internal service.

## 18. Occurrence time

The canonical event timestamp is **occurrence_at** when the actual occurrence time is known.

LegaX must distinguish:

- occurred_at;
- observed_at;
- received_at;
- recorded_at;
- effective_at.

OpenTelemetry's event conventions require event timestamp to represent when the event occurred and treat observed time separately.

An offline device may produce:

**occurred_at = 10:02**

**received_at = 10:19**

Both facts must survive.

## 19. Clock uncertainty

Events from distributed systems may have uncertain clocks.

Where material, preserve:

- clock source;
- clock accuracy/uncertainty;
- synchronization status;
- provider timestamp;
- LegaX receipt time.

Ordering MUST NOT be inferred solely from timestamps when clocks are not sufficiently synchronized.

## 20. Event ordering

LegaX does not require global total ordering.

Ordering is defined within the smallest scope necessary to protect a domain invariant.

Possible streams:

- payment_id;
- booking_id;
- resource_id;
- access_point_id;
- relationship_id;
- command_id;
- workflow_id;
- aggregate/resource key.

An event may contain:

- stream_id;
- sequence_number;
- previous_event_reference;
- version.

If ordering is not semantically required, consumers must not invent it.

## 21. Ordering versus causality

Ordering and causality are different.

**Sequence says which event is ordered before another within a stream.**

**Causation says which record directly caused another.**

**Correlation says which records belong to a broader workflow.**

They must not be collapsed into one identifier.

## 22. Causation

Every derived/consequential event should carry **causation_id** when a direct causal predecessor exists.

Example:

**payment.command → payment.attempted → payment.settled**

Each event should identify the immediate predecessor where meaningful.

Causation does not prove legal or human responsibility.

## 23. Correlation

**correlation_id** groups records belonging to one broader operation/workflow.

Example:

A booking workflow may correlate:

**booking request → authorization → payment → reservation → access → fulfillment**

Correlation does not mean every event caused every other event.

## 24. Distributed trace context

Where event processing participates in distributed tracing, LegaX should propagate W3C Trace Context identifiers.

W3C Trace Context standardizes `traceparent` and `tracestate` for cross-system trace-context propagation.

Trace IDs and event IDs are complementary:

**trace_id ≠ event_id**

A trace represents an operational execution graph.

An event represents a named occurrence.

## 25. Event provenance

Every event MUST have sufficient provenance to establish:

- producer;
- producer version;
- source;
- creation mechanism;
- originating command where applicable;
- upstream event where applicable;
- external source where applicable;
- transformations;
- normalization;
- enrichment;
- verification status;
- timestamps;
- schema version.

A transformed event must not erase its origin.

## 26. Provenance graph

For high-value workflows, provenance should be reconstructable as:

**Source → Input → Transformation → Event → Consumer → Derived Result**

For external integration:

**Provider Assertion → Validation → Normalization → Observation Event → Reconciliation → Canonical Event**

For intelligence:

**Events/Evidence → Model Processing → Intelligence Output → Review → Decision/Command**

## 27. Payload versus envelope

The envelope contains routing, identity, provenance, timing, governance and interoperability metadata.

The payload contains event-specific business/domain data.

The same envelope should not be reused to imply unrelated business semantics.

Consumers should depend on documented event contracts rather than undocumented payload accidents.

## 28. Sensitive payloads

Events must minimize sensitive information.

Sensitive data may include:

- biometric information;
- health information;
- financial information;
- precise location;
- identity documents;
- credentials;
- secrets;
- private communications.

Where possible, events should carry stable references instead of raw sensitive payloads.

Example:

**credential_ref = X**

rather than embedding the full credential/document.

## 29. Secret prohibition

Events MUST NOT contain:

- passwords;
- private keys;
- authentication secrets;
- session secrets;
- raw API keys;
- bearer tokens;
- provider secrets.

Even encrypted sensitive event payloads require explicit governance and retention rules.

## 30. Event integrity

High-value events may use:

- cryptographic hashes;
- signatures;
- append-only storage;
- hash chains;
- trusted timestamps;
- immutable archival;
- key-managed integrity controls.

Integrity protection proves protection of the record, not truth of every semantic claim.

## 31. Event immutability

A published canonical event should be immutable in semantic meaning.

If an error is discovered, LegaX should prefer:

- correction event;
- superseding event;
- invalidation event;
- retraction event where semantically valid;
- linked correction evidence.

The original event should not silently disappear.

## 32. Retraction versus deletion

Retraction means:

**The original assertion/event should no longer be treated as valid for the defined purpose.**

Deletion means:

**The stored representation is removed or transformed according to applicable policy.**

These are not equivalent.

Privacy deletion may require deletion/anonymization while preserving only the minimum permitted accountability evidence.

## 33. Delivery semantics

LegaX must explicitly classify delivery:

- synchronous request/response;
- asynchronous;
- at-most-once;
- at-least-once;
- effectively-once consumer application through idempotency;
- provider-defined semantics.

The default for consequential asynchronous integration should generally be:

**durable publication + at-least-once delivery + idempotent consumption + reconciliation where needed.**

LegaX MUST NOT claim universal exactly-once delivery.

## 34. Event occurrence versus delivery

These are separate facts:

**EVENT OCCURRED**

**EVENT PUBLISHED**

**EVENT DELIVERED**

**EVENT ACKNOWLEDGED**

**EVENT PROCESSED**

**EVENT EFFECT APPLIED**

A successful broker acknowledgement does not prove the consumer's business effect completed.

## 35. Transactional outbox

For a local state transition that requires event publication:

**STATE MUTATION + OUTBOX RECORD → SAME DB TRANSACTION → COMMIT → DISPATCH**

This prevents a successful state commit from being silently separated from the durable obligation to publish its event.

The dispatcher may retry.

Therefore consumers MUST tolerate duplicates.

## 36. Inbox / consumer deduplication

Consumers processing consequential events should maintain an idempotent processing boundary.

Conceptually:

**event_id + consumer_scope → processing record**

Possible states:

- RECEIVED;
- PROCESSING;
- PROCESSED;
- FAILED;
- RETRYING;
- DEAD_LETTERED.

A duplicate event must not repeat a consequential consumer effect.

## 37. Deduplication identity

The preferred deduplication identity is the producer's stable **event_id** within its source identity.

For provider events, use:

**provider + provider_event_id**

where available.

Do not use timestamps or payload equality as the primary duplicate identity when a stable event ID exists.

## 38. Duplicate event handling

If the same event arrives twice:

- identify duplicate;
- preserve delivery/attempt telemetry;
- do not repeat the business effect;
- return/reuse prior processing result where appropriate.

A duplicate delivery is not itself an event semantic error.

## 39. Event processing failure

If consumer processing fails:

- preserve the event;
- record the consumer attempt;
- retry if policy allows;
- use bounded backoff;
- dead-letter when necessary;
- preserve the causal chain.

Consumer failure does not erase the producer event.

## 40. Poison events

An event that repeatedly fails schema, semantic or processing validation may enter a governed dead-letter state.

Dead-letter handling must preserve:

- event identity;
- source;
- type/version;
- failure reason;
- attempts;
- timestamps;
- consumer;
- relevant evidence.

Reprocessing requires explicit compatibility and idempotency safety.

## 41. Out-of-order events

Consumers must handle out-of-order delivery when ordering is not guaranteed.

If sequence/version exists:

- compare sequence;
- reject impossible regressions;
- buffer if bounded buffering is appropriate;
- reconcile if the stream is incomplete.

Do not infer order from arrival time.

## 42. Late events

A late event may arrive after:

- state changed;
- command expired;
- relationship revoked;
- compensation occurred;
- resource retired.

The consumer must evaluate the event against the domain's temporal rules.

A late event must not automatically overwrite newer authoritative state.

## 43. Event replay

Replay is useful for:

- rebuilding read models;
- audits;
- testing;
- recovery;
- analytics;
- reconciliation.

Replay MUST NOT automatically repeat consequential side effects.

Consumers must distinguish:

**reconstruct state**

from

**execute side effect again**.

Side-effecting consumers require replay protection and explicit replay mode.

## 44. Event redelivery versus replay

Redelivery means the same delivery was retried.

Replay means historical events are intentionally reprocessed.

These require different controls.

Replay should carry:

- replay_id;
- replay reason;
- initiator;
- scope;
- time range;
- consumer/version;
- side-effect policy.

## 45. Event filtering

Consumers should subscribe by:

- event type;
- domain;
- subject/resource;
- scope;
- version;
- policy-approved attributes.

Filtering MUST NOT become a mechanism for hiding required audit/security events from authorized accountability systems.

## 46. Cross-domain propagation

Canonical cross-domain flow:

**Domain A State → Domain A Canonical Event → Integration Projection → Transport → Domain B Consumer → Domain B Command/State**

Domain B must not directly mutate Domain A state.

The event is a communication boundary, not ownership transfer.

## 47. Integration event projection

A domain may publish a separate integration event derived from a richer internal event.

This allows:

- data minimization;
- schema stability;
- consumer-specific compatibility;
- security filtering;
- external interoperability.

The projection must preserve provenance to the source event.

## 48. Event transformation

Transformations must declare:

- source event;
- transformation version;
- transformation producer;
- transformed fields;
- omitted fields;
- semantic mapping.

A transformed event must not silently change an UNKNOWN result into SUCCESS.

## 49. Event fan-out

One canonical event may be consumed by:

- multiple LegaServices;
- intelligence;
- audit;
- notification;
- analytics;
- reconciliation;
- external integrations.

Each consumer has independent delivery/processing state.

A consumer failure does not invalidate the producer event.

## 50. Consumer authorization

Access to events is itself governed.

Consumers must be authorized based on:

- actor/service identity;
- purpose;
- domain;
- scope;
- sensitivity;
- community/tenant boundary;
- event type;
- retention;
- legal basis/policy where applicable.

Having network access to a stream is not authorization to read every event.

## 51. Event confidentiality

Events should be classified, for example:

- PUBLIC;
- INTERNAL;
- SENSITIVE;
- HIGHLY_SENSITIVE;
- RESTRICTED.

Classification is event-type specific.

Encryption in transit and at rest must match risk and policy.

## 52. Event integrity versus confidentiality

These are independent controls.

Encryption protects confidentiality.

Integrity protection detects unauthorized modification.

Neither alone establishes semantic truth.

## 53. Event retention

Every event class must have a retention policy.

Retention should consider:

- legal/regulatory requirements;
- financial reconciliation;
- dispute periods;
- security investigation;
- operational usefulness;
- privacy;
- contractual requirements;
- storage cost;
- evidentiary requirements.

No universal infinite-retention default.

NIST log-management guidance emphasizes defining generation, transmission, storage, protection and disposal requirements according to organizational needs and risk.

## 54. Event archival

Long-retention events may move to archival storage.

Archival must preserve:

- event identity;
- schema/version;
- provenance;
- integrity;
- original occurrence time;
- retention/legal status;
- retrieval authorization.

Archive migration is itself operationally auditable.

## 55. Legal hold

Where a legitimate legal/investigative hold exists, normal deletion may be suspended for the defined records.

The hold must be:

- authorized;
- scoped;
- time-bounded/reviewable;
- auditable.

A legal hold is not unrestricted permanent retention.

## 56. Privacy deletion

When deletion is legally required, LegaX must distinguish:

- deletion of payload;
- anonymization;
- redaction;
- deletion of direct identifiers;
- retention of minimal integrity/accountability metadata where lawful.

The privacy policy must define the result.

## 57. Event security

Event infrastructure must protect against:

- spoofed producers;
- unauthorized publication;
- unauthorized subscription;
- replay;
- tampering;
- event injection;
- event flooding;
- schema abuse;
- malicious payloads;
- privilege escalation through consumer actions.

Producer authentication alone does not make every payload field trusted.

## 58. Producer authentication

Producers may authenticate through:

- service identity;
- workload identity;
- mTLS;
- signed messages;
- approved API credentials;
- device identity;
- provider verification.

The accepted mechanism is domain/transport specific.

## 59. Consumer trust

A consumer must verify that:

- source is expected;
- schema is supported;
- event is within permitted scope;
- event is authentic enough for its use;
- event is not expired/revoked where applicable;
- event has not already been processed;
- referenced entities remain valid.

## 60. Event authorization versus business authorization

Permission to **receive an event** does not mean permission to **perform the business action described by the event**.

Example:

A service may be allowed to receive:

**booking.cancelled**

but that event alone does not authorize it to refund money.

The service must issue a governed command under its own authority.

## 61. Event-driven automation

An event may trigger automation.

However:

**EVENT → AUTOMATION TRIGGER ≠ AUTHORIZATION**

The triggered command must pass the command/execution contract.

Pre-authorized automation must have explicit policy bounds.

## 62. AI event consumption

AI may consume events when authorized.

AI may:

- summarize;
- correlate;
- classify;
- detect anomalies;
- predict;
- recommend.

AI-generated outputs must preserve:

- source events;
- evidence;
- model/version;
- processing time;
- uncertainty;
- provenance.

AI cannot silently convert event interpretation into canonical event truth.

## 63. Event intelligence provenance

For intelligence derived from events:

**Input Event IDs → Model/Rule Version → Processing Run → Output ID → Confidence/Uncertainty → Review/Decision**

The event remains the source occurrence.

The intelligence output remains a separate record.

## 64. Event-to-evidence relationship

An event may reference evidence.

Evidence may support an event.

Neither relation should be confused with identity:

- event_id identifies the occurrence record;
- evidence_id identifies supporting material.

A canonical event should not embed massive evidence payloads by default.

## 65. Event-to-state relationship

An event may report a state transition.

The authoritative state remains owned by the domain.

Example:

**booking.confirmed event**

does not become authoritative merely because another service received it.

The Booking domain remains the state owner.

## 66. Event correction

If an event was emitted incorrectly:

1. preserve original event;
2. classify correction reason;
3. emit correction/supersession/invalidation event;
4. preserve linkage;
5. update affected canonical state through its governed command/state process;
6. notify/reconcile affected consumers where required.

Never silently rewrite distributed history.

## 67. Event contract testing

Every event type should have contract tests covering:

- schema validity;
- required fields;
- semantic constraints;
- version compatibility;
- identity uniqueness;
- timestamp semantics;
- provenance;
- security classification;
- redaction;
- duplicate handling;
- out-of-order handling;
- unknown/indeterminate states;
- consumer compatibility.

## 68. Schema compatibility testing

Before publishing a new event schema:

- compare against supported consumer versions;
- classify changes;
- test serialization/deserialization;
- verify required fields;
- verify enum compatibility;
- test old consumers;
- test new consumers;
- validate documentation.

A syntactically valid schema can still be semantically breaking.

## 69. Event catalog governance

The catalog should track:

- owner;
- lifecycle;
- version;
- consumers;
- producer;
- sensitivity;
- retention;
- ordering;
- delivery semantics;
- authoritative status;
- deprecation;
- compatibility guarantees.

Unused/deprecated events should be retired deliberately.

## 70. Deprecation

Deprecation must specify:

- replacement event;
- migration period;
- supported versions;
- producer cutoff;
- consumer migration status;
- final retirement date.

Deleting an event type without consumer analysis is prohibited for governed production contracts.

## 71. Event availability and durability

If an event is required for accountability, its durability requirement must exceed ordinary best-effort telemetry.

Critical events require durable persistence before the system reports the corresponding local operation as durably complete, subject to the domain's transaction model.

## 72. Event loss

Event loss must be detectable for event classes requiring reliable publication.

Controls may include:

- outbox;
- sequence gaps;
- publication acknowledgements;
- consumer offsets;
- reconciliation;
- durable queues;
- periodic completeness checks.

A transport queue's health metric is not proof that no event was lost.

## 73. Event completeness

For critical streams, LegaX should support completeness verification using:

- expected sequence ranges;
- aggregate version comparisons;
- reconciliation queries;
- outbox-to-broker checks;
- provider statement reconciliation.

Completeness is domain-specific.

## 74. Event replay safety

Any event consumer capable of causing a consequential command must declare replay behavior:

- NO_SIDE_EFFECT;
- IDEMPOTENT_SIDE_EFFECT;
- EXPLICIT_REPLAY_COMMAND;
- RECONCILIATION_ONLY.

Historical replay MUST NOT accidentally create new payments, access grants, bookings, messages or physical commands.

## 75. Event ordering and concurrency

Event ordering must reflect the domain's concurrency model.

An event with sequence N+1 cannot automatically establish that N was observed by every consumer.

Consumers that require prior state must either:

- enforce sequence;
- buffer;
- reload authoritative state;
- reconcile.

## 76. Eventual consistency

Events often create eventual consistency across services.

Therefore a consumer may temporarily observe:

- old state;
- missing related record;
- pending dependency;
- duplicate;
- out-of-order information.

The consumer must define its consistency behavior.

Eventual consistency must not become permission to invent state.

## 77. Event-driven command loops

LegaX must guard against loops:

**Event A → Command B → Event A → Command B...**

Controls may include:

- causation chain;
- command/event type rules;
- workflow IDs;
- maximum hop count;
- loop detection;
- explicit automation policy.

A correlation ID alone is insufficient loop protection.

## 78. Event amplification

One event may generate many downstream operations.

Fan-out must be bounded where needed.

Rate limits, queue controls and consumer isolation should prevent one event from causing uncontrolled system-wide load.

## 79. Event ordering across domains

There is no universal cross-domain total order.

If two events from independent domains appear in different orders, the consumer should use:

- causation;
- domain timestamps;
- authoritative state;
- version;
- workflow constraints;
- reconciliation.

Do not fabricate a global sequence.

## 80. Physical-world events

Physical events must distinguish:

- command sent;
- controller received;
- controller acknowledged;
- sensor observed;
- physical state inferred;
- human confirmation.

Example:

**access.enforcement.commanded**

is not:

**door.opened**

unless the evidence establishes the latter.

## 81. Economic events

Economic events must preserve:

- intent;
- attempt;
- authorization;
- provider acceptance;
- processing;
- settlement;
- refund;
- reversal;
- dispute;
- reconciliation.

A payment provider webhook is an external assertion until its semantics are validated.

## 82. Identity and access events

Identity/access events may include:

- identity evidence submitted;
- credential verified;
- authentication succeeded;
- authorization denied;
- access granted;
- access denied;
- credential revoked.

Sensitive biometric details should generally be referenced/minimized rather than copied into broad event streams.

## 83. Event metadata versus domain payload

Routing metadata should not be duplicated unnecessarily inside every domain payload.

But material business references required to interpret the event should remain in the payload.

The schema registry must define the boundary.

## 84. Event size

Events should remain bounded.

Large evidence/documents/media should generally be stored in governed evidence/object storage and referenced by the event.

Oversized events create:

- delivery cost;
- retry amplification;
- privacy exposure;
- consumer instability;
- retention burden.

## 85. Event partitioning

For high-throughput streams, partition keys should preserve the ordering required by the domain invariant.

Examples:

- payment_id;
- resource_id;
- booking_id;
- community_id where appropriate.

Partitioning MUST NOT create an unintended privacy or authorization boundary.

## 86. Event consumer isolation

A slow or failing consumer should not normally block unrelated consumers.

Use:

- independent subscriptions;
- queues;
- consumer-specific retry policies;
- dead-letter handling;
- backpressure.

Critical security/audit streams may require stronger delivery treatment.

## 87. Backpressure

Consumers should have explicit behavior when event volume exceeds processing capacity:

- queue;
- throttle;
- shed non-critical work;
- delay;
- scale;
- dead-letter according to policy.

Backpressure must not silently discard accountability-critical events.

## 88. Event bus is not canonical truth

A broker, queue or stream is transport infrastructure.

The broker does not own:

- identity;
- authority;
- canonical state;
- business truth.

LegaX domain ownership remains the source of canonical semantics.

## 89. Event store is not automatically evidence

Persisting an event does not make every payload attribute legally or epistemically proven.

Evidence strength remains governed by Phase 11.

## 90. Event security boundaries

A service receiving an event MUST NOT gain:

- identity authority;
- administrative authority;
- resource ownership;
- payment authority;
- access authority;

merely because the event says another domain performed something.

Events communicate facts/assertions according to their declared semantics.

## 91. Operational observability

Event processing should integrate with OpenTelemetry tracing/logging without confusing observability records with domain events.

OpenTelemetry recommends standardized correlation of logs and traces using trace context, improving cross-component diagnostics.

Recommended operational linkage:

**event_id ↔ trace_id ↔ span_id ↔ command_id ↔ attempt_id**

This linkage improves diagnosis without turning telemetry into canonical business history.

## 92. Metrics

Event infrastructure should measure:

- events produced;
- events persisted;
- publication latency;
- delivery latency;
- duplicate deliveries;
- consumer failure rate;
- retry rate;
- dead-letter count;
- sequence gaps;
- out-of-order events;
- schema rejection;
- unauthorized producer attempts;
- unauthorized consumer attempts;
- reconciliation backlog;
- event retention/archival backlog;
- consumer lag.

Metrics are observability, not event truth.

## 93. Failure taxonomy

Event infrastructure should distinguish:

- SCHEMA_INVALID;
- PRODUCER_UNAUTHORIZED;
- CONSUMER_UNAUTHORIZED;
- DUPLICATE;
- OUT_OF_ORDER;
- UNKNOWN_SOURCE;
- UNSUPPORTED_VERSION;
- PAYLOAD_INVALID;
- DELIVERY_FAILED;
- CONSUMER_FAILED;
- RETRY_EXHAUSTED;
- DEAD_LETTERED;
- SEQUENCE_GAP;
- PROVENANCE_INVALID;
- INTEGRITY_FAILED;
- RETENTION_BLOCKED;
- RECONCILIATION_REQUIRED.

## 94. Event ingestion pipeline

Canonical external ingestion:

**RECEIVE → AUTHENTICATE → PARSE → SCHEMA_VALIDATE → SOURCE_VALIDATE → TIMESTAMP_VALIDATE → DEDUPLICATE → NORMALIZE → PROVENANCE → PERSIST → RECONCILE → PUBLISH/PROCESS**

External input must not directly mutate canonical state.

## 95. Event publication pipeline

Canonical local publication:

**STATE CHANGE → EVENT CONSTRUCTION → SCHEMA VALIDATION → ATOMIC OUTBOX COMMIT → DISPATCH → DELIVERY → CONSUMER PROCESSING → RESULT**

The event is durably tied to the local state change before asynchronous delivery.

## 96. Event consumer pipeline

Canonical consumer flow:

**RECEIVE → AUTHENTICATE → SCHEMA VALIDATE → SCOPE/AUTHORIZATION CHECK → DEDUPLICATE → ORDER/VERSION CHECK → PROCESS → RECORD RESULT → ACK/RETRY → EMIT DERIVED EVENT IF APPLICABLE**

A consumer must not acknowledge successful business processing before its required local durability boundary.

## 97. Event-to-command pipeline

When an event legitimately triggers action:

**EVENT → POLICY/AUTOMATION EVALUATION → COMMAND CREATION → AUTHORIZATION → EXECUTION GATES → COMMAND EXECUTION**

Not:

**EVENT → DIRECT DATABASE MUTATION**

## 98. Event-driven security example

If suspicious authentication events trigger a security response:

**authentication.failed events → intelligence/risk analysis → governed recommendation → authorized security command → execution → security event**

The event itself does not authorize suspension unless policy explicitly defines a bounded automated authority.

## 99. Event-driven physical example

If a safety sensor reports a hazard:

**sensor observation → validation → safety event → policy evaluation → authorized safety command → physical enforcement → observation → reconciliation**

A sensor reading is not itself universal authority.

## 100. Event-driven economic example

For payment:

**payment command → attempt event → provider assertion → settlement event when established → reconciliation event**

Provider timeout:

**attempt → UNKNOWN → reconciliation → resolved event**

Not:

**timeout → failed → retry blindly**

## 101. Event contract data model

Conceptually:

- event_id
- event_type
- event_version
- spec_version
- schema_ref
- source
- subject
- domain
- service
- truth_class
- occurrence_at
- observed_at
- received_at
- recorded_at
- effective_at
- clock_uncertainty
- correlation_id
- causation_id
- request_id
- command_id
- attempt_id
- authorization_id
- transition_id
- idempotency_key
- trace_id
- span_id
- stream_id
- sequence_number
- previous_event_id
- producer_version
- scope_ref
- sensitivity_class
- retention_class
- provenance_ref
- evidence_refs
- payload
- integrity_ref

This is a conceptual contract. Physical schema belongs to the later database architecture gate.

## 102. Event invariants

1. Every canonical event has a unique event identity.
2. Event identity is distinct from event type.
3. Event type identifies structure, not occurrence.
4. Event source is explicit.
5. Event ownership is explicit.
6. Event schema/version is explicit.
7. Envelope semantics are distinct from payload semantics.
8. Dynamic identifiers do not define event type names.
9. Occurrence time is distinct from receipt time.
10. Observed time is distinct from recorded time.
11. Effective time is distinct from occurrence time.
12. Clock uncertainty is preserved where material.
13. Event identity is not correlation identity.
14. Event identity is not causation identity.
15. Event identity is not trace identity.
16. Event identity is not command identity.
17. Causation and correlation have distinct meanings.
18. Ordering and causation are distinct.
19. No global event ordering is assumed by default.
20. Ordering scope is explicit where required.
21. Sequence/version is authoritative only within its defined stream.
22. External assertions retain external provenance.
23. External provider events do not automatically become canonical events.
24. Observational events remain observational until governed reconciliation establishes stronger status.
25. Canonical events are owned by their authoritative domain.
26. Derived events preserve provenance.
27. Integration events do not transfer state ownership.
28. Event consumers do not redefine producer semantics.
29. Event schema evolution is governed.
30. Breaking semantic changes require explicit version/type governance.
31. Event schemas are catalogued.
32. Event contracts are testable.
33. Published canonical events are immutable in semantic meaning.
34. Corrections preserve original history.
35. Retraction is distinct from deletion.
36. Event occurrence is distinct from delivery.
37. Delivery is distinct from consumption.
38. Consumption is distinct from business-effect completion.
39. Broker acknowledgement is not domain success.
40. At-least-once delivery requires idempotent consumers for consequential effects.
41. Event deduplication uses stable event identity where available.
42. Provider event deduplication uses provider identity where available.
43. Duplicate delivery must not duplicate a governed consequential effect.
44. Out-of-order events are handled explicitly.
45. Late events are handled explicitly.
46. Event replay cannot silently repeat consequential side effects.
47. Replay and redelivery are distinct.
48. Dead-lettered events retain identity and failure history.
49. Consumer failure does not erase producer history.
50. Event-driven automation still passes through command/authorization controls.
51. Receiving an event does not grant business authority.
52. Events do not create identity or authority.
53. AI interpretation does not become canonical event truth automatically.
54. Event payloads minimize sensitive information.
55. Secrets are prohibited from event payloads.
56. Large evidence objects are referenced rather than embedded where appropriate.
57. Event confidentiality is independently governed.
58. Event integrity is independently governed.
59. Integrity does not prove semantic truth.
60. Event retention is explicit.
61. Retention is not universally indefinite.
62. Legal holds are bounded and governed.
63. Privacy deletion follows policy and law.
64. Event archival preserves interpretability.
65. Critical event loss must be detectable where required.
66. Sequence gaps can trigger reconciliation where material.
67. Event fan-out does not transfer domain ownership.
68. Consumer authorization is scoped.
69. Event scope is not automatically equivalent to user scope.
70. Cross-domain events do not permit direct mutation of another domain's canonical state.
71. Domain state remains owned by the authoritative domain.
72. Event transformations preserve provenance.
73. Event projections do not silently strengthen truth claims.
74. Unknown remains unknown until sufficient evidence/reconciliation.
75. Provider acceptance is distinct from canonical completion.
76. Physical observation is distinct from command acknowledgement.
77. Payment settlement is distinct from provider acceptance.
78. Event loops require explicit controls.
79. Event amplification requires bounded controls.
80. Backpressure must not silently discard accountability-critical events.
81. Transport infrastructure is not canonical truth.
82. Event storage is not automatically legal evidence.
83. Telemetry is not automatically an audit event.
84. Audit events are not every operational log.
85. Trace context complements event identity.
86. Trace IDs do not replace event IDs.
87. Consumer effects have their own processing state.
88. Consumer retries are bounded.
89. Producer publication retries are bounded.
90. Schema validation occurs before consequential consumer processing.
91. Unauthorized producers are rejected.
92. Unauthorized consumers are blocked.
93. Event provenance is preserved across transformations.
94. Every critical event type has an owner.
95. Every critical event type has a retention classification.
96. Every critical event type has a delivery classification.
97. Every critical event type has an ordering classification.
98. Every critical event type has a security classification.
99. Every critical event type has a compatibility policy.
100. No event may claim stronger truth than its provenance supports.
101. No event may authorize an unrelated consequential action.
102. No event consumer may bypass the command/execution contract.
103. No event correction may silently erase historical accountability.
104. No event replay may silently create duplicate consequential effects.
105. No canonical event may be emitted before its defined occurrence criteria are satisfied.
106. No external assertion may be represented as canonical merely because it came through an authenticated channel.
107. No event schema may change semantic meaning without governed versioning.
108. No event publication contract may promise exactly-once delivery universally.
109. No event transport acknowledgement may be represented as consumer business success.
110. No consequential event stream is implementation-ready until its ordering, delivery, deduplication, provenance, security and retention rules are explicit.

## 103. Contradiction tests

### A — Duplicate publication
The same event is published twice.

**Required:** one event identity; consumers do not duplicate consequential effects.

### B — Different event IDs, same business command
Two event IDs represent duplicate publication of the same logical occurrence.

**Required:** domain-specific idempotency/reconciliation prevents duplicate business effects.

### C — Provider webhook replay
Same provider event arrives five times.

**Required:** provider identity deduplication.

### D — Out-of-order payment events
Settlement arrives before processing event.

**Required:** sequence/domain reconciliation; no invalid regression.

### E — Late revocation
Credential revocation arrives after a cached access event.

**Required:** event timing/state rules determine whether subsequent access remains valid.

### F — Event says payment settled
Provider says settled, but authoritative reconciliation has not established settlement.

**Required:** observational/provider event, not canonical settlement.

### G — Door ACK
Controller acknowledges command.

**Required:** does not automatically emit door.opened.

### H — Event replay
Historical payment.settled events are replayed.

**Required:** no new payment settlement side effects.

### I — Schema evolution
Producer adds an optional field.

**Required:** compatible consumers continue safely.

### J — Breaking semantic change
Producer changes meaning of amount.

**Required:** new governed version/type.

### K — Unauthorized consumer
A service can connect to the broker but lacks permission for sensitive health events.

**Required:** delivery blocked.

### L — Sensitive payload
A broad event contains raw biometric data.

**Required:** minimize/reference and enforce sensitivity boundary.

### M — Event correction
Original event was wrong.

**Required:** correction/supersession preserves original history.

### N — Consumer crash
Consumer applies DB effect then crashes before acknowledgement.

**Required:** redelivery is safe through consumer idempotency.

### O — Outbox crash
State commits, dispatcher crashes.

**Required:** durable outbox remains.

### P — Event loss
Publisher reports success but no durable event exists.

**Required:** local state/event atomicity or reconciliation detects inconsistency.

### Q — AI interpretation
AI predicts that a resource is occupied.

**Required:** prediction remains intelligence/inference, not canonical occupancy event.

### R — Event loop
A consumer turns event A into command B, which produces event A again.

**Required:** loop detection/policy prevents uncontrolled recursion.

### S — Cross-domain mutation
Domain B receives Domain A's event and directly updates A's canonical state.

**Required:** prohibited.

### T — Global ordering assumption
Two unrelated domains emit events with conflicting timestamps.

**Required:** no fabricated global ordering.

### U — Replay side effect
Reprocessing a booking.confirmed event creates a second access grant.

**Required:** replay-safe command path.

### V — Retention conflict
Event is under legal hold while normal retention expires.

**Required:** governed hold prevents ordinary disposal.

### W — Provenance loss
An integration projection removes the external source reference.

**Required:** reject or preserve provenance.

### X — Transport success
Broker acknowledges delivery, but consumer transaction rolls back.

**Required:** business processing remains incomplete and event can be retried.

## 104. Phase 17 readiness gate

Every consequential event type must answer:

1. What exact occurrence does this event represent?
2. Who owns its semantics?
3. What is its event_id identity model?
4. What is its event_type?
5. What schema/version governs it?
6. What is the source?
7. Is it canonical, derived, observational, integration, audit or telemetry?
8. What is its truth/provenance class?
9. What is occurrence time?
10. What are observed/received/recorded/effective times?
11. What ordering scope applies?
12. Does it have sequence/version semantics?
13. What is its causation_id?
14. What is its correlation_id?
15. What command/attempt/authorization does it relate to?
16. What trace context may accompany it?
17. What evidence supports it?
18. What sensitive data is present?
19. What is the retention class?
20. Who may publish it?
21. Who may consume it?
22. What delivery semantics apply?
23. How are duplicates handled?
24. How are out-of-order events handled?
25. How are late events handled?
26. How are replayed events handled?
27. What happens when consumers fail?
28. What is the dead-letter policy?
29. What happens if publication fails?
30. How is state/event consistency guaranteed?
31. What is the schema compatibility policy?
32. How are corrections represented?
33. How is external provenance preserved?
34. What happens if the source is unknown?
35. What happens if the event conflicts with authoritative state?
36. What downstream commands may legitimately be triggered?
37. What authorization is required for those commands?
38. What privacy/deletion rules apply?
39. How is event completeness monitored?
40. How can the event be reconstructed and challenged?

If any answer is ambiguous, the event type is not implementation-ready.

## 105. Relationship to Phase 16

Phase 16 defines:

**COMMAND → EXECUTION → OUTCOME → STATE → EVENT**

Phase 17 defines the event boundary:

**STATE/OCCURRENCE → EVENT → PERSISTENCE → DELIVERY → CONSUMPTION → DERIVED ACTION**

The event cannot strengthen the execution outcome beyond what Phase 16 established.

UNKNOWN remains UNKNOWN.

Provider acceptance remains provider acceptance.

Canonical success requires domain-defined evidence.

## 106. Relationship to Phase 15

Phase 15 defines:

**TRANSITION → NEW STATE → EVENT → EVIDENCE → RECONCILIATION**

Phase 17 makes the event portion explicit without allowing the event to become a substitute for the state machine.

A transition event records the governed occurrence.

It does not itself authorize a future transition.

## 107. Relationship to Phase 14

Relationships determine:

- source;
- scope;
- ownership;
- lifecycle;
- provenance;
- revocation.

Events communicate relationship occurrences but do not automatically create new relationships.

A relationship event must be interpreted under the relationship contract.

## 108. Relationship to Phase 13

Phase 13 defines bounded domains and ownership.

Phase 17 preserves those boundaries through:

- domain-owned event semantics;
- integration projections;
- no cross-domain direct mutation;
- causal propagation;
- reconciliation.

## 109. Relationship to Phase 11

Phase 11 establishes:

**Event ≠ Evidence ≠ Intelligence**

Phase 17 operationalizes this distinction through explicit event identity, provenance, truth class, evidence references and derived intelligence boundaries.

## 110. Research basis

Phase 17 was checked against current authoritative/mature material including:

- CNCF CloudEvents specification for interoperable event envelopes, source/id identity, event type, subject, time, schema and event-data separation.
- W3C Trace Context for distributed request/trace propagation through `traceparent` and `tracestate`.
- OpenTelemetry event semantic conventions for named occurrences, event timestamps, event naming and structured attributes.
- OpenTelemetry logs/trace correlation guidance for operational correlation without conflating telemetry with domain truth.
- NIST log-management guidance for event generation, transmission, storage, protection, retention and disposal.
- Existing LegaX Phases 01–16 as the primary semantic, relationship, state and execution contracts.

Research informs interoperability and engineering quality; LegaX's canonical authority model remains primary.

## 111. Final architectural rules

### Rule 1 — An event records an occurrence

It does not automatically prove every claim in its payload.

### Rule 2 — Event identity is not business identity

event_id, command_id, correlation_id, causation_id and trace_id remain distinct.

### Rule 3 — Canonical and observational events are different

External reports become canonical only through the defined authority/reconciliation process.

### Rule 4 — Delivery is not occurrence

Publishing, receiving, acknowledging and applying are separate states.

### Rule 5 — At-least-once is safer than pretending exactly-once

Consequential consumers must be idempotent.

### Rule 6 — Ordering is scoped

No universal global event order is assumed.

### Rule 7 — Provenance survives transformation

No projection may erase the origin required to understand an assertion.

### Rule 8 — Events do not create authority

An event can trigger a governed command; it cannot bypass authorization.

### Rule 9 — Event history is corrected, not silently rewritten

Corrections preserve accountability.

### Rule 10 — Event infrastructure is not canonical truth

Brokers, queues, logs and traces transport or observe events; domain ownership establishes canonical state.

### Final event rule

**NO VALID OCCURRENCE → NO CANONICAL EVENT.**

**NO EVENT IDENTITY → NO RELIABLE EVENT CONTRACT.**

**NO SCHEMA/VERSION CONTRACT → NO GOVERNED EVENT TYPE.**

**NO PROVENANCE → NO STRONGER TRUTH CLAIM THAN THE SOURCE SUPPORTS.**

**NO IDEMPOTENCY → NO SAFE CONSEQUENTIAL CONSUMER.**

**NO ORDERING/CONCURRENCY RULE WHERE MATERIAL → NO IMPLEMENTATION-READY STREAM.**

**NO RETENTION/SECURITY CLASSIFICATION → NO PRODUCTION EVENT CONTRACT.**

**NO REPLAY SAFETY → NO SAFE EVENT REPROCESSING.**

**NO DOMAIN OWNERSHIP → NO CANONICAL EVENT SEMANTICS.**

**NO AUTHORIZATION → NO CONSEQUENTIAL ACTION TRIGGERED BY AN EVENT.**

**Status:** Phase 17 defines the implementation-grade canonical event boundary: identity, envelope, schema/versioning, source/ownership, canonical versus observational semantics, timestamps, causation/correlation, trace context, ordering, delivery, deduplication, replay, provenance, security, privacy, retention, cross-domain propagation, event-driven automation, correction, reconciliation and consumer safety.
