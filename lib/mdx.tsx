// Helper de leitura/compilação dos guias regionais em content/guides/*.mdx
// (Task 4). Biblioteca escolhida: next-mdx-remote/rsc + gray-matter — ver
// justificativa no relatório da Task 4 (.superpowers/sdd/task-4-report.md).
//
// gray-matter é usado para leituras "baratas" de frontmatter (listagem do hub
// e generateStaticParams), sem precisar compilar o corpo MDX inteiro.
// compileMDX (next-mdx-remote/rsc) compila o corpo + frontmatter juntos,
// usado só na página que efetivamente renderiza o guia.

import fs from "node:fs";
import path from "node:path";
import { cache } from "react";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import type { MDXComponents } from "mdx/types";

const GUIDES_DIRECTORY = path.join(process.cwd(), "content/guides");

export type GuideFrontmatter = {
  title: string;
  description: string;
  updatedAt: string;
  keywords: string[];
};

export type GuideSummary = {
  slug: string;
  frontmatter: GuideFrontmatter;
};

// A pillar page GEO tem rota própria (/hospedagem-nova-lima-e-macacos), fora
// de /o-que-fazer/[slug] — mas o .mdx correspondente mora no mesmo diretório
// content/guides/, por isso todo helper de listagem precisa excluí-la.
export const PILLAR_GUIDE_SLUG = "hospedagem-nova-lima-e-macacos";

function readGuideFile(slug: string): string {
  return fs.readFileSync(path.join(GUIDES_DIRECTORY, `${slug}.mdx`), "utf8");
}

export function getAllGuideSlugs(): string[] {
  return fs
    .readdirSync(GUIDES_DIRECTORY)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function guideExists(slug: string): boolean {
  return getAllGuideSlugs().includes(slug);
}

export function getGuideFrontmatter(slug: string): GuideFrontmatter {
  const { data } = matter(readGuideFile(slug));
  return data as GuideFrontmatter;
}

// Guias regionais exibidos no hub /o-que-fazer — exclui o pillar page.
export function getRegionalGuideSummaries(): GuideSummary[] {
  return getAllGuideSlugs()
    .filter((slug) => slug !== PILLAR_GUIDE_SLUG)
    .map((slug) => ({ slug, frontmatter: getGuideFrontmatter(slug) }))
    .sort((a, b) =>
      a.frontmatter.title.localeCompare(b.frontmatter.title, "pt-BR"),
    );
}

// Mapeamento markdown → JSX com os mesmos tokens de design (oliva-escuro /
// terracota) já usados nas páginas de produto (Task 3), para o corpo dos
// guias não cair no HTML default sem estilo.
export const mdxComponents: MDXComponents = {
  h2: (props) => (
    <h2
      className="mt-12 mb-4 text-2xl font-medium text-oliva-escuro first:mt-0"
      {...props}
    />
  ),
  h3: (props) => (
    <h3 className="mt-8 mb-3 text-xl font-medium text-oliva-escuro" {...props} />
  ),
  p: (props) => (
    <p className="mb-4 leading-relaxed text-oliva-escuro" {...props} />
  ),
  ul: (props) => (
    <ul
      className="mb-4 flex list-disc flex-col gap-2 pl-5 text-oliva-escuro"
      {...props}
    />
  ),
  li: (props) => <li className="leading-relaxed" {...props} />,
  strong: (props) => (
    <strong className="font-semibold text-oliva-escuro" {...props} />
  ),
  a: (props) => (
    <a
      className="underline decoration-terracota underline-offset-2"
      {...props}
    />
  ),
};

// Compila frontmatter + corpo de um guia. Usado tanto pela rota genérica
// /o-que-fazer/[slug] quanto pela pillar page (que monta layout próprio ao
// redor do mesmo corpo compilado). Envolto em React cache() porque tanto a
// page quanto o generateMetadata da mesma rota chamam esta função no mesmo
// request — sem cache(), compilaria o MDX duas vezes.
export const compileGuide = cache(async function compileGuide(slug: string) {
  return compileMDX<GuideFrontmatter>({
    source: readGuideFile(slug),
    options: { parseFrontmatter: true },
    components: mdxComponents,
  });
});
