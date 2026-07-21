// Sitemap dinâmico (Task 5). Rotas estáticas conhecidas + slugs reais de
// content/guides/ (via lib/mdx.tsx, sem hardcode dos nomes dos guias — um
// guia novo aparece aqui automaticamente).

import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/seo";
import { getAllGuideSlugs, getGuideFrontmatter, PILLAR_GUIDE_SLUGS } from "@/lib/mdx";

const STATIC_ROUTES = [
  "/",
  "/a-casa",
  "/anfitria",
  "/avaliacoes",
  "/faq",
  "/reservar",
  "/hospedagem-nova-lima-e-macacos",
  "/inhotim-e-atracoes-turisticas",
  "/o-que-fazer",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
  }));

  // updatedAt do frontmatter é dado real (Task 4) — usado como lastModified
  // só para as rotas que de fato têm essa informação.
  PILLAR_GUIDE_SLUGS.forEach((slug) => {
    const routeMap: Record<string, string> = {
      "hospedagem-nova-lima-e-macacos": "/hospedagem-nova-lima-e-macacos",
      "inhotim-e-atracoes-turisticas": "/inhotim-e-atracoes-turisticas",
    };
    const route = routeMap[slug];
    if (route) {
      const updatedAt = getGuideFrontmatter(slug).updatedAt;
      const index = staticEntries.findIndex((entry) => entry.url === `${SITE_URL}${route}`);
      if (index !== -1) {
        staticEntries[index] = {
          ...staticEntries[index],
          lastModified: updatedAt,
        };
      }
    }
  });

  const guideEntries: MetadataRoute.Sitemap = getAllGuideSlugs()
    .filter((slug) => !PILLAR_GUIDE_SLUGS.includes(slug))
    .map((slug) => ({
      url: `${SITE_URL}/o-que-fazer/${slug}`,
      lastModified: getGuideFrontmatter(slug).updatedAt,
    }));

  return [...staticEntries, ...guideEntries];
}
