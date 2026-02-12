"use client";

import { useEffect } from "react";

interface BookingModalProps {
  open: boolean;
  url: string;
  onClose: () => void;
}

export default function BookingModal({ open, url, onClose }: BookingModalProps) {
  useEffect(() => {
    if (open && url) {
      window.open(url, "_blank", "noopener,noreferrer");
      onClose();
    }
  }, [open, url, onClose]);

  return null;
}
