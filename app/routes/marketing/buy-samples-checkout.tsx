"use client";

import React, { useState, Suspense } from "react";
import Image from "@/components/Image";
import { useRouter } from "@/lib/next-nav-compat";
import { X } from "lucide-react";
import { products } from "@/data/products";
import { CheckoutForm } from "@/components/buy-samples/CheckoutForm";
import { useCurrency } from "@/components/currency-provider";
import { formatPrice, convertPrice } from "@/lib/currency";
import { TIERS, calcPrice, deliveryFeeForGrams, type TierLabel } from "@/lib/pricing";
import { pageMeta } from "@/lib/seo";

export const meta = () =>
  pageMeta({ title: "Checkout | Bulk Green Coffee", description: "Complete your green coffee sample order.", noindex: true });

type SelectedItem = { slug: string; tier: TierLabel };

function AddProductCard({
  product,
  defaultTier,
  onAdd,
}: {
  product: (typeof products)[number];
  defaultTier: TierLabel;
  onAdd: (tier: TierLabel) => void;
}) {
  const [tier, setTier] = useState<TierLabel>(defaultTier);
  const { currency, rates } = useCurrency();
  const tierData = TIERS.find((t) => t.label === tier)!;
  const priceINR = calcPrice(product.priceRange.min, tierData.grams);
  const fmt = (inr: number) => formatPrice(convertPrice(inr, currency, rates), currency);

  return (
    <div className="flex flex-col rounded-2xl border border-gray-200 bg-white overflow-hidden hover:border-gray-300 hover:shadow-sm transition-all">
      <div className="relative aspect-square bg-gray-50 overflow-hidden">
        <Image src={product.image} alt={product.name} fill draggable={false} className="object-contain p-4" />
      </div>
      <div className="flex flex-col flex-1 p-4 gap-3">
        <div className="flex-1">
          <p className="font-semibold text-sm text-black leading-tight">{product.name}</p>
          {product.region && <p className="text-xs text-muted-foreground mt-0.5">{product.region}</p>}
        </div>
        <div className="flex gap-1.5 flex-wrap">
          {TIERS.map((t) => (
            <button
              key={t.label}
              type="button"
              onClick={() => setTier(t.label)}
              className={`px-3 py-1 text-sm rounded-lg border font-medium transition-colors cursor-pointer ${
                tier === t.label
                  ? "bg-neutral-800 border-neutral-800 text-white"
                  : "border-gray-200 text-gray-500 hover:border-gray-400 hover:text-gray-700"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
        <p className="text-base font-semibold text-black">{fmt(priceINR)}</p>
        <button
          type="button"
          onClick={() => onAdd(tier)}
          className="w-full py-2.5 text-sm font-medium bg-teal-600 text-white rounded-xl hover:bg-teal-700 transition-colors cursor-pointer"
        >
          + Add
        </button>
      </div>
    </div>
  );
}

function CheckoutPageInner() {
  const router = useRouter();

  // Start empty on both server and client so the first client render matches
  // the server-rendered HTML, then load the real cart after mount. Reading
  // localStorage directly in the initial state (the old approach) produced a
  // hydration mismatch on a direct/hard navigation to this route - the
  // server always rendered an empty cart, and React would sometimes keep
  // that empty render instead of patching in the client's actual items.
  const [selected, setSelected] = useState<SelectedItem[]>([]);
  const [activeTier, setActiveTier] = useState<TierLabel>("100g");

  React.useEffect(() => {
    try {
      const raw = localStorage.getItem("bgc_selected");
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          setSelected(
            parsed.map((s: string | SelectedItem) =>
              typeof s === "string" ? { slug: s, tier: "100g" as TierLabel } : s
            )
          );
        }
      }
      const savedTier = localStorage.getItem("bgc_tier") as TierLabel | null;
      if (savedTier) setActiveTier(savedTier);
    } catch {}
  }, []);

  const selectedSlugs = selected.map((s) => s.slug);
  const selectedProducts = selected
    .map((s) => {
      const product  = products.find((p) => p.slug === s.slug);
      const tierData = TIERS.find((t) => t.label === s.tier)!;
      return product ? { product, tier: s.tier as TierLabel, tierData } : null;
    })
    .filter(Boolean) as { product: (typeof products)[number]; tier: TierLabel; tierData: (typeof TIERS)[number] }[];

  const unselectedProducts = products.filter((p) => !selectedSlugs.includes(p.slug));

  const orderSubtotal = selectedProducts.reduce(
    (sum, { product, tierData }) => sum + calcPrice(product.priceRange.min, tierData.grams),
    0,
  );
  const orderGrams = selectedProducts.reduce((sum, { tierData }) => sum + tierData.grams, 0);
  const orderDeliveryFee = deliveryFeeForGrams(orderGrams);
  const orderTotal = orderSubtotal + orderDeliveryFee;

  const { currency, rates } = useCurrency();
  const fmt = (inr: number) => formatPrice(convertPrice(inr, currency, rates), currency);

  React.useEffect(() => {
    localStorage.setItem("bgc_selected", JSON.stringify(selected));
  }, [selected]);

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 lg:px-6">
        <h1 className="text-3xl font-semibold text-black mb-2">Your order</h1>
        <p className="text-muted-foreground mb-8">Fill in your details and we&apos;ll ship your samples.</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: form */}
          <CheckoutForm
            items={selected}
            onBack={() => router.push("/buy-samples")}
          />

          {/* Right: order summary */}
          <div className="rounded-2xl border border-gray-200 sticky top-8 max-h-[80vh] overflow-y-auto">
            {selectedProducts.map(({ product, tier: itemTier, tierData }, i) => {
              const price = calcPrice(product.priceRange.min, tierData.grams);
              return (
                <div
                  key={`${product.slug}-${itemTier}`}
                  className={`px-4 py-3 ${i < selectedProducts.length - 1 ? "border-b border-gray-100" : ""}`}
                >
                  <div className="flex items-start gap-3">
                    <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-gray-50 shrink-0 mt-0.5">
                      <Image src={product.image} alt={product.name} fill className="object-contain p-1" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-sm font-medium text-black leading-tight">{product.name}</p>
                        <div className="flex items-center gap-2 shrink-0">
                          <p className="text-sm font-semibold text-black">{fmt(price)}</p>
                          <button
                            type="button"
                            onClick={() => setSelected((prev) => prev.filter((s) => !(s.slug === product.slug && s.tier === itemTier)))}
                            className="text-gray-300 hover:text-red-400 transition-colors"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      <div className="flex gap-1.5 mt-2 flex-wrap">
                        {TIERS.map((t) => (
                          <button
                            key={t.label}
                            type="button"
                            onClick={() =>
                              setSelected((prev) =>
                                prev.map((s) =>
                                  s.slug === product.slug && s.tier === itemTier ? { ...s, tier: t.label } : s
                                )
                              )
                            }
                            className={`px-3 py-1 text-sm rounded-lg border font-medium transition-colors cursor-pointer ${
                              itemTier === t.label
                                ? "bg-neutral-800 border-neutral-800 text-white"
                                : "border-gray-200 text-gray-500 hover:border-gray-400 hover:text-gray-700"
                            }`}
                          >
                            {t.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {selectedProducts.length > 0 && (
              <>
                <div className="flex justify-between px-4 py-2 border-t border-gray-200 bg-gray-50 text-xs text-muted-foreground">
                  <p>Subtotal</p>
                  <p>{fmt(orderSubtotal)}</p>
                </div>
                <div className="flex justify-between px-4 py-2 bg-gray-50 text-xs text-muted-foreground">
                  <p>Delivery</p>
                  <p>{fmt(orderDeliveryFee)}</p>
                </div>
                <div className="flex justify-between px-4 py-3 bg-gray-50">
                  <p className="text-sm font-semibold text-black">Total</p>
                  <p className="text-sm font-semibold text-black">{fmt(orderTotal)}</p>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Add more */}
        {unselectedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-xl font-semibold text-black mb-1">Add more samples</h2>
            <p className="text-sm text-muted-foreground mb-6">Pick a size and add to your order.</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {unselectedProducts.map((product) => (
                <AddProductCard
                  key={product.slug}
                  product={product}
                  defaultTier={activeTier}
                  onAdd={(tier: TierLabel) => {
                    setSelected((prev) => [...prev, { slug: product.slug, tier }]);
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <CheckoutPageInner />
    </Suspense>
  );
}
