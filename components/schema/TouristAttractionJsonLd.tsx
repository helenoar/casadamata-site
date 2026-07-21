// Schema.org TouristAttraction para as atrações turísticas verificadas
// perto de Nova Lima/Macacos. Gera JSON-LD para cada atração,
// com informações de localização, descrição e palavras-chave.
//
// Sem coordenadas geográficas fictícias — o campo "geo" é omitido
// se não houver dado verificado.

import type { TouristAttraction } from "@/content/data/atracoes-verificadas";

export function TouristAttractionJsonLd({
  attractions,
}: {
  attractions: TouristAttraction[];
}) {
  return (
    <>
      {attractions.map((attr) => {
        const jsonLd = {
          "@context": "https://schema.org",
          "@type": "TouristAttraction",
          name: attr.name,
          description: attr.description,
          ...(attr.website && { url: attr.website }),
          address: {
            "@type": "PostalAddress",
            addressLocality: attr.addressCity,
            addressRegion: "Minas Gerais",
            addressCountry: "BR",
          },
          areaServed: "Nova Lima, MG",
          keywords: attr.keywords.join(", "),
          ...(attr.bestSeason && { bestVisitedOnWeekday: attr.bestSeason }),
        };

        return (
          <script
            key={attr.id}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        );
      })}
    </>
  );
}
