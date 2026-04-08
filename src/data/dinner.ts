import type { SlideData } from "./types";

export const dinnerSlides: SlideData[] = [
  {
    id: "dinner-hero",
    variant: "hero",
    headline: "A Date You\u2019ll Never Forget",
    subtitle:
      "An intimate private dining setup inside the alpaca enclosure under the Bali sky.",
    media: {
      video: "/videos/dinner-hero.mp4",
      desktopVideo: "/videos/dinner-hero-desktop.mp4",
      poster: "/images/dinner-hero-poster.webp",
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
    headline: "Private Alpaca Dinner",
    subtitle:
      "Private sunset dining with full setup included. Up to 4 guests. Please reserve at least one day in advance.",
    price: "1.9M IDR",
    details: [
      "Table setup inside the alpaca enclosure",
      "Nuanu entry + Alpaca entry included",
      "Fresh flower bouquet",
      "Meat platter, cheese platter, fruit platter",
      "2 glasses of wine",
      "Alpaca snack for feeding",
      "Up to 4 guests per table",
      "Reserve at least 1 day in advance",
      "Perfect for proposals, celebrations, or special occasions",
      "Dietary needs accommodated — message us via WhatsApp",
    ],
    media: {
      video: "/videos/dinner-exp.mp4",
      desktopVideo: "/videos/dinner-exp-desktop.mp4",
      poster: "/images/dinner-exp.webp",
    },
    cta: {
      label: "Book Now",
      href: "https://megatix.co.id/events/private-dinner-with-alpacas?utm_source=pacha&utm_medium=website&utm_campaign=dinner",
      booking: true,
    },
  },
];
