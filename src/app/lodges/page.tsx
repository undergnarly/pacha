import type { Metadata } from "next";
import SlideShow from "@/components/SlideShow";
import { lodgesSlides } from "@/data/lodges";
import { lodgesFaq } from "@/data/faq";

export const metadata: Metadata = {
  title: "Lodges — Pacha Alpaca | Stay Overnight with Alpacas in Bali",
  description:
    "Spend the night in a bamboo lodge on the alpaca farm. Wake up to friendly alpacas, enjoy breakfast, and experience the Alpaca Connection tour.",
};

export default function LodgesPage() {
  return (
    <SlideShow
      slides={lodgesSlides}
      faqItems={lodgesFaq}
      heroFlush
      footerConfig={{ showMap: true, showHours: false, showContacts: true }}
    />
  );
}
