"use client";

import { useRef, useEffect, useCallback, useState } from "react";

interface VideoBackgroundProps {
  video?: string;
  poster: string;
  preloadLevel?: "auto" | "metadata" | "none";
  isActive?: boolean;
  onReady?: () => void;
  onProgress?: (percent: number) => void;
  showVideoThreshold?: number; // 0-1, when to switch from poster to video
  isHero?: boolean; // For LCP optimization - preload hero poster with high priority
}

export default function VideoBackground({
  video,
  poster,
  preloadLevel = "metadata",
  isActive = false,
  onReady,
  onProgress,
  showVideoThreshold = 0.6,
  isHero = false,
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const readyFired = useRef(false);
  const [loadProgress, setLoadProgress] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  const fireReady = useCallback(() => {
    if (readyFired.current || !onReady) return;
    readyFired.current = true;
    onReady();
  }, [onReady]);

  // Track video load progress
  useEffect(() => {
    const el = videoRef.current;
    if (!el || !video) return;

    const updateProgress = () => {
      if (el.buffered.length > 0 && el.duration) {
        const bufferedEnd = el.buffered.end(el.buffered.length - 1);
        const percent = bufferedEnd / el.duration;
        setLoadProgress(percent);
        onProgress?.(percent);

        // Show video when threshold reached
        if (percent >= showVideoThreshold && !showVideo) {
          setShowVideo(true);
        }
      }
    };

    el.addEventListener("progress", updateProgress);
    el.addEventListener("loadeddata", updateProgress);
    el.addEventListener("canplaythrough", () => {
      setLoadProgress(1);
      onProgress?.(1);
      setShowVideo(true);
    });

    return () => {
      el.removeEventListener("progress", updateProgress);
      el.removeEventListener("loadeddata", updateProgress);
    };
  }, [video, onProgress, showVideoThreshold, showVideo]);

  // Play/pause based on active slide
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    if (isActive) {
      el.currentTime = 0;
      el.play().catch(() => {});
    } else {
      el.pause();
    }
  }, [isActive]);

  // Fire onReady when video has data + fallback timeout
  useEffect(() => {
    const el = videoRef.current;
    if (!onReady) return;

    // If no video src, fire immediately
    if (!video) {
      fireReady();
      return;
    }

    if (el && el.readyState >= 2) {
      fireReady();
      return;
    }

    const onLoadedData = () => fireReady();
    const onCanPlay = () => fireReady();
    const onPlaying = () => fireReady();

    el?.addEventListener("loadeddata", onLoadedData);
    el?.addEventListener("canplay", onCanPlay);
    el?.addEventListener("playing", onPlaying);

    // Fallback: don't hang forever if video fails to load
    const timeout = setTimeout(() => fireReady(), 5000);

    return () => {
      el?.removeEventListener("loadeddata", onLoadedData);
      el?.removeEventListener("canplay", onCanPlay);
      el?.removeEventListener("playing", onPlaying);
      clearTimeout(timeout);
    };
  }, [video, onReady, fireReady]);

  // When preloadLevel changes to "auto", force load
  useEffect(() => {
    const el = videoRef.current;
    if (!el || preloadLevel !== "auto") return;
    el.load();
    el.play().catch(() => {});
  }, [preloadLevel]);

  // Lazy load video when it approaches viewport (for preload="none" videos)
  useEffect(() => {
    const el = videoRef.current;
    if (!el || preloadLevel === "auto" || !video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            // Video is approaching viewport - start loading
            el.load();
            observer.disconnect();
          }
        });
      },
      {
        // Load when video is 200px away from viewport
        rootMargin: "200px",
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [video, preloadLevel]);

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  // Determine video source based on device
  const getVideoSource = () => {
    if (!video) return null;

    // Use optimized hero videos ONLY for main hero (not dinner-hero, lodges-hero)
    if (video === '/videos/hero.mp4') {
      return isMobile
        ? '/videos/hero-mobile.webm'
        : '/videos/hero-optimized.mp4';
    }

    return video;
  };

  const videoSrc = getVideoSource();

  return (
    <div className="absolute inset-0">
      {/* Poster image - always show as base layer */}
      <img
        src={poster}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
        fetchPriority={isHero ? "high" : "auto"}
      />

      {/* Video layer - only visible when loaded enough */}
      {videoSrc && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload={preloadLevel}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            showVideo ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {isMobile && videoSrc.includes('hero-mobile') ? (
            <source src={videoSrc} type="video/webm" />
          ) : (
            <source src={videoSrc} type="video/mp4" />
          )}
        </video>
      )}
    </div>
  );
}
