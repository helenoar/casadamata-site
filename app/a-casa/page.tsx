import type { Metadata } from "next";
import Image from "next/image";

import { property } from "@/content/data/property";
import { amenityCategories, amenityTotalCount } from "@/content/data/amenities";
import { locationFacts } from "@/content/data/location-facts";
import { FactList } from "@/components/ui/FactList";
import { Reveal } from "@/components/ui/Reveal";
import { BackToHomeHeader } from "@/components/layout/BackToHomeHeader";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "A Casa",
  description: `Conheça os ambientes e as ${amenityTotalCount} comodidades reais da Casa da Mata: casa contêiner em ${property.capacity.outdoorAreaSqm} m² de Mata Atlântica, ${locationFacts.condominium}, ${locationFacts.city}/${property.location.state}.`,
  path: "/a-casa",
});

// Marcadores de subseção já presentes literalmente no array de parágrafos de
// property.ts (seção 4 do arquivo-fonte) — usados para quebrar o texto em
// blocos, sem reescrever ou inventar nenhuma frase nova.
const SECTION_HEADINGS = new Set([
  "O espaço",
  "Acesso do hóspede",
  "Outras observações",
]);

const ILLUSTRATION_PHOTOS = [
  {
    src: "/images/interior-quarto-closet.jpg",
    alt: "Interior da Casa da Mata: quarto, closet e cozinha integrados",
  },
  {
    src: "/images/chuveiro-externo.jpg",
    alt: "Chuveiro externo de madeira da Casa da Mata",
  },
  {
    src: "/images/jantar-externo.jpg",
    alt: "Mesa de jantar externa da Casa da Mata em meio ao jardim",
  },
  {
    src: "/images/exterior-deck-rede.jpg",
    alt: "Deck externo e varanda com rede da Casa da Mata ao entardecer",
  },
];

export default function ACasaPage() {
  const { capacity } = property;
  const capacityFacts = [
    `${capacity.guests} hóspedes`,
    `${capacity.bedrooms} quarto`,
    `${capacity.beds} cama`,
    `${capacity.bathrooms} banheiro privado`,
    `${capacity.outdoorAreaSqm} m² de área externa`,
    `${locationFacts.condominium}, ${locationFacts.city}/${property.location.state}`,
  ];

  return (
    <main className="w-full">
      <BackToHomeHeader />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "A Casa", path: "/a-casa" },
        ]}
      />
      <section className="w-full px-6 pt-10 pb-16 md:px-16 lg:px-24">
        <p className="mb-4 text-xs tracking-[0.2em] text-terracota uppercase">
          A casa
        </p>
        <h1
          className="mb-8 max-w-5xl font-light leading-[1.05] text-oliva-escuro"
          style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
        >
          O que tem dentro da Casa da Mata?
        </h1>
        <FactList facts={capacityFacts} className="mb-14" />

        <div>
          {property.descriptionParagraphs.map((paragraph, index) =>
            SECTION_HEADINGS.has(paragraph) ? (
              <h2
                key={index}
                className="mt-12 mb-4 text-2xl font-medium text-oliva-escuro first:mt-0"
              >
                {paragraph}
              </h2>
            ) : (
              <p
                key={index}
                className="mb-4 leading-relaxed text-oliva-escuro"
              >
                {paragraph}
              </p>
            ),
          )}
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-4">
          {ILLUSTRATION_PHOTOS.map((photo) => (
            <div
              key={photo.src}
              className="h-[220px] overflow-hidden border-t-[3px] border-terracota shadow-soft hover:shadow-lifted hover:-translate-y-1 transition-all duration-300 will-change-transform"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={450}
                height={450}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="w-full bg-off-1 px-6 py-24 md:px-16 lg:px-24">
        <p className="mb-4 text-xs tracking-[0.2em] text-terracota uppercase">
          Comodidades
        </p>
        <h2
          className="mb-14 font-light text-oliva-escuro"
          style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
        >
          Todas as {amenityTotalCount} comodidades, por ambiente.
        </h2>

        <div className="grid gap-x-12 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {amenityCategories.map((category) => (
            <Reveal key={category.category}>
            <div className="rounded-sm border-x border-b border-oliva-escuro/10 border-t-2 border-t-terracota/60 bg-off-1/60 backdrop-blur-sm p-6 shadow-soft hover:shadow-lifted hover:-translate-y-1 transition-all duration-300">
              <h3 className="mb-4 text-lg font-medium text-oliva-escuro">
                {category.category}
              </h3>
              <ul className="flex flex-col gap-2 text-sm leading-relaxed text-oliva-escuro">
                {category.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="w-full px-6 py-24 md:px-16 lg:px-24">
        <h2 className="mb-6 text-2xl font-medium text-oliva-escuro">
          Regras da casa
        </h2>
        <FactList facts={property.houseRules} />

        <a
          href={property.airbnbUrl}
          target="_blank"
          rel="noopener"
          className="mt-14 inline-block bg-oliva-escuro px-8 py-4 text-sm tracking-wide text-off-2 uppercase"
        >
          Ver disponibilidade no Airbnb
        </a>
      </section>
    </main>
  );
}
