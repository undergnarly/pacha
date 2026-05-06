"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import type { CTA, SlideData } from "@/data/types";
import { useLanguage } from "@/i18n/context";

interface CTAHandlers {
  onBooking?: (href: string) => void;
  onScrollDown?: () => void;
  onOpenModal?: () => void;
  secondary?: boolean;
}

function renderCTA(cta: CTA, h: CTAHandlers) {
  if (cta.scrollDown) {
    return (
      <button
        onClick={h.onScrollDown}
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
    );
  }

  if (cta.openModal) {
    return (
      <motion.button
        onClick={h.onOpenModal}
        className="inline-block min-w-[180px] rounded-full bg-white px-10 py-4 text-center text-base font-semibold uppercase tracking-widest text-black transition-all hover:scale-105 active:scale-95 sm:min-w-[200px]"
        animate={{
          boxShadow: [
            "0 0 20px 0 rgba(255,255,255,0.3), 0 10px 30px -10px rgba(0,0,0,0.5)",
            "0 0 30px 5px rgba(255,255,255,0.5), 0 10px 30px -10px rgba(0,0,0,0.5)",
            "0 0 20px 0 rgba(255,255,255,0.3), 0 10px 30px -10px rgba(0,0,0,0.5)",
          ],
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        {cta.label}
      </motion.button>
    );
  }

  if (cta.booking) {
    return (
      <motion.button
        onClick={() => h.onBooking?.(cta.href)}
        className="inline-block min-w-[180px] rounded-full bg-white px-10 py-4 text-center text-base font-semibold uppercase tracking-widest text-black transition-all hover:scale-105 active:scale-95 sm:min-w-[200px]"
        animate={{
          boxShadow: [
            "0 0 20px 0 rgba(255,255,255,0.3), 0 10px 30px -10px rgba(0,0,0,0.5)",
            "0 0 30px 5px rgba(255,255,255,0.5), 0 10px 30px -10px rgba(0,0,0,0.5)",
            "0 0 20px 0 rgba(255,255,255,0.3), 0 10px 30px -10px rgba(0,0,0,0.5)",
          ],
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        {cta.label}
      </motion.button>
    );
  }

  const isWhatsApp = cta.href.includes("wa.me");
  const isExternal = cta.href.startsWith("http");
  const baseClass =
    "inline-flex min-w-[180px] items-center justify-center gap-2 rounded-full px-10 py-4 text-center text-base font-semibold uppercase tracking-widest transition-all active:scale-95 sm:min-w-[200px]";
  const styleClass = isWhatsApp
    ? "border-2 border-[#25D366]/70 bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20"
    : "border-2 border-white/80 bg-transparent text-white hover:bg-white/10";

  return (
    <a
      href={cta.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`${baseClass} ${styleClass}`}
    >
      {isWhatsApp && (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      )}
      {cta.label}
    </a>
  );
}

interface SlideContentProps {
  slide: SlideData;
  onBooking?: (href: string) => void;
  onScrollDown?: () => void;
  onOpenModal?: () => void;
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
  onOpenModal,
}: SlideContentProps) {
  const { variant, headline, subtitle, price, cta, secondaryCta, stats, quote, rating, menuItems, menuNote } =
    slide;
  const [expanded, setExpanded] = useState(false);
  const hasDetails = slide.details && slide.details.length > 0;
  const { t } = useLanguage();

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
              <p className="mt-3 text-center text-xs text-white/40">{t.ui.allPricesNote}</p>
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
              <span className="text-sm font-semibold text-white/70">({rating.count} {t.ui.reviewsOnGoogle})</span>
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
              ? "text-3xl sm:text-4xl"
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
                  {expanded ? t.ui.less : t.ui.more}
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
            {renderCTA(cta, { onBooking, onScrollDown, onOpenModal })}
          </motion.div>
        )}

        {secondaryCta && (
          <motion.div custom={4} variants={fadeUp} className="mt-4">
            {renderCTA(secondaryCta, { onBooking, onScrollDown, onOpenModal, secondary: true })}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
