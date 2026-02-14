import type { Metadata } from "next";
import { Golos_Text } from "next/font/google";
import JsonLd from "@/components/JsonLd";
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
        {/* Preload logo FIRST - it shows on loading screen */}
        <link
          rel="preload"
          as="image"
          href="/images/logo.webp"
          type="image/webp"
          fetchPriority="high"
        />
        {/* Preload hero poster */}
        <link
          rel="preload"
          as="image"
          href="/images/hero-poster-hq.webp"
          type="image/webp"
        />
        {/* Preload hero video */}
        <link
          rel="preload"
          as="video"
          href="/videos/hero-short.mp4"
          type="video/mp4"
        />
      </head>
      <body className={`${golos.variable} antialiased`}>
        {/* Static loading screen - shows BEFORE JavaScript loads */}
        <div id="static-loader" style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0a0a0a',
        }}>
          <img
            src="/images/logo.webp"
            alt=""
            style={{ height: '112px', width: 'auto' }}
          />
          <div style={{
            marginTop: '40px',
            width: '160px',
            height: '2px',
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '1px',
            overflow: 'hidden',
          }}>
            <div style={{
              height: '100%',
              width: '30%',
              background: 'rgba(255,255,255,0.8)',
              borderRadius: '1px',
              animation: 'loading-bar 1.5s ease-in-out infinite',
            }} />
          </div>
          <style dangerouslySetInnerHTML={{ __html: `
            @keyframes loading-bar {
              0% { transform: translateX(-100%); }
              50% { transform: translateX(200%); }
              100% { transform: translateX(-100%); }
            }
          `}} />
        </div>
        {children}
      </body>
    </html>
  );
}
