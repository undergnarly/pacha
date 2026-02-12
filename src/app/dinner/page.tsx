import type { Metadata } from "next";
import SlideShow from "@/components/SlideShow";
import { dinnerSlides } from "@/data/dinner";
import { dinnerFaq } from "@/data/faq";

export const metadata: Metadata = {
  title: "Private Dinner — Pacha Alpaca | Romantic Dinner with Alpacas in Bali",
  description:
    "A private candle-lit dinner surrounded by alpacas. Includes bouquet, special dish, and photography. The most romantic experience in Bali.",
};

export default function DinnerPage() {
  return (
    <SlideShow
      slides={dinnerSlides}
      faqItems={dinnerFaq}
      bookSlides={[]}
      footerConfig={{ showMap: false, showHours: false, showContacts: true }}
    />
  );
}
