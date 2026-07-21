// Schema.org FAQPage — usado em app/faq/page.tsx (Task 5).
// Gerado a partir de content/data/faq.ts, os 10 pares reais, sem hardcode.

import { faq } from "@/content/data/faq";

export function FaqJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
