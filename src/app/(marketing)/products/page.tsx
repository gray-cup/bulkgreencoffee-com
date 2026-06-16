"use client";

import { useState } from "react";
import { getProductsByRegion } from "@/data/products";
import type { Product } from "@/data/products";
import { ProductCard } from "@/components/products";

type VarietyFilter = "All" | "Arabica" | "Robusta";

const REGIONS = [
  {
    id: "East India" as const,
    label: "East India",
    subtitle: "Odisha · Andhra Pradesh",
    description:
      "Single-origin green coffees from the Eastern Ghats — tribal-grown Arabica from Koraput and the internationally acclaimed specialty lots of Araku Valley.",
  },
  {
    id: "North East India" as const,
    label: "North East India",
    subtitle: "Assam · Arunachal Pradesh",
    description:
      "India's most underexplored coffee frontier: high-altitude Arabica from the Dima Hasao hills of Assam and Robusta from the Himalayan foothills of Arunachal Pradesh.",
  },
  {
    id: "South India" as const,
    label: "South India",
    subtitle: "Karnataka · Kerala",
    description:
      "The established heartland of Indian coffee: Chikmagalur, Coorg, Wayanad, and the ancient Bababudangiri hills — producing consistent, traceable Arabica year after year.",
  },
];

function getVariety(p: Product): "Arabica" | "Robusta" | null {
  return p.variety ?? p.origin?.variety ?? null;
}

function RegionSection({
  region,
}: {
  region: (typeof REGIONS)[number];
}) {
  const [filter, setFilter] = useState<VarietyFilter>("All");
  const allProducts = getProductsByRegion(region.id);

  const filtered =
    filter === "All"
      ? allProducts
      : allProducts.filter((p) => getVariety(p) === filter);

  const hasRobusta = allProducts.some((p) => getVariety(p) === "Robusta");
  const hasArabica = allProducts.some((p) => getVariety(p) === "Arabica");

  return (
    <section>
      <div className="mb-6 border-b border-neutral-200 pb-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-black mb-1">
          {region.label}
        </h2>
        <p className="text-sm font-medium text-teal-700 mb-3">
          {region.subtitle}
        </p>
        <p className="text-muted-foreground max-w-2xl text-sm mb-5">
          {region.description}
        </p>

        {/* Filters */}
        <div className="flex gap-2">
          {(["All", "Arabica", "Robusta"] as VarietyFilter[]).map((v) => {
            const disabled =
              (v === "Arabica" && !hasArabica) ||
              (v === "Robusta" && !hasRobusta);
            return (
              <button
                key={v}
                disabled={disabled}
                onClick={() => setFilter(v)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors
                  ${
                    filter === v
                      ? "bg-teal-800 text-white"
                      : disabled
                        ? "bg-neutral-100 text-neutral-300 cursor-not-allowed"
                        : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                  }`}
              >
                {v}
              </button>
            );
          })}
        </div>
      </div>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-muted-foreground text-sm">
          No {filter} products in this region.
        </p>
      )}
    </section>
  );
}

export default function ProductsPage() {
  return (
    <div className="px-4 lg:px-6">
      <div className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-5xl font-semibold text-black mb-4">
              Our Products
            </h1>
            <p className="text-lg text-muted-foreground">
              Premium green coffee sourced directly from Indian farms
            </p>
          </div>

          <div className="space-y-20">
            {REGIONS.map((region) => (
              <RegionSection key={region.id} region={region} />
            ))}
          </div>
        </div>
      </div>

      {/* Educational content for SEO */}
      <div className="max-w-7xl mx-auto px-4 lg:px-6 pb-24 space-y-20">

        {/* Coffee Grading Explained */}
        <section className="border-t border-neutral-200 pt-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-4">
            Indian Green Coffee Grading Explained
          </h2>
          <p className="text-neutral-600 max-w-3xl mb-8">
            All green coffee from India is graded by screen size, defect count, and processing method before export. Understanding grades helps buyers pick the right product for their application — whether that's specialty roasting, commercial blending, or instant coffee production.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                grade: "PB — Peaberry",
                colour: "bg-teal-50 border-teal-200",
                desc: "A natural mutation where only one round seed forms instead of two. Hand-sorted at origin. Denser than flat beans, roasts more evenly. Prized for enhanced sweetness and aromatic clarity. Available from Koraput, Chikmagalur, Coorg, and Wayanad.",
              },
              {
                grade: "AAA — Plantation Extra Large",
                colour: "bg-neutral-50 border-neutral-200",
                desc: "Largest screen-size flat beans from washed Arabica. Top commercial grade. Excellent for filter coffee, South Indian filter blends, and high-end espresso bases. Consistent cup quality across lots.",
              },
              {
                grade: "AA — Plantation Large",
                colour: "bg-neutral-50 border-neutral-200",
                desc: "Second screen size — India's most widely traded commercial grade. Balanced acidity, medium body, clean cup. Ideal for roasters building a reliable, cost-effective Indian origin offering.",
              },
              {
                grade: "A / AB — Plantation",
                colour: "bg-neutral-50 border-neutral-200",
                desc: "Smaller screen sizes with slightly more variation. Excellent for blending applications, instant coffee production, and high-volume commercial roasteries. Most affordable entry point for Indian Arabica.",
              },
            ].map((g) => (
              <div key={g.grade} className={`p-5 rounded-xl border ${g.colour}`}>
                <p className="font-semibold text-black text-sm mb-2">{g.grade}</p>
                <p className="text-sm text-neutral-600">{g.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Process Types */}
        <section className="border-t border-neutral-200 pt-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-4">
            Processing Methods
          </h2>
          <p className="text-neutral-600 max-w-3xl mb-8">
            The way a coffee cherry is processed after harvest has a profound effect on the final cup. India offers all three major processing methods across its regions — giving buyers flexibility to source the exact flavour profile they need.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl border border-neutral-200">
              <p className="font-semibold text-black mb-2">Natural / Sun-Dried</p>
              <p className="text-sm text-muted-foreground mb-3">The whole cherry is dried intact on raised beds. The fruit pulp ferments around the seed, infusing the bean with fruit sugars.</p>
              <p className="text-xs font-medium text-teal-700">Flavour: Fruity · Wine-like · Heavy body · Berry sweetness</p>
              <p className="text-xs text-neutral-500 mt-1">Available: Koraput, Halflong, Chirang, Tirap</p>
            </div>
            <div className="p-6 rounded-xl border border-neutral-200">
              <p className="font-semibold text-black mb-2">Washed / Wet Process</p>
              <p className="text-sm text-muted-foreground mb-3">Cherry skin and mucilage are removed before drying. The bean dries clean, allowing the true origin character to express without fruit interference.</p>
              <p className="text-xs font-medium text-teal-700">Flavour: Clean · Bright · Floral · Crisp acidity</p>
              <p className="text-xs text-neutral-500 mt-1">Available: Koraput, Chikmagalur, Coorg, Wayanad, Commercial AA/AAA</p>
            </div>
            <div className="p-6 rounded-xl border border-neutral-200">
              <p className="font-semibold text-black mb-2">Honey / HSD Process</p>
              <p className="text-sm text-muted-foreground mb-3">The skin is removed but some or all mucilage is left on during drying — capturing natural sugars without full fermentation. India's Honey Sun-Dried (HSD) method is distinctive.</p>
              <p className="text-xs font-medium text-teal-700">Flavour: Sweet · Stone-fruit · Silky body · Caramel</p>
              <p className="text-xs text-neutral-500 mt-1">Available: Koraput (Gold, Red, Yellow Honey grades)</p>
            </div>
          </div>
        </section>

        {/* Arabica vs Robusta */}
        <section className="border-t border-neutral-200 pt-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-4">
            Arabica vs Robusta: Which Should You Buy?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <p className="font-semibold text-black mb-2">Arabica — for specialty, filter, and single-origin espresso</p>
              <p className="text-sm text-neutral-600 mb-4">
                Arabica (<em>Coffea arabica</em>) thrives at 800–2,000 masl and contains 1.2–1.5% caffeine. It is lower in bitterness, higher in complexity, and produces a wider flavour range — from citrus and floral to chocolate and dried fruit. Arabica is the default choice for specialty roasters, third-wave cafés, and premium commercial blends.
              </p>
              <p className="text-sm text-neutral-600">
                Indian Arabica origins we stock: Koraput (Odisha), Halflong (Assam), Chikmagalur, Coorg, Wayanad, Bababudangiri.
              </p>
            </div>
            <div>
              <p className="font-semibold text-black mb-2">Robusta — for espresso blending, instant coffee, and volume</p>
              <p className="text-sm text-neutral-600 mb-4">
                Robusta (<em>Coffea canephora</em>) grows at lower altitudes (below 600m), contains 2.7% caffeine (nearly double Arabica), and produces a bold, earthy, chocolatey cup with a thick crema. It is more disease-resistant and cheaper to produce. Robusta is indispensable for espresso blends (it adds crema and body), South Indian filter coffee, and instant coffee manufacturing.
              </p>
              <p className="text-sm text-neutral-600">
                Indian Robusta origins we stock: Chirang (Assam) CxR, Tirap (Arunachal Pradesh) CxR — both natural-process, from tribal forest-fringe farms.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
