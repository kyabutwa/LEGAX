# LegaX — Administration Model

## 05 — Administration

**Canonical definition**

Administration in LegaX is the governed system of managing authority structures, scopes, assignments, policies, delegation, configuration, approvals, and operational governance through which an authorized entity may establish, change, review, suspend, or revoke control relationships within a defined context, without making administration itself equivalent to unrestricted system access or automatic authorization for consequential actions.

Administration answers **“who is entitled to govern or manage which defined scope, under which rules, through which delegated responsibilities, approvals, and lifecycle controls?”** It does not answer merely **“who is logged in?”**, **“who is recognized?”**, or **“who can technically reach a system?”**

Administration is therefore a governance function built on Identity, Authentication, Account, Participation, Context, Role, Capability, Authority, Policy, Lifecycle, Authorization, Access, Events, and Evidence. An administrative action remains subject to the same separation of responsibility and authorization principles that govern every other consequential operation.

## Administration and Identity

Administration does not create Identity.

Identity establishes the recognized entity. Administration establishes whether that entity, within an applicable governance structure, is entitled to manage a defined administrative scope.

An administrator must therefore be represented by an existing governed identity relationship rather than by an arbitrary account flag or technical privilege. Administrative responsibility may belong to a person, organization, community, provider, service, or other legitimate actor where the governing model permits it.

The existence, verification, or authentication of an Identity does not make that entity an administrator.

## Administration and Account

An Account provides the governed interaction and security boundary through which an authenticated actor operates.

Administration determines whether that actor is entitled to perform administrative operations within a defined scope. An Account property such as `is_admin=true`, an account type, subscription, verification status, or authentication method must never serve as the canonical source of administrative authority.

Administrative scope, assignment, delegation, restrictions, approvals, and lifecycle must remain explicit and attributable.

A compromised, suspended, restricted, or deactivated Account must not retain administrative effect beyond the validity permitted by the applicable security and lifecycle controls.

## Administration and Participation

Administration is contextual.

An entity may participate in a community, organization, service, place, or other context without having administrative responsibility there. The same entity may hold administrative responsibility in one context while having a different relationship in another.

Participation establishes the contextual relationship. Administration governs whether the participant may manage defined structures within that relationship.

Participation therefore must not silently imply administration, and administration must not be inferred merely because an entity is a participant, resident, provider, worker, member, owner, or service user.

## Administrative scope

Every administrative responsibility must have a defined scope.

A scope may cover, where legitimately supported:

- a community;
- an organization;
- a service;
- a building, unit, place, facility, or infrastructure domain;
- a resource class;
- a workspace;
- a governance function;
- a geographic or organizational boundary;
- a specific administrative object;
- another explicitly defined domain boundary.

Scope must be represented explicitly enough to determine what the administrator can manage and what remains outside that responsibility.

An administrator with authority over one scope must not automatically gain administrative control over sibling, parent, child, unrelated, or future scopes unless the governing model explicitly establishes that relationship.

## Administration and Role

A Role describes a contextual responsibility or function. Administration may use roles to structure administrative responsibilities, but a role name alone is not sufficient proof of authority.

For example, titles such as owner, manager, moderator, community administrator, facility manager, finance administrator, or service operator must resolve through explicit governed assignments, scope, policy, and lifecycle rules.

Role membership may provide inputs to authority evaluation; it must not bypass it.

## Administration and Capability

A Capability describes an ability that may be available to an actor or role. Administration may assign or manage capabilities where the applicable authority permits it.

A capability is not itself a grant of authority to use that capability in every context.

Administrative systems must therefore distinguish:

**capability available → authority to exercise it → authorization for the requested operation → controlled execution.**

This prevents administrative configuration from becoming an implicit universal permission system.

## Administration and Authority

Administration is one of the primary mechanisms through which authority structures are governed, but administration is not identical to authority.

Authority answers whether an actor or governing structure is entitled to control or decide within a defined scope. Administration manages the structures through which those authority relationships are established, assigned, delegated, reviewed, changed, suspended, and revoked.

Administrative authority must itself come from an existing governed authority relationship.

This creates a recursive safety boundary:

**no administrative authority without an authority source; no authority change without an authorized governance path.**

A system must not permit an administrator to manufacture unrestricted authority merely because the administrator can access an administrative interface.

## Administrative assignment and delegation

Administrative responsibility must be explicitly assigned.

An assignment should preserve, as applicable:

- subject identity;
- relevant participant or participation relationship;
- administrative role;
- administrative scope;
- capabilities or permitted administrative operations;
- authority source;
- assigning authority;
- delegation chain where applicable;
- effective period;
- conditions and constraints;
- lifecycle state;
- approval or review requirements;
- provenance and evidence.

Delegation must be bounded. A delegated administrator must not automatically delegate more authority than the source authority permits.

Where delegation is revocable, expiration, revocation, suspension, and inheritance behavior must be explicit.

## Administrative operations

Administration may include operations such as:

- assigning or removing administrative responsibility;
- configuring governed resources or services;
- managing approved roles and capabilities;
- establishing or modifying policies;
- initiating or approving lifecycle transitions;
- managing organizational or community structures;
- configuring integrations within an authorized scope;
- managing service configuration;
- initiating reviews or verification;
- managing controlled operational settings;
- reviewing events, evidence, and governance state.

Each consequential administrative operation must still pass the applicable authorization and execution controls.

Administrative interfaces are therefore not trusted zones where authorization may be skipped.

## Administration and Authorization

Authorization remains the runtime decision for a specific requested operation against a specific target.

Administration provides governed inputs to authorization, including administrative assignments, scopes, delegation, policies, configuration, and lifecycle state.

The canonical relationship is:

**Identity → Authentication → Account → Participation/Context → Administrative authority → Policy/capability evaluation → Authorization → Access/Action → Event/Evidence**

A successful login to an administrative interface is not authorization to perform every administrative operation visible in that interface.

An administrator may be authorized to view a resource but not modify it, configure a service but not change governance, assign a role but not transfer ownership, or approve a transition but not execute it, depending on policy and separation-of-duties requirements.

## Separation of duties and governance controls

LegaX must support separation of duties where the consequences of an operation require independent control.

Policies may require:

- maker/checker approval;
- multiple administrators;
- independent review;
- verification;
- time-limited elevation;
- dual authorization;
- conflict-of-interest restrictions;
- cooling-off periods;
- additional authentication;
- explicit confirmation for high-impact changes.

No administrative design should assume that one administrator must always be able to create, approve, and execute every consequential change.

Where policy requires independent control, the same actor, account, service, or automated agent must not silently satisfy all required roles.

## Administrative lifecycle

Administrative relationships are lifecycle-managed.

Relevant states may include, where applicable:

- proposed;
- pending approval;
- active;
- restricted;
- suspended;
- expired;
- revoked;
- rejected;
- superseded;
- closed.

The exact state graph may vary by domain, but assignments, delegations, policies, administrative scopes, and governance configurations must not rely on permanent implicit validity.

Administrative changes must preserve appropriate history, including who initiated the change, who authorized or approved it, what scope was affected, what state changed, when it changed, and what evidence supported the decision.

## Administration and external systems

External organizations, providers, infrastructure systems, identity providers, devices, and service platforms may participate in administrative operations through explicit integration contracts.

External administrative status must not automatically become LegaX administrative authority.

An integration must define, as applicable:

- external actor and issuer;
- scope of representation;
- authority source;
- permitted administrative operations;
- assurance;
- provenance;
- lifecycle;
- revocation behavior;
- data-sharing boundaries;
- conflict and precedence rules;
- audit and evidence requirements.

External systems may remain authoritative for resources they independently govern while LegaX preserves a clear boundary around what authority is recognized inside LegaX.

## Administration and intelligence

LegaX intelligence may assist administration by identifying configuration inconsistencies, detecting anomalous administrative activity, recommending assignments, summarizing governance state, identifying conflicts, forecasting operational impact, preparing proposals, or prioritizing review.

Intelligence remains non-authoritative by default.

AI must not independently create administrative authority, expand scope, bypass approval, approve its own consequential proposal, suppress required review, or silently change governance state.

Where AI prepares an administrative proposal, the initiating actor, evidence, policy basis, model or automation involvement, approval path, and resulting decision must remain distinguishable and auditable.

## Administration and consequential actions

Administrative operations can themselves be consequential.

Changing a role assignment, authority scope, policy, access rule, service configuration, payment control, physical-access configuration, or governance structure may materially affect people, resources, services, or communities.

Therefore:

**administrative interface ≠ administrative authority ≠ authorization ≠ execution.**

The complete control path remains:

**Authenticated actor → Account/session → Identity → Participation/Context → Administrative scope and authority → Capability/policy evaluation → Authorization decision → Controlled execution → Event/Evidence**

No administrative shortcut may bypass the authorization, lifecycle, concurrency, idempotency, security, or audit controls applicable to the underlying operation.

## Administration contract

The LegaX Administration model must preserve these invariants:

1. **Administration is distinct from Identity.**
2. **Administration is distinct from Authentication.**
3. **Administration is distinct from Account.**
4. **Administration is distinct from Participation.**
5. **Administration is distinct from Role and Capability.**
6. **Administration is distinct from Authority and Authorization.**
7. **Every administrative responsibility has an explicit scope.**
8. **Administrative responsibility is established through governed assignment, delegation, policy, and lifecycle rather than account flags or interface visibility.**
9. **Participation does not automatically create administrative authority.**
10. **Administrative authority must itself originate from a governed authority source.**
11. **Delegation cannot exceed the authority granted to the delegating actor.**
12. **Administrative operations remain subject to runtime authorization and controlled execution.**
13. **High-impact operations may require separation of duties, additional authentication, review, verification, or multiple approvals.**
14. **Administrative relationships and configurations are lifecycle-managed, attributable, and auditable.**
15. **External administrative assertions require explicit trust, scope, provenance, authority, lifecycle, and reliance boundaries.**
16. **AI and automation may assist administration but cannot independently manufacture, expand, approve, or execute consequential authority changes outside defined controls.**
17. **Administrative scope must prevent unintended inheritance across unrelated contexts and resources.**
18. **Administrative interfaces must never be treated as authorization bypass zones.**
19. **Administrative changes must preserve sufficient events and evidence to reconstruct what changed, under whose authority, within what scope, and when.**
20. **Administration semantics must remain extensible to new governance structures, jurisdictions, services, technologies, and integrations without weakening its boundary.**
21. **No administrative role, account property, authentication result, capability, or interface access, by itself, constitutes authorization for a consequential action.**

## Relationship to Definitions 01–04

This definition extends the Product Constitution and the Identity, Authentication, and Account models without redefining them.

- **Identity** establishes **who or what LegaX recognizes**.
- **Authentication** establishes **whether the current actor has successfully presented or controlled an accepted authentication mechanism under defined conditions**.
- **Account** establishes **the governed LegaX interaction and security relationship through which that authenticated actor operates**.
- **Administration** establishes and governs **the scoped structures, assignments, delegation, policies, approvals, and configurations through which authorized entities manage LegaX contexts and resources**.
- **Authorization** will determine **whether a specific administrative or domain action is permitted against a specific target under the applicable authority, policy, lifecycle, security, and contextual conditions**.

Administration therefore becomes the governance bridge between contextual authority structures and the runtime controls that authorize and execute consequential operations. It must remain scoped, attributable, lifecycle-managed, auditable, and subordinate to the foundational separation between recognition, authentication, authority, authorization, access, and execution.

**Status:** Foundational domain contract — definition and semantic model; implementation intentionally deferred.
