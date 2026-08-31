import type { LoaderFunctionArgs } from "react-router";
import { countryDestinations, stateDestinations } from "@/data/destinations";
import { products } from "@/data/products";
import { indiaCities, TOP_INDIAN_CITIES } from "@/data/india-locations";
import { countryCityContent } from "@/data/country-city-content";
import { roastedPlaces } from "@/data/roasted-places";

const BASE_URL = "https://bulkgreencoffee.com";

export async function loader({ request }: LoaderFunctionArgs) {
  try {
    const staticRoutes = [
      "",
      "/products",
      "/about",
      "/contact",
      "/terms",
      "/refunds",
      "/privacy",
      "/white-label",
      "/social-responsibility",
      "/team",
      "/careers",
      "/sites",
      "/sample-request",
      "/new-product-request",
      "/buy-green-coffee-beans",
      "/india/available-locations",
      "/indian-green-coffee-beans",
      "/bulk-green-coffee",
      "/1-container-green-coffee-beans",
    ];

    const productRoutes = products.map((p) => `/products/${p.slug}`);
    const buySampleRoutes = products.map((p) => `/buy-green-coffee-beans/${p.slug}`);
    const roastedRetailRoutes = roastedPlaces.map((p) => `/roasted-coffee/${p.slug}`);
    const roastedCafeRoutes = roastedPlaces.map((p) => `/bulk-roasted-coffee-cafes/${p.slug}`);
    // Root-level /:country is canonical (green-coffee/:country points its canonical here)
    const destinationRoutes = countryDestinations.map((c) => `/${c.slug}`);
    const destinationStateRoutes = stateDestinations.map((s) => `/green-coffee/india/${s.slug}`);
    const countryCityRoutes = countryCityContent.map((c) => `/${c.countrySlug}/${c.citySlug}`);
    const supplierRoutes = TOP_INDIAN_CITIES.map((city) => `/${city}-green-coffee-supplier`);

    const stateRoutes = Array.from(new Set(indiaCities.map((c) => c.stateSlug))).map((s) => `/india/${s}`);
    const cityRoutes = indiaCities.map((c) => `/india/${c.stateSlug}/${c.citySlug}`);

    const allRoutes = [
      ...staticRoutes,
      ...productRoutes,
      ...buySampleRoutes,
      ...roastedRetailRoutes,
      ...roastedCafeRoutes,
      ...destinationRoutes,
      ...destinationStateRoutes,
      ...countryCityRoutes,
      ...supplierRoutes,
      ...stateRoutes,
      ...cityRoutes,
    ];

    const urlsXml = allRoutes
      .map((route) => `<url><loc>${BASE_URL}${route}</loc><changefreq>weekly</changefreq></url>`)
      .join("");

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlsXml}
</urlset>`;

    return new Response(sitemap, {
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "public, max-age=86400, s-maxage=86400",
      },
    });
  } catch (err: any) {
    console.error("Sitemap generation error:", err);
    return new Response("Error generating sitemap", { status: 500 });
  }
}
