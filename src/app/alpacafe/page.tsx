import type { Metadata } from "next";
import SlideShow from "@/components/SlideShow";
import { alpacafeSlides } from "@/data/alpacafe";
import { alpacafeFaq } from "@/data/faq";

export const metadata: Metadata = {
  title: "AlpaCafe — Pacha Alpaca | Coffee with Alpacas in Bali",
  description:
    "Sip specialty coffee and enjoy light bites surrounded by friendly alpacas at AlpaCafe in Nuanu City, Bali.",
};

export default function AlpaCafePage() {
  return (
    <SlideShow
      slides={alpacafeSlides}
      faqItems={alpacafeFaq}
      footerConfig={{ showMap: false, showHours: true, showContacts: true }}
    />
  );
}
