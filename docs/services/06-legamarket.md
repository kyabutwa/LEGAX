# LegaX — LegaMarket

## 13.6 — LegaMarket Advanced Service Contract

### Canonical definition

LegaMarket is the governed commerce and marketplace service for discovery and exchange of goods and related commercial offerings among buyers, sellers, providers, communities, and service participants.

It coordinates listings, offers, carts, orders, inventory, pricing, payment, fulfillment, delivery, returns, refunds, disputes, and commercial evidence without becoming the universal legal owner, seller, regulator, or source of truth for every item or participant.

### Domain model

Core objects: SellerParticipation, BuyerParticipation, Listing, ProductReference, Offer, Price, InventoryItem, InventoryReservation, Cart, Order, OrderLine, Fulfillment, Shipment/DeliveryReference, Return, RefundReference, Dispute, Promotion, TaxReference, Review, and CommercialEvidence.

### Listing and product truth

A listing is a commercial representation. Product identity, authenticity, ownership, inventory, condition, price, regulatory status, and availability may originate from different sources and must retain provenance.

### Order lifecycle

**DRAFT_CART → ORDER_INTENT → AUTHORIZATION_PENDING → AUTHORIZED → ACCEPTED → FULFILLMENT → SHIPPED/DELIVERY → COMPLETED**

Exceptions: **DECLINED, CANCELLED, EXPIRED, BACKORDERED, RETURNED, REFUNDED, DISPUTED, RECONCILIATION_REQUIRED**.

### Inventory

Inventory must support available, reserved, committed, fulfilled, returned, damaged, quarantined, and unknown quantities where relevant. Reservation requires concurrency control. Inventory provided by external sellers remains provider-sourced unless LegaMarket is contractually authoritative.

### Commercial integrity

LegaMarket must preserve the distinction between listing, offer, order, payment, delivery, acceptance, and ownership transfer. Legal ownership transfer depends on applicable contract and jurisdiction and cannot be inferred universally from delivery.

### Promotions and advertising

Promotions must have eligibility, validity, usage limits, stacking rules, issuer, and lifecycle. LegaAds is separate from the marketplace's core order authority.

### Returns and disputes

Returns and disputes require independent state and evidence. Neither seller nor AI may silently delete adverse history.

### Intelligence

AI may search, recommend, classify, match, forecast demand, detect fraud, assist support, and identify suspicious listings. It cannot fabricate product facts, create seller authority, or silently resolve a dispute.

### Advanced invariants

1. Listing ≠ ownership proof.
2. Listing ≠ guaranteed inventory.
3. Offer ≠ order.
4. Order ≠ payment settlement.
5. Payment ≠ delivery.
6. Delivery ≠ universal proof of ownership transfer.
7. Inventory reservations are concurrency-controlled.
8. Seller/provider assertions retain provenance.
9. Refund and return are distinct lifecycles.
10. Dispute history is retained.
11. Promotions cannot bypass authorization.
12. AI cannot create commercial authority.

**Status:** Advanced service contract — ready for catalog, inventory, order, fulfillment, payment, dispute, provider, and commerce-policy implementation.