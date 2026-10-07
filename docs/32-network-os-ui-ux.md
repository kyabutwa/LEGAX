# LegaX — Network OS UI/UX Architecture

## 32 — Specific UI/UX for 20A, 20B and 20C

**Status:** Foundational implementation architecture for Community, Organization and Provider Network Operating System experiences.

## 1. Purpose

Phase 31 defines the common LegaX UI/UX implementation architecture.

Phase 32 specializes that foundation for the three Network Operating Systems:

- **20A — Community Management Network Operating System (CM-NOS)**
- **20B — Organization Management Network Operating System (OM-NOS)**
- **20C — Provider Management Network Operating System (PM-NOS)**

The three experiences share LegaX identity, context, authorization, design-system, API, execution, event, evidence, security, privacy and accessibility contracts.

They MUST NOT become one generic administration dashboard.

## 2. The central UX distinction

The three systems have different human jobs.

### 20A — Community

**HELP PEOPLE LIVE, PARTICIPATE AND OPERATE A COMMUNITY.**

The center of gravity is:
- people;
- participation;
- places;
- buildings;
- units;
- facilities;
- visitors;
- shared resources;
- community services;
- maintenance;
- incidents;
- community operations.

### 20B — Organization

**HELP AN ORGANIZATION GOVERN, COORDINATE AND EXECUTE ITS PURPOSE.**

The center of gravity is:
- purpose;
- governance;
- decision rights;
- teams;
- work;
- projects;
- processes;
- resources;
- policies;
- risks;
- performance;
- organizational operations.

### 20C — Provider

**HELP A PROVIDER DELIVER WHAT IT PROMISES, WHERE, WHEN, BY WHOM AND WITH WHAT RESOURCES.**

The center of gravity is:
- service offerings;
- customers/participants;
- workers;
- service capacity;
- schedules;
- dispatch;
- facilities;
- resources;
- credentials;
- work orders;
- service delivery;
- maintenance;
- commerce;
- quality;
- incidents;
- provider operations.

Therefore:

**CM-NOS UX ≠ OM-NOS UX ≠ PM-NOS UX**

## 3. Shared constitutional boundary

All three use:

**Identity → Participation → Context → Role → Capability → Authority → Authorization → Command → Execution → Event → Evidence → Intelligence**

None may create:

- a second identity system;
- a second account system;
- a second authentication system;
- a second authorization engine;
- a second access engine;
- a second execution engine;
- a second event system;
- a second evidence system;
- a parallel source of truth.

The UI expresses domain operations.

It does not manufacture authority.

## 4. Research synthesis

Current operational-product patterns support several architectural conclusions.

Modern field-service systems separate:
- scheduling boards;
- resource availability;
- requirements;
- map views;
- details panels;
- work-order views;
- frontline mobile experiences;
- customer self-service;
- offline operation.

Microsoft Dynamics 365 Field Service currently describes schedule-board experiences with resource lists, requirements, Gantt/list/map views, filters, details and alerts, while its mobile experience centers frontline workers on scheduled work, job details, travel, work completion, notes, time and follow-up work. citeturn1search0turn1search1turn1search4

Microsoft's 2026 Field Service roadmap also emphasizes resource scheduling, frontline usability, offline reliability and exception management. citeturn1search3

ServiceNow's current Field Service documentation similarly separates dispatch, workforce, scheduling, equipment, mobile execution and customer self-service. citeturn1search11turn1search14turn1search16

W3C's current accessibility guidance emphasizes responsive/reflow behavior, multiple input methods, consistent navigation, visible focus, touch considerations and predictable interaction. citeturn0search0turn0search3turn0search9

LegaX therefore adopts these proven operational patterns while preserving its own canonical authority model.

## 5. Shared shell

All three Network OS experiences use a common LegaX shell:

**LegaX identity/context → global navigation → workspace navigation → task surface → status/evidence**

The shell contains:

- LegaX mark;
- active identity;
- active context;
- context switcher;
- search;
- notifications;
- help;
- security/account;
- current workspace;
- primary navigation;
- secondary navigation;
- global status.

The shell MUST make context visible.

Example:

**You**
**Community: TSAVO Royal Suburbs**
**Role: Community Operations**
**Current workspace: Maintenance**

The same person may switch to:

**Organization: Example Organization**
**Role: Operations Manager**
**Current workspace: Workforce**

or:

**Provider: Example Services**
**Role: Dispatcher**
**Current workspace: Dispatch**

The identity does not change merely because context changes.

## 6. Shared workspace model

Every Network OS has:

**OVERVIEW → WORKSPACES → RECORD/RESOURCE → TASK → EXECUTION → OUTCOME**

A workspace is a task environment, not an authority boundary.

Examples:

20A:
- Community Overview
- Places
- People
- Visitors
- Services
- Maintenance
- Incidents
- Resources
- Community Activity

20B:
- Organization Overview
- Governance
- People/Teams
- Work
- Projects
- Resources
- Policies
- Decisions
- Providers
- Risk/Assurance

20C:
- Provider Overview
- Customers
- Services
- Dispatch
- Workforce
- Resources
- Facilities
- Maintenance
- Commerce
- Quality
- Incidents

## 7. Shared operational dashboard rule

A dashboard is a **situational awareness surface**, not a giant database.

Every dashboard should answer:

1. What is happening?
2. What requires attention?
3. What is changing?
4. What is blocked?
5. What is pending?
6. What is overdue?
7. What requires authorization?
8. What requires reconciliation?
9. What can I safely do next?

Do not fill dashboards with vanity metrics.

## 8. Shared state language

All three use consistent operational states:

**DRAFT**
**READY**
**PENDING**
**AUTHORIZED**
**IN_PROGRESS**
**BLOCKED**
**SUCCEEDED**
**FAILED**
**UNKNOWN**
**RECONCILIATION_REQUIRED**
**CANCELLED**
**EXPIRED**

Domain-specific states may extend this model.

The UI must not flatten different states into one green/red indicator.

## 9. Shared action presentation

Before a consequential operation:

**ACTOR**
→ **CONTEXT**
→ **ACTION**
→ **TARGET**
→ **PARAMETERS**
→ **AUTHORIZATION/APPROVAL**
→ **CONFIRMATION**
→ **EXECUTION**
→ **OUTCOME**

For provider-mediated operations:

**LegaX Authorization**
→ **Provider Command**
→ **Provider Outcome**
→ **Evidence**
→ **Reconciliation**
→ **Canonical Outcome**

## 10. 20A — CM-NOS UX constitution

CM-NOS is the experience of a community as a living network.

Its UX should feel:
- local;
- human;
- place-aware;
- service-aware;
- participation-aware;
- operational;
- calm;
- trustworthy.

It should not feel like:
- an ERP;
- a security control room;
- a property spreadsheet;
- a corporate HR portal.

## 11. 20A primary navigation

Recommended CM-NOS navigation:

**Home**
**Places**
**People**
**Visitors**
**Services**
**Maintenance**
**Incidents**
**Resources**
**Community Activity**
**Community Settings**

Navigation may be capability/context-aware.

For a resident/participant, the surface may emphasize:

**Home → My Place → Services → Visitors → Requests → Activity**

For an authorized community operator:

**Overview → Operations → Places → People → Services → Maintenance → Incidents → Resources**

One system, different authorized experiences.

## 12. 20A community home

The CM-NOS home should show:

### Community status
- community name;
- current operational status;
- important notices;
- active incidents;
- service disruptions.

### My participation
- current participation;
- relevant unit/place;
- active community relationships;
- pending requests.

### Places
- buildings;
- units;
- facilities;
- shared spaces.

### Services
- active services;
- service requests;
- upcoming appointments;
- provider activity.

### Attention
- approvals;
- visitor actions;
- maintenance requests;
- unresolved incidents.

### Activity
- meaningful community events;
- service updates;
- operational outcomes.

## 13. 20A place-first UX

Community management is inherently spatial.

The primary place hierarchy should be understandable:

**Community → Property/Place → Building → Unit/Area → Facility/Resource**

A place page can contain:

- identity;
- location;
- occupancy/participation context;
- facilities;
- services;
- resources;
- maintenance;
- access relationships;
- incidents;
- relevant activity.

Location is context.

Location does not grant authority.

## 14. 20A unit UX

A Unit view should answer:

**What is this place?**
**Who participates here?**
**What resources belong to or are associated with it?**
**What services affect it?**
**What work is pending?**
**What evidence exists?**

Do not present occupancy as ownership.

Do not expose unrelated personal information merely because the user can see the unit.

## 15. 20A people UX

People should be organized by relationship:

- participant;
- resident/occupant;
- visitor;
- worker;
- provider representative;
- service recipient;
- community operator.

The UI should show:

**Person → relationship → context → scope**

not:

**Person → universal community authority**

## 16. 20A visitor UX

Visitor experience:

**Invitation → Visitor Details → Time/Scope → Verification/Access Requirements → Authorization → Access Decision → Visit → Event/Evidence → End/Expiry**

The UI should make clear:
- who invited;
- destination;
- valid period;
- permitted scope;
- current state;
- verification status;
- access status.

A visitor invitation is not permanent authority.

## 17. 20A community service UX

Service discovery:

**Service → Provider → Availability → Request → Authorization → Booking/Command → Execution → Outcome**

The UI can show:
- service description;
- provider;
- availability;
- price where applicable;
- location;
- request status;
- appointment;
- provider status;
- outcome.

Service UI must preserve LegaService ownership.

## 18. 20A maintenance UX

Maintenance is operational.

Primary views:

**Requests**
**Work Orders**
**Assets/Resources**
**Providers**
**Schedules**
**Open Issues**
**Completed Work**

A maintenance request should show:

**Reported → Triaged → Authorized → Assigned → Scheduled → In Progress → Completed → Verified/Reconciled**

The UI must distinguish:
- resident report;
- provider observation;
- authorized work;
- completed work;
- verified outcome.

## 19. 20A incident UX

Community incident center:

**Detect → Triage → Assess → Authorize Response → Act → Observe → Resolve → Review**

Incident cards should show:
- severity;
- location;
- current state;
- responsible role;
- affected services;
- actions required;
- evidence;
- escalation.

An alert is not automatically a confirmed incident.

## 20. 20A resource/facility UX

Shared facilities can use:

**Discover → Availability → Rules → Request/Reservation → Authorization → Use → Outcome**

Examples:
- meeting room;
- gym;
- pool;
- parking;
- shared equipment;
- community space.

Reservation is not ownership.

Availability is not authorization.

## 21. 20A community operations cockpit

Authorized community operators receive a dedicated operational cockpit:

**NOW**
- active incidents;
- access/visitor exceptions;
- service disruptions;
- urgent maintenance.

**TODAY**
- bookings;
- scheduled work;
- provider visits;
- inspections.

**UPCOMING**
- maintenance;
- community events;
- scheduled services.

**ATTENTION**
- approvals;
- unresolved issues;
- reconciliation;
- expiring assignments.

The cockpit should prioritize exceptions rather than forcing operators to scan every record.

## 22. 20A mobile experience

Mobile is the natural surface for residents, visitors and frontline community workers.

Resident:
**Home → Request → Track → Act**

Worker:
**Today → Job → Navigate → Work → Evidence → Complete**

Operator:
**Alerts → Detail → Action → Verify**

Do not reproduce a desktop administration table on a phone.

## 23. 20A community creation UX

Community creation is a governed collective-creation workflow.

Preferred:

**Create Community**
→ identity/details
→ purpose
→ place/context
→ governance structure
→ participation model
→ initial roles/responsibilities
→ services/resources
→ review
→ authorization
→ create
→ community workspace

Do not require a fake “community account.”

The person/account remains the actor.

The community becomes the governed collective/context.

## 24. 20A community administration

Community administration screens should distinguish:

**Management**
from
**Governance**
from
**Authorization**
from
**Execution**

A community operator may see a management action.

That does not itself authorize execution.

## 25. 20B — OM-NOS UX constitution

OM-NOS is the experience of an organization operating toward a purpose.

Its UX should feel:
- structured;
- accountable;
- decision-oriented;
- operational;
- evidence-aware;
- scalable.

It should not feel like:
- an HR-only portal;
- a generic project manager;
- a financial ledger;
- a second IAM console.

## 26. 20B primary navigation

Recommended OM-NOS navigation:

**Overview**
**Governance**
**People & Teams**
**Work**
**Projects**
**Resources**
**Policies**
**Decisions**
**Providers**
**Risk & Assurance**
**Organization Settings**

The exact surface depends on organizational scope and authorization.

## 27. 20B organization home

The organization home should answer:

**Purpose**
- strategic priorities;
- active objectives.

**Operations**
- current work;
- service delivery;
- resource utilization.

**Decisions**
- pending approvals;
- decisions awaiting review;
- delegated actions.

**People**
- teams;
- capacity;
- critical assignments.

**Risk**
- incidents;
- policy exceptions;
- compliance attention.

**Performance**
- outcome-oriented measures.

## 28. 20B governance center

Governance UX is different from daily operations.

Governance center:

**Purpose → Policy → Decision Rights → Decision → Authorization → Oversight**

A decision record should expose:
- decision owner;
- scope;
- question;
- options;
- evidence;
- recommendation;
- conflicts;
- approvals;
- decision;
- effective period;
- review date.

Recommendation ≠ decision.

Decision ≠ authorization.

## 29. 20B decision UX

A high-impact decision should use:

**Question**
→ **Context**
→ **Evidence**
→ **Options**
→ **Risks**
→ **Recommendation**
→ **Approvals**
→ **Decision**
→ **Authorization**
→ **Execution**
→ **Outcome**
→ **Review**

AI may support options and recommendations.

AI cannot silently become the decision maker.

## 30. 20B people and teams UX

Organization people UX should distinguish:

**Person → Participation → Employment/Relationship → Team → Role → Responsibility → Capability → Authority**

A team page can show:
- purpose;
- members;
- responsibilities;
- work;
- capacity;
- projects;
- resources;
- current outcomes.

Team membership does not automatically grant authority.

## 31. 20B work center

Work should be organized around:

**Objective → Work → Owner → Responsibility → Authorization → Execution → Outcome**

Views:
- My Work;
- Team Work;
- Work Queue;
- Blocked;
- Due Soon;
- Overdue;
- Completed;
- Exceptions.

Avoid creating a generic workflow engine in the UI.

## 32. 20B project/program UX

Projects can show:

**Purpose**
→ **Scope**
→ **Milestones**
→ **Work**
→ **Dependencies**
→ **Resources**
→ **Risks**
→ **Decisions**
→ **Outcomes**

A project UI coordinates work.

It does not replace the canonical service, resource, payment or execution domains.

## 33. 20B resource UX

Resources should be viewed by:
- type;
- scope;
- steward;
- availability;
- capacity;
- allocation;
- lifecycle;
- dependencies.

Ownership, stewardship and custody must remain distinct.

## 34. 20B policy UX

Policy center:

**Draft → Review → Approval → Effective → Monitor → Amend/Suspend → Retire**

Show:
- scope;
- effective date;
- owner;
- version;
- affected operations;
- required approvals;
- review date;
- evidence.

A policy document does not itself authorize a command.

## 35. 20B provider UX

Organizations may manage provider relationships through:

**Provider → Contract/Relationship → Services → Commitments → Performance → Issues → Evidence**

Provider-side operations remain PM-NOS.

Organization UI should not silently become the provider's source of truth.

## 36. 20B risk and assurance UX

Risk screen:

**Signal → Assessment → Finding → Treatment → Authorization/Acceptance → Verification → Closure**

Show:
- risk owner;
- scope;
- evidence;
- severity;
- treatment;
- status;
- expiry/review.

Risk score ≠ authorization.

## 37. 20B organization operations cockpit

Primary operational cockpit:

**STRATEGY**
**TODAY**
**WORK**
**DECISIONS**
**RISKS**
**RESOURCES**
**OUTCOMES**

The system should surface exceptions and decisions rather than overwhelming executives with raw operational records.

## 38. 20B mobile experience

Mobile should emphasize:
- approvals;
- decisions;
- alerts;
- assigned work;
- team status;
- quick evidence;
- secure confirmations.

Desktop should emphasize:
- planning;
- governance;
- resource views;
- multi-panel analysis;
- project dependencies;
- organizational operations.

Same semantics.

Different density.

## 39. 20B executive experience

An executive/authorized leader should not receive “god mode.”

The UI should show:

**Authorized scope**
**Current context**
**Decisions**
**Evidence**
**Delegations**
**Exceptions**
**Outcomes**

Administrative privilege remains scoped.

## 40. 20C — PM-NOS UX constitution

PM-NOS is the experience of an actual provider delivering services.

Its UX should feel:
- operational;
- fast;
- dispatch-aware;
- resource-aware;
- service-aware;
- customer-aware;
- field-ready.

It should not feel like:
- supplier management;
- a CRM-only interface;
- a generic ERP;
- an unrestricted provider admin console.

## 41. 20C primary navigation

Recommended PM-NOS navigation:

**Overview**
**Customers**
**Services**
**Dispatch**
**Workforce**
**Resources**
**Facilities**
**Maintenance**
**Credentials**
**Commerce**
**Quality**
**Incidents**
**Provider Settings**

## 42. 20C provider home

Provider home should answer:

**Demand**
- incoming requests;
- bookings;
- open work.

**Capacity**
- available workers;
- equipment;
- facilities;
- inventory/capacity.

**Delivery**
- active jobs;
- delayed jobs;
- exceptions.

**Customers**
- service issues;
- pending interactions.

**Operations**
- dispatch;
- maintenance;
- incidents.

**Commerce**
- quotes;
- orders;
- payment states;
- settlement/reconciliation states.

## 43. 20C service catalog UX

Provider service catalog:

**Service → Capability → Coverage → Capacity → Availability → Price/Commercial Terms → Eligibility → Delivery Method**

A provider can define what it offers.

The provider UI does not decide what LegaX authorizes a consumer to do.

## 44. 20C customer/participant UX

Provider-facing customer view should be relationship-scoped.

Show:
- relationship;
- services used;
- active requests;
- bookings;
- cases;
- relevant communications;
- service history;
- commitments.

Do not turn the provider UI into a universal customer database.

CRM remains the relationship architecture.

## 45. 20C workforce UX

Worker view:

**Today**
→ **Assignments**
→ **Job**
→ **Instructions**
→ **Travel**
→ **Work**
→ **Evidence**
→ **Complete**

Worker profile may show:
- capabilities;
- qualifications;
- availability;
- assigned work;
- credentials relevant to provider operations.

Worker affiliation does not automatically grant provider-wide authority.

## 46. 20C dispatch center

Dispatch is a first-class workspace.

The dispatch board should support:

**Demand ↔ Resources ↔ Time ↔ Location ↔ Skills ↔ Capacity ↔ Constraints**

Views:
- timeline;
- resource list;
- map;
- unassigned queue;
- alerts;
- details.

This mirrors mature field-service patterns where schedule boards combine resources, requirements, time, map and details. citeturn1search0turn1search5

## 47. 20C dispatch interaction

Dispatcher flow:

**Requirement**
→ **Find Availability**
→ **Review Constraints**
→ **Select Resource**
→ **Schedule**
→ **Authorization**
→ **Command**
→ **Booking State**
→ **Worker Notification**
→ **Execution**

Drag-and-drop may be a UX shortcut.

It is not authorization.

The server revalidates constraints and authorization before consequential execution.

## 48. 20C workforce mobile

Frontline mobile should be task-first.

Primary screen:

**TODAY**

Then:
- next job;
- route;
- customer/service context;
- instructions;
- required resources;
- safety/security requirements;
- start;
- work;
- evidence;
- completion.

Modern field-service mobile products similarly center scheduled work, job details, travel, work recording, notes and follow-up work. citeturn1search1turn1search6

## 49. 20C offline field UX

Offline mode should clearly display:

**OFFLINE**
**LAST SYNCHRONIZED**
**AVAILABLE OFFLINE DATA**
**QUEUED ACTIONS**
**REQUIRES CONNECTION**
**RECONCILIATION STATUS**

Never show an unsynchronized consequential operation as final success.

Offline execution requires domain support, bounded credentials, replay protection and reconciliation.

## 50. 20C work-order UX

Work order:

**REQUEST → QUALIFY → AUTHORIZE → SCHEDULE → ASSIGN → TRAVEL → START → EXECUTE → EVIDENCE → COMPLETE → VERIFY → CLOSE**

The UI should expose the current state and next legitimate action.

A work order is not itself authorization.

## 51. 20C resource UX

Resources include:
- workers;
- vehicles;
- equipment;
- tools;
- facilities;
- inventory;
- service capacity.

Resource view:

**Identity → Availability → Capability → Allocation → Schedule → State → Maintenance → Evidence**

Availability does not automatically mean assignability.

## 52. 20C facility UX

Facility operations:

**Facility → Capacity → Availability → Services → Maintenance → Incidents → Access → Utilization**

Physical access remains LegaAccess.

Provider UI can request/access according to authorization.

It does not replace access enforcement.

## 53. 20C maintenance UX

Provider maintenance:

**Asset → Condition → Work Requirement → Authorization → Work Order → Technician → Evidence → Outcome**

Maintenance history should remain traceable to resource identity and event/evidence contracts.

## 54. 20C credentials UX

Provider credentials should distinguish:
- provider credential;
- worker credential;
- service qualification;
- access credential;
- authentication factor;
- LegaX authorization.

A provider-issued credential does not automatically become LegaX authority.

## 55. 20C commerce UX

Provider commerce should distinguish:

**Quote → Offer → Acceptance → Order → Payment Intent → Provider Processing → Settlement → Reconciliation**

Never collapse these into one “paid” status.

## 56. 20C quality UX

Quality center:

**Commitment → Service Delivery → Observation → Evidence → Evaluation → Finding → Corrective Action → Verification**

Customer feedback is evidence/input.

It is not automatically a verified service defect.

## 57. 20C incident UX

Provider incident center:

**Detect → Triage → Contain → Investigate → Act → Observe → Recover → Reconcile → Review**

Separate:
- operational incident;
- security incident;
- safety incident;
- customer complaint;
- service failure;
- provider outage.

## 58. 20C customer self-service

Where appropriate, provider customers can use a simpler experience:

**Discover → Request → Schedule → Track → Receive → Review**

The provider's internal dispatch complexity should not leak into the customer interface.

Modern field-service platforms similarly expose customer self-service for appointment scheduling, management, feedback and technician tracking. citeturn1search13

## 59. 20C provider operations cockpit

The provider operations cockpit should prioritize:

**DEMAND**
**CAPACITY**
**DISPATCH**
**DELIVERY**
**EXCEPTIONS**
**CUSTOMERS**
**RESOURCES**
**COMMERCE**

It should allow fast transitions between:
- list;
- timeline;
- map;
- detail;
- command.

## 60. Shared command center pattern

CM-NOS, OM-NOS and PM-NOS may all have an operational command center, but the semantic meaning differs.

### CM-NOS

**COMMUNITY OPERATIONS**

### OM-NOS

**ORGANIZATIONAL OPERATIONS**

### PM-NOS

**SERVICE DELIVERY OPERATIONS**

Do not call all three simply “Admin.”

## 61. Three-system comparison

| UX dimension | 20A CM-NOS | 20B OM-NOS | 20C PM-NOS |
|---|---|---|---|
| Primary center | Community life/place | Organizational purpose/work | Service delivery |
| Core user | Participant/operator | Manager/leader/operator | Provider operator/worker/dispatcher |
| Spatial importance | Very high | Variable | High |
| People | Participants/residents/visitors | Teams/workforce | Customers/workers |
| Scheduling | Community resources/services | Work/projects | Dispatch/service delivery |
| Facilities | Community facilities | Organizational facilities | Provider facilities |
| Work orders | Maintenance/community work | Organizational work | Service work |
| Decisions | Community governance | Central | Operational/provider decisions |
| Dispatch | Limited/contextual | Usually secondary | Core |
| Mobile frontline | Workers/visitors | Assigned work | Core worker experience |
| Commerce | Community services | Organizational coordination | Core provider commerce |
| CRM | Contextual | Relationship coordination | Strong provider relationship surface |
| AI | Community intelligence | Decision support | Operations optimization |
| Main risk | Over-administering community | Executive overreach | Provider becoming parallel authority |

## 62. Shared context switcher

The context switcher must clearly distinguish:

**PERSONAL**
**COMMUNITY**
**ORGANIZATION**
**PROVIDER**
**SERVICE**

Example:

**Fidel**
- Personal

**TSAVO Royal Suburbs**
- Community

**United Organization**
- Organization

**Example Cleaning Services**
- Provider

Switching context refreshes:
- navigation;
- dashboard;
- data scope;
- available actions;
- terminology;
- notifications.

It does not change identity.

## 63. Shared record page

Every operational record should follow:

**HEADER**
- identity;
- state;
- scope;
- key status.

**SUMMARY**
- what;
- who;
- where;
- when.

**RELATIONSHIPS**
- related people;
- places;
- services;
- resources.

**ACTIONS**
- authorized actions only as affordances.

**ACTIVITY**
- events.

**EVIDENCE**
- evidence/provenance.

**AUDIT/DETAIL**
- technical detail for authorized users.

## 64. Shared exception center

All three systems should support an exception-oriented workspace:

**BLOCKED**
**OVERDUE**
**FAILED**
**UNKNOWN**
**RECONCILIATION REQUIRED**
**AUTHORIZATION REQUIRED**
**APPROVAL REQUIRED**
**SECURITY ATTENTION**

Exceptions are more valuable than a wall of metrics.

## 65. Shared search

Search must understand context.

CM-NOS:
**People / places / units / facilities / services**

OM-NOS:
**People / teams / work / projects / resources / decisions**

PM-NOS:
**Customers / services / workers / work orders / resources / facilities**

Search results remain authorization-filtered.

## 66. Shared notifications

Notification priority:

**CRITICAL**
**ACTION REQUIRED**
**APPROVAL**
**SECURITY**
**SERVICE**
**INFORMATION**

Notifications must preserve domain truth.

## 67. Shared mobile navigation

Mobile should use task-oriented navigation.

CM-NOS:
**Home / Services / Places / Activity / Profile**

OM-NOS:
**Home / Work / Decisions / Teams / Profile**

PM-NOS:
**Today / Jobs / Dispatch / Customers / Profile**

Authorized users may access deeper workspaces through contextual navigation.

## 68. Shared desktop navigation

Desktop can expose more parallel information:

**Global shell**
+ **workspace navigation**
+ **primary work surface**
+ **detail panel**
+ **activity/evidence panel**

Multi-panel interfaces are appropriate for operations when they preserve hierarchy and do not overwhelm users.

## 69. Maps

Maps are first-class for:
- community places;
- incidents;
- visitors where appropriate;
- provider dispatch;
- field work;
- resources;
- service territories.

Maps are contextual visualization.

A map pin is not authority.

Location is not identity.

Location is not permission.

## 70. Calendars and schedules

Calendar UX must distinguish:
- availability;
- reservation;
- assignment;
- appointment;
- work schedule;
- service commitment.

A calendar entry is not automatically an authorization.

## 71. Progressive disclosure

The first layer should answer:

**What is happening?**

Second:

**Why?**

Third:

**What can I do?**

Fourth:

**What evidence supports it?**

Fifth:

**What technical details are available?**

This is especially important for 20B and 20C operational density.

## 72. High-density operations

Desktop operations can use:
- tables;
- timelines;
- maps;
- split panes;
- filters;
- saved views;
- keyboard shortcuts;
- command palettes.

Mobile should convert density into:
- prioritized lists;
- cards;
- focused detail;
- bottom sheets;
- stepwise tasks.

## 73. Accessibility for the three systems

All three inherit Phase 31 accessibility requirements.

Particular requirements:

### CM-NOS
- resident/participant mobile usability;
- visitor flows;
- forms;
- service requests;
- maps with non-map alternatives.

### OM-NOS
- dense tables;
- decision workflows;
- keyboard operation;
- large-text support;
- complex dialogs.

### PM-NOS
- frontline mobile;
- one-handed operation;
- touch targets;
- offline status;
- outdoor/high-glare conditions;
- rapid task completion.

WCAG 2.2 includes mobile-relevant requirements such as reflow, target size, dragging alternatives and focus visibility; W3C's mobile guidance specifically addresses mobile web/native/hybrid experiences. citeturn0search0turn0search3

## 74. Accessibility for operational maps

Maps MUST have accessible alternatives.

Every important map item should also be available as:
- list;
- detail;
- text status;
- accessible action.

Do not make a map the only way to discover a critical operational condition.

## 75. Shared UX permissions model

Action presentation can use:

**AVAILABLE**
**APPROVAL REQUIRED**
**ADDITIONAL AUTHENTICATION REQUIRED**
**NOT AUTHORIZED**
**EXPIRED**
**PENDING**
**UNKNOWN**

The server remains authoritative.

## 76. Shared AI UX

AI may provide:

**SUMMARIZE**
**CLASSIFY**
**PREDICT**
**RECOMMEND**
**PROPOSE**
**EXPLAIN**

It may not silently:
- assign authority;
- execute commands;
- approve payments;
- grant access;
- change organizational governance;
- alter community membership;
- alter provider authority.

## 77. CM-NOS AI UX

Examples:
- summarize community activity;
- identify maintenance trends;
- recommend service scheduling;
- summarize incidents;
- suggest resource planning.

Flow:

**AI INSIGHT → REVIEW → AUTHORIZATION → COMMAND**

## 78. OM-NOS AI UX

Examples:
- summarize organizational performance;
- identify bottlenecks;
- compare project scenarios;
- summarize policy impact;
- recommend resource allocation.

Flow:

**AI ANALYSIS → EVIDENCE → OPTIONS → HUMAN/GOVERNED DECISION → AUTHORIZATION → EXECUTION**

## 79. PM-NOS AI UX

Examples:
- forecast demand;
- recommend worker assignment;
- optimize routes;
- identify capacity conflicts;
- summarize work orders;
- detect maintenance patterns.

Modern field-service products are increasingly adding scheduling intelligence and AI assistance, but LegaX preserves the distinction between optimization/recommendation and authorization/execution. citeturn1search3turn1search15

## 80. Shared evidence UX

Each system should expose evidence in a contextual drawer/panel.

### Community

**Who reported?**
**What happened?**
**Where?**
**When?**
**What was observed?**
**What was verified?**

### Organization

**What decision?**
**What evidence?**
**Who reviewed?**
**What policy?**
**What changed?**

### Provider

**What service?**
**Who delivered?**
**What resource?**
**What was observed?**
**What outcome?**
**Was it reconciled?**

## 81. Shared audit/activity UX

Activity should be human-readable first.

Example:

**Maintenance request submitted**
→ by Participant
→ at Unit
→ 10:42
→ status Pending

Advanced detail:

**event_id**
**command_id**
**authorization_id**
**correlation_id**
**provider_event_id**

Identifiers remain distinct.

## 82. Shared privacy boundaries

CM-NOS must minimize resident data.

OM-NOS must minimize workforce/organizational sensitive data.

PM-NOS must minimize customer/worker/provider-sensitive data.

Each system should apply:
- scoped visibility;
- field minimization;
- role/context filtering;
- privacy-aware search;
- safe notifications;
- safe exports.

## 83. Shared security boundaries

The UI must assume:
- client state can be modified;
- routes can be guessed;
- requests can be replayed;
- cached data can become stale;
- users can inspect browser code.

Therefore every consequential command goes through server-side LegaX authorization.

## 84. Shared offline architecture

CM-NOS:
- resident drafts;
- worker maintenance tasks;
- visitor workflows where explicitly supported.

OM-NOS:
- field/meeting notes;
- assigned work;
- approvals where explicitly supported.

PM-NOS:
- frontline work;
- work-order execution;
- evidence capture.

Offline capability must be explicit per command.

## 85. Shared synchronization UX

When synchronization is active:

**SYNCING → SYNCHRONIZED**

When conflicts exist:

**CONFLICT DETECTED → REVIEW → RECONCILE → RESOLVED**

Never silently overwrite canonical state.

## 86. Shared performance strategy

20A prioritizes:
- fast mobile startup;
- service discovery;
- place navigation.

20B prioritizes:
- dense desktop data;
- fast filtering;
- decision surfaces.

20C prioritizes:
- dispatch responsiveness;
- map performance;
- mobile execution;
- offline reliability.

Performance architecture must follow the user task, not a universal benchmark.

## 87. Shared design-system extensions

Phase 31 components remain shared.

New Network OS patterns include:

**ContextSwitcher**
**OperationsHeader**
**StatusSummary**
**ExceptionQueue**
**PlaceTree**
**OrganizationTree**
**ProviderNetworkView**
**ScheduleBoard**
**ResourceTimeline**
**MapList**
**WorkOrderCard**
**DecisionCard**
**ApprovalCard**
**EvidencePanel**
**ActivityTimeline**
**ServiceRequest**
**DispatchCard**
**WorkerToday**
**ReconciliationBanner**

These are UI patterns.

They are not authorities.

## 88. CM-NOS specific components

- CommunityHeader
- CommunityStatus
- PlaceExplorer
- UnitSummary
- ParticipantList
- VisitorPass
- CommunityServiceCard
- MaintenanceRequest
- CommunityIncident
- FacilityAvailability
- CommunityOperationsBoard

## 89. OM-NOS specific components

- OrganizationHeader
- GovernanceSummary
- DecisionRecord
- DecisionQueue
- TeamWorkspace
- WorkPortfolio
- ProjectTimeline
- PolicyRecord
- ResourceAllocation
- RiskRegister
- OrganizationalOperationsBoard

## 90. PM-NOS specific components

- ProviderHeader
- ServiceCatalog
- DemandQueue
- DispatchBoard
- WorkerToday
- WorkOrder
- ResourceAvailability
- FacilityOperations
- MaintenanceBoard
- CredentialStatus
- ProviderCommerce
- QualityReview
- ProviderOperationsBoard

## 91. Shared testing matrix

Every Network OS must test:

**Identity**
**Context**
**Authorization**
**Navigation**
**Responsive**
**Accessibility**
**Loading**
**Empty**
**Denied**
**Pending**
**Unknown**
**Reconciliation**
**Offline**
**Error**
**Security**
**Privacy**
**Performance**

## 92. CM-NOS critical journeys

1. join community;
2. view community;
3. view place/unit;
4. request service;
5. invite visitor;
6. manage visitor status;
7. report maintenance;
8. track maintenance;
9. book facility;
10. respond to community request;
11. operator reviews incident;
12. operator schedules service;
13. community creates authorized operation;
14. reconcile provider outcome.

## 93. OM-NOS critical journeys

1. enter organization;
2. view organizational scope;
3. create team;
4. assign responsibility;
5. create work;
6. approve decision;
7. delegate bounded authority;
8. manage project;
9. review resource allocation;
10. approve policy;
11. review risk;
12. coordinate provider;
13. review organizational outcome;
14. execute authorized command;
15. reconcile outcome.

## 94. PM-NOS critical journeys

1. configure provider;
2. create service;
3. receive request;
4. qualify requirement;
5. check capacity;
6. schedule;
7. dispatch;
8. worker receives job;
9. worker works offline;
10. capture evidence;
11. complete work;
12. customer receives outcome;
13. maintenance;
14. incident handling;
15. payment/commerce flow;
16. provider reconciliation.

## 95. Contradiction tests

1. Community membership exposes administration controls without authorization.
2. Community location grants authority.
3. Unit occupancy is shown as ownership.
4. Visitor invitation becomes permanent authority.
5. Community operator UI bypasses authorization.
6. Community provider response becomes canonical success without reconciliation.
7. Organization membership grants unrestricted authority.
8. Executive UI creates universal administrator authority.
9. Team membership becomes permission.
10. Recommendation becomes decision.
11. Decision becomes authorization without the required authority path.
12. Organization UI writes service-owned state directly.
13. Provider UI grants LegaX authority because provider admin controls the screen.
14. Worker affiliation becomes provider-wide authority.
15. Provider customer relationship becomes universal data access.
16. Dispatch drag-and-drop bypasses server authorization.
17. Resource availability becomes automatic assignability.
18. Provider credential becomes LegaX authority.
19. Work-order completion becomes canonical success without required evidence.
20. Payment initiated is displayed as settled.
21. Provider timeout is displayed as failure when outcome is unknown.
22. Provider timeout is displayed as success without evidence.
23. AI scheduling recommendation executes without authorization.
24. RAG content grants provider permission.
25. Context switch changes identity.
26. Hidden buttons are treated as security.
27. Cached authorization survives revocation.
28. Map-only information excludes accessible users.
29. Mobile hides a critical capability.
30. Offline UI claims final consequential success.
31. Sync conflict silently overwrites state.
32. UI creates a second execution engine.
33. UI creates a second source of truth.
34. UI creates a second authorization engine.
35. Organization policy screen silently changes canonical policy without authorization.
36. Community dashboard exposes private resident data outside scope.
37. Provider dashboard exposes customer data outside relationship scope.
38. Notification leaks sensitive information.
39. AI confidence is displayed as verified fact.
40. Event is displayed as evidence without provenance.
41. Evidence is displayed as truth without verification state.
42. Risk score is displayed as authorization.
43. Security alert is displayed as confirmed compromise.
44. Service availability is displayed as authorization.
45. Reservation is displayed as ownership.
46. Worker schedule is displayed as authority.
47. Provider relationship is displayed as LegaX identity.
48. A raw database error is exposed.
49. A client-side role flag authorizes a command.
50. A guessed route bypasses context authorization.
51. Retry creates duplicate consequential execution.
52. Unknown outcome is silently retried without reconciliation policy.
53. Accessibility failure blocks a critical journey.
54. Localization changes command meaning.
55. Theme changes security semantics.
56. Visual styling implies authority.
57. AI is presented as the final operational authority.
58. The three Network OS products become one generic admin dashboard.

Every contradiction test must fail closed or produce the correct denied/pending/unknown/reconciliation state.

## 96. Conformance traceability

Phase 32 maps to:

**20A/20B/20C CONTRACT**
→ **UX REQUIREMENT**
→ **PATTERN**
→ **COMPONENT**
→ **IMPLEMENTATION**
→ **TEST**
→ **EVIDENCE**
→ **PHASE 30 CONFORMANCE**

Dependencies:

- Phase 06 — Authorization
- Phase 07 — Access
- Phase 10 — Lifecycle & Policy
- Phase 11 — Events/Evidence/Intelligence
- Phase 12 — LegaServices
- Phase 15 — State Machines
- Phase 16 — Command & Execution
- Phase 17 — Event Contract
- Phase 18 — Evidence Contract
- Phase 19 — Provider Adapter Architecture
- Phase 20A — Community NOS
- Phase 20B — Organization NOS
- Phase 20C — Provider NOS
- Phase 21 — Security
- Phase 22 — Privacy/Governance
- Phase 23 — API
- Phase 24 — Core Execution
- Phase 25 — Neon
- Phase 26 — CRM
- Phase 27 — RAG
- Phase 28 — LegaService Implementation
- Phase 29 — Intelligence
- Phase 30 — Conformance
- Phase 31 — UI/UX Implementation

## 97. Implementation sequence

### Foundation

**01 — Shared LegaX shell**

**02 — Context switcher**

**03 — Design-system extensions**

**04 — Shared state/error/exception system**

### 20A

**05 — Community shell**

**06 — Community home**

**07 — Places**

**08 — People/participation**

**09 — Visitors**

**10 — Community services**

**11 — Maintenance**

**12 — Incidents**

**13 — Facilities/resources**

**14 — Community operations cockpit**

### 20B

**15 — Organization shell**

**16 — Organization home**

**17 — Governance**

**18 — Decisions**

**19 — People/teams**

**20 — Work**

**21 — Projects**

**22 — Resources**

**23 — Policies**

**24 — Risk/assurance**

**25 — Organization operations cockpit**

### 20C

**26 — Provider shell**

**27 — Provider home**

**28 — Service catalog**

**29 — Customers/relationships**

**30 — Workforce**

**31 — Dispatch**

**32 — Work orders**

**33 — Resources/facilities**

**34 — Maintenance**

**35 — Credentials**

**36 — Commerce**

**37 — Quality/incidents**

**38 — Provider operations cockpit**

### Verification

**39 — Responsive verification**

**40 — Accessibility verification**

**41 — Security/privacy verification**

**42 — Offline/synchronization verification**

**43 — Critical journey E2E**

**44 — Phase 30 conformance**

## 98. Final architectural rule

**20A UI EXISTS TO OPERATE COMMUNITY LIFE AND PLACE-BASED COMMUNITY OPERATIONS.**

**20B UI EXISTS TO GOVERN, COORDINATE AND EXECUTE ORGANIZATIONAL PURPOSE AND WORK.**

**20C UI EXISTS TO OPERATE PROVIDER SERVICE DELIVERY FROM DEMAND THROUGH CAPACITY, DISPATCH, WORKFORCE, EXECUTION, COMMERCE, QUALITY AND RECONCILIATION.**

**THE THREE EXPERIENCES SHARE LEGA X CORE CONTRACTS BUT MUST NOT COLLAPSE INTO ONE GENERIC ADMINISTRATION UI.**

**THE UI PRESENTS AUTHORITY; IT DOES NOT CREATE AUTHORITY.**

**THE UI PRESENTS DOMAIN STATE; IT DOES NOT INVENT DOMAIN STATE.**

**THE UI PRESENTS INTELLIGENCE; IT DOES NOT TURN INTELLIGENCE INTO AUTHORITY.**

**NO AUTHORIZATION → NO CONSEQUENTIAL NETWORK-OS ACTION.**

**NO AUTHORITATIVE OUTCOME → NO FALSE SUCCESS.**

**NO PARALLEL AUTHORITY CHAIN.**

**NO PARALLEL EXECUTION ENGINE.**

**NO PARALLEL SOURCE OF TRUTH.**

## 99. Canonical three-system model

**CM-NOS**
→ **COMMUNITY**
→ **PEOPLE + PLACES + PARTICIPATION + SERVICES + SHARED OPERATIONS**

**OM-NOS**
→ **ORGANIZATION**
→ **PURPOSE + GOVERNANCE + PEOPLE + WORK + RESOURCES + DECISIONS + OPERATIONS**

**PM-NOS**
→ **PROVIDER**
→ **SERVICES + CUSTOMERS + WORKERS + CAPACITY + DISPATCH + DELIVERY + COMMERCE + OPERATIONS**

Together:

**LEGA X CORE**
→ **20A COMMUNITY OPERATIONS**
→ **20B ORGANIZATION OPERATIONS**
→ **20C PROVIDER OPERATIONS**
→ **LEGA SERVICES / DOMAIN EXECUTION**
→ **EVENT + EVIDENCE + INTELLIGENCE**
→ **CONFORMANCE**

## 100. Final definition

**Specific UI/UX for 20A, 20B and 20C is the governed experience architecture that gives Community, Organization and Provider Network Operating Systems distinct, task-centered and operationally mature interfaces while sharing one LegaX design system and preserving one canonical identity, authority, authorization, execution, event, evidence and source-of-truth architecture.**

**20A helps communities live and operate.**

**20B helps organizations govern and execute purpose.**

**20C helps providers deliver what they offer.**

**One LegaX. Three operating experiences. No parallel authority.**
