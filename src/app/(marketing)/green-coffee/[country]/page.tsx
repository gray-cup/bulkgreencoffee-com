import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  countryDestinations,
  getCountryBySlug,
  getWhatsappLink,
} from "@/data/destinations";
import { getProductBySlug } from "@/data/products";

type Props = { params: Promise<{ country: string }> };

export function generateStaticParams() {
  return countryDestinations.map((c) => ({ country: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country } = await params;
  const dest = getCountryBySlug(country);
  if (!dest) return { title: "Not Found" };
  return {
    title: dest.metaTitle,
    description: dest.metaDescription,
    alternates: { canonical: `/green-coffee/${dest.slug}` },
    openGraph: {
      title: dest.metaTitle,
      description: dest.metaDescription,
      url: `https://bulkgreencoffee.com/green-coffee/${dest.slug}`,
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

  return (
    <div className="min-h-screen">

      {/* Hero */}
      <section className="py-20 px-4 lg:px-6 border-b border-neutral-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-700 mb-3">
            {dest.flag} {dest.name}
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-black mb-4 max-w-3xl">
            {dest.heroHeadline}
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl mb-8">
            {dest.heroSubtitle}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#25D366] text-white text-sm font-medium hover:bg-[#1fbb59] transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center px-5 py-2.5 rounded-lg border border-neutral-300 text-sm font-medium text-black hover:bg-neutral-50 transition-colors"
            >
              Contact Form
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center px-5 py-2.5 rounded-lg border border-neutral-300 text-sm font-medium text-black hover:bg-neutral-50 transition-colors"
            >
              Browse All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Market Context */}
      <section className="py-16 px-4 lg:px-6 border-b border-neutral-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold text-black mb-4">
            Sourcing Indian Green Coffee in {dest.name}
          </h2>
          <p className="text-neutral-600 leading-relaxed max-w-3xl">
            {dest.marketContext}
          </p>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4 lg:px-6 border-b border-neutral-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold text-black mb-2">
            Products Popular with {dest.name} Buyers
          </h2>
          <p className="text-sm text-neutral-500 mb-8">
            All products are export-ready with full phytosanitary and customs documentation.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="group border border-neutral-200 rounded-xl overflow-hidden hover:border-teal-400 transition-colors"
              >
                <div className="aspect-[4/3] relative bg-neutral-50">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <div className="p-4">
                  <p className="font-medium text-black text-sm mb-1 group-hover:text-teal-800 transition-colors">
                    {product.name}
                  </p>
                  <p className="text-xs text-neutral-500 mb-2 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-medium text-teal-700">
                      ₹{product.priceRange.min}
                      {product.priceRange.min !== product.priceRange.max
                        ? `–₹${product.priceRange.max}`
                        : ""}{" "}
                      {product.priceRange.unit}
                    </p>
                    <p className="text-xs text-neutral-400">
                      MOQ {product.minimumOrder.quantity} {product.minimumOrder.unit}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/products"
              className="inline-flex items-center gap-1 text-sm font-medium text-teal-700 hover:text-teal-900 transition-colors"
            >
              View all products →
            </Link>
          </div>
        </div>
      </section>

      {/* Shipping & Import */}
      <section className="py-16 px-4 lg:px-6 border-b border-neutral-100 bg-neutral-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold text-black mb-8">
            Shipping & Import Details for {dest.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-neutral-200 p-6">
              <p className="font-semibold text-black mb-2 text-sm">Shipping</p>
              <p className="text-sm text-neutral-600 leading-relaxed">{dest.shippingNote}</p>
            </div>
            <div className="bg-white rounded-xl border border-neutral-200 p-6">
              <p className="font-semibold text-black mb-2 text-sm">Import & Customs</p>
              <p className="text-sm text-neutral-600 leading-relaxed">{dest.importNote}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why India */}
      <section className="py-16 px-4 lg:px-6 border-b border-neutral-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold text-black mb-8">
            Why Source Green Coffee from India?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: "Shade-Grown by Default",
                body: "Nearly all Indian coffee grows under silver oak, pepper vines, and native jungle trees — producing slower-ripened cherries with more concentrated flavour and inherently sustainable farming practices.",
              },
              {
                title: "Multiple Process Types",
                body: "Natural, Washed, Honey Sun-Dried (HSD), and Monsooned Malabar — Indian farms offer more processing variety than most single-country origins, giving roasters flexibility in a single supplier relationship.",
              },
              {
                title: "Genuine Traceability",
                body: "We source directly from tribal cooperatives in Koraput (Odisha), small-holder farms in Assam, and estates in Karnataka — with origin documentation to district and cooperative level.",
              },
              {
                title: "Competitive Pricing",
                body: "Commercial AA/AAA from ₹800/kg. Specialty lots from ₹1,100/kg. Indian green coffee offers strong quality-to-cost value compared to equivalent Ethiopian or Colombian origins.",
              },
              {
                title: "Export Infrastructure",
                body: "India exports coffee to 80+ countries. We handle phytosanitary certificates, fumigation reports, GrainPro packaging, and all export documentation to reduce your sourcing burden.",
              },
              {
                title: "Arabica & Robusta",
                body: "India produces both Arabica (high-altitude specialty) and Robusta (bold espresso and instant). A single Indian supplier can cover both your specialty and commercial blend requirements.",
              },
            ].map((item) => (
              <div key={item.title} className="p-5 rounded-xl border border-neutral-200">
                <p className="font-semibold text-black text-sm mb-2">{item.title}</p>
                <p className="text-sm text-neutral-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      {dest.faqs.length > 0 && (
        <section className="py-16 px-4 lg:px-6 border-b border-neutral-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-black mb-8">
              FAQs — Indian Green Coffee for {dest.name}
            </h2>
            <div className="space-y-6">
              {dest.faqs.map((faq, i) => (
                <div key={i} className="border-b border-neutral-200 pb-6">
                  <p className="font-semibold text-black mb-2">{faq.q}</p>
                  <p className="text-sm text-neutral-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 px-4 lg:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-teal-50 border border-teal-200 rounded-2xl p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="font-semibold text-black mb-1">
                Ready to source Indian green coffee in {dest.name}?
              </p>
              <p className="text-sm text-neutral-600 max-w-lg">
                Message us on WhatsApp with your target origin, volume, and timeline. We respond within a few hours and can arrange samples before any bulk commitment.
              </p>
            </div>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#25D366] text-white text-sm font-medium hover:bg-[#1fbb59] transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp — +91 85279 14317
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
