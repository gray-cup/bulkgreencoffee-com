"use client";

import { Image } from "@/components/Image";
import Link from "@/lib/next-link-compat";
import { useRouter } from "@/lib/next-nav-compat";
import { Check, Plus } from "lucide-react";
import type { Product } from "@/data/products";
import { useCart } from "@/context/cart-context";

type ProductCardProps = {
  product: Product;
  showPrice?: boolean;
  showActions?: boolean;
};

/** Plain product card. The only motion is a slight photo zoom on hover (CSS transform, no JS). */
export function ProductCard({ product, showPrice = true, showActions = true }: ProductCardProps) {
  const { toggle, add, isInCart } = useCart();
  const router = useRouter();
  const inCart = isInCart(product.slug);
  const href = `/products/${product.slug}`;

  return (
    <article className="group overflow-hidden rounded-lg border border-neutral-200 bg-white">
      <div className="relative aspect-square overflow-hidden bg-neutral-100">
        <Link href={href} className="block h-full w-full" aria-label={product.name}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            draggable={false}
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        <div className="absolute left-2 top-2 flex flex-col items-start gap-1">
          {product.scaScore != null && product.scaScore > 81 && (
            <span className="rounded bg-teal-700 px-2 py-0.5 text-xs font-medium text-white">Specialty</span>
          )}
          {product.categoryTwo && (
            <span className="rounded bg-black/55 px-2 py-0.5 text-xs font-medium text-white capitalize">
              {product.categoryTwo}
            </span>
          )}
        </div>

        {showActions && (
          <button
            type="button"
            onClick={() => toggle(product.slug)}
            aria-pressed={inCart}
            className={`absolute right-2 top-2 flex items-center gap-1 rounded px-2.5 py-1 text-xs font-semibold transition-colors ${
              inCart ? "bg-teal-700 text-white" : "bg-white text-neutral-900 hover:bg-teal-700 hover:text-white"
            }`}
          >
            {inCart ? (
              <>
                <Check className="h-3.5 w-3.5" /> Selected
              </>
            ) : (
              <>
                <Plus className="h-3.5 w-3.5" /> Select
              </>
            )}
          </button>
        )}
      </div>

      <div className="p-3">
        <Link href={href}>
          <h3 className="text-base font-semibold leading-tight text-neutral-900 hover:underline">{product.name}</h3>
        </Link>

        {showPrice && (
          <div className="mt-1 flex items-center justify-between text-xs text-neutral-600">
            <span dir="ltr">
              From ₹{product.priceRange.min}
              {product.minimumOrder.unit ? `/${product.minimumOrder.unit}` : ""}
            </span>
            <span>
              MOQ: {product.minimumOrder.quantity} {product.minimumOrder.unit}
            </span>
          </div>
        )}

        {showActions && (
          <div className="mt-3 flex gap-2">
            <button
              type="button"
              onClick={() => {
                add(product.slug);
                router.push("/cart");
              }}
              className="h-9 flex-1 rounded-md bg-teal-800 text-xs font-medium text-white hover:bg-teal-700"
            >
              Add to Cart
            </button>
            <Link
              href={`/buy-green-coffee-beans/${product.slug}`}
              className="flex h-9 flex-1 items-center justify-center rounded-md border border-neutral-300 text-xs font-medium text-neutral-800 hover:bg-neutral-100"
            >
              Buy Now
            </Link>
          </div>
        )}
      </div>
    </article>
  );
}
