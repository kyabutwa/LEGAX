# LegaX — Provider Management Network Operating System

## 20C — Provider Management Network Operating System Contract

**Status:** Foundational architecture contract — implementation-grade; implementation intentionally deferred.

## 1. Purpose

The **Provider Management Network Operating System (PM-NOS)** is the governed provider-side operating layer through which a provider organizes and delivers its services and capabilities to customers, participants, organizations, communities, and other authorized parties while operating its workers, service teams, resources, facilities, schedules, credentials, dispatch, maintenance, commerce, security, quality, incidents, and service commitments.

PM-NOS answers:

**How does an actual provider operate what it offers, who delivers it, what it needs to deliver it, whom it serves, where and when it operates, what commitments it has made, what happened during delivery, and how it continuously manages provider-side execution?**

It does not answer:

- what a LegaX identity is;
- whether an actor is authenticated;
- what global authority exists;
- whether a concrete action is authorized;
- how a LegaX access decision is enforced;
- whether an external provider assertion is canonical truth;
- whether a provider credential becomes LegaX authority.

PM-NOS is therefore a **provider operating layer**, not a second LegaX Core.

Canonical provider operating chain:

**Provider Identity → Provider Participation → Provider Context → Provider Capability → Provider Authority → LegaX Authorization → Provider Command → Provider Execution → Provider Observation → Event → Evidence → Reconciliation → Service Outcome**

The provider may operate its own internal management processes, but any consequential operation performed through LegaX remains subordinate to the canonical LegaX authority and authorization model.

## 2. The central distinction

The three network operating systems have different centers of gravity.

**CM-NOS:** operates a participating community and its places, people, shared resources, facilities, visitors, services and community life.

**OM-NOS:** governs and manages an organization's purpose, structure, decision rights, work, resources, policies, risks, projects and organizational operations.

**PM-NOS:** operates a provider's service-delivery network: offerings, service capacity, customers, workers, dispatch, work orders, facilities, assets, credentials, service commitments, field execution, maintenance, quality, incidents, commerce and provider-side operations.

Therefore:

**Community operations ≠ organizational management ≠ provider service delivery.**

A provider may itself be an organization. If so, OM-NOS may govern its internal organizational structure while PM-NOS governs the provider's external service-delivery operation.

That relationship MUST NOT cause the two systems to collapse into one.

## 3. Research basis and synthesis

PM-NOS is derived from and cross-checked against:

1. service-management systems;
2. service value and service-provider operating models;
3. customer/service-consumer management;
4. field-service and work-order operations;
5. dispatch and workforce scheduling;
6. service catalogs and capacity management;
7. facility management;
8. asset lifecycle management;
9. maintenance management;
10. incident/problem/change management;
11. service-level and contract management;
12. supplier/subcontractor management;
13. customer satisfaction and service quality;
14. physical and digital access control;
15. zero-trust security;
16. credential and workforce assurance;
17. commerce and payment operations;
18. provider risk and compliance;
19. evidence and reconciliation;
20. AI-assisted service operations.

ISO/IEC 20000-1 describes a service management system covering planning, design, transition, delivery and improvement of services to meet service requirements. This supports treating PM-NOS as an operating system for service delivery rather than a supplier directory.

ITIL 4 emphasizes service value, service value chains, organizations and people, information and technology, partners and suppliers, value streams and processes, and integrated service lifecycle management. PM-NOS therefore needs an operating network connecting service consumers, workers, technology, partners and delivery processes.

ISO 41001 establishes a management-system approach for effective and efficient facility management supporting the objectives of the demand organization; the 2026 draft revision is under development. PM-NOS therefore treats provider facilities as operational resources and service environments, not merely addresses.

ISO 55001:2024 strengthens asset lifecycle management, value realization, decision-making, risk/opportunity management, data and life-cycle operations. PM-NOS therefore treats provider assets as governed operational resources with lifecycle, maintenance, condition, capacity and evidence.

ISO 10004:2018 provides current guidance for monitoring and measuring customer satisfaction. PM-NOS therefore treats service quality and customer outcome as governed operational signals rather than merely star ratings.

NIST Zero Trust states that access must not receive implicit trust merely from network location or ownership and emphasizes explicit authentication and authorization around protected resources. PM-NOS therefore cannot treat provider employment, device ownership, facility presence or provider-network location as automatic permission.

NIST's 2025 Zero Trust implementation guidance further covers identity, credential/access management, microsegmentation and secure access across distributed environments. PM-NOS therefore remains an operating consumer of LegaX authorization and access rather than a replacement for it.

NIST AI RMF uses Govern, Map, Measure and Manage as continuous AI risk-management functions. PM-NOS therefore allows AI-assisted dispatch, forecasting, maintenance, triage and quality analysis only inside explicit governance, evidence and authorization boundaries.

## 4. Canonical definition of Provider

A **Provider** is an entity or organization that offers, supplies, operates, fulfills, maintains, transports, hosts, verifies, supports or otherwise delivers a defined capability, service, resource, facility, product or operational function to one or more consumers or participating parties.

A provider may be:

- an individual professional;
- a company;
- a nonprofit;
- a cooperative;
- a public institution;
- a community-operated service provider;
- a contractor;
- a field-service operator;
- a transport operator;
- a healthcare provider;
- a facilities operator;
- a utility provider;
- a technology provider;
- a marketplace seller;
- a network operator;
- a platform;
- a consortium;
- an external service ecosystem.

Provider status is a governed relationship and does not itself grant universal authority.

## 5. Provider Network

A **Provider Network** is the governed network of:

**Provider + Service Catalog + Capabilities + Customers/Participants + Workers + Teams + Resources + Assets + Facilities + Service Areas + Capacity + Schedules + Credentials + Commitments + Work Orders + Dispatch + Delivery + Maintenance + Commerce + Security + Quality + Incidents + Events + Evidence + Intelligence**

The network exists to transform provider capability into accountable service delivery.

It is not merely:

- a supplier registry;
- a CRM;
- an employee directory;
- a scheduling application;
- a marketplace;
- a fleet tracker;
- an ERP;
- an IAM system.

## 6. Canonical definition of PM-NOS

The **Provider Management Network Operating System (PM-NOS)** is the provider-side operational control plane that coordinates the provider's service-delivery network across people, customers, offerings, resources, facilities, capacity, schedules, work, dispatch, credentials, maintenance, commerce, security, quality, incidents, commitments and external integrations.

PM-NOS MAY:

- define provider offerings;
- manage service catalog versions;
- declare provider capabilities;
- register service capacity;
- manage service areas;
- coordinate customer relationships;
- coordinate provider workers;
- assign work;
- schedule delivery;
- dispatch workers/resources;
- manage work orders;
- manage service appointments;
- coordinate facilities;
- manage provider assets;
- schedule maintenance;
- track service readiness;
- manage provider-side credentials and qualifications;
- coordinate customer communication;
- monitor service quality;
- manage incidents;
- coordinate service recovery;
- manage provider-side commercial operations;
- reconcile provider execution;
- produce provider operational intelligence.

PM-NOS MUST NOT:

- manufacture LegaX authority;
- turn provider membership into LegaX authorization;
- convert provider credentials into universal LegaX credentials;
- override LegaX authorization;
- rewrite canonical events or evidence;
- promote provider assertions to canonical truth without validation;
- silently grant access to customer resources;
- authorize payments merely because a worker or manager requests them;
- use AI as an independent authority.

## 7. Architectural position

The canonical architecture is:

**LegaX Core**
→ Identity, Authentication, Account, Participant, Participation, Context, Role, Capability, Authority, Authorization, Access, Action, Lifecycle, Command & Execution, Event, Evidence, Intelligence

**OM-NOS**
→ internal organizational governance and management, where applicable

**PM-NOS**
→ provider service-delivery operations

**CM-NOS**
→ community operations where a provider serves or operates inside a community context

**LegaServices**
→ bounded domain services such as LegaPay, LegaAccess, LegaRide, LegaBooking, LegaMarket, LegaFood, LegaHealth, LegaNetwork and LegaWork

**Provider / External Systems**
→ provider-controlled systems, devices, facilities, payment networks, workforce tools, dispatch systems, ERP/CRM, fleet systems and other external capabilities

The provider may use OM-NOS internally. PM-NOS must not reproduce OM-NOS's entire governance model merely because the provider has employees and managers.

## 8. Provider operating loop

The canonical provider operating loop is:

**OFFER → CAPACITY → COMMITMENT → PLAN → SCHEDULE → ASSIGN → AUTHORIZE → DISPATCH → EXECUTE → OBSERVE → VERIFY → COMPLETE → RECORD → RECONCILE → REVIEW → IMPROVE**

This loop is distinct from the organizational loop:

**PURPOSE → GOVERNANCE → ORGANIZATION → RESPONSIBILITY → AUTHORITY → AUTHORIZATION → COMMAND → EXECUTION → EVENT → EVIDENCE → OUTCOME → REVIEW**

PM-NOS focuses on the delivery of provider commitments.

## 9. Provider-side authority boundary

Provider authority is bounded by:

- provider scope;
- provider participation;
- contract;
- service commitment;
- customer relationship;
- resource scope;
- jurisdiction;
- service policy;
- credential state;
- worker role;
- capability;
- operational conditions;
- LegaX authority and authorization.

Provider status cannot create a larger authority than the provider legitimately possesses.

A provider may have authority inside its own systems while remaining a constrained external participant in LegaX.

## 10. Provider participation

A provider may participate in LegaX as:

- provider;
- service provider;
- employer;
- contractor;
- facility operator;
- delivery operator;
- maintenance operator;
- transport operator;
- professional service provider;
- technology provider;
- community service provider;
- organization;
- external system;
- provider worker;
- provider service identity.

Each participation is contextual.

**Provider identity ≠ provider participation ≠ provider authority.**

## 11. Customer and participant model

PM-NOS MUST distinguish:

- customer;
- client;
- consumer;
- participant;
- resident;
- visitor;
- organization;
- community;
- beneficiary;
- payer;
- recipient;
- authorized representative;
- service contact.

A customer relationship may carry:

- service scope;
- contract;
- entitlement;
- service level;
- location;
- booking;
- order;
- billing relationship;
- communication preference;
- service history;
- evidence;
- lifecycle.

Customer status does not automatically grant the customer access to provider systems.

Provider customer status does not automatically create a LegaX identity or authorization.

## 12. Customer relationship versus identity

PM-NOS may reference a LegaX Identity and Participant.

It MUST NOT create a duplicate global identity merely because the provider has a local customer record.

Canonical relationship:

**LegaX Identity → Participant → Provider Participation → Customer Relationship**

A provider may retain a provider-local customer identifier:

**Provider → Provider Customer ID → Provider Customer Record**

The provider-local ID remains provider-scoped.

## 13. Service catalog

A provider service catalog defines what the provider offers.

A service offering SHOULD include:

- offering identity;
- service type;
- description;
- capabilities;
- service scope;
- service area;
- eligibility;
- prerequisites;
- capacity;
- operating hours;
- lead time;
- dependencies;
- price model;
- tax/fee rules;
- service-level commitments;
- cancellation rules;
- safety requirements;
- credential requirements;
- required resources;
- required worker capabilities;
- facility requirements;
- evidence requirements;
- lifecycle;
- version.

A catalog listing is not a completed service commitment.

## 14. Offering versus capability

**Capability** describes what the provider or worker can perform.

**Offering** describes what the provider makes available under defined commercial/operational conditions.

**Commitment** represents an accepted obligation or service promise.

**Execution** represents an attempted or completed operation.

These MUST remain distinct.

## 15. Service versioning

Service offerings MUST be versionable.

A version may change:

- scope;
- price;
- service level;
- prerequisites;
- worker requirements;
- resource requirements;
- geographic coverage;
- operating hours;
- safety controls;
- cancellation terms;
- evidence requirements.

Existing commitments MUST retain the applicable version where material.

## 16. Service capacity

PM-NOS MUST represent capacity.

Capacity may be:

- worker-hours;
- appointment slots;
- vehicles;
- rooms;
- equipment;
- inventory;
- bandwidth;
- field teams;
- service windows;
- geographic coverage;
- facility throughput;
- production capacity;
- emergency capacity.

Capacity is not authorization.

Capacity is not ownership.

Capacity is not availability unless evaluated for the relevant time and context.

## 17. Capacity reservation

A capacity reservation MAY protect a scarce operational resource.

Canonical semantics:

**Capacity State → Availability Evaluation → Hold/Reservation → Commitment → Consumption → Release/Reconciliation**

A search result does not reserve capacity.

A provisional hold does not necessarily create a final commercial commitment.

A provider cannot claim capacity was consumed merely because a request was received.

## 18. Service area and geography

A provider may define:

- coverage region;
- service radius;
- facility territory;
- route zone;
- delivery zone;
- response zone;
- regulatory jurisdiction;
- emergency area;
- exclusion area.

Location is an operational constraint.

**Location ≠ identity.**

**Location ≠ authority.**

**Being physically near a customer ≠ permission to access the customer's resource.**

## 19. Provider facilities

PM-NOS may operate:

- offices;
- depots;
- clinics;
- workshops;
- warehouses;
- kitchens;
- garages;
- service centers;
- control rooms;
- charging sites;
- data facilities;
- staging areas;
- customer-facing locations.

Facility representation SHOULD include:

- identity;
- type;
- location;
- owner/steward;
- operator;
- capacity;
- operating state;
- access requirements;
- resources;
- services;
- safety constraints;
- maintenance state;
- occupancy/capacity;
- jurisdiction;
- evidence.

## 20. Facility operations

Provider facility operations MAY include:

- opening/closing;
- occupancy;
- reservations;
- maintenance;
- inspections;
- cleaning;
- utilities;
- security;
- incidents;
- access;
- equipment;
- emergency operations;
- compliance checks.

PM-NOS coordinates these activities but does not replace LegaAccess or Resources & Physical World semantics.

## 21. Provider assets and resources

Provider resources may include:

- vehicles;
- tools;
- machines;
- equipment;
- inventory;
- facilities;
- devices;
- credentials;
- service capacity;
- spare parts;
- communication channels;
- financial resources;
- digital resources.

Provider resource ownership, custody, stewardship and operational control are separate relationships.

**Use ≠ ownership.**

**Custody ≠ ownership.**

**Operational control ≠ universal authority.**

## 22. Asset lifecycle

Provider assets SHOULD support:

**IDENTIFIED → ONBOARDED → AVAILABLE → RESERVED → DEPLOYED → IN_USE → INSPECTION_REQUIRED → MAINTENANCE → RESTRICTED → RETIRED → DISPOSED**

Domain-specific states may extend this lifecycle.

A provider must not represent an asset as available when authoritative state or required inspection makes it unavailable.

## 23. Worker model

Provider workers may include:

- employees;
- contractors;
- technicians;
- drivers;
- clinicians;
- security personnel;
- dispatchers;
- field agents;
- installers;
- cleaners;
- maintenance staff;
- customer-support agents;
- supervisors;
- operators;
- specialists.

Worker participation is distinct from employment, professional qualification and authorization.

## 24. Worker capability

A worker capability may be:

- declared;
- credential-backed;
- verified;
- assessed;
- demonstrated;
- observed;
- expired;
- suspended;
- revoked;
- disputed.

PM-NOS may consume LegaWork capability semantics where professional/work-domain evidence is required.

A provider manager cannot manufacture a regulated qualification merely by assigning a worker to a task.

## 25. Worker credentialing

Provider-side credentials may include:

- staff credentials;
- facility credentials;
- device credentials;
- vehicle credentials;
- professional credentials;
- safety credentials;
- training credentials;
- contractor credentials;
- service-specific credentials.

Credential lifecycle:

**ISSUED → ACTIVE → EXPIRING → EXPIRED / SUSPENDED / REVOKED**

Credential possession does not automatically mean LegaX authorization.

## 26. Provider credentials versus LegaX authorization

This distinction is mandatory.

**Provider Credential** = provider-issued or provider-recognized assertion that an actor satisfies a provider-side condition.

**LegaX Authentication** = current confidence in the actor/session under LegaX rules.

**Authority** = legitimate governed power.

**Authorization** = runtime permission for a concrete operation.

Therefore:

**Provider credential ≠ LegaX authentication ≠ authority ≠ authorization.**

## 27. Teams and provider operational units

PM-NOS may organize provider delivery units such as:

- field team;
- dispatch team;
- maintenance team;
- customer-support team;
- service center;
- regional operation;
- shift;
- response unit;
- emergency team.

Team membership does not automatically grant access to every customer or resource.

## 28. Dispatch

Dispatch is a provider operational function for assigning available provider capacity to service commitments or work.

Canonical dispatch flow:

**Service Need → Eligibility → Capacity Evaluation → Candidate Selection → Assignment Proposal → Authorization/Policy Check → Assignment → Dispatch → Acceptance → Execution**

Dispatch is not itself authorization.

AI-generated dispatch recommendations are proposals unless a governed automation authority explicitly permits automatic execution.

## 29. Assignment

A work assignment identifies:

- work item;
- worker/team;
- resource;
- location/context;
- required capability;
- schedule;
- priority;
- customer/service;
- safety constraints;
- dependencies;
- authority requirements;
- acceptance state;
- evidence requirements.

Assignment does not bypass access controls or authorization.

## 30. Scheduling

Provider scheduling may coordinate:

- appointments;
- shifts;
- worker availability;
- equipment;
- facilities;
- vehicles;
- service windows;
- maintenance windows;
- delivery slots;
- emergency response.

Canonical distinction:

**Availability ≠ booking ≠ assignment ≠ dispatch ≠ execution.**

LegaBooking remains authoritative for canonical reservation semantics where a LegaBooking interaction exists.

## 31. Work orders

A work order is an operational instruction/record describing provider work to be performed.

It SHOULD include:

- work-order identity;
- originating service/commitment;
- customer/participant reference;
- target resource;
- location/context;
- assigned worker/team;
- required capability;
- required materials;
- safety requirements;
- schedule;
- priority;
- authorization requirements;
- state;
- evidence requirements;
- outcome;
- exceptions.

A work order is not authority.

## 32. Work-order lifecycle

A generic provider work-order lifecycle is:

**REQUESTED → TRIAGED → PLANNED → SCHEDULED → ASSIGNED → ACCEPTED → DISPATCHED → IN_PROGRESS → BLOCKED/ON_HOLD → COMPLETED → VERIFIED → CLOSED**

Exceptional states MAY include:

**CANCELLED, FAILED, REJECTED, EXPIRED, REQUIRES_REVIEW, DISPUTED, RECONCILIATION_REQUIRED**

A work order cannot be marked successfully completed merely because a worker pressed “complete.”

## 33. Service delivery

Provider service delivery is the execution of an accepted commitment.

Canonical flow:

**Customer/Service Request → Eligibility → Offer/Quote → Acceptance/Commitment → Capacity Reservation → Schedule → Assignment → Authorization → Command → Dispatch → Execution → Observation → Verification → Completion → Evidence → Reconciliation**

Not every service uses every step.

The applicable domain contract determines which steps are mandatory.

## 34. Service outcome

A service outcome is the resulting condition or delivered result according to domain-specific evidence.

Examples:

- repair completed;
- ride completed;
- meal delivered;
- appointment fulfilled;
- network service activated;
- facility cleaned;
- maintenance performed;
- goods delivered.

**Execution attempt ≠ outcome.**

**Provider acknowledgement ≠ universal proof of outcome.**

## 35. Maintenance

PM-NOS MUST support:

- preventive maintenance;
- corrective maintenance;
- predictive maintenance;
- inspection;
- calibration;
- servicing;
- parts replacement;
- maintenance scheduling;
- technician assignment;
- maintenance evidence;
- return-to-service evaluation.

ISO 55001:2024's lifecycle and predictive-action emphasis supports treating maintenance as part of asset value, risk and operational continuity rather than as an isolated ticketing feature.

## 36. Maintenance state

A provider asset may be:

**AVAILABLE → MAINTENANCE_DUE → RESERVED_FOR_MAINTENANCE → IN_MAINTENANCE → INSPECTION → RETURN_TO_SERVICE_PENDING → AVAILABLE**

If safety or compliance requires restriction, the resource MUST remain unavailable until the required evidence establishes return-to-service conditions.

## 37. Incident management

Provider incidents may include:

- service outage;
- missed appointment;
- safety event;
- worker incident;
- facility incident;
- vehicle incident;
- security incident;
- equipment failure;
- customer complaint;
- data incident;
- provider dependency failure.

Incident state MUST remain distinct from service completion.

## 38. Problem management

Problem management investigates recurring or systemic causes.

A problem may be related to:

- repeated service failures;
- asset defects;
- workforce constraints;
- process weakness;
- provider dependency;
- facility limitations;
- software defects;
- capacity imbalance.

A problem record is not itself a customer incident.

## 39. Change management

Provider changes may affect:

- services;
- schedules;
- facilities;
- assets;
- workers;
- integrations;
- pricing;
- service areas;
- capacity;
- security;
- customer commitments.

Material changes require impact evaluation and appropriate authorization.

A provider administrator cannot silently change a committed service's material terms when contract/policy requires consent or review.

## 40. Service levels

Provider service commitments may include:

- response time;
- resolution time;
- availability;
- coverage;
- throughput;
- delivery window;
- quality;
- support hours;
- restoration target;
- escalation target.

SLA/SLO metrics must be defined with:

- measurement source;
- clock;
- exclusions;
- pause conditions;
- evidence;
- calculation version;
- dispute process.

A dashboard metric is not automatically a contractual fact.

## 41. Contracts and commitments

Provider contracts may establish:

- service scope;
- pricing;
- obligations;
- service levels;
- liability;
- data processing;
- access conditions;
- cancellation;
- dispute;
- jurisdiction;
- evidence;
- termination.

A contract may establish an obligation but does not automatically grant technical access to every referenced resource.

## 42. Customer entitlement

A customer may have an entitlement to:

- receive a service;
- access a booked resource;
- receive support;
- receive a benefit;
- obtain a deliverable;
- receive a service level.

Entitlement is distinct from:

- authentication;
- authority;
- authorization;
- payment;
- ownership;
- physical access.

The entitlement must be evaluated in its applicable context.

## 43. Provider commerce

PM-NOS may coordinate provider-side commercial operations:

- catalog pricing;
- quote;
- offer;
- order;
- service contract;
- invoice;
- credit;
- refund request;
- discount;
- commission;
- tax;
- settlement reference;
- dispute;
- reconciliation.

LegaPay remains authoritative for payment lifecycle and settlement semantics.

LegaMarket remains authoritative for marketplace/product commerce semantics where applicable.

## 44. Commerce boundary

Canonical economic distinction:

**Commercial Intent → Quote/Offer → Customer Acceptance → Contract/Order → Payment Intent → Payment Processing → Provider Acceptance → Settlement → Reconciliation**

Provider receipt of a payment instruction does not prove settlement.

Provider settlement state does not become LegaPay canonical settlement without the applicable integration and reconciliation contract.

## 45. Provider billing

Provider billing may aggregate:

- completed service units;
- recurring charges;
- usage;
- subscriptions;
- contractual fees;
- adjustments;
- taxes;
- credits;
- refunds;
- disputed items.

Billing records MUST retain source and calculation versions.

A provider's invoice is an assertion/record of a commercial claim; it is not by itself proof that the underlying service outcome or payment settlement occurred.

## 46. Customer service operations

PM-NOS may coordinate:

- support requests;
- complaints;
- service questions;
- appointment changes;
- cancellations;
- rescheduling;
- escalation;
- incident communication;
- service recovery;
- customer feedback.

Customer communication does not change canonical state unless the corresponding governed action executes.

## 47. Quality management

Provider quality MAY evaluate:

- service outcome;
- timeliness;
- safety;
- completeness;
- customer satisfaction;
- repeat failures;
- evidence quality;
- worker performance;
- asset condition;
- provider compliance.

Quality signals may be:

**DECLARED, OBSERVED, VERIFIED, INFERRED, PROPOSED, DISPUTED or UNKNOWN**

A rating or prediction is not automatically evidence of fault.

## 48. Customer satisfaction

PM-NOS may collect customer satisfaction signals through:

- surveys;
- ratings;
- complaints;
- repeat-use patterns;
- service acceptance;
- service recovery;
- structured feedback.

ISO 10004 supports systematic monitoring and measurement of customer satisfaction rather than treating one rating as a complete quality truth.

## 49. Security operations

Provider security may cover:

- worker security;
- customer safety;
- facility security;
- device security;
- credential security;
- service integrity;
- fraud signals;
- incident response;
- privileged operations;
- provider system access.

Security operation MUST preserve LegaX authorization boundaries.

## 50. Provider-side access

A provider may need access to:

- its own systems;
- its facilities;
- its assets;
- customer-authorized resources;
- community facilities;
- organizational resources;
- service endpoints.

Access MUST be evaluated through:

**Identity/Participant → Context → Credential/Assertion → Authority → Authorization → Access Decision → Enforcement → Observed Result**

Provider affiliation is not a universal access grant.

## 51. Customer resource access

When a worker must enter or operate within a customer-controlled resource:

**Service Commitment → Operational Need → Identity/Worker Context → Authorization → LegaAccess → Enforcement → Physical Observation → Evidence**

A work order does not automatically unlock a door.

A customer relationship does not automatically grant access to every customer resource.

## 52. Visitor and temporary worker access

PM-NOS may request temporary access for:

- technician visits;
- delivery workers;
- maintenance teams;
- inspection teams;
- emergency responders;
- contractors.

The access request MUST specify:

- actor;
- purpose;
- target;
- location;
- time window;
- service/work order;
- required assurance;
- authorization basis;
- revocation/expiry;
- evidence requirements.

LegaAccess remains the canonical access enforcement domain.

## 53. Credentials and methods

Provider workers may use:

- provider-issued credentials;
- passkeys;
- hardware keys;
- certificates;
- QR;
- NFC;
- approved biometrics;
- device authentication;
- facility credentials.

Hand/palm, face, fingerprint, QR and NFC are authentication/access methods or assertions, not authority by themselves.

Provider hardware or biometric capability cannot manufacture LegaX authority.

## 54. Emergency operations

PM-NOS may support emergency service operations.

Emergency operation MUST define:

- emergency type;
- initiating actor;
- scope;
- affected resources;
- allowed operations;
- duration;
- expiry;
- required assurance;
- notification;
- post-event review;
- evidence;
- prohibited operations.

Emergency status does not mean unlimited authority.

## 55. Provider subcontractors

A provider may use subcontractors.

The provider MUST retain provenance for:

- subcontractor identity;
- service scope;
- assignment;
- credentials;
- contract;
- authorization basis;
- execution;
- evidence;
- provider responsibility.

Subcontractor affiliation does not automatically grant the subcontractor all provider authority.

## 56. Provider dependency network

Provider operations may depend on:

- payment networks;
- logistics providers;
- telecom providers;
- cloud platforms;
- mapping services;
- identity providers;
- equipment vendors;
- subcontractors;
- utilities;
- community facilities;
- external APIs.

Dependencies are explicit.

**Dependency ≠ authority.**

**API connectivity ≠ trust.**

**Provider acceptance ≠ canonical LegaX outcome.**

Phase 19 governs provider/adapter integration semantics.

## 57. Provider adapters

The canonical integration is:

**Provider Registration → Due Diligence → Trust Establishment → Credential Binding → Adapter Activation → Request Translation → LegaX Authorization → Provider Command → Provider Execution → Provider Assertion/Observation → Validation → Evidence → Reconciliation → Canonical State/Event**

PM-NOS consumes this contract; it does not replace it.

## 58. Provider source-of-truth model

For every material provider fact, PM-NOS MUST identify:

- provider source;
- source object ID;
- source event ID;
- source time;
- received time;
- provider state;
- assertion type;
- validation status;
- provenance;
- freshness;
- supersession;
- reconciliation status.

Provider systems may be authoritative for provider-local facts while remaining non-authoritative for LegaX-global facts.

## 59. Provider assertions

Provider assertions may state:

- worker arrived;
- vehicle departed;
- service completed;
- payment received;
- facility opened;
- asset repaired;
- customer notified;
- delivery attempted.

An assertion is not automatically canonical truth.

Where material, the assertion must be validated against evidence and domain authority.

## 60. Service evidence

PM-NOS should preserve evidence sufficient to reconstruct:

**Who → What → Where → When → Under Which Service Commitment → Under Which Worker/Resource → Under Which Authority → Under Which Authorization → Which Command → Which Execution Attempt → Which Observation → Which Outcome → Which Reconciliation**

Evidence may include:

- signed work records;
- photos;
- device telemetry;
- controller response;
- customer acknowledgement;
- provider event;
- technician report;
- meter reading;
- delivery proof;
- payment reference;
- facility observation;
- system logs.

Evidence remains distinct from truth and authorization.

## 61. Provider event model

PM-NOS emits provider-domain events such as:

- provider.service.offered;
- provider.capacity.updated;
- provider.assignment.created;
- provider.assignment.accepted;
- provider.dispatch.started;
- provider.worker.arrived;
- provider.work.started;
- provider.work.completed;
- provider.maintenance.started;
- provider.maintenance.completed;
- provider.service.incident.opened;
- provider.service.recovered;
- provider.customer.notification.sent;
- provider.contract.changed;
- provider.asset.restricted;
- provider.asset.returned_to_service.

These must conform to Phase 17.

A provider event does not become a LegaX canonical event merely because it was emitted by a provider system.

## 62. Command model

Every consequential PM-NOS operation MUST be representable as a command or governed transition.

Examples:

- create service commitment;
- assign worker;
- reserve capacity;
- dispatch team;
- initiate maintenance;
- restrict asset;
- release asset;
- issue provider credential;
- suspend worker;
- schedule appointment;
- request customer access;
- issue invoice;
- request refund;
- change service commitment.

Commands require:

- command identity;
- initiating actor;
- identity/account context where applicable;
- participation;
- target;
- authority source;
- authorization;
- policy/lifecycle version;
- idempotency;
- correlation/causation;
- execution context.

## 63. Provider execution gate

The execution gate is:

**REQUEST → AUTHENTICATE → IDENTIFY → PARTICIPATION/CONTEXT → AUTHORITY → AUTHORIZE → VALIDATE STATE → CHECK PRECONDITIONS → COMMAND → EXECUTION → OUTCOME → EVENT → EVIDENCE → RECONCILIATION**

No authorization means no consequential action.

Stale material state requires re-evaluation.

Unknown external outcome requires reconciliation.

## 64. Concurrency

Provider operations must handle concurrent:

- bookings;
- dispatch assignments;
- capacity claims;
- maintenance reservations;
- asset use;
- worker assignments;
- inventory consumption;
- customer cancellations;
- provider updates.

Canonical pattern:

**READ VERSION N → VALIDATE → AUTHORIZE → CONDITIONAL WRITE VERSION N → VERSION N+1**

A stale version must not silently overwrite a newer operational state.

## 65. Idempotency

Consequential provider commands MUST be idempotent where retry can duplicate effects.

Examples:

- dispatch;
- assignment;
- payment request;
- refund request;
- access request;
- work-order completion;
- inventory consumption;
- credential issuance;
- customer notification.

Replay of a command must not create an unintended duplicate consequential effect.

## 66. Unknown outcomes

Provider communication may time out after the provider accepted a command.

The state MUST be capable of representing:

**UNKNOWN / PENDING_RECONCILIATION**

rather than falsely reporting failure.

Canonical flow:

**Command → External Attempt → Timeout → UNKNOWN → Reconciliation → Established Outcome**

This follows the same execution and reconciliation principles established in Phases 15–19.

## 67. Offline operation

Where provider operations must work offline, PM-NOS may use bounded offline capabilities.

Offline operations require:

- credential freshness;
- explicit scope;
- expiry;
- local policy constraints;
- anti-replay controls;
- duplicate handling;
- local evidence;
- later reconciliation.

Offline mode does not create unrestricted provider authority.

## 68. Provider workforce safety

Worker safety MAY be represented through:

- required qualifications;
- equipment requirements;
- location restrictions;
- fatigue constraints;
- work-hour limits;
- environmental conditions;
- emergency procedures;
- incident history;
- safety checks.

Safety rules may prevent assignment or execution.

A manager cannot bypass a mandatory safety control merely because a service is urgent.

## 69. Provider compliance

Provider compliance may cover:

- legal/regulatory requirements;
- professional licensing;
- safety;
- data protection;
- financial requirements;
- tax;
- contractual requirements;
- service certifications;
- facility requirements;
- equipment inspections.

Compliance status must identify:

- requirement;
- scope;
- jurisdiction;
- effective date;
- expiry;
- evidence;
- verifier;
- state;
- remediation.

## 70. Provider qualification

A provider may have qualifications/certifications such as:

- operating license;
- professional accreditation;
- safety certification;
- facility certification;
- equipment authorization;
- insurance evidence;
- quality certification.

Provider qualification is evidence about provider capability/compliance.

It is not automatic LegaX authority.

## 71. Provider reputation

Provider reputation may aggregate:

- customer feedback;
- service reliability;
- incident rate;
- response time;
- completion quality;
- evidence quality;
- dispute rate;
- compliance history.

Reputation is intelligence/assessment.

It is not authority.

A reputation score MUST NOT silently determine identity, authorization or access without an explicit governed policy.

## 72. Provider risk

PM-NOS may model risks including:

- worker risk;
- service continuity risk;
- safety risk;
- fraud risk;
- cyber risk;
- provider dependency risk;
- capacity risk;
- asset failure risk;
- compliance risk;
- financial risk;
- customer harm risk.

Risk scores are inputs to governed decisions.

**Risk score ≠ decision.**

**AI risk signal ≠ finding.**

## 73. Provider fraud and abuse

Provider fraud controls MAY detect:

- duplicate work;
- fabricated completion;
- abnormal billing;
- suspicious refunds;
- credential sharing;
- impossible travel;
- anomalous access;
- fake service evidence;
- collusive activity.

Detection creates a signal or case.

It does not itself establish guilt.

Consequential restriction requires governed authority and authorization.

## 74. AI-assisted provider operations

AI may assist with:

- demand forecasting;
- capacity forecasting;
- dispatch recommendations;
- route optimization;
- maintenance prediction;
- incident triage;
- service-quality analysis;
- customer-support summarization;
- anomaly detection;
- staffing recommendations;
- inventory forecasting;
- schedule optimization;
- provider risk analysis;
- evidence classification.

AI MUST preserve:

- model identity;
- input provenance;
- output provenance;
- uncertainty;
- evaluation;
- human/governed review where required;
- authorization boundary;
- auditability;
- correction;
- lifecycle.

NIST AI RMF's Govern/Map/Measure/Manage model supports treating AI risk management as continuous rather than a one-time model approval.

## 75. AI authority boundary

AI MUST NOT silently:

- grant provider authority;
- authorize customer access;
- authorize payment outside policy;
- create a credential without authority;
- declare an uncertain provider assertion true;
- suppress an incident;
- rewrite evidence;
- fabricate customer consent;
- terminate a worker without required process;
- change a contract without authority;
- override safety controls.

Where autonomous execution is allowed, the authority for that automation MUST already exist and its scope MUST be explicit.

## 76. Provider operational intelligence

PM-NOS intelligence may answer:

- What capacity is available?
- Which service commitments are at risk?
- Which assets are likely to fail?
- Which teams are overloaded?
- Which facilities are constrained?
- Which service areas are underserved?
- Which incidents recur?
- Which providers/subcontractors are creating dependency risk?
- Which service commitments require intervention?

Intelligence informs provider decisions; it does not become provider authority.

## 77. Provider control room

A provider control plane MAY expose:

- service commitments;
- active dispatch;
- worker availability;
- asset state;
- facility state;
- incidents;
- customer requests;
- capacity;
- SLA risk;
- maintenance;
- commercial status;
- security alerts;
- reconciliation queues.

A control room is a view over governed state.

It is not a bypass around authorization.

## 78. Provider operator roles

Provider-side operator roles may include:

- provider owner;
- operations manager;
- dispatcher;
- service manager;
- field supervisor;
- technician;
- customer-support operator;
- maintenance manager;
- facility operator;
- fleet operator;
- security operator;
- finance operator;
- compliance operator;
- quality reviewer.

Role describes function.

Role does not automatically encode every permission.

## 79. Provider administration

Provider administration may manage:

- service catalog;
- provider workers;
- teams;
- capacity;
- facilities;
- assets;
- credentials;
- provider policies;
- schedules;
- contracts;
- integrations.

Administrative operations remain governed.

**Provider administrator ≠ unrestricted LegaX administrator.**

Provider-side administration is bounded by provider scope.

## 80. Multi-provider and multi-client isolation

PM-NOS MUST support explicit isolation where a provider serves multiple:

- organizations;
- communities;
- customers;
- contracts;
- jurisdictions;
- service domains.

One customer's data MUST NOT become visible to another customer merely because the same provider operates both.

One customer's service commitment MUST NOT automatically authorize operations against another customer's resources.

## 81. Multi-community operation

A provider may serve multiple communities.

The provider may have:

**Provider → Community Participation A**

and

**Provider → Community Participation B**

These are separate contexts.

Community A access does not automatically become Community B access.

Provider-wide administration does not automatically erase community boundaries.

## 82. Provider-to-organization relationship

An organization may contract a provider.

Canonical relationship:

**Organization → Provider Relationship → Service Commitment/Contract → Provider Execution**

The provider's relationship to one organization does not automatically authorize access to all organization resources.

## 83. Provider-to-community relationship

A community may recognize or contract a provider.

Canonical relationship:

**Community → Provider Participation/Contract → Service Scope → Provider Worker/Service Execution**

Community recognition does not automatically grant provider-wide community administration.

## 84. Provider worker in community context

A provider worker may simultaneously have:

- provider participation;
- worker role;
- service assignment;
- community service context;
- access request;
- LegaX identity;
- authentication session.

These contexts MUST remain explicit.

**Provider worker ≠ community administrator.**

**Service assignment ≠ unrestricted resident access.**

## 85. Provider-to-customer resource relationship

A provider may operate a customer resource under:

- contract;
- service commitment;
- maintenance agreement;
- emergency procedure;
- delegated stewardship;
- explicit authorization.

The relationship MUST define scope and duration.

Provider service responsibility does not automatically transfer ownership.

## 86. Provider ownership and stewardship

A provider may:

- own an asset;
- lease an asset;
- manage an asset;
- maintain an asset;
- operate an asset;
- have custody of an asset.

These are distinct relationships.

**Provider operation ≠ ownership.**

**Maintenance ≠ ownership.**

**Custody ≠ title.**

## 87. Provider data boundary

PM-NOS data may include:

- provider operations;
- workforce data;
- service commitments;
- customer references;
- asset state;
- facility state;
- scheduling;
- dispatch;
- financial records;
- evidence;
- security events.

Data MUST have:

- purpose;
- scope;
- sensitivity;
- retention;
- provenance;
- access policy;
- jurisdiction;
- disclosure boundary.

## 88. Customer privacy

Provider operations must minimize customer data.

A worker should receive only the information necessary to perform the assigned service.

A dispatch system should not expose unrelated customer data.

A provider analytics model should not automatically gain unrestricted access to all LegaX participant data.

Cross-service reuse requires explicit purpose and authorization.

## 89. Evidence privacy

Evidence such as:

- photographs;
- recordings;
- access logs;
- location data;
- service notes;
- identity documents;
- payment references

may be sensitive.

Evidence access must be governed by purpose, scope, retention and authorization.

## 90. Provider retention

Provider records may require different retention periods for:

- operational logs;
- contracts;
- invoices;
- payment records;
- service evidence;
- credentials;
- security events;
- maintenance records;
- regulatory records;
- customer complaints.

Retention does not imply indefinite accessibility.

Legal hold and preservation requirements must be explicit.

## 91. Provider lifecycle

A provider lifecycle is:

**DISCOVERED → ASSESSED → APPROVED → ONBOARDED → ACTIVE → DEGRADED → SUSPENDED → RESTRICTED → REINSTATED → RETIRED**

The exact state machine may differ by provider domain.

Provider onboarding does not create universal trust.

## 92. Provider service lifecycle

A provider service may move through:

**DRAFT → REVIEW → PUBLISHED → AVAILABLE → LIMITED → SUSPENDED → RETIRED**

A service may be unavailable without invalidating the provider identity or all other services.

## 93. Provider worker lifecycle

A provider worker relationship may move through:

**INVITED → ONBOARDED → ACTIVE → LIMITED → SUSPENDED → OFFBOARDED**

Credentials and assignments must be separately lifecycle-managed.

Offboarding MUST trigger appropriate credential/access review and revocation.

## 94. Provider facility lifecycle

Facilities may move through:

**PLANNED → ONBOARDING → OPERATIONAL → RESTRICTED → MAINTENANCE → CLOSED → RETIRED**

Facility state must be distinguishable from access state and service availability.

## 95. Provider asset lifecycle

Assets may use:

**IDENTIFIED → ACQUIRED → ONBOARDED → AVAILABLE → DEPLOYED → IN_SERVICE → MAINTENANCE → RESTRICTED → RETIRED → DISPOSED**

Actual states must be governed by domain evidence.

## 96. Provider commitment lifecycle

A generic commitment may use:

**REQUESTED → QUOTED → ACCEPTED → SCHEDULED → ASSIGNED → IN_SERVICE → DELIVERED → VERIFIED → COMPLETED**

Exceptional states include:

**DECLINED, CANCELLED, FAILED, DISPUTED, PARTIALLY_FULFILLED, RECONCILIATION_REQUIRED**

Commitment state is not payment state.

## 97. Provider incident lifecycle

A generic incident lifecycle is:

**DETECTED → TRIAGED → ACKNOWLEDGED → INVESTIGATING → MITIGATING → RECOVERED → VERIFIED → CLOSED**

A closed incident may later reopen if new evidence establishes unresolved impact.

## 98. Provider maintenance lifecycle

A generic maintenance lifecycle is:

**PLANNED → SCHEDULED → AUTHORIZED → IN_PROGRESS → INSPECTION → RETURN_TO_SERVICE → VERIFIED → CLOSED**

Failed inspection returns the asset to an appropriate restricted state.

## 99. Provider service recovery

When a service fails:

**Failure Signal → Incident → Impact Assessment → Customer/Stakeholder Communication → Mitigation → Recovery Attempt → Observation → Verification → Service State → Evidence → Review**

Recovery cannot be declared successful solely from an internal command acknowledgement when external evidence is required.

## 100. Reconciliation

Reconciliation is mandatory where provider state and LegaX state can diverge.

Examples:

- provider says completed, LegaX says pending;
- provider says payment received, LegaPay says unknown;
- provider says worker arrived, access evidence is absent;
- provider says asset repaired, inspection remains pending;
- provider says service active, provider network reports outage.

Canonical process:

**Provider Assertion → Evidence → Validation → Comparison → Conflict Classification → Resolution/Correction → Canonical State/Event → Audit Evidence**

## 101. Dispute model

Provider disputes may concern:

- service completion;
- quality;
- price;
- payment;
- access;
- damage;
- customer entitlement;
- SLA;
- evidence;
- worker assignment;
- provider performance.

A dispute creates a governed state.

It does not automatically reverse the underlying event or payment.

## 102. Cancellation

Cancellation must identify:

- who requested it;
- which commitment;
- timing;
- reason;
- applicable policy;
- cancellation authority;
- fees;
- refunds;
- released capacity;
- worker/asset impact;
- events/evidence.

Cancellation is a transition, not a boolean.

## 103. No-show

Provider no-show and customer no-show are distinct.

A no-show determination requires:

- scheduled commitment;
- relevant party;
- arrival/attempt evidence;
- grace period;
- applicable policy;
- evidence source;
- review/dispute path.

A provider assertion of no-show is not automatically final truth.

## 104. Partial fulfillment

A provider may fulfill only part of a commitment.

PM-NOS MUST support:

- partial quantity;
- partial scope;
- accepted portion;
- rejected portion;
- remaining obligation;
- customer acknowledgement;
- payment implications;
- evidence;
- reconciliation.

## 105. Service substitutions

Substitutions may affect:

- worker;
- vehicle;
- resource;
- product;
- appointment time;
- service method.

A substitution must respect:

- capability requirements;
- customer commitments;
- safety;
- policy;
- authorization;
- contractual terms.

A worker substitution is not merely an internal database update if the contract requires consent.

## 106. Provider communication

Provider messages may include:

- appointment notices;
- dispatch notices;
- arrival notices;
- incident notices;
- completion notices;
- billing notices;
- maintenance notices.

A notification is an event/communication action.

**Notification sent ≠ recipient received ≠ recipient accepted ≠ underlying action completed.**

## 107. Notifications and evidence

Provider communication should retain:

- message identity;
- recipient;
- channel;
- timestamp;
- template/version;
- originating command;
- delivery result;
- provider/network reference where relevant.

This supports accountability without treating delivery telemetry as universal proof of comprehension or consent.

## 108. Provider performance

Provider performance measures may include:

- service completion rate;
- on-time performance;
- first-time fix rate;
- response time;
- resolution time;
- utilization;
- capacity utilization;
- cancellation rate;
- incident rate;
- customer satisfaction;
- evidence completeness;
- reconciliation backlog;
- asset availability.

Metrics must identify calculation semantics and source.

## 109. Performance versus truth

A KPI is a derived measurement.

A KPI does not become:

- identity;
- authority;
- authorization;
- evidence of misconduct;
- contractual truth;
- legal finding

without the appropriate governed process.

## 110. Provider governance versus provider operations

If a provider is an organization:

**OM-NOS** may govern:

- purpose;
- organizational structure;
- governance;
- strategy;
- corporate policies;
- decision rights;
- enterprise risk;
- organizational finance;
- workforce governance.

**PM-NOS** may operate:

- service catalog;
- capacity;
- dispatch;
- service commitments;
- field workers;
- assets;
- facilities;
- maintenance;
- customer operations;
- provider service quality;
- provider incidents.

The provider can therefore use both systems without duplication.

## 111. PM-NOS versus OM-NOS

| Concern | OM-NOS | PM-NOS |
|---|---|---|
| Purpose | Organizational purpose | Service-delivery purpose |
| Governance | Organization governance | Provider operational governance |
| People | Organizational participants | Service workers/operators |
| Work | Organizational work | Service work orders |
| Resources | Organizational resources | Delivery resources/assets |
| Services | Organizational services | Provider offerings |
| Customers | Stakeholders/participants | Service consumers |
| Dispatch | Usually not core | Core provider operation |
| Service capacity | Supporting concern | Core |
| Facilities | Organizational facilities | Provider operating facilities |
| Maintenance | Organizational coordination | Service/asset maintenance |
| Provider relationships | Supplier/provider management | Provider is the operator |
| Commerce | Organizational finance/procurement | Provider quotes/orders/billing |
| Service delivery | Supporting | Core |
| Customer satisfaction | Supporting | Core operational feedback |
| Field execution | Supporting | Core |
| Provider credentialing | Supporting | Core service-operation concern |

## 112. PM-NOS versus CM-NOS

| Concern | CM-NOS | PM-NOS |
|---|---|---|
| Center | Community | Provider |
| People | Residents/participants/visitors | Customers/workers/operators |
| Places | Community places/buildings/units | Provider facilities/service locations |
| Services | Community services | Provider offerings |
| Resources | Shared community resources | Provider delivery resources |
| Visitors | Community visitors | Service visitors/workers |
| Operations | Community operations | Service delivery operations |
| Dispatch | Supporting | Core where field delivery exists |
| Maintenance | Community assets/facilities | Provider assets/service commitments |
| Customer relationship | Not primary | Core |
| Capacity | Community capacity | Provider service capacity |
| Commerce | Supporting | Core where service is commercial |
| Provider lifecycle | Consumer relationship | Provider's own operating lifecycle |

## 113. PM-NOS versus LegaServices

PM-NOS is an operating layer.

LegaServices are bounded domain services.

Examples:

- PM-NOS may coordinate a ride provider's drivers and dispatch; LegaRide owns ride-domain semantics.
- PM-NOS may coordinate a payment provider's operational workflow; LegaPay owns payment semantics.
- PM-NOS may coordinate a facility-access technician request; LegaAccess owns access semantics.
- PM-NOS may coordinate booking capacity; LegaBooking owns reservation semantics.
- PM-NOS may coordinate a market seller's fulfillment; LegaMarket owns marketplace semantics.
- PM-NOS may coordinate a health provider's operations; LegaHealth owns health-domain semantics.
- PM-NOS may coordinate worker assignment; LegaWork owns professional/work-domain semantics where applicable.

PM-NOS cannot absorb all LegaService semantics into one provider database.

## 114. PM-NOS versus Phase 19 Provider/Adapter Architecture

Phase 19 defines how external providers integrate with LegaX.

PM-NOS defines how a provider operates itself.

These are complementary:

**PM-NOS = provider-side operating model**

**Phase 19 = LegaX/provider integration boundary**

The same provider may use PM-NOS internally while integrating to LegaX through a Phase 19 adapter.

## 115. Provider integration trust boundary

The integration trust boundary is:

**Provider System → Adapter → Provider Assertion/Command → Validation → LegaX Contract → Authorization/Execution → Event/Evidence → Reconciliation**

No provider API key, OAuth scope, webhook, service account, device certificate or administrative credential may silently become LegaX authority.

This follows NIST Zero Trust's rejection of implicit trust based on location, ownership or affiliation.

## 116. Provider security architecture

PM-NOS should separate:

- identity;
- authentication;
- credential management;
- authorization;
- access;
- command execution;
- monitoring;
- evidence;
- incident response.

Provider internal security can be stronger or different from LegaX, but its integration must map explicitly into the canonical model.

## 117. Privileged provider operations

Privileged actions may include:

- issuing credentials;
- changing worker status;
- overriding schedules;
- changing service prices;
- refunding money;
- accessing sensitive customer data;
- disabling assets;
- granting emergency access;
- changing service scope.

These require:

- explicit actor;
- scope;
- authority;
- authorization;
- policy;
- reason;
- evidence;
- appropriate SoD;
- review where required.

## 118. Separation of duties

PM-NOS SHOULD support:

- dispatcher ≠ final financial approver;
- technician ≠ evidence reviewer where independent review is required;
- requester ≠ approver;
- credential issuer ≠ credential auditor where required;
- incident investigator ≠ final closure reviewer where required;
- service completion claimant ≠ disputed-outcome reviewer where required.

SoD rules are contextual and policy-driven.

## 119. Least privilege

Provider workers receive the minimum access necessary for assigned service operations.

NIST defines least privilege as restricting privileges/resources to the minimum necessary to accomplish assigned tasks.

Therefore:

**worker role + service assignment ≠ unrestricted customer data + unrestricted facility access + unrestricted provider administration.**

## 120. Provider emergency delegation

Emergency delegation may be used when normal operations cannot safely complete in time.

Delegation must define:

- delegator;
- delegate;
- scope;
- operation;
- trigger;
- start;
- expiry;
- notification;
- review;
- evidence;
- revocation.

Emergency delegation cannot exceed the authority available to the delegator.

## 121. Provider policy

Provider policies may govern:

- scheduling;
- service eligibility;
- dispatch;
- safety;
- maintenance;
- customer handling;
- refunds;
- worker conduct;
- access requests;
- evidence;
- incident response;
- quality;
- privacy;
- retention.

Policy lifecycle:

**DRAFT → REVIEW → APPROVAL → EFFECTIVE → AMENDED/SUSPENDED → RETIRED**

Policy is not authority.

## 122. Provider automation

Automation may perform:

- scheduling;
- notifications;
- monitoring;
- low-risk state updates;
- queue routing;
- alerts;
- reconciliation proposals.

Automation must have:

- explicit scope;
- identity;
- authority;
- authorization;
- idempotency;
- auditability;
- failure handling;
- rollback/compensation where required.

## 123. Provider automation cannot self-authorize

An automation engine cannot say:

“Because I am the provider system, I am authorized.”

The correct model is:

**Automation Identity → Provider Participation/Context → Defined Authority → Runtime Authorization → Command → Execution**

This applies equally to AI agents, workflow engines, scripts, webhooks and service accounts.

## 124. Provider service agents

A provider AI agent may:

- inspect assigned queues;
- summarize incidents;
- propose dispatch;
- prepare customer responses;
- recommend maintenance;
- classify evidence;
- initiate bounded commands when explicitly authorized.

An agent is an actor/service identity for accountability purposes.

It is not a new authority class.

## 125. Provider data synchronization

Provider synchronization may use:

- API;
- webhook;
- event stream;
- polling;
- file exchange;
- device telemetry;
- manual reconciliation.

Every synchronization mechanism must identify:

- source;
- destination;
- object;
- version;
- timestamp;
- provenance;
- mapping;
- conflict behavior;
- retry;
- deduplication.

## 126. Provider event ordering

PM-NOS MUST NOT assume one global provider event order.

Ordering may be scoped by:

- work order;
- service commitment;
- asset;
- customer relationship;
- provider;
- facility;
- stream.

Out-of-order events require domain-aware handling.

## 127. Provider event delivery

Provider event semantics must distinguish:

**Occurred → Persisted → Published → Delivered → Acknowledged → Processed → Effect Applied**

At-least-once delivery requires idempotent consumers.

Replay must not silently re-execute consequential operations.

## 128. Provider evidence chain

The provider accountability chain is:

**Request → Customer/Provider Context → Worker/Service Identity → Authority → Authorization → Command → Execution Attempt → Provider Observation → Evidence → Outcome → Reconciliation**

Where external systems are involved:

**Provider Command → External Execution → External Assertion → Validation → Evidence → Reconciliation**

## 129. Provider audit

Audit should answer:

- who acted;
- what they attempted;
- what authority applied;
- what authorization decision applied;
- which policy version applied;
- which resource was affected;
- which command executed;
- which external system was involved;
- what was observed;
- what evidence exists;
- what was later corrected.

Audit telemetry is not automatically legal proof in every jurisdiction.

## 130. Provider observability

Operational telemetry may include:

- queue depth;
- worker availability;
- API latency;
- device health;
- facility state;
- dispatch latency;
- failed commands;
- dependency health;
- event lag.

Telemetry supports operations.

It does not replace canonical events/evidence.

## 131. Provider reliability

PM-NOS must define:

- retry policy;
- timeout;
- backoff;
- circuit breaking where applicable;
- degraded mode;
- duplicate handling;
- reconciliation;
- recovery;
- compensation;
- dependency failure;
- unknown outcomes.

A provider system must not turn timeout into false failure when the external outcome may have succeeded.

## 132. Provider capacity failure

When capacity is unavailable, PM-NOS may:

- reschedule;
- reassign;
- subcontract;
- offer alternatives;
- queue;
- decline;
- escalate;
- invoke emergency procedures.

The selected action must follow commitment, policy and authorization.

AI recommendations cannot silently breach customer commitments.

## 133. Provider service degradation

A provider may operate in:

- normal;
- degraded;
- emergency;
- maintenance;
- restricted;
- recovery

modes.

Degraded operation must define which services remain available and what constraints apply.

## 134. Provider service suspension

A service may be suspended due to:

- safety;
- compliance;
- capacity;
- dependency failure;
- security;
- maintenance;
- regulatory requirement;
- commercial decision.

Suspension must preserve existing commitments and customer-impact semantics according to applicable policy.

## 135. Provider offboarding

Offboarding must cover:

- worker access;
- provider credentials;
- customer data;
- active commitments;
- open work;
- assets;
- evidence;
- integrations;
- payment reconciliation;
- contracts;
- outstanding disputes;
- retention/legal hold.

Provider retirement does not erase historical evidence.

## 136. Provider onboarding

Provider onboarding SHOULD include:

**Registration → Identity Resolution → Due Diligence → Capability Review → Credential/Integration Review → Contract → Service Definition → Test → Approval → Activation → Monitoring**

Provider approval is not universal LegaX trust.

## 137. Provider capability evidence

Capability evidence may include:

- licenses;
- certifications;
- equipment;
- workforce qualifications;
- historical outcomes;
- insurance;
- facility inspection;
- provider attestations;
- external verification.

Evidence must preserve source and assurance.

## 138. Provider marketplace participation

If a provider appears in LegaX discovery or commerce, PM-NOS may publish:

- offerings;
- availability;
- pricing;
- service areas;
- credentials;
- quality signals;
- capacity.

Marketplace listing remains distinct from service commitment.

LegaMarket remains the bounded commerce domain where applicable.

## 139. Provider discovery

Discovery may use:

- service type;
- geography;
- capability;
- availability;
- quality;
- price;
- service level;
- credentials;
- capacity.

Discovery is a recommendation/search operation.

It is not authorization.

## 140. Provider matching

Matching may connect:

**Customer Need ↔ Provider Capability ↔ Availability ↔ Capacity ↔ Service Area ↔ Policy**

Matching is a proposal unless a governed policy explicitly creates an authorized commitment.

## 141. Provider selection

Selection may require:

- customer choice;
- organization policy;
- community policy;
- contract;
- eligibility;
- quality threshold;
- price;
- service level;
- availability.

Selection is not execution.

## 142. Provider commitment creation

A provider commitment requires:

- parties;
- service;
- scope;
- timing;
- price where applicable;
- service level;
- cancellation;
- evidence;
- applicable policy;
- acceptance;
- authorization.

Commitment creation must be idempotent.

## 143. Provider fulfillment network

Fulfillment may involve:

- primary worker;
- backup worker;
- subcontractor;
- vehicle;
- facility;
- inventory;
- payment provider;
- access provider;
- network provider.

Each dependency remains explicit.

## 144. Provider quality review

Quality review may compare:

- commitment;
- planned service;
- executed service;
- observed outcome;
- evidence;
- customer feedback;
- SLA;
- incident data.

Review may produce:

- accepted;
- accepted with exception;
- rejected;
- disputed;
- requires remediation;
- unknown.

## 145. Remediation

Provider remediation may include:

- rework;
- replacement;
- refund request;
- credit;
- rescheduling;
- maintenance;
- worker retraining;
- process correction;
- provider suspension;
- contract review.

Remediation itself is a governed operation.

## 146. Provider improvement

Continuous improvement may use:

**Outcome → Evidence → Measurement → Root Cause → Improvement Proposal → Review → Authorization → Change → Execution → Measurement**

This aligns with service-management and asset-management continuous-improvement principles.

## 147. Canonical cross-domain relationship

The PM-NOS relationship to the rest of LegaX is:

**Provider → Participation → Context → Role/Capability → Authority → Authorization → Provider Command → LegaService/External Execution → Event → Evidence → Intelligence**

This is the provider-side operating interpretation of the shared LegaX chain.

## 148. No parallel authority chain

PM-NOS MUST NOT create:

**Provider Admin → Direct Permission → Consequential LegaX Action**

Instead:

**Provider Admin/Worker → Identity → Participation/Context → Provider/Delegated Authority → LegaX Authorization → Command → Execution**

This is the architectural boundary that keeps PM-NOS subordinate to LegaX Core.

## 149. Canonical provider truth

PM-NOS may be authoritative for provider-owned operational facts such as:

- provider worker assignment;
- provider shift;
- provider asset state;
- provider facility schedule;
- provider work-order state;
- provider internal capacity.

It is not automatically authoritative for:

- LegaX identity;
- global authority;
- LegaX authorization;
- LegaPay settlement;
- LegaAccess enforcement result;
- external legal truth;
- customer ownership.

Authority is domain-specific.

## 150. Provider local truth versus LegaX truth

Provider local state:

**Provider State**

may be mapped into:

**Provider Assertion → Validation → Evidence → Reconciliation → LegaX Canonical Interpretation**

The mapping MUST preserve uncertainty.

## 151. Provider contracts with LegaServices

PM-NOS may act as an operational layer for a provider participating in multiple LegaServices.

Example:

**Provider → PM-NOS → LegaRide**

and:

**Provider → PM-NOS → LegaBooking**

and:

**Provider → PM-NOS → LegaPay**

The shared provider identity may be reused, but service-specific participation, authorization, state and evidence remain bounded.

## 152. Service-specific provider roles

A provider may have different roles in different services:

- transport provider in LegaRide;
- merchant in LegaMarket;
- service operator in LegaBooking;
- connectivity provider in LegaNetwork;
- food provider in LegaFood;
- health provider in LegaHealth.

These roles do not automatically merge into one global capability.

## 153. Provider context

Authorization context may include:

- provider;
- service;
- customer;
- community;
- organization;
- facility;
- work order;
- resource;
- time;
- jurisdiction;
- worker assignment;
- service commitment;
- emergency state;
- device;
- risk state.

Context provides conditions.

**Context does not itself grant authority.**

## 154. Provider capability

Provider capabilities may include:

- repair;
- transport;
- deliver;
- inspect;
- maintain;
- install;
- host;
- provide connectivity;
- provide healthcare;
- provide food;
- operate facilities.

Capability describes ability.

**Capability ≠ authority.**

## 155. Provider authority

Authority may be derived from:

- provider contract;
- delegated organizational authority;
- resource stewardship;
- service commitment;
- customer authorization;
- regulatory mandate;
- explicit LegaX authority assignment.

Authority must be scoped.

## 156. Provider authorization

Authorization evaluates:

**Actor + Authentication + Identity + Participation + Context + Role + Capability + Authority + Policy + Action + Target + Resource + Lifecycle + Time + Jurisdiction + Security/Risk + Preconditions**

Outcome:

**ALLOW / DENY / INDETERMINATE / PENDING**

Deny-by-default remains the canonical security posture.

## 157. Provider access

Where physical/digital access is required:

**Authorization → Access Request → Access Decision → Enforcement → Observation → Event/Evidence**

PM-NOS may initiate the access request.

LegaAccess owns canonical access semantics.

## 158. Provider action

Provider actions include:

- assign;
- dispatch;
- enter;
- inspect;
- repair;
- deliver;
- collect;
- install;
- activate;
- suspend;
- refund;
- notify;
- close.

Each consequential action must be attributable and governed.

## 159. Provider event

An event records that something occurred.

It does not itself create:

- authority;
- authorization;
- ownership;
- truth;
- payment settlement.

This preserves Phase 17.

## 160. Provider evidence

Evidence supports reconstruction and validation.

It does not automatically become truth.

This preserves Phase 18.

## 161. Provider intelligence

Intelligence derives signals from provider events/evidence and may support:

- forecasting;
- matching;
- anomaly detection;
- optimization;
- review;
- recommendations.

It does not become authority.

## 162. Provider safety

Safety-critical operations require:

- defined safety constraints;
- qualified actors;
- appropriate authorization;
- equipment conditions;
- environmental checks;
- evidence;
- incident handling;
- review.

AI cannot override a mandatory safety constraint merely because its prediction suggests a different outcome.

## 163. Provider physical operations

For physical service execution:

**Service Commitment → Authorization → Access Decision → Enforcement → Physical Operation → Observation → Resource State → Event → Evidence**

Physical completion should use appropriate observations rather than relying only on software acknowledgements.

## 164. Provider digital operations

For digital service execution:

**Authenticated Actor/Service → Authorization → Command → Protected Resource → Execution → Result → Event/Evidence**

Digital resource access follows the same authority boundary.

## 165. Provider economic operations

For economic effects:

**Commercial Intent → Authorization → Payment/Commerce Command → Provider/Network → Provider Outcome → Settlement/Reconciliation → Event/Evidence**

Provider billing and payment handling do not redefine LegaPay.

## 166. Provider customer consent

Customer consent may be required for:

- data use;
- service changes;
- substitutions;
- access;
- communication;
- marketing;
- health-related processing where applicable;
- recording;
- biometric use.

Consent is represented according to the relevant legal/service domain.

A provider UI checkbox must not be treated as universal consent across LegaX.

## 167. Provider authorization versus customer authorization

A provider may be authorized to perform a service while a worker still needs:

- worker credential;
- specific access authorization;
- facility authorization;
- customer approval;
- professional qualification.

Provider-level authorization does not automatically satisfy every lower-level requirement.

## 168. Provider subcontractor execution

If a subcontractor performs a provider commitment:

**Provider Commitment → Subcontractor Assignment → Subcontractor Identity → Qualification → Authorization → Execution → Evidence → Provider Reconciliation**

The primary provider remains responsible for the semantics of its contractual relationship.

## 169. Provider operational boundary

PM-NOS owns the provider's operational coordination model.

It should not duplicate canonical definitions from:

- Identity;
- Authentication;
- Account;
- Authority;
- Authorization;
- Access;
- Resource;
- Economic & Commerce;
- Lifecycle & Policy;
- Events;
- Evidence;
- Provider/Adapter architecture.

It references those contracts.

## 170. Implementation boundary

This document defines the canonical semantic and architectural contract for PM-NOS.

It does not prescribe:

- a database schema;
- a specific API implementation;
- a frontend;
- mobile implementation;
- a dispatch algorithm;
- a payment processor;
- a biometric device;
- a cloud vendor;
- an AI model;
- a particular workforce platform.

Implementation must derive from this contract and cannot silently invent contradictory semantics.

## 171. Provider integrity invariants

The following invariants are mandatory.

1. Provider identity is distinct from provider participation.
2. Provider participation is distinct from provider authority.
3. Provider authority is distinct from authorization.
4. Authorization is distinct from access.
5. Access is distinct from execution.
6. Execution is distinct from outcome.
7. Outcome is distinct from evidence.
8. Evidence is distinct from truth.
9. Intelligence is distinct from authority.
10. Provider membership does not imply unrestricted LegaX access.
11. Provider credential does not equal LegaX authorization.
12. Worker role does not equal unrestricted permission.
13. Capability does not equal authority.
14. Context does not grant authority.
15. Location does not grant authority.
16. Work order does not itself grant access.
17. Service commitment does not itself grant physical access.
18. Provider API access does not equal LegaX authority.
19. Provider webhook does not equal canonical truth.
20. Provider acknowledgement does not equal completed outcome.
21. Provider billing does not equal payment settlement.
22. Provider payment receipt does not equal LegaPay settlement.
23. Customer relationship does not equal ownership.
24. Maintenance responsibility does not equal ownership.
25. Custody does not equal ownership.
26. Facility operation does not equal facility ownership.
27. Worker employment does not equal professional qualification.
28. Assignment does not equal successful execution.
29. Dispatch does not equal authorization.
30. Matching does not equal commitment.
31. Discovery does not equal booking.
32. Booking does not equal execution.
33. Reservation does not equal ownership.
34. Capacity does not equal authority.
35. Availability does not equal commitment.
36. Customer rating does not equal legal finding.
37. Risk score does not equal decision.
38. AI recommendation does not equal authorization.
39. AI prediction does not equal fact.
40. AI automation does not self-authorize.
41. Provider administration does not equal global administration.
42. Provider suspension does not erase historical evidence.
43. Provider retirement does not erase required records.
44. Offboarding must review provider credentials and access.
45. Emergency operation must remain scoped.
46. Emergency delegation must expire or be revocable.
47. External provider state must preserve provenance.
48. Unknown external outcome must remain unknown until reconciled.
49. Timeout must not automatically become failure.
50. Retry must not duplicate consequential effects.
51. Commands must be attributable.
52. Consequential commands must be idempotent where necessary.
53. Stale material state must not silently be overwritten.
54. Concurrent capacity claims must be controlled.
55. Provider service versions must be identifiable.
56. Material contract changes must respect applicable approval/consent.
57. Customer data must remain purpose-bound.
58. Sensitive evidence must be access-controlled.
59. Provider-local IDs must remain provider-scoped.
60. Provider source assertions must retain source identity.
61. Canonical events must follow Phase 17 semantics.
62. Evidence must follow Phase 18 semantics.
63. Provider integrations must follow Phase 19 semantics.
64. Service-specific semantics remain owned by the relevant LegaService.
65. LegaAccess remains authoritative for canonical access enforcement.
66. LegaPay remains authoritative for canonical payment lifecycle and settlement.
67. LegaBooking remains authoritative for canonical reservations.
68. LegaWork remains authoritative for professional/work-domain semantics where applicable.
69. LegaHealth remains authoritative for health-domain semantics where applicable.
70. PM-NOS must not become a second LegaX Core.
71. PM-NOS must not create a parallel authority chain.
72. No authorization means no consequential LegaX action.
73. Every consequential provider operation must have an applicable lifecycle.
74. Every material external assertion must be reconciliable where required.
75. Provider operational intelligence must remain non-authoritative by default.

## 172. Contradiction tests

The architecture must fail if any implementation implies:

1. provider admin automatically has all LegaX authority;
2. provider worker automatically has all customer access;
3. worker credential automatically grants physical access;
4. service assignment automatically unlocks a building;
5. provider API key automatically becomes LegaX authority;
6. provider webhook automatically becomes canonical truth;
7. provider completion button automatically proves completion;
8. provider invoice automatically proves payment settlement;
9. customer relationship automatically grants ownership;
10. provider maintenance automatically transfers title;
11. dispatch automatically authorizes access;
12. AI dispatch recommendation automatically executes without authority;
13. AI fraud score automatically proves fraud;
14. customer rating automatically proves misconduct;
15. provider location automatically grants authority;
16. facility presence automatically grants facility administration;
17. community membership automatically grants provider authority;
18. provider status automatically grants community administration;
19. organization membership automatically grants provider authority;
20. provider credential automatically authenticates every LegaX context;
21. timeout is always failure;
22. retry always creates a new consequential effect;
23. stale worker assignment can overwrite newer assignment;
24. stale capacity state can overwrite a newer reservation;
25. provider retirement deletes required evidence;
26. worker offboarding leaves active credentials;
27. emergency mode removes expiry;
28. emergency mode removes audit requirements;
29. subcontractor automatically receives all provider authority;
30. provider service version can change a committed contract without governed semantics;
31. service catalog listing is treated as a completed commitment;
32. matching is treated as customer acceptance;
33. availability is treated as reservation;
34. reservation is treated as service execution;
35. service execution is treated as successful outcome without evidence;
36. event publication is treated as event occurrence;
37. telemetry is treated as canonical business evidence;
38. intelligence output is treated as authority;
39. provider administration bypasses LegaX authorization;
40. PM-NOS creates its own universal IAM semantics.

Any such result is an architectural failure.

## 173. Readiness gate

PM-NOS is implementation-ready only when all of the following are defined and testable:

1. Provider definition.
2. Provider participation model.
3. Provider service catalog model.
4. Service offering lifecycle.
5. Service versioning.
6. Provider capability model.
7. Provider authority boundary.
8. Customer/participant relationship model.
9. Provider worker model.
10. Worker capability/qualification references.
11. Credential lifecycle.
12. Team/operational-unit model.
13. Service capacity model.
14. Service-area model.
15. Facility model.
16. Asset/resource model.
17. Asset lifecycle.
18. Maintenance model.
19. Schedule model.
20. Dispatch model.
21. Work-order model.
22. Service commitment model.
23. Service-delivery lifecycle.
24. Incident model.
25. Problem model.
26. Change model.
27. Service-level model.
28. Contract/commitment model.
29. Provider commerce model.
30. Billing boundary.
31. Customer-service model.
32. Quality model.
33. Customer-satisfaction model.
34. Security model.
35. Provider-access boundary.
36. Emergency-operation model.
37. Subcontractor model.
38. Provider dependency model.
39. Provider adapter mapping.
40. Provider assertion model.
41. Provider event model.
42. Provider evidence model.
43. Reconciliation model.
44. Dispute model.
45. Privacy/data-governance model.
46. Retention model.
47. Provider lifecycle.
48. Worker lifecycle.
49. Facility lifecycle.
50. Service lifecycle.
51. Commitment lifecycle.
52. Incident lifecycle.
53. Maintenance lifecycle.
54. Command model.
55. Idempotency model.
56. Concurrency model.
57. Unknown-outcome model.
58. Offline-operation model where applicable.
59. AI/intelligence boundary.
60. AI oversight model.
61. Audit model.
62. Observability model.
63. Reliability/recovery model.
64. Multi-client isolation.
65. Multi-community isolation.
66. Multi-service participation.
67. LegaX authorization mapping.
68. LegaAccess mapping.
69. LegaPay mapping.
70. LegaBooking mapping.
71. LegaWork mapping where applicable.
72. LegaHealth mapping where applicable.
73. Phase 15 state-machine compatibility.
74. Phase 16 command-execution compatibility.
75. Phase 17 event compatibility.
76. Phase 18 evidence compatibility.
77. Phase 19 provider/adapter compatibility.
78. OM-NOS boundary.
79. CM-NOS boundary.
80. No-parallel-IAM boundary.
81. No-parallel-authority boundary.
82. No-AI-authority boundary.
83. Testable invariants.
84. Contradiction tests.
85. Implementation ownership.
86. Lifecycle and migration strategy.

## 174. Canonical PM-NOS operating model

The complete provider operating model is:

**PROVIDER → OFFER → CAPACITY → CUSTOMER/CONSUMER → COMMITMENT → PLAN → SCHEDULE → ASSIGN → AUTHORIZE → DISPATCH → ACCESS → EXECUTE → OBSERVE → VERIFY → COMPLETE → EVIDENCE → RECONCILE → REVIEW → IMPROVE**

The canonical LegaX control model remains:

**IDENTITY → PARTICIPATION → CONTEXT → ROLE → CAPABILITY → AUTHORITY → AUTHORIZATION → ACCESS → ACTION → EVENT → EVIDENCE → INTELLIGENCE**

PM-NOS connects these two layers without replacing either.

## 175. Final architectural rule

**The Provider Management Network Operating System is the governed provider-side operating layer through which a provider offers, plans, schedules, assigns, dispatches, delivers, maintains, secures, supports, measures and improves services and capabilities for customers, participants, organizations and communities while managing its workers, resources, facilities, capacity, credentials, commitments, commerce and operational evidence.**

It is not:

- a second LegaX;
- a second IAM;
- a second authorization engine;
- a universal customer database;
- a marketplace;
- a generic supplier-management module;
- an unrestricted provider administrator;
- an AI governor.

Its constitutional relationship is:

**Provider Capability → Provider Operations → LegaX Authority → LegaX Authorization → Governed Command → Provider Execution → Event → Evidence → Reconciliation → Outcome**

And the non-negotiable boundary is:

**A provider may operate what it is legitimately authorized to operate; PM-NOS MUST NOT manufacture authority merely because the provider controls the operational system, worker, facility, credential, device, API, workflow or customer relationship.**

