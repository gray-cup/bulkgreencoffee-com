import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { LocationProductCard } from "@/components/products";
import { getCountryBySlug, getWhatsappLink } from "@/data/destinations";
import { products } from "@/data/products";
import { getOgLocale } from "@/data/country-codes";
import { countryCityContent, getCountryCity } from "@/data/country-city-content";
import { BreadcrumbSchema } from "@/components/seo";

const BASE_URL = "https://bulkgreencoffee.com";

type Props = { params: Promise<{ country: string; city: string }> };

export function generateStaticParams() {
  return countryCityContent.map((c) => ({ country: c.countrySlug, city: c.citySlug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country, city } = await params;
  const data = getCountryCity(country, city);
  const dest = getCountryBySlug(country);
  if (!data || !dest) return { title: "Not Found" };
  return {
    title: `Indian Green Coffee Products for ${data.city} Buyers`,
    description: `Full catalogue of Indian green coffee available in ${data.city}, ${dest.name} — specialty and commercial Arabica, Robusta, all origins. Delivered in ${data.transitDays}.`,
    alternates: { canonical: `/${country}/${city}/products` },
    openGraph: {
      title: `Indian Green Coffee Products for ${data.city}`,
      description: `Browse our full green coffee catalogue for ${data.city}, ${dest.name} — specialty and commercial grades from Koraput, Halflong, Chikmagalur, Coorg, and more.`,
      url: `${BASE_URL}/${country}/${city}/products`,
      locale: getOgLocale(country),
    },
  };
}

export default async function CountryCityProductsPage({ params }: Props) {
  const { country, city } = await params;
  const data = getCountryCity(country, city);
  const dest = getCountryBySlug(country);
  if (!data || !dest) notFound();

  const waLink = getWhatsappLink(
    `Hi, I'm browsing your product catalogue for ${data.city}, ${dest.name} on bulkgreencoffee.com and I would like to enquire about sourcing Indian green coffee.`
  );

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

        {/* Full catalogue */}
        <div className="mb-12">
          <h2 className="text-lg font-semibold text-black mb-2">
            All Products Available in {data.city}
          </h2>
          <p className="text-sm text-muted-foreground mb-6">
            Every product ships with phytosanitary certificates, fumigation reports, and a certificate of origin.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
              <LocationProductCard key={product.slug} product={product} />
            ))}
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
              <Button variant="teal" size="sm">WhatsApp — +91 85279 14317</Button>
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
