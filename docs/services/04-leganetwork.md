# LegaX — LegaNetwork

## LegaNetwork — Connectivity & Network Services

**Canonical definition**

LegaNetwork is the LegaX service responsible for coordinating governed connectivity and network-service relationships, including service plans, subscriptions, network resources, connected endpoints, capacity, provisioning, service state, usage, support, suspension, restoration, and provider-network integration.

LegaNetwork treats network connectivity as a governed resource and service relationship rather than as implicit trust. Possession of a device, network address, subscription, or physical connection does not by itself grant authority to access protected resources.

**Canonical flow:** Service Request → Identity/Participation → Plan/Eligibility → Authorization → Provisioning → Network/Provider Adapter → Service State → Usage/Event → Billing/Settlement where applicable.

**Core boundaries:** network location is not identity; IP address is not authority; connectivity is not authorization; subscription status is not unrestricted access; provider network control remains distinct from LegaX authorization.

**Security:** service and device identities, short-lived credentials where appropriate, mutual authentication, service-to-service authorization, segmentation, lifecycle controls, revocation, abuse protection, and resource-state evidence are required. This follows the zero-trust principle that services and resources should not receive implicit trust from network location. NIST SP 800-207A recommends service identity and granular service-to-service authorization in cloud-native environments.

**AI boundary:** intelligence may optimize capacity, detect outages or abuse, forecast demand, and assist operations, but cannot grant itself network authority.

**Status:** Foundational service contract — implementation intentionally deferred.