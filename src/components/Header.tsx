"use client";

import { useState } from "react";
import MobileMenu from "./MobileMenu";

export default function Header({ dark = false }: { dark?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-5 py-4 transition-colors duration-300 sm:px-8 ${
          dark ? "bg-black/90 backdrop-blur-sm" : ""
        }`}
      >
        <a
          href="/"
          className="flex items-end gap-2 font-[family-name:var(--font-golos)] text-xl font-semibold tracking-wide text-white"
        >
          <img src="/images/logo.webp" alt="" className="h-8 w-auto" />
          Pacha Alpaca
        </a>

        <button
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          className="flex h-10 w-10 items-center justify-center"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-white"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
