# LegaX — Authentication Model

## 03 — Authentication

**Canonical definition**

Authentication in LegaX is the controlled process of establishing sufficient confidence that an actor currently attempting to interact with the ecosystem is operating through an accepted account, credential, authentication factor, session, or external authentication assertion associated with the claimed subject, under defined assurance, security, lifecycle, and contextual conditions, without by itself establishing identity ownership, participation, authority, authorization, or access to any consequential resource.

Authentication answers **“who or what is currently presenting or controlling an accepted authentication mechanism?”** It does not answer **“what may this actor do?”** Those questions remain separated by the Identity, Account, Participation, Authority, Authorization, Access, Policy, and Lifecycle models.

Authentication is therefore a security boundary and confidence-establishment process, not a permission system. A successful authentication result may be consumed by downstream controls, but no downstream service may interpret successful authentication alone as permission to perform a consequential action.

## Authentication and Identity

Authentication and Identity are related but distinct.

Identity is the governed representation of the entity LegaX recognizes. Authentication establishes confidence that the current actor has successfully presented or controlled an accepted authentication mechanism associated with an account or identity relationship.

An authentication event must therefore not silently redefine the canonical Identity. Authentication may establish or refresh an association between a current actor, an Account, and an Identity according to explicit identity-linking rules, but it must not create competing identities merely because different authentication mechanisms or providers are used.

An authenticated actor may still have incomplete, disputed, restricted, suspended, or insufficient identity information. Conversely, an Identity may exist without having an active authenticated session.

## Authentication and Account

An Account represents the platform relationship through which an authenticated actor interacts with LegaX. Authentication operates against an Account or an explicitly supported external authentication relationship; it does not make the Account equivalent to the underlying Identity.

An Account may have one or more supported authentication methods, credentials, sessions, recovery mechanisms, or external authentication relationships according to the security model. These mechanisms must remain attributable to the Account and governed by their own lifecycle.

Authentication must not be used to infer that an Account owns every attribute associated with an Identity, nor that authentication of one Account automatically authenticates every account, identity relationship, device, service, or external system associated with the same entity.

## Authentication factors and methods

LegaX may support multiple authentication methods because no single mechanism is appropriate for every actor, device, risk level, jurisdiction, or service.

Supported methods may include, where legitimately implemented and appropriate:

- passwords or passphrases;
- passkeys and cryptographic authenticators;
- hardware security keys;
- device-bound credentials;
- one-time codes or approved recovery factors;
- verified external identity-provider assertions;
- certificate- or key-based system authentication;
- approved biometric authentication mechanisms exposed through a trusted platform or specialized integration;
- QR, NFC, or other possession-based mechanisms where their security properties are explicitly defined;
- service-to-service credentials for authorized non-human actors.

The existence of a method in the ecosystem does not make it universally acceptable. Each method must have defined security properties, lifecycle controls, assurance characteristics, recovery behavior, and applicable risk boundaries.

Raw biometric data must not be required merely because a platform supports biometric authentication. Where a device or trusted provider performs biometric matching locally, LegaX should consume the resulting authentication assertion rather than treating LegaX as a general-purpose biometric repository. Specialized biometric modalities such as palm or hand authentication require an explicitly governed hardware or provider integration and must not be assumed to exist as generic mobile operating-system capabilities.

## Authentication assurance

Authentication must produce an assurance result appropriate to the security sensitivity of the operation.

Assurance may consider factors including:

- authentication method and cryptographic strength;
- possession and control of the authentication factor;
- device or environment trust;
- session integrity;
- credential lifecycle state;
- recent authentication time;
- recovery history;
- authentication anomalies or risk signals;
- external provider assurance;
- required step-up authentication;
- applicable policy and jurisdictional requirements.

LegaX should support explicit assurance levels rather than treating every successful authentication as equivalent.

A higher authentication assurance may satisfy a prerequisite for an authorization decision, but it does not itself create authorization. Authorization must still evaluate the requested action, target, participant, context, authority, policy, lifecycle, and other applicable conditions.

## Authentication sessions

Authentication establishes a bounded security context through which subsequent requests may be associated with an authenticated actor.

Sessions must be governed by lifecycle controls including creation, validation, expiration, revocation, renewal, inactivity handling, device or credential changes, security events, and explicit logout where applicable.

A session is not permanent proof of identity or authority. The validity of a session may expire or become insufficient when risk, policy, credential state, identity state, account state, or requested operation changes.

Sensitive or consequential operations may require reauthentication or step-up authentication even when an existing session remains valid.

## Authentication lifecycle

Authentication mechanisms, credentials, sessions, recovery factors, and external assertions are lifecycle-managed security objects.

Relevant lifecycle conditions may include:

- active;
- pending;
- verified;
- challenged;
- expired;
- revoked;
- suspended;
- compromised;
- replaced;
- recovery-required;
- disabled.

Transitions must be governed and auditable. A revoked or compromised authentication mechanism must not continue to establish valid authentication merely because an old session or cached assertion remains available beyond its permitted lifetime.

Credential recovery is also an authentication security process. Recovery must not become an uncontrolled alternative path that weakens the assurance required for the account or operation being recovered.

## Step-up and risk-sensitive authentication

Authentication requirements may change according to the sensitivity and risk of the requested operation.

For example, a low-risk interaction may accept an existing session, while a consequential payment, credential change, authority-management operation, sensitive-data operation, physical-access operation, or security-control change may require stronger or more recent authentication.

Risk signals may trigger additional authentication requirements, session restrictions, review, or denial. Risk intelligence may inform these controls, but AI or probabilistic risk scoring must not silently replace deterministic security policy or authorization requirements.

Step-up authentication establishes additional confidence in the current actor. It does not bypass authorization, policy, lifecycle, or governance controls.

## External authentication providers

LegaX may integrate with external authentication providers, identity providers, device platforms, payment networks, enterprise systems, or other trusted systems.

External authentication results must be accepted only through explicit integration contracts defining:

- issuer or provider identity;
- assertion type;
- verification method;
- assurance level;
- audience and intended use;
- issuance and expiration;
- revocation or status checking where supported;
- mapping to LegaX Account and Identity relationships;
- permitted reliance boundaries;
- provenance and audit requirements.

An external provider's successful authentication does not automatically grant LegaX authority, participation, role, capability, authorization, or access.

External authentication must therefore remain an input to LegaX security decisions rather than becoming a competing source of truth for authorization.

## Non-human authentication

LegaX must support authentication for non-human actors where the ecosystem requires it, including services, devices, machines, applications, agents, integrations, and infrastructure systems.

Non-human authentication must use credentials or cryptographic mechanisms appropriate to the actor and environment and must preserve:

- actor identity;
- credential provenance;
- intended audience;
- scope;
- lifecycle;
- rotation or replacement;
- revocation;
- session or request attribution;
- service-to-service authorization boundaries.

A successfully authenticated service, device, or AI agent does not receive human authority merely because it is authenticated. Its authority must come from explicit system, organizational, delegated, or service-level authorization.

## Authentication and consequential actions

Authentication is one input into the security and authorization path for consequential actions.

The canonical separation is:

**Authentication → authenticated actor/session → identity and account association → applicable participation/context → authority/capability/policy evaluation → authorization decision → access/action → event/evidence**

Authentication must never shortcut this sequence by directly opening a door, transferring funds, changing governance, granting access, modifying critical identity data, or executing another consequential operation unless the complete downstream authorization and execution controls independently permit the action.

This boundary applies equally to human actors, services, devices, external providers, automation, and AI agents.

## Authentication and intelligence

LegaX intelligence may assist authentication security by detecting anomalies, identifying unusual sessions, correlating security signals, prioritizing challenges, detecting suspected compromise, or recommending additional verification.

These outputs are security signals, not independent authority.

An AI or automated system must not authenticate an actor solely by inference where the applicable policy requires a defined authentication mechanism, nor may it silently weaken authentication requirements for convenience or availability.

Where automated systems participate in authentication decisions, their role, evidence, confidence, fallback behavior, and limits must be explicitly governed and auditable.

## Authentication security and privacy

Authentication systems must protect secrets, credentials, sessions, recovery mechanisms, and authentication evidence against unauthorized disclosure, replay, substitution, impersonation, theft, and misuse.

Secrets should not be stored or transmitted in recoverable form when a safer representation is available. Authentication data must be minimized and retained only according to legitimate security, operational, legal, and governance requirements.

Authentication telemetry must be protected from becoming an unrestricted surveillance mechanism. Security monitoring should be proportionate to the purpose of protecting accounts, identities, services, resources, and the ecosystem.

Authentication failures, suspicious activity, and security events should produce appropriate events and evidence without exposing unnecessary sensitive information.

## Authentication contract

The LegaX Authentication model must preserve these invariants:

1. **Authentication is distinct from Identity.**
2. **Authentication is distinct from Account.**
3. **Authentication is distinct from Participation.**
4. **Authentication is distinct from Authority.**
5. **Authentication is distinct from Authorization.**
6. **Authentication is distinct from Access.**
7. **A successful authentication establishes confidence under defined conditions; it does not automatically grant permission.**
8. **Authentication methods have explicit security properties, assurance characteristics, and lifecycle states.**
9. **Sessions are bounded, revocable, and lifecycle-managed.**
10. **Sensitive or consequential operations may require step-up or reauthentication.**
11. **Recovery must not silently weaken the required security assurance.**
12. **External authentication assertions require explicit trust, provenance, assurance, audience, and reliance boundaries.**
13. **Non-human actors require authentication mechanisms appropriate to their type and must not inherit human authority merely by authenticating.**
14. **Biometric authentication must not require a centralized general-purpose biometric database.**
15. **AI and risk intelligence may assist authentication security but cannot manufacture authentication or bypass required controls.**
16. **Authentication state and security events must remain attributable and auditable.**
17. **Authentication must remain extensible to new methods, devices, technologies, jurisdictions, and integrations without changing its semantic boundary.**
18. **No authentication result, by itself, constitutes authorization for a consequential action.**

## Relationship to Definitions 01 and 02

This definition implements the Product Constitution's separation of authentication from authorization and the Identity Model's separation of authentication from identity.

Identity establishes **who or what LegaX recognizes**.

Authentication establishes **whether the current actor has successfully presented or controlled an accepted authentication mechanism associated with an account or identity relationship under defined conditions**.

Authorization later determines **whether that authenticated actor is permitted to perform a specific requested action against a specific target under the applicable context, authority, policy, lifecycle, and security conditions**.

The distinction is mandatory across the LegaX ecosystem and must be preserved by Accounts, Participation, Administration, Authorization, Access, Credentials, LegaServices, external integrations, and intelligence systems.

**Status:** Foundational domain contract — definition and semantic model; implementation intentionally deferred.
