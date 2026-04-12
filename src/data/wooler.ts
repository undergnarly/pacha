import type { SlideData } from "./types";
import type { Translations } from "@/i18n/translations";

export function getWoolerSlides(t: Translations): SlideData[] {
  return [
    {
      id: "wooler-hero",
      variant: "hero",
      headline: t.wooler.hero.headline,
      subtitle: t.wooler.hero.subtitle,
      media: {
        video: "/videos/wooler-hero.mp4",
        poster: "/images/wooler-hero.webp",
      },
      cta: {
        label: t.ui.explore,
        href: "#wooler-event",
        scrollDown: true,
      },
    },
    {
      id: "wooler-event",
      variant: "experience",
      headline: t.wooler.event.headline,
      subtitle: t.wooler.event.subtitle,
      media: {
        video: "/videos/wooler-event.mp4",
        poster: "/images/wooler-event.webp",
      },
      cta: {
        label: t.ui.followForUpdates,
        href: "https://instagram.com/pacha_alpaca",
      },
    },
  ];
}
