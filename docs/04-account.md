# LegaX — Account Model

## 04 — Account

**Canonical definition**

An Account in LegaX is the governed platform relationship that enables a recognized actor to establish, maintain, and securely operate an interaction boundary with LegaX through authenticated credentials, sessions, security controls, preferences, recovery mechanisms, and account-level lifecycle state, while remaining distinct from the underlying Identity, participation, authority, authorization, and access relationships that determine what the actor may do.

An Account answers **“through which governed LegaX interaction relationship is this actor operating?”** It does not answer **“who is the entity in the real or digital world?”** and it does not answer **“what is the actor authorized to do?”**

Identity establishes the recognized entity. Authentication establishes confidence that the current actor controls an accepted authentication mechanism. The Account provides the controlled platform relationship through which that authenticated interaction occurs. Authorization separately determines whether a requested action is permitted.

## Account and Identity

An Account is not an Identity.

Identity is the persistent representation of the recognized entity. Account is the platform-facing security and interaction relationship associated with that entity.

An Account may be associated with a LegaX Identity through an explicit governed relationship. That association must preserve provenance, lifecycle, security, and applicable uniqueness rules.

The existence of an Account does not prove every attribute of the associated Identity. Likewise, an Identity may exist without an Account, active session, or current ability to authenticate.

LegaX must not create duplicate identities merely because an entity has multiple accounts, authentication methods, devices, external providers, or legitimate interaction relationships.

Where multiple accounts are legitimately supported for one Identity, their purpose, security boundaries, ownership relationship, and lifecycle must remain explicit. Account linking must never silently merge identities or grant authority.

## Account and Authentication

Authentication is the process that establishes confidence in the current actor. The Account is the governed interaction boundary against which that authentication relationship operates.

An Account may contain or reference multiple authentication mechanisms where permitted by policy, including passkeys, passwords, hardware authenticators, device-bound credentials, external identity-provider assertions, recovery factors, or other supported mechanisms.

Authentication success must produce an attributable authentication result associated with the relevant Account and session. The Account must not interpret authentication success as authorization.

Account security must therefore support mechanisms for credential enrollment, verification, replacement, revocation, recovery, session management, security notifications, suspicious-activity handling, and appropriate reauthentication.

## Account and Participation

An Account does not itself establish participation.

A person or other entity may have an Account while not participating in a particular community, organization, service, place, or other context. Conversely, a contextual participant relationship may exist as a domain relationship independently of the immediate existence of an active Account, where the applicable domain permits it.

Participation must be represented through the Participation model rather than inferred from account existence.

For example, signing into LegaX does not by itself make an entity a resident, provider, worker, member, administrator, visitor, owner, client, or participant in any particular context.

## Account and Authority

An Account does not itself create authority.

Authority is established through governed relationships, administration, delegation, scope, policy, and applicable lifecycle rules.

A field such as `is_admin=true`, an account type, a verified email address, an authentication method, a subscription tier, or the mere ownership of an Account must never be treated as a universal authority grant.

Administrative authority must remain contextual, scoped, attributable, lifecycle-managed, and auditable.

## Account and Authorization

Authorization is the runtime decision determining whether a specific requested action against a specific target is permitted.

The Account may supply security and authentication context to that decision, including:

- authenticated account;
- current session;
- authentication assurance;
- credential state;
- security posture;
- recent authentication;
- recovery or compromise state;
- applicable account restrictions.

But these inputs are only part of the authorization evaluation.

Authorization must still evaluate the relevant Identity, Participant, Participation, Context, Role, Capability, Authority, target, requested action, policy, lifecycle, and other applicable conditions.

A valid Account session therefore does not constitute a universal permission token.

## Account boundary and interaction context

The Account provides a controlled boundary for platform interaction.

It may contain or reference:

- account identifiers;
- linked Identity relationships;
- authentication methods;
- credentials or references to credential records;
- sessions;
- recovery mechanisms;
- security settings;
- notifications;
- preferences;
- consent or configuration records where applicable;
- account-level service settings;
- account lifecycle state;
- security events and evidence.

These account-level concerns must not absorb domain relationships that belong elsewhere.

For example, community membership belongs to Participation; administrative scope belongs to Administration and Authority; resource ownership belongs to the relevant domain; a physical door decision belongs to Authorization and Access; and a payment obligation belongs to the appropriate economic and payment domain.

The Account should therefore remain a stable interaction boundary rather than becoming a universal container for every relationship in the ecosystem.

## Account types and actors

LegaX must support account relationships appropriate to the actors it recognizes, while preserving a common semantic boundary.

Depending on the domain, an Account may be associated with:

- a person;
- an organization;
- a community;
- a provider;
- a worker;
- a service;
- a device;
- an application;
- a machine;
- an integration;
- another legitimate system actor.

The existence of different account types must not create incompatible identity or authorization models.

Human and non-human accounts may have different authentication, security, lifecycle, and operational requirements, but both must remain attributable and subject to explicit authorization boundaries.

A service or AI account must never be treated as a human identity merely because it can authenticate.

## Account lifecycle

An Account is a lifecycle-managed security and interaction object.

Relevant account states may include, where applicable:

- pending;
- active;
- restricted;
- suspended;
- locked;
- recovery-required;
- compromised;
- deactivated;
- closed.

The exact state graph may vary according to account type and policy, but every consequential state change must follow governed transition rules.

Account state must be evaluated by downstream security and authorization controls. A suspended, locked, compromised, or deactivated account must not continue to create valid interaction authority merely because an older credential, session, or cached client state remains available beyond its permitted validity.

Account closure must not automatically erase Identity or legitimate accountability records. Retention and deletion must follow applicable purpose, legal, privacy, security, and governance requirements.

## Account recovery

Recovery is part of the Account security lifecycle and must be designed as a controlled security operation rather than a convenience shortcut.

Recovery may require combinations of:

- existing authenticated sessions;
- verified recovery factors;
- approved authentication methods;
- identity evidence;
- trusted devices;
- external provider assertions;
- administrative or governed review;
- waiting periods or additional verification for high-risk changes.

Recovery requirements must be proportionate to the sensitivity of the account and the consequences of compromise.

Account recovery must not permit an actor to bypass required identity, authentication, authorization, authority, or security controls.

Changing a recovery factor, authentication method, security setting, or account ownership relationship may itself require step-up authentication, review, verification, or other authorization.

## Account security

Accounts must be protected against unauthorized takeover, credential theft, session theft, impersonation, recovery abuse, enumeration, replay, and unauthorized account linking.

Security controls should include, as appropriate:

- secure credential handling;
- session protection;
- credential rotation or replacement;
- revocation;
- rate limiting and abuse prevention;
- anomaly detection;
- security notifications;
- device/session management;
- reauthentication;
- account recovery controls;
- auditability;
- protection against unauthorized linking or unlinking.

Account security telemetry must be limited to legitimate security and operational purposes and protected according to applicable privacy and retention requirements.

## Account and external systems

LegaX may allow external identity providers, organizations, service providers, enterprise systems, payment systems, devices, and other networks to establish controlled account relationships.

External systems must not silently become the canonical LegaX Account.

External account or authentication assertions must be mapped through explicit integration contracts defining:

- external actor or account identifier;
- issuer;
- assertion type;
- assurance;
- audience;
- lifecycle;
- provenance;
- permitted operations;
- revocation or status behavior where supported;
- mapping to LegaX Identity and Account;
- data-sharing boundaries.

External account linkage must not automatically transfer external permissions into LegaX authority or authorization.

## Account and intelligence

LegaX intelligence may assist Account operations by detecting suspicious activity, identifying possible account takeover, finding duplicate account relationships, recommending recovery or security actions, detecting anomalous sessions, or prioritizing security review.

Intelligence outputs remain signals or proposals until accepted through the appropriate security, verification, governance, or authorization process.

AI must not silently create, merge, transfer, deactivate, recover, or grant authority to an Account outside defined deterministic controls and authorized workflows.

An AI agent may operate through its own governed account or service identity where required, but authentication of that agent does not grant it human authority.

## Account and consequential actions

The canonical security boundary remains:

**Authentication → Account/session → Identity association → Participation/context → Authority/capability/policy evaluation → Authorization decision → Access/action → Event/evidence**

An Account provides the secure interaction boundary for this flow. It must never become a shortcut around downstream controls.

No Account property, account type, authentication status, subscription, verification badge, device state, or session alone may authorize:

- opening or changing physical access;
- transferring or receiving funds;
- changing identity records;
- changing community or organizational governance;
- granting another actor authority;
- modifying critical security configuration;
- executing consequential service operations.

Such actions require the applicable authorization and execution controls.

## Account contract

The LegaX Account model must preserve these invariants:

1. **Account is distinct from Identity.**
2. **Account is distinct from Authentication.**
3. **Account is distinct from Participation.**
4. **Account is distinct from Authority.**
5. **Account is distinct from Authorization.**
6. **Account is distinct from Access.**
7. **An Account is a governed interaction and security boundary, not a universal domain container.**
8. **An Account may be associated with an Identity only through an explicit governed relationship.**
9. **Account existence does not establish participation in any context.**
10. **Account existence does not create authority.**
11. **Successful authentication of an Account does not constitute authorization for a consequential action.**
12. **Account sessions, credentials, recovery mechanisms, and security state are lifecycle-managed.**
13. **Account recovery must preserve the required security assurance and cannot bypass required controls.**
14. **External account relationships require explicit trust, provenance, assurance, lifecycle, and reliance boundaries.**
15. **Human and non-human Accounts may differ operationally but must remain attributable and authorization-bounded.**
16. **AI may assist Account security but cannot independently create, merge, recover, transfer, deactivate, or authorize an Account outside defined controls.**
17. **Account security data must be minimized, protected, auditable, and retained according to legitimate requirements.**
18. **Account semantics must remain extensible to new actor types, authentication technologies, jurisdictions, and integrations without changing the foundational boundary.**
19. **No Account property or session, by itself, grants authority or authorization for a consequential action.**

## Relationship to Definitions 01–03

This definition implements the Product Constitution's separation of identity, authentication, authority, authorization, and access and extends the Identity and Authentication models.

- **Identity** establishes **who or what LegaX recognizes**.
- **Authentication** establishes **whether the current actor has successfully presented or controlled an accepted authentication mechanism under defined conditions**.
- **Account** establishes **the governed LegaX interaction and security relationship through which that authenticated actor operates**.
- **Authorization** will determine **whether that actor is permitted to perform a specific requested action against a specific target under the applicable participation, context, authority, policy, lifecycle, and security conditions**.

The Account boundary must remain stable as LegaX expands across communities, organizations, services, physical infrastructure, commerce, work, devices, integrations, and future domains.

**Status:** Foundational domain contract — definition and semantic model; implementation intentionally deferred.
