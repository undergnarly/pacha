"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface BookingModalProps {
  open: boolean;
  url: string;
  onClose: () => void;
}

export default function BookingModal({ open, url, onClose }: BookingModalProps) {
  const [iframeFailed, setIframeFailed] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      setIframeFailed(false);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] flex flex-col bg-black/90 backdrop-blur-sm"
        >
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
            <span className="text-sm text-white/60">Book your experience</span>
            <button
              onClick={onClose}
              aria-label="Close booking"
              className="flex h-10 w-10 items-center justify-center"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-white"
              >
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </svg>
            </button>
          </div>

          <div className="flex flex-1 items-center justify-center">
            {iframeFailed ? (
              <div className="flex flex-col items-center gap-4 px-6 text-center">
                <p className="text-white/70">
                  Booking page could not be loaded in the app.
                </p>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white px-8 py-3 text-sm uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-black"
                >
                  Open Booking Page
                </a>
              </div>
            ) : (
              <iframe
                src={url}
                title="Booking"
                className="h-full w-full bg-white"
                onError={() => setIframeFailed(true)}
                onLoad={(e) => {
                  // Detect X-Frame-Options block: if contentDocument is null, iframe was blocked
                  try {
                    const frame = e.target as HTMLIFrameElement;
                    if (frame.contentDocument === null) {
                      setIframeFailed(true);
                    }
                  } catch {
                    // Cross-origin — iframe loaded fine
                  }
                }}
              />
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
