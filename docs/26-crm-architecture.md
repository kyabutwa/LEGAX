# LegaX — CRM Architecture

## 26 — CRM Architecture

**Status:** Foundational architecture contract — implementation-grade; implementation intentionally deferred.

## 1. Purpose

CRM Architecture defines the governed architecture through which LegaX represents, coordinates, understands, serves, supports, retains, and improves relationships between providers, organizations, communities, services, workers, participants, customers, prospects, clients, beneficiaries, partners, and other legitimate service consumers.

CRM in LegaX means **Customer Relationship Management**, but the architecture deliberately avoids reducing every person to a commercial "customer record".

The CRM architecture answers:

> **Who is the relationship with, in what customer/consumer context, for which provider or service, under what relationship terms, what interactions and commitments exist, what service needs or cases are open, what has been communicated or delivered, what preferences and consent apply, what outcomes occurred, and what governed action should happen next?**

It does not redefine Identity, Account, Participant, Authority, Authorization, Access, Commerce, Provider operations, LegaServices, Privacy/Governance, API, or Core Execution.

The CRM layer is a **relationship and engagement operating layer** that connects those existing contracts.

## 2. Non-duplication rule

**CRM ARCHITECTURE CONNECTS CUSTOMER RELATIONSHIPS; IT DOES NOT CREATE PARALLEL IDENTITY, AUTHORITY, COMMERCE, SERVICE, PROVIDER, PRIVACY, OR EXECUTION SYSTEMS.**

A CRM contact is not a second Identity.

A CRM account is not automatically a LegaX Account.

A customer relationship is not authority.

A lead is not an Identity.

A prospect is not an authenticated participant.

A sales opportunity is not an order.

An order is not a payment settlement.

A case is not a LegaService.

A case assignment is not Authorization.

A service agent is not automatically authorized for every customer record.

A customer profile is not a second source of truth for identity.

A CRM score is not a risk decision.

A segment is not permission.

A consent record is not merely a marketing preference.

A communication channel is not an authentication credential.

A CRM workflow is not the Core Execution Engine.

An AI recommendation is not authority.

The CRM architecture therefore references and composes earlier contracts rather than redefining them.

## 3. Architectural position

CRM sits above shared identity and control foundations and beside bounded service/economic/provider domains.

The primary relationship is:

**IDENTITY/ENTITY → PARTICIPATION/CONTEXT → CUSTOMER RELATIONSHIP → ENGAGEMENT → NEED/CASE/OPPORTUNITY → GOVERNED ACTION → OUTCOME → EVENT → EVIDENCE → INTELLIGENCE**

For an operational customer action:

**CUSTOMER/CONSUMER CONTEXT → REQUEST/NEED → CRM RECORD → CONTEXTUAL AUTHORIZATION → COMMAND → EXECUTION → SERVICE/COMMERCE DOMAIN → OUTCOME → EVENT/EVIDENCE → CRM UPDATE**

CRM may coordinate an action, but the owning domain performs and establishes the authoritative outcome.

For example:

**CRM payment request → LegaPay**

**CRM booking request → LegaBooking**

**CRM access issue → LegaAccess**

**CRM ride issue → LegaRide**

**CRM provider dispatch issue → PM-NOS**

**CRM organization relationship → OM-NOS**

**CRM community relationship → CM-NOS**

## 4. What CRM is

CRM is a governed relationship system for:

- customer and consumer relationships;
- prospect and opportunity management;
- account/contact relationships;
- service engagement;
- communications;
- customer requests;
- cases and complaints;
- service recovery;
- customer commitments;
- relationship history;
- preferences and communication permissions;
- customer success;
- retention and lifecycle management;
- feedback and satisfaction;
- relationship intelligence;
- governed segmentation;
- relationship-level coordination.

CRM creates a coherent relationship view without claiming that every piece of underlying information belongs to CRM.

## 5. What CRM is not

CRM is not:

- the global Identity system;
- the Account system;
- an authentication system;
- the Authorization engine;
- an access-control system;
- a general ledger;
- a payment processor;
- an order/settlement engine;
- a booking engine;
- a provider operating system;
- an organization operating system;
- a community operating system;
- a service-specific source of truth;
- a data warehouse;
- a universal customer-data lake;
- an unrestricted communications platform;
- a surveillance system;
- an employee-management system;
- a generic workflow engine;
- a second execution engine;
- a legal authority;
- an AI authority layer.

## 6. Customer concept

A **Customer** in CRM is a governed relationship role in which an entity or participant receives, acquires, uses, sponsors, requests, evaluates, or otherwise engages with a provider's or service's offering under a defined customer context.

Customer is contextual.

The same person may be:

- a customer of LegaFood;
- a resident participating in a community;
- a worker for an organization;
- a provider in another service;
- a beneficiary of a service;
- a payer in one transaction;
- a recipient in another;
- a visitor in another context.

CRM must therefore represent customer status as a relationship rather than replacing the underlying identity.

## 7. Consumer, customer, client and beneficiary

CRM should distinguish where the domain requires:

- **Consumer** — receives or uses a service/product.
- **Customer** — has a governed commercial/service relationship with a provider.
- **Client** — receives professional or contracted service.
- **Payer** — responsible for payment.
- **Recipient** — receives a good, service, communication or outcome.
- **Beneficiary** — receives a benefit without necessarily being the purchaser.
- **Requester** — initiates a request.
- **Sponsor** — funds or sponsors a service.
- **Decision-maker** — acts for an organization or other governed principal.
- **Contact** — communication relationship or point associated with a party.
- **Partner** — external relationship supporting delivery or growth.

These roles must not be collapsed merely because one person may occupy several of them.

## 8. CRM relationship object

A CRM relationship should identify, where applicable:

- subject identity/entity reference;
- provider or service;
- customer role;
- relationship type;
- scope;
- lifecycle;
- start/effective time;
- expiry/end;
- source;
- provenance;
- consent/privacy basis;
- assigned relationship owner;
- service context;
- organization/community context;
- products/services involved;
- commercial relationship reference;
- communication permissions;
- relationship health;
- evidence references.

The CRM relationship is a contextual projection/relationship record.

It must not duplicate the canonical identity record.

## 9. Relationship lifecycle

A generic CRM relationship lifecycle may be:

**DISCOVERED → PROSPECTIVE → ENGAGED → ACTIVE → AT-RISK → DORMANT → REACTIVATION → CLOSED**

Domain-specific relationships may use different states.

A state must have explicit meaning.

Examples:

- **DISCOVERED:** potential relationship identified.
- **PROSPECTIVE:** legitimate potential customer/consumer relationship being evaluated.
- **ENGAGED:** meaningful interaction exists.
- **ACTIVE:** relationship is currently active.
- **AT-RISK:** governed signals indicate possible deterioration.
- **DORMANT:** no active engagement within defined criteria.
- **REACTIVATION:** a governed effort is underway to restore engagement.
- **CLOSED:** relationship ended according to applicable terms.

"At-risk" is an intelligence/relationship state, not proof of wrongdoing or financial risk.

## 10. Lead and prospect model

A **Lead** is an unqualified or partially qualified commercial/service opportunity record.

A lead must not automatically create a new global Identity.

A lead may reference:

- an existing Identity;
- an organization;
- an unknown external party;
- a source-scoped contact point;
- a provider-specific identifier.

A **Prospect** is a governed relationship stage in which potential suitability or interest is being evaluated.

Identity resolution must occur through the canonical identity architecture when appropriate.

CRM must preserve uncertainty when the real-world party is not established.

## 11. Identity resolution boundary

CRM may need to connect records from multiple systems.

The process is:

**SOURCE RECORD → IDENTIFIERS/ATTRIBUTES → MATCHING/RESOLUTION → EVIDENCE/CONFIDENCE → GOVERNED LINK → CRM RELATIONSHIP**

Identity resolution is not unrestricted record merging.

A weak match must remain a candidate.

A provider identifier must remain provider-scoped.

A CRM duplicate must not be "resolved" merely because names look similar.

High-impact identity merges require governed review and evidence appropriate to the domain.

CRM identity resolution consumes Phase 02 Identity and Phase 14 Relationship semantics.

## 12. CRM account versus LegaX Account

CRM may use the word **account** in the conventional customer-relationship sense.

This must never be confused with the canonical LegaX **Account** defined in Phase 04.

To prevent ambiguity, implementation should distinguish concepts such as:

- platform account;
- CRM customer account/relationship;
- organization customer relationship;
- provider customer relationship.

A CRM account is a business relationship representation.

A LegaX Account is a platform interaction/security relationship.

They may reference one another but must not be merged semantically.

## 13. Customer organization and household relationships

CRM may represent relationships involving:

- individuals;
- organizations;
- households where legitimately modeled;
- communities;
- teams;
- business units;
- other customer groups.

The relationship must identify the applicable role and scope.

An individual belonging to an organization does not automatically have authority to act for that organization.

A household relationship does not automatically establish legal ownership or financial responsibility.

A community relationship does not automatically become a customer account.

## 14. Contact points and communication channels

CRM may manage governed contact points such as:

- email;
- phone;
- postal address;
- in-app channel;
- approved messaging channel;
- web channel;
- physical service location;
- other legitimate communication endpoint.

A contact point is not automatically verified.

Verification status, source, purpose and lifecycle must remain explicit.

A phone number in CRM is not automatically an authentication factor.

An email address in CRM is not automatically proof of identity.

A contact channel must not be used for a sensitive operation without the authentication and authorization required by that operation.

## 15. Communication preferences

CRM should support governed preferences such as:

- preferred channel;
- language;
- communication frequency;
- service notifications;
- transactional communications;
- marketing communications;
- support communications;
- accessibility preferences;
- contact timing;
- channel restrictions.

Preferences must remain subordinate to law, consent, service necessity, safety, contractual requirements and higher-priority governance rules.

A marketing preference cannot disable a legally required service notice where applicable.

## 16. Consent and privacy boundary

CRM must not create an informal consent system.

Consent, legal basis, purpose, withdrawal, retention and processing restrictions remain governed by Phase 22 Privacy/Governance.

CRM may store or reference:

- consent status;
- purpose;
- scope;
- source;
- timestamp;
- version;
- withdrawal;
- evidence/reference.

CRM must not infer consent merely from:

- customer status;
- prior purchase;
- account creation;
- app installation;
- contact information;
- service usage.

Customer relationship does not equal permission to market.

## 17. Customer profile

A CRM customer profile is a **relationship-oriented view**, not necessarily a canonical identity record.

It may assemble:

- identity reference;
- customer relationships;
- active services;
- cases;
- communications;
- commitments;
- preferences;
- commercial references;
- service outcomes;
- relationship health;
- permitted intelligence.

The profile must identify source and freshness.

A profile should not copy sensitive source data unnecessarily.

Where possible, CRM should reference authoritative records rather than create redundant copies.

## 18. Customer 360 principle

LegaX may provide a customer-360 experience, but:

**CUSTOMER 360 ≠ ONE GIANT CUSTOMER TABLE**

A customer-360 view is a governed composition of bounded information from multiple domains.

Potential sources include:

- Identity;
- Participation;
- LegaServices;
- Economic & Commerce;
- Provider systems;
- CM-NOS;
- OM-NOS;
- PM-NOS;
- Access;
- Events;
- Evidence;
- approved external systems.

Each source retains ownership.

CRM provides the relationship-oriented view and coordination layer.

It does not silently become the source of truth for every domain.

## 19. Engagement model

An **Engagement** represents a meaningful interaction or relationship touchpoint between a customer/consumer context and a provider, service, organization or community.

Examples:

- inquiry;
- call;
- support conversation;
- service request;
- appointment;
- message;
- visit;
- feedback;
- product/service interaction;
- notification response;
- case interaction;
- sales interaction.

An engagement should retain:

- participants;
- channel;
- purpose;
- context;
- timestamp;
- source;
- subject;
- outcome;
- privacy classification;
- authorization context where relevant;
- event/evidence references.

A telemetry signal is not automatically a customer engagement.

## 20. Interaction timeline

CRM may provide a relationship timeline.

The timeline may compose:

- engagements;
- cases;
- service interactions;
- commercial milestones;
- bookings;
- deliveries;
- communications;
- feedback;
- commitments;
- relevant events.

The timeline must preserve source semantics.

A payment event must remain a payment event.

A booking event must remain a booking event.

A provider assertion must remain a provider assertion.

CRM must not rewrite them into generic "customer activity" as the only record.

## 21. Case management

A **Case** is a governed customer/service issue, request, complaint, incident or inquiry requiring handling, investigation, coordination or resolution.

Case lifecycle may include:

**NEW → TRIAGED → ASSIGNED → IN_PROGRESS → WAITING_CUSTOMER → WAITING_INTERNAL → WAITING_EXTERNAL → RESOLVED → CLOSED → REOPENED**

Not every case uses every state.

Case fields may include:

- case ID;
- customer relationship;
- requester;
- affected service/resource;
- category;
- severity;
- priority;
- description;
- owner;
- queue;
- SLA reference;
- related case;
- related service/commercial record;
- provider;
- evidence;
- resolution;
- closure reason.

CRM case management coordinates the case.

The domain owning the underlying issue remains authoritative.

## 22. Case versus incident

A customer case is not automatically a technical or operational incident.

For example:

**Customer reports internet outage → CRM Case**

may link to:

**Network Incident → LegaNetwork/operational domain**

Similarly:

**Customer reports unauthorized access → CRM Case**

may link to:

**Security Incident → Security domain**

CRM coordinates the customer-facing relationship while the owning domain manages the underlying operational truth.

## 23. Complaints

Complaints are governed customer expressions of dissatisfaction requiring handling.

CRM should support:

- intake;
- classification;
- acknowledgement;
- investigation;
- response;
- escalation;
- resolution;
- closure;
- recurrence analysis.

Complaints must not be silently converted into ordinary feedback.

A complaint may have regulatory, contractual, safety or reputational implications.

Where applicable, complaint handling should align with ISO 10002 principles.

CRM does not decide legal liability merely because a complaint is recorded.

## 24. Disputes

A **Dispute** is a governed disagreement requiring a defined resolution process.

CRM may coordinate customer communication and case tracking.

The authoritative domain may remain:

- LegaPay for payment disputes;
- commerce for order/contract disputes;
- service domain for service disputes;
- provider contract domain for provider disputes;
- external dispute-resolution body where applicable.

CRM must not settle a dispute merely by changing a case status.

## 25. Service requests

A customer service request may ask for:

- information;
- service;
- change;
- appointment;
- repair;
- delivery;
- access;
- cancellation;
- refund;
- account assistance;
- provider intervention.

CRM captures and coordinates the request.

The request must be routed to the owning domain.

Example:

**CRM → LegaBooking → reservation**

not:

**CRM database → booking row directly**

unless the service architecture explicitly makes CRM the authorized command interface.

## 26. Opportunity management

An **Opportunity** represents a qualified potential commercial/service relationship.

Opportunity lifecycle may include:

**QUALIFICATION → DISCOVERY → PROPOSAL → NEGOTIATION → COMMITMENT_PENDING → WON/LOST → CLOSED**

Opportunity is not:

- an order;
- a contract;
- a payment;
- a reservation;
- proof of revenue.

A won opportunity may initiate a governed command into another domain.

CRM does not create the resulting order or settlement merely by setting "won".

## 27. Quote and offer relationship

CRM may reference or coordinate quotes and offers.

The authoritative quote/offer semantics remain with Economic & Commerce or the relevant LegaService.

CRM may display:

- value;
- validity;
- status;
- customer;
- provider;
- service;
- next action.

It must not independently mutate commercial terms unless the owning domain authorizes and executes the change.

## 28. Customer lifecycle management

Customer lifecycle may include:

**DISCOVER → QUALIFY → ONBOARD → ACTIVATE → ADOPT → SERVE → RETAIN → EXPAND → RENEW → DORMANT → REACTIVATE → EXIT**

Not every customer relationship requires all stages.

Each stage should have:

- entry criteria;
- exit criteria;
- owner;
- expected outcomes;
- policy;
- evidence;
- expiry;
- escalation.

Lifecycle management is relationship coordination, not identity lifecycle management.

## 29. Onboarding

Customer onboarding may coordinate:

- relationship creation;
- required information;
- service selection;
- identity verification where required;
- contractual acceptance;
- payment setup;
- service provisioning;
- access setup;
- education;
- first-use milestones.

Onboarding must call the owning domain for each consequential step.

Example:

**CRM onboarding → Identity verification → Identity domain**

**CRM onboarding → Payment setup → LegaPay**

**CRM onboarding → Service activation → relevant LegaService**

**CRM onboarding → Access credential → LegaAccess**

CRM cannot treat completion of its checklist as proof that every downstream system completed successfully.

## 30. Customer success

Customer success focuses on whether a customer/consumer is achieving intended outcomes from a service or relationship.

CRM may manage:

- success objectives;
- adoption milestones;
- health indicators;
- review cycles;
- risks;
- interventions;
- renewal preparation;
- service improvement actions.

Customer health is not a universal risk score.

Health indicators must identify their source, calculation, freshness and uncertainty.

AI-generated health predictions remain intelligence.

## 31. Customer health

A customer relationship health model may combine:

- service usage;
- unresolved cases;
- response patterns;
- satisfaction signals;
- service reliability;
- missed commitments;
- lifecycle stage;
- explicit customer feedback.

It must distinguish:

**OBSERVED → MEASURED → INFERRED → PREDICTED → PROPOSED**

A prediction that a customer may churn is not a fact that the customer intends to leave.

A low satisfaction score is not proof of misconduct.

A fraud signal is not a CRM health state.

## 32. Retention and reactivation

Retention programs may identify relationships at risk of ending and coordinate legitimate interventions.

Reactivation may include:

- service improvement;
- support;
- education;
- customer outreach;
- new service offers;
- correction of service problems.

Marketing or commercial activation requires applicable privacy, consent and authorization controls.

CRM must not use sensitive data for retention merely because it is technically accessible.

## 33. Segmentation

CRM segmentation groups relationships according to explicit criteria.

Segments may be based on:

- service relationship;
- lifecycle;
- geography;
- legitimate customer preferences;
- product/service usage;
- consent;
- operational need;
- customer-defined attributes.

Segmentation must preserve:

- purpose;
- scope;
- data source;
- calculation version;
- freshness;
- privacy basis;
- access controls.

Segment membership is not authority.

Segment membership must not be used as a proxy for sensitive classification unless explicitly governed and lawful.

## 34. Marketing relationship boundary

CRM may coordinate marketing journeys, but marketing is a bounded activity.

A marketing action must evaluate:

- lawful basis/consent where applicable;
- audience eligibility;
- communication preference;
- channel eligibility;
- frequency limits;
- suppression rules;
- content policy;
- jurisdiction;
- provider/platform constraints.

Marketing automation cannot bypass privacy governance.

A customer relationship does not create blanket marketing permission.

## 35. Customer journey architecture

A customer journey is a governed sequence of relationship interactions.

A journey may include:

**TRIGGER → ELIGIBILITY → CONTEXT → CONTENT/OFFER → CUSTOMER ACTION → RESPONSE → NEXT STEP → OUTCOME**

Journey automation must not silently perform consequential actions.

For consequential steps:

**JOURNEY → COMMAND → AUTHORIZATION → EXECUTION → EVENT → EVIDENCE**

A journey can recommend an action without executing it.

## 36. Communications orchestration

CRM may coordinate communications across approved channels.

Communication records should identify:

- sender;
- recipient;
- purpose;
- channel;
- template/content version;
- consent/privacy basis;
- timestamp;
- delivery state;
- provider;
- correlation;
- outcome.

Delivery is not the same as reading.

Sending is not the same as acceptance.

A communication provider's delivery acknowledgement is provider evidence, not automatically proof of human receipt or agreement.

## 37. Notification versus communication

A system notification may be operationally required.

A marketing communication is promotional.

A service communication relates to an active service relationship.

A security notification may be security-critical.

CRM must preserve these purposes because privacy, delivery, retention and authorization semantics can differ.

## 38. Service-level commitments

CRM may display or coordinate customer-facing commitments.

Examples:

- response target;
- resolution target;
- appointment window;
- delivery commitment;
- support coverage;
- escalation path.

The authoritative SLA/service commitment remains with the relevant service/contract domain.

A CRM timer must not rewrite the authoritative contractual clock.

## 39. Escalation

Escalation may occur because:

- SLA threshold is approaching;
- severity increased;
- customer requested escalation;
- complaint remains unresolved;
- safety issue emerged;
- provider failed to respond;
- executive review is required.

Escalation changes handling priority and routing.

It does not automatically grant authority to the recipient.

## 40. Customer ownership and relationship managers

CRM may assign relationship responsibility to:

- account manager;
- customer success manager;
- service representative;
- support agent;
- provider representative;
- organization relationship owner.

Assignment represents responsibility.

It does not automatically create unrestricted data access or consequential authority.

The assigned person must still satisfy the applicable authorization policy.

## 41. Teams and queues

CRM may use:

- queues;
- teams;
- territories;
- service groups;
- escalation groups.

Queue membership is not equivalent to LegaX Authority.

Team membership is not automatic access to every customer record.

The Authorization architecture determines what the actor may see or do.

## 42. Customer data access

CRM data access must evaluate:

- actor;
- identity;
- account/session;
- participation;
- organization/community/provider context;
- relationship scope;
- purpose;
- role/capability;
- authority;
- authorization;
- sensitivity;
- privacy policy.

The existence of a customer relationship is not itself permission to view every customer field.

## 43. Sensitive customer information

CRM may encounter sensitive information.

Examples include:

- identity evidence;
- financial information;
- health-related information;
- precise location;
- security incidents;
- access information;
- private communications;
- household information;
- employment information.

CRM should minimize storage and use.

Sensitive information should remain in the owning domain where possible, with CRM holding references or permitted summaries.

## 44. Data minimization

CRM should prefer:

**REFERENCE → FETCH WHEN AUTHORIZED → DISPLAY MINIMUM NECESSARY**

over:

**COPY EVERYTHING INTO CRM**

Customer 360 must not become a justification for uncontrolled data duplication.

Every copied attribute needs a purpose, source, freshness, retention and access policy.

## 45. Relationship provenance

CRM records must preserve provenance where relationship facts come from external or domain systems.

A relationship may be:

- customer-declared;
- provider-declared;
- service-observed;
- system-derived;
- verified;
- inferred;
- proposed.

CRM must not upgrade a proposed or inferred relationship to verified without the required evidence.

## 46. Feedback and satisfaction

CRM should collect customer feedback through governed mechanisms:

- surveys;
- ratings;
- structured feedback;
- free-text feedback;
- interviews;
- service reviews;
- complaint signals.

Feedback is an observation or expression.

It is not automatically objective truth.

CRM should preserve:

- respondent context;
- question/version;
- channel;
- time;
- service;
- response;
- provenance;
- sampling method where relevant.

Customer satisfaction measurement should align with applicable quality practices, including ISO 10004 guidance.

## 47. Voice of customer

Voice-of-customer intelligence may aggregate:

- complaints;
- feedback;
- surveys;
- cases;
- interviews;
- engagement;
- service outcomes.

Aggregation must preserve source and uncertainty.

A sentiment model is not the customer's actual intention.

AI classification must remain identifiable as derived intelligence.

## 48. Knowledge management

CRM may connect customer interactions to governed knowledge.

Knowledge can include:

- service instructions;
- FAQs;
- policies;
- troubleshooting;
- product/service information;
- approved response templates.

Knowledge ownership remains with the appropriate domain.

AI-generated answers must cite/retain the source context where material and must not silently invent policy.

## 49. Customer service agent assistance

AI may assist customer-facing workers with:

- case summaries;
- suggested replies;
- knowledge retrieval;
- classification;
- routing recommendations;
- next-best-action suggestions;
- translation;
- sentiment analysis;
- duplicate detection;
- escalation recommendations.

AI must not silently:

- authorize refunds;
- change account ownership;
- grant access;
- modify authority;
- reveal protected information;
- close regulated complaints;
- declare disputes resolved;
- fabricate customer consent;
- rewrite evidence.

## 50. AI customer agents

An AI agent interacting with customers is an actor/system with explicit identity and bounded authority.

The architecture must define:

- agent identity;
- customer context;
- permitted channels;
- permitted tools;
- allowed operations;
- target scope;
- data access;
- authorization;
- confirmation requirements;
- rate/resource limits;
- escalation;
- audit/evidence;
- revocation.

AI availability does not equal authority.

Tool availability does not equal authorization.

Prompt content cannot override system policy.

## 51. Next-best action

CRM may produce a next-best-action recommendation.

The chain is:

**CUSTOMER CONTEXT → EVIDENCE → INTELLIGENCE → RECOMMENDATION → ELIGIBILITY/POLICY → AUTHORIZATION → COMMAND → EXECUTION**

A recommendation must not be silently treated as an instruction.

The customer may decline recommendations.

## 52. Customer matching and personalization

Personalization may use permitted relationship/context data.

It must be:

- purpose-bound;
- explainable enough for the applicable use;
- privacy-compliant;
- scoped;
- reversible where appropriate;
- evaluated for unfair or harmful effects.

Personalization must not silently become discriminatory access or pricing.

High-impact decisions require the applicable governance and domain rules.

## 53. Pricing and offers

CRM may surface personalized offers, but price authority remains with the relevant economic/service domain.

CRM must not invent:

- price;
- tax;
- fee;
- discount;
- eligibility;
- settlement status.

An AI-generated offer is a proposal until the authoritative commercial system accepts it.

## 54. Customer commerce relationship

CRM may link to:

- orders;
- reservations;
- contracts;
- invoices;
- payment intents;
- payment outcomes;
- refunds;
- disputes.

Those records remain owned by Economic & Commerce and relevant LegaServices.

CRM provides relationship context.

It does not become the financial ledger.

## 55. Customer service relationship to providers

Where a provider serves the customer, CRM may coordinate:

**CUSTOMER → SERVICE → PROVIDER → WORKER → DELIVERY → OUTCOME**

PM-NOS remains responsible for provider-side service operations.

CRM may create or route a customer-facing request.

Provider assignment, dispatch, work execution and provider-side operational truth remain within PM-NOS or the applicable LegaService.

## 56. Community relationship

A community may have customer/service relationships with providers.

CRM must distinguish:

- resident/participant relationship;
- community membership;
- customer relationship;
- service subscription;
- provider relationship.

Community membership does not automatically make someone a customer.

A community-level customer agreement does not automatically authorize every resident to access its commercial records.

## 57. Organization relationship

Organizations may have B2B customer relationships.

CRM may represent:

- organization customer relationship;
- account team;
- contacts;
- opportunities;
- contracts;
- service relationships;
- cases.

But:

**ORGANIZATION MEMBERSHIP ≠ AUTHORITY TO REPRESENT ORGANIZATION**

A contact's relationship to an organization must not automatically grant authority to bind it.

## 58. Partner relationships

CRM may manage partner relationships distinct from customer relationships.

Partners may:

- refer customers;
- provide services;
- integrate systems;
- resell offerings;
- support delivery.

Provider/partner authority remains governed through Phase 19 and the relevant service/organization contracts.

## 59. Customer relationship events

CRM should consume and emit appropriate events.

Examples:

- customer.relationship.created;
- customer.relationship.updated;
- customer.engagement.recorded;
- customer.case.opened;
- customer.case.assigned;
- customer.case.resolved;
- customer.complaint.received;
- customer.feedback.recorded;
- customer.preference.changed;
- customer.journey.started;
- customer.journey.completed;
- customer.opportunity.created;
- customer.opportunity.updated.

Event semantics remain governed by Phase 17.

CRM events must not replace canonical domain events.

## 60. Event-to-CRM projection

Domain event:

**LEGAFOOD.ORDER.DELIVERED**

may produce a CRM projection:

**CUSTOMER SERVICE HISTORY UPDATED**

But the CRM projection is not the canonical order record.

Similarly:

**LEGAPAY.PAYMENT.SETTLED**

may update a customer relationship view.

CRM must not reinterpret the event as a generic financial state beyond what the canonical event establishes.

## 61. CRM commands

CRM may issue commands such as:

- create customer relationship;
- assign relationship owner;
- open case;
- route case;
- send approved communication;
- create opportunity;
- request service;
- request quote;
- request booking;
- request refund;
- initiate onboarding.

Every consequential command follows the shared command/execution contract.

CRM cannot execute consequential operations by merely changing its own database.

## 62. CRM workflow architecture

CRM workflows may coordinate:

**TRIGGER → CONTEXT → ELIGIBILITY → TASK/COMMAND → AUTHORIZATION → EXECUTION → OUTCOME → EVENT → EVIDENCE → NEXT STEP**

Workflow state is not authority.

A workflow engine is not a substitute for Phase 24 Core Execution Engine.

Long-running CRM workflows should use the Core Execution Engine where durable execution, retries, leases, unknown outcomes or reconciliation are required.

## 63. Customer data synchronization

CRM may integrate with:

- LegaServices;
- provider systems;
- external CRMs;
- contact centers;
- commerce platforms;
- communication providers;
- analytics systems.

Integration flow:

**SOURCE → ADAPTER/API → VALIDATION → PROVENANCE → MAPPING → CRM PROJECTION/RELATIONSHIP → EVENT → RECONCILIATION**

External data is untrusted until validated.

Conflicts must be reconciled rather than silently overwritten.

## 64. External CRM coexistence

LegaX may integrate with external CRM systems.

An external CRM is a provider/source system unless a specific contract designates another authority.

The integration must identify:

- system;
- tenant/account;
- object type;
- external ID;
- mapping version;
- synchronization direction;
- freshness;
- conflict rule;
- source-of-truth;
- reconciliation behavior.

A Salesforce, Dynamics, HubSpot or other CRM record does not automatically become canonical LegaX Identity or Authority.

## 65. Synchronization direction

Relationships may be:

- LegaX → external CRM;
- external CRM → LegaX;
- bidirectional;
- projection-only;
- command-mediated.

Bidirectional synchronization must define conflict resolution.

Last-write-wins must not be used blindly for consequential relationships.

Where authority is disputed, preserve both assertions and require reconciliation.

## 66. Customer data freshness

Every material CRM projection should have freshness semantics.

Examples:

- current;
- refreshed_at;
- stale;
- synchronization_pending;
- source_unavailable;
- reconciliation_required.

A CRM agent must not present stale data as current where the distinction could affect customer outcomes.

## 67. Customer relationship source of truth

For each relationship, define the owner.

Examples:

- Identity → Identity domain;
- customer relationship → CRM/domain relationship owner;
- service subscription → LegaService;
- order → Economic & Commerce/service domain;
- payment settlement → LegaPay/provider;
- booking → LegaBooking;
- provider worker → PM-NOS;
- community membership → CM-NOS;
- organization membership → OM-NOS;
- access decision → LegaAccess;
- authorization → Authorization domain.

CRM may aggregate these records without taking ownership.

## 68. Data model

A mature CRM logical model may contain:

- CRM relationship;
- customer role;
- relationship participant;
- organization relationship;
- contact point reference;
- engagement;
- interaction;
- case;
- complaint;
- dispute reference;
- request;
- opportunity;
- journey;
- task;
- commitment reference;
- preference;
- consent reference;
- segment membership;
- feedback;
- satisfaction measurement;
- knowledge reference;
- relationship health;
- communication;
- external-system link;
- relationship owner;
- service relationship reference;
- commercial reference;
- event/evidence reference.

These are logical concepts, not a mandate for one table per concept.

## 69. Database boundary

Phase 25 Neon Database Architecture defines physical persistence.

CRM must not create a giant `customer` table containing every identity, service, commerce, provider, event and privacy field.

CRM persistence should use bounded records and references.

Canonical relationships should remain explicit.

Projections should identify their source.

Sensitive information should be minimized.

## 70. Search and discovery

CRM search may support:

- customer lookup;
- case search;
- relationship search;
- interaction search;
- organization search;
- opportunity search;
- service relationship discovery.

Search results must be filtered through authorization and privacy.

Search ranking is not permission.

A customer appearing in search does not mean every field is readable.

## 71. Customer 360 authorization

A Customer 360 screen is a composed view.

Each underlying component must remain subject to authorization.

For example:

**Identity data → Identity/Privacy controls**

**Payment data → LegaPay/Economic controls**

**Health information → LegaHealth/privacy controls**

**Access records → LegaAccess/Security controls**

**Provider operational data → PM-NOS/provider controls**

The CRM screen cannot bypass these boundaries.

## 72. Customer data export

Customer exports must be governed.

Export should evaluate:

- requester;
- customer relationship;
- purpose;
- fields;
- sensitivity;
- legal/privacy rights;
- destination;
- format;
- retention;
- audit.

A CRM administrator must not automatically have unrestricted export authority.

## 73. Customer data correction

Correction requests must route to the authoritative domain.

CRM can record the request and status.

It must not overwrite an authoritative Identity, payment, booking, evidence or provider record merely to make CRM appear consistent.

Correction may require:

**REQUEST → VALIDATE → AUTHORIZED CHANGE → DOMAIN UPDATE → EVENT → CRM REPROJECTION**

## 74. Customer deletion and closure

Closing a customer relationship is not necessarily deleting Identity or Account.

CRM must distinguish:

- relationship closure;
- service termination;
- account deactivation;
- identity lifecycle;
- communication suppression;
- data deletion/disposition;
- legal retention.

Historical accountability may need to remain preserved according to Phase 22.

## 75. Customer service recovery

When service failure occurs, CRM may coordinate recovery:

**FAILURE SIGNAL → CUSTOMER CASE → IMPACT ASSESSMENT → SERVICE RECOVERY PROPOSAL → AUTHORIZATION → EXECUTION → CUSTOMER COMMUNICATION → OUTCOME → REVIEW**

Possible recovery may include:

- apology;
- information;
- priority handling;
- service restoration;
- rescheduling;
- permitted credit/refund request;
- provider intervention.

CRM does not independently authorize financial compensation unless that authority is explicitly established.

## 76. Customer communications during incidents

For major service incidents, CRM may coordinate affected-customer communications.

The incident remains owned by the operational domain.

CRM should use verified incident information.

AI-generated explanations must not fabricate technical facts.

Customer communication status does not change incident state.

## 77. Customer escalation and human review

Human review should be required where:

- legal/regulatory implications exist;
- sensitive disputes exist;
- high-impact decisions are proposed;
- identity ambiguity is material;
- safety issues arise;
- financial compensation exceeds automated authority;
- customer vulnerability requires special handling;
- AI confidence is insufficient;
- policy requires approval.

Automation must escalate rather than manufacture certainty.

## 78. CRM security

CRM security follows Phase 21.

Controls include:

- least privilege;
- scoped access;
- object-level authorization;
- field-level protection;
- session security;
- audit;
- data minimization;
- secure integrations;
- webhook validation;
- export controls;
- anomaly detection;
- tenant/community/organization/provider isolation.

Customer relationship ownership must not become a shortcut around authorization.

## 79. CRM privacy

CRM privacy follows Phase 22.

The architecture must support:

- purpose limitation;
- minimization;
- consent/other lawful basis;
- data subject rights;
- retention;
- deletion/disposition;
- access transparency;
- profiling governance;
- automated decision governance;
- cross-border requirements;
- provider/data-processor relationships.

Customer 360 must not become an excuse for unrestricted data aggregation.

## 80. CRM reliability

CRM must tolerate:

- provider outage;
- communication provider failure;
- stale integrations;
- duplicate messages;
- webhook replay;
- API timeout;
- partial workflow completion;
- downstream unknown outcomes.

CRM must represent unknown states honestly.

A communication timeout does not prove non-delivery.

A provider timeout does not prove non-execution.

A case update does not prove underlying service resolution.

## 81. CRM observability

CRM observability should include:

- case backlog;
- response latency;
- resolution latency;
- SLA breaches;
- communication delivery failures;
- synchronization failures;
- duplicate relationships;
- identity-resolution conflicts;
- stale projections;
- reconciliation backlog;
- automation failures;
- AI recommendation quality;
- privacy/security events.

Metrics are operational intelligence, not canonical truth.

## 82. CRM quality controls

Quality checks should detect:

- duplicate customer relationships;
- unresolved identity matches;
- missing relationship scope;
- expired relationships still marked active;
- stale customer projections;
- orphaned cases;
- cases linked to invalid services;
- communications without required privacy basis;
- unauthorized field exposure;
- inconsistent external IDs;
- unresolved synchronization conflicts.

A quality finding does not itself authorize corrective action.

## 83. CRM analytics

Analytics may measure:

- acquisition;
- conversion;
- engagement;
- retention;
- case resolution;
- satisfaction;
- service quality;
- relationship health;
- response time;
- churn indicators;
- journey performance.

Metrics must preserve:

- definition;
- calculation version;
- source;
- period;
- population;
- exclusions;
- freshness.

An analytical metric does not change operational state.

## 84. AI and customer intelligence

CRM intelligence may:

- summarize;
- classify;
- predict;
- recommend;
- detect patterns;
- identify duplicate records;
- propose next-best actions;
- forecast demand;
- identify service deterioration;
- assist routing;
- support agent productivity.

AI outputs must preserve:

- model/version;
- input provenance;
- timestamp;
- confidence/uncertainty;
- evaluation status;
- applicable policy;
- human review where required.

AI output remains intelligence unless a governed process establishes an authoritative state.

## 85. AI personalization safeguards

AI personalization must not silently infer sensitive characteristics for consequential use.

Where profiling is material, the system must define:

- purpose;
- permitted data;
- model;
- evaluation;
- limitations;
- human review;
- opt-out/rights where applicable;
- auditability.

The CRM system must not turn hidden inference into a permanent customer attribute without governance.

## 86. Customer relationship intelligence

Relationship intelligence can connect:

**IDENTITY/RELATIONSHIP → ENGAGEMENT → SERVICE → COMMERCE → OUTCOME → FEEDBACK → INTELLIGENCE**

But intelligence must preserve source boundaries.

A prediction such as "likely to churn" is not equivalent to:

**customer intends to terminate service**

unless independently established.

## 87. CRM operational architecture

The CRM operating loop is:

**DISCOVER → IDENTIFY/RESOLVE → RELATE → ENGAGE → SERVE → SUPPORT → MEASURE → LEARN → IMPROVE → RETAIN/EXIT**

The consequential control chain remains:

**ACTOR → CONTEXT → AUTHORITY → AUTHORIZATION → COMMAND → EXECUTION → EVENT → EVIDENCE**

CRM operates the relationship layer around that control chain.

## 88. CRM governance

Every CRM capability must identify:

- business owner;
- domain owner;
- data owner;
- privacy steward;
- security owner;
- lifecycle;
- source of truth;
- consumers;
- external providers;
- retention;
- risk;
- authorization model;
- escalation model.

CRM configuration must be versioned and governed.

## 89. CRM lifecycle

CRM capabilities should follow:

**PROPOSED → DESIGNED → REVIEWED → APPROVED → IMPLEMENTED → TESTED → ACTIVE → DEGRADED → DEPRECATED → RETIRED**

Data models and workflows must be versioned where changes can affect customer outcomes.

## 90. API boundary

CRM APIs follow Phase 23.

CRM endpoints must distinguish:

- query;
- customer interaction;
- case command;
- communication command;
- relationship command;
- opportunity command;
- journey command;
- administrative configuration.

Consequential API operations require authentication, authorization, idempotency/concurrency and execution semantics as applicable.

## 91. Execution boundary

CRM does not become a second execution engine.

For consequential operations:

**CRM COMMAND → PHASE 06 AUTHORIZATION → PHASE 16 COMMAND CONTRACT → PHASE 24 CORE EXECUTION ENGINE → DOMAIN SERVICE/PROVIDER → EVENT/EVIDENCE → CRM PROJECTION**

A CRM workflow may request execution.

The Core Execution Engine controls durable execution semantics.

## 92. Event boundary

CRM consumes and produces events according to Phase 17.

CRM must distinguish:

- canonical domain events;
- CRM projection events;
- external provider assertions;
- observational signals;
- customer-generated interactions.

A customer timeline is not a replacement for the canonical event stream.

## 93. Evidence boundary

CRM evidence follows Phase 18.

Examples:

- customer-submitted evidence;
- communication delivery evidence;
- case evidence;
- service evidence reference;
- provider evidence reference;
- complaint evidence;
- consent evidence.

CRM must not fabricate evidence from UI state.

## 94. Provider boundary

Provider relationships follow Phase 19 and 20C.

CRM may represent provider/customer relationships and coordinate customer service.

Provider credentials, provider worker assignments and provider-side operations remain provider-domain concerns.

CRM cannot grant provider workers unrestricted customer access.

## 95. Community and organization boundaries

CRM integrates with CM-NOS and OM-NOS.

Community customer relationships remain distinct from community participation.

Organization customer relationships remain distinct from organization membership and authority.

Neither operating system becomes a CRM merely because it has customer relationships.

## 96. LegaService boundary

Each LegaService remains authoritative for its own service domain.

CRM provides cross-service relationship context.

Examples:

- LegaRide owns trip semantics.
- LegaBooking owns reservation semantics.
- LegaPay owns payment semantics.
- LegaMarket owns marketplace/commerce semantics.
- LegaFood owns food-service semantics.
- LegaHealth owns health-service semantics.

CRM may show these in a customer view but must not redefine their state machines.

## 97. CRM and provider service quality

CRM may collect customer-facing service quality information.

PM-NOS and the relevant LegaService may collect operational quality information.

These are complementary:

**CUSTOMER EXPERIENCE SIGNALS + OPERATIONAL SERVICE EVIDENCE → GOVERNED SERVICE IMPROVEMENT**

Neither source should silently overwrite the other.

## 98. Customer relationship portability

A customer may interact with multiple providers.

LegaX must not create a universal customer profile that every provider can inspect.

Provider-specific customer relationships must remain scoped.

Cross-provider aggregation requires explicit authorization/privacy basis and must disclose applicable provenance.

## 99. Multi-tenant and multi-provider isolation

CRM must support isolation across:

- providers;
- organizations;
- communities;
- services;
- jurisdictions;
- environments.

A provider must not see another provider's customer relationships merely because both use LegaX.

A community administrator must not automatically see every provider's customer data within the community.

A LegaX operator must not automatically have unrestricted customer-data access.

## 100. Customer relationship handoff

When a customer relationship moves between:

- providers;
- teams;
- service representatives;
- organizations;
- service domains;

the system must preserve:

- relationship continuity;
- authorization boundaries;
- provenance;
- outstanding commitments;
- case history;
- privacy restrictions;
- effective time;
- handoff evidence.

Handoff does not automatically transfer authority.

## 101. CRM archival

Closed CRM records may be:

- retained;
- archived;
- restricted;
- anonymized;
- deleted;

according to Phase 22 and applicable domain requirements.

Archived does not mean forgotten.

Archived does not mean operationally active.

Historical evidence must not be silently rewritten.

## 102. CRM contradiction with customer preference

If a customer preference conflicts with a higher-priority legal, safety, security or contractual requirement, the governing policy determines the result.

CRM must preserve the distinction between:

- preference;
- consent;
- contractual requirement;
- legal requirement;
- safety requirement;
- security control.

They are not interchangeable.

## 103. CRM and authentication recovery

CRM may receive customer support requests involving account recovery.

CRM agents must not manually bypass Phase 03 Authentication or Phase 04 Account security merely to satisfy a customer request.

Recovery must follow the governed authentication/account recovery path.

Customer knowledge or CRM history is not automatically sufficient proof of identity.

## 104. CRM and access issues

A customer may report an access problem.

CRM can create and coordinate a case.

The authorization/access decision remains with the appropriate security/access architecture.

CRM must not grant access merely because a customer says access is needed.

## 105. CRM and payment issues

A customer may request:

- payment help;
- refund;
- dispute;
- billing explanation.

CRM coordinates communication.

LegaPay/Economic & Commerce owns payment semantics and settlement.

CRM cannot mark funds settled because a customer-service agent changed a case.

## 106. CRM and health-related relationships

Where CRM interacts with LegaHealth, it must not become a general health-record system.

Health information remains governed by the health domain and privacy/security requirements.

CRM should minimize health-related information to what is necessary for legitimate customer-service coordination.

## 107. CRM and physical-world services

For physical services, CRM may coordinate:

**CUSTOMER → REQUEST → LOCATION/RESOURCE → PROVIDER → WORKER → SERVICE → OUTCOME**

Location is context.

It is not authority.

A customer request for a home visit does not automatically authorize physical entry.

Access remains governed by LegaAccess and applicable provider/service rules.

## 108. CRM and commerce growth

CRM may support relationship expansion, cross-service discovery and legitimate offers.

But:

**RECOMMENDATION ≠ OFFER**

**OFFER ≠ ACCEPTANCE**

**ACCEPTANCE ≠ ORDER**

**ORDER ≠ PAYMENT**

**PAYMENT ≠ SETTLEMENT**

The economic architecture remains authoritative.

## 109. CRM data contracts

Every material CRM field should have:

- semantic definition;
- source;
- owner;
- sensitivity;
- purpose;
- lifecycle;
- freshness;
- allowed consumers;
- retention;
- correction path.

"Customer attribute" must not become an ungoverned dumping ground.

## 110. CRM canonical invariants

1. CRM does not create a parallel Identity system.
2. CRM does not create a parallel Account system.
3. CRM does not create a parallel Authentication system.
4. CRM does not create a parallel Authorization system.
5. CRM does not create a parallel Access system.
6. CRM does not create a parallel Commerce ledger.
7. CRM does not create a parallel Provider operating system.
8. CRM does not create a parallel Community operating system.
9. CRM does not create a parallel Organization operating system.
10. CRM does not create a parallel Execution Engine.
11. CRM customer status is contextual.
12. Customer relationship is not authority.
13. Customer relationship is not ownership.
14. Customer relationship is not authentication.
15. Customer relationship is not authorization.
16. Lead is not identity.
17. Prospect is not authenticated participant.
18. CRM account is not LegaX Account.
19. Contact is not identity.
20. Contact point is not proof of identity.
21. Phone number is not authentication merely because CRM stores it.
22. Email address is not identity proof merely because CRM stores it.
23. Customer profile is not canonical identity.
24. Customer 360 is a composed view, not one giant source of truth.
25. Source-domain ownership remains intact.
26. Domain events remain canonical.
27. CRM projections remain projections.
28. External CRM records remain source-scoped assertions unless explicitly governed otherwise.
29. Provider customer data remains provider-scoped.
30. Organization membership does not grant representation authority.
31. Community membership does not create customer authority.
32. Team membership does not automatically grant customer-data access.
33. Relationship assignment does not automatically grant unrestricted access.
34. Segment membership is not authority.
35. Customer health is not universal risk.
36. Prediction is not fact.
37. Sentiment is not customer intent.
38. AI output is not authority.
39. AI output is not consent.
40. AI output is not evidence of customer agreement.
41. Marketing permission is not implied by customer status.
42. Service communication is distinct from marketing communication.
43. Consent is distinct from preference.
44. Preference is distinct from legal obligation.
45. Complaint is not automatically dispute.
46. Case is not automatically incident.
47. Case closure is not proof of underlying service resolution.
48. CRM opportunity is not an order.
49. Opportunity won is not payment.
50. Quote is not settlement.
51. CRM payment display is not payment authority.
52. CRM cannot fabricate service completion.
53. CRM cannot fabricate settlement.
54. CRM cannot fabricate access success.
55. CRM cannot fabricate identity verification.
56. CRM cannot bypass account recovery.
57. CRM cannot bypass authorization.
58. CRM cannot grant provider workers unrestricted access.
59. CRM cannot turn customer history into authentication proof.
60. CRM cannot use database access as business authorization.
61. Customer 360 must respect field-level and domain-level authorization.
62. Sensitive data must be minimized.
63. CRM copies require purpose, source and retention.
64. External data must be validated.
65. Provider assertions remain provider assertions.
66. Unknown outcomes remain unknown.
67. Stale projections remain stale.
68. Synchronization conflicts require reconciliation.
69. Last-write-wins is not universally safe.
70. Customer handoff does not automatically transfer authority.
71. Relationship closure does not delete identity.
72. Account deactivation is distinct from CRM closure.
73. CRM workflow is not execution authority.
74. Scheduled CRM work is not automatic authority.
75. Queue membership is not authority.
76. Case priority is not authority.
77. Escalation is not authority.
78. SLA breach is not authority.
79. Customer complaint is not proof of liability.
80. Customer feedback is an observation/expression, not automatic objective truth.
81. Satisfaction score is not universal customer intent.
82. Customer health signals require provenance.
83. Segment criteria require governance.
84. Personalization requires legitimate purpose and governance.
85. Sensitive profiling requires additional controls.
86. AI agents require explicit identity and bounded tools.
87. Tool availability does not equal authorization.
88. Prompt content cannot override policy.
89. Customer communication delivery is not human receipt.
90. Provider acknowledgement is not canonical outcome.
91. CRM event is not necessarily domain event.
92. CRM timeline is not event source of truth.
93. Evidence must retain provenance.
94. Customer exports require authorization and privacy controls.
95. Correction requests must reach authoritative domains.
96. Deletion follows governed disposition.
97. Archived data remains subject to retention/privacy rules.
98. CRM APIs follow Phase 23.
99. CRM commands follow Phase 16 and Phase 24.
100. CRM persistence follows Phase 25.
101. CRM state semantics follow Phase 15.
102. CRM relationships follow Phase 14.
103. CRM intelligence follows Phase 11.
104. CRM provider integration follows Phase 19.
105. CRM security follows Phase 21.
106. CRM privacy follows Phase 22.
107. CRM cannot silently overwrite canonical service records.
108. CRM cannot silently overwrite canonical financial records.
109. CRM cannot silently overwrite canonical access records.
110. CRM cannot silently overwrite canonical identity records.
111. Customer context does not manufacture authority.
112. Customer relationship scope must be explicit.
113. Cross-provider customer visibility is not automatic.
114. Cross-community customer visibility is not automatic.
115. Cross-organization customer visibility is not automatic.
116. Customer 360 does not mean everyone sees everything.
117. CRM data must remain attributable.
118. CRM configuration must be governed.
119. CRM automation must be auditable.
120. **NO AUTHORIZATION → NO CONSEQUENTIAL CRM ACTION.**

## 111. Contradiction tests

### Test 1 — Customer record as identity
A CRM record exists for "John Doe."
**Expected:** no new global Identity is created without the Identity architecture.

### Test 2 — CRM account as platform account
A CRM account is active.
**Expected:** it does not automatically activate a LegaX Account.

### Test 3 — Customer relationship as authority
A person is a customer.
**Expected:** customer status alone grants no administrative or consequential authority.

### Test 4 — Contact as authentication
A phone number matches CRM.
**Expected:** it is not sufficient to bypass authentication/recovery requirements.

### Test 5 — Lead merge
Two leads have similar names.
**Expected:** no automatic identity merge without sufficient resolution evidence.

### Test 6 — Customer 360 leakage
Agent can see a customer profile.
**Expected:** sensitive payment/health/access fields remain individually authorized.

### Test 7 — Team access
Agent belongs to support team.
**Expected:** team membership does not grant unrestricted customer access.

### Test 8 — Case closure
Case is marked closed.
**Expected:** underlying service state is unchanged unless the owning domain confirms resolution.

### Test 9 — Complaint
Customer submits complaint.
**Expected:** complaint is recorded and governed; liability is not automatically established.

### Test 10 — Opportunity won
Opportunity is marked WON.
**Expected:** no automatic order/payment/settlement claim.

### Test 11 — AI refund recommendation
AI recommends a refund.
**Expected:** recommendation requires applicable policy/authority/authorization before execution.

### Test 12 — Marketing
Customer exists.
**Expected:** customer status does not imply marketing consent.

### Test 13 — Preference
Customer opts out of marketing.
**Expected:** marketing journeys respect the restriction; required service/security communications remain governed separately.

### Test 14 — Provider CRM
Provider imports customer data.
**Expected:** provider data remains provider-scoped and governed.

### Test 15 — External CRM sync
External CRM says customer is active.
**Expected:** assertion is validated and reconciled before changing canonical LegaX state.

### Test 16 — Stale customer 360
CRM shows service active but source service says suspended.
**Expected:** source-of-truth semantics prevail and CRM indicates freshness/conflict.

### Test 17 — Payment
Agent sees "paid" in CRM.
**Expected:** settlement remains owned by LegaPay/provider evidence.

### Test 18 — Access
Customer asks support to unlock a door.
**Expected:** CRM creates a request; LegaAccess authorization/enforcement remains authoritative.

### Test 19 — Recovery
Customer cannot log in.
**Expected:** CRM cannot bypass authentication/account recovery.

### Test 20 — Organization contact
A contact is listed under an organization.
**Expected:** contact does not automatically have authority to bind the organization.

### Test 21 — Community resident
Resident is shown in CRM.
**Expected:** residence/community participation does not create customer or commercial authority.

### Test 22 — Customer health
AI predicts churn.
**Expected:** prediction remains intelligence, not established customer intent.

### Test 23 — Communication
Provider reports email delivered.
**Expected:** delivery is not proof that the customer read or accepted it.

### Test 24 — Workflow
CRM workflow reaches "ready."
**Expected:** readiness does not bypass authorization or execution gates.

### Test 25 — Queue
Case is assigned to a worker queue.
**Expected:** queue assignment does not itself grant every underlying data/action permission.

### Test 26 — Cross-provider
Two providers serve the same person.
**Expected:** each provider sees only its governed relationship/data scope.

### Test 27 — Sensitive profile
CRM infers a sensitive characteristic.
**Expected:** inference is not silently stored/used for consequential action without governance.

### Test 28 — Delete relationship
Customer relationship closes.
**Expected:** Identity, Account and required historical evidence remain governed separately.

### Test 29 — Correction
Customer disputes a payment amount.
**Expected:** CRM records/coordinates the request; canonical payment record is corrected only by the owning domain.

### Test 30 — Provider outage
Provider API times out.
**Expected:** CRM does not claim provider action failed or succeeded without evidence/reconciliation.

### Test 31 — No authorization
CRM has a valid database connection but no applicable business authorization.
**Expected:** consequential CRM action is denied.

### Test 32 — Parallel authority
CRM configuration grants a capability that LegaX Authorization did not grant.
**Expected:** prohibited; CRM cannot become a parallel authority chain.

## 112. Readiness gate

CRM is implementation-ready only when:

- customer/consumer roles are defined;
- customer relationship ownership is defined;
- identity boundary is defined;
- CRM account terminology is disambiguated from LegaX Account;
- lead/prospect semantics are defined;
- identity-resolution rules are defined;
- contact-point verification is defined;
- communication purposes are defined;
- privacy/consent references are defined;
- customer profile source mapping is defined;
- Customer 360 source-of-truth matrix is defined;
- engagement model is defined;
- case model is defined;
- complaint model is defined;
- dispute references are defined;
- service-request routing is defined;
- opportunity lifecycle is defined;
- customer lifecycle is defined;
- onboarding orchestration is defined;
- customer-success model is defined;
- relationship-health provenance is defined;
- segmentation governance is defined;
- marketing eligibility is defined;
- communication orchestration is defined;
- SLA ownership is defined;
- escalation authority is defined;
- team/queue access is defined;
- customer-data authorization is defined;
- sensitive-field handling is defined;
- data minimization is defined;
- provider/customer boundary is defined;
- community/customer boundary is defined;
- organization/customer boundary is defined;
- service-domain ownership is defined;
- event mappings are defined;
- evidence mappings are defined;
- API contracts are defined;
- command/execution mappings are defined;
- external CRM synchronization contracts are defined;
- conflict/reconciliation rules are defined;
- projection freshness is defined;
- export controls are defined;
- correction paths are defined;
- closure/disposition paths are defined;
- AI boundaries are defined;
- human-review thresholds are defined;
- observability is defined;
- security controls are defined;
- privacy controls are defined;
- retention is defined;
- cross-provider isolation is defined;
- cross-organization isolation is defined;
- cross-community isolation is defined;
- no parallel authority path exists.

## 113. Relationship to previous architecture

**01 LegaX** — constitutional boundary.

**02 Identity** — canonical identity; CRM references it.

**03 Authentication** — authentication remains outside CRM.

**04 Account** — platform account remains distinct from CRM customer-account semantics.

**05 Administration** — CRM administration remains governed.

**06 Authorization** — remains the authority for consequential permission.

**07 Access** — remains the enforcement layer.

**08 Resources & Physical World** — remains resource/physical truth.

**09 Economic & Commerce** — remains commercial/economic truth.

**10 Lifecycle & Policy** — remains lifecycle/policy foundation.

**11 Events, Evidence & Intelligence** — remains canonical event/evidence/intelligence contract.

**12 LegaServices** — remains service-domain ownership.

**13 Canonical Domain Model** — remains canonical vocabulary.

**14 Canonical Relationship Model** — remains relationship semantics.

**15 Canonical State Machines** — remains state-transition authority.

**16 Command & Execution Contract** — remains command/execution semantics.

**17 Canonical Event Contract** — remains event semantics.

**18 Evidence Contract** — remains evidence semantics.

**19 Provider/Adapter Architecture** — remains external provider boundary.

**20A Community Management Network OS** — remains community operations.

**20B Organization Management Network OS** — remains organizational operations.

**20C Provider Management Network OS** — remains provider service operations.

**21 Security Architecture** — remains cross-cutting security.

**22 Privacy/Governance Architecture** — remains privacy and governance.

**23 API Architecture** — remains API contracts.

**24 Core Execution Engine** — remains durable execution runtime.

**25 Neon Database Architecture** — remains physical persistence.

**26 CRM Architecture** — adds the governed customer/consumer relationship and engagement operating layer without replacing any of them.

## 114. Final architectural rule

**CRM is the governed relationship and engagement layer through which LegaX understands, coordinates, serves, supports, measures and improves customer and consumer relationships while preserving the authority, source-of-truth, privacy, security, service, economic, provider and execution boundaries of the wider LegaX architecture.**

The decisive chain is:

**IDENTITY/ENTITY → CUSTOMER RELATIONSHIP → ENGAGEMENT → NEED/CASE/OPPORTUNITY → CONTEXT → AUTHORIZATION → COMMAND → EXECUTION → SERVICE/COMMERCE OUTCOME → EVENT → EVIDENCE → RELATIONSHIP INTELLIGENCE**

And the non-negotiable rule remains:

**NO AUTHORIZATION → NO CONSEQUENTIAL CRM ACTION.**

## 115. Research basis

This architecture was cross-checked against current CRM/customer-relationship architecture patterns, customer-360 data modeling, case management, service/contact-center architecture, customer satisfaction guidance, complaint-management guidance, privacy governance, and AI-assisted customer operations.

Research informed the CRM operating layer; it does not override the existing LegaX canonical contracts.
