import type { Metadata } from "next";
import { Golos_Text } from "next/font/google";
import JsonLd from "@/components/JsonLd";
import Analytics from "@/components/Analytics";
import "./globals.css";

const golos = Golos_Text({
  variable: "--font-golos",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Pacha Alpaca — Immersive Alpaca Park in Bali",
    template: "%s — Pacha Alpaca",
  },
  description:
    "The only alpaca park in Bali. Feed, walk, and connect with alpacas. Private dinners, overnight bamboo lodges, cafe, and guided experiences in Nuanu City.",
  keywords: [
    "alpaca park Bali",
    "alpaca experience Bali",
    "things to do in Bali",
    "Nuanu Bali",
    "private dinner Bali",
    "alpaca lodge Bali",
    "alpaca cafe Bali",
    "Bali activities",
    "unique Bali experience",
    "alpaca connection",
    "Pacha Alpaca",
    "bamboo lodge Bali",
    "romantic dinner Bali",
    "family activities Bali",
    "Tabanan Bali",
  ],
  authors: [{ name: "Pacha Alpaca" }],
  creator: "muvs.dev",
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
  metadataBase: new URL("https://pacha-alpaca.com"),
  alternates: {
    canonical: "https://pacha-alpaca.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <JsonLd />
        <link
          rel="preload"
          as="image"
          href="/images/hero-poster.webp"
          type="image/webp"
        />
        <link
          rel="preload"
          as="video"
          href="/videos/hero-optimized.mp4"
          type="video/mp4"
          media="(min-width: 768px)"
        />
        <link
          rel="preload"
          as="video"
          href="/videos/hero-mobile.webm"
          type="video/webm"
          media="(max-width: 767px)"
        />
      </head>
      <body className={`${golos.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
