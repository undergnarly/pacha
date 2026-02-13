export default function JsonLd() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "TouristAttraction"],
    name: "Pacha Alpaca",
    description:
      "The only alpaca park in Bali. Feed, walk, and connect with alpacas. Private dinners, overnight bamboo lodges, cafe, and guided experiences in Nuanu City.",
    url: "https://pacha-alpaca.com",
    image: "https://pacha-alpaca.com/images/og-image.jpg",
    telephone: "+62-877-987-9161",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Nuanu City",
      addressLocality: "Tabanan",
      addressRegion: "Bali",
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -8.5795,
      longitude: 115.1548,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Monday",
        opens: "14:00",
        closes: "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "10:00",
        closes: "21:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.6",
      reviewCount: "170",
    },
    priceRange: "150K — 2.5M IDR",
    currenciesAccepted: "IDR",
    sameAs: ["https://www.instagram.com/pacha_alpaca"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
    />
  );
}
