export interface CTA {
  label: string;
  href: string;
  /** Opens Megatix in new tab (with white-label transform) */
  booking?: boolean;
  /** Scrolls to next slide */
  scrollDown?: boolean;
  /** Opens BookExperienceModal */
  openModal?: boolean;
}

export interface SlideData {
  id: string;
  variant: "hero" | "experience" | "hook" | "footer" | "menu";
  headline: string;
  subtitle?: string;
  price?: string;
  cta?: CTA;
  secondaryCta?: CTA;
  media: {
    video?: string;
    desktopVideo?: string;
    poster: string;
  };
  /** Additional stats/badges for hook slides */
  stats?: { label: string; value: string }[];
  /** Quote for social proof */
  quote?: { text: string; author: string };
  /** Rating info */
  rating?: { score: number; count: string };
  /** Menu items for menu variant slides */
  menuItems?: { name: string; description?: string; price: string }[];
  /** Expandable details for experience slides */
  details?: string[];
  /** Menu section subtitle */
  menuNote?: string;
  /** Footer slide data */
  footer?: {
    faqKey: string;
    showMap?: boolean;
    showHours?: boolean;
    showContacts?: boolean;
  };
}

export interface FAQItem {
  question: string;
  answer: string;
}
