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
    size: "large",
  },
  {
    src: "/images/chuveiro-externo.jpg",
    alt: "Chuveiro externo de madeira da Casa da Mata",
    size: "small",
  },
  {
    src: "/images/jantar-externo.jpg",
    alt: "Mesa de jantar externa da Casa da Mata em meio ao jardim",
    size: "small",
  },
  {
    src: "/images/exterior-deck-rede.jpg",
    alt: "Deck externo e varanda com rede da Casa da Mata ao entardecer",
    size: "large",
  },
  {
    src: "/images/exterior-container-jardim.jpg",
    alt: "Vista geral do container e jardim da Casa da Mata",
    size: "small",
  },
  {
    src: "/images/cozinha-varanda-noite.jpg",
    alt: "Cozinha e varanda ao entardecer",
    size: "medium",
  },
];

export default function ACasaPage() {
  const { capacity } = property;
  const highlightFacts = [
    `${capacity.outdoorAreaSqm} m² de Mata Atlântica`,
    "Riacho privado",
    "Fogo de chão",
    "Redes na mata",
    "Chuveiro ao ar livre",
    "Quarto integrado",
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
        <div className="backdrop-blur-sm bg-off-2/40 border border-terracota/20 rounded-lg p-6 md:p-8 mb-20">
          <p className="mb-4 text-xs tracking-[0.2em] text-terracota uppercase">
            A casa
          </p>
          <h1
            className="mb-8 max-w-5xl font-light leading-[1.05] text-oliva-escuro"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
          >
            Refúgio de Luxo para 2
          </h1>
          <FactList facts={highlightFacts} className="mb-14" />

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

          <div className="mt-14 grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[220px] md:auto-rows-[250px]">
            {ILLUSTRATION_PHOTOS.map((photo) => {
              let colSpan = "col-span-1";
              let rowSpan = "row-span-1";

              if (photo.size === "large") {
                colSpan = "md:col-span-2 lg:col-span-2";
                rowSpan = "md:row-span-2 lg:row-span-2";
              } else if (photo.size === "medium") {
                colSpan = "md:col-span-2 lg:col-span-1";
                rowSpan = "md:row-span-1";
              }

              return (
                <div
                  key={photo.src}
                  className={`${colSpan} ${rowSpan} overflow-hidden border-t-[3px] border-terracota shadow-soft hover:shadow-lifted hover:-translate-y-1 transition-all duration-300 will-change-transform`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={600}
                    height={600}
                    className="h-full w-full object-cover"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="w-full bg-off-1 px-6 py-24 md:px-16 lg:px-24">
        <div className="backdrop-blur-sm bg-off-2/40 border border-terracota/20 rounded-lg p-6 md:p-8 mb-20">
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
        </div>
      </section>

      <section className="w-full px-6 py-24 md:px-16 lg:px-24">
        <div className="backdrop-blur-sm bg-off-2/40 border border-terracota/20 rounded-lg p-6 md:p-8 mb-20">
          <h2 className="mb-6 text-2xl font-medium text-oliva-escuro">
            Regras da casa
          </h2>
          <FactList facts={property.houseRules} />

          <a
            href={property.airbnbUrl}
            target="_blank"
            rel="noopener"
            className="mt-14 inline-block backdrop-blur-xs bg-off-1/50 border border-terracota px-8 py-4 text-sm tracking-wide text-oliva-escuro uppercase hover:bg-off-1/70 transition-colors duration-200"
          >
            Ver disponibilidade no Airbnb
          </a>
        </div>
      </section>
    </main>
  );
}
