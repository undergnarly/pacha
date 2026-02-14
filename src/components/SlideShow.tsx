"use client";

import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import Slide from "./Slide";
import FooterSlide from "./FooterSlide";
import Header from "./Header";
import DotNav from "./DotNav";
import BookingModal from "./BookingModal";
import LoadingScreen from "./LoadingScreen";
import type { SlideData, FAQItem } from "@/data/types";

interface SlideShowProps {
  slides: SlideData[];
  faqItems: FAQItem[];
  footerConfig?: {
    showMap?: boolean;
    showHours?: boolean;
    showContacts?: boolean;
  };
}

const TRANSITION_MS = 1000;

export default function SlideShow({
  slides,
  faqItems,
  footerConfig = {},
}: SlideShowProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [bookingUrl, setBookingUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);
  const isAnimating = useRef(false);
  const touchStartY = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const totalSlides = slides.length + 1; // +1 for footer

  // Handle hero video load progress
  const handleHeroProgress = useCallback((percent: number) => {
    setLoadProgress(percent);
  }, []);

  const handleHeroReady = useCallback(() => {
    setLoadProgress(1);
    // Hide loading screen when hero video is ready - site is ready to show
    if (loading) {
      setTimeout(() => setLoading(false), 150);
    }
  }, [loading]);

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating.current) return;
      const clamped = Math.max(0, Math.min(index, totalSlides - 1));
      if (clamped === activeIndex) return;
      isAnimating.current = true;
      setActiveIndex(clamped);
      setTimeout(() => {
        isAnimating.current = false;
      }, TRANSITION_MS);
    },
    [activeIndex, totalSlides]
  );

  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  // Wheel handler — one slide per scroll
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (isAnimating.current) return;
      if (e.deltaY > 30) goNext();
      else if (e.deltaY < -30) goPrev();
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [goNext, goPrev]);

  // Touch handler — swipe up/down
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const onTouchEnd = (e: TouchEvent) => {
      if (isAnimating.current) return;
      const delta = touchStartY.current - e.changedTouches[0].clientY;
      if (delta > 50) goNext();
      else if (delta < -50) goPrev();
    };

    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchend", onTouchEnd);
    };
  }, [goNext, goPrev]);

  // Keyboard
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === " ") {
        e.preventDefault();
        goNext();
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        goPrev();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goNext, goPrev]);

  const handleBooking = useCallback((href: string) => {
    const whiteLabel = href.replace("/events/", "/white-label/");
    setBookingUrl(whiteLabel);
  }, []);

  const slideIds = [...slides.map((s) => s.id), "footer"];

  const getPreload = (index: number): "auto" | "metadata" | "none" => {
    // 1. Hero video loads FIRST (highest priority)
    if (index === 0) return "auto";

    // 2. Don't load other videos until hero is ready (loading screen hidden)
    if (loading) return "none";

    // 3. After site shows, sequentially load: current + next 2 + previous
    if (index === activeIndex || index === activeIndex + 1 || index === activeIndex + 2) return "auto";
    if (index === activeIndex - 1) return "auto";

    // Everything else waits
    return "none";
  };

  // Variants that get the decorative frame
  const framedVariants = new Set(["experience", "menu"]);

  // Build all slides array (content slides + footer)
  // useMemo ensures slides re-render when loading/activeIndex changes for proper preload updates
  const allSlides = useMemo(() => [
    ...slides.map((slide, i) => ({
      key: slide.id,
      framed: framedVariants.has(slide.variant),
      content: (
        <Slide
          slide={slide}
          isActive={i === activeIndex}
          onBooking={handleBooking}
          onScrollDown={goNext}
          preloadLevel={getPreload(i)}
          onVideoReady={i === 0 ? handleHeroReady : undefined}
          onVideoProgress={i === 0 ? handleHeroProgress : undefined}
        />
      ),
    })),
    {
      key: "footer",
      framed: false,
      content: <FooterSlide faqItems={faqItems} isActive={activeIndex === slides.length} {...footerConfig} />,
    },
  ], [slides, activeIndex, loading, handleBooking, goNext, handleHeroReady, handleHeroProgress, faqItems, footerConfig]);

  return (
    <>
      <LoadingScreen visible={loading} progress={loadProgress} />

      <Header dark={activeIndex === slides.length} />
      <DotNav
        count={totalSlides}
        activeIndex={activeIndex}
        slideIds={slideIds}
        containerRef={containerRef}
        onDotClick={goTo}
      />

      <div ref={containerRef} className="slide-container relative">
        <motion.div
          animate={{ y: `-${activeIndex * 100}dvh` }}
          transition={{
            duration: TRANSITION_MS / 1000,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {allSlides.map((s) => (
            <div key={s.key} className={`slide-frame${!s.framed ? ' slide-frame--flush' : ''}`}>{s.content}</div>
          ))}
        </motion.div>
      </div>

      <BookingModal
        open={bookingUrl !== null}
        url={bookingUrl ?? ""}
        onClose={() => setBookingUrl(null)}
      />
    </>
  );
}
