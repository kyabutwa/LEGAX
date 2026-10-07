# LegaX — LegaNetwork

## 13.4 — LegaNetwork Advanced Service Contract

### Canonical definition

LegaNetwork is the governed connectivity service responsible for network subscriptions, connectivity products, endpoint identities, provisioning, credentials, network resources, usage, capacity, service assurance, suspension, restoration, provider integration, and network-service lifecycle.

LegaNetwork treats network connectivity as a service and resource relationship. Network position, IP address, Wi-Fi association, SIM/eSIM state, subscription, or physical presence never becomes implicit authority for protected resources.

### Domain model

Core objects: NetworkService, Plan, Subscription, Endpoint, DeviceIdentityReference, NetworkCredential, AccessProfile, ConnectivitySession, NetworkResource, CapacityAllocation, UsageRecord, ProviderCircuit, ProvisioningRequest, Suspension, Restoration, Incident, ServiceLevel, and ReconciliationRecord.

### Service lifecycle

**ELIGIBILITY → ORDERED → PROVISIONING → ACTIVE → DEGRADED/SUSPENDED → RESTORATION → ACTIVE → TERMINATED**

Additional states include **PENDING_PROVIDER, FAILED, EXPIRED, DISPUTED, RECONCILIATION_REQUIRED**.

Provisioning and suspension are consequential operations and require authorization and auditable commands.

### Endpoint identity

Every managed endpoint must have a governed identity relationship, lifecycle, credential state, ownership/stewardship reference, capability profile, and security posture where available. A device can be associated with a person without becoming that person's authority.

### Zero-trust service interaction

Service-to-service calls require authenticated service identity and authorization. Network location must not be used as the sole basis for trust. NIST SP 800-207A explicitly shifts cloud-native access control toward application/service identities and granular authorization.

### Provisioning

A provisioning request must contain target subscription/service, endpoint, requested plan/capability, authority source, authorization decision, effective time, provider route, idempotency key, and expected outcome. Provider acknowledgment, network activation, and verified connectivity remain distinct states.

### Usage and billing

Usage records must identify source, measurement period, unit, aggregation method, provider reference, and confidence. A usage record is not automatically a billable truth until governed by the relevant service contract and reconciliation.

### Outages and incidents

LegaNetwork must distinguish service outage, degraded service, endpoint failure, provider failure, capacity exhaustion, authentication failure, authorization denial, configuration error, and unknown state. Incident response must not silently mutate subscription or authorization state without governed transitions.

### Security

Controls include endpoint/service identity, credential rotation, least privilege, segmentation, secure provisioning, revocation, abuse detection, rate limiting, device lifecycle, secure management channels, and evidence.

### Intelligence

AI may forecast capacity, detect outages, optimize routing, detect abuse, and assist operations. It cannot grant network authority or silently alter policy.

### Advanced invariants

1. Network location is not trust.
2. IP address is not identity.
3. Connectivity is not authorization.
4. Subscription is not unrestricted access.
5. Provider provisioning acknowledgment is not verified service activation.
6. Usage is not automatically a billable truth.
7. Service identity is distinct from user identity.
8. Device identity is distinct from human authority.
9. Suspension and restoration are governed transitions.
10. Every consequential provisioning command is idempotent and attributable.
11. AI cannot grant access.
12. Provider state retains provenance.

**Status:** Advanced service contract — ready for service-product, endpoint, provisioning, provider-adapter, policy, and observability implementation.