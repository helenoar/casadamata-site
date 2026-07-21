import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";

import { BrandStripe } from "@/components/ui/BrandStripe";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LodgingBusinessJsonLd } from "@/components/schema/LodgingBusinessJsonLd";
import { TouristAttractionJsonLd } from "@/components/schema/TouristAttractionJsonLd";
import { attractions } from "@/content/data/atracoes-verificadas";
import { baseMetadata } from "@/lib/seo";

// Fonte de marca real (ITC Avant Garde Gothic) ainda sem licença de uso web
// resolvida. Jost é o fallback temporário — --font-heading e --font-body
// apontam para a mesma fonte por enquanto; trocar depois é uma linha só.
const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jost",
});

export const metadata: Metadata = baseMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Top 6 attractions for JSON-LD: Inhotim, Topo do Mundo, Macacos,
  // Cachoeira dos Macacos, Trilha Ribeirão, Restaurante Mar Mineiro
  const topAttractions = attractions.slice(0, 6);

  return (
    <html lang="pt-BR">
      <head>
        <LodgingBusinessJsonLd />
        <TouristAttractionJsonLd attractions={topAttractions} />
      </head>
      <body className={`${jost.variable} font-body bg-off-2 text-oliva-escuro antialiased`}>
        <BrandStripe />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
