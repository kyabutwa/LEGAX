# LegaX — Canonical Evidence Contract

## 18 — Evidence Contract

**Status:** Foundational evidence architecture contract.

## 1. Purpose

Phase 18 makes **Evidence** a first-class implementation boundary.

Phases 11, 13, 14, 15, 16 and 17 established that LegaX must preserve provenance, events, state, relationships, command execution and accountability without confusing observation with truth or intelligence with authority. Phase 18 defines the exact contract by which LegaX captures, identifies, acquires, stores, verifies, protects, evaluates, discloses, corrects, retains, disputes and ultimately disposes of evidence.

The central distinction is:

**Evidence is information retained because it supports, describes, corroborates, challenges, or helps establish a claim, occurrence, state, decision, action, relationship, or investigation. Evidence is not automatically truth, authorization, ownership, identity, or legal admissibility.**

The canonical evidence lifecycle is:

**SOURCE/CLAIM → IDENTIFICATION → COLLECTION/ACQUISITION → REGISTRATION → INTEGRITY CHECK → PROVENANCE CAPTURE → CLASSIFICATION → VALIDATION/VERIFICATION → EVIDENCE STATE → STORAGE → CONTROLLED USE/DISCLOSURE → CORRECTION/SUPERSESSION/DISPUTE → RETENTION/LEGAL HOLD → DISPOSITION**

For a consequential LegaX operation:

**REQUEST → AUTHENTICATION → AUTHORIZATION → COMMAND → EXECUTION → OUTCOME → EVENT → EVIDENCE → RECONCILIATION**

For an external assertion:

**EXTERNAL SOURCE → ASSERTION → ACQUISITION → PROVENANCE → VALIDATION → EVIDENCE → RECONCILIATION → CANONICAL INTERPRETATION**

## 2. Architectural position

Phase 18 sits immediately after Event and alongside Intelligence:

**AUTHORIZATION → COMMAND → EXECUTION → OUTCOME → AUTHORITATIVE STATE → EVENT → EVIDENCE → INTELLIGENCE**

Evidence does not replace the event contract.

Phase 17 answers how an occurrence is represented and propagated.

Phase 18 answers how information supporting or challenging that occurrence is captured and governed.

Evidence does not replace authorization.

Evidence may inform authorization, but:

**EVIDENCE → POLICY/AUTHORITY EVALUATION → AUTHORIZATION**

not:

**EVIDENCE → AUTOMATIC PERMISSION**

Evidence does not replace state.

A stored artifact can show what was reported or observed without itself changing canonical state.

## 3. Core definitions

### 3.1 Evidence

An **Evidence Item** is a uniquely identifiable, governed representation of information that is retained because it has actual or potential relevance to establishing, corroborating, challenging, explaining, reconstructing, or reviewing a defined claim, occurrence, state, decision, action, relationship, or investigation.

### 3.2 Evidence source

The **Evidence Source** is the system, person, device, organization, provider, document, sensor, record, process, or other origin from which an evidence item was obtained or derived.

Source identity is provenance. It is not automatic truth.

### 3.3 Claim

A **Claim** is a proposition that may be supported, contradicted, or left unresolved by evidence.

Examples:

- a person presented a credential;
- a payment provider reported settlement;
- a door controller acknowledged an access command;
- a resource was observed occupied;
- a worker completed a task;
- an identity document contains a stated name;
- a health record contains a clinical observation.

Evidence supports claims. It does not automatically establish them.

### 3.4 Assertion

An **Assertion** is a statement made by a source.

An external provider assertion remains an assertion until the relevant LegaX validation and reconciliation rules establish what, if anything, it proves.

### 3.5 Observation

An **Observation** records what a source or system observed, measured, received, detected, or recorded.

Observation is stronger than an ungrounded inference about what happened, but weaker than universal truth.

### 3.6 Verification

**Verification** is a governed process for checking whether specified evidence, claims, or attributes satisfy defined requirements.

Verification is scoped.

**VERIFIED FOR PURPOSE X** does not mean **UNIVERSALLY TRUE FOR ALL PURPOSES**.

### 3.7 Evidence proposition

A high-value evidence record should make explicit:

**WHAT IS CLAIMED → BY WHOM/WHAT → ABOUT WHAT → WHEN → HOW OBTAINED → WHAT WAS VERIFIED → WITH WHAT CONFIDENCE/QUALITY → UNDER WHICH SCOPE**

### 3.8 Evidence package

An **Evidence Package** is a governed collection of evidence items and their provenance, relationships, integrity information, relevant events, claims, analyses, and handling history.

A package is not automatically a single piece of evidence.

### 3.9 Evidence derivative

A derivative is a transformed representation of an evidence item, such as:

- OCR text;
- thumbnail;
- normalized record;
- extracted field set;
- redacted copy;
- translated representation;
- transcript;
- hash;
- cryptographic proof;
- analytical feature.

A derivative must preserve linkage to its source evidence and must not be represented as the original.

### 3.10 Evidence absence

**No evidence found** means the governed search or collection process did not locate sufficient evidence.

It does not automatically mean:

**The claimed event did not happen.**

## 4. Evidence identity

Every evidence item MUST have a stable **evidence_id**.

LegaX MUST distinguish:

- evidence_id;
- evidence_type;
- evidence_version;
- claim_id;
- source_id;
- event_id;
- command_id;
- execution_attempt_id;
- authorization_id;
- identity_ref;
- resource_ref;
- provider_event_id;
- acquisition_id;
- verification_id;
- provenance_id;
- dispute_id;
- retention_class;
- legal_hold_id.

These identifiers MUST NOT be casually substituted.

**evidence_id identifies the evidence item.**

**claim_id identifies the proposition the evidence supports or challenges.**

**event_id identifies an occurrence record.**

**verification_id identifies a verification activity/result.**

## 5. Evidence identity and content identity

LegaX should distinguish the logical evidence identity from content fingerprints.

A content hash may identify a particular byte representation.

It does not replace evidence identity because:

- the same evidence may have multiple representations;
- a redacted derivative has different bytes;
- a normalized copy may differ from the original;
- storage migration can change representation;
- an evidence item may have multiple related files.

Recommended relationship:

**evidence_id → representation_id → content_hash**

A hash proves correspondence to the hashed representation when the algorithm and verification process are trusted.

It does not prove that the content itself is true.

## 6. Evidence type

Every evidence item MUST have a governed evidence type.

Examples:

- identity_document;
- credential;
- signature;
- authorization_record;
- authentication_record;
- access_controller_record;
- device_observation;
- sensor_measurement;
- payment_record;
- provider_statement;
- booking_record;
- work_deliverable;
- communication_record;
- photograph;
- video;
- audio;
- document;
- database_record;
- system_log;
- telemetry_record;
- human_statement;
- verification_result;
- reconciliation_record;
- model_output;
- review_record.

Evidence types define their own required metadata, validation rules, sensitivity, retention, and admissibility/fitness requirements.

## 7. Source versus evidence

A source is not the evidence itself.

Example:

**Provider → source**

**Provider settlement statement → evidence item**

Likewise:

**Access controller → source**

**Controller event record → evidence item**

The source may be authoritative for information within its domain, but LegaX must preserve the distinction between source authority and evidence semantics.

## 8. Source trust versus evidence trust

LegaX MUST NOT use a single universal “trust score.”

Evidence quality is multi-dimensional.

Relevant dimensions may include:

- source authenticity;
- source authority;
- acquisition integrity;
- completeness;
- temporal accuracy;
- provenance completeness;
- content integrity;
- verification status;
- freshness;
- consistency;
- independence;
- corroboration;
- chain of custody;
- transformation history;
- known limitations;
- scope of validity.

A high-trust source can still provide an incomplete or stale record.

A low-trust source can still provide useful evidence that prompts investigation.

## 9. Evidence truth model

Evidence must support explicit epistemic states.

Recommended states include:

- SUBMITTED;
- CAPTURED;
- ACQUIRED;
- PRESERVED;
- INTEGRITY_CHECKED;
- VALIDATED;
- VERIFIED;
- CORROBORATED;
- DISPUTED;
- CONTRADICTED;
- SUPERSEDED;
- RETRACTED;
- EXPIRED;
- WITHDRAWN;
- DESTROYED;
- UNKNOWN.

These states describe the evidence item's handling or evidential status.

They do not automatically change the canonical state of the underlying domain object.

## 10. Evidence versus fact

The following are distinct:

**Evidence:** information retained to support a proposition.

**Fact/authoritative state:** a domain condition established under the domain's governing rules.

**Claim:** proposition being evaluated.

**Inference:** conclusion derived from information.

**Decision:** governed determination.

**Legal finding:** determination under a competent legal process.

LegaX must never collapse these categories merely for UI convenience.

## 11. Canonical evidence versus observational evidence

A domain may designate certain records as authoritative evidence of a defined state.

For example:

**LegaPay settlement ledger record**

may be canonical evidence for the LegaX payment domain.

A provider webhook saying “settled” may be:

**OBSERVED/EXTERNAL_ASSERTION**

until the payment domain's reconciliation rules establish the canonical state.

Canonical evidence is authoritative only within its declared scope.

## 12. Evidence supporting an event

An event may reference one or more evidence items.

Example:

**access.granted event → authorization record → credential verification → controller command → controller response → physical observation**

The event is not itself every piece of evidence supporting the event.

Evidence references MUST preserve the distinction.

## 13. Evidence supporting authorization

When evidence materially affects authorization, LegaX should preserve:

- evidence_id;
- claim/attribute supported;
- evidence source;
- verification method;
- verification result;
- verification time;
- policy version;
- authorization_id;
- decision context;
- scope;
- expiry/freshness;
- reviewer where required.

This permits later reconstruction of:

**WHAT EVIDENCE SUPPORTED THIS AUTHORIZATION?**

Evidence used for one authorization does not automatically become sufficient for another.

## 14. Evidence supporting execution

For consequential execution, evidence should permit reconstruction of:

**ACTOR → AUTHORIZATION → COMMAND → ATTEMPT → EXTERNAL/LOCAL EFFECT → OUTCOME → EVENT → EVIDENCE → RECONCILIATION**

The evidence contract must preserve material command parameters and state/version references without unnecessarily duplicating sensitive data.

## 15. Evidence provenance

Every evidence item MUST preserve sufficient provenance for its intended use.

At minimum, where applicable:

- source;
- source identity;
- source authority/scope;
- acquisition method;
- acquisition actor/system;
- acquisition time;
- occurrence time;
- received time;
- storage time;
- transformation history;
- original representation reference;
- derivative references;
- integrity information;
- verification history;
- access/disclosure history;
- retention policy;
- legal hold state;
- correction/supersession history.

## 16. Provenance graph

For a high-value evidence item:

**SOURCE → ACQUISITION → ORIGINAL REPRESENTATION → PRESERVATION → DERIVATIVE/TRANSFORMATION → VERIFICATION → USE → DISCLOSURE → CORRECTION/SUPERSESSION → DISPOSITION**

For event-linked evidence:

**COMMAND → EXECUTION → OUTCOME → EVENT → EVIDENCE**

For external provider evidence:

**PROVIDER → ASSERTION → ACQUISITION → VALIDATION → EVIDENCE → RECONCILIATION → CANONICAL STATE/EVENT**

For AI-derived evidence:

**INPUT EVIDENCE → MODEL/RULE PROCESSING → DERIVED ARTIFACT → EVALUATION → REVIEW → GOVERNED USE**

## 17. Acquisition

Acquisition means obtaining evidence from its source into a LegaX-controlled or governed evidence boundary.

Acquisition MUST preserve:

- acquisition identity;
- source;
- method;
- time;
- actor/system;
- authorization/legal basis where required;
- original representation;
- integrity result;
- limitations.

Acquisition MUST NOT silently overwrite the original representation.

## 18. Collection versus acquisition versus storage

These are distinct:

**Collection:** identifying and gathering relevant information.

**Acquisition:** obtaining a controlled representation.

**Preservation:** protecting the representation and relevant provenance against unauthorized alteration/loss.

**Storage:** retaining the representation in a managed repository.

**Use:** relying on the evidence for a defined purpose.

**Disclosure:** making evidence available to another authorized party.

## 19. Chain of custody

For evidence requiring strong accountability, LegaX MUST support a chain of custody.

The custody record should establish:

- who/system possessed it;
- when;
- from where;
- under what authority;
- what action was performed;
- whether content changed;
- integrity verification before/after transfer;
- destination;
- transfer reason;
- resulting custody state.

Chain of custody is about controlled handling.

It does not by itself prove semantic truth.

## 20. Custody transfer

A custody transfer is a governed handoff between custodians, systems, storage boundaries, or authorized processes.

A transfer should have:

- transfer_id;
- evidence_id;
- source custodian;
- destination custodian;
- transfer time;
- transfer method;
- integrity check;
- authorization;
- transfer result;
- exceptions.

Unacknowledged or failed transfer MUST remain visible.

## 21. Integrity

Evidence integrity concerns whether the retained representation remains materially unchanged from the protected representation.

Controls may include:

- cryptographic hashes;
- digital signatures;
- authenticated storage;
- append-only records;
- immutable storage;
- signed manifests;
- trusted timestamps;
- hash chains;
- Merkle-based commitments where appropriate.

Integrity protection establishes record integrity under the defined control model.

**Integrity ≠ truth.**

## 22. Hashing

A content hash should be bound to:

- algorithm;
- representation;
- calculation time;
- calculation method;
- evidence_id;
- hash value.

Hash algorithms MUST be governed for security and migration.

When a cryptographic algorithm becomes unsuitable, LegaX should preserve the historical hash and add a new integrity representation rather than silently replacing historical evidence.

## 23. Digital signatures

Where signatures are used, LegaX should preserve:

- signature;
- signer identity/reference;
- signing method;
- key/certificate reference;
- signing time;
- verification result;
- certificate/status evidence where relevant;
- signature scope.

A valid signature proves that the defined signature mechanism validated the signed representation under its trust model.

It does not prove every real-world proposition contained in the representation.

## 24. Immutable versus mutable metadata

Evidence content may require immutable preservation while certain governance metadata may legitimately evolve.

Therefore LegaX should distinguish:

**IMMUTABLE CONTENT/REPRESENTATION**

from

**VERSIONED GOVERNANCE METADATA**

Examples of mutable/versioned metadata:

- retention classification;
- legal hold status;
- access policy;
- dispute status;
- verification status;
- sensitivity classification.

Changes to governance metadata must themselves be attributable and auditable.

## 25. Original versus derivative

The original acquired representation should remain identifiable.

A derivative must carry:

- parent evidence_id;
- transformation type;
- transformation version;
- processor;
- processing time;
- transformation inputs;
- integrity information;
- resulting representation.

OCR output is not the same thing as the original document.

A transcript is not the same thing as the original audio.

A redacted copy is not the same thing as the original record.

## 26. Transformation integrity

Every material transformation must be reproducible or sufficiently documented for its intended purpose.

Examples:

- OCR engine/version;
- parser/version;
- redaction rules;
- normalization rules;
- translation model/version;
- extraction algorithm;
- human edits.

A transformed representation MUST NOT silently inherit a stronger evidential status than its source and transformation process justify.

## 27. Evidence quality

Evidence quality should be evaluated across:

- authenticity;
- integrity;
- completeness;
- accuracy;
- timeliness;
- relevance;
- reliability;
- provenance;
- independence;
- corroboration;
- consistency;
- freshness;
- fitness for purpose.

No single scalar score should replace these dimensions for high-impact decisions.

## 28. Fitness for purpose

Evidence is **fit for purpose** only when it satisfies the requirements of the intended use.

Examples:

- identity proofing;
- access decision;
- payment reconciliation;
- dispute review;
- operational debugging;
- security investigation;
- compliance reporting;
- safety review.

Evidence sufficient for operational troubleshooting may be insufficient for a high-impact identity or financial determination.

## 29. Admissibility boundary

LegaX MUST distinguish **technical evidential fitness** from **legal admissibility**.

The platform may record:

- provenance;
- integrity;
- authenticity indicators;
- chain of custody;
- handling history;
- verification;
- source information;
- applicable jurisdiction;
- disclosure history.

But LegaX MUST NOT universally declare:

**“This evidence is legally admissible.”**

Legal admissibility depends on applicable law, forum, procedure, jurisdiction, and decision-maker.

The contract therefore uses:

**ADMISSIBILITY SUPPORTING RECORDS**

rather than a universal legal-admissibility guarantee.

## 30. Jurisdiction

Evidence governance may vary by:

- country;
- legal forum;
- community governance;
- contract;
- service;
- sector;
- data subject rights;
- regulatory regime.

Evidence should preserve jurisdictional metadata where material.

Cross-border transfer must be governed by applicable policy and law.

## 31. Temporal semantics

Evidence MUST distinguish, where applicable:

- occurred_at;
- observed_at;
- acquired_at;
- received_at;
- recorded_at;
- verified_at;
- effective_from;
- effective_until;
- superseded_at;
- disputed_at;
- disclosed_at;
- retained_until;
- destroyed_at.

A storage timestamp MUST NOT silently become an occurrence timestamp.

## 32. Temporal uncertainty

Where exact time is unknown, LegaX should preserve uncertainty rather than invent precision.

Possible representations:

- exact timestamp;
- interval;
- approximate time;
- source-provided time;
- inferred time;
- unknown.

An inferred timestamp must remain identified as inferred.

## 33. Evidence freshness

Evidence can become stale without becoming historically false.

Examples:

- a credential was valid when issued but is now revoked;
- a device was healthy at one time but later compromised;
- a resource was available earlier but is now occupied;
- an account was active when evidence was captured but later suspended.

Freshness MUST therefore be evaluated relative to the decision context.

## 34. Evidence expiry

Evidence expiry means the evidence is no longer valid or sufficiently fresh for a defined purpose.

Expiry MUST NOT automatically mean the historical record is false.

It means:

**NO LONGER FIT FOR THIS PURPOSE AFTER THIS TIME**

unless the evidence type explicitly defines another semantic.

## 35. Revocation and withdrawal

Evidence may be:

- revoked;
- withdrawn;
- invalidated;
- superseded;
- disputed.

These are distinct operations.

A correction must preserve historical traceability unless lawful deletion requires otherwise.

## 36. Correction

When evidence metadata or interpretation is incorrect, LegaX should create a governed correction record.

A correction should reference:

- original evidence_id;
- corrected field/claim;
- correction reason;
- correction authority;
- correction evidence;
- effective time;
- correction event;
- reviewer where required.

The original representation should not be silently rewritten when preservation is required.

## 37. Supersession

Supersession means a newer record is now preferred for the defined purpose while the previous record remains historically traceable.

Example:

**credential evidence v1 → credential evidence v2**

Supersession does not mean v1 never existed.

## 38. Retraction

Retraction means a defined assertion should no longer be relied upon for a defined purpose.

Retraction should preserve:

- original evidence identity;
- retraction reason;
- authority;
- time;
- scope;
- replacement/correction if any.

Retraction is not equivalent to physical deletion.

## 39. Dispute

Evidence may be challenged.

A dispute record should contain:

- dispute_id;
- evidence_id;
- challenger;
- challenge reason;
- challenged claim;
- supporting evidence;
- response;
- reviewer;
- resolution;
- resolution authority;
- resolution time;
- resulting status.

A disputed evidence item must remain visibly disputed until resolved.

## 40. Contradictory evidence

LegaX MUST support multiple evidence items that disagree.

It must not automatically:

- delete one;
- average them;
- choose the newest;
- choose the highest-trust source;
- choose the internal source.

Resolution should follow domain-specific reconciliation rules.

Possible outcomes:

- one source accepted;
- both partially accepted;
- one superseded;
- unresolved;
- human review;
- canonical state remains UNKNOWN.

## 41. Corroboration

Corroboration is support from independent or sufficiently distinct evidence.

Two copies of the same provider assertion are not automatically independent corroboration.

Independence should consider:

- source;
- acquisition path;
- underlying data;
- transformation;
- common upstream dependency.

## 42. Evidence graphs

High-value evidence should support graph relationships such as:

- supports claim;
- contradicts claim;
- derived from;
- corroborates;
- supersedes;
- corrects;
- references;
- produced by;
- observed by;
- acquired from;
- used by authorization;
- used by verification;
- linked to event;
- linked to command;
- linked to execution attempt;
- linked to resource;
- linked to identity;
- linked to provider;
- linked to dispute.

These relationships MUST remain scoped and typed.

## 43. Evidence and relationships

Evidence can support a relationship but does not automatically create the relationship.

Example:

**document evidence → supports residence claim**

does not mean:

**document evidence → residence relationship automatically exists**

The relationship requires the appropriate verification/governance process.

This preserves Phase 14's rule that evidence, relationship, and authority remain distinct.

## 44. Evidence and identity

Identity evidence may support:

- identity attributes;
- document authenticity;
- credential issuance;
- identity continuity;
- identity matching.

Identity evidence MUST NOT automatically grant:

- account access;
- participation;
- role;
- capability;
- authority;
- authorization.

The chain remains:

**EVIDENCE → VERIFICATION → IDENTITY/ATTRIBUTE ESTABLISHMENT → AUTHORIZATION INPUT**

## 45. Evidence and authentication

Authentication evidence may establish that a defined authentication mechanism succeeded.

It does not automatically prove:

- legal identity;
- authorization;
- ownership;
- permission;
- participation in every context.

Authentication evidence must preserve:

- authenticator/factor type;
- assurance context;
- session reference;
- time;
- result;
- relevant security state;
- source.

## 46. Evidence and access

Access evidence should distinguish:

**REQUEST → AUTHORIZATION DECISION → ACCESS DECISION → ENFORCEMENT COMMAND → CONTROLLER ACK → PHYSICAL/DIGITAL OBSERVATION**

A controller acknowledgement is evidence of acknowledgement.

It is not automatically proof that a door physically opened.

A sensor observation may provide additional evidence.

## 47. Evidence and physical world

Physical evidence may include:

- sensor readings;
- access controller logs;
- device state;
- environmental measurements;
- vehicle telemetry;
- delivery scans;
- certified biometric hardware output;
- photographs/video where lawfully collected;
- human inspection records.

Physical evidence should preserve:

- device/source identity;
- calibration/status where material;
- location/scope;
- time;
- acquisition path;
- integrity;
- measurement unit;
- uncertainty;
- environmental conditions where relevant.

## 48. Evidence and economic activity

Economic evidence must distinguish:

- request;
- quote;
- payment intent;
- authentication;
- authorization;
- provider instruction;
- provider acceptance;
- processing;
- settlement;
- reconciliation;
- refund;
- reversal;
- dispute.

Provider API success is not automatically settlement evidence unless the provider contract establishes that semantic meaning.

## 49. Evidence and commerce

Commerce evidence may include:

- listing version;
- offer;
- inventory state;
- order;
- order line;
- fulfillment;
- shipment;
- delivery;
- return;
- refund;
- dispute;
- tax record.

A delivery scan may support delivery, but does not universally prove ownership transfer.

## 50. Evidence and work

Work evidence may include:

- qualification;
- credential;
- assessment;
- task;
- deliverable;
- time record;
- acceptance;
- review;
- communication;
- payment;
- dispute.

Payment evidence does not automatically prove satisfactory work.

A worker profile is not itself evidence of demonstrated performance.

## 51. Evidence and health

Health evidence is high-sensitivity.

LegaX must preserve:

- provenance;
- professional/source identity where appropriate;
- timestamp;
- context;
- consent/legal basis where applicable;
- integrity;
- access restrictions;
- correction history.

A coordination record is not automatically a clinical truth.

AI-generated health interpretation is not automatically a clinical fact.

## 52. Evidence and access-control credentials

Credential evidence should distinguish:

- credential issued;
- credential presented;
- credential verified;
- credential active;
- credential suspended;
- credential revoked;
- credential expired.

A credential's existence does not automatically establish current authorization.

## 53. Evidence and provider assertions

External providers are evidence sources and may be authoritative for their own systems.

LegaX must preserve:

- provider identity;
- provider event/reference;
- provider timestamp;
- raw assertion reference;
- normalized interpretation;
- validation;
- reconciliation status.

Provider authority is scoped.

## 54. Evidence and events

Every evidence item linked to an event should identify the relationship:

- supports;
- challenges;
- derives;
- records;
- corroborates;
- explains.

An event reference without relationship semantics is insufficient for high-value evidence.

## 55. Evidence and command execution

Execution evidence should permit reconstruction of:

- command identity;
- authorization identity/version;
- actor;
- target;
- material parameters/fingerprint;
- execution attempt;
- state/version;
- external operation;
- outcome;
- event;
- reconciliation;
- compensation.

The evidence layer must not manufacture missing execution facts.

## 56. Evidence and state machines

Evidence may support a state transition.

The state machine remains authoritative for whether the transition is accepted.

Evidence may be:

- required precondition;
- verification input;
- execution output;
- reconciliation evidence;
- dispute evidence.

No evidence item should silently mutate state outside the governed transition contract.

## 57. Evidence and lifecycle

Evidence itself has lifecycle.

A canonical lifecycle may be:

**IDENTIFIED → COLLECTING → ACQUIRED → PRESERVED → INTEGRITY_CHECKED → VALIDATED → AVAILABLE_FOR_USE → VERIFIED/CORROBORATED/DISPUTED → SUPERSEDED/EXPIRED/RETRACTED → RETAINED_OR_HELD → DISPOSED**

Not every evidence type requires every state.

Transitions must be type-specific and governed.

## 58. Evidence state transition contract

Evidence transitions follow:

**CURRENT STATE → TRANSITION REQUEST → VALIDATION → PRECONDITIONS → AUTHORIZATION/REVIEW → EXECUTION → NEW STATE → EVENT → EVIDENCE → RECONCILIATION IF REQUIRED**

A state transition MUST NOT be inferred merely from a UI label.

## 59. Evidence storage boundary

Evidence storage must support:

- durable identity;
- access control;
- integrity;
- versioning where applicable;
- retention;
- legal hold;
- backup/recovery;
- controlled export;
- audit;
- deletion/anonymization;
- regional/jurisdictional controls.

The contract does not mandate one storage technology.

## 60. Evidence reference versus evidence payload

Events and domain records should normally reference evidence rather than duplicate sensitive evidence payloads.

Recommended:

**evidence_id + purpose + relationship + access scope**

instead of embedding:

**full identity document / biometric / health record / financial artifact**

This reduces unnecessary replication.

## 61. Access to evidence

Reading evidence is itself a consequential access operation.

The normal chain is:

**AUTHENTICATION → IDENTITY/PARTICIPATION/CONTEXT → AUTHORITY → AUTHORIZATION → EVIDENCE ACCESS → EVENT/EVIDENCE**

Administrative status does not create unrestricted evidence access.

The service that generated evidence does not automatically receive unrestricted read access.

## 62. Evidence disclosure

Disclosure must record:

- evidence_id/package_id;
- recipient;
- purpose;
- authority;
- authorization;
- scope;
- fields/representations disclosed;
- time;
- method;
- jurisdiction;
- restrictions;
- result.

A disclosure may use a redacted or minimized derivative.

## 63. Export

Evidence export must preserve:

- evidence identity;
- provenance;
- integrity metadata;
- schema/format;
- chain-of-custody information where required;
- disclosure identity;
- export time;
- recipient;
- applicable restrictions.

Exporting evidence must not silently create an untracked copy.

## 64. Privacy and minimization

Evidence is potentially one of the most sensitive parts of LegaX.

LegaX must apply:

- purpose limitation;
- data minimization;
- least privilege;
- separation of sensitive evidence;
- controlled disclosure;
- retention limits;
- legal basis/consent where required;
- jurisdiction controls;
- access logging;
- privacy-preserving derivatives where appropriate.

Particularly sensitive classes include:

- biometrics;
- identity documents;
- health data;
- precise location;
- financial information;
- private communications;
- credentials;
- security secrets.

## 65. Secret prohibition

Evidence stores and evidence metadata MUST NOT be used as a general secret vault.

Evidence MUST NOT contain plaintext:

- passwords;
- private keys;
- session secrets;
- API secrets;
- bearer tokens;
- recovery secrets.

If a secret itself is the subject of a security investigation, it must be handled under a dedicated secret-management and incident-response process, not ordinary evidence conventions.

## 66. Biometric evidence

Biometric evidence requires special minimization.

LegaX should prefer:

- verification result;
- assurance level;
- provider/device reference;
- template/reference under explicit governance;
- liveness/anti-spoofing result;
- timestamp;
- purpose;

over unnecessary storage of raw biometric material.

A biometric match result is evidence about a defined verification operation.

It is not universal identity or authority.

## 67. AI-derived evidence

AI outputs may be retained as evidence of what an AI system produced.

That does not make the output a fact.

For consequential AI-derived evidence, preserve where appropriate:

- model identity/version;
- input evidence references;
- instruction/prompt context where material;
- retrieval sources;
- tools used;
- output;
- uncertainty/confidence;
- evaluation;
- reviewer;
- policy;
- time;
- correction history.

The platform MUST distinguish:

**EVIDENCE THAT AI SAID X**

from:

**EVIDENCE THAT X IS TRUE**

## 68. AI-generated transformations

OCR, classification, extraction, summarization, transcription, translation and other AI transformations are derivatives.

They must preserve:

- source evidence;
- model/tool identity;
- version;
- transformation time;
- transformation type;
- limitations;
- validation/review status.

An AI-generated extraction must not silently replace the source representation.

## 69. Evidence provenance for intelligence

When evidence is consumed by intelligence:

**EVIDENCE → MODEL/RULE PROCESSING → INTELLIGENCE OUTPUT**

The intelligence output should retain references to material evidence inputs.

The model cannot erase provenance.

## 70. Evidence evaluation and human review

Review may be required based on:

- evidence sensitivity;
- decision impact;
- uncertainty;
- contradiction;
- source reliability;
- legal requirements;
- policy;
- automated-system risk.

Review records must preserve:

- reviewer identity;
- authority;
- scope;
- evidence examined;
- decision;
- rationale where required;
- time;
- policy/version;
- conflicts or abstention.

A reviewer without relevant authority does not create valid governance.

## 71. Evidence access and separation of duties

For high-risk evidence:

- collector;
- verifier;
- reviewer;
- discloser;
- administrator

may need separation.

No single privileged role should automatically have every power.

Separation-of-duties rules belong to Administration, Authorization and Policy, while Evidence preserves the resulting records.

## 72. Evidence retention

Retention MUST be explicit.

Retention factors may include:

- legal requirements;
- regulatory obligations;
- financial reconciliation;
- dispute windows;
- security investigations;
- contractual duties;
- operational need;
- consent;
- privacy obligations;
- evidence value;
- jurisdiction.

Retention is not a single universal duration.

## 73. Legal hold

A legal or governance hold suspends ordinary disposition for defined evidence.

A hold should identify:

- legal_hold_id;
- scope;
- evidence;
- authority;
- reason;
- start time;
- responsible authority;
- release condition;
- release time.

Legal hold is separate from ordinary retention.

A hold does not automatically authorize broad access to the held evidence.

## 74. Disposition

Disposition may include:

- deletion;
- secure destruction;
- anonymization;
- irreversible de-identification;
- archival;
- transfer to an authorized custodian.

Disposition MUST be governed and recorded.

Where evidence is destroyed, LegaX should preserve the minimum permitted disposition record required to establish that governed destruction occurred.

## 75. Backup and copies

Evidence copies complicate lifecycle.

LegaX must distinguish:

- primary evidence representation;
- backup;
- replica;
- cache;
- derivative;
- export;
- archival copy.

A deletion request must define which copies are within scope and which are retained under legitimate backup/legal obligations.

## 76. Evidence security

Controls should include:

- least privilege;
- encryption at rest/in transit;
- key management;
- integrity verification;
- tamper detection;
- access logging;
- export controls;
- rate limiting;
- segmentation;
- incident response;
- backup/recovery;
- administrator controls;
- anomaly detection.

Evidence storage MUST NOT become a privileged bypass around authorization.

## 77. Evidence ingestion security

External evidence ingestion must protect against:

- spoofed source;
- forged provider callback;
- replay;
- malicious file;
- parser exploitation;
- oversized payload;
- malware;
- schema abuse;
- injection;
- poisoned metadata;
- duplicate submission.

Ingestion should validate envelope and content before making evidence available for consequential use.

## 78. Replay protection

Evidence submissions that can trigger consequential processing should support:

- stable source identity;
- source event/record identity;
- ingestion identity;
- timestamp;
- nonce/signature where applicable;
- duplicate detection;
- replay window/policy.

A replayed provider callback must not create a second business effect.

## 79. Evidence authenticity

Authenticity may be established through:

- trusted source channel;
- digital signature;
- certificate validation;
- authenticated API;
- secure device identity;
- controlled acquisition;
- human attestation;
- corroborating evidence.

Authenticity is a property of source/representation under a defined verification process.

It does not prove semantic truth.

## 80. Evidence verification

Verification must specify:

- subject of verification;
- requirement;
- method;
- inputs;
- verifier;
- time;
- result;
- limitations;
- policy/version;
- evidence used.

Possible results:

- VERIFIED;
- NOT_VERIFIED;
- INDETERMINATE;
- PENDING;
- FAILED;
- EXPIRED;
- REVOKED;
- CONFLICTED.

Verification results themselves are evidence.

## 81. Verification is scoped

A verification result MUST have a scope.

Example:

**passport authenticity verified**

does not automatically mean:

**all identity attributes are verified**

or:

**person has authority to enter a building**

Each claim requires appropriate evidence and verification.

## 82. Correlation and causation

Evidence references can correlate records without proving causation.

Example:

Two records sharing a correlation_id are related to a workflow.

That does not prove:

**record A caused record B.**

Causation must be established through explicit causal metadata or governed analysis.

## 83. Event occurrence versus evidence

An event says:

**a defined occurrence was recorded.**

Evidence says:

**information supporting or challenging a claim/occurrence exists.**

The event may itself be an evidence item in a later investigation, but it remains an event according to its event contract.

Do not collapse event and evidence into one universal record type.

## 84. Canonical evidence and event correction

If a canonical event is corrected, the evidence supporting the original event must remain traceable.

Correction chain:

**ORIGINAL EVENT → ORIGINAL EVIDENCE → CORRECTION/RECONCILIATION → NEW EVENT/EVIDENCE**

The correction does not rewrite history.

## 85. Reconciliation

Reconciliation compares evidence from multiple sources or states to establish a governed interpretation.

Examples:

- provider payment record vs LegaX payment state;
- access controller vs physical sensor;
- inventory vs fulfillment;
- booking vs provider capacity;
- worker delivery evidence vs customer receipt;
- identity document vs verification result.

Reconciliation may result in:

- matched;
- mismatched;
- partially matched;
- unresolved;
- corrected;
- escalated.

## 86. Unknown is first-class

If evidence is insufficient to establish the outcome:

**UNKNOWN**

must remain a valid result.

Examples:

- provider accepted request but final outcome is unavailable;
- controller acknowledged command but physical state is unobserved;
- two evidence sources conflict;
- evidence was corrupted;
- source authenticity cannot be established.

Unknown MUST NOT silently become:

- failed;
- successful;
- fraudulent;
- verified;
- false.

## 87. Evidence completeness

Completeness should be assessed against the purpose.

A missing optional field does not make an evidence item invalid.

A missing field required for the intended verification may make it:

- incomplete;
- indeterminate;
- not fit for purpose.

Completeness must be explicit rather than assumed.

## 88. Data quality

Evidence quality controls should detect:

- missing fields;
- malformed values;
- impossible timestamps;
- duplicate records;
- inconsistent identifiers;
- corrupted files;
- unsupported schema;
- stale evidence;
- suspicious source behavior;
- transformation errors.

Quality failure should not silently destroy the original evidence.

## 89. Evidence packages for disputes

A dispute package may contain:

- claim;
- original evidence;
- contradictory evidence;
- provenance;
- events;
- authorization;
- command;
- execution;
- relevant policy;
- verification;
- review;
- reconciliation;
- resolution.

The package must preserve source identities and relationships rather than flattening everything into one narrative.

## 90. Investigation

Investigations must be governed operations.

Investigation access requires:

- authorized investigator;
- scope;
- purpose;
- evidence access authorization;
- audit;
- confidentiality controls;
- disclosure controls.

Investigators do not gain unrestricted authority merely by opening an investigation.

## 91. Evidence search

Searching evidence may reveal sensitive information.

Search itself should be governed by:

- identity;
- authority;
- purpose;
- scope;
- sensitivity;
- jurisdiction;
- retention;
- legal hold.

Search indexes should not automatically expose full evidence content.

## 92. Evidence redaction

Redaction creates a derivative representation.

A redacted item should preserve:

- parent evidence_id;
- redaction policy/version;
- redactor;
- time;
- reason;
- fields removed;
- integrity of resulting representation.

The redacted copy is not the original.

## 93. Evidence disclosure minimization

When evidence is disclosed, LegaX should prefer the minimum representation necessary.

Examples:

- verified attribute instead of full identity document;
- settlement status instead of full financial record;
- access decision result instead of raw biometric material;
- age eligibility result instead of full date of birth where appropriate.

This preserves utility while reducing unnecessary exposure.

## 94. Evidence portability

When evidence crosses system boundaries, the package should preserve:

- evidence identity;
- source;
- provenance;
- integrity;
- schema/version;
- timestamps;
- custody history where required;
- restrictions;
- disclosure metadata.

W3C Verifiable Credentials can inform interoperable representations of issuer claims and supporting evidence, but LegaX evidence semantics remain broader than credentials.

## 95. Verifiable credentials

For credential-based evidence, LegaX may consume:

- issuer claims;
- credential status;
- proofs;
- evidence references;
- validity periods;
- holder/presentation context.

A valid verifiable credential establishes what its issuer has cryptographically asserted under the credential's trust model.

It does not automatically establish every downstream LegaX authority or authorization.

## 96. Evidence of ownership and stewardship

Evidence may support:

- ownership;
- stewardship;
- custody;
- control;
- lease;
- reservation;
- possession.

These relationships are distinct.

A receipt may support purchase.

It does not universally prove current ownership.

A reservation may support a right to use.

It does not universally prove ownership.

## 97. Evidence of participation

Evidence may support participation in a community, organization, service, project, or workflow.

Participation remains a governed relationship.

Evidence alone does not automatically create participation.

## 98. Evidence of capability

Evidence may support capability claims:

**DECLARED → CREDENTIALLED/VERIFIED → ASSESSED → DEMONSTRATED → OBSERVED → EVIDENCE-BACKED**

A certificate is evidence of an issuer's assertion.

Observed performance may provide additional evidence.

Capability does not automatically equal authority.

## 99. Evidence and policy

Policy determines:

- what evidence may be collected;
- who may access it;
- what purposes are permitted;
- verification requirements;
- retention;
- disclosure;
- jurisdiction;
- legal hold;
- automated processing;
- human review.

Evidence MUST NOT rewrite policy.

## 100. Evidence and administration

Administration may govern evidence configuration, access structures, retention policy, review roles, and investigation procedures.

Administration is itself subject to authorization.

An administrator cannot bypass evidence access controls merely because a system labels the actor “admin.”

## 101. Evidence and intelligence

Intelligence consumes evidence.

Intelligence outputs can become evidence of what the intelligence system concluded, but not automatically evidence that the conclusion is true.

This creates two distinct records:

**Evidence of input**

and

**Evidence of model output.**

Both require provenance.

## 102. Evidence and AI authority boundary

AI may:

- classify evidence;
- extract fields;
- detect anomalies;
- suggest corroboration;
- summarize;
- propose verification;
- identify conflicts;
- recommend investigation.

AI MUST NOT:

- manufacture evidence;
- silently modify original evidence;
- convert inference into verification;
- declare legal admissibility universally;
- create authority;
- grant authorization;
- erase contradictory evidence;
- conceal uncertainty;
- approve its own consequential recommendation.

## 103. Model provenance

For material AI-derived evidence, preserve:

- model/provider;
- model version;
- processing time;
- input evidence references;
- tools;
- retrieval sources;
- instruction context where material;
- output;
- evaluation;
- uncertainty;
- human review;
- resulting use.

Model changes must not silently rewrite historical provenance.

## 104. Evidence lifecycle automation

Automated retention, verification, archival, or deletion jobs are consequential operations.

They require:

- defined authority;
- policy version;
- scope;
- command identity;
- idempotency;
- execution evidence;
- event;
- failure handling;
- reconciliation where required.

Automation does not remove governance.

## 105. Failure modes

The evidence system must distinguish:

- acquisition failure;
- validation failure;
- integrity failure;
- storage failure;
- transformation failure;
- verification failure;
- disclosure failure;
- retention failure;
- deletion failure;
- reconciliation failure;
- unknown outcome.

A failure to acquire evidence does not mean the underlying event did not occur.

## 106. Evidence corruption

If integrity verification fails:

- preserve the corrupted representation where policy permits;
- record the integrity failure;
- isolate it from trusted representations;
- preserve provenance;
- seek a known-good source or derivative;
- reconcile.

Do not silently replace corrupted evidence.

## 107. Evidence loss

Evidence loss must be explicit.

Record:

- evidence_id;
- affected representation;
- detection time;
- cause if known;
- recovery attempt;
- backup/replica state;
- impact;
- remediation;
- notification where required.

Loss of evidence is itself an accountable event.

## 108. Evidence backup and recovery testing

Evidence backups are only useful if recoverable.

Recovery controls should test:

- integrity;
- completeness;
- provenance;
- retention metadata;
- legal holds;
- access controls;
- encryption/key availability.

A backup copy must not silently become the authoritative original.

## 109. Evidence migration

Storage migration must preserve:

- evidence_id;
- original representation;
- hash/integrity;
- metadata;
- provenance;
- lifecycle;
- custody;
- retention;
- legal holds.

Migration is a transformation of storage location, not a new semantic occurrence.

## 110. Evidence versioning

Versioning should distinguish:

- representation version;
- metadata version;
- verification version;
- policy version;
- derivative version.

A new representation must not silently overwrite historical provenance.

## 111. Evidence event contract

Material evidence lifecycle changes should emit events such as:

- evidence.acquired;
- evidence.integrity_checked;
- evidence.verified;
- evidence.disputed;
- evidence.superseded;
- evidence.retracted;
- evidence.disclosed;
- evidence.placed_on_hold;
- evidence.released_from_hold;
- evidence.disposed.

These events must follow Phase 17.

An event describing evidence lifecycle is not the evidence itself.

## 112. Evidence security event chain

For sensitive evidence:

**ACCESS REQUEST → AUTHORIZATION → EVIDENCE READ/EXPORT → ACCESS EVENT → AUDIT EVIDENCE**

Unauthorized access attempts should also be recorded where policy requires.

## 113. Evidence and retention event chain

Retention automation should produce:

**RETENTION DUE → POLICY CHECK → HOLD CHECK → AUTHORIZATION → DISPOSITION COMMAND → EXECUTION → DISPOSITION EVENT → DISPOSITION EVIDENCE**

Legal hold blocks ordinary disposition within its scope.

## 114. Evidence and cross-domain propagation

Cross-domain evidence should normally propagate as:

**SOURCE DOMAIN EVIDENCE → AUTHORIZED REFERENCE/DERIVATIVE → TARGET DOMAIN CONSUMPTION → TARGET DOMAIN VERIFICATION/INTERPRETATION**

The target domain must not silently assume the source evidence has universal meaning.

## 115. Evidence access across services

LegaServices should use scoped evidence references.

A service receives:

- evidence reference;
- permitted purpose;
- permitted fields/representation;
- scope;
- expiry;
- authorization context.

It does not automatically receive the complete evidence repository.

## 116. Evidence reference integrity

References should be stable and unambiguous.

Broken evidence references must be detectable.

A domain record that points to unavailable evidence should expose the missing state rather than silently treating the reference as satisfied.

## 117. Evidence dependency

A verification or decision may depend on evidence.

Dependencies should be explicit.

If supporting evidence is revoked, corrected, expired, or found unreliable, dependent verification/decision processes may require re-evaluation according to policy.

Historical decisions must remain reconstructable.

## 118. Evidence and decision re-evaluation

A material evidence change may trigger:

**EVIDENCE CHANGE → DEPENDENCY DETECTION → POLICY CHECK → REVERIFICATION/REAUTHORIZATION IF REQUIRED → NEW DECISION/STATE → EVENT/EVIDENCE**

Historical authorization must not be silently rewritten.

## 119. Evidence and revocation propagation

If an evidence-backed credential is revoked, downstream services must not automatically erase history.

They may need to:

- stop accepting the credential for future operations;
- re-evaluate active relationships;
- revoke dependent permissions where policy requires;
- preserve historical uses;
- emit lifecycle events.

## 120. Evidence and emergency operations

Emergency access may create evidence under reduced normal conditions.

Emergency evidence must still preserve:

- emergency authority;
- reason;
- actor;
- scope;
- time;
- action;
- post-event review;
- subsequent reconciliation.

Emergency status does not erase the evidence contract.

## 121. Evidence and offline operation

Offline systems may collect evidence before reconnecting.

Offline evidence should preserve:

- local timestamp;
- device identity;
- sequence;
- local integrity;
- acquisition context;
- connectivity gap;
- upload time;
- reconciliation status.

Offline timestamps must not be silently treated as authoritative server time.

## 122. Evidence and device identity

Device identity is evidence about the device/source.

It is not automatically evidence of the human actor.

The platform must distinguish:

**DEVICE → PERSON**

from:

**DEVICE → OBSERVED ACTOR/SESSION**

The relationship requires its own governed evidence and verification.

## 123. Evidence and hand/palm/fingerprint/face/QR/NFC

These modalities may produce evidence about a defined authentication, verification, or access operation.

Examples:

- palm provider reports match;
- Face ID reports local authentication success;
- fingerprint authenticator succeeds;
- QR credential presented;
- NFC credential presented.

The modality result is not automatically:

- identity;
- authority;
- authorization;
- ownership.

The result must be interpreted through the relevant authentication/access contract.

## 124. Evidence package integrity

A package should have a manifest containing, where appropriate:

- package_id;
- evidence members;
- hashes;
- schema/version;
- provenance;
- creation time;
- package creator;
- scope;
- restrictions.

Package integrity protects package composition.

It does not prove every member is true.

## 125. Evidence chain integrity

For high-value investigations, LegaX may maintain an append-only chain of handling records.

Possible structure:

**prior_record_hash → custody/handling_record → current_record_hash**

This can make unauthorized history alteration detectable.

It must not be described as proof that the underlying event occurred.

## 126. Merkle/append-only integrity

Where scale or audit requirements justify it, LegaX may use append-only Merkle structures or equivalent commitments to make changes and inclusion auditable.

Such mechanisms can provide:

- inclusion proofs;
- consistency proofs;
- tamper-evidence.

They do not create semantic truth.

## 127. Evidence retention classes

Evidence should use governed retention classes such as:

- operational-short;
- security;
- financial;
- contractual;
- identity;
- health;
- investigation;
- legal-hold;
- archival;
- temporary-processing.

Actual durations belong to policy and jurisdiction-specific configuration.

## 128. Evidence classification

Sensitivity and evidential value are separate dimensions.

An evidence item may be:

- highly sensitive but low evidential value;
- low sensitivity but high evidential value;
- both high;
- both low.

Classification should not collapse these dimensions.

## 129. Evidence confidentiality

Confidentiality controls must preserve minimum necessary access.

A person with access to an event does not automatically receive access to all evidence referenced by that event.

A person with access to an evidence item does not automatically receive access to every related identity, payment, health, or location record.

## 130. Evidence integrity versus confidentiality

Encryption protects confidentiality.

Hashes/signatures/protected storage protect integrity.

Neither alone establishes truth.

These controls must remain conceptually separate.

## 131. Evidence availability

Evidence required for consequential accountability should have availability requirements appropriate to its purpose.

Availability failure is not evidence of absence.

Critical evidence may require:

- replication;
- backup;
- tested recovery;
- durable storage;
- disaster recovery;
- retention monitoring.

## 132. Evidence monitoring

Evidence infrastructure should monitor:

- ingestion failures;
- integrity failures;
- storage failures;
- unauthorized access;
- unusual export;
- retention violations;
- legal-hold violations;
- missing provenance;
- verification backlog;
- reconciliation backlog;
- corrupted records.

Monitoring itself produces operational evidence/events.

## 133. Evidence observability versus evidence

Metrics such as:

**“10,000 evidence reads today”**

are observability data.

They are not the individual evidence items.

Telemetry must not replace the accountable evidence record.

## 134. Evidence auditability

A high-value evidence item should be reconstructable:

**WHERE IT CAME FROM → HOW IT WAS ACQUIRED → HOW IT WAS PROTECTED → HOW IT WAS TRANSFORMED → WHO/WHAT USED IT → WHO/WHAT DISCLOSED IT → WHAT CHANGED → WHEN IT WAS DISPOSED**

Auditability is a property of the evidence lifecycle, not only a database log.

## 135. Evidence portability and interoperability

External exchange should preserve the semantic distinction between:

- evidence;
- claim;
- issuer/source;
- proof;
- status;
- verification;
- holder/presenter;
- context.

W3C Verifiable Credentials 2.0 provides a useful interoperable model for issuer claims, proofs, status and supporting evidence, but LegaX's Evidence Contract covers broader operational, physical, economic and investigative evidence.

## 136. Evidence package verification

When importing an evidence package:

**IMPORT → AUTHENTICATE SOURCE → VALIDATE SCHEMA → VERIFY INTEGRITY → REGISTER IDENTITY → PRESERVE PROVENANCE → CLASSIFY → APPLY ACCESS/RETENTION → AVAILABLE FOR GOVERNED USE**

Imported evidence should not be promoted to canonical state merely because the package is cryptographically valid.

## 137. Evidence source changes

If a provider changes schema, identity, API, signing key, or semantics, LegaX must preserve historical source interpretation.

Historical evidence should remain interpretable under the source/version that created it.

Current provider semantics must not silently rewrite historical evidence.

## 138. Key rotation

Cryptographic key rotation must preserve:

- historical signature;
- old key/certificate reference;
- verification status;
- new key;
- rotation event;
- trust chain.

Re-signing a record for migration must not be represented as though the new signature existed at the original event time.

## 139. Evidence time versus signature time

A signature time is not necessarily occurrence time.

Preserve both where relevant:

**occurrence_at ≠ signed_at ≠ acquired_at ≠ recorded_at**

## 140. Evidence and external time

Provider timestamps must remain identified as provider-supplied.

LegaX receipt time must remain separate.

If time conflicts materially, reconciliation rules determine interpretation.

## 141. Evidence and location

Location evidence may include:

- GPS;
- network location;
- device-reported location;
- facility observation;
- access point;
- provider location.

Location evidence is not automatically proof of:

- identity;
- authority;
- residence;
- ownership;
- presence at exact time.

Location uncertainty should be represented where material.

## 142. Evidence and resource state

A sensor can provide evidence of a resource state.

Example:

**temperature_sensor → 24.2°C**

This supports a measurement claim.

It does not automatically establish:

- equipment health;
- regulatory compliance;
- safety;
- ownership;
- authorization.

Those require additional rules/evidence.

## 143. Evidence and community governance

Community evidence may include:

- membership records;
- participation;
- community approvals;
- service interactions;
- incident records;
- facility observations.

Community governance evidence must respect community scope and individual privacy.

Community participation does not imply unrestricted access to member evidence.

## 144. Evidence and organizational governance

Organizations may generate:

- approvals;
- attestations;
- contracts;
- assignments;
- work records;
- financial records.

Organizational authority is scoped.

A document bearing an organization name is not automatically sufficient evidence of current authority.

## 145. Evidence and provider workers

Worker evidence may establish:

- engagement;
- task assignment;
- completion claim;
- acceptance;
- quality review.

Worker identity, provider affiliation, capability, and authority remain distinct.

## 146. Evidence and service lifecycle

Every LegaService should define its evidence catalog for:

- commands;
- state transitions;
- provider assertions;
- fulfillment;
- disputes;
- compensation;
- reconciliation;
- incidents.

No service should invent incompatible evidence semantics for shared concepts.

## 147. Evidence catalog

LegaX should maintain a governed evidence catalog containing:

- evidence type;
- version;
- owner;
- source classes;
- required provenance;
- integrity requirements;
- verification methods;
- sensitivity;
- retention class;
- legal-hold behavior;
- allowed uses;
- disclosure constraints;
- derivative rules;
- deprecation status.

## 148. Evidence schema evolution

Breaking evidence schema changes require versioning.

Semantic changes include:

- changing field meaning;
- changing requiredness;
- changing units;
- changing timestamp semantics;
- changing source semantics;
- changing verification meaning;
- changing status semantics.

Historical evidence must remain interpretable under its original schema/version.

## 149. Evidence contract and database design

The eventual database architecture should model at least the conceptual boundaries for:

- evidence identity;
- representation;
- source;
- provenance;
- claim links;
- event links;
- command/execution links;
- verification;
- integrity;
- custody;
- access/disclosure;
- lifecycle;
- retention;
- legal hold;
- dispute;
- correction/supersession;
- derivative relationships.

The final physical schema belongs to the database architecture gate.

## 150. Evidence contract and object storage

Large evidence representations should be stored in an appropriate governed evidence/object boundary, while metadata and relationships remain queryable.

The database should not be forced to hold every binary representation merely for convenience.

The exact storage architecture belongs to a later implementation gate.

## 151. Evidence and transactional consistency

When a state transition requires an evidence reference to exist atomically with the local state change, LegaX should use an appropriate transaction boundary.

External evidence acquisition cannot be made atomic with an external provider merely by wrapping the local database operation in a transaction.

Unknown external outcomes require reconciliation.

## 152. Evidence outbox/inbox relationship

Evidence lifecycle events should use the Phase 17 event contract.

For local changes:

**EVIDENCE STATE CHANGE + OUTBOX → SAME LOCAL TRANSACTION → DISPATCH**

For incoming evidence:

**INGESTION → INBOX/DEDUP → VALIDATION → PERSISTENCE → PROCESSING**

Duplicate delivery must not create duplicate evidence or duplicate consequential effects.

## 153. Idempotency

Evidence acquisition/ingestion must define idempotency where duplicate submissions are possible.

Preferred keys:

**source + source_record_id**

or:

**provider + provider_event_id**

or a defined acquisition identity.

Payload equality alone is not a sufficient universal deduplication strategy.

## 154. Concurrency

Concurrent operations may affect evidence.

Examples:

- two verification processes;
- simultaneous dispute resolution;
- competing corrections;
- retention job versus legal hold;
- disclosure versus revocation.

Material governance changes require version/concurrency control.

## 155. Legal hold versus deletion race

Before disposition:

**READ EVIDENCE VERSION → CHECK RETENTION → CHECK LEGAL HOLD → CHECK POLICY → AUTHORIZE → EXECUTE → RECORD**

A hold appearing after a stale check must be handled according to concurrency rules and may block disposition.

## 156. Evidence correction concurrency

Two corrections to the same evidence cannot silently overwrite each other.

Use:

**READ VERSION N → VALIDATE → AUTHORIZE → CONDITIONAL WRITE → VERSION N+1**

Conflict requires re-evaluation.

## 157. Evidence verification concurrency

A verification result must bind to the evidence representation/version actually verified.

If the evidence materially changes, the old verification must not silently apply to the new representation.

## 158. Evidence dependency invalidation

If a source or evidence item becomes:

- revoked;
- corrupted;
- contradicted;
- expired;
- withdrawn;

dependent verifications and decisions may require re-evaluation.

The system should identify dependencies where high-impact decisions rely on evidence.

## 159. Evidence replay

Reprocessing evidence is not the same as re-executing the original consequential action.

Replay may:

- reconstruct state;
- rerun analysis;
- validate historical processing.

Replay MUST NOT silently:

- charge a payment;
- unlock a door;
- create a booking;
- send a provider command;
- delete evidence.

Consequential side effects require a new governed command.

## 160. Evidence and compensation

If an evidence-related operation causes a consequential error, compensation is a new governed operation.

Example:

**incorrect disclosure → revoke access token/permission → notify/contain → create incident evidence**

Compensation does not erase the original disclosure.

## 161. Evidence and incidents

Security or integrity incidents involving evidence should produce:

- incident identity;
- affected evidence;
- scope;
- detection;
- containment;
- remediation;
- evidence of investigation;
- final resolution.

Incident evidence must itself be protected.

## 162. Evidence and regulatory reporting

Where reporting is required, the report should preserve:

- source evidence;
- transformation;
- report version;
- responsible authority;
- submission identity;
- submission time;
- recipient;
- response;
- correction history.

A submitted report is not automatically proof that the underlying facts are correct.

## 163. Evidence and human statements

Human statements are evidence of what the person reported.

They should preserve:

- declarant identity or protected reference;
- statement time;
- collection method;
- statement content;
- context;
- attestation where applicable;
- corrections;
- contradictions.

A human statement is not automatically established fact.

## 164. Evidence and communications

Communications may be evidence of what was communicated.

Preserve:

- sender/recipient references;
- time;
- channel;
- content representation;
- integrity;
- authorization for access;
- retention basis.

Communication evidence must respect privacy and legal constraints.

## 165. Evidence and recordings

Audio/video evidence should preserve:

- source device;
- capture time;
- location/context where permitted;
- file integrity;
- codec/format;
- transformations;
- access history;
- redactions.

A recording may show what was captured by the recording system, not necessarily every aspect of reality outside the frame/sensor limits.

## 166. Evidence and sensor calibration

Where measurement accuracy is material, preserve:

- device identity;
- calibration status;
- calibration version/date;
- measurement unit;
- uncertainty;
- environmental conditions;
- sensor firmware where relevant.

A measurement without known uncertainty may be unsuitable for a high-impact decision.

## 167. Evidence and provider reconciliation

Provider evidence should move through:

**RECEIVED → AUTHENTICATED → DEDUPLICATED → SCHEMA VALIDATED → SEMANTICALLY VALIDATED → STORED → RECONCILED → ACCEPTED/REJECTED/PENDING**

A provider's “success” status is not automatically LegaX canonical success.

## 168. Evidence and access controller reconciliation

Physical access evidence should distinguish:

**COMMAND SENT → CONTROLLER RECEIVED → CONTROLLER ACK → DEVICE STATE → PHYSICAL OBSERVATION**

Each step is separately evidenced.

If physical observation is absent, the final physical outcome may remain UNKNOWN.

## 169. Evidence and payment reconciliation

Payment evidence should distinguish:

**PAYMENT REQUEST → PROVIDER ATTEMPT → PROVIDER ACCEPTANCE → PROCESSING → SETTLEMENT → RECONCILIATION**

A timeout after provider acceptance is not automatically a failed payment.

The evidence layer preserves the uncertainty.

## 170. Evidence and booking reconciliation

Booking evidence should distinguish:

**AVAILABILITY OBSERVATION → HOLD → RESERVATION → PROVIDER CONFIRMATION → FULFILLMENT**

A search result is not evidence of a confirmed booking.

A provider acknowledgement is not necessarily fulfillment.

## 171. Evidence and delivery

Delivery evidence may include:

- courier scan;
- GPS observation;
- recipient acknowledgement;
- photo;
- provider status;
- customer confirmation.

These evidence items may disagree.

The service must apply its reconciliation policy rather than blindly choosing one.

## 172. Evidence and work acceptance

Work evidence should distinguish:

**TASK ASSIGNED → WORK PERFORMED CLAIM → DELIVERABLE SUBMITTED → REVIEW → ACCEPTED/REJECTED → PAYMENT**

Payment evidence must not erase a quality dispute.

## 173. Evidence and awards

Award evidence may include:

- eligibility;
- criteria;
- submitted evidence;
- evaluator result;
- review;
- approval;
- issuance;
- redemption.

A recommendation or score is not automatically an award decision.

## 174. Evidence and advertising

Advertising evidence may include:

- consent;
- eligibility;
- campaign policy;
- delivery;
- impression;
- interaction;
- conversion.

An inferred audience attribute is not equivalent to explicit consent.

## 175. Evidence and network services

Network evidence may include:

- provisioning;
- credential issuance;
- connection;
- usage;
- outage;
- restoration.

Usage telemetry is not automatically billing truth.

## 176. Evidence and health coordination

Health evidence may include:

- appointment;
- encounter metadata;
- referral;
- consent;
- provider statement;
- clinical record reference.

LegaX must not turn coordination evidence into clinical conclusions without appropriate clinical authority and governance.

## 177. Evidence and market commerce

Market evidence may include:

- listing;
- offer;
- inventory;
- order;
- shipment;
- delivery;
- return;
- refund;
- dispute.

Each has distinct evidential meaning.

## 178. Evidence and community facilities

Facility evidence may include:

- reservation;
- access;
- occupancy;
- maintenance;
- inspection;
- incident.

Occupancy evidence does not automatically establish membership or ownership.

## 179. Evidence and resource ownership

Evidence supporting ownership should preserve:

- issuer/source;
- instrument/document;
- effective time;
- jurisdiction;
- parties;
- scope;
- verification.

Ownership is a relationship established by the applicable governing model, not by evidence alone.

## 180. Evidence and authority

Evidence may support an authority assignment.

It does not itself become authority.

The chain is:

**EVIDENCE → VERIFICATION → AUTHORITY ASSIGNMENT → AUTHORIZATION**

## 181. Evidence and capability

Evidence may support a capability claim.

Capability remains distinct from authority.

A verified skill does not automatically grant permission to perform a protected action.

## 182. Evidence and policy decisions

Evidence may be an input to policy evaluation.

Policy must define how evidence states affect outcomes:

- permit;
- deny;
- defer;
- review;
- limit;
- unknown.

A missing evidence item must not be silently treated as a positive fact.

## 183. Evidence and automation

Automation may process evidence only within its authorized scope.

Automated evidence processing must preserve:

- processor identity;
- version;
- inputs;
- outputs;
- policy;
- errors;
- confidence/uncertainty;
- downstream effects.

Automation does not remove accountability.

## 184. Evidence catalog ownership

Every evidence type has an owner responsible for:

- semantic definition;
- schema;
- provenance requirements;
- verification rules;
- retention;
- security classification;
- allowed use;
- lifecycle;
- compatibility.

## 185. Evidence contract readiness gate

An evidence type is implementation-ready only when it can answer:

1. What claim or occurrence can this evidence support?
2. What is its evidence_id?
3. What is its evidence_type/version?
4. Who/what is the source?
5. What is the source authority/scope?
6. How was it acquired?
7. When was it acquired?
8. When did the underlying occurrence happen?
9. How is time uncertainty represented?
10. What is the original representation?
11. What are the content hashes/integrity controls?
12. What transformations occurred?
13. Which derivatives exist?
14. What is the chain of custody?
15. What verification method applies?
16. Who/what verified it?
17. What exactly was verified?
18. What is the verification scope?
19. What are the limitations?
20. How fresh is it?
21. When does it expire for the intended purpose?
22. How can it be revoked/withdrawn/superseded?
23. How can it be disputed?
24. How are contradictory evidence items handled?
25. What events does it support/challenge?
26. Which authorization/command/execution does it support?
27. Which identity/resource/provider is it related to?
28. What sensitivity classification applies?
29. Who may access it?
30. What disclosure is allowed?
31. What retention class applies?
32. Can legal hold apply?
33. How is disposition authorized?
34. How are copies/backups handled?
35. What happens if integrity verification fails?
36. What happens if evidence is lost?
37. What happens if source semantics change?
38. What happens if supporting evidence is revoked?
39. How is AI-derived processing represented?
40. How is the complete provenance chain reconstructed?

If any material answer is ambiguous, the evidence type is not implementation-ready.

## 186. Contradiction tests

### A — Provider settlement assertion

Provider says “settled.”

**Required:** preserve provider evidence and reconcile; do not automatically establish LegaX settlement.

### B — Controller acknowledgement

Door controller acknowledges unlock command.

**Required:** record acknowledgement; physical outcome remains separate unless defined evidence establishes it.

### C — Duplicate evidence

Same provider record arrives twice.

**Required:** deduplicate by stable source/event identity; no duplicate business effect.

### D — Conflicting sources

Two trusted sources disagree.

**Required:** preserve both; apply reconciliation; allow UNKNOWN or review.

### E — Stale credential

Credential was valid at capture but revoked later.

**Required:** preserve historical evidence and current status separately.

### F — OCR conflict

OCR extracts a name that differs from the visible document.

**Required:** preserve original document; mark extraction discrepancy; require defined verification.

### G — AI extraction

AI extracts a date of birth.

**Required:** record AI-derived extraction separately; do not treat it as verified fact without appropriate verification.

### H — Evidence correction

Metadata is found incorrect.

**Required:** correction/supersession record; no silent historical rewrite.

### I — Legal hold

Retention job wants to delete evidence under active hold.

**Required:** hold blocks disposition within scope.

### J — Missing telemetry

No sensor event was received.

**Required:** do not infer that the physical event did not occur.

### K — Signature valid

Digital signature validates.

**Required:** establish signature integrity under the trust model; do not automatically establish truth of all claims.

### L — Hash mismatch

Stored representation hash differs from recorded hash.

**Required:** integrity failure; preserve incident/evidence state; do not silently replace.

### M — Backup restore

Evidence restored from backup.

**Required:** verify integrity/provenance; backup does not become a new occurrence.

### N — Redaction

Sensitive field is removed for disclosure.

**Required:** create derivative/redacted representation linked to original.

### O — Expiry

Evidence expires for access authorization.

**Required:** stop relying on it for that purpose; preserve historical record.

### P — Revocation

Credential evidence is revoked.

**Required:** re-evaluate dependent permissions where policy requires; do not erase historical use.

### Q — Device identity

A device submits evidence.

**Required:** device is source evidence, not automatically the human actor.

### R — Location

GPS places a device near a building.

**Required:** do not automatically establish person presence, identity, ownership, or authority.

### S — Payment timeout

Provider response times out after request.

**Required:** UNKNOWN/reconciliation unless evidence establishes failure.

### T — Work payment

Worker was paid.

**Required:** payment evidence does not automatically establish satisfactory work.

### U — Evidence access

Administrator opens sensitive evidence.

**Required:** authorization and audit remain required.

### V — Disputed evidence

Subject disputes a record.

**Required:** mark dispute and preserve original evidence and challenge.

### W — Correlation

Two records share correlation_id.

**Required:** do not infer causation solely from correlation.

### X — Replay

Historical evidence is replayed.

**Required:** reconstruction/analysis may occur; no consequential side effect without a new governed command.

## 187. Evidence integrity invariants

1. Every evidence item has a stable evidence identity.
2. Evidence identity is distinct from claim identity.
3. Evidence identity is distinct from event identity.
4. Evidence identity is distinct from verification identity.
5. Evidence identity is distinct from content hash.
6. Every evidence type has defined semantics.
7. Every evidence type has an owner.
8. Source identity is preserved.
9. Source authority is scoped.
10. Source trust is not universal truth.
11. Claims and evidence remain distinct.
12. Assertions and facts remain distinct.
13. Observations and inferences remain distinct.
14. Verification is scoped.
15. Verification does not create authority.
16. Evidence does not create authority.
17. Evidence does not create authorization.
18. Evidence does not automatically create identity.
19. Evidence does not automatically create participation.
20. Evidence does not automatically create ownership.
21. Evidence does not automatically create a relationship.
22. Evidence provenance is preserved.
23. Acquisition is attributable.
24. Original representations remain identifiable where preservation requires.
25. Derivatives reference their source.
26. Transformations are attributable.
27. Transformation versions are preserved where material.
28. Content integrity is separately represented.
29. Cryptographic integrity does not prove semantic truth.
30. Chain of custody is separately represented.
31. Custody transfer is attributable.
32. Evidence access is authorized.
33. Evidence disclosure is authorized and recorded.
34. Administrative status does not grant unrestricted evidence access.
35. Evidence is purpose-bound.
36. Evidence quality is multidimensional.
37. Fitness for purpose is explicit.
38. Legal admissibility is not universally guaranteed by LegaX.
39. Jurisdictional requirements remain explicit.
40. Occurrence time is distinct from acquisition time.
41. Acquisition time is distinct from recording time.
42. Verification time is distinct from occurrence time.
43. Time uncertainty is preserved where material.
44. Evidence freshness is purpose-relative.
45. Evidence expiry is distinct from historical falsity.
46. Revocation is distinct from deletion.
47. Retraction is distinct from deletion.
48. Supersession preserves history.
49. Correction preserves history where required.
50. Disputes preserve the challenged evidence.
51. Contradictory evidence can coexist.
52. Reconciliation is explicit.
53. UNKNOWN is first-class.
54. Missing evidence is not evidence of absence.
55. Missing telemetry is not proof of non-occurrence.
56. Duplicate evidence must be safely deduplicated.
57. Replay must be controlled.
58. Evidence ingestion is protected against spoofing and replay.
59. Provider assertions retain provider identity.
60. Provider acceptance is not automatically canonical settlement.
61. Controller acknowledgement is not automatically physical outcome.
62. Payment evidence preserves settlement distinction.
63. Access evidence preserves enforcement distinction.
64. Identity evidence does not automatically create authorization.
65. Authentication evidence does not automatically create authority.
66. Capability evidence does not automatically create permission.
67. Ownership evidence does not automatically create access.
68. Participation evidence does not automatically create administration.
69. AI output is not automatically factual evidence.
70. AI-derived evidence preserves model provenance.
71. AI transformations do not replace originals.
72. AI cannot manufacture evidence.
73. AI cannot erase contradictory evidence.
74. AI cannot approve its own consequential use.
75. Evidence dependencies are explicit where high-impact.
76. Evidence changes may trigger re-evaluation.
77. Historical decisions remain reconstructable.
78. Evidence lifecycle transitions are governed.
79. Evidence retention is explicit.
80. Retention is not indefinite by default.
81. Legal hold is distinct from retention.
82. Legal hold blocks disposition within scope.
83. Disposition is authorized.
84. Disposition is recorded.
85. Backups and replicas have defined lifecycle semantics.
86. Storage migration preserves identity and provenance.
87. Key rotation preserves historical verification.
88. Signature time is distinct from occurrence time.
89. Redactions create derivatives.
90. Export creates governed copies.
91. Cross-domain evidence is purpose-scoped.
92. Services receive scoped references rather than unrestricted evidence.
93. Evidence catalog semantics are governed.
94. Evidence schemas are versioned.
95. Historical schema meaning remains interpretable.
96. Evidence events follow Phase 17.
97. Evidence lifecycle changes are attributable.
98. Evidence access generates accountability records where required.
99. Evidence security does not bypass normal authorization.
100. Evidence infrastructure is itself governed.
101. Every consequential decision using evidence identifies material evidence.
102. Policy version is preserved where material.
103. Verification method/version is preserved where material.
104. Evidence integrity failures remain visible.
105. Evidence loss remains visible.
106. Evidence corruption does not silently become replacement evidence.
107. A backup does not become a new occurrence.
108. Reprocessing does not equal side-effect execution.
109. Compensation does not erase evidence of the original operation.
110. No evidence item may claim stronger truth than its provenance and verification support.
111. No event may be treated as evidence of every payload claim without explicit semantics.
112. No evidence may silently broaden authority.
113. No evidence may silently change canonical state outside its domain transition contract.
114. No stale evidence may silently satisfy a freshness requirement.
115. No disputed evidence may silently be treated as undisputed where policy requires otherwise.
116. No source may be treated as universally authoritative.
117. No integrity mechanism may be described as proof of semantic truth.
118. No legal-admissibility guarantee may be fabricated.
119. No consequential evidence operation is implementation-ready without a failure and reconciliation path.
120. Every high-impact evidence type must have a complete provenance and lifecycle model.

## 188. Relationship to Phase 11 — Events, Evidence & Intelligence

Phase 11 established the semantic distinction:

**Event ≠ Evidence ≠ Truth ≠ Intelligence.**

Phase 18 operationalizes the Evidence portion.

Phase 18 strengthens:

- provenance;
- identity;
- custody;
- integrity;
- verification;
- quality;
- retention;
- disclosure;
- dispute;
- correction;
- reconciliation;
- AI-derived evidence.

Phase 18 does not redefine Phase 11.

## 189. Relationship to Phase 13 — Canonical Domain Model

Phase 13 established the canonical entities and boundaries.

Evidence attaches to those entities through typed, scoped relationships.

Evidence does not become a universal aggregate.

The domain owning the underlying state remains authoritative for that state.

## 190. Relationship to Phase 14 — Canonical Relationship Model

Phase 14 established:

- relationship ownership;
- scope;
- lifecycle;
- provenance;
- evidence/inference boundaries.

Phase 18 supplies the evidence layer supporting relationship claims.

**Evidence → Relationship** is not automatic.

A governed verification/relationship process remains required.

## 191. Relationship to Phase 15 — Canonical State Machines

Phase 15 defined:

**STATE → TRANSITION REQUEST → VALIDATION → PRECONDITIONS → VERIFICATION/REVIEW → AUTHORIZATION → EXECUTION → NEW STATE → EVENT → EVIDENCE → RECONCILIATION**

Phase 18 makes the Evidence portion implementation-grade.

Evidence may be:

- transition precondition;
- verification input;
- execution evidence;
- outcome evidence;
- reconciliation evidence;
- dispute evidence.

## 192. Relationship to Phase 16 — Command & Execution Contract

Phase 16 requires consequential operations to be reconstructable.

Phase 18 provides the evidence needed to reconstruct:

**ACTOR → AUTHORIZATION → COMMAND → ATTEMPT → OUTCOME → STATE → EVENT → EVIDENCE → RECONCILIATION**

Phase 18 does not replace command execution.

## 193. Relationship to Phase 17 — Canonical Event Contract

Phase 17 defines the event.

Phase 18 defines evidence supporting, challenging, explaining, or preserving that event.

The relationship is:

**EVENT → EVIDENCE**

not:

**EVENT = EVIDENCE**

Evidence lifecycle events follow Phase 17.

Evidence payloads follow Phase 18.

## 194. Relationship to LegaServices

Every LegaService must define evidence for its consequential operations.

At minimum each service should define:

- command evidence;
- authorization evidence;
- state-transition evidence;
- provider assertion evidence;
- outcome evidence;
- reconciliation evidence;
- dispute evidence;
- compensation evidence;
- access/disclosure evidence where relevant.

Shared concepts must use shared LegaX semantics.

## 195. Implementation boundary

This document defines the canonical semantic and architectural Evidence Contract.

It does not yet prescribe:

- database tables;
- a specific object-storage provider;
- a specific event bus;
- a specific forensic tool;
- a specific cryptographic algorithm;
- a specific evidence-management product;
- a specific policy engine;
- frontend implementation;
- mobile implementation;
- deployment architecture.

Later implementation must be derived from this contract and tested against its invariants.

## 196. Research basis

This contract was checked against mature and current standards/guidance including:

- NIST digital evidence and forensic guidance, especially identification, collection, acquisition and preservation principles.
- ISO/IEC 27037 guidance for identification, collection, acquisition and preservation of digital evidence.
- W3C Verifiable Credentials Data Model 2.0 for issuer claims, proofs, status, evidence references and privacy-aware verification.
- RFC 9162 Certificate Transparency principles for append-only logs, Merkle-tree integrity and consistency proofs.
- NIST AI Risk Management Framework and related AI evaluation/provenance principles.
- LegaX Phases 01–17 as the primary internal semantic contract.

Research informs the architecture; it does not override LegaX's canonical definitions.

## 197. Final architectural rules

### Rule 1 — Evidence is not truth

**EVIDENCE SUPPORTS/CHALLENGES A CLAIM; IT DOES NOT AUTOMATICALLY BECOME THE CLAIM'S TRUTH.**

### Rule 2 — Provenance is part of evidence

**NO SUFFICIENT PROVENANCE → NO HIGH-CONFIDENCE USE.**

### Rule 3 — Integrity is not truth

**INTEGRITY PROVES PROTECTION OF A REPRESENTATION, NOT THE REAL-WORLD TRUTH OF ITS CONTENT.**

### Rule 4 — Verification is scoped

**VERIFIED FOR PURPOSE X ≠ UNIVERSALLY VERIFIED.**

### Rule 5 — Evidence does not create authority

**EVIDENCE → AUTHORIZATION INPUT, NOT AUTOMATIC AUTHORITY.**

### Rule 6 — Original history is preserved

**CORRECTION/SUPERSESSION/RETRACTION MUST NOT SILENTLY ERASE HISTORICAL ACCOUNTABILITY.**

### Rule 7 — Unknown remains unknown

**INSUFFICIENT OR CONFLICTING EVIDENCE → UNKNOWN/INDETERMINATE, NOT INVENTED CERTAINTY.**

### Rule 8 — Access to evidence is access

**READING, EXPORTING OR DISCLOSING SENSITIVE EVIDENCE REQUIRES GOVERNED AUTHORIZATION.**

### Rule 9 — AI remains subordinate

**AI MAY PROCESS EVIDENCE; AI MUST NOT MANUFACTURE, ERASE, OR SELF-AUTHORIZE EVIDENCE-BASED CONSEQUENCES.**

### Rule 10 — Legal admissibility is not fabricated

**LEGAX MAY PRESERVE THE RECORDS NEEDED TO SUPPORT EVIDENTIAL FITNESS AND HANDLING; APPLICABLE LAW DETERMINES LEGAL ADMISSIBILITY.**

### Final evidence rule

**NO PROVENANCE → NO TRUSTED INTERPRETATION.**

**NO INTEGRITY → NO TRUSTED REPRESENTATION.**

**NO SCOPE → NO UNBOUNDED VERIFICATION.**

**NO AUTHORIZATION → NO EVIDENCE ACCESS/DISCLOSURE.**

**NO RECONCILIATION → NO PROMOTION OF MATERIAL UNKNOWN OUTCOME TO CANONICAL FACT.**

**NO LIFECYCLE → NO PRODUCTION-READY EVIDENCE TYPE.**

**NO EVIDENCE OF THE REQUIRED QUALITY → NO CLAIM OF SUFFICIENT SUPPORT.**

**NO LEGITIMATE GOVERNANCE → NO CONSEQUENTIALLY USEFUL EVIDENCE OPERATION.**

**Status:** Foundational Evidence Contract — evidence identity, provenance, acquisition, chain of custody, integrity, verification, quality, fitness, temporal semantics, correction, supersession, dispute, retention, legal hold, privacy, cross-domain use, physical/economic/identity/access evidence, AI-derived evidence, reconciliation, security, lifecycle and implementation readiness defined.
