import { Button } from "@/components/ui/button";
import { getProductsByRegion, getCommercialProducts } from "@/data/products";
import { LazyProductRow } from "@/components/products";
import { RequestCallDialog } from "@/components/RequestCallDialog";
import Link from "next/link";
import type { Metadata } from "next";
import { Separator } from "@/components/ui/separator";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Buy Indian Green Coffee | Specialty & Commercial | Bulk Green Coffee",
  description:
    "Source Indian green coffee — specialty lots (Natural, Honey, Washed) and commercial AA/AAA grade from Koraput (Odisha), Halflong (Assam), and South India. Wholesale for roasters, blenders, and importers. Peaberry available. MOQ from 30 kg.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Buy Indian Green Coffee | Specialty & Commercial | Bulk Green Coffee",
    description:
      "Specialty and commercial-grade Indian green coffee from Koraput, Halflong, and South India. AA/AAA from ₹800/kg. Peaberry available. Export-ready with full traceability.",
    url: "https://bulkgreencoffee.com",
    locale: "en_US",
  },
};

const eastIndiaProducts = getProductsByRegion("East India");
const northEastIndiaProducts = getProductsByRegion("North East India");
const southIndiaProducts = getProductsByRegion("South India");
const commercialProducts = getCommercialProducts();

export default function Home() {
  return (
    <div>
      <div className="mx-auto px-4 lg:px-6 h-auto my-10">
        <div className="md:min-h-screen pt-10 pb-20 max-w-6xl mx-auto md:pb-0 flex flex-col justify-center">
          <div>
            <div>
              <div>
                <h1 className="text-4xl font-semibold text-black pt-2 max-w-xl">
                  Specialty and Commercial Indian Green Coffee — Wholesale & Export.
                </h1>
                <p className="text-lg text-neutral-700 mt-4 max-w-2xl">
                  From AAA/AA commercial grade beans at ₹800/kg to award-worthy specialty lots — we source directly from Koraput, Assam, and South India. Whether you run a roastery, a café chain, or import at scale, we have the right grade for your volume.
                </p>
                <div className="pt-5 flex flex-row gap-4">
                  <RequestCallDialog />
                  <Link
                    href="https://cal.com/arjunaditya/30min?user=arjunaditya"
                    target="_blank"
                  >
                    <Button variant="red" size="sm">
                      Schedule a Zoom Meeting
                    </Button>
                  </Link>
                  <Link href="/products">
                    <Button variant="teal" size="sm">
                      Buy Products
                    </Button>
                  </Link>
                </div>
              </div>
              {/* Featured Products Section */}
              <div className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4 lg:px-6">
                  <LazyProductRow
                    title="Commercial Grade"
                    products={commercialProducts}
                    showActions={false}
                  />
                  <LazyProductRow
                    title="East India"
                    products={eastIndiaProducts}
                    showActions={false}
                  />
                  <LazyProductRow
                    title="North East India"
                    products={northEastIndiaProducts}
                    showActions={false}
                  />
                  <LazyProductRow
                    title="South India"
                    products={southIndiaProducts}
                    showActions={false}
                  />
                </div>
              </div>

              {/* Why Indian Green Coffee */}
              <section className="py-20 border-t border-neutral-100">
                <div className="max-w-6xl mx-auto px-4 lg:px-6">
                  <h2 className="text-3xl font-semibold text-black mb-4">
                    Why Indian Green Coffee?
                  </h2>
                  <p className="text-neutral-600 max-w-3xl mb-10 text-lg">
                    India is the world's sixth-largest coffee producer and one of its best-kept secrets. Unlike most major origins, Indian coffee is almost entirely shade-grown — under silver oak, pepper vines, and cardamom — which slows cherry development, deepens flavour complexity, and keeps farming sustainable. The country produces both Arabica and Robusta across dramatically different terroirs: from the misty tribal highlands of Odisha and Assam to the established estates of Karnataka and Kerala.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="p-6 rounded-xl border border-neutral-200">
                      <p className="font-semibold text-black mb-2">Shade-Grown by Default</p>
                      <p className="text-sm text-neutral-600">Nearly all Indian coffee grows under a multi-canopy shade system — silver oak, jungle trees, pepper, and cardamom — producing slower-ripened cherries with more concentrated sugars and nuanced cup profiles.</p>
                    </div>
                    <div className="p-6 rounded-xl border border-neutral-200">
                      <p className="font-semibold text-black mb-2">Genuine Traceability</p>
                      <p className="text-sm text-neutral-600">We source directly from tribal cooperatives in Koraput, small-holder farms in Assam, and established estates in Karnataka. Every lot comes with origin documentation, not just a country label.</p>
                    </div>
                    <div className="p-6 rounded-xl border border-neutral-200">
                      <p className="font-semibold text-black mb-2">Export-Ready Infrastructure</p>
                      <p className="text-sm text-neutral-600">India exports coffee to over 80 countries. We handle phytosanitary certificates, GrainPro packaging, moisture control, and FOB documentation — reducing friction for international buyers.</p>
                    </div>
                    <div className="p-6 rounded-xl border border-neutral-200">
                      <p className="font-semibold text-black mb-2">Multiple Process Types</p>
                      <p className="text-sm text-neutral-600">Natural, Washed, Honey Sun-Dried, and Monsooned — Indian farms offer more processing variety than most single-country origins, letting roasters build diverse menus from one supplier.</p>
                    </div>
                    <div className="p-6 rounded-xl border border-neutral-200">
                      <p className="font-semibold text-black mb-2">Competitive Pricing</p>
                      <p className="text-sm text-neutral-600">Commercial AA/AAA grade from ₹800/kg. Specialty lots from ₹1,100/kg. Peaberry PB grade available. India offers exceptional quality-to-cost ratio compared to Ethiopian or Colombian equivalents.</p>
                    </div>
                    <div className="p-6 rounded-xl border border-neutral-200">
                      <p className="font-semibold text-black mb-2">Low MOQ for Sampling</p>
                      <p className="text-sm text-neutral-600">Minimum orders from 10 kg let roasters trial new origins without committing to containers. We provide sample packs on request before any bulk commitment.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* What is Arabica */}
              <section className="py-20 border-t border-neutral-100">
                <div className="max-w-6xl mx-auto px-4 lg:px-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-teal-700 mb-3">Coffee Education</p>
                      <h2 className="text-3xl font-semibold text-black mb-4">What is Arabica Coffee?</h2>
                      <p className="text-neutral-600 mb-4">
                        <em>Coffea arabica</em> is the most widely grown coffee species in the world, accounting for roughly 60–70% of global production. Arabica thrives at high altitudes — typically 800m to 2,000m above sea level — where cooler temperatures slow the growth of the coffee cherry, allowing sugars and acids to develop over a longer period.
                      </p>
                      <p className="text-neutral-600 mb-4">
                        Compared to Robusta, Arabica beans have lower caffeine content (1.2–1.5%), higher complexity, more delicate acidity, and a wider flavour range spanning floral, fruity, chocolatey, and spiced notes. Arabica is the preferred choice for specialty roasters, single-origin espresso, and filter coffee programmes.
                      </p>
                      <p className="text-neutral-600">
                        In India, Arabica is primarily grown across Karnataka (Chikmagalur, Coorg, Bababudangiri), Kerala (Wayanad), Odisha (Koraput), and Assam (Halflong). Each microclimate produces a distinct expression: the bright citrus of Chikmagalur, the full body of Coorg, the wine-like intensity of Koraput Naturals, and the delicate florals of Halflong SL-9.
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-teal-700 mb-3">Arabica Varieties in India</p>
                      <div className="space-y-4">
                        {[
                          { name: "S.795", desc: "India's most widely planted Arabica variety — bred from Kent and S.288. Known for balanced acidity, good body, and subtle mocha notes. Highly disease-resistant." },
                          { name: "Chandragiri", desc: "A compact, high-yielding variety released by the Coffee Board of India in 2010. Popular in tribal growing areas like Koraput. Produces a mild, clean cup." },
                          { name: "SL-9 (Halflong)", desc: "A Kenyan-origin SL variety adapted to North-East India's high altitude. Produces delicate florals and red-berry sweetness — prized by specialty buyers." },
                          { name: "Catuai", desc: "Introduced from Brazil, Catuai is compact and productive. Common in South India's established estates. Produces a bright, clean cup suitable for espresso." },
                          { name: "Local Heirlooms", desc: "Old-growth heritage varietals found in tribal forest farms of Koraput and Bababudangiri — often unregistered but producing distinctive, complex cup profiles." },
                        ].map((v) => (
                          <div key={v.name} className="flex gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-teal-600 mt-2 shrink-0" />
                            <div>
                              <p className="font-medium text-black text-sm">{v.name}</p>
                              <p className="text-sm text-neutral-600">{v.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* What is Peaberry */}
              <section className="py-20 border-t border-neutral-100 bg-neutral-50">
                <div className="max-w-6xl mx-auto px-4 lg:px-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-teal-700 mb-3">Specialty Grade</p>
                      <h2 className="text-3xl font-semibold text-black mb-4">What is Indian Peaberry Coffee?</h2>
                      <p className="text-neutral-600 mb-4">
                        A peaberry (PB) is a natural mutation in a coffee cherry where only one seed develops instead of the usual two flat-sided beans. Without a partner seed to grow against, the single seed grows round and dense — like a small pea, hence the name. This mutation occurs in approximately 5% of all coffee cherries harvested.
                      </p>
                      <p className="text-neutral-600 mb-4">
                        Because peaberries are denser and more uniform in shape than flat beans, they roast more evenly. Heat distributes consistently around the spherical surface, reducing the risk of uneven roasting or tipping. Many roasters report that peaberries from the same origin display enhanced sweetness, aromatic clarity, and a cleaner cup compared to the flat-bean equivalent.
                      </p>
                      <p className="text-neutral-600">
                        In India, peaberries are hand-sorted during processing and classified as PB grade — a premium tier above AA and A. They are available from Koraput, Chikmagalur, Coorg, and Wayanad origins. Peaberry lots are limited by nature and command a price premium typically 15–30% above standard grade from the same origin.
                      </p>
                    </div>
                    <div className="space-y-5">
                      <div className="p-5 rounded-xl border border-neutral-200 bg-white">
                        <p className="font-semibold text-black mb-1">Why Peaberry Roasts Better</p>
                        <p className="text-sm text-neutral-600">The uniform spherical shape means the bean rotates freely in the drum and receives even heat exposure across its entire surface — eliminating the flat-side vs curved-side differential that causes uneven development in standard beans.</p>
                      </div>
                      <div className="p-5 rounded-xl border border-neutral-200 bg-white">
                        <p className="font-semibold text-black mb-1">Indian Coffee Grading: PB vs AA vs AAA</p>
                        <p className="text-sm text-neutral-600">
                          <strong>PB (Peaberry)</strong> — round single-seed beans, hand-sorted, premium grade.<br />
                          <strong>AAA</strong> — largest screen-size flat beans, top commercial grade.<br />
                          <strong>AA</strong> — second screen size, the most widely traded Indian commercial grade.<br />
                          <strong>A / AB</strong> — smaller screen sizes, excellent for blending and high-volume use.
                        </p>
                      </div>
                      <div className="p-5 rounded-xl border border-neutral-200 bg-white">
                        <p className="font-semibold text-black mb-1">Where to Find Indian Peaberry</p>
                        <p className="text-sm text-neutral-600">We stock Peaberry (PB) grade from Koraput Washed, Chikmagalur Arabica, Coorg Arabica, and Wayanad Arabica. All peaberry lots are hand-sorted at origin and packed in GrainPro-lined jute bags to preserve moisture stability during transit.</p>
                      </div>
                      <div className="p-5 rounded-xl border border-neutral-200 bg-white">
                        <p className="font-semibold text-black mb-1">MOQ for Peaberry</p>
                        <p className="text-sm text-neutral-600">Peaberry lots are available from 10 kg for sampling. Bulk orders in 30 kg or 60 kg GrainPro jute bags. Contact us for current availability — PB lots sell out faster than standard grades.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Indian Coffee Regions */}
              <section className="py-20 border-t border-neutral-100">
                <div className="max-w-6xl mx-auto px-4 lg:px-6">
                  <h2 className="text-3xl font-semibold text-black mb-4">Indian Coffee Growing Regions</h2>
                  <p className="text-neutral-600 max-w-3xl mb-10">
                    India's coffee geography spans three distinct belts — the tribal highlands of East India, the underexplored frontier of North East India, and the established estates of South India. Each belt produces coffees with radically different character.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                      <p className="font-semibold text-black mb-1">East India</p>
                      <p className="text-xs font-medium text-teal-700 mb-3">Koraput (Odisha) · Araku Valley (Andhra Pradesh)</p>
                      <p className="text-sm text-neutral-600 mb-3">
                        Koraput is Odisha's southernmost district and one of India's most exciting emerging specialty origins. At 900–1,350 masl, tribal farming communities cultivate Arabica in the Eastern Ghats under natural forest canopy. The Odisha government branded Koraput Coffee in 2019 and the region is currently seeking a GI tag.
                      </p>
                      <p className="text-sm text-neutral-600">
                        Process types available: Natural, Honey Sun-Dried (HSD), Washed. Key varietals: Chandragiri, local heirlooms. SCA scores: 85–88+.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-black mb-1">North East India</p>
                      <p className="text-xs font-medium text-teal-700 mb-3">Halflong (Assam) · Tirap & Chirang (Arunachal Pradesh)</p>
                      <p className="text-sm text-neutral-600 mb-3">
                        India's most underexplored coffee region. Halflong in Dima Hasao district of Assam produces high-altitude Arabica (SL-9) at 950–1,000 masl with delicate florals and red-berry sweetness — consistently scoring above 88 SCA at specialty cuppings. Chirang and Tirap produce CxR Robusta from forest-fringe tribal farms.
                      </p>
                      <p className="text-sm text-neutral-600">
                        Limited harvest availability. Contact us for current lot status and sample requests.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-black mb-1">South India</p>
                      <p className="text-xs font-medium text-teal-700 mb-3">Chikmagalur · Coorg · Wayanad · Bababudangiri</p>
                      <p className="text-sm text-neutral-600 mb-3">
                        The established heartland of Indian coffee production. Karnataka alone accounts for over 70% of India's total coffee output. Chikmagalur (the cradle of Indian coffee), Coorg (famous for full-bodied planters' estate Arabica), Wayanad (smooth Kerala forest-grown), and Bababudangiri (India's mythical origin) all offer consistent, traceable green coffee year-round.
                      </p>
                      <p className="text-sm text-neutral-600">
                        All South India origins available in AA, A, AB, and PB (Peaberry) grades.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* FAQ */}
              <section className="py-20 border-t border-neutral-100 bg-neutral-50">
                <div className="max-w-4xl mx-auto px-4 lg:px-6">
                  <h2 className="text-3xl font-semibold text-black mb-10">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    {[
                      {
                        q: "What is the minimum order quantity (MOQ) for green coffee?",
                        a: "MOQ varies by product. Specialty lots (Koraput, Halflong) start from 10 kg for most grades. Commercial AA/AAA starts from 30 kg. Peaberry (PB) lots are available from 10 kg. We recommend starting with a sample before committing to bulk — contact us and we'll arrange samples.",
                      },
                      {
                        q: "Do you ship internationally?",
                        a: "Yes. We ship green coffee worldwide via air freight and sea freight. We handle phytosanitary certificates, fumigation reports, and all export documentation required for customs clearance in the EU, US, UK, Middle East, and Southeast Asia. FOB Chennai, FOB Mundra, and CIF pricing available on request.",
                      },
                      {
                        q: "What is the difference between Natural, Washed, and Honey process?",
                        a: "Natural (sun-dried) means the whole cherry is dried intact — producing fruity, wine-like flavour. Washed means the cherry skin and mucilage are removed before drying — producing a cleaner, brighter cup. Honey (HSD) sits in between — the skin is removed but some mucilage is left on during drying — producing sweetness and body with less ferment character than a natural.",
                      },
                      {
                        q: "What grades of green coffee do you supply?",
                        a: "Commercial grade: AAA and AA (plantation grade, washed Arabica). Specialty grades: Grade 1, Grade 2, PB (Peaberry), Gold Honey, Red Honey for process-specific lots. All grades are available with SCA score documentation on request for specialty lots.",
                      },
                      {
                        q: "Can I get a sample before placing a bulk order?",
                        a: "Yes — we strongly recommend sampling before committing to bulk. Contact us via WhatsApp or the contact form with your target origin, process preference, and volume requirements. We'll share current lot availability and arrange samples.",
                      },
                      {
                        q: "What packaging do you use for green coffee?",
                        a: "All green coffee is packed in GrainPro-lined 60 kg jute bags for bulk orders. 30 kg bags available on request. GrainPro inner bags maintain moisture stability and protect against re-absorption during transit — critical for long sea freight routes.",
                      },
                      {
                        q: "Is Indian green coffee suitable for specialty roasters?",
                        a: "Absolutely. Our Halflong SL-9 Naturals score 89 SCA and are used by specialty roasters in Europe and South Asia. Koraput Naturals and HSD lots score 87–88 SCA. South India origins offer consistent 84–86 SCA lots with excellent traceability — ideal for single-origin filter and espresso programmes.",
                      },
                    ].map((item, i) => (
                      <div key={i} className="border-b border-neutral-200 pb-6">
                        <p className="font-semibold text-black mb-2">{item.q}</p>
                        <p className="text-sm text-neutral-600 leading-relaxed">{item.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
