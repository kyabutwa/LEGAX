# LegaX — LegaAward

## 13.10 — LegaAward Advanced Service Contract

### Canonical definition

LegaAward is the governed service for recognition, awards, grants, incentives, credits, benefits, prizes, and other value-bearing acknowledgements issued according to explicit programs, eligibility criteria, evidence, review, selection, authorization, issuance, acceptance, usage, expiry, revocation, and dispute rules.

LegaAward separates eligibility from entitlement, recommendation from selection, selection from authorization, award issuance from acceptance, and economic issuance from final settlement.

### Domain model

Core objects: AwardProgram, Criterion, EligibilityRule, Candidate, EvidenceSet, Evaluation, Review, Selection, Approval, Award, Benefit, Issuance, Redemption/Use, Expiry, Revocation, Appeal, Dispute, FundingSourceReference, and AwardEvent.

### Program lifecycle

**DRAFT → REVIEW → APPROVED → PUBLISHED → OPEN → CLOSED → ARCHIVED**

Award lifecycle may be **NOMINATED → ELIGIBILITY_VERIFIED → REVIEWED → SELECTED → AUTHORIZED → ISSUED → ACCEPTED/REDEEMED → COMPLETED**.

Exceptions include **REJECTED, EXPIRED, REVOKED, DISPUTED, VOIDED**.

### Criteria and evidence

Every consequential award must identify criteria version, eligibility basis, evidence considered, evaluation method, reviewer/authority where required, selection outcome, and authorization source.

A score is not entitlement. Evidence may be declared, verified, observed, or inferred and must retain provenance.

### Fairness and governance

Programs should support conflict-of-interest controls, separation of duties, appeal/review, eligibility change handling, duplicate-award prevention, funding limits, and jurisdiction-specific rules.

### Economic composition

Monetary awards can use LegaPay. Credits or benefits can use LegaMarket or other LegaServices. Issuance and settlement remain separate states.

### AI

AI may identify candidates, summarize evidence, detect anomalies, assist evaluation, or recommend recipients. AI cannot silently create eligibility, entitlement, selection, or authorization.

### Advanced invariants

1. Eligibility ≠ entitlement.
2. Score ≠ award.
3. Recommendation ≠ selection.
4. Selection ≠ authorization.
5. Issuance ≠ settlement.
6. Evidence retains provenance.
7. Program criteria are versioned.
8. Appeals remain traceable.
9. Duplicate issuance is prevented by idempotency and eligibility constraints.
10. AI cannot grant an award.
11. Revocation is governed and auditable.
12. Funding limits are enforceable policy.

**Status:** Advanced service contract — ready for program, criteria, evidence, review, issuance, benefit, payment, and dispute implementation.