import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { LocationProductCard } from "@/components/products";
import { TOP_CITIES, getCityBySlugOnly, getStateNameFromSlug } from "@/data/india-cities";
import { getProductBySlug } from "@/data/products";
import { getWhatsappLink } from "@/data/destinations";

type Props = { params: Promise<{ city: string }> };

export function generateStaticParams() {
  return TOP_CITIES.map((city) => ({ city }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const citySlug = (await params).city;
  const data = getCityBySlugOnly(citySlug);
  if (!data) return { title: "Not Found" };
  const stateName = getStateNameFromSlug(data.stateSlug) ?? data.state;
  return {
    title: `Indian Green Coffee Suppliers in ${data.city} | Wholesale Arabica | Bulk Green Coffee`,
    description: `Find Indian green coffee suppliers in ${data.city}. Commercial AA/AAA from ₹800/kg, specialty from ₹1,100/kg. MOQ ${data.moq}. Delivered in ${data.transitDays}. GST invoice. WhatsApp: +91 85279 14317.`,
    alternates: { canonical: `/${citySlug}-green-coffee-supplier/` },
    openGraph: {
      title: `Green Coffee Suppliers in ${data.city} | Indian Arabica Wholesale`,
      description: `Wholesale Indian Arabica & Robusta for ${data.city}. ${data.cityContext}`,
      url: `https://bulkgreencoffee.com/${citySlug}-green-coffee-supplier`,
    },
  };
}

export default async function SupplierPage({ params }: Props) {
  const citySlug = (await params).city;
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
      description: `Indian green coffee wholesale supplier serving ${data.city}, ${stateName}.`,
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
          <Link href={`/india/${data.stateSlug}`} className="hover:text-black transition-colors">{stateName}</Link>
          <span>/</span>
          <span className="text-black">Green Coffee Suppliers in {data.city}</span>
        </nav>

        {/* Header */}
        <div className="mb-10">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-3">
            Indian Green Coffee Supplier
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-black mb-3">
            Green Coffee Suppliers in {data.city}
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
            <Link href={`/india/${data.stateSlug}/${data.citySlug}`}>
              <Button variant="lightgraybg" size="sm">{data.city} City Page →</Button>
            </Link>
          </div>
        </div>

        <hr className="mb-10" />

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {[
            { value: data.transitDays, label: `to ${data.city}` },
            { value: data.moq + " MOQ", label: "Specialty" },
            { value: "GST Invoice", label: "Included" },
            { value: "10+ Origins", label: "Available" },
          ].map((s) => (
            <div key={s.label} className="p-5 border rounded-lg text-center">
              <p className="text-lg font-semibold text-black">{s.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* About us */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-lg font-semibold text-black mb-3">
              About Bulk Green Coffee
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Bulk Green Coffee (Gray Cup Enterprises Private Limited) is an India-registered supplier of wholesale green (unroasted) coffee. We source directly from tribal cooperatives in Koraput (Odisha), small-holder farms in Halflong and Chirang (Assam), and established estates in South India.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              For {data.city} buyers, we deliver via road freight in {data.transitDays}. All orders include a valid GST invoice, origin documentation, and quality specification sheet.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-black mb-3">Industries in {data.city} We Serve</h2>
            <div className="flex flex-wrap gap-2 mb-5">
              {data.industries.map((industry) => (
                <span key={industry} className="px-3 py-1.5 bg-neutral-100 rounded-full text-sm text-neutral-700">
                  {industry}
                </span>
              ))}
            </div>
            <div className="space-y-2 text-sm">
              {[
                { label: "Legal Name", value: "Gray Cup Enterprises Pvt. Ltd." },
                { label: "GST", value: "06AAMCG4985H1Z4" },
                { label: "WhatsApp", value: "+91 85279 14317" },
                { label: "UPI", value: "graycup@kotak" },
              ].map((item) => (
                <div key={item.label} className="flex gap-3">
                  <span className="text-muted-foreground w-24 shrink-0">{item.label}</span>
                  <span className="text-black">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <hr className="mb-12" />

        {/* Products */}
        <div className="mb-12">
          <h2 className="text-lg font-semibold text-black mb-4">
            Popular Products for {data.city} Buyers
          </h2>
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

        {/* FAQ */}
        <div className="mb-12">
          <h2 className="text-lg font-semibold text-black mb-6">
            FAQ — Green Coffee Suppliers in {data.city}
          </h2>
          <div className="space-y-4">
            {[
              ...data.faqs,
              {
                question: `What makes Bulk Green Coffee a reliable green coffee supplier in ${data.city}?`,
                answer: `We supply directly from origin — no commodity intermediaries — with full documentation including GST invoice, quality sheet, and origin certificate. MOQ starts at ${data.moq}, making us accessible to both small roasters and large-scale buyers in ${data.city}.`,
              },
            ].map((faq, i) => (
              <div key={i} className="p-5 border rounded-lg">
                <p className="font-medium text-black mb-2">{faq.question}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* See also */}
        <div className="mb-12">
          <h2 className="text-lg font-semibold text-black mb-3">See Also</h2>
          <div className="flex flex-wrap gap-3">
            <Link href={`/india/${data.stateSlug}/${data.citySlug}`}>
              <Button variant="lightgraybg" size="sm">{data.city} City Page</Button>
            </Link>
            <Link href={`/india/${data.stateSlug}`}>
              <Button variant="lightgraybg" size="sm">All {stateName} Cities</Button>
            </Link>
            <Link href="/india/available-locations">
              <Button variant="lightgraybg" size="sm">All India Locations</Button>
            </Link>
            <Link href="/products">
              <Button variant="lightgraybg" size="sm">Browse Products</Button>
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 rounded-xl border border-teal-200 bg-teal-50">
          <h2 className="text-lg font-semibold text-black mb-1">
            Order Indian Green Coffee in {data.city}
          </h2>
          <p className="text-sm text-muted-foreground mb-4">
            MOQ {data.moq}. Delivered in {data.transitDays}. GST invoice. WhatsApp for a same-day response.
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
