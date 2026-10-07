# LegaX — LegaFood

## 13.7 — LegaFood Advanced Service Contract

### Canonical definition

LegaFood is the governed food-service coordination layer for discovering food offerings, ordering, preparation, fulfillment, delivery or pickup, substitutions, cancellations, refunds, incidents, and provider/customer relationships.

It coordinates food commerce and operations without representing a provider listing as universal proof of food safety, inventory, legal compliance, clinical suitability, or preparation outcome.

### Domain model

Core objects: FoodProvider, FoodOffering, MenuVersion, IngredientReference, DietaryAttribute, AllergenDeclaration, Availability, Order, OrderLine, PreparationTask, Kitchen/FulfillmentSite, CourierAssignment, Delivery, Pickup, Substitution, Cancellation, Incident, RefundReference, and FoodEvidence.

### Order lifecycle

**DRAFT → ORDERED → PAYMENT_PENDING → PROVIDER_ACCEPTED → PREPARING → READY → OUT_FOR_DELIVERY/PICKUP_READY → DELIVERED/COLLECTED → COMPLETED**

Exceptions: **REJECTED, CANCELLED, FAILED, PARTIALLY_FULFILLED, REFUNDED, DISPUTED, INCIDENT**.

### Provider and menu truth

Menu and ingredient information can change. Versioned menu data must preserve effective time and provider source. Availability must be freshness-aware. Allergen/dietary information is safety-sensitive and must not be silently inferred as a guarantee.

### Preparation and fulfillment

Preparation completion, readiness, dispatch, arrival, handoff, and completion are distinct states. Courier acceptance does not prove delivery. Delivery evidence may include provider/device/customer confirmation according to policy.

### Safety and incidents

Food safety incidents require governed escalation, evidence, provider notification, investigation, and appropriate corrective lifecycle. The service must distinguish declared information, provider verification, observation, and inference.

### Composition

LegaFood may use LegaPay for payment, LegaRide for delivery, LegaBooking for reservations, LegaAccess for facility access, and LegaWork for workforce relationships.

### Intelligence

AI may recommend offerings, predict preparation time, optimize dispatch, detect anomalies, assist customer support, and identify possible incidents. It cannot fabricate safety verification or authorize a consequential action outside policy.

### Advanced invariants

1. Menu ≠ inventory guarantee.
2. Ingredient declaration ≠ clinical guarantee.
3. Provider participation ≠ universal compliance proof.
4. Order acceptance ≠ preparation completion.
5. Ready ≠ delivered.
6. Delivery ≠ settlement.
7. Safety evidence retains provenance.
8. Sensitive dietary/allergen information is purpose-bound.
9. Substitution requires explicit policy/participant semantics.
10. Incidents cannot be silently deleted.
11. AI cannot create safety truth.
12. Duplicate order commands cannot create duplicate orders.

**Status:** Advanced service contract — ready for offering, order, preparation, fulfillment, delivery, safety, payment, and provider implementation.