# LegaX — LegaHealth

## 13.8 — LegaHealth Advanced Service Contract

### Canonical definition

LegaHealth is the governed coordination service for people, health professionals, organizations, facilities, appointments, care-related workflows, health-service access, payments where applicable, and references to clinical records, while explicitly preserving clinical authority, professional responsibility, patient privacy, safety, and jurisdiction-specific law.

LegaHealth is not a universal clinical authority, hospital information system, or autonomous medical decision-maker merely because it coordinates access to health services.

### Domain model

Core objects: Patient/ParticipantReference, ProviderIdentityReference, ProfessionalCredentialReference, Organization, Facility, ServiceOffering, Appointment, EncounterReference, CareRelationship, Consent/LegalBasisReference, Referral, Prescription/ClinicalRecordReference where legitimately integrated, Coverage/PaymentReference, ClinicalDocumentReference, and HealthEvent.

Sensitive clinical records should remain with the authoritative clinical system when appropriate; LegaHealth should use explicit interoperability contracts rather than duplicating all clinical data.

### Professional and clinical authority

Provider identity, professional credential, participation in LegaHealth, appointment eligibility, and clinical authority are distinct. Verification of a professional credential does not make every action by that person clinically appropriate.

Clinical decisions belong to appropriately qualified professionals and legally authorized systems.

### Appointment lifecycle

**REQUESTED → ELIGIBILITY_PENDING → SCHEDULED → CONFIRMED → CHECKED_IN → IN_SERVICE → COMPLETED**

Exceptions: **CANCELLED, NO_SHOW, REJECTED, EXPIRED, DISPUTED**.

### Health-data governance

Health data requires strict purpose limitation, data minimization, authorization, provenance, retention, access logging, correction mechanisms, and applicable consent/legal-basis handling. Access to health evidence is itself an authorized operation.

### Interoperability

Where clinical information exchange is required, the implementation should map to appropriate healthcare interoperability standards such as HL7 FHIR rather than inventing incompatible clinical representations. FHIR provides a standardized framework for electronic healthcare information exchange. citeturn0search3turn0search4

### AI

AI may assist navigation, scheduling, summarization, administrative coordination, matching, anomaly detection, and decision support where appropriate. Any clinically consequential use must be governed separately with qualified oversight, validation, safety monitoring, provenance, and applicable regulation. AI output is never automatically diagnosis, prescription, treatment authorization, or clinical truth.

### Incidents and corrections

Clinical or health-related errors, disputes, corrections, and provider assertions must be traceable. Original records should not be silently rewritten by LegaHealth where the authoritative clinical system controls them.

### Advanced invariants

1. Identity ≠ patient record.
2. Provider identity ≠ clinical authority for every action.
3. Appointment ≠ treatment.
4. Payment ≠ proof of care.
5. Credential verification ≠ clinical correctness.
6. AI recommendation ≠ diagnosis.
7. Access to health data requires authorization.
8. External clinical records retain source authority.
9. Sensitive health data is minimized.
10. Corrections remain traceable.
11. High-impact clinical decisions require appropriate qualified governance.
12. Health-data use is purpose-bound.

**Status:** Advanced service contract — ready for healthcare interoperability, provider credential, appointment, privacy, access, and governed clinical-integration design.