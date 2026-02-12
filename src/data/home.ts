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
      { value: "100K", label: "From IDR" },
    ],
  },
  {
    id: "entrance",
    variant: "experience",
    headline: "Meet the Alpacas",
    subtitle:
      "Nuanu access, alpaca park entry, alpaca caf\u00e9, and alpaca snacks included.",
    price: "150K IDR",
    details: [
      "Access to the alpaca park and Nuanu grounds",
      "Alpaca snacks included — feed them by hand",
      "Visit the AlpaCafe for drinks & light bites",
      "Free photos with the alpacas",
      "Open for walk-ins, booking recommended",
    ],
    media: {
      video: "/videos/entrance.mp4",
      poster: "/images/entrance.webp",
    },
    cta: {
      label: "Book Now",
      href: "https://megatix.co.id/events/entrance-to-pacha-alpaca",
      booking: true,
    },
  },
  {
    id: "connection",
    variant: "experience",
    headline: "Alpaca Connection",
    subtitle:
      "Guided tour across two alpaca zones. Feed, pet, and walk with our alpacas.",
    price: "300K IDR",
    details: [
      "45-minute guided tour with our alpaca keeper",
      "Walk through two alpaca zones",
      "Feed, pet, and take photos with the alpacas",
      "Learn about alpaca care and behavior",
      "Includes park entrance and Nuanu access",
      "Last session at 6 pm",
    ],
    media: {
      video: "/videos/connection.mp4",
      poster: "/images/connection.webp",
    },
    cta: {
      label: "Book Now",
      href: "https://megatix.co.id/events/alpaca-connection-in-nuanu",
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
      "Private candle-lit table in the alpaca field",
      "1-hour intimate dinner for up to 4 guests",
      "Bouquet and special alpaca-themed dish included",
      "Golden hour timing for the best ambiance",
      "Dietary needs accommodated — message us via WhatsApp",
    ],
    media: {
      video: "/videos/dinner.mp4",
      poster: "/images/dinner.webp",
    },
    cta: {
      label: "Book Now",
      href: "https://megatix.co.id/events/private-dinner-with-alpacas",
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
