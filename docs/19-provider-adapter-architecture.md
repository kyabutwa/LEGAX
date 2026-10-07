# LegaX — Provider / Adapter Architecture

## 19 — Provider / Adapter Architecture

**Status:** Foundational integration architecture contract — implementation-grade.

## 1. Purpose

Phase 19 defines how LegaX connects to external providers, identity providers, financial networks, payment processors, banks, mobility networks, health systems, communications providers, physical access controllers, smart-building systems, devices, cloud services, marketplaces, government systems and other third parties.

The architecture exists to make external connectivity safe without making an external system implicitly authoritative inside LegaX.

A provider may authenticate, assert, quote, observe, execute, acknowledge, settle, deliver, reject, revoke, suspend, report or otherwise participate in a workflow. None of those facts automatically changes LegaX identity, authority, authorization, ownership, canonical state or policy.

The central rule is:

**External connectivity is an integration capability, not an authority delegation.**

## 2. Canonical definition

A Provider is an external entity, organization, platform, network, service, device ecosystem or infrastructure operator that supplies a capability, assertion, resource, execution service, credential, observation, economic function or other integration dependency to LegaX.

An Adapter is the governed LegaX integration boundary that translates between a provider protocol, identity model, data model, command model, state model, security model and failure semantics and the corresponding canonical LegaX contracts.

A provider is external to the LegaX canonical authority model unless an explicit LegaX governance relationship says otherwise.

An adapter is not a proxy for provider authority. It is a translation, security, validation, policy and lifecycle boundary.

## 3. Canonical integration chain

The canonical provider lifecycle is:

Provider Registration → Due Diligence → Trust Establishment → Credential Binding → Adapter Activation → Request Translation → LegaX Authorization → Provider Command → Provider Execution → Provider Assertion/Observation → Validation → Evidence → Reconciliation → Canonical State/Event

For read-only information:

Provider Source → Adapter → Source Assertion → Provenance → Validation → Evidence → Canonical Interpretation

For consequential operations:

LegaX Intent → Authorization → Command → Execution Gate → Adapter → Provider Command → Provider Outcome → Evidence → Reconciliation → Canonical Outcome

A provider MUST NOT skip the LegaX authorization and execution contracts for a consequential action merely because the provider itself says the action is permitted.

## 4. Authority boundary

The following are distinct:

- provider identity;
- provider credential;
- provider account;
- provider contract;
- provider assertion;
- provider capability;
- provider API permission;
- provider-side authorization;
- LegaX authority;
- LegaX authorization;
- LegaX access;
- provider execution;
- canonical LegaX state.

Provider permission is not LegaX authority.

Provider authorization is not LegaX authorization.

Provider success is not automatically LegaX canonical success.

Provider data is not automatically verified LegaX truth.

## 5. Provider classes

LegaX MUST support explicit provider classes:

1. identity provider;
2. authentication provider;
3. credential issuer;
4. verification provider;
5. payment provider;
6. banking/financial network;
7. wallet/mobile-money provider;
8. marketplace/provider network;
9. mobility provider;
10. health information/provider system;
11. communications provider;
12. network/connectivity provider;
13. cloud/infrastructure provider;
14. physical access controller;
15. building-management system;
16. IoT/device provider;
17. sensor/observation provider;
18. geospatial/location provider;
19. government/public authority source;
20. document/OCR provider;
21. biometric verification provider;
22. logistics/delivery provider;
23. workforce/provider platform;
24. storage provider;
25. AI/model provider;
26. observability/security provider;
27. other governed external system.

Provider class determines additional security, evidence, privacy, regulatory, availability, reconciliation and authority requirements.

## 6. Adapter classes

Adapters MUST be typed according to behavior:

- assertion adapter;
- query adapter;
- credential adapter;
- authentication adapter;
- authorization-information adapter;
- command adapter;
- webhook/event adapter;
- polling adapter;
- reconciliation adapter;
- document adapter;
- device adapter;
- physical-control adapter;
- payment adapter;
- settlement adapter;
- identity-federation adapter;
- credential-status adapter;
- streaming adapter;
- batch adapter.

An adapter MAY implement several classes, but each behavior MUST retain its own contract and failure semantics.

## 7. Provider registration

A provider record MUST establish, as applicable:

- provider_id;
- provider_type;
- legal/organizational identity;
- canonical external identifier;
- integration owner;
- service/domain scope;
- supported capabilities;
- supported operations;
- supported states;
- API/protocol versions;
- endpoints;
- credential references;
- trust status;
- verification status;
- contractual status;
- jurisdiction;
- data-processing status;
- security posture;
- privacy classification;
- evidence requirements;
- availability expectations;
- rate limits;
- webhook configuration;
- event/version mappings;
- reconciliation strategy;
- suspension/revocation state;
- lifecycle timestamps;
- adapter version;
- provider version.

## 8. Provider lifecycle

Provider lifecycle MUST be explicit:

DISCOVERED → ASSESSED → APPROVED → PROVISIONED → VERIFIED → ACTIVE → DEGRADED → SUSPENDED → REVOKED → RETIRED

A provider MUST NOT become operational merely because credentials were received.

Activation requires controls appropriate to provider risk.

Suspension prevents new operations according to policy while preserving required evidence and reconciliation.

Revocation invalidates future trust/use according to policy and MUST trigger credential/session/adapter consequences where applicable.

Retirement ends intended use while preserving records required for evidence, disputes, legal obligations and historical interpretation.

## 9. Adapter lifecycle

Adapter lifecycle:

DESIGNED → REVIEWED → REGISTERED → TESTED → APPROVED → ENABLED → ACTIVE → DEGRADED → QUARANTINED → DISABLED → RETIRED

Adapter code, configuration and mapping versions MUST be independently identifiable.

An adapter update MUST NOT silently alter provider semantics, authorization behavior, state mappings or evidence interpretation without versioned review.

## 10. Scoped trust

LegaX MUST NOT use one undifferentiated provider trust score.

Trust MUST be scoped to:

- provider;
- adapter;
- operation;
- resource;
- environment;
- credential;
- data class;
- jurisdiction;
- time;
- assurance level;
- contract;
- execution channel.

A provider trusted to return payment status is not automatically trusted to identify a person.

A provider trusted to report a door controller state is not automatically trusted to authorize entry.

A provider trusted to issue a credential is not automatically trusted to decide every downstream entitlement.

## 11. Source authority versus LegaX authority

A provider may be authoritative for a specific source fact without becoming authoritative for LegaX governance.

Example:

Bank/provider: authoritative source for its own transaction record.

LegaX: authoritative for whether LegaX recognizes that transaction as satisfying a particular LegaX workflow.

Example:

Access controller: authoritative source for controller-reported actuator state.

LegaX: authoritative for whether the access operation was authorized and how that controller result is interpreted.

This distinction MUST be represented explicitly in source and provenance metadata.

## 12. Provider assertions

Every provider-originated assertion MUST preserve, as applicable:

- provider identity;
- provider object identifier;
- provider event/transaction identifier;
- assertion type;
- assertion version;
- source timestamp;
- receipt timestamp;
- provider status;
- provider evidence/reference;
- cryptographic/integrity information;
- adapter identity/version;
- mapping status;
- confidence/assurance where meaningful;
- scope;
- jurisdiction where relevant;
- freshness;
- supersession/revocation information.

A provider assertion MUST NOT be silently rewritten into a canonical LegaX event.

Preferred path:

Provider Assertion → Validation → Evidence → Reconciliation → Canonical Event/State

## 13. Mapping contract

Every adapter MUST define an explicit mapping between external and canonical concepts.

Mapping categories include:

- identity;
- identifier;
- resource;
- relationship;
- capability;
- state;
- action;
- event;
- evidence;
- error;
- lifecycle;
- time;
- currency/unit;
- jurisdiction.

Mappings MUST specify whether they are exact, transformed, lossy, approximate, conditional, unsupported or ambiguous.

Ambiguous mappings MUST NOT silently select a canonical meaning.

## 14. External identifiers

Provider identifiers MUST remain provider-scoped.

The following MUST NOT be assumed:

provider_customer_id = LegaX_identity_id

provider_user_id = LegaX_participant_id

provider_account_id = LegaX_account_id

provider_resource_id = LegaX_resource_id

Mappings MUST be explicit, scoped and lifecycle-managed.

A provider identifier may be linked to a LegaX identifier through a governed relationship with provenance and confidence.

## 15. Credential architecture

Provider credentials are integration credentials, not universal authority.

Supported patterns may include:

- OAuth authorization;
- client credentials;
- mTLS certificates;
- signed requests;
- API keys;
- hardware credentials;
- service accounts;
- device certificates;
- webhook signing keys;
- delegated tokens;
- provider-specific credentials.

Credentials MUST be scoped, protected, rotatable, revocable, expiry-aware, attributable, environment-specific and least-privileged.

Secrets MUST NOT be copied into events, evidence payloads, logs or canonical business records.

## 16. OAuth and delegated authorization

When OAuth is used, LegaX MUST distinguish:

OAuth grant → provider access token → provider API permission

from:

LegaX authority → LegaX authorization → LegaX command

OAuth consent does not become LegaX authority.

Provider scopes MUST be mapped to the smallest required adapter operation.

Redirect URIs, token audiences, issuer metadata, sender constraints, refresh behavior, rotation and revocation MUST follow the applicable security profile.

## 17. Identity federation

An external identity provider may establish an authentication assertion.

It MUST NOT silently create unlimited LegaX authority.

Flow:

External IdP Assertion → Validation → Authentication Result → Identity/Account Association → Participation/Context → LegaX Authorization

Issuer identity, audience, subject, assurance, authentication time, freshness, revocation and mapping MUST be evaluated.

External subject identifiers MUST remain issuer-scoped.

## 18. Verifiable credentials

External credentials MAY provide evidence or claims.

Canonical flow:

Issuer → Credential → Holder → Presentation → LegaX Verification → Evidence → Governed Interpretation

Issuer authority over the credential does not automatically grant the holder LegaX authority.

Credential validity, issuer trust, subject binding, status, expiration, proof integrity and intended use MUST be evaluated.

A valid credential may support an authorization decision; it does not replace the authorization decision.

## 19. Command adapter boundary

For consequential operations, an adapter MUST NOT accept an arbitrary provider command from an untrusted caller.

Safe flow:

LegaX Authorization → Canonical Command → Execution Gate → Adapter Translation → Provider Command

The adapter MUST preserve:

- command_id;
- authorization_id;
- actor;
- target;
- operation;
- scope;
- idempotency key;
- correlation_id;
- causation_id;
- execution attempt;
- precondition/version where applicable.

Provider-side command IDs MUST be separately recorded.

## 20. Command translation

Translation MUST preserve semantic intent.

If a provider cannot represent the exact canonical command, the adapter MUST classify the translation as:

- exact;
- narrower;
- broader;
- approximate;
- decomposed;
- unsupported.

A broader provider operation MUST NOT be used merely because it is convenient.

Example: if LegaX authorizes access to Unit A, an adapter MUST NOT translate it into unlock entire building unless authorization explicitly covers that broader scope.

## 21. Provider-side authorization

A provider MAY perform its own authorization.

LegaX MUST treat it as a separate control layer:

LegaX Authorization AND Provider Authorization → Provider Execution Eligibility

If either required layer denies the operation, execution MUST NOT proceed.

Provider authorization MUST NOT override a LegaX deny.

## 22. Webhooks and inbound events

Inbound provider events MUST be treated as untrusted external input until authenticated and validated.

Processing:

Receive → Authenticate Source → Verify Signature → Validate Envelope → Validate Schema → Deduplicate → Record Provider Assertion → Map → Reconcile → Emit Canonical Event if justified

Provider webhook delivery MUST NOT directly mutate canonical state without the relevant validation and state-transition controls.

Webhook retries MUST be idempotent.

## 23. Polling and reconciliation

Polling has different freshness and completeness semantics from webhooks.

Each integration MUST define:

- polling interval;
- source timestamp;
- observation time;
- cursor/checkpoint;
- pagination;
- missing-record handling;
- duplicate handling;
- late-arriving records;
- correction handling;
- rate limits;
- reconciliation horizon.

Reconciliation MUST discover, where applicable:

- missed events;
- duplicate events;
- provider corrections;
- reversals;
- cancellations;
- state divergence;
- partial execution;
- unknown outcomes.

## 24. Provider state versus canonical state

Provider state MUST be stored or referenced separately from canonical state where semantic divergence is possible.

Example:

provider_payment_status = completed

does not automatically imply:

LegaX payment state = SETTLED

The adapter must apply the payment-domain reconciliation rules.

Likewise:

controller_status = unlocked

does not automatically prove:

physical_access = COMPLETED

without the required physical evidence.

## 25. Unknown outcomes

External timeouts MUST NOT be converted blindly to failure.

Possible provider outcome states include:

- accepted;
- rejected;
- processing;
- succeeded;
- failed;
- cancelled;
- expired;
- unknown;
- unavailable;
- disputed;
- reversed.

A timeout after a provider command may mean UNKNOWN — reconciliation required, not FAILED.

Retries MUST be constrained by idempotency and provider semantics.

## 26. Idempotency

Every consequential adapter operation MUST define idempotency behavior.

At minimum:

canonical command_id + operation scope + target scope

MUST map to a stable idempotency strategy.

Where the provider supports idempotency keys, LegaX SHOULD propagate a derived stable key without exposing unrelated internal identifiers.

Where the provider does not support idempotency, the adapter MUST implement safe deduplication or reconciliation appropriate to the operation.

Never retry a potentially non-idempotent consequential operation solely because no response was received.

## 27. Concurrency and stale state

Before provider execution, the adapter MUST respect Phase 15 and 16 concurrency requirements.

Flow:

Read canonical version → validate → authorize → command → execute under bounded conditions → reconcile

If canonical state changes materially before execution, the command MUST be revalidated or rejected according to the domain.

Provider-side versioning, ETags or cursors SHOULD be used where available.

## 28. Rate limits and backpressure

Adapters MUST treat provider rate limits as architectural conditions.

They MUST support, as appropriate:

- quotas;
- throttling;
- exponential backoff;
- jitter;
- retry budgets;
- circuit breakers;
- concurrency limits;
- queueing;
- priority;
- dead-letter handling;
- provider-specific fairness.

Backpressure MUST NOT cause authorization bypasses or uncontrolled duplicate commands.

## 29. Circuit breakers and degraded operation

Provider degradation MUST have explicit states.

A degraded provider may permit:

- read-only operation;
- cached non-consequential information;
- bounded offline access;
- queued commands;
- reconciliation-only operation.

High-consequence operations MAY be blocked until provider health is sufficient.

Cached provider data MUST retain freshness and provenance.

## 30. Offline and physical-world adapters

Physical controllers may continue operating while disconnected.

Offline authorization MUST be bounded by:

- pre-authorized scope;
- credential validity;
- expiry;
- revocation strategy;
- local policy;
- maximum offline duration;
- replay protection;
- device integrity;
- emergency policy.

Offline operation MUST NOT create indefinite authority.

When connectivity returns:

Local execution evidence → synchronization → reconciliation → canonical event/state

## 31. Financial provider adapters

Financial integrations MUST preserve:

Payment Intent → Authorization → Provider Instruction → Provider Acceptance → Processing → Settlement → Reconciliation

Provider acceptance MUST NOT be represented as settlement unless payment-domain evidence establishes settlement.

Provider callbacks MUST be authenticated, deduplicated and reconciled.

Amounts, currencies, fees, taxes, references and settlement identifiers MUST remain explicit.

Third-party payment providers remain bounded service providers; their technical access does not become LegaX financial authority.

## 32. Identity-provider adapters

Identity adapters MUST preserve:

- issuer;
- subject;
- audience;
- authentication method;
- assurance;
- authentication event time;
- credential/token status;
- external session;
- mapping;
- consent where relevant.

An external IdP may establish authentication confidence but MUST NOT silently assign LegaX roles, capabilities or authority beyond an explicit mapping policy.

## 33. Physical controller adapters

Physical controller adapters MUST distinguish:

- command sent;
- command received;
- controller acknowledged;
- actuator reported;
- sensor observed;
- physical condition observed;
- access completed.

The adapter MUST NOT claim physical success merely because a network request returned success or a controller acknowledged receipt.

## 34. Device and IoT adapters

Device identity MUST remain distinct from human identity.

Device onboarding requires:

- device identity;
- manufacturer/source;
- hardware/software version;
- cryptographic identity;
- ownership/stewardship relationship;
- location where relevant;
- lifecycle;
- capabilities;
- security posture;
- firmware state;
- revocation.

A compromised device MUST be suspendable without corrupting the human identity model.

## 35. Health-system adapters

Health integrations require strong source, purpose, consent/legal-basis, privacy and provenance boundaries.

External clinical information MUST preserve source system, provider, timestamp, record type, version and provenance.

A health provider assertion does not automatically become a LegaX clinical fact without applicable validation and governance.

Clinical authority remains with appropriately governed clinical actors/systems; LegaX integration MUST NOT manufacture clinical authority.

## 36. Location and geospatial providers

Location data MUST remain an observation with source, precision, timestamp and freshness.

Location is not identity.

Location is not authority.

Location is not consent.

Location is not automatically proof of presence.

Unless the domain explicitly defines an evidence rule, an external location result MUST NOT be treated as proof of physical presence.

## 37. AI/model providers

AI providers are external processing providers.

Their outputs MUST be represented as:

provider/model identity → input provenance → processing → output → uncertainty/quality → evidence → governed interpretation

An AI provider MUST NOT become an authority source merely because it produced a confident output.

Model output MUST NOT directly authorize consequential actions.

Safe chain:

AI Output → Evaluation → Policy/Review → Authorization → Command → Execution

## 38. Data minimization and privacy

Adapters MUST request and transmit only data necessary for the integration purpose.

Sensitive classes include:

- authentication secrets;
- biometrics;
- health data;
- financial data;
- precise location;
- identity documents;
- private communications;
- behavioral data;
- security telemetry.

Adapters MUST define purpose, fields, retention, recipient, jurisdiction, legal basis where applicable, deletion/suppression behavior, access controls and onward-transfer controls.

Provider convenience MUST NOT become a reason to export the full LegaX identity graph.

## 39. Provider data custody

Receiving provider data does not automatically transfer ownership or stewardship rights.

LegaX MUST preserve, as applicable:

- source;
- license/contractual basis;
- purpose;
- custody;
- permitted use;
- retention;
- deletion obligations;
- derivative restrictions.

Provider data MUST NOT be reused for unrelated intelligence simply because it is technically available.

## 40. Security architecture

Every adapter MUST have a threat model covering:

- credential theft;
- token replay;
- spoofed provider;
- webhook forgery;
- endpoint compromise;
- DNS/endpoint substitution;
- man-in-the-middle;
- schema poisoning;
- injection;
- replay;
- duplicate delivery;
- privilege escalation;
- confused deputy;
- provider compromise;
- supply-chain compromise;
- malicious adapter update;
- excessive scope;
- data exfiltration;
- denial of service;
- stale authorization;
- state divergence.

Provider integration credentials SHOULD use least privilege, rotation, isolation and auditable use.

## 41. Confused-deputy protection

Adapters are privileged technical components.

They MUST NOT allow an untrusted caller to cause an adapter to exercise broader provider privileges than the caller's LegaX authorization permits.

The adapter MUST bind provider actions to the canonical command and authorization context.

A provider API key is not a substitute for user-level authorization.

## 42. Credential rotation and revocation

Credential lifecycle:

ISSUED → ACTIVE → ROTATION_PENDING → ROTATED → SUSPENDED/REVOKED → RETIRED

Rotation MUST support overlap where provider protocols require it.

Revocation MUST propagate to adapter availability.

Compromised credentials MUST be isolated immediately according to incident policy.

## 43. Provider capability discovery

Provider capability discovery MUST be explicit.

A provider claiming capability X does not prove implementation of the full LegaX contract.

Capability records MUST include:

- capability identifier;
- provider;
- adapter;
- supported operations;
- constraints;
- version;
- availability;
- jurisdiction;
- assurance;
- evidence requirements;
- known limitations.

Capability discovery is descriptive, not authorization.

## 44. Versioning and compatibility

Provider APIs, adapter contracts, mappings and canonical contracts MUST be versioned independently.

A provider API upgrade MUST NOT automatically change the LegaX semantic contract.

Compatibility classes:

- backward compatible;
- forward compatible;
- transformed;
- breaking;
- unsupported.

Breaking provider changes require adapter review, testing and controlled rollout.

## 45. Contract testing

Every production adapter SHOULD have:

- schema tests;
- authentication tests;
- authorization-binding tests;
- idempotency tests;
- timeout tests;
- retry tests;
- duplicate tests;
- out-of-order tests;
- provider-error tests;
- unknown-outcome tests;
- reconciliation tests;
- security tests;
- privacy tests;
- state-mapping tests;
- event/evidence tests;
- version-compatibility tests.

Sandbox/provider test environments MUST NOT be treated as proof of production semantics without production-equivalent validation.

## 46. Observability

Provider integrations MUST emit operational telemetry without confusing telemetry with canonical evidence.

At minimum observability SHOULD expose:

- provider;
- adapter;
- operation;
- latency;
- outcome class;
- retry count;
- rate-limit events;
- circuit state;
- correlation;
- trace context;
- error category;
- reconciliation status.

Secrets and unnecessary personal data MUST NOT be logged.

## 47. Event and evidence integration

Adapter activity follows Phases 17 and 18:

Provider interaction → Event → Evidence

Provider assertions MUST retain provenance.

Canonical events MUST identify the LegaX source/producer, not falsely attribute the event to the external provider when LegaX has not established canonical interpretation.

A provider event may remain observational.

## 48. Reconciliation architecture

Every stateful external integration MUST define whether reconciliation is:

- not required;
- periodic;
- event-triggered;
- command-triggered;
- continuous;
- dispute-triggered;
- incident-triggered.

Reconciliation MUST compare provider and canonical state without automatically choosing either side.

Conflicts MUST enter explicit resolution logic.

Possible outcomes:

- canonical agrees;
- provider correction accepted;
- canonical correction required;
- unresolved;
- disputed;
- evidence insufficient.

## 49. Compensation

If a multi-system operation partially succeeds, LegaX MUST distinguish:

- rollback;
- compensation;
- cancellation;
- reversal;
- refund;
- provider correction;
- reconciliation.

A provider operation that cannot be rolled back MUST NOT be represented as rolled back merely because LegaX wants the workflow to appear clean.

## 50. Cross-provider workflows

Cross-provider orchestration MUST use:

Canonical Intent → Authorization → Command → Provider A → Evidence → Provider B → Evidence → Reconciliation → Canonical Outcome

Provider A MUST NOT directly grant Provider B authority.

Each consequential provider operation requires its own execution boundary.

Saga-style compensation MAY be used where atomic distributed transactions are impossible.

## 51. Provider selection

Provider selection is not authorization.

Selection may consider:

- price;
- availability;
- geography;
- capability;
- reliability;
- jurisdiction;
- risk;
- latency;
- user preference;
- community policy;
- contract.

The selected provider still operates under the canonical command and authorization boundary.

AI may recommend a provider but cannot authorize its use.

## 52. Provider substitution and failover

Failover MUST NOT silently broaden authority or change critical semantics.

Before substituting a provider, LegaX MUST verify:

- equivalent capability;
- required assurance;
- compatible jurisdiction;
- privacy constraints;
- security posture;
- pricing/financial implications;
- evidence compatibility;
- command semantics;
- state semantics.

A substitute provider may require a new authorization decision.

## 53. Provider suspension and emergency isolation

LegaX MUST be able to suspend:

- provider;
- adapter;
- credential;
- endpoint;
- capability;
- operation;
- environment.

Emergency isolation MUST be auditable and bounded.

Suspending a provider MUST NOT delete historical evidence.

## 54. Legal, regulatory and contractual boundary

Provider integration MUST support domain-specific obligations, including where applicable:

- financial services;
- payment security;
- health information;
- identity verification;
- telecommunications;
- employment;
- transport;
- consumer protection;
- data protection;
- cross-border transfer;
- retention;
- incident notification.

A provider contract cannot override a mandatory LegaX security or authorization invariant.

## 55. Supply-chain assurance

Provider and adapter risk MUST include:

- provider dependency risk;
- software dependency risk;
- build provenance;
- update provenance;
- vulnerability status;
- operational ownership;
- incident history where relevant;
- concentration risk;
- exit strategy.

A provider SDK or library is part of the integration supply chain and MUST NOT be trusted merely because it is popular.

## 56. Provider concentration and exit

Critical LegaX capabilities SHOULD have an exit strategy.

The architecture SHOULD preserve:

- canonical data;
- canonical identifiers;
- provider mappings;
- evidence;
- event history;
- reconciliation state;
- contract versions.

Provider replacement MUST not require reconstructing LegaX identity or authority from scratch.

## 57. Adapter isolation

Adapters SHOULD be isolated from core authorization state where practical.

The core authorization engine decides whether a consequential command is permitted.

The adapter translates and executes within that bounded decision.

An adapter MUST NOT modify authority assignments, roles, capabilities or policy merely because a provider returned a particular response.

## 58. Provider trust degradation

Trust MAY change without provider identity changing.

Triggers include:

- credential compromise;
- security incident;
- expired certification;
- contractual breach;
- abnormal behavior;
- inconsistent evidence;
- repeated reconciliation failures;
- API compromise;
- jurisdiction change.

Trust degradation MUST be represented as a governed lifecycle change and MUST affect only intended scopes.

## 59. Failure taxonomy

Provider failures MUST be classified:

- authentication failure;
- authorization failure;
- validation failure;
- schema failure;
- transport failure;
- timeout;
- rate limit;
- provider unavailable;
- provider rejected;
- provider processing;
- provider unknown;
- data conflict;
- stale data;
- credential failure;
- security quarantine;
- reconciliation required;
- unsupported operation.

Failure classification determines retry, escalation and state behavior.

## 60. Canonical integration grammar

For source information:

SOURCE → ASSERTION → ADAPTER VALIDATION → EVIDENCE → GOVERNED INTERPRETATION → CANONICAL STATE/EVENT

For commands:

AUTHORIZATION → COMMAND → EXECUTION GATE → ADAPTER → PROVIDER → OUTCOME → EVIDENCE → RECONCILIATION → CANONICAL STATE/EVENT

For authentication:

EXTERNAL AUTHENTICATION → ASSERTION → VALIDATION → AUTHENTICATION RESULT → LegaX IDENTITY/ACCOUNT MAPPING → AUTHORIZATION

For physical access:

AUTHORIZATION → ACCESS DECISION → CONTROLLER COMMAND → CONTROLLER ACK → PHYSICAL OBSERVATION → EVIDENCE → ACCESS OUTCOME

For payments:

AUTHORIZED PAYMENT COMMAND → PROVIDER INSTRUCTION → PROVIDER RESPONSE → PROCESSING → SETTLEMENT ASSERTION → EVIDENCE → RECONCILIATION

## 61. Provider integrity invariants

1. Provider identity MUST NOT equal LegaX identity by default.
2. Provider account MUST NOT equal LegaX account by default.
3. Provider authentication MUST NOT equal LegaX authorization.
4. Provider authorization MUST NOT create LegaX authority.
5. Provider capability MUST NOT create LegaX capability.
6. Provider role MUST NOT create a LegaX role without explicit mapping.
7. Provider assertion MUST preserve provenance.
8. Provider success MUST NOT automatically establish canonical success.
9. Provider failure MUST NOT automatically establish canonical failure when the outcome is unknown.
10. Provider webhook MUST NOT bypass state-transition controls.
11. Provider API credentials MUST NOT become user authority.
12. Adapter privileges MUST NOT exceed canonical command scope.
13. External identifiers MUST remain provider-scoped.
14. External state MUST remain distinguishable from canonical state.
15. Provider data MUST NOT silently become canonical evidence.
16. Provider evidence MUST NOT silently become truth.
17. Provider truth MUST NOT silently become authority.
18. Provider selection MUST NOT authorize a transaction.
19. Provider recommendation MUST NOT authorize a transaction.
20. Provider availability MUST NOT authorize access.
21. Provider location MUST NOT create identity.
22. Provider location MUST NOT create authority.
23. Provider credential validity MUST NOT create universal authority.
24. Provider contract MUST NOT override mandatory LegaX policy.
25. Provider API scope MUST NOT override LegaX authorization.
26. Provider retries MUST respect idempotency.
27. Provider timeout MUST NOT be treated as failure without semantic basis.
28. Provider acknowledgement MUST NOT equal physical completion.
29. Provider payment acceptance MUST NOT equal settlement.
30. Provider health status MUST NOT be treated as universal trust.
31. Adapter code MUST be versioned.
32. Adapter mappings MUST be explicit.
33. Ambiguous mappings MUST NOT be silently resolved.
34. Unsupported provider semantics MUST remain unsupported.
35. Reconciliation MUST be explicit where provider and canonical state can diverge.
36. External events MUST be authenticated before trusted processing.
37. Provider secrets MUST NOT enter events or evidence.
38. Provider compromise MUST NOT automatically compromise the LegaX authority model.
39. Provider suspension MUST NOT erase historical evidence.
40. Provider substitution MUST NOT silently broaden authorization.
41. AI provider output MUST NOT directly authorize action.
42. Device provider identity MUST remain distinct from human identity.
43. A provider cannot grant authority that it does not receive from LegaX.
44. An adapter cannot manufacture evidence of an outcome it did not observe or receive.
45. A provider assertion can support canonical state but cannot silently define canonical state outside its governed source-of-truth scope.
46. External systems remain external even when deeply integrated.
47. LegaX canonical contracts remain the semantic boundary.
48. No provider integration may create an alternate hidden authorization plane.
49. No adapter may convert technical connectivity into governance power.
50. No external response may silently rewrite canonical history.
51. Provider credentials MUST be isolated by environment.
52. Provider trust MUST be scope-bound.
53. Provider state mappings MUST be versioned.
54. Provider webhook identity MUST be authenticated.
55. Provider corrections MUST remain traceable to the original assertion.
56. Provider event time MUST remain distinct from LegaX receipt time.
57. Provider API errors MUST NOT be treated as business outcomes without classification.
58. Provider rate limits MUST NOT trigger uncontrolled retries.
59. Provider failover MUST preserve authorization scope.
60. Provider retirement MUST preserve required historical provenance.
61. Adapter deployment MUST be auditable.
62. Adapter configuration changes MUST be attributable.
63. Provider capability discovery MUST NOT grant permission.
64. External source authority MUST remain scoped.
65. A provider cannot authorize a LegaX action solely through a callback.
66. An adapter cannot promote an observation to verification without the required verification rule.
67. An adapter cannot promote a provider assertion to authoritative state without the applicable reconciliation rule.
68. Provider data export MUST obey purpose and minimization constraints.
69. Provider secrets MUST never be emitted as evidence.
70. External identity mappings MUST support revocation and unlinking where required.
71. Provider compromise MUST have bounded blast radius.
72. Provider substitution MUST be policy-controlled.
73. Provider-specific semantics MUST not leak into the canonical model as universal semantics.
74. Provider-specific failures MUST not corrupt canonical state.
75. Provider execution MUST remain attributable to a canonical command.
76. Consequential provider commands MUST be idempotent or reconciliable.
77. Provider outcomes MUST remain distinguishable from canonical outcomes.
78. Provider trust changes MUST be auditable.
79. Adapter quarantine MUST stop applicable new consequential operations.
80. No provider integration can manufacture LegaX authority.

## 62. Contradiction tests

### A — Provider login creates administrator

Expected: FAIL. Authentication or identity mapping does not create administration authority.

### B — Payment provider says paid, therefore LegaX marks settled

Expected: FAIL unless payment settlement evidence and reconciliation satisfy the canonical payment contract.

### C — Access controller returns success, therefore door physically opened

Expected: FAIL unless the required physical evidence establishes the outcome.

### D — OAuth scope contains admin, therefore LegaX administrator

Expected: FAIL. Provider scope is not LegaX authority.

### E — Provider API key is stored as user permission

Expected: FAIL. Integration credential is not user authorization.

### F — Webhook changes canonical state directly

Expected: FAIL unless inbound assertion validation, transition controls and reconciliation permit the change.

### G — Provider timeout means operation failed

Expected: FAIL when provider semantics leave the outcome unknown.

### H — Provider location says person is at a place, therefore presence is verified

Expected: FAIL unless the domain evidence policy explicitly establishes presence.

### I — AI provider says identity match, therefore identity is verified

Expected: FAIL. AI output requires governed evaluation.

### J — Provider credential is valid, therefore holder may perform every related action

Expected: FAIL. Credential claims support authorization; they do not replace authorization.

### K — Adapter retries a non-idempotent payment after timeout

Expected: FAIL unless safe retry or reconciliation semantics exist.

### L — Provider replacement automatically preserves authorization

Expected: FAIL where provider-specific assurance, scope or semantics differ.

### M — Provider reports cancellation after LegaX completed an action

Expected: Reconciliation required; canonical state follows the applicable domain contract.

### N — Provider sends an unknown field that implies broader authority

Expected: FAIL closed for consequential semantics.

### O — Provider SDK update changes mapping silently

Expected: FAIL. Adapter version and mapping review are required.

### P — Provider credential compromise is discovered

Expected: Credential isolation/revocation and bounded provider impact; historical evidence preserved.

### Q — Provider says resource is available while LegaX has a conflicting reservation

Expected: Reconciliation/conflict handling; provider availability cannot erase canonical commitments.

### R — External system directly modifies LegaX authority records

Expected: FAIL. External systems cannot bypass canonical administration and authorization boundaries.

### S — Provider reports successful command without required evidence

Expected: Provider assertion remains an assertion; canonical success is not automatically established.

### T — Provider trusted for payments is therefore trusted for identity proofing

Expected: FAIL. Trust is scoped by provider, capability, operation and purpose.

### U — Provider webhook is signed correctly, therefore its business claim is true

Expected: FAIL. Signature establishes message authenticity/integrity, not business truth.

### V — Provider API is highly available, therefore its data is authoritative

Expected: FAIL. Availability is not authority.

### W — Provider status is newer, therefore it automatically wins a conflict

Expected: FAIL. Conflict resolution is domain-specific.

### X — Adapter has service credentials, therefore any caller can invoke it

Expected: FAIL. Caller authorization remains mandatory.

## 63. Provider integration readiness gate

A provider integration is production-ready only when all applicable questions have defensible answers:

1. Who is the provider?
2. What exact capability does it supply?
3. What does the provider assert versus what LegaX establishes?
4. Who owns each source of truth?
5. What provider identifiers exist?
6. How are identifiers mapped?
7. What credentials are used?
8. What scopes do credentials have?
9. How are credentials rotated and revoked?
10. How is the provider authenticated?
11. How are inbound messages authenticated?
12. How is authorization bound to commands?
13. What is the adapter's exact translation?
14. Is translation exact or lossy?
15. What states exist on each side?
16. How are states mapped?
17. What is unknown?
18. What is retryable?
19. What is idempotent?
20. What happens after timeout?
21. How is reconciliation performed?
22. How are duplicates handled?
23. How are late events handled?
24. How are provider corrections handled?
25. What evidence is preserved?
26. What privacy restrictions apply?
27. What jurisdictions apply?
28. What regulatory obligations apply?
29. What happens during provider degradation?
30. What happens during provider compromise?
31. How is the adapter versioned?
32. How is the integration tested?
33. How can the provider be suspended?
34. How can credentials be revoked?
35. How can the provider be replaced?
36. What happens to historical evidence after retirement?
37. Can the provider ever bypass LegaX authorization?
38. Can the adapter create authority?
39. Can provider data become canonical without reconciliation?
40. Is every consequential operation attributable and auditable?

If any material question is unanswered, the integration MUST remain non-production or bounded to a lower-risk capability.

## 64. Relationship to phases 01–18

Phase 19 depends on:

01 LegaX — constitutional boundary.

02 Identity — external identity mappings remain scoped.

03 Authentication — provider authentication assertions are evaluated, not blindly trusted.

04 Account — external accounts remain distinct from LegaX accounts.

05 Administration — provider integrations cannot create hidden administration.

06 Authorization — provider execution is downstream of LegaX authorization.

07 Access — physical and digital controllers are enforcement providers, not authority sources.

08 Resources & Physical World — external resource and device state remains source-scoped.

09 Economic & Commerce — provider acceptance, processing and settlement remain distinct.

10 Lifecycle & Policy — provider transitions map into governed lifecycle rules.

11 Events, Evidence & Intelligence — provider assertions become governed events/evidence.

12 LegaServices — services may own adapters without creating competing core governance.

13 Canonical Domain Model — mappings translate into canonical entities and relationships.

14 Relationship Model — provider relationships have explicit scope, ownership and provenance.

15 State Machines — external transitions require explicit mapping and reconciliation.

16 Command & Execution — provider commands execute only after canonical execution gates.

17 Canonical Event Contract — inbound/outbound events preserve identity, causation, correlation and delivery semantics.

18 Evidence Contract — provider assertions and execution outcomes retain provenance, integrity, custody and reconciliation.

## 65. Final architectural rule

A provider may supply capability, authentication, evidence, data, execution, observation or external authority within its own system. LegaX may recognize those inputs only through explicit, scoped, validated and governed integration contracts.

No provider, adapter, credential, API scope, webhook, device, model or external assertion may silently become LegaX identity, authority, authorization, canonical truth or consequential permission.

The final boundary is:

CONNECTIVITY IS NOT TRUST.

TRUST IS NOT AUTHORITY.

AUTHORITY IS NOT AUTHORIZATION.

AUTHORIZATION IS NOT EXECUTION.

PROVIDER EXECUTION IS NOT AUTOMATICALLY CANONICAL OUTCOME.

EXTERNAL ASSERTION → GOVERNED INTERPRETATION → CANONICAL STATE.

NO EXTERNAL SYSTEM MAY BYPASS THE LegaX AUTHORITY AND EXECUTION CONTRACT.