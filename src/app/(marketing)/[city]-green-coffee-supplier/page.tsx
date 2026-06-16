import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { TOP_CITIES, getCityBySlugOnly, getStateNameFromSlug } from "@/data/india-cities";
import { getProductBySlug } from "@/data/products";
import { getWhatsappLink } from "@/data/destinations";

type Props = { params: Promise<{ "city-green-coffee-supplier": string }> };

function parseParam(raw: string): string {
  // param is e.g. "mumbai-green-coffee-supplier" → "mumbai"
  return raw.replace(/-green-coffee-supplier$/, "");
}

export function generateStaticParams() {
  return TOP_CITIES.map((city) => ({
    "city-green-coffee-supplier": `${city}-green-coffee-supplier`,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const raw = (await params)["city-green-coffee-supplier"];
  const citySlug = parseParam(raw);
  const data = getCityBySlugOnly(citySlug);
  if (!data) return { title: "Not Found" };
  const stateName = getStateNameFromSlug(data.stateSlug) ?? data.state;
  return {
    title: `Indian Green Coffee Suppliers in ${data.city} | Wholesale Arabica | Bulk Green Coffee`,
    description: `Find trusted Indian green coffee suppliers in ${data.city}, ${stateName}. Specialty Arabica from Koraput, Halflong & South India. MOQ ${data.moq}. Delivered in ${data.transitDays}. WhatsApp: +91 85279 14317.`,
    alternates: { canonical: `/${citySlug}-green-coffee-supplier` },
    openGraph: {
      title: `Green Coffee Suppliers in ${data.city} | Indian Arabica Wholesale`,
      description: `Wholesale Indian Arabica & Robusta for ${data.city}. ${data.cityContext}`,
      url: `https://bulkgreencoffee.com/${citySlug}-green-coffee-supplier`,
    },
  };
}

const WA_ICON = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default async function SupplierPage({ params }: Props) {
  const raw = (await params)["city-green-coffee-supplier"];
  const citySlug = parseParam(raw);
  const data = getCityBySlugOnly(citySlug);
  if (!data) notFound();

  const stateName = getStateNameFromSlug(data.stateSlug) ?? data.state;
  const products = data.popularProductSlugs
    .map((s) => getProductBySlug(s))
    .filter(Boolean) as NonNullable<ReturnType<typeof getProductBySlug>>[];

  const waLink = getWhatsappLink(
    `Hi, I'm looking for Indian green coffee suppliers in ${data.city}. I found your page on bulkgreencoffee.com and would like to enquire.`
  );

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://bulkgreencoffee.com" },
        { "@type": "ListItem", position: 2, name: "India", item: "https://bulkgreencoffee.com/india/available-locations" },
        { "@type": "ListItem", position: 3, name: `${data.city} Suppliers`, item: `https://bulkgreencoffee.com/${citySlug}-green-coffee-supplier` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `https://bulkgreencoffee.com/${citySlug}-green-coffee-supplier`,
      name: `Bulk Green Coffee — Supplier in ${data.city}`,
      description: `Indian green coffee wholesale supplier serving ${data.city}, ${stateName}. Specialty and commercial Arabica from Koraput, Halflong, and South India.`,
      url: `https://bulkgreencoffee.com/${citySlug}-green-coffee-supplier`,
      telephone: "+918527914317",
      areaServed: { "@type": "City", name: data.city },
      geo: { "@type": "GeoCoordinates", latitude: data.coordinates.lat, longitude: data.coordinates.lng },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: data.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ];

  return (
    <div className="bg-white">
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-6 pt-8">
        <nav className="flex items-center gap-2 text-xs text-neutral-400 flex-wrap">
          <Link href="/" className="hover:text-neutral-900 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/india/available-locations" className="hover:text-neutral-900 transition-colors">India</Link>
          <span>/</span>
          <Link href={`/india/${data.stateSlug}`} className="hover:text-neutral-900 transition-colors">{stateName}</Link>
          <span>/</span>
          <span className="text-neutral-700">Green Coffee Suppliers in {data.city}</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-12 pb-16">
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-widest text-teal-700 mb-4">
            Indian Green Coffee Supplier
          </p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-neutral-900 leading-tight mb-6">
            Green Coffee Suppliers in {data.city}
          </h1>
          <p className="text-lg text-neutral-600 leading-relaxed max-w-2xl mb-8">
            {data.cityContext}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-2.5 text-sm font-medium hover:bg-[#1fbb59] transition-colors"
            >
              {WA_ICON}
              WhatsApp — +91 85279 14317
            </a>
            <Link
              href="/products"
              className="inline-block border border-neutral-300 px-6 py-2.5 text-sm font-medium text-neutral-600 hover:border-neutral-900 transition-colors"
            >
              Browse Products
            </Link>
            <Link
              href={`/india/${data.stateSlug}/${data.citySlug}`}
              className="inline-block border border-neutral-300 px-6 py-2.5 text-sm font-medium text-neutral-600 hover:border-neutral-900 transition-colors"
            >
              {data.city} City Page →
            </Link>
          </div>
        </div>
      </section>

      {/* Trust signals */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="bg-teal-800 text-white p-5">
            <div className="text-xl font-bold">{data.transitDays}</div>
            <div className="text-xs text-teal-200 mt-1 uppercase tracking-wide">to {data.city}</div>
          </div>
          <div className="bg-neutral-800 text-white p-5">
            <div className="text-xl font-bold">{data.moq} MOQ</div>
            <div className="text-xs text-neutral-300 mt-1 uppercase tracking-wide">Specialty</div>
          </div>
          <div className="bg-neutral-600 text-white p-5">
            <div className="text-xl font-bold">GST Invoice</div>
            <div className="text-xs text-neutral-300 mt-1 uppercase tracking-wide">Included</div>
          </div>
          <div className="bg-neutral-500 text-white p-5">
            <div className="text-xl font-bold">10+ Origins</div>
            <div className="text-xs text-neutral-200 mt-1 uppercase tracking-wide">Available</div>
          </div>
        </div>
      </section>

      {/* About us as suppliers */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
              About Bulk Green Coffee — {data.city} Supplier
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              Bulk Green Coffee (Gray Cup Enterprises Private Limited) is an India-registered supplier of wholesale green (unroasted) coffee to buyers across India and internationally. We supply directly from tribal cooperatives in Koraput (Odisha), small-holder farms in Halflong and Chirang (Assam), and established estates in South India.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-4">
              For {data.city} buyers, we deliver via road freight in {data.transitDays}. All orders come with a valid GST invoice, origin documentation, and quality specifications (moisture content, screen size, cup score where applicable).
            </p>
            <p className="text-neutral-600 leading-relaxed">
              We supply roasters, café chains, food service distributors, hospitality buyers, and institutional procurement teams in {data.city} and across {stateName}.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-neutral-900 mb-4 uppercase tracking-wide">Industries in {data.city} We Serve</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {data.industries.map((industry) => (
                <span key={industry} className="bg-neutral-100 px-3 py-1.5 text-sm text-neutral-700">
                  {industry}
                </span>
              ))}
            </div>
            <div className="space-y-3 text-sm">
              {[
                { label: "Legal Name", value: "Gray Cup Enterprises Pvt. Ltd." },
                { label: "GST", value: "06AAMCG4985H1Z4" },
                { label: "WhatsApp", value: "+91 85279 14317" },
                { label: "UPI", value: "graycup@kotak" },
              ].map((item) => (
                <div key={item.label} className="flex gap-3">
                  <span className="font-medium text-black w-28 shrink-0">{item.label}</span>
                  <span className="text-neutral-600">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <p className="text-xs font-medium uppercase tracking-widest text-neutral-400 mb-6">
          Popular Products for {data.city} Buyers
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group border border-neutral-200 hover:border-teal-500 transition-colors"
            >
              <div className="aspect-[4/3] relative bg-neutral-50">
                <Image src={product.image} alt={product.name} fill className="object-contain p-4" />
              </div>
              <div className="p-4">
                <p className="font-medium text-black text-sm mb-1 group-hover:text-teal-800 transition-colors">{product.name}</p>
                <p className="text-xs text-neutral-500 mb-2 line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-between">
                  <p className="text-xs font-medium text-teal-700">
                    ₹{product.priceRange.min}{product.priceRange.min !== product.priceRange.max ? `–₹${product.priceRange.max}` : ""}{product.priceRange.unit}
                  </p>
                  <p className="text-xs text-neutral-400">MOQ {product.minimumOrder.quantity} {product.minimumOrder.unit}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-6">
          <Link href="/products" className="text-sm font-medium text-teal-700 hover:text-teal-900">
            View all products →
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <p className="text-xs font-medium uppercase tracking-widest text-neutral-400 mb-8">
          FAQ — Green Coffee Suppliers in {data.city}
        </p>
        <div className="divide-y divide-neutral-100">
          {[
            ...data.faqs,
            {
              question: `What makes Bulk Green Coffee a reliable green coffee supplier in ${data.city}?`,
              answer: `We supply directly from origin — no commodity intermediaries — with full documentation including GST invoice, quality sheet, and origin certificate. We've served buyers across India with MOQ starting at ${data.moq}, making us accessible to both small roasters and large-scale buyers in ${data.city}.`,
            },
          ].map((faq, i) => (
            <div key={i} className="py-6 grid md:grid-cols-[40%_60%] gap-6">
              <h3 className="text-neutral-900 font-medium leading-snug">{faq.question}</h3>
              <p className="text-neutral-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* See also */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <p className="text-xs font-medium uppercase tracking-widest text-neutral-400 mb-4">See Also</p>
        <div className="flex flex-wrap gap-3">
          <Link
            href={`/india/${data.stateSlug}/${data.citySlug}`}
            className="border border-teal-700 text-teal-700 px-4 py-2 text-sm hover:bg-teal-700 hover:text-white transition-colors"
          >
            {data.city} City Page
          </Link>
          <Link
            href={`/india/${data.stateSlug}`}
            className="border border-neutral-300 text-neutral-600 px-4 py-2 text-sm hover:border-neutral-900 hover:text-neutral-900 transition-colors"
          >
            All {stateName} Cities
          </Link>
          <Link
            href="/india/available-locations"
            className="border border-neutral-300 text-neutral-600 px-4 py-2 text-sm hover:border-neutral-900 hover:text-neutral-900 transition-colors"
          >
            All India Locations
          </Link>
          <Link
            href="/products"
            className="border border-neutral-300 text-neutral-600 px-4 py-2 text-sm hover:border-neutral-900 hover:text-neutral-900 transition-colors"
          >
            Browse Products
          </Link>
        </div>
      </section>

      {/* Dark CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="bg-neutral-900 text-white p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Order Indian Green Coffee in {data.city}
            </h2>
            <p className="text-neutral-400 text-sm">
              MOQ {data.moq}. Delivered in {data.transitDays}. GST invoice. WhatsApp for instant response.
            </p>
          </div>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-3 text-sm font-medium hover:bg-[#1fbb59] transition-colors whitespace-nowrap"
          >
            {WA_ICON}
            WhatsApp Us
          </a>
        </div>
      </section>
    </div>
  );
}
