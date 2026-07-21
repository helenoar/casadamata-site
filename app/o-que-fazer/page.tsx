import type { Metadata } from "next";
import Link from "next/link";

import { getRegionalGuideSummaries } from "@/lib/mdx";
import { BackToHomeHeader } from "@/components/layout/BackToHomeHeader";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "O que fazer perto da Casa da Mata",
  description:
    "Guias sobre a região da Casa da Mata: trilhas do Ribeirão dos Macacos, Vale do Sol e Macacos (São Sebastião das Águas Claras), em Nova Lima, MG.",
  path: "/o-que-fazer",
});

export default function OQueFazerPage() {
  const guides = getRegionalGuideSummaries();

  return (
    <main className="w-full px-6 pt-10 pb-24 md:px-16 lg:px-24">
      <BackToHomeHeader />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "O que fazer", path: "/o-que-fazer" },
        ]}
      />
      <p className="mb-4 text-xs tracking-[0.2em] text-terracota uppercase">
        O que fazer
      </p>
      <h1
        className="mb-6 max-w-3xl font-light leading-[1.05] text-oliva-escuro"
        style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
      >
        O que fazer perto da Casa da Mata?
      </h1>
      <p className="mb-14 max-w-2xl leading-relaxed text-oliva-escuro">
        Guias sobre a região de Nova Lima e Macacos, MG — trilhas, bairros
        vizinhos e o contexto natural do entorno da Casa da Mata.
      </p>

      <div className="grid gap-10 md:grid-cols-3">
        {guides.map(({ slug, frontmatter }) => (
          <Link
            key={slug}
            href={`/o-que-fazer/${slug}`}
            className="block border-t-[3px] border-terracota pt-5"
          >
            <h2 className="mb-2 text-lg font-medium text-oliva-escuro">
              {frontmatter.title}
            </h2>
            <p className="text-sm leading-relaxed text-oliva-escuro/80">
              {frontmatter.description}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
