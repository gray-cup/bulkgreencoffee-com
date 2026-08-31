import { notFound } from "@/lib/next-nav-compat";
import Link from "@/lib/next-link-compat";
import { pageMeta, NOT_FOUND_META } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { LocationProductCard } from "@/components/products";
import { ArrowRight } from "lucide-react";
import { getCountryBySlug, getWhatsappLink } from "@/data/destinations";
import { getRandomProducts } from "@/lib/random-products";
import { getOgLocale } from "@/data/country-codes";
import { countryCityContent, getCountryCity } from "@/data/country-city-content";
import { BreadcrumbSchema } from "@/components/seo";

const BASE_URL = "https://bulkgreencoffee.com";

type Props = { params: Promise<{ country: string; city: string }> };

export function generateStaticParams() {
  return countryCityContent.map((c) => ({ country: c.countrySlug, city: c.citySlug }));
}

export function meta({ params }: { params: { country?: string; city?: string } }) {
  const data = getCountryCity(params.country || "", params.city || "");
  const dest = getCountryBySlug(params.country || "");
  if (!data || !dest) return NOT_FOUND_META;
  // Same unfiltered catalogue as /products for every city - canonicalize to
  // the single master page to avoid ~120 near-duplicate pages.
  return pageMeta({
    title: `Indian Green Coffee Products for ${data.city} Buyers`,
    description: `Full catalogue of Indian green coffee available in ${data.city}, ${dest.name}: specialty and commercial Arabica, Robusta, all origins. Delivered in ${data.transitDays}.`,
    canonical: "/products",
  });
}
import { useParams } from "react-router";

export default function CountryCityProductsPage() {
  const { country, city } = useParams<{ country: string; city: string }>();
  const data = getCountryCity(country || "", city || "");
  const dest = getCountryBySlug(country || "");
  if (!data || !dest) notFound();

  const waLink = getWhatsappLink(
    `Hi, I'm browsing your product catalogue for ${data.city}, ${dest.name} on bulkgreencoffee.com and I would like to enquire about sourcing Indian green coffee.`
  );
  const featuredProducts = getRandomProducts(`${country}-${city}`, 6);

  const breadcrumbs = [
    { name: "Home", url: BASE_URL },
    { name: dest.name, url: `${BASE_URL}/${country}` },
    { name: data.city, url: `${BASE_URL}/${country}/${city}` },
    { name: "Products", url: `${BASE_URL}/${country}/${city}/products` },
  ];

  return (
    <div className="min-h-screen py-20 px-4 lg:px-6">
      <BreadcrumbSchema items={breadcrumbs} />
      <div className="max-w-6xl mx-auto px-4 lg:px-6">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-muted-foreground mb-8 flex-wrap">
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
          <span>/</span>
          <Link href={`/${country}`} className="hover:text-black transition-colors">{dest.name}</Link>
          <span>/</span>
          <Link href={`/${country}/${city}`} className="hover:text-black transition-colors">{data.city}</Link>
          <span>/</span>
          <span className="text-black">Products</span>
        </nav>

        {/* Header */}
        <div className="mb-10">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-3">
            {dest.flag} {data.city}, {dest.name}
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-black mb-3">
            Indian Green Coffee Products for {data.city}
          </h1>
          <p className="text-md text-muted-foreground max-w-2xl mb-6">
            Our full catalogue of specialty and commercial green coffee, delivered to {data.city} in {data.transitDays} with full phytosanitary and customs documentation.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={waLink} target="_blank" rel="noopener noreferrer">
              <Button variant="teal" size="sm">WhatsApp Us</Button>
            </a>
            <Link href={`/${country}/${city}`}>
              <Button variant="lightgraybg" size="sm">Back to {data.city} Overview</Button>
            </Link>
            <Link href={`/${country}/products`}>
              <Button variant="lightgraybg" size="sm">All {dest.name} Products</Button>
            </Link>
          </div>
        </div>

        <hr className="mb-10" />

        {/* Sample of the catalogue */}
        <div className="mb-12">
          <h2 className="text-lg font-semibold text-black mb-2">
            Popular Products for {data.city} Buyers
          </h2>
          <p className="text-sm text-muted-foreground mb-6">
            A sample from our catalogue, every product ships with phytosanitary certificates, fumigation reports, and a certificate of origin.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredProducts.map((product) => (
              <LocationProductCard key={product.slug} product={product} />
            ))}
          </div>
          <div className="mt-6">
            <Link href="/products" className="inline-flex items-center gap-1 text-sm text-teal-700 hover:text-teal-900 font-medium">
              View the full catalogue <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 rounded-xl border border-teal-200 bg-teal-50">
          <h2 className="text-lg font-semibold text-black mb-1">
            Ready to order for {data.city}?
          </h2>
          <p className="text-sm text-muted-foreground mb-4">
            Message us on WhatsApp with your target origin, volume, and timeline. We respond within a few hours and can arrange samples before any bulk commitment.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={waLink} target="_blank" rel="noopener noreferrer">
              <Button variant="teal" size="sm">WhatsApp: +91 85279 14317</Button>
            </a>
            <Link href="/contact">
              <Button variant="lightgraybg" size="sm">Contact Form</Button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
