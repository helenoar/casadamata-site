// Schema.org Review — um nó por avaliação real, usado em
// app/avaliacoes/page.tsx (Task 5). Gerado a partir de content/data/reviews.ts
// (as 21). reviewRating.ratingValue é sempre 5 (confirmado no arquivo-fonte).
//
// datePublished é omitido de propósito: toda data em reviews.ts está
// normalizada para granularidade mês/ano (ex. "julho de 2026"), nunca dia —
// inventar um dia específico seria fabricar precisão que a fonte não tem.
// schema.org não exige esse campo, por isso a omissão é segura.

import { property } from "@/content/data/property";
import { reviews } from "@/content/data/reviews";

export function ReviewJsonLd() {
  const jsonLd = reviews.map((review) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "LodgingBusiness",
      name: property.brandName,
    },
    author: {
      "@type": "Person",
      name: review.guestName,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: 5,
      bestRating: 5,
    },
    reviewBody: review.text,
  }));

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
