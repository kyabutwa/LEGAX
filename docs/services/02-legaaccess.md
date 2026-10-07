# LegaX — LegaAccess

## 13.2 — LegaAccess Advanced Service Contract

### Canonical definition

LegaAccess is the governed enforcement service that converts a valid LegaX authorization decision into controlled interaction with protected digital and physical resources, including buildings, units, doors, gates, elevators, parking, facilities, restricted zones, applications, systems, devices, and service endpoints.

LegaAccess does not decide authority merely from possession of a credential. It evaluates the authorization result and context, selects an approved enforcement path, executes or delegates enforcement, records what the resource actually reported, and maintains the distinction between **authorization, access decision, enforcement, and physical/digital outcome**.

### Domain model

Core objects include: ProtectedResource, AccessPoint, Zone, AccessPolicyReference, Credential, CredentialBinding, AccessMethod, AccessRequest, AccessDecision, EnforcementCommand, EnforcementResult, Device/Controller, VisitorAccess, TemporaryGrant, EmergencyGrant, OfflineGrant, Session, Revocation, and AccessEvent.

A resource may have multiple access points and enforcement mechanisms. A credential may be valid for one resource and invalid for another. A grant may be time-, location-, device-, purpose-, visit-, risk-, or context-bound.

### Access methods

Supported method families include certified hand/palm hardware, face, fingerprint, QR, NFC, device credentials/PIN, physical credentials, visitor credentials, service credentials, cryptographic keys, and future adapters.

Hand/palm is an explicit hardware/provider modality. LegaAccess must never pretend that an ordinary phone has generic palm sensing capability. Device Face ID/fingerprint can provide a local authentication assertion but must not expose or require raw platform biometric templates.

Multi-way access may require **one-of**, **all-of**, or **threshold** combinations, for example credential + local device authentication, QR + PIN, palm + liveness, or two independent authorized factors. The policy determines the required assurance.

### Decision flow

**Request → Resource/Context Resolution → Credential Validation → Authorization Evaluation → Access Decision → Enforcement Selection → Enforcement Command → Controller/Resource Result → Event/Evidence**

Authorization may return allow, deny, pending, or indeterminate. LegaAccess must not convert indeterminate into allow unless an explicit safety policy permits a bounded emergency mode.

### Resource and enforcement semantics

The service must distinguish:

- requested access;
- authorization granted;
- command issued;
- controller accepted command;
- lock/door/system state changed;
- actor physically/digitally observed;
- access outcome confirmed.

A command being accepted by a controller does not necessarily prove that the physical resource opened.

### Credential lifecycle

Credentials must support issuance, activation, binding, rotation, suspension, revocation, expiry, replacement, compromise, recovery, and destruction. Temporary and visitor credentials require explicit issuer, scope, validity interval, target resource, purpose where applicable, and revocation semantics.

Offline enforcement must use bounded cached authorization/credential state with freshness limits, revocation strategy, replay protection, and reconciliation after reconnection.

### Safety and emergency access

Emergency access must be explicitly modeled, not hidden as an administrative bypass. Emergency policies must define who may invoke it, which resources are affected, duration, reason, required evidence, post-event review, and automatic expiry where appropriate.

Fail-safe versus fail-secure behavior is resource-specific and must be governed by safety requirements rather than one global setting.

### Provider/device integration

Controllers, biometric providers, access-control systems, locks, readers, elevators, gates, and other devices are adapters. Each adapter must define device identity, capability, firmware/state where material, command contract, acknowledgment semantics, timeout behavior, anti-replay controls, health, clock assumptions, and evidence.

### Events and evidence

Record AccessRequested, AuthorizationEvaluated, AccessGranted/Denied, CredentialPresented, EnforcementCommanded, EnforcementAcknowledged, ResourceStateObserved, AccessCompleted, AccessFailed, EmergencyAccessInvoked, RevocationApplied, and DeviceHealthChanged as distinct events where applicable.

### Privacy

Access data can reveal residence, movement, work patterns, visitors, and sensitive relationships. Collection must be purpose-bound, minimized, retention-controlled, and restricted by authorization. Biometric systems must minimize raw biometric exposure and preserve provider/hardware provenance.

### Intelligence

AI may detect abnormal access patterns, recommend investigation, predict device failure, classify incidents, or assist operators. It cannot grant access, silently downgrade assurance, override revocation, or convert a prediction into an authorization.

### Advanced invariants

1. Authorization is the permission decision; LegaAccess is the enforcement boundary.
2. Credential possession is not authority.
3. Resource location is not authority.
4. Controller acknowledgment is not physical proof.
5. Offline access is never indefinitely valid.
6. Revoked credentials must not remain valid beyond governed cache tolerance.
7. Emergency access must be bounded and auditable.
8. Multi-method requirements are policy-defined.
9. Raw biometrics are not required as the canonical identity representation.
10. AI cannot bypass access authorization.
11. Every consequential access attempt is attributable.
12. Physical outcome and authorization outcome remain separately recorded.

**Status:** Advanced service contract — ready for subsequent enforcement-adapter, credential, policy, event, and resource-state implementation.