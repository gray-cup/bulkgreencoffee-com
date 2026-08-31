import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default [
  // Marketing Layout Routes
  layout("layouts/marketing.tsx", [
    index("routes/marketing/home.tsx"),
    route("about", "routes/marketing/about.tsx"),
    route("careers", "routes/marketing/careers.tsx"),
    route("cart", "routes/marketing/cart.tsx"),
    route("contact", "routes/marketing/contact.tsx"),
    route("privacy", "routes/marketing/privacy.tsx"),
    route("refunds", "routes/marketing/refunds.tsx"),
    route("terms", "routes/marketing/terms.tsx"),
    route("white-label", "routes/marketing/white-label.tsx"),
    route("social-responsibility", "routes/marketing/social-responsibility.tsx"),
    route("team", "routes/marketing/team.tsx"),
    route("sites", "routes/marketing/sites.tsx"),
    route("new-product-request", "routes/marketing/new-product-request.tsx"),
    route("sample-request", "routes/marketing/sample-request.tsx"),

    // Products
    route("products", "routes/marketing/products-index.tsx"),
    route("products/:slug", "routes/marketing/products-slug.tsx"),

    // Generic bulk-buyer search-intent pages
    route("indian-green-coffee-beans", "routes/marketing/indian-green-coffee-beans.tsx"),
    route("bulk-green-coffee", "routes/marketing/bulk-green-coffee.tsx"),
    route("1-container-green-coffee-beans", "routes/marketing/container-green-coffee-beans.tsx"),

    // Roasted coffee - place-targeted retail + cafe bulk
    route("roasted-coffee/checkout", "routes/marketing/roasted-checkout.tsx"),
    route("roasted-coffee/:place", "routes/marketing/roasted-coffee-place.tsx"),
    route("bulk-roasted-coffee-cafes/:place", "routes/marketing/bulk-roasted-cafes-place.tsx"),

    // Buy Samples
    route("buy-samples", "routes/marketing/buy-samples-index.tsx"),
    route("buy-samples/checkout", "routes/marketing/buy-samples-checkout.tsx"),
    route("buy-samples/success", "routes/marketing/buy-samples-success.tsx"),
    route("buy-samples/:slug", "routes/marketing/buy-samples-slug.tsx"),

    // Green Coffee & Regional
    route("green-coffee", "routes/marketing/green-coffee-index.tsx"),
    route("green-coffee/india/:state", "routes/marketing/green-coffee-india-state.tsx"),
    route("green-coffee/:country", "routes/marketing/green-coffee-country.tsx"),

    // India Pages
    route("india", "routes/marketing/india-index.tsx"),
    route("india/available-locations", "routes/marketing/india-locations.tsx"),
    route("india/:state", "routes/marketing/india-state.tsx"),
    route("india/:state/:city", "routes/marketing/india-state-city.tsx"),

    // Dynamic Regional Pages
    route(":city-green-coffee-supplier", "routes/marketing/city-supplier.tsx"),
    route(":country", "routes/marketing/country-index.tsx"),
    route(":country/products", "routes/marketing/country-products.tsx"),
    route(":country/:city", "routes/marketing/country-city.tsx"),
    route(":country/:city/products", "routes/marketing/country-city-products.tsx"),
  ]),

  // Resource / API Routes
  route("api/bgc-quote", "routes/api/bgc-quote.ts"),
  route("api/call-request", "routes/api/call-request.ts"),
  route("api/contact", "routes/api/contact.ts"),
  route("api/create-payment", "routes/api/create-payment.ts"),
  route("api/roasted-create-payment", "routes/api/roasted-create-payment.ts"),
  route("api/exchange-rates", "routes/api/exchange-rates.ts"),
  route("api/geo", "routes/api/geo.ts"),
  route("api/new-product-request", "routes/api/new-product-request.ts"),
  route("api/quote-request", "routes/api/quote-request.ts"),
  route("api/verify-payment", "routes/api/verify-payment.ts"),
  route("api/webhooks/cashfree", "routes/api/webhooks-cashfree.ts"),
  route("api/webhooks/feature", "routes/api/webhooks-feature.ts"),
  route("api/webhooks/feedback", "routes/api/webhooks-feedback.ts"),
  route("products.json", "routes/api/products-json.ts"),
  route("llms.txt", "routes/api/llms-txt.ts"),
  route("sitemap.xml", "routes/api/sitemap-xml.ts"),

  // Catch-all 404 Route
  route("*", "routes/not-found.tsx"),
] satisfies RouteConfig;
