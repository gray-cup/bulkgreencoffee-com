"use client";

import { TIERS, calcPrice, deliveryFeeForGrams } from "@/lib/pricing";
import { useCurrency } from "@/components/currency-provider";
import { formatPrice, convertPrice } from "@/lib/currency";
import type { Product } from "@/data/products";

export function SamplePricingTable({ product }: { product: Product }) {
  const { currency, rates } = useCurrency();
  const fmt = (inr: number) => formatPrice(convertPrice(inr, currency, rates), currency);

  return (
    <div className="rounded-xl border border-gray-200 overflow-hidden">
      <div className="px-4 py-2.5 bg-gray-50 border-b border-gray-200">
        <p className="text-sm font-medium text-black">Sample &amp; Retail Pricing by Size</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-xs text-muted-foreground border-b border-gray-100">
              <th className="text-left font-medium px-4 py-2">Size</th>
              <th className="text-right font-medium px-4 py-2">Product</th>
              <th className="text-right font-medium px-4 py-2">Delivery</th>
              <th className="text-right font-medium px-4 py-2">Total</th>
            </tr>
          </thead>
          <tbody>
            {TIERS.map((t) => {
              const price = calcPrice(product.priceRange.min, t.grams);
              const delivery = deliveryFeeForGrams(t.grams);
              return (
                <tr key={t.label} className="border-b border-gray-50 last:border-0">
                  <td className="px-4 py-2 font-medium text-black">{t.label}</td>
                  <td className="px-4 py-2 text-right">{fmt(price)}</td>
                  <td className="px-4 py-2 text-right text-muted-foreground">{fmt(delivery)}</td>
                  <td className="px-4 py-2 text-right font-semibold text-black">{fmt(price + delivery)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="px-4 py-2.5 text-xs text-muted-foreground bg-gray-50 border-t border-gray-100">
        Delivery is charged once per order based on total weight. For bulk or full-container orders, use the wholesale calculator above or contact us for a quote.
      </p>
    </div>
  );
}
