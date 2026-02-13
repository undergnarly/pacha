import type { Metadata } from "next";
import SlideShow from "@/components/SlideShow";
import { lodgesSlides } from "@/data/lodges";
import { lodgesFaq } from "@/data/faq";

export const metadata: Metadata = {
  title: "Bamboo Lodges — Stay Overnight with Alpacas",
  description:
    "Spend the night in a bamboo lodge on the alpaca farm in Nuanu, Bali. Includes Alpaca Connection tour, breakfast, AC & Wi-Fi. From 1M IDR per night.",
  openGraph: {
    title: "Bamboo Lodges — Pacha Alpaca",
    description:
      "Wake up with alpacas in a charming bamboo lodge. Includes guided tour, breakfast, and all amenities.",
    url: "https://pacha-alpaca.com/lodges",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://pacha-alpaca.com/lodges",
  },
};

export default function LodgesPage() {
  return (
    <SlideShow
      slides={lodgesSlides}
      faqItems={lodgesFaq}
      footerConfig={{ showMap: true, showHours: false, showContacts: true }}
    />
  );
}
