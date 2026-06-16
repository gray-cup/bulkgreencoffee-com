export type IndiaCity = {
  city: string;
  citySlug: string;
  state: string;
  stateSlug: string;
  cityContext: string;
  industries: string[];
  nearbyAreas: string[];
  transitDays: string;
  moq: string;
  popularProductSlugs: string[];
  faqs: { question: string; answer: string }[];
  coordinates: { lat: number; lng: number };
};

export const indiaCities: IndiaCity[] = [
  // ── MAHARASHTRA ──────────────────────────────────────────────────────────────
  {
    city: "Mumbai",
    citySlug: "mumbai",
    state: "Maharashtra",
    stateSlug: "maharashtra",
    cityContext:
      "India's largest commercial city — home to hundreds of specialty cafés, hotel chains, HORECA distributors, and coffee roasters sourcing in bulk for the hospitality sector.",
    industries: ["Hospitality & Hotels", "Specialty Cafés", "Corporate Offices", "Food Service", "Coffee Roasters", "Retail Chains"],
    nearbyAreas: ["Thane", "Navi Mumbai", "Kalyan", "Panvel", "Vasai"],
    transitDays: "3–5 days",
    moq: "10 kg",
    popularProductSlugs: ["koraput-commercial-aaa", "koraput-commercial-aa", "chikmagalur-arabica", "koraput-naturals", "koraput-peaberry"],
    faqs: [
      {
        question: "How do you deliver green coffee to Mumbai?",
        answer: "We dispatch via road freight from our warehouse to Mumbai. Delivery to most Mumbai and Navi Mumbai addresses takes 3–5 business days. Minimum order is 10 kg for specialty lots and 60 kg for commercial grade.",
      },
      {
        question: "Which Indian green coffee grades are most popular with Mumbai roasters?",
        answer: "Mumbai's specialty roasters favour Koraput Naturals, Koraput HSD, and Halflong SL-9 for single-origin menus. Commercial buyers and HORECA distributors prefer Koraput AA/AAA for consistent blending.",
      },
      {
        question: "Do you supply to cafés and hotels in Mumbai directly?",
        answer: "Yes — we supply green (unroasted) coffee to roasters who then supply cafés and hotels. If you run a roastery or are a distributor supplying the HORECA sector, we can work directly with you.",
      },
    ],
    coordinates: { lat: 19.076, lng: 72.8777 },
  },
  {
    city: "Pune",
    citySlug: "pune",
    state: "Maharashtra",
    stateSlug: "maharashtra",
    cityContext:
      "Pune's booming café culture and large tech-campus population drive strong demand for specialty green coffee from roasters, café chains, and corporate food service operators.",
    industries: ["Specialty Cafés", "Corporate Campuses", "Hotels", "Food Service", "Coffee Roasters"],
    nearbyAreas: ["Pimpri-Chinchwad", "Hinjewadi", "Kothrud", "Viman Nagar"],
    transitDays: "3–5 days",
    moq: "10 kg",
    popularProductSlugs: ["koraput-naturals", "koraput-hsd", "chikmagalur-arabica", "halflong-arabica-naturals", "koraput-peaberry"],
    faqs: [
      {
        question: "Can I buy specialty green coffee in Pune in small trial quantities?",
        answer: "Yes — specialty lots start from 10 kg, ideal for Pune roasters trialling a new origin. We also send 250–500g sample packs before any bulk order. Contact us on WhatsApp.",
      },
      {
        question: "How long does delivery to Pune take?",
        answer: "Road freight from our dispatch point to Pune typically takes 3–5 business days. We coordinate directly with the freight partner once your order is confirmed.",
      },
    ],
    coordinates: { lat: 18.5204, lng: 73.8567 },
  },
  {
    city: "Nagpur",
    citySlug: "nagpur",
    state: "Maharashtra",
    stateSlug: "maharashtra",
    cityContext:
      "Nagpur's central India location makes it a distribution hub. Strong institutional demand from government offices, colleges, and the growing hospitality sector drives bulk coffee sourcing.",
    industries: ["Government Offices", "Educational Institutions", "Hotels", "Food Service", "Distributors"],
    nearbyAreas: ["Wardha", "Amravati", "Chandrapur", "Yavatmal"],
    transitDays: "4–6 days",
    moq: "10 kg",
    popularProductSlugs: ["koraput-commercial-aaa", "koraput-commercial-aa", "chikmagalur-arabica", "coorg-arabica"],
    faqs: [
      {
        question: "Do you supply commercial grade green coffee to Nagpur?",
        answer: "Yes — Koraput AA and AAA commercial grade are available for delivery to Nagpur. MOQ 60 kg for commercial grade. GST invoice provided for all domestic orders.",
      },
    ],
    coordinates: { lat: 21.1458, lng: 79.0882 },
  },

  // ── KARNATAKA ──────────────────────────────────────────────────────────────
  {
    city: "Bengaluru",
    citySlug: "bengaluru",
    state: "Karnataka",
    stateSlug: "karnataka",
    cityContext:
      "India's specialty coffee capital — Bengaluru hosts the country's most sophisticated roasters, baristas, and café culture. The city is where Indian specialty coffee was invented for modern consumers.",
    industries: ["Specialty Cafés", "Coffee Roasters", "Tech Campuses", "Hotels", "Exporters", "Barista Training"],
    nearbyAreas: ["Whitefield", "Koramangala", "Indiranagar", "HSR Layout", "Electronic City"],
    transitDays: "2–4 days",
    moq: "10 kg",
    popularProductSlugs: ["halflong-arabica-naturals", "koraput-naturals", "koraput-hsd", "bababudangiri-arabica", "chikmagalur-arabica"],
    faqs: [
      {
        question: "Which Indian origins are most popular with Bengaluru specialty roasters?",
        answer: "Bengaluru roasters most commonly request Koraput Naturals, Halflong SL-9, Koraput HSD, and Bababudangiri Arabica for their single-origin and seasonal menus. We also supply South India AA/AAA for commercial buyers.",
      },
      {
        question: "Can you deliver green coffee to specific areas in Bengaluru?",
        answer: "Yes — we deliver to Koramangala, Indiranagar, Whitefield, HSR Layout, and all Bengaluru areas via road freight. Delivery typically takes 2–4 business days from dispatch.",
      },
      {
        question: "Do you source from South India estates directly?",
        answer: "Yes — our Chikmagalur, Coorg, Wayanad, and Bababudangiri lots are sourced directly from Karnataka and Kerala estates. Bengaluru roasters buying South India origins get the shortest supply chain.",
      },
    ],
    coordinates: { lat: 12.9716, lng: 77.5946 },
  },
  {
    city: "Mysuru",
    citySlug: "mysuru",
    state: "Karnataka",
    stateSlug: "karnataka",
    cityContext:
      "Mysuru's proximity to Coorg and Chikmagalur makes it a natural hub for South India green coffee. Strong heritage hospitality sector and growing café culture drive local demand.",
    industries: ["Heritage Hotels", "Specialty Cafés", "Hospitality", "Government Offices", "Coffee Estate Buyers"],
    nearbyAreas: ["Hunsur", "Kushalnagar", "Srirangapatna", "Mandya"],
    transitDays: "2–3 days",
    moq: "10 kg",
    popularProductSlugs: ["chikmagalur-arabica", "coorg-arabica", "bababudangiri-arabica", "koraput-peaberry"],
    faqs: [
      {
        question: "Can I source South India Arabica through you near Mysuru?",
        answer: "Yes — Coorg (Kodagu), Chikmagalur, and Bababudangiri are all within 100–200 km of Mysuru. We source from these estates and can deliver directly to your Mysuru address within 2–3 business days.",
      },
    ],
    coordinates: { lat: 12.2958, lng: 76.6394 },
  },

  // ── TAMIL NADU ──────────────────────────────────────────────────────────────
  {
    city: "Chennai",
    citySlug: "chennai",
    state: "Tamil Nadu",
    stateSlug: "tamil-nadu",
    cityContext:
      "Chennai has a deep filter coffee tradition and a rapidly growing specialty café market. Strong institutional demand from hotels, IT parks, and manufacturing sectors drives commercial and specialty green coffee sourcing.",
    industries: ["Filter Coffee Brands", "Hotels", "IT Parks", "Manufacturing", "Specialty Cafés", "Distributors"],
    nearbyAreas: ["Tambaram", "Sriperumbudur", "Poonamallee", "Kanchipuram", "Mahabalipuram"],
    transitDays: "3–5 days",
    moq: "10 kg",
    popularProductSlugs: ["koraput-commercial-aaa", "koraput-commercial-aa", "chikmagalur-arabica", "chirang-robusta-naturals", "koraput-naturals"],
    faqs: [
      {
        question: "Do you supply Arabica-Robusta blends for South Indian filter coffee in Chennai?",
        answer: "We supply both Arabica (Koraput AA/AAA, South India lots) and Robusta (Chirang CxR, Tirap CxR) as separate green coffee lots. Most Chennai filter coffee manufacturers blend 60–70% Arabica with 30–40% Robusta in-house.",
      },
      {
        question: "Is your green coffee suitable for filter coffee grinding in Chennai?",
        answer: "Yes — our commercial AA/AAA Arabica and CxR Robusta are both suitable as base beans for South Indian filter coffee blends. Contact us for grade recommendations based on your blend requirements.",
      },
    ],
    coordinates: { lat: 13.0827, lng: 80.2707 },
  },
  {
    city: "Coimbatore",
    citySlug: "coimbatore",
    state: "Tamil Nadu",
    stateSlug: "tamil-nadu",
    cityContext:
      "Coimbatore's strong manufacturing and textile economy creates large institutional canteen demand. The city also has a growing specialty café scene and direct road access to Kerala's Wayanad coffee estates.",
    industries: ["Textile Industry", "Manufacturing", "Hotels", "Educational Institutions", "Specialty Cafés"],
    nearbyAreas: ["Tiruppur", "Erode", "Pollachi", "Palakkad"],
    transitDays: "3–5 days",
    moq: "10 kg",
    popularProductSlugs: ["koraput-commercial-aa", "wayanad-arabica", "chikmagalur-arabica", "chirang-robusta-naturals"],
    faqs: [
      {
        question: "Can I source Wayanad Arabica through you for delivery to Coimbatore?",
        answer: "Yes — Wayanad (Kerala) is approximately 100 km from Coimbatore. We source Wayanad Arabica in AA, AB, and PB grades and can deliver to Coimbatore in 3–5 business days.",
      },
    ],
    coordinates: { lat: 11.0168, lng: 76.9558 },
  },

  // ── KERALA ──────────────────────────────────────────────────────────────────
  {
    city: "Kochi",
    citySlug: "kochi",
    state: "Kerala",
    stateSlug: "kerala",
    cityContext:
      "Kochi is Kerala's commercial capital — a port city with a thriving hospitality sector, specialty café scene, and strong institutional demand from IT parks and the tourism industry.",
    industries: ["Hospitality & Hotels", "Specialty Cafés", "IT Parks", "Port-Related Businesses", "Tourism", "Coffee Roasters"],
    nearbyAreas: ["Ernakulam", "Thrissur", "Aluva", "Perumbavoor", "Angamaly"],
    transitDays: "2–4 days",
    moq: "10 kg",
    popularProductSlugs: ["wayanad-arabica", "koraput-naturals", "halflong-arabica-naturals", "chikmagalur-arabica", "chirang-robusta-naturals"],
    faqs: [
      {
        question: "Can I source Wayanad Arabica directly through you in Kochi?",
        answer: "Yes — Wayanad is approximately 120 km from Kochi. We source Wayanad Arabica in multiple grades and can deliver to Kochi within 2–4 business days. Ideal for Kerala roasters and distributors wanting local origin traceability.",
      },
      {
        question: "Do you supply organic-certified Wayanad Arabica?",
        answer: "Organic-certified lots from Wayanad cooperatives are available on request. Documentation including the organic certificate can be provided. Contact us with your requirement.",
      },
    ],
    coordinates: { lat: 9.9312, lng: 76.2673 },
  },

  // ── DELHI NCR ──────────────────────────────────────────────────────────────
  {
    city: "New Delhi",
    citySlug: "new-delhi",
    state: "Delhi NCR",
    stateSlug: "delhi-ncr",
    cityContext:
      "India's capital and one of the world's largest hospitality markets — Delhi's hotel chains, corporate campuses, government institutions, and growing third-wave café scene create massive green coffee demand.",
    industries: ["Hotels & Hospitality", "Government Offices", "Corporate Campuses", "Specialty Cafés", "Distributors", "Exporters"],
    nearbyAreas: ["Gurgaon", "Noida", "Faridabad", "Ghaziabad", "Sonipat"],
    transitDays: "2–4 days",
    moq: "10 kg",
    popularProductSlugs: ["koraput-commercial-aaa", "koraput-commercial-aa", "koraput-naturals", "chikmagalur-arabica", "halflong-arabica-naturals"],
    faqs: [
      {
        question: "Is Gray Cup Enterprises based near Delhi?",
        answer: "Yes — our registered office is in Sonipat, Haryana, which is 45 km from New Delhi. This makes us one of the most geographically accessible Indian green coffee suppliers for Delhi NCR buyers.",
      },
      {
        question: "Can you deliver green coffee to specific Delhi addresses — Connaught Place, South Delhi, etc?",
        answer: "Yes — we deliver to all Delhi NCR areas including Connaught Place, South Delhi, Karol Bagh, Dwarka, and all NCR areas (Gurgaon, Noida, Faridabad). Delivery takes 2–4 business days from dispatch.",
      },
    ],
    coordinates: { lat: 28.6139, lng: 77.2090 },
  },
  {
    city: "Gurgaon",
    citySlug: "gurgaon",
    state: "Delhi NCR",
    stateSlug: "delhi-ncr",
    cityContext:
      "Gurgaon's concentration of Fortune 500 corporate campuses, luxury hotels, and a sophisticated café culture creates strong institutional and specialty green coffee demand.",
    industries: ["Corporate Campuses", "Luxury Hotels", "Specialty Cafés", "IT/ITES", "Food Service"],
    nearbyAreas: ["Manesar", "Sohna", "Faridabad", "Delhi", "Rewari"],
    transitDays: "2–3 days",
    moq: "10 kg",
    popularProductSlugs: ["koraput-commercial-aaa", "chikmagalur-arabica", "koraput-naturals", "halflong-arabica-naturals"],
    faqs: [
      {
        question: "Do you supply green coffee to corporate campuses in Gurgaon?",
        answer: "Yes — corporate procurement teams in Gurgaon can source directly from us. We supply both commercial AA/AAA for high-volume canteens and specialty lots for premium office café programmes. GST invoice provided.",
      },
    ],
    coordinates: { lat: 28.4595, lng: 77.0266 },
  },
  {
    city: "Noida",
    citySlug: "noida",
    state: "Delhi NCR",
    stateSlug: "delhi-ncr",
    cityContext:
      "Noida's large IT and media sector creates strong corporate coffee demand. Growing independent café scene also drives specialty roaster sourcing in the city.",
    industries: ["IT/ITES", "Media Companies", "Corporate Offices", "Specialty Cafés", "Malls & Retail"],
    nearbyAreas: ["Greater Noida", "Ghaziabad", "Delhi", "Faridabad"],
    transitDays: "2–3 days",
    moq: "10 kg",
    popularProductSlugs: ["koraput-commercial-aa", "chikmagalur-arabica", "koraput-naturals", "koraput-peaberry"],
    faqs: [
      {
        question: "How quickly can you deliver green coffee to Noida?",
        answer: "Noida is close to our Haryana base — delivery typically takes 2–3 business days. We deliver to Sector 18, Sector 62, Greater Noida, and all Noida areas.",
      },
    ],
    coordinates: { lat: 28.5355, lng: 77.3910 },
  },

  // ── TELANGANA ──────────────────────────────────────────────────────────────
  {
    city: "Hyderabad",
    citySlug: "hyderabad",
    state: "Telangana",
    stateSlug: "telangana",
    cityContext:
      "Hyderabad's massive IT sector, growing café culture, and strong hospitality industry make it one of India's fastest-growing green coffee markets for both commercial and specialty buyers.",
    industries: ["IT Campuses", "Hotels", "Specialty Cafés", "Pharma Industry", "Government", "Food Service"],
    nearbyAreas: ["Secunderabad", "Cyberabad", "Warangal", "Karimnagar", "Khammam"],
    transitDays: "3–5 days",
    moq: "10 kg",
    popularProductSlugs: ["koraput-commercial-aaa", "koraput-commercial-aa", "chikmagalur-arabica", "koraput-naturals", "koraput-peaberry"],
    faqs: [
      {
        question: "Which green coffee grades work best for Hyderabad's café sector?",
        answer: "Hyderabad's specialty cafés typically use Koraput Naturals, Koraput HSD, or South India Arabica for single-origin menus. Commercial espresso bars prefer AA/AAA commercial grade as a reliable, cost-efficient base.",
      },
      {
        question: "Do you supply to IT company campuses in Hyderabad?",
        answer: "Yes — corporate procurement teams can source commercial-grade green coffee for in-house roasting or work with their roaster partners. We supply GST invoices for all Telangana orders.",
      },
    ],
    coordinates: { lat: 17.3850, lng: 78.4867 },
  },

  // ── GUJARAT ──────────────────────────────────────────────────────────────
  {
    city: "Ahmedabad",
    citySlug: "ahmedabad",
    state: "Gujarat",
    stateSlug: "gujarat",
    cityContext:
      "Ahmedabad's strong business community and growing hospitality sector create steady demand for commercial green coffee. The city's position as Gujarat's commercial capital makes it a natural distribution hub.",
    industries: ["Textiles & Manufacturing", "Hotels", "Corporate Offices", "Food Service", "Distributors"],
    nearbyAreas: ["Gandhinagar", "Vadodara", "Surat", "Anand", "Mehsana"],
    transitDays: "4–6 days",
    moq: "10 kg",
    popularProductSlugs: ["koraput-commercial-aaa", "koraput-commercial-aa", "chikmagalur-arabica", "coorg-arabica"],
    faqs: [
      {
        question: "Can you supply commercial green coffee to Ahmedabad distributors?",
        answer: "Yes — we work with distributors in Gujarat who supply the hospitality and food service sector. Contact us for bulk pricing on commercial AA/AAA lots for Ahmedabad-based distributors.",
      },
    ],
    coordinates: { lat: 23.0225, lng: 72.5714 },
  },
  {
    city: "Surat",
    citySlug: "surat",
    state: "Gujarat",
    stateSlug: "gujarat",
    cityContext:
      "Surat's diamond trading, textile, and manufacturing economy creates institutional demand. A growing café culture among the city's young professional population drives specialty interest.",
    industries: ["Diamond & Textile Industry", "Manufacturing", "Hotels", "Specialty Cafés", "Corporate Offices"],
    nearbyAreas: ["Navsari", "Bharuch", "Ankleshwar", "Valsad"],
    transitDays: "4–6 days",
    moq: "10 kg",
    popularProductSlugs: ["koraput-commercial-aa", "chikmagalur-arabica", "koraput-naturals"],
    faqs: [
      {
        question: "How long does delivery from India origins to Surat take?",
        answer: "Delivery from our dispatch point to Surat takes approximately 4–6 business days by road. We provide tracking updates and GST invoice with every order.",
      },
    ],
    coordinates: { lat: 21.1702, lng: 72.8311 },
  },

  // ── WEST BENGAL ──────────────────────────────────────────────────────────────
  {
    city: "Kolkata",
    citySlug: "kolkata",
    state: "West Bengal",
    stateSlug: "west-bengal",
    cityContext:
      "Kolkata's geographic proximity to Assam and East India origins makes it an ideal entry point for North East Indian and Koraput green coffee. The city's historic café culture is now complemented by a modern specialty scene.",
    industries: ["Specialty Cafés", "Hotels", "Distributors", "Food Service", "Government Offices", "Tea & Coffee Traders"],
    nearbyAreas: ["Howrah", "Salt Lake", "New Town", "Barrackpore", "Durgapur"],
    transitDays: "3–4 days",
    moq: "10 kg",
    popularProductSlugs: ["koraput-naturals", "halflong-arabica-naturals", "koraput-washed", "chirang-robusta-naturals", "koraput-commercial-aa"],
    faqs: [
      {
        question: "Why is Kolkata a good city for sourcing Assam and Odisha green coffee?",
        answer: "Kolkata is geographically close to both our North East India origins (Halflong, Chirang — Assam) and East India origins (Koraput — Odisha). This means shorter road transit, fresher lots, and lower freight costs than sourcing from South India.",
      },
      {
        question: "Do you serve Howrah and other Kolkata districts?",
        answer: "Yes — we deliver across Greater Kolkata including Howrah, Salt Lake, New Town, and Barrackpore. Transit time from dispatch to Kolkata area is 3–4 business days.",
      },
    ],
    coordinates: { lat: 22.5726, lng: 88.3639 },
  },

  // ── PUNJAB ──────────────────────────────────────────────────────────────
  {
    city: "Amritsar",
    citySlug: "amritsar",
    state: "Punjab",
    stateSlug: "punjab",
    cityContext:
      "Amritsar's massive religious tourism sector — the Golden Temple draws 100,000+ daily visitors — creates large institutional demand for food service including coffee. Growing hospitality sector drives commercial grade sourcing.",
    industries: ["Religious Tourism", "Hospitality & Hotels", "Pilgrimage Services", "Food Service", "Corporate Offices"],
    nearbyAreas: ["Tarn Taran", "Gurdaspur", "Batala", "Attari"],
    transitDays: "3–5 days",
    moq: "10 kg",
    popularProductSlugs: ["koraput-commercial-aaa", "koraput-commercial-aa", "chikmagalur-arabica"],
    faqs: [
      {
        question: "Do you supply green coffee for Amritsar's large hospitality sector?",
        answer: "Yes — Amritsar's hotel and hospitality sector is one of Punjab's largest. We supply commercial AA/AAA for high-volume institutional buyers and specialty lots for boutique hotels and cafés.",
      },
    ],
    coordinates: { lat: 31.6340, lng: 74.8723 },
  },
  {
    city: "Ludhiana",
    citySlug: "ludhiana",
    state: "Punjab",
    stateSlug: "punjab",
    cityContext:
      "Ludhiana's large textile and manufacturing industry creates institutional canteen demand. A growing café culture among the city's industrial business community drives commercial sourcing.",
    industries: ["Textile Industry", "Manufacturing", "Hotels", "Corporate Offices", "Food Service"],
    nearbyAreas: ["Jalandhar", "Phagwara", "Khanna", "Moga"],
    transitDays: "3–5 days",
    moq: "10 kg",
    popularProductSlugs: ["koraput-commercial-aa", "chikmagalur-arabica", "koraput-commercial-aaa"],
    faqs: [
      {
        question: "Can you supply green coffee to factories and canteens in Ludhiana?",
        answer: "Yes — commercial AA/AAA grade is well-suited for factory canteen sourcing. We supply in 60 kg bags (GrainPro-lined jute) or can arrange smaller lots for smaller operations. GST invoice included.",
      },
    ],
    coordinates: { lat: 30.9010, lng: 75.8573 },
  },

  // ── RAJASTHAN ──────────────────────────────────────────────────────────────
  {
    city: "Jaipur",
    citySlug: "jaipur",
    state: "Rajasthan",
    stateSlug: "rajasthan",
    cityContext:
      "Jaipur's massive tourism economy — heritage hotels, palace properties, and luxury hospitality — creates premium demand for both commercial and specialty green coffee.",
    industries: ["Heritage Hotels", "Tourism", "Government Offices", "Specialty Cafés", "Retail Chains"],
    nearbyAreas: ["Ajmer", "Alwar", "Sikar", "Dausa", "Tonk"],
    transitDays: "3–5 days",
    moq: "10 kg",
    popularProductSlugs: ["koraput-commercial-aaa", "chikmagalur-arabica", "koraput-naturals", "coorg-arabica"],
    faqs: [
      {
        question: "Do you supply to heritage hotels and palace properties in Jaipur?",
        answer: "Yes — Jaipur's heritage hospitality sector is a natural buyer for quality Indian green coffee. We supply both commercial AA/AAA for high-volume use and specialty single-origin lots for premium menus. Contact us for institutional pricing.",
      },
    ],
    coordinates: { lat: 26.9124, lng: 75.7873 },
  },
];

export function getCitiesByState(stateSlug: string): IndiaCity[] {
  return indiaCities.filter((c) => c.stateSlug === stateSlug);
}

export function getCityBySlug(stateSlug: string, citySlug: string): IndiaCity | undefined {
  return indiaCities.find((c) => c.stateSlug === stateSlug && c.citySlug === citySlug);
}

export function getCityBySlugOnly(citySlug: string): IndiaCity | undefined {
  return indiaCities.find((c) => c.citySlug === citySlug);
}

export function getRelatedCities(citySlug: string, stateSlug: string): IndiaCity[] {
  return indiaCities.filter((c) => c.stateSlug === stateSlug && c.citySlug !== citySlug).slice(0, 4);
}

export const INDIA_STATES: { name: string; slug: string }[] = [
  { name: "Maharashtra", slug: "maharashtra" },
  { name: "Karnataka", slug: "karnataka" },
  { name: "Tamil Nadu", slug: "tamil-nadu" },
  { name: "Kerala", slug: "kerala" },
  { name: "Delhi NCR", slug: "delhi-ncr" },
  { name: "Telangana", slug: "telangana" },
  { name: "Gujarat", slug: "gujarat" },
  { name: "West Bengal", slug: "west-bengal" },
  { name: "Punjab", slug: "punjab" },
  { name: "Rajasthan", slug: "rajasthan" },
];

export function getStateNameFromSlug(slug: string): string | undefined {
  return INDIA_STATES.find((s) => s.slug === slug)?.name;
}

// Top cities for supplier-style flat pages
export const TOP_CITIES = [
  "mumbai", "bengaluru", "hyderabad", "chennai", "new-delhi",
  "pune", "ahmedabad", "kolkata", "kochi", "jaipur",
];
