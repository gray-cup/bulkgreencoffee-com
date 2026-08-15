import type { LinksFunction, MetaFunction } from "react-router";
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import RootProviders from "@/components/providers";
import { WhatsappWidget } from "@/components/whatsapp-widget";
import { OrganizationSchema } from "@/components/seo";
import { Analytics } from "@vercel/analytics/react";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400..700;1,400..700&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&family=Public+Sans:ital,wght@0,100..900;1,100..900&display=swap",
  },
  { rel: "icon", href: "/favicon.ico" },
  { rel: "icon", href: "/icon-light.svg", media: "(prefers-color-scheme: light)" },
  { rel: "icon", href: "/icon-dark.svg", media: "(prefers-color-scheme: dark)" },
  { rel: "apple-touch-icon", href: "/icon-light.svg", media: "(prefers-color-scheme: light)" },
  { rel: "apple-touch-icon", href: "/icon-dark.svg", media: "(prefers-color-scheme: dark)" },
];

export const meta: MetaFunction = () => {
  return [
    { title: "Bulk Green Coffee | Indian Specialty & Commercial Green Coffee" },
    {
      name: "description",
      content:
        "Wholesale Indian green coffee for roasters, blenders, and importers. Specialty lots (Natural, Honey, Washed) and commercial AA/AAA grade from Koraput (Odisha) and Halflong (Assam). Peaberry available. Export-ready with full traceability.",
    },
    { property: "og:title", content: "Bulk Green Coffee | Indian Specialty & Commercial Green Coffee" },
    {
      property: "og:description",
      content:
        "Specialty and commercial-grade Indian green coffee for roasters, blenders, and importers. AA/AAA from ₹800/kg. Peaberry available. Koraput, Assam, and South India origins.",
    },
    { property: "og:image", content: "https://bulkgreencoffee.com/og.png" },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "Bulk Green Coffee" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Bulk Green Coffee | Indian Specialty & Commercial Green Coffee" },
    {
      name: "twitter:description",
      content:
        "Specialty and commercial-grade Indian green coffee. AA/AAA from ₹800/kg. Peaberry available. Koraput, Assam, and South India origins. Export-ready.",
    },
    { name: "twitter:image", content: "https://bulkgreencoffee.com/og.png" },
  ];
};

export default function App() {
  return (
    <html lang="en" className="bg-white overflow-x-hidden">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className={cn("min-h-screen w-full overflow-x-hidden bg-background font-sans antialiased")}>
        <OrganizationSchema />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://bulkgreencoffee.com/#website",
              name: "Bulk Green Coffee",
              alternateName: "BulkGreenCoffee",
              url: "https://bulkgreencoffee.com",
            }),
          }}
        />
        <RootProviders>
          <Outlet />
        </RootProviders>
        <WhatsappWidget />
        <Analytics />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
