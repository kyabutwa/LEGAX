# LegaX — LegaMarket

## LegaMarket — Goods Commerce & Marketplace Coordination

**Canonical definition**

LegaMarket is the LegaX service responsible for coordinating governed commerce involving goods, buyers, sellers, providers, inventory, offers, orders, fulfillment, delivery, returns, refunds, disputes, and associated economic relationships while preserving the distinction between product representation, commercial intent, authorization, payment processing, fulfillment, ownership transfer, and settlement.

LegaMarket may provide marketplace coordination without becoming the legal owner or universal source of truth for every listed good or seller relationship.

**Canonical flow:** Discovery → Offer/Cart → Order Intent → Authorization → Payment Coordination → Seller/Provider Acceptance → Fulfillment → Delivery/Transfer → Completion → Settlement/Evidence.

**Core boundaries:** listing is not proof of ownership; inventory is not guaranteed availability; an order is not payment settlement; payment is not delivery; delivery evidence is not automatically proof of legal ownership transfer; provider assertions retain provenance.

**Controls:** seller/provider participation, product and resource lifecycle, fraud/risk signals, price and policy constraints, idempotency, inventory concurrency, refunds, returns, disputes, jurisdictional requirements, and accountable events are first-class.

**AI boundary:** AI may search, recommend, match, classify, forecast demand, detect anomalies, and assist support, but cannot silently authorize purchases, fabricate listings, or override disputes and lifecycle controls.

**Composition:** LegaMarket may use LegaPay, LegaBooking, LegaRide, LegaAds, LegaNetwork, and other services through explicit contracts.

**Status:** Foundational service contract — implementation intentionally deferred.