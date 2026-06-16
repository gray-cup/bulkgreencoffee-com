import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://bulkgreencoffee.com" },
      { "@type": "ListItem", position: 2, name: "India", item: "https://bulkgreencoffee.com/india/available-locations" },
      { "@type": "ListItem", position: 3, name: stateName, item: `https://bulkgreencoffee.com/india/${state}` },
    ],
  };

  return (
    <div className="min-h-screen py-20 px-4 lg:px-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="max-w-5xl mx-auto px-4 lg:px-6">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-muted-foreground mb-8 flex-wrap">
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
          <span>/</span>
          <Link href="/india/available-locations" className="hover:text-black transition-colors">India</Link>
          <span>/</span>
          <span className="text-black">{stateName}</span>
        </nav>

        {/* Header */}
        <div className="mb-10">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-3">
            Indian Green Coffee — India
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-black mb-3">
            Green Coffee in {stateName}
          </h1>
          <p className="text-md text-muted-foreground max-w-2xl mb-6">
            We supply wholesale Indian green coffee to roasters, distributors, and institutional buyers across {stateName}. Specialty Arabica from Koraput, Halflong, and South India — delivered with GST invoice and full origin documentation.
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

        {/* Quick stats */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          {[
            { label: `Cities in ${stateName}`, value: `${cities.length} Cities` },
            { label: "Specialty MOQ", value: "10 kg" },
            { label: "Invoicing", value: "GST Included" },
          ].map((stat) => (
            <div key={stat.label} className="p-5 border rounded-lg text-center">
              <p className="text-xl font-semibold text-black">{stat.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Cities grid */}
        <div className="mb-12">
          <h2 className="text-lg font-semibold text-black mb-4">Cities in {stateName}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {cities.map((city) => (
              <Link
                key={city.citySlug}
                href={`/india/${city.stateSlug}/${city.citySlug}`}
                className="flex items-start justify-between p-5 border rounded-lg hover:border-teal-400 transition-colors group"
              >
                <div>
                  <p className="font-medium text-black group-hover:text-teal-700 transition-colors">
                    {city.city}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {city.transitDays} delivery · MOQ {city.moq}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1.5 line-clamp-2 max-w-xs">
                    {city.cityContext}
                  </p>
                </div>
                <span className="text-muted-foreground group-hover:text-teal-700 transition-colors ml-4 mt-0.5">→</span>
              </Link>
            ))}
          </div>
        </div>

        <hr className="mb-12" />

        {/* Supply info */}
        <div className="mb-12">
          <h2 className="text-lg font-semibold text-black mb-4">What We Supply</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                title: "Coffee Sources",
                body: "Koraput (Odisha) · Halflong & Chirang (Assam) · Chikmagalur, Coorg, Wayanad, Bababudangiri (South India)",
              },
              {
                title: "Available Grades",
                body: "Specialty: Natural, Washed, HSD · Commercial: AAA, AA, Peaberry · Robusta: CxR",
              },
              {
                title: "Packaging",
                body: "10–30 kg GrainPro bags (specialty) · 60 kg GrainPro jute bags (commercial)",
              },
            ].map((item) => (
              <div key={item.title} className="p-5 border rounded-lg">
                <p className="font-medium text-black mb-2 text-sm">{item.title}</p>
                <p className="text-sm text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 rounded-xl border border-teal-200 bg-teal-50">
          <h2 className="text-lg font-semibold text-black mb-1">
            Source Indian Green Coffee in {stateName}
          </h2>
          <p className="text-sm text-muted-foreground mb-4">
            Minimum 10 kg. GST invoice included. Direct from tribal cooperatives and estates.
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
