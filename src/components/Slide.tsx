"use client";

import VideoBackground from "./VideoBackground";
import SlideContent from "./SlideContent";
import type { SlideData } from "@/data/types";

interface SlideProps {
  slide: SlideData;
  isActive?: boolean;
  onBooking?: (href: string) => void;
  onScrollDown?: () => void;
  preloadLevel?: "auto" | "metadata" | "none";
  onVideoReady?: () => void;
}

export default function Slide({
  slide,
  isActive = false,
  onBooking,
  onScrollDown,
  preloadLevel = "metadata",
  onVideoReady,
}: SlideProps) {
  return (
    <section id={slide.id} className="slide relative overflow-hidden">
      <VideoBackground
        video={slide.media.video}
        poster={slide.media.poster}
        preloadLevel={preloadLevel}
        isActive={isActive}
        onReady={onVideoReady}
      />

      {/* Top vignette: subtle darken from top for header readability */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, transparent 10%)",
        }}
      />

      {/* Bottom vignette: darken from 50% down for text readability */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.3) 30%, transparent 50%)",
        }}
      />

      <SlideContent
        slide={slide}
        onBooking={onBooking}
        onScrollDown={onScrollDown}
      />
    </section>
  );
}
