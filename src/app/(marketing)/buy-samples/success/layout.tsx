import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Order Confirmed | Bulk Green Coffee",
  description: "Your green coffee sample order has been placed. We'll be in touch shortly with dispatch details.",
  robots: { index: false, follow: false },
};

export default function SuccessLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
