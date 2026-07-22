"use client";

import Link from "next/link";
import { useState } from "react";

import { property } from "@/content/data/property";
import { reviews } from "@/content/data/reviews";
import { StarRating } from "@/components/ui/StarRating";
import { Reveal } from "@/components/ui/Reveal";

const ITEMS_PER_PAGE = 3;

export function ReviewsPreview() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? reviews.length - ITEMS_PER_PAGE : prev - ITEMS_PER_PAGE
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + ITEMS_PER_PAGE >= reviews.length ? 0 : prev + ITEMS_PER_PAGE
    );
  };

  const visibleReviews = reviews.slice(
    currentIndex,
    currentIndex + ITEMS_PER_PAGE
  );

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

      <div className="flex items-start gap-6 md:gap-8">
        <button
          onClick={handlePrev}
          className="mt-2 flex-shrink-0 p-2 text-oliva-escuro hover:text-terracota transition-colors duration-200"
          aria-label="Avaliações anteriores"
        >
          <svg
            className="w-6 h-6 md:w-8 md:h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <div className="flex-1 grid gap-12 md:grid-cols-3 md:gap-16 lg:gap-20 min-h-96">
          {visibleReviews.map((review, index) => (
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

        <button
          onClick={handleNext}
          className="mt-2 flex-shrink-0 p-2 text-oliva-escuro hover:text-terracota transition-colors duration-200"
          aria-label="Próximas avaliações"
        >
          <svg
            className="w-6 h-6 md:w-8 md:h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
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
