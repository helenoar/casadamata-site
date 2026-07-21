import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { property } from "@/content/data/property";
import { locationFacts } from "@/content/data/location-facts";
import { compileGuide } from "@/lib/mdx";
import { pageMetadata } from "@/lib/seo";
import { FactList } from "@/components/ui/FactList";
import { BackToHomeHeader } from "@/components/layout/BackToHomeHeader";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { PlaceJsonLd } from "@/components/schema/PlaceJsonLd";

const GUIDE_SLUG = "hospedagem-nova-lima-e-macacos";

export async function generateMetadata(): Promise<Metadata> {
  const { frontmatter } = await compileGuide(GUIDE_SLUG);
  return pageMetadata({
    title: frontmatter.title,
    description: frontmatter.description,
    path: "/hospedagem-nova-lima-e-macacos",
  });
}

export default async function HospedagemNovaLimaEMacacosPage() {
  const { content, frontmatter } = await compileGuide(GUIDE_SLUG);

  const distanceFacts = locationFacts.distances.map(
    (distance) => `${distance.km} km · ${distance.label}`,
  );
  const biomeFacts = locationFacts.biomes.map(
    (biome) => `${biome.name} — ${biome.note}`,
  );

  return (
    <main className="w-full">
      <BackToHomeHeader />
      <PlaceJsonLd name={frontmatter.title} description={frontmatter.description} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: frontmatter.title, path: "/hospedagem-nova-lima-e-macacos" },
        ]}
      />
      <section className="grid w-full items-center gap-10 px-6 pt-10 pb-16 md:grid-cols-2 md:px-16 lg:px-24">
        <div>
          <p className="mb-4 text-xs tracking-[0.2em] text-terracota uppercase">
            Guia da região
          </p>
          <h1
            className="mb-8 font-light leading-[1.05] text-oliva-escuro"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
          >
            {frontmatter.title}
          </h1>

          <FactList facts={distanceFacts} className="mb-6" />
          <FactList facts={biomeFacts} />
        </div>

        <div className="h-[360px] overflow-hidden border-t-[3px] border-terracota md:h-[460px] shadow-soft hover:shadow-lifted hover:-translate-y-1 transition-all duration-300 will-change-transform">
          <Image
            src="/images/1.jpg"
            alt="Interior da Casa da Mata — hospedagem completa na Mata Atlântica"
            width={900}
            height={900}
            className="h-full w-full object-cover"
            priority
          />
        </div>
      </section>

      <section className="w-full bg-off-1 px-6 py-16 md:px-16 lg:px-24">
        <div>{content}</div>

        <div className="mt-14 flex flex-wrap gap-4">
          <a
            href={property.airbnbUrl}
            target="_blank"
            rel="noopener"
            className="bg-oliva-escuro px-8 py-4 text-sm tracking-wide text-off-2 uppercase"
          >
            Ver disponibilidade no Airbnb
          </a>
          <Link
            href="/o-que-fazer"
            className="border border-oliva-escuro px-8 py-4 text-sm tracking-wide text-oliva-escuro uppercase"
          >
            Ver guias da região
          </Link>
        </div>
      </section>
    </main>
  );
}
