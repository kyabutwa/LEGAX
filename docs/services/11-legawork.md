# LegaX — LegaWork

## 13.11 — LegaWork Advanced Service Contract

### Canonical definition

LegaWork is the governed professional and work coordination service for people, workers, freelancers, clients, organizations, providers, and opportunities, covering professional evidence, skills, qualifications, matching, proposals, contracts, projects, milestones, deliverables, acceptance, reviews, compensation, disputes, and durable work history.

LegaWork coordinates work relationships without turning a profile into a qualification, a declared skill into verified capability, a match into employment, a contract into completed work, or payment into proof that work was satisfactory.

### Domain model

Core objects include ProfessionalProfile, Skill, SkillEvidence, QualificationReference, Assessment, CapabilityClaim, ProfessionalLevel, Opportunity, CandidateMatch, Proposal, ContractReference, Project, Milestone, Task, Deliverable, Review, Acceptance, WorkEvidence, PaymentReference, Dispute, and ProfessionalHistory.

A professional profile is a contextual representation assembled from identity, participation, declared information, evidence, credentials, demonstrated work, and governed history. It is not itself a professional license or universal qualification.

### Capability and evidence model

Capability information must preserve epistemic state:

**DECLARED → VERIFIED_CREDENTIAL → ASSESSED → DEMONSTRATED → OBSERVED → EVIDENCE_BACKED_LEVEL**

These states are not interchangeable. A credential may verify education or authorization issued by an issuer without proving practical performance in every context. Demonstrated work may support capability without becoming a legal license.

Evidence should preserve issuer/source, subject, scope, issuance time, expiry, verification method, provenance, and dispute/correction state.

Where digital credentials are used, LegaWork should support interoperable verifiable-credential models. W3C Verifiable Credentials 2.0 is a Recommendation defining a cryptographically secure, privacy-respecting, machine-verifiable model with issuer, holder, and verifier roles.

### Opportunity lifecycle

**DRAFT → PUBLISHED → MATCHING → PROPOSALS → SELECTION → CONTRACTED → ACTIVE → REVIEW/ACCEPTANCE → COMPLETED**

Exceptional states include **CANCELLED, EXPIRED, SUSPENDED, TERMINATED, DISPUTED, RECONCILIATION_REQUIRED**.

Opportunity publication must define scope, eligibility, location/context, compensation semantics, required capability, deadlines, deliverables, decision authority, and lifecycle.

### Proposal and contract boundary

A match is a recommendation. A proposal is an offer or expression of terms. Contract formation occurs only through the applicable authority and acceptance semantics. LegaWork must not infer employment, independent contracting, agency, or another legal relationship merely from platform activity; those semantics depend on the governing agreement and applicable law.

Contract references must preserve parties, scope, terms version, effective period, obligations, acceptance, amendment history, termination, dispute mechanism, and related authorization.

### Project execution

A project should support explicit scope, parties, milestones, tasks, dependencies, deliverables, acceptance criteria, deadlines, change requests, evidence, and payment references.

A deliverable lifecycle should distinguish:

**DRAFT → SUBMITTED → UNDER_REVIEW → ACCEPTED / REVISION_REQUIRED / REJECTED → FINAL**

Acceptance must be attributable to an authorized party and cannot be manufactured by inactivity unless the contract explicitly defines deemed acceptance.

### Compensation and payment

LegaWork owns work/economic intent and contractual milestones; LegaPay owns payment lifecycle. Compensation may be fixed, hourly, milestone-based, recurring, outcome-based, or another explicitly governed model.

Payment intent, processing, settlement, withholding, refund/reversal, and dispute remain separate states. A completed payment does not prove that a deliverable was correctly performed.

### Reviews and reputation

Reviews are attributed evidence and opinion, not universal truth. They require anti-abuse controls, eligibility to review, timing rules, correction/dispute mechanisms, and separation between private operational feedback and public reputation.

LegaWork should prevent one actor from using reviews to create unauthorized professional sanctions or to bypass formal governance.

### Matching and fairness

Matching may consider governed skills, evidence, experience, availability, location/context, compensation, eligibility, accessibility, preferences, and other permitted constraints. Sensitive or prohibited attributes must not become hidden decision criteria.

Matching output should preserve relevant criteria, model/ruleset version where applicable, confidence/uncertainty, and reason references for consequential workflows.

### AI boundary

AI may match opportunities, summarize portfolios, identify skills from evidence, forecast project risk, recommend candidates, assist project management, detect anomalies, and draft administrative material.

AI must not fabricate experience, invent credentials, convert inferred skills into verified skills, silently discriminate through prohibited signals, create employment/contract authority, approve its own recommendation, or conceal material uncertainty.

### Advanced service invariants

1. Profile ≠ qualification.
2. Declared skill ≠ verified capability.
3. Verified credential ≠ universal practical capability.
4. Match ≠ selection.
5. Selection ≠ contract.
6. Contract ≠ completed work.
7. Submission ≠ acceptance.
8. Review ≠ objective truth.
9. Payment initiation ≠ settlement.
10. Work evidence retains provenance.
11. Professional levels are lifecycle-managed.
12. Contract amendments are versioned.
13. Acceptance is attributable to an authorized actor.
14. Disputed evidence remains traceable.
15. AI cannot fabricate professional evidence.
16. AI cannot independently create consequential employment, contract, or payment authority.
17. Sensitive professional data is purpose-bound and access-controlled.
18. Duplicate project/payment commands are idempotent.
19. External credential assertions retain issuer provenance.
20. Professional history cannot be silently rewritten to conceal consequential events.

### Composition

LegaWork may use LegaPay for compensation, LegaBooking for appointments/scheduling, LegaAccess for authorized workplace/facility access, LegaNetwork for connectivity, LegaAward for recognition, and future services through explicit contracts.

**Status:** Advanced service contract — ready for professional evidence, opportunities, matching, contracts, projects, deliverables, payments, reviews, disputes, provider integrations, and implementation design.