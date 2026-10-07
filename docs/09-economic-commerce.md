# LegaX — Economic & Commerce Model

## 09 — Economic & Commerce

**Canonical definition**

Economic & Commerce in LegaX is the governed representation and coordination of economic value, commercial relationships, offers, orders, reservations, obligations, entitlements, payments, transfers, settlement, refunds, disputes, and other legitimate exchanges of value between participating entities, services, resources, and external economic systems, together with the identities, authority, authorization, policies, lifecycle, state, risk controls, provider boundaries, and evidence required to initiate, execute, reconcile, and account for those interactions without treating possession of funds, a payment credential, a commercial relationship, a technical transaction state, or a provider assertion as automatic authority or proof of final economic outcome.

The Economic & Commerce model answers **“what economic or commercial relationship, value exchange, obligation, entitlement, transaction, or service interaction exists; who or what are its governed parties; what is being offered, ordered, reserved, delivered, paid, refunded, disputed, or settled; under which terms and authority; what state is it in; and what evidence establishes what actually happened?”**

It does not by itself answer who may spend, receive, approve, control, change, cancel, refund, settle, or otherwise act on an economic resource. Those questions remain governed by Identity, Authentication, Account, Participation, Administration, Authority, Authorization, Access, Resources & Physical World, Policy, Lifecycle, and applicable legal, financial, provider, and domain rules.

Economic & Commerce therefore extends LegaX from representing the world and controlling access to representing governed exchanges and obligations within that world. It must support commerce without making LegaX the automatic owner, custodian, bank, payment network, merchant, marketplace, employer, lender, insurer, regulator, tax authority, or legal decision-maker for every economic interaction.

## Economic value is not authority

An economic resource or value representation may be associated with an entity without establishing that the entity is entitled to use, transfer, withdraw, spend, sell, refund, pledge, or otherwise control it.

LegaX must distinguish at minimum:

- **Economic value** — money, stored value, credit, goods, services, capacity, work, rights, or another recognized unit of economic significance.
- **Economic resource** — the governed thing, balance, entitlement, inventory, capacity, claim, obligation, or transaction subject to an economic relationship.
- **Commercial relationship** — the governed relationship between parties in an economic or service interaction.
- **Offer** — a proposal to provide or exchange value under defined terms.
- **Order** — a governed request or commitment for goods, services, capacity, or another economic object.
- **Reservation** — a time-, quantity-, or scope-bounded allocation or hold against a resource or capacity.
- **Obligation** — a duty to pay, deliver, perform, refund, verify, or otherwise satisfy a governed term.
- **Entitlement** — a recognized right or benefit arising from an applicable relationship or transaction.
- **Payment instrument or method** — a mechanism through which value may be presented or transferred.
- **Payment intent** — a governed request to attempt a payment under specified terms.
- **Payment authorization** — approval by the applicable authority or payment system for a particular transaction attempt; this is distinct from LegaX authorization.
- **Transfer** — movement or allocation of value between economic parties or accounts.
- **Settlement** — completion of the applicable value movement according to the authoritative financial or provider system.
- **Refund** — governed reversal or return of value under applicable terms.
- **Dispute** — a governed challenge concerning an economic transaction, obligation, service, delivery, amount, authorization, or outcome.
- **Reconciliation** — comparison and resolution of LegaX records against external or internal authoritative transaction records.
- **Evidence** — information supporting what was offered, requested, authorized, attempted, accepted, delivered, paid, rejected, refunded, disputed, or settled.

None of these concepts should silently become another.

A successful authentication does not authorize spending.

A payment credential does not itself prove authority to spend.

A payment authorization response does not necessarily prove settlement.

A transaction record does not by itself prove delivery.

A commercial relationship does not automatically grant administrative authority.

An account balance representation does not automatically establish legal ownership outside the applicable system and jurisdiction.

## Economic and commerce boundary

LegaX must preserve the boundary between its common infrastructure and the economic authority of external institutions, providers, merchants, communities, organizations, financial institutions, payment networks, marketplaces, employers, and other legitimate systems.

An external provider may remain authoritative for:

- an account or wallet it operates;
- funds it holds or represents;
- payment-network authorization;
- transaction processing;
- settlement;
- chargebacks;
- regulated financial controls;
- merchant records;
- provider-specific fees;
- provider-specific disputes;
- provider-specific compliance obligations.

LegaX may represent and coordinate those interactions through explicit contracts.

External provider status must not automatically become LegaX authority.

Likewise, LegaX must not represent a transaction as finally settled merely because an intermediary accepted a request.

The authoritative source for each economic fact must be explicit.

## Economic actors

Economic and commercial interactions may involve:

- people;
- organizations;
- communities;
- households where legitimately represented;
- buyers;
- sellers;
- merchants;
- customers;
- providers;
- workers;
- contractors;
- employers;
- clients;
- service operators;
- asset owners;
- custodians;
- beneficiaries;
- payers;
- payees;
- authorized representatives;
- agents;
- marketplaces;
- financial institutions;
- payment providers;
- payment networks;
- insurers;
- logistics providers;
- government or regulated entities;
- LegaX services;
- external systems;
- devices or automated systems where legally and operationally appropriate.

An entity may occupy multiple roles in different transactions or even in the same commercial ecosystem.

For example, a participant may be both a customer and a provider, while a community may purchase services, operate a marketplace, receive payments, and authorize designated representatives to manage particular economic operations.

Actor role must remain contextual.

## Commerce is relationship-based

Economic interaction must not be modeled as a single generic transaction table.

A mature commerce model should represent the relationship and lifecycle around the exchange.

A commercial interaction may include:

**Discovery → Offer → Acceptance → Order → Reservation/Allocation → Obligation → Fulfilment → Payment → Settlement → Reconciliation → Completion**

Not every commerce flow requires every stage.

A direct payment may have no marketplace order.

A booking may create a reservation before payment.

A work engagement may create a contract and milestones before payment.

A utility service may create recurring obligations and usage records.

A refund may occur after completion.

A dispute may reopen a previously completed commercial relationship without rewriting historical facts.

The model must therefore support domain-specific flows while preserving common economic semantics.

## Offers, quotes, and commitments

Economic systems frequently distinguish between an expression of availability and a binding commitment.

LegaX must distinguish, where applicable:

- product or service catalogue entry;
- availability;
- price;
- quote;
- offer;
- promotion;
- acceptance;
- order;
- contract;
- reservation;
- commitment;
- obligation.

A displayed price is not necessarily a final contractual price.

An offer may expire.

A quote may have a validity period.

A reservation may hold capacity without completing purchase.

An order may be accepted but not yet fulfilled.

A contract may create obligations without immediate payment.

These states must remain explicit.

AI-generated recommendations, prices, offers, matches, or commercial proposals are proposals unless a governed process explicitly turns them into an authoritative commercial state.

## Economic resources

Economic resources may include:

- monetary balances where legitimately represented;
- payment instruments;
- stored value;
- goods;
- inventory;
- service capacity;
- transport capacity;
- accommodation capacity;
- utility capacity;
- work capacity;
- bookings;
- reservations;
- tickets;
- credits;
- discounts;
- vouchers;
- subscriptions;
- memberships with economic entitlements;
- contractual rights;
- receivables;
- payables;
- deposits;
- collateral;
- refunds;
- fees;
- commissions;
- taxes or tax-related amounts where legally represented;
- future legitimate economic resources.

Economic resources must preserve their source, unit, valuation context, jurisdiction, provider, lifecycle, and authoritative system where those distinctions matter.

A resource may have different representations across systems.

For example, a payment provider may represent a balance, LegaX may represent an external reference to that balance, and a commerce service may represent a purchase entitlement derived from a successful settlement.

Those representations must not be silently treated as the same source of truth.

## Money, value, and units

LegaX must not assume that all economic value is interchangeable.

Economic amounts should preserve, where applicable:

- amount;
- currency or unit;
- precision;
- rounding rules;
- valuation basis;
- effective time;
- jurisdiction;
- source;
- provider;
- conversion rate or rate source;
- fee;
- tax treatment;
- discount;
- adjustment;
- status.

Currency conversion must be represented as an explicit operation or valuation rather than silently changing an amount.

A numeric value without its unit and valuation context is incomplete.

The system must not use floating-point approximations where financial correctness requires exact decimal or integer minor-unit semantics.

Financial calculation rules must be domain-appropriate and auditable.

## Pricing

Pricing may depend on:

- product or service;
- quantity;
- time;
- location;
- participant context;
- membership;
- provider;
- capacity;
- promotion;
- taxes;
- fees;
- currency;
- exchange rates;
- contractual terms;
- jurisdiction;
- market conditions.

A price calculation should preserve enough information to reproduce or explain the result.

Where a price is calculated dynamically, LegaX should preserve:

- input values;
- pricing policy or rule version;
- applicable offer;
- effective period;
- actor/context where relevant;
- external provider response where applicable;
- resulting amount;
- currency;
- fees and taxes;
- rounding;
- timestamp;
- provenance.

AI may recommend or estimate prices, but a consequential price used for a transaction must pass the applicable deterministic commercial and authorization controls.

## Orders and fulfilment

An order represents a governed commercial request or commitment for a defined economic object, service, capacity, or outcome.

An order may contain:

- buyer or requesting party;
- seller/provider;
- items or services;
- quantities;
- agreed terms;
- price;
- currency;
- fees;
- taxes;
- delivery or fulfilment requirements;
- reservation or allocation;
- payment status;
- fulfilment status;
- cancellation rules;
- refund rules;
- contract references;
- external references;
- lifecycle state;
- evidence.

Order state must be distinct from payment state.

For example:

**Order = fulfilled** does not necessarily mean **payment = settled**.

Likewise:

**Payment = settled** does not necessarily mean **service = delivered**.

These states may be correlated but must not be collapsed.

## Reservations and capacity

Commerce often depends on scarce resources.

Reservations may cover:

- accommodation;
- transport;
- appointments;
- facilities;
- parking;
- work capacity;
- service slots;
- equipment;
- inventory;
- utility capacity;
- tickets;
- community resources.

A reservation should define:

- reserved resource or capacity;
- reserving actor;
- applicable context;
- scope;
- quantity;
- effective period;
- status;
- price or commercial terms where applicable;
- cancellation/expiry rules;
- authorization source;
- provider reference;
- evidence.

A reservation is not automatically ownership.

A reservation is not automatically authorization to use unrelated resources.

Conflicting reservations must be resolved by explicit policy and lifecycle controls rather than database race conditions.

## Payment is not settlement

Payment is a multi-stage economic process.

A canonical LegaX representation may follow:

**Commercial Obligation → Payment Intent → Method Selection → Authentication/Step-Up → LegaX Authorization → Provider/Network Request → Provider Authorization → Processing → Settlement → Reconciliation → Event/Evidence**

These stages must remain distinguishable.

### Payment intent

A payment intent represents the requested economic operation and its terms.

It may include:

- payer;
- payee;
- amount;
- currency;
- purpose;
- order or obligation;
- selected method;
- destination;
- applicable fees;
- applicable limits;
- expiration;
- idempotency key;
- risk context;
- authorization requirements;
- provider reference;
- lifecycle.

A payment intent is not itself a completed payment.

### Payment method

Payment methods may include, subject to supported providers and applicable law:

- bank transfer;
- mobile money;
- payment card;
- account-based payment;
- wallet;
- QR;
- NFC;
- device-based credential;
- approved external payment method;
- future provider methods.

A method identifies how a payment may be attempted.

It does not by itself establish authority to use the underlying funds.

### Payment authorization

Payment authorization has two distinct meanings that must not be conflated:

1. **LegaX authorization** — whether the actor is permitted to initiate the requested operation within the applicable LegaX authority and policy boundary.
2. **Provider/network payment authorization** — whether the relevant external financial or payment system accepts the transaction attempt under its own rules.

Both may be required.

A LegaX authorization decision cannot manufacture provider approval.

Provider approval cannot automatically manufacture LegaX administrative authority for unrelated operations.

### Settlement

Settlement is the completion of value movement according to the authoritative financial or payment system.

LegaX should distinguish:

- requested;
- initiated;
- pending;
- authorized;
- processing;
- partially completed where supported;
- settled;
- failed;
- declined;
- cancelled;
- reversed;
- refunded;
- disputed;
- unknown;
- reconciled.

Exact state graphs are provider/domain-specific, but the semantic distinction must remain.

## LegaPay boundary

LegaPay is a LegaX service operating on top of the common Economic & Commerce, Identity, Authentication, Account, Authorization, Access, Lifecycle, Event, and Evidence foundations.

LegaPay must not create a competing identity system, authorization system, or independent source of truth for general LegaX authority.

The common pattern is:

**LegaPay → Payment Intent → Authentication/Step-Up → LegaX Authorization → Provider Adapter → Financial/Payment Provider → Provider Result → Settlement/Reconciliation → Event/Evidence**

Provider adapters must preserve:

- provider identity;
- provider transaction reference;
- request and response provenance;
- provider status;
- timestamps;
- idempotency behavior;
- callback/webhook verification;
- error semantics;
- reconciliation state;
- provider-specific lifecycle;
- supported jurisdiction and product scope.

Provider callbacks are external assertions and must be verified before they change consequential internal state.

## Payment with hand and multi-way methods

LegaX may support multiple payment initiation or confirmation methods, including the previously defined multi-way access/authentication ecosystem:

- hand/palm through certified hardware/provider;
- face;
- fingerprint;
- QR;
- NFC;
- device credential;
- passkey;
- PIN;
- approved physical credential;
- provider-specific payment authentication;
- future technologies.

These methods are authentication or payment-provider mechanisms, not automatic spending authority.

The safe conceptual path is:

**Method Capture → Liveness/Authenticity or Credential Verification → Authentication Assertion → Account/Identity Association → Context → Payment Intent → LegaX Authorization → Provider Authorization → Settlement → Event/Evidence**

For hand/palm:

**Hand/Palm → Certified Capture/Provider → Liveness/Authenticity → Verified Assertion → Identity/Account → Payment Context → Authorization → Provider Processing → Settlement → Event/Evidence**

A generic phone camera must never be represented as a certified palm-payment mechanism merely because an image can be captured.

Raw biometric material must not be treated as a general-purpose payment credential store by default.

Where biometric or device authentication is supplied by an operating system, hardware provider, payment provider, or certified access/payment device, LegaX should consume the appropriate assertion rather than unnecessarily centralizing raw biometric material.

## Economic authorization

Economic authorization is a concrete authorization decision applied to a specific economic operation.

Examples include:

- initiate payment;
- approve spending;
- transfer value;
- accept an order;
- issue refund;
- cancel an order;
- change price;
- release funds;
- withdraw funds;
- allocate inventory;
- confirm delivery;
- modify a commercial contract;
- create a recurring charge;
- authorize a provider payout;
- change settlement destination;
- waive a fee;
- approve a dispute outcome.

Authorization must consider the relevant:

- identity;
- authenticated actor;
- account;
- participation;
- context;
- role;
- capability;
- authority;
- administrative scope;
- economic relationship;
- resource;
- order or obligation;
- amount;
- currency;
- destination;
- transaction state;
- policy;
- limits;
- approvals;
- separation of duties;
- recent authentication;
- credential state;
- provider state;
- risk signals;
- jurisdiction;
- time;
- lifecycle;
- external assertions.

Possession of a payment method is not enough.

A provider relationship is not enough.

A role called “finance admin” is not enough.

A visible payment button is not enough.

An AI recommendation is not enough.

The requested operation must be authorized against the applicable authority and policy.

## Spending authority and account balances

LegaX must distinguish:

- an entity having an account;
- an account having a balance representation;
- an entity owning or beneficially controlling funds;
- an entity being permitted to spend funds;
- an entity being permitted to approve spending;
- a payment provider allowing a transaction;
- a transaction being authorized;
- a transaction being settled.

A balance is a state representation, not automatically a spending permission.

An authorized payer may be permitted to spend only within a defined scope.

A finance administrator may be permitted to approve certain transactions but not execute them.

A service may initiate a payment only under explicit authority and policy.

Delegation must remain bounded and revocable.

## Commerce roles and authority

Commerce roles are contextual.

Examples include:

- buyer;
- seller;
- customer;
- merchant;
- provider;
- worker;
- client;
- employer;
- contractor;
- payer;
- payee;
- approver;
- finance operator;
- fulfilment operator;
- dispatcher;
- account owner;
- authorized representative.

Role membership does not itself authorize every commercial operation.

For example, being a seller does not automatically permit changing another seller's prices.

Being a worker does not automatically permit receiving payment on behalf of an organization.

Being a finance operator does not automatically permit transferring all organizational funds.

Being a customer does not automatically authorize refunds.

The authority and authorization models determine what a role can actually do in a defined context.

## Contracts and obligations

Commerce may create explicit or implied obligations.

LegaX should be able to represent, where applicable:

- contractual parties;
- contract reference;
- terms;
- effective period;
- obligations;
- conditions;
- milestones;
- payment schedule;
- delivery requirements;
- acceptance conditions;
- cancellation rights;
- refund rules;
- dispute rules;
- jurisdiction;
- evidence;
- amendments;
- lifecycle state.

A contract representation in LegaX does not itself determine legal enforceability.

Applicable law, jurisdiction, external contracting systems, signatures, evidence requirements, and domain-specific rules remain relevant.

LegaX should preserve the distinction between:

**proposal → agreement → obligation → performance → acceptance → completion → dispute/termination**

## Work and economic relationships

LegaWork may create economic relationships involving:

- client;
- worker;
- employer;
- contractor;
- project;
- milestone;
- deliverable;
- rate;
- contract;
- invoice;
- payment;
- review;
- dispute.

Professional capability evidence and economic entitlement remain distinct.

A verified skill does not automatically create a contract.

A completed job does not automatically prove payment.

A payment does not automatically prove successful work.

The relevant evidence and lifecycle must be preserved independently.

## Commerce and physical resources

Economic interactions may concern physical resources represented by Definition 08.

Examples include:

- goods;
- units;
- vehicles;
- equipment;
- facilities;
- inventory;
- utilities;
- accommodation;
- transport capacity.

The resource model answers what exists and its governed state.

The commerce model answers the economic relationship around the resource.

The authorization model determines whether the actor may perform the requested commercial operation.

The access model determines how physical or digital access is enforced.

This separation prevents a purchase, reservation, or payment from silently becoming unrestricted physical access.

For example:

**Paid booking ≠ automatic master key.**

The booking may create a scoped entitlement, which must still be evaluated by Authorization and enforced through Access.

## Inventory and fulfilment

Inventory must preserve the difference between:

- available quantity;
- reserved quantity;
- allocated quantity;
- committed quantity;
- dispatched quantity;
- delivered quantity;
- returned quantity;
- damaged quantity;
- lost quantity;
- reconciled quantity.

Inventory state must not be inferred only from orders.

Concurrent orders must not cause over-allocation.

Allocation and reservation operations require concurrency-safe semantics and idempotency.

Where an external inventory provider is authoritative, synchronization must preserve provider provenance and reconciliation status.

## Refunds, reversals, and chargebacks

Refunds and reversals are new governed economic operations, not simple deletion of the original payment.

The original transaction must remain historically attributable.

A refund should reference:

- original transaction;
- refunded amount;
- currency;
- reason;
- initiator;
- authority;
- authorization decision;
- provider request;
- provider result;
- status;
- effective time;
- evidence.

Partial refunds must remain distinguishable from full refunds.

A chargeback or external dispute must not silently rewrite the original transaction state.

Instead, the system should represent the dispute lifecycle and its relationship to the original transaction.

## Disputes

Economic disputes may concern:

- unauthorized transaction;
- incorrect amount;
- non-delivery;
- defective service;
- cancellation;
- refund;
- duplicate charge;
- provider failure;
- settlement discrepancy;
- contract disagreement;
- fraud allegation;
- identity or authority issue.

A dispute is a governed process, not merely an error flag.

It should preserve:

- claimant;
- respondent;
- disputed transaction/order/contract;
- claim;
- evidence;
- deadlines;
- review state;
- resolution authority;
- decision;
- remedy;
- lifecycle;
- audit trail.

AI may assist by organizing evidence, detecting anomalies, or proposing classifications, but must not independently determine consequential dispute outcomes where human or governed authority is required.

## Risk, fraud, and financial integrity

Economic systems require risk controls.

Signals may include:

- unusual transaction patterns;
- velocity;
- amount;
- location;
- device posture;
- credential anomalies;
- account compromise indicators;
- provider risk response;
- transaction history;
- inconsistent identity information;
- repeated failed attempts;
- unusual beneficiary changes;
- high-risk destinations;
- sanctions or regulatory screening results where applicable;
- other domain-specific risk indicators.

Risk signals are decision inputs, not automatic proof of wrongdoing.

A risk engine must not silently become an independent authority.

Where law or provider rules require monitoring, reporting, blocking, review, or enhanced controls, LegaX must represent the applicable policy and responsible authority explicitly.

FATF guidance on mobile, prepaid, and internet-based payment services emphasizes risk-based controls and attention to customer relationships, funding sources, transaction behavior, and the risks introduced by decentralized or cross-border structures. LegaX therefore treats economic risk as contextual and governed rather than as a single global score. 

## Regulatory and jurisdictional boundaries

Economic and payment operations may be regulated differently across jurisdictions and business models.

LegaX must therefore represent applicable:

- jurisdiction;
- legal entity;
- licensing status where relevant;
- provider responsibility;
- product scope;
- transaction limits;
- KYC/CDD requirements where applicable;
- AML/CFT controls where applicable;
- tax treatment;
- consumer-protection requirements;
- data-protection requirements;
- record-retention requirements;
- reporting obligations;
- currency controls;
- sanctions or screening requirements where applicable.

These controls must be policy-driven and jurisdiction-aware rather than hard-coded into a single global assumption.

Kenya, DRC, and future jurisdictions may therefore use different economic policies while relying on the same foundational economic contract.

LegaX must not claim regulated financial authority merely because it coordinates a payment or commerce workflow.

## Payment-data security

Payment operations must minimize sensitive payment data.

Where card or other regulated payment data is involved, LegaX should prefer tokenization, provider-hosted collection, network/provider assertions, and other architectures that reduce unnecessary exposure of sensitive payment credentials.

Payment data access must be scoped, auditable, and lifecycle-managed.

Security requirements from applicable payment standards, including PCI DSS where cardholder-data environments are in scope, must be treated as external compliance constraints rather than replaced by the LegaX model.

The economic model must therefore preserve:

**payment method reference ≠ raw payment credential ≠ authentication factor ≠ authorization ≠ transaction result.**

## Provider adapters

External economic providers must be integrated through explicit adapters.

An adapter may connect LegaX to:

- banks;
- mobile-money providers;
- card processors;
- payment gateways;
- marketplaces;
- logistics systems;
- booking providers;
- commerce platforms;
- accounting systems;
- invoicing systems;
- tax systems;
- identity/KYC providers;
- other legitimate economic infrastructure.

An adapter must define:

- provider identity;
- contract version;
- supported operations;
- supported states;
- request schema;
- response schema;
- authentication method;
- authorization boundary;
- idempotency behavior;
- callback/webhook verification;
- retry semantics;
- timeout behavior;
- reconciliation;
- error mapping;
- data minimization;
- lifecycle;
- jurisdiction;
- provenance.

External provider connectivity must not bypass the LegaX authorization boundary.

## Idempotency and duplicate economic effects

Economic operations are highly sensitive to duplicate execution.

A retry, network timeout, webhook duplication, client refresh, or provider callback must not accidentally create:

- duplicate payments;
- duplicate refunds;
- duplicate orders;
- duplicate inventory allocation;
- duplicate bookings;
- duplicate payouts;
- duplicate contract effects.

Consequential economic commands must use explicit idempotency semantics appropriate to the operation and provider.

Idempotency keys, transaction references, provider references, and command identities must be preserved.

A timeout does not automatically mean failure.

A successful provider response does not automatically justify replay.

Unknown transaction states must be reconciled before unsafe retry where required.

## Concurrency and consistency

Economic operations frequently race.

Examples include:

- two users buying the last item;
- two bookings for one capacity unit;
- two refunds against one payment;
- two administrators changing a settlement destination;
- two workers claiming the same job;
- concurrent payment retries;
- provider callbacks arriving out of order.

LegaX must use appropriate transactional, locking, versioning, state-machine, or provider-specific mechanisms to prevent invalid economic outcomes.

The economic model must preserve the difference between:

**requested state → authorized state → attempted state → provider state → observed state → reconciled state.**

A stale client view must not override current authoritative state.

## Reconciliation

Reconciliation is a first-class economic function.

LegaX should be able to compare:

- LegaX transaction record;
- provider transaction record;
- order;
- payment intent;
- provider authorization;
- settlement;
- refund;
- dispute;
- external accounting record.

Reconciliation outcomes may include:

- matched;
- pending;
- missing provider record;
- missing LegaX record;
- amount mismatch;
- currency mismatch;
- duplicate;
- state mismatch;
- timing mismatch;
- disputed;
- manually reviewed;
- resolved;
- unknown.

Reconciliation must never silently overwrite history.

Differences should remain attributable and explainable.

## Events and evidence

Economic operations require strong event and evidence semantics.

Relevant events include:

- offer created;
- offer accepted;
- order created;
- reservation created;
- payment intent created;
- authentication completed;
- authorization granted or denied;
- provider request sent;
- provider response received;
- payment authorized;
- payment declined;
- payment settled;
- refund initiated;
- refund completed;
- dispute opened;
- dispute resolved;
- inventory allocated;
- delivery confirmed;
- contract amended;
- obligation completed;
- reconciliation matched or failed.

Evidence may include:

- provider references;
- signed terms;
- receipts;
- invoices;
- transaction records;
- delivery confirmation;
- reservation confirmation;
- authorization decisions;
- authentication assertions;
- provider callbacks;
- device evidence;
- review decisions;
- dispute evidence.

Events describe what happened.

Evidence supports why or how a claim about what happened can be established.

Neither should be rewritten merely to make a current state appear consistent.

## Lifecycle

Economic objects are lifecycle-managed.

Potential lifecycle states include:

### Offer
**draft → published → accepted/rejected → expired/withdrawn**

### Order
**draft → submitted → accepted → confirmed → fulfilled → completed/cancelled**

### Reservation
**requested → held → confirmed → active → consumed/cancelled/expired**

### Payment intent
**created → pending → authorized/declined → processing → settled/failed/cancelled/reversed**

### Refund
**requested → authorized → processing → completed/failed/cancelled**

### Dispute
**opened → acknowledged → under_review → decision → resolved/appealed/closed**

Exact state graphs remain domain-specific.

No transition may occur without the applicable transition policy, authorization, lifecycle controls, and required evidence.

## Economic state versus provider state

LegaX must preserve the distinction between:

- internal requested state;
- internal governed state;
- provider state;
- observed state;
- reconciled state.

An external provider may report:

**approved**

while LegaX may still have:

**settlement pending**

because approval and settlement are different stages.

Likewise, a provider callback may arrive before an expected internal event.

State reconciliation must therefore be designed for asynchronous, duplicated, delayed, and out-of-order messages.

## AI and Economic & Commerce

LegaX intelligence may assist with:

- product and service discovery;
- recommendations;
- matching;
- demand forecasting;
- pricing suggestions;
- fraud/anomaly detection;
- transaction classification;
- reconciliation assistance;
- dispute evidence organization;
- inventory forecasting;
- provider selection;
- route or fulfilment optimization;
- financial summaries;
- budget projections;
- commercial opportunity analysis.

AI remains non-authoritative by default.

AI must not independently:

- authorize a consequential payment;
- transfer funds;
- change a settlement destination;
- create unrestricted spending authority;
- approve its own financial proposal;
- silently alter transaction history;
- declare settlement without authoritative evidence;
- manufacture a commercial obligation;
- override a provider, legal, policy, or safety control;
- suppress a required review.

Where AI proposes a consequential economic action, the proposal, evidence, model/automation involvement, human or governed approval, authorization decision, and execution result must remain distinguishable.

## Economic privacy and data minimization

Economic activity can reveal sensitive information about:

- income;
- spending;
- relationships;
- location;
- health-related purchases;
- employment;
- household activity;
- community activity;
- travel;
- consumption;
- professional relationships.

LegaX must therefore apply:

- purpose limitation;
- data minimization;
- least privilege;
- scoped access;
- encryption;
- tokenization where appropriate;
- retention controls;
- deletion or anonymization where legally permissible;
- auditability;
- jurisdictional controls;
- explicit provider data boundaries.

Economic intelligence must not become an unrestricted surveillance layer.

A participant should not expose their entire economic history merely because a service requires one transaction-related fact.

## Commerce and access

Economic authorization and physical/digital access are related but distinct.

Examples:

- a paid booking may create an entitlement to enter a specific facility during a defined period;
- a completed payment may satisfy a financial obligation without granting physical access;
- a work contract may create a right to use a workspace without granting access to every room;
- a subscription may create service access without transferring ownership.

The canonical relationship is:

**Economic entitlement → Applicable authority/policy → Authorization → Access Decision → Enforcement → Event/Evidence**

Payment alone must not bypass Access.

Access alone must not prove payment.

## Emergency and exception handling

Economic systems may require controlled emergency operations, such as:

- payment provider outage;
- manual reconciliation;
- emergency service procurement;
- temporary spending limits;
- reversal of erroneous configuration;
- provider callback failure;
- disputed transaction freeze.

Emergency procedures must remain:

- explicitly defined;
- scoped;
- time-bounded;
- attributable;
- auditable;
- revocable;
- subject to post-event review;
- prevented from becoming permanent bypasses.

An emergency flag must never mean unrestricted economic authority.

## External standards and research-informed principles

The Economic & Commerce model is informed by established financial and security architecture principles.

ISO 20022 provides a common framework for structured financial-service business processes, data elements, and messages and is widely used in payments and other financial domains. LegaX therefore treats financial messages and provider contracts as structured interoperability boundaries rather than assuming one internal transaction schema can represent every external financial system.

PCI DSS provides security requirements for payment-card data environments and authentication/access controls. LegaX therefore minimizes direct handling of sensitive payment credentials and keeps payment-data compliance as an explicit external constraint where applicable.

FATF guidance emphasizes risk-based controls for payment products and services, including customer relationships, funding sources, transaction monitoring, and provider risk. LegaX therefore models risk as contextual evidence and policy input rather than as an unrestricted global score.

NIST identity and security guidance reinforces the separation between authentication, assertions, lifecycle, and authorization. LegaX applies the same separation to economic operations: proving control of an authentication mechanism does not itself prove authority to execute a financial transaction.

These standards inform the architecture but do not make LegaX automatically compliant with any particular legal or regulatory regime. Compliance remains dependent on the actual service, provider, jurisdiction, data flows, licensing model, and operational implementation.

## Economic control path

The canonical economic control path is:

**Economic Relationship/Resource → Commercial Terms → Payment or Economic Request → Authentication/Step-Up → Participation/Context → Authority/Policy → LegaX Authorization → Provider/Network Authorization where applicable → Access/Execution → Provider Result → Settlement/State Change → Reconciliation → Event/Evidence**

For commerce:

**Discovery → Offer → Acceptance → Order/Contract → Reservation/Allocation → Fulfilment → Payment → Settlement → Completion → Reconciliation → Event/Evidence**

For a payment:

**Payment Intent → Method → Authentication → LegaX Authorization → Provider Request → Provider Authorization → Processing → Settlement → Reconciliation → Event/Evidence**

For a physical commerce entitlement:

**Commercial Entitlement → Resource/Context → Authorization → Access Decision → Enforcement → Action → Result → Event/Evidence**

No stage should silently substitute for another.

## Economic & Commerce contract

The LegaX Economic & Commerce model must preserve these invariants:

1. **Economic & Commerce is distinct from Identity.**
2. **Economic & Commerce is distinct from Authentication.**
3. **Economic & Commerce is distinct from Account.**
4. **Economic & Commerce is distinct from Administration.**
5. **Economic & Commerce is distinct from Authority.**
6. **Economic & Commerce is distinct from Authorization.**
7. **Economic & Commerce is distinct from Access and physical enforcement.**
8. **An economic resource or balance representation does not by itself establish ownership, spending authority, or transfer authority.**
9. **A payment method or credential does not by itself establish authority to spend.**
10. **A commercial role does not automatically authorize every commercial operation associated with that role.**
11. **A displayed price, offer, reservation, or availability state is not automatically a completed contractual or economic commitment.**
12. **Order state, fulfilment state, payment state, provider state, settlement state, and reconciliation state must remain distinguishable.**
13. **Payment authorization and LegaX authorization are distinct decisions and may both be required.**
14. **Provider approval does not automatically create LegaX authority.**
15. **LegaX authorization does not manufacture provider approval or settlement.**
16. **Settlement must remain distinguishable from payment initiation, payment authorization, processing, and provider acceptance.**
17. **External provider assertions require explicit trust, provenance, scope, lifecycle, verification, and reconciliation.**
18. **Economic operations must be idempotent where duplicate execution could create consequential effects.**
19. **Concurrent economic operations must not corrupt inventory, balances, reservations, orders, payments, refunds, or other economic state.**
20. **Unknown provider state must not be treated as permission to blindly retry a consequential transaction.**
21. **Refunds, reversals, chargebacks, and disputes must preserve the original transaction history.**
22. **Reconciliation must be a first-class process and must not silently rewrite historical records.**
23. **Economic amounts must preserve currency or unit, precision, valuation context, and applicable calculation rules.**
24. **Currency conversion must be explicit and attributable.**
25. **Economic obligations, entitlements, contracts, reservations, and transactions are lifecycle-managed.**
26. **A reservation is not automatically ownership or unrestricted access to the underlying resource.**
27. **Payment does not automatically grant physical or digital access; applicable authorization and access controls remain independent.**
28. **Physical or digital access does not automatically prove payment or settlement.**
29. **Economic risk signals are inputs to governed decisions and are not, by themselves, proof of fraud or wrongdoing.**
30. **AI and automation may recommend, analyze, classify, reconcile, or prepare economic actions but cannot independently manufacture authority or execute consequential economic operations outside defined controls.**
31. **Sensitive payment and financial data must be minimized, protected, scoped, and retained according to applicable requirements.**
32. **Provider adapters must preserve provider-specific lifecycle and error semantics rather than flattening every outcome into generic success or failure.**
33. **Events and evidence must preserve sufficient information to reconstruct consequential economic operations.**
34. **Commercial relationships may create obligations and entitlements, but those relationships must not silently create unrestricted authority.**
35. **External legal, financial, tax, consumer-protection, AML/CFT, payment-network, and provider requirements remain applicable where relevant.**
36. **Jurisdiction-specific economic controls must be represented through governed policy and configuration rather than unsafe global assumptions.**
37. **Economic state must distinguish requested, authorized, attempted, observed, provider-reported, settled, and reconciled outcomes where applicable.**
38. **No interface, service, provider, account property, payment credential, role, balance, AI output, or successful authentication, by itself, constitutes authorization for a consequential economic action.**
39. **Economic semantics must remain extensible to new currencies, payment methods, commerce models, providers, jurisdictions, resources, and LegaX services without weakening the core authority boundary.**
40. **LegaX must remain an infrastructure and coordination layer unless a specific service is explicitly and lawfully established to assume an economic role with the required controls, authority, licensing, and accountability.**

## Relationship to Definitions 01–08

This definition extends the Product Constitution and the Identity, Authentication, Account, Administration, Authorization, Access, and Resources & Physical World models without redefining them.

- **Identity** establishes **who or what LegaX recognizes**.
- **Authentication** establishes **whether the current actor has successfully presented or controlled an accepted authentication mechanism under defined conditions**.
- **Account** establishes **the governed LegaX interaction and security relationship through which that authenticated actor operates**.
- **Administration** governs **the authority structures, scopes, assignments, delegation, policies, approvals, and configurations through which authorized entities manage defined governance responsibilities**.
- **Authorization** determines **whether a specific requested economic or commercial operation is permitted against a specific target under the applicable authority, policy, context, lifecycle, security, and other conditions**.
- **Access** determines **how an authorized interaction is enforced at a digital or physical boundary**.
- **Resources & Physical World** establishes **what economic, physical, digital, spatial, service, and operational resources exist or are represented and what state and relationships they have**.
- **Economic & Commerce** establishes **the governed relationships and lifecycle of value, commercial exchange, obligations, entitlements, transactions, payments, settlement, fulfilment, refunds, disputes, and reconciliation involving those entities and resources**.

The resulting architecture is:

**Identity → Authentication → Account → Participation/Context → Administration/Authority → Policy/Capability → Authorization → Economic/Resource Operation → Access/Execution → Provider/Network → Settlement/State → Event/Evidence**

Economic & Commerce therefore becomes the economic coordination layer of LegaX without collapsing identity, authentication, authority, authorization, access, resources, provider systems, or legal responsibility into one transaction abstraction.

**Status:** Foundational domain contract — definition and semantic model; implementation intentionally deferred.
