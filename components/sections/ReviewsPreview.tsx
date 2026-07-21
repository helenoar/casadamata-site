import Link from "next/link";

import { property } from "@/content/data/property";
import { reviews } from "@/content/data/reviews";
import { StarRating } from "@/components/ui/StarRating";

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
      className="w-full px-6 py-28 md:px-16 lg:px-24"
    >
      <p className="mb-4 text-xs tracking-[0.2em] text-terracota uppercase">
        Quem já ficou
      </p>
      <h2
        className="mb-16 font-light text-oliva-escuro"
        style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
      >
        {property.reputation.overallRating.toFixed(1).replace(".", ",")} de 5
        estrelas, em {property.reputation.reviewCount} avaliações.
      </h2>

      <div className="grid gap-10 md:grid-cols-3">
        {previewReviews.map((review) => (
          <blockquote key={review.id} className="border-l-2 border-terracota pl-5">
            <StarRating rating={review.rating} className="mb-[0.85rem]" />
            <p className="mb-4 text-lg leading-relaxed text-oliva-escuro">
              {review.text}
            </p>
            <cite className="text-sm text-oliva-escuro/75 not-italic">
              {review.guestName}
            </cite>
          </blockquote>
        ))}
      </div>

      <Link
        href="/avaliacoes"
        className="mt-14 inline-block border-b border-terracota text-sm tracking-wide text-terracota uppercase"
      >
        Ver todas as {property.reputation.reviewCount} avaliações →
      </Link>
    </section>
  );
}
