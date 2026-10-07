# LegaX — LegaServices Model

## 12 — LegaServices

**Canonical definition**

LegaServices are the governed domain services through which LegaX applies its shared identity, participation, authority, authorization, access, resource, economic, lifecycle, event, evidence, and intelligence foundations to specific real-world and digital purposes, enabling people, communities, organizations, providers, workers, devices, systems, and external networks to coordinate legitimate activities without allowing any individual service to create a competing identity system, authority model, permission system, lifecycle semantics, or source of truth.

A LegaService is therefore not merely an application, feature, marketplace, provider directory, or API. It is a bounded service domain with a defined purpose, actors, resources, relationships, workflows, state, policies, economic or operational semantics where applicable, integration contracts, and accountability requirements. Each service owns the domain concepts necessary for its purpose while consuming the shared LegaX foundations for cross-domain identity, authentication, account interaction, participation, administration, authority, authorization, access, credentials, lifecycle, events, evidence, and intelligence.

LegaServices are designed to connect LegaX to the digital, physical, and economic world. A service may coordinate external providers, organizations, networks, devices, facilities, payment rails, workers, or other systems, but connection does not make an external provider or LegaService the canonical authority for LegaX. External systems remain governed integrations whose assertions, capabilities, outcomes, and failures are represented through explicit contracts and provenance.

## Service boundaries

Every LegaService must define at least:

- its purpose and legitimate scope;
- the actors and participation contexts it supports;
- its domain resources and relationships;
- its service-specific states and lifecycle;
- the actions and outcomes it can initiate or coordinate;
- the authority required for consequential operations;
- the authorization inputs and policies applicable to those operations;
- the external providers and systems it integrates with;
- the economic model and settlement semantics where relevant;
- the events and evidence it must produce or consume;
- its privacy, security, safety, jurisdiction, and retention requirements;
- the intelligence it may use and the decisions that remain outside its authority.

A LegaService MUST NOT redefine the meaning of Identity, Authentication, Account, Participation, Authority, Authorization, Access, Policy, Lifecycle, Event, Evidence, or Intelligence merely to simplify its implementation.

## Shared service contract

The canonical service interaction is:

**Actor/Service Identity → Authentication → Account → Participation/Context → Resource/Service Context → Authority → Authorization → Policy/Lifecycle Evaluation → Service Action → External Adapter where required → Outcome → Event → Evidence → Intelligence**

Where physical access is involved:

**Service Request → Authorization → Access Decision → Access Enforcement → Physical Action → Resource State → Event/Evidence**

Where economic activity is involved:

**Service Request → Commercial Intent → Authorization → Payment/Commerce Processing → Provider/Network → Settlement/Reconciliation → Event/Evidence**

Where an intelligent recommendation is involved:

**Evidence/Signals → Intelligence → Recommendation/Proposal → Governed Review/Authorization → Action if permitted → Outcome → Event/Evidence**

## Shared service principles

1. A LegaService has a bounded domain purpose.
2. A service cannot grant itself authority merely because it owns an endpoint, database, device, workflow, or provider relationship.
3. Service authentication is distinct from user authentication and authorization.
4. Service-to-service communication must use explicit service identity and authorization.
5. User and service identity remain distinct from service participation.
6. Provider integration does not transfer canonical LegaX authority to the provider.
7. A service may enforce domain rules, but consequential authorization remains governed by the shared authorization model.
8. Service-specific roles and capabilities do not automatically become global authority.
9. Service-specific lifecycle states remain compatible with the shared lifecycle semantics.
10. Consequential service actions must be attributable and produce appropriate events and evidence.
11. External outcomes must retain provider provenance and must not be represented with stronger semantics than the provider contract supports.
12. Duplicate commands and retries must not create unintended duplicate consequential effects.
13. Concurrent operations must not corrupt service or shared resource state.
14. Service boundaries must support explicit APIs, events, and integration contracts.
15. Service data access must be purpose-bound and authorization-controlled.
16. Sensitive data must be minimized and protected.
17. Intelligence may assist a service but cannot silently manufacture authority or bypass authorization.
18. Service automation is valid only where the relevant authority and authorization for that automation have been explicitly established.
19. Service failure must not silently become authorization, payment success, access success, settlement, verification, or completion.
20. Every service must remain interoperable with the shared LegaX control plane.
21. A service may be unavailable without invalidating the meaning of identity or participation elsewhere.
22. Service lifecycle must distinguish requested, accepted, active, completed, cancelled, failed, expired, suspended, disputed, reversed, or other domain-relevant states where applicable.
23. Jurisdiction-specific rules must be represented through governed policy and configuration rather than hidden assumptions.
24. Service-specific intelligence and analytics remain subject to the cross-cutting Events, Evidence & Intelligence model.
25. A LegaService is an extension of LegaX, not a second LegaX.

## Initial LegaService portfolio

The initial portfolio is:

1. **LegaPay** — payments and financial transaction coordination.
2. **LegaAccess** — authorization-aware physical and digital access.
3. **LegaRide** — mobility, ride requests, trips, drivers, vehicles, and transport coordination.
4. **LegaNetwork** — connectivity and network services, plans, resources, subscriptions, and service operations.
5. **LegaBooking** — reservations and scheduling of services, resources, places, and capacity.
6. **LegaMarket** — commerce for goods and economic exchange.
7. **LegaFood** — food discovery, ordering, preparation, delivery, and related coordination.
8. **LegaHealth** — health-service coordination and related trusted access to providers and resources, subject to applicable law and clinical boundaries.
9. **LegaAds** — governed advertising and discovery relationships without converting attention, identity, or behavioral data into unrestricted surveillance.
10. **LegaAward** — governed awards, recognition, incentives, grants, or benefits based on defined criteria and evidence.
11. **LegaWork** — professional identity, skills, opportunities, work relationships, projects, deliverables, and work economics.

The portfolio is extensible. New services must satisfy the same shared service contract and must not require weakening the foundational semantic boundaries.

## Service independence and shared infrastructure

LegaServices may evolve independently in product scope, user experience, providers, pricing, workflows, and domain lifecycle while relying on shared LegaX infrastructure. A service may have its own workspace, operational processes, policies, provider relationships, and domain data, but those service-specific structures must remain connected to canonical LegaX identity, participation, authorization, lifecycle, and accountability semantics.

A person may use multiple LegaServices without creating multiple incompatible LegaX identities. A community or organization may participate in multiple services under different contextual relationships. A provider may operate across multiple services while retaining one underlying identity and explicitly governed participation in each service.

## Service composition

Services may call other LegaServices through explicit contracts.

Examples:

- LegaRide may use LegaPay for payment processing.
- LegaFood may use LegaPay for payment and LegaRide for delivery where appropriate.
- LegaBooking may reserve resources represented by the Resources & Physical World domain.
- LegaAccess may enforce access resulting from an authorized booking or community relationship.
- LegaWork may use LegaPay for work compensation.
- LegaAds may use LegaMarket or other services for commercial conversion.
- LegaAward may issue an economic or service benefit through LegaPay or another governed service.
- LegaNetwork may use LegaPay for subscriptions and LegaAccess where physical infrastructure access is required.

Composition does not merge the services into one authority boundary. Each service remains responsible for its own domain state while shared contracts coordinate dependencies.

## Provider integration

Providers may supply:

- inventory;
- transport capacity;
- connectivity;
- payment rails;
- food preparation;
- health services;
- physical facilities;
- professional services;
- advertising inventory;
- verification;
- logistics;
- other domain capabilities.

A provider adapter must define identity mapping, authorization requirements, data scope, credentials, capabilities, rate and reliability constraints, event semantics, error semantics, reconciliation, and termination. Provider data remains attributable to its source.

## Intelligence across LegaServices

LegaX intelligence may operate across services to discover opportunities, match participants and providers, forecast demand, detect anomalies, recommend services, optimize routing, identify conflicts, summarize activity, support operators, and coordinate workflows.

Cross-service intelligence must respect purpose, authorization, privacy, provenance, jurisdiction, and service boundaries. Intelligence may coordinate proposals across services but does not become an independent authority.

## Relationship to Definitions 01–11

- **01 — LegaX:** defines the platform purpose and common control model.
- **02 — Identity:** provides continuity for service actors and entities.
- **03 — Authentication:** establishes current interaction confidence.
- **04 — Account:** provides the platform interaction boundary.
- **05 — Administration:** governs service administration and delegated control.
- **06 — Authorization:** determines whether concrete service operations are permitted.
- **07 — Access:** enforces authorized interaction with digital and physical resources.
- **08 — Resources & Physical World:** represents service resources, places, facilities, devices, and physical dependencies.
- **09 — Economic & Commerce:** governs service economic relationships and transactions.
- **10 — Lifecycle & Policy:** governs service state, transition, policy, review, verification, expiration, suspension, and revocation.
- **11 — Events, Evidence & Intelligence:** provides service accountability, provenance, observability, and intelligence boundaries.

## Implementation boundary

This document defines the canonical semantic and architectural contract for LegaServices and their composition. It does not yet prescribe individual database schemas, API implementations, provider SDKs, deployment topology, UI, mobile implementation, payment processor, logistics provider, AI model, or service mesh.

Each service must be defined as its own bounded domain before implementation.

**Status:** Foundational domain contract — definition and service architecture; individual service contracts defined separately.
