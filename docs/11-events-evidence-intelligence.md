# LegaX — Events, Evidence & Intelligence Model

## 11 — Events, Evidence & Intelligence

**Canonical definition**

Events, Evidence & Intelligence in LegaX is the governed cross-cutting system through which meaningful occurrences are recorded, supporting facts and provenance are preserved, and authorized analytical or intelligent processes transform available signals and evidence into observations, findings, correlations, predictions, recommendations, and other decision-support outputs without confusing recorded occurrence with proof, inference with fact, or intelligence with authority.

The model answers **“what happened, when, where, to what or whom, through which actor or system, under which context and policy, what evidence supports that account, what is directly observed versus declared, verified, inferred, proposed, or unknown, what conclusions may be responsibly derived, and how can the resulting decision or action be reconstructed and challenged?”**

Events, Evidence, and Intelligence are related but distinct. **An Event records an occurrence. Evidence supports a claim about an occurrence, state, relationship, or decision. Intelligence derives useful understanding from events, evidence, context, models, and other permitted sources.** None of these concepts independently creates authority, authorization, ownership, identity, or permission.

## The three layers

### Event

An **Event** is a named, time-bounded occurrence relevant to the operation, lifecycle, security, governance, resource, economic, access, identity, service, or intelligence behavior of LegaX.

Examples include:

- authentication succeeded;
- credential revoked;
- authorization denied;
- access granted;
- door opened;
- resource entered maintenance;
- payment initiated;
- payment settled;
- booking cancelled;
- policy published;
- identity evidence submitted;
- lifecycle transition executed;
- external provider response received;
- security incident detected.

An event records that an occurrence was recorded; it does not automatically prove that every attribute attached to it is true.

OpenTelemetry similarly distinguishes named events as meaningful occurrences and requires event timestamps and documented event semantics. Its semantic conventions are designed to make telemetry from different systems correlatable and consistently interpretable. citeturn0search0turn0search1turn0search10

### Evidence

**Evidence** is information retained to support, challenge, verify, explain, or reconstruct a claim, state, event, relationship, decision, or outcome.

Evidence may include:

- documents;
- signed assertions;
- credentials;
- authentication assertions;
- provider responses;
- transaction records;
- sensor observations;
- device measurements;
- photographs or video where legitimately collected;
- access records;
- system logs;
- approvals;
- reviews;
- verification results;
- contracts;
- receipts;
- delivery confirmation;
- human statements;
- cryptographic proofs;
- external records;
- derived evidence with traceable provenance.

Evidence is not automatically truth. Its reliability depends on provenance, integrity, source, method, freshness, scope, and verification.

### Intelligence

**Intelligence** is governed interpretation or analysis produced from permitted data, events, evidence, models, rules, and context to improve understanding, detection, forecasting, matching, coordination, explanation, investigation, or decision support.

Intelligence may produce:

- observations;
- correlations;
- classifications;
- anomaly signals;
- risk indicators;
- forecasts;
- recommendations;
- summaries;
- matches;
- prioritization;
- explanations;
- proposed actions;
- proposed state changes.

Intelligence is not automatically authoritative.

## Foundational separation

LegaX must preserve:

**Event ≠ Evidence**

**Evidence ≠ Truth**

**Observation ≠ Verification**

**Verification ≠ Authorization**

**Inference ≠ Fact**

**Recommendation ≠ Decision**

**Intelligence ≠ Authority**

**Telemetry ≠ Audit record**

**Audit record ≠ Legal proof in every jurisdiction**

**Model output ≠ Ground truth**

A system must never upgrade one category into another merely by changing a database field or UI label.

## Event semantics

Every consequential event should have sufficient structured semantics to explain:

- event identity;
- event type/name;
- occurrence time;
- observation/ingestion time where relevant;
- source;
- actor or initiating system;
- subject;
- target;
- resource;
- context;
- service/domain;
- action or operation;
- prior state where applicable;
- resulting state where applicable;
- authorization decision where applicable;
- policy version where applicable;
- correlation identifier;
- causation identifier where applicable;
- idempotency identifier where applicable;
- outcome;
- error/failure information;
- provenance;
- evidence references;
- sensitivity classification;
- retention requirements.

Event names should identify event structure rather than embed dynamic identifiers. Structured attributes should carry occurrence-specific values, consistent with OpenTelemetry semantic-convention principles. citeturn0search0turn0search5

## Event time and observation time

LegaX must distinguish:

- **Occurred At** — when the event happened;
- **Observed At** — when a system observed it;
- **Recorded At** — when LegaX persisted it;
- **Effective At** — when a state or policy change became effective;
- **Received At** — when an external message arrived.

These times may differ.

An offline access device, external payment provider, sensor, or integration may report an event long after it occurred. The system must not silently replace occurrence time with ingestion time.

Clock uncertainty should be represented where material.

## Event categories

Events may include:

### Domain events
Meaningful business or domain occurrences such as payment completed, booking confirmed, credential revoked, or resource commissioned.

### Security events
Authentication failures, suspicious activity, credential compromise, policy violations, access denials, security incidents.

### Lifecycle events
State changes, transition requests, approvals, verification outcomes, expiration, suspension, revocation.

### Governance events
Policy creation, approval, publication, delegation, administrative change, community governance decisions.

### Operational events
Service startup, degradation, recovery, maintenance, deployment, integration failure.

### Resource events
Resource creation, discovery, state change, availability change, maintenance, physical access, retirement.

### Economic events
Orders, payment attempts, authorization responses, settlement, refunds, disputes, reconciliation.

### Intelligence events
Model execution, observation generated, anomaly detected, recommendation generated, human acceptance/rejection, model failure, evaluation result.

### Evidence events
Evidence submitted, captured, verified, invalidated, expired, superseded, accessed, disclosed, or retained according to policy.

These categories may overlap. The event taxonomy must remain domain-aware rather than forcing every occurrence into one universal type.

## Event sourcing versus event recording

LegaX must distinguish **recording events** from using events as the sole source of current state.

Some domains may use event sourcing where current state is derived from an authoritative event history. Other domains may materialize current state and retain events for accountability, integration, and reconstruction.

The architectural contract does not require every domain to use event sourcing.

Regardless of storage strategy:

- consequential state changes must be reconstructable;
- event history must remain consistent with authoritative state;
- events must not falsely claim transitions that did not occur;
- corrections must preserve the history of correction;
- duplicate delivery must be handled safely.

## Evidence provenance

Every material evidence item should preserve provenance sufficient to answer:

- who or what produced it;
- how it was obtained;
- when it was obtained;
- from which source;
- for what purpose;
- under which authority or consent where applicable;
- whether it was transformed;
- which transformations occurred;
- whether integrity was verified;
- how long it remains valid;
- what claim it supports;
- what scope it applies to.

Evidence copied from another system must not be represented as native LegaX evidence without preserving its external provenance.

## Evidence states

Evidence may have lifecycle states such as:

- declared;
- submitted;
- captured;
- quality-check;
- extracted;
- pending-review;
- verified;
- rejected;
- disputed;
- expired;
- revoked;
- superseded;
- archived;
- destroyed where legally permitted.

The exact lifecycle is domain-specific.

Evidence state is distinct from the state of the claim it supports.

## Evidence strength and assurance

LegaX should represent evidence quality and assurance explicitly rather than using a universal binary “verified” flag.

Relevant dimensions may include:

- source reliability;
- collection method;
- integrity;
- authenticity;
- freshness;
- completeness;
- corroboration;
- verification method;
- verifier;
- confidence;
- jurisdiction;
- scope;
- temporal validity.

Confidence is not universal truth and must not be treated as authority.

## Declared, observed, verified, inferred, proposed, authoritative, unknown

LegaX must preserve the distinction among:

- **Declared** — asserted by a participant or source;
- **Observed** — directly recorded by an observing system;
- **Verified** — supported by an accepted verification process;
- **Inferred** — derived from available information;
- **Proposed** — recommended for consideration;
- **Authoritative** — accepted as canonical for a defined domain and scope;
- **Unknown** — insufficiently established.

An inferred result cannot silently become verified.

A recommendation cannot silently become authoritative.

A verified assertion may still be insufficient for authorization.

## Evidence versus authorization

Evidence supports decisions; it does not independently make them.

For example:

- a passport may provide identity evidence;
- a payment receipt may provide transaction evidence;
- a provider response may provide external outcome evidence;
- a sensor reading may provide resource-state evidence;
- an approval record may provide governance evidence.

None of these automatically grants permission.

Authorization must still evaluate the concrete operation against applicable authority, context, policy, lifecycle, and security conditions.

## Auditability

Auditability means that consequential behavior can be reconstructed sufficiently to understand:

- who or what initiated it;
- what was requested;
- what context existed;
- which authority applied;
- which authorization decision was made;
- which policy version applied;
- which evidence was relied upon;
- which systems participated;
- what actually executed;
- what state resulted;
- what failures or exceptions occurred;
- who reviewed or approved it;
- whether an external provider was involved.

Auditability is broader than application logging.

A debug message such as “payment succeeded” is not sufficient audit evidence for a consequential payment.

## Immutable and mutable information

LegaX must distinguish records that should be append-oriented from records that may legitimately change.

Consequential event history should be protected against unauthorized alteration.

Corrections should normally be represented by:

- correction event;
- superseding evidence;
- invalidation;
- retraction;
- amended record;
- linked replacement.

A system should not silently overwrite historical facts to make history appear cleaner.

Where legal requirements require deletion or modification, the resulting operation must itself remain auditable to the extent permitted.

## Tamper evidence and integrity

For high-value or high-risk records, LegaX may use:

- cryptographic hashes;
- digital signatures;
- signed external assertions;
- append-only storage;
- hash chaining;
- trusted timestamps;
- key-managed integrity controls;
- independent archival;
- transparency mechanisms.

These controls increase integrity assurance but do not turn the underlying information into truth automatically.

A cryptographic signature establishes that a trusted signing process signed data; the semantic truth of the signed statement remains a separate question.

## Correlation and causation

Events must support correlation across distributed operations.

Relevant identifiers may include:

- event ID;
- request ID;
- correlation ID;
- causation ID;
- session ID;
- transaction ID;
- authorization decision ID;
- transition ID;
- external provider reference;
- idempotency key.

Correlation indicates that records belong to a related operational flow.

It does not necessarily prove causal responsibility.

Distributed tracing can complement event records. OpenTelemetry treats traces and spans as representations of operations across systems and provides common semantic conventions for cross-system correlation. citeturn0search3turn0search6

## Event delivery

Events may be:

- synchronous;
- asynchronous;
- queued;
- streamed;
- retried;
- replicated;
- delivered to external systems.

The architecture must distinguish:

**event occurred**

from

**event was delivered**

from

**event was consumed**

from

**consumer successfully applied the event**.

A message acknowledgment must not be confused with the underlying domain outcome.

## Duplicate and out-of-order events

Distributed systems can produce:

- duplicates;
- delayed events;
- retries;
- out-of-order delivery;
- partial delivery;
- conflicting external messages.

Consumers must therefore use event identity, sequence/version information where available, idempotency, and domain-specific reconciliation.

An event received twice must not produce two consequential effects where the operation is intended to occur once.

## Evidence retention and lifecycle

Evidence must have explicit retention semantics.

Retention may depend on:

- legal requirements;
- dispute periods;
- security investigations;
- financial reconciliation;
- operational needs;
- consent;
- privacy requirements;
- evidence validity;
- contractual obligations.

Retention must not be indefinite by default.

Deletion, anonymization, archival, and access restrictions must follow applicable policy.

Deleting an ordinary representation must not automatically destroy evidence required for legitimate accountability.

## Privacy and minimization

Events and evidence can become a surveillance system if unrestricted.

LegaX therefore requires:

- purpose limitation;
- data minimization;
- access control;
- retention limits;
- sensitive-data classification;
- controlled disclosure;
- privacy-preserving aggregation where appropriate;
- separation of operational telemetry from unnecessary personal profiling;
- explicit treatment of biometric, location, financial, health, and other sensitive information.

Not every event needs every identity attribute.

Not every intelligence use case requires raw evidence.

LegaX must prefer the minimum data necessary for the legitimate purpose.

## Physical-world evidence

Physical events may originate from:

- access controllers;
- doors and gates;
- sensors;
- cameras where lawfully and intentionally deployed;
- payment terminals;
- vehicles;
- facilities;
- environmental systems;
- certified biometric hardware;
- delivery devices;
- provider systems.

A physical sensor observation is evidence of what that sensor reported.

It is not automatically proof of the complete physical reality.

For high-impact operations, sensor evidence may require corroboration, calibration, integrity checks, or human review.

## Economic evidence

Economic activity requires evidence capable of distinguishing:

- request;
- payment intent;
- authentication;
- authorization;
- provider acceptance;
- processing;
- settlement;
- reconciliation;
- refund;
- reversal;
- dispute.

A successful API response must not automatically be represented as final settlement unless the provider contract establishes that semantic meaning.

External financial records should preserve provider identifiers and reconciliation references.

## Intelligence architecture

LegaX intelligence may operate across:

- identity;
- authentication;
- account;
- participation;
- administration;
- authorization;
- access;
- physical resources;
- economic activity;
- lifecycle;
- events;
- evidence;
- services.

It may detect relationships that no single service can see independently.

However, cross-domain intelligence must respect purpose, access boundaries, data minimization, privacy, jurisdiction, and legitimate governance.

Cross-domain correlation is a capability, not automatic permission to correlate everything.

## Intelligence inputs

Intelligence may consume:

- authoritative records;
- verified evidence;
- declared information;
- observed events;
- telemetry;
- external assertions;
- historical patterns;
- approved models;
- contextual information;
- human feedback.

Each input should preserve provenance and reliability.

A model should not silently treat an inferred value as equivalent to an authoritative fact.

## Intelligence outputs

Outputs should be typed according to their epistemic and operational status.

Examples:

- observation;
- classification;
- anomaly;
- risk signal;
- prediction;
- match;
- explanation;
- recommendation;
- proposal;
- generated content;
- automated decision where explicitly authorized.

The system must not label every model output “intelligence” and then treat it as fact.

## AI authority boundary

AI may:

- observe;
- summarize;
- correlate;
- classify;
- predict;
- recommend;
- match;
- detect anomalies;
- identify potential fraud;
- prioritize investigations;
- propose transitions;
- draft policy changes;
- explain events;
- assist operators.

AI must not, by virtue of being intelligent:

- create identity;
- create authority;
- grant authorization;
- silently change policy;
- manufacture evidence;
- convert inference into verification;
- override lifecycle controls;
- bypass access controls;
- approve its own consequential action;
- conceal uncertainty;
- erase unfavorable evidence;
- silently alter historical events.

NIST's AI Risk Management Framework emphasizes governance, testing/evaluation, documentation, data provenance, and oversight for AI systems; its Generative AI Profile specifically highlights additional review, tracking, documentation, and management oversight where AI risks warrant it. citeturn0search33turn0search14

NIST's 2026 work on evaluating agentic AI also emphasizes machine-readable audit trails for grounding and assessing agent actions and outputs, reinforcing the LegaX requirement that intelligent behavior remain inspectable rather than “the AI said so.” citeturn0search7turn0search19

## Intelligence provenance

Every consequential intelligence output should preserve, where applicable:

- model or ruleset identity;
- model version;
- prompt/instruction context where relevant;
- input dataset/source references;
- retrieval sources;
- evidence references;
- tool calls;
- external systems consulted;
- generation time;
- evaluation or confidence information;
- human reviewer;
- resulting decision;
- subsequent correction.

The goal is not to expose sensitive internal model mechanics unnecessarily. The goal is to preserve sufficient provenance to explain how an output was produced and what evidence supported it.

## Human oversight

Human oversight must be proportional to risk.

Higher-impact operations may require:

- human review;
- dual approval;
- independent verification;
- evidence inspection;
- explanation;
- appeal;
- confirmation;
- post-action review.

Human review must itself be governed.

A human clicking “approve” without appropriate authority is not valid governance.

## Intelligence evaluation

Intelligence systems should be evaluated for:

- accuracy;
- calibration;
- false positives;
- false negatives;
- robustness;
- drift;
- bias;
- security;
- privacy;
- explainability where required;
- provenance;
- reproducibility where feasible;
- harmful failure modes;
- operational impact.

Evaluation results should themselves become governed evidence and lifecycle records.

NIST's AI RMF and current TEVV work support structured testing, evaluation, verification, and validation as part of trustworthy AI governance. citeturn0search4turn0search7

## Corrections and disputes

LegaX must support challenges to:

- events;
- evidence;
- verification results;
- intelligence outputs;
- decisions;
- provider assertions.

A disputed record must not be silently deleted.

Instead, where appropriate, LegaX should preserve:

- dispute;
- reason;
- challenger;
- review;
- supporting evidence;
- resolution;
- correction or supersession;
- effective time.

This enables the system to distinguish “originally recorded” from “later determined to be incorrect.”

## Incidents and investigations

Events and evidence form the foundation for investigations.

An investigation may establish:

- scope;
- timeline;
- actors;
- resources;
- affected identities;
- relevant policies;
- authorization decisions;
- external systems;
- evidence;
- impact;
- remediation;
- lessons learned.

Investigation access must itself be authorized and auditable.

Sensitive evidence must not become broadly accessible merely because an investigation exists.

## Event and evidence access

Reading evidence is itself an access-controlled operation.

LegaX must apply:

- identity;
- authentication;
- participation/context;
- authority;
- authorization;
- sensitivity;
- purpose;
- policy;
- legal constraints;
- retention state.

An administrator does not automatically have unrestricted access to all evidence.

A service must not automatically gain access to evidence merely because it generated the event.

## External sources and providers

External systems may provide:

- events;
- evidence;
- assertions;
- telemetry;
- transaction records;
- identity claims;
- payment outcomes;
- access events;
- resource observations.

External information must retain source provenance and mapping.

LegaX must not silently treat an external provider's interpretation as universal truth.

The external source may remain authoritative for facts it controls, while LegaX records the assertion and independently governs how that assertion affects LegaX decisions.

## Data quality

Events and evidence should be assessed for:

- completeness;
- consistency;
- timeliness;
- uniqueness;
- integrity;
- validity;
- provenance;
- freshness.

Missing telemetry must not automatically be interpreted as absence of an event.

Silence, failure to report, and “no evidence found” are distinct conditions.

## Observability versus accountability

Operational observability answers questions such as:

- Is the service healthy?
- Is latency increasing?
- Are requests failing?
- Is a queue delayed?

Accountability answers questions such as:

- Who authorized this payment?
- Why was access granted?
- Which policy allowed this transition?
- What evidence supported the decision?
- What actually happened?

These concerns overlap but are not identical.

OpenTelemetry provides a useful standardized observability model for logs, events, metrics and traces, but LegaX must retain domain-level accountability semantics beyond generic telemetry. citeturn0search1turn0search10

## Intelligence and lifecycle

Intelligence itself has lifecycle.

An intelligence artifact may move through:

**generated → evaluated → reviewed → accepted/rejected → applied → monitored → superseded/expired**

A model, rule, recommendation, or risk score must not remain effective indefinitely without defined lifecycle semantics.

Model and ruleset changes must be versioned.

Historical decisions should identify the intelligence version where material.

## Intelligence and policy

Policy may govern:

- which data an intelligence process may use;
- which models may be deployed;
- which jurisdictions are permitted;
- retention;
- human review;
- confidence thresholds;
- prohibited uses;
- escalation;
- monitoring;
- model updates;
- external AI providers.

Intelligence cannot rewrite these policies merely because its output recommends doing so.

## Intelligence and authorization

An intelligence result may be an input to authorization.

For example:

- risk score;
- fraud signal;
- device anomaly;
- resource safety signal;
- unusual transaction pattern.

But the result must not be treated as authority.

The authorization system must have deterministic and governed semantics for how such signals affect decisions.

Where an intelligence signal is uncertain or unavailable, the policy must define whether the request is denied, deferred, reviewed, limited, or permitted.

## Intelligence and action

The canonical boundary is:

**Event/Evidence → Intelligence → Recommendation/Decision Support → Authority/Authorization → Action → Event/Evidence**

AI or analytics may recommend an action.

The action requires the normal authority and authorization path unless a narrowly defined automated authority has already been explicitly granted to the executing system.

Even where automated execution is permitted, the system must record the governing policy, authority, authorization, execution, and evidence.

## Security

Events, evidence, and intelligence are high-value targets.

Controls should include:

- least privilege;
- encryption;
- key management;
- integrity protection;
- access logging;
- segmentation;
- rate limiting;
- secure export;
- anomaly detection;
- retention controls;
- incident response;
- backup and recovery;
- controlled administrative access.

Evidence repositories must not become a privileged bypass around normal access control.

## Canonical accountability chain

For a consequential operation:

**Request → Authentication → Identity/Account → Participation/Context → Authority → Authorization → Policy/Lifecycle Evaluation → Action/Execution → Event → Evidence → Intelligence → Review/Decision Support → Subsequent Action → New Event/Evidence**

For an intelligent recommendation:

**Inputs → Provenance → Processing/Model → Output → Confidence/Uncertainty → Evaluation → Human/Governed Review where required → Authorization → Action if permitted → Outcome Event → Evidence**

For an external assertion:

**External Source → Assertion → Provenance → Validation/Verification → LegaX Interpretation → Policy/Authorization Use → Outcome → Event/Evidence**

## Foundational invariants

1. Every consequential operation must produce sufficient event and evidence records to support accountability.
2. An event records an occurrence and must not automatically be treated as proof of every associated claim.
3. Evidence must preserve provenance sufficient for its intended use.
4. Evidence is not automatically truth.
5. Intelligence is derived understanding, not automatic authority.
6. Observation, verification, inference, proposal, and authoritative state must remain distinguishable.
7. An inferred result must not silently become verified or authoritative.
8. A recommendation must not silently become a decision.
9. AI output must not create authority or authorization.
10. Event occurrence time must remain distinguishable from observation and recording time.
11. External assertions must retain their source and provenance.
12. Event history must not silently be rewritten to conceal previous states or outcomes.
13. Corrections must be represented through governed correction or supersession semantics.
14. Consequential event records must be protected against unauthorized alteration.
15. Access to evidence is itself an authorized operation.
16. Administrative status does not grant unrestricted evidence access.
17. Event delivery is distinct from event occurrence.
18. Event consumption is distinct from event delivery.
19. Duplicate events must not create duplicate consequential effects.
20. Out-of-order delivery must not corrupt authoritative state.
21. Correlation does not by itself prove causation.
22. Missing telemetry does not automatically prove that an event did not occur.
23. Data retention must be governed and purpose-bound.
24. Sensitive evidence must be minimized and protected.
25. Cross-domain correlation must be explicitly governed.
26. Intelligence inputs must preserve provenance and applicable access boundaries.
27. Consequential intelligence outputs must preserve model/ruleset provenance where applicable.
28. Material AI outputs must be evaluated according to risk.
29. High-impact automated operations must have appropriate human or governed oversight.
30. AI must not approve its own consequential recommendation.
31. Intelligence cannot override lifecycle, policy, authority, authorization, or safety controls.
32. Evidence supporting an authorization decision must be attributable to the decision context.
33. Policy versions material to consequential decisions must be identifiable.
34. External provider outcomes must not be represented with stronger semantics than the provider contract supports.
35. Operational observability must not be mistaken for complete accountability.
36. Audit records must not be reduced to arbitrary debug logs.
37. Event schemas must have stable semantic meaning.
38. Dynamic identifiers should be represented as attributes rather than changing event type semantics.
39. Evidence validity and freshness must be lifecycle-managed.
40. Disputed evidence and events must remain traceable rather than silently disappearing.
41. Investigation access must itself be authorized and auditable.
42. Intelligence artifacts must have lifecycle and version semantics.
43. Model or policy changes must not silently rewrite the provenance of historical decisions.
44. Data quality limitations must be represented rather than hidden.
45. An absence of evidence must remain distinguishable from evidence of absence.
46. Cryptographic integrity does not by itself establish semantic truth.
47. Human approval is valid only when the approving actor is authorized for the relevant scope.
48. Automated execution is permissible only where authority and authorization for that automation have been explicitly established.
49. Every consequential state change must remain traceable to the governing lifecycle and authorization semantics.
50. LegaX intelligence must remain subordinate to legitimate human, community, organizational, and system governance.

## Relationship to Definitions 01–10

- **01 — LegaX:** establishes accountable, extensible infrastructure; Events, Evidence & Intelligence provide the accountability and understanding layer.
- **02 — Identity:** identifies the subjects and systems associated with events and evidence; identity remains distinct from claims about behavior.
- **03 — Authentication:** supplies authentication context that may be recorded as evidence for an interaction.
- **04 — Account:** supplies the governed interaction relationship and session context.
- **05 — Administration:** governs who may manage evidence, policies, intelligence, investigations, and other control structures.
- **06 — Authorization:** establishes the decision that must be reconstructable from relevant event, policy, authority, and evidence context.
- **07 — Access:** produces and consumes physical and digital access events while remaining the enforcement boundary.
- **08 — Resources & Physical World:** supplies resource states and physical observations that may become events or evidence.
- **09 — Economic & Commerce:** supplies transaction, settlement, reconciliation, refund, and dispute events/evidence.
- **10 — Lifecycle & Policy:** supplies state, transition, policy, review, verification, temporal and governance semantics against which events and evidence are interpreted.

Events, Evidence & Intelligence therefore becomes the cross-cutting accountability and learning layer across the preceding foundations without becoming a replacement for any of them.

## Implementation boundary

This document defines the canonical semantic and architectural contract for Events, Evidence & Intelligence.

It does not yet prescribe:

- database tables;
- a particular event bus;
- OpenTelemetry as the sole telemetry system;
- a particular evidence store;
- a specific AI model;
- a specific vector database;
- a policy engine;
- frontend implementation;
- mobile implementation;
- deployment architecture.

Implementation must be derived from this contract and tested against its invariants.

**Status:** Foundational domain contract — definition and semantic model; implementation intentionally deferred.
