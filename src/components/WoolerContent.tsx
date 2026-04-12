"use client";

import SlideShow from "./SlideShow";
import { useLanguage } from "@/i18n/context";
import { getWoolerSlides } from "@/data/wooler";
import { getWoolerFaq } from "@/data/faq";

export default function WoolerContent() {
  const { t } = useLanguage();
  return (
    <SlideShow
      slides={getWoolerSlides(t)}
      faqItems={getWoolerFaq(t)}
      footerConfig={{ showMap: false, showHours: false, showContacts: true }}
    />
  );
}
