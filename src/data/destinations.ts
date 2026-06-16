export type CountryDestination = {
  slug: string;
  name: string;
  flag: string;
  currency: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubtitle: string;
  marketContext: string;
  importNote: string;
  shippingNote: string;
  popularProductSlugs: string[];
  faqs: { q: string; a: string }[];
};

export type StateDestination = {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubtitle: string;
  marketContext: string;
  popularProductSlugs: string[];
  faqs: { q: string; a: string }[];
};

const WHATSAPP_NUMBER = "918527914317";

export function getWhatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const countryDestinations: CountryDestination[] = [
  {
    slug: "germany",
    name: "Germany",
    flag: "🇩🇪",
    currency: "EUR",
    metaTitle: "Buy Indian Green Coffee in Germany | Wholesale Arabica Supplier | Bulk Green Coffee",
    metaDescription:
      "Supply Indian green coffee to Germany — specialty Arabica from Koraput, Halflong, Chikmagalur, and Coorg. Wholesale and export pricing. DDP/DAP to Hamburg, Bremen, Frankfurt. Request samples.",
    heroHeadline: "Indian Green Coffee for German Roasters and Importers",
    heroSubtitle: "Specialty and commercial-grade Arabica from India's top origins — export-ready, fully documented, delivered to Germany.",
    marketContext:
      "Germany is one of Europe's largest specialty coffee markets, home to hundreds of independent roasters, SCA-affiliated buyers, and a rapidly growing third-wave café culture. German buyers typically demand rigorous documentation, consistent moisture specs, and transparent supply chains. We ship directly to Hamburg, Bremen, Frankfurt, and Berlin with full phytosanitary, fumigation, and customs documentation.",
    importNote:
      "Green coffee imported into Germany falls under EU customs code 0901.11.00 (unroasted, not decaffeinated). The current EU import duty rate for Indian green coffee is 0% under the EU–India GSP arrangement. VAT is applicable at the point of import. We provide all documentation required for EU customs clearance including EUR.1 certificates on request.",
    shippingNote:
      "We ship via sea freight (FOB Chennai / FOB Mundra) to Hamburg or Bremen — the primary European green coffee import ports. Transit time is approximately 18–22 days. Air freight to Frankfurt available for sample orders and urgent lots. GrainPro-lined jute bags maintain moisture stability throughout transit.",
    popularProductSlugs: [
      "halflong-arabica-naturals",
      "koraput-naturals",
      "bababudangiri-arabica",
      "chikmagalur-arabica",
      "koraput-hsd",
    ],
    faqs: [
      {
        q: "How do I import green coffee from India to Germany?",
        a: "We handle all Indian export documentation — phytosanitary certificate, fumigation certificate, bill of lading, and certificate of origin. At the German port, your customs agent will clear the shipment under HS code 0901.11.00. Under the EU GSP, Indian green coffee currently attracts 0% import duty.",
      },
      {
        q: "What SCA scores do your Indian specialty lots achieve?",
        a: "Our Halflong SL-9 Arabica Naturals consistently score 89 SCA. Koraput HSD lots score 87–88. Bababudangiri Arabica typically scores 86. All specialty lots can be supplied with cupping notes and SCA score documentation.",
      },
      {
        q: "What is the minimum order for shipping to Germany?",
        a: "For sea freight to Germany we recommend a minimum of 60 kg (one GrainPro jute bag). Air freight samples from 10 kg are available. We can consolidate multiple origins into one shipment to meet your minimum.",
      },
    ],
  },
  {
    slug: "norway",
    name: "Norway",
    flag: "🇳🇴",
    currency: "NOK",
    metaTitle: "Buy Indian Green Coffee in Norway | Specialty Arabica Wholesale | Bulk Green Coffee",
    metaDescription:
      "Source Indian green coffee for Norwegian roasters and importers — specialty Arabica from Koraput, Halflong, and South India. Export-ready with full documentation. Samples available.",
    heroHeadline: "Indian Green Coffee for Norway's Specialty Roasters",
    heroSubtitle: "Rare Indian Arabica origins — Natural, Washed, Honey — for the world's highest per-capita coffee-consuming country.",
    marketContext:
      "Norway leads the world in per-capita coffee consumption and is home to some of Scandinavia's most discerning specialty roasters. Norwegian buyers prioritise traceability, ethical sourcing, and cup quality above price. Indian origins — particularly the high-altitude lots from Halflong and Koraput — are underrepresented in Nordic green coffee catalogues, offering Norwegian roasters a genuine differentiation opportunity.",
    importNote:
      "Norway is not an EU member but participates in the EEA. Green coffee imports into Norway are governed by Norwegian customs authority (Tolletaten). Indian green coffee qualifies for reduced duty under Norway's GSP scheme (Generalised System of Preferences). Check current rates with your Norwegian customs agent.",
    shippingNote:
      "Sea freight from India to Oslo (via Hamburg or Bremerhaven) takes approximately 22–28 days. We ship FOB Chennai or FOB Mundra. For smaller orders, air freight to Oslo Gardermoen is available. All shipments include GrainPro inner liners for moisture stability during the longer Nordic transit.",
    popularProductSlugs: [
      "halflong-arabica-naturals",
      "koraput-naturals",
      "koraput-washed",
      "bababudangiri-arabica",
      "koraput-hsd",
    ],
    faqs: [
      {
        q: "Do you ship directly to Norway?",
        a: "Yes — we ship to Oslo and other Norwegian ports via Hamburg or Bremerhaven. Sea freight transit is approximately 22–28 days from Indian ports. We handle all Indian export documentation and can assist with Norwegian import paperwork requirements.",
      },
      {
        q: "Which Indian origins work best for Scandinavian filter coffee?",
        a: "The Halflong SL-9 Arabica Naturals (89 SCA) is our most-requested lot for Nordic specialty buyers — delicate florals, red-berry sweetness, clean finish. Koraput Washed is excellent for clean, transparent filter coffee. Both origins are uncommon in the Norwegian market, giving you a genuine point of difference.",
      },
    ],
  },
  {
    slug: "netherlands",
    name: "Netherlands",
    flag: "🇳🇱",
    currency: "EUR",
    metaTitle: "Buy Indian Green Coffee in the Netherlands | Wholesale Arabica | Bulk Green Coffee",
    metaDescription:
      "Source Indian green coffee for the Netherlands — specialty and commercial Arabica from Koraput, Halflong, and South India. Sea freight via Rotterdam. Wholesale pricing. Samples on request.",
    heroHeadline: "Indian Green Coffee for Dutch Roasters and Traders",
    heroSubtitle: "Specialty and commercial Indian Arabica, shipped via Rotterdam — Europe's primary green coffee import gateway.",
    marketContext:
      "The Netherlands is Europe's most important green coffee trading hub — Rotterdam handles a significant portion of all green coffee entering the EU. Dutch buyers include large-scale traders, specialty roasters in Amsterdam and Rotterdam, and private-label manufacturers. The Dutch market is sophisticated, data-driven, and focused on supply chain transparency — all of which Indian green coffee can deliver.",
    importNote:
      "Rotterdam is a bonded warehouse hub for green coffee — many European traders receive and re-export from the Netherlands. Indian green coffee imports into the EU via Rotterdam fall under HS code 0901.11.00. GSP 0% duty applies. We can deliver CIF Rotterdam for buyers who prefer European warehouse delivery.",
    shippingNote:
      "Sea freight to Rotterdam from India takes approximately 18–22 days (FOB Chennai / FOB Mundra). Rotterdam is the most cost-effective European destination for Indian green coffee. We can arrange CIF Rotterdam pricing on request, or you can arrange your own freight from Indian ports on an FOB basis.",
    popularProductSlugs: [
      "koraput-commercial-aaa",
      "koraput-commercial-aa",
      "chikmagalur-arabica",
      "coorg-arabica",
      "halflong-arabica-naturals",
    ],
    faqs: [
      {
        q: "Can you deliver CIF Rotterdam?",
        a: "Yes — we can arrange CIF Rotterdam pricing for bulk orders. This includes freight, marine insurance, and all Indian export documentation. Contact us with your volume and target origin to receive a CIF Rotterdam quote.",
      },
      {
        q: "Do you work with green coffee traders, not just roasters?",
        a: "Yes. We supply green coffee traders, importers, and re-exporters in addition to direct roasters. We can provide origin certificates, phytosanitary certificates, and all documentation required for EU customs clearance and bonded warehouse storage.",
      },
    ],
  },
  {
    slug: "switzerland",
    name: "Switzerland",
    flag: "🇨🇭",
    currency: "CHF",
    metaTitle: "Buy Indian Green Coffee in Switzerland | Specialty Arabica Wholesale | Bulk Green Coffee",
    metaDescription:
      "Source Indian green coffee for Switzerland — specialty Arabica from Koraput, Halflong, Chikmagalur, and Bababudangiri. Export documentation complete. Delivered to Zurich, Geneva, Basel.",
    heroHeadline: "Indian Green Coffee for Swiss Specialty Roasters",
    heroSubtitle: "Premium and rare Indian Arabica origins for Switzerland's discerning specialty coffee market.",
    marketContext:
      "Switzerland punches above its weight in specialty coffee — Zurich, Geneva, and Basel host a disproportionate number of world-class roasters, SCA-certified buyers, and specialty café groups. Swiss buyers are particularly interested in rare, high-scoring origins with compelling provenance stories. Indian lots from Halflong, Bababudangiri, and Koraput are rarely found in Swiss green coffee catalogues — representing a clear differentiation opportunity.",
    importNote:
      "Switzerland is not in the EU and has its own customs framework. Green coffee (HS 0901.11.00) attracts 0% duty under Switzerland's autonomous tariff for unprocessed agricultural goods. Your Swiss customs agent will handle clearance. We provide full Swiss customs documentation including certificate of origin.",
    shippingNote:
      "Sea freight from India to Basel (via Rotterdam or Hamburg) takes approximately 20–26 days. Air freight to Zurich is available for sample orders. Switzerland has no seaport — all sea freight arrives via German or Dutch ports and transits by truck. We recommend consolidating with a European freight forwarder for cost efficiency.",
    popularProductSlugs: [
      "halflong-arabica-naturals",
      "bababudangiri-arabica",
      "koraput-hsd",
      "koraput-naturals",
      "koraput-washed",
    ],
    faqs: [
      {
        q: "Can I order samples before committing to a bulk shipment to Switzerland?",
        a: "Yes — we send sample packs (250–500g) by air courier to Switzerland before any bulk order. Most Swiss buyers cup 2–3 origins before selecting. Contact us with your origin preferences and we will arrange sample dispatch within 5–7 business days.",
      },
      {
        q: "What is the highest-scoring Indian origin you supply?",
        a: "Our Halflong Arabica SL-9 Naturals from Dima Hasao, Assam consistently scores 89 SCA. Koraput HSD scores 88 and Bababudangiri Arabica scores 86. All specialty lots come with cupping notes. Swiss roasters have found the Halflong and Bababudangiri origins particularly unusual and marketable.",
      },
    ],
  },
  {
    slug: "italy",
    name: "Italy",
    flag: "🇮🇹",
    currency: "EUR",
    metaTitle: "Buy Indian Green Coffee in Italy | Arabica & Robusta Wholesale | Bulk Green Coffee",
    metaDescription:
      "Source Indian green coffee for Italy — commercial and specialty Arabica from South India, Odisha, and Assam. Robusta available for espresso blends. Wholesale pricing. Ship to Genova, Naples, Milan.",
    heroHeadline: "Indian Green Coffee for Italian Roasters and Blenders",
    heroSubtitle: "Quality Arabica and Robusta from India — the right base for Italian espresso blends, specialty programmes, and commercial roasting.",
    marketContext:
      "Italy is home to the world's most celebrated espresso culture and one of its largest commercial roasting industries. Italian buyers range from family roasteries supplying neighbourhood bars to multi-tonne blenders supplying national chains. Indian Arabica — particularly South India's full-bodied, low-acidity lots from Coorg and Chikmagalur — fits Italian espresso profiles exceptionally well. Indian Robusta from Assam is a cost-effective alternative to Ugandan or Vietnamese Robusta in espresso blends.",
    importNote:
      "Italy imports green coffee under EU HS code 0901.11.00. Indian green coffee benefits from 0% EU import duty under the GSP. Major Italian green coffee ports include Genoa and Naples. We provide all EU customs documentation including phytosanitary and EUR.1 certificates.",
    shippingNote:
      "Sea freight to Genoa or Naples from India takes approximately 18–22 days. FOB Chennai and FOB Mundra pricing available. GrainPro-lined 60 kg jute bags are standard. Air freight to Milan Malpensa available for samples and small urgent orders.",
    popularProductSlugs: [
      "coorg-arabica",
      "chikmagalur-arabica",
      "koraput-commercial-aaa",
      "chirang-robusta-naturals",
      "koraput-peaberry",
    ],
    faqs: [
      {
        q: "Which Indian Arabica works best for Italian espresso blends?",
        a: "Coorg Arabica (full body, mild acidity, chocolate-spice) and Chikmagalur AA (balanced, S795 varietal) are the most popular choices for Italian espresso blenders. Both have low acidity and a structured body that holds up through milk drinks. Koraput AAA is an excellent price-efficient base option.",
      },
      {
        q: "Do you supply Indian Robusta for espresso blending?",
        a: "Yes — we stock CxR Robusta from Chirang (Assam) and Tirap (Arunachal Pradesh), both natural process. These add crema, body, and caffeine to espresso blends at a competitive price. Available in Grade 1 and Grade 2 from 10 kg.",
      },
    ],
  },
  {
    slug: "france",
    name: "France",
    flag: "🇫🇷",
    currency: "EUR",
    metaTitle: "Buy Indian Green Coffee in France | Wholesale Arabica Supplier | Bulk Green Coffee",
    metaDescription:
      "Source Indian green coffee for France — specialty and commercial Arabica from Koraput, Halflong, and South India. Ship to Le Havre, Marseille. EU import ready. Samples available.",
    heroHeadline: "Indian Green Coffee for French Roasters and Importers",
    heroSubtitle: "Specialty Arabica and commercial Indian green coffee — export-ready for France's growing specialty coffee market.",
    marketContext:
      "France's coffee culture is undergoing a genuine transformation — Paris and Lyon now host world-class specialty roasters alongside the traditional café crème culture. French buyers are increasingly interested in origin transparency, processing diversity, and single-origin storytelling. Indian lots offer something the dominant African and Latin American origins cannot: an entirely different geography, an unexpected flavour profile, and a supply chain that starts far from the beaten path.",
    importNote:
      "France imports green coffee under EU HS code 0901.11.00. Indian green coffee benefits from 0% duty under EU GSP. Le Havre is the primary French import port for coffee from Asia. We provide phytosanitary, EUR.1, and fumigation certificates for French customs clearance.",
    shippingNote:
      "Sea freight from India to Le Havre takes approximately 20–24 days via Suez. FOB Chennai and FOB Mundra options available. GrainPro-lined 60 kg jute bags standard. Samples shipped by air courier to France within 5–7 business days from order.",
    popularProductSlugs: [
      "halflong-arabica-naturals",
      "koraput-naturals",
      "koraput-hsd",
      "bababudangiri-arabica",
      "chikmagalur-arabica",
    ],
    faqs: [
      {
        q: "Do you have French-speaking staff for enquiries?",
        a: "Our primary communication is in English, but we are happy to work with your French-speaking procurement or logistics team via WhatsApp, email, or Zoom. We provide all documentation in English which is standard for international green coffee trade.",
      },
      {
        q: "Can I feature Indian coffee as a seasonal origin in my Paris café?",
        a: "Absolutely — specialty Indian lots from Halflong (89 SCA) and Koraput (87–88 SCA) are unusual and compelling seasonal features. We supply 10 kg minimum for sampling and can provide tasting notes, farm photography, and origin documentation for your menu storytelling.",
      },
    ],
  },
  {
    slug: "spain",
    name: "Spain",
    flag: "🇪🇸",
    currency: "EUR",
    metaTitle: "Buy Indian Green Coffee in Spain | Wholesale Arabica & Robusta | Bulk Green Coffee",
    metaDescription:
      "Source Indian green coffee for Spain — Arabica and Robusta wholesale from India. Ship to Barcelona, Valencia, Bilbao. EU import documentation complete. Specialty and commercial grades available.",
    heroHeadline: "Indian Green Coffee for Spanish Roasters and Importers",
    heroSubtitle: "Full-bodied South Indian Arabica and robust Indian Robusta — well-suited to Spain's espresso and café culture.",
    marketContext:
      "Spain has one of Europe's largest café sectors, with strong demand for espresso-suitable Arabica and commercial-grade Robusta. The Spanish market ranges from large industrial roasters supplying supermarkets and hospitality to an emerging specialty scene in Barcelona, Madrid, and the Basque Country. Indian Arabica's characteristic full body and mild acidity fits Spanish espresso profiles, while Indian Robusta from Assam is a competitive alternative for blend components.",
    importNote:
      "Spain imports green coffee under EU HS code 0901.11.00. Indian green coffee enters duty-free under EU GSP. Major Spanish ports include Barcelona and Valencia. We supply full EU customs documentation with every shipment.",
    shippingNote:
      "Sea freight from India to Barcelona or Valencia takes approximately 20–24 days via Suez. FOB Chennai and FOB Mundra available. Air freight samples to Madrid or Barcelona typically arrive within 5–7 business days.",
    popularProductSlugs: [
      "coorg-arabica",
      "chikmagalur-arabica",
      "chirang-robusta-naturals",
      "koraput-commercial-aaa",
      "koraput-commercial-aa",
    ],
    faqs: [
      {
        q: "Is Indian Arabica suitable for the Spanish espresso market?",
        a: "Yes — South Indian Arabica from Coorg and Chikmagalur (full body, mild acidity, chocolate notes) is particularly well-matched to Spanish espresso preferences. It is lower in acidity than Central American or Ethiopian lots and holds up well through milk drinks.",
      },
    ],
  },
  {
    slug: "united-kingdom",
    name: "United Kingdom",
    flag: "🇬🇧",
    currency: "GBP",
    metaTitle: "Buy Indian Green Coffee in the UK | Specialty Arabica Wholesale | Bulk Green Coffee",
    metaDescription:
      "Source Indian green coffee for UK roasters and importers — specialty Arabica from Koraput, Halflong, Chikmagalur, and Bababudangiri. Ship to Felixstowe or air freight to London. Samples available.",
    heroHeadline: "Indian Green Coffee for UK Specialty Roasters",
    heroSubtitle: "High-altitude Arabica from India's most distinctive origins — export-ready for the UK's world-leading specialty coffee scene.",
    marketContext:
      "The UK has one of the world's most developed specialty coffee markets, led by London but expanding rapidly into Manchester, Edinburgh, Bristol, and beyond. UK buyers are origin-curious, SCA-literate, and actively seeking origins that differentiate their menus from the Ethiopian/Colombian mainstream. Indian coffee — particularly Halflong SL-9 and Koraput Naturals — offers exactly that differentiation, and is already appearing on menus at some of the UK's most respected specialty roasters.",
    importNote:
      "Post-Brexit, the UK has its own import duty framework. Indian green coffee (HS 0901.11.00) benefits from the UK's DCTS (Developing Countries Trading Scheme) which provides preferential duty rates for India — currently 0% for unroasted coffee. Your UK customs agent will handle clearance at Felixstowe or Tilbury. We provide full UK customs documentation.",
    shippingNote:
      "Sea freight from India to Felixstowe takes approximately 22–26 days. Air freight to Heathrow available for samples and urgent orders (5–7 business days). FOB Chennai / FOB Mundra pricing available. We can also consolidate UK-bound orders with a European freight forwarder if preferred.",
    popularProductSlugs: [
      "halflong-arabica-naturals",
      "bababudangiri-arabica",
      "koraput-naturals",
      "koraput-hsd",
      "koraput-washed",
    ],
    faqs: [
      {
        q: "Is Indian green coffee popular in the UK specialty scene?",
        a: "It's growing. A handful of UK roasters — including some in London — already feature Indian origins, particularly Araku Valley and South India lots. Our Halflong SL-9 (89 SCA) and Bababudangiri (86 SCA, mythical origin story) are the most distinctive lots we supply for the UK specialty market.",
      },
      {
        q: "What duty do I pay on Indian green coffee in the UK?",
        a: "Under the UK DCTS (Developing Countries Trading Scheme), India qualifies for 0% import duty on unroasted green coffee (HS 0901.11.00). We recommend confirming current rates with your UK customs agent or HMRC.",
      },
    ],
  },
  {
    slug: "ireland",
    name: "Ireland",
    flag: "🇮🇪",
    currency: "EUR",
    metaTitle: "Buy Indian Green Coffee in Ireland | Wholesale Arabica Supplier | Bulk Green Coffee",
    metaDescription:
      "Source Indian green coffee for Ireland — specialty Arabica and commercial grades from India's top growing regions. Ship to Dublin. EU import documentation complete. Samples available.",
    heroHeadline: "Indian Green Coffee for Irish Roasters and Importers",
    heroSubtitle: "Specialty and commercial Indian Arabica — export-ready for Ireland's fast-growing specialty coffee market.",
    marketContext:
      "Ireland's coffee culture has grown significantly over the past decade, with Dublin now home to dozens of quality-focused independent roasters and cafés. Irish buyers are increasingly sophisticated and open to exploring origins beyond the familiar Ethiopian/Colombian axis. India offers single-origin storytelling with a genuine ethical dimension — tribal farmers, shade-grown cultivation, and emerging specialty lots that are rarely featured on Irish menus.",
    importNote:
      "Ireland is an EU member — Indian green coffee enters under EU HS code 0901.11.00 with 0% duty under GSP. Dublin Port is the primary entry point. We supply full EU customs documentation for clearance.",
    shippingNote:
      "Sea freight from India to Dublin (typically via Rotterdam or Felixstowe) takes approximately 24–28 days. Air freight samples to Dublin Airport within 5–7 business days. FOB Chennai / FOB Mundra available.",
    popularProductSlugs: [
      "koraput-naturals",
      "halflong-arabica-naturals",
      "chikmagalur-arabica",
      "koraput-washed",
      "koraput-hsd",
    ],
    faqs: [
      {
        q: "Can I order a sample pack before committing to a bulk shipment?",
        a: "Yes — we send 250–500g sample packs by air to Ireland before any bulk commitment. Contact us via WhatsApp or the contact form with your origin preferences and we'll dispatch within 5 business days.",
      },
    ],
  },
  {
    slug: "uae",
    name: "UAE",
    flag: "🇦🇪",
    currency: "AED",
    metaTitle: "Buy Indian Green Coffee in UAE | Dubai Coffee Importer | Bulk Green Coffee",
    metaDescription:
      "Source Indian green coffee for UAE — specialty and commercial Arabica from Koraput, Chikmagalur, and South India. Ship to Jebel Ali (Dubai). Wholesale pricing for roasters and hospitality buyers.",
    heroHeadline: "Indian Green Coffee for UAE Roasters and Hospitality Buyers",
    heroSubtitle: "Premium Indian Arabica for Dubai's booming specialty coffee scene — export-ready, fully documented, fast transit via Jebel Ali.",
    marketContext:
      "The UAE — and Dubai in particular — has become one of the world's most important coffee markets. The specialty coffee boom in Dubai, Abu Dhabi, and Sharjah has created strong demand from roasters, café groups, hotel chains, and hospitality buyers. India is geographically close to the UAE (approximately 6 days sea freight), which means fresher green coffee, lower freight costs, and faster replenishment cycles compared to African or Latin American origins.",
    importNote:
      "The UAE imports green coffee with 0% customs duty under most trade agreements. Jebel Ali (Dubai) is the UAE's primary port for Indian green coffee imports. We provide phytosanitary certificates, fumigation certificates, and a certificate of origin (COO) for UAE customs clearance. Halal certification is not required for green (unroasted) coffee but can be provided on request.",
    shippingNote:
      "Sea freight from Chennai or Mundra to Jebel Ali takes approximately 5–7 days — one of the shortest transit times for any green coffee export destination. This means you can maintain lower stock levels and order more frequently. Air freight is available for same-week delivery on sample orders.",
    popularProductSlugs: [
      "coorg-arabica",
      "chikmagalur-arabica",
      "koraput-commercial-aaa",
      "koraput-commercial-aa",
      "wayanad-arabica",
    ],
    faqs: [
      {
        q: "How quickly can you ship green coffee to Dubai?",
        a: "Sea freight from Indian ports to Jebel Ali (Dubai) is approximately 5–7 days — among the fastest origin-to-market times in the world for green coffee. Air freight is available for samples or urgent orders, typically arriving within 48–72 hours.",
      },
      {
        q: "Do you supply to hotel groups and hospitality buyers in the UAE?",
        a: "Yes — we work with hospitality procurement teams across the Middle East. For hotel groups and café chains requiring consistency across multiple outlets, we can supply commercial AA/AAA or South India Arabica lots with a commitment to consistent quality across repeat orders.",
      },
      {
        q: "Is a certificate of origin required for UAE customs?",
        a: "Yes — we provide a certificate of origin (COO) for all UAE-bound shipments along with phytosanitary and fumigation certificates. If your bank requires a letter of credit (LC), we can accommodate that for larger orders.",
      },
    ],
  },
  {
    slug: "saudi-arabia",
    name: "Saudi Arabia",
    flag: "🇸🇦",
    currency: "SAR",
    metaTitle: "Buy Indian Green Coffee in Saudi Arabia | Wholesale Arabica Supplier | Bulk Green Coffee",
    metaDescription:
      "Source Indian green coffee for Saudi Arabia — specialty and commercial Arabica from South India, Koraput, and Assam. Ship to Jeddah or Dammam. Wholesale pricing for roasters and hospitality buyers.",
    heroHeadline: "Indian Green Coffee for Saudi Roasters and Hospitality Buyers",
    heroSubtitle: "Premium Indian Arabica for Saudi Arabia's rapidly growing specialty coffee market — fully documented, shipped via Jeddah.",
    marketContext:
      "Saudi Arabia is one of the world's fastest-growing specialty coffee markets. The Kingdom's Vision 2030 diversification has supercharged the café sector — Riyadh and Jeddah now host hundreds of specialty cafés, and domestic coffee culture (including traditional Qahwa Arabic coffee) creates strong institutional demand. India's geographic proximity means short transit times, competitive freight costs, and the ability to order in smaller, more frequent lots.",
    importNote:
      "Saudi Arabia imports green coffee with low or zero duty under GCC trade rules for products of Indian origin. Jeddah Islamic Port (for western Saudi) and Dammam port (for eastern Saudi/Riyadh) are the main entry points. We provide SASO-compliant documentation, phytosanitary certificates, and certificates of origin. Halal certification for green (unprocessed) coffee is generally not required but we can provide a declaration on request.",
    shippingNote:
      "Sea freight from Chennai or Mundra to Jeddah takes approximately 7–10 days. Dammam (for Riyadh/Eastern Province) is approximately the same transit. Much shorter than any African or Latin American origin. Air freight available for samples or urgent orders.",
    popularProductSlugs: [
      "chikmagalur-arabica",
      "coorg-arabica",
      "koraput-commercial-aaa",
      "koraput-commercial-aa",
      "wayanad-arabica",
    ],
    faqs: [
      {
        q: "Which Indian Arabica is best suited for Saudi café culture?",
        a: "South Indian Arabica from Chikmagalur and Coorg — full body, mild acidity, chocolate notes — works well for both espresso-based drinks and filter coffee. For traditional Qahwa blending, lighter-roasted commercial AA or AAA is a good base. Contact us to discuss your specific cup requirements.",
      },
      {
        q: "Can you supply to Riyadh, Jeddah, and Dammam?",
        a: "Yes — we ship to both Jeddah Islamic Port and King Abdulaziz Port in Dammam. Your freight forwarder or customs agent in Saudi Arabia handles port clearance. We provide all required Indian export documentation.",
      },
    ],
  },
  {
    slug: "usa",
    name: "USA",
    flag: "🇺🇸",
    currency: "USD",
    metaTitle: "Buy Indian Green Coffee in the USA | Wholesale Arabica Import | Bulk Green Coffee",
    metaDescription:
      "Source Indian green coffee for US roasters and importers — specialty Arabica from Koraput, Halflong, Chikmagalur, and Bababudangiri. Ship to Los Angeles, New York. Specialty and commercial grades.",
    heroHeadline: "Indian Green Coffee for US Specialty Roasters and Importers",
    heroSubtitle: "Rare Indian Arabica origins for America's specialty coffee market — the undiscovered origin with the flavour profiles your customers will talk about.",
    marketContext:
      "The United States is the world's largest consumer of specialty coffee and home to thousands of independent roasters actively searching for unique, traceable origins. Indian coffee remains vastly underrepresented in the US green coffee market — which is precisely the opportunity. High-altitude lots from Halflong (SL-9, 89 SCA) and tribal-grown Koraput (Natural, HSD, Washed, 85–88 SCA) offer US roasters a genuinely unusual origin with compelling stories and cup profiles that are unfamiliar to US consumers.",
    importNote:
      "Indian green coffee enters the US under HTS code 0901.11.00.00. Current US import duty on Indian unroasted green coffee is 0% under the US unilateral preference program. FDA Prior Notice is required before importation. Your US customs broker will handle FDA registration and CBP entry. We provide phytosanitary certificates, fumigation reports, and all required Indian export documentation.",
    shippingNote:
      "Sea freight from India to Los Angeles (via Suez) takes approximately 22–26 days. East Coast (New York/New Jersey) is 24–28 days. Air freight to any US airport available for sample orders — typically 5–7 business days from India.",
    popularProductSlugs: [
      "halflong-arabica-naturals",
      "bababudangiri-arabica",
      "koraput-naturals",
      "koraput-hsd",
      "chikmagalur-arabica",
    ],
    faqs: [
      {
        q: "Is Indian specialty coffee available in the US market?",
        a: "Very rarely — which is why US roasters who have featured Indian origins (Araku Valley in particular) have found strong customer interest. Our Halflong SL-9 (89 SCA) and Bababudangiri (86 SCA, India's mythical coffee birthplace) are the strongest differentiators for US specialty menus.",
      },
      {
        q: "What documentation do I need to import green coffee into the USA?",
        a: "Your US customs broker will file a CBP entry and FDA Prior Notice. You need the commercial invoice, packing list, bill of lading, and phytosanitary certificate from India. We provide all Indian export documents. Fumigation certificates are required and we supply these as standard.",
      },
    ],
  },
  {
    slug: "australia",
    name: "Australia",
    flag: "🇦🇺",
    currency: "AUD",
    metaTitle: "Buy Indian Green Coffee in Australia | Specialty Arabica Wholesale | Bulk Green Coffee",
    metaDescription:
      "Source Indian green coffee for Australia — specialty and commercial Arabica from South India, Koraput, and Assam. Ship to Melbourne, Sydney. AQIS biosecurity compliant. Samples available.",
    heroHeadline: "Indian Green Coffee for Australian Roasters and Importers",
    heroSubtitle: "Premium Indian Arabica origins — export-ready for Australia's world-class specialty coffee market.",
    marketContext:
      "Australia is home to one of the world's most sophisticated café cultures — Melbourne and Sydney are internationally recognised as specialty coffee capitals. Australian buyers are highly discerning, accustomed to exceptional Ethiopian and Central American lots, and increasingly interested in Asian-Pacific origins. Indian coffee occupies a unique geographic and cultural position for Australian buyers — geographically close, ethically compelling, and flavour-forward in a way that surprises most Australian specialty palates.",
    importNote:
      "Australia has strict biosecurity rules administered by DAFF (Department of Agriculture, Fisheries and Forestry). Green coffee must be accompanied by a valid phytosanitary certificate from India and may be subject to AQIS inspection on arrival. Fumigation certificates are recommended. Indian green coffee benefits from 0% Australian import duty. Your Australian customs broker must lodge the DAFF import permit.",
    shippingNote:
      "Sea freight from India to Melbourne or Sydney takes approximately 14–18 days — one of the shortest transit routes for Indian green coffee, given geographic proximity. Air freight available for sample orders (5–7 days). Strict AQIS biosecurity means all documentation must be complete before arrival.",
    popularProductSlugs: [
      "halflong-arabica-naturals",
      "koraput-naturals",
      "koraput-hsd",
      "bababudangiri-arabica",
      "wayanad-arabica",
    ],
    faqs: [
      {
        q: "Does Indian green coffee need fumigation for Australian biosecurity?",
        a: "AQIS requires a phytosanitary certificate for all green coffee imports. Fumigation certification is recommended and helps avoid hold-ups at the port. We provide both as standard with every export shipment.",
      },
    ],
  },
  {
    slug: "japan",
    name: "Japan",
    flag: "🇯🇵",
    currency: "JPY",
    metaTitle: "Buy Indian Green Coffee in Japan | Specialty Arabica Wholesale | Bulk Green Coffee",
    metaDescription:
      "Source Indian green coffee for Japan — specialty Arabica from Koraput, Halflong, and South India. Ship to Osaka, Tokyo. Specialty and commercial grades. Samples available on request.",
    heroHeadline: "Indian Green Coffee for Japanese Specialty Roasters",
    heroSubtitle: "Distinctive Indian Arabica — Natural, Washed, and Honey process — for Japan's world-leading specialty coffee culture.",
    marketContext:
      "Japan has one of the world's most refined coffee cultures — known for precision roasting, meticulous brewing, and a deep appreciation for origin nuance. Indian coffee is still relatively rare in Japan's specialty market, making it a significant differentiation opportunity. The Halflong SL-9 Naturals (89 SCA) and Bababudangiri Arabica (India's mythical coffee origin) are the kind of rare, story-driven origins that Japanese specialty buyers and their customers respond strongly to.",
    importNote:
      "Japan imports green coffee under HS code 0901.11.00 with a reduced preferential duty rate for Indian origin under Japan's GSP. Your Japanese customs agent will handle clearance at Osaka or Tokyo. We provide phytosanitary, fumigation, and certificate of origin documentation for Japanese customs.",
    shippingNote:
      "Sea freight from India to Osaka or Yokohama takes approximately 14–18 days. Air freight to Narita or Kansai available for sample orders (5–7 days). Japanese buyers often order samples multiple times before committing to a bulk lot — we encourage this process.",
    popularProductSlugs: [
      "halflong-arabica-naturals",
      "bababudangiri-arabica",
      "koraput-washed",
      "koraput-hsd",
      "koraput-naturals",
    ],
    faqs: [
      {
        q: "Do you supply documentation in Japanese?",
        a: "Our export documentation is in English, which is the international standard for green coffee trade. Japanese customs agents work with English-language phytosanitary and commercial documents. We are happy to provide translated product descriptions for your Japanese marketing materials on request.",
      },
    ],
  },
  {
    slug: "singapore",
    name: "Singapore",
    flag: "🇸🇬",
    currency: "SGD",
    metaTitle: "Buy Indian Green Coffee in Singapore | Specialty Arabica Wholesale | Bulk Green Coffee",
    metaDescription:
      "Source Indian green coffee for Singapore — specialty and commercial Arabica from Koraput, Halflong, and South India. Short transit from India. Wholesale pricing for roasters and distributors.",
    heroHeadline: "Indian Green Coffee for Singapore's Specialty Coffee Market",
    heroSubtitle: "Premium Indian Arabica, delivered to Singapore in 7–10 days — one of the world's shortest origin-to-roaster routes.",
    marketContext:
      "Singapore is Southeast Asia's most developed specialty coffee market, with a concentration of world-class independent roasters, SCA-certified buyers, and a café culture that rivals any European city. Singapore's position as a regional trading hub also makes it an ideal re-export point for Indian green coffee destined for Malaysia, Indonesia, and the rest of ASEAN. Freight from India to Singapore is among the shortest in the world — 7–10 days by sea — enabling high inventory turns and frequent ordering.",
    importNote:
      "Singapore applies 0% import duty on green coffee. Singapore Food Agency (SFA) handles food import permits. Green coffee requires a phytosanitary certificate from India and SFA import permit. No GST is applicable on green (unprocessed) coffee at import. Your Singapore freight forwarder handles port clearance at PSA.",
    shippingNote:
      "Sea freight from Chennai or Mundra to Singapore takes approximately 7–10 days — among the fastest routes for Indian green coffee. Air freight available for same-week delivery on sample orders. Singapore's PSA port is highly efficient with predictable clearance times.",
    popularProductSlugs: [
      "halflong-arabica-naturals",
      "koraput-naturals",
      "koraput-hsd",
      "chikmagalur-arabica",
      "wayanad-arabica",
    ],
    faqs: [
      {
        q: "Can I use Singapore as a hub for distributing Indian green coffee across Southeast Asia?",
        a: "Yes — many regional distributors use Singapore as a bonded storage hub for re-exporting to Malaysia, Indonesia, and other ASEAN markets. We can supply in larger lots for Singapore-based distributors and work with your local freight forwarder on warehousing arrangements.",
      },
    ],
  },
  {
    slug: "canada",
    name: "Canada",
    flag: "🇨🇦",
    currency: "CAD",
    metaTitle: "Buy Indian Green Coffee in Canada | Wholesale Arabica Supplier | Bulk Green Coffee",
    metaDescription:
      "Source Indian green coffee for Canada — specialty Arabica from Koraput, Halflong, and South India. Ship to Vancouver, Montreal, Toronto. Wholesale pricing for roasters and importers.",
    heroHeadline: "Indian Green Coffee for Canadian Specialty Roasters",
    heroSubtitle: "Rare, traceable Indian Arabica for Canada's growing specialty coffee market.",
    marketContext:
      "Canada has a rapidly growing specialty coffee culture, led by Vancouver (with its Asian-Pacific coffee influences), Montreal, and Toronto. Canadian buyers are origin-curious and increasingly interested in Asian coffee origins. Indian green coffee — particularly tribal-grown lots from Koraput and the rare Halflong SL-9 Naturals — offers Canadian roasters an origin that is virtually absent from the Canadian specialty market, giving an immediate differentiation advantage.",
    importNote:
      "Canada imports green coffee under HS code 0901.11.00 with 0% duty under Canada's GPT (General Preferential Tariff) for India. CFIA import permits and phytosanitary certificates are required. Your Canadian customs broker handles clearance at Vancouver or Montreal. We provide all Indian export documentation.",
    shippingNote:
      "Sea freight from India to Vancouver takes approximately 20–25 days (Pacific route). Montreal/Toronto via Atlantic route is approximately 22–28 days. Air freight samples available within 5–7 business days.",
    popularProductSlugs: [
      "halflong-arabica-naturals",
      "koraput-naturals",
      "bababudangiri-arabica",
      "chikmagalur-arabica",
      "koraput-washed",
    ],
    faqs: [
      {
        q: "What documentation is required to import green coffee into Canada?",
        a: "You need a CFIA import permit, phytosanitary certificate from India, commercial invoice, and packing list. Your Canadian customs broker handles the CBSA entry. We supply all required Indian export documentation including fumigation certificate.",
      },
    ],
  },
];

export const stateDestinations: StateDestination[] = [
  {
    slug: "maharashtra",
    name: "Maharashtra",
    metaTitle: "Buy Indian Green Coffee in Maharashtra | Mumbai Wholesale Arabica | Bulk Green Coffee",
    metaDescription:
      "Source Indian green coffee in Maharashtra — specialty and commercial Arabica from Koraput, Halflong, and South India. Wholesale pricing for Mumbai roasters, café chains, and institutional buyers.",
    heroHeadline: "Indian Green Coffee Wholesale in Maharashtra",
    heroSubtitle: "Direct sourcing from India's top coffee origins — delivered to Mumbai, Pune, Nagpur, and across Maharashtra.",
    marketContext:
      "Maharashtra is home to India's largest café market by volume, anchored by Mumbai's dense hospitality sector, Pune's growing café culture, and Nagpur's institutional demand. The state hosts major coffee chains, independent specialty roasters, and a large hotel industry — all of which source green coffee in bulk. As a direct exporter working with tribal farmers in Odisha, Assam, and Arunachal Pradesh, we can supply Maharashtra buyers with origins and traceability that commodity traders cannot match.",
    popularProductSlugs: [
      "koraput-commercial-aaa",
      "koraput-commercial-aa",
      "chikmagalur-arabica",
      "koraput-naturals",
      "koraput-peaberry",
    ],
    faqs: [
      {
        q: "Do you deliver green coffee to Mumbai and Pune?",
        a: "Yes — we supply green coffee across Maharashtra. Delivery by road from our warehousing partners or directly from origin. MOQ from 10 kg for specialty lots and 60 kg for commercial grade. GST invoice provided.",
      },
      {
        q: "Do you provide GST invoices for Maharashtra buyers?",
        a: "Yes — Gray Cup Enterprises Private Limited is GST registered (06AAMCG4985H1Z4) and provides valid GST tax invoices for all India domestic orders.",
      },
    ],
  },
  {
    slug: "karnataka",
    name: "Karnataka",
    metaTitle: "Buy Green Coffee Wholesale in Karnataka | Bangalore Arabica Supplier | Bulk Green Coffee",
    metaDescription:
      "Source Indian green coffee in Karnataka — specialty Arabica from Koraput, Halflong, and local South India origins. Wholesale for Bangalore roasters, café chains, and blenders.",
    heroHeadline: "Green Coffee Wholesale in Karnataka",
    heroSubtitle: "Supply your Bangalore roastery or café chain with traceable Indian Arabica from Koraput, Halflong, and across South India.",
    marketContext:
      "Karnataka is both the heartland of Indian coffee production (Chikmagalur, Coorg, Bababudangiri) and home to India's most vibrant specialty café scene in Bangalore. Karnataka-based buyers — from Third Wave to small independent roasters — have the most access to fresh Indian green coffee. We work directly with tribal farms in Odisha and Assam, offering Karnataka buyers access to origins beyond their local South India sourcing, while also supplying South India lots for buyers who prefer local traceability.",
    popularProductSlugs: [
      "chikmagalur-arabica",
      "coorg-arabica",
      "bababudangiri-arabica",
      "koraput-naturals",
      "halflong-arabica-naturals",
    ],
    faqs: [
      {
        q: "Can you supply Arabica from outside South India to Karnataka buyers?",
        a: "Yes — Karnataka roasters often want to diversify beyond South India origins. Our Koraput Naturals (Odisha), Halflong SL-9 (Assam), and commercial AA/AAA from Odisha are popular with Bangalore roasters looking to expand their single-origin menu.",
      },
    ],
  },
  {
    slug: "delhi",
    name: "Delhi / NCR",
    metaTitle: "Buy Indian Green Coffee in Delhi NCR | Wholesale Arabica Supplier | Bulk Green Coffee",
    metaDescription:
      "Source green coffee wholesale in Delhi NCR — specialty and commercial Arabica from Koraput, Halflong, and South India. Delivered to Delhi, Gurgaon, Noida. GST invoice provided.",
    heroHeadline: "Green Coffee Wholesale in Delhi NCR",
    heroSubtitle: "Traceable Indian Arabica for Delhi's growing café culture — from specialty roasters to institutional hospitality buyers.",
    marketContext:
      "Delhi NCR is India's second-largest café market, with a rapidly expanding specialty coffee culture in South Delhi, Gurgaon, and Noida alongside massive institutional demand from hotels, corporate campuses, and food service chains. Delhi-based buyers often source from South Indian traders — but direct access to Odisha's tribal Arabica (Koraput) and North East India origins (Halflong) offers a compelling local sourcing narrative for the Delhi market.",
    popularProductSlugs: [
      "koraput-commercial-aaa",
      "koraput-commercial-aa",
      "koraput-naturals",
      "chikmagalur-arabica",
      "halflong-arabica-naturals",
    ],
    faqs: [
      {
        q: "Is Gray Cup Enterprises registered in Delhi?",
        a: "Our registered address is in Sonipat, Haryana (near Delhi NCR): FF122, Rodeo Drive Mall, GT Road, TDI City, Kundli, Sonipat, Haryana 131030. We supply Delhi NCR buyers directly with GST invoices.",
      },
    ],
  },
  {
    slug: "tamil-nadu",
    name: "Tamil Nadu",
    metaTitle: "Buy Green Coffee Wholesale in Tamil Nadu | Chennai Arabica Supplier | Bulk Green Coffee",
    metaDescription:
      "Source Indian green coffee in Tamil Nadu — specialty and commercial Arabica from Koraput, South India, and Assam. Wholesale for Chennai roasters, filter coffee brands, and institutional buyers.",
    heroHeadline: "Green Coffee Wholesale in Tamil Nadu",
    heroSubtitle: "From traditional filter coffee bases to specialty single-origin lots — supplying Chennai and Tamil Nadu's roasters and café chains.",
    marketContext:
      "Tamil Nadu has one of India's richest coffee traditions — the South Indian filter coffee culture is rooted in this state, with a massive institutional market for commercial Arabica and Robusta blends. Chennai is also home to a growing specialty coffee scene. Tamil Nadu buyers range from traditional filter coffee manufacturers requiring AAA/AA commercial grade at volume, to new-wave roasters seeking traceable single-origin lots for their café menus.",
    popularProductSlugs: [
      "koraput-commercial-aaa",
      "koraput-commercial-aa",
      "chirang-robusta-naturals",
      "chikmagalur-arabica",
      "koraput-naturals",
    ],
    faqs: [
      {
        q: "Do you supply Robusta for filter coffee blending in Tamil Nadu?",
        a: "Yes — we stock CxR Robusta from Chirang (Assam) and Tirap (Arunachal Pradesh), both natural-process. These are suitable for South Indian filter coffee blends where Robusta provides body and caffeine. Available from 10 kg.",
      },
    ],
  },
  {
    slug: "kerala",
    name: "Kerala",
    metaTitle: "Buy Green Coffee Wholesale in Kerala | Wayanad Arabica Supplier | Bulk Green Coffee",
    metaDescription:
      "Source green coffee wholesale in Kerala — Wayanad Arabica, specialty lots from Koraput and Halflong, and commercial grades. Wholesale for Kochi and Kerala roasters and café chains.",
    heroHeadline: "Green Coffee Wholesale in Kerala",
    heroSubtitle: "Local Wayanad Arabica and rare out-of-state origins — supplying Kerala's roasters, cafés, and filter coffee brands.",
    marketContext:
      "Kerala is one of India's top three coffee-producing states and has its own thriving café market in Kochi, Thiruvananthapuram, and Kozhikode. Kerala-based buyers have direct access to Wayanad Arabica — but through us they also gain access to Koraput tribal Arabica (Odisha), Halflong SL-9 (Assam), and other origins that diversify their product menu. We also supply commercial AA/AAA for Kerala's large filter coffee and restaurant sector.",
    popularProductSlugs: [
      "wayanad-arabica",
      "koraput-naturals",
      "halflong-arabica-naturals",
      "koraput-commercial-aa",
      "chirang-robusta-naturals",
    ],
    faqs: [
      {
        q: "Can I source Wayanad green coffee directly through you?",
        a: "Yes — we supply Wayanad Arabica in AA, A, AB, and PB (Peaberry) grades from Kerala estates. Available in washed process with GrainPro packaging. Contact us for current lot details and pricing.",
      },
    ],
  },
  {
    slug: "telangana",
    name: "Telangana",
    metaTitle: "Buy Green Coffee Wholesale in Telangana | Hyderabad Arabica Supplier | Bulk Green Coffee",
    metaDescription:
      "Source Indian green coffee in Telangana — specialty and commercial Arabica from Koraput, South India, and Assam. Wholesale for Hyderabad roasters, café chains, and institutional buyers.",
    heroHeadline: "Green Coffee Wholesale in Telangana",
    heroSubtitle: "Specialty and commercial Indian Arabica for Hyderabad's growing café and hospitality sector.",
    marketContext:
      "Hyderabad has one of India's fastest-growing café sectors, driven by the city's large tech workforce and a rising coffee culture that spans both specialty cafés and corporate food service. Telangana-based buyers increasingly seek traceable, direct-sourced green coffee with verifiable origin stories — a need that Indian tribal and estate origins satisfy far better than anonymous commodity lots.",
    popularProductSlugs: [
      "koraput-commercial-aaa",
      "koraput-commercial-aa",
      "chikmagalur-arabica",
      "koraput-naturals",
      "koraput-peaberry",
    ],
    faqs: [
      {
        q: "Do you deliver to Hyderabad?",
        a: "Yes — we can deliver across Telangana. Contact us for logistics details and current lead times for Hyderabad delivery. MOQ from 10 kg for specialty lots and 60 kg for commercial grade.",
      },
    ],
  },
  {
    slug: "gujarat",
    name: "Gujarat",
    metaTitle: "Buy Green Coffee Wholesale in Gujarat | Ahmedabad Arabica Supplier | Bulk Green Coffee",
    metaDescription:
      "Source Indian green coffee in Gujarat — commercial and specialty Arabica from Koraput, South India, and Assam. Wholesale for Ahmedabad, Surat, and Vadodara roasters and institutional buyers.",
    heroHeadline: "Green Coffee Wholesale in Gujarat",
    heroSubtitle: "Commercial and specialty Indian Arabica for Gujarat's hospitality and institutional coffee buyers.",
    marketContext:
      "Gujarat is a major commercial and business hub with significant institutional demand for coffee across hotels, corporate canteens, and a growing café sector in Ahmedabad and Surat. Gujarat buyers typically prioritise consistency, competitive pricing, and reliable supply. Our commercial grade Koraput AA/AAA offers exactly that, while specialty buyers can access single-origin lots from Odisha, Assam, and South India that are not available through conventional commodity channels.",
    popularProductSlugs: [
      "koraput-commercial-aaa",
      "koraput-commercial-aa",
      "chikmagalur-arabica",
      "coorg-arabica",
      "chirang-robusta-naturals",
    ],
    faqs: [
      {
        q: "Can you supply commercial-grade green coffee to Gujarat in bulk?",
        a: "Yes — we supply Koraput AA and AAA commercial grade in 60 kg GrainPro jute bags, suitable for road transport to Gujarat. Contact us for bulk pricing and current availability.",
      },
    ],
  },
  {
    slug: "west-bengal",
    name: "West Bengal",
    metaTitle: "Buy Green Coffee Wholesale in West Bengal | Kolkata Arabica Supplier | Bulk Green Coffee",
    metaDescription:
      "Source Indian green coffee in West Bengal — specialty and commercial Arabica from Koraput, Assam, and South India. Wholesale for Kolkata roasters and café chains.",
    heroHeadline: "Green Coffee Wholesale in West Bengal",
    heroSubtitle: "Indian Arabica from nearby origins — Koraput (Odisha) and Assam — delivered to Kolkata's roasters and café sector.",
    marketContext:
      "Kolkata has a long café culture tradition and a rapidly modernising specialty coffee scene. West Bengal is geographically close to our primary East India and North East India sourcing regions — Koraput (Odisha) and Halflong (Assam) — which means shorter supply chains, fresher lots, and the opportunity to build direct relationships with origin communities in a way that Mumbai or Bangalore buyers cannot match as easily.",
    popularProductSlugs: [
      "koraput-naturals",
      "koraput-washed",
      "halflong-arabica-naturals",
      "koraput-commercial-aa",
      "chirang-robusta-naturals",
    ],
    faqs: [
      {
        q: "Is Kolkata a good entry point for East India and North East India coffee origins?",
        a: "Yes — West Bengal's geographic proximity to Odisha and Assam makes it a natural hub for sourcing our East India and North East India lots. Koraput (Odisha) is approximately 900 km from Kolkata, and Assam is even closer. We can facilitate road transport from origin to Kolkata.",
      },
    ],
  },
  {
    slug: "punjab",
    name: "Punjab",
    metaTitle: "Buy Green Coffee Wholesale in Punjab | Chandigarh Arabica Supplier | Bulk Green Coffee",
    metaDescription:
      "Source Indian green coffee in Punjab — commercial and specialty Arabica from Koraput, South India, and Assam. Wholesale for Chandigarh, Ludhiana, and Amritsar roasters and café chains.",
    heroHeadline: "Green Coffee Wholesale in Punjab",
    heroSubtitle: "Commercial and specialty Indian Arabica for Punjab's growing café market and institutional buyers.",
    marketContext:
      "Punjab's café culture has grown significantly in the past five years, particularly in Chandigarh, Ludhiana, and Amritsar. Both specialty cafés and large institutional buyers (hotels, colleges, corporate) drive demand for reliable green coffee. We supply Punjab buyers with commercial AA/AAA for high-volume needs and specialty Koraput and Halflong lots for roasters wanting to differentiate their menu.",
    popularProductSlugs: [
      "koraput-commercial-aaa",
      "koraput-commercial-aa",
      "chikmagalur-arabica",
      "koraput-naturals",
      "koraput-peaberry",
    ],
    faqs: [
      {
        q: "Do you deliver to Chandigarh, Ludhiana, and Amritsar?",
        a: "Yes — we deliver across Punjab. Our registered address is in Sonipat, Haryana (near Delhi NCR) which makes North India delivery straightforward. Contact us for logistics details.",
      },
    ],
  },
  {
    slug: "rajasthan",
    name: "Rajasthan",
    metaTitle: "Buy Green Coffee Wholesale in Rajasthan | Jaipur Arabica Supplier | Bulk Green Coffee",
    metaDescription:
      "Source Indian green coffee in Rajasthan — commercial and specialty Arabica from Koraput, South India, and Assam. Wholesale for Jaipur, Jodhpur, and Udaipur roasters and hospitality buyers.",
    heroHeadline: "Green Coffee Wholesale in Rajasthan",
    heroSubtitle: "Traceable Indian Arabica for Rajasthan's hospitality sector and growing café market.",
    marketContext:
      "Rajasthan's massive tourism and hospitality industry — anchored by Jaipur, Udaipur, Jodhpur, and Jaisalmer — creates substantial institutional demand for coffee across hotel groups, heritage properties, and restaurants. The state's growing café culture in Jaipur also drives specialty roaster demand. We supply both commercial-grade green coffee for institutional buyers and specialty lots for Rajasthan's independent roasters.",
    popularProductSlugs: [
      "koraput-commercial-aaa",
      "koraput-commercial-aa",
      "chikmagalur-arabica",
      "coorg-arabica",
      "koraput-naturals",
    ],
    faqs: [
      {
        q: "Do you supply to hotel groups in Rajasthan?",
        a: "Yes — we work with hospitality procurement teams for consistent commercial-grade supply. Koraput AAA and South India AA are the most popular grades for hotel coffee programmes. Contact us for institutional pricing and volume discounts.",
      },
    ],
  },
];

export function getCountryBySlug(slug: string): CountryDestination | undefined {
  return countryDestinations.find((c) => c.slug === slug);
}

export function getStateBySlug(slug: string): StateDestination | undefined {
  return stateDestinations.find((s) => s.slug === slug);
}
