// Helper de metadata (SEO). Open Graph usa foto real do imóvel (Task 5) — ver
// justificativa no relatório da Task 5 (.superpowers/sdd/task-5-report.md):
// não geramos imagem sintética via next/og, já temos fotos profissionais reais.

import type { Metadata } from "next";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const DEFAULT_DESCRIPTION =
  "Casa da Mata — casa contêiner elegante em meio a 1000 m² de Mata Atlântica, com riacho ao pé da casa, fogo de chão e redário. Condomínio Pasárgada, Nova Lima/MG, a 26 km de BH.";

// Foto real (Task 2) escolhida como imagem de capa padrão do Open Graph —
// hero-rede-vinho.jpg é a imagem de abertura do site, a mais "capa"
// visualmente entre as fotos profissionais disponíveis em public/images/.
const DEFAULT_OG_IMAGE = {
  url: "/images/hero-rede-vinho.jpg",
  width: 1600,
  height: 1062,
  alt: "Casa da Mata — rede na varanda em meio à Mata Atlântica",
};

export const baseMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Casa da Mata",
    template: "%s | Casa da Mata",
  },
  description: DEFAULT_DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Casa da Mata",
    title: "Casa da Mata",
    description: DEFAULT_DESCRIPTION,
    url: "/",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Casa da Mata",
    description: DEFAULT_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE.url],
  },
};

/**
 * Helper de metadata por página (Task 3, estendido na Task 5 com Open Graph
 * e Twitter card por página). Cada página de produto passa título/descrição
 * específicos e o path da própria rota — o canonical é resolvido contra
 * metadataBase (definido em baseMetadata, no layout raiz). A imagem de OG
 * usa o mesmo default do site inteiro (foto real), a menos que a página
 * passe uma imagem própria.
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
    openGraph: {
      title,
      description,
      url: path,
      images: [DEFAULT_OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [DEFAULT_OG_IMAGE.url],
    },
  };
}
