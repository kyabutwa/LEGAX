# LegaX — LegaPay

## 13.1 — LegaPay Advanced Service Contract

### Canonical definition

LegaPay is the governed financial-service coordination layer of LegaX responsible for representing and executing payment-related intent and lifecycle—payment intents, methods, mandates, transaction authorization, provider processing, settlement, reconciliation, refunds, reversals, disputes, fees, limits, and financial evidence—while preserving strict separation between identity, authentication, authority, authorization, payment initiation, provider acceptance, processing, settlement, and final economic outcome.

LegaPay coordinates value movement; it does not manufacture money, invent account balances, create financial authority, or redefine the authoritative ledger of an external payment institution. External payment rails remain authoritative for the financial facts they control, while LegaPay maintains its own governed transaction state and provenance.

### Domain model

Core objects include: PaymentIntent, PaymentAttempt, PaymentMethod, PaymentCredentialReference, Mandate, FundingSourceReference, Payer, Payee, Merchant/Provider, Price, Fee, TaxReference, AuthorizationDecision, ProviderInstruction, ProviderResponse, SettlementRecord, ReconciliationRecord, Refund, Reversal, Dispute, Limit, RiskSignal, IdempotencyKey, and FinancialEvent.

A PaymentIntent represents intended economic movement and is not itself a completed transaction. A PaymentAttempt represents an individual processing attempt. A PaymentMethod references how payment may be performed; it does not itself authorize spending. A Mandate represents governed permission for recurring or delegated payment where legally and contractually valid. Settlement represents confirmed movement according to the relevant provider/network contract.

### State model

A minimum lifecycle is:

**DRAFT → REQUIRES_ACTION → READY → AUTHORIZATION_PENDING → AUTHORIZED → SUBMITTED → PROCESSING → PROVIDER_ACCEPTED → SETTLED**

Alternative terminal or exceptional states include **DECLINED, FAILED, EXPIRED, CANCELLED, REVERSED, REFUNDED, PARTIALLY_REFUNDED, DISPUTED, RECONCILIATION_REQUIRED, UNKNOWN**.

State transitions must be explicit, idempotent, policy-controlled, and attributable. A timeout must not be interpreted as failure when provider state is genuinely unknown.

### Authorization and security

Every consequential payment operation must identify payer, payee, amount, currency, purpose, source of authority, applicable participation/context, payment method, risk conditions, limits, approvals, and policy. High-risk operations may require step-up authentication, additional approval, transaction signing, cooling periods, velocity controls, or independent review.

Biometric, palm/hand, face, fingerprint, QR, NFC, passkey, device credential, or other methods can contribute authentication or credential assertions. None becomes payment authority merely by being present.

LegaPay must enforce replay protection, idempotency, concurrency protection, provider request signing where applicable, credential lifecycle checks, least privilege, secret isolation, transaction integrity, and controlled administrative access.

### Provider and rail integration

Every provider adapter must define: provider identity, supported operations, credential model, request/response contract, transaction identifiers, state mapping, timeout semantics, retry policy, webhook/callback authenticity, reconciliation source, settlement semantics, reversal/refund semantics, rate limits, failure modes, jurisdiction, termination behavior, and evidence retention.

Provider status must never be mapped to stronger LegaPay semantics than the provider contract supports.

### Reconciliation

LegaPay must support three distinct truths:

1. **LegaX transaction state** — what LegaX believes from governed processing.
2. **Provider/network assertion** — what an external rail reports.
3. **Reconciled financial state** — what has been matched and accepted through reconciliation.

Unmatched, duplicated, missing, late, reversed, or conflicting records enter governed reconciliation rather than being silently overwritten.

### Events and evidence

Material events include PaymentIntentCreated, AuthorizationRequested, AuthorizationGranted/Denied, PaymentSubmitted, ProviderAccepted, PaymentFailed, SettlementConfirmed, RefundRequested, RefundCompleted, ReversalDetected, DisputeOpened, ReconciliationRequired, and ReconciliationCompleted.

Evidence should preserve transaction IDs, provider IDs, timestamps, amount/currency, authorization context, policy/version references, provider assertions, and reconciliation references while minimizing sensitive payment data.

### Failure and recovery

Network timeout, duplicate callback, provider outage, stale authorization, expired credential, insufficient funds, policy denial, risk hold, partial settlement, and unknown provider state are separate conditions. Retries must be safe. Recovery must be explicit. No retry may duplicate economic effect.

### Intelligence

LegaX intelligence may detect fraud signals, recommend payment methods, estimate risk, reconcile records, forecast cash flow, detect anomalous provider behavior, and assist disputes. It cannot create authority, approve its own recommendation, convert a risk score into automatic entitlement without policy, or erase adverse evidence.

### Service composition

LegaPay is consumed by LegaRide, LegaBooking, LegaMarket, LegaFood, LegaWork, LegaNetwork, LegaAward and future services through explicit payment contracts. A consuming service owns its commercial/domain intent; LegaPay owns payment lifecycle semantics.

### Advanced invariants

1. Payment intent ≠ authorization.
2. Payment method ≠ authority.
3. Authentication ≠ payment approval.
4. Provider acceptance ≠ settlement.
5. Timeout ≠ failure when state is unknown.
6. Settlement ≠ reconciliation completion.
7. Refund ≠ reversal.
8. Duplicate requests must not duplicate economic effect.
9. Historical financial events cannot be silently rewritten.
10. Every consequential payment must be attributable to governing authority and authorization.
11. Provider assertions retain provenance.
12. Sensitive payment data is minimized and protected.
13. AI cannot independently authorize consequential payment.
14. No service may bypass LegaPay to create a competing shared payment truth where LegaPay is the designated payment service.

### Standards alignment

LegaPay's eventual implementation should be mapped to applicable payment-security and financial-network requirements, including PCI DSS where cardholder-data scope applies, while provider-specific contracts and jurisdictional requirements remain explicit.

**Status:** Advanced service contract — semantic model ready for subsequent API, state-machine, policy, database, provider-adapter, test, and implementation design.