import type { FAQItem } from "./types";
import type { Translations } from "@/i18n/translations";

export function getHomeFaq(t: Translations): FAQItem[] {
  return t.faq.home;
}

export function getLodgesFaq(t: Translations): FAQItem[] {
  return t.faq.lodges;
}

export function getDinnerFaq(t: Translations): FAQItem[] {
  return t.faq.dinner;
}

export function getAlpacafeFaq(t: Translations): FAQItem[] {
  return t.faq.alpacafe;
}

export function getWoolerFaq(t: Translations): FAQItem[] {
  return t.faq.wooler;
}
