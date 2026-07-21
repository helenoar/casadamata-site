// Schema.org LodgingBusiness, site-wide — usado no layout raiz (Task 2,
// extraído para componente reutilizável na Task 5 junto dos demais schemas
// em components/schema/).

import { property } from "@/content/data/property";

export function LodgingBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: property.brandName,
    description: property.descriptionParagraphs[1],
    address: {
      "@type": "PostalAddress",
      streetAddress: property.location.condominium,
      addressLocality: property.location.city,
      addressRegion: property.location.state,
      addressCountry: property.location.country,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: property.reputation.overallRating,
      reviewCount: property.reputation.reviewCount,
    },
    sameAs: [property.airbnbUrl],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
