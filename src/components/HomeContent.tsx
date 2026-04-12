"use client";

import SlideShow from "./SlideShow";
import { useLanguage } from "@/i18n/context";
import { getHomeSlides } from "@/data/home";
import { getHomeFaq } from "@/data/faq";

export default function HomeContent() {
  const { t } = useLanguage();
  return (
    <SlideShow
      slides={getHomeSlides(t)}
      faqItems={getHomeFaq(t)}
      footerConfig={{ showMap: true, showHours: true, showContacts: true }}
    />
  );
}
