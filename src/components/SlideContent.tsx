"use client";

import { motion, type Variants } from "framer-motion";
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

export default function SlideContent({
  slide,
  onBooking,
  onScrollDown,
}: SlideContentProps) {
  const { variant, headline, subtitle, price, cta, stats, quote, rating } =
    slide;

  if (variant === "hook") {
    return (
      <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-16 sm:px-12" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-xl"
        >
          {rating && (
            <motion.div custom={0} variants={fadeUp} className="mb-4 flex items-center gap-2">
              <span className="text-2xl font-bold">{rating.score}</span>
              <span className="text-3xl text-yellow-400">★</span>
              <span className="text-sm text-white/70">({rating.count} reviews on Google)</span>
            </motion.div>
          )}

          {quote && (
            <motion.blockquote
              custom={1}
              variants={fadeUp}
              className="mb-6 border-l-2 border-white/40 pl-4 text-lg italic text-white/90 sm:text-xl"
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
              className="flex flex-wrap gap-6"
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
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-xl"
      >
        <motion.h2
          custom={0}
          variants={fadeUp}
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
            variants={fadeUp}
            className="mb-4 text-base text-white/80 sm:text-lg"
          >
            {subtitle}
          </motion.p>
        )}

        {price && (
          <motion.p
            custom={2}
            variants={fadeUp}
            className="mb-6 text-xl font-semibold sm:text-2xl"
          >
            {price}
          </motion.p>
        )}

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
              <button
                onClick={() => onBooking?.(cta.href)}
                className="inline-block min-w-[160px] rounded-full border border-white px-8 py-3 text-center text-sm uppercase tracking-widest transition-colors hover:bg-white hover:text-black active:scale-95"
              >
                {cta.label}
              </button>
            ) : (
              <a
                href={cta.href}
                target={cta.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  cta.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="inline-block min-w-[160px] rounded-full border border-white px-8 py-3 text-center text-sm uppercase tracking-widest transition-colors hover:bg-white hover:text-black active:scale-95"
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
