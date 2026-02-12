"use client";

import { useRef, useEffect, useCallback } from "react";

interface VideoBackgroundProps {
  video?: string;
  poster: string;
  preloadLevel?: "auto" | "metadata" | "none";
  isActive?: boolean;
  onReady?: () => void;
}

export default function VideoBackground({
  video,
  poster,
  preloadLevel = "metadata",
  isActive = false,
  onReady,
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const readyFired = useRef(false);

  const fireReady = useCallback(() => {
    if (readyFired.current || !onReady) return;
    readyFired.current = true;
    onReady();
  }, [onReady]);

  // Play/pause based on active slide
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    if (isActive) {
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
