import { getProductBySlug } from "@/data/products";
import { roastedCoffeeProducts } from "@/data/products";
import { deliveryFeeForGrams } from "@/lib/pricing";

/**
 * Pricing for the roasted-coffee place pages. Single source of truth, shared by
 * the client selectors AND /api/roasted-create-payment (which always recomputes
 * the charged total from raw items - the client can't influence the amount).
 *
 * Base price = the roasted product's per-kg price (priceRange.min in
 * data/products/roasted-coffee.ts).
 */

export type RoastedKind = "retail" | "cafe";

// grams + multiplier applied to (base per-kg price). Retail carries a flat
// retail markup; small packs cost proportionally more per gram.
export const RETAIL_PACKS = [
  { label: "250g", grams: 250, factor: 0.3 * 1.35 },
  { label: "500g", grams: 500, factor: 0.55 * 1.35 },
  { label: "1kg", grams: 1000, factor: 1.0 * 1.35 },
] as const;

// cafe / HoReCa bulk - no retail markup, volume discount off the per-kg price.
export const CAFE_PACKS = [
  { label: "1kg", grams: 1000, factor: 1.0 },
  { label: "5kg", grams: 5000, factor: 5 * 0.92 },
  { label: "10kg", grams: 10000, factor: 10 * 0.88 },
  { label: "20kg", grams: 20000, factor: 20 * 0.82 },
  { label: "50kg", grams: 50000, factor: 50 * 0.75 },
] as const;

export type PackLabel =
  | (typeof RETAIL_PACKS)[number]["label"]
  | (typeof CAFE_PACKS)[number]["label"];

export type RoastedOrderItem = { slug: string; pack: string; qty: number };

export function packsFor(kind: RoastedKind) {
  return kind === "retail" ? RETAIL_PACKS : CAFE_PACKS;
}

export function isRoastedProduct(slug: string): boolean {
  return roastedCoffeeProducts.some((p) => p.slug === slug);
}

/** Price of one pack (excludes delivery), or null if the slug/pack is invalid. */
export function roastedPackPrice(kind: RoastedKind, slug: string, pack: string): number | null {
  if (!isRoastedProduct(slug)) return null;
  const product = getProductBySlug(slug);
  if (!product) return null;
  const p = packsFor(kind).find((x) => x.label === pack);
  if (!p) return null;
  return Math.round(product.priceRange.min * p.factor);
}

export function roastedPackGrams(kind: RoastedKind, pack: string): number {
  return packsFor(kind).find((x) => x.label === pack)?.grams ?? 0;
}

/**
 * Full order total: sum of (pack price x qty) + one delivery fee on total
 * weight. Throws if any item is invalid so the API route can 400 the request.
 */
export function computeRoastedOrderTotal(kind: RoastedKind, items: RoastedOrderItem[]): number {
  if (!items.length) throw new Error("No items in order");
  let total = 0;
  let grams = 0;
  for (const it of items) {
    const qty = Math.max(1, Math.floor(it.qty || 0));
    const price = roastedPackPrice(kind, it.slug, it.pack);
    if (price === null) throw new Error(`Invalid roasted item: ${it.slug} / ${it.pack}`);
    total += price * qty;
    grams += roastedPackGrams(kind, it.pack) * qty;
  }
  return total + deliveryFeeForGrams(grams);
}

// ── self-check ───────────────────────────────────────────────────────────────
// Run: bun run src/lib/roasted-pricing.ts
if (import.meta.main) {
  const slug = roastedCoffeeProducts[0].slug;
  const base = roastedCoffeeProducts[0].priceRange.min;
  const assert = (c: boolean, m: string) => {
    if (!c) throw new Error("FAIL: " + m);
    console.log("ok:", m);
  };
  assert(roastedPackPrice("retail", slug, "250g") === Math.round(base * 0.3 * 1.35), "retail 250g");
  assert(roastedPackPrice("retail", slug, "1kg") === Math.round(base * 1.35), "retail 1kg = base +35%");
  assert(roastedPackPrice("cafe", slug, "1kg") === base, "cafe 1kg = base");
  assert(roastedPackPrice("cafe", slug, "50kg") === Math.round(base * 50 * 0.75), "cafe 50kg -25%");
  assert(roastedPackPrice("retail", slug, "5kg") === null, "retail has no 5kg pack");
  assert(roastedPackPrice("cafe", "not-a-slug", "1kg") === null, "invalid slug rejected");
  const t = computeRoastedOrderTotal("cafe", [{ slug, pack: "5kg", qty: 2 }]);
  assert(t === roastedPackPrice("cafe", slug, "5kg")! * 2 + deliveryFeeForGrams(10000), "order total w/ delivery");
  console.log("all roasted-pricing checks passed");
}
