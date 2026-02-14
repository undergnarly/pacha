"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import type { SlideData } from "@/data/types";

interface SlideContentProps {
  slide: SlideData;
  onBooking?: (href: string) => void;
  onScrollDown?: () => void;
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

// Instant variant for hero LCP optimization - no animation delay
const instant: Variants = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0, transition: { duration: 0 } },
};

export default function SlideContent({
  slide,
  onBooking,
  onScrollDown,
}: SlideContentProps) {
  const { variant, headline, subtitle, price, cta, stats, quote, rating, menuItems, menuNote } =
    slide;
  const [expanded, setExpanded] = useState(false);
  const hasDetails = slide.details && slide.details.length > 0;

  if (variant === "menu") {
    return (
      <div className="relative z-10 flex h-full flex-col justify-center px-6 sm:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto w-full max-w-lg"
        >
          <motion.h2
            custom={0}
            variants={fadeUp}
            className="mb-2 text-center font-[family-name:var(--font-golos)] text-2xl font-semibold sm:text-3xl"
            style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}
          >
            {headline}
          </motion.h2>

          {subtitle && (
            <motion.p
              custom={0}
              variants={fadeUp}
              className="mb-1 text-center text-base font-medium text-white/90"
              style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}
            >
              {subtitle}
            </motion.p>
          )}

          {menuNote && (
            <motion.p
              custom={0}
              variants={fadeUp}
              className="mb-4 text-center text-xs italic text-white/60"
            >
              {menuNote}
            </motion.p>
          )}

          {menuItems && (
            <motion.div custom={1} variants={fadeUp} className="space-y-1">
              {menuItems.map((item) => (
                <div key={item.name} className="flex items-baseline justify-between gap-2">
                  <div className="min-w-0">
                    <span className="text-sm font-medium text-white/90">{item.name}</span>
                    {item.description && (
                      <span className="ml-1 text-xs text-white/50">{item.description}</span>
                    )}
                  </div>
                  <span className="shrink-0 text-sm font-semibold text-white/80">{item.price}</span>
                </div>
              ))}
              <p className="mt-3 text-center text-xs text-white/40">All prices subject to 10% tax & 5% service</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    );
  }

  if (variant === "hook") {
    return (
      <div className="relative z-10 flex h-full flex-col items-center justify-end px-6 pb-16 sm:px-12" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-xl text-center"
        >
          {rating && (
            <motion.div custom={0} variants={fadeUp} className="mb-4 flex items-center justify-center gap-2">
              <span className="text-2xl font-bold">{rating.score}</span>
              <span className="text-2xl text-yellow-400">★</span>
              <span className="text-sm font-semibold text-white/70">({rating.count} reviews on Google)</span>
            </motion.div>
          )}

          {quote && (
            <motion.blockquote
              custom={1}
              variants={fadeUp}
              className="mb-6 rounded-2xl bg-white/10 px-5 py-4 text-lg font-medium italic text-white/90 backdrop-blur-[4px] sm:text-xl"
            >
              &ldquo;{quote.text}&rdquo;
              <span className="mt-1 block text-sm not-italic text-white/60">
                — {quote.author}
              </span>
            </motion.blockquote>
          )}

          <motion.h2
            custom={2}
            variants={fadeUp}
            className="mb-6 font-[family-name:var(--font-golos)] text-2xl font-semibold sm:text-3xl"
          >
            {headline}
          </motion.h2>

          {stats && (
            <motion.div
              custom={3}
              variants={fadeUp}
              className="flex flex-wrap justify-center gap-6"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold sm:text-3xl">
                    {stat.value}
                  </div>
                  <div className="text-xs uppercase tracking-wider text-white/60">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    );
  }

  return (
    <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-16 sm:px-12" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}>
      {/* Blur overlay when details expanded */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-[4px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            style={{ textShadow: "none" }}
          />
        )}
      </AnimatePresence>

      <motion.div
        initial="hidden"
        animate="visible"
        className="relative max-w-xl"
      >
        <motion.h2
          custom={0}
          variants={variant === "hero" ? instant : fadeUp}
          className={`mb-3 font-[family-name:var(--font-golos)] font-semibold ${
            variant === "hero"
              ? "text-4xl sm:text-5xl lg:text-6xl"
              : "text-3xl sm:text-4xl"
          }`}
        >
          {headline}
        </motion.h2>

        {subtitle && (
          <motion.p
            custom={1}
            variants={variant === "hero" ? instant : fadeUp}
            className="mb-4 text-base text-white/80 sm:text-lg"
          >
            {subtitle}
          </motion.p>
        )}

        {/* Price row with Show More button */}
        {(price || hasDetails) && (
          <motion.div
            custom={2}
            variants={fadeUp}
            className="mb-6 flex items-center justify-between gap-4"
          >
            {price && (
              <span className="text-xl font-semibold sm:text-2xl">{price}</span>
            )}
            {hasDetails && (
              <button
                onClick={() => setExpanded(!expanded)}
                className="flex items-center gap-2 text-base font-medium text-white/80 transition-colors hover:text-white"
              >
                <motion.span
                  animate={{ rotate: expanded ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white/60 text-lg font-bold leading-none"
                >
                  +
                </motion.span>
                <span className="uppercase tracking-widest">
                  {expanded ? "Less" : "More"}
                </span>
              </button>
            )}
          </motion.div>
        )}

        {/* Expandable details */}
        <AnimatePresence>
          {expanded && slide.details && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6 space-y-2 overflow-hidden"
            >
              {slide.details.map((item) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-start gap-2 text-sm text-white/80"
                >
                  <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-white/50" />
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        {cta && (
          <motion.div custom={3} variants={fadeUp}>
            {cta.scrollDown ? (
              <button
                onClick={onScrollDown}
                className="group flex flex-col items-start gap-2"
              >
                <span className="border-b border-white/50 pb-0.5 text-sm uppercase tracking-widest transition-colors group-hover:border-white">
                  {cta.label}
                </span>
                <motion.svg
                  animate={{ y: [0, 8, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-white/70"
                >
                  <path d="M12 5v14M5 12l7 7 7-7" />
                </motion.svg>
              </button>
            ) : cta.booking ? (
              <motion.button
                onClick={() => onBooking?.(cta.href)}
                className="inline-block min-w-[180px] rounded-full bg-white px-10 py-4 text-center text-base font-semibold uppercase tracking-widest text-black transition-all hover:scale-105 active:scale-95 sm:min-w-[200px]"
                animate={{
                  boxShadow: [
                    "0 0 20px 0 rgba(255,255,255,0.3), 0 10px 30px -10px rgba(0,0,0,0.5)",
                    "0 0 30px 5px rgba(255,255,255,0.5), 0 10px 30px -10px rgba(0,0,0,0.5)",
                    "0 0 20px 0 rgba(255,255,255,0.3), 0 10px 30px -10px rgba(0,0,0,0.5)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {cta.label}
              </motion.button>
            ) : (
              <a
                href={cta.href}
                target={cta.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  cta.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="inline-block min-w-[180px] rounded-full bg-white px-10 py-4 text-center text-base font-semibold uppercase tracking-widest text-black shadow-lg shadow-black/50 transition-all hover:scale-105 hover:shadow-xl active:scale-95 sm:min-w-[200px]"
              >
                {cta.label}
              </a>
            )}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
