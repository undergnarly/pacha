import type { SlideData } from "./types";
import type { Translations } from "@/i18n/translations";

export function getAlpacafeSlides(t: Translations): SlideData[] {
  return [
    {
      id: "alpacafe-hero",
      variant: "hero",
      headline: t.alpacafe.hero.headline,
      subtitle: t.alpacafe.hero.subtitle,
      media: {
        video: "/videos/alpacafe.mp4",
        poster: "/images/alpacafe.webp",
      },
      cta: {
        label: t.ui.seeMenu,
        href: "#menu-breakfast",
        scrollDown: true,
      },
    },
    {
      id: "menu-breakfast",
      variant: "menu",
      headline: t.alpacafe.breakfast.headline,
      subtitle: t.alpacafe.breakfast.subtitle,
      menuNote: t.alpacafe.breakfast.menuNote,
      menuItems: [
        { name: "Cured Salmon", description: "We cure it ourselves for the perfect flavor", price: "40K" },
        { name: "Avocado", price: "40K" },
        { name: "Feta", price: "35K" },
        { name: "Sautéed Mushrooms", price: "30K" },
        { name: "Cheese", price: "40K" },
        { name: "Sausage", price: "30K" },
        { name: "Ham", price: "30K" },
        { name: "Tomatoes", price: "25K" },
        { name: "Kimchi", price: "15K" },
        { name: "Pickles", price: "15K" },
      ],
      media: {
        poster: "/images/menu-bg-1.webp",
      },
    },
    {
      id: "menu-mains",
      variant: "menu",
      headline: t.alpacafe.mains.headline,
      menuItems: [
        { name: "Green Salad with Feta", price: "65K" },
        { name: "Pelmeni Chicken", description: "Traditional dumplings with sour cream", price: "60K" },
        { name: "Nasi/Mie Goreng", price: "60K" },
        { name: "Sate Ayam", description: "10 grilled chicken skewers with peanut sauce", price: "90K" },
        { name: "Pasta al Pesto", price: "90K" },
        { name: "Salmon Creamy Pasta", price: "150K" },
        { name: "Buckwheat Porridge with Mushrooms", price: "120K" },
        { name: "Salmon Head Uha", price: "75K" },
        { name: "Salmon Cream Soup", price: "130K" },
      ],
      media: {
        poster: "/images/menu-bg-3.webp",
      },
    },
    {
      id: "menu-crepes",
      variant: "menu",
      headline: t.alpacafe.crepes.headline,
      menuNote: t.alpacafe.crepes.menuNote,
      menuItems: [
        { name: "Chicken & Shrooms", price: "130K" },
        { name: "Ham & Cheese", price: "100K" },
        { name: "Buckwheat & Parmesan", price: "120K" },
        { name: "Salmon Cream Cheese", price: "130K" },
        { name: "Red Caviar", price: "200K" },
        { name: "Caramelized Cinnamon Apples", price: "90K" },
        { name: "Dulce de Leche", price: "80K" },
        { name: "Nutella", price: "70K" },
        { name: "Banana and Nutella", price: "85K" },
      ],
      media: {
        poster: "/images/menu-bg-5.webp",
      },
    },
    {
      id: "menu-platters",
      variant: "menu",
      headline: t.alpacafe.platters.headline,
      menuItems: [
        { name: "Cheese Platter", price: "190K" },
        { name: "Meat Platter", price: "250K" },
        { name: "Mixed Platter", price: "400K" },
        { name: "Ice Cream", price: "30K" },
        { name: "Catalan Cream", description: "Silky vanilla custard with caramelized sugar", price: "60K" },
      ],
      media: {
        poster: "/images/menu-bg-7.webp",
      },
    },
    {
      id: "menu-drinks",
      variant: "menu",
      headline: t.alpacafe.drinks.headline,
      menuItems: [
        { name: "The Only Good Coffee", description: "Vietnamese coffee, smooth & bold", price: "50K" },
        { name: "Fruit Brew", description: "Apple, orange, pineapple compote", price: "40K" },
        { name: "Orange Juice", price: "40K" },
        { name: "Virgin Mojito", price: "60K" },
        { name: "Tea / Ice Tea", price: "30K" },
        { name: "Kura Kura Island Ale", description: "5.0%", price: "80K" },
        { name: "Kura Kura Lager", description: "4.5%", price: "70K" },
        { name: "Honey Kölsch", description: "5.0%", price: "90K" },
        { name: "Sauvignon Blanc", description: "Chile", price: "110 / 550K" },
        { name: "Cabernet Sauvignon", description: "France", price: "120 / 600K" },
        { name: "Prosecco", description: "Italy", price: "990K" },
        { name: "Champagne", description: "France", price: "2.9M" },
      ],
      media: {
        poster: "/images/menu-bg-9.webp",
      },
    },
  ];
}
