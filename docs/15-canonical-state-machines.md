# LegaX — Canonical State Machines

## 15 — Canonical State Machines

**Status:** Foundational architecture contract — normative lifecycle and transition semantics; implementation intentionally deferred.

## 1. Purpose

Phase 14 established what relationships exist, who owns them, their scope, lifecycle and inference boundaries. Phase 15 establishes how governed objects change state without silently bypassing authority, policy, verification, concurrency, evidence or reconciliation.

A state machine is not a UI status list. It is a governed contract defining:

- valid states;
- valid transitions;
- transition initiator;
- transition authority;
- preconditions;
- required verification;
- required review/approval;
- policy evaluation;
- effective time;
- expiry;
- suspension;
- revocation;
- execution;
- side effects;
- event/evidence production;
- failure semantics;
- unknown outcomes;
- concurrency behavior;
- idempotency;
- reconciliation;
- historical reconstruction.

The canonical transition pattern is:

**CURRENT STATE → TRANSITION REQUEST → VALIDATION → PRECONDITIONS → VERIFICATION/REVIEW → AUTHORIZATION → TRANSITION EXECUTION → NEW STATE → EVENT → EVIDENCE → RECONCILIATION IF REQUIRED**

No consequential state may be changed by arbitrary field mutation when the state machine defines a governed transition.

## 2. State machine grammar

A canonical state machine contains:

**StateMachine + State + Transition + TransitionRequest + Preconditions + Verification + Approval + Authorization + Execution + Outcome + Event + Evidence + Reconciliation**

A transition is:

**FROM STATE → TRANSITION → TO STATE**

with:

- transition ID/type;
- machine/version;
- subject;
- actor;
- requested_at;
- effective_at;
- expiry where applicable;
- authorization reference;
- policy version;
- preconditions;
- required approvals;
- verification requirements;
- concurrency/version condition;
- idempotency key;
- command/correlation/causation identifiers;
- execution result;
- resulting state;
- event/evidence references.

## 3. State is a governed fact

State represents the current canonical condition of an object under its owning domain.

State is not:

- a UI label;
- an inference without qualification;
- a stale cached value;
- an external assertion silently copied into canonical state;
- an authorization decision;
- an event by itself.

A state must have:

- owner;
- state machine/version;
- status;
- effective time;
- source/provenance;
- version;
- lifecycle history where required.

## 4. State categories

LegaX should distinguish state categories rather than creating one universal state enum.

### 4.1 Lifecycle state
Examples: DRAFT, ACTIVE, SUSPENDED, CLOSED.

### 4.2 Verification state
Examples: UNVERIFIED, PENDING_VERIFICATION, VERIFIED, REJECTED, EXPIRED.

### 4.3 Authorization state
Examples: NOT_EVALUATED, PENDING, ALLOWED, DENIED, EXPIRED, REVOKED.

### 4.4 Execution state
Examples: NOT_STARTED, ACCEPTED, PROCESSING, SUCCEEDED, FAILED, UNKNOWN.

### 4.5 Reconciliation state
Examples: NOT_REQUIRED, PENDING, RECONCILED, DISCREPANCY, ESCALATED.

### 4.6 Evidence state
Examples: CAPTURED, QUALITY_CHECK, VERIFIED, SUPERSEDED, RETAINED, EXPIRED.

### 4.7 Relationship state
Examples: PROPOSED, PENDING, ACTIVE, SUSPENDED, EXPIRED, REVOKED, CLOSED, SUPERSEDED.

These dimensions must not be collapsed merely to reduce columns.

## 5. Canonical transition protocol

Every consequential transition follows:

### Step 1 — Identify subject
Resolve the exact object whose state may change.

### Step 2 — Resolve current state
Read the canonical current state and version.

### Step 3 — Resolve requested transition
Identify the exact transition type and target state.

### Step 4 — Validate structure
Validate required fields, identifiers, state-machine version, command format and transition availability.

### Step 5 — Evaluate preconditions
Check conditions such as:

- current state;
- object existence;
- required relationship;
- resource availability;
- freshness;
- prerequisite state;
- capacity;
- required evidence;
- risk conditions;
- external provider status.

### Step 6 — Verification
Perform required evidence or fact verification.

Verification may establish that a prerequisite is sufficiently supported. Verification does not itself grant authority.

### Step 7 — Review/approval
If policy requires human or governed review, the transition remains pending until required approval exists.

### Step 8 — Authorization
Evaluate whether the actor is authorized to request and/or execute this transition under current authority, policy, scope, time and conditions.

### Step 9 — Concurrency gate
Ensure the state/version used for evaluation is still current.

### Step 10 — Execute
Perform the transition and required side effects.

### Step 11 — Record resulting state
Persist the new canonical state/version atomically within the domain consistency boundary.

### Step 12 — Emit event
Record the transition occurrence with command, correlation, causation and state-version references.

### Step 13 — Preserve evidence
Capture evidence required to support the transition.

### Step 14 — Reconcile
If an external system or asynchronous physical process is involved, reconcile the reported outcome with canonical state.

## 6. Transition authority

The right to cause a transition is not automatically derived from the ability to see or reach the object.

A transition requires an explicit authority path appropriate to its domain.

Canonical form:

**Actor → Authentication → Identity → Participation/Context → Authority → Authorization → TransitionRequest → Execution**

The transition definition MUST specify whether it requires:

- actor authority;
- delegated authority;
- system authority;
- provider authority;
- approval;
- multi-party approval;
- emergency authority;
- automated bounded authority.

A service worker may execute a transition only when the relevant authority and scope permit it.

## 7. Preconditions

Preconditions are facts that must hold before execution.

Examples:

- current state = ACTIVE;
- relationship = ACTIVE;
- required evidence = VERIFIED;
- required approval = APPROVED;
- resource = AVAILABLE;
- payment = AUTHORIZED;
- booking hold = valid;
- device = enrolled;
- provider = ACTIVE;
- capability = available;
- policy version = effective;
- required external assertion = fresh enough.

A failed precondition MUST prevent the transition unless an explicitly governed exception applies.

Precondition evaluation must distinguish:

- false;
- missing;
- stale;
- unknown;
- indeterminate.

**Unknown ≠ false.**

For consequential actions, unresolved unknown conditions should normally result in PENDING or INDETERMINATE rather than unsafe success.

## 8. Verification requirements

Verification answers whether defined evidence or facts satisfy defined criteria.

Examples:

- identity evidence verification;
- credential verification;
- provider credential verification;
- document verification;
- payment provider response verification;
- resource-state verification;
- work-deliverable verification.

Verification MUST be:

- attributable;
- scoped;
- time-aware;
- criteria-aware;
- provenance-preserving;
- lifecycle-aware.

Verification does not create authority.

## 9. Approval requirements

Approval is required where policy or lifecycle semantics require an authorized human or governed actor to approve a transition.

Approval must identify:

- approver;
- authority basis;
- scope;
- transition/object;
- policy version;
- time;
- conditions;
- status;
- evidence.

Approval cannot be silently reused for a materially different object, target, scope or transition.

Where separation of duties applies, the requester and approver MUST be independently eligible.

## 10. Authorization requirements

Authorization evaluates the concrete transition operation.

Canonical input:

**Actor + AuthenticationSession + Identity + Participation + Context + Role + Capability + Authority + Policy + CurrentState + RequestedTransition + Target + Preconditions + Security/Risk + ApprovalState + Time/Jurisdiction**

Possible outcomes:

- ALLOW;
- DENY;
- INDETERMINATE;
- PENDING_REQUIRES_APPROVAL.

A transition authorization is bounded to the defined operation and does not become permanent authority.

Policy engines should preserve the distinction between decision evaluation and enforcement. XACML provides a useful reference separation between policy administration, decision and enforcement points, and explicitly supports Permit, Deny, Indeterminate and NotApplicable-style outcomes. LegaX may use equivalent semantics without requiring XACML as an implementation dependency.

## 11. Transition execution

Execution is the point where the authorized state change is attempted.

Execution MUST NOT be confused with:

- authorization;
- provider acceptance;
- controller acknowledgement;
- request receipt.

Execution states should distinguish at least:

**NOT_STARTED → ACCEPTED → PROCESSING → SUCCEEDED**

with exceptional:

**FAILED / UNKNOWN / CANCELLED**

For asynchronous external operations:

**AUTHORIZED → SUBMITTED → PROCESSING → PROVIDER_ACCEPTED → RECONCILIATION_PENDING → RECONCILED**

Provider acceptance MUST NOT automatically become canonical success.

## 12. Failure and unknown outcomes

LegaX must distinguish:

### Failed
The system has sufficient evidence that the requested transition did not complete.

### Unknown
The system cannot determine whether the transition completed.

### Indeterminate
The system cannot safely evaluate the conditions or decision needed to determine whether transition is permitted or valid.

### Pending
A known prerequisite remains outstanding.

### Reconciliation required
The transition may have occurred externally, but canonical state cannot yet be safely aligned.

These states are materially different.

**UNKNOWN MUST NOT be automatically converted to FAILED.**

**UNKNOWN MUST NOT be automatically converted to SUCCEEDED.**

## 13. Retry and idempotency

Every consequential transition command should have:

- command ID;
- idempotency key;
- actor;
- transition type;
- target/object;
- expected state/version;
- correlation ID;
- causation ID.

A repeated request with the same idempotency identity must not create duplicate consequential effects.

The implementation must define whether a repeated request:

- returns the existing outcome;
- resumes processing;
- returns current state;
- requires reconciliation;
- is rejected as conflicting.

Idempotency keys MUST NOT be reused for a materially different command.

## 14. Concurrency control

State transitions are evaluated against a specific state version.

Canonical pattern:

**READ VERSION N → VALIDATE → AUTHORIZE → CONDITIONAL WRITE VERSION N → VERSION N+1**

If the state has changed:

**VERSION MISMATCH → RE-EVALUATE**

The system MUST NOT execute a transition against stale state merely because the request was previously authorized.

Examples:

- two users attempt to reserve the same capacity;
- two administrators change the same authority;
- a resource becomes unavailable during authorization;
- a payment is cancelled while settlement is processing;
- an access grant is revoked while an access request is executing.

Authorization may need to be re-evaluated after material state change.

## 15. Atomicity boundaries

Within a domain consistency boundary, the following should be atomically consistent where technically appropriate:

- transition acceptance;
- current-state/version update;
- command idempotency record;
- transition record;
- domain event/outbox record.

External side effects MUST NOT be assumed to participate in the same database transaction.

For external operations use:

**local commit → durable command/event → external effect → provider response → reconciliation**

or another explicitly governed pattern.

## 16. Expiry

Expiry is a time-based lifecycle boundary.

Every expirable object must define:

- expiry timestamp or rule;
- timezone/time semantics;
- whether expiry is automatic or requires evaluation;
- whether effects stop immediately or at next enforcement point;
- whether expiry produces an event;
- whether renewal is possible;
- whether renewal creates a new version/relationship.

Expiry is not revocation.

**Expired** means the effective period naturally ended.

**Revoked** means the relationship or authorization was intentionally invalidated.

## 17. Suspension

Suspension temporarily prevents normal use while preserving historical identity and relationship continuity.

A suspended object must define:

- reason/category;
- authority;
- scope;
- start time;
- expected review/resolution;
- whether emergency operations remain available;
- dependent permissions affected;
- restoration conditions.

Suspension is not deletion and is not necessarily revocation.

## 18. Revocation

Revocation intentionally invalidates an otherwise active relationship, authority, credential, grant or other governed object.

Revocation must preserve:

- revoking actor;
- authority;
- reason;
- effective time;
- affected scope;
- dependent effects;
- event/evidence;
- propagation status.

Revocation may require immediate enforcement for high-risk resources.

Historical events remain.

## 19. Emergency transitions

Emergency transitions are exceptional state changes with explicit governance.

They require:

- defined emergency condition;
- eligible emergency actor;
- minimum required scope;
- explicit duration;
- logging;
- evidence;
- post-event review;
- automatic expiry where appropriate.

Emergency authority MUST NOT become permanent authority merely because it was exercised.

## 20. State machine versioning

State machines are versioned.

A transition definition MUST identify:

- machine ID;
- semantic version;
- effective period;
- owner;
- approved status.

Existing objects must remain interpretable against the state machine version under which their transitions occurred.

A new version MUST NOT silently reinterpret historical state transitions.

Migration between state-machine versions requires a governed migration transition or explicit compatibility mapping.

## 21. State transition event model

Every consequential transition should produce an event containing:

- event ID;
- transition ID;
- object ID;
- machine/version;
- from state;
- requested transition;
- to state;
- actor;
- authority/authorization reference;
- command ID;
- correlation ID;
- causation ID;
- occurred_at;
- effective_at;
- execution outcome;
- provenance;
- schema version.

The event records the transition occurrence; evidence supports claims about it.

## 22. Evidence model for transitions

Transition evidence may include:

- approval record;
- identity/credential evidence;
- document;
- provider response;
- device/controller result;
- resource observation;
- payment record;
- contract;
- work evidence;
- human review;
- system log;
- cryptographic proof where applicable.

Evidence MUST identify what claim it supports.

A transition event is not automatically proof of the underlying external fact.

## 23. External provider transitions

External systems create a special state boundary.

Canonical model:

**LegaX Intent → Authorization → External Command → Provider State → Provider Evidence → Reconciliation → Canonical State**

External states must remain mapped, not blindly copied.

The mapping should define:

- external state;
- canonical equivalent;
- confidence/acceptance criteria;
- freshness;
- terminal/non-terminal meaning;
- retry behavior;
- unknown handling;
- dispute handling.

## 24. Physical-world transitions

Physical resources may require:

**Authorization → AccessDecision → EnforcementCommand → Controller/Device → Physical Observation → ResourceState**

A controller acknowledgement is an execution signal.

A sensor observation may be stronger evidence of resulting physical state, depending on the resource and assurance model.

LegaX MUST NOT claim a physical state solely because a command was issued.

## 25. Relationship state machines

Relationships defined in Phase 14 require their own lifecycle.

Generic relationship machine:

**PROPOSED → PENDING → ACTIVE → SUSPENDED → EXPIRED / REVOKED → CLOSED / SUPERSEDED**

Valid transitions are relationship-specific.

Examples:

- provider onboarding;
- worker engagement;
- community participation;
- unit occupancy;
- authority assignment;
- device enrollment;
- service subscription;
- reservation.

A relationship ending does not erase historical events/evidence.

## 26. Identity state machine

Identity lifecycle may include:

**UNCLAIMED → PROVISIONAL → VERIFIED → ACTIVE → RESTRICTED → SUSPENDED → REVOKED/RETIRED → ARCHIVED**

Not every identity requires every state.

Identity verification MUST NOT imply authorization.

Identity retirement MUST preserve required historical references.

Duplicate/conflicting identity resolution is a governed process, not an arbitrary merge.

## 27. Account state machine

Canonical account states:

**PENDING → ACTIVE → RESTRICTED → SUSPENDED → LOCKED → RECOVERY_REQUIRED → COMPROMISED → DEACTIVATED → CLOSED**

Transitions require security controls appropriate to risk.

Examples:

- failed authentication may trigger LOCKED;
- security compromise may trigger COMPROMISED;
- verified recovery may move RECOVERY_REQUIRED → ACTIVE;
- closure must not erase audit obligations.

Account state does not define participant authority.

## 28. Authentication session state machine

A session may follow:

**CREATED → AUTHENTICATING → AUTHENTICATED → STEP_UP_REQUIRED → ACTIVE → EXPIRED / REVOKED / TERMINATED**

An authentication session must have bounded assurance and lifetime.

A session may become insufficient for a higher-risk action without becoming invalid for all lower-risk operations.

Authentication state never directly creates authority.

## 29. Authority assignment state machine

Canonical:

**PROPOSED → PENDING_APPROVAL → ACTIVE → SUSPENDED → REVOKED / EXPIRED → CLOSED**

Transitions must preserve:

- authority source;
- holder;
- scope;
- conditions;
- effective time;
- approver where required;
- delegation;
- evidence.

Authority activation requires required governance and authorization.

## 30. Authorization decision state machine

Authorization is generally short-lived and request-bound:

**REQUESTED → EVALUATING → ALLOWED / DENIED / INDETERMINATE / PENDING → EXPIRED / CONSUMED / REVOKED**

An ALLOWED decision may be:

- single-use;
- bounded-use;
- time-limited;
- condition-bound.

Authorization MUST NOT silently become a reusable authority assignment.

## 31. Access state machine

Access request:

**REQUESTED → VALIDATING → AUTHORIZATION_PENDING → AUTHORIZED → ENFORCING → GRANTED / DENIED / FAILED / UNKNOWN → RECONCILIATION_REQUIRED**

For physical access, final resource state may be separately observed.

Offline access must have:

- bounded credential validity;
- bounded scope;
- replay protection;
- revocation/expiry strategy;
- later synchronization;
- conflict handling.

## 32. Resource state machine

Resource lifecycle is domain-specific but may include:

**DISCOVERED → REGISTERED → PROVISIONED → ACTIVE → DEGRADED → MAINTENANCE → UNAVAILABLE → RETIRED**

Operational state may be separate:

- availability;
- occupancy;
- reservation;
- lock state;
- health;
- connectivity.

These must not be collapsed into one ambiguous status.

## 33. Unit/building/place state machine

Physical hierarchy may use:

**PLANNED → REGISTERED → OPERATIONAL → PARTIALLY_AVAILABLE → MAINTENANCE → UNAVAILABLE → DECOMMISSIONED**

Unit occupancy is a separate relationship state machine.

Place location is not ownership or authority.

## 34. Provider state machine

Provider relationship/onboarding:

**DISCOVERED → ONBOARDING → PENDING_REVIEW → VERIFIED → ACTIVE → SUSPENDED → TERMINATED → ARCHIVED**

Verification may cover identity, business information, credentials, licences or service-specific requirements.

Provider verification does not automatically authorize every service operation.

## 35. Worker engagement state machine

Typical:

**PROPOSED → SCREENING → VERIFIED → OFFERED → ACCEPTED → ACTIVE → SUSPENDED → COMPLETED / TERMINATED → CLOSED**

The exact states depend on engagement type.

A worker being VERIFIED does not mean the worker is authorized for every task.

## 36. Service state machine

A LegaService may follow:

**DESIGNED → CONFIGURING → PILOT → ACTIVE → DEGRADED → SUSPENDED → RETIRED**

Service availability is distinct from provider status, participant entitlement and resource availability.

## 37. Booking state machine

Canonical:

**DRAFT → REQUESTED → HOLD → RESERVED → CONFIRMED → CHECKED_IN → FULFILLED → COMPLETED**

Exceptional:

**CANCELLED / EXPIRED / NO_SHOW / DISPUTED**

A HOLD protects capacity temporarily.

A RESERVATION is a governed commitment.

Reservation does not equal ownership.

Concurrency controls are mandatory around capacity.

## 38. Market order state machine

Typical:

**DRAFT → SUBMITTED → ACCEPTED → PAYMENT_PENDING → CONFIRMED → FULFILLING → FULFILLED → COMPLETED**

Exceptional:

**CANCELLED / REJECTED / RETURNED / REFUNDED / DISPUTED**

Payment and fulfillment remain separate state machines.

## 39. Payment state machine

LegaPay canonical lifecycle:

**DRAFT → REQUIRES_ACTION → READY → AUTHORIZATION_PENDING → AUTHORIZED → SUBMITTED → PROCESSING → PROVIDER_ACCEPTED → SETTLEMENT_PENDING → SETTLED → RECONCILED**

Exceptional:

**FAILED / CANCELLED / EXPIRED / REVERSED / REFUNDED / DISPUTED / UNKNOWN / RECONCILIATION_REQUIRED**

Provider acceptance is not settlement.

Settlement is not reconciliation.

Unknown payment state must trigger safe handling and reconciliation rather than blind retry that could duplicate value transfer.

## 40. Ride state machine

Typical:

**REQUESTED → MATCHING → OFFERED → ACCEPTED → DRIVER_EN_ROUTE → ARRIVED → ONBOARD → IN_TRANSIT → COMPLETED**

Exceptional:

**CANCELLED / NO_SHOW / SAFETY_INCIDENT / DISPUTED / UNKNOWN**

Matching is not authorization to perform unrelated operations.

Location is context/evidence, not authority.

## 41. Network state machine

Typical:

**ORDERED → PROVISIONING → ACTIVE → DEGRADED → SUSPENDED → RESTORING → ACTIVE → TERMINATED**

Provider acknowledgement does not automatically prove end-to-end connectivity.

Connectivity state may require observation.

## 42. Food state machine

Typical:

**ORDERED → PAYMENT_PENDING → PROVIDER_ACCEPTED → PREPARING → READY → OUT_FOR_DELIVERY / READY_FOR_PICKUP → DELIVERED / COLLECTED → COMPLETED**

Exceptional:

**CANCELLED / REJECTED / SUBSTITUTION_REQUIRED / INCIDENT / REFUNDED / DISPUTED**

Menu state and inventory state remain separate.

## 43. Health coordination state machine

Health workflows must be domain- and jurisdiction-sensitive.

Examples:

Appointment:

**REQUESTED → SCHEDULED → CONFIRMED → CHECKED_IN → IN_PROGRESS → COMPLETED → CLOSED**

Referral:

**DRAFT → ISSUED → ACCEPTED → SCHEDULED → COMPLETED → CLOSED**

Consent:

**REQUESTED → PENDING → GRANTED → ACTIVE → WITHDRAWN / EXPIRED**

Clinical state must not be reduced to a generic commercial lifecycle.

LegaX coordination does not create universal clinical authority.

## 44. Advertising state machine

Campaign:

**DRAFT → REVIEW → APPROVED → SCHEDULED → ACTIVE → PAUSED → COMPLETED / TERMINATED**

Delivery:

**ELIGIBILITY_CHECK → SELECTED → DELIVERED → MEASURED**

Consent and eligibility remain separate.

AI targeting output cannot manufacture consent.

## 45. Award state machine

Program:

**DRAFT → OPEN → ACTIVE → CLOSED → ARCHIVED**

Candidate:

**NOMINATED → ELIGIBILITY_REVIEW → EVALUATION → SELECTED / NOT_SELECTED → APPEAL → RESOLVED**

Award:

**APPROVED → ISSUED → REDEEMED → EXPIRED / REVOKED**

Selection is not issuance; issuance is not redemption.

## 46. Work state machine

Opportunity:

**DRAFT → OPEN → SCREENING → MATCHING → SHORTLISTED → SELECTED → CLOSED**

Engagement:

**PROPOSED → NEGOTIATING → ACCEPTED → ACTIVE → SUSPENDED → COMPLETED / TERMINATED → CLOSED**

Deliverable:

**PLANNED → IN_PROGRESS → SUBMITTED → UNDER_REVIEW → ACCEPTED / REVISION_REQUIRED → COMPLETED**

Payment remains a separate economic lifecycle.

## 47. Evidence state machine

Evidence may follow:

**CAPTURED → QUALITY_CHECK → PROCESSING → EXTRACTED → REVIEW → VERIFIED / REJECTED → SUPERSEDED / EXPIRED / RETAINED**

Verification criteria must be explicit.

Evidence retention does not mean the underlying relationship remains active.

## 48. Intelligence output state machine

Intelligence:

**GENERATED → QUALITY_CHECK → EVALUATED → REVIEW_REQUIRED / READY_FOR_USE → ACCEPTED / REJECTED → SUPERSEDED**

An intelligence output that is accepted for operational use still does not become authority automatically.

## 49. Reconciliation state machine

Where external state exists:

**NOT_REQUIRED → PENDING → COMPARING → MATCHED → RECONCILED**

Exceptional:

**DISCREPANCY → INVESTIGATING → RESOLVED / ESCALATED**

Reconciliation must preserve both sides of a disagreement and the resolution basis.

## 50. Cross-domain transition orchestration

Cross-domain workflows MUST NOT pretend that multiple domain state changes are one universal transaction.

Example payment + booking:

**Booking Hold → PaymentIntent → Authorization → Payment Processing → Settlement/Reconciliation → Booking Confirmation**

If payment becomes UNKNOWN, booking should not silently become CONFIRMED unless policy explicitly permits a bounded intermediate state.

Example access + authority:

**Authority Active → Authorization → AccessRequest → Enforcement → Resource Observation**

Revoking authority while enforcement is in progress requires explicit propagation semantics.

## 51. Transition dependency graph

A transition may depend on:

**Relationship → State → Evidence → Verification → Approval → Authority → Authorization → Preconditions → Concurrency → Execution → New State → Event → Evidence → Reconciliation**

Not every transition needs every node.

The transition definition must state which nodes are mandatory.

## 52. Transition guards

Every consequential transition should declare applicable guards:

- state guard;
- relationship guard;
- authority guard;
- authorization guard;
- policy guard;
- verification guard;
- approval guard;
- time guard;
- resource guard;
- capacity guard;
- security/risk guard;
- concurrency guard;
- external-state guard.

A guard failure must have an explicit outcome.

## 53. Guard outcome semantics

### PASS
Condition satisfied.

### FAIL
Condition evaluated and not satisfied.

### UNKNOWN
Condition cannot currently be determined.

### STALE
Known value is older than the allowed freshness window.

### INDETERMINATE
Evaluation itself cannot safely produce a determinate result.

### NOT_APPLICABLE
Guard does not apply under the transition definition.

Unknown/stale/indeterminate outcomes MUST NOT be silently treated as PASS for consequential transitions.

## 54. Transition cancellation

A pending transition may be cancelled only under defined rules.

Cancellation must identify:

- actor;
- authority;
- reason;
- current state;
- transition ID;
- timing;
- effect on external operations;
- event/evidence.

Cancellation of a request does not necessarily cancel an already-submitted external operation.

External cancellation may itself require a new authorized transition.

## 55. Compensation

Where a transition has completed but a later dependent operation fails, LegaX should use explicit compensating transitions rather than pretending the original transition never occurred.

Example:

**Payment settled → fulfillment fails → refund transition**

not:

**payment state magically reverted to unpaid.**

Compensation creates its own authorization, execution, event and evidence.

## 56. Saga-style cross-domain consistency

For long-running cross-domain workflows, use explicit workflow state and compensation/reconciliation.

Canonical pattern:

**Command → Local State → Event → Next Domain Command → External Effect → Event → Reconciliation/Compensation**

Each domain remains authoritative for its own state.

## 57. Temporal transitions

A transition may be:

- immediate;
- scheduled;
- delayed;
- recurring;
- effective in future;
- automatically expiring.

Scheduled transitions must preserve:

- intended effective time;
- authorization time;
- policy version;
- state version/preconditions;
- execution time;
- cancellation rules.

A future authorization must not be treated as a permanent present authorization.

## 58. Automatic transitions

Automatic transitions are permitted only where the state machine explicitly defines:

- triggering condition;
- system actor;
- bounded authority;
- policy;
- preconditions;
- idempotency;
- audit/event requirements;
- failure/unknown handling;
- rollback/compensation where applicable.

Automation does not remove governance.

## 59. AI-assisted transitions

AI may:

- detect conditions;
- recommend transitions;
- prioritize review;
- predict failure;
- propose remediation;
- classify evidence.

AI MUST NOT independently create authority for a consequential transition.

If AI proposes a transition, the proposal remains:

**PROPOSED → GOVERNED REVIEW/POLICY → AUTHORIZATION → EXECUTION**

unless the system has an explicitly pre-authorized, bounded automation rule.

## 60. State visibility and caching

Read models and caches may expose state but are not automatically canonical.

A stale state display MUST NOT be used for consequential execution without freshness/concurrency controls.

UI should distinguish:

- canonical current state;
- provider-reported state;
- observed state;
- inferred state;
- stale state;
- reconciliation pending.

## 61. State reconstruction

For consequential domains, LegaX should be able to reconstruct:

- previous state;
- transition requested;
- transition actor;
- authority;
- authorization decision;
- policy version;
- approvals;
- evidence;
- execution outcome;
- resulting state;
- reconciliation result.

The reconstruction source may be a state history, transition records, events, or a combination.

## 62. Canonical state transition matrix

| Domain/object | Primary states | Key transitions | Required gates | Critical exceptional states |
|---|---|---|---|---|
| Identity | provisional/verified/active/suspended/retired | verify, restrict, suspend, retire | evidence, verification, authority | disputed |
| Account | pending/active/restricted/suspended/locked/recovery/compromised/closed | activate, lock, recover, suspend, close | authentication/security policy | compromised |
| Session | authenticating/authenticated/active/expired/revoked | authenticate, step-up, terminate | authenticator, assurance | revoked |
| Participation | proposed/pending/active/suspended/ended | establish, activate, suspend, end | evidence/authority/policy | disputed |
| Role assignment | proposed/pending/active/revoked/expired | assign, activate, revoke | authority/approval | conflict |
| Authority assignment | proposed/pending/active/suspended/revoked/expired | grant, suspend, revoke | governance/approval/authorization | disputed |
| Authorization | requested/evaluating/allowed/denied/indeterminate/pending | evaluate, expire, consume | policy/authority/current state | indeterminate |
| Access | requested/validating/authorized/enforcing/granted/denied/unknown | request, authorize, enforce | authorization/resource/method | unknown |
| Resource | registered/active/degraded/maintenance/unavailable/retired | activate, maintain, retire | authority/verification | unknown |
| Provider | onboarding/review/verified/active/suspended/terminated | onboard, verify, activate, suspend | evidence/review | disputed |
| Worker engagement | proposed/screening/accepted/active/suspended/completed | accept, activate, suspend, complete | qualification/authority | disputed |
| Service | configuring/pilot/active/degraded/suspended/retired | launch, degrade, suspend, retire | readiness/authority | incident |
| Booking | requested/hold/reserved/confirmed/fulfilled/completed | hold, reserve, confirm, cancel | capacity/payment/policy | expired/disputed |
| Order | submitted/accepted/confirmed/fulfilling/fulfilled/completed | accept, confirm, fulfill | inventory/payment/policy | returned/disputed |
| Payment | draft/ready/authorized/processing/settled/reconciled | authorize, submit, settle, reconcile | payment auth/provider | unknown |
| Ride | requested/matching/accepted/enroute/arrived/in_transit/completed | match, accept, start, complete | safety/provider/payment | incident/unknown |
| Network | ordered/provisioning/active/degraded/suspended/terminated | provision, activate, suspend, restore | provider/observation | unknown |
| Food | ordered/accepted/preparing/ready/delivering/completed | accept, prepare, deliver | provider/payment | incident |
| Health appointment | requested/scheduled/confirmed/checkin/in_progress/completed | schedule, confirm, attend, close | provider/policy | cancelled |
| Consent | requested/pending/granted/active/withdrawn/expired | grant, withdraw, expire | legal basis/verification | disputed |
| Campaign | draft/review/approved/scheduled/active/paused/completed | approve, launch, pause, close | policy/consent | violation |
| Award | nominated/evaluated/selected/approved/issued/redeemed | evaluate, select, issue, redeem | criteria/review/approval | appeal/revoked |
| Work engagement | proposed/negotiating/accepted/active/completed | accept, start, complete | qualification/contract | disputed |
| Evidence | captured/processing/review/verified/rejected/superseded | verify, reject, supersede | evidence criteria | disputed |
| Intelligence | generated/evaluated/review/accepted/rejected/superseded | evaluate, accept, reject | provenance/evaluation | uncertainty |
| Reconciliation | pending/comparing/matched/reconciled | compare, resolve | source evidence | discrepancy/escalated |

## 63. Contradiction tests

### A — Stale authorization
Authorization was ALLOW at version N; resource state becomes unavailable at version N+1.

**Required:** transition must re-check applicable current state/concurrency conditions.

### B — Unknown payment
Provider does not confirm whether a payment completed.

**Required:** PAYMENT = UNKNOWN / RECONCILIATION_REQUIRED, not FAILED and not SETTLED.

### C — Controller acknowledgement
Door controller acknowledges an unlock command.

**Required:** enforcement acknowledgement may be recorded, but physical state is separately observed where required.

### D — Revoked authority
Authority is revoked while a consequential request is pending.

**Required:** execution must re-evaluate authority before committing if the transition is still pending.

### E — Expired relationship
Participation expires while a transition is queued.

**Required:** queued execution must not silently use the expired relationship.

### F — Approval reuse
An administrator approved one resource transition.

**Required:** approval cannot automatically authorize a materially different resource.

### G — Concurrent booking
Two requests attempt the last capacity.

**Required:** one must fail, wait, or otherwise resolve through a concurrency-safe transition; double reservation is prohibited.

### H — Retry payment
The same payment command is submitted twice.

**Required:** idempotency prevents duplicate consequential payment effects.

### I — AI recommendation
AI predicts that a worker should be activated.

**Required:** recommendation remains non-authoritative unless a bounded pre-authorized automation rule explicitly permits the transition.

### J — External provider success
Provider reports success, but LegaX has not reconciled required evidence.

**Required:** provider state remains an external assertion until the canonical reconciliation criteria are satisfied.

### K — Suspension
A participant is suspended.

**Required:** dependent effects follow explicit propagation rules; history remains intact.

### L — Emergency
Emergency access is granted.

**Required:** bounded emergency authority, event/evidence, expiry and post-event review.

### M — Compensation
Fulfillment fails after payment settles.

**Required:** refund/compensation is a new governed transition, not silent state reversal.

### N — State-machine upgrade
A new state-machine version is deployed.

**Required:** historical transitions remain interpretable under their original version.

### O — Cache
UI shows ACTIVE while canonical state is SUSPENDED.

**Required:** stale display must not authorize consequential execution.

## 64. State-machine integrity invariants

1. Every consequential object has an explicit state model.
2. State meanings are domain-specific and versioned.
3. A state is not merely a UI label.
4. Valid transitions are explicitly defined.
5. Invalid transitions are rejected.
6. Transition authority is explicit.
7. Transition scope is explicit.
8. Transition actor is attributable.
9. Preconditions are explicit.
10. Verification requirements are explicit.
11. Approval requirements are explicit.
12. Authorization requirements are explicit.
13. State version/concurrency is checked for consequential transitions.
14. Stale authorization cannot silently execute against materially changed state.
15. Idempotency is required where retries could duplicate effects.
16. Command IDs identify consequential transition attempts.
17. Correlation and causation are preserved where workflows span operations.
18. Unknown is distinct from failure.
19. Indeterminate is distinct from denial.
20. Pending is distinct from success.
21. Reconciliation-required is distinct from failure.
22. Expiry is distinct from revocation.
23. Suspension is distinct from deletion.
24. Revocation preserves history.
25. Emergency transitions are bounded and reviewable.
26. Automatic transitions require explicit bounded authority.
27. AI proposals do not create authority.
28. Approval is scoped to its governed object and operation.
29. Verification does not create authority.
30. Authorization does not equal execution.
31. Provider acknowledgement does not equal canonical completion.
32. Controller acknowledgement does not equal physical outcome.
33. External state is reconciled rather than blindly copied.
34. State changes produce appropriate events.
35. Consequential transitions retain supporting evidence.
36. Historical state remains reconstructable where required.
37. State-machine versions remain historically interpretable.
38. Cross-domain state changes are not assumed to be one transaction.
39. Compensation is represented as a new governed operation.
40. Read models/caches are not canonical merely because they display state.
41. Unknown/stale/indeterminate guards cannot silently pass for consequential operations.
42. Relationship expiry/revocation propagates according to explicit dependency rules.
43. A transition cannot silently exceed the authority scope that permits it.
44. A future-dated transition is not treated as immediately effective.
45. A transition request is not proof that a transition occurred.
46. An event is not proof of every underlying external fact.
47. Evidence identifies the claim it supports.
48. State mutations cannot bypass required governance by direct field updates.
49. Domain-owned state remains authoritative within its defined boundary.
50. No state transition may create hidden privilege through relationship inheritance.
51. A repeated command cannot silently create repeated consequential effects.
52. A transition against a deleted/retired target follows explicit lifecycle rules.
53. Security/risk changes may require reauthorization.
54. Material policy-version changes may require re-evaluation.
55. Sensitive state transitions preserve privacy and minimum necessary disclosure.
56. State and relationship semantics remain consistent with Phase 14.
57. Service-specific state machines cannot redefine foundational state meanings.
58. No transition may rely on an AI inference as established fact without the required verification.
59. Every exceptional state has a recovery, closure, escalation, or reconciliation path where applicable.
60. No consequential state machine is implementation-ready until its contradiction tests pass.

## 65. Relationship to Definitions 01–14

Phase 15 is constrained by the complete previous architecture:

- **01 LegaX** — constitutional boundary.
- **02 Identity** — identity lifecycle and verification semantics.
- **03 Authentication** — authenticator/session lifecycle and assurance.
- **04 Account** — account security lifecycle and recovery.
- **05 Administration** — governance, authority, approvals, delegation and administration.
- **06 Authorization** — runtime decision semantics and deny/indeterminate boundaries.
- **07 Access** — enforcement, physical/digital access, multi-method mechanisms and offline constraints.
- **08 Resources & Physical World** — resource, device, place, unit, physical state and observation.
- **09 Economic & Commerce** — payment, order, settlement, fulfillment, dispute and reconciliation semantics.
- **10 Lifecycle & Policy** — transition protocol, policy lifecycle, verification, authorization and reconciliation.
- **11 Events, Evidence & Intelligence** — event/evidence provenance and intelligence boundaries.
- **12 LegaServices** — domain-specific lifecycle ownership.
- **13 Canonical Domain Model** — canonical entities, aggregate and transaction boundaries.
- **14 Canonical Relationship Model** — relationship ownership, scope, lifecycle, inference and revocation semantics.

No Phase 15 state machine may contradict these definitions.

## 66. Research basis

The state-machine model was checked against current authoritative architectural material, including:

- NIST SP 800-63-4 Digital Identity Guidelines, published July 2025, for identity proofing, authentication, federation, authenticators and assertions.
- NIST Risk Management Framework material for lifecycle accountability, authorization and continuous monitoring.
- OASIS XACML 3.0 for separation of policy administration, decision and enforcement, and for explicit Permit/Deny/Indeterminate/NotApplicable decision semantics.
- CloudEvents 1.0.2 for interoperable event-envelope concepts.
- Existing LegaX definitions 01–14 as the primary internal semantic source.

These references inform the model; they do not override LegaX's canonical contracts.

## 67. Phase 15 readiness gate

Phase 15 is complete only when every consequential state machine can answer:

1. What object does it govern?
2. Who owns the state?
3. What are all valid states?
4. What does every state mean?
5. What are all valid transitions?
6. Which transitions are invalid?
7. Who may request each transition?
8. Who may authorize each transition?
9. What authority permits it?
10. What scope applies?
11. What preconditions must hold?
12. What evidence is required?
13. What verification is required?
14. What review/approval is required?
15. What policy version applies?
16. What concurrency/version condition applies?
17. What idempotency behavior applies?
18. What happens on retry?
19. What happens if state changes concurrently?
20. What happens if a prerequisite is unknown?
21. What happens if an external system is unavailable?
22. What happens if an external system says success?
23. What happens if an external system says failure?
24. What happens if external outcome is unknown?
25. What happens when the object expires?
26. What happens when it is suspended?
27. What happens when it is revoked?
28. What happens in an emergency?
29. What event is emitted?
30. What evidence is preserved?
31. What can be reconstructed historically?
32. What reconciliation process exists?
33. What compensation exists?
34. What happens after policy/version change?
35. What privacy constraints apply?
36. What AI involvement is permitted?
37. Which contradictions have been tested?
38. Which domain is authoritative?
39. Which external systems are merely assertion sources?
40. Can the transition execute safely under concurrency and retry?

If any answer is ambiguous, the state machine is not implementation-ready.

## 68. Final architectural rule

A state is a governed condition.

A transition is a governed change.

Authorization is the permission to perform the transition.

Execution is the attempt to perform it.

The resulting state is established only according to the domain's authoritative execution/evidence rules.

Therefore:

**STATE → TRANSITION REQUEST → VALIDATION → VERIFICATION/REVIEW → AUTHORIZATION → CONCURRENCY CHECK → EXECUTION → NEW STATE → EVENT → EVIDENCE → RECONCILIATION**

For external or physical operations:

**CANONICAL INTENT → AUTHORIZED COMMAND → EXTERNAL/PHYSICAL EFFECT → OBSERVATION/PROVIDER ASSERTION → RECONCILIATION → CANONICAL STATE**

The governing rule is:

**No authorized transition may execute against stale material state, and no reported execution outcome may be promoted to canonical success without the evidence/reconciliation required by its domain.**

**Status:** Foundational state-machine contract — state semantics, transition governance, concurrency, lifecycle, exception and reconciliation rules established; implementation remains deferred until subsequent architecture gates are completed.
