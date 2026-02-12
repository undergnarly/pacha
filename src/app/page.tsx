import SlideShow from "@/components/SlideShow";
import { homeSlides } from "@/data/home";
import { homeFaq } from "@/data/faq";

export default function Home() {
  return (
    <SlideShow
      slides={homeSlides}
      faqItems={homeFaq}
      footerConfig={{ showMap: true, showHours: true, showContacts: true }}
    />
  );
}
