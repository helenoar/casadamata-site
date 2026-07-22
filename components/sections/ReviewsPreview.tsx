import Link from "next/link";

import { property } from "@/content/data/property";
import { reviews } from "@/content/data/reviews";
import { StarRating } from "@/components/ui/StarRating";
import { Reveal } from "@/components/ui/Reveal";

// As mesmas 3 avaliações do protótipo aprovado (Lucélia B., Maria L., Luís O.),
// puxadas do array real por id — nunca texto solto.
const PREVIEW_REVIEW_IDS = [3, 13, 17];

const previewReviews = PREVIEW_REVIEW_IDS.map((id) =>
  reviews.find((review) => review.id === id),
).filter((review): review is NonNullable<typeof review> => review !== undefined);

export function ReviewsPreview() {
  return (
    <section
      id="avaliacoes"
      className="w-full px-6 py-20 md:py-32 lg:py-40 md:px-16 lg:px-24"
    >
      <p className="mb-4 text-xs tracking-[0.2em] text-terracota uppercase">
        Quem já ficou
      </p>
      <h2
        className="mb-20 font-light leading-[1] text-oliva-escuro"
        style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
      >
        {property.reputation.overallRating.toFixed(1).replace(".", ",")} de 5
        estrelas, em {property.reputation.reviewCount} avaliações.
      </h2>

      <div className="grid gap-12 md:grid-cols-3 md:gap-16 lg:gap-20">
        {previewReviews.map((review, index) => (
          <Reveal key={review.id} delayMs={index * 80}>
          <blockquote className="rounded-sm border-y border-r border-oliva-escuro/10 border-l-2 border-l-terracota bg-off-1/50 backdrop-blur-sm p-6 shadow-soft hover:shadow-lifted hover:-translate-y-1 transition-all duration-300">
            <StarRating rating={review.rating} className="mb-[0.85rem]" />
            <p className="mb-4 text-lg leading-relaxed text-oliva-escuro">
              {review.text}
            </p>
            <cite className="text-sm text-oliva-escuro/75 not-italic">
              {review.guestName}
            </cite>
          </blockquote>
          </Reveal>
        ))}
      </div>

      <Link
        href="/avaliacoes"
        className="mt-14 inline-block backdrop-blur-xs bg-off-1/50 border border-terracota border-b text-sm tracking-wide text-terracota uppercase"
      >
        Ver todas as {property.reputation.reviewCount} avaliações →
      </Link>
    </section>
  );
}
