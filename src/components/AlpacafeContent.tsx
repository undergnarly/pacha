"use client";

import SlideShow from "./SlideShow";
import { useLanguage } from "@/i18n/context";
import { getAlpacafeSlides } from "@/data/alpacafe";
import { getAlpacafeFaq } from "@/data/faq";

export default function AlpacafeContent() {
  const { t } = useLanguage();
  return (
    <SlideShow
      slides={getAlpacafeSlides(t)}
      faqItems={getAlpacafeFaq(t)}
      footerConfig={{ showMap: false, showHours: false, showContacts: true }}
    />
  );
}
