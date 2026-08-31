import { notFound } from "@/lib/next-nav-compat";
import Link from "@/lib/next-link-compat";
import { pageMeta, NOT_FOUND_META } from "@/lib/seo";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LocationProductCard } from "@/components/products";
import { countryDestinations, getCountryBySlug, getWhatsappLink } from "@/data/destinations";
import { getRandomProducts } from "@/lib/random-products";
import { getOgLocale } from "@/data/country-codes";
import { getCitiesByCountry } from "@/data/country-city-content";
import { BreadcrumbSchema } from "@/components/seo";

const BASE_URL = "https://bulkgreencoffee.com";

type Props = { params: Promise<{ country: string }> };

export function generateStaticParams() {
  return countryDestinations.map((c) => ({ country: c.slug }));
}

export function meta({ params }: { params: { country?: string } }) {
  const dest = getCountryBySlug(params.country || "");
  if (!dest) return NOT_FOUND_META;
  // Same unfiltered catalogue as /products for every country - canonicalize to
  // the single master page to avoid ~100 near-duplicate pages in search.
  return pageMeta({
    title: `Indian Green Coffee Products for ${dest.name} Buyers`,
    description: `Full catalogue of Indian green coffee available to ${dest.name}: specialty and commercial Arabica, Robusta, all origins. Export-ready with full documentation.`,
    canonical: "/products",
  });
}
import { useParams } from "react-router";

export default function CountryProductsPage() {
  const { country } = useParams<{ country: string }>();
  const dest = getCountryBySlug(country || "");
  if (!dest) notFound();

  const cities = getCitiesByCountry(dest.slug);
  const featuredProducts = getRandomProducts(dest.slug, 6);

  const waLink = getWhatsappLink(
    `Hi, I'm browsing your product catalogue for ${dest.name} on bulkgreencoffee.com and I would like to enquire about sourcing Indian green coffee.`
  );

  const breadcrumbs = [
    { name: "Home", url: BASE_URL },
    { name: dest.name, url: `${BASE_URL}/${dest.slug}` },
    { name: "Products", url: `${BASE_URL}/${dest.slug}/products` },
  ];

  return (
    <div className="min-h-screen py-20 px-4 lg:px-6">
      <BreadcrumbSchema items={breadcrumbs} />
      <div className="max-w-6xl mx-auto px-4 lg:px-6">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-muted-foreground mb-8 flex-wrap">
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
          <span>/</span>
          <Link href={`/${dest.slug}`} className="hover:text-black transition-colors">{dest.name}</Link>
          <span>/</span>
          <span className="text-black">Products</span>
        </nav>

        {/* Header */}
        <div className="mb-10">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-3">
            {dest.flag} {dest.name}
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-black mb-3">
            Indian Green Coffee Products for {dest.name}
          </h1>
          <p className="text-md text-muted-foreground max-w-2xl mb-6">
            Our full catalogue of specialty and commercial green coffee, export-ready for {dest.name} with full phytosanitary and customs documentation.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={waLink} target="_blank" rel="noopener noreferrer">
              <Button variant="teal" size="sm">WhatsApp Us</Button>
            </a>
            <Link href={`/${dest.slug}`}>
              <Button variant="lightgraybg" size="sm">Back to {dest.name} Overview</Button>
            </Link>
          </div>
        </div>

        <hr className="mb-10" />

        {/* Sample of the catalogue */}
        <div className="mb-12">
          <h2 className="text-lg font-semibold text-black mb-2">
            Popular Products for {dest.name} Buyers
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

        {/* City-level product pages */}
        {cities.length > 0 && (
          <div className="mb-12">
            <h2 className="text-lg font-semibold text-black mb-4">
              Products by City in {dest.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {cities.map((c) => (
                <Link
                  key={c.citySlug}
                  href={`/${dest.slug}/${c.citySlug}/products`}
                  className="flex items-center justify-between p-4 border rounded-lg hover:border-teal-400 transition-colors group"
                >
                  <span className="font-medium text-black group-hover:text-teal-700 transition-colors">{c.city}</span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-teal-700 transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="p-8 rounded-xl border border-teal-200 bg-teal-50">
          <h2 className="text-lg font-semibold text-black mb-1">
            Ready to order for {dest.name}?
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
