# LegaX — Community Management Network Operating System

## 20A — Community Management Network Operating System Contract

**Status:** Foundational architecture contract — implementation-grade; implementation intentionally deferred.

## 1. Purpose

The Community Management Network Operating System (CM-NOS) is the governed operational layer through which a LegaX community coordinates and operates participating people, places, buildings, units, facilities, resources, workers, providers, services, schedules, visitors, security, maintenance, incidents and other community operations.

CM-NOS is not a generic administration dashboard, property-management CRUD system, building-control panel, or second authorization system.

Its purpose is to make a community operationally legible and governable while preserving the distinctions established by LegaX Core:

- participation is not authority;
- administration is not unrestricted authority;
- role is not permission;
- capability is not authorization;
- occupancy is not ownership;
- provider capability is not provider authority;
- observation is not truth;
- management intent is not execution;
- physical controller acknowledgement is not physical-world proof;
- intelligence is not authority.

Canonical operating chain:

**Identity → Participant → Participation → Context → Role → Capability → Authority → Authorization → Access → Command → Execution → Event → Evidence → Intelligence**

CM-NOS MUST NOT create a parallel chain that bypasses LegaX Core.

## 2. Research basis and synthesis

The contract was benchmarked against these architectural families:

1. community association/property/community management;
2. facility management and IWMS;
3. building automation and control;
4. physical security/access management;
5. visitor management;
6. workforce and field/service management;
7. maintenance/work-order management;
8. community operations;
9. scheduling/resource management;
10. organizational governance;
11. identity and access management;
12. zero-trust authorization;
13. smart-building/IoT operations;
14. incident management;
15. service management;
16. property/unit/resource models;
17. multi-community/multi-tenant architecture;
18. delegated governance;
19. privacy and resident autonomy;
20. event/evidence/audit architecture;
21. AI-assisted operational management.

### 2.1 Facility-management finding

Current ISO facility-management architecture treats FM as a management system supporting effective service delivery, stakeholder needs and applicable requirements. ISO 41002:2026 explicitly covers strategic, tactical and operational management and includes governance, oversight, responsibilities and authorities, information management, stakeholders, risk and organizational structure. IFMA describes facility management as integrating people, place and process in the built environment.

**CM-NOS consequence:** it must operate at strategic, tactical and operational levels, not merely maintain work orders.

### 2.2 Building/OT finding

Modern building automation can coordinate HVAC, lighting, access control, fire systems, energy and other physical systems. BACnet provides vendor-independent interoperability for building automation. NIST's current building-systems and OT work treats building automation, physical access and environmental control as operational technology with safety, reliability and cybersecurity requirements.

**CM-NOS consequence:** buildings and devices are cyber-physical resources. A software command is not the same thing as a physical outcome.

### 2.3 Zero-trust finding

NIST SP 800-207 rejects implicit trust based on physical/network location or ownership and separates authentication from authorization. NIST SP 800-207A extends this to granular application/service identities and policies.

**CM-NOS consequence:** community admin, being inside a building, being an internal service, or owning infrastructure cannot by itself become universal permission.

### 2.4 Multi-community finding

Multi-tenant systems require explicit isolation and authorization at trusted service boundaries. OWASP highlights cross-tenant leakage, tenant impersonation and the danger of treating tenant identifiers in messages as authorization proof.

**CM-NOS consequence:** community scope must travel with operations, but scope identifiers are not authorization proof. Consequential background consumers must re-establish authorization.

### 2.5 Privacy finding

NIST's Privacy Framework treats privacy risk as problems individuals may experience from data processing across the lifecycle. Community systems can process residence, access, visitor, location, service, security, communications, device and potentially health/financial information.

**CM-NOS consequence:** operational convenience cannot justify unrestricted surveillance or indefinite retention.

### 2.6 AI finding

NIST AI RMF provides a risk-management basis for trustworthy AI and is being extended toward critical-infrastructure contexts.

**CM-NOS consequence:** AI may prioritize, predict, detect anomalies and recommend actions, but its output is not automatically authority, authorization or truth.

## 3. Canonical definition of Community

A **Community** is a governed social, organizational, spatial, residential, institutional or service-participation context in which multiple entities participate under an identifiable purpose, scope, governance model and operational boundary.

A community may contain or coordinate:

- people;
- households or participating groups;
- organizations;
- providers;
- workers;
- buildings;
- units;
- facilities;
- places;
- resources;
- devices;
- services;
- programs;
- schedules;
- policies;
- events;
- operational processes.

A community is not automatically a legal person, owner of everything inside its boundary, employer of every worker, provider of every service, authority over every participant, or surveillance perimeter.

Those properties require separate governed relationships.

## 4. Community Network

A **Community Network** is the governed network of entities, relationships, contexts, resources, services, operational responsibilities, authorities, workflows, events and evidence through which a community functions.

It includes:

**People + Organizations + Providers + Workers + Places + Buildings + Units + Facilities + Resources + Devices + Services + Operations + Policies + Events + Evidence + Intelligence**

It is not merely a social network. It includes physical, operational, economic, service, governance and digital relationships.

## 5. Community Management Network Operating System

The **Community Management Network Operating System (CM-NOS)** is the operational control-plane layer that:

- represents community structure;
- manages community-scoped relationships;
- coordinates community operations;
- manages community configuration within authority;
- coordinates services and providers;
- coordinates workers and assignments;
- manages requests and work;
- manages schedules and capacity;
- coordinates access and visitors;
- coordinates maintenance and facilities;
- coordinates incidents;
- observes community conditions;
- records events and evidence;
- supports governance and review;
- provides operational intelligence;
- initiates authorized commands through LegaX Core.

It is an operating system for a community network, not a replacement for LegaX Core.

## 6. Architectural position

CM-NOS sits between LegaX Core and community-domain operations.

### LegaX Core
Identity, Authentication, Account, Participant, Participation, Context, Role, Capability, Authority, Authorization, Access, Action, State Machines, Command & Execution, Events, Evidence, Providers/Adapters and Intelligence.

### CM-NOS
Community governance, community configuration, community operational model, people coordination, place/resource coordination, service operations, workforce coordination, provider coordination, maintenance, facilities, visitors, security operations, scheduling, incidents, requests, operational reviews and community intelligence.

### LegaServices
CM-NOS may orchestrate LegaAccess, LegaPay, LegaBooking, LegaWork, LegaMarket, LegaFood, LegaRide, LegaHealth, LegaNetwork and other LegaServices. It does not absorb their domain ownership.

## 7. Four management modes

CM-NOS MUST distinguish:

### Governance
Determining legitimate community rules, structures, responsibilities, policies and authority.

### Management
Coordinating people, resources, services and workflows within established authority.

### Execution
Performing a consequential operation through the Command & Execution Contract.

### Observation
Understanding conditions, events, resource states and performance.

A single UI may expose all four, but the underlying semantics MUST remain distinct.

## 8. Who can operate CM-NOS?

Potential operators include:

- community governance bodies;
- community administrators;
- community managers;
- facility managers;
- security operators;
- maintenance coordinators;
- service coordinators;
- authorized workers;
- authorized provider representatives;
- approved automated systems;
- LegaX service identities.

The operator category does not itself create authority.

Consequential operations resolve:

**Actor → Authentication → Identity → Participation/Context → Role → Capability → Authority → Authorization**

## 9. Community administration

Community administration is the governed function for managing community configuration, governance structures, operational assignments, policies and delegations.

It MUST NOT be represented as unrestricted power.

Instead:

**Administrative Role → Capability → Authority Assignment → Scope → Policy → Authorization**

Possible scopes include:

- community;
- building;
- unit;
- facility;
- resource;
- service;
- provider relationship;
- workforce;
- visitor;
- security;
- maintenance;
- finance;
- schedule;
- incident;
- data;
- configuration.

An administrator may have authority in one scope and none in another.

## 10. Community participation

Participation may include:

- resident;
- owner where ownership is separately established;
- tenant/occupant where established;
- household member;
- worker;
- provider representative;
- visitor;
- guest;
- volunteer;
- committee member;
- community official;
- service recipient;
- service operator.

The following are NOT equivalent:

**Resident ≠ administrator**

**Resident ≠ owner**

**Resident ≠ security authority**

**Worker ≠ administrator**

**Provider ≠ owner**

**Visitor ≠ resident**

**Committee member ≠ unrestricted authority**

## 11. Community scope

Every CM-NOS operation MUST resolve explicit scope.

Possible scopes:

- community;
- building;
- wing/floor/zone;
- unit;
- facility;
- resource;
- service;
- project;
- incident;
- provider relationship;
- workforce assignment;
- event;
- schedule;
- geography;
- jurisdiction.

Cross-community operation MUST be explicit and separately authorized.

A platform operator with technical reach across communities does not automatically have business authorization across them.

## 12. Community hierarchy

A community may contain:

**Community → Place/Site → Building → Structure/Zone → Unit/Space → Facility/Resource → Device**

This hierarchy is descriptive and operational.

It MUST NOT automatically create authority.

Community control does not automatically mean:

- ownership of every unit;
- access to every private space;
- authority over every resident;
- access to every device;
- control of every provider;
- access to health or financial records.

## 13. What CM-NOS can manage

Within authorized scope it may manage:

### People
Participants, resident relationships, worker engagements, provider relationships, visitor relationships and operational assignments.

### Places and resources
Buildings, units, common areas, facilities, equipment, shared resources, assets and devices.

### Operations
Requests, work orders, tasks, assignments, inspections, maintenance, incidents, schedules, bookings, service fulfillment, checklists, approvals and notices.

### Services
Service availability, provider assignment, requests, fulfillment, performance, disputes and exceptions.

### Governance
Policies, operating procedures, responsibilities, delegations and approval workflows.

Management never bypasses domain ownership.

## 14. What CM-NOS can configure

Within authority, CM-NOS may configure:

- service catalogs;
- maintenance categories and priorities;
- community schedules;
- facility availability;
- visitor procedures;
- workflow routing;
- notification preferences;
- operational policies;
- provider assignments;
- worker assignment rules;
- escalation paths;
- service-level targets;
- approval thresholds;
- calendars;
- resource availability;
- community-specific metadata.

Configuration is not automatically authority.

Policy changes follow the lifecycle/policy contract.

## 15. What CM-NOS can execute

It may initiate or coordinate consequential actions such as:

- assign an authorized worker;
- create a maintenance command;
- schedule a service;
- issue a visitor invitation;
- request access;
- revoke a community-scoped invitation;
- open an incident;
- request a provider service;
- place a resource on operational hold;
- create an authorized booking;
- initiate a payment workflow;
- dispatch a worker;
- request a building-system operation.

Canonical execution:

**CM-NOS Intent → Authorization → Command → Execution Gate → Local/Provider/Physical Execution → Outcome → Event → Evidence → Reconciliation**

CM-NOS MUST NOT directly manufacture the final authorization.

## 16. What CM-NOS can approve

Approval may cover:

- maintenance;
- provider engagement;
- service requests;
- community expenditure;
- access exceptions;
- visitor exceptions;
- schedules;
- policies;
- facility reservations;
- incident escalation;
- worker assignments.

Approval records MUST identify approver, authority, scope, object, transition/action, policy version, time, conditions and evidence.

Approval is not a permanent universal permission.

## 17. What CM-NOS can delegate

Bounded delegation may cover:

- facility management;
- maintenance coordination;
- security operations;
- service delivery;
- task execution;
- scheduling;
- event coordination.

Every delegation MUST define:

- delegator;
- delegate;
- authority;
- scope;
- permitted operations;
- prohibited operations;
- start;
- expiry;
- revocation;
- conditions;
- policy basis;
- evidence.

Delegation MUST NOT exceed the delegator's authority.

## 18. What CM-NOS can observe

Subject to law, policy, privacy and authorization, CM-NOS may observe:

- resource state;
- facility condition;
- maintenance status;
- service status;
- access events;
- visitor lifecycle;
- incidents;
- provider status;
- worker assignment;
- schedules;
- building telemetry;
- environmental measurements;
- operational events.

Observation does not automatically establish truth or authority.

Example:

A controller reports UNLOCKED.

That is an observation. It does not automatically prove that a person entered, that entry was authorized, or that the person may remain.

## 19. What CM-NOS can schedule

It may coordinate:

- people;
- workers;
- providers;
- facilities;
- shared resources;
- maintenance windows;
- inspections;
- services;
- visitors;
- bookings;
- deliveries;
- security coverage;
- operational tasks;
- community events.

Scheduling is not authority.

A schedule is not automatically a reservation, attendance record, access grant, ownership record or fulfillment proof.

## 20. What CM-NOS can control

Control MUST be separated into:

### Administrative control
Community configuration and management.

### Digital control
Authorized software actions.

### Physical control
Commands to physical controllers/devices.

### Economic control
Authorized financial/commercial operations.

### Service control
Provider/service workflow coordination.

### Governance control
Policies, responsibilities and delegations.

None automatically implies the others.

## 21. What community administration must NOT control merely because of administrator status

A community administrator MUST NOT automatically:

1. impersonate residents;
2. become a resident identity;
3. bypass authentication;
4. grant universal authority to itself;
5. read unrelated private communications;
6. access health information without proper authority;
7. access financial information without proper authority;
8. inspect private-unit activity without lawful/authorized basis;
9. continuously track residents merely for convenience;
10. convert occupancy into ownership;
11. convert membership into administration;
12. convert provider status into ownership;
13. override LegaX authorization;
14. bypass Access;
15. bypass Command & Execution;
16. rewrite canonical events;
17. delete evidence to hide operations;
18. turn AI recommendations into authority;
19. use provider credentials as LegaX authority;
20. use network location as authorization;
21. cross community boundaries without explicit authorization;
22. make a temporary visitor permission permanent;
23. infer legal rights from operational records alone.

These are architectural prohibitions, not merely UI restrictions.

## 22. Community governance model

Governance structures may include:

- governing bodies;
- management organizations;
- committees;
- elected representatives;
- appointed administrators;
- operational managers;
- security authorities;
- facility authorities;
- service coordinators;
- resident representatives;
- delegated operators.

Governance MUST distinguish:

**decision authority**

from:

**operational responsibility**

from:

**technical capability**

from:

**runtime authorization**

Responsibility for a function does not automatically mean unrestricted technical access to every underlying system.

## 23. Strategic, tactical and operational layers

### Strategic
Community objectives, long-term planning, policy, budgets, service models, risk and outcomes.

### Tactical
Service design, providers, workforce structure, resource allocation, maintenance programs, schedules, contracts and performance.

### Operational
Requests, tasks, incidents, access, visitors, work orders, assignments, dispatch and real-time conditions.

The layers are connected by governed authority and evidence.

## 24. Community service operating model

Every community service SHOULD follow:

**Need → Request → Eligibility → Authorization → Assignment → Scheduling → Execution → Outcome → Evidence → Review**

A request is not automatically a commitment.

A commitment is not automatically successful fulfillment.

Fulfillment requires domain-specific evidence.

## 25. Workforce management

CM-NOS may coordinate:

- worker identity reference;
- provider relationship;
- capability;
- qualification reference;
- assignment;
- schedule;
- task;
- location/context;
- check-in/out where appropriate;
- access requirement;
- execution;
- inspection;
- acceptance;
- payment reference;
- incident;
- performance evidence.

Worker capability does not equal authority.

Worker assignment does not automatically grant access.

## 26. Provider management inside a community

CM-NOS may maintain community-specific provider relationships:

- approved provider;
- service offered;
- scope;
- contract;
- service area;
- capacity;
- schedule;
- performance;
- credentials/evidence;
- pricing;
- service-level expectations;
- suspension;
- dispute;
- termination.

Community approval means:

**approved for this community scope**

not:

**universally trusted by LegaX**.

Phase 19 Provider/Adapter Architecture remains authoritative for external integration.

## 27. Maintenance and work orders

A maintenance workflow SHOULD support:

**Reported → Classified → Validated → Prioritized → Authorized → Assigned → Scheduled → In Progress → Inspection → Accepted/Rejected → Completed/Closed**

A maintenance record should identify:

- requester;
- community;
- resource;
- issue;
- priority;
- evidence;
- authorization;
- assigned party;
- schedule;
- execution;
- outcome;
- verification;
- closure.

Provider completion does not automatically prove satisfactory community acceptance.

## 28. Facilities management

Facilities may include:

- gyms;
- pools;
- meeting rooms;
- parking;
- gates;
- playgrounds;
- gardens;
- elevators;
- generators;
- water systems;
- energy systems;
- waste facilities;
- security infrastructure;
- common areas.

CM-NOS coordinates them as resources.

Physical enforcement may remain with LegaAccess, building systems, providers or device controllers.

## 29. Building-management integration

CM-NOS may integrate with HVAC, lighting, energy, water, elevators, environmental monitoring, alarms, access control and other approved systems.

Canonical path:

**CM-NOS Intent → Authorization → Command → Adapter → Building System → Controller/Device → Reported Result → Physical Observation → Evidence → Reconciliation**

Building-system status is not automatically canonical LegaX state.

Controller acknowledgement is not automatically proof of physical outcome.

## 30. Physical security

CM-NOS may coordinate:

- security schedules;
- guard assignments;
- visitor workflows;
- incident reports;
- access exceptions;
- patrol tasks;
- emergency workflows;
- resource protection.

Actual authorization and enforcement remain:

**Authority → Authorization → Access → Enforcement**

Security staff do not gain universal authority merely because they are security staff.

## 31. Visitor management

Visitor management SHOULD support:

- invitation;
- scope;
- inviter;
- host/community relationship;
- visitor identity;
- destination;
- purpose;
- time window;
- access requirements;
- credentials;
- check-in;
- check-out;
- extension;
- revocation;
- incident;
- evidence.

Invitation is not identity proof.

Check-in is not continuous presence proof.

Visitor access is not universal authorization.

## 32. Resident autonomy

Residents remain subjects with their own identity and participation.

CM-NOS MUST preserve resident agency over:

- participation;
- service preferences;
- communications;
- visitor relationships where applicable;
- privacy controls;
- personal-data requests;
- authorized sharing;
- optional community services.

Legitimate community rules may be enforced within scope, but operational management MUST NOT become unrestricted control of personal life.

## 33. Privacy architecture

Potentially sensitive community data includes:

- residence;
- unit;
- access;
- visitors;
- location;
- services;
- maintenance;
- security;
- health;
- financial;
- communications;
- behavioral;
- devices;
- environmental telemetry.

CM-NOS MUST apply:

- purpose limitation;
- data minimization;
- scope limitation;
- least privilege;
- retention controls;
- disclosure controls;
- provenance;
- auditability;
- correction mechanisms;
- applicable consent/legal-basis handling;
- transparency.

Operational convenience is not sufficient justification for indefinite collection.

## 34. Community data planes

CM-NOS SHOULD distinguish:

1. identity;
2. participation;
3. governance;
4. operations;
5. resources;
6. services;
7. security/access;
8. visitors;
9. workforce;
10. providers;
11. economic/financial;
12. health-sensitive;
13. telemetry;
14. events;
15. evidence;
16. intelligence.

Cross-plane access MUST be explicit.

An administrator role MUST NOT collapse these boundaries.

## 35. Community intelligence

CM-NOS may produce:

- maintenance predictions;
- utilization analysis;
- demand forecasts;
- incident trends;
- provider performance;
- capacity forecasts;
- anomaly detection;
- schedule recommendations;
- energy optimization;
- security risk indicators;
- service insights.

Outputs MUST preserve provenance, scope, model/version, time, uncertainty, limitations and review status where applicable.

AI output is not automatically:

**truth**

**authority**

or

**authorization**.

## 36. AI-assisted operations

Examples:

**Predictive maintenance → recommendation → authorized work order**

**Visitor anomaly → risk signal → review → authorization if needed**

**Schedule optimization → recommendation → authorized schedule change**

**Energy optimization → recommendation → policy evaluation → bounded command**

Unsafe shortcut:

**AI detects risk → AI directly creates permanent denial of a person's access**

unless a separately governed, bounded and tested authorization contract explicitly permits that exact operation.

## 37. Community incidents

CM-NOS SHOULD support:

**Detection → Intake → Classification → Triage → Authorization → Response → Containment → Investigation → Resolution → Review → Evidence → Closure**

Incident classes may include:

- security;
- maintenance;
- safety;
- access;
- service failure;
- provider failure;
- device failure;
- environmental;
- infrastructure;
- privacy;
- financial;
- health-related coordination;
- emergency.

Incident severity does not itself create authority.

## 38. Emergency operations

Emergency procedures MAY allow accelerated operations but MUST remain bounded.

Flow:

**Emergency Detection → Classification → Emergency Authority → Emergency Authorization → Command → Execution → Event → Evidence → Review/Reconciliation**

Emergency authority MUST define who may invoke it, permitted actions, resources, duration, scope, prohibited actions, notification and post-event review.

Emergency status MUST NOT become an unrestricted bypass.

## 39. Scheduling and capacity

Scheduling MUST distinguish:

- availability;
- capacity;
- hold;
- reservation;
- assignment;
- booking;
- attendance;
- fulfillment.

A calendar entry is not a reservation.

A reservation is not ownership.

A scheduled worker is not proof of attendance.

A scheduled service is not proof of fulfillment.

LegaBooking remains authoritative where booking semantics apply.

## 40. Community economic operations

CM-NOS may initiate:

- service charges;
- provider invoices;
- purchases;
- bookings;
- maintenance costs;
- deposits;
- refunds;
- budgets;
- payment requests.

LegaPay remains authoritative for payment-domain semantics.

CM-NOS MUST NOT equate:

**payment initiated = payment settled**

or:

**invoice created = obligation resolved**

or:

**provider accepted = payment completed**

## 41. Communications

CM-NOS may coordinate:

- community notices;
- service notifications;
- incident notices;
- maintenance notices;
- visitor notifications;
- schedule changes;
- governance communications.

Communication authority is scoped.

Administrative access does not automatically grant access to private communications.

## 42. Community policy

Policies are governed objects.

Lifecycle:

**DRAFT → REVIEW → APPROVAL → EFFECTIVE → SUSPENDED/AMENDED → RETIRED**

A policy identifies owner, scope, version, effective time, expiry if applicable, affected actors/resources, enforcement mechanism and review authority.

A policy is not authority by itself.

## 43. Delegated administration

Example:

**Community Authority**
→ **Facility Operations Authority**
→ **Gym + Pool scope**
→ **schedule/manage/inspect**
→ **bounded expiry**

This does not imply authority over private units, health data, community finances or unrelated services.

## 44. Cross-domain workflows

### Maintenance

**Request → Context → Resource → Authority → Authorization → Command → Worker/Provider Assignment → Access → Execution → Event → Evidence → Inspection → Acceptance → Payment if applicable → Reconciliation**

### Visitor

**Invitation → Visitor Identity/Evidence → Community Context → Policy → Authorization → Access Method → Enforcement → Event → Evidence → Expiry/Checkout**

### Facility booking

**Request → Availability → Hold → Authorization → Booking → Access → Event → Attendance/Fulfillment → Evidence → Payment if applicable**

## 45. Community-to-provider boundary

CM-NOS owns the community-side need and relationship.

Provider/Adapter Architecture owns the external integration boundary.

The relevant LegaService owns service-domain semantics.

No layer silently assumes another layer's authority.

## 46. Community-to-LegaAccess boundary

CM-NOS may express:

**Worker requires access to Facility X during Task Y.**

It MUST NOT manufacture the access grant.

Flow:

**Work Assignment → Access Requirement → Authorization → Access Decision → Credential/Method → Enforcement → Result → Event/Evidence**

## 47. Community-to-LegaWork boundary

CM-NOS may create work needs, tasks, assignments, schedules and service requirements.

LegaWork owns professional/work relationship and capability semantics.

A task assignment is not a professional qualification.

## 48. Community-to-LegaBooking boundary

CM-NOS may define community availability, operating hours and approval requirements.

LegaBooking owns canonical reservation semantics.

A community calendar is not the canonical reservation ledger.

## 49. Community-to-LegaPay boundary

CM-NOS may initiate an economic request.

LegaPay owns payment intent, attempts, authorization, provider submission, settlement, refund, reversal, dispute and reconciliation.

CM-NOS consumes canonical economic outcomes rather than inventing them.

## 50. Community-to-LegaHealth boundary

Community coordination may support facility/service logistics and authorized community programs.

CM-NOS MUST NOT become a universal clinical record or clinical authority.

## 51. Community event model

CM-NOS events use Phase 17.

Examples:

- community.created;
- participation.created;
- participation.suspended;
- maintenance.requested;
- maintenance.assigned;
- maintenance.completed;
- visitor.invited;
- visitor.checked_in;
- visitor.checked_out;
- facility.reserved;
- incident.opened;
- incident.resolved;
- provider.approved_for_community;
- worker.assigned;
- service.requested;
- service.fulfilled.

Events MUST preserve event identity, source, type, version, subject, community scope, occurrence time, correlation, causation, command reference, authorization reference, provenance and evidence references.

## 52. Canonical versus observational community events

A building controller event such as:

**building.controller.door.unlocked**

may be observational/provider-originated.

It does not automatically become:

**community.access.completed**

Likewise:

**provider.maintenance.completed**

does not automatically become:

**community.maintenance.accepted**

The domain's reconciliation and evidence rules determine canonical interpretation.

## 53. Evidence

Community evidence may include:

- request;
- authorization;
- work photograph;
- inspection;
- provider report;
- controller record;
- visitor credential record;
- schedule record;
- payment record;
- approval;
- resident confirmation;
- incident report;
- sensor observation.

Evidence follows Phase 18.

Evidence is not automatically truth.

## 54. Accountability

Every consequential CM-NOS operation SHOULD permit reconstruction of:

**WHO/WHAT → IDENTITY → COMMUNITY → PARTICIPATION/CONTEXT → AUTHORITY → AUTHORIZATION → COMMAND → EXECUTION → EVENT → EVIDENCE → RESULT → RECONCILIATION**

Administrative convenience MUST NOT weaken accountability.

## 55. Retention

Retention depends on:

- operational need;
- legal requirements;
- disputes;
- security;
- safety;
- financial reconciliation;
- contracts;
- privacy;
- evidence value;
- legal holds.

Administrators MUST NOT delete consequential records merely because they are inconvenient.

LegaX MUST NOT retain personal operational data indefinitely merely because storage is cheap.

## 56. Multi-community architecture

Each community MUST have:

- unique community identity;
- scope;
- lifecycle;
- governance relationships;
- participants;
- resource boundaries;
- policies;
- operational configuration;
- data classification;
- service relationships;
- provider relationships;
- event/evidence boundaries.

Cross-community operations require explicit scope and authorization.

## 57. Shared infrastructure

Shared compute, databases, message systems, storage, adapters and AI systems do not imply shared data authority.

Community scope must be enforced at trusted service/data boundaries.

Background workers MUST carry sufficient verified context and re-establish authorization for consequential work.

## 58. Isolation requirements

Community isolation must address:

- APIs;
- databases;
- storage;
- cache;
- queues;
- background jobs;
- notifications;
- provider integrations;
- analytics;
- AI processing;
- exports;
- administrative tools.

A community identifier in a message is not authorization proof.

## 59. Ownership and resource semantics

CM-NOS may manage operational relationships involving owned, leased, occupied, community-controlled, provider-managed, rented and shared resources.

It MUST preserve:

**ownership ≠ stewardship ≠ custody ≠ operation ≠ maintenance ≠ occupancy ≠ access ≠ authority**

## 60. Digital Twin relationship

CM-NOS can provide operational data to the LegaX Digital Twin.

The Digital Twin may represent community structure, building state, resources, services, relationships and observations.

It is not automatically the authority to execute.

Representations retain:

**VERIFIED / DECLARED / OBSERVED / INFERRED / PROPOSED / UNKNOWN**

where applicable.

## 61. Command contract

Every consequential CM-NOS command MUST carry or reference:

- command_id;
- actor;
- identity;
- community scope;
- participation/context;
- operation;
- target;
- authorization_id;
- policy version;
- state/version precondition;
- idempotency key;
- correlation_id;
- causation_id;
- execution attempt;
- evidence requirements;
- expiry where applicable.

A consequential command MUST NOT rely only on an administrative flag.

## 62. Concurrency and stale state

Use:

**READ VERSION N → VALIDATE → AUTHORIZE → CONDITIONAL WRITE/COMMAND VERSION N → VERSION N+1**

If material state changes:

**VERSION MISMATCH → RE-EVALUATE**

Examples include facility closure, worker unavailability, expired visitor invitation, provider suspension, unsafe resource state or changed access policy.

CM-NOS MUST NOT execute against stale material state.

## 63. Idempotency

Consequential operations require an idempotency strategy.

Examples:

- create maintenance task;
- dispatch worker;
- issue invitation;
- reserve facility;
- issue access command;
- initiate payment;
- notify provider;
- cancel service.

Retries MUST NOT accidentally duplicate consequential effects.

## 64. Unknown outcomes

Timeout is not automatically failure.

Example:

A gate command times out.

Result may be:

**UNKNOWN → RECONCILIATION REQUIRED**

CM-NOS MUST NOT blindly repeat consequential commands unless provider/controller semantics make the retry safe.

## 65. Compensation

Cross-domain workflows may require compensation.

Example:

**Facility booking → payment → access**

If access fails after payment succeeds, CM-NOS must not rewrite payment to failed. It coordinates reconciliation and any authorized refund/compensation workflow.

Compensation is not rollback of reality.

## 66. Failure taxonomy

CM-NOS SHOULD distinguish:

- validation failure;
- authorization denial;
- policy denial;
- precondition failure;
- stale-state conflict;
- provider rejection;
- timeout;
- execution failure;
- physical uncertainty;
- evidence failure;
- reconciliation discrepancy;
- privacy/security block;
- rate limit;
- dependency outage;
- emergency isolation.

Do not collapse all into a generic failure.

## 67. Control-plane UI

The CM-NOS UI SHOULD be a control plane, not a collection of CRUD pages.

Operators should see:

- community state;
- active operations;
- approvals;
- incidents;
- resources;
- service requests;
- workforce;
- providers;
- visitors;
- access conditions;
- schedules;
- exceptions;
- unresolved reconciliation;
- evidence;
- intelligence.

UI visibility is never authorization proof.

## 68. Community command center

A mature command center organizes around:

### People
Residents, workers, providers, visitors, operators.

### Places
Communities, buildings, units, facilities, zones.

### Operations
Requests, tasks, services, schedules, incidents.

### Resources
Assets, equipment, capacity, devices.

### Access
Credentials, visitors, authorization, enforcement.

### Services
LegaServices and external providers.

### Governance
Policies, approvals, delegations, responsibilities.

### Evidence
Events, records, observations, inspections.

### Intelligence
Predictions, risks, trends, recommendations.

## 69. Operating network graph

**Community**
→ coordinates
**Places**
→ contain
**Buildings**
→ contain
**Units/Facilities**
→ host
**Resources/Devices**

**People**
→ participate in
**Community**

**Participants**
→ receive
**Roles/Capabilities**

**Authorities**
→ govern
**Scopes**

**Providers/Workers**
→ operate/maintain
**Resources/Services**

**LegaServices**
→ fulfill
**Community Needs**

**Commands**
→ change
**State**

**Events**
→ record
**Occurrences**

**Evidence**
→ supports
**Claims/State**

**Intelligence**
→ informs
**Review/Decision**

No graph edge automatically means authorization.

## 70. Core operating loop

**SENSE → UNDERSTAND → GOVERN → REQUEST → AUTHORIZE → PLAN → SCHEDULE → COMMAND → EXECUTE → OBSERVE → VERIFY → RECORD → RECONCILE → REVIEW → IMPROVE**

This is an operating network, not a dashboard click-flow.

## 71. Governance versus operation matrix

| Function | CM-NOS | LegaX Core / Domain |
|---|---|---|
| Community structure | Community model | Identity/Relationship support |
| Identity | Reference | Identity |
| Participation | Coordinate | Participation |
| Roles | Community assignments | Role/Capability/Administration |
| Authority | Administer scoped assignments | Authority |
| Authorization | Request/use | Authorization |
| Access | Coordinate requirements | LegaAccess |
| Resources | Community operational model | Resource domain |
| Buildings | Operational representation | Resource/Physical World |
| Maintenance | Operational workflow | Resource/Service/Work |
| Workforce | Coordination | LegaWork |
| Providers | Community relationship | Provider/Adapter + service domain |
| Visitors | Community workflow | Identity/Access |
| Scheduling | Coordination | LegaBooking where applicable |
| Payments | Initiate request | LegaPay |
| Events | Produce community events | Event Contract |
| Evidence | Collect/reference | Evidence Contract |
| Intelligence | Operational insights | Intelligence |
| AI | Decision support | Intelligence/Governance |

## 72. Relationship to 01–19

**01 LegaX:** CM-NOS is an operating layer inside the constitution.

**02 Identity:** CM-NOS references global identity and does not duplicate it.

**03 Authentication:** operators authenticate through accepted mechanisms.

**04 Account:** accounts provide interaction boundaries but do not automatically create community authority.

**05 Administration:** CM-NOS applies scoped community administration.

**06 Authorization:** consequential actions use authorization.

**07 Access:** physical/digital access remains enforcement.

**08 Resources & Physical World:** community buildings, units, facilities and devices use canonical resource semantics.

**09 Economic & Commerce:** economic operations remain in their domain.

**10 Lifecycle & Policy:** community policies and objects follow governed lifecycle.

**11 Events, Evidence & Intelligence:** CM-NOS records and consumes them without collapsing their meanings.

**12 LegaServices:** CM-NOS coordinates services without absorbing their domain ownership.

**13 Canonical Domain Model:** canonical entities and bounded contexts remain authoritative.

**14 Relationship Model:** membership, occupancy, operation, provider relationships and delegation are explicit.

**15 State Machines:** governed transitions are mandatory.

**16 Command & Execution:** consequential operations become commands and pass execution gates.

**17 Event Contract:** community events use canonical event semantics.

**18 Evidence Contract:** evidence uses canonical identity/provenance/verification/retention semantics.

**19 Provider/Adapter:** external systems connect through explicit adapters and cannot become implicit LegaX authority.

## 73. Canonical community operation

**COMMUNITY INTENT**
→ **COMMUNITY CONTEXT**
→ **ACTOR/PARTICIPANT**
→ **ROLE/CAPABILITY**
→ **AUTHORITY**
→ **AUTHORIZATION**
→ **STATE/PRECONDITION CHECK**
→ **COMMAND**
→ **EXECUTION GATE**
→ **LOCAL/PROVIDER/PHYSICAL EXECUTION**
→ **OUTCOME**
→ **EVENT**
→ **EVIDENCE**
→ **RECONCILIATION**
→ **COMMUNITY OUTCOME**
→ **INTELLIGENCE/REVIEW**

## 74. Explicitly rejected anti-patterns

CM-NOS MUST NOT become:

1. a giant admin role;
2. a second IAM system;
3. a resident surveillance system;
4. a property ownership database masquerading as authority;
5. a provider-control plane with unrestricted provider power;
6. a building automation system pretending to understand human governance;
7. an autonomous AI governor;
8. a dashboard where visibility equals permission;
9. a tenant identifier treated as authorization;
10. status fields that bypass state machines;
11. a workflow engine that bypasses command execution;
12. a provider webhook that directly mutates canonical truth;
13. a calendar pretending to be booking authority;
14. an invitation pretending to be identity;
15. a controller acknowledgement pretending to be physical proof;
16. an event log pretending every event is evidence;
17. an inference engine pretending predictions are facts.

## 75. Maturity levels

### Level 0 — Representation
Community, people, places and resources represented.

### Level 1 — Coordination
Requests, tasks, services and schedules coordinated.

### Level 2 — Governed Operations
Roles, authorities, policies, approvals and lifecycle connected.

### Level 3 — Integrated Operations
Access, providers, workers, facilities and LegaServices integrated.

### Level 4 — Evidence-Based Operations
Events, evidence, reconciliation and accountability are implementation-grade.

### Level 5 — Intelligent Operations
Predictive and adaptive intelligence supports planning.

### Level 6 — Autonomous Bounded Operations
Only explicitly authorized, bounded, safe automation executes without human intervention.

Automation MUST NOT exceed authority and safety boundaries.

## 76. Integrity invariants

1. Community is not automatically a legal person.
2. Participation does not imply administration.
3. Administration does not imply unrestricted authority.
4. Residence does not imply ownership.
5. Ownership does not imply unrestricted operational authority.
6. Worker status does not imply provider authority.
7. Provider status does not imply community authority.
8. Role does not equal permission.
9. Capability does not equal authorization.
10. Authorization does not equal execution.
11. Access decision does not equal physical outcome.
12. Invitation does not equal identity proof.
13. Check-in does not equal continuous presence proof.
14. Schedule does not equal reservation.
15. Reservation does not equal ownership.
16. Assignment does not equal completion.
17. Provider completion does not equal community acceptance.
18. Observation does not equal verification.
19. Evidence does not equal truth.
20. Intelligence does not equal authority.
21. AI recommendation does not equal authorization.
22. Community scope does not create global authority.
23. Technical access does not equal business authorization.
24. Community ID is not authorization proof.
25. Queue message is not authorization proof.
26. Provider credential is not LegaX authority.
27. Building controller is not governance authority.
28. Device is not person.
29. Location is not authority.
30. Emergency status does not create unlimited power.
31. Delegation cannot exceed delegator authority.
32. Temporary authority must expire/revoke as defined.
33. Stale material state cannot be used for consequential execution.
34. Consequential retries require idempotency or explicit safety.
35. Timeout does not automatically mean failure.
36. Unknown outcome requires reconciliation where applicable.
37. Provider state is not automatically canonical state.
38. Provider event is not automatically canonical event.
39. Community events use the event contract.
40. Community evidence uses the evidence contract.
41. Cross-community operations require explicit scope.
42. Cross-domain workflows require ownership and contracts.
43. Community configuration does not bypass policy lifecycle.
44. Convenience is not sufficient justification for unrestricted personal-data collection.
45. Administrators cannot silently access sensitive domains outside authority.
46. CM-NOS cannot bypass LegaX authorization.
47. CM-NOS cannot bypass Command & Execution.
48. CM-NOS cannot manufacture canonical evidence.
49. CM-NOS cannot turn intelligence into authority.
50. CM-NOS is an operational control plane, not LegaX Core.

## 77. Contradiction tests

### Test 1 — Administrator versus resident privacy
Administrator requests unrelated resident health information.
**Expected:** deny unless an independent governed authority and purpose exists.

### Test 2 — Administrator versus private unit
Administrator attempts to unlock a private unit solely from administrator status.
**Expected:** no automatic permission.

### Test 3 — Resident versus administration
Resident requests community-wide configuration changes.
**Expected:** requires relevant authority.

### Test 4 — Worker versus access
Worker is assigned maintenance.
**Expected:** assignment does not create unrestricted building access.

### Test 5 — Provider versus community
Provider has an active contract.
**Expected:** provider remains limited to contracted/authorized scope.

### Test 6 — Controller versus authorization
Controller acknowledges unlock.
**Expected:** acknowledgement does not replace authorization or prove entry.

### Test 7 — AI versus authority
AI predicts security risk.
**Expected:** risk signal enters governed review/authorization.

### Test 8 — Queue versus authority
Queue says community=A and action=unlock.
**Expected:** consumer verifies producer/context and authorization.

### Test 9 — Cross-community administrator
Community A operator requests Community B data.
**Expected:** deny without B authorization.

### Test 10 — Stale facility state
Facility was available when authorized but is now closed.
**Expected:** stale-state conflict and re-evaluation.

### Test 11 — Payment timeout
Payment times out.
**Expected:** unknown/reconciliation path, not duplicate blind retry.

### Test 12 — Provider completion
Provider reports maintenance completed.
**Expected:** provider assertion; acceptance may require inspection.

### Test 13 — Visitor invitation
Resident invites visitor.
**Expected:** bounded visitor relationship, not permanent identity/access.

### Test 14 — Emergency
Security operator invokes emergency mode.
**Expected:** only defined bounded emergency powers become available.

### Test 15 — Policy change
Administrator changes physical-access policy.
**Expected:** policy lifecycle, authorization and propagation apply.

### Test 16 — Shared worker
Background worker receives community ID.
**Expected:** verifies trusted context and authorization before protected action.

### Test 17 — Device identity
Building device sends command.
**Expected:** device identity does not become human authority.

### Test 18 — Membership
Person joins community.
**Expected:** participation does not create administration.

### Test 19 — Provider suspension
Provider is suspended while work is scheduled.
**Expected:** affected work is blocked/reconciled according to lifecycle.

### Test 20 — AI automation
AI recommends shutting down a facility.
**Expected:** recommendation enters governed policy/authorization unless an explicitly bounded automation contract already permits it.

## 78. Implementation boundary

This contract does not yet prescribe final:

- Neon tables;
- API paths;
- UI implementation;
- queues;
- workers;
- provider SDKs;
- device protocols;
- database functions;
- policy language.

Those belong to later implementation gates.

Implementation MUST preserve this contract.

## 79. Readiness gate

CM-NOS is ready for implementation only when:

1. Community definition is stable.
2. Community scope is explicit.
3. Participation is distinct from administration.
4. Administration is distinct from authority.
5. Governance is distinct from operational responsibility.
6. Resource hierarchy is explicit.
7. Provider relationships are explicit.
8. Worker relationships are explicit.
9. Service relationships are explicit.
10. Facility/resource semantics are explicit.
11. Visitor lifecycle is explicit.
12. Maintenance lifecycle is explicit.
13. Scheduling semantics are explicit.
14. Incident semantics are explicit.
15. Policy lifecycle is explicit.
16. Delegation semantics are explicit.
17. Access boundary is explicit.
18. Payment boundary is explicit.
19. Provider boundary is explicit.
20. LegaService ownership boundaries are explicit.
21. State transitions use Phase 15.
22. Commands use Phase 16.
23. Events use Phase 17.
24. Evidence uses Phase 18.
25. External systems use Phase 19.
26. Multi-community isolation is explicit.
27. Privacy boundaries are explicit.
28. AI boundaries are explicit.
29. Emergency operations are bounded.
30. Cross-domain reconciliation is defined.
31. Contradiction tests pass.
32. No community role bypasses LegaX Core.
33. No UI control is authorization proof.
34. No provider becomes implicit authority.
35. No observation is silently promoted to canonical truth.

## 80. Final architectural rule

**The Community Management Network Operating System is the governed operational control plane through which a participating community organizes, coordinates, observes, schedules, reviews and executes its authorized operations across people, places, resources, workers, providers, services and physical infrastructure.**

It does not become a second identity system, second authorization system, unrestricted administrator, surveillance system, provider authority, building controller or AI governor.

Its canonical principle is:

**COMMUNITY INTENT → CONTEXT → AUTHORITY → AUTHORIZATION → COMMAND → EXECUTION → EVENT → EVIDENCE → RECONCILIATION → COMMUNITY OUTCOME**

Its non-negotiable boundary is:

**CM-NOS may coordinate and operate what the community is legitimately authorized to manage; it MUST NOT manufacture authority merely because it has technical access to the platform.**
