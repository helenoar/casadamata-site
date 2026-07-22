import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  compileGuide,
  getAllGuideSlugs,
  guideExists,
  PILLAR_GUIDE_SLUGS,
} from "@/lib/mdx";
import { BackToHomeHeader } from "@/components/layout/BackToHomeHeader";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { PlaceJsonLd } from "@/components/schema/PlaceJsonLd";
import { pageMetadata } from "@/lib/seo";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllGuideSlugs()
    .filter((slug) => !PILLAR_GUIDE_SLUGS.includes(slug))
    .map((slug) => ({ slug }));
}

function isValidGuideSlug(slug: string): boolean {
  return !PILLAR_GUIDE_SLUGS.includes(slug) && guideExists(slug);
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
    path: `/a-regiao/${slug}`,
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
      <BackToHomeHeader />
      <PlaceJsonLd name={frontmatter.title} description={frontmatter.description} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "A Região", path: "/a-regiao" },
          { name: frontmatter.title, path: `/a-regiao/${slug}` },
        ]}
      />
      <p className="mb-4 text-xs tracking-[0.2em] text-terracota uppercase">
        A Região
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
