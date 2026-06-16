import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import {
  INDIA_STATES,
  getCitiesByState,
  getStateNameFromSlug,
} from "@/data/india-cities";
import { getWhatsappLink } from "@/data/destinations";

type Props = { params: Promise<{ state: string }> };

export function generateStaticParams() {
  return INDIA_STATES.map((s) => ({ state: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { state } = await params;
  const stateName = getStateNameFromSlug(state);
  if (!stateName) return { title: "Not Found" };
  return {
    title: `Buy Indian Green Coffee in ${stateName} | Wholesale Arabica Supplier`,
    description: `Source Indian green coffee wholesale in ${stateName}. Specialty Arabica from Koraput, Halflong & South India. MOQ 10 kg. GST invoice. WhatsApp: +91 85279 14317.`,
    alternates: { canonical: `/india/${state}` },
    openGraph: {
      title: `Indian Green Coffee Supplier in ${stateName} | Bulk Green Coffee`,
      description: `Wholesale Indian Arabica and Robusta for ${stateName} roasters, cafés, and distributors.`,
      url: `https://bulkgreencoffee.com/india/${state}`,
    },
  };
}

export default async function StatePage({ params }: Props) {
  const { state } = await params;
  const stateName = getStateNameFromSlug(state);
  if (!stateName) notFound();

  const cities = getCitiesByState(state);

  const waLink = getWhatsappLink(
    `Hi, I found your ${stateName} page on bulkgreencoffee.com and would like to enquire about sourcing Indian green coffee.`
  );

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://bulkgreencoffee.com" },
        { "@type": "ListItem", position: 2, name: "India", item: "https://bulkgreencoffee.com/india/available-locations" },
        { "@type": "ListItem", position: 3, name: stateName, item: `https://bulkgreencoffee.com/india/${state}` },
      ],
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
          <span className="text-neutral-700">{stateName}</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-12 pb-16">
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-widest text-teal-700 mb-4">
            Indian Green Coffee — India
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-neutral-900 leading-none mb-6">
            {stateName}
          </h1>
          <p className="text-lg text-neutral-600 leading-relaxed max-w-2xl mb-8">
            We supply wholesale Indian green coffee to roasters, distributors, and institutional buyers across {stateName}. Specialty Arabica from Koraput, Halflong, and South India — delivered with GST invoice and full origin documentation.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-2.5 text-sm font-medium hover:bg-[#1fbb59] transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp — +91 85279 14317
            </a>
            <Link
              href="/products"
              className="inline-block border border-neutral-300 px-6 py-2.5 text-sm font-medium text-neutral-600 hover:border-neutral-900 transition-colors"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-teal-800 text-white p-5">
            <div className="text-2xl font-bold">{cities.length} Cities</div>
            <div className="text-xs text-teal-200 mt-1 uppercase tracking-wide">in {stateName}</div>
          </div>
          <div className="bg-neutral-800 text-white p-5">
            <div className="text-2xl font-bold">10 kg MOQ</div>
            <div className="text-xs text-neutral-300 mt-1 uppercase tracking-wide">Specialty Lots</div>
          </div>
          <div className="bg-neutral-600 text-white p-5">
            <div className="text-2xl font-bold">GST Invoice</div>
            <div className="text-xs text-neutral-300 mt-1 uppercase tracking-wide">Included</div>
          </div>
        </div>
      </section>

      {/* Cities grid */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <p className="text-xs font-medium uppercase tracking-widest text-neutral-400 mb-6">
          Cities in {stateName}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cities.map((city) => (
            <Link
              key={city.citySlug}
              href={`/india/${city.stateSlug}/${city.citySlug}`}
              className="group flex items-start justify-between bg-neutral-50 hover:bg-neutral-900 transition-colors p-6"
            >
              <div>
                <div className="text-lg font-semibold text-neutral-900 group-hover:text-white transition-colors">
                  {city.city}
                </div>
                <div className="text-xs text-neutral-400 group-hover:text-neutral-300 mt-1 transition-colors">
                  {city.transitDays} delivery · MOQ {city.moq}
                </div>
                <div className="text-xs text-neutral-500 group-hover:text-neutral-400 mt-2 transition-colors line-clamp-2 max-w-xs">
                  {city.cityContext}
                </div>
              </div>
              <span className="text-neutral-300 group-hover:text-white text-xl mt-1 ml-4 shrink-0 transition-colors">→</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Supply info */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-neutral-50 p-6">
            <p className="text-xs font-medium uppercase tracking-widest text-neutral-400 mb-3">Origins</p>
            <p className="text-neutral-900 font-medium text-sm leading-relaxed">Koraput (Odisha) · Halflong & Chirang (Assam) · Chikmagalur, Coorg, Wayanad, Bababudangiri (South India)</p>
          </div>
          <div className="bg-neutral-50 p-6">
            <p className="text-xs font-medium uppercase tracking-widest text-neutral-400 mb-3">Available Grades</p>
            <p className="text-neutral-900 font-medium text-sm leading-relaxed">Specialty: Natural, Washed, HSD · Commercial: AAA, AA, Peaberry · Robusta: CxR</p>
          </div>
          <div className="bg-neutral-50 p-6">
            <p className="text-xs font-medium uppercase tracking-widest text-neutral-400 mb-3">Packaging</p>
            <p className="text-neutral-900 font-medium text-sm leading-relaxed">10–30 kg GrainPro bags (specialty) · 60 kg GrainPro jute bags (commercial)</p>
          </div>
        </div>
      </section>

      {/* Dark CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="bg-neutral-900 text-white p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Source Indian Green Coffee in {stateName}
            </h2>
            <p className="text-neutral-400 text-sm">
              Minimum 10 kg. GST invoice included. Direct from tribal cooperatives and estates.
            </p>
          </div>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-3 text-sm font-medium hover:bg-[#1fbb59] transition-colors whitespace-nowrap"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp Us
          </a>
        </div>
      </section>
    </div>
  );
}
