"use client";

import Image from "next/image";
import Link from "next/link";
import { useCurrency } from "@/components/currency-provider";
import { CURRENCIES } from "@/lib/currency";
import type { Product } from "@/data/products";

export function LocationProductCard({ product }: { product: Product }) {
  const { currency, convert } = useCurrency();
  const config = CURRENCIES[currency];
  const minConverted = convert(product.priceRange.min, currency);
  const maxConverted = convert(product.priceRange.max, currency);
  const decimals = currency === "INR" || currency === "KRW" ? 0 : 2;

  const priceText =
    product.priceRange.min === product.priceRange.max
      ? `${config.symbol}${minConverted.toLocaleString(config.locale, { maximumFractionDigits: decimals })}`
      : `${config.symbol}${minConverted.toLocaleString(config.locale, { maximumFractionDigits: decimals })}–${config.symbol}${maxConverted.toLocaleString(config.locale, { maximumFractionDigits: decimals })}`;

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group p-4 border rounded-lg hover:border-teal-400 transition-colors"
    >
      <div className="aspect-square relative rounded-md overflow-hidden bg-neutral-50 mb-3">
        <Image src={product.image} alt={product.name} fill className="object-contain p-3" />
      </div>
      <p className="font-medium text-black text-sm mb-1 group-hover:text-teal-700 transition-colors">
        {product.name}
      </p>
      <p className="text-xs text-muted-foreground mb-2 line-clamp-2">{product.description}</p>
      <div className="flex items-center justify-between text-xs">
        <span className="font-medium text-teal-700">
          {priceText}{product.priceRange.unit}
        </span>
        <span className="text-muted-foreground">MOQ {product.minimumOrder.quantity} {product.minimumOrder.unit}</span>
      </div>
    </Link>
  );
}
