import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request Green Coffee Samples | Indian Arabica & Robusta | Bulk Green Coffee",
  description:
    "Request free green coffee samples from Koraput, Halflong, and South India before committing to a bulk order. Sample packs of 200–500 g available for specialty and commercial lots.",
  alternates: { canonical: "/sample-request" },
  openGraph: {
    title: "Request Indian Green Coffee Samples | Bulk Green Coffee",
    description: "Try before you buy — request sample lots from our Indian specialty and commercial coffee range.",
    url: "https://bulkgreencoffee.com/sample-request",
  },
};

export default function SampleRequestLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
