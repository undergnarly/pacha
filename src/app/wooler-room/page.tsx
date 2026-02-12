import type { Metadata } from "next";
import SlideShow from "@/components/SlideShow";
import { woolerSlides } from "@/data/wooler";
import { woolerFaq } from "@/data/faq";

export const metadata: Metadata = {
  title: "Wooler Room — Pacha Alpaca | Live Music with Alpacas in Bali",
  description:
    "Once-a-month live music sessions in the alpaca field. DJ sets, golden hour vibes, and curious alpacas.",
};

export default function WoolerRoomPage() {
  return (
    <SlideShow
      slides={woolerSlides}
      faqItems={woolerFaq}
      bookSlides={[]}
      footerConfig={{ showMap: false, showHours: false, showContacts: true }}
    />
  );
}
