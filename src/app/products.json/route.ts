import { NextResponse } from "next/server";
import { products } from "@/data/products";
import type { Product } from "@/data/products/types";

export const revalidate = 3600;

const BASE_URL = "https://bulkgreencoffee.com";

function resolveUrl(path: string): string {
  return path.startsWith("http") ? path : `${BASE_URL}${path}`;
}

function mapProduct(product: Product) {
  return {
    sku: product.sku,
    slug: product.slug,
    name: product.name,
    brand: product.brand,
    category: product.category,
    categoryTwo: product.categoryTwo ?? null,
    description: product.description,
    longDescription: product.longDescription ?? null,
    url: `${BASE_URL}/products/${product.slug}`,
    image: resolveUrl(product.image),
    images: (product.estateImages ?? []).map(resolveUrl),
    currency: "INR",
    priceRange: product.priceRange,
    minimumOrder: product.minimumOrder,
    grades: product.grades,
    packaging: product.packaging,
    details: product.details,
    locations: product.locations,
    availability: product.availability,
    mpn: product.mpn ?? null,
    googleProductCategory: product.googleProductCategory,
    varietal: product.varietal ?? null,
    scaScore: product.scaScore ?? null,
    region: product.region ?? null,
    variety: product.variety ?? null,
    origin: product.origin ?? null,
  };
}

export async function GET() {
  const body = {
    site: "bulkgreencoffee.com",
    baseUrl: BASE_URL,
    currency: "INR",
    generatedAt: new Date().toISOString(),
    products: products.map(mapProduct),
  };

  return NextResponse.json(body, {
    headers: {
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
