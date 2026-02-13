import type { Metadata } from "next";
import SlideShow from "@/components/SlideShow";
import { woolerSlides } from "@/data/wooler";
import { woolerFaq } from "@/data/faq";

export const metadata: Metadata = {
  title: "Wooler Room — Live Music with Alpacas",
  description:
    "Once-a-month live music event in the alpaca field at Pacha Alpaca, Bali. DJ sets, golden hour vibes, and curious alpacas.",
  openGraph: {
    title: "Wooler Room — Pacha Alpaca",
    description:
      "Monthly live music sessions in the alpaca field. DJ sets, golden hour vibes, and curious alpacas in Bali.",
    url: "https://pacha-alpaca.com/wooler-room",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://pacha-alpaca.com/wooler-room",
  },
};

export default function WoolerRoomPage() {
  return (
    <SlideShow
      slides={woolerSlides}
      faqItems={woolerFaq}
      footerConfig={{ showMap: false, showHours: false, showContacts: true }}
    />
  );
}
