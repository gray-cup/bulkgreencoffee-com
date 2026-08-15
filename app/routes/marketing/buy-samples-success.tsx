"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Check, ChevronLeft, Loader2, X } from "lucide-react";

type VerifyStatus = "checking" | "paid" | "pending" | "failed";

function SuccessInner() {
  const searchParams = useSearchParams();
  const linkId = searchParams.get("link_id");
  const [status, setStatus] = useState<VerifyStatus>(linkId ? "checking" : "paid");

  useEffect(() => {
    if (!linkId) return;
    let cancelled = false;

    // A couple of quick retries covers the case where Cashfree's webhook
    // hasn't landed yet but the payment already succeeded.
    const delays = [0, 2000, 5000];

    async function check(attempt: number) {
      try {
        const res = await fetch(`/api/verify-payment?link_id=${encodeURIComponent(linkId!)}`);
        const data = (await res.json()) as any;
        if (cancelled) return;

        if (data.status === "paid") {
          setStatus("paid");
          return;
        }
        if (data.status === "failed") {
          setStatus("failed");
          return;
        }
      } catch {
        // keep polling / fall through to pending
      }

      if (attempt < delays.length - 1) {
        setTimeout(() => check(attempt + 1), delays[attempt + 1]);
      } else if (!cancelled) {
        setStatus("pending");
      }
    }

    check(0);
    return () => {
      cancelled = true;
    };
  }, [linkId]);

  if (status === "checking") {
    return (
      <div className="max-w-md w-full text-center space-y-4">
        <Loader2 className="w-8 h-8 mx-auto animate-spin text-teal-600" />
        <p className="text-muted-foreground">Confirming your payment…</p>
      </div>
    );
  }

  if (status === "failed") {
    return (
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-red-50 border border-red-200 flex items-center justify-center mx-auto">
          <X className="w-7 h-7 text-red-500" />
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-black mb-2">Payment not completed</h1>
          <p className="text-muted-foreground">
            Your payment didn&apos;t go through. No order has been placed. Please try again.
          </p>
        </div>
        <Link
          href="/buy-samples"
          className="inline-flex items-center gap-2 text-sm font-medium text-teal-700 hover:text-teal-900 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" /> Back to samples
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-md w-full text-center space-y-6">
      <div className="w-16 h-16 rounded-full bg-teal-50 border border-teal-200 flex items-center justify-center mx-auto">
        <Check className="w-7 h-7 text-teal-600" />
      </div>
      <div>
        <h1 className="text-2xl font-semibold text-black mb-2">Order placed!</h1>
        <p className="text-muted-foreground">
          {status === "pending"
            ? "We're still confirming your payment with the bank: you'll get an SMS/email as soon as it's confirmed."
            : "Your sample order has been received. We'll pack and ship it to you within 2–3 business days."}
        </p>
      </div>
      <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 text-sm text-gray-700 text-left space-y-1">
        <p>• You&apos;ll get an SMS confirmation shortly.</p>
        <p>• Delivery usually takes 3–5 days after dispatch.</p>
        <p>• Questions? Reach us at <a href="/contact" className="underline">contact page</a>.</p>
      </div>
      <Link
        href="/products"
        className="inline-flex items-center gap-2 text-sm font-medium text-teal-700 hover:text-teal-900 transition-colors"
      >
        <ChevronLeft className="w-4 h-4" /> Browse all products
      </Link>
    </div>
  );
}

export default function BuySamplesSuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <Suspense fallback={<Loader2 className="w-8 h-8 mx-auto animate-spin text-teal-600" />}>
        <SuccessInner />
      </Suspense>
    </div>
  );
}
