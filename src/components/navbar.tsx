"use client";

import { useState } from "react";
import Link from "@/lib/next-link-compat";
import { Menu, ShoppingCart, X } from "lucide-react";
import { useCart } from "@/context/cart-context";

const NAV_LINKS: [string, string][] = [
  ["Products", "/products"],
  ["Buy Green Coffee Beans", "/buy-green-coffee-beans"],
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { count } = useCart();

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 lg:px-6">
          <div className="flex min-w-0 items-center gap-8">
            <Link href="/" className="flex min-w-0 items-center gap-2.5">
              <img src="/logo.svg" alt="Gray Cup" width={32} height={31} className="h-8 w-auto shrink-0" />
              <span className="truncate text-lg font-semibold tracking-tight text-teal-800 sm:text-xl">
                Bulk Green Coffee
              </span>
            </Link>
            <nav className="hidden items-center gap-6 text-sm font-medium text-neutral-700 lg:flex">
              {NAV_LINKS.map(([label, href]) => (
                <Link key={href} href={href} className="whitespace-nowrap hover:text-teal-800">
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <a
              href="https://graycup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden whitespace-nowrap rounded-md bg-teal-800 px-4 py-2 text-sm font-medium text-white hover:bg-teal-700 lg:inline-block"
            >
              Visit Gray Cup Store
            </a>
            <Link
              href="/cart"
              className="relative rounded-md p-2 text-neutral-800 hover:bg-neutral-200"
              aria-label="Cart"
            >
              <ShoppingCart className="h-5 w-5" />
              {count > 0 && (
                <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-teal-700 px-0.5 text-[10px] font-bold leading-none text-white">
                  {count}
                </span>
              )}
            </Link>
            <button
              className="rounded-md p-2 hover:bg-neutral-200 lg:hidden"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMenuOpen(false)} />
          <aside className="absolute right-0 top-0 flex h-full w-72 max-w-[85vw] flex-col bg-neutral-50 p-6 shadow-xl">
            <div className="mb-6 flex items-center justify-between">
              <span className="font-semibold text-teal-800">Bulk Green Coffee</span>
              <button className="rounded-md p-2 hover:bg-neutral-200" onClick={() => setMenuOpen(false)} aria-label="Close menu">
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-col gap-1 text-sm font-medium text-neutral-800">
              {[...NAV_LINKS.slice(0, 2), ["Cart", "/cart"], ...NAV_LINKS.slice(2)].map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-md px-2 py-2.5 hover:bg-neutral-200"
                >
                  {label}
                </Link>
              ))}
            </nav>
            <div className="mt-auto flex flex-col gap-2 pt-6">
              <a
                href="https://graycup.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="rounded-md bg-teal-800 px-4 py-2.5 text-center text-sm font-medium text-white"
              >
                Visit Gray Cup Store
              </a>
              <Link
                href="https://graycup.org/"
                target="_blank"
                rel="noopener"
                onClick={() => setMenuOpen(false)}
                className="rounded-md border border-neutral-300 px-4 py-2.5 text-center text-sm font-medium text-neutral-800"
              >
                Visit Gray Cup
              </Link>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
