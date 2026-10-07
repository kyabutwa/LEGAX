# LegaX — Intelligence Implementation

## 29 — Intelligence Implementation

**Status:** Foundational implementation architecture — implementation-grade.

## 1. Purpose

Intelligence Implementation defines how LegaX turns the canonical Intelligence contract into a production-capable, governed software system.

Phase 11 defines what Intelligence means in LegaX. Phase 27 defines governed retrieval and grounding. Phase 29 defines how intelligence capabilities are actually implemented: permitted inputs, context preparation, model/rule execution, structured outputs, uncertainty, evaluation, provenance, review, policy enforcement, bounded agent/tool use, observability, lifecycle, rollback and continuous evaluation.

The goal is not merely to add an LLM. The goal is to make Intelligence a governed, attributable, measurable and bounded production capability.

## 2. Architectural position

Canonical intelligence path:

**PURPOSE → AUTHORIZED INPUTS → CONTEXT → RAG/KNOWLEDGE/FEATURES → MODEL/RULE/ANALYTICS → OUTPUT → VALIDATION → UNCERTAINTY → ATTRIBUTION → INTELLIGENCE RECORD → REVIEW/DECISION SUPPORT**

For consequential workflows:

**REQUEST → AUTHENTICATION → CONTEXT → AUTHORIZATION → INTELLIGENCE REQUEST → GOVERNED RETRIEVAL/FEATURES → MODEL/ANALYSIS → OUTPUT VALIDATION → PROPOSAL → AUTHORIZATION → COMMAND → CORE EXECUTION → OUTCOME → EVENT → EVIDENCE**

For agents:

**AGENT IDENTITY → TASK SCOPE → TOOL DISCOVERY → TOOL AUTHORIZATION → MODEL/PLANNER → PROPOSED TOOL CALL → AUTHORIZATION → COMMAND → CORE EXECUTION → RESULT → EVENT/EVIDENCE**

## 3. Core definition

**Intelligence Implementation is the governed runtime and engineering architecture through which LegaX produces, validates, stores, evaluates, serves and monitors intelligence outputs from permitted data, evidence, knowledge, models, rules, algorithms and context while preserving provenance, uncertainty, accountability, privacy, security and the separation between intelligence and authority.**

Intelligence may include search, classification, extraction, summarization, translation, matching, anomaly detection, forecasting, ranking, recommendation, prediction, optimization, decision support, explanation, correlation, investigation assistance, knowledge grounding and agentic planning.

## 4. Non-duplication rule

**INTELLIGENCE IMPLEMENTATION REALIZES INTELLIGENCE; IT DOES NOT CREATE A PARALLEL IDENTITY, AUTHENTICATION, AUTHORIZATION, ACCESS, AUTHORITY, EXECUTION, EVENT, EVIDENCE, PRIVACY, SECURITY, RAG, DATABASE OR DOMAIN SOURCE-OF-TRUTH SYSTEM.**

Intelligence does not replace Identity, Authentication, Account, Authority, Authorization, Access, Lifecycle & Policy, Events, Evidence, LegaServices, canonical domain/state/command/event/evidence contracts, Providers, Community/Organization/Provider operating systems, Security, Privacy/Governance, API Architecture, Core Execution, Neon/PostgreSQL, CRM or RAG.

A model is not a source of authority.

A prompt is not a policy.

A context window is not a permission boundary.

A vector score is not truth.

A confidence score is not authorization.

A tool is not authority.

An agent is not an administrator.

A model output is not a state transition.

A scheduled inference is not authorization.

A database connection is not business authority.

## 5. Foundational distinctions

LegaX Intelligence must preserve:

**INPUT ≠ EVIDENCE**

**EVIDENCE ≠ TRUTH**

**OBSERVATION ≠ VERIFICATION**

**INFERENCE ≠ FACT**

**PREDICTION ≠ ACTUAL STATE**

**RECOMMENDATION ≠ DECISION**

**DECISION SUPPORT ≠ AUTHORIZATION**

**MODEL CONFIDENCE ≠ AUTHORITY**

**MODEL OUTPUT ≠ CANONICAL STATE**

**AI IDENTITY ≠ HUMAN IDENTITY**

**AGENT IDENTITY ≠ AGENT AUTHORITY**

**TOOL AVAILABILITY ≠ TOOL AUTHORIZATION**

**RETRIEVAL ≠ PERMISSION**

**RAG CONTEXT ≠ SOURCE OF TRUTH**

**AUTOMATION ≠ AUTHORITY**

**SCHEDULE ≠ AUTHORIZATION**

These distinctions must exist in data models, APIs, runtime checks, UI semantics, events, evidence and tests.

## 6. Intelligence capability contract

Every production intelligence capability must define:

- capability ID and type;
- purpose and owner;
- domain/service;
- intended users and subjects;
- allowed contexts;
- permitted and prohibited inputs;
- output type;
- risk tier;
- jurisdiction;
- model/rule requirements;
- retrieval requirements;
- evaluation requirements;
- human-review requirements;
- authorization requirements;
- tool permissions;
- retention;
- privacy/security constraints;
- latency/resource target;
- lifecycle;
- version;
- effective/review time;
- rollback strategy.

A model is not production-ready merely because it produces plausible output.

## 7. Capability lifecycle

**PROPOSED → ASSESSED → DESIGNED → DEVELOPED → EVALUATED → APPROVED → STAGED → ACTIVE → MONITORED → DEGRADED → RESTRICTED → SUSPENDED → RETIRED**

High-risk capabilities may also use SHADOW_ONLY, HUMAN_REVIEW_REQUIRED, LIMITED_RELEASE and QUARANTINED.

Lifecycle transitions follow Phase 10.

## 8. Workload classes

### Informational intelligence
Answers or explains without changing canonical state.

### Analytical intelligence
Produces analysis for decision support.

### Recommendation intelligence
Proposes a course of action.

### Decision-support intelligence
Structures information for a governed decision-maker.

### Agentic intelligence
Plans or proposes tool operations.

### Autonomous execution
Not a default capability. Where explicitly approved, it requires bounded authority, authorization, limits, expiry, monitoring, rollback/compensation and auditability.

## 9. Risk tiers

**T0 — Low-impact informational**

**T1 — Decision support**

**T2 — Sensitive decision support**

**T3 — High-impact operational intelligence**

**T4 — Consequential agentic execution**

Risk tier determines evaluation, controls, review and monitoring requirements. Risk tier never grants permission.

## 10. Input authorization

Before protected data enters intelligence processing:

**REQUESTER → AUTHENTICATION → CONTEXT → PURPOSE → DATA SCOPE → AUTHORIZATION → RETRIEVAL/INPUT → INTELLIGENCE**

The model must not receive data merely because a service account can technically read it.

Database privileges do not substitute for business authorization.

RAG retrieval must enforce its access-aware boundary under Phase 27.

Cached intelligence context must preserve the authorization scope under which it was created.

## 11. Context construction

Context may combine user request, authorized domain state, RAG material, evidence references, events, current resource state, policy, service configuration, provider assertions, structured features and historical observations.

Every material context item should preserve:

- source;
- provenance;
- scope;
- classification;
- authorization basis;
- timestamp/freshness;
- truth status;
- version;
- sensitivity;
- permitted purpose.

The context assembler must not collapse authoritative, verified, observed, inferred and proposed information into one undifferentiated prompt.

## 12. Truth-state preservation

Context and output pipelines must retain:

- DECLARED;
- OBSERVED;
- VERIFIED;
- AUTHORITATIVE;
- INFERRED;
- PROPOSED;
- UNKNOWN.

The model must not convert INFERRED to VERIFIED or PROPOSED to AUTHORITATIVE without an explicit governed process.

Unknown remains unknown when evidence is insufficient.

## 13. Feature and signal preparation

Analytical features may derive from events, resource state, economic records, service state, temporal patterns, telemetry, provider observations, approved external data and user-provided information.

Feature pipelines preserve:

- definition;
- source;
- transformation;
- version;
- time window;
- freshness;
- missingness;
- normalization;
- leakage controls;
- authorization scope;
- privacy classification.

A feature is not automatically evidence.

## 14. Temporal correctness

Intelligence systems distinguish occurrence, observation, ingestion, feature window, model execution and policy-effective time.

Training/evaluation pipelines must prevent future information leaking into historical prediction tasks.

Operational inference must not silently use data unavailable at the relevant decision point.

Freshness requirements must be explicit.

## 15. Model abstraction

LegaX should use a model abstraction rather than binding business services directly to one vendor.

Model identity should include:

- model ID;
- provider;
- family/version;
- capability/modality;
- input/output constraints;
- context limits;
- safety configuration;
- evaluation profile;
- jurisdiction/region;
- data-processing constraints;
- lifecycle;
- approved use cases.

External model providers follow Phase 19.

A provider credential is not LegaX authority.

## 16. Model routing

Routing may consider capability, latency, quality, cost, availability, data sensitivity, jurisdiction, modality, context size, safety, risk tier and workload.

Fallback models must be approved for the same data and use.

Model fallback is not authorization fallback.

Material behavior changes may require re-evaluation.

## 17. Prompt and instruction architecture

Instructions are separated conceptually into:

- platform/system constraints;
- capability instructions;
- policy constraints;
- application instructions;
- user request;
- retrieved context;
- tool results;
- model output.

Untrusted retrieved content cannot override system constraints or authorization.

Prompt injection is an input-security problem.

A document or user prompt cannot manufacture authority.

## 18. Structured output

Machine-consumed intelligence should prefer structured outputs containing:

- schema;
- semantic type;
- confidence/uncertainty where meaningful;
- provenance references;
- limitations;
- policy/version references;
- observations separate from proposed actions;
- validation status.

Malformed or schema-invalid output is not a successful intelligence result.

Arbitrary prose must not be interpreted as a business command.

## 19. Output validation

**MODEL OUTPUT → SCHEMA VALIDATION → SEMANTIC VALIDATION → POLICY VALIDATION → SAFETY/SECURITY VALIDATION → PROVENANCE CHECK → UNCERTAINTY CHECK → OUTPUT ACCEPTANCE**

Detect schema violations, unsupported claims, missing provenance, contradictory values, unauthorized references, sensitive-data leakage, unsafe tool requests, unsupported actions, policy conflicts, stale context, hallucinated identifiers and invalid targets.

Failure to validate means failure of the intelligence operation.

## 20. Grounding validation

When RAG is used, evaluate source relevance, source authority, freshness, retrieval completeness, citation coverage, contradictions, unsupported claims, source scope and authorization scope.

A citation shows that a source was referenced; it does not automatically prove the generated claim.

High-impact use cases should require sufficient source support before definitive output.

## 21. Uncertainty and abstention

Material uncertainty must be represented.

Possible outcomes:

- HIGH_CONFIDENCE;
- MEDIUM_CONFIDENCE;
- LOW_CONFIDENCE;
- INSUFFICIENT_EVIDENCE;
- CONFLICTING_EVIDENCE;
- UNKNOWN;
- NOT_APPLICABLE.

Confidence must have defined semantics. It never becomes authority.

The system must support abstention for insufficient information, conflicting evidence, unauthorized data, stale context, policy restrictions and human-review requirements.

## 22. Human review

Review may be required for high impact, conflicting evidence, material uncertainty, legal/policy requirements, consequential proposals, security/safety conditions and exceptions.

**INTELLIGENCE OUTPUT → REVIEW REQUEST → REVIEWER AUTHENTICATION → REVIEW CONTEXT → REVIEW AUTHORIZATION → ACCEPT/REJECT/AMEND/ESCALATE → DECISION RECORD → EVENT/EVIDENCE**

Reviewer approval does not automatically authorize every downstream action.

## 23. Recommendation lifecycle

**GENERATED → VALIDATED → PRESENTED → ACCEPTED/REJECTED/DEFERRED → AUTHORIZATION IF ACTION → COMMAND IF AUTHORIZED → EXECUTION → OUTCOME → FEEDBACK**

A recommendation remains a recommendation until a governed decision and authorization process changes its status.

## 24. Decision boundary

**INTELLIGENCE → DECISION SUPPORT → AUTHORIZED DECISION-MAKER/SERVICE → DECISION → AUTHORIZATION WHERE REQUIRED → COMMAND → EXECUTION**

The system must identify whether it is observing, recommending, assisting a decision, making a bounded non-consequential classification, or proposing a command.

## 25. Agent architecture

An agent is an intelligence capability that can maintain task state and use governed tools.

Minimum agent identity:

- agent ID;
- capability ID;
- task/execution identity;
- model identity;
- owner;
- scope;
- allowed tools;
- allowed operations;
- allowed targets;
- data scope;
- time limit;
- resource budget;
- approval requirements;
- revocation state.

An agent must not inherit unrestricted authority from its creator.

Delegated authority must be explicit and bounded.

## 26. Agent tool boundary

**AGENT → TOOL DISCOVERY → TOOL ELIGIBILITY → TOOL AUTHORIZATION → TOOL INPUT VALIDATION → COMMAND → CORE EXECUTION → RESULT → EVENT/EVIDENCE**

Tool discovery says what exists. It does not grant permission.

Tool documentation is not authority.

Tool results are external/untrusted input until validated.

## 27. Agent loop

**OBSERVE → REASON → PROPOSE → VALIDATE → AUTHORIZE → ACT → OBSERVE RESULT → UPDATE CONTEXT → STOP/CONTINUE**

Every loop must have maximum iterations, time/resource limits, tool-call limits, action/target limits, cancellation, revocation, failure handling, unknown-outcome handling and audit/evidence.

No loop may run indefinitely.

## 28. Tool authorization freshness

For consequential agent actions, authorization must be evaluated close to execution.

If target, amount, recipient, scope, operation or material parameters change, determine whether reauthorization is required.

Material command mutation cannot be hidden inside agent execution.

## 29. Agent memory

Separate:

- task-local working memory;
- session memory;
- approved persistent memory;
- domain state;
- RAG knowledge;
- evidence.

Persistent memory is not automatically truth or authority.

Memory requires owner, scope, source, timestamp, retention, deletion, access policy, sensitivity and provenance.

## 30. Learning and feedback

Feedback may include human acceptance/rejection, corrections, actual outcomes, provider outcomes, reconciliation results, evaluation results and incidents.

Feedback does not automatically become training data.

Training use requires separate privacy, security, provenance, purpose and retention governance.

## 31. Training architecture

Where training/fine-tuning is used:

**DATASET PROPOSAL → DATA INVENTORY → USE ASSESSMENT → QUALITY CHECK → PRIVACY/SECURITY REVIEW → PROVENANCE → VERSIONED DATASET → TRAIN/FINE-TUNE → EVALUATE → APPROVE → REGISTER MODEL → DEPLOY**

Dataset identity must preserve sources, collection period, transformations, filtering, labeling, exclusions, authorization, privacy class, limitations and quality.

## 32. Evaluation architecture

Evaluation is continuous and should cover:

- task performance;
- validity/reliability;
- grounding;
- factuality where measurable;
- robustness;
- security;
- privacy;
- fairness/bias where relevant;
- harmful output;
- refusal/abstention;
- calibration;
- latency;
- cost;
- tool-use correctness;
- authorization-boundary adherence;
- regression;
- drift.

NIST AI RMF uses Govern, Map, Measure and Manage as lifecycle risk-management functions and describes governance as cross-cutting. The framework is being revised, so LegaX must version external guidance rather than treating it as immutable. 

## 33. Evaluation datasets

Evaluation sets should include normal, edge, adversarial, ambiguous, conflicting-evidence, missing-data, stale-data, authorization-boundary, privacy-leakage, prompt-injection, tool-misuse, cross-tenant, multilingual, domain-specific and regression cases.

Sensitive production data should not be copied into evaluation environments without governance.

## 34. Security testing

At minimum test:

- prompt/indirect injection;
- sensitive information disclosure;
- insecure output handling;
- data poisoning;
- model/resource denial;
- supply-chain compromise;
- excessive agency;
- vector/embedding weaknesses;
- tool abuse;
- authorization bypass;
- cross-tenant leakage;
- data exfiltration;
- unsafe fallback.

OWASP's 2025 GenAI guidance explicitly expands attention to vector/embedding weaknesses, sensitive information disclosure and excessive agency, all directly relevant to LegaX intelligence boundaries.

## 35. Privacy-preserving intelligence

Controls may include purpose limitation, minimization, field filtering, redaction, pseudonymization, scoped retrieval, tenant isolation, output filtering, retention limits, deletion propagation, sensitive-data restrictions and jurisdiction-aware routing.

A model receives the minimum authorized information needed for the capability.

## 36. Model/provider boundary

**INTELLIGENCE REQUEST → LEGAX AUTHORIZATION → MODEL ROUTER → PROVIDER ADAPTER → EXTERNAL MODEL → PROVIDER RESPONSE → VALIDATION → INTELLIGENCE OUTPUT**

Provider output is a provider assertion/output, not automatically canonical truth.

Provider success is not business success.

Provider credentials are not LegaX authority.

## 37. API implementation

Intelligence APIs follow Phase 23.

Conceptual operations include creating requests, retrieving results/provenance, submitting reviews, accepting/rejecting recommendations, evaluating capabilities, inspecting model metadata, executing approved agent tasks and cancelling tasks.

Every consequential endpoint enforces:

**AUTHENTICATION → CONTEXT → AUTHORIZATION → VALIDATION → COMMAND → CORE EXECUTION**

Query endpoints must not hide side effects.

## 38. Command integration

Intelligence never directly performs domain mutations.

**INTELLIGENCE PROPOSAL → AUTHORIZATION → COMMAND → CORE EXECUTION → DOMAIN OUTCOME**

Service-specific actions use the Phase 16 command contract and Phase 24 execution engine.

## 39. Event and evidence integration

Intelligence events follow Phase 17. Examples include request, started, context assembled, model invoked, output generated/rejected, recommendation generated, review requested/completed, action proposed/authorized/rejected, tool requested/executed, evaluation completed and capability degraded/suspended.

Events record occurrences.

Evidence records supporting material and provenance.

## 40. Observability

Measure request/success/abstention/validation failure, latency, resource consumption, cost, retrieval quality, grounding coverage, tool calls, authorization denials, human review, model fallback, provider failures, drift, evaluation and incidents.

Trace:

**REQUEST → AUTH → CONTEXT → RETRIEVAL → MODEL → VALIDATION → TOOL → AUTHORIZATION → EXECUTION → EVENT**

Logs must avoid leaking protected prompts, credentials, secrets and unnecessary personal data.

OpenTelemetry semantic conventions provide common telemetry naming and correlation; LegaX should use them where useful without replacing the canonical event/evidence contracts.

## 41. Cost and resource controls

Each capability defines request limits, resource/token budgets, concurrency, rate limits, timeouts, retry limits, fallback rules and provider budgets.

Unbounded model loops, retrieval, tool execution and resource consumption are prohibited.

## 42. Reliability and failure

Distinguish:

- SUCCESS;
- PARTIAL;
- FAILED;
- TIMEOUT;
- CANCELLED;
- REJECTED;
- ABSTAINED;
- UNKNOWN;
- HUMAN_REVIEW_REQUIRED;
- PROVIDER_UNAVAILABLE;
- POLICY_BLOCKED;
- INSUFFICIENT_EVIDENCE.

A timeout does not prove that execution did not occur.

Unknown consequential outcomes require reconciliation.

## 43. Retry semantics

Retries must be bounded and safe.

For consequential tool operations, retry requires the command/execution contract and provider semantics to establish safety.

**UNKNOWN OUTCOME ≠ SAFE TO RETRY**

## 44. Caching

Caches may store model outputs, retrieval results, embeddings, feature results, explanations and tool results.

They must preserve authorization scope, tenant scope, classification, source/model version and freshness.

Cache hits never bypass authorization.

## 45. RAG integration

Phase 27 remains authoritative:

**AUTHORIZED REQUEST → RAG REQUEST → ACCESS-AWARE RETRIEVAL → RANKING → CONTEXT → INTELLIGENCE**

If intelligence proposes an action:

**RAG → INTELLIGENCE → PROPOSAL → AUTHORIZATION → COMMAND**

Retrieved instructions remain untrusted unless independently established as applicable policy.

## 46. CRM/community/organization/provider integration

CRM may request summarization, classification, next-best-action, relationship analysis and support routing. CRM projections must not silently become canonical customer state.

Community intelligence may support service demand, facilities and operations but cannot infer membership as fact.

Organization intelligence may support planning and risk analysis but cannot manufacture organizational authority.

Provider intelligence may support dispatch, maintenance, workforce scheduling and service demand but cannot become LegaX authority.

## 47. Physical and economic intelligence

Physical path:

**SENSOR/OBSERVATION → VALIDATION → INTELLIGENCE → RECOMMENDATION/ALERT → AUTHORIZATION IF ACTION → ACCESS/COMMAND → PHYSICAL EXECUTION → OBSERVATION → RECONCILIATION**

Economic intelligence may support forecasting, anomaly and fraud signals, but:

**SIGNAL ≠ FRAUD FINDING**

**PREDICTION ≠ PAYMENT AUTHORIZATION**

**RECOMMENDATION ≠ PAYMENT**

## 48. Identity and security intelligence

Identity intelligence may assist duplicate detection, evidence review and anomaly detection but cannot silently create or merge identities.

A biometric similarity score is an assertion/verification input, not authority.

Security intelligence may generate signals, hypotheses and response recommendations:

**SIGNAL → ANALYSIS → FINDING/HYPOTHESIS → REVIEW/VALIDATION → AUTHORIZED RESPONSE**

An anomaly is not guilt.

## 49. Governance and policy intelligence

AI may summarize policies, detect conflicts, identify missing controls and propose amendments.

It cannot silently change policy.

**PROPOSAL → REVIEW → APPROVAL → EFFECTIVE POLICY → AUTHORIZATION**

AI-generated policy text remains proposed until governed adoption.

## 50. Drift and production evaluation

Monitor distribution shift, concept drift, provider/model changes, retrieval changes, data quality, output quality, refusals, privacy/security incidents, tool errors and human overrides.

Response:

**DETECT → ASSESS → CLASSIFY → RESTRICT/CONTINUE → REMEDIATE → RE-EVALUATE → APPROVE → RESUME**

Drift detection does not automatically alter authority.

## 51. Governed registries

Maintain registries for:

- intelligence capabilities;
- models/model versions;
- prompts/instructions where material;
- tools;
- evaluations;
- datasets.

These registries describe governed assets; they do not become parallel authority systems.

## 52. Versioning and reproducibility

Version independently:

- capability;
- model;
- prompt/instructions;
- retrieval/index;
- embedding/reranker;
- dataset;
- feature definitions;
- tools;
- evaluation suite;
- output schema;
- policy.

Material results should retain sufficient references to reproduce or reconstruct the processing path, subject to privacy/retention rules.

## 53. Deletion and supersession

When source information is deleted, corrected or superseded:

**SOURCE CHANGE → IMPACT DETECTION → INDEX/CACHE UPDATE → DERIVED-OUTPUT REVIEW → RETENTION/DELETION ACTION → EVIDENCE**

Derived intelligence must not continue presenting revoked/deleted information as current where governance requires removal or correction.

## 54. Safety boundaries

Safety controls must cover harmful instructions, unsafe physical actions, sensitive data, credential exposure, financial actions, access-control actions, security operations and high-impact decisions.

Safety filters do not replace authorization.

Authorization does not replace safety.

## 55. Alignment with prior architecture

Phase 10 owns lifecycle/policy.

Phase 15 owns state machines.

Phase 16 owns command contracts.

Phase 17 owns event semantics.

Phase 18 owns evidence semantics.

Phase 19 owns provider integration.

Phase 21 owns security.

Phase 22 owns privacy/governance.

Phase 23 owns APIs.

Phase 24 owns core execution.

Phase 25 owns persistence.

Phase 26 owns CRM.

Phase 27 owns RAG.

Phase 28 owns LegaService implementation.

Phase 29 implements Intelligence while remaining subordinate to all of them.

## 56. Production rollout

Recommended:

**OFFLINE EVALUATION → SHADOW → INTERNAL → LIMITED → CONTROLLED → GENERAL → CONTINUOUS MONITORING**

Shadow execution must not create real side effects.

High-risk capabilities should not move directly to unrestricted production.

## 57. Kill switch and revocation

High-impact capabilities must support:

- stopping new executions;
- cancelling eligible agent tasks;
- revoking tool access;
- suspending model/provider;
- disabling capability;
- quarantining outputs;
- human-review routing;
- rollback.

Emergency controls remain authorized and auditable.

## 58. Incident response

Intelligence incidents include unauthorized disclosure, prompt-injection success, tool misuse, agent runaway, cross-tenant leakage, unsafe output, systematic hallucination, provider compromise, dataset poisoning, evaluation regression and unauthorized action proposals.

Incident reconstruction should preserve:

**WHO/WHAT → INPUT → CONTEXT → MODEL → OUTPUT → TOOL → AUTHORIZATION → COMMAND → EXECUTION → OUTCOME**

## 59. Testing strategy

Test:

- unit;
- domain;
- integration;
- API/provider/model/tool contracts;
- security;
- privacy;
- evaluation;
- concurrency;
- failure;
- agent;
- end-to-end.

End-to-end consequential verification must traverse authorization, command, execution, event and evidence.

## 60. Production verification

For non-consequential intelligence:

**DEPLOY → HEALTH → AUTHENTICATE → DATA AUTHORIZATION → CONTEXT → RETRIEVAL → MODEL → OUTPUT VALIDATION → ATTRIBUTION → RESULT → EVENT/EVIDENCE**

For agentic/consequential capability:

**… → PROPOSAL → AUTHORIZATION → COMMAND → CORE EXECUTION → OUTCOME → EVENT → EVIDENCE → RECONCILIATION**

## 61. Readiness gate

A production capability must establish:

1. purpose and owner;
2. risk tier;
3. permitted/prohibited inputs;
4. input authorization;
5. truth-state preservation;
6. provenance;
7. model/provider version;
8. output schema validation;
9. semantic validation;
10. uncertainty and abstention;
11. RAG authorization;
12. agent identity where applicable;
13. tool authorization;
14. bounded agent loops;
15. consequential-action authorization;
16. Phase 16 command binding;
17. Phase 24 execution;
18. domain source of truth;
19. Phase 17 events;
20. Phase 18 evidence;
21. provider boundary;
22. security tests;
23. privacy tests;
24. tenant isolation;
25. deletion/supersession;
26. retry/unknown-outcome handling;
27. drift monitoring;
28. cost controls;
29. rollback/kill switch where required;
30. human review where required;
31. versioned evaluation;
32. incident response;
33. safe fallback;
34. reproducibility;
35. no hidden second authority chain;
36. no hidden second execution engine;
37. no hidden parallel source of truth.

If any required item is unresolved, the capability is not production-ready.

## 62. Canonical implementation invariants

1. Intelligence implementation realizes a defined capability.
2. Intelligence does not redefine canonical domain semantics.
3. Intelligence does not create authority.
4. Intelligence does not create authorization.
5. Intelligence does not create identity.
6. Model output is not canonical truth by default.
7. Recommendation is not decision.
8. Decision support is not authorization.
9. Retrieval is not permission.
10. RAG context is not authority.
11. Tool availability is not authorization.
12. Agent identity is not agent authority.
13. Schedule is not authority.
14. Queue possession is not authority.
15. Database access is not business authorization.
16. Provider credentials are provider-scoped.
17. External output is source-scoped.
18. User/retrieved/model content is untrusted until validated.
19. Inputs must be authorized for their purpose.
20. Sensitive inputs must be minimized.
21. Tenant boundaries survive intelligence processing.
22. Truth states survive context assembly.
23. Provenance survives material transformations.
24. Material outputs are attributable to versions.
25. Output schemas are validated.
26. Semantic outputs are validated.
27. Intelligence supports abstention.
28. Uncertainty does not grant authority.
29. Prediction does not establish actual state.
30. Inference does not silently become verification.
31. Recommendation does not silently become canonical state.
32. High-impact intelligence receives stronger governance.
33. Human review is enforced where required.
34. Agent tools require explicit authorization.
35. Agent loops are bounded.
36. Agent target changes are revalidated.
37. Consequential actions require authorization.
38. Consequential commands use Phase 16.
39. Consequential execution uses Phase 24.
40. Domain state remains domain-owned.
41. Intelligence is not a second execution engine.
42. Events follow Phase 17.
43. Evidence follows Phase 18.
44. RAG follows Phase 27.
45. APIs follow Phase 23.
46. Security follows Phase 21.
47. Privacy follows Phase 22.
48. Persistence follows Phase 25.
49. Services follow Phase 28.
50. Providers follow Phase 19.
51. Lifecycle follows Phase 10.
52. State follows Phase 15.
53. Commands retain material meaning unless reauthorized.
54. Model fallbacks require equivalent governance.
55. Unknown outcomes are not assumed successful.
56. Retries are bounded and safe.
57. Caches preserve authorization scope.
58. Bulk intelligence preserves item-level authorization.
59. Cross-tenant data cannot leak through shared intelligence.
60. Tool results are untrusted until validated.
61. Model output is never raw executable authority.
62. Sensitive prompts/outputs have governed retention.
63. Model providers remain external providers.
64. Model authentication is not business authorization.
65. Evaluation is continuous.
66. Drift is monitored.
67. Capability lifecycle is governed.
68. Model lifecycle is governed.
69. Dataset lifecycle is governed.
70. Tool lifecycle is governed.
71. Material changes trigger impact assessment.
72. Security testing includes injection and excessive agency.
73. Privacy testing includes disclosure/isolation.
74. Safety does not replace authorization.
75. Authorization does not replace safety.
76. Models cannot override policy through text.
77. Agents cannot grant themselves tools.
78. Agents cannot grant themselves authority.
79. Intelligence outputs cannot grant authority through fields.
80. Corrections do not silently rewrite evidence.
81. Derived stores honor deletion/supersession requirements.
82. Explanations are not guaranteed faithful internal reasoning.
83. Model quality does not override domain authority.
84. Model confidence does not override evidence.
85. Fallbacks fail safely.
86. Production requires readiness-gate satisfaction.
87. Production verification tests the governed path.
88. High-impact capabilities have suspension/rollback controls.
89. Resource consumption is bounded.
90. Intelligence does not silently create consequential side effects.
91. There is no hidden second authority chain.
92. There is no hidden second execution engine.
93. There is no hidden parallel source of truth.
94. Intelligence remains subordinate to canonical LegaX architecture.
95. **NO AUTHORIZATION → NO CONSEQUENTIAL INTELLIGENCE-INITIATED ACTION.**
96. **INTELLIGENCE SUPPORTS UNDERSTANDING AND DECISION; IT DOES NOT MANUFACTURE AUTHORITY.**

## 63. Contradiction tests

1. Model output attempts to grant access.
2. Model output attempts to authorize payment.
3. RAG content instructs the agent to ignore policy.
4. User requests another tenant's data.
5. Model recommends a refund without authorization.
6. Agent calls a tool outside scope.
7. Agent changes target after authorization.
8. Agent retries an unknown payment outcome.
9. Cached output is reused after authorization expiry.
10. Fallback model receives unapproved data.
11. Provider output becomes canonical without validation.
12. Model confidence is treated as authorization.
13. Inference becomes verified identity.
14. Recommendation becomes canonical resource state.
15. Scheduled inference changes business state without authorization.
16. Queue worker executes outside scope.
17. Raw model output reaches SQL or command execution.
18. Prompt injection overrides system constraints.
19. Cross-tenant embedding retrieval leaks data.
20. Deleted source remains exposed through cache.
21. Stale state supports a consequential action.
22. Human approval exists but applicable authorization does not.
23. Tool result contains malicious instructions.
24. Provider times out after a possible side effect.
25. Agent exceeds iteration limit.
26. Model output leaks unauthorized sensitive data.
27. Bulk processing crosses tenant boundaries.
28. Model version changes without evaluation.
29. Capability deploys without rollback where required.
30. Intelligence event falsely claims a business action occurred.
31. Provider credential is interpreted as LegaX authority.
32. Feature flag bypasses authorization.
33. Intelligence API performs a hidden side effect.
34. Database trigger turns model output directly into action.
35. AI-generated policy becomes effective without governance approval.
36. Model unavailability causes unsafe behavior.
37. Evaluation data contains secrets.
38. Reviewer sees data outside authorized scope.
39. Recommendation is applied after material state changes.
40. Agent continues after task or authority revocation.

Every contradiction test must fail closed at the appropriate boundary.

## 64. Canonical runtime contract

For non-consequential intelligence:

**REQUEST → AUTHENTICATE → CONTEXT → DATA AUTHORIZATION → RETRIEVE → INTELLIGENCE → VALIDATE → ATTRIBUTE → RESPOND → EVENT/EVIDENCE**

For recommendation:

**REQUEST → AUTHENTICATE → CONTEXT → DATA AUTHORIZATION → RETRIEVE → INTELLIGENCE → VALIDATE → RECOMMENDATION → REVIEW/DECISION**

For consequential action:

**REQUEST → AUTHENTICATE → CONTEXT → DATA AUTHORIZATION → RETRIEVE → INTELLIGENCE → PROPOSAL → AUTHORIZATION → COMMAND → CORE EXECUTION → DOMAIN OUTCOME → EVENT → EVIDENCE → RECONCILIATION**

For agentic action:

**AGENT IDENTITY → TASK SCOPE → CONTEXT → TOOL ELIGIBILITY → PROPOSAL → AUTHORIZATION → COMMAND → CORE EXECUTION → RESULT → EVENT/EVIDENCE → CONTINUE/STOP**

## 65. Final architectural rule

**Intelligence Implementation is the governed production realization of LegaX Intelligence: it transforms authorized information, evidence, knowledge, models, rules and context into attributable observations, analysis, predictions, recommendations and bounded agent behavior while preserving truth states, provenance, uncertainty, privacy, security, evaluation, human oversight and the canonical authority/execution boundaries.**

**AUTHORIZED INPUT → GROUNDED CONTEXT → INTELLIGENCE → VALIDATION → UNCERTAINTY/ATTRIBUTION → DECISION SUPPORT/PROPOSAL → AUTHORIZATION → COMMAND → CORE EXECUTION → OUTCOME → EVENT → EVIDENCE**

**NO AUTHORIZATION → NO CONSEQUENTIAL INTELLIGENCE-INITIATED ACTION.**

**NO MODEL OUTPUT AS SILENT AUTHORITY.**

**NO PARALLEL AUTHORITY CHAIN.**

**NO PARALLEL EXECUTION ENGINE.**

**NO PARALLEL SOURCE OF TRUTH.**
