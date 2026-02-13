import type { Metadata } from "next";
import SlideShow from "@/components/SlideShow";
import { alpacafeSlides } from "@/data/alpacafe";
import { alpacafeFaq } from "@/data/faq";

export const metadata: Metadata = {
  title: "AlpaCafe — Coffee & Food with Alpacas",
  description:
    "Vietnamese coffee, fresh juices, all-day breakfast, crepes, and sharing platters — with alpacas roaming freely around your table. Inside Pacha Alpaca, Bali.",
  openGraph: {
    title: "AlpaCafe — Pacha Alpaca",
    description:
      "Specialty coffee, fresh food, and the fluffiest company in Bali. Alpacas roam freely around the cafe.",
    url: "https://pacha-alpaca.com/alpacafe",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://pacha-alpaca.com/alpacafe",
  },
};

export default function AlpaCafePage() {
  return (
    <SlideShow
      slides={alpacafeSlides}
      faqItems={alpacafeFaq}
      footerConfig={{ showMap: false, showHours: true, showContacts: true }}
    />
  );
}
