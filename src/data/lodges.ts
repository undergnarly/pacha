import type { SlideData } from "./types";

export const lodgesSlides: SlideData[] = [
  {
    id: "lodges-hero",
    variant: "hero",
    headline: "Wake Up with Alpacas",
    subtitle:
      "Spend the night in a bamboo lodge on the alpaca farm. Fall asleep to nature and wake up to friendly faces.",
    media: {
      video: "/videos/lodges-hero.mp4",
      poster: "/images/lodges-hero.webp",
    },
    cta: {
      label: "Explore",
      href: "#alpaca-lodge",
      scrollDown: true,
    },
  },
  {
    id: "alpaca-lodge",
    variant: "experience",
    headline: "Alpaca Lodge",
    subtitle:
      "Charming bamboo haven on the alpaca farm. Up to 3 guests. Includes overnight stay, Alpaca Connection experience, and complimentary breakfast. Check-in 2 PM / Check-out 11 AM.",
    price: "From 1.5M IDR / night",
    media: {
      video: "/videos/alpaca-lodge.mp4",
      poster: "/images/alpaca-lodge.webp",
    },
    cta: {
      label: "Book on Airbnb",
      href: "https://www.airbnb.com/rooms/1263411619445698751",
    },
  },
  {
    id: "bamboo-nest",
    variant: "experience",
    headline: "Bamboo Alpaca Nest",
    subtitle:
      "A cozy bamboo retreat for two. Includes overnight stay, Alpaca Connection experience, and complimentary breakfast. Check-in 2 PM / Check-out 11 AM.",
    price: "From 1M IDR / night",
    media: {
      video: "/videos/bamboo-nest.mp4",
      poster: "/images/bamboo-nest.webp",
    },
    cta: {
      label: "Book on Airbnb",
      href: "https://www.airbnb.com/rooms/1436662283551329575",
    },
  },
];
