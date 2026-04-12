import type { SlideData } from "./types";
import type { Translations } from "@/i18n/translations";

export function getHomeSlides(t: Translations): SlideData[] {
  return [
    {
      id: "hero",
      variant: "hero",
      headline: t.home.hero.headline,
      subtitle: t.home.hero.subtitle,
      media: {
        video: "/videos/hero-short.mp4",
        desktopVideo: "/videos/hero-desktop.mp4",
        poster: "/images/hero-poster-hq.webp",
      },
      cta: {
        label: t.ui.explore,
        href: "#hook",
        scrollDown: true,
      },
    },
    {
      id: "hook",
      variant: "hook",
      headline: t.home.hook.headline,
      media: {
        video: "/videos/hook-short.mp4",
        desktopVideo: "/videos/hook-desktop.mp4",
        poster: "/images/hook.webp",
      },
      rating: {
        score: 4.6,
        count: "170+",
      },
      quote: {
        text: t.home.hook.quote,
        author: "Jessica A.",
      },
      stats: [
        { value: "5", label: t.home.hook.stats.experiences },
        { value: "12", label: t.home.hook.stats.alpacas },
        { value: "150K", label: t.home.hook.stats.fromIdr },
      ],
    },
    {
      id: "entrance",
      variant: "experience",
      headline: t.home.entrance.headline,
      subtitle: t.home.entrance.subtitle,
      price: "From 150K IDR",
      details: t.home.entrance.details,
      media: {
        video: "/videos/entrance-short.mp4",
        desktopVideo: "/videos/entrance-desktop.mp4",
        poster: "/images/entrance.webp",
      },
      cta: {
        label: t.ui.bookNow,
        href: "https://megatix.co.id/events/entrance-to-pacha-alpaca?utm_source=pacha&utm_medium=website&utm_campaign=entrance",
        booking: true,
      },
    },
    {
      id: "connection",
      variant: "experience",
      headline: t.home.connection.headline,
      subtitle: t.home.connection.subtitle,
      price: "From 200K IDR",
      details: t.home.connection.details,
      media: {
        video: "/videos/connection-short.mp4",
        desktopVideo: "/videos/connection-desktop.mp4",
        poster: "/images/connection.webp",
      },
      cta: {
        label: t.ui.bookNow,
        href: "https://megatix.co.id/events/alpaca-connection-in-nuanu?utm_source=pacha&utm_medium=website&utm_campaign=connection",
        booking: true,
      },
    },
    {
      id: "dinner",
      variant: "experience",
      headline: t.home.dinner.headline,
      subtitle: t.home.dinner.subtitle,
      price: "1.9M IDR",
      details: t.home.dinner.details,
      media: {
        video: "/videos/dinner-short.mp4",
        desktopVideo: "/videos/dinner-desktop.mp4",
        poster: "/images/dinner.webp",
      },
      cta: {
        label: t.ui.bookNow,
        href: "https://megatix.co.id/events/private-dinner-with-alpacas?utm_source=pacha&utm_medium=website&utm_campaign=dinner",
        booking: true,
      },
    },
    {
      id: "lodge",
      variant: "experience",
      headline: t.home.lodge.headline,
      subtitle: t.home.lodge.subtitle,
      price: "From 1.5M IDR",
      details: t.home.lodge.details,
      media: {
        video: "/videos/bamboo-nest-short.mp4",
        desktopVideo: "/videos/bamboo-nest-desktop.mp4",
        poster: "/images/bamboo-nest.webp",
      },
      cta: {
        label: t.ui.viewLodges,
        href: "/lodges",
      },
    },
    {
      id: "alpacafe",
      variant: "experience",
      headline: t.home.alpacafe.headline,
      subtitle: t.home.alpacafe.subtitle,
      details: t.home.alpacafe.details,
      media: {
        video: "/videos/alpacafe-short.mp4",
        desktopVideo: "/videos/alpacafe-desktop.mp4",
        poster: "/images/alpacafe.webp",
      },
      cta: {
        label: t.ui.discover,
        href: "/alpacafe",
      },
    },
  ];
}
