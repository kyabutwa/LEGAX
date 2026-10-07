# LegaX — Canonical Relationship Model

## 14 — Canonical Relationship Model

**Status:** Foundational architecture contract — normative relationship semantics; implementation intentionally deferred.

## 1. Purpose

Phase 13 established the canonical entities. Phase 14 establishes the relationship layer between them:

- who or what may relate;
- what the relationship means;
- who owns the relationship;
- which source is authoritative;
- scope;
- lifecycle;
- evidence and provenance;
- what may safely be inferred;
- what MUST NOT be inferred;
- how the relationship participates in authorization and consequential execution.

A relationship is not merely a foreign key. A database reference only says that two records are connected. A canonical LegaX relationship must also explain why the relationship exists, who established it, under what scope, for how long, from what source, with what evidence, and with what consequences.

## 2. Relationship grammar

A canonical relationship is:

**SUBJECT → RELATIONSHIP → OBJECT**

with governed metadata:

- relationship type;
- governing domain;
- source of truth;
- scope;
- lifecycle;
- effective period;
- provenance;
- evidence;
- conditions;
- revocation/expiry;
- privacy classification;
- version;
- supersession;
- verification state where applicable.

A relationship may be direct, contextual, delegated, asserted, observed, verified, derived, proposed, historical, temporary, or conditional. The relationship type MUST make material distinctions explicit.

## 3. Relationship categories

### Identity relationships
Recognition and continuity: Entity → Identity; Identity → Identifier; Identity → Account; Identity → Evidence.

### Participation relationships
Contextual involvement: Identity → Participant; Participant → Participation; Participation → Community/Organization/Service/Program/Context.

### Functional relationships
Function and responsibility: Participation → RoleAssignment → Role; Role → Capability.

### Governance relationships
Legitimate power and delegation: Authority → AuthorityAssignment → Participant/Actor; Authority → GovernanceScope; Authority → Delegation.

### Authorization relationships
Concrete runtime permission: AuthorizationRequest → AuthorizationDecision; AuthorizationDecision → Action/AccessRequest.

### Enforcement relationships
Authorized interaction with a resource: AccessRequest → Resource; AccessDecision → AccessMethod; AccessDecision → EnforcementCommand; EnforcementResult → ResourceState/Observation.

### Resource relationships
Ownership, occupancy, operation, maintenance, custody, use, stewardship, control, location and containment.

### Economic relationships
Commercial, contractual, financial, employment, service, ownership, entitlement and obligation relationships.

### Evidence/provenance relationships
Evidence → supports → Claim/Relationship; Observation → derived from → Source; IntelligenceOutput → derived from → governed inputs.

## 4. Relationship lifecycle

Every consequential relationship MUST have a lifecycle appropriate to its semantics.

A generic lifecycle is:

**PROPOSED → PENDING → ACTIVE → SUSPENDED → EXPIRED/REVOKED → CLOSED/SUPERSEDED**

Not every relationship requires every state.

- **PROPOSED:** suggested but not established.
- **PENDING:** required acceptance, verification, approval or external confirmation remains outstanding.
- **ACTIVE:** valid within scope and effective period.
- **SUSPENDED:** historically recognized but temporarily not exercisable.
- **EXPIRED:** natural end reached.
- **REVOKED:** intentionally invalidated before natural end.
- **CLOSED:** completed and no longer operational.
- **SUPERSEDED:** replaced by a newer governed version.

Critical distinctions:

**PROPOSED ≠ ACTIVE.**  
**PENDING ≠ AUTHORIZED.**  
**SUSPENDED ≠ ACTIVE.**  
**REVOKED ≠ DELETED.**

## 5. Relationship ownership

A relationship MUST have a governing owner/domain.

Ownership of a relationship means responsibility for its semantic lifecycle and canonical status. It does not necessarily mean legal ownership of the related objects.

Examples:

- Identity ↔ Account: Identity/Account domain.
- Participation ↔ Community: Participation/community domain.
- RoleAssignment: Administration/governance domain.
- AuthorityAssignment: Governance/Administration.
- AuthorizationRequest/Decision: Authorization domain.
- Access enforcement: Access domain.
- Occupancy: resource/community/property domain.
- Payment relationships: LegaPay/economic domain.
- Worker engagement: LegaWork/economic domain.
- Provider-service relationship: relevant LegaService domain.

A domain may reference a relationship it does not own, but MUST NOT silently redefine it.

## 6. Source-of-truth model

Every consequential relationship MUST distinguish:

1. LegaX canonical relationship.
2. External source assertion.
3. Observed relationship/state.
4. Verified relationship.
5. Derived relationship.
6. Proposed relationship.

An external assertion does not automatically become canonical truth.

LegaX MUST retain source identity, external identifiers, assertion time, freshness and reconciliation status when external systems are involved.

## 7. Scope model

Every consequential relationship MUST define its scope.

Possible scopes include:

- global;
- organization;
- community;
- service;
- workspace;
- project;
- building;
- unit;
- facility;
- resource;
- device;
- transaction;
- geography;
- jurisdiction;
- time window;
- purpose;
- data domain.

Scope may be multidimensional.

A relationship scoped to one community, service, unit, resource or contract MUST NOT be interpreted globally.

**Scope does not itself create authority.**

## 8. Time model

Consequential relationships may require:

- created_at;
- effective_at;
- expires_at;
- suspended_at;
- revoked_at;
- closed_at;
- observed_at;
- verified_at;
- superseded_at.

The system MUST distinguish record creation time, represented-fact time, effective time, observation time and verification time.

A currently active row does not prove that the relationship was active at an earlier historical moment.

## 9. Evidence and provenance

Relationships may be established or changed by:

- explicit agreement;
- verified credential;
- organizational record;
- community governance decision;
- contract;
- appointment;
- ownership record;
- provider assertion;
- authorized device observation;
- administrative action;
- legally recognized document;
- other governed evidence.

Evidence must preserve source, claim supported, time, validity, provenance, verification state, integrity, sensitivity and retention requirements.

Conflicting evidence MUST NOT be silently collapsed.

## 10. Inference model

### Direct
Explicitly established by a governed operation or authoritative source.

### Verified
Established after defined verification criteria are satisfied.

### Observed
Supported by an observation but not necessarily establishing the underlying legal or governance relationship.

### Inferred
Derived from other governed data or intelligence. It MUST retain inputs, method, time, uncertainty and provenance.

### Proposed
Suggested by a person, provider, workflow or intelligence system but not established.

**Inference and proposal MUST NOT silently replace canonical relationship state.**

## 11. Canonical relationship matrix

| Subject | Relationship | Object | Owner | Scope | Lifecycle | Safe inference | MUST NOT infer |
|---|---|---|---|---|---|---|---|
| Entity | represented by | Identity | Identity | namespace | active/revoked/superseded | governed representation exists | ownership, authority, authentication |
| Identity | has | Account | Account | platform | account lifecycle | account associated | current authentication or authority |
| Identity | represented as | Participant | Participation | participation scope | pending/active/ended | participant representation exists | universal membership or authority |
| Participant | has | Participation | Participation | explicit context | proposed/pending/active/ended | contextual involvement | authority |
| Participation | occurs in | Context | Context owner | context scope | active/expired | context applies | permission |
| Participation | assigned | Role | Administration | role scope | active/revoked | role assignment exists | permission/authority |
| Role | exposes | Capability | Capability/Administration | role scope | active/retired | capability may be available | authorization |
| Authority | assigned to | Participant/Actor | Governance | authority scope | active/revoked | governed authority exists | unrestricted power |
| Authority | applies to | GovernanceScope/Resource | Governance | explicit scope | active/expired | authority concerns scope | ownership unless established |
| Authority | delegated to | Delegate | Governance | bounded | pending/active/revoked | delegated authority exists | authority beyond source |
| Identity | authenticates through | Authenticator/Session | Authentication | session/context | active/expired/revoked | authentication state if valid | authority |
| AuthorizationRequest | evaluated into | AuthorizationDecision | Authorization | request scope | pending/resolved/expired | decision for request | permanent permission |
| AuthorizationDecision | permits/denies | Action | Authorization | exact action/target | valid/expired | decision applies under conditions | all future actions |
| AuthorizationDecision | leads to | AccessRequest | Access | resource/context | pending/resolved | enforcement may proceed | successful enforcement |
| AccessRequest | requests | Resource | Access | resource scope | requested/completed | requested interaction | ownership |
| AccessDecision | selects | AccessMethod | Access | enforcement scope | pending/resolved | method selected | authority |
| EnforcementCommand | targets | Controller/Resource | Access | exact target | issued/acked/failed/unknown | command sent | physical outcome |
| EnforcementResult | reports | ResourceState/Observation | Access/Resource | target/time | observed/reconciled | mechanism reported result | legal ownership |
| Action | targets | Target | Action domain | exact target | requested/executing/completed/failed/unknown | operation concerns target | authorization |
| Action | produces | Event | Action domain | action scope | recorded | occurrence recorded | every claim is proven |
| Event | supported by | Evidence | Evidence | event/claim scope | captured/verified | evidence supports stated claim | all associated claims |
| Evidence | supports | Claim/Relationship | Evidence | claim scope | active/superseded | supporting material exists | truth |
| Evidence/Event | informs | IntelligenceOutput | Intelligence | analysis scope | generated/reviewed | output derived from inputs | authority |
| IntelligenceOutput | recommends | Action/Decision | Intelligence + domain | bounded | proposed/accepted/rejected | recommendation exists | permission |
| Resource | located in | Place | Resource/Place | spatial | active/moved | location relationship | authority |
| Resource | contains | Resource | Resource/Place | hierarchy | active/removed | containment | ownership |
| Resource | owned by | Entity | Resource/Economic domain | legal scope | active/transferred | ownership if established | all operational authority |
| Resource | occupied by | Participant/Entity | Resource/Community | resource/time | pending/active/ended | occupancy | ownership |
| Resource | operated by | Organization/Provider/Worker | Resource/Service | operational scope | active/ended | operational responsibility | ownership |
| Resource | maintained by | Worker/Provider | Maintenance | resource/time | assigned/completed | maintenance responsibility | ownership |
| Device | associated with | Identity/Participant/Organization | Device/Identity | device scope | enrolled/revoked | association | device is person |
| Device | controls | Resource | Access/Resource | control scope | active/revoked | technical control | authority |
| Community | includes | Participant | Community/Participation | community | active/ended | participation | administration |
| Organization | engages | Worker | Work/Economic | work scope | proposed/active/ended | work relationship | employee status unless defined |
| Organization | provides | Service | Service/Organization | service scope | active/suspended/retired | provider relationship | every worker has authority |
| Provider | offers | Service | Service | service/jurisdiction | onboarding/active/terminated | provider-service relationship | universal regulatory authority |
| Service | operates on | Resource | Service | resource scope | active/retired | service-resource relationship | resource ownership |
| Service | serves | Participant | Service | service scope | pending/active/ended | service relationship | entitlement to all features |
| Unit | contained by | Building/Place | Resource/Place | hierarchy | active/removed | physical containment | ownership |
| Unit | occupied by | Participant/Entity | Resource/Community | unit/time | pending/active/ended | occupancy | ownership |
| EconomicRelationship | connects | Economic actors | Economic | contract/transaction | proposed/active/ended/disputed | governed economic relationship | universal authority |
| PaymentIntent | relates to | CommercialIntent/Order | LegaPay | transaction | payment lifecycle | intended payment | settlement |
| Settlement | settles | PaymentObligation/PaymentIntent | LegaPay | provider/rail | pending/settled/reversed | settlement assertion | reconciliation |
| ProviderAssertion | asserts | Object/State | External source | provider scope | received/accepted/rejected/superseded | provider assertion exists | canonical truth |

## 12. Identity → Account

This relationship means an Identity is associated with a LegaX Account.

**Owner:** Account domain with Identity as identity authority.  
**Scope:** LegaX account.  
**Lifecycle:** account lifecycle.

Can infer:

- account is associated with identity;
- account may contain authentication relationships and security state.

Cannot infer:

- current authentication;
- authority;
- community participation;
- resource ownership;
- resource access.

## 13. Identity → Participant

This relationship establishes an identity's participant representation for a governed participation domain.

**Owner:** Participation domain.  
**Scope:** explicit participation context.  
**Lifecycle:** proposed/pending/active/suspended/ended.

Can infer the participant representation exists.

Cannot infer global membership, role, authority, capability, access or current authentication.

## 14. Participant → Participation

Participation establishes contextual involvement.

Examples:

- resident in community;
- provider in service;
- worker in organization/project;
- customer in service;
- visitor for visit;
- candidate in award program.

**Owner:** domain governing the participation type.

Can infer only the defined participation relationship.

Cannot infer authority, ownership, unrestricted access, consent to unrelated processing or economic entitlement.

## 15. Participation → Context

Context defines the environment/situation in which participation is meaningful.

A context may be a community, organization, service, workspace, project, place, building, unit, transaction, time period or jurisdiction.

Can infer that the participation is evaluated within that context.

Cannot infer authority from context alone.

## 16. Participation → Role

A role assignment gives a participant a defined function/responsibility within scope.

**Owner:** Administration/governance or relevant domain.

Can infer the role assignment within scope and lifecycle.

Cannot infer universal permission.

A "Community Administrator" role does not automatically authorize health-data access, community fund transfers, unrelated-community administration or every service operation.

## 17. Role → Capability

A role may expose a capability.

Can infer eligibility or availability of the capability subject to governance.

Cannot infer authorization.

## 18. Authority → AuthorityAssignment → Participant/Actor

An AuthorityAssignment binds governed authority to an eligible holder.

Required semantics include:

- authority;
- holder;
- scope;
- source;
- effective period;
- status;
- conditions;
- delegation constraints;
- evidence;
- revocation.

Can infer that the holder has the defined authority within valid scope and lifecycle.

Cannot infer unrestricted authority, authority beyond scope, post-expiry authority or authorization for every action.

## 19. Authority → Scope

Authority MUST be scoped by object/resource, organization, community, service, geography, operation, time, jurisdiction, purpose or another explicit dimension as appropriate.

A broad-looking scope MUST NOT be interpreted beyond its defined semantics.

## 20. AuthorizationRequest → AuthorizationDecision

The request asks whether a specific operation is permitted; the decision is the governed evaluation result.

**Owner:** Authorization domain.

Typical lifecycle:

**CREATED → EVALUATING → ALLOW/DENY/INDETERMINATE/PENDING → EXPIRED/REVOKED**

A decision applies only to the defined action, target, scope, policy/version, authority, time and conditions.

It does not create permanent permission or new authority.

## 21. AuthorizationDecision → AccessRequest

When an authorized operation requires enforcement, the authorization result becomes an input to Access.

Access consumes authorization; it does not redefine the authorization decision.

A positive authorization does not prove successful physical or digital enforcement.

## 22. AccessRequest → Resource

An AccessRequest identifies the protected resource or boundary.

Can infer requested target resource.

Cannot infer ownership, occupancy, successful access, authority or final resource state.

## 23. Action → Target

An Action identifies the object/resource/relationship/system being acted upon.

Can infer what the operation concerns.

Cannot infer authorization.

## 24. Action → Event

Execution or meaningful lifecycle change produces an event.

Can infer that the system recorded an occurrence according to event semantics.

Cannot infer that every business claim in the event is true.

## 25. Event → Evidence

Evidence may support claims about an event.

Can infer only claims explicitly supported by the evidence.

Cannot infer that every event field or downstream conclusion is proven.

## 26. Evidence → IntelligenceOutput

Governed evidence, events, observations and other inputs may produce intelligence.

Can infer that the output was derived from stated inputs using the stated method/provenance.

Cannot infer truth, authority, consent, ownership or authorization merely from the intelligence output.

## 27. Person ↔ Community

Canonical path:

**Person Entity → Identity → Participant → Participation → Community**

Distinct participation types may include resident, member, visitor, worker, provider, volunteer, owner, occupant, administrator and guest.

These MUST NOT be collapsed where consequences differ.

Community participation does not automatically mean property ownership, administration, facility-wide access, access to other residents' data, financial authority, employment or consent to unrelated processing.

## 28. Community ↔ Organization

Possible relationships include:

- governed by;
- managed by;
- operated by;
- contracted with;
- served by;
- affiliated with;
- owned by where legally applicable;
- represented by.

Critical distinctions:

**Managed by ≠ owned by.**  
**Contracted with ≠ governed by.**  
**Served by ≠ administered by.**

## 29. Organization ↔ Person/Identity

Organizations may relate to people through employment, contracting, membership, representation, governance, ownership, customer relationships and service relationships.

An organization having an identity record does not prove employment.

A worker relationship does not automatically grant administrative authority.

## 30. Organization ↔ Provider

A provider may be a person, organization or other eligible entity depending on the service model.

Therefore:

**Provider ≠ necessarily Organization.**

A provider relationship should identify provider, service, status, scope, jurisdiction, credential/licence references where relevant, terms and lifecycle.

Provider status does not automatically establish regulatory authorization.

## 31. Provider ↔ Service

This relationship establishes that a provider is registered, contracted, eligible or otherwise governed to offer a service within scope.

Typical lifecycle:

**ONBOARDING → PENDING_REVIEW → ACTIVE → SUSPENDED → TERMINATED**

Can infer the provider-service relationship within scope.

Cannot infer every service permission, ownership of all service resources, universal licensing, worker authority or unrestricted participant-data access.

## 32. Provider ↔ Worker

Provider-worker relationships may be employment, contract, subcontract, assignment or temporary engagement.

The type and scope must be explicit.

Can infer the defined work relationship.

Cannot infer every provider permission, universal representation, resource ownership or unrestricted customer-data access.

Delegated authority must be explicit.

## 33. Worker ↔ Service

A worker may perform a service through assignment or engagement.

This may establish service eligibility, task assignment, skill requirements and operational responsibility.

It does not automatically establish provider ownership, service administration, financial authority or unrelated data access.

## 34. Service ↔ Participant

A service relationship may represent customer, subscriber, patient, rider, buyer, worker, provider, participant or beneficiary.

The relationship type must be explicit.

**Service participation ≠ service administration.**

## 35. Service ↔ Resource

A service may use, operate, reserve, manage, provide access to, monitor or maintain a resource.

Each is a separate relationship type.

Using or operating a resource does not imply ownership.

## 36. Device ↔ Identity/Participant/Organization

A device may be associated with an identity, assigned to a participant, owned by an organization, registered to a service, operated by a worker or enrolled as a system actor.

These relationships are independent.

**Device association ≠ human identity.**

## 37. Device ↔ Resource

A device may sense, control, enforce, monitor, communicate with or be embedded within a resource.

Technical control does not create authority.

A device that can unlock a door does not itself decide whether a person should enter.

Canonical path:

**Authorization → AccessDecision → EnforcementCommand → Device/Controller → Result → Observation/ResourceState**

## 38. Resource ↔ Place

A resource may be located in, contained by, attached to, connected to or serving a place.

**Location ≠ ownership.**  
**Location ≠ authority.**  
**Presence ≠ permission.**

## 39. Building ↔ Unit

A Unit is a resource within a building/place hierarchy.

Possible hierarchy:

**Place → Building → Unit → Facility/Room/Resource**

Containment is not ownership.

## 40. Unit ↔ Person/Participant

Distinct relationships include:

- occupies;
- leases;
- owns;
- visits;
- assigned to;
- maintains;
- services.

Occupancy does not mean ownership.

Ownership does not automatically mean unrestricted operational access where access is separately constrained.

## 41. Person ↔ Resource

A person may relate through ownership, custody, lease, occupancy, use, operation, maintenance, stewardship or access.

These relationships MUST remain distinct where they affect authorization, liability, economics, privacy or governance.

## 42. Community ↔ Place/Building/Unit

A community may have geographic association, governance scope, operational responsibility, service relationship, stewardship or management relationship with places and resources.

Community association with a place does not automatically establish property ownership.

## 43. EconomicRelationship

EconomicRelationship connects economic actors under a commercial, contractual, financial, employment, service, ownership, entitlement or obligation relationship.

It should preserve:

- parties;
- relationship type;
- object of exchange;
- legal/contractual basis;
- scope;
- value references;
- effective period;
- status;
- obligations;
- rights/entitlements;
- dispute state;
- evidence.

Critical distinctions:

**Economic relationship ≠ payment completed.**  
**Payment completed ≠ contract fulfilled.**  
**Contract fulfilled ≠ universal ownership transfer.**

## 44. Commercial relationship chain

Typical chain:

**Economic Actors → Offer/Quote → CommercialIntent → Order/Contract → PaymentIntent → PaymentAttempt → Provider/Network Processing → Settlement → Reconciliation → Fulfillment → Evidence**

Each link is independently governed.

Order ≠ settlement.  
Payment authorization ≠ fulfillment.  
Provider acceptance ≠ settlement proof.  
Fulfillment ≠ universal ownership transfer.

## 45. Relationship inheritance

LegaX MUST NOT use unrestricted relationship inheritance.

**Organization → owns Resource**

does not imply:

**Worker → owns Resource.**

**Provider → offers Service**

does not imply:

**Worker → has every Service capability.**

**Community → governs Facility**

does not imply:

**Every participant → may access Facility.**

Inherited consequences must be explicitly defined by policy, authority, role/capability or domain rule.

## 46. Relationship transitivity

A relationship MUST NOT be assumed transitive unless its type explicitly defines transitivity.

**Person → works for Organization**  
+ **Organization → provides Service**

does not imply:

**Person → administers Service.**

**Person → member of Community**  
+ **Community → operates Facility**

does not imply:

**Person → may operate Facility.**

This prevents hidden privilege escalation.

## 47. Relationship composition

Relationships may compose into authorization inputs, but composition is not itself authority.

Example:

**Identity → Participant → Participation in Community → Role Resident → Capability RequestAccess → AuthorityAssignment → Policy → AuthorizationRequest → AuthorizationDecision**

Each step remains separately governed.

The authorization system MUST be able to explain which relationship contributed which input.

## 48. Revocation propagation

When a relationship is revoked, dependent permissions MUST be evaluated according to explicit dependency rules.

Examples:

- worker engagement ends;
- provider-service relationship is suspended;
- community participation ends;
- authority assignment is revoked;
- device enrollment is revoked;
- access grant expires.

Historical events and evidence remain governed according to retention and privacy rules.

**Relationship revocation ≠ historical deletion.**

## 49. Relationship conflicts

Conflicting relationships MUST NOT be resolved through arbitrary last-write-wins semantics for consequential domains.

Resolution may require:

- source authority;
- relationship type;
- effective time;
- evidence;
- jurisdiction;
- contract;
- policy;
- verification;
- freshness;
- precedence;
- dispute state.

Conflicting provider and LegaX states must remain distinguishable until reconciliation establishes the canonical result.

## 50. Unknown relationships

Unknown is first-class.

LegaX MUST distinguish:

- absent;
- denied;
- not yet verified;
- unknown;
- expired;
- revoked;
- disputed.

Unknown MUST NOT silently become active, authorized, owned, approved, paid or fulfilled.

## 51. Relationship privacy

The existence of a relationship may itself be sensitive.

Examples:

- person ↔ health provider;
- person ↔ employer;
- person ↔ community;
- person ↔ unit;
- person ↔ payment relationship;
- person ↔ access history.

Therefore:

**relationship existence ≠ disclosure permission.**

A service may know a relationship exists without receiving all underlying attributes or evidence.

## 52. Relationship identifiers and versioning

Every consequential relationship should have a stable identifier or traceable reference supporting:

- lifecycle;
- provenance;
- version;
- audit;
- revocation;
- supersession;
- correlation.

A relationship identifier MUST NOT be silently reused for a materially different relationship after closure.

Historical authorization decisions must remain interpretable against the relationship version that existed when the decision was made.

## 53. Relationship and authorization

Authorization may use relationships as inputs but MUST NOT treat every relationship as permission.

Canonical evaluation:

**Actor + Authentication + Identity + Participation + Context + Role + Capability + Authority + Relationship Scope + Policy + Lifecycle + Action + Target + Security/Risk + Approvals + Time/Jurisdiction → AuthorizationDecision**

A relationship is an input to governance, not a shortcut around governance.

## 54. Relationship and access

The canonical sequence remains:

**Relationship Context → Authorization → AccessDecision → Enforcement → Result → Observation/Event → Evidence**

Hand/palm, face, fingerprint, QR, NFC, device credentials, physical credentials and other methods are mechanisms/assertions.

None becomes authority merely because it is technically available.

## 55. Relationship and intelligence

Intelligence may identify or predict relationships, but the epistemic state MUST be explicit.

For example:

**"This person may be the likely resident of Unit 4."**

is a prediction.

It cannot become:

**"Person occupies Unit 4."**

without the required relationship establishment/verification.

Likewise:

**"This worker is likely qualified."**

does not become:

**"Worker is authorized to perform this regulated task."**

without the required evidence, qualification, authority and authorization.

## 56. Relationship and events

Relationship changes are consequential events.

Examples:

- participation activated;
- role assigned;
- authority granted/revoked;
- provider onboarded;
- worker assigned;
- unit occupancy started/ended;
- device enrolled/revoked;
- service relationship suspended;
- economic contract disputed.

Events must preserve enough references to reconstruct relationship history without unnecessary sensitive duplication.

## 57. Relationship and evidence

Evidence can establish, challenge, update or revoke a relationship.

The relationship should reference relevant evidence rather than duplicating full sensitive evidence payloads.

Evidence may include credentials, documents, contracts, administrative decisions, provider assertions, device observations, transaction records and human reviews.

## 58. External-system relationships

External systems may assert relationships involving identity, provider status, payment, employment, credentials, devices, reservations, deliveries, health, transport, network or property.

LegaX MUST preserve:

- external source;
- external identifier;
- assertion time;
- freshness;
- external state;
- mapping to canonical relationship;
- reconciliation state.

External identifiers MUST NOT silently become LegaX canonical identifiers.

## 59. Service boundary rules

Each LegaService may create domain relationships but must consume shared relationship semantics.

### LegaPay
Owns payment/economic relationships such as payer, payment intent, payment attempt, provider/network processing and settlement. It does not redefine Identity or Authority.

### LegaAccess
Owns access relationships such as authorization-to-access request, resource, credential binding, method and enforcement. It does not treat a credential as automatic authority.

### LegaRide
Owns rider, ride request, driver/provider, vehicle and trip relationships. Matching does not create unrelated participant authority.

### LegaBooking
Owns booking, hold, reservation, attendance and capacity relationships. A reservation is not ownership.

### LegaWork
Owns organization/provider, worker, engagement, assignment and work relationships. A work relationship is not unrestricted organizational authority.

### LegaHealth
Owns participant, care relationship, provider and health-service coordination relationships. A care relationship does not automatically disclose all health data.

Other LegaServices follow the same rule: domain-specific relationships are owned locally while foundational semantics remain canonical.

## 60. Anti-patterns

The following shortcuts are prohibited:

- Account = person.
- Participant = identity.
- Role = permission.
- Capability = authorization.
- Ownership = access.
- Residence = administrator.
- Provider = owner.
- Worker = provider.
- Device = user.
- Location = authority.
- Payment = settlement.
- Event = truth.
- AI inference = established relationship.

## 61. Relationship integrity invariants

1. Every consequential relationship has an explicit semantic type.
2. Every consequential relationship has a governing owner/domain.
3. Every consequential relationship has explicit scope.
4. Consequential relationships have lifecycle semantics.
5. Effective time is distinct from record creation time.
6. Historical relationship states remain reconstructable where required.
7. External assertions retain source identity.
8. External assertions do not silently become universal LegaX truth.
9. Direct, verified, observed, inferred and proposed states remain distinguishable.
10. Unknown is not success.
11. Unknown is not failure.
12. Absence is not denial unless the domain explicitly defines that meaning.
13. Revoked is not deleted.
14. Expired is not revoked.
15. Suspended is not active.
16. Proposed is not active.
17. Pending is not authorized.
18. Active participation is not authority.
19. Role assignment is not authorization.
20. Capability is not authorization.
21. Location is not authority.
22. Device association is not identity.
23. Device capability is not actor authority.
24. Ownership and occupancy remain distinct.
25. Ownership and operational control remain distinct.
26. Provider status and regulatory authority remain distinct.
27. Worker engagement and delegated authority remain distinct.
28. Community membership and community administration remain distinct.
29. Service participation and service administration remain distinct.
30. Reservation and ownership remain distinct.
31. Payment intent and settlement remain distinct.
32. Settlement and reconciliation remain distinct.
33. Event and evidence remain distinct.
34. Evidence and truth remain distinct.
35. Intelligence and authority remain distinct.
36. Relationship inheritance must be explicit.
37. Relationship transitivity must be explicit.
38. Relationship composition must not create hidden privilege.
39. Relationship revocation must be enforceable.
40. Relationship history must not be erased merely because the relationship ends.
41. Sensitive relationship existence must be protected.
42. References should be preferred over unnecessary sensitive duplication.
43. Consequential relationship changes produce appropriate events/evidence.
44. Cross-domain relationship ownership remains explicit.
45. Service domains may extend relationships but may not redefine foundational semantics.
46. A foreign key alone is insufficient to define a canonical relationship.
47. A UI label alone is insufficient to define a canonical relationship.
48. An AI output alone is insufficient to establish a consequential relationship.
49. Authentication alone is insufficient to establish authority.
50. No relationship may silently grant more scope than it explicitly defines.

## 62. Cross-domain relationship dependency graph

**Entity → Identity → Account/Authentication → Participant → Participation → Context → RoleAssignment → Capability → AuthorityAssignment → AuthorizationRequest → AuthorizationDecision → AccessRequest/Action → Resource/Target → Enforcement/Execution → Event → Evidence → IntelligenceOutput → Review/Policy → subsequent Authorization/Action**

This graph describes dependency and accountability. It is not a one-to-one chain and not every operation traverses every node.

## 63. Relationship resolution algorithm

For a consequential operation:

1. Identify subject.
2. Identify object/target.
3. Identify exact relationship type.
4. Resolve relationship owner.
5. Resolve source of truth.
6. Resolve relationship status.
7. Resolve effective time.
8. Resolve scope.
9. Resolve evidence/provenance.
10. Resolve role/capability where applicable.
11. Resolve authority/delegation.
12. Resolve policy.
13. Evaluate authorization.
14. If required, create access request.
15. Execute only after required gates pass.
16. Record action/execution event.
17. Preserve supporting evidence.
18. Reconcile external outcomes where needed.
19. Produce intelligence only from governed inputs.

A missing relationship MUST result in the appropriate deny, pending, indeterminate or unknown outcome rather than an invented relationship.

## 64. Contradiction tests

The model MUST pass all of these:

**A — Resident:** Identity → Participant → resident Participation → Community MUST NOT imply community administration.

**B — Community administrator:** Role assignment MUST NOT imply property ownership.

**C — Provider:** Provider → Service MUST NOT imply ownership of every service resource.

**D — Worker:** Provider → Worker MUST NOT imply every provider permission.

**E — Device:** Participant → Device MUST NOT imply Device = Participant.

**F — Access:** Authenticated identity + AccessRequest MUST NOT imply allowed access. Authorization remains required.

**G — Multi-method access:** Recognized hand/palm, face, fingerprint, QR or NFC credential MUST NOT imply authority.

**H — Reservation:** Reservation → Resource MUST NOT imply ownership transfer.

**I — Payment:** PaymentIntent → PaymentAttempt MUST NOT imply settlement.

**J — AI:** IntelligenceOutput → predicted relationship MUST NOT imply canonical relationship establishment.

**K — Location:** Participant → Place MUST NOT imply authority at Place.

**L — Community:** Community → Organization MUST NOT imply Organization owns Community.

**M — Employment:** Organization → Worker MUST NOT imply access to every organizational resource.

**N — Evidence:** Evidence → Claim MUST NOT imply universal truth without verification criteria.

**O — Provider assertion:** ProviderAssertion → State MUST NOT imply canonical LegaX state without reconciliation.

## 65. Derivation into implementation

Phase 14 derives the next architecture gates:

**14 Relationship Model**
→ **15 State Machines**
→ **16 Command & Execution Contract**
→ **17 Event Contract**
→ **18 Evidence Contract**
→ **19 Provider/Adapter Architecture**
→ **20 Security Architecture**
→ **21 Privacy/Governance**
→ **22 API Architecture**
→ **23 Neon Database Architecture**
→ **24 Core Execution Engine**

The database must represent relationships according to this contract.

APIs must expose relationship semantics without collapsing them into generic references.

Authorization must consume relationships as governed inputs.

UI must display relationship state without presenting inferred privilege as fact.

AI must distinguish proposed/inferred relationships from canonical relationships.

## 66. Relationship to Definitions 01–13

This model is derived from and constrained by:

- 01 LegaX — constitutional purpose and ecosystem boundary.
- 02 Identity — identity continuity, identifiers, evidence and provenance.
- 03 Authentication — current actor/session and assurance.
- 04 Account — platform interaction/security relationship.
- 05 Administration — governance, assignments, delegation and approvals.
- 06 Authorization — runtime permission decision.
- 07 Access — enforcement and multi-method access.
- 08 Resources & Physical World — resources, places, units, devices, state and stewardship.
- 09 Economic & Commerce — economic and commercial relationships, payment, settlement and reconciliation.
- 10 Lifecycle & Policy — lifecycle, transitions, policy, review, verification and authorization.
- 11 Events, Evidence & Intelligence — provenance, event/evidence distinction and intelligence boundaries.
- 12 LegaServices — domain ownership and service boundaries.
- 13 Canonical Domain Model — canonical entities, ownership boundaries, references and aggregate boundaries.

Phase 14 does not replace these definitions. It makes their relationship semantics explicit.

## 67. Phase 14 readiness gate

Phase 14 is complete only when implementation can answer, for every consequential relationship:

1. Who is the subject?
2. What is the object?
3. What exact relationship type exists?
4. Which domain owns it?
5. Which system is authoritative?
6. What is its scope?
7. What is its lifecycle?
8. What is its effective period?
9. What evidence establishes it?
10. What is directly known?
11. What is verified?
12. What is observed?
13. What is inferred?
14. What is proposed?
15. What can safely be inferred?
16. What MUST NOT be inferred?
17. Can it be delegated?
18. Can it be inherited?
19. Is it transitive?
20. If yes, under what explicit rule?
21. What happens when it expires?
22. What happens when it is revoked?
23. What happens when sources disagree?
24. What happens when state is unknown?
25. What event records relationship changes?
26. What evidence supports the relationship?
27. What sensitive information does the relationship expose?
28. What must be referenced rather than copied?
29. Which authorization inputs can this relationship contribute?
30. What authorization can it never create by itself?
31. Which service owns the domain-specific extension?
32. Can it be reconstructed historically?
33. Can it be used safely under concurrency?
34. Can repeated relationship commands be idempotent?
35. Does it pass all contradiction tests?

If any answer is ambiguous, the relationship is not implementation-ready.

## 68. Final architectural rule

LegaX MUST treat relationships as first-class governed objects of meaning.

The platform is not merely:

**entities + foreign keys.**

It is:

**entities + governed relationships + scope + lifecycle + provenance + authority + authorization + execution + evidence.**

The governing principle is:

**A relationship tells LegaX what is related; it does not automatically tell LegaX what may be done.**

Therefore:

**Relationship → Context → Authority/Policy → Authorization → Access/Action → Event → Evidence**

remains the canonical governance path.

**Status:** Foundational relationship contract — semantic relationship model established; implementation remains deferred until subsequent architecture gates are completed.
