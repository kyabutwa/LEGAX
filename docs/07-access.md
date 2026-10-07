# LegaX — Access Model

## 07 — Access

**Canonical definition**

Access in LegaX is the controlled enforcement process through which an already governed and valid authorization is translated into actual, bounded interaction with a digital, physical, economic, or other protected resource, using an appropriate access mechanism and current enforcement conditions, without creating, expanding, or replacing the underlying identity, authentication, authority, authorization, or governance that permits that interaction.

Access answers **“how is an authorized interaction actually admitted, enabled, constrained, or refused at the resource boundary?”** It does not answer who the entity is, whether the actor has authenticated, who holds authority, or whether the requested operation is authorized. Those responsibilities remain separated across Identity, Authentication, Account, Administration, Authority, Authorization, Policy, Credentials, Lifecycle, and the relevant domain.

Access is therefore the **enforcement boundary** between a governed authorization decision and the resource or system being protected. A successful authentication, valid credential, active account, role, capability, administrative status, AI recommendation, or access interface must never independently become permission to reach or affect a consequential resource.

## Access and the LegaX control path

For a consequential interaction, LegaX should preserve the following conceptual path:

**Identity → Authentication → Account → Participation/Context → Authority/Capability/Policy → Authorization → Access → Action → Event/Evidence**

Access consumes the applicable authorization result and enforces it at the resource boundary. It must not silently skip authorization because a credential appears valid or because a provider reports that a mechanism has been presented.

For operations where access and action are inseparable, the implementation must still preserve the semantic distinction between:

1. **Authorization** — whether the requested operation is permitted.
2. **Access enforcement** — whether the resource boundary admits the permitted interaction.
3. **Action/execution** — what consequential change actually occurs.

This distinction allows LegaX to remain accountable when authorization succeeds but a device fails, a door remains closed, a network rejects a request, a payment rail declines a transaction, or an execution system fails after access was permitted.

## Access is not authorization

Authorization establishes permission for a specific operation against a specific target under applicable conditions.

Access enforces that permission.

Therefore:

- authorization may be **allow** while access enforcement fails;
- access may be denied because an authorization is absent, expired, revoked, out of scope, or otherwise invalid;
- access enforcement may require additional technical conditions even after authorization, such as device state, credential freshness, target state, connectivity, anti-replay validation, or safety interlocks;
- an access mechanism must never broaden the authorization scope;
- a cached or previously issued access credential must not outlive the validity rules governing the authorization unless an explicit policy permits it.

Access enforcement must preserve the relationship to the exact actor, operation, target, scope, context, and validity conditions for which access was permitted.

## Access is not authentication

Authentication establishes sufficient confidence in the actor's current control of an accepted authentication mechanism.

Access uses authentication results where required, but authentication alone does not open, unlock, expose, modify, transfer, or otherwise affect a protected resource.

A Face ID result, fingerprint result, passkey, PIN, QR presentation, NFC presentation, device credential, physical credential, or biometric-provider assertion may be one input to the access path. None is a universal authorization mechanism.

Where an access policy requires step-up authentication, recent authentication, or a stronger assurance level, the access mechanism must not substitute a weaker method merely for convenience.

## Access across the real and digital world

LegaX Access must be extensible across different resource classes without changing the meaning of the access boundary.

### Physical access

Examples include:

- building entrances;
- gates;
- doors;
- elevators;
- parking areas;
- units;
- facilities;
- restricted zones;
- equipment;
- infrastructure;
- visitor-controlled areas.

Physical access enforcement may operate through locks, readers, controllers, cameras, certified biometric hardware, NFC systems, QR readers, access panels, or other approved mechanisms.

The physical mechanism is an enforcement adapter. It does not become the source of LegaX authority merely because it controls the physical actuator.

### Digital access

Examples include:

- applications;
- APIs;
- services;
- data;
- files;
- workspaces;
- devices;
- networks;
- administrative surfaces;
- protected functions.

Digital access may be enforced through tokens, sessions, API credentials, signed requests, service credentials, network controls, application policy, or other mechanisms appropriate to the resource.

### Economic and resource access

Access may also control entry into economic or resource operations, including payment, commerce, utility, booking, or other protected workflows.

In these cases, access to the transaction or resource does not itself authorize settlement or financial effect. LegaX must preserve the applicable authorization and execution controls, including provider/network rules and transaction state.

## The multi-way access method

LegaX must support a **multi-way access model** rather than designing access around one mandatory physical or device mechanism.

Supported access methods may include:

- **Hand/palm** through a certified biometric hardware/provider adapter;
- **Face** through an approved authentication or biometric-capable device/provider flow;
- **Fingerprint** through an approved authentication or biometric-capable device/provider flow;
- **QR** through signed, scoped, time-bound credentials or equivalent controlled representations;
- **NFC** through approved credential or device mechanisms;
- **PIN/password or device credentials** where appropriate;
- **Physical credentials** where supported;
- **Visitor or temporary credentials** issued under governed participation and authorization;
- **Service/device/system credentials** for non-human actors;
- **Future access technologies** through explicit adapter contracts.

The core LegaX model must not depend on a particular phone, operating system, camera, biometric sensor, reader, lock manufacturer, payment terminal, or network.

LegaX is the governing infrastructure; devices, operating systems, readers, biometric hardware, payment terminals, access controllers, and external providers are interchangeable enforcement or authentication adapters subject to explicit contracts.

### Method selection

The available method must be selected according to the applicable authorization and access policy, resource requirements, assurance level, actor context, credential state, device or hardware capability, transaction sensitivity, jurisdiction, security conditions, availability, and other governed constraints.

Method selection must not silently convert a weaker method into a stronger assurance level.

A resource may require:

- one acceptable method;
- a particular minimum assurance;
- a specific credential class;
- a combination of independent methods;
- step-up authentication;
- additional verification;
- explicit confirmation;
- multiple authorized actors;
- a fallback method under defined conditions.

The policy determines what is sufficient. The existence of multiple methods does not mean that every method is interchangeable for every operation.

## Multi-way does not mean uncontrolled fallback

LegaX must distinguish **method diversity** from **security bypass**.

A fallback from one method to another is valid only when the applicable policy explicitly permits the alternative and the alternative satisfies the required assurance and security conditions.

For example, inability to use one access method must not automatically make a lower-assurance method acceptable for a high-impact resource.

Fallback rules should consider:

- required assurance;
- target sensitivity;
- authorization scope;
- credential lifecycle;
- revocation state;
- device/hardware trust;
- liveness or anti-spoofing requirements where applicable;
- transaction or access risk;
- time and location conditions;
- connectivity and offline state;
- jurisdiction;
- emergency policy;
- audit and evidence requirements.

## Hand/palm access protocol

Hand/palm access is a supported modality, but LegaX must not pretend that ordinary phones universally provide a secure palm-biometric access capability.

The canonical protocol is:

**Hand/Palm Presentation → Certified Capture/Provider → Liveness/Authenticity Controls → Provider Verification/Assertion → Credential/Identity Association → Context & Policy → Authorization → Access Decision → Enforcement → Event/Evidence**

Where a hand/palm method is used:

1. The capture and biometric processing must occur through an approved hardware/provider capability.
2. LegaX must receive a controlled verification result or credential assertion rather than requiring raw biometric data as the default access representation.
3. Liveness, spoof resistance, presentation attack controls, and provider assurance must be appropriate to the risk.
4. The provider assertion must identify the represented subject or credential, assurance, issuer/provenance, validity, and relevant scope.
5. The assertion must not bypass LegaX authorization.
6. Hand/palm recognition must not silently become a universal identity, authority, or payment authorization mechanism.
7. Raw biometric material must be minimized, purpose-bound, protected, and retained only where legitimately required by the governing architecture, provider contract, security requirements, and applicable law.
8. Provider or hardware failure must produce a governed access outcome, not an invented biometric success.
9. A hand/palm match must remain attributable to the access request and resulting event/evidence where the operation is consequential.

The same boundary applies to future hand or biometric modalities: **hardware/provider capability is an adapter; LegaX remains responsible for the governing identity, context, authorization, access policy, and accountability model.**

## Face and fingerprint methods

Face and fingerprint methods must be treated according to the capabilities of the platform, provider, or certified hardware actually performing the operation.

Where a device operating system performs local biometric authentication, LegaX should normally consume the resulting authentication assertion rather than treating LegaX as a centralized raw-biometric database.

A local Face ID or fingerprint success therefore means, at most, that the accepted device authentication mechanism has been satisfied under its defined assurance. It does not by itself establish authorization to open a door, enter a facility, access sensitive data, make a payment, change authority, or perform another consequential action.

Where a provider performs remote or external biometric verification, the integration must explicitly define issuer, assurance, subject binding, validity, provenance, anti-spoofing controls, privacy, revocation, and permitted reliance.

## QR and NFC methods

QR and NFC are access credential or transport mechanisms, not universal authorization sources.

A QR or NFC presentation may carry or reference a controlled credential containing, as appropriate:

- credential identifier;
- represented actor or subject;
- permitted resource/scope;
- permitted operation;
- issuer;
- issuance time;
- expiry;
- nonce or anti-replay material;
- revocation/status information;
- assurance;
- provenance;
- policy or credential version;
- correlation information.

The access verifier must validate the credential and its current applicability before enforcement.

Static, copied, replayed, expired, revoked, or out-of-scope presentations must not be accepted merely because their encoded value is recognizable.

## Combining methods

LegaX must support governed combinations of access/authentication methods where a resource requires stronger assurance.

Examples include:

- hand/palm + policy-approved device authentication;
- device authentication + QR;
- fingerprint + credential;
- face + credential;
- QR + NFC;
- two independent credentials;
- authorized actor + visitor credential;
- multiple authorized actors for dual-control operations.

The combination is meaningful only when the policy defines the required relationship between the factors.

Two weak or dependent signals must not be represented as equivalent to two independent strong factors merely because two mechanisms were presented.

For high-impact operations, the policy may require independent factors, separate authorized actors, recent authentication, explicit confirmation, or additional review.

## Visitor and temporary access

Visitor access must be represented as governed, contextual access rather than as permanent identity authority.

A visitor may be invited or otherwise admitted through a defined participation relationship and may receive a temporary credential or access method whose scope, target, effective period, issuer, inviter/authority source, and lifecycle are explicit.

Visitor credentials must be:

- scoped;
- time-bounded where appropriate;
- revocable;
- attributable;
- resistant to replay;
- linked to the applicable participation/context;
- prevented from becoming permanent authority merely through repeated use.

Where identity evidence or verification is collected from a visitor, the information must remain purpose-bound and must not silently create unrelated permissions.

## Credential, device, and hardware boundaries

A credential is a mechanism for presenting evidence of an authorized relationship; it is not automatically authority.

An access device is an enforcement point; it is not automatically a source of governance.

A reader, lock, phone, terminal, camera, biometric sensor, network controller, or provider may verify or enforce a credential under a contract, but it must not manufacture broader LegaX authority.

External access-control systems must therefore integrate through explicit contracts defining:

- represented subject;
- issuer;
- resource and scope;
- supported operations;
- credential type;
- assurance;
- validity;
- revocation;
- policy precedence;
- synchronization requirements;
- offline behavior;
- failure behavior;
- audit/evidence;
- security responsibilities;
- privacy responsibilities.

## Revocation, freshness, replay, and offline operation

Access is lifecycle-sensitive.

The enforcement layer must account for changes to:

- authorization;
- authority;
- participation;
- context;
- credential;
- account;
- authentication session;
- target resource;
- policy;
- hardware/provider status.

Previously valid access credentials or decisions must not remain effective beyond their governed validity.

Where access credentials are cached or can operate offline, the architecture must define:

- maximum validity period;
- revocation behavior;
- synchronization requirements;
- anti-replay controls;
- nonce/counter strategy where applicable;
- device compromise handling;
- emergency disablement;
- audit reconciliation after reconnection;
- resource-specific fail behavior.

Offline operation must never become an unbounded bypass of central authorization policy.

## Access decision and enforcement result

LegaX must distinguish at least:

1. **Access request** — a request to interact with a protected resource.
2. **Authorization result** — the governed permission applicable to the requested operation.
3. **Access decision** — the enforcement determination after validating the authorization and access-specific conditions.
4. **Enforcement result** — whether the resource boundary actually admitted, rejected, challenged, or partially completed the interaction.
5. **Action/execution result** — whether the consequential operation actually occurred.

An access decision may produce outcomes such as:

- allow;
- deny;
- challenge;
- require step-up;
- require additional credential;
- require additional approval;
- limited access;
- pending;
- unavailable/failure;
- emergency-governed outcome.

The exact technical representation may evolve, but an ambiguous or invalid condition must not silently become unrestricted access to a consequential resource.

## Safety, emergency access, and failure behavior

Access enforcement must use a resource-appropriate safety posture.

For high-risk consequential resources, missing or invalid authorization should result in non-access unless an explicit emergency policy provides another governed outcome.

Emergency access must not be a hidden backdoor. It must define:

- who or what may invoke it;
- under which conditions;
- which resources are covered;
- what actions are permitted;
- duration;
- required assurance;
- approvals or confirmations;
- notification;
- event/evidence requirements;
- post-event review;
- termination and reconciliation.

Any fail-open behavior must be explicitly governed, narrowly scoped, risk-assessed, time-bounded, and appropriate to the resource and jurisdiction.

## Access and AI

LegaX intelligence may assist access operations by detecting anomalies, identifying suspicious patterns, selecting an eligible method from governed policy, predicting device failure, proposing step-up requirements, or helping operators investigate access events.

AI output is not authorization and is not authority.

AI must not independently decide that a person, device, or system should receive consequential access when the required authorization or policy conditions are absent.

Where AI assists access enforcement, the system must preserve:

**AI signal → governed policy/authorization evaluation → access decision → enforcement → event/evidence.**

AI must not silently weaken assurance, suppress required verification, override revocation, expand scope, or convert confidence into permission.

## Privacy and proportionality

Access systems must collect and expose only information necessary for the access purpose.

LegaX must avoid treating access infrastructure as a general-purpose surveillance system.

Access events should preserve sufficient information for accountability while applying:

- purpose limitation;
- data minimization;
- least privilege;
- retention limits;
- encryption and security controls;
- separation of sensitive biometric material from ordinary access records where appropriate;
- controlled operator access;
- applicable legal and contractual requirements.

Biometric access must not require a centralized raw biometric database merely because biometric-enabled access is supported.

## Access and events/evidence

Consequential access attempts and outcomes must generate appropriate event/evidence information.

Where legitimately required, the record should allow LegaX to establish:

- who or what requested access;
- represented identity;
- account/session where relevant;
- participation and context;
- requested operation;
- target resource;
- authorization decision reference;
- access method;
- credential or assertion class;
- assurance;
- provider/device/hardware involved;
- policy/version;
- time;
- location or resource boundary where appropriate;
- enforcement result;
- action/execution result;
- failure or denial reason where appropriate;
- correlation/idempotency information;
- relevant evidence references.

Sensitive data must remain purpose-bound and access-controlled.

## Access lifecycle

Access mechanisms and access grants are lifecycle-managed.

The model must support, as applicable:

- provisioning;
- activation;
- challenge;
- restricted operation;
- suspension;
- revocation;
- expiration;
- replacement;
- compromise;
- recovery;
- deactivation;
- retirement.

Lifecycle changes must propagate to enforcement points according to their required freshness and risk.

A resource must not remain accessible indefinitely because an old credential, cached permission, disconnected controller, or inactive integration still accepts it.

## Access contract

The LegaX Access model must preserve these invariants:

1. **Access is distinct from Identity.**
2. **Access is distinct from Authentication.**
3. **Access is distinct from Account.**
4. **Access is distinct from Administration.**
5. **Access is distinct from Authority.**
6. **Access is distinct from Authorization.**
7. **Access is distinct from Action/Execution.**
8. **Access is the enforcement boundary through which authorized interaction reaches a protected resource.**
9. **No consequential access may occur without a valid applicable authorization unless an explicit emergency policy governs the exception.**
10. **Access enforcement cannot manufacture, expand, or silently replace authority or authorization.**
11. **A valid authentication result does not by itself create access permission.**
12. **A valid credential does not by itself create universal access permission.**
13. **Identity verification does not by itself create access permission.**
14. **Access scope must remain bounded by the applicable authorization, policy, target, context, and lifecycle.**
15. **Access methods must be selected and combined according to explicit policy and assurance requirements.**
16. **Multi-way access must provide method diversity without becoming an uncontrolled security bypass.**
17. **Hand/palm access requires an appropriate certified hardware/provider capability and must not be simulated as a generic phone biometric capability.**
18. **Face and fingerprint device authentication results must remain distinct from authorization.**
19. **QR and NFC are credential/transport mechanisms whose presented values must be validated for scope, freshness, integrity, and replay resistance.**
20. **Visitor and temporary access must be contextual, scoped, attributable, and lifecycle-controlled.**
21. **External access-control systems are adapters/enforcement points and do not automatically become LegaX authority sources.**
22. **Cached, offline, or previously issued access credentials must not outlive their governed validity.**
23. **Revocation, suspension, expiry, compromise, and policy changes must be reflected at enforcement points according to applicable risk and freshness requirements.**
24. **High-impact access may require stronger authentication, multiple independent methods, additional approval, separation of duties, or other governed safeguards.**
25. **Emergency access must be explicitly governed, narrowly scoped, attributable, and reviewable.**
26. **AI may assist access operations but cannot independently manufacture authorization or bypass required controls.**
27. **Access attempts and consequential outcomes must remain attributable and auditable through appropriate events and evidence.**
28. **Access enforcement must preserve privacy, minimization, security, and purpose limitation, including for biometric-related information.**
29. **Access must remain device-, operating-system-, hardware-, provider-, and technology-independent at the core contract level.**
30. **New access technologies must integrate through explicit contracts without redefining Identity, Authentication, Authority, Authorization, or Access.**
31. **An access failure must not be represented as successful action execution.**
32. **An authorization allow does not guarantee physical or technical enforcement success; the enforcement result must remain independently observable.**
33. **Access decisions must account for relevant concurrency, target-state, credential, and policy changes before consequential enforcement.**
34. **Duplicate access requests must not create unintended duplicate consequential effects.**
35. **Access semantics must remain extensible across physical, digital, economic, social, service, infrastructure, and future resource domains without weakening the enforcement boundary.**

## Relationship to Definitions 01–06

This definition implements the Product Constitution's principle that **access is enforcement** and extends the preceding foundational models without redefining them.

- **Identity** establishes **who or what LegaX recognizes**.
- **Authentication** establishes **whether the current actor has successfully presented or controlled an accepted authentication mechanism under defined conditions**.
- **Account** establishes **the governed LegaX interaction and security relationship through which that authenticated actor operates**.
- **Administration** governs **authority structures, scopes, assignments, delegation, policies, approvals, configurations, and governance**.
- **Authorization** determines **whether this actor is permitted to perform this specific requested action against this specific target under the applicable conditions**.
- **Access** enforces **how that authorized interaction is admitted, constrained, challenged, or refused at the actual resource boundary**.
- **Action/Execution** performs **the consequential operation itself and records its resulting state and evidence**.

Access is therefore the enforcement bridge between LegaX's governed decision model and the real digital, physical, economic, and social world. It must support multiple technologies and methods—including hand/palm, face, fingerprint, QR, NFC, device credentials, physical credentials, visitor credentials, and future mechanisms—without allowing any single method, device, provider, or intelligence layer to redefine authorization or authority.

**Status:** Foundational domain contract — definition and semantic model; implementation intentionally deferred.
