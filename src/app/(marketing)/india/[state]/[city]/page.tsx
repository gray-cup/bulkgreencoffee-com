import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import {
  indiaCities,
  getCityBySlug,
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
      description: `Indian green coffee wholesale supplier serving ${data.city}, ${stateName}.`,
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
    <div className="min-h-screen py-20 px-4 lg:px-6">
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <div className="max-w-5xl mx-auto px-4 lg:px-6">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-muted-foreground mb-8 flex-wrap">
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
          <span>/</span>
          <Link href="/india/available-locations" className="hover:text-black transition-colors">India</Link>
          <span>/</span>
          <Link href={`/india/${state}`} className="hover:text-black transition-colors">{stateName}</Link>
          <span>/</span>
          <span className="text-black">{data.city}</span>
        </nav>

        {/* Header */}
        <div className="mb-10">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-3">
            Indian Green Coffee — {stateName}
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-black mb-3">
            Green Coffee in {data.city}
          </h1>
          <p className="text-md text-muted-foreground max-w-2xl mb-6">
            {data.cityContext}
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={waLink} target="_blank" rel="noopener noreferrer">
              <Button variant="teal" size="sm">WhatsApp — +91 85279 14317</Button>
            </a>
            <Link href="/products">
              <Button variant="lightgraybg" size="sm">Browse Products</Button>
            </Link>
            <Link href={`/india/${state}`}>
              <Button variant="lightgraybg" size="sm">All {stateName} Cities</Button>
            </Link>
          </div>
        </div>

        <hr className="mb-10" />

        {/* Quick stats */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          {[
            { label: `Delivery to ${data.city}`, value: data.transitDays },
            { label: "Minimum Order", value: data.moq },
            { label: "Origins Available", value: "10+" },
          ].map((stat) => (
            <div key={stat.label} className="p-5 border rounded-lg text-center">
              <p className="text-xl font-semibold text-black">{stat.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Products */}
        <div className="mb-12">
          <h2 className="text-lg font-semibold text-black mb-4">
            Popular Products for {data.city} Buyers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="group p-4 border rounded-lg hover:border-teal-400 transition-colors"
              >
                <div className="aspect-square relative rounded-md overflow-hidden bg-neutral-50 mb-3">
                  <Image src={product.image} alt={product.name} fill className="object-contain p-3" />
                </div>
                <p className="font-medium text-black text-sm mb-1 group-hover:text-teal-700 transition-colors">
                  {product.name}
                </p>
                <p className="text-xs text-muted-foreground mb-2 line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-teal-700">
                    ₹{product.priceRange.min}{product.priceRange.min !== product.priceRange.max ? `–₹${product.priceRange.max}` : ""}{product.priceRange.unit}
                  </span>
                  <span className="text-muted-foreground">MOQ {product.minimumOrder.quantity} {product.minimumOrder.unit}</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-4">
            <Link href="/products" className="text-sm text-teal-700 hover:text-teal-900 font-medium">
              View all products →
            </Link>
          </div>
        </div>

        <hr className="mb-12" />

        {/* Industries + supply info */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-lg font-semibold text-black mb-4">Industries Served in {data.city}</h2>
            <div className="flex flex-wrap gap-2">
              {data.industries.map((industry) => (
                <span key={industry} className="px-3 py-1.5 bg-neutral-100 rounded-full text-sm text-neutral-700">
                  {industry}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-black mb-4">Supply Details</h2>
            <div className="space-y-2 text-sm">
              {[
                { label: "Origins", value: "Koraput, Halflong, South India" },
                { label: "Delivery", value: `${data.transitDays} to ${data.city}` },
                { label: "MOQ", value: `${data.moq} (specialty) · 60 kg (commercial)` },
                { label: "Packaging", value: "GrainPro bags · GrainPro jute bags" },
                { label: "Invoice", value: "GST from Gray Cup Enterprises Pvt. Ltd." },
              ].map((row) => (
                <div key={row.label} className="flex gap-3">
                  <span className="text-muted-foreground w-24 shrink-0">{row.label}</span>
                  <span className="text-black">{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Body copy */}
        <div className="mb-12">
          <h2 className="text-lg font-semibold text-black mb-3">
            Indian Green Coffee Supply in {data.city}
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            We supply Indian green (unroasted) Arabica and Robusta coffee to {data.city} buyers across the {data.industries.slice(0, 3).join(", ")} sectors. Our specialty origins — Koraput Arabica (Natural, Honey Sun-Dried, Washed) from Odisha, Halflong SL-9 Arabica from Assam, and South India lots from Chikmagalur, Coorg, Wayanad, and Bababudangiri — are available from {data.moq} minimum order.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Delivery from dispatch to {data.city} takes {data.transitDays} by road freight. All India domestic orders include a valid GST invoice from Gray Cup Enterprises Private Limited (GST: 06AAMCG4985H1Z4). WhatsApp us to discuss your requirement — we respond within a few hours and can arrange sample packs before any bulk order.
          </p>
        </div>

        {/* Nearby areas */}
        <div className="mb-12">
          <h2 className="text-lg font-semibold text-black mb-3">Nearby Areas Covered</h2>
          <p className="text-sm text-muted-foreground mb-3">
            We deliver to {data.city} and surrounding areas including {data.nearbyAreas.join(", ")}.
          </p>
          <div className="flex flex-wrap gap-2">
            {[data.city, ...data.nearbyAreas].map((area) => (
              <span key={area} className="px-3 py-1.5 bg-teal-50 border border-teal-200 rounded-full text-sm text-teal-800">
                {area}
              </span>
            ))}
          </div>
        </div>

        <hr className="mb-12" />

        {/* FAQ */}
        <div className="mb-12">
          <h2 className="text-lg font-semibold text-black mb-6">
            FAQs — Green Coffee in {data.city}
          </h2>
          <div className="space-y-4">
            {data.faqs.map((faq, i) => (
              <div key={i} className="p-5 border rounded-lg">
                <p className="font-medium text-black mb-2">{faq.question}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related cities */}
        {relatedCities.length > 0 && (
          <div className="mb-12">
            <h2 className="text-lg font-semibold text-black mb-4">Other Cities in {stateName}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {relatedCities.map((related) => (
                <Link
                  key={related.city}
                  href={`/india/${related.stateSlug}/${related.citySlug}`}
                  className="flex items-center justify-between p-4 border rounded-lg hover:border-teal-400 transition-colors group"
                >
                  <div>
                    <p className="font-medium text-black group-hover:text-teal-700 transition-colors">{related.city}</p>
                    <p className="text-xs text-muted-foreground">{related.transitDays} delivery</p>
                  </div>
                  <span className="text-muted-foreground group-hover:text-teal-700 transition-colors">→</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="p-8 rounded-xl border border-teal-200 bg-teal-50">
          <h2 className="text-lg font-semibold text-black mb-1">
            Source Indian Green Coffee in {data.city}
          </h2>
          <p className="text-sm text-muted-foreground mb-4">
            Minimum {data.moq}. Delivered in {data.transitDays}. GST invoice included.
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
