import type { Metadata } from "next";

import { galleryPhotos, galleryCategories } from "@/content/data/gallery";
import { GalleryCarousel } from "@/components/gallery/GalleryCarousel";
import { BackToHomeHeader } from "@/components/layout/BackToHomeHeader";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Galeria de Fotos",
  description:
    "Conheça os ambientes da Casa da Mata através de fotos dos espaços internos e externos — casa contêiner em Mata Atlântica.",
  path: "/galeria",
});

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

  return (
    <main className="w-full px-6 pt-10 pb-24 md:px-16 lg:px-24">
      <BackToHomeHeader />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Galeria", path: "/galeria" },
        ]}
      />

      <div className="backdrop-blur-sm bg-off-2/40 border border-terracota/20 rounded-lg p-8 mb-20">
        <p className="mb-4 text-xs tracking-[0.2em] text-terracota uppercase">
          Galeria
        </p>
        <h1
          className="mb-8 max-w-3xl font-light leading-[1.05] text-oliva-escuro"
          style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
        >
          Conheça os ambientes da Casa da Mata
        </h1>
        <p className="mb-0 max-w-2xl text-sm leading-relaxed text-oliva-escuro">
          Explore a casa contêiner de 90 m² no coração da Mata Atlântica. Interior arejado e minimalista, exterior integrado
          ao jardim com riacho, fogo de chão e redário.
        </p>
      </div>

      {galleryCategories.map((category) => (
        <div key={category.id} className="backdrop-blur-sm bg-off-2/40 border border-terracota/20 rounded-lg p-6 mb-24">
          <section>
            <h2 className="mb-8 text-2xl font-light text-oliva-escuro">
              {category.label}
            </h2>

            <GalleryCarousel
              photos={photosByCategory[category.id] || []}
              category={category.id}
            />
          </section>
        </div>
      ))}
    </main>
  );
}
