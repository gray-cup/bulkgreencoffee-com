import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { INDIA_STATES, getCitiesByState, indiaCities } from "@/data/india-locations";
import { getWhatsappLink } from "@/data/destinations";

export const metadata: Metadata = {
  title: "Buy Indian Green Coffee in India | All States & Cities | Bulk Green Coffee",
  description:
    "Wholesale Indian green coffee delivered across India. Commercial AA/AAA from ₹800/kg, specialty from ₹1,100/kg. Maharashtra, Karnataka, Tamil Nadu, Delhi and more. MOQ 10 kg.",
  alternates: { canonical: "/india/available-locations" },
  openGraph: {
    title: "Indian Green Coffee Supplier — All India Locations | Bulk Green Coffee",
    description:
      "Bulk green coffee delivery across India. Tribal Arabica, South India estates, and North East origins. GST invoice included.",
    url: "https://bulkgreencoffee.com/india/available-locations",
  },
};

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
    <div className="min-h-screen py-20 px-4 lg:px-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="max-w-5xl mx-auto px-4 lg:px-6">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-muted-foreground mb-8">
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
          <span>/</span>
          <span className="text-black">India Locations</span>
        </nav>

        {/* Header */}
        <div className="mb-10">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-3">
            All India Delivery
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-black mb-3">
            Indian Green Coffee — Delivered Across India
          </h1>
          <p className="text-md text-muted-foreground max-w-2xl mb-6">
            We supply wholesale Indian green coffee to {indiaCities.length}+ cities across {INDIA_STATES.length} states. Specialty Arabica from tribal cooperatives in Koraput (Odisha) and Halflong (Assam), plus South India estates from Chikmagalur, Coorg, Wayanad, and Bababudangiri.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={waLink} target="_blank" rel="noopener noreferrer">
              <Button variant="teal" size="sm">WhatsApp — +91 85279 14317</Button>
            </a>
            <Link href="/products">
              <Button variant="lightgraybg" size="sm">Browse Products</Button>
            </Link>
          </div>
        </div>

        <hr className="mb-10" />

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {[
            { value: `${indiaCities.length}+ Cities`, label: "Served" },
            { value: `${INDIA_STATES.length} States`, label: "Coverage" },
            { value: "10 kg MOQ", label: "Specialty Lots" },
            { value: "GST Invoice", label: "Included" },
          ].map((s) => (
            <div key={s.label} className="p-5 border rounded-lg text-center">
              <p className="text-xl font-semibold text-black">{s.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* States + cities */}
        <div className="mb-12">
          <h2 className="text-lg font-semibold text-black mb-6">Browse by State</h2>
          <div className="space-y-8">
            {INDIA_STATES.map((s) => {
              const cities = getCitiesByState(s.slug);
              return (
                <div key={s.slug}>
                  <div className="flex items-center justify-between mb-3">
                    <Link
                      href={`/india/${s.slug}`}
                      className="text-base font-semibold text-black hover:text-teal-700 transition-colors"
                    >
                      {s.name}
                    </Link>
                    <Link
                      href={`/india/${s.slug}`}
                      className="text-xs text-teal-700 hover:text-teal-900 transition-colors"
                    >
                      View all →
                    </Link>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                    {cities.map((city) => (
                      <Link
                        key={city.citySlug}
                        href={`/india/${city.stateSlug}/${city.citySlug}`}
                        className="flex items-center justify-between px-4 py-3 border rounded-lg hover:border-teal-400 hover:text-teal-700 transition-colors text-sm text-black"
                      >
                        <span>{city.city}</span>
                        <span className="text-xs text-muted-foreground ml-2">{city.transitDays.split("–")[0]}d</span>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <hr className="mb-12" />

        {/* What we supply */}
        <div className="mb-12">
          <h2 className="text-lg font-semibold text-black mb-4">What We Supply</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
                desc: "Chirang (Assam) and Tirap (Arunachal) CxR Robusta Naturals. Strong espresso base. MOQ 30 kg.",
              },
            ].map((item) => (
              <div key={item.title} className="p-5 border rounded-lg">
                <p className="font-medium text-black mb-2 text-sm">{item.title}</p>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How to order */}
        <div className="mb-12">
          <h2 className="text-lg font-semibold text-black mb-4">How to Order</h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "WhatsApp or Email Us", desc: "Message us with your city, preferred origin, grade, and quantity. We respond within a few hours." },
              { step: "2", title: "Receive Sample", desc: "We send 200–500 g sample packs before any bulk commitment so you can cup before you commit." },
              { step: "3", title: "Confirm Order", desc: "Confirm volume, receive pro-forma invoice with GST breakup from Gray Cup Enterprises Pvt. Ltd." },
              { step: "4", title: "Delivery to Your City", desc: "Packed in GrainPro bags and dispatched via road freight to your address across India." },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="w-7 h-7 rounded-full bg-teal-800 text-white text-xs font-semibold flex items-center justify-center shrink-0 mt-0.5">
                  {item.step}
                </div>
                <div>
                  <p className="font-medium text-black text-sm">{item.title}</p>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <hr className="mb-12" />

        {/* International note */}
        <div className="p-5 border rounded-lg mb-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="font-medium text-black mb-1">International Buyers</p>
            <p className="text-sm text-muted-foreground">
              We also export to Germany, Norway, Netherlands, UAE, UK, Saudi Arabia, and 10+ other countries.
            </p>
          </div>
          <Link href="/products" className="shrink-0">
            <Button variant="lightgraybg" size="sm">Browse Products →</Button>
          </Link>
        </div>

        {/* CTA */}
        <div className="p-8 rounded-xl border border-teal-200 bg-teal-50">
          <h2 className="text-lg font-semibold text-black mb-1">Ready to source Indian green coffee?</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Tell us your city, volume, and preferred origin. We respond within a few hours.
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
