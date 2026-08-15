import React from "react";
import { Outlet } from "react-router";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import FooterBelow from "@/components/footer-below";

export default function MarketingLayout() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <main className="w-full">
        <div className="max-w-7xl mx-auto">
          <Outlet />
        </div>
      </main>
      <Footer />
      <FooterBelow />
    </div>
  );
}
