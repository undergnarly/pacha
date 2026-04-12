import type { Metadata } from "next";
import LodgesContent from "@/components/LodgesContent";

export const metadata: Metadata = {
  title: "Bamboo Lodges — Stay Overnight with Alpacas",
  description:
    "Spend the night in a bamboo lodge on the alpaca farm in Nuanu, Bali. AC & Wi-Fi included. From 1M IDR per night.",
  openGraph: {
    title: "Bamboo Lodges — Pacha Alpaca",
    description:
      "Wake up with alpacas in a charming bamboo lodge. AC, Wi-Fi, and all amenities included.",
    url: "https://pacha-alpaca.com/lodges",
    siteName: "Pacha Alpaca",
    type: "website",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bamboo Lodges — Pacha Alpaca",
    description:
      "Wake up with alpacas in a charming bamboo lodge. AC, Wi-Fi, and all amenities included.",
    images: ["/images/og-image.jpg"],
  },
  alternates: {
    canonical: "https://pacha-alpaca.com/lodges",
  },
};

export default function LodgesPage() {
  return <LodgesContent />;
}
