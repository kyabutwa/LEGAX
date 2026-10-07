# LegaX — API Architecture

## 23 — API Architecture

**Canonical definition**

API Architecture is the governed interface architecture through which LegaX exposes, consumes, composes, secures, versions, observes, documents, executes and evolves machine-to-machine capabilities across clients, services, providers, communities, organizations, workers, devices, physical systems, economic systems, AI agents and external platforms.

An API is a governed contract between an API provider and consumer. It defines what may be requested, how it is represented, under what authentication and authorization conditions, with what lifecycle, consistency, failure, privacy, observability and accountability semantics.

**Core rule:** CONSUMER → AUTHENTICATION → CONTEXT → AUTHORIZATION → API CONTRACT → VALIDATION → COMMAND/QUERY → EXECUTION/READ → RESPONSE/EVENT → EVIDENCE.

**NO AUTHORIZATION → NO CONSEQUENTIAL API ACTION.**

## 1. Purpose

LegaX requires APIs because its architecture crosses web clients, mobile applications, LegaServices, communities, organizations, providers, workers, devices, access controllers, payment systems, external identity providers, AI agents, event infrastructure and physical-world systems.

API Architecture provides a common governed contract for these interactions without forcing every interaction into one protocol or one endpoint style.

It must answer: who is calling; which interface and version; what operation; which target; which context; what purpose; what authority; what authorization decision; what data may be sent and returned; what state transition may occur; whether the operation is synchronous or asynchronous; idempotency; concurrency; failure and unknown-outcome behavior; events; evidence; observability; and evolution.

## 2. API is a contract, not a transport

HTTP is a transport. JSON is a representation. REST is one style. OpenAPI is an interface-description standard. OAuth is a security framework. None of these alone defines LegaX API Architecture.

The API contract includes interface semantics, domain semantics, identity, authentication, authorization, privacy, security, validation, lifecycle, commands, queries, events, evidence, versioning, reliability, observability and governance.

## 3. API surface taxonomy

LegaX MUST distinguish public/client APIs, service APIs, internal platform APIs, organization APIs, community APIs, provider APIs, provider-adapter APIs, webhook surfaces, event APIs, command APIs, query APIs, administration APIs, privacy/rights APIs, AI-tool APIs and device/edge APIs.

These surfaces may share infrastructure but MUST NOT silently share trust assumptions.

## 4. API boundary model

Every API boundary identifies provider, consumer, interface, operation, resource/target, context, authentication, authorization, data classification, privacy purpose, lifecycle, version, transport, timeout, retry, idempotency, concurrency, event behavior, evidence requirements, observability and jurisdiction.

Canonical boundary:
CONSUMER → API EDGE → CONTRACT → AUTHENTICATION → AUTHORIZATION → APPLICATION SERVICE → DOMAIN → EXECUTION/READ → EVENT/EVIDENCE.

The gateway is not the authority.

## 5. API provider and consumer

An API provider exposes a governed capability. Consumers may be people through clients, accounts, services, organizations, communities, providers, workers, devices, external systems or AI agents.

Consumer identity does not itself grant access. Client registration does not grant permission to every API.

## 6. Operation model

Every operation has an operation ID, domain, service, purpose, target, type, schemas, authentication requirement, authorization requirement, privacy constraints, state preconditions, idempotency, concurrency, timeout, retry, error, event, evidence, rate/resource limits, version and lifecycle.

Canonical classes are QUERY, COMMAND, SUBMIT, ACTION, EVENT DELIVERY and WEBHOOK RECEIPT.

## 7. Query and command separation

Queries answer what is currently known and MUST NOT hide consequential side effects. Commands request or initiate consequential operations and MUST expose their execution semantics.

This distinction protects retries, caching, authorization, observability and accountability.

## 8. Resource and domain model

API resources map to canonical domain concepts rather than database tables. Examples include identities, accounts, participants, contexts, authorities, resources, commands, events, evidence, organizations, communities, providers and LegaServices.

A table is not automatically an API resource. Each bounded domain remains the source of truth for its semantics.

## 9. Request and response contracts

Consequential requests should carry request identity, command identity, idempotency key where required, actor/context references, target, operation, client identity, API version, time, trace context, authorization reference and preconditions.

Responses should expose request identity, operation, resource reference, status, current state, version, outcome and appropriate event/evidence references.

ACCEPTED is not COMPLETED.

## 10. HTTP semantics

Where HTTP is used, LegaX follows HTTP semantics rather than inventing conflicting meanings. Safe and idempotent method semantics remain transport semantics; application operations may require additional idempotency controls.

POST may represent a command when the contract requires it. A method name never determines business authority.

## 11. OpenAPI and schemas

OpenAPI is the primary machine-readable contract for HTTP APIs. The current published OpenAPI specification is 3.2.1. OpenAPI descriptions should define operations, schemas, security schemes, errors, webhooks, examples, lifecycle and version metadata.

JSON Schema-compatible validation should define structure and constraints. Schema validity is not business validity and is not authorization.

## 12. Validation layers

API validation occurs across transport, syntax, schema, authentication, context, privacy, authorization, lifecycle, domain invariants, concurrency/preconditions, provider validation and execution validation.

Canonical order:
PARSE → SCHEMA VALIDATE → AUTHENTICATE → CONTEXT → AUTHORIZE → DOMAIN VALIDATE → PRECONDITIONS → EXECUTE.

## 13. Authentication

API authentication may use OAuth, access tokens, mTLS, signed requests, API keys where appropriate, workload identities, device credentials, service identities, sessions and approved external assertions.

Authentication establishes caller/session assurance. It does not decide what the caller may do.

## 14. Authorization

Every protected operation maps to Phase 06 Authorization and evaluates actor, identity, account, authentication, participation, context, role, capability, authority, scope, target, action, policy, lifecycle, security, privacy, SoD, approvals, time, jurisdiction and risk as applicable.

The API layer MUST NOT replace this with role-equals-access shortcuts.

## 15. Object, property and function authorization

Target objects require object-level authorization where scope matters. Fields may require separate property-level authorization. Administrative functions require explicit function-level authorization.

An authenticated caller may be authorized to read a participant name but not identity evidence, health data, payment credentials, precise location or security evidence.

## 16. Client and OAuth architecture

LegaX distinguishes public clients, confidential backends, service workloads, providers, devices and agent clients. Public clients MUST NOT be treated as safe locations for confidential secrets.

OAuth scopes are protocol boundary permissions and do not automatically equal LegaX Capability or Authority. OAuth security follows current best practice including RFC 9700.

## 17. Service-to-service security

Service identity is explicit. Calls carry workload identity, audience, operation, target, authorization context, trace context and request identity.

A compromised service MUST NOT inherit unrestricted authority over every downstream service.

## 18. Provider and webhook APIs

Provider APIs follow Phase 19:
LegaX Intent → Authorization → Command → Adapter → Provider API → Provider Outcome → Evidence → Reconciliation.

Webhooks follow:
RECEIVE → AUTHENTICATE → VERIFY → VALIDATE → REPLAY CHECK → DEDUPLICATE → RECORD ASSERTION → MAP → RECONCILE → CANONICAL EVENT IF JUSTIFIED.

Provider responses and webhooks are external assertions until validated.

## 19. Event APIs

Event APIs expose occurrences rather than commands and follow Phase 17. Event identity, type, version, source, subject, occurrence time, correlation, causation, trace, provenance, payload, integrity and retention semantics must remain explicit.

CloudEvents 1.0.2 may provide interoperable event envelope/binding semantics. Event delivery is not authorization.

## 20. Trace and correlation

APIs support request_id, correlation_id, causation_id, trace_id, span context, command_id, authorization_id, event_id and provider transaction identifiers where relevant.

W3C Trace Context provides standard propagation through traceparent and tracestate. Trace identifiers are observability identifiers, not authority identifiers.

## 21. Idempotency and retries

Consequential operations such as payments, bookings, access commands, orders, rides, work assignments and credential issuance require explicit retry safety.

Same idempotency key plus same operation and scope must return the same governed command result. Conflicting reuse is rejected. Idempotency never bypasses authorization.

## 22. Concurrency and preconditions

State-changing APIs use optimistic concurrency where necessary:
READ VERSION N → MODIFY → AUTHORIZE → CONDITIONAL WRITE VERSION N → VERSION N+1.

ETag and If-Match may protect against lost updates. Stale state MUST NOT silently overwrite newer canonical state.

## 23. Async and unknown outcomes

Long-running work should use a command/job resource:
SUBMIT → ACCEPTED → PROCESSING → OUTCOME → EVENT → FINAL STATE.

If a response is lost after a consequential request, the outcome may be UNKNOWN. The client must be able to query status or reconcile without blindly executing a duplicate action.

## 24. Error architecture

HTTP status communicates broad protocol semantics. RFC 9457 Problem Details should provide machine-readable API errors where appropriate.

Errors may include type, title, status, detail, instance, application error code, request ID, retry guidance, field errors and reconciliation references. Internal secrets and protected information must not leak.

## 25. Status and conflict semantics

LegaX should use HTTP status semantics consistently, including 200, 201, 202, 204, 400, 401, 403, 404, 409, 412, 422, 429 and appropriate 5xx responses.

A 409 or 412 may represent a conflict/precondition failure. A 429 represents rate limiting. Status codes do not replace domain outcome semantics.

## 26. Pagination, filtering and field selection

Collection APIs define stable ordering, cursor/page semantics, limits, expiry and consistency. Filtering and search define allowed fields/operators and must not become discovery side channels.

Field selection is subordinate to authorization and privacy. A client request for a field does not create permission to receive it.

## 27. Bulk operations

Bulk operations define maximum batch size, per-item authorization, idempotency, concurrency, atomicity and partial-failure semantics.

A collection-level permission does not automatically authorize every object. Partial success must be represented accurately.

## 28. Rate and resource governance

API consumption includes compute, storage, provider quota, SMS/email, biometrics, payments, AI inference and device operations.

Limits may be applied per consumer, identity, client, context, endpoint, resource, risk or cost. Rate limiting is a security/resource control, not authority.

## 29. Sensitive business flows

Payments, booking purchases, credential issuance, visitor invitations, access grants, account recovery, high-value marketplace actions and other sensitive flows require domain-specific controls such as velocity limits, step-up authentication, confirmation, approval, risk controls and idempotency.

## 30. Gateway and BFF architecture

Gateways may provide routing, TLS handling, authentication integration, rate/resource protection, schema enforcement and observability. They do not become the business authorization engine.

BFFs may adapt representations for clients but must not create divergent business authorization logic.

## 31. Cross-domain composition

Composite APIs preserve original actor, context, purpose, authorization, trace, causation, correlation and privacy restrictions.

A composite API cannot manufacture authority because it can technically call multiple downstream services.

## 32. Transactions and outbox

Distributed API operations must respect domain transaction boundaries. Cross-domain work should use commands, local transactions, events, workflows and reconciliation rather than pretending unrelated databases are one transaction.

Where state change must reliably produce an event:
STATE CHANGE + OUTBOX EVENT → SAME TRANSACTION → COMMIT → DISPATCH.

## 33. Inbox and deduplication

At-least-once event consumers should use inbox/deduplication processing:
RECEIVED → VALIDATED → DEDUPLICATION CHECK → PROCESSING → EFFECT → PROCESSED.

Replay must not blindly recreate historical side effects.

## 34. Versioning and evolution

API contract version, schema version, domain version, event version and provider adapter version are distinct.

Prefer additive changes, deprecation, migration windows and controlled removal. Breaking semantic changes require explicit compatibility treatment.

## 35. API inventory and lifecycle

Every deployed API has an inventory record containing API ID, owner, domain, environment, exposure, version, consumers, authentication, authorization, data classification, dependencies and lifecycle.

Lifecycle:
PROPOSED → DESIGNED → REVIEWED → APPROVED → IMPLEMENTED → TESTED → PUBLISHED → ACTIVE → DEGRADED → DEPRECATED → SUNSET → RETIRED.

## 36. Security architecture

API security maps to Phase 21 and covers broken object authorization, broken authentication, property/function authorization, resource exhaustion, sensitive business flows, SSRF, configuration, inventory and unsafe consumption.

All external input is untrusted. External API responses are untrusted until validated.

## 37. Input, output, SSRF and files

Validate types, size, encoding, formats, URLs, files and nested structures. Protect against injection, SSRF, path traversal, malicious files and oversized payloads.

Responses must filter secrets, protected data and internal details. File APIs require authorization, size/content controls, isolated storage and governed download capabilities.

## 38. Privacy architecture

**22 Privacy/Governance Architecture is the canonical privacy boundary for API data processing.** API serialization is a privacy boundary. Responses may expose less than the underlying database.

Purpose, minimization, field-level disclosure, retention, logging, exports, jurisdiction, consent where applicable and controller/processor roles follow Phase 22.

## 39. Caching and isolation

Caching must account for sensitivity, authorization, context, freshness and tenant/community/organization scope.

Cache keys must include relevant authorization dimensions. A cache hit is not permission and must not leak another actor's representation.

## 40. Resilience and fallback

Use bounded timeouts, retries, backoff, jitter and circuit-breaking where appropriate. Retries must not duplicate consequential effects. Fallbacks must not weaken authorization, privacy or safety.

During outages, availability recovery must not become authority recovery.

## 41. Emergency, device and physical APIs

Emergency APIs require bounded authority, scope, duration, reason, evidence and review.

Device and physical commands require device identity, resource, context, authorization, safety preconditions, enforcement and observation. Controller acknowledgement is not automatically physical-world truth.

## 42. Economic APIs

Economic APIs carry actor, payer/payee, amount, currency, purpose, authorization, idempotency, limits, provider, settlement state and reconciliation.

Payment acceptance is not settlement. A payment credential is not universal payment authority.

## 43. AI tool APIs

AI agents consume APIs as bounded tools. Each tool defines purpose, agent identity, allowed operations and targets, input/output schema, authorization, limits, confirmation, audit and revocation.

Tool availability is not authorization. Model output cannot manufacture authority or override policy.

## 44. Observability and audit

Meaningful API requests should support request identity, trace context, latency, outcome, status, operation, service, version and dependency data.

Do not log passwords, bearer tokens, private keys, raw biometric material, full payment credentials or unnecessary sensitive personal data.

High-impact operations require attributable audit evidence.

## 45. Testing and compatibility

Testing covers schema, contract, negative, authorization, property, concurrency, idempotency, retry, provider, version and end-to-end behavior.

Compatibility is syntactic, structural, semantic and authorization/privacy behavioral. A structurally compatible endpoint can still be a breaking semantic change.

## 46. Governance and change

Each API has an owner, steward, domain, lifecycle, consumers, classification, risk, version, security review, privacy review, contract review and change process.

Material changes to authorization, privacy, state semantics, provider behavior or security require impact analysis and controlled approval.

## 47. Environment separation

Development, test, staging and production are distinct environments. Production credentials must not be casually reused in lower environments. Production personal data should not be copied into test systems without explicit governance and minimization.

## 48. Relationship to 01–22

API Architecture is cross-cutting. It exposes the contracts established by 01 LegaX through 22 Privacy/Governance without replacing Identity, Authentication, Account, Administration, Authorization, Access, Resources, Economic & Commerce, Lifecycle, Events/Evidence/Intelligence, LegaServices, Domain/Relationship/State contracts, Command/Execution, Provider/Adapter, Community/Organization/Provider operating systems, Security or Privacy/Governance.

## 49. Canonical API flow

CLIENT/CONSUMER → DISCOVERY → VERSION → TRANSPORT → AUTHENTICATION → CONTEXT → PRIVACY/GOVERNANCE → AUTHORIZATION → CONTRACT VALIDATION → DOMAIN VALIDATION → PRECONDITION → COMMAND/QUERY → EXECUTION/READ → EVENT/EVIDENCE → RESPONSE/ASYNC OUTCOME → OBSERVABILITY → RECONCILIATION.

External:
LEGA X → AUTHORIZATION → ADAPTER → PROVIDER API → PROVIDER OUTCOME → VALIDATION → EVIDENCE → RECONCILIATION.

AI:
AGENT → TOOL API → TOOL AUTHORIZATION → DOMAIN AUTHORIZATION → EXECUTION → EVENT/EVIDENCE.

## 50. Final architectural rule

API Architecture is the governed interface layer through which LegaX exposes and consumes canonical capabilities without weakening identity, authorization, access, lifecycle, command, event, evidence, provider, security or privacy boundaries.

An API is not authority. An endpoint is not permission. A token is not authority. A gateway is not authorization. A schema is not authorization. A provider response is not automatically canonical truth. A webhook is not execution. A successful HTTP response is not necessarily business success. An AI tool is not authority.

API Architecture exposes the LegaX contracts; it does not replace them.

NO AUTHORIZATION → NO CONSEQUENTIAL API ACTION.
NO VALID CONTRACT → NO GOVERNED API CAPABILITY.
NO TRUSTED EXTERNAL INPUT WITHOUT VALIDATION.
NO HIDDEN SIDE EFFECTS.
NO PARALLEL AUTHORITY CHAIN.

Status: Architectural contract — implementation follows only after this gate and its dependent contracts are satisfied.

## 51. API architectural invariants

1. API is a contract, not merely a route.
2. Transport is not domain semantics.
3. OpenAPI is not authorization.
4. Authentication is not authorization.
5. Authorization is not API routing.
6. API registration is not permission.
7. Client registration is not authority.
8. API key possession is not authority.
9. OAuth scope is not automatically LegaX Capability.
10. OAuth scope is not automatically LegaX Authority.
11. Gateway allow-list is not business authorization.
12. Endpoint existence is not permission.
13. Resource ID possession is not object authorization.
14. Object authorization is required where target scope matters.
15. Property authorization may differ from object authorization.
16. Function authorization must be explicit.
17. Admin endpoints are not exempt from authorization.
18. Service identity is not unrestricted authority.
19. Provider identity is not LegaX authority.
20. Device identity is not person identity.
21. Device identity is not universal authority.
22. API response is not automatically an event.
23. Event is not automatically an API response.
24. Webhook receipt is not canonical truth.
25. Webhook signature is not business authorization.
26. Provider response is not automatically canonical truth.
27. Schema validity is not business validity.
28. Schema validity is not authorization.
29. HTTP success is not business success.
30. HTTP 202 is not completion.
31. Network timeout is not execution failure.
32. Unknown outcome must remain unknown.
33. Consequential APIs require idempotency where retries are possible.
34. Idempotency does not bypass authorization.
35. Duplicate requests must not create unintended duplicate effects.
36. Stale state must not silently overwrite newer state.
37. Conditional writes protect concurrency.
38. Cross-domain APIs must respect domain ownership.
39. Database tables are not automatically public API resources.
40. API projections are not automatically sources of truth.
41. Composite APIs cannot manufacture authority.
42. BFFs cannot silently duplicate divergent authorization logic.
43. Query operations must not hide consequential side effects.
44. Commands must expose consequential semantics.
45. Bulk authorization must respect individual targets.
46. Partial success must be represented accurately.
47. Rate limiting is not authorization.
48. Resource limits are not authority.
49. Sensitive business flows require domain controls.
50. API discovery is not permission.
51. Documentation is not implementation.
52. Documentation must reflect implementation.
53. Undocumented production endpoints are prohibited unless explicitly governed.
54. Debug endpoints must not escape into production.
55. API versions are distinct from domain versions.
56. Event versions are distinct from API versions.
57. Provider adapter versions are distinct from API versions.
58. Breaking semantic changes require compatibility treatment.
59. Deprecated APIs require migration governance.
60. API inventory must remain current.
61. Every production API has an owner.
62. Every consequential API has explicit authorization semantics.
63. Every sensitive API has privacy controls.
64. API logs must respect privacy.
65. API errors must not leak protected information.
66. API inputs are untrusted.
67. External API responses are untrusted until validated.
68. User-controlled URLs require SSRF controls.
69. File uploads require content/security controls.
70. API responses must be filtered for authorization and privacy.
71. Caches must respect authorization boundaries.
72. Cache keys must include relevant security dimensions.
73. Retries must not weaken safety.
74. Fallbacks must not weaken authorization.
75. Emergency APIs require bounded authority.
76. Offline APIs require bounded authority.
77. Availability does not justify bypassing authorization.
78. API gateways do not become parallel authority systems.
79. AI tool availability is not authorization.
80. No Authorization → No Consequential API Action.

## 52. Contradiction tests

1. Valid token + unauthorized target → deny.
2. Valid role + missing authority → deny.
3. Valid authority + expired lifecycle → deny.
4. Valid object ID + wrong community scope → deny.
5. Valid object access + unauthorized sensitive field → filter/deny.
6. Valid client + unauthorized function → deny.
7. Valid provider credential + no LegaX authorization → deny.
8. Valid device credential + wrong resource → deny.
9. Valid API key + expired key → deny.
10. Valid OAuth scope + missing domain authority → deny.
11. Gateway allows route + authorization denies → deny.
12. Schema-valid payment + missing payment authorization → deny.
13. Schema-valid access command + missing access authorization → deny.
14. POST timeout after execution → unknown/reconcile, not blind retry.
15. Duplicate idempotency key + same request → same governed result.
16. Duplicate idempotency key + different request → reject conflict.
17. Stale If-Match/version → reject and require re-evaluation.
18. Provider webhook signed correctly + conflicting provider state → reconcile.
19. Provider API says settled + canonical evidence insufficient → not canonical settled.
20. Webhook delivered twice → one effective processing result.
21. Event replay → must not blindly repeat side effect.
22. API returns 202 → client must not interpret as completion.
23. API returns 200 from gateway → domain execution may still fail.
24. Community admin requests unrelated private data → deny/minimize.
25. Organization admin requests unrelated employee data → deny/minimize.
26. Provider worker API requests another customer's data → deny.
27. AI agent has tool → tool authorization still required.
28. AI output claims authority → ignore claim.
29. User-supplied URL points to private network → block.
30. External API returns malicious payload → validate/sanitize/reject.
31. Debug endpoint exists in production → disable/remove.
32. Deprecated API has critical vulnerability → accelerate retirement.
33. Rate limit exceeded → rate response; never bypass auth.
34. Cache contains another actor's private response → isolation failure.
35. Bulk request contains one unauthorized target → apply per-item authorization.
36. Batch partially executes → return partial outcomes, not total success.
37. Provider outage → do not silently grant unrestricted local execution.
38. Emergency flag set → verify bounded emergency authority.
39. Privacy policy blocks field → API must not expose field despite role.
40. No Authorization → No Consequential API Action.

## 53. Readiness gate

API Architecture is implementation-ready only when:

1. API surface taxonomy is defined.
2. Every API has an owner.
3. Every API has a domain.
4. Every API has a lifecycle.
5. Every API has a version.
6. Every API has a documented consumer class.
7. Every operation has an operation ID.
8. Every operation has purpose.
9. Every operation has target semantics.
10. Query/command distinction is defined.
11. Request schema exists.
12. Response schema exists.
13. Error schema exists.
14. Authentication requirement exists.
15. Authorization requirement exists.
16. Object-level authorization is defined.
17. Property-level authorization is defined where required.
18. Function-level authorization is defined.
19. Context is represented.
20. Privacy requirements are represented.
21. Security requirements are represented.
22. Idempotency semantics are defined.
23. Concurrency semantics are defined.
24. Preconditions are defined.
25. Timeout behavior is defined.
26. Retry behavior is defined.
27. Unknown-outcome behavior is defined.
28. Async behavior is defined.
29. Event behavior is defined.
30. Evidence behavior is defined.
31. Trace context is defined.
32. Correlation semantics are defined.
33. Causation semantics are defined.
34. Rate limits are defined.
35. Resource limits are defined.
36. Sensitive business-flow controls are defined.
37. Pagination semantics are defined.
38. Filtering semantics are defined.
39. Sorting semantics are defined.
40. Field selection semantics are defined.
41. Bulk semantics are defined.
42. Partial success semantics are defined.
43. HTTP status semantics are defined.
44. Problem Details/error semantics are defined.
45. OpenAPI contract exists for HTTP APIs.
46. Schema validation exists.
47. Contract tests exist.
48. Negative tests exist.
49. Authorization tests exist.
50. Object authorization tests exist.
51. Property authorization tests exist.
52. Function authorization tests exist.
53. Idempotency tests exist.
54. Concurrency tests exist.
55. Retry tests exist.
56. Unknown-outcome tests exist.
57. Webhook authentication exists.
58. Webhook replay protection exists.
59. Webhook deduplication exists.
60. Provider response validation exists.
61. Provider API failures map to canonical states.
62. Event delivery semantics are defined.
63. Event replay semantics are defined.
64. Outbox behavior is defined where required.
65. Inbox/deduplication behavior is defined where required.
66. API versioning policy exists.
67. Schema evolution policy exists.
68. Deprecation policy exists.
69. Sunset policy exists.
70. API inventory exists.
71. Shadow API detection exists.
72. Debug endpoint controls exist.
73. Gateway responsibilities are defined.
74. Domain-service responsibilities are defined.
75. BFF responsibilities are defined.
76. Composite API rules exist.
77. Cross-domain API rules exist.
78. Database/API boundary is defined.
79. Source-of-truth ownership is defined.
80. Projection freshness is defined.
81. Cache policy exists.
82. Cache authorization isolation exists.
83. Input validation exists.
84. Output filtering exists.
85. SSRF controls exist.
86. File upload controls exist.
87. Request-size limits exist.
88. Authentication credential lifecycle exists.
89. OAuth security follows current BCP.
90. Service-to-service identity exists.
91. Provider adapter boundary exists.
92. AI tool API boundary exists.
93. Device API security exists.
94. Physical-action safety controls exist.
95. Economic-action safety controls exist.
96. Privacy controls map to 22.
97. Security controls map to 21.
98. Command execution maps to 16.
99. Event semantics map to 17.
100. No Authorization → No Consequential API Action.

## 54. Final architectural rule

API Architecture is implementation-ready only when the API surface, contracts, security, privacy, authorization, lifecycle, reliability, observability, event, evidence and governance boundaries are executable and testable without creating a parallel authority system.

**API Architecture exposes LegaX contracts; it does not replace them.**

**NO AUTHORIZATION → NO CONSEQUENTIAL API ACTION.**

**NO VALID CONTRACT → NO GOVERNED API CAPABILITY.**

**NO TRUSTED EXTERNAL INPUT WITHOUT VALIDATION.**

**NO HIDDEN SIDE EFFECTS.**

**NO PARALLEL AUTHORITY CHAIN.**

**Status:** Architectural contract — implementation follows only after this gate and its dependent contracts are satisfied.
