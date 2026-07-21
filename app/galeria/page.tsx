import type { Metadata } from "next";
import Image from "next/image";

import { galleryPhotos } from "@/content/data/photos";
import { BackToHomeHeader } from "@/components/layout/BackToHomeHeader";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Galeria de Fotos",
  description:
    "Conheça os ambientes da Casa da Mata através de fotos dos espaços internos e externos — casa contêiner em Mata Atlântica.",
  path: "/galeria",
});

const categoryLabels: Record<string, string> = {
  interno: "Interior",
  externo: "Exterior",
};

export default function GaleriaPage() {
  const photosByCategory = galleryPhotos.reduce(
    (acc, photo) => {
      if (!acc[photo.category]) {
        acc[photo.category] = [];
      }
      acc[photo.category].push(photo);
      return acc;
    },
    {} as Record<string, typeof galleryPhotos>,
  );

  const categories = (Object.keys(photosByCategory) as Array<keyof typeof photosByCategory>).sort(
    (a, b) => categoryLabels[a].localeCompare(categoryLabels[b]),
  );

  return (
    <main className="w-full px-6 pt-10 pb-24 md:px-16 lg:px-24">
      <BackToHomeHeader />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Galeria", path: "/galeria" },
        ]}
      />

      <p className="mb-4 text-xs tracking-[0.2em] text-terracota uppercase">
        Galeria
      </p>
      <h1
        className="mb-8 max-w-3xl font-light leading-[1.05] text-oliva-escuro"
        style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
      >
        Conheça os ambientes da Casa da Mata
      </h1>
      <p className="mb-14 max-w-2xl text-sm leading-relaxed text-oliva-escuro">
        Explore a casa contêiner de 90 m² no coração da Mata Atlântica. Interior arejado e minimalista, exterior integrado
        ao jardim com riacho, fogo de chão e redário.
      </p>

      {categories.map((category) => (
        <section key={category} className="mb-24">
          <h2 className="mb-8 text-2xl font-light text-oliva-escuro">
            {categoryLabels[category]}
          </h2>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {photosByCategory[category].map((photo) => (
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
      ))}
    </main>
  );
}
