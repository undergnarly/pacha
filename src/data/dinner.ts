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
      "An intimate private dining setup inside the alpaca enclosure for up to 4 guests.",
    price: "990K IDR",
    details: [
      "Table setup inside the alpaca enclosure",
      "2 main courses included",
      "2 non-alcoholic beverages included",
      "Alpaca snack for feeding included",
      "Up to 4 guests per table",
      "Deposit 500K IDR required to secure booking",
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
