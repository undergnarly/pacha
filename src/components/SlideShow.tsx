"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import Slide from "./Slide";
import FooterSlide from "./FooterSlide";
import Header from "./Header";
import DotNav from "./DotNav";
import BookingModal from "./BookingModal";
import LoadingScreen from "./LoadingScreen";
import { trackEvent } from "./Analytics";
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
  const [postersReady, setPostersReady] = useState(false);
  const isAnimating = useRef(false);
  const touchStartY = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const slideStartTime = useRef<number>(Date.now());
  const currentSlideId = useRef<string>("");

  const totalSlides = slides.length + 1; // +1 for footer

  // Handle hero video load progress
  const handleHeroProgress = useCallback((percent: number) => {
    setLoadProgress(percent);

    // Hide loading screen when video reaches 60-70%
    if (percent >= 0.6 && loading) {
      setTimeout(() => setLoading(false), 300);
    }
  }, [loading]);

  const handleHeroReady = useCallback(() => {
    setLoadProgress(1);
  }, []);

  // Preload posters for first 3 slides, then allow videos to load
  useEffect(() => {
    const postersToPreload = slides.slice(0, 3).map(s => s.media.poster);

    // Add preload link hints to <head> for faster loading
    const preloadLinks = postersToPreload.map((src, index) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      link.type = 'image/webp';
      // Hero already has fetchPriority="high" in layout
      if (index > 0) {
        link.setAttribute('fetchpriority', 'high');
      }
      return link;
    });

    preloadLinks.forEach(link => document.head.appendChild(link));

    // Track actual image loading
    const preloadPoster = (src: string) => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = () => resolve(); // Even on error, continue
        img.src = src;
      });
    };

    Promise.all(postersToPreload.map(preloadPoster)).then(() => {
      setPostersReady(true);
    });

    // Cleanup preload links on unmount
    return () => {
      preloadLinks.forEach(link => {
        if (link.parentNode) {
          document.head.removeChild(link);
        }
      });
    };
  }, [slides]);

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

  // Analytics: track slide timing and views
  useEffect(() => {
    if (loading) return; // Don't track until site loads

    const allSlideIds = [...slides.map((s) => s.id), "footer"];
    const currentId = allSlideIds[activeIndex];
    const currentSlide = slides[activeIndex];

    // Track time spent on previous slide
    if (currentSlideId.current && slideStartTime.current) {
      const timeSpent = Math.round((Date.now() - slideStartTime.current) / 1000);
      trackEvent("slide_timing", {
        slide_id: currentSlideId.current,
        time_seconds: timeSpent,
        slide_index: activeIndex - 1,
      });
    }

    // Track new slide view
    trackEvent("slide_view", {
      slide_id: currentId,
      slide_index: activeIndex,
      slide_type: currentSlide?.variant || "footer",
      slide_title: currentSlide?.headline || "Footer",
    });

    // Reset timer
    slideStartTime.current = Date.now();
    currentSlideId.current = currentId;
  }, [activeIndex, loading, slides]);

  // Analytics: track session end
  useEffect(() => {
    const handleBeforeUnload = () => {
      if (currentSlideId.current && slideStartTime.current) {
        const timeSpent = Math.round((Date.now() - slideStartTime.current) / 1000);
        trackEvent("session_end", {
          last_slide: currentSlideId.current,
          last_slide_time: timeSpent,
          total_slides_viewed: activeIndex + 1,
        });
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [activeIndex]);

  const getPreload = (index: number): "auto" | "metadata" | "none" => {
    // Don't load videos until posters are ready
    if (!postersReady) return "none";

    // Hero video loads after posters
    if (index === 0) return "auto";

    // Current slide and next 2 slides should be loading
    if (index === activeIndex || index === activeIndex + 1 || index === activeIndex + 2) return "auto";

    // Previous slide (for back navigation)
    if (index === activeIndex - 1) return "auto";

    // Everything else lazy loads
    return "none";
  };

  // Variants that get the decorative frame
  const framedVariants = new Set(["experience", "menu"]);

  // Build all slides array (content slides + footer)
  const allSlides = [
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
