"use client";

import SlideShow from "./SlideShow";
import { useLanguage } from "@/i18n/context";
import { getLodgesSlides } from "@/data/lodges";
import { getLodgesFaq } from "@/data/faq";

export default function LodgesContent() {
  const { t } = useLanguage();
  return (
    <SlideShow
      slides={getLodgesSlides(t)}
      faqItems={getLodgesFaq(t)}
      footerConfig={{ showMap: false, showHours: false, showContacts: true }}
    />
  );
}
