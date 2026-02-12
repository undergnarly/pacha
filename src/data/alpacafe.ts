import type { SlideData } from "./types";

export const alpacafeSlides: SlideData[] = [
  {
    id: "alpacafe-hero",
    variant: "hero",
    headline: "AlpaCafe",
    subtitle:
      "Sip your coffee surrounded by alpacas. Fresh drinks, light bites, and the fluffiest company in Bali.",
    media: {
      video: "/videos/alpacafe.mp4",
      poster: "/images/alpacafe.webp",
    },
    cta: {
      label: "Explore",
      href: "#alpacafe-menu",
      scrollDown: true,
    },
  },
  {
    id: "alpacafe-menu",
    variant: "experience",
    headline: "Coffee & Snacks with Alpacas",
    subtitle:
      "Enjoy specialty coffee, fresh juices, and alpaca-themed treats while our friendly alpacas roam around you. Included with park entrance.",
    media: {
      video: "/videos/alpacafe.mp4",
      poster: "/images/alpacafe.webp",
    },
    cta: {
      label: "Book Entrance",
      href: "https://megatix.co.id/events/entrance-to-pacha-alpaca",
      booking: true,
    },
  },
];
