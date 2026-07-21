import Link from "next/link";

import { amenityCategories, amenityTotalCount } from "@/content/data/amenities";
import { Reveal } from "@/components/ui/Reveal";

// Subconjunto curado de 8 itens (variedade entre categorias), mas cada label
// abaixo é filtrado contra a lista real de content/data/amenities.ts — se um
// item não existir lá (typo, item removido), ele simplesmente não aparece,
// nunca inventamos um item que não esteja na fonte de dados.
const PREVIEW_LABELS = [
  "Cozinha completa",
  "Wi-Fi",
  "Ar-condicionado",
  "TV",
  "Roupas de cama de algodão da Buddemeyer",
  "Estacionamento gratuito no local",
  "Espaço de trabalho exclusivo",
  "Chuveiro externo",
];

const allAmenityItems = amenityCategories.flatMap((category) => category.items);
const previewItems = PREVIEW_LABELS.filter((label) =>
  allAmenityItems.includes(label),
);

export function AmenitiesPreview() {
  return (
    <section className="w-full surface-gradient-muted px-6 py-20 md:py-32 lg:py-40 md:px-16 lg:px-24">
      <p className="mb-6 text-xs tracking-[0.2em] text-terracota uppercase">
        A casa por dentro
      </p>
      <h2
        className="mb-20 font-light leading-[1] text-oliva-escuro"
        style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
      >
        Tudo o que você precisa, nada além disso.
      </h2>

      <Reveal>
      <div className="grid grid-cols-2 gap-x-6 gap-y-6 text-sm text-oliva-escuro md:grid-cols-4">
        {previewItems.map((item) => (
          <span key={item} className="rounded-sm border border-oliva-escuro/10 bg-off-2/60 backdrop-blur-sm px-4 py-3 shadow-soft hover:shadow-lifted hover:-translate-y-1 transition-all duration-300">{item}</span>
        ))}
      </div>
      </Reveal>

      <Link
        href="/a-casa"
        className="mt-10 inline-block border-b border-terracota text-sm tracking-wide text-terracota uppercase"
      >
        Ver as {amenityTotalCount} comodidades →
      </Link>
    </section>
  );
}
