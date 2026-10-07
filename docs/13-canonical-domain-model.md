# LegaX — Canonical Domain Model

## 13 — Canonical Domain Model

**Status:** Foundational architecture contract — canonical semantic model; implementation intentionally deferred.

## 1. Purpose

The LegaX Canonical Domain Model defines the authoritative semantic vocabulary and relationship boundaries from which the platform's database model, APIs, execution engine, events, evidence model, integrations, services, and user interfaces may later be derived.

It is the bridge between the definitions in 01–12 and implementation.

The purpose is not to create one giant undifferentiated object model. LegaX must remain a set of governed domains that share canonical concepts and contracts while preserving domain ownership, lifecycle, authority, privacy, and source-of-truth boundaries.

A canonical concept in this document means:

- its meaning is shared across the ecosystem;
- its semantic boundary is stable;
- other domains may reference it without redefining it;
- its lifecycle and authority rules are explicit;
- its ownership/source-of-truth boundary is known;
- its use in authorization and consequential execution is governed.

A concept being canonical does not require a single physical database table, service, API, or microservice.

## 2. Canonical architectural chain

The primary LegaX relationship is:

**Entity → Identity → Account/Authentication → Participant → Participation → Context → Role → Capability → Authority → Authorization → Access → Action → Event → Evidence → Intelligence**

This is a conceptual control chain, not a mandatory one-to-one foreign-key chain.

The platform must preserve the following meanings:

- **Entity** is the real-world or digital thing being represented or referenced.
- **Identity** is LegaX's governed representation of an entity for recognition and continuity.
- **Account** is a governed platform interaction/security relationship.
- **Authentication** establishes confidence about the current actor operating through an accepted authentication mechanism.
- **Participant** is an entity/identity represented as an actor in a governed participation relationship.
- **Participation** establishes the relationship and scope in which the participant participates.
- **Context** describes the relevant situation, environment, purpose, resource domain, time, jurisdiction, or operational conditions.
- **Role** describes a contextual function or responsibility.
- **Capability** describes an ability that may be available to a subject.
- **Authority** establishes governed entitlement to govern, control, decide, or act within a scope.
- **Authorization** decides whether a specific requested operation is permitted under current conditions.
- **Access** enforces an authorized interaction with a protected resource.
- **Action** represents a consequential operation requested or executed.
- **Event** records an occurrence.
- **Evidence** preserves supporting information and provenance.
- **Intelligence** transforms governed inputs into observations, findings, predictions, recommendations, or other decision-support outputs without becoming authority by default.

No link in this chain may be collapsed merely for implementation convenience.

## 3. Entity and identity boundary

### 3.1 Entity

An **Entity** is the real-world or digital thing that LegaX needs to recognize, relate to, govern, observe, control, or reference.

Possible entity classes include:

- person;
- household;
- organization;
- community;
- provider;
- worker;
- service;
- application;
- device;
- machine;
- system;
- external authority;
- resource;
- place;
- building;
- unit;
- facility;
- economic object;
- other legitimate domain object.

Entity is a semantic referent, not automatically a database table and not automatically an actor.

### 3.2 Identity

An **Identity** is the governed LegaX representation of an entity for recognition and continuity.

Identity may reference an Entity and maintain:

- identifiers;
- attributes;
- relationships;
- evidence;
- provenance;
- assurance;
- lifecycle;
- verification history.

Identity does not automatically mean:

- account;
- participant;
- authenticated actor;
- role;
- capability;
- authority;
- authorization;
- ownership;
- access.

### 3.3 Identifier

An **Identifier** distinguishes or references an identity or other governed object within a defined namespace.

An identifier is not automatically evidence of the claim it names.

Identifiers may be:

- LegaX-native;
- organization-specific;
- provider-specific;
- jurisdictional;
- device-specific;
- service-specific;
- integration-specific.

Namespace, issuer, validity, sensitivity, and provenance must be retained where material.

## 4. Actor, account, authentication, and credential model

### 4.1 Actor

An **Actor** is the entity or system that initiates, performs, or is attributed with an operation.

Actors may include:

- people;
- services;
- devices;
- organizations acting through an authorized representative;
- automated systems;
- external systems.

Actor is an operational concept. It must be resolved to a governed identity/service identity and relevant account or participation context where applicable.

### 4.2 Account

An **Account** is the governed LegaX interaction and security relationship through which an authenticated subject operates.

An account may contain or reference:

- authentication relationships;
- authenticators/credentials;
- sessions;
- recovery state;
- security state;
- preferences;
- lifecycle state.

Account is not the canonical identity of the underlying entity.

### 4.3 Authentication Session

An **AuthenticationSession** represents the current authenticated interaction state and its assurance/security conditions.

It may reference:

- actor;
- account;
- authentication event;
- authenticator;
- assurance level;
- authentication time;
- expiry;
- revocation;
- device/security posture;
- federation assertion where applicable.

A session is not authority.

### 4.4 Credential / Authenticator

A **Credential** or authenticator is a mechanism or assertion used to establish authentication or support an access/enforcement operation.

Examples include:

- password-derived authenticators;
- passkeys;
- cryptographic keys;
- hardware authenticators;
- OTP;
- device credentials;
- approved biometric assertions;
- QR/NFC credentials;
- physical credentials;
- service credentials;
- external identity assertions.

Credential possession/control does not automatically grant authority.

Raw biometric material must not become a universal authorization record merely because a biometric method exists.

## 5. Participation model

### 5.1 Participant

A **Participant** is the governed representation of an identity/entity acting within a participation relationship.

Participant should not be implemented as a second global identity.

The same underlying identity may participate in multiple contexts while retaining identity continuity.

### 5.2 Participation

A **Participation** establishes a governed relationship between a participant and a participating context or domain.

Examples:

- resident in a community;
- member of an organization;
- provider in a service;
- worker in a work relationship;
- visitor for a defined visit;
- customer of a service;
- participant in an award program;
- account holder in an economic relationship.

Participation may contain:

- participation type;
- scope;
- status;
- effective period;
- relationship source;
- terms;
- verification requirements;
- role assignments;
- capabilities;
- authority references;
- policy references;
- evidence.

Participation does not automatically grant authority.

### 5.3 Context

A **Context** defines the relevant environment or circumstances in which a request, relationship, decision, or action is evaluated.

Context can include:

- community;
- organization;
- service;
- workspace;
- place;
- building;
- unit;
- facility;
- transaction;
- project;
- time;
- jurisdiction;
- operational state;
- emergency condition;
- device/security conditions.

Context narrows or qualifies a decision. It does not itself create authority.

### 5.4 Role

A **Role** is a governed contextual function or responsibility assigned within a defined scope.

Examples:

- resident;
- provider;
- worker;
- community administrator;
- facility operator;
- reviewer;
- approver;
- driver;
- seller;
- buyer.

Role assignments are lifecycle-managed and scoped.

A role name is never a universal permission.

### 5.5 Capability

A **Capability** represents an ability that may be available to an actor, service, device, role, or other subject.

Examples:

- view resource;
- submit booking;
- operate a device;
- create an offer;
- perform a delivery;
- manage a facility;
- initiate a payment.

Capability is not authorization.

A capability may be constrained by:

- scope;
- target;
- context;
- policy;
- lifecycle;
- authority;
- time;
- risk;
- separation of duties.

## 6. Authority model

### 6.1 Authority

An **Authority** is a governed entitlement or power to govern, control, decide, approve, delegate, or act within a defined scope.

Authority must identify:

- authority holder;
- authority source;
- scope;
- permitted operation or domain;
- target/resource scope;
- effective period;
- lifecycle;
- delegation constraints;
- conditions;
- evidence/source;
- revocation rules.

Authority may originate from:

- ownership where legally and operationally applicable;
- governance;
- appointment;
- contract;
- delegated authority;
- organizational structure;
- explicit grant;
- regulatory or external authority;
- another governed source.

Authority is not created by:

- authentication;
- identity verification;
- account status;
- role name alone;
- capability alone;
- subscription alone;
- provider connectivity;
- AI recommendation.

### 6.2 Authority Assignment

An **AuthorityAssignment** binds an authority to a holder or delegated subject within a defined scope and lifecycle.

Authority assignment is distinct from role assignment.

### 6.3 Delegation

A **Delegation** transfers or extends a bounded authority from a source holder to another eligible subject under explicit rules.

Delegation must preserve:

- source authority;
- delegate;
- scope;
- duration;
- conditions;
- revocation;
- provenance;
- accountability.

Delegation cannot silently exceed the authority being delegated.

## 7. Authorization model

### 7.1 Action

An **Action** is a defined operation that may produce a consequential effect.

Examples:

- open access point;
- change a resource;
- create booking;
- submit payment;
- issue award;
- accept work;
- transfer economic value;
- modify governance;
- disclose sensitive information.

Action definition is distinct from an authorization decision.

### 7.2 Target

A **Target** is the object, resource, subject, relationship, or system against which an action is requested.

A target must be resolved explicitly enough to prevent unintended privilege expansion.

### 7.3 AuthorizationRequest

An **AuthorizationRequest** is the concrete request for permission to perform an action against a target under a context.

It should preserve, where relevant:

- request ID;
- actor;
- identity;
- account/session;
- participation;
- context;
- role/capability;
- authority;
- action;
- target;
- policy;
- lifecycle;
- authentication/security assurance;
- risk;
- approvals;
- time;
- jurisdiction;
- correlation/idempotency data.

### 7.4 AuthorizationDecision

An **AuthorizationDecision** is the governed result of evaluating an authorization request.

Canonical outcomes:

- ALLOW;
- DENY;
- INDETERMINATE;
- PENDING/REQUIRES_APPROVAL.

A decision is not an execution.

It must be bounded by:

- action;
- target;
- scope;
- context;
- policy version;
- authority source;
- effective period;
- required conditions.

### 7.5 AuthorizationPolicy

An **AuthorizationPolicy** contains governed rules used to evaluate requests.

Policy is not authority.

Policy lifecycle and versioning must preserve:

- owner;
- scope;
- version;
- effective time;
- precedence;
- status;
- change history;
- jurisdiction;
- approval requirements.

## 8. Access and enforcement model

### 8.1 AccessRequest

An **AccessRequest** asks for interaction with a protected digital, physical, economic, or other resource.

### 8.2 AccessDecision

An **AccessDecision** determines how an authorized request may be enforced.

It may select:

- one permitted method;
- multiple required methods;
- threshold methods;
- governed fallback;
- offline bounded operation;
- emergency procedure.

Authorization remains the permission boundary.

### 8.3 AccessMethod

An **AccessMethod** describes an enforcement/authentication mechanism such as:

- hand/palm through certified provider hardware;
- face;
- fingerprint;
- QR;
- NFC;
- device credential;
- physical credential;
- cryptographic key;
- visitor credential;
- service credential.

The method itself is not authority.

### 8.4 EnforcementCommand

An **EnforcementCommand** is the explicit command sent to an access controller, resource, provider, or digital enforcement point.

It must preserve:

- authorization reference;
- target;
- method;
- command ID;
- effective time;
- expiry where applicable;
- idempotency;
- correlation;
- expected outcome.

### 8.5 EnforcementResult

An **EnforcementResult** records the response from the enforcement mechanism.

Controller acknowledgement is not automatically proof that the physical/digital resource reached the desired final state.

Where needed, LegaX must separately observe or reconcile the resulting resource state.

## 9. Resource and physical-world model

### 9.1 Resource

A **Resource** is a digital, physical, spatial, economic, infrastructural, operational, or other governed object that can be referenced, protected, used, allocated, changed, observed, or acted upon.

Resources may include:

- buildings;
- units;
- rooms;
- facilities;
- gates;
- locks;
- elevators;
- devices;
- networks;
- services;
- data;
- capacity;
- inventory;
- money/value references;
- infrastructure;
- physical assets;
- digital assets.

Resource ownership, stewardship, custody, control, availability, and authorization are separate concepts.

### 9.2 Place

A **Place** is a spatial or geographic context that can contain, locate, connect, or contextualize resources and participation.

Location is not authority.

### 9.3 ResourceRelationship

A **ResourceRelationship** describes a governed relationship between an entity/participant and a resource.

Possible relationship types include:

- owns;
- leases;
- occupies;
- operates;
- manages;
- maintains;
- stores;
- controls;
- services;
- uses;
- is responsible for.

The relationship type, scope, legal basis, source, lifecycle, and evidence must be explicit.

### 9.4 ResourceState

A **ResourceState** describes the current governed operational condition of a resource.

Examples:

- available;
- occupied;
- reserved;
- active;
- inactive;
- degraded;
- maintenance;
- unavailable;
- locked;
- open;
- quarantined;
- unknown.

State is not ownership and is not authorization.

### 9.5 ResourceCapability

A **ResourceCapability** describes what a resource can technically or operationally do.

For example, a device may support:

- lock/unlock;
- meter reading;
- temperature measurement;
- network connectivity;
- access enforcement.

Technical capability does not grant an actor permission to use it.

## 10. Economic and commerce model

Economic and commerce concepts are canonical at the platform level, while each service owns its domain-specific commercial objects.

Canonical concepts include:

- EconomicResource;
- Offer;
- PriceQuote;
- CommercialIntent;
- Order;
- ContractReference;
- Reservation;
- PaymentIntent;
- PaymentAttempt;
- Settlement;
- Reconciliation;
- Refund;
- Reversal;
- Dispute;
- Fee;
- TaxReference;
- EconomicEvent.

### 10.1 CommercialIntent

A **CommercialIntent** represents an intended economic exchange or commitment before it necessarily becomes a completed transaction.

### 10.2 Order

An **Order** records a governed commercial request/commitment in a service domain.

Order does not automatically mean:

- payment completed;
- fulfillment completed;
- ownership transferred.

### 10.3 PaymentIntent

A **PaymentIntent** represents the intended payment operation and its commercial purpose.

It is distinct from:

- authorization;
- payment attempt;
- provider acceptance;
- settlement;
- reconciliation.

### 10.4 Settlement

**Settlement** represents confirmation that funds/value were settled through the relevant financial rail or provider process.

Settlement is not automatically final internal reconciliation.

### 10.5 Reconciliation

**Reconciliation** compares LegaX records with provider/network/financial assertions and resolves differences.

Unknown provider state must remain unknown until sufficient evidence exists.

## 11. Lifecycle and policy model

### 11.1 Lifecycle

A **Lifecycle** defines the governed state progression of an object.

Every consequential lifecycle must define:

- states;
- valid transitions;
- transition actor;
- preconditions;
- verification requirements;
- review/approval requirements;
- authorization requirements;
- effective time;
- expiry;
- side effects;
- events;
- evidence;
- failure behavior;
- reconciliation behavior.

### 11.2 State

A **State** describes the current governed condition of an object.

State is not merely a UI label.

### 11.3 TransitionRequest

A **TransitionRequest** requests movement from one state to another.

Canonical pattern:

**STATE → TRANSITION REQUEST → VALIDATION → REVIEW/VERIFICATION → AUTHORIZATION → TRANSITION EXECUTION → NEW STATE → EVENT → EVIDENCE**

### 11.4 Policy

A **Policy** is a governed rule set used to constrain or determine behavior.

Policy must remain separate from:

- authority;
- authorization decision;
- implementation code;
- AI recommendation.

## 12. Event and evidence model

### 12.1 Event

An **Event** records an occurrence or meaningful change.

An event should preserve, where applicable:

- event ID;
- event type;
- subject;
- source;
- actor;
- occurrence time;
- effective time;
- correlation ID;
- causation ID;
- command ID;
- schema version;
- sensitivity;
- provenance;
- payload/reference.

LegaX should use a common event envelope compatible with established event interoperability patterns such as CloudEvents rather than inventing incompatible per-service envelopes. CloudEvents exists specifically to provide a common way to describe event data across services and platforms. citeturn0search0

### 12.2 Evidence

**Evidence** is information supporting a claim, assertion, observation, decision, state, action, or event.

Evidence must preserve:

- source;
- provenance;
- capture time;
- subject;
- claim/purpose;
- processing history;
- integrity information where required;
- verification status;
- sensitivity;
- retention requirements;
- corrections/supersession.

Evidence is not automatically truth.

### 12.3 Observation

An **Observation** records an observed fact or signal from a defined source.

Observation must preserve source and observation conditions.

### 12.4 Verification

**Verification** is a governed process that evaluates a claim/evidence against defined criteria.

Verification is not authorization.

### 12.5 Finding

A **Finding** is a governed conclusion produced from evidence, observations, rules, or analysis.

A finding must preserve its basis and provenance.

## 13. Intelligence model

### 13.1 IntelligenceOutput

An **IntelligenceOutput** represents an AI/model/rules/analytics-derived result.

Types may include:

- observation;
- classification;
- anomaly signal;
- prediction;
- forecast;
- matching result;
- recommendation;
- explanation;
- summary;
- proposed action.

### 13.2 IntelligenceProvenance

Every consequential intelligence output should be traceable to:

- input references;
- source/provenance;
- model or ruleset identity;
- version;
- processing time;
- uncertainty/confidence where meaningful;
- evaluation status;
- reviewer/governance status where required.

### 13.3 Intelligence boundary

Intelligence may inform:

- identity review;
- fraud/risk detection;
- matching;
- routing;
- forecasting;
- anomaly detection;
- operational recommendations;
- service optimization;
- decision support.

Intelligence cannot independently create:

- identity;
- authority;
- consent;
- authorization;
- ownership;
- legal commitment;
- payment authorization;
- physical access permission.

The controlled path remains:

**Inputs → Intelligence → Recommendation/Signal → Governed Review/Policy → Authorization → Action → Event → Evidence**

## 14. Governance and administration model

Canonical governance concepts include:

- GovernanceScope;
- AuthorityAssignment;
- Delegation;
- Policy;
- Approval;
- Review;
- SeparationOfDutiesConstraint;
- AdministrativeAction.

### 14.1 GovernanceScope

A **GovernanceScope** defines the domain/resource/context over which an authority or administrative responsibility applies.

Scope must be explicit.

### 14.2 Approval

An **Approval** records an authorized approval required by policy or lifecycle.

Approval is attributable, bounded, lifecycle-aware, and cannot be silently reused for a different operation unless explicitly designed for that purpose.

### 14.3 Review

A **Review** records governed human or system review of a claim, transition, decision, evidence set, or other object.

Review is distinct from authorization unless the governing process explicitly makes review an authorization prerequisite.

## 15. Service model

A **LegaService** is a domain service built on the shared LegaX foundations.

Canonical service-level concepts include:

- ServiceDefinition;
- ServiceParticipant;
- ServiceContext;
- ServiceCommand;
- ServiceState;
- ServiceEvent;
- ServiceEvidence;
- ServiceProviderReference;
- ServiceIntegration;
- ServiceOutcome.

A LegaService may own additional domain entities, but it must not redefine the meaning of foundational concepts.

Examples:

- LegaPay owns payment-domain objects.
- LegaAccess owns access-domain objects.
- LegaRide owns mobility-domain objects.
- LegaNetwork owns connectivity-domain objects.
- LegaBooking owns booking-domain objects.
- LegaMarket owns marketplace-domain objects.
- LegaFood owns food-order/fulfillment-domain objects.
- LegaHealth owns health-coordination-domain objects.
- LegaAds owns advertising-domain objects.
- LegaAward owns award-domain objects.
- LegaWork owns work/economic-workflow objects.

Services consume shared Identity, Account, Participation, Context, Authority, Authorization, Resource, Lifecycle, Event, Evidence, Security, and Intelligence contracts.

## 16. Canonical relationships

The following relationships are normative.

### Identity and participation

**Entity → Identity**

An entity may have a governed LegaX identity representation.

**Identity → Participant**

An identity may be represented as a participant when it enters a governed participation relationship.

**Participant → Participation**

A participant may have multiple participation relationships.

**Participation → Context**

Participation occurs within defined context/scope.

### Role and authority

**Participation → RoleAssignment**

A participation may have one or more governed role assignments.

**Role → Capability**

A role may make capabilities available subject to governance.

**Authority → Capability/Action Scope**

Authority may permit exercise or governance of defined capabilities/actions within scope.

**AuthorityAssignment → Participant/Actor**

Authority is assigned to a governed holder.

### Authorization

**Actor + AuthenticationSession + Participation + Context + Role + Capability + Authority + Policy + Action + Target → AuthorizationRequest → AuthorizationDecision**

This relationship is contextual and time-sensitive.

### Access

**AuthorizationDecision → AccessRequest → AccessDecision → EnforcementCommand → EnforcementResult → ResourceState/Observation**

An access method cannot bypass authorization.

### Execution

**AuthorizationDecision → Action → ExecutionOutcome → Event → Evidence**

The action is not the authorization decision.

### Intelligence

**Event/Evidence/Other Governed Inputs → IntelligenceOutput → Review/Policy → Authorization/Action**

Intelligence does not become authority merely by being generated.

## 17. Ownership and source-of-truth boundaries

LegaX must distinguish at least four concepts:

1. **Canonical LegaX representation** — the object LegaX governs under its own model.
2. **External source assertion** — a provider or external authority's statement about an object/state.
3. **Observed state** — what LegaX directly observes through an authorized mechanism.
4. **Derived state/intelligence** — what LegaX infers, predicts, or recommends.

A provider may remain authoritative for a resource or transaction it independently controls. LegaX must preserve that provider's source identity and assertion rather than silently copying it into a universal truth field.

Where multiple sources disagree, the domain must define:

- source precedence;
- freshness;
- verification;
- reconciliation;
- dispute handling;
- unknown state;
- correction/supersession.

## 18. Canonical versus domain-owned entities

### Canonical shared entities

The following are platform-wide semantic concepts:

- Entity
- Identity
- Identifier
- Account
- Credential/Authenticator
- AuthenticationSession
- Actor
- Participant
- Participation
- Context
- Role
- Capability
- Authority
- AuthorityAssignment
- Delegation
- Action
- Target
- AuthorizationRequest
- AuthorizationDecision
- AuthorizationPolicy
- Resource
- Place
- ResourceRelationship
- ResourceState
- ResourceCapability
- Lifecycle
- State
- TransitionRequest
- Policy
- Event
- Evidence
- Observation
- Verification
- Finding
- IntelligenceOutput
- IntelligenceProvenance
- GovernanceScope
- Approval
- Review

### Domain-owned entities

Services must own entities whose semantics are specific to their domain.

Examples:

**LegaPay**
- PaymentIntent
- PaymentAttempt
- PaymentMethodReference
- Mandate
- Settlement
- Refund
- ReconciliationRecord

**LegaAccess**
- AccessPoint
- AccessResource
- AccessCredentialBinding
- AccessMethod
- EnforcementCommand
- ControllerReference
- VisitorAccessGrant

**LegaRide**
- RideRequest
- DriverAssignment
- VehicleReference
- Route
- Trip
- FareCalculation
- SafetyIncident

**LegaNetwork**
- NetworkPlan
- Endpoint
- ConnectivitySession
- CapacityAllocation
- ProvisioningRequest
- UsageRecord

**LegaBooking**
- AvailabilityWindow
- CapacityUnit
- Slot
- Hold
- Reservation
- Attendance
- Waitlist

**LegaMarket**
- Listing
- ProductReference
- InventoryReservation
- Cart
- OrderLine
- Fulfillment
- ShipmentReference
- Promotion

**LegaFood**
- MenuVersion
- FoodOffering
- IngredientReference
- FoodOrder
- PreparationTask
- Delivery
- Substitution
- FoodIncident

**LegaHealth**
- CareRelationship
- Appointment
- EncounterReference
- ClinicalDocumentReference
- ConsentReference
- Referral
- PrescriptionReference

**LegaAds**
- Campaign
- Creative
- Placement
- AudiencePolicy
- Delivery
- Impression
- ConversionReference
- AdvertisingMeasurement

**LegaAward**
- AwardProgram
- Criterion
- EligibilityRule
- Candidate
- Evaluation
- Selection
- Award
- Benefit
- Redemption
- Appeal

**LegaWork**
- ProfessionalProfile
- Skill
- SkillEvidence
- Opportunity
- CandidateMatch
- Proposal
- ContractReference
- Project
- Milestone
- Deliverable
- WorkReview

A service-owned entity may reference canonical entities but must not redefine their semantics.

## 19. Aggregate and transaction boundaries

LegaX must not turn the canonical domain model into one giant transactional aggregate.

The implementation should identify bounded consistency boundaries around domain operations.

Examples include:

- Identity aggregate;
- Account/security aggregate;
- Participation aggregate;
- Authority assignment aggregate;
- Authorization decision;
- Access request/enforcement operation;
- Resource state aggregate;
- Payment intent aggregate;
- Booking/reservation aggregate;
- Market order aggregate;
- Work project/deliverable aggregate.

Cross-domain workflows should normally use explicit commands, events, references, idempotency, and reconciliation rather than assuming one universal database transaction.

A domain may maintain local read models or projections, but projections must not silently become the canonical source of truth.

## 20. Cross-domain reference rules

A domain reference should normally identify:

- referenced object type;
- stable object ID;
- source domain;
- relationship type;
- scope where relevant;
- lifecycle status where relevant;
- version/effective information where required.

A copied display attribute must not silently become a second canonical authority.

For sensitive domains, references should be preferred over unrestricted duplication.

## 21. Temporal model

Consequential canonical entities should distinguish as appropriate:

- created_at;
- updated_at;
- occurred_at;
- effective_at;
- expires_at;
- revoked_at;
- observed_at;
- verified_at;
- superseded_at.

The platform must distinguish:

**when a record was stored** from **when the represented fact occurred** and **when a decision became effective**.

This is required for authorization, lifecycle, evidence, payments, access, physical state, and provider reconciliation.

## 22. Concurrency and idempotency model

Canonical consequential operations must support:

- command IDs;
- idempotency keys where repeated requests could produce repeated effects;
- expected/current version checks;
- optimistic or equivalent concurrency controls;
- state preconditions;
- duplicate detection;
- correlation IDs;
- causation IDs;
- safe retry behavior;
- unknown-outcome handling;
- reconciliation where external systems are involved.

The canonical model must never assume:

**request received = action completed.**

Likewise:

**provider acknowledged = LegaX state proven.**

## 23. Security model implications

The domain model must support zero-trust assumptions.

Network location, organizational affiliation, ownership, or connectivity must not create implicit trust. NIST's zero-trust guidance emphasizes protecting resources rather than trusting entities because of network location, and its cloud-native guidance explicitly calls for identity-based and granular authorization for users and services. citeturn0search7turn0search1

Therefore:

- service identities are first-class actors;
- device/system identities may be first-class actors;
- service-to-service authentication is separate from user authentication;
- authorization must evaluate the requesting service/system and target;
- network location is contextual data, not authority;
- resource protection is explicit.

The identity/authentication model should remain compatible with modern assurance, authenticator, federation, and assertion concepts. NIST SP 800-63-4 is the current revision of the Digital Identity Guidelines and separates identity proofing, authentication, federation, and assertions into distinct concerns. citeturn0search2turn0search6turn0search12

## 24. Privacy model implications

The canonical model must minimize unnecessary duplication of:

- identity attributes;
- biometric data;
- health information;
- location;
- access history;
- payment information;
- community participation;
- advertising data;
- work information.

A reference to a canonical object is not permission to disclose its underlying data.

Authorization to access a record must be evaluated separately from the existence of the relationship to that record.

Derived intelligence must inherit appropriate sensitivity and provenance controls from its inputs where required.

## 25. Conflicts identified and resolved

### Identity vs Entity

**Resolution:** Entity is the referent; Identity is LegaX's governed representation for recognition.

### Identity vs Account

**Resolution:** Identity is the recognized entity; Account is the platform interaction/security relationship.

### Account vs Authentication

**Resolution:** Account is the persistent platform relationship; Authentication is the process/result establishing current control of an accepted mechanism.

### Participant vs Identity

**Resolution:** Identity is global/continuous; Participant is contextual representation for participation.

### Participation vs Context

**Resolution:** Participation is the relationship; Context is the environment/situation in which an operation or relationship is evaluated.

### Role vs Capability

**Resolution:** Role expresses function/responsibility; Capability expresses possible ability.

### Capability vs Authority

**Resolution:** Capability describes ability; Authority establishes governed entitlement.

### Authority vs Authorization

**Resolution:** Authority is the underlying governed power; Authorization is the runtime decision for a concrete operation.

### Authorization vs Access

**Resolution:** Authorization decides permission; Access enforces the permitted interaction.

### Access vs Action

**Resolution:** Access controls interaction; Action represents the consequential operation.

### Action vs Event

**Resolution:** Action is an operation; Event records an occurrence.

### Event vs Evidence

**Resolution:** Event records what the system says occurred; Evidence supports claims about what occurred.

### Evidence vs Intelligence

**Resolution:** Evidence supports claims; Intelligence derives signals/conclusions from governed inputs.

### Intelligence vs Authority

**Resolution:** Intelligence does not create authority.

### Resource vs Ownership

**Resolution:** Resource is the object; ownership is one possible relationship to it.

### Provider vs Source of Truth

**Resolution:** A provider may be authoritative for its own controlled domain, but its assertions do not automatically redefine LegaX canonical state.

### Policy vs Authority

**Resolution:** Policy constrains/evaluates behavior; authority establishes the legitimate power on which authorization may rely.

## 26. Non-negotiable invariants

1. One entity must not receive duplicate LegaX identities merely because it participates in multiple contexts.
2. Identity never equals Account.
3. Account never equals Identity.
4. Authentication never equals Authorization.
5. Authentication never grants authority.
6. Identity verification never grants authority.
7. Participant never replaces Identity.
8. Participation never automatically grants authorization.
9. Context never grants authority.
10. Role never automatically grants permission.
11. Capability never automatically grants permission.
12. Authority must have an explicit holder and scope.
13. Authorization must evaluate a concrete operation and target.
14. Authorization is deny-by-default where permission is not established.
15. Access cannot bypass authorization.
16. An access method cannot become authority merely because it is convenient or technically available.
17. Palm/hand, face, fingerprint, QR, NFC, device credentials, and other access methods remain mechanisms/assertions, not universal authority.
18. An enforcement acknowledgement is not automatically proof of the final resource state.
19. Action and authorization decision remain separate.
20. An event is not automatically evidence of every claim associated with it.
21. Evidence is not automatically truth.
22. Intelligence output is not automatically evidence, authority, or authorization.
23. AI cannot manufacture authority, consent, ownership, or permission.
24. Provider acceptance is not automatically LegaX canonical completion.
25. External assertions retain source and provenance.
26. Unknown external state must not silently become failure or success.
27. State transitions must be governed rather than arbitrary mutation.
28. Policy is not authority.
29. Policy evaluation is not execution.
30. Cross-domain references must not silently create duplicate sources of truth.
31. Consequential operations require appropriate attribution, lifecycle, authorization, idempotency, concurrency, event, and evidence controls.
32. Sensitive information must not be replicated merely for convenience.
33. Temporal validity is part of the meaning of consequential authority and decisions.
34. Revocation and expiry must be enforceable according to the risk of the operation.
35. Service-specific models may extend the platform but may not redefine foundational semantics.
36. The domain model must remain extensible without weakening its boundaries.

## 27. Derivation of implementation model

The implementation must be derived in this order:

**Canonical semantic entity → ownership/source-of-truth → lifecycle → relationships → invariants → command model → authorization inputs → state transitions → events/evidence → API contract → persistence model → UI**

The database must therefore not be designed first and then used to discover what the domain means.

Likewise, UI labels must not define canonical domain semantics.

## 28. Relationship to Definitions 01–12

This model is derived from and constrained by the existing LegaX definitions:

- **01 LegaX** — provides the constitutional boundary and ecosystem purpose.
- **02 Identity** — defines identity continuity, identifiers, evidence, provenance, and separation from authority.
- **03 Authentication** — defines authenticated actor/session/assurance semantics.
- **04 Account** — defines the platform interaction/security relationship.
- **05 Administration** — defines governed management of authority structures, policies, delegation, approvals, and configuration.
- **06 Authorization** — defines the runtime permission decision.
- **07 Access** — defines enforcement and multi-method access semantics.
- **08 Resources & Physical World** — defines physical, digital, spatial, infrastructural, and resource boundaries.
- **09 Economic & Commerce** — defines economic and commercial semantics.
- **10 Lifecycle & Policy** — defines state, transitions, policy, review, verification, authorization, execution, and evidence.
- **11 Events, Evidence & Intelligence** — defines accountability, provenance, evidence, intelligence, and AI boundaries.
- **12 LegaServices** — defines how domain services consume shared foundations and maintain service-specific contracts.

The present document does not replace those definitions. It resolves them into one coherent canonical domain vocabulary and relationship model.

## 29. Readiness gate for Phase 14

Phase 13 is complete only when implementation work can answer all of the following without inventing new foundational semantics:

1. What is the canonical representation of the entity?
2. What is the identity?
3. What is the account?
4. Who is the current actor?
5. What participation relationship applies?
6. What context applies?
7. What role/capability applies?
8. What authority exists and who holds it?
9. What policy applies?
10. What action is requested?
11. What is the target?
12. What authorization decision is required?
13. How is access enforced?
14. What state transition occurs?
15. What event records the occurrence?
16. What evidence supports the result?
17. What intelligence may be derived?
18. Which domain owns the object?
19. Which system is authoritative?
20. What happens if external state is unknown?
21. What happens on retry or duplicate request?
22. What happens under concurrent change?
23. What is the effective time?
24. What is the expiry/revocation behavior?
25. What sensitive data is actually required?
26. What must be referenced instead of duplicated?
27. What must be authorized before execution?
28. What must never be inferred from convenience, role, location, authentication, or AI?

If any answer requires a service to invent its own meaning for a foundational concept, Phase 13 is not complete.

**Status:** Foundational domain contract — canonical semantic model established; implementation remains deferred until subsequent architecture gates are completed.
