# LegaX — UI/UX Implementation

## 31 — UI/UX Implementation

**Status:** Foundational production UI/UX implementation architecture.

## 1. Purpose

UI/UX Implementation defines how LegaX turns its canonical architecture into a clear, accessible, responsive, trustworthy and production-grade human interface.

It is not a visual redesign exercise and it is not a second application architecture.

It is the implementation boundary between:
- canonical LegaX concepts and human mental models;
- domain capabilities and user tasks;
- API contracts and interface states;
- authorization decisions and visible affordances;
- execution outcomes and user feedback;
- evidence and understandable provenance;
- intelligence and decision support;
- responsive layouts and different devices/input methods;
- design decisions and reusable production components.

The UI MUST make LegaX easier to understand and operate without changing what LegaX means.

## 2. Core definition

**UI/UX Implementation is the governed implementation architecture through which LegaX presents canonical identity, participation, context, capability, authority, authorization, access, resources, services, commerce, work, community, organization, provider, intelligence, execution, events and evidence as understandable, accessible and actionable human experiences while preserving every canonical backend boundary.**

The UI is a client of LegaX contracts.

**THE UI PRESENTS AUTHORITY; IT DOES NOT CREATE AUTHORITY.**

## 3. Research basis

This architecture was reviewed against current stable and authoritative guidance.

### 3.1 W3C accessibility

WCAG 2.2 is a W3C Recommendation and remains the normative accessibility baseline for the web. It covers perceivable, operable, understandable and robust experiences and includes requirements relevant to touch, input, navigation and error prevention. citeturn0search5turn0search18

The WAI-ARIA Authoring Practices Guide provides patterns for accessible widgets, names, keyboard interaction, landmarks, states and properties. It is guidance rather than a replacement for the normative WCAG/ARIA specifications. citeturn0search1turn0search4

Therefore:

**WCAG/HTML/native controls/ARIA semantics → accessibility foundation → LegaX components**

ARIA MUST NOT be used to compensate for avoidable misuse of native HTML controls.

### 3.2 Apple Human Interface guidance

Apple's current HIG emphasizes purpose, agency, responsibility, familiarity, flexibility, simplicity, craft and delight. It also stresses recovery from mistakes, transparency, accessibility, multiple input methods and consistent adaptive layouts. citeturn0search0turn0search3

Current Apple layout guidance emphasizes adaptive layouts across display sizes, orientations and multitasking configurations, clear visual hierarchy and alignment. citeturn0search2turn0search15

LegaX therefore adopts the principles, not Apple's platform-specific implementation as a web dependency.

### 3.3 Open UI

Open UI researches common controls, their anatomy, states and behavior with the goal of making interoperable UI primitives easier to standardize instead of repeatedly reinventing them. citeturn1search3turn1search10

LegaX should prefer semantic web primitives and well-understood interaction patterns before inventing custom controls.

### 3.4 Design tokens

The Design Tokens Community Group's 2025.10 format is a stable production-oriented specification for exchanging design tokens, while remaining outside the W3C Standards Track. citeturn1search0turn1search1turn1search7

LegaX MAY use the stable 2025.10 token model for cross-tool token interchange.

The current preview/draft format MUST NOT be treated as authoritative merely because it is newer. citeturn1search5

### 3.5 Research conclusion

The LegaX UI foundation is:

**SEMANTIC WEB → ACCESSIBILITY → DESIGN TOKENS → COMPONENT SYSTEM → PATTERNS → INFORMATION ARCHITECTURE → TASK FLOWS → DOMAIN UI → PLATFORM ADAPTATION**

Not:

**FRAMEWORK → COMPONENT LIBRARY → SCREEN MOCKUPS → BUSINESS LOGIC**

## 4. Non-negotiable boundary

The UI MUST NOT become:
- a second identity system;
- a second authentication system;
- a second authorization engine;
- a second access-control engine;
- a second command/execution engine;
- a second event system;
- a second evidence store;
- a second source of truth;
- a hidden workflow engine;
- an unrestricted admin console;
- an AI authority layer.

The UI may:
- collect input;
- display authoritative state;
- display scoped permissions;
- request authentication;
- request authorization;
- present allowed actions;
- issue commands through governed APIs;
- display execution status;
- display evidence/provenance;
- display recommendations;
- ask for confirmation;
- surface errors and recovery paths.

The UI MUST NOT infer permission merely because a control is visible.

## 5. Canonical UI chain

For navigation and presentation:

**IDENTITY → PARTICIPATION → CONTEXT → ROLE → CAPABILITY → AUTHORITY → AUTHORIZATION → AVAILABLE EXPERIENCE**

For a consequential action:

**USER INTENT → UI INPUT → API → AUTHENTICATION → CONTEXT → AUTHORIZATION → COMMAND → CORE EXECUTION → OUTCOME → EVENT → EVIDENCE → UI STATE**

For read-only information:

**USER REQUEST → API → AUTHENTICATION → CONTEXT → AUTHORIZATION → AUTHORITATIVE READ/PROJECTION → UI**

For intelligence:

**AUTHORIZED CONTEXT → RETRIEVAL/INTELLIGENCE → GROUNDED OUTPUT → UNCERTAINTY/PROVENANCE → UI PRESENTATION**

For action from intelligence:

**INTELLIGENCE → PROPOSAL → USER REVIEW/CONFIRMATION WHERE REQUIRED → AUTHORIZATION → COMMAND → CORE EXECUTION**

## 6. UX constitution

LegaX interfaces MUST be:

1. **Clear** — users can understand what screen, context and task they are in.
2. **Predictable** — the same interaction has the same meaning throughout the product.
3. **Responsive** — layouts adapt without losing hierarchy or functionality.
4. **Accessible** — functionality remains usable with assistive technologies and alternate input.
5. **Forgiving** — users can recover from mistakes where domain rules permit.
6. **Honest** — the UI never claims success before the authoritative outcome exists.
7. **Scoped** — the interface clearly distinguishes personal, community, organization, provider and service contexts.
8. **Traceable** — consequential actions can expose appropriate status and evidence.
9. **Minimal** — every element has a reason to exist.
10. **Human** — complexity is progressively disclosed rather than dumped on users.

## 7. Mental model

LegaX MUST present the user's experience around understandable concepts rather than database concepts.

Users should encounter concepts such as:
- You;
- your account;
- your identity;
- where you participate;
- your current context;
- what you can do;
- what requires approval;
- places;
- units;
- services;
- people;
- providers;
- organizations;
- communities;
- resources;
- activity;
- requests;
- outcomes.

The UI MUST NOT expose internal database tables as the primary mental model.

## 8. Context is first-class

A single global dashboard is insufficient for LegaX.

The UI must distinguish:

**PERSONAL CONTEXT**
- personal profile;
- account/security;
- credentials;
- personal services;
- personal activity.

**COMMUNITY CONTEXT**
- community participation;
- places;
- units;
- residents/participants;
- visitors;
- community services;
- shared resources;
- community operations.

**ORGANIZATION CONTEXT**
- organization participation;
- teams;
- work;
- projects;
- policies;
- resources;
- decisions;
- organizational operations.

**PROVIDER CONTEXT**
- provider operations;
- workers;
- services;
- customers/participants;
- schedules;
- facilities;
- resources;
- dispatch;
- maintenance;
- service delivery;
- provider credentials;
- provider-side commerce and operations.

**SERVICE CONTEXT**
- service-specific domain tasks;
- service state;
- requests;
- outcomes;
- domain evidence.

Changing context MUST NOT silently change identity or authority.

## 9. Information architecture

The primary navigation model SHOULD be task-oriented rather than organization-chart-oriented.

A canonical shell can contain:

- Home/Overview;
- Activity;
- Services;
- Places;
- People/Relationships where applicable;
- Work/Operations where applicable;
- Community/Organization/Provider context;
- Search;
- Notifications;
- Profile/Account;
- Settings.

The exact navigation MUST be generated from the active product context and supported capabilities.

Hidden navigation MUST NOT be used to simulate authorization.

A user should always be able to answer:

**Where am I?**

**Whose context am I operating in?**

**What can I do here?**

**What happened?**

**What requires my attention?**

## 10. Navigation rules

Top-level navigation is for changing destination/context.

Toolbars are for actions on the current destination.

Tabs are for sibling views inside a stable context.

Breadcrumbs are for hierarchical location, not permission.

Menus are for grouped commands and secondary navigation.

Dialogs are for focused interruption, confirmation or short tasks.

Drawers/sheets are for contextual information or secondary tasks where appropriate.

The interface MUST NOT hide critical identity, context or authorization information behind ambiguous navigation.

## 11. Responsive architecture

LegaX is designed as a multi-device product.

The layout MUST support:
- small mobile screens;
- large phones;
- tablets;
- desktop browsers;
- wide displays;
- split-screen/multitasking;
- keyboard input;
- touch;
- pointer;
- assistive technology;
- future alternate input.

Responsive design MUST be content-driven rather than device-name-driven.

Use:
**CONTENT → AVAILABLE SPACE → LAYOUT MODE**

not:
**IPHONE MODEL → FIXED PIXELS**

No critical functionality may depend on hover.

No important content may require horizontal scrolling merely because a layout was designed for desktop.

## 12. Mobile-first, not mobile-only

Mobile is a first-class experience, but LegaX is not an iPhone application architecture.

The same canonical capability should adapt across:
- touch;
- pointer;
- keyboard;
- screen readers;
- voice/switch input where supported.

Desktop should gain density and parallel visibility without changing domain semantics.

Mobile should gain focus and progressive disclosure without becoming a reduced-authority version.

## 13. Design system architecture

The LegaX design system has five layers:

### Layer 1 — Foundations
- color;
- typography;
- spacing;
- sizing;
- radii;
- borders;
- elevation;
- motion;
- iconography;
- density;
- focus;
- responsive breakpoints;
- content width.

### Layer 2 — Tokens
Machine-readable design decisions.

### Layer 3 — Primitives
- text;
- icon;
- button;
- link;
- input;
- label;
- field;
- checkbox;
- radio;
- switch;
- select;
- textarea;
- avatar;
- separator;
- badge.

### Layer 4 — Components
- navigation shell;
- card;
- list;
- table;
- dialog;
- sheet;
- menu;
- popover;
- tooltip;
- toast/status;
- command/search;
- form;
- date/time input;
- file upload;
- progress;
- skeleton;
- empty state;
- error state;
- confirmation;
- activity item.

### Layer 5 — LegaX patterns
- identity summary;
- context switcher;
- authorization-aware action;
- service request;
- approval;
- visitor invitation;
- access request;
- payment request;
- provider operation;
- community operation;
- organization decision;
- evidence/provenance panel;
- intelligence recommendation;
- execution status;
- reconciliation status.

## 14. Design tokens

Design tokens MUST be centralized.

Token categories SHOULD include:
- color;
- typography;
- dimension;
- spacing;
- radius;
- border;
- shadow/elevation;
- opacity;
- duration;
- easing;
- breakpoint;
- z-index/layering;
- focus;
- state;
- motion preference;
- density.

Semantic tokens SHOULD be preferred over raw values.

Example concept:

**color.text.primary**

rather than scattering literal color values throughout components.

Theme layers:

**BASE TOKENS → SEMANTIC TOKENS → COMPONENT TOKENS → CONTEXT/THEME OVERRIDES**

Dark/light/high-contrast modes MUST use semantic roles rather than duplicated component code.

## 15. Brand expression

LegaX visual identity should be:
- mature;
- calm;
- intelligent;
- trustworthy;
- human;
- infrastructure-grade;
- not flashy;
- not gamified;
- not surveillance-like.

Green may be used as an orientation/accent color, but status meaning MUST NOT depend on color alone.

The interface should favor:
- deep navy/neutral foundations;
- high-quality typography;
- restrained surfaces;
- strong hierarchy;
- generous but purposeful spacing;
- subtle motion;
- clear state communication.

The visual language MUST not imply that security, payment or authorization has happened merely through decorative effects.

## 16. Typography

Typography is structural, not decorative.

Use a coherent type scale with:
- display;
- title;
- heading;
- body;
- label;
- caption;
- numeric/data styles.

Text MUST remain readable under:
- user text scaling;
- narrow widths;
- localization;
- high zoom;
- assistive technology.

Critical status information MUST NOT be encoded solely through font weight, size or color.

## 17. Interaction states

Every interactive component MUST define at least:

**DEFAULT → HOVER/POINTER WHERE APPLICABLE → FOCUS → ACTIVE/PRESSED → DISABLED → LOADING → SUCCESS → ERROR**

Domain components may additionally define:

**PENDING → REQUIRES_ACTION → DENIED → EXPIRED → CANCELLED → UNKNOWN → RECONCILIATION_REQUIRED**

State presentation MUST reflect authoritative application state.

## 18. Loading architecture

Avoid blank screens.

Use:
- skeletons for stable content structure;
- progress indicators for measurable work;
- immediate feedback for accepted commands;
- optimistic UI only where reversal and correctness are safe;
- pending state for asynchronous execution.

The UI MUST distinguish:

**NOT_STARTED ≠ LOADING ≠ SUBMITTED ≠ PROCESSING ≠ SUCCEEDED ≠ FAILED ≠ UNKNOWN**

A spinner MUST NOT mean “success is happening.”

## 19. Error architecture

Errors must be:
- understandable;
- actionable;
- attributable to the correct layer;
- recoverable where possible;
- safe for privacy/security.

Canonical presentation:

**WHAT HAPPENED → WHY IT MATTERS → WHAT CAN I DO → CURRENT STATUS**

Do not expose raw stack traces, database errors, provider secrets or internal authorization policy details.

Authorization denial should communicate the user-visible reason at the appropriate level without leaking sensitive policy internals.

## 20. Empty states

An empty state is not an error.

Every empty state should answer:
- what is empty;
- why it may be empty;
- what the user can do next;
- whether the user lacks permission;
- whether the data is still loading;
- whether the feature is not configured.

Never display “No data” when the actual condition is “Not authorized to view data.”

## 21. Permission-aware UX

The UI may receive authorization-derived affordances, but the server remains authoritative.

Action visibility states can include:

**AVAILABLE**
**REQUIRES_CONFIRMATION**
**REQUIRES_APPROVAL**
**REQUIRES_ADDITIONAL_AUTHENTICATION**
**NOT_AVAILABLE**
**NOT_AUTHORIZED**
**PENDING**
**EXPIRED**

Hiding an unauthorized button is a UX optimization, not a security control.

A malicious client can still call the API.

Therefore:

**UI AFFORDANCE ≠ AUTHORIZATION**

## 22. Authentication UX

Authentication flows MUST clearly distinguish:
- sign in;
- sign up;
- account recovery;
- credential enrollment;
- session verification;
- step-up authentication;
- device authentication;
- external identity provider;
- logout;
- account closure.

The UI MUST NOT say “verified identity” when only authentication succeeded.

The UI should explain security-sensitive transitions before asking users to perform them.

## 23. Identity UX

Identity screens should distinguish:
- identity;
- account;
- credentials;
- verification evidence;
- participation;
- relationships.

A profile photo is presentation data.

A document is evidence.

A credential is an authentication mechanism.

Authentication is an assurance result.

None automatically means authority.

## 24. Context switching

Context switching MUST be explicit and visible.

A context switch can change:
- available services;
- visible resources;
- role presentation;
- task vocabulary;
- authorized actions.

It MUST NOT silently change the underlying identity.

For high-impact operations, show the active context immediately before execution.

Example:

**Acting as: [Participant]**
**Context: [Community]**
**Target: [Resource]**
**Action: [Command]**

## 25. Consequential action UX

For consequential actions the UI SHOULD present:

**ACTOR → CONTEXT → ACTION → TARGET → IMPORTANT PARAMETERS → EXPECTED EFFECT → AUTHORIZATION/APPROVAL STATE → CONFIRMATION → EXECUTION STATUS**

High-impact actions SHOULD use explicit confirmation where required by policy.

The confirmation must not be a fake security boundary.

Authorization is still evaluated server-side.

## 26. Execution feedback

After a command:

**REQUESTED → ACCEPTED → PROCESSING → SUCCEEDED/FAILED/UNKNOWN**

If an external provider is involved:

**REQUESTED → AUTHORIZED → SENT TO PROVIDER → PROVIDER OUTCOME → RECONCILIATED → CANONICAL RESULT**

The UI MUST NOT collapse UNKNOWN into FAILED or SUCCESS.

## 27. Event and evidence UX

Users should be able to understand important activity without being exposed to raw event infrastructure.

An activity view can show:
- what happened;
- who/what initiated it;
- context;
- when it occurred;
- current status;
- affected resource;
- service;
- outcome;
- relevant evidence;
- reconciliation status.

Technical identifiers can be available in advanced detail.

Event IDs, command IDs, authorization IDs and trace IDs MUST NOT be treated as interchangeable.

## 28. Evidence presentation

Evidence should communicate:
- source;
- type;
- time;
- status;
- provenance;
- verification state;
- freshness;
- relationship to the event/action.

Use explicit states such as:
- DECLARED;
- OBSERVED;
- VERIFIED;
- INFERRED;
- PROPOSED;
- UNKNOWN.

Do not present an inference with the visual certainty of verified evidence.

## 29. Privacy UX

Privacy must be visible where it matters.

The UI should explain:
- why sensitive information is requested;
- what is collected;
- how it is used;
- who receives it where relevant;
- retention/deletion controls where available;
- permission status;
- consequences of refusal.

Sensitive data MUST be minimized in:
- URLs;
- logs;
- notifications;
- screenshots/previews;
- browser storage;
- analytics payloads;
- client error messages.

## 30. Security UX

Security controls must be understandable without weakening them.

Examples:
- active sessions;
- sign-in history;
- credential management;
- recovery;
- device/session revocation;
- step-up authentication;
- suspicious activity;
- access requests;
- privacy controls.

Security warnings MUST distinguish:
**risk signal → security finding → confirmed state**

An AI-generated warning is not automatically a confirmed security incident.

## 31. Forms

Forms MUST be designed around user goals rather than database fields.

Rules:
- labels are persistent;
- instructions appear before errors;
- validation is timely but not hostile;
- server validation remains authoritative;
- required fields are explicit;
- input types match the data;
- keyboard/input modes are appropriate;
- errors identify the affected field;
- submitted values are preserved where safe;
- destructive actions are separated;
- long forms use progressive disclosure;
- repeated fields are minimized.

## 32. File/document upload UX

Uploads should expose:

**SELECT → CAPTURE/UPLOAD → VALIDATE → QUALITY CHECK → PROCESS → REVIEW → VERIFIED/REJECTED/PENDING**

The UI must distinguish upload completion from document verification.

Never display “Verified” merely because a file uploaded successfully.

## 33. Tables and dense operational interfaces

Tables are appropriate for:
- provider operations;
- organization operations;
- activity;
- resources;
- work;
- cases;
- commerce;
- evidence;
- audit views.

They MUST remain usable on narrow screens through:
- responsive columns;
- priority fields;
- row detail views;
- horizontal scrolling only where justified;
- alternative card/list representation.

Critical data MUST NOT disappear solely because the viewport is narrow.

## 34. Search

Search is a discovery mechanism, not an authorization bypass.

Search results MUST be scoped by:
- identity;
- participation;
- context;
- authorization;
- privacy;
- resource visibility.

Search indexing MUST NOT expose content that the user cannot retrieve through governed authorization.

## 35. Notifications

Notifications should distinguish:
- informational;
- task required;
- approval required;
- security;
- payment;
- service;
- system;
- failure;
- reconciliation.

Notifications MUST NOT contain unnecessary sensitive information.

A notification saying “payment succeeded” must only be emitted when the canonical payment state supports that claim.

## 36. Accessibility implementation

Accessibility is a release requirement, not a later audit.

Minimum target:
**WCAG 2.2 AA-oriented implementation**, with no deliberate regression against applicable Level A/AA requirements.

Implement:
- semantic HTML;
- accessible names;
- keyboard navigation;
- visible focus;
- logical focus order;
- correct heading structure;
- landmarks;
- labels and descriptions;
- error association;
- status announcements;
- reduced-motion support;
- zoom/reflow;
- sufficient contrast;
- touch-friendly targets;
- screen-reader compatibility;
- non-color status communication.

Use native controls where they satisfy the requirement.

ARIA MUST supplement semantics, not replace correct HTML.

## 37. Internationalization

LegaX must be designed for multilingual operation.

Architecture MUST support:
- English;
- French;
- future languages;
- text expansion;
- pluralization;
- date/time localization;
- number/currency localization;
- right-to-left languages where required;
- locale-aware sorting;
- translated validation/errors.

Layout must not assume English word length.

## 38. Performance UX

Performance is part of UX.

Measure:
- navigation responsiveness;
- interaction responsiveness;
- loading latency;
- content stability;
- input latency;
- long tasks;
- client errors;
- API latency.

Do not make visual polish dependent on excessive JavaScript.

Prefer:
- progressive loading;
- code splitting;
- caching where safe;
- server-rendered/static content where appropriate;
- lazy loading;
- optimized images;
- bounded client state;
- cancellation of obsolete requests.

Performance optimizations MUST NOT bypass authorization or privacy boundaries.

## 39. State architecture

Client state MUST be classified.

### Server-authoritative state
- identity;
- account;
- participation;
- authorization;
- resource state;
- service state;
- payment state;
- provider state;
- evidence;
- canonical events.

### Client UI state
- modal open/closed;
- selected tab;
- draft input;
- temporary focus;
- local presentation preferences.

### Cached state
Must have:
- source;
- scope;
- freshness;
- invalidation;
- authorization boundary.

A client cache MUST NOT become a hidden source of truth.

## 40. API boundary

The UI communicates through the API architecture.

Preferred:

**UI → API → AUTHENTICATION → CONTEXT → AUTHORIZATION → DOMAIN → CORE EXECUTION → EVENT/EVIDENCE**

Avoid:

**UI → DATABASE**

Avoid:

**UI → PROVIDER**

Avoid:

**UI → AI → EXECUTE**

The frontend must not contain business secrets, provider credentials or authoritative authorization logic.

## 41. Optimistic UI

Optimistic updates are permitted only when:
- the action is safely reversible or provisional;
- authoritative failure can be represented;
- rollback is deterministic;
- stale state cannot create unsafe consequences.

Never use optimistic UI to imply:
- payment settlement;
- access granted;
- identity verified;
- authority assigned;
- credential verified;
- resource ownership transferred;
- provider execution completed.

For those:

**WAIT FOR AUTHORITATIVE STATE OR EXPLICIT PENDING STATE.**

## 42. Offline UX

Offline operation is a domain decision, not a frontend convenience.

The UI may:
- display cached data with freshness;
- queue safe drafts;
- show offline state;
- prevent unsupported consequential actions.

Offline commands require explicit domain support, bounded credentials, replay protection, expiry and reconciliation.

The UI MUST never fabricate success while offline.

## 43. AI UX

AI experiences must visibly distinguish:
- answer;
- summary;
- recommendation;
- prediction;
- proposal;
- action.

AI output should expose appropriate:
- source/provenance;
- uncertainty;
- freshness;
- limitations;
- review requirements.

AI MUST NOT be presented as an authority merely because the UI uses confident language.

For consequential AI-assisted actions:

**AI PROPOSAL → USER/PROCESS REVIEW → AUTHORIZATION → COMMAND → EXECUTION**

## 44. RAG UX

Retrieved content must be presented as grounded information, not authority.

Where appropriate show:
- source;
- date;
- relevance;
- confidence/limitations;
- whether content is canonical or external.

A retrieved document cannot grant access, approve payment or change a user's authority.

## 45. Community UX

Community experiences must remain independent from personal authentication semantics.

The UI should allow a person to:
- join as a participant;
- join a community;
- participate in a community;
- create/manage a community where authorized;
- manage places and resources;
- invite residents/providers/workers/visitors;
- operate community services.

The interface MUST NOT require creation of an artificial “community account” when the architecture requires a community as a governed collective/context.

Community membership MUST NOT imply community administration.

## 46. Organization UX

Organization UI may expose:
- governance;
- teams;
- workforce;
- work;
- projects;
- resources;
- policies;
- decisions;
- providers;
- operations;
- risk/compliance;
- performance.

Organization UI MUST NOT become a parallel identity or authorization system.

## 47. Provider UX

Provider UI is operational, not merely supplier management.

It may support:
- provider profile;
- workers;
- services;
- customers/participants;
- resources;
- facilities;
- schedules;
- dispatch;
- maintenance;
- credentials;
- service delivery;
- commerce;
- provider operations;
- incidents;
- provider-side evidence.

Provider UI remains subordinate to LegaX authority and provider-domain source-of-truth boundaries.

## 48. Service UX

Each LegaService should expose its own domain experience through common LegaX patterns.

Common shell:
**IDENTITY → CONTEXT → SERVICE → TASK → STATE → OUTCOME**

Service-specific semantics remain owned by the service.

The UI layer MUST NOT merge all services into one ambiguous universal workflow.

## 49. Authorization-aware component contract

Interactive components that can trigger consequential actions SHOULD consume an authorization-aware view model.

Conceptually:

- action identity;
- target;
- active context;
- authorization state;
- expiry/freshness;
- required confirmation;
- required approval;
- execution state.

The component renders the state.

The server decides the authorization.

## 50. Component contract

Every production component SHOULD define:

1. purpose;
2. anatomy;
3. variants;
4. states;
5. properties;
6. events;
7. keyboard behavior;
8. focus behavior;
9. accessible name;
10. responsive behavior;
11. localization behavior;
12. loading behavior;
13. error behavior;
14. privacy behavior;
15. analytics/telemetry boundaries;
16. test cases.

Components are implementation assets, not independent business authorities.

## 51. UX state machine

A screen or task SHOULD use an explicit state model:

**UNINITIALIZED → LOADING → READY**

and where applicable:

**READY → SUBMITTING → PENDING → SUCCEEDED**

or:

**READY → SUBMITTING → FAILED**

or:

**READY → SUBMITTING → UNKNOWN → RECONCILIATING → RESOLVED**

The UI MUST preserve UNKNOWN where the backend cannot establish the external outcome.

## 52. Routing and deep links

Routes identify UI locations.

Routes MUST NOT encode secrets or imply authorization.

A deep link can identify:
- a service;
- a resource;
- a case;
- an activity item;
- a settings screen.

Opening a route MUST trigger normal authentication, context and authorization checks.

A guessed URL MUST NOT bypass access control.

## 53. Session and navigation resilience

The UI must handle:
- expired session;
- revoked session;
- changed authorization;
- context becoming unavailable;
- resource deletion;
- permission revocation;
- provider outage;
- network loss;
- API version mismatch.

Do not simply redirect every failure to the home page.

Preserve user context where safe and explain the transition.

## 54. Observability

Frontend telemetry should capture:
- performance;
- interaction failures;
- route failures;
- API failures;
- component errors;
- accessibility test results;
- release/version;
- device/platform class.

Do not collect sensitive user content merely because telemetry is available.

Frontend telemetry is not canonical evidence unless explicitly governed as such.

## 55. Analytics boundary

Product analytics may measure:
- feature usage;
- conversion;
- latency;
- task completion;
- errors.

Analytics MUST NOT become:
- authorization;
- identity proof;
- behavioral social scoring;
- hidden risk authority.

Consent and privacy rules apply where required.

## 56. Testing architecture

UI/UX implementation testing:

**TOKEN TESTS → COMPONENT TESTS → ACCESSIBILITY TESTS → INTERACTION TESTS → VISUAL REGRESSION → RESPONSIVE TESTS → API CONTRACT TESTS → END-TO-END TESTS → SECURITY TESTS → PERFORMANCE TESTS → PRODUCTION VERIFICATION**

Tests must include:
- happy path;
- empty;
- loading;
- error;
- denied;
- expired;
- pending;
- unknown;
- reconciliation;
- offline;
- slow network;
- duplicate submission;
- stale data;
- localization;
- large text;
- keyboard;
- screen reader;
- narrow viewport;
- wide viewport.

## 57. Visual regression

Visual regression MUST test:
- themes;
- responsive breakpoints;
- typography;
- localization;
- state variants;
- accessibility modes;
- component combinations.

Pixel equality alone is insufficient.

A visually identical but inaccessible component is not conformant.

## 58. Accessibility verification

Accessibility verification should combine:
- automated checks;
- keyboard testing;
- screen-reader testing;
- zoom/reflow testing;
- contrast checks;
- reduced-motion testing;
- manual task testing.

Automated accessibility tooling catches only part of accessibility defects.

## 59. UX verification

A UX test should verify:
- user understands context;
- user can identify next action;
- system feedback is understandable;
- errors are recoverable;
- important consequences are visible;
- terminology is consistent;
- destructive actions are understandable;
- authorization states are not misleading;
- success is not claimed before authoritative success.

## 60. Security verification

Verify that:
- hidden controls cannot bypass API authorization;
- route guessing cannot expose data;
- cached data respects scope;
- client state cannot grant authority;
- browser storage does not contain prohibited secrets;
- sensitive errors are not leaked;
- provider credentials are absent;
- AI output cannot directly execute consequential actions;
- replayed requests remain governed by server controls.

## 61. Conformance integration

Phase 31 feeds Phase 30.

Canonical traceability:

**UX REQUIREMENT → COMPONENT/PATTERN → IMPLEMENTATION → TEST → EVIDENCE → CONFORMANCE STATUS**

UI conformance does not imply backend conformance.

A polished screen does not prove the API is secure.

A passing visual test does not prove authorization.

## 62. Release gates

A production UI release MUST satisfy applicable gates:

### Gate A — Contract
UI uses supported API/domain contracts.

### Gate B — Design system
No uncontrolled one-off styling for shared primitives.

### Gate C — Accessibility
No known blocking accessibility defect in critical journeys.

### Gate D — Security
No client-side authorization bypass or sensitive-data leakage.

### Gate E — State correctness
Loading/error/pending/unknown states are represented correctly.

### Gate F — Responsive
Critical journeys work across supported viewport/input classes.

### Gate G — Performance
No unacceptable regression against defined budgets.

### Gate H — Privacy
Telemetry and UI data collection follow privacy requirements.

### Gate I — Conformance
Required Phase 30 traceability and evidence exist.

### Gate J — Production
Critical journeys pass against the deployed environment.

## 63. Critical journeys

Initial critical UI journeys SHOULD include:

1. create account;
2. authenticate;
3. recover account;
4. view identity;
5. manage credentials;
6. change context;
7. join community;
8. participate in community;
9. create/manage community where authorized;
10. enter organization context;
11. operate provider context;
12. discover service;
13. request service;
14. authorization-required action;
15. payment request;
16. access request;
17. visitor invitation;
18. document upload;
19. evidence review;
20. AI recommendation review;
21. command execution;
22. pending/unknown outcome;
23. reconciliation;
24. security incident response;
25. logout/session revocation.

## 64. Failure-mode UX matrix

The UI MUST distinguish:

**401 / unauthenticated**
→ establish authentication.

**403 / not authorized**
→ explain lack of permission without leaking sensitive policy.

**404 / not found or intentionally undisclosed**
→ safe resource response.

**409 / conflict**
→ explain stale/conflicting state and offer refresh/retry path.

**422 / domain validation**
→ identify correctable input/domain condition.

**429 / rate/resource limit**
→ explain temporary limit and retry guidance.

**5xx / service failure**
→ show service unavailable state without claiming domain failure.

**timeout**
→ potentially UNKNOWN; never automatically convert to failure.

## 65. Data freshness UX

Where data may be stale, display appropriate freshness.

Examples:
- last updated;
- synchronized;
- pending synchronization;
- provider-reported;
- verified;
- stale;
- reconciliation required.

Freshness is not truth.

## 66. Design governance

The design system requires:
- component ownership;
- versioning;
- change review;
- deprecation;
- migration guidance;
- accessibility review;
- visual review;
- semantic review;
- documentation;
- test coverage.

Breaking component changes require migration planning.

## 67. No arbitrary component proliferation

Before adding a component:

**EXISTING COMPONENT → EXISTING VARIANT → EXISTING PATTERN → NEW COMPONENT ONLY IF NECESSARY**

Every duplicate component increases accessibility, consistency and maintenance risk.

## 68. Product language governance

LegaX terminology MUST remain canonical.

Do not casually substitute:
- identity with account;
- member with participant where participant is the canonical concept;
- permission with capability;
- capability with authorization;
- verification with authentication;
- access with authorization;
- payment with settlement;
- provider with worker;
- community with organization;
- recommendation with decision;
- event with evidence.

UI copy is part of architecture.

## 69. Microcopy

Use:
- direct language;
- concrete verbs;
- short explanations;
- visible consequences;
- consistent terms.

Avoid:
- vague “Something went wrong” without recovery;
- unexplained technical jargon;
- false certainty;
- manipulative urgency;
- security theater;
- “AI says…” as proof.

## 70. Motion

Motion SHOULD:
- explain spatial relationships;
- confirm interaction;
- communicate progress;
- reduce perceived latency where honest.

Motion MUST NOT:
- obscure state;
- block essential interaction;
- cause unnecessary distraction;
- imply success before success;
- violate reduced-motion preferences.

## 71. Theming

Themes must preserve semantics.

Theme changes MUST NOT change:
- authorization;
- identity;
- privacy;
- domain behavior;
- security controls.

Dark/light/high-contrast are presentation modes.

## 72. Form factor abstraction

The canonical UX model is independent of device.

A capability can be rendered as:
- full-page desktop experience;
- mobile flow;
- tablet split view;
- keyboard command;
- accessible sequential interaction.

Same contract.

Different presentation.

## 73. Platform adaptation

Platform-specific behavior MAY be added where it improves usability.

Examples:
- device authentication;
- camera;
- notifications;
- share sheets;
- biometrics;
- clipboard;
- native file picker.

Platform capability is an input/enforcement mechanism.

It does not become LegaX authority by itself.

## 74. Biometrics and access UX

The UI may offer:
- device Face ID;
- device fingerprint;
- palm/hand provider hardware;
- QR;
- NFC;
- other approved methods.

The UX MUST communicate what the method actually establishes.

For example:

**“Confirm with Face ID”**

does not mean:

**“Face ID is LegaX authorization.”**

The server must still establish the relevant authentication, context, authorization and access decision.

## 75. Payment UX

Payment interfaces MUST distinguish:

**QUOTE → INTENT → AUTHORIZATION → PAYMENT REQUEST → PROVIDER PROCESSING → PROVIDER OUTCOME → SETTLEMENT → RECONCILIATION**

Do not show “Paid” when the authoritative state is merely “Payment initiated.”

Palm/face/fingerprint/QR/NFC can authenticate or provide a payment initiation signal according to policy; they do not independently establish settlement.

## 76. Accessibility-first component priority

Highest priority components:
- navigation;
- buttons;
- forms;
- dialogs;
- menus;
- tabs;
- tables;
- status messages;
- file uploads;
- authentication;
- confirmation;
- error handling.

These require explicit accessibility and interaction tests before broad reuse.

## 77. Performance budgets

Each production experience SHOULD define:
- initial render budget;
- interaction latency budget;
- API response expectations;
- image budget;
- JavaScript budget;
- error-rate threshold;
- layout-shift threshold.

Budgets are engineering constraints, not user-facing promises.

## 78. Production architecture

Recommended conceptual layers:

**APP SHELL**
→ routing, context, global UI state

**DESIGN SYSTEM**
→ tokens, primitives, components

**PATTERN LAYER**
→ canonical LegaX interaction patterns

**FEATURE UI**
→ domain/service screens

**CLIENT DATA LAYER**
→ API calls, caching, synchronization

**API**
→ canonical LegaX contracts

The feature UI MUST NOT bypass the API boundary.

## 79. Repository architecture

Implementation SHOULD separate:

- tokens;
- foundations;
- primitives;
- components;
- patterns;
- layouts;
- feature modules;
- routes;
- client data/API;
- accessibility utilities;
- test fixtures;
- visual test cases.

Domain-specific UI may live with its feature, while reusable design primitives remain independent.

## 80. Design-to-code pipeline

Preferred flow:

**DESIGN DECISION → TOKEN → COMPONENT SPEC → IMPLEMENTATION → TEST → DOCUMENTATION → RELEASE**

Not:

**SCREEN MOCKUP → ONE-OFF CSS → COPY/PASTE → DRIFT**

## 81. Component documentation

Each shared component should have:
- purpose;
- usage;
- anatomy;
- variants;
- states;
- accessibility;
- responsive behavior;
- examples;
- anti-patterns;
- test cases;
- version/deprecation status.

## 82. UX debt

Track:
- inconsistent components;
- duplicated patterns;
- accessibility defects;
- unclear terminology;
- stale UI state;
- hidden authorization conditions;
- misleading success states;
- performance regressions;
- mobile-only/desktop-only behavior;
- unresolved error states.

UX debt is architectural debt.

## 83. UI security boundary

The browser/client is an untrusted execution environment.

Never trust:
- hidden fields;
- disabled buttons;
- local state;
- route parameters;
- cached permissions;
- UI role labels;
- client-side validation;
- client timestamps;
- local storage;
- browser memory.

Server-side canonical contracts remain authoritative.

## 84. Privacy/security by design

UI architecture MUST minimize:
- secrets;
- sensitive identifiers;
- biometric material;
- payment credentials;
- raw provider credentials;
- unnecessary personal data;
- sensitive telemetry.

Display only what the current user/context is authorized to see.

## 85. Reliability

The interface should degrade gracefully.

Preferred:

**AUTHORITATIVE DATA → CACHED DATA WITH FRESHNESS → EXPLICIT OFFLINE/UNAVAILABLE STATE**

Not:

**MISSING DATA → INVENTED DATA**

No AI or frontend fallback may invent canonical state.

## 86. Accessibility and security interaction

Accessibility MUST NOT be treated as incompatible with security.

Examples:
- accessible error messages instead of visual-only errors;
- visible focus instead of hidden focus;
- understandable authentication status;
- accessible confirmation;
- non-color security status;
- keyboard-accessible security controls.

## 87. Internationalization and security

Translations MUST preserve security meaning.

Never allow localization to change:
- action scope;
- target;
- amount;
- date/time meaning;
- authorization requirement;
- confirmation meaning.

Localized numbers/currencies/dates must be unambiguous.

## 88. UX telemetry and evidence

If a UI interaction is used as evidence for a consequential workflow, it MUST be explicitly mapped to:
- actor/session;
- action;
- context;
- command;
- authorization;
- event;
- evidence policy.

A click event alone is not proof that an authorized business action occurred.

## 89. Conformance invariants

1. UI MUST NOT create authority.
2. UI MUST NOT replace server authorization.
3. UI MUST NOT create a second execution engine.
4. UI MUST NOT create a second source of truth.
5. UI MUST NOT equate authentication with authorization.
6. UI MUST NOT equate capability with authorization.
7. UI MUST NOT equate event with evidence.
8. UI MUST NOT equate recommendation with decision.
9. UI MUST NOT claim success without authoritative support.
10. UI MUST preserve UNKNOWN outcomes.
11. UI MUST preserve context boundaries.
12. UI MUST respect privacy scope.
13. UI MUST support applicable accessibility requirements.
14. UI MUST expose critical state changes clearly.
15. UI MUST not rely on color alone.
16. UI MUST support keyboard operation where applicable.
17. UI MUST support responsive layouts.
18. UI MUST avoid hidden security assumptions.
19. UI MUST not expose sensitive backend details.
20. UI MUST not trust client-side authorization.
21. UI MUST not trust cached authorization indefinitely.
22. UI MUST not allow guessed routes to bypass authorization.
23. UI MUST preserve localization semantics.
24. UI MUST support loading/error/empty states.
25. UI MUST distinguish pending from success.
26. UI MUST distinguish unknown from failure.
27. UI MUST not treat provider assertions as canonical truth without reconciliation.
28. UI MUST not treat RAG output as authority.
29. UI MUST not treat AI output as authority.
30. UI MUST not treat device biometrics as universal LegaX authority.
31. UI MUST preserve service boundaries.
32. UI MUST preserve community boundaries.
33. UI MUST preserve organization boundaries.
34. UI MUST preserve provider boundaries.
35. UI MUST preserve LegaService ownership.
36. UI MUST use canonical terminology.
37. UI MUST use governed API contracts.
38. UI MUST not directly access the database.
39. UI MUST not directly control providers.
40. UI MUST not store prohibited secrets.
41. UI MUST minimize sensitive telemetry.
42. UI MUST support session expiry/revocation.
43. UI MUST support authorization changes.
44. UI MUST support stale data handling.
45. UI MUST support reconciliation states where applicable.
46. UI MUST support safe recovery from user error.
47. UI MUST avoid deceptive confirmation.
48. UI MUST preserve audit/evidence boundaries.
49. UI MUST be testable independently of business authority.
50. UI MUST remain subordinate to canonical LegaX architecture.

## 90. Contradiction tests

The implementation must reject or expose these failures:

1. A hidden button is treated as authorization.
2. A frontend role flag grants permission.
3. A route parameter bypasses authorization.
4. Cached permission remains usable after revocation.
5. A payment request is displayed as settled.
6. An uploaded document is displayed as verified merely because upload succeeded.
7. An AI recommendation is displayed as a decision.
8. RAG content is displayed as canonical authority without provenance.
9. Provider-reported success is displayed as canonical success without reconciliation.
10. Timeout is displayed as failure when the external outcome is unknown.
11. Timeout is displayed as success without evidence.
12. Community membership displays administration controls without authorization.
13. Organization membership grants unrestricted access.
14. Provider worker affiliation grants provider-wide authority.
15. Context switching changes identity.
16. A security signal is displayed as confirmed compromise.
17. Color alone communicates critical state.
18. Keyboard users cannot complete a critical task.
19. Screen readers cannot identify a critical control.
20. Large text breaks critical functionality.
21. Mobile layout removes an essential capability.
22. Desktop layout hides essential context.
23. Sensitive data appears in a notification.
24. Sensitive data appears in telemetry without policy.
25. A raw database error is shown to the user.
26. A UI-only validation bypasses server validation.
27. Optimistic UI claims irreversible success before authorization/execution.
28. Offline UI claims a consequential action succeeded without authoritative evidence.
29. A stale cache becomes the source of truth.
30. A client-side state object is treated as canonical state.
31. A UI component directly executes a provider command.
32. A UI component directly writes business state.
33. A UI component embeds provider credentials.
34. A service UI silently crosses into another service's source of truth.
35. A destructive command has no appropriate confirmation or policy-controlled equivalent.
36. Error recovery causes duplicate consequential commands.
37. Retry causes unsafe duplicate execution.
38. Unknown execution outcome is silently retried without reconciliation policy.
39. Localization changes economic meaning.
40. Localization changes authorization meaning.
41. Theme changes security semantics.
42. Motion obscures critical state.
43. Focus is lost during critical modal interaction.
44. Error state cannot be recovered.
45. Empty state is incorrectly reported as “no data” when the user is unauthorized.
46. A notification claims an event occurred before the event is established.
47. Evidence provenance is omitted where it materially affects trust.
48. A component's appearance implies a privilege it does not confer.
49. UI analytics becomes a hidden risk/authority score.
50. The UI creates a parallel authority chain.
51. The UI creates a parallel execution engine.
52. The UI creates a parallel source of truth.

Every contradiction test must fail closed or produce the correct non-authoritative/pending/unknown/denied state.

## 91. Readiness gate

UI/UX Implementation is ready for production implementation when:

- canonical terminology is mapped;
- context model is explicit;
- design tokens are defined;
- component primitives are defined;
- component state contracts are defined;
- accessibility baseline is defined;
- responsive strategy is defined;
- localization strategy is defined;
- error/loading/empty/unknown states are defined;
- API boundary is explicit;
- authorization boundary is explicit;
- privacy boundary is explicit;
- security boundary is explicit;
- AI/RAG boundary is explicit;
- testing strategy is defined;
- visual regression strategy is defined;
- performance budgets are defined;
- critical journeys are identified;
- release gates are defined;
- Phase 30 traceability exists.

## 92. Implementation maturity

### L0 — Unstructured
Screens exist without shared rules.

### L1 — Consistent
Shared tokens and basic components exist.

### L2 — Systematic
Patterns, accessibility and state contracts are reusable.

### L3 — Production
Critical journeys, security, performance and responsive behavior are verified.

### L4 — Adaptive
The design system continuously evolves through measured evidence, conformance, usability research and controlled change.

## 93. Production implementation sequence

**01 — UX information architecture**

**02 — Design tokens**

**03 — Foundations**

**04 — Accessible primitives**

**05 — Core components**

**06 — Navigation/context shell**

**07 — State/error/loading system**

**08 — Authentication/account UX**

**09 — Identity/participation/context UX**

**10 — Community UX**

**11 — Organization UX**

**12 — Provider UX**

**13 — LegaService UX**

**14 — Commerce/payment/access UX**

**15 — Evidence/activity UX**

**16 — RAG/intelligence UX**

**17 — Responsive adaptation**

**18 — Accessibility verification**

**19 — Security/privacy verification**

**20 — Performance verification**

**21 — Critical journey E2E verification**

**22 — Production conformance**

## 94. UI implementation operating loop

**DISCOVER → MODEL → DESIGN → TOKENIZE → COMPONENTIZE → IMPLEMENT → TEST → VERIFY → RELEASE → OBSERVE → IMPROVE**

No screen is considered complete merely because it renders.

## 95. Final architectural rules

**THE UI IS A GOVERNED CLIENT OF LegaX, NOT A PARALLEL LegaX.**

**THE UI PRESENTS AUTHORITY; IT DOES NOT CREATE AUTHORITY.**

**THE UI PRESENTS STATE; IT DOES NOT INVENT STATE.**

**THE UI PRESENTS INTELLIGENCE; IT DOES NOT TURN INTELLIGENCE INTO AUTHORITY.**

**THE UI PRESENTS EXECUTION STATUS; IT DOES NOT DECLARE EXTERNAL SUCCESS WITHOUT AUTHORITATIVE OUTCOME.**

**THE UI MUST MAKE COMPLEXITY UNDERSTANDABLE WITHOUT REMOVING THE UNDERLYING GOVERNANCE.**

**NO AUTHORIZATION → NO CONSEQUENTIAL UI ACTION CAN BECOME A VALID LegaX ACTION.**

**NO AUTHORITATIVE OUTCOME → NO FALSE SUCCESS.**

**NO ACCESS TO CANONICAL STATE → NO INVENTED FALLBACK STATE.**

**NO ACCESSIBLE EXPERIENCE → NO PRODUCTION-READY CRITICAL JOURNEY.**

## 96. Canonical implementation chain

**CANONICAL DOMAIN → UX MODEL → DESIGN TOKENS → COMPONENTS → PATTERNS → FEATURE UI → API CONTRACT → AUTHORIZATION → CORE EXECUTION → EVENT/EVIDENCE → UI OUTCOME**

## 97. Final definition

**UI/UX Implementation is the governed human-interface implementation layer through which LegaX makes its canonical architecture understandable, accessible, responsive, secure, privacy-preserving, reliable and operationally usable across people, communities, organizations, providers, services, resources, commerce and intelligent experiences—without creating a parallel authority, execution or source-of-truth system.**

**UI/UX IS IMPLEMENTATION OF LegaX CONTRACTS, NOT REDEFINITION OF LegaX CONTRACTS.**
