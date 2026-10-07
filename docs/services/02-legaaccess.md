# LegaX — LegaAccess

## LegaAccess — Authorization-Aware Physical & Digital Access

**Canonical definition**

LegaAccess is the LegaX service responsible for translating governed authorization decisions into controlled access to physical and digital resources—including buildings, units, doors, gates, elevators, parking, facilities, restricted zones, applications, systems, and other protected resources—while preserving authorization as the decision boundary and access mechanisms as the enforcement boundary.

LegaAccess is not a biometric database and not merely a door-opening application. It coordinates identity evidence, verification, credentials, context, authorization, access decisions, enforcement mechanisms, resource state, and events/evidence.

**Canonical flow:** Identity/Evidence → Verification where required → Credential/Method → Context → Authorization → Access Decision → Enforcement → Resource Action → Event/Evidence.

**Access methods:** hand/palm through certified hardware/provider protocols, face, fingerprint, QR, NFC, device credentials/PIN, physical credentials, visitor credentials, service/device credentials, and future methods. A device's local Face ID/fingerprint result is an authentication assertion, not raw biometric authority; generic phones must not be represented as having unsupported palm hardware.

**Core boundaries:** authorization says whether access is permitted; LegaAccess determines how that permission is enforced; the physical or digital system determines what actually happened. Temporary, visitor, offline, emergency, delegated, and multi-method access require explicit lifecycle and policy semantics.

**Security:** anti-replay, credential expiry, freshness, revocation, anti-spoofing where biometric hardware is used, offline-risk controls, fail-safe/fail-secure policy by resource, auditability, privacy minimization, and safety controls are required.

**AI boundary:** AI may detect anomalies, recommend controls, or assist operators but cannot manufacture access authority or bypass authorization.

**Status:** Foundational service contract — implementation intentionally deferred.