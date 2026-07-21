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
