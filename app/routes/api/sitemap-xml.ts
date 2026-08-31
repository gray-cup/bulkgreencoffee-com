import type { LoaderFunctionArgs } from "react-router";
import { countryDestinations } from "@/data/destinations";
import { products } from "@/data/products";
import { indiaCities } from "@/data/india-locations";

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
      "/buy-samples",
      "/buy-samples/checkout",
      "/indian-green-coffee-beans",
      "/bulk-green-coffee",
      "/1-container-green-coffee-beans",
    ];

    const productRoutes = products.map((p) => `/products/${p.slug}`);
    const buySampleRoutes = products.map((p) => `/buy-samples/${p.slug}`);
    const destinationRoutes = countryDestinations.map((c) => `/green-coffee/${c.slug}`);

    const stateRoutes = Array.from(new Set(indiaCities.map((c) => c.stateSlug))).map((s) => `/india/${s}`);
    const cityRoutes = indiaCities.map((c) => `/india/${c.stateSlug}/${c.citySlug}`);

    const allRoutes = [
      ...staticRoutes,
      ...productRoutes,
      ...buySampleRoutes,
      ...destinationRoutes,
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
