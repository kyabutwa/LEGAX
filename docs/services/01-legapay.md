# LegaX — LegaPay

## LegaPay — Payments & Financial Transaction Coordination

**Canonical definition**

LegaPay is the LegaX service responsible for coordinating governed payment intents, payment methods, transaction authorization, provider and payment-network interaction, settlement, reconciliation, refunds, reversals, disputes, and related financial evidence while preserving the separation between identity, authentication, authorization, payment processing, provider acceptance, and final settlement.

LegaPay does not itself create money, financial authority, ownership, or payment-network settlement merely because a participant has an account or a payment credential. It coordinates financial actions through explicit authority, authorization, provider contracts, lifecycle rules, and auditable events.

**Canonical flow:** Payment Intent → Method Selection → Authentication/Step-Up where required → Authorization → Provider/Network Adapter → Processing → Settlement → Reconciliation → Event/Evidence.

**Core boundaries:** balance is not spending authority; a payment credential is not authorization; provider acceptance is not necessarily settlement; a successful API response is not necessarily final settlement; AI recommendations are not payment authorization.

**Service responsibilities:** payment intents, transaction lifecycle, method orchestration, provider adapters, idempotency, reconciliation, refunds/reversals, disputes, fees where applicable, transaction evidence, risk signals, and jurisdiction-aware policy integration.

**Security:** consequential payments require appropriate authentication, authorization, replay protection, idempotency, fraud/risk controls, provider verification, concurrency protection, and complete attribution. Palm/hand, face, fingerprint, QR, NFC, passkeys, device credentials, or other methods may authenticate or provide a credential assertion according to their governed contracts; none is payment authorization by itself.

**AI boundary:** intelligence may detect anomalies, recommend payment methods, forecast risk, reconcile records, or assist operators, but cannot independently authorize or conceal a consequential financial action.

**Status:** Foundational service contract — implementation intentionally deferred.