import type { Metadata } from "next";

import { property } from "@/content/data/property";
import { locationFacts } from "@/content/data/location-facts";
import { FactList } from "@/components/ui/FactList";
import { BackToHomeHeader } from "@/components/layout/BackToHomeHeader";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Reservar",
  description: `Reserve a Casa da Mata no Airbnb: ${property.reputation.overallRating.toFixed(1).replace(".", ",")} de 5 em ${property.reputation.reviewCount} avaliações, ${locationFacts.condominium}, ${locationFacts.city}/${property.location.state}.`,
  path: "/reservar",
});

export default function ReservarPage() {
  const distanceToBh = locationFacts.distances[0];

  const facts = [
    `Nota ${property.reputation.overallRating.toFixed(1).replace(".", ",")} de 5, em ${property.reputation.reviewCount} avaliações`,
    "Superhost · Preferido dos hóspedes (Guest Favorite)",
    `${property.capacity.outdoorAreaSqm} m² de Mata Atlântica privativa`,
    `A ${distanceToBh.km} km do BH Shopping`,
    `${locationFacts.condominium}, ${locationFacts.city}/${property.location.state}`,
    "Self check-in com cofre de chaves",
  ];

  return (
    <main className="w-full px-6 pt-10 pb-28 text-center md:px-16 lg:px-24">
      <BackToHomeHeader />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Reservar", path: "/reservar" },
        ]}
      />
      <p className="mb-4 text-xs tracking-[0.2em] text-terracota uppercase">
        Reservar
      </p>
      <h1
        className="mx-auto mb-10 max-w-2xl font-light leading-[1.05] text-oliva-escuro"
        style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
      >
        Como reservar a Casa da Mata?
      </h1>

      <FactList
        facts={facts}
        className="mx-auto mb-14 max-w-md text-left"
      />

      <p className="mx-auto mb-10 max-w-xl leading-relaxed text-oliva-escuro">
        {property.descriptionParagraphs[1]}
      </p>

      <a
        href={property.airbnbUrl}
        target="_blank"
        rel="noopener"
        className="inline-block bg-oliva-escuro px-10 py-5 text-sm tracking-wide text-off-2 uppercase"
      >
        Reservar no Airbnb
      </a>
    </main>
  );
}
