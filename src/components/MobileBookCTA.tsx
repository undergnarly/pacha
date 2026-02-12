"use client";

import { motion, AnimatePresence } from "framer-motion";

interface MobileBookCTAProps {
  visible: boolean;
  onBook: () => void;
}

export default function MobileBookCTA({ visible, onBook }: MobileBookCTAProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-40 p-4 sm:hidden"
        >
          <button
            onClick={onBook}
            className="w-full rounded-full bg-white py-3.5 text-center text-sm font-semibold uppercase tracking-widest text-black transition-opacity active:opacity-80"
          >
            Book Now
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
