"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Slide from "./Slide";
import FooterSlide from "./FooterSlide";
import Header from "./Header";
import DotNav from "./DotNav";
import MobileBookCTA from "./MobileBookCTA";
import BookingModal from "./BookingModal";
import type { SlideData, FAQItem } from "@/data/types";

interface SlideShowProps {
  slides: SlideData[];
  faqItems: FAQItem[];
  /** Indices of product slides (0-based) to show mobile book CTA */
  bookSlides?: number[];
  /** Footer slide config */
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
    // Convert event URL to white-label URL for iframe
    const whiteLabel = href.replace("/events/", "/white-label/");
    setBookingUrl(whiteLabel);
  }, []);

  const handleMobileBook = useCallback(() => {
    // Default to entrance ticket
    setBookingUrl(
      "https://megatix.co.id/white-label/entrance-to-pacha-alpaca"
    );
  }, []);

  const showMobileCTA = bookSlides.includes(activeIndex);

  // Total slides including footer
  const totalSlides = slides.length + 1;
  const slideIds = [
    ...slides.map((s) => s.id),
    "footer",
  ];

  return (
    <>
      <Header dark={activeIndex === slides.length} />
      <DotNav
        count={totalSlides}
        activeIndex={activeIndex}
        slideIds={slideIds}
        containerRef={containerRef}
      />

      <div ref={containerRef} className="slide-container">
        {slides.map((slide) => (
          <Slide
            key={slide.id}
            slide={slide}
            onBooking={handleBooking}
            onScrollDown={scrollDown}
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
