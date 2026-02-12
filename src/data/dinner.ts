import type { SlideData } from "./types";

export const dinnerSlides: SlideData[] = [
  {
    id: "dinner-hero",
    variant: "hero",
    headline: "A Date You\u2019ll Never Forget",
    subtitle:
      "A private candle-lit dinner surrounded by alpacas under the Bali sky.",
    media: {
      video: "/videos/dinner-hero.mp4",
      poster: "/images/dinner-hero.webp",
    },
    cta: {
      label: "Explore",
      href: "#dinner-experience",
      scrollDown: true,
    },
  },
  {
    id: "dinner-experience",
    variant: "experience",
    headline: "Private Dinner with Alpacas",
    subtitle:
      "One-hour dinner for up to 4 guests. Includes a bouquet of flowers and a special alpaca-themed dish.",
    price: "2.5M IDR per table",
    details: [
      "Private table inside the alpaca enclosure",
      "Floral decorations and welcome drinks",
      "Mixed meat & cheese platter (customizable)",
      "Alpaca snacks for feeding included",
      "Table reservation option — 990K IDR (food ordered separately)",
      "Perfect for proposals, celebrations, or special occasions",
      "Golden hour timing for the best ambiance",
      "Dietary needs accommodated — message us via WhatsApp",
    ],
    media: {
      video: "/videos/dinner-exp.mp4",
      poster: "/images/dinner-exp.webp",
    },
    cta: {
      label: "Book Now",
      href: "https://megatix.co.id/events/private-dinner-with-alpacas",
      booking: true,
    },
  },
];
