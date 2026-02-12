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

      {/* Blur overlay: starts at 40% and increases toward bottom */}
      <div
        className="absolute inset-0 backdrop-blur-md"
        style={{
          maskImage: "linear-gradient(to bottom, transparent 40%, black 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 40%, black 100%)",
        }}
      />

      {/* Gradient darken overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      <SlideContent
        slide={slide}
        onBooking={onBooking}
        onScrollDown={onScrollDown}
      />
    </section>
  );
}
