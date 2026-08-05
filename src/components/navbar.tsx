"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, ShoppingCart, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CurrencySelector } from "@/components/currency-selector";
import { useCart } from "@/context/cart-context";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { count } = useCart();

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-teal-800">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-3 sm:px-4 lg:px-6">
          {/* LEFT */}
          <div className="flex items-center gap-2 md:gap-6 min-w-0">
            <Link href="/" className="flex items-center gap-3 min-w-0">
              <span className="text-sm sm:text-xl text-white font-semibold text-nowrap tracking-tight truncate">
                Bulk Green Coffee
              </span>
            </Link>
            <p className="opacity-20 hidden md:block">|</p>
            <nav className="hidden md:flex text-neutral-100 gap-1 text-sm font-medium">
              {[
                ["Products", "/products"],
                ["Buy Samples", "/buy-samples"],
                ["Product Request", "/new-product-request"],
                ["White Label", "/white-label"],
              ].map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="rounded-md px-2 py-2 hover:bg-teal-500"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-0.5 sm:gap-2 shrink-0">
            <CurrencySelector />
            <Link href="/cart" className="relative p-2 text-white hover:bg-teal-500 rounded-md transition-colors">
              <ShoppingCart className="h-5 w-5" />
              {count > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-yellow-400 text-black text-[10px] font-bold rounded-full min-w-[16px] h-4 flex items-center justify-center px-0.5 leading-none">
                  {count}
                </span>
              )}
            </Link>
            <a
              id="store-link"
              href="/contact"
              className="hidden lg:inline-block"
            >
              <Button variant="lightgraybg" size="sm">
                Contact
              </Button>
            </a>
            <a
              id="store-link"
              href="https://graycup.org/"
              target="_blank"
              rel="noopener"
              className="hidden lg:inline-block"
            >
              <Button variant="lightgraybg" size="sm">
                Visit Gray Cup
              </Button>
            </a>

            {/* Hamburger - visible whenever anything is hidden */}
            <button
              className="lg:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-teal-500"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* ================= SIDEBAR ================= */}
      <div
        className={`fixed inset-0 z-50 transition-opacity ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setMenuOpen(false)}
        />

        {/* Drawer */}
        <aside
          style={{ backgroundColor: "#115e59" }}
          className={`absolute right-0 top-0 h-full w-72 max-w-[85vw] p-6 shadow-xl flex flex-col
          transform transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
        `}
        >
          <div className="flex items-center justify-between mb-6">
            <span className="text-white font-semibold tracking-tight">
              Bulk Green Coffee
            </span>
            <button
              className="rounded-md cursor-pointer p-2 text-white hover:bg-teal-500"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* All links */}
          <nav className="flex flex-col text-neutral-100 gap-1 text-sm font-medium">
            {[
              ["Products", "/products"],
              ["Buy Samples", "/buy-samples"],
              ["Cart", "/cart"],
              ["Product Request", "/new-product-request"],
              ["White Label", "/white-label"],
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="rounded-md px-2 py-2 hover:bg-teal-500"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="mt-auto flex flex-col gap-2 pt-6">
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
            >
              <Button variant="lightgraybg" size="sm" className="w-full">
                Contact
              </Button>
            </Link>
            <Link
              href="https://graycup.org/"
              target="_blank"
              rel="noopener"
              onClick={() => setMenuOpen(false)}
            >
              <Button variant="lightgraybg" size="sm" className="w-full">
                Visit Gray Cup
              </Button>
            </Link>
          </div>
        </aside>
      </div>
    </>
  );
}
