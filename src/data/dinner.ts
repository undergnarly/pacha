import type { SlideData } from "./types";
import type { Translations } from "@/i18n/translations";

export function getDinnerSlides(t: Translations): SlideData[] {
  return [
    {
      id: "dinner-hero",
      variant: "hero",
      headline: t.dinner.hero.headline,
      subtitle: t.dinner.hero.subtitle,
      media: {
        video: "/videos/dinner-hero.mp4",
        desktopVideo: "/videos/dinner-hero-desktop.mp4",
        poster: "/images/dinner-hero-poster.webp",
      },
      cta: {
        label: t.ui.explore,
        href: "#dinner-experience",
        scrollDown: true,
      },
    },
    {
      id: "dinner-experience",
      variant: "experience",
      headline: t.dinner.experience.headline,
      subtitle: t.dinner.experience.subtitle,
      price: "1.9M IDR",
      details: t.dinner.experience.details,
      media: {
        video: "/videos/dinner-exp.mp4",
        desktopVideo: "/videos/dinner-exp-desktop.mp4",
        poster: "/images/dinner-exp.webp",
      },
      cta: {
        label: t.ui.bookNow,
        href: "https://megatix.co.id/events/private-dinner-with-alpacas?utm_source=pacha&utm_medium=website&utm_campaign=dinner",
        booking: true,
      },
    },
  ];
}
