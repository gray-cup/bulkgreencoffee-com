"use client";

import React, { useState } from "react";
import Image from "@/components/Image";
import Link from "@/lib/next-link-compat";
import { Check, ChevronLeft } from "lucide-react";
import { notFound, useParams } from "@/lib/next-nav-compat";
import { getProductBySlug } from "@/data/products";
import { Badge } from "@/components/ui/badge";
import { CheckoutForm } from "@/components/buy-samples/CheckoutForm";
import { SamplePricingTable } from "@/components/products";
import { TIERS, calcPrice, deliveryFeeForGrams, type TierLabel } from "@/lib/pricing";
import { pageMeta, NOT_FOUND_META } from "@/lib/seo";

export function meta({ params }: { params: { slug?: string } }) {
  const product = getProductBySlug(params.slug || "");
  if (!product) return NOT_FOUND_META;
  return pageMeta({
    title: `Buy a ${product.name} Sample (100g–1kg) | Bulk Green Coffee`,
    description: `Order a small sample of ${product.name} before committing to a bulk order. ${product.description} Sample sizes 100g to 1kg, delivered across India.`,
    canonical: `/buy-samples/${params.slug}`,
    image: product.image?.startsWith("http") ? product.image : undefined,
  });
}

export default function BuySampleSlugPage() {
  const { slug }  = useParams<{ slug: string }>();
  const product   = getProductBySlug(slug);
  if (!product) {
    notFound();
    return null;
  }

  const [activeTier, setActiveTier] = useState<TierLabel>("100g");
  const tier         = TIERS.find((t) => t.label === activeTier)!;
  const itemPrice    = calcPrice(product.priceRange.min, tier.grams);
  const deliveryFee  = deliveryFeeForGrams(tier.grams);
  const total        = itemPrice + deliveryFee;

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 lg:px-6">

        <Link
          href="/buy-samples"
          className="text-sm text-muted-foreground hover:text-black mb-8 inline-flex items-center gap-1 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" /> All samples
        </Link>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left - image + product info */}
          <div className="lg:sticky lg:top-28 lg:self-start space-y-5">
            <div className="aspect-square relative rounded-2xl overflow-hidden bg-gray-50 border border-gray-200">
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                draggable={false}
                className="object-contain p-6"
              />
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h1 className="text-2xl font-semibold text-black">{product.name}</h1>
                {product.scaScore != null && product.scaScore > 81 && (
                  <Badge className="bg-green-600 text-white text-xs px-2 py-0.5 rounded-full">
                    Specialty
                  </Badge>
                )}
              </div>
              {product.region && (
                <p className="text-sm text-muted-foreground mb-3">{product.region}</p>
              )}
              <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
            </div>

            {product.details && product.details.length > 0 && (
              <ul className="space-y-1.5">
                {product.details.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 mt-0.5 text-teal-600 shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Right - quantity, order summary, form */}
          <div className="space-y-6">
            {/* Quantity tabs */}
            <div className="overflow-x-auto">
              <p className="text-xs text-muted-foreground mb-2">Quantity</p>
              <div className="inline-flex gap-1 bg-gray-100 rounded-xl p-1">
                {TIERS.map((t) => (
                  <button
                    key={t.label}
                    type="button"
                    onClick={() => setActiveTier(t.label)}
                    className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                      activeTier === t.label
                        ? "bg-white text-black shadow-sm"
                        : "text-gray-500 hover:text-gray-800 hover:bg-white/60"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Price breakdown */}
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 space-y-2 text-sm">
              <div className="flex justify-between text-gray-700">
                <span>{tier.label} of {product.name}</span>
                <span>₹{itemPrice}</span>
              </div>
              {deliveryFee > 0 && (
                <div className="flex justify-between text-gray-700">
                  <span>Delivery</span>
                  <span>₹{deliveryFee}</span>
                </div>
              )}
              <div className="flex justify-between font-semibold text-black border-t border-gray-200 pt-2">
                <span>Total</span>
                <span>₹{total}</span>
              </div>
            </div>

            {/* Pricing for every weight size */}
            <SamplePricingTable product={product} />

            {/* Form */}
            <CheckoutForm
              items={[{ slug: product.slug, tier: activeTier }]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
