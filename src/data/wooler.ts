import type { SlideData } from "./types";

export const woolerSlides: SlideData[] = [
  {
    id: "wooler-hero",
    variant: "hero",
    headline: "Music, Sunsets & Alpacas",
    subtitle:
      "Welcome to the fluffiest show on Earth. Live DJ sets, golden hour glow, and curious alpacas.",
    media: {
      video: "/videos/wooler-hero.mp4",
      poster: "/images/wooler-hero.webp",
    },
    cta: {
      label: "Explore",
      href: "#wooler-event",
      scrollDown: true,
    },
  },
  {
    id: "wooler-event",
    variant: "experience",
    headline: "Next Event",
    subtitle:
      "Once-a-month live music session streamed from the alpaca field. Warm vibes, good people, and curious alpacas. Wool up. Tune in. Fluff out.",
    media: {
      video: "/videos/wooler-event.mp4",
      poster: "/images/wooler-event.webp",
    },
    cta: {
      label: "Follow for Updates",
      href: "https://instagram.com/pacha_alpaca",
    },
  },
];
