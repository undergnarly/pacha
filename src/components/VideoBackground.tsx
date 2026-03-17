"use client";

import { useRef, useEffect, useCallback, useState } from "react";

interface VideoBackgroundProps {
  video?: string;
  desktopVideo?: string;
  poster: string;
  isActive?: boolean;
  onReady?: () => void;
  isHero?: boolean;
}

export default function VideoBackground({
  video,
  desktopVideo,
  poster,
  isActive = false,
  onReady,
  isHero = false,
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const readyFired = useRef(false);

  // Whether the video element should be mounted in the DOM
  const [shouldMount, setShouldMount] = useState(isHero);
  // Whether the video has loaded enough to play — controls fade-in
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Always use mobile (9:16) video — desktop shows mobile proportions with side bars
  const videoSrc = video;

  // Mount video element when slide becomes active (keep mounted after)
  useEffect(() => {
    if (isActive && !shouldMount) {
      setShouldMount(true);
    }
  }, [isActive, shouldMount]);

  // Fire onReady when video can play (used only for hero loading screen)
  const fireReady = useCallback(() => {
    if (readyFired.current || !onReady) return;
    readyFired.current = true;
    onReady();
  }, [onReady]);

  // Setup video ready detection + fade-in trigger
  useEffect(() => {
    const el = videoRef.current;

    if (!videoSrc) {
      fireReady();
      return;
    }
    if (!el) return;

    if (el.readyState >= 2) {
      setVideoLoaded(true);
      fireReady();
      return;
    }

    const handleReady = () => {
      setVideoLoaded(true);
      fireReady();
    };
    el.addEventListener("canplay", handleReady);
    el.addEventListener("loadeddata", handleReady);

    // Fallback timeout — show video after 5s even if not fully buffered
    const timeout = setTimeout(handleReady, 5000);

    return () => {
      el.removeEventListener("canplay", handleReady);
      el.removeEventListener("loadeddata", handleReady);
      clearTimeout(timeout);
    };
  }, [videoSrc, shouldMount, fireReady]);

  // Play/pause control — re-runs when shouldMount changes so newly mounted videos start playing
  useEffect(() => {
    const el = videoRef.current;
    if (!el || !videoSrc) return;

    if (isActive) {
      el.currentTime = 0;
      el.play().catch(() => {});

      const watchdog = setInterval(() => {
        if (el.paused) {
          el.play().catch(() => {});
        }
      }, 300);

      return () => clearInterval(watchdog);
    } else {
      el.pause();
    }
  }, [isActive, videoSrc, shouldMount]);

  return (
    <div className="absolute inset-0">
      {/* Poster image — always visible as base layer */}
      <img
        src={poster}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        loading={isHero ? "eager" : "lazy"}
        fetchPriority={isHero ? "high" : "auto"}
      />

      {/* Video layer — mounted only when slide visited, fades in when loaded */}
      {videoSrc && shouldMount && (
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700"
          style={{ opacity: videoLoaded ? 1 : 0 }}
        >
          <source src={videoSrc} type={videoSrc.endsWith('.webm') ? 'video/webm' : 'video/mp4'} />
        </video>
      )}
    </div>
  );
}
