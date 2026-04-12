"use client";

import SlideShow from "./SlideShow";
import { useLanguage } from "@/i18n/context";
import { getDinnerSlides } from "@/data/dinner";
import { getDinnerFaq } from "@/data/faq";

export default function DinnerContent() {
  const { t } = useLanguage();
  return (
    <SlideShow
      slides={getDinnerSlides(t)}
      faqItems={getDinnerFaq(t)}
      footerConfig={{ showMap: false, showHours: false, showContacts: true }}
    />
  );
}
