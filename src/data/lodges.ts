import type { SlideData } from "./types";
import type { Translations } from "@/i18n/translations";

export function getLodgesSlides(t: Translations): SlideData[] {
  return [
    {
      id: "lodges-hero",
      variant: "hero",
      headline: t.lodges.hero.headline,
      subtitle: t.lodges.hero.subtitle,
      media: {
        video: "/videos/lodges-hero-short.mp4",
        desktopVideo: "/videos/lodges-hero-desktop.mp4",
        poster: "/images/lodges-hero-poster.webp",
      },
      cta: {
        label: t.ui.explore,
        href: "#alpaca-lodge",
        scrollDown: true,
      },
    },
    {
      id: "alpaca-lodge",
      variant: "experience",
      headline: t.lodges.alpacaLodge.headline,
      subtitle: t.lodges.alpacaLodge.subtitle,
      price: "From 1.5M IDR / night",
      details: t.lodges.alpacaLodge.details,
      media: {
        video: "/videos/alpaca-lodge-short.mp4",
        desktopVideo: "/videos/alpaca-lodge-desktop.mp4",
        poster: "/images/alpaca-lodge.webp",
      },
      cta: {
        label: t.ui.bookOnAirbnb,
        href: "https://www.airbnb.com/rooms/1263411619445698751",
      },
    },
    {
      id: "bamboo-nest",
      variant: "experience",
      headline: t.lodges.bambooNest.headline,
      subtitle: t.lodges.bambooNest.subtitle,
      price: "From 1M IDR / night",
      details: t.lodges.bambooNest.details,
      media: {
        video: "/videos/bamboo-nest-short.mp4",
        desktopVideo: "/videos/bamboo-nest-desktop.mp4",
        poster: "/images/bamboo-nest.webp",
      },
      cta: {
        label: t.ui.bookOnAirbnb,
        href: "https://www.airbnb.com/rooms/1436662283551329575",
      },
    },
  ];
}
