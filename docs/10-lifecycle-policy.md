# LegaX — Lifecycle & Policy Model

## 10 — Lifecycle & Policy

**Canonical definition**

Lifecycle & Policy in LegaX is the governed framework through which identities, accounts, participations, authorities, credentials, resources, economic relationships, services, transactions, access rights, and other consequential objects are assigned explicit states, rules, effective conditions, transitions, reviews, verifications, approvals, expirations, suspensions, revocations, and historical records, so that changes in what the ecosystem recognizes, permits, enforces, or operates are deliberate, attributable, policy-constrained, auditable, and safe rather than implicit, permanent, or dependent on application-specific assumptions.

The Lifecycle & Policy model answers **“what state is this governed object in now; what states may it enter; what rules govern those changes; who or what may request, review, approve, authorize, execute, or reverse them; which conditions must be satisfied; when does the change become effective or expire; and what evidence establishes the resulting state and history?”**

Lifecycle and Policy are related but distinct. **Lifecycle describes the governed state and valid state transitions of an object or relationship. Policy defines the rules and conditions under which decisions, transitions, operations, retention, security controls, or other governed behavior may occur.** Neither concept creates authority by itself. Authority determines who is entitled to govern or act within a scope; authorization determines whether a specific requested action is permitted; lifecycle and policy provide the state and rules against which those decisions are evaluated.

This model establishes lifecycle and policy as shared infrastructure rather than allowing each LegaX service to invent incompatible state machines, expiration rules, approval semantics, or policy interpretations. Services and domains may define their own legitimate states and domain-specific policies, but they must execute those states and transitions through consistent platform semantics and preserve the separation between state, policy, authority, authorization, execution, event, and evidence.

## Lifecycle is not merely a status field

A lifecycle is more than storing a current status such as `active`, `pending`, or `closed`.

A governed lifecycle includes, where applicable:

- the object or relationship whose lifecycle is being governed;
- its current state;
- the states that are valid for that object;
- permitted transitions between states;
- transition requests or commands;
- transition conditions;
- applicable policy versions;
- required authentication assurance;
- required authority;
- authorization requirements;
- required review or approval;
- required verification;
- effective and expiry conditions;
- temporal constraints;
- dependencies and preconditions;
- execution semantics;
- resulting state;
- transition history;
- events and evidence;
- failure, rejection, cancellation, expiration, suspension, and recovery behavior.

A database row containing a state value is therefore not by itself a complete lifecycle model.

## Policy is not authority

Policy defines rules.

Authority establishes who or what is entitled to govern or act within a defined scope.

Authorization evaluates a specific request against applicable authority, policy, context, lifecycle, and other conditions.

Therefore:

- a policy does not grant itself authority;
- storing a policy does not make the policy administrator authorized to create it;
- a policy rule does not make every actor satisfying its conditions authorized to act;
- an application configuration value is not automatically a policy;
- an administrator interface is not automatically administrative authority;
- an AI-generated recommendation is not automatically policy;
- a service default is not automatically a governance decision;
- a provider's policy does not automatically become LegaX policy.

Policy must itself be created, changed, published, activated, suspended, retired, and audited through governed lifecycle controls.

## Current state, transition state, review state, and verification state

LegaX must keep distinct concepts that are commonly collapsed into one status field.

### Current State

**Current State** represents the presently effective lifecycle state of the governed object or relationship.

Examples:

- pending;
- active;
- suspended;
- restricted;
- expired;
- revoked;
- completed;
- cancelled;
- closed;
- archived.

The allowed values depend on the domain.

### Transition Request

A **Transition Request** represents a request or command to change the current state.

It must identify, where applicable:

- requesting actor;
- authenticated session or service identity;
- target object or relationship;
- requested transition;
- reason or purpose;
- relevant context;
- requested effective time;
- supporting evidence;
- idempotency key;
- originating service or integration;
- correlation information.

### Transition State

**Transition State** represents the processing state of the requested change.

For example:

- requested;
- validating;
- awaiting_review;
- awaiting_verification;
- awaiting_authorization;
- approved;
- executing;
- succeeded;
- rejected;
- denied;
- failed;
- cancelled;
- expired.

Transition state must not be confused with the current lifecycle state of the target.

### Review State

**Review State** represents a required human or governed review process.

Possible states include:

- not_required;
- required;
- pending;
- in_review;
- approved;
- rejected;
- withdrawn;
- expired.

A review outcome is not automatically an authorization outcome. The applicable authority and authorization model remains authoritative.

### Verification State

**Verification State** represents whether required facts, evidence, conditions, or external assertions have been sufficiently verified.

Possible states include:

- not_required;
- required;
- pending;
- in_progress;
- verified;
- failed;
- inconclusive;
- expired;
- revoked.

Verification establishes confidence in a condition or claim. It does not by itself grant authority or authorization.

## Canonical transition model

A consequential lifecycle transition should follow this conceptual path:

**STATE → TRANSITION REQUEST → VALIDATION → REVIEW (if required) → VERIFICATION (if required) → AUTHORIZATION → TRANSITION EXECUTION → NEW STATE → EVENT → EVIDENCE**

The exact sequence may vary for a domain when explicitly governed, but the semantics must remain clear.

A system must not silently move an object to a new consequential state merely because a UI button was pressed, an API endpoint was reached, a database update succeeded, or an external provider returned a positive response.

Where a domain legitimately requires immediate transitions, the implementation must still preserve the applicable validation, authorization, execution, lifecycle, and evidence semantics.

## State machines are domain-specific

LegaX must provide common lifecycle semantics without forcing every domain into one universal list of states.

For example:

**Identity**
may use states such as pending, active, restricted, suspended, deactivated, or merged where supported.

**Credential**
may use issued, active, suspended, revoked, expired, compromised, replaced.

**Access authorization**
may use pending, active, expired, revoked, denied.

**Resource**
may use planned, provisioning, active, maintenance, unavailable, retired.

**Economic transaction**
may use initiated, pending, authorized, processing, completed, failed, reversed, refunded, disputed, settled.

**Booking**
may use requested, held, confirmed, active, completed, cancelled, expired.

**Service**
may use proposed, onboarding, active, degraded, suspended, retired.

These states are domain contracts. They must not be inferred to have identical meanings across domains merely because they share names.

## Valid transitions

Every lifecycle must define which transitions are legal.

For example:

**pending → active**

may be valid after required verification and authorization.

**active → suspended**

may be valid under defined security, governance, safety, compliance, or operational conditions.

**suspended → active**

may require review, remediation, verification, and authorization.

**active → revoked**

may be terminal or reversible depending on the domain.

**expired → active**

must not be assumed to be valid merely because a user attempts to renew it; the domain must explicitly define whether renewal is a new transition, reactivation, replacement, or new object.

An implementation must reject undefined transitions.

A client must never be able to manufacture a valid transition by sending an arbitrary target state.

## Policy lifecycle

Policies are themselves governed objects.

A policy should have an explicit lifecycle such as:

**draft → review → approved → published → active → superseded/withdrawn/expired → retired**

The exact states may vary by policy type.

A policy must preserve:

- policy identity;
- policy type;
- scope;
- jurisdiction or domain;
- owner or governing authority;
- version;
- effective time;
- expiration time where applicable;
- conditions;
- priority or precedence rules where applicable;
- dependencies;
- review requirements;
- approval evidence;
- publication state;
- enforcement state;
- supersession relationship;
- history;
- provenance;
- audit information.

Changing a policy must not silently rewrite the historical meaning of decisions that were already made under an earlier effective version.

## Policy versioning and effective time

Policy changes must be versioned.

A decision or transition should be attributable to the policy version and effective conditions that governed it.

LegaX must distinguish:

- policy creation time;
- publication time;
- effective time;
- expiration time;
- supersession time;
- retirement time.

A newly published policy must not necessarily apply retroactively.

Retroactive policy effects, where legally or operationally necessary, must be explicit, governed, and auditable rather than inferred from the latest policy record.

When a policy changes, existing state must not automatically change unless the applicable lifecycle policy explicitly defines such a consequence.

## Policy scope

Policies must have explicit scope.

Scope may include:

- LegaX-wide;
- organization;
- community;
- service;
- resource;
- resource class;
- geographic or jurisdictional;
- economic;
- operational;
- security;
- identity or credential;
- administrative;
- integration;
- transaction;
- temporal;
- other domain-specific scope.

A policy applicable to one scope must not silently expand into another.

More specific policy may override or refine broader policy only where the governing policy model explicitly permits that relationship.

Conflicting policies must have deterministic resolution semantics or produce a governed indeterminate/review outcome rather than silently selecting whichever rule was evaluated first.

## Policy decision and authorization boundary

Lifecycle & Policy does not replace Authorization.

For a consequential request:

1. the actor is authenticated at an appropriate assurance;
2. the relevant identity and account relationships are established;
3. participation and context are resolved;
4. applicable authority is identified;
5. lifecycle state is evaluated;
6. applicable policies are resolved;
7. authorization evaluates the concrete requested operation;
8. required review, verification, or approval conditions are satisfied;
9. the transition or action is executed;
10. the resulting state is recorded;
11. event and evidence records are produced.

A policy can require that an authorization decision be denied, deferred, reviewed, or conditioned.

It cannot manufacture the authority that makes the authorization legitimate.

## Policy enforcement architecture

LegaX should preserve the conceptual separation between:

- **Policy Administration** — creation, editing, versioning, publication, retirement, and governance of policies;
- **Policy Decision** — evaluation of applicable policy against a governed request or condition;
- **Policy Enforcement** — applying the resulting decision or control at the relevant resource or execution boundary.

This is consistent with established policy decision/enforcement architectures such as XACML, where policy administration, decision, and enforcement are distinct responsibilities. citeturn0search6turn0search17

LegaX does not need to adopt XACML as its implementation language, but the semantic separation must remain explicit.

## Preconditions and invariants

A transition may require preconditions such as:

- object is in an eligible current state;
- required evidence exists;
- required verification is valid;
- required credential is active;
- required authentication assurance is sufficient;
- required participation is active;
- required authority exists;
- authorization succeeds;
- required approval exists;
- required resource is available;
- target has not changed incompatibly;
- no conflicting transition is executing;
- applicable legal, safety, security, or operational constraints are satisfied.

A precondition failure must prevent the transition unless a separately governed exception explicitly applies.

## Review and approval

Review and approval must be treated as explicit lifecycle controls rather than generic boolean fields.

Examples include:

- one-person approval;
- maker-checker;
- multiple independent approvers;
- community governance approval;
- organizational approval;
- financial approval;
- security review;
- identity verification;
- resource-owner approval;
- regulated-provider approval;
- emergency review.

The required number, independence, role, scope, and timing of approvals must be policy-defined.

An approval from an unauthorized reviewer is not a valid approval.

A previously valid approval may become stale when:

- the target changes;
- policy changes;
- evidence expires;
- the actor's authority changes;
- the transaction changes materially;
- a required time window expires;
- risk conditions change.

## Verification is condition-based

Verification should establish the truth or confidence of a defined condition, not serve as a universal “verified” label.

Examples:

- identity evidence verification;
- credential verification;
- resource existence verification;
- ownership/relationship verification;
- provider assertion verification;
- payment confirmation;
- delivery verification;
- employment/work verification;
- safety condition verification.

Each verification must preserve:

- what was verified;
- evidence used;
- verification method;
- verifier or verification system;
- assurance or confidence where applicable;
- timestamp;
- effective period;
- expiration;
- result;
- provenance.

Verification results can become stale and must therefore participate in lifecycle management.

## Expiration and time

Time is a first-class lifecycle condition.

LegaX must support:

- not-before conditions;
- effective times;
- expiration;
- recurring validity;
- temporary elevation;
- time-bounded access;
- reservation windows;
- credential validity;
- approval validity;
- policy effective periods;
- scheduled transitions;
- grace periods where explicitly governed.

Expired objects or decisions must not remain effective merely because a client cached them.

Clock-sensitive decisions must use reliable time semantics and preserve sufficient timestamps to reconstruct the decision context.

## Suspension, revocation, and emergency controls

Suspension and revocation must have defined semantics.

**Suspension** generally indicates a temporary or reviewable restriction while preserving the governed object and its history.

**Revocation** generally indicates that a previously granted credential, authorization, approval, entitlement, or other governed state is no longer valid.

The meaning must be defined per domain.

Emergency controls may allow narrowly scoped deviation from normal operating flows where safety, security, or continuity requires it. Emergency behavior must still be:

- explicitly defined;
- bounded in scope;
- time-limited where appropriate;
- attributable;
- auditable;
- subject to post-event review;
- unable to silently become permanent authority.

Emergency operation must not become a general-purpose bypass mechanism.

## Concurrency and stale state

Lifecycle transitions are state-changing operations and must be protected against concurrency errors.

If two actors attempt incompatible transitions simultaneously, the system must have deterministic behavior.

The implementation must prevent:

- lost updates;
- double activation;
- double cancellation;
- duplicate settlement;
- stale approval execution;
- stale authorization execution;
- conflicting resource states;
- transition history that does not match actual state.

Where appropriate, transitions should use optimistic concurrency, version checks, transactional locking, compare-and-set semantics, or equivalent mechanisms.

A transition approved against one target state must not automatically execute against a materially changed target state.

## Idempotency

Consequential lifecycle commands must be idempotent where duplicate delivery is possible.

Examples include:

- activate;
- suspend;
- revoke;
- approve;
- reject;
- cancel;
- refund;
- settle;
- publish;
- expire;
- issue;
- replace.

Repeated delivery of the same command must not create duplicate consequential effects.

An idempotency key must be bound to the appropriate actor, operation, target, and request scope.

## Failure semantics

A lifecycle transition may fail at validation, review, verification, authorization, execution, external integration, persistence, or post-execution reconciliation.

The resulting state must accurately represent what happened.

The system must not report **completed** when execution is uncertain.

Where external execution has uncertain outcome, the lifecycle must support an explicit state such as:

- processing;
- uncertain;
- reconciliation-required;
- partially-completed;
- externally-confirmed;
- failed.

A later reconciliation process may resolve the state according to the authoritative source.

This is especially important for economic transactions, access operations, physical actuators, external providers, and distributed systems.

## External systems and policy

External systems may have their own lifecycle and policy models.

LegaX must not assume that an external status such as:

- approved;
- active;
- verified;
- paid;
- settled;
- available;
- authorized;
- completed

has the same semantic meaning inside LegaX.

Each external assertion must have:

- issuer;
- source;
- assertion type;
- provenance;
- timestamp;
- validity period;
- mapping;
- assurance;
- applicable scope;
- revocation or freshness behavior.

The mapping from an external state to a LegaX state must be explicit.

External providers remain authoritative for facts they legitimately control, while LegaX remains authoritative for its own canonical representations and governance decisions.

## Lifecycle propagation and dependencies

A lifecycle change in one domain may affect dependent objects.

Examples:

- identity deactivation may affect authentication relationships;
- account suspension may invalidate sessions;
- credential revocation may affect access;
- resource retirement may invalidate reservations;
- service suspension may prevent new orders;
- payment failure may prevent fulfillment;
- participation termination may remove contextual capabilities;
- authority revocation may invalidate administrative assignments;
- policy retirement may require migration to a replacement policy.

Dependencies must be explicitly modeled.

The platform must not rely on hidden application assumptions such as “if this object is inactive, every dependent object will somehow know.”

Where a lifecycle transition requires cascading effects, the cascade must be policy-defined, transactional where appropriate, idempotent, observable, and auditable.

## Lifecycle and Access

Access is an enforcement boundary.

Lifecycle state is one of the inputs to authorization and access enforcement.

Examples:

- an expired visitor credential must not remain usable;
- a suspended resource may reject access even if a prior authorization existed;
- a revoked access credential must not be accepted;
- an emergency authorization must expire according to its defined lifecycle;
- a temporarily granted privilege must not become permanent because a client cached it.

Access enforcement must therefore evaluate the freshness and lifecycle validity of the relevant authorization, credential, resource, and policy.

## Lifecycle and Economic & Commerce

Economic objects require particularly strong lifecycle semantics.

Examples include:

**Offer**
draft → published → accepted/expired/withdrawn

**Order**
created → confirmed → fulfilled/cancelled

**Payment**
initiated → pending → authorized → processing → completed/failed/reversed

**Settlement**
pending → settled/reconciled/disputed

**Refund**
requested → approved → processing → completed/rejected

**Dispute**
opened → under_review → resolved/appealed/closed

These states are examples, not universal mandates.

Economic state must distinguish an attempted transaction from a completed external financial outcome.

## Lifecycle and Resources & Physical World

Physical resources may have operational states such as:

- planned;
- commissioned;
- active;
- degraded;
- under maintenance;
- unavailable;
- decommissioning;
- retired.

A resource may remain represented after retirement so that historical access, maintenance, ownership, service, safety, and incident records remain accountable.

Physical state changes can have safety implications and may require verification or authorized operator action before a transition becomes effective.

## Policy precedence and conflicts

Policy composition must be deterministic.

Where multiple policies apply, LegaX must establish:

- applicability;
- scope;
- priority;
- precedence;
- conflict resolution;
- inheritance;
- exception handling;
- temporal ordering;
- jurisdictional constraints.

A policy conflict must not be resolved by arbitrary evaluation order.

For high-impact or ambiguous cases, the system should produce a governed **indeterminate / review-required** result rather than silently choosing an unsafe interpretation.

## Policy exceptions

Exceptions must be explicit governed objects rather than hidden code paths.

An exception should identify:

- affected policy;
- scope;
- reason;
- authority;
- effective period;
- affected actors or resources;
- constraints;
- approval;
- evidence;
- review/expiry conditions.

Exceptions must not silently rewrite the base policy.

An expired exception must cease to have effect.

## Policy as code and implementation neutrality

Policies may eventually be represented through declarative configuration, policy languages, database rules, service code, or other controlled mechanisms.

The representation mechanism must not change the semantic meaning of policy.

A hard-coded condition can be policy logic, but it must still have an identifiable owner, scope, lifecycle, test coverage, change history, and effective semantics when it governs consequential behavior.

Conversely, placing a rule in a policy table does not make it safe or authoritative without governance.

The platform should favor deterministic, testable, reviewable policy evaluation for consequential decisions.

## Privacy and data governance policies

Lifecycle & Policy must include privacy and data-governance conditions where applicable.

Policies may govern:

- collection;
- purpose;
- processing;
- disclosure;
- retention;
- deletion;
- correction;
- access;
- minimization;
- sensitive data handling;
- biometric processing;
- evidence retention;
- cross-system sharing.

Data lifecycle must remain distinct from business-object lifecycle. Deleting or anonymizing a data representation must not automatically erase legally or operationally required accountability evidence.

Retention requirements must be explicit and jurisdiction-aware.

## Security policy

Security policies may govern:

- authentication assurance;
- step-up requirements;
- credential age;
- device posture;
- session lifetime;
- suspicious activity response;
- rate limits;
- network conditions;
- recovery;
- administrative elevation;
- emergency controls;
- sensitive-resource access;
- transaction limits;
- fraud controls.

Security policy must operate within the same authority and authorization boundaries as other policy.

A security control may deny or constrain an operation without becoming a source of authority.

## Jurisdiction and regulatory policy

LegaX is intended to operate across jurisdictions.

Jurisdiction-specific requirements must therefore be represented as governed policy and domain constraints rather than silently embedded as universal assumptions.

A policy may identify:

- jurisdiction;
- legal regime;
- regulated activity;
- applicable organization;
- effective period;
- required controls;
- required evidence;
- retention requirements;
- disclosure restrictions;
- licensing requirements;
- external authority.

This allows Kenya, DRC, and future jurisdictions to be supported without changing the semantic foundations of Lifecycle & Policy.

## AI and Lifecycle & Policy

AI may assist with:

- detecting anomalous lifecycle changes;
- identifying stale policies;
- finding conflicting rules;
- suggesting policy improvements;
- forecasting capacity or risk;
- identifying objects likely requiring review;
- summarizing transition history;
- extracting policy requirements;
- recommending review queues;
- detecting possible fraud or abuse;
- proposing transition plans.

AI must not, by itself:

- create authority;
- approve its own recommendation;
- silently modify active policy;
- bypass required review;
- extend an expired authorization;
- revive a revoked credential;
- manufacture evidence;
- convert an inference into verified state;
- execute a consequential transition outside its authorized scope.

AI outputs must remain distinguishable from authoritative state, policy, approval, verification, and execution.

## Events and evidence

Every consequential lifecycle transition should produce sufficient events and evidence to reconstruct:

- what object or relationship changed;
- previous state;
- requested transition;
- resulting state;
- requesting actor;
- authenticated session or service;
- applicable participation and context;
- authority relied upon;
- authorization decision;
- policy version;
- review and verification outcomes;
- execution result;
- external assertions;
- timestamps;
- correlation/idempotency identifiers;
- relevant evidence;
- failure or rejection reason.

Historical lifecycle records must be append-oriented and protected against unauthorized alteration.

Current state may be materialized for efficient reads, but history remains the accountability record.

## Observed, inferred, proposed, and authoritative state

LegaX must distinguish:

- **Declared** — asserted by an actor;
- **Observed** — recorded by an observation system;
- **Verified** — supported by an accepted verification process;
- **Inferred** — derived by analysis;
- **Proposed** — recommended but not yet accepted;
- **Authoritative** — accepted as the canonical state for the defined domain and scope;
- **Unknown** — not sufficiently established.

An inferred or proposed state must never silently overwrite authoritative state.

Observed information may be authoritative only where the domain explicitly defines the observing system as an authoritative source for that fact.

## Lifecycle integrity

The implementation must preserve these integrity properties:

- current state must correspond to a valid transition history;
- a transition must have a defined source and destination state;
- illegal transitions must not execute;
- denied transitions must not change the target state;
- failed transitions must not falsely report success;
- duplicate commands must not create duplicate effects;
- concurrent transitions must not corrupt state;
- policy versions used for consequential decisions must be identifiable;
- approvals and verifications must be attributable;
- expired controls must not remain effective;
- revoked controls must not be silently restored;
- external outcomes must not be misrepresented;
- lifecycle changes must produce required events and evidence.

## Relationship to Authority and Authorization

Lifecycle & Policy provides the governed conditions under which change may occur.

Authority establishes who or what is entitled to make or govern a decision.

Authorization evaluates whether a specific requested operation is permitted.

Therefore the following must remain separate:

**Policy ≠ Authority**

**Lifecycle State ≠ Permission**

**Review ≠ Authorization**

**Verification ≠ Authorization**

**Approval ≠ Universal Authority**

**Current State ≠ Evidence of Right**

**Policy Evaluation ≠ Execution**

This separation prevents a status field, approval record, policy rule, or verification badge from becoming an unintended permission system.

## Relationship to LegaX services

Every LegaX service must consume shared Lifecycle & Policy semantics.

A service may define:

- its domain objects;
- domain states;
- domain transitions;
- domain policies;
- domain approvals;
- domain verification requirements;
- domain-specific exceptions.

A service must not create an incompatible lifecycle engine that changes the meaning of authorization, approval, expiration, revocation, or evidence.

Examples:

- LegaAccess uses lifecycle for credentials, access grants, visitor invitations, resources, and access devices.
- LegaPay uses lifecycle for payment intents, payment attempts, refunds, disputes, and reconciliation.
- LegaWork uses lifecycle for opportunities, applications, contracts, projects, milestones, and work deliverables.
- LegaBooking uses lifecycle for availability, reservations, bookings, cancellations, and fulfillment.
- LegaMarket uses lifecycle for offers, listings, orders, fulfillment, returns, and disputes.

Shared semantics enable these services to interoperate without becoming one undifferentiated application.

## Canonical lifecycle control path

For a consequential lifecycle change:

**Object/Relationship → Current State → Transition Request → Actor Authentication → Context → Policy Resolution → Authority Evaluation → Authorization → Review/Verification (if required) → Preconditions → Transition Execution → New State → Event → Evidence → Dependent-State Propagation/Reconciliation**

For a policy change:

**Policy Draft → Review → Approval → Publication → Effective Policy Version → Evaluation → Enforcement → Monitoring → Supersession/Expiration/Retirement**

For an externally dependent operation:

**LegaX Request → LegaX Policy/Authorization → External Provider Request → External Result → Verification/Reconciliation → LegaX State → Event/Evidence**

## Foundational invariants

The following invariants are mandatory architectural constraints:

1. Every consequential governed object must have an explicitly defined lifecycle or an explicitly declared reason why lifecycle does not apply.
2. Current state is distinct from transition processing state.
3. Review state is distinct from verification state.
4. Verification does not itself grant authority.
5. Review does not itself grant authority unless an applicable authority model explicitly makes the reviewer's decision authoritative for that scope.
6. Policy does not create authority merely by existing.
7. Authorization remains the runtime decision boundary for consequential operations.
8. Every legal transition must be explicitly defined.
9. Undefined transitions must be rejected.
10. A client must not manufacture a valid transition by submitting an arbitrary destination state.
11. Consequential transitions must be attributable to an actor or governed system.
12. Consequential transitions must be evaluated against applicable policy.
13. Required approvals must be attributable and valid.
14. Required verification must be valid and sufficiently fresh.
15. Expired approvals, credentials, policies, authorizations, and other time-bounded controls must not remain effective.
16. Revoked controls must not be silently restored.
17. Policy versions affecting consequential decisions must be identifiable.
18. Policy changes must not silently rewrite historical decisions.
19. Policy scope must be explicit.
20. Policy conflicts must have deterministic resolution semantics or produce a governed indeterminate/review outcome.
21. Exceptions must be explicit, scoped, authorized, time-bounded where appropriate, and auditable.
22. Emergency controls must not become unrestricted permanent bypasses.
23. Duplicate consequential commands must be idempotent where duplicate delivery is possible.
24. Concurrent transitions must not corrupt current state or transition history.
25. A successful transition must not be recorded until the required execution semantics establish success.
26. Uncertain external outcomes must be represented as uncertain/processing/reconciliation-required rather than falsely marked completed.
27. External provider states must not be assumed equivalent to LegaX lifecycle states without explicit mapping.
28. Lifecycle dependencies must be explicit rather than hidden in application assumptions.
29. Required dependent-state changes must be governed, observable, and auditable.
30. Current state must be reconstructable from valid lifecycle history.
31. Lifecycle history must preserve enough information to explain consequential changes.
32. State, policy, authority, authorization, access, and execution must remain semantically distinct.
33. An administrative interface must not be treated as authority.
34. A database write must not itself be treated as a valid lifecycle transition.
35. AI output must not silently become authoritative lifecycle state, policy, approval, verification, or authorization.
36. Inferred state must remain distinguishable from verified or authoritative state.
37. Proposed state must remain distinguishable from accepted state.
38. Data retention/deletion policy must not silently destroy required accountability evidence.
39. Jurisdiction-specific policy must be explicitly scoped and effective.
40. Service-specific lifecycle models must preserve shared LegaX transition semantics.
41. A lifecycle transition must not broaden authority beyond the scope that authorized it.
42. A policy exception must not silently modify the base policy.
43. A state name such as active, approved, verified, or completed must not acquire universal meaning across domains.
44. A consequential operation must fail closed with respect to authorization and required lifecycle conditions unless a narrowly governed exception explicitly defines another behavior.
45. Lifecycle and policy mechanisms must preserve user, community, organizational, and other legitimate governance control rather than transferring authority to the platform, service, provider, or AI merely because it operates the mechanism.

## Research-informed architectural basis

The Lifecycle & Policy model is informed by established security and identity architecture rather than treating lifecycle as application-specific status management.

NIST SP 800-63-4, finalized in July 2025, treats identity services through explicit proofing, enrollment, authenticator management, authentication, federation, assertions, and lifecycle-related processes, while also emphasizing risk management, fraud controls, continuous evaluation, and security/privacy requirements. citeturn0search0turn0search11

NIST's Risk Management Framework treats security and privacy as a system life-cycle concern and incorporates authorization, assessment, and continuous monitoring rather than a one-time configuration step. citeturn0search3turn0search8

OASIS XACML provides a mature conceptual separation between policy administration, policy decision, and policy enforcement, reinforcing the LegaX principle that policy definition, authorization decisions, and enforcement are different responsibilities. citeturn0search6turn0search17

LegaX extends these principles beyond digital access to physical resources, economic activity, community governance, service operations, external providers, and other real-world systems. The result is intentionally broader than any one policy language or identity standard.

## Relationship to Definitions 01–09

This definition depends on and preserves the boundaries established by the preceding LegaX definitions:

- **01 — LegaX:** establishes LegaX as extensible intelligent living infrastructure whose consequential operations require authority, authorization, lifecycle, accountability, and evidence.
- **02 — Identity:** establishes the persistent recognized entity; lifecycle governs its state and changes without turning identity into authority.
- **03 — Authentication:** establishes current confidence in an actor's control of an accepted authentication mechanism; lifecycle governs credential, session, and authentication state.
- **04 — Account:** establishes the governed interaction relationship; account security and recovery are lifecycle-managed.
- **05 — Administration:** establishes governed management of authority structures; administrative assignments, policies, delegations, and approvals require lifecycle controls.
- **06 — Authorization:** establishes the runtime decision for a concrete operation; lifecycle and policy provide state and rule inputs but do not replace authorization.
- **07 — Access:** enforces authorized interaction; lifecycle controls credential, resource, and access validity.
- **08 — Resources & Physical World:** establishes the governed representation of resources and physical reality; resource state, availability, safety, and operational lifecycle affect what may safely occur.
- **09 — Economic & Commerce:** establishes governed economic relationships and transaction states; lifecycle prevents attempted, authorized, processing, settled, refunded, and disputed states from being conflated.

Lifecycle & Policy therefore acts as a cross-cutting control foundation that makes these domains stateful, governed, time-aware, and auditable without collapsing their distinct responsibilities.

## Implementation boundary

This document defines the canonical semantic and architectural contract for Lifecycle & Policy.

It does **not** yet prescribe:

- a database schema;
- specific tables;
- ORM models;
- a particular policy language;
- a specific policy engine;
- application framework;
- API route structure;
- frontend implementation;
- mobile implementation;
- deployment architecture.

Those implementation choices must be derived from this contract and tested against its invariants.

**Status:** Foundational domain contract — definition and semantic model; implementation intentionally deferred.
