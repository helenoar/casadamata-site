import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { property } from "@/content/data/property";
import { attractions } from "@/content/data/atracoes-verificadas";
import { compileGuide } from "@/lib/mdx";
import { pageMetadata } from "@/lib/seo";
import { BackToHomeHeader } from "@/components/layout/BackToHomeHeader";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { PlaceJsonLd } from "@/components/schema/PlaceJsonLd";

const typeColors: Record<string, { bg: string; text: string }> = {
  museu: { bg: "bg-purple-100", text: "text-purple-900" },
  trilha: { bg: "bg-green-100", text: "text-green-900" },
  cachoeira: { bg: "bg-blue-100", text: "text-blue-900" },
  pousada: { bg: "bg-amber-100", text: "text-amber-900" },
  restaurante: { bg: "bg-orange-100", text: "text-orange-900" },
  bairro: { bg: "bg-gray-100", text: "text-gray-900" },
  outro: { bg: "bg-gray-100", text: "text-gray-900" },
};

const GUIDE_SLUG = "inhotim-e-atracoes-turisticas";

export async function generateMetadata(): Promise<Metadata> {
  const { frontmatter } = await compileGuide(GUIDE_SLUG);
  return pageMetadata({
    title: frontmatter.title,
    description: frontmatter.description,
    path: "/inhotim-e-atracoes-turisticas",
  });
}

export default async function InhotimEAtracoesPage() {
  const { content, frontmatter } = await compileGuide(GUIDE_SLUG);

  return (
    <main className="w-full">
      <BackToHomeHeader />
      <PlaceJsonLd name={frontmatter.title} description={frontmatter.description} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: frontmatter.title, path: "/inhotim-e-atracoes-turisticas" },
        ]}
      />
      <div className="backdrop-blur-sm bg-off-2/40 border border-terracota/20 rounded-lg p-6 md:p-8 mb-20">
        <section className="grid w-full items-center gap-10 px-6 pt-10 pb-16 md:grid-cols-2 md:px-16 lg:px-24">
          <div>
            <p className="mb-4 text-xs tracking-[0.2em] text-terracota uppercase">
              Guia turístico
            </p>
            <h1
              className="mb-8 font-light leading-[1.05] text-oliva-escuro"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
            >
              {frontmatter.title}
            </h1>

            <p className="mb-6 max-w-xl text-sm leading-relaxed text-oliva-escuro/80">
              Mais de 20 atrações verificadas em um raio de 30 km: museus, trilhas,
              cachoeiras, gastronomia mineira autêntica e hospedagem regional.
            </p>
          </div>

          <div className="h-[360px] overflow-hidden border-t-[3px] border-terracota md:h-[460px] shadow-soft hover:shadow-lifted hover:-translate-y-1 transition-all duration-300 will-change-transform">
            <Image
              src="/images/exterior-container-jardim.jpg"
              alt="Casa da Mata em meio à natureza, ponto de partida para explorar atrações turísticas"
              width={900}
              height={900}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </section>
      </div>

      <div className="backdrop-blur-sm bg-off-2/40 border border-terracota/20 rounded-lg p-6 md:p-8 mb-20">
        <section className="w-full bg-off-1 px-6 py-16 md:px-16 lg:px-24">
          <div>{content}</div>

          <div className="mt-20 mb-16">
            <h2 className="mb-8 text-2xl font-light text-oliva-escuro">
              Todas as atrações verificadas
            </h2>

            <div className="grid gap-4 md:grid-cols-3">
              {attractions.map((attraction) => {
                const color = typeColors[attraction.type] || typeColors.outro;
                return (
                  <div
                    key={attraction.id}
                    className="rounded-sm border border-oliva-escuro/10 bg-off-2/60 backdrop-blur-sm p-4 shadow-soft hover:shadow-lifted hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="mb-2 flex items-center justify-between">
                      <span className={`text-xs font-semibold uppercase tracking-wide ${color.text} ${color.bg} px-2 py-1 rounded`}>
                        {attraction.type}
                      </span>
                      <span className="text-xs text-oliva-escuro/60">
                        {attraction.distanceKm} km
                      </span>
                    </div>
                    <h4 className="text-sm font-medium text-oliva-escuro mb-1">
                      {attraction.name}
                    </h4>
                    <p className="text-xs text-oliva-escuro/70 leading-snug">
                      {attraction.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-14 flex flex-wrap gap-4">
            <a
              href={property.airbnbUrl}
              target="_blank"
              rel="noopener"
              className="bg-oliva-escuro px-8 py-4 text-sm tracking-wide text-off-2 uppercase"
            >
              Reservar Casa da Mata
            </a>
            <Link
              href="/hospedagem-nova-lima-e-macacos"
              className="border border-oliva-escuro px-8 py-4 text-sm tracking-wide text-oliva-escuro uppercase"
            >
              Guia de Hospedagem
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
