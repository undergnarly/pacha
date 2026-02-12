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
      "One-hour dinner for up to 4 guests. Includes a bouquet of flowers, a special alpaca-themed dish, and professional photography.",
    price: "2.5M IDR per table",
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
  {
    id: "dinner-mood",
    variant: "experience",
    headline: "An Evening to Remember",
    subtitle:
      "Candles, flowers, alpacas, and golden hour light. The perfect setting for anniversaries, proposals, or simply a magical night out.",
    media: {
      video: "/videos/dinner-mood.mp4",
      poster: "/images/dinner-mood.webp",
    },
  },
];
