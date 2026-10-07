# LegaX — Product Constitution

## 01 — LegaX

**Canonical definition**

LegaX is an intelligent Identity and Access Management living infrastructure designed to provide a unified foundation ready ecosystem for voluntarily participating people, communities, organizations, providers, workers, devices, systems, and LegaX services to establish and cordinate trusted identity, participate in defined contexts, manage relationships and responsibilities, govern authority, determine and enforce authorization, and securely access digital, physical, economic, and social resources.

LegaX connects identity and participation with buildings, units, places, facilities, devices, services, payments, commerce, work, mobility, community operations, infrastructure, and other real-world and digital systems through a common control and integration model. Each domain and LegaX service may operate according to its own purpose and lifecycle while relying on shared foundations for identity, authentication, account representation, participation, context, administration, authority, authorization, access, credentials, policy, lifecycle, events, evidence, security, and auditability.

LegaX is designed as extensible infrastructure rather than a closed collection of applications. New LegaX services, external providers, organizations, technologies, devices, networks, and third-party systems must be able to integrate through defined contracts and controlled interfaces without creating competing identities, incompatible authority models, uncontrolled permissions, or conflicting sources of truth.

LegaX preserves the agency and governance of participating people, communities, organizations, and other authorized entities. Participation is voluntary; authority is contextual and bounded; consequential decisions remain subject to the authority of the entities entitled to make them; and no service, provider, device, automation, or intelligence layer acquires authority merely by being connected to LegaX.

Its intelligence layer may observe, understand, analyze, correlate, predict, recommend, match, coordinate, explain, and assist across the ecosystem. Intelligence is therefore treated as an input to decision-making rather than an independent source of authority: AI and automated systems must operate within defined policies, permissions, safety constraints, and authorization boundaries and must not bypass, silently replace, or manufacture authority.

LegaX is intended to connect authorized decisions to the digital, physical, and economic world through accountable actions. Consequential operations should be attributable to an initiating identity or system, evaluated against applicable context and policy, protected by appropriate security and lifecycle controls, and recorded through events and evidence sufficient to support operational accountability, investigation, dispute resolution, compliance, and future system intelligence.

This definition establishes LegaX as a common infrastructure layer whose purpose is not limited to identity, access, or any current service category. It is intended to remain valid as LegaX expands into new services, jurisdictions, organizations, communities, technologies, physical infrastructure, economic networks, devices, and external ecosystems while preserving separation of responsibility, user and community control, interoperability, security, privacy, auditability, and architectural integrity.

## Architectural consequences

This definition establishes the following as foundational principles:

1. **Identity is foundational but is not the whole platform.** Identity establishes who or what participates; it does not by itself grant authority.
2. **Authentication is distinct from authorization.** Proving control of an account or credential does not by itself permit a consequential action.
3. **Participation is contextual.** A person or entity may participate in multiple communities, organizations, services, places, and roles without requiring multiple incompatible identities.
4. **Administration governs authority structures.** Administration manages scopes, assignments, policies, delegation, configuration, and governance; it is not equivalent to unrestricted system access.
5. **Authorization is a runtime decision.** Authorization determines whether a specific requested action against a specific target is permitted under the applicable identity, participation, context, capability, policy, lifecycle, and security conditions.
6. **Access is enforcement.** Access mechanisms translate an authorized decision into controlled interaction with a digital or physical resource.
7. **Services are domain participants, not competing foundations.** LegaX services use shared platform contracts for identity, authority, authorization, lifecycle, events, and evidence rather than creating parallel control planes.
8. **External systems are integrations, not automatic authorities.** Providers, networks, devices, payment rails, verification systems, maps, infrastructure, and other third parties connect through controlled adapters and contracts.
9. **AI is non-authoritative by default.** Intelligence may assist with understanding and proposals, but consequential authority must come from an authorized governance and authorization path.
10. **Consequential actions require accountability.** The platform must preserve sufficient attribution, state, policy, event, and evidence information to explain what happened and under whose authority.
11. **Lifecycle is first-class.** Identities, participations, roles, credentials, policies, resources, authorizations, services, and other consequential objects have governed states and transitions rather than relying on implicit or permanent validity.
12. **The architecture must be extensible without becoming ambiguous.** New domains must integrate through explicit contracts and boundaries instead of weakening the meaning of existing foundational concepts.

## Scope

This definition is the canonical product-level definition of LegaX. More specific definitions for Identity, Authentication, Account, Administration, Participation, Context, Role, Capability, Authority, Authorization, Access, Credentials, Policy, Lifecycle, Resources, Events, Evidence, Intelligence, and LegaServices must remain consistent with this definition and may refine their own responsibilities without redefining LegaX itself.

**Status:** Foundational contract — definition only; no implementation implied.
