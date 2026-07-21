// Sitemap dinâmico (Task 5). Rotas estáticas conhecidas + slugs reais de
// content/guides/ (via lib/mdx.tsx, sem hardcode dos nomes dos guias — um
// guia novo aparece aqui automaticamente).

import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/seo";
import { getAllGuideSlugs, getGuideFrontmatter, PILLAR_GUIDE_SLUG } from "@/lib/mdx";

const STATIC_ROUTES = [
  "/",
  "/a-casa",
  "/anfitria",
  "/avaliacoes",
  "/faq",
  "/reservar",
  "/hospedagem-nova-lima-e-macacos",
  "/o-que-fazer",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
  }));

  // updatedAt do frontmatter é dado real (Task 4) — usado como lastModified
  // só para as rotas que de fato têm essa informação.
  const pillarUpdatedAt = getGuideFrontmatter(PILLAR_GUIDE_SLUG).updatedAt;
  const pillarIndex = staticEntries.findIndex(
    (entry) => entry.url === `${SITE_URL}/hospedagem-nova-lima-e-macacos`,
  );
  if (pillarIndex !== -1) {
    staticEntries[pillarIndex] = {
      ...staticEntries[pillarIndex],
      lastModified: pillarUpdatedAt,
    };
  }

  const guideEntries: MetadataRoute.Sitemap = getAllGuideSlugs()
    .filter((slug) => slug !== PILLAR_GUIDE_SLUG)
    .map((slug) => ({
      url: `${SITE_URL}/o-que-fazer/${slug}`,
      lastModified: getGuideFrontmatter(slug).updatedAt,
    }));

  return [...staticEntries, ...guideEntries];
}
