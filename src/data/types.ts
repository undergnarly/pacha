export interface SlideData {
  id: string;
  variant: "hero" | "experience" | "hook" | "footer" | "menu";
  headline: string;
  subtitle?: string;
  price?: string;
  cta?: {
    label: string;
    href: string;
    /** If true, opens booking modal instead of navigating */
    booking?: boolean;
    /** If true, scrolls down to next slide */
    scrollDown?: boolean;
  };
  media: {
    video?: string;
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
