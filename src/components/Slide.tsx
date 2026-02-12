"use client";

import VideoBackground from "./VideoBackground";
import SlideContent from "./SlideContent";
import type { SlideData } from "@/data/types";

interface SlideProps {
  slide: SlideData;
  onBooking?: (href: string) => void;
  onScrollDown?: () => void;
  preloadLevel?: "auto" | "metadata" | "none";
  onVideoReady?: () => void;
}

export default function Slide({
  slide,
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
        onReady={onVideoReady}
      />

      {/* Soft blur: starts at 50%, gentle increase to bottom */}
      <div
        className="absolute inset-0 backdrop-blur-sm"
        style={{
          maskImage: "linear-gradient(to bottom, transparent 50%, black 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 50%, black 100%)",
        }}
      />

      {/* Light gradient for text readability — no heavy darkening */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      <SlideContent
        slide={slide}
        onBooking={onBooking}
        onScrollDown={onScrollDown}
      />
    </section>
  );
}
