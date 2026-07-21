import type { Metadata } from "next";

import { property } from "@/content/data/property";
import { reviews, reviewsSummary } from "@/content/data/reviews";
import { StarRating } from "@/components/ui/StarRating";
import { FactList } from "@/components/ui/FactList";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Avaliações",
  description: `As ${reviewsSummary.reviewCount} avaliações reais da Casa da Mata no Airbnb — nota geral ${reviewsSummary.overallRating.toFixed(1).replace(".", ",")}, ${reviewsSummary.fiveStarPercentage}% 5 estrelas.`,
  path: "/avaliacoes",
});

const CATEGORY_LABELS: Array<{
  key: keyof typeof reviewsSummary.categoryScores;
  label: string;
}> = [
  { key: "cleanliness", label: "Limpeza" },
  { key: "accuracy", label: "Exatidão" },
  { key: "checkIn", label: "Check-in" },
  { key: "communication", label: "Comunicação" },
  { key: "location", label: "Localização" },
  { key: "value", label: "Custo-benefício" },
];

export default function AvaliacoesPage() {
  const summaryFacts = [
    `${reviewsSummary.reviewCount} avaliações reais no Airbnb`,
    `Nota geral: ${reviewsSummary.overallRating.toFixed(1).replace(".", ",")} de 5`,
    `${reviewsSummary.fiveStarPercentage}% das avaliações são 5 estrelas`,
    ...CATEGORY_LABELS.map(
      ({ key, label }) =>
        `${label}: ${reviewsSummary.categoryScores[key].toFixed(1).replace(".", ",")}`,
    ),
  ];

  return (
    <main className="w-full px-6 pt-10 pb-24 md:px-16 lg:px-24">
      <p className="mb-4 text-xs tracking-[0.2em] text-terracota uppercase">
        Quem já ficou
      </p>
      <h1
        className="mb-10 max-w-3xl font-light leading-[1.05] text-oliva-escuro"
        style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
      >
        O que os hóspedes dizem sobre a Casa da Mata?
      </h1>

      <FactList facts={summaryFacts} className="mb-10 max-w-xl" />

      <div className="mb-16 flex flex-wrap gap-x-3 gap-y-2 text-sm text-oliva-escuro">
        <span className="text-xs tracking-[0.15em] text-terracota uppercase">
          Mais citado nas avaliações:
        </span>
        {reviewsSummary.mostMentionedWords.map((word, index) => (
          <span key={word.word}>
            {word.word} ({word.count})
            {index < reviewsSummary.mostMentionedWords.length - 1 ? " ·" : ""}
          </span>
        ))}
      </div>

      <a
        href="https://www.airbnb.com.br/rooms/1537170854409354731/reviews"
        target="_blank"
        rel="noopener"
        className="mb-16 inline-block border-b border-terracota text-sm tracking-wide text-terracota uppercase"
      >
        Ver todas as avaliações no Airbnb →
      </a>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <blockquote
            key={review.id}
            className="border-l-2 border-terracota pl-5"
          >
            <StarRating rating={review.rating} className="mb-[0.85rem]" />
            <p className="mb-4 leading-relaxed text-oliva-escuro">
              {review.text}
            </p>
            <cite className="block text-sm text-oliva-escuro/75 not-italic">
              {review.guestName} · {review.date}
            </cite>
            <span className="text-xs text-oliva-escuro/50">
              No Airbnb há {review.yearsOnAirbnb}
            </span>
          </blockquote>
        ))}
      </div>

      <a
        href={property.airbnbUrl}
        target="_blank"
        rel="noopener"
        className="mt-16 inline-block bg-oliva-escuro px-8 py-4 text-sm tracking-wide text-off-2 uppercase"
      >
        Ver disponibilidade no Airbnb
      </a>
    </main>
  );
}
