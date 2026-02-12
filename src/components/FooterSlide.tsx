"use client";

import FAQ from "./FAQ";
import type { FAQItem } from "@/data/types";

interface FooterSlideProps {
  faqItems: FAQItem[];
  showMap?: boolean;
  showHours?: boolean;
  showContacts?: boolean;
}

export default function FooterSlide({
  faqItems,
  showMap = true,
  showHours = true,
  showContacts = true,
}: FooterSlideProps) {
  return (
    <section className="slide relative overflow-y-auto bg-black">
      <div className="mx-auto flex min-h-full max-w-3xl flex-col px-6 py-16 sm:px-12">
        {/* FAQ */}
        {faqItems.length > 0 && (
          <div className="mb-12">
            <h3 className="mb-6 font-[family-name:var(--font-golos)] text-2xl font-semibold">
              Frequently Asked
            </h3>
            <FAQ items={faqItems} />
          </div>
        )}

        {/* How to find us */}
        {showMap && (
          <div className="mb-12">
            <h3 className="mb-4 font-[family-name:var(--font-golos)] text-2xl font-semibold">
              How to Find Us
            </h3>
            <p className="mb-2 text-sm text-white/70">
              Nuanu City, Bali, 82121, Indonesia
            </p>
            <p className="mb-2 text-sm text-white/70">
              20 minutes from Canggu
            </p>
            <p className="mb-4 text-sm text-white/70">
              Take the free bus at Nuanu Gate to bus station #4
            </p>
            <a
              href="https://maps.app.goo.gl/gtATFU7rdZKXisb49?g_st=ac"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full border border-white/30 px-6 py-2 text-xs uppercase tracking-widest text-white transition-colors hover:border-white hover:bg-white hover:text-black"
            >
              Open in Maps
            </a>
          </div>
        )}

        {/* Hours */}
        {showHours && (
          <div className="mb-12">
            <h3 className="mb-4 font-[family-name:var(--font-golos)] text-2xl font-semibold">
              Opening Hours
            </h3>
            <ul className="space-y-1 text-sm text-white/70">
              <li>Monday: Closed</li>
              <li>Tuesday — Friday: 10 am — 6 pm</li>
              <li>Saturday — Sunday: 10 am — 9 pm</li>
            </ul>
          </div>
        )}

        {/* Contacts */}
        {showContacts && (
          <div className="mb-8">
            <h3 className="mb-4 font-[family-name:var(--font-golos)] text-2xl font-semibold">
              Get in Touch
            </h3>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/628779879161"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/30 px-5 py-2 text-xs uppercase tracking-widest text-white transition-colors hover:border-white hover:bg-white hover:text-black"
              >
                WhatsApp
              </a>
              <a
                href="https://instagram.com/pacha_alpaca"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/30 px-5 py-2 text-xs uppercase tracking-widest text-white transition-colors hover:border-white hover:bg-white hover:text-black"
              >
                Instagram
              </a>
              <a
                href="mailto:pachaalpaca5@gmail.com"
                className="rounded-full border border-white/30 px-5 py-2 text-xs uppercase tracking-widest text-white transition-colors hover:border-white hover:bg-white hover:text-black"
              >
                Email
              </a>
            </div>
          </div>
        )}

        {/* Copyright */}
        <div className="mt-auto pt-8 text-center text-xs text-white/30">
          &copy; {new Date().getFullYear()} Pacha Alpaca. All rights reserved.
        </div>
      </div>
    </section>
  );
}
