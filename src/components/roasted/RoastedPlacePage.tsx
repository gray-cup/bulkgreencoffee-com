"use client";

import { useMemo, useState } from "react";
import Image from "@/components/Image";
import Link from "@/lib/next-link-compat";
import { useNavigate } from "react-router";
import { ArrowRight, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { roastedCoffeeProducts } from "@/data/products";
import { getRoastedPlace } from "@/data/roasted-places";
import { notFound } from "@/lib/next-nav-compat";
import {
  packsFor,
  roastedPackPrice,
  type RoastedKind,
  type RoastedOrderItem,
} from "@/lib/roasted-pricing";

const CHECKOUT_KEY = "rgc_roasted_order";

type Selection = Record<string, number>; // key: `${slug}__${pack}` -> qty

export function RoastedPlacePage({ kind, placeSlug }: { kind: RoastedKind; placeSlug: string }) {
  const place = getRoastedPlace(placeSlug);
  if (!place) {
    notFound();
    return null;
  }

  const navigate = useNavigate();
  const packs = packsFor(kind);
  const [sel, setSel] = useState<Selection>({});
  const [activePack, setActivePack] = useState<string>(packs[0].label);

  const items: RoastedOrderItem[] = useMemo(
    () =>
      Object.entries(sel)
        .filter(([, q]) => q > 0)
        .map(([k, qty]) => {
          const [slug, pack] = k.split("__");
          return { slug, pack, qty };
        }),
    [sel],
  );

  const total = items.reduce(
    (s, it) => s + (roastedPackPrice(kind, it.slug, it.pack) ?? 0) * it.qty,
    0,
  );

  const bump = (slug: string, pack: string, d: number) =>
    setSel((prev) => {
      const k = `${slug}__${pack}`;
      const next = Math.max(0, (prev[k] ?? 0) + d);
      const copy = { ...prev };
      if (next === 0) delete copy[k];
      else copy[k] = next;
      return copy;
    });

  const checkout = () => {
    if (!items.length) return;
    try {
      sessionStorage.setItem(
        CHECKOUT_KEY,
        JSON.stringify({ kind, place: place.slug, placeName: place.name, items }),
      );
    } catch {}
    navigate("/roasted-coffee/checkout");
  };

  const isRetail = kind === "retail";
  const heading = isRetail
    ? `Freshly Roasted Coffee, Delivered to ${place.name}`
    : `Bulk Roasted Coffee for Cafés in ${place.name}`;
  const sub = isRetail
    ? `Small-batch roasted single-origin Indian coffee in 250g, 500g and 1kg packs. Roasted to order and shipped to ${place.name} in ${place.transitDays}.`
    : `Wholesale roasted coffee for cafés, restaurants and hotels in ${place.name}. 1kg to 50kg packs at volume pricing, roasted to order, delivered in ${place.transitDays}.`;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 lg:px-6 py-14 grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-teal-700 mb-2">
              {place.state} · {isRetail ? "Retail packs" : "Café & HoReCa bulk"}
            </p>
            <h1 className="text-3xl lg:text-4xl font-semibold text-black leading-tight">{heading}</h1>
            <p className="mt-4 text-gray-600 leading-relaxed">{sub}</p>
            <p className="mt-3 text-sm text-gray-500">{place.blurb}</p>
          </div>
          <div className="aspect-[4/3] relative rounded-2xl overflow-hidden bg-gray-50 border border-gray-200">
            <Image
              src={isRetail ? "/roasted/roasted-beans.webp" : "/roasted/hero-beans.webp"}
              alt={`Roasted coffee for ${place.name}`}
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Pack size tabs */}
      <div className="max-w-6xl mx-auto px-4 lg:px-6 pt-10">
        <p className="text-xs text-muted-foreground mb-2">Pack size</p>
        <div className="inline-flex flex-wrap gap-1 bg-gray-100 rounded-xl p-1">
          {packs.map((p) => (
            <button
              key={p.label}
              type="button"
              onClick={() => setActivePack(p.label)}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                activePack === p.label ? "bg-white text-black shadow-sm" : "text-gray-500 hover:text-gray-800"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* Product grid */}
      <div className="max-w-6xl mx-auto px-4 lg:px-6 py-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {roastedCoffeeProducts.map((product) => {
          const price = roastedPackPrice(kind, product.slug, activePack);
          const qty = sel[`${product.slug}__${activePack}`] ?? 0;
          return (
            <div key={product.slug} className="rounded-xl border border-gray-200 bg-white overflow-hidden flex flex-col">
              <div className="aspect-square relative bg-gray-50">
                <Image src={product.image} alt={product.name} fill className="object-contain p-4" />
              </div>
              <div className="p-4 flex flex-col gap-2 flex-1">
                <h3 className="font-semibold text-sm text-black leading-tight">{product.name}</h3>
                <p className="text-xs text-gray-500 line-clamp-2">{product.description}</p>
                <div className="mt-auto flex items-center justify-between pt-2">
                  <span className="text-sm font-medium text-black">
                    {price != null ? `₹${price}` : "—"}
                    <span className="text-xs text-gray-400"> / {activePack}</span>
                  </span>
                  {qty === 0 ? (
                    <Button variant="teal" size="sm" onClick={() => bump(product.slug, activePack, 1)}>
                      Add
                    </Button>
                  ) : (
                    <div className="inline-flex items-center gap-2">
                      <button type="button" onClick={() => bump(product.slug, activePack, -1)} className="p-1 rounded border border-gray-200">
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="text-sm w-5 text-center">{qty}</span>
                      <button type="button" onClick={() => bump(product.slug, activePack, 1)} className="p-1 rounded border border-gray-200">
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Sticky checkout bar */}
      {items.length > 0 && (
        <div className="sticky bottom-0 z-20 border-t border-gray-200 bg-white/95 backdrop-blur">
          <div className="max-w-6xl mx-auto px-4 lg:px-6 py-3 flex items-center justify-between gap-4">
            <div className="text-sm">
              <span className="font-semibold text-black">₹{total}</span>{" "}
              <span className="text-gray-500">
                · {items.reduce((s, i) => s + i.qty, 0)} pack{items.reduce((s, i) => s + i.qty, 0) > 1 ? "s" : ""} (+ delivery at checkout)
              </span>
            </div>
            <Button variant="teal" onClick={checkout} className="gap-1">
              Checkout <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}

      {/* SEO copy */}
      <section className="max-w-3xl mx-auto px-4 lg:px-6 py-14 prose prose-sm text-gray-600">
        <h2 className="text-lg font-semibold text-black">
          {isRetail ? `Buying roasted coffee in ${place.name}` : `Wholesale roasted coffee supply for ${place.name} cafés`}
        </h2>
        <p>
          Bulk Green Coffee roasts single-origin Indian coffee from Koraput (Odisha) and the Eastern Ghats to order and
          ships across {place.state}, including {place.name}
          {place.nearbyAreas?.length ? ` and nearby ${place.nearbyAreas.slice(0, 3).join(", ")}` : ""}. Typical delivery
          time is {place.transitDays}.
        </p>
        <p>
          {isRetail
            ? "Every retail pack is roasted in small batches and rested before dispatch. Choose 250g to sample a profile or 1kg for your regular brew."
            : "Café pricing scales with volume: 5kg −8%, 10kg −12%, 20kg −18%, 50kg −25% off the 1kg rate. GST invoice included. Talk to us about a standing weekly or monthly roast schedule."}
        </p>
        <p>
          <Link href={isRetail ? `/bulk-roasted-coffee-cafes/${place.slug}` : `/roasted-coffee/${place.slug}`} className="text-teal-700 font-medium">
            {isRetail ? `Running a café in ${place.name}? See bulk pricing →` : `Just want a bag for home? See retail packs →`}
          </Link>
        </p>
      </section>
    </div>
  );
}
