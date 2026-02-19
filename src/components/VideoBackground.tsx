"use client";

import { useRef, useEffect, useCallback, useState } from "react";

interface VideoBackgroundProps {
  video?: string;
  poster: string;
  preloadLevel?: "auto" | "metadata" | "none";
  isActive?: boolean;
  onReady?: () => void;
  isHero?: boolean;
}

export default function VideoBackground({
  video,
  poster,
  preloadLevel = "metadata",
  isActive = false,
  onReady,
  isHero = false,
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const readyFired = useRef(false);

  // Fire onReady when video can play
  const fireReady = useCallback(() => {
    if (readyFired.current || !onReady) return;
    readyFired.current = true;
    onReady();
  }, [onReady]);

  // Setup video ready detection
  useEffect(() => {
    const el = videoRef.current;
    if (!onReady || !video) {
      fireReady();
      return;
    }
    if (!el) return;

    if (el.readyState >= 2) {
      fireReady();
      return;
    }

    const handleReady = () => fireReady();
    el.addEventListener("canplay", handleReady);
    el.addEventListener("loadeddata", handleReady);

    // Fallback timeout
    const timeout = setTimeout(fireReady, 5000);

    return () => {
      el.removeEventListener("canplay", handleReady);
      el.removeEventListener("loadeddata", handleReady);
      clearTimeout(timeout);
    };
  }, [video, onReady, fireReady]);

  // Simple play/pause control
  useEffect(() => {
    const el = videoRef.current;
    if (!el || !video) return;

    if (isActive) {
      el.currentTime = 0;
      el.play().catch(() => {});

      // Simple watchdog - just keep trying to play
      const watchdog = setInterval(() => {
        if (el.paused) {
          el.play().catch(() => {});
        }
      }, 300);

      return () => clearInterval(watchdog);
    } else {
      el.pause();
    }
  }, [isActive, video]);

  return (
    <div className="absolute inset-0">
      {/* Poster image */}
      <img
        src={poster}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
        fetchPriority={isHero ? "high" : "auto"}
      />

      {/* Video layer */}
      {video && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload={preloadLevel}
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={video} type={video.endsWith('.webm') ? 'video/webm' : 'video/mp4'} />
        </video>
      )}
    </div>
  );
}
