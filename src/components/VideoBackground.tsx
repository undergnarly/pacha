"use client";

import { useRef, useEffect } from "react";

interface VideoBackgroundProps {
  video?: string;
  poster: string;
}

export default function VideoBackground({
  video,
  poster,
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch(() => {
            // Autoplay blocked (iOS Low Power Mode, etc.) — poster shows instead
          });
        } else {
          el.pause();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="absolute inset-0">
      {video ? (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster={poster}
          preload="metadata"
          className="h-full w-full object-cover"
        >
          <source src={video.replace(".mp4", ".webm")} type="video/webm" />
          <source src={video} type="video/mp4" />
        </video>
      ) : (
        <img
          src={poster}
          alt=""
          className="h-full w-full object-cover"
          loading="lazy"
        />
      )}
    </div>
  );
}
