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
  onVideoProgress?: (percent: number) => void;
}

export default function Slide({
  slide,
  isActive = false,
  onBooking,
  onScrollDown,
  preloadLevel = "metadata",
  onVideoReady,
  onVideoProgress,
}: SlideProps) {
  return (
    <section id={slide.id} className="slide relative overflow-hidden">
      <VideoBackground
        video={slide.media.video}
        poster={slide.media.poster}
        preloadLevel={preloadLevel}
        isActive={isActive}
        onReady={onVideoReady}
        onProgress={onVideoProgress}
        showVideoThreshold={0.6}
      />

      {slide.variant === "menu" ? (
        <div className="absolute inset-0 bg-black/60" />
      ) : (
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.3) 30%, transparent 50%)",
          }}
        />
      )}

      <SlideContent
        slide={slide}
        onBooking={onBooking}
        onScrollDown={onScrollDown}
      />
    </section>
  );
}
