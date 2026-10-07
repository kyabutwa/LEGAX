# LegaX — Resources & Physical World Model

## 08 — Resources & Physical World

**Canonical definition**

Resources & Physical World in LegaX is the governed representation of the digital, physical, economic, spatial, infrastructural, and operational things, places, environments, systems, and resource boundaries with which participating entities may have relationships, responsibilities, control, use, access, custody, service, or other legitimate interactions, together with the identity, structure, state, location, ownership or stewardship, lifecycle, capabilities, constraints, dependencies, and evidence required to reason about and safely operate those resources without treating possession, location, representation, or technical connectivity as automatic authority.

The Resources & Physical World model answers **“what exists, where or in which system it exists, what resource boundary it represents, what state it is in, how it is related to other resources, and which governed interactions are possible with it?”** It does not by itself answer who may control it, who may access it, who owns it, or who may perform a particular action. Those questions remain governed by Identity, Participation, Administration, Authority, Authorization, Access, Policy, Lifecycle, and the applicable domain.

This model gives LegaX a common representation of the world that its Identity and Access infrastructure is intended to protect and connect. It must be broad enough to represent a building, unit, room, gate, elevator, facility, road, vehicle, device, sensor, network, application, API, file, service, payment resource, utility, workspace, equipment, inventory item, infrastructure component, digital object, economic resource, or future legitimate resource without changing the foundational meaning of a resource.

## Resource is not authority

A resource may have an owner, operator, custodian, administrator, provider, resident, worker, maintainer, user, beneficiary, or other relationship to an entity.

None of those relationships should be interpreted as universal authority merely because the relationship exists.

A resource record is descriptive and governed. It establishes what LegaX recognizes as a resource and how that resource relates to the ecosystem. Authority over the resource is represented separately and evaluated through the applicable governance and authorization models.

The following distinctions must remain explicit:

- **Resource** — what is protected, used, managed, operated, consumed, observed, or affected.
- **Identity** — who or what is recognized as an entity.
- **Relationship** — how an entity is connected to a resource.
- **Ownership** — a domain-specific legal, contractual, or governed relationship; not inferred solely from a resource record.
- **Stewardship/Custody** — responsibility for maintaining or caring for a resource; not automatically ownership or unrestricted authority.
- **Authority** — the governed entitlement to control or decide within a scope.
- **Authorization** — the runtime decision for a specific requested operation.
- **Access** — enforcement of an authorized interaction at the resource boundary.
- **Action/Execution** — the actual operation and resulting state change.

## Resource classes

LegaX must support extensible resource classes while preserving a common contract.

### Physical resources

Examples include:

- buildings;
- compounds;
- units;
- rooms;
- floors;
- doors;
- gates;
- elevators;
- parking spaces;
- roads and pathways;
- facilities;
- equipment;
- machinery;
- appliances;
- vehicles;
- utility infrastructure;
- security infrastructure;
- physical inventory;
- restricted zones;
- public or community infrastructure.

A physical resource may contain or be spatially related to other resources.

For example:

**Building → Floor → Unit → Room → Door**

or:

**Community → Facility → Equipment → Device**

The hierarchy is a relationship model, not an authority model.

### Spatial resources

LegaX may represent:

- geographic areas;
- parcels;
- properties;
- addresses;
- buildings;
- zones;
- rooms;
- coordinates;
- routes;
- service areas;
- geofenced regions;
- logical locations.

Location can inform context and policy, but location alone must never manufacture identity, ownership, participation, authority, authorization, or access.

### Digital resources

Examples include:

- applications;
- APIs;
- databases;
- files;
- records;
- datasets;
- workspaces;
- services;
- endpoints;
- digital objects;
- configuration resources;
- network resources;
- credential stores;
- software-controlled functions.

Digital resources must remain identifiable and governable even when hosted by external infrastructure.

### Device and system resources

Examples include:

- phones;
- readers;
- locks;
- cameras;
- biometric hardware;
- access controllers;
- sensors;
- terminals;
- payment devices;
- servers;
- edge devices;
- IoT devices;
- machines;
- vehicles;
- robots;
- service agents;
- external systems.

A device can itself be a resource while also serving as an enforcement point, sensor, actor, or integration endpoint. Those roles must be represented separately rather than conflated.

### Economic and service resources

Examples include:

- payment instruments or transaction resources;
- balances where legitimately represented;
- bookings;
- reservations;
- service capacity;
- utility capacity;
- inventory;
- goods;
- work opportunities;
- contracts;
- service entitlements;
- transport capacity.

Economic representation must not imply ownership or settlement authority. Financial and provider-specific rules remain applicable.

## Resource identity and representation

Every resource represented by LegaX must have a stable resource identity appropriate to its lifecycle.

A resource identifier is a reference to the represented resource. It is not proof of ownership, authority, physical existence, or current state by itself.

Where appropriate, a resource representation should maintain:

- resource identifier;
- resource type/class;
- canonical name or label;
- description;
- source/provenance;
- parent and child relationships;
- spatial relationship;
- external identifiers;
- owner/steward/custodian relationships where legitimately known;
- operational status;
- lifecycle state;
- capabilities;
- constraints;
- dependencies;
- security classification;
- sensitivity;
- jurisdiction;
- provider/operator;
- creation and effective timestamps;
- verification state;
- evidence references;
- current version;
- historical versions.

A single physical object may have several external identifiers across providers. LegaX must preserve the relationship between those identifiers without treating every external record as a separate real-world resource.

## Resource reality versus representation

LegaX must distinguish:

1. **Real-world resource** — the thing, place, system, or capacity that exists outside or independently of the LegaX database.
2. **Resource representation** — LegaX's governed record describing or representing that resource.
3. **External representation** — a provider, government, organization, device, or other system's representation of the resource.
4. **Evidence** — information supporting claims about the resource.
5. **Observation** — information indicating a resource's observed condition at a particular time.
6. **Inferred state** — a derived conclusion that remains distinguishable from verified fact.
7. **Proposed state** — an intended or recommended future condition.

The database record must not silently become proof that a physical resource exists or is in a particular state.

Resource truth should preserve provenance and confidence.

## Resource state

Resources are dynamic.

A resource may be:

- proposed;
- planned;
- registered;
- provisioned;
- active;
- available;
- occupied;
- reserved;
- restricted;
- maintenance;
- degraded;
- offline;
- suspended;
- quarantined;
- retired;
- decommissioned;
- destroyed;
- unknown.

Domains may define additional states.

The lifecycle engine remains responsible for governed state transitions. The resource model provides the subject whose lifecycle is being managed.

Current state must be distinguishable from historical state and from observations.

A resource cannot be treated as operational merely because an old record says it was operational.

## Physical world hierarchy

LegaX must support relationships between physical resources without assuming that one hierarchy fits every domain.

Examples include:

**Community → Property → Building → Floor → Unit → Room → Door**

**Community → Facility → Equipment → Device → Sensor**

**Road → Route → Segment → Access Point**

**Utility → Network → Distribution Point → Meter → Premise**

A resource may belong to more than one meaningful relationship graph.

For example, an elevator may be:

- physically located in a building;
- operated by a provider;
- maintained by a worker;
- connected to a network;
- controlled by an access system;
- associated with multiple floors;
- subject to safety constraints.

The model must therefore support typed relationships rather than relying only on a single parent-child tree.

## Resource relationships

LegaX should support governed relationship types such as:

- contains;
- contained-by;
- located-at;
- adjacent-to;
- connected-to;
- depends-on;
- controls;
- controlled-by;
- operates;
- operated-by;
- maintains;
- maintained-by;
- services;
- serviced-by;
- assigned-to;
- allocated-to;
- reserved-for;
- occupied-by;
- used-by;
- belongs-to;
- part-of;
- attached-to;
- powered-by;
- communicates-with;
- protects;
- protected-by;
- provided-by;
- supplied-by.

The relationship type determines semantic meaning.

A located-at relationship does not imply ownership.

A uses relationship does not imply authority.

A maintains relationship does not imply ownership.

A provides relationship does not imply unrestricted control.

A contains relationship does not automatically grant access to the contained resource.

## Ownership, stewardship, custody, and control

Real-world resources can have complex legal and operational relationships.

LegaX must not collapse:

- legal ownership;
- beneficial interest;
- leasehold;
- tenancy;
- occupancy;
- custody;
- stewardship;
- operation;
- maintenance;
- administration;
- delegated control;
- service provision;
- usage rights.

These may belong to different entities simultaneously.

For example, an organization may own a building, a property manager may administer it, a security provider may operate the access-control system, a resident may have a contextual right to use a unit, and a maintenance worker may have temporary authorized access to equipment.

The resource model represents those relationships. Authority and authorization determine what each relationship permits.

## Physical world and access

Resources & Physical World provides the target and environment for Access.

The Access model determines how an authorized interaction reaches the resource boundary.

For physical resources, enforcement may involve:

- locks;
- gates;
- elevators;
- readers;
- controllers;
- cameras;
- biometric hardware;
- NFC;
- QR;
- vehicle barriers;
- physical keys;
- electronic credentials;
- provider systems.

The physical resource model must remain independent from any particular access technology.

Replacing a lock, reader, controller, provider, or credential technology must not require redefining the resource itself.

## Resource capability

A resource may expose capabilities or operations.

Examples:

- a door can unlock or lock;
- an elevator can select floors;
- a vehicle can start or unlock;
- a device can report telemetry;
- a workspace can accept members;
- a service can create or cancel a booking;
- equipment can enter maintenance mode;
- a payment resource can initiate or settle a transaction under its domain rules.

A capability describes what a resource can technically or operationally support.

It does not establish who may invoke the capability.

The distinction is:

**Resource capability → Policy/Authority → Authorization → Access → Action**

Technical possibility must never be mistaken for permission.

## Resource security posture

Resource security posture may affect access and authorization.

Relevant attributes can include:

- device health;
- firmware/software state;
- configuration state;
- connectivity;
- tamper state;
- certificate/key state;
- credential status;
- maintenance status;
- safety status;
- isolation/quarantine state;
- provider status;
- known vulnerabilities;
- sensitivity;
- criticality.

Resource posture is an input to governed decisions. It is not itself an authority source.

A resource may refuse or restrict an operation because it is unsafe, compromised, unavailable, under maintenance, or otherwise unsuitable even when authorization exists.

That enforcement result must remain distinguishable from an authorization denial.

## Resource availability and capacity

Physical and digital resources may have limited capacity.

Examples include:

- one parking space;
- limited building occupancy;
- elevator capacity;
- room capacity;
- utility capacity;
- booking slots;
- vehicle seats;
- service-provider availability;
- inventory quantity;
- network capacity;
- compute capacity.

Availability is not authorization.

A person may be authorized to use a resource but unable to use it because the resource is occupied, reserved, offline, unavailable, unsafe, or at capacity.

Likewise, availability must not be treated as permission.

This distinction is essential for LegaBooking, LegaRide, LegaWork, LegaMarket, LegaPay, LegaAccess, and future services.

## Resource reservations and claims

Reservations, allocations, holds, and claims must be represented as contextual relationships with explicit lifecycle and scope.

A reservation may establish a temporary allocation or expected availability.

It does not automatically create unrestricted authority over the underlying resource.

Reservations should include, where applicable:

- resource;
- reserving actor;
- applicable participation/context;
- scope;
- effective period;
- quantity/capacity;
- priority;
- status;
- cancellation rules;
- authorization source;
- provider/external reference;
- evidence;
- lifecycle.

Conflicting reservations must be governed by explicit policy rather than accidental database ordering.

## Resource dependencies

Real-world resources often depend on other resources.

Examples:

- a building depends on electricity;
- an access controller depends on network connectivity;
- a payment terminal depends on a payment provider;
- an elevator depends on power and safety systems;
- a device depends on credentials and a control plane;
- a service depends on provider infrastructure.

LegaX should represent critical dependencies where they affect safe operation, availability, authorization, access, or accountability.

Dependency failure must not be hidden as a generic authorization failure.

## Resource discovery and onboarding

Resources may enter LegaX through:

- manual registration;
- authorized administration;
- provider integration;
- device onboarding;
- service creation;
- import from external systems;
- verified documentation;
- physical inspection;
- automated discovery;
- approved API integration.

Discovery is not proof.

Onboarding must establish sufficient evidence and provenance for the resource's intended use.

For connected devices, secure onboarding should establish device identity and security posture before granting network or operational credentials. NIST's 2025 IoT guidance emphasizes identity/posture verification and lifecycle management before network credentials are issued and throughout device operation. citeturn0search7turn0search8

## Resource verification and evidence

Resource verification should be risk-based.

Evidence may include:

- title or registration records;
- leases or contracts;
- provider records;
- photographs;
- inspection records;
- device certificates;
- manufacturer information;
- serial numbers;
- geospatial evidence;
- sensor observations;
- maintenance records;
- access-control records;
- external authoritative assertions.

Evidence does not automatically equal truth.

LegaX must preserve:

- source;
- provenance;
- time;
- verification method;
- verification status;
- confidence/assurance;
- applicable resource;
- reviewer or verifying system;
- evidence lifecycle.

Conflicting evidence must be handled through governed reconciliation rather than silently overwritten.

## Resource state observation

Sensors, devices, providers, operators, and services may report resource state.

Examples:

- door open/closed;
- elevator available/unavailable;
- vehicle occupied/free;
- device online/offline;
- room occupied/vacant;
- equipment operating/maintenance;
- utility available/interrupted.

An observation is time-bound.

The system must not convert an observation into permanent truth without an appropriate verification or state-transition rule.

AI may correlate observations or detect anomalies, but inferred state must remain distinguishable from verified state.

## Physical world, safety, and consequential control

Some resources can affect human safety or critical infrastructure.

Examples include:

- electrical systems;
- water systems;
- elevators;
- vehicles;
- gates;
- industrial equipment;
- medical equipment;
- security systems;
- fire/life-safety infrastructure.

For safety-sensitive resources, LegaX must not become the sole implicit safety authority unless the domain explicitly establishes that responsibility and the required engineering controls exist.

Safety interlocks, certified controllers, provider systems, physical controls, and applicable law may impose constraints independent of LegaX.

LegaX must integrate those constraints rather than attempting to override them.

An authorization decision cannot make an unsafe physical action safe.

## Physical location is context, not authority

Location can be used as:

- a context attribute;
- a policy input;
- a routing signal;
- a service-area constraint;
- a resource relationship;
- an evidence attribute.

Location must not automatically create:

- identity;
- participation;
- ownership;
- authority;
- authorization;
- access.

Likewise, proximity to a resource does not establish a right to use it.

A person standing at a door is not thereby authorized to open it.

## Resource boundaries

Every resource should expose a clear boundary appropriate to its domain.

Examples:

- API endpoint;
- database object;
- file;
- application function;
- workspace;
- building;
- unit;
- room;
- door;
- gate;
- facility;
- vehicle;
- machine;
- payment transaction;
- service capacity.

A resource boundary defines what can be requested, observed, accessed, controlled, changed, consumed, or otherwise affected.

Authorization must evaluate the requested operation against the correct resource boundary.

A coarse resource representation must not accidentally grant access to more granular resources.

## Resource composition and nested control

Resources may contain sub-resources with independent controls.

For example:

**Building → Floor → Unit → Room → Door → Device**

Authorization for one resource must not automatically propagate to every child resource unless a governed policy explicitly establishes that relationship.

Likewise, authorization for a parent resource may require additional checks before affecting a child resource.

This prevents broad building-level permissions from silently becoming unrestricted access to every unit, room, device, or facility.

## External resources and provider systems

External providers may represent or operate resources used by LegaX.

Examples include:

- payment networks;
- property systems;
- access-control vendors;
- mobility providers;
- utility providers;
- booking systems;
- logistics providers;
- government registries;
- cloud platforms;
- device manufacturers.

External systems remain authoritative only within their explicitly defined domain and contract.

LegaX must define:

- external resource identifier;
- provider;
- source of truth;
- synchronization direction;
- update semantics;
- conflict handling;
- freshness;
- lifecycle;
- security;
- authorization boundary;
- evidence;
- failure behavior.

Provider connectivity must not silently create LegaX authority.

## Resource synchronization and consistency

Distributed resource state is inherently subject to delay and conflict.

The architecture must account for:

- stale data;
- delayed provider updates;
- concurrent modifications;
- conflicting external state;
- disconnected devices;
- partial failure;
- retries;
- duplicate messages;
- out-of-order events.

Resource updates must therefore be attributable, versioned or otherwise concurrency-safe, idempotent where appropriate, and reconciled through defined rules.

A stale representation must not be treated as current merely because it is locally available.

## Resource lifecycle

Resources are lifecycle-managed.

A general lifecycle may include:

**Proposed → Registered → Verified → Provisioned → Active → Restricted/Maintenance → Suspended → Retired → Decommissioned**

Domains may define different state graphs.

Lifecycle transitions must be governed and auditable.

Decommissioning a resource must address:

- access credentials;
- active sessions;
- integrations;
- dependent services;
- reservations;
- ownership/stewardship relationships;
- stored evidence;
- data retention;
- physical disposal where applicable;
- external provider records.

Retired resources must not remain accidentally accessible because a credential or integration was never revoked.

## Resource and AI

LegaX intelligence may assist with:

- resource discovery;
- duplicate detection;
- classification;
- anomaly detection;
- state prediction;
- capacity forecasting;
- maintenance prediction;
- relationship inference;
- provider reconciliation;
- geospatial analysis;
- operational recommendations.

AI output must remain explicitly classified as observed, inferred, proposed, or otherwise governed evidence/state.

AI cannot declare ownership, authority, authorization, or safety merely because a model predicts it.

Consequential changes to resource state must pass the applicable deterministic, policy, authorization, lifecycle, and human/governance controls.

## Resource events and evidence

Important resource events should be recorded, including where applicable:

- creation;
- registration;
- verification;
- provisioning;
- activation;
- state transition;
- location change;
- relationship change;
- ownership/stewardship change;
- maintenance;
- reservation;
- access attempt;
- access result;
- control action;
- failure;
- compromise;
- suspension;
- retirement;
- decommissioning.

Evidence must preserve enough context to reconstruct consequential resource changes without requiring unrestricted retention of sensitive information.

## Resource privacy and proportionality

Physical-world infrastructure can reveal sensitive information about people, households, movement, occupancy, behavior, relationships, and routines.

LegaX must therefore avoid turning resource intelligence into uncontrolled surveillance.

Resource data should follow:

- purpose limitation;
- data minimization;
- least privilege;
- appropriate retention;
- access controls;
- provenance;
- security;
- legal and contractual requirements.

Occupancy, location, access, device telemetry, and biometric-related information should be collected only when justified by the defined purpose and governed accordingly.

## Research-informed architectural principles

NIST Zero Trust Architecture shifts protection from broad network perimeters toward users, assets, and resources, with authentication and authorization treated as distinct functions and resource access evaluated per request. citeturn0search0turn0search46

NIST implementation guidance emphasizes evaluating access using current context such as identity, role, device health and credentials, resource sensitivity, location, and behavioral consistency rather than granting implicit trust based on network position. citeturn0search6turn0search10

NIST also demonstrates that identity and access management can span physical and logical resources including buildings, equipment, IT, and operational technology. citeturn0search12

NIST's 2025 IoT guidance emphasizes device identity, posture, secure onboarding, and lifecycle controls rather than treating a discovered device as inherently trusted. citeturn0search7turn0search11

LegaX adopts these principles while extending them beyond enterprise IT into communities, buildings, units, facilities, mobility, economic resources, services, infrastructure, and other real-world domains.

## Core resource control path

For a consequential physical or digital interaction, LegaX should preserve:

**Resource Identification → Resource State/Context → Actor Identity → Authentication → Participation/Context → Authority/Policy → Authorization → Access Enforcement → Action/Execution → New Resource State → Event/Evidence**

Where a resource is safety-sensitive or externally controlled, additional provider, hardware, regulatory, or safety controls may intervene.

The existence of those controls must be represented rather than hidden.

## Resource contract invariants

The LegaX Resources & Physical World model must preserve these invariants:

1. **A resource is distinct from the Identity that interacts with it.**
2. **A resource is distinct from the Account used to interact with it.**
3. **A resource is distinct from Authentication.**
4. **A resource is distinct from Authority.**
5. **A resource is distinct from Authorization.**
6. **A resource is distinct from Access.**
7. **A resource is distinct from the Action/Execution performed against it.**
8. **A resource record does not by itself prove physical or digital existence, ownership, authority, or current state.**
9. **Resource identifiers are references, not authorization grants.**
10. **Location does not by itself create ownership, authority, participation, authorization, or access.**
11. **Technical capability does not by itself create permission.**
12. **Availability does not by itself create permission.**
13. **Ownership, stewardship, custody, operation, maintenance, tenancy, occupancy, and use must remain semantically distinguishable.**
14. **Resource hierarchies and containment relationships do not automatically propagate authority.**
15. **Parent-resource authorization does not automatically authorize every child resource.**
16. **Resource state must remain distinct from observations, inferences, proposals, and historical state.**
17. **Resource state transitions must be governed by lifecycle rules.**
18. **External resource representations must preserve provenance, source, freshness, and synchronization semantics.**
19. **External providers do not automatically become LegaX authority sources merely because they operate a resource.**
20. **Resource capabilities describe possible operations; they do not establish who may perform them.**
21. **Access to a resource remains subject to Authorization and Access controls.**
22. **A resource may refuse or restrict an operation because of safety, availability, security posture, maintenance, or technical constraints even when authorization exists.**
23. **An authorization allow does not guarantee resource availability or successful execution.**
24. **Physical safety controls and interlocks must not be bypassed merely because LegaX authorization exists.**
25. **Connected devices must be onboarded and lifecycle-managed according to their security requirements before receiving consequential trust or credentials.**
26. **Resource onboarding is not equivalent to resource verification.**
27. **Evidence must retain provenance and verification status.**
28. **Conflicting resource evidence must be reconciled through governed processes rather than silently overwritten.**
29. **Resource observations are time-bound and must not automatically become permanent truth.**
30. **AI-derived resource states remain non-authoritative until governed validation or verification occurs.**
31. **Resource data must be minimized and protected against becoming uncontrolled surveillance.**
32. **Resource relationships must be typed and semantically explicit.**
33. **Resource synchronization must account for stale, concurrent, duplicated, delayed, and conflicting updates.**
34. **Resource updates affecting consequential operations must be attributable and auditable.**
35. **Resource lifecycle changes must propagate to relevant access, credentials, integrations, reservations, and dependent services.**
36. **Decommissioned resources must not remain unintentionally accessible through stale credentials or integrations.**
37. **Resource capacity and availability must remain distinct from authorization.**
38. **Reservations and allocations are contextual relationships, not unrestricted ownership or authority.**
39. **A resource may participate simultaneously in multiple physical, digital, service, operational, and economic relationship graphs.**
40. **The resource model must remain technology-independent at the core contract level.**
41. **New resource classes must integrate through explicit contracts without redefining Identity, Authority, Authorization, Access, or Lifecycle.**
42. **The physical world must remain represented as governed resources and relationships, not reduced to access-control endpoints.**
43. **Digital and physical resources must be able to participate in one common control model without erasing domain-specific safety, legal, operational, or technical constraints.**
44. **No resource representation may silently become a source of authority merely because it exists in the LegaX database.**
45. **Consequential changes to a resource must remain attributable through appropriate events and evidence.**

## Relationship to Definitions 01–07

This definition extends the LegaX Product Constitution and the preceding Identity, Authentication, Account, Administration, Authorization, and Access contracts without redefining them.

- **Identity** establishes **who or what LegaX recognizes**.
- **Authentication** establishes **current confidence in the actor's accepted authentication mechanism**.
- **Account** establishes **the governed LegaX interaction relationship through which the actor operates**.
- **Administration** governs **authority structures, scopes, assignments, delegation, configuration, approvals, and governance**.
- **Authorization** determines **whether a specific actor may perform a specific requested operation against a specific target under current conditions**.
- **Access** enforces **the authorized interaction at the resource boundary**.
- **Resources & Physical World** establishes **what the protected or affected thing, place, system, capacity, or environment is, how it is represented, how it relates to other resources, and what state it is in**.
- **Action/Execution** performs **the consequential operation against the resource and records the resulting state and evidence**.

The resulting model is:

**Who/What → Identity**  
**Current confidence → Authentication**  
**Interaction boundary → Account**  
**Governance → Administration/Authority**  
**Permission for this operation → Authorization**  
**Enforcement at the boundary → Access**  
**What exists/is affected → Resource**  
**What actually changes → Action/Execution**  
**What proves what happened → Event/Evidence**

This establishes Resources & Physical World as the common representation layer connecting LegaX identity and access infrastructure to the real digital, physical, economic, spatial, service, and operational world.

**Status:** Foundational domain contract — definition and semantic model; implementation intentionally deferred.