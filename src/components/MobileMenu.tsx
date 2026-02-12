"use client";

import { motion, AnimatePresence } from "framer-motion";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const links = [
  { label: "Home", href: "/" },
  { label: "AlpaCafe", href: "/alpacafe" },
  { label: "Lodges", href: "/lodges" },
  { label: "Private Dinner", href: "/dinner" },
];

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[60] flex flex-col bg-black/95 backdrop-blur-sm"
        >
          <div className="flex items-center justify-between px-5 py-4 sm:px-8">
            <a
              href="/"
              onClick={onClose}
              className="font-[family-name:var(--font-golos)] text-xl font-semibold tracking-wide text-white"
            >
              Pacha Alpaca
            </a>
            <button
              onClick={onClose}
              aria-label="Close menu"
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
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-1 flex-col items-center justify-center gap-8">
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={onClose}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="font-[family-name:var(--font-golos)] text-3xl font-light text-white transition-colors hover:text-white/70"
              >
                {link.label}
              </motion.a>
            ))}

            <motion.a
              href="https://megatix.co.id/events/entrance-to-pacha-alpaca"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: links.length * 0.1 }}
              className="mt-4 rounded-full border border-white px-10 py-3 text-sm uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-black"
            >
              Book Now
            </motion.a>
          </nav>

          <div className="flex justify-center gap-6 pb-10 text-sm text-white/50">
            <a
              href="https://instagram.com/pacha_alpaca"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              Instagram
            </a>
            <a
              href="https://wa.me/628779879161"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              WhatsApp
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
