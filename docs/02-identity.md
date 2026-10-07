# LegaX — Identity Model

## 02 — Identity

**Canonical definition**

Identity in LegaX is the persistent, distinct, and governed representation of a real-world or digital entity that enables the ecosystem to recognize, distinguish, relate to, and maintain continuity for that entity across participating contexts, services, resources, and integrations without making identity itself a grant of authority, permission, ownership, or access.

A LegaX Identity represents the **subject of recognition**, not merely a login credential, account, profile, role, or current participation. Depending on the domain and applicable rules, an identity may represent a person, organization, community, provider, worker, service, device, system, or other entity that LegaX needs to recognize and manage as a distinct participant or system actor. The identity model must therefore be extensible enough to represent new legitimate entity types without changing the meaning of existing identities.

Identity provides continuity across the ecosystem. The same recognized entity may participate in multiple communities, organizations, places, services, work relationships, economic activities, and access contexts while retaining one underlying LegaX identity. Contextual relationships are represented through participation and related domain structures rather than by creating duplicate identities for every community, service, role, or relationship.

Identity is deliberately separated from authentication. Authentication establishes that a person or system has successfully presented or controlled an accepted authentication factor, credential, session, or external identity assertion. That authentication result may be associated with an account and, through controlled identity relationships, with a LegaX Identity; it does not by itself establish every attribute about the identity, grant participation, establish authority, or authorize a consequential action.

Identity is also separated from the LegaX Account. An Account represents the platform relationship through which an authenticated subject interacts with LegaX, while an Identity represents the underlying recognized entity. One identity may be associated with one or more legitimate accounts or authentication relationships where the architecture and security model permit it, while an account must never be treated as the identity itself.

Identity is separated from participation, role, capability, authority, authorization, and access. An identity may exist without participating in a particular context; participation establishes a contextual relationship; roles and capabilities describe contextual responsibilities or possible abilities; authority establishes who or what may govern or act within a defined scope; authorization determines whether a specific requested action is permitted; and access provides the mechanism through which an authorized interaction reaches a resource. None of these concepts may be inferred merely from the existence of an identity.

## Identity composition

A LegaX Identity may be understood as a governed identity record together with the identifiers, attributes, relationships, evidence, provenance, and lifecycle information required to maintain a trustworthy representation of the entity.

These components have different meanings:

- **Identity record** — the canonical LegaX representation of the entity.
- **Identifier** — a value used to distinguish or reference the identity within a defined namespace; an identifier is not necessarily proof of the identity.
- **Attribute** — a property associated with the identity, such as a name, date, organizational relationship, or other domain-relevant information.
- **Evidence** — information supporting a claim, attribute, relationship, or identity assertion.
- **Provenance** — information describing where an identity fact or assertion originated, when it was established, and under what verification or observation process.
- **Relationship** — a governed connection between the identity and another entity, resource, organization, community, service, place, or system.
- **Lifecycle** — the governed state and history of the identity and its material changes.

No individual identifier, attribute, credential, biometric result, document, account, or external provider record should automatically be treated as the complete identity. Identity is the governed representation that brings the relevant facts and relationships together while preserving their provenance and assurance.

## Identity assurance and evidence

LegaX must distinguish between an identity claim and the evidence supporting that claim. Information may be declared by an entity, supplied by an authorized organization or provider, observed by a trusted system, verified through an appropriate process, inferred by intelligence, or proposed for review. These sources must not silently acquire the same level of trust.

Where appropriate, identity information should preserve its source, verification status, assurance, time, and lifecycle so that downstream services can make decisions according to the quality and purpose of the information rather than treating every stored attribute as equally authoritative.

Identity verification therefore strengthens confidence in an identity or identity claim; it does not transform verification into authorization. A verified identity remains subject to participation, policy, authority, authorization, lifecycle, and access controls.

Sensitive identity information must be handled according to purpose limitation, data minimization, security, privacy, retention, and applicable legal or contractual requirements. Biometric or other highly sensitive evidence, where legitimately supported, must not be treated as a general-purpose identity database or as a substitute for the broader identity and authorization model.

## Identity across the ecosystem

LegaX must support identity continuity across:

- people and households;
- communities and organizations;
- providers and workers;
- services and service operators;
- buildings, units, places, and facilities where an identity relationship is required;
- devices, applications, machines, and systems;
- external providers and networks;
- economic, operational, and service relationships.

External systems may provide identity assertions, identifiers, credentials, verification results, or other evidence. Such integrations must be mapped into LegaX through explicit contracts and provenance rather than allowing an external provider to redefine the canonical LegaX Identity or silently create authority within the ecosystem.

Likewise, a LegaX Identity may be represented to an external system through an integration-specific identifier or credential without exposing the entire identity record. Integration boundaries must preserve the distinction between identity recognition, authentication, authorization, and data sharing.

## Identity lifecycle

Identity is a lifecycle-managed domain object. Creation, association, verification, modification, suspension, restriction, deactivation, merger where legitimately supported, separation or correction, and other consequential changes must follow defined transitions and preserve appropriate history and evidence.

An identity must not be silently duplicated because the same entity enters a new community, organization, service, device, or geographic context. Where duplicate or conflicting identity representations are detected, resolution must be governed, evidence-based, auditable, and reversible where technically and legally appropriate.

Deactivation or restriction of an identity must not erase the historical evidence required to preserve legitimate accountability. At the same time, retention must remain bounded by applicable purpose, privacy, legal, security, and governance requirements.

## Identity and authority

Identity answers **who or what is being recognized**.

It does not answer:

- what the entity is allowed to do;
- what resources it controls;
- which community it governs;
- which services it may use;
- whether a requested action is currently authorized;
- whether a physical or digital resource should be opened, changed, transferred, paid for, or otherwise affected.

Those decisions belong to participation, administration, authority, policy, authorization, access, and the relevant domain lifecycle.

This separation is mandatory because LegaX connects identity to consequential physical and economic systems. A recognized identity must never become an unrestricted system actor merely because it exists, has been verified, or has authenticated successfully.

## Identity and intelligence

LegaX intelligence may assist in identity-related processes by detecting duplicates, identifying inconsistencies, extracting information from evidence, matching records, identifying potential fraud or anomalies, or proposing identity relationships for review.

Such outputs remain intelligence-derived assertions until accepted through the appropriate deterministic validation, verification, governance, or authorization process. AI must not manufacture identity, silently merge identities, assign authority, or make a consequential identity decision outside the defined governance and lifecycle controls.

## Identity contract

The LegaX Identity model must therefore preserve these invariants:

1. **Identity is distinct from authentication.**
2. **Identity is distinct from account.**
3. **Identity is distinct from participation.**
4. **Identity is distinct from role, capability, authority, authorization, and access.**
5. **One underlying entity should have identity continuity across legitimate contexts rather than fragmented service-specific identities.**
6. **Identifiers are references, not automatically proof.**
7. **Identity attributes must retain appropriate provenance and assurance.**
8. **Verification increases confidence but does not grant authority.**
9. **External identity assertions do not automatically become LegaX authority.**
10. **Identity changes are lifecycle-governed and auditable.**
11. **Sensitive identity information is purpose-bound, minimized, protected, and appropriately retained.**
12. **AI-derived identity information is non-authoritative until accepted through the appropriate control process.**
13. **Identity must remain extensible to new entity types, technologies, jurisdictions, and integrations without weakening its semantic boundaries.**
14. **The existence of an identity never constitutes authorization for a consequential action.**

## Relationship to Definition 01

This definition implements the identity principle established by the LegaX Product Constitution: **identity establishes who or what participates; it does not by itself grant authority.** It provides the canonical boundary for all subsequent definitions of Authentication, Account, Administration, Participation, Context, Role, Capability, Authority, Authorization, Access, Credentials, Policy, Lifecycle, Events, Evidence, Intelligence, and LegaServices.

**Status:** Foundational domain contract — definition and semantic model; implementation intentionally deferred.
