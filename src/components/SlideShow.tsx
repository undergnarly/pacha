"use client";

import { useState, useRef, useEffect, useCallback } from "react";
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
  heroFlush?: boolean;
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
  heroFlush = false,
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

  // Simulate progress while hero video loads
  useEffect(() => {
    if (!loading) return;
    let progress = 0;
    const interval = setInterval(() => {
      progress += 0.02 + Math.random() * 0.03;
      if (progress > 0.9) progress = 0.9;
      setLoadProgress(progress);
    }, 100);
    return () => clearInterval(interval);
  }, [loading]);

  const handleHeroReady = useCallback(() => {
    setLoadProgress(1);
    setTimeout(() => setLoading(false), 300);
  }, []);

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
    if (index === 0) return "auto";
    if (index <= activeIndex + 2 && index >= activeIndex) return "auto";
    if (index === activeIndex + 3) return "metadata";
    return "none";
  };

  // Build all slides array (content slides + footer)
  const allSlides = [
    ...slides.map((slide, i) => ({
      key: slide.id,
      content: (
        <Slide
          slide={slide}
          isActive={i === activeIndex}
          onBooking={handleBooking}
          onScrollDown={goNext}
          preloadLevel={getPreload(i)}
          onVideoReady={i === 0 ? handleHeroReady : undefined}
        />
      ),
    })),
    {
      key: "footer",
      content: <FooterSlide faqItems={faqItems} isActive={activeIndex === slides.length} {...footerConfig} />,
    },
  ];

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
          {allSlides.map((s, i) => {
            const isLast = i === allSlides.length - 1;
            const isFirst = i === 0 && heroFlush;
            const flush = isLast || isFirst;
            return (
              <div key={s.key} className={`slide-frame${flush ? ' slide-frame--flush' : ''}`}>{s.content}</div>
            );
          })}
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
