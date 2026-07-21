// Schema.org TouristAttraction (subtipo de Place) — usado nas páginas de
// guia (/o-que-fazer/[slug] e /hospedagem-nova-lima-e-macacos), referenciando
// a localização real a partir de content/data/location-facts.ts (Task 5).
//
// Sem campo "geo": não há coordenadas lat/long reais em location-facts.ts/
// property.ts — o campo é omitido de propósito, nunca estimado ou inventado.

import { property } from "@/content/data/property";
import { locationFacts } from "@/content/data/location-facts";

export function PlaceJsonLd({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name,
    description,
    address: {
      "@type": "PostalAddress",
      addressLocality: locationFacts.city,
      addressRegion: locationFacts.state,
      addressCountry: property.location.country,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
