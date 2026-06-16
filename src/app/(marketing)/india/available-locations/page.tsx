import Link from "next/link";
import type { Metadata } from "next";
import { INDIA_STATES, getCitiesByState, indiaCities } from "@/data/india-cities";
import { getWhatsappLink } from "@/data/destinations";

export const metadata: Metadata = {
  title: "Buy Indian Green Coffee in India | All States & Cities | Bulk Green Coffee",
  description: "Wholesale Indian green coffee delivered across India. Specialty Arabica from Koraput, Halflong & South India. Available in Maharashtra, Karnataka, Tamil Nadu, Delhi, and more. MOQ 10 kg.",
  alternates: { canonical: "/india/available-locations" },
  openGraph: {
    title: "Indian Green Coffee Supplier — All India Locations | Bulk Green Coffee",
    description: "Bulk green coffee delivery across India. Tribal Arabica, South India estates, and North East origins. GST invoice included.",
    url: "https://bulkgreencoffee.com/india/available-locations",
  },
};

const WA_ICON = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function AvailableLocationsPage() {
  const waLink = getWhatsappLink(
    "Hi, I found your available locations page on bulkgreencoffee.com and would like to enquire about sourcing Indian green coffee."
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://bulkgreencoffee.com" },
      { "@type": "ListItem", position: 2, name: "India Locations", item: "https://bulkgreencoffee.com/india/available-locations" },
    ],
  };

  return (
    <div className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-6 pt-8">
        <nav className="flex items-center gap-2 text-xs text-neutral-400">
          <Link href="/" className="hover:text-neutral-900 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-neutral-700">India Locations</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-12 pb-16">
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-widest text-teal-700 mb-4">
            All India Delivery
          </p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-neutral-900 leading-none mb-6">
            Indian Green Coffee — Delivered Across India
          </h1>
          <p className="text-lg text-neutral-600 leading-relaxed max-w-2xl mb-8">
            We supply wholesale Indian green coffee to {indiaCities.length}+ cities across {INDIA_STATES.length} states. Specialty Arabica from tribal cooperatives in Koraput (Odisha) and Halflong (Assam), plus South India estates from Chikmagalur, Coorg, Wayanad, and Bababudangiri.
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
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="bg-teal-800 text-white p-5">
            <div className="text-2xl font-bold">{indiaCities.length}+ Cities</div>
            <div className="text-xs text-teal-200 mt-1 uppercase tracking-wide">Served</div>
          </div>
          <div className="bg-neutral-800 text-white p-5">
            <div className="text-2xl font-bold">{INDIA_STATES.length} States</div>
            <div className="text-xs text-neutral-300 mt-1 uppercase tracking-wide">Coverage</div>
          </div>
          <div className="bg-neutral-600 text-white p-5">
            <div className="text-2xl font-bold">10 kg MOQ</div>
            <div className="text-xs text-neutral-300 mt-1 uppercase tracking-wide">Specialty</div>
          </div>
          <div className="bg-neutral-500 text-white p-5">
            <div className="text-2xl font-bold">GST Invoice</div>
            <div className="text-xs text-neutral-200 mt-1 uppercase tracking-wide">Included</div>
          </div>
        </div>
      </section>

      {/* States + cities */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <p className="text-xs font-medium uppercase tracking-widest text-neutral-400 mb-8">
          Browse by State
        </p>
        <div className="space-y-10">
          {INDIA_STATES.map((s) => {
            const cities = getCitiesByState(s.slug);
            return (
              <div key={s.slug}>
                <div className="flex items-baseline justify-between mb-4">
                  <Link
                    href={`/india/${s.slug}`}
                    className="text-xl font-semibold text-neutral-900 hover:text-teal-700 transition-colors"
                  >
                    {s.name}
                  </Link>
                  <Link
                    href={`/india/${s.slug}`}
                    className="text-xs text-teal-700 hover:text-teal-900 transition-colors"
                  >
                    View all {s.name} cities →
                  </Link>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {cities.map((city) => (
                    <Link
                      key={city.citySlug}
                      href={`/india/${city.stateSlug}/${city.citySlug}`}
                      className="group flex items-center justify-between bg-neutral-50 hover:bg-teal-800 transition-colors px-4 py-3"
                    >
                      <span className="text-sm font-medium text-neutral-800 group-hover:text-white transition-colors">
                        {city.city}
                      </span>
                      <span className="text-xs text-neutral-400 group-hover:text-teal-200 transition-colors ml-2">
                        {city.transitDays.split("–")[0]}d
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* What we supply */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <p className="text-xs font-medium uppercase tracking-widest text-neutral-400 mb-6">
          What We Supply
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Specialty Arabica",
              desc: "Koraput Natural, Washed & HSD · Halflong SL-9 · Chikmagalur S.795 · Coorg Catuai · Wayanad Organic · Bababudangiri. MOQ 10 kg.",
            },
            {
              title: "Commercial Arabica",
              desc: "Koraput AA, AAA, and Peaberry grades for blending and institutional supply. Consistent quality at scale. MOQ 60 kg.",
            },
            {
              title: "Robusta",
              desc: "Chirang (Assam) and Tirap (Arunachal) CxR Robusta Naturals. Strong espresso base with low acidity. MOQ 30 kg.",
            },
          ].map((item) => (
            <div key={item.title} className="bg-neutral-50 p-6">
              <p className="text-xs font-medium uppercase tracking-widest text-neutral-400 mb-3">{item.title}</p>
              <p className="text-neutral-700 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <p className="text-xs font-medium uppercase tracking-widest text-neutral-400 mb-8">
          How to Order
        </p>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { step: "01", title: "WhatsApp or Email", desc: "Message us with your city, preferred origin, grade, and quantity." },
            { step: "02", title: "Receive Sample", desc: "We send 200–500 g sample packs before any bulk commitment." },
            { step: "03", title: "Confirm Order", desc: "Confirm volume, receive pro-forma invoice with GST breakup." },
            { step: "04", title: "Delivery", desc: "Packed in GrainPro bags and dispatched via road freight to your city." },
          ].map((item) => (
            <div key={item.step} className="border-t-2 border-teal-800 pt-4">
              <p className="text-xs text-teal-700 font-medium mb-2">{item.step}</p>
              <p className="text-sm font-semibold text-neutral-900 mb-2">{item.title}</p>
              <p className="text-xs text-neutral-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* International */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="bg-neutral-50 p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-neutral-400 mb-2">International Buyers</p>
            <p className="text-lg font-semibold text-neutral-900 mb-1">We also export to 15+ countries</p>
            <p className="text-sm text-neutral-600">Germany, Norway, Netherlands, UAE, UK, Saudi Arabia, and more. See country pages for shipping and import details.</p>
          </div>
          <Link
            href="/products"
            className="shrink-0 inline-block border border-neutral-900 px-6 py-2.5 text-sm font-medium text-neutral-900 hover:bg-neutral-900 hover:text-white transition-colors whitespace-nowrap"
          >
            Browse Products →
          </Link>
        </div>
      </section>

      {/* Dark CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="bg-neutral-900 text-white p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Ready to source Indian green coffee?</h2>
            <p className="text-neutral-400 text-sm">
              Tell us your city, volume, and preferred origin. We respond within a few hours.
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
