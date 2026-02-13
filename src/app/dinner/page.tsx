import type { Metadata } from "next";
import SlideShow from "@/components/SlideShow";
import { dinnerSlides } from "@/data/dinner";
import { dinnerFaq } from "@/data/faq";

export const metadata: Metadata = {
  title: "Private Dinner with Alpacas in Bali",
  description:
    "A private candle-lit dinner surrounded by alpacas under the Bali sky. Includes floral decorations, welcome drinks, and a gourmet platter. From 990K IDR.",
  openGraph: {
    title: "Private Dinner with Alpacas — Pacha Alpaca",
    description:
      "A private candle-lit dinner surrounded by alpacas under the Bali sky. The most romantic experience in Bali.",
    url: "https://pacha-alpaca.com/dinner",
    siteName: "Pacha Alpaca",
    type: "website",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Private Dinner with Alpacas — Pacha Alpaca",
    description:
      "A private candle-lit dinner surrounded by alpacas under the Bali sky. The most romantic experience in Bali.",
    images: ["/images/og-image.jpg"],
  },
  alternates: {
    canonical: "https://pacha-alpaca.com/dinner",
  },
};

export default function DinnerPage() {
  return (
    <SlideShow
      slides={dinnerSlides}
      faqItems={dinnerFaq}
      footerConfig={{ showMap: false, showHours: false, showContacts: true }}
    />
  );
}
