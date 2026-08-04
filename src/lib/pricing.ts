import { getProductBySlug } from "@/data/products";

// Single source of truth for sample-order pricing, shared by every
// /buy-samples client page AND the server (create-payment/route.ts). Prices
// are never trusted from the client - the server always recomputes the
// order total itself from `items` using this module before creating a
// Cashfree payment link, so editing the request body can't change what's
// charged.
export const TIERS = [
  { label: "100g", grams: 100 },
  { label: "1kg",  grams: 1000 },
  { label: "3kg",  grams: 3000 },
  { label: "5kg",  grams: 5000 },
  { label: "10kg", grams: 10000 },
  { label: "20kg", grams: 20000 },
] as const;

export type TierLabel = (typeof TIERS)[number]["label"];

export type OrderItem = { slug: string; tier: string };

/**
 * Delivery is charged once per order, on the order's total weight (not
 * per item/tier): flat ₹80 at or under 500g; ₹100 for the first kg, plus
 * ₹60 for every kg after that.
 */
export function deliveryFeeForGrams(totalGrams: number): number {
  if (totalGrams <= 500) return 80;
  const kg = totalGrams / 1000;
  return Math.round(100 + 60 * (kg - 1));
}

export function calcPrice(pricePerKg: number, grams: number): number {
  return Math.round((pricePerKg * grams) / 1000);
}

export function isValidTier(tier: string): tier is TierLabel {
  return TIERS.some((t) => t.label === tier);
}

/** Product-only price for one item - excludes delivery, which is computed once per order. */
export function priceForItem(item: OrderItem): number | null {
  if (!isValidTier(item.tier)) return null;
  const product = getProductBySlug(item.slug);
  if (!product) return null;
  const tierData = TIERS.find((t) => t.label === item.tier)!;
  return calcPrice(product.priceRange.min, tierData.grams);
}

export function gramsForTier(tier: string): number {
  return TIERS.find((t) => t.label === tier)?.grams ?? 0;
}

/** Dominant (most common) tier across items, for display/reporting only. */
export function dominantTier(items: OrderItem[]): string {
  const counts = new Map<string, number>();
  for (const { tier } of items) counts.set(tier, (counts.get(tier) ?? 0) + 1);
  let best = items[0]?.tier ?? "100g";
  let bestCount = 0;
  for (const [tier, count] of counts) {
    if (count > bestCount) {
      best = tier;
      bestCount = count;
    }
  }
  return best;
}

/**
 * Recomputes the full order total (product prices + one order-level delivery
 * fee based on total weight) from raw items. Throws if any item is invalid so
 * the caller can reject the request outright.
 */
export function computeOrderTotal(items: OrderItem[]): number {
  if (items.length === 0) throw new Error("No items in order");

  let total = 0;
  let totalGrams = 0;
  for (const item of items) {
    const price = priceForItem(item);
    if (price === null) throw new Error(`Invalid product/tier: ${item.slug} / ${item.tier}`);
    total += price;
    totalGrams += gramsForTier(item.tier);
  }

  return total + deliveryFeeForGrams(totalGrams);
}
