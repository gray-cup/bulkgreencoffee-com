import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout | Buy Green Coffee Samples | Bulk Green Coffee",
  description: "Complete your Indian green coffee sample order. Secure checkout for specialty and commercial lots from Bulk Green Coffee.",
  robots: { index: false, follow: false },
};

export default function CheckoutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
