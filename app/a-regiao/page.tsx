import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { attractions } from "@/content/data/atracoes-verificadas";
import { getRegionalGuideSummaries } from "@/lib/mdx";
import { Reveal } from "@/components/ui/Reveal";
import { BackToHomeHeader } from "@/components/layout/BackToHomeHeader";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "A Região — Nova Lima, Macacos e Inhotim",
  description:
    "Descubra a região da Casa da Mata: Inhotim, trilhas, cachoeiras, gastronomia mineira e o contexto geográfico de Nova Lima e Macacos, MG.",
  path: "/a-regiao",
});

export default function ARegiaoPage() {
  const guides = getRegionalGuideSummaries();
  const inhotim = attractions.find((a) => a.id === "inhotim");

  return (
    <main className="w-full px-6 pt-10 pb-24 md:px-16 lg:px-24">
      <BackToHomeHeader />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "A Região", path: "/a-regiao" },
        ]}
      />
      <p className="mb-4 text-xs tracking-[0.2em] text-terracota uppercase">
        Conheça o entorno
      </p>
      <h1
        className="mb-6 font-light leading-[1.05] text-oliva-escuro"
        style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
      >
        A Região de Nova Lima e Macacos
      </h1>
      <p className="mb-14 leading-relaxed text-oliva-escuro">
        A Casa da Mata fica no coração de uma região rica em atrações turísticas, história natural e gastronomia mineira. Explore Inhotim, trilhas em Mata Atlântica, cachoeiras com piscinas naturais e os bairros históricos ao redor.
      </p>

      {inhotim && (
        <Reveal>
          <div className="mb-20 overflow-hidden rounded-sm border-t-[3px] border-terracota shadow-soft hover:shadow-lifted hover:-translate-y-1 transition-all duration-300">
            <Link
              href="/inhotim-e-atracoes-turisticas"
              className="block"
            >
              <div className="grid md:grid-cols-2 gap-0 bg-off-1">
                <div className="h-[280px] md:h-[360px] overflow-hidden">
                  <Image
                    src="/images/A região/inhotim.jpeg"
                    alt="Instituto Inhotim - museu de arte contemporânea a céu aberto"
                    width={600}
                    height={360}
                    className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <p className="mb-2 text-xs tracking-[0.2em] text-terracota uppercase font-semibold">
                      DESTAQUE — Museu
                    </p>
                    <h2 className="text-2xl md:text-3xl font-light text-oliva-escuro mb-3">
                      Instituto Inhotim
                    </h2>
                    <p className="text-sm leading-relaxed text-oliva-escuro/80 mb-4">
                      {inhotim.description}
                    </p>
                    <p className="text-xs text-oliva-escuro/60 mb-4">
                      📍 {inhotim.distanceKm} km de distância
                    </p>
                    <p className="text-sm font-medium text-terracota">
                      Saiba mais →
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </Reveal>
      )}

      <h2 className="mb-8 text-xl font-light text-oliva-escuro">
        Guias da Região
      </h2>
      <div className="grid gap-10 md:grid-cols-3">
        {guides.map(({ slug, frontmatter }, index) => {
          const imageMap: Record<string, string> = {
            "macacos-sao-sebastiao-das-aguas-claras": "/images/A região/macacos.jpg",
            "trilhas-ribeirao-dos-macacos": "/images/A região/trilhas.jpg",
            "vale-do-sol": "/images/A região/vale do sol.jpg",
          };
          const imageUrl = imageMap[slug] || "/images/A região/macacos.jpg";

          return (
            <Reveal key={slug} delayMs={index * 80}>
              <Link
                href={`/a-regiao/${slug}`}
                className="group block"
              >
                <div className="backdrop-blur-sm bg-off-2/40 border border-terracota/20 rounded-lg overflow-hidden shadow-soft hover:shadow-lifted hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                  <div className="h-[200px] overflow-hidden">
                    <Image
                      src={imageUrl}
                      alt={frontmatter.title}
                      width={400}
                      height={200}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1 bg-off-1/50">
                    <h3 className="mb-2 text-lg font-medium text-oliva-escuro">
                      {frontmatter.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-oliva-escuro/80">
                      {frontmatter.description}
                    </p>
                  </div>
                </div>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </main>
  );
}
