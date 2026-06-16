import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Buy Green Coffee Samples | Indian Arabica & Robusta | Bulk Green Coffee",
  description:
    "Order small-batch Indian green coffee samples before committing to bulk. Specialty Arabica from Koraput, Halflong, Chikmagalur, Coorg, and Wayanad. Commercial AA/AAA also available.",
  alternates: { canonical: "/buy-samples" },
  openGraph: {
    title: "Buy Indian Green Coffee Samples | Bulk Green Coffee",
    description: "Try Indian specialty and commercial green coffee in small lots before bulk ordering.",
    url: "https://bulkgreencoffee.com/buy-samples",
  },
};

export default function BuySamplesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
