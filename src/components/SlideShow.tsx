"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Slide from "./Slide";
import FooterSlide from "./FooterSlide";
import Header from "./Header";
import DotNav from "./DotNav";
import MobileBookCTA from "./MobileBookCTA";
import BookingModal from "./BookingModal";
import LoadingScreen from "./LoadingScreen";
import type { SlideData, FAQItem } from "@/data/types";

interface SlideShowProps {
  slides: SlideData[];
  faqItems: FAQItem[];
  bookSlides?: number[];
  footerConfig?: {
    showMap?: boolean;
    showHours?: boolean;
    showContacts?: boolean;
  };
}

export default function SlideShow({
  slides,
  faqItems,
  bookSlides = [],
  footerConfig = {},
}: SlideShowProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [bookingUrl, setBookingUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);

  // Simulate progress while hero video loads
  useEffect(() => {
    if (!loading) return;
    let progress = 0;
    const interval = setInterval(() => {
      progress += 0.02 + Math.random() * 0.03;
      if (progress > 0.9) progress = 0.9; // cap at 90% until video ready
      setLoadProgress(progress);
    }, 100);
    return () => clearInterval(interval);
  }, [loading]);

  const handleHeroReady = useCallback(() => {
    setLoadProgress(1);
    // Small delay for the bar to visually reach 100%
    setTimeout(() => setLoading(false), 300);
  }, []);

  // Track active slide via Intersection Observer
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Array.from(container.children).indexOf(
              entry.target as HTMLElement
            );
            if (index >= 0) setActiveIndex(index);
          }
        });
      },
      {
        root: container,
        threshold: 0.6,
      }
    );

    Array.from(container.children).forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, [slides.length]);

  const scrollDown = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const next = container.children[1] as HTMLElement;
    next?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleBooking = useCallback((href: string) => {
    const whiteLabel = href.replace("/events/", "/white-label/");
    setBookingUrl(whiteLabel);
  }, []);

  const handleMobileBook = useCallback(() => {
    setBookingUrl(
      "https://megatix.co.id/white-label/entrance-to-pacha-alpaca"
    );
  }, []);

  const showMobileCTA = bookSlides.includes(activeIndex);

  const totalSlides = slides.length + 1;
  const slideIds = [...slides.map((s) => s.id), "footer"];

  // Determine preload level: current + 2 ahead get "auto", rest "none"
  const getPreload = (index: number): "auto" | "metadata" | "none" => {
    if (index === 0) return "auto"; // hero always loads
    if (index <= activeIndex + 2 && index >= activeIndex) return "auto";
    if (index === activeIndex + 3) return "metadata"; // next one gets metadata
    return "none";
  };

  return (
    <>
      <LoadingScreen visible={loading} progress={loadProgress} />

      <Header dark={activeIndex === slides.length} />
      <DotNav
        count={totalSlides}
        activeIndex={activeIndex}
        slideIds={slideIds}
        containerRef={containerRef}
      />

      <div ref={containerRef} className="slide-container">
        {slides.map((slide, i) => (
          <Slide
            key={slide.id}
            slide={slide}
            onBooking={handleBooking}
            onScrollDown={scrollDown}
            preloadLevel={getPreload(i)}
            onVideoReady={i === 0 ? handleHeroReady : undefined}
          />
        ))}

        <FooterSlide faqItems={faqItems} {...footerConfig} />
      </div>

      <MobileBookCTA visible={showMobileCTA} onBook={handleMobileBook} />

      <BookingModal
        open={bookingUrl !== null}
        url={bookingUrl ?? ""}
        onClose={() => setBookingUrl(null)}
      />
    </>
  );
}
