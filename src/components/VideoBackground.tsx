"use client";

import { useRef, useEffect } from "react";

interface VideoBackgroundProps {
  video?: string;
  poster: string;
  /** "auto" = load immediately, "none" = don't load until told, "metadata" = default */
  preloadLevel?: "auto" | "metadata" | "none";
  /** Called when video can play through */
  onReady?: () => void;
}

export default function VideoBackground({
  video,
  poster,
  preloadLevel = "metadata",
  onReady,
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Play/pause based on visibility
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch(() => {
            // Autoplay blocked — poster shows instead
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

  // Fire onReady when video can play
  useEffect(() => {
    const el = videoRef.current;
    if (!el || !onReady) return;

    if (el.readyState >= 3) {
      onReady();
      return;
    }

    const handler = () => onReady();
    el.addEventListener("canplay", handler);
    return () => el.removeEventListener("canplay", handler);
  }, [onReady]);

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
          preload={preloadLevel}
          className="h-full w-full object-cover"
        >
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
