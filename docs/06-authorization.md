# LegaX — Authorization Model

## 06 — Authorization

**Canonical definition**

Authorization in LegaX is the governed runtime decision that determines whether a specific authenticated actor, operating through an applicable Account and contextual participation, is permitted to perform a specific requested action against a specific target under the applicable authority, capability, policy, lifecycle, security, and other decision conditions, producing an attributable and enforceable allow, deny, or otherwise governed decision without granting authority merely by authentication, identity, capability, or interface access.

Authorization answers **“is this actor permitted to perform this specific operation against this specific target under the conditions that apply now?”** It is therefore a decision about a concrete operation, not a permanent label attached to an identity, account, role, or capability.

Authorization is the boundary between governed authority and consequential execution. A successful authorization decision does not itself execute an action or provide unrestricted future access; it permits only the operation and scope established by the decision, subject to its validity, lifecycle, policy, security, and execution conditions.

## Authorization and Identity

Identity establishes who or what LegaX recognizes.

Authorization consumes identity as one of its inputs but must never infer permission merely from identity existence, verification, attributes, identifiers, or identity assurance.

A verified identity may still be unauthorized for a requested action. An identity may also be authorized for one operation while being unauthorized for another.

Identity therefore answers **who or what is recognized**; authorization answers **whether that recognized actor may perform this requested operation now**.

## Authorization and Authentication

Authentication establishes confidence that the current actor is operating through an accepted authentication mechanism under defined conditions.

Authorization consumes the authenticated actor and relevant authentication context, but successful authentication does not constitute authorization.

Authorization may require stronger authentication, recent authentication, step-up authentication, trusted-device state, credential status, session integrity, or other security conditions for sensitive or consequential operations.

No authentication method, including password, passkey, device authentication, QR, NFC, approved biometric assertion, external authentication, or service credential, may independently become a universal authorization mechanism.

## Authorization and Account

An Account provides the governed platform interaction and security relationship through which an authenticated actor operates.

Account state, session state, recovery state, credential state, security posture, and authentication assurance may affect an authorization decision.

However, an active Account, valid session, subscription, verification badge, account type, or account property must never itself constitute authorization.

Suspended, restricted, compromised, locked, deactivated, or otherwise invalid Account/session conditions must be enforced by authorization wherever they affect the requested operation.

## Authorization and Administration

Administration governs authority structures, assignments, scopes, delegation, policies, configuration, approvals, and governance.

Authorization evaluates whether the current requested operation is permitted using those governed structures as inputs.

An administrative interface does not bypass authorization. An administrator may have authority to manage one scope but not another, to view but not modify, to propose but not approve, or to approve but not execute.

Administrative authority must therefore be resolved into a concrete authorization decision for each consequential operation.

## Authorization and Participation

Participation establishes the contextual relationship between an Identity/Participant and a community, organization, service, place, workspace, resource domain, or other defined context.

Authorization must evaluate the participation relationship relevant to the requested operation.

Participation alone does not grant permission. A participant may be a resident, provider, worker, visitor, member, client, owner, operator, or another contextual participant while remaining unauthorized for a particular action.

The same identity may receive different authorization decisions in different contexts without requiring duplicate identities.

## Authorization and Context

Context determines which environment, relationship, purpose, resource domain, temporal condition, jurisdiction, or operational situation is relevant to the request.

Context is an input to authorization, not an authority source.

Authorization must not treat the mere presence of a person or system within a context as permission. Context may narrow, modify, or invalidate an otherwise available capability or authority according to policy and lifecycle.

Contextual factors may include:

- community or organization;
- place, building, unit, facility, or resource;
- service or workspace;
- relationship and participation state;
- time and effective period;
- jurisdiction;
- transaction or operational state;
- device or network conditions;
- risk and security signals;
- emergency or exceptional operating state where explicitly governed.

## Authorization and Role

A Role describes a contextual responsibility or function.

Roles may provide inputs to authorization, but a role name must not be treated as a universal permission.

Authorization must evaluate the governed role assignment, its scope, lifecycle, applicable capabilities, authority source, and policy.

An actor may hold multiple roles simultaneously, and conflicting roles may require separation-of-duties controls. Role membership must not bypass those controls.

## Authorization and Capability

A Capability describes an ability that may be available to an actor, role, service, device, or other legitimate subject.

Capability is not equivalent to authorization.

The distinction is:

**capability available → authority to exercise capability → policy evaluation → authorization decision → controlled action.**

A capability may be broad or reusable, while authorization is specific to the requested operation, target, context, and current conditions.

Possessing a capability must therefore never create unrestricted permission to exercise it against every target or in every context.

## Authorization and Authority

Authority establishes who or what is entitled to govern, control, decide, or act within a defined scope.

Authorization does not manufacture authority. It evaluates whether the requested operation is permitted under an existing and valid authority structure.

The authorization engine must therefore be able to establish the authority source relevant to the decision and reject requests where authority is absent, expired, suspended, revoked, exceeded, or otherwise invalid.

Delegated authority must remain bounded by the authority source and applicable delegation rules.

## Authorization inputs

A LegaX authorization decision should evaluate, as applicable:

- requesting actor;
- LegaX Identity;
- Account;
- authentication result and assurance;
- current session;
- Participant and Participation;
- Context;
- Role;
- Capability;
- Authority and authority source;
- administrative scope;
- requested action;
- target resource or subject;
- target state;
- applicable policy;
- credential state;
- lifecycle state;
- temporal constraints;
- jurisdictional requirements;
- security and risk conditions;
- separation-of-duties requirements;
- approval or review requirements;
- emergency or exceptional rules where explicitly governed;
- relevant external assertions and provenance;
- other domain-specific constraints.

The decision must use only information that is relevant and legitimately available for the requested purpose.

## Request, decision, and enforcement boundary

Authorization must distinguish at least three different stages:

1. **Authorization request** — a concrete actor requests permission to perform a defined operation against a defined target.
2. **Authorization decision** — LegaX evaluates the applicable inputs and produces a governed decision.
3. **Enforcement/execution** — the downstream Access or execution mechanism enforces the decision and performs the permitted operation if all execution conditions remain valid.

This distinction prevents authorization from becoming an uncontrolled execution mechanism.

A decision should be attributable and should preserve, where required:

- request identity;
- decision identifier;
- requested action;
- target;
- relevant scope;
- decision result;
- policy/version used;
- authority source;
- decision time;
- effective/expiry conditions;
- authentication/security assurance;
- relevant approvals or reviews;
- decision reason or reason code where appropriate;
- provenance;
- correlation/idempotency information;
- event/evidence references.

## Decision outcomes

LegaX authorization must be deny-by-default where no valid permission is established.

A decision model may support outcomes such as:

- **allow** — the requested operation is permitted under the evaluated conditions;
- **deny** — the operation is not permitted;
- **indeterminate** — required information or policy evaluation is unavailable or contradictory and execution must not proceed unless a separately governed fallback exists;
- **pending/requires approval** — the operation requires an additional governed approval, verification, or review before it can become executable.

The exact technical representation may evolve, but ambiguity must never be interpreted as permission for a consequential action.

## Scope and target specificity

Authorization must be specific enough to prevent unintended privilege expansion.

A decision must establish, directly or through governed policy, the relevant:

- actor;
- operation;
- target;
- scope;
- context;
- effective period;
- conditions.

Authorization to act on one resource must not silently authorize sibling, parent, child, unrelated, or future resources unless the governing policy explicitly establishes that scope.

Authorization to perform one action must not silently authorize another action merely because both actions are available through the same interface or service.

## Time, lifecycle, and revocation

Authorization is lifecycle-sensitive.

A previously valid authorization must not remain effective after its underlying authority, participation, credential, Account, policy, resource state, approval, or other required condition has expired, been revoked, suspended, or otherwise become invalid, unless an explicit and governed rule provides continued validity.

Time-bounded authorization must include effective and expiry conditions.

Long-lived permissions should not be treated as permanently valid merely because they were once granted.

Where immediate revocation is required, enforcement mechanisms must minimize stale authorization effects and define how cached or previously issued decisions are invalidated.

## High-impact and sensitive operations

Consequential operations require authorization proportionate to their impact.

Examples include:

- physical access;
- financial transfers or payment operations;
- identity or credential changes;
- governance changes;
- authority delegation;
- role or capability assignment;
- changes to critical infrastructure;
- access to highly sensitive information;
- legal or contractual commitments;
- destructive or irreversible operations.

Such operations may require stronger authentication, additional verification, multiple approvals, separation of duties, transaction limits, recent authorization, explicit confirmation, or other policy controls.

Convenience must not silently override required safeguards.

## Authorization, external systems, and providers

External providers, networks, payment rails, access systems, identity providers, devices, and other integrations may participate in authorization through explicit contracts.

An external system may be authoritative for a resource or operation it independently controls, but external authorization must not automatically become universal LegaX authorization.

Integration contracts must define, as applicable:

- issuer and authority source;
- represented actor;
- target/resource scope;
- action scope;
- assurance;
- provenance;
- validity period;
- revocation/status behavior;
- policy and precedence;
- permitted reliance;
- failure behavior;
- audit and evidence requirements.

LegaX must preserve the distinction between an external system saying **“this operation is authorized within my system”** and LegaX saying **“this operation is authorized within LegaX.”**

## Authorization and AI

LegaX intelligence may assist authorization by detecting anomalies, evaluating policy inputs, identifying missing information, recommending decisions, predicting risk, or preparing an authorization proposal.

AI output is not authority.

For consequential operations, AI may not independently manufacture authority, silently convert a recommendation into permission, bypass required policy, suppress required review, or authorize an operation merely because its confidence is high.

Where AI participates in an authorization workflow, the system must preserve the distinction between:

**AI signal/recommendation → governed policy evaluation → authorized decision → controlled execution.**

The use of AI in authorization must remain attributable, bounded, auditable, and subject to deterministic safety controls appropriate to the operation.

## Authorization consistency and concurrency

Authorization decisions must be evaluated against a sufficiently current representation of the relevant authority, policy, lifecycle, and target state.

Where the target or authority can change concurrently, the authorization result must not be assumed valid indefinitely.

For consequential operations, authorization and execution should use appropriate concurrency controls, state checks, versioning, expiry, transaction boundaries, or equivalent mechanisms so that an action authorized against one state cannot silently execute against an incompatible state.

A stale authorization decision must not override a newer revocation, restriction, lifecycle transition, or policy change when the applicable rules require re-evaluation.

## Authorization and idempotency

Authorization requests and consequential execution must support idempotency where duplicate requests could produce repeated effects.

A retried authorization or execution request must not create unintended duplicate actions, payments, state transitions, access grants, or governance changes.

Decision identifiers, request identifiers, idempotency keys, and event correlations should be used where appropriate to preserve a traceable relationship between the request, decision, execution, and resulting evidence.

## Authorization and events/evidence

Every consequential authorization decision must produce sufficient event and evidence information to support accountability, investigation, dispute resolution, security review, compliance, and future intelligence.

Evidence should allow LegaX to determine, where legitimately retained:

- who or what requested the operation;
- what was requested;
- against which target;
- in which context and scope;
- under which authority;
- under which policy/version;
- what decision was made;
- when it was made;
- what security and verification conditions applied;
- whether additional approval or review was required;
- whether execution occurred;
- what final outcome resulted.

Sensitive evidence must remain purpose-bound, access-controlled, minimized, and retained according to applicable requirements.

## Authorization failure and safe behavior

When required authorization information is unavailable, contradictory, expired, or invalid, the default behavior for consequential operations must be non-execution.

Services must not convert authorization failures into permissive behavior merely because an upstream system is unavailable.

Any fail-open behavior must be exceptional, explicitly governed, narrowly scoped, time-bounded, risk-assessed, and appropriate to the resource and jurisdiction. Where fail-open is not explicitly authorized, the system must fail closed.

## Authorization contract

The LegaX Authorization model must preserve these invariants:

1. **Authorization is distinct from Identity.**
2. **Authorization is distinct from Authentication.**
3. **Authorization is distinct from Account.**
4. **Authorization is distinct from Administration.**
5. **Authorization is distinct from Participation and Context.**
6. **Authorization is distinct from Role and Capability.**
7. **Authorization is distinct from Authority.**
8. **Authorization is a runtime decision for a specific requested action against a specific target under defined conditions.**
9. **Authorization is deny-by-default when permission is not established.**
10. **Authentication success does not constitute authorization.**
11. **Identity verification does not constitute authorization.**
12. **A role or capability does not by itself constitute authorization.**
13. **Authorization cannot manufacture or expand authority.**
14. **Authorization scope must be explicit enough to prevent unintended privilege expansion.**
15. **Authorization decisions are subject to policy, lifecycle, security, context, and applicable temporal conditions.**
16. **Expired, revoked, suspended, or otherwise invalid authority or prerequisites must not remain effective beyond their governed validity.**
17. **High-impact operations may require step-up authentication, verification, review, multiple approvals, separation of duties, or other stronger controls.**
18. **External authorization assertions require explicit trust, scope, provenance, validity, and reliance boundaries.**
19. **AI and automation may assist authorization but cannot independently manufacture authority or bypass required controls.**
20. **Authorization and execution must remain separate and independently enforceable.**
21. **Consequential authorization must account for relevant concurrency and target-state changes.**
22. **Duplicate requests must not create unintended duplicate consequential effects.**
23. **Authorization decisions and consequential outcomes must remain attributable and auditable through appropriate events and evidence.**
24. **Missing, contradictory, or stale authorization information must not be interpreted as permission for consequential operations.**
25. **Authorization semantics must remain extensible to new domains, services, resources, jurisdictions, technologies, and integrations without weakening the authorization boundary.**
26. **No interface, service, provider, account property, credential, AI output, or administrative status, by itself, constitutes authorization for a consequential action.**

## Relationship to Definitions 01–05

This definition implements the Product Constitution's requirement that authorization be a runtime decision and extends the preceding foundational models without redefining them.

- **Identity** establishes **who or what LegaX recognizes**.
- **Authentication** establishes **whether the current actor has successfully presented or controlled an accepted authentication mechanism under defined conditions**.
- **Account** establishes **the governed LegaX interaction and security relationship through which that authenticated actor operates**.
- **Administration** governs **the authority structures, scopes, assignments, delegation, policies, approvals, and configurations that provide legitimate governance inputs**.
- **Authorization** determines **whether this actor is permitted to perform this specific requested action against this specific target under the applicable authority, capability, participation, context, policy, lifecycle, security, and other conditions**.
- **Access and execution**, defined later, will enforce and carry out an authorized operation without bypassing the authorization decision.

Authorization is therefore the central decision boundary connecting LegaX governance to consequential digital, physical, economic, and social operations. It must remain specific, contextual, deny-by-default, lifecycle-aware, attributable, auditable, and independent from the systems that merely authenticate actors or execute actions.

**Status:** Foundational domain contract — definition and semantic model; implementation intentionally deferred.
