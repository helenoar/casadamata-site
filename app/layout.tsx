import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";

import { BrandStripe } from "@/components/ui/BrandStripe";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { property } from "@/content/data/property";
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

// JSON-LD site-wide (schema.org LodgingBusiness). Review, FAQPage, Person,
// BreadcrumbList e amenityFeature completo ficam para a Fase 5, quando as
// páginas que os usam já existirem (Task 3/4).
const lodgingBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: property.brandName,
  description: property.descriptionParagraphs[1],
  address: {
    "@type": "PostalAddress",
    streetAddress: property.location.condominium,
    addressLocality: property.location.city,
    addressRegion: property.location.state,
    addressCountry: property.location.country,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: property.reputation.overallRating,
    reviewCount: property.reputation.reviewCount,
  },
  sameAs: [property.airbnbUrl],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(lodgingBusinessJsonLd),
          }}
        />
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
