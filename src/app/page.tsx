import type { Metadata } from "next";
import SlideShow from "@/components/SlideShow";
import { homeSlides } from "@/data/home";
import { homeFaq } from "@/data/faq";

export const metadata: Metadata = {
  openGraph: {
    title: "Pacha Alpaca — Immersive Alpaca Park in Bali",
    description:
      "The only alpaca park in Bali. Feed, walk, and connect with alpacas. Private dinners, overnight lodges, and guided experiences.",
    url: "https://pacha-alpaca.com",
    siteName: "Pacha Alpaca",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Alpacas at Pacha Alpaca park in Nuanu, Bali",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pacha Alpaca — Immersive Alpaca Park in Bali",
    description:
      "The only alpaca park in Bali. Feed, walk, and connect with alpacas. Private dinners, overnight lodges, and guided experiences.",
    images: ["/images/og-image.jpg"],
  },
};

export default function Home() {
  return (
    <SlideShow
      slides={homeSlides}
      faqItems={homeFaq}
      footerConfig={{ showMap: true, showHours: true, showContacts: true }}
    />
  );
}
