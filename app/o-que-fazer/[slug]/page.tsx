import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  compileGuide,
  getAllGuideSlugs,
  guideExists,
  PILLAR_GUIDE_SLUG,
} from "@/lib/mdx";
import { pageMetadata } from "@/lib/seo";

type Params = { params: Promise<{ slug: string }> };

// O pillar page GEO tem rota própria (/hospedagem-nova-lima-e-macacos) e não
// deve ser servido por esta rota genérica, mesmo o .mdx estando na mesma pasta.
export function generateStaticParams() {
  return getAllGuideSlugs()
    .filter((slug) => slug !== PILLAR_GUIDE_SLUG)
    .map((slug) => ({ slug }));
}

function isValidGuideSlug(slug: string): boolean {
  return slug !== PILLAR_GUIDE_SLUG && guideExists(slug);
}

export async function generateMetadata({
  params,
}: Params): Promise<Metadata> {
  const { slug } = await params;
  if (!isValidGuideSlug(slug)) {
    return {};
  }

  const { frontmatter } = await compileGuide(slug);
  return pageMetadata({
    title: frontmatter.title,
    description: frontmatter.description,
    path: `/o-que-fazer/${slug}`,
  });
}

export default async function GuidePage({ params }: Params) {
  const { slug } = await params;
  if (!isValidGuideSlug(slug)) {
    notFound();
  }

  const { content, frontmatter } = await compileGuide(slug);

  return (
    <main className="w-full px-6 pt-10 pb-24 md:px-16 lg:px-24">
      <p className="mb-4 text-xs tracking-[0.2em] text-terracota uppercase">
        O que fazer
      </p>
      <h1
        className="mb-10 max-w-3xl font-light leading-[1.05] text-oliva-escuro"
        style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
      >
        {frontmatter.title}
      </h1>

      <div className="max-w-3xl">{content}</div>
    </main>
  );
}
