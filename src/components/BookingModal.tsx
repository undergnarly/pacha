"use client";

import { useEffect } from "react";
import { trackPixelEvent, trackEvent } from "./Analytics";

interface BookingModalProps {
  open: boolean;
  url: string;
  onClose: () => void;
}

export default function BookingModal({ open, url, onClose }: BookingModalProps) {
  useEffect(() => {
    if (open && url) {
      // Extract experience name from UTM campaign param
      const campaign = new URL(url).searchParams.get("utm_campaign") || "unknown";

      trackPixelEvent("InitiateCheckout", {
        content_name: campaign,
        content_category: "ticket",
      });
      trackEvent("booking_click", { experience: campaign });

      window.open(url, "_blank", "noopener,noreferrer");
      onClose();
    }
  }, [open, url, onClose]);

  return null;
}
