// Helper mínimo de metadata (SEO básico). JSON-LD completo, sitemap, robots e
// Open Graph image customizada ficam para a Fase 5 — aqui só o essencial para
// a Task 2 (layout global + home).

import type { Metadata } from "next";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const DEFAULT_DESCRIPTION =
  "Casa da Mata — casa contêiner elegante em meio a 1000 m² de Mata Atlântica, com riacho ao pé da casa, fogo de chão e redário. Condomínio Pasárgada, Nova Lima/MG, a 26 km de BH.";

export const baseMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Casa da Mata",
    template: "%s | Casa da Mata",
  },
  description: DEFAULT_DESCRIPTION,
};

/**
 * Helper de metadata por página (Task 3). Cada página de produto passa
 * título/descrição específicos e o path da própria rota — o canonical é
 * resolvido contra metadataBase (definido em baseMetadata, no layout raiz).
 * OpenGraph customizado, JSON-LD por página e afins ficam para a Fase 5.
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
  };
}
