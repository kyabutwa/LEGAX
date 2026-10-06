# LegaX Lifecycle Contract

First-class objects:
State, Transition, TransitionRequest, TransitionState, TransitionPolicy, Review, ReviewState, Verification, VerificationState, StateHistory, TransitionHistory, ReviewHistory, VerificationHistory.

A transition defines source state, target state, initiating capability, validation, review/verification requirements, authorization requirement, expiry/timeout and event/evidence behavior.

Invariants:
- illegal transitions cannot execute
- denied authorization cannot execute
- failed required verification cannot execute
- rejected required review cannot execute
- expired transitions cannot execute
- duplicate commands are idempotent
- concurrent transitions cannot corrupt current state
- history matches executed transitions

Services define their state graphs; the shared lifecycle engine defines the execution contract.
