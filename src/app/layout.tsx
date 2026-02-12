import type { Metadata } from "next";
import { Golos_Text } from "next/font/google";
import "./globals.css";

const golos = Golos_Text({
  variable: "--font-golos",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pacha Alpaca — Immersive Alpaca Park in Bali",
  description:
    "Discover five ways to meet our friendly alpacas — from a simple entrance ticket to a private candle-lit dinner & overnight stay. Located in Nuanu City, Bali.",
  keywords: [
    "alpaca park",
    "Bali",
    "Nuanu",
    "alpaca experience",
    "things to do in Bali",
    "private dinner Bali",
    "alpaca lodge",
  ],
  openGraph: {
    title: "Pacha Alpaca — Immersive Alpaca Park in Bali",
    description:
      "Discover five ways to meet our friendly alpacas in the heart of Nuanu City, Bali.",
    url: "https://pacha-alpaca.com",
    siteName: "Pacha Alpaca",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pacha Alpaca Park in Bali",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pacha Alpaca — Immersive Alpaca Park in Bali",
    description:
      "Discover five ways to meet our friendly alpacas in the heart of Nuanu City, Bali.",
    images: ["/images/og-image.jpg"],
  },
  metadataBase: new URL("https://pacha-alpaca.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${golos.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
