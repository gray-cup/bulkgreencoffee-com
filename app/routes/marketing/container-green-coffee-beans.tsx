import Link from "@/lib/next-link-compat";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LocationProductCard } from "@/components/products";
import { getWhatsappLink } from "@/data/destinations";
import { getRandomProducts } from "@/lib/random-products";
import { BreadcrumbSchema, FaqSchema } from "@/components/seo";

const BASE_URL = "https://bulkgreencoffee.com";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "1 Container Green Coffee Beans | Full Container Load (FCL) from India",
    description:
      "Order a full container load of Indian green coffee beans, 20ft or 40ft, commercial or specialty grade. Container loading, documentation, and freight handled end-to-end.",
    alternates: { canonical: "/1-container-green-coffee-beans" },
    openGraph: {
      title: "Full Container Load Green Coffee Beans from India",
      description:
        "20ft and 40ft full container loads of Indian green coffee, commercial and specialty grade, with export documentation and freight handled end-to-end.",
      url: `${BASE_URL}/1-container-green-coffee-beans`,
      locale: "en_US",
    },
  };
}

const faqs = [
  {
    q: "How much green coffee fits in one container?",
    a: "As a rough guide, a 20ft container holds around 300–320 bags of 60 kg GrainPro-lined jute (roughly 18–19 tonnes), and a 40ft container holds around 600–650 bags (roughly 36–39 tonnes). Exact loading depends on bag weight, packaging, and whether the container is dry or reefer, we confirm exact figures once you tell us the grade and packaging you want.",
  },
  {
    q: "Can I mix grades or origins in one container?",
    a: "Yes. Many container orders combine a commercial-grade base with one or two specialty single-origin lots. We consolidate documentation and loading into a single shipment.",
  },
  {
    q: "What documentation comes with a container order?",
    a: "Every container ships with phytosanitary certificates, fumigation reports, moisture analysis per lot, a certificate of origin, and a packing list matching your bill of lading. We can also provide pre-shipment samples for your own QC before the container is sealed.",
  },
  {
    q: "How long does a container take to arrive?",
    a: "Once your order and payment terms are confirmed, we typically load and dispatch within 2–3 weeks, then sea freight transit runs roughly 3–5 weeks depending on your destination port. We'll give you a firm ETA once the booking is confirmed.",
  },
  {
    q: "Do you handle FOB, CIF, or CFR terms?",
    a: "Yes, we work on FOB (Indian port), CIF, and CFR terms depending on what your freight forwarder or import process needs. Tell us your preferred Incoterm and destination port and we'll quote accordingly.",
  },
];

export default function ContainerGreenCoffeeBeansPage() {
  const featuredProducts = getRandomProducts("1-container-green-coffee-beans", 6);
  const waLink = getWhatsappLink(
    "Hi, I'm looking to order a full container (20ft or 40ft) of green coffee beans from India and would like to enquire about grades, loading, and freight."
  );

  const breadcrumbs = [
    { name: "Home", url: BASE_URL },
    { name: "1 Container Green Coffee Beans", url: `${BASE_URL}/1-container-green-coffee-beans` },
  ];

  return (
    <div className="min-h-screen py-20 px-4 lg:px-6">
      <BreadcrumbSchema items={breadcrumbs} />
      <FaqSchema faqs={faqs} />
      <div className="max-w-6xl mx-auto px-4 lg:px-6">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-muted-foreground mb-8 flex-wrap">
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
          <span>/</span>
          <span className="text-black">1 Container Green Coffee Beans</span>
        </nav>

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-semibold text-black mb-3">
            1 Container Green Coffee Beans, FCL from India
          </h1>
          <p className="text-md text-muted-foreground max-w-2xl mb-6">
            Full container loads (20ft or 40ft) of Indian green coffee, commercial or specialty grade, loading, export documentation, and sea freight handled end-to-end.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={waLink} target="_blank" rel="noopener noreferrer">
              <Button variant="teal" size="sm">WhatsApp: +91 85279 14317</Button>
            </a>
            <Link href="/bulk-green-coffee">
              <Button variant="lightgraybg" size="sm">Smaller Bulk Orders</Button>
            </Link>
          </div>
        </div>

        <hr className="mb-10" />

        {/* Container loading guide */}
        <div className="mb-12">
          <h2 className="text-lg font-semibold text-black mb-4">Container Loading, Approximate Figures</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-50 text-xs text-muted-foreground">
                  <th className="text-left font-medium px-4 py-2.5">Container</th>
                  <th className="text-right font-medium px-4 py-2.5">Bags (60 kg each)</th>
                  <th className="text-right font-medium px-4 py-2.5">Approx. Weight</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-100">
                  <td className="px-4 py-2.5 font-medium text-black">20ft Dry Container</td>
                  <td className="px-4 py-2.5 text-right">~300–320 bags</td>
                  <td className="px-4 py-2.5 text-right">~18–19 tonnes</td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="px-4 py-2.5 font-medium text-black">40ft Dry Container</td>
                  <td className="px-4 py-2.5 text-right">~600–650 bags</td>
                  <td className="px-4 py-2.5 text-right">~36–39 tonnes</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Figures are approximate and vary with bag weight, packaging (GrainPro-lined jute vs. vacuum liners), and bean density. We confirm exact loading once you tell us the grade and packaging you want.
          </p>
        </div>

        {/* Products */}
        <div className="mb-12">
          <h2 className="text-lg font-semibold text-black mb-4">Grades Suited to Container Orders</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredProducts.map((product) => (
              <LocationProductCard key={product.slug} product={product} />
            ))}
          </div>
          <div className="mt-6">
            <Link href="/products" className="inline-flex items-center gap-1 text-sm text-teal-700 hover:text-teal-900 font-medium">
              View the full catalogue <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Body copy */}
        <div className="mb-12">
          <h2 className="text-lg font-semibold text-black mb-3">Ordering a Full Container of Green Coffee</h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            A full container load (FCL) is the standard unit for importers, roasteries buying at scale, and distributors who need consistent supply rather than a one-off trial. We pack in 60 kg GrainPro-lined jute bags as standard (custom packaging available on request), and can load a single commercial grade, a blend of grades, or a container split between commercial volume and one or two specialty single-origin lots.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Every container ships with phytosanitary certificates, fumigation reports, moisture analysis, a certificate of origin, and a packing list matching your bill of lading. We work on FOB, CIF, and CFR terms, tell us your grade, volume, destination port, and preferred Incoterm, and we'll come back with a firm quote and loading plan.
          </p>
        </div>

        {/* FAQ */}
        <div className="mb-12">
          <h2 className="text-lg font-semibold text-black mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="p-5 border rounded-lg">
                <p className="font-medium text-black mb-2">{faq.q}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 rounded-xl border border-teal-200 bg-teal-50">
          <h2 className="text-lg font-semibold text-black mb-1">Ready to book a container?</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Message us on WhatsApp with your target grade, volume, destination port, and Incoterm. We respond within a few hours.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={waLink} target="_blank" rel="noopener noreferrer">
              <Button variant="teal" size="sm">WhatsApp: +91 85279 14317</Button>
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
