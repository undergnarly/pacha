"use client";

import VideoBackground from "./VideoBackground";
import SlideContent from "./SlideContent";
import type { SlideData } from "@/data/types";

interface SlideProps {
  slide: SlideData;
  isActive?: boolean;
  onBooking?: (href: string) => void;
  onScrollDown?: () => void;
  onVideoReady?: () => void;
}

export default function Slide({
  slide,
  isActive = false,
  onBooking,
  onScrollDown,
  onVideoReady,
}: SlideProps) {
  const isHero = slide.variant === "hero";

  return (
    <section id={slide.id} className="slide relative overflow-hidden">
      <VideoBackground
        video={slide.media.video}
        desktopVideo={slide.media.desktopVideo}
        poster={slide.media.poster}
        isActive={isActive}
        onReady={onVideoReady}
        isHero={isHero}
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
