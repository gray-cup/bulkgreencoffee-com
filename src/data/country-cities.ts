// Top 10 cities for every country in `countryDestinations` (see src/data/destinations.ts).
// Keyed by the same country slug used there, so pages can look up
// `countryCities[countrySlug]` to mention or link the country's major cities.

export type CountryCity = {
  name: string;
  slug: string;
};

function toSlug(name: string): string {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// City names only — slugs are derived automatically via toSlug().
const CITY_NAMES_BY_COUNTRY: Record<string, string[]> = {
  germany: ["Berlin", "Hamburg", "Munich", "Cologne", "Frankfurt", "Stuttgart", "Düsseldorf", "Leipzig", "Dortmund", "Essen"],
  norway: ["Oslo", "Bergen", "Trondheim", "Stavanger", "Drammen", "Fredrikstad", "Kristiansand", "Sandnes", "Tromsø", "Sarpsborg"],
  netherlands: ["Amsterdam", "Rotterdam", "The Hague", "Utrecht", "Eindhoven", "Tilburg", "Groningen", "Almere", "Breda", "Nijmegen"],
  switzerland: ["Zurich", "Geneva", "Basel", "Lausanne", "Bern", "Winterthur", "Lucerne", "St. Gallen", "Lugano", "Biel"],
  italy: ["Rome", "Milan", "Naples", "Turin", "Palermo", "Genoa", "Bologna", "Florence", "Bari", "Catania"],
  france: ["Paris", "Marseille", "Lyon", "Toulouse", "Nice", "Nantes", "Strasbourg", "Montpellier", "Bordeaux", "Lille"],
  spain: ["Madrid", "Barcelona", "Valencia", "Seville", "Zaragoza", "Málaga", "Murcia", "Palma", "Bilbao", "Alicante"],
  "united-kingdom": ["London", "Birmingham", "Manchester", "Glasgow", "Leeds", "Liverpool", "Edinburgh", "Bristol", "Sheffield", "Newcastle"],
  ireland: ["Dublin", "Cork", "Limerick", "Galway", "Waterford", "Drogheda", "Kilkenny", "Wexford", "Sligo", "Dundalk"],
  uae: ["Dubai", "Abu Dhabi", "Sharjah", "Al Ain", "Ajman", "Ras Al Khaimah", "Fujairah", "Umm Al Quwain", "Khor Fakkan", "Kalba"],
  "saudi-arabia": ["Riyadh", "Jeddah", "Mecca", "Medina", "Dammam", "Khobar", "Taif", "Buraidah", "Tabuk", "Abha"],
  usa: ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "San Francisco", "Seattle", "Miami", "Boston", "Denver"],
  australia: ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide", "Gold Coast", "Canberra", "Newcastle", "Hobart", "Darwin"],
  japan: ["Tokyo", "Osaka", "Yokohama", "Nagoya", "Sapporo", "Fukuoka", "Kobe", "Kyoto", "Hiroshima", "Sendai"],
  singapore: ["Singapore", "Jurong", "Woodlands", "Tampines", "Bedok", "Ang Mo Kio", "Punggol", "Sengkang", "Yishun", "Bishan"],
  canada: ["Toronto", "Montreal", "Vancouver", "Calgary", "Edmonton", "Ottawa", "Winnipeg", "Quebec City", "Hamilton", "Halifax"],
  austria: ["Vienna", "Graz", "Linz", "Salzburg", "Innsbruck", "Klagenfurt", "Villach", "Wels", "Sankt Pölten", "Dornbirn"],
  albania: ["Tirana", "Durrës", "Vlorë", "Shkodër", "Elbasan", "Fier", "Korçë", "Berat", "Lushnjë", "Kavajë"],
  andorra: ["Andorra la Vella", "Escaldes-Engordany", "Encamp", "Sant Julià de Lòria", "La Massana", "Santa Coloma", "Ordino", "Canillo", "El Pas de la Casa", "Arinsal"],
  belarus: ["Minsk", "Gomel", "Mogilev", "Vitebsk", "Grodno", "Brest", "Babruysk", "Baranovichi", "Pinsk", "Orsha"],
  belgium: ["Brussels", "Antwerp", "Ghent", "Charleroi", "Liège", "Bruges", "Namur", "Leuven", "Mons", "Aalst"],
  "bosnia-and-herzegovina": ["Sarajevo", "Banja Luka", "Tuzla", "Zenica", "Mostar", "Bijeljina", "Brčko", "Bihać", "Prijedor", "Trebinje"],
  bulgaria: ["Sofia", "Plovdiv", "Varna", "Burgas", "Ruse", "Stara Zagora", "Pleven", "Sliven", "Dobrich", "Shumen"],
  croatia: ["Zagreb", "Split", "Rijeka", "Osijek", "Zadar", "Slavonski Brod", "Pula", "Karlovac", "Sisak", "Varaždin"],
  cyprus: ["Nicosia", "Limassol", "Larnaca", "Paphos", "Famagusta", "Kyrenia", "Paralimni", "Aradippou", "Lakatamia", "Strovolos"],
  "czech-republic": ["Prague", "Brno", "Ostrava", "Plzeň", "Liberec", "Olomouc", "Ústí nad Labem", "České Budějovice", "Hradec Králové", "Pardubice"],
  denmark: ["Copenhagen", "Aarhus", "Odense", "Aalborg", "Esbjerg", "Randers", "Kolding", "Horsens", "Vejle", "Roskilde"],
  estonia: ["Tallinn", "Tartu", "Narva", "Pärnu", "Kohtla-Järve", "Viljandi", "Rakvere", "Maardu", "Kuressaare", "Sillamäe"],
  finland: ["Helsinki", "Espoo", "Tampere", "Vantaa", "Oulu", "Turku", "Jyväskylä", "Lahti", "Kuopio", "Pori"],
  greece: ["Athens", "Thessaloniki", "Patras", "Heraklion", "Larissa", "Volos", "Rhodes", "Ioannina", "Chania", "Chalcis"],
  hungary: ["Budapest", "Debrecen", "Szeged", "Miskolc", "Pécs", "Győr", "Nyíregyháza", "Kecskemét", "Székesfehérvár", "Szombathely"],
  iceland: ["Reykjavik", "Kópavogur", "Hafnarfjörður", "Akureyri", "Reykjanesbær", "Garðabær", "Mosfellsbær", "Árborg", "Akranes", "Fjarðabyggð"],
  kosovo: ["Pristina", "Prizren", "Ferizaj", "Peja", "Gjakova", "Gjilan", "Mitrovica", "Vushtrri", "Suhareka", "Rahovec"],
  latvia: ["Riga", "Daugavpils", "Liepāja", "Jelgava", "Jūrmala", "Ventspils", "Rēzekne", "Valmiera", "Jēkabpils", "Ogre"],
  liechtenstein: ["Vaduz", "Schaan", "Triesen", "Balzers", "Eschen", "Mauren", "Triesenberg", "Ruggell", "Gamprin", "Schellenberg"],
  lithuania: ["Vilnius", "Kaunas", "Klaipėda", "Šiauliai", "Panevėžys", "Alytus", "Marijampolė", "Mažeikiai", "Jonava", "Utena"],
  luxembourg: ["Luxembourg City", "Esch-sur-Alzette", "Differdange", "Dudelange", "Ettelbruck", "Diekirch", "Wiltz", "Echternach", "Rumelange", "Grevenmacher"],
  malta: ["Valletta", "Birkirkara", "Mosta", "Qormi", "Żabbar", "San Ġwann", "Sliema", "Żejtun", "Naxxar", "Fgura"],
  moldova: ["Chișinău", "Tiraspol", "Bălți", "Bender", "Rîbnița", "Cahul", "Ungheni", "Soroca", "Orhei", "Dubăsari"],
  monaco: ["Monaco-Ville", "Monte Carlo", "La Condamine", "Fontvieille", "Moneghetti", "Larvotto", "Saint Roman", "La Rousse", "Les Révoires", "Jardin Exotique"],
  montenegro: ["Podgorica", "Nikšić", "Herceg Novi", "Pljevlja", "Bar", "Bijelo Polje", "Cetinje", "Budva", "Berane", "Tivat"],
  "north-macedonia": ["Skopje", "Bitola", "Kumanovo", "Prilep", "Tetovo", "Ohrid", "Veles", "Štip", "Gostivar", "Strumica"],
  poland: ["Warsaw", "Kraków", "Łódź", "Wrocław", "Poznań", "Gdańsk", "Szczecin", "Bydgoszcz", "Lublin", "Katowice"],
  portugal: ["Lisbon", "Porto", "Vila Nova de Gaia", "Amadora", "Braga", "Setúbal", "Coimbra", "Queluz", "Funchal", "Cacém"],
  romania: ["Bucharest", "Cluj-Napoca", "Timișoara", "Iași", "Constanța", "Craiova", "Brașov", "Galați", "Ploiești", "Oradea"],
  "san-marino": ["San Marino City", "Serravalle", "Borgo Maggiore", "Domagnano", "Fiorentino", "Acquaviva", "Faetano", "Montegiardino", "Chiesanuova", "Dogana"],
  serbia: ["Belgrade", "Novi Sad", "Niš", "Kragujevac", "Subotica", "Zrenjanin", "Pančevo", "Čačak", "Kraljevo", "Novi Pazar"],
  slovakia: ["Bratislava", "Košice", "Prešov", "Žilina", "Banská Bystrica", "Nitra", "Trnava", "Trenčín", "Martin", "Poprad"],
  slovenia: ["Ljubljana", "Maribor", "Celje", "Kranj", "Velenje", "Koper", "Novo Mesto", "Ptuj", "Trbovlje", "Kamnik"],
  sweden: ["Stockholm", "Gothenburg", "Malmö", "Uppsala", "Västerås", "Örebro", "Linköping", "Helsingborg", "Jönköping", "Norrköping"],
  ukraine: ["Kyiv", "Kharkiv", "Odesa", "Dnipro", "Donetsk", "Zaporizhzhia", "Lviv", "Kryvyi Rih", "Mykolaiv", "Mariupol"],
  "vatican-city": ["St. Peter's Square", "Vatican Gardens", "Apostolic Palace", "Vatican Museums", "Sistine Chapel", "St. Peter's Basilica", "Belvedere Courtyard", "Governorate Palace", "Vatican Railway Station", "Cortile della Pigna"],
  china: ["Shanghai", "Beijing", "Guangzhou", "Shenzhen", "Chengdu", "Hangzhou", "Wuhan", "Xi'an", "Chongqing", "Nanjing"],
  "hong-kong": ["Central", "Kowloon", "Tsim Sha Tsui", "Causeway Bay", "Mong Kok", "Sha Tin", "Tsuen Wan", "Kwun Tong", "Wan Chai", "North Point"],
  macau: ["Macau Peninsula", "Taipa", "Coloane", "Cotai", "NAPE", "Barra", "San Ma Lo", "Fai Chi Kei", "Areia Preta", "Iao Hon"],
  taiwan: ["Taipei", "Kaohsiung", "Taichung", "Tainan", "Taoyuan", "Hsinchu", "Keelung", "Chiayi", "Changhua", "Pingtung"],
  "south-korea": ["Seoul", "Busan", "Incheon", "Daegu", "Daejeon", "Gwangju", "Ulsan", "Suwon", "Seongnam", "Goyang"],
  "north-korea": ["Pyongyang", "Hamhung", "Chongjin", "Nampo", "Wonsan", "Sinuiju", "Kaesong", "Sariwon", "Pyongsong", "Hyesan"],
  mongolia: ["Ulaanbaatar", "Erdenet", "Darkhan", "Choibalsan", "Mörön", "Nalaikh", "Ölgii", "Baganuur", "Sükhbaatar", "Kharkhorin"],
  kazakhstan: ["Almaty", "Astana", "Shymkent", "Karaganda", "Aktobe", "Taraz", "Pavlodar", "Ust-Kamenogorsk", "Semey", "Atyrau"],
  kyrgyzstan: ["Bishkek", "Osh", "Jalal-Abad", "Karakol", "Tokmok", "Kara-Balta", "Uzgen", "Naryn", "Talas", "Batken"],
  tajikistan: ["Dushanbe", "Khujand", "Kulob", "Bokhtar", "Istaravshan", "Konibodom", "Isfara", "Tursunzoda", "Panjakent", "Vahdat"],
  turkmenistan: ["Ashgabat", "Türkmenabat", "Daşoguz", "Mary", "Balkanabat", "Bayramaly", "Tejen", "Serdar", "Abadan", "Gyzylarbat"],
  uzbekistan: ["Tashkent", "Samarkand", "Namangan", "Andijan", "Bukhara", "Nukus", "Qarshi", "Fergana", "Jizzakh", "Urgench"],
  afghanistan: ["Kabul", "Kandahar", "Herat", "Mazar-i-Sharif", "Kunduz", "Jalalabad", "Lashkar Gah", "Taloqan", "Puli Khumri", "Ghazni"],
  bangladesh: ["Dhaka", "Chittagong", "Khulna", "Rajshahi", "Sylhet", "Comilla", "Rangpur", "Barisal", "Mymensingh", "Gazipur"],
  bhutan: ["Thimphu", "Phuntsholing", "Punakha", "Paro", "Wangdue Phodrang", "Trongsa", "Trashigang", "Jakar", "Gelephu", "Samdrup Jongkhar"],
  india: ["Mumbai", "Delhi", "Bengaluru", "Chennai", "Kolkata", "Hyderabad", "Pune", "Ahmedabad", "Jaipur", "Kochi"],
  maldives: ["Malé", "Addu City", "Fuvahmulah", "Kulhudhuffushi", "Thinadhoo", "Naifaru", "Hithadhoo", "Eydhafushi", "Funadhoo", "Guraidhoo"],
  nepal: ["Kathmandu", "Pokhara", "Lalitpur", "Bharatpur", "Biratnagar", "Birgunj", "Dharan", "Butwal", "Hetauda", "Janakpur"],
  pakistan: ["Karachi", "Lahore", "Faisalabad", "Rawalpindi", "Multan", "Islamabad", "Peshawar", "Quetta", "Sialkot", "Gujranwala"],
  "sri-lanka": ["Colombo", "Kandy", "Galle", "Jaffna", "Negombo", "Batticaloa", "Trincomalee", "Anuradhapura", "Ratnapura", "Matara"],
  bahrain: ["Manama", "Riffa", "Muharraq", "Hamad Town", "A'ali", "Isa Town", "Sitra", "Budaiya", "Jidhafs", "Al Malikiyah"],
  iran: ["Tehran", "Mashhad", "Isfahan", "Karaj", "Shiraz", "Tabriz", "Qom", "Ahvaz", "Kermanshah", "Urmia"],
  iraq: ["Baghdad", "Basra", "Mosul", "Erbil", "Kirkuk", "Najaf", "Karbala", "Sulaymaniyah", "Nasiriyah", "Amarah"],
  israel: ["Jerusalem", "Tel Aviv", "Haifa", "Rishon LeZion", "Petah Tikva", "Ashdod", "Netanya", "Beersheba", "Holon", "Bnei Brak"],
  jordan: ["Amman", "Zarqa", "Irbid", "Russeifa", "Aqaba", "Salt", "Mafraq", "Jerash", "Madaba", "Karak"],
  kuwait: ["Kuwait City", "Al Ahmadi", "Hawalli", "As Salimiyah", "Sabah as Salim", "Al Farwaniyah", "Al Jahra", "Al Fahahil", "Ar Riqqah", "Al Fintas"],
  lebanon: ["Beirut", "Tripoli", "Sidon", "Tyre", "Zahlé", "Jounieh", "Baalbek", "Byblos", "Nabatieh", "Aley"],
  oman: ["Muscat", "Salalah", "Sohar", "Nizwa", "Sur", "Ibri", "Rustaq", "Buraimi", "Seeb", "Barka"],
  palestine: ["Gaza City", "Hebron", "Nablus", "Ramallah", "Khan Yunis", "Jenin", "Bethlehem", "Rafah", "Tulkarm", "Qalqilya"],
  qatar: ["Doha", "Al Rayyan", "Al Wakrah", "Al Khor", "Umm Salal", "Al Daayen", "Dukhan", "Mesaieed", "Lusail", "Ash Shamal"],
  syria: ["Damascus", "Aleppo", "Homs", "Latakia", "Hama", "Deir ez-Zor", "Raqqa", "Daraa", "Idlib", "Tartus"],
  yemen: ["Sana'a", "Aden", "Taiz", "Al Hudaydah", "Ibb", "Mukalla", "Dhamar", "Amran", "Sayyan", "Zinjibar"],
  russia: ["Moscow", "Saint Petersburg", "Novosibirsk", "Yekaterinburg", "Kazan", "Nizhny Novgorod", "Chelyabinsk", "Samara", "Omsk", "Rostov-on-Don"],
  turkey: ["Istanbul", "Ankara", "Izmir", "Bursa", "Antalya", "Adana", "Gaziantep", "Konya", "Mersin", "Kayseri"],
  armenia: ["Yerevan", "Gyumri", "Vanadzor", "Vagharshapat", "Abovyan", "Kapan", "Hrazdan", "Armavir", "Gavar", "Artashat"],
  azerbaijan: ["Baku", "Ganja", "Sumqayit", "Mingachevir", "Lankaran", "Shirvan", "Nakhchivan", "Sheki", "Yevlakh", "Khankendi"],
  georgia: ["Tbilisi", "Batumi", "Kutaisi", "Rustavi", "Zugdidi", "Gori", "Poti", "Samtredia", "Khashuri", "Senaki"],
};

export const countryCities: Record<string, CountryCity[]> = Object.fromEntries(
  Object.entries(CITY_NAMES_BY_COUNTRY).map(([countrySlug, names]) => [
    countrySlug,
    names.map((name) => ({ name, slug: toSlug(name) })),
  ]),
);

export function getTopCitiesForCountry(countrySlug: string): CountryCity[] {
  return countryCities[countrySlug] ?? [];
}
