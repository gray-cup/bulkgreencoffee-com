import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { LocationProductCard } from "@/components/products";
import {
  countryDestinations,
  getCountryBySlug,
  getWhatsappLink,
} from "@/data/destinations";
import { getProductBySlug } from "@/data/products";
import { getIsoCountry, getOgLocale } from "@/data/country-codes";
import { BreadcrumbSchema, FaqSchema, ProductSchema } from "@/components/seo";

const BASE_URL = "https://bulkgreencoffee.com";

type Props = { params: Promise<{ country: string }> };

export function generateStaticParams() {
  return countryDestinations.map((c) => ({ country: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country } = await params;
  const dest = getCountryBySlug(country);
  if (!dest) return { title: "Not Found" };
  return {
    // dest.metaTitle already includes the "| Bulk Green Coffee" brand suffix,
    // so it must bypass the root layout's title template (which would append it again).
    title: { absolute: dest.metaTitle },
    description: dest.metaDescription,
    // Canonicalizes to the shorter root-level URL (e.g. /germany) which is the
    // primary international route going forward — see src/app/(marketing)/[country].
    alternates: { canonical: `/${dest.slug}` },
    openGraph: {
      title: dest.metaTitle,
      description: dest.metaDescription,
      url: `https://bulkgreencoffee.com/green-coffee/${dest.slug}`,
      locale: getOgLocale(dest.slug),
    },
  };
}

export default async function CountryPage({ params }: Props) {
  const { country } = await params;
  const dest = getCountryBySlug(country);
  if (!dest) notFound();

  const products = dest.popularProductSlugs
    .map((s) => getProductBySlug(s))
    .filter(Boolean) as NonNullable<ReturnType<typeof getProductBySlug>>[];

  const waLink = getWhatsappLink(
    `Hi, I found your page for ${dest.name} on bulkgreencoffee.com and I would like to enquire about sourcing Indian green coffee.`
  );

  const isoCountry = getIsoCountry(dest.slug);

  const breadcrumbs = [
    { name: "Home", url: BASE_URL },
    { name: "Products", url: `${BASE_URL}/products` },
    { name: dest.name, url: `${BASE_URL}/green-coffee/${dest.slug}` },
  ];

  return (
    <div className="min-h-screen py-20 px-4 lg:px-6">
      <BreadcrumbSchema items={breadcrumbs} />
      <FaqSchema faqs={dest.faqs} />
      {products.map((product) => (
        <ProductSchema key={product.slug} product={product} shippingCountry={isoCountry} />
      ))}
      <div className="max-w-5xl mx-auto px-4 lg:px-6">

        {/* Header */}
        <div className="mb-10">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-3">
            {dest.flag} {dest.name}
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-black mb-3">
            {dest.heroHeadline}
          </h1>
          <p className="text-md text-muted-foreground max-w-2xl mb-6">
            {dest.heroSubtitle}
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={waLink} target="_blank" rel="noopener noreferrer">
              <Button variant="teal" size="sm">WhatsApp Us</Button>
            </a>
            <Link href="/contact">
              <Button variant="lightgraybg" size="sm">Contact Form</Button>
            </Link>
            <Link href="/products">
              <Button variant="lightgraybg" size="sm">Browse All Products</Button>
            </Link>
          </div>
        </div>

        <hr className="mb-10" />

        {/* Market Context */}
        <div className="mb-12">
          <h2 className="text-lg font-semibold text-black mb-3">
            Sourcing Indian Green Coffee in {dest.name}
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
            {dest.marketContext}
          </p>
        </div>

        {/* Featured Products */}
        <div className="mb-12">
          <h2 className="text-lg font-semibold text-black mb-2">
            Products Popular with {dest.name} Buyers
          </h2>
          <p className="text-sm text-muted-foreground mb-6">
            All products are export-ready with full phytosanitary and customs documentation.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
              <LocationProductCard key={product.slug} product={product} />
            ))}
          </div>
          <div className="mt-4">
            <Link href="/products" className="text-sm text-teal-700 hover:text-teal-900 font-medium">
              View all products →
            </Link>
          </div>
        </div>

        <hr className="mb-12" />

        {/* Shipping & Import */}
        <div className="mb-12">
          <h2 className="text-lg font-semibold text-black mb-4">
            Shipping & Import Details for {dest.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 border rounded-lg">
              <p className="font-medium text-black mb-2 text-sm">Shipping</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{dest.shippingNote}</p>
            </div>
            <div className="p-5 border rounded-lg">
              <p className="font-medium text-black mb-2 text-sm">Import & Customs</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{dest.importNote}</p>
            </div>
          </div>
        </div>

        {/* Why India */}
        <div className="mb-12">
          <h2 className="text-lg font-semibold text-black mb-4">
            Why Source Green Coffee from India?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "Shade-Grown by Default",
                body: "Nearly all Indian coffee grows under silver oak, pepper vines, and native jungle trees — producing slower-ripened cherries with more concentrated flavour.",
              },
              {
                title: "Multiple Process Types",
                body: "Natural, Washed, Honey Sun-Dried (HSD), and Monsooned Malabar — more processing variety than most single-country origins.",
              },
              {
                title: "Genuine Traceability",
                body: "We source directly from tribal cooperatives in Koraput, small-holder farms in Assam, and estates in Karnataka — with origin documentation to district level.",
              },
              {
                title: "Competitive Pricing",
                body: "Commercial AA/AAA from ₹800/kg. Specialty lots from ₹1,100/kg. Strong quality-to-cost value compared to equivalent Ethiopian or Colombian origins.",
              },
              {
                title: "Export Infrastructure",
                body: "India exports coffee to 80+ countries. We handle phytosanitary certificates, fumigation reports, GrainPro packaging, and all export documentation.",
              },
              {
                title: "Arabica & Robusta",
                body: "India produces both Arabica (high-altitude specialty) and Robusta (bold espresso and instant). One supplier for all your green coffee needs.",
              },
            ].map((item) => (
              <div key={item.title} className="p-5 border rounded-lg">
                <p className="font-medium text-black mb-2 text-sm">{item.title}</p>
                <p className="text-sm text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        {dest.faqs.length > 0 && (
          <div className="mb-12">
            <h2 className="text-lg font-semibold text-black mb-6">
              FAQs — Indian Green Coffee for {dest.name}
            </h2>
            <div className="space-y-4">
              {dest.faqs.map((faq, i) => (
                <div key={i} className="p-5 border rounded-lg">
                  <p className="font-medium text-black mb-2">{faq.q}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="p-8 rounded-xl border border-teal-200 bg-teal-50">
          <h2 className="text-lg font-semibold text-black mb-1">
            Ready to source Indian green coffee in {dest.name}?
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
