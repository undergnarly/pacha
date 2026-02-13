import type { SlideData } from "./types";

export const homeSlides: SlideData[] = [
  {
    id: "hero",
    variant: "hero",
    headline: "Immersive alpaca park in the heart of Nuanu, Bali",
    subtitle:
      "Discover five ways to meet our friendly alpacas — from a simple visit to a private candle-lit dinner & overnight stay.",
    media: {
      video: "/videos/hero.mp4",
      poster: "/images/hero.webp",
    },
    cta: {
      label: "Explore",
      href: "#hook",
      scrollDown: true,
    },
  },
  {
    id: "hook",
    variant: "hook",
    headline: "The only alpaca park in Bali",
    media: {
      video: "/videos/hook.mp4",
      poster: "/images/hook.webp",
    },
    rating: {
      score: 4.6,
      count: "170+",
    },
    quote: {
      text: "One of the most unique experiences in Bali. The alpacas are so friendly and the setting is magical!",
      author: "Jessica A.",
    },
    stats: [
      { value: "5", label: "Experiences" },
      { value: "12", label: "Alpacas" },
      { value: "150K", label: "From IDR" },
    ],
  },
  {
    id: "entrance",
    variant: "experience",
    headline: "Meet the Alpacas",
    subtitle:
      "Nuanu access, alpaca park entry, alpaca caf\u00e9, and alpaca snacks included.",
    price: "From 150K IDR",
    details: [
      "Includes Nuanu and Pacha Alpaca entrance",
      "Alpaca snacks — veggie treats for hand-feeding",
      "AlpaCafe access for drinks & light bites",
      "Mon 2–6 PM, Tue–Sun 10 AM–6 PM",
    ],
    media: {
      video: "/videos/entrance.mp4",
      poster: "/images/entrance.webp",
    },
    cta: {
      label: "Book Now",
      href: "https://megatix.co.id/events/entrance-to-pacha-alpaca?utm_source=pacha&utm_medium=website&utm_campaign=entrance",
      booking: true,
    },
  },
  {
    id: "connection",
    variant: "experience",
    headline: "Alpaca Connection",
    subtitle:
      "30-minute guided tour through the jungle park. Feed, walk, and connect with our alpacas.",
    price: "From 200K IDR",
    details: [
      "Child (under 18) — 200K IDR",
      "Adult — 300K IDR",
      "Family 2+2 — 700K IDR (includes welcome drink)",
      "30-min guided tour, feeding, and photo ops",
      "Includes Nuanu and Pacha Alpaca entrance",
      "Children under 14 must be with a guardian",
    ],
    media: {
      video: "/videos/connection.mp4",
      poster: "/images/connection.webp",
    },
    cta: {
      label: "Book Now",
      href: "https://megatix.co.id/events/alpaca-connection-in-nuanu?utm_source=pacha&utm_medium=website&utm_campaign=connection",
      booking: true,
    },
  },
  {
    id: "dinner",
    variant: "experience",
    headline: "Dinner with Alpacas",
    subtitle:
      "A private candle-lit dinner surrounded by alpacas. Bouquet and special dish included.",
    price: "2.5M IDR",
    details: [
      "Private table inside the alpaca enclosure",
      "1-hour dinner for up to 4 guests at golden hour",
      "Floral decorations and welcome drinks",
      "Mixed meat & cheese platter (customizable)",
      "Table reservation option — 990K IDR (food ordered separately)",
      "Dietary needs accommodated — message us via WhatsApp",
    ],
    media: {
      video: "/videos/dinner.mp4",
      poster: "/images/dinner.webp",
    },
    cta: {
      label: "Book Now",
      href: "https://megatix.co.id/events/private-dinner-with-alpacas?utm_source=pacha&utm_medium=website&utm_campaign=dinner",
      booking: true,
    },
  },
  {
    id: "lodge",
    variant: "experience",
    headline: "Stay Overnight",
    subtitle:
      "Wake up with alpacas in a charming bamboo lodge. Includes Alpaca Connection experience and breakfast.",
    price: "From 1.5M IDR",
    details: [
      "Overnight stay in a bamboo lodge on the alpaca farm",
      "Alpaca Connection guided tour included",
      "Complimentary breakfast",
      "Check-in 2 PM, check-out 11 AM",
      "Alpaca Lodge — up to 3 guests",
      "Bamboo Alpaca Nest — up to 2 guests",
    ],
    media: {
      video: "/videos/bamboo-nest.mp4",
      poster: "/images/bamboo-nest.webp",
    },
    cta: {
      label: "View Lodges",
      href: "/lodges",
    },
  },
  {
    id: "alpacafe",
    variant: "experience",
    headline: "AlpaCafe",
    subtitle:
      "Specialty coffee, fresh juices, and alpaca-themed treats — with the fluffiest company in Bali.",
    details: [
      "Vietnamese coffee, fresh juices, and smoothies",
      "All-day breakfast, mains, and crepes",
      "Sharing platters and desserts",
      "Craft beer, wine, and prosecco",
      "Alpacas roam freely around the cafe",
    ],
    media: {
      video: "/videos/alpacafe.mp4",
      poster: "/images/alpacafe.webp",
    },
    cta: {
      label: "Discover",
      href: "/alpacafe",
    },
  },
];
