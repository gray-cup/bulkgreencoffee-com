import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  indiaCities,
  getCityBySlug,
  getCitiesByState,
  getRelatedCities,
  getStateNameFromSlug,
} from "@/data/india-cities";
import { getProductBySlug } from "@/data/products";
import { getWhatsappLink } from "@/data/destinations";

type Props = { params: Promise<{ state: string; city: string }> };

export function generateStaticParams() {
  return indiaCities.map((c) => ({ state: c.stateSlug, city: c.citySlug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { state, city } = await params;
  const data = getCityBySlug(state, city);
  if (!data) return { title: "Not Found" };
  const stateName = getStateNameFromSlug(state) ?? data.state;
  return {
    title: `Buy Indian Green Coffee in ${data.city}, ${stateName} | Wholesale Arabica Supplier`,
    description: `Source Indian green coffee in ${data.city}, ${stateName}. Specialty Arabica from Koraput, Halflong & South India. MOQ ${data.moq}. Delivered in ${data.transitDays}. WhatsApp: +91 85279 14317.`,
    alternates: { canonical: `/india/${state}/${city}` },
    openGraph: {
      title: `Indian Green Coffee Supplier in ${data.city} | Bulk Green Coffee`,
      description: `Wholesale Indian Arabica for ${data.city} roasters and buyers. ${data.cityContext}`,
      url: `https://bulkgreencoffee.com/india/${state}/${city}`,
    },
  };
}

const WA_ICON = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default async function CityPage({ params }: Props) {
  const { state, city } = await params;
  const data = getCityBySlug(state, city);
  if (!data) notFound();

  const stateName = getStateNameFromSlug(state) ?? data.state;
  const relatedCities = getRelatedCities(city, state);
  const products = data.popularProductSlugs
    .map((s) => getProductBySlug(s))
    .filter(Boolean) as NonNullable<ReturnType<typeof getProductBySlug>>[];

  const waLink = getWhatsappLink(
    `Hi, I found your page for ${data.city}, ${stateName} on bulkgreencoffee.com and I would like to enquire about sourcing Indian green coffee.`
  );

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://bulkgreencoffee.com" },
        { "@type": "ListItem", position: 2, name: "India", item: "https://bulkgreencoffee.com/india/available-locations" },
        { "@type": "ListItem", position: 3, name: stateName, item: `https://bulkgreencoffee.com/india/${state}` },
        { "@type": "ListItem", position: 4, name: data.city, item: `https://bulkgreencoffee.com/india/${state}/${city}` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `https://bulkgreencoffee.com/india/${state}/${city}`,
      name: `Bulk Green Coffee — ${data.city}`,
      description: `Indian green coffee wholesale supplier serving ${data.city}, ${stateName}. Specialty Arabica from Koraput, Halflong, and South India.`,
      url: `https://bulkgreencoffee.com/india/${state}/${city}`,
      telephone: "+918527914317",
      areaServed: [data.city, ...data.nearbyAreas].map((area) => ({ "@type": "City", name: area })),
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
          <Link href={`/india/${state}`} className="hover:text-neutral-900 transition-colors">{stateName}</Link>
          <span>/</span>
          <span className="text-neutral-700">{data.city}</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-12 pb-16">
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-widest text-teal-700 mb-4">
            Indian Green Coffee — {stateName}
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-neutral-900 leading-none mb-6">
            {data.city}
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
              href={`/india/${state}`}
              className="inline-block border border-neutral-300 px-6 py-2.5 text-sm font-medium text-neutral-600 hover:border-neutral-900 transition-colors"
            >
              All {stateName} Cities
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-teal-800 text-white p-5">
            <div className="text-2xl font-bold">{data.transitDays}</div>
            <div className="text-xs text-teal-200 mt-1 uppercase tracking-wide">Delivery Time</div>
          </div>
          <div className="bg-neutral-800 text-white p-5">
            <div className="text-2xl font-bold">{data.moq}</div>
            <div className="text-xs text-neutral-300 mt-1 uppercase tracking-wide">Min. Order</div>
          </div>
          <div className="bg-neutral-600 text-white p-5">
            <div className="text-2xl font-bold">10+ Origins</div>
            <div className="text-xs text-neutral-300 mt-1 uppercase tracking-wide">Available</div>
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
          <Link href="/products" className="text-sm font-medium text-teal-700 hover:text-teal-900 transition-colors">
            View all products →
          </Link>
        </div>
      </section>

      {/* Who buys + industries */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-neutral-400 mb-4">
              Green Coffee in {data.city}
            </p>
            <p className="text-neutral-600 leading-relaxed">
              {data.city} buyers source Indian green coffee for roasting, blending, and institutional supply. Our direct-from-origin lots from Koraput (Odisha), Halflong (Assam), and South India estates arrive in {data.city} in {data.transitDays} with GST invoice and quality documentation. Commercial AA/AAA grade is available for large-volume buyers; specialty Natural, Washed, and HSD lots are available for roasters from {data.moq}.
            </p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-neutral-400 mb-4">
              Industries Served in {data.city}
            </p>
            <div className="flex flex-wrap gap-2">
              {data.industries.map((industry) => (
                <span key={industry} className="bg-neutral-100 px-3 py-1.5 text-sm text-neutral-700">
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Body copy */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
            Indian Green Coffee Supply in {data.city}
          </h2>
          <p className="text-neutral-600 leading-relaxed mb-4">
            We supply Indian green (unroasted) Arabica and Robusta coffee to {data.city} buyers across the {data.industries.slice(0, 3).join(", ")} sectors. Our primary specialty origins — Koraput Arabica (Natural, Honey Sun-Dried, Washed) from Odisha, Halflong SL-9 Arabica from Assam, and South India lots from Chikmagalur, Coorg, Wayanad, and Bababudangiri — are available from {data.moq} minimum order.
          </p>
          <p className="text-neutral-600 leading-relaxed mb-4">
            Commercial-grade AA and AAA Arabica from Koraput is available for bulk buyers, café chains, and institutional suppliers in {data.city} who need consistent quality at scale. Both washed and natural process options are available depending on your cup profile requirements. All commercial lots are packed in 60 kg GrainPro-lined jute bags.
          </p>
          <p className="text-neutral-600 leading-relaxed">
            Delivery from dispatch to {data.city} takes {data.transitDays} by road freight. All India domestic orders include a valid GST invoice from Gray Cup Enterprises Private Limited (GST: 06AAMCG4985H1Z4). Contact us on WhatsApp to discuss your requirement — we respond within a few hours and can arrange sample packs before any bulk order.
          </p>
        </div>
      </section>

      {/* Supply chain info */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="bg-neutral-50 p-8 grid md:grid-cols-3 gap-8">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-neutral-400 mb-2">Coffee Sources</p>
            <p className="text-neutral-900 font-medium text-sm">Koraput (Odisha) · Halflong (Assam) · Chikmagalur, Coorg, Wayanad (South India)</p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-neutral-400 mb-2">Minimum Order</p>
            <p className="text-neutral-900 font-medium">{data.moq} (specialty) · 60 kg (commercial)</p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-neutral-400 mb-2">Packaging</p>
            <p className="text-neutral-900 font-medium text-sm">30 kg GrainPro bags · 60 kg GrainPro jute bags · Bulk containers</p>
          </div>
        </div>
      </section>

      {/* Nearby areas */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <p className="text-xs font-medium uppercase tracking-widest text-neutral-400 mb-3">
          Nearby Areas Covered
        </p>
        <p className="text-neutral-600 leading-relaxed mb-4 max-w-2xl text-sm">
          We deliver to {data.city} and surrounding areas. Buyers in {data.nearbyAreas.join(", ")} receive the same products, pricing, and delivery schedule.
        </p>
        <div className="flex flex-wrap gap-2">
          {[data.city, ...data.nearbyAreas].map((area) => (
            <span key={area} className="bg-teal-800 text-white px-4 py-2 text-sm font-medium">
              {area}
            </span>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <p className="text-xs font-medium uppercase tracking-widest text-neutral-400 mb-8">
          Frequently Asked Questions
        </p>
        <div className="divide-y divide-neutral-100">
          {data.faqs.map((faq, i) => (
            <div key={i} className="py-6 grid md:grid-cols-[40%_60%] gap-6">
              <h3 className="text-neutral-900 font-medium leading-snug">{faq.question}</h3>
              <p className="text-neutral-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Related cities */}
      {relatedCities.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 pb-16">
          <p className="text-xs font-medium uppercase tracking-widest text-neutral-400 mb-6">
            Other Cities in {stateName}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {relatedCities.map((related) => (
              <Link
                key={related.city}
                href={`/india/${related.stateSlug}/${related.citySlug}`}
                className="group flex items-center justify-between bg-neutral-50 px-6 py-4 hover:bg-neutral-900 transition-colors"
              >
                <div>
                  <div className="font-medium text-neutral-900 group-hover:text-white">{related.city}</div>
                  <div className="text-xs text-neutral-400 mt-0.5">{related.transitDays}</div>
                </div>
                <span className="text-neutral-400 group-hover:text-white text-sm">→</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Dark CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="bg-neutral-900 text-white p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Source Indian Green Coffee in {data.city}
            </h2>
            <p className="text-neutral-400 text-sm">
              Minimum {data.moq}. Delivery in {data.transitDays}. GST invoice included.
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
