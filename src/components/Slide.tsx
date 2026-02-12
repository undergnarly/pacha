"use client";

import VideoBackground from "./VideoBackground";
import SlideContent from "./SlideContent";
import type { SlideData } from "@/data/types";

interface SlideProps {
  slide: SlideData;
  onBooking?: (href: string) => void;
  onScrollDown?: () => void;
}

export default function Slide({ slide, onBooking, onScrollDown }: SlideProps) {
  return (
    <section id={slide.id} className="slide relative overflow-hidden">
      <VideoBackground video={slide.media.video} poster={slide.media.poster} />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      <SlideContent
        slide={slide}
        onBooking={onBooking}
        onScrollDown={onScrollDown}
      />
    </section>
  );
}
