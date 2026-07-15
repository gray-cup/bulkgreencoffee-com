import type { MetadataRoute } from "next";
import { getAllProductSlugs } from "@/data/products";
import { countryDestinations, stateDestinations } from "@/data/destinations";
import { indiaCities, INDIA_STATES, TOP_INDIAN_CITIES } from "@/data/india-locations";
import { countryCityContent } from "@/data/country-city-content";

const BASE = "https://bulkgreencoffee.com";
const NOW = new Date().toISOString();

function url(path: string, priority: number, changefreq: MetadataRoute.Sitemap[number]["changeFrequency"] = "weekly"): MetadataRoute.Sitemap[number] {
  return { url: `${BASE}${path}`, lastModified: NOW, changeFrequency: changefreq, priority };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    url("/", 1.0, "daily"),
    url("/products", 0.9, "daily"),
    url("/about", 0.7),
    url("/contact", 0.8),
    url("/white-label", 0.8),
    url("/social-responsibility", 0.6),
    url("/sample-request", 0.8),
    url("/new-product-request", 0.6),
    url("/team", 0.5),
    url("/careers", 0.5),
    url("/sites", 0.4),
    url("/privacy", 0.3),
    url("/terms", 0.3),
  ];

  const productPages = getAllProductSlugs().map((slug) =>
    url(`/products/${slug}`, 0.8, "weekly")
  );

  // Root-level country pages (/germany, /bulgaria, …) are canonical; the older
  // /green-coffee/[country] route now points its canonical tag at these URLs.
  const countryPages = countryDestinations.map((c) =>
    url(`/${c.slug}`, 0.85, "weekly")
  );

  const countryCityPages = countryCityContent.map((c) =>
    url(`/${c.countrySlug}/${c.citySlug}`, 0.8, "weekly")
  );

  const countryProductPages = countryDestinations.map((c) =>
    url(`/${c.slug}/products`, 0.75, "weekly")
  );

  const countryCityProductPages = countryCityContent.map((c) =>
    url(`/${c.countrySlug}/${c.citySlug}/products`, 0.7, "weekly")
  );

  const destinationStatePages = stateDestinations.map((s) =>
    url(`/green-coffee/india/${s.slug}`, 0.8, "weekly")
  );

  const indiaIndex = [url("/india/available-locations", 0.85, "weekly")];

  const indiaStatePages = INDIA_STATES.map((s) =>
    url(`/india/${s.slug}`, 0.8, "weekly")
  );

  const indiaCityPages = indiaCities.map((c) =>
    url(`/india/${c.stateSlug}/${c.citySlug}`, 0.75, "weekly")
  );

  const supplierPages = TOP_INDIAN_CITIES.map((city) =>
    url(`/${city}-green-coffee-supplier`, 0.75, "weekly")
  );

  return [
    ...staticPages,
    ...productPages,
    ...countryPages,
    ...countryCityPages,
    ...countryProductPages,
    ...countryCityProductPages,
    ...destinationStatePages,
    ...indiaIndex,
    ...indiaStatePages,
    ...indiaCityPages,
    ...supplierPages,
  ];
}
