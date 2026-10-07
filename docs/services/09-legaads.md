# LegaX — LegaAds

## 13.9 — LegaAds Advanced Service Contract

### Canonical definition

LegaAds is the governed advertising and commercial-discovery service for campaigns, offers, audience/context eligibility, placements, delivery, measurement, billing, consent/policy enforcement, and advertiser/provider relationships.

LegaAds must never turn LegaX identity, access history, health information, financial information, precise location, or other sensitive information into unrestricted surveillance or automatic commercial authority.

### Domain model

Core objects: AdvertiserParticipation, Campaign, Creative, Offer, Placement, Inventory, AudiencePolicy, EligibilityRule, Consent/PreferenceReference, Delivery, Impression, Interaction, ConversionReference, Budget, Bid/Price, MeasurementEvent, BillingReference, FraudSignal, and AdvertisingEvidence.

### Campaign lifecycle

**DRAFT → REVIEW → APPROVED → SCHEDULED → ACTIVE → PAUSED → COMPLETED**

Exceptions: **REJECTED, SUSPENDED, EXPIRED, DISPUTED, TERMINATED**.

Creative, targeting rules, budget, provider, policy, and campaign version must be immutable/versioned for consequential measurement.

### Audience and privacy

Audience eligibility must be computed from permitted signals. Eligibility to receive an advertisement does not authorize disclosure of identity attributes to the advertiser.

LegaAds should support contextual, consented, cohort, or other governed targeting approaches and explicit participant/community controls.

### Measurement

The service must distinguish delivery/impression, viewability where applicable, interaction, conversion reference, attribution, billing event, and payment settlement. Measurement is not automatically proof of causation.

### Fraud and abuse

Fraud signals may include abnormal traffic, duplicate interactions, bot indicators, impossible patterns, provider inconsistencies, or measurement anomalies. Signals remain evidence/inputs, not automatic guilt.

### AI

AI may optimize placement, recommend offers, detect fraud, forecast campaign performance, and assist campaign operations. It must not manufacture consent, infer sensitive characteristics for prohibited uses, silently create targeting authority, or hide measurement uncertainty.

### Advanced invariants

1. Audience eligibility ≠ identity disclosure.
2. Targeting signal ≠ consent.
3. Impression ≠ engagement.
4. Engagement ≠ conversion.
5. Conversion ≠ causation.
6. Conversion ≠ payment settlement.
7. Sensitive data is not unrestricted advertising input.
8. Campaign versions are auditable.
9. Measurement provenance is retained.
10. Fraud signal ≠ fraud finding.
11. AI cannot manufacture consent.
12. Advertising cannot alter authorization.

**Standards alignment:** privacy and consent integrations should use applicable jurisdictional requirements and, where relevant, established advertising transparency/consent specifications rather than inventing incompatible consent semantics. citeturn0search15

**Status:** Advanced service contract — ready for campaign, policy, consent, placement, measurement, billing, privacy, and provider integration design.