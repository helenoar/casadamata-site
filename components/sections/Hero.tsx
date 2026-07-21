'use client';

import React, { useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";

import { property } from "@/content/data/property";
import { locationFacts } from "@/content/data/location-facts";

const HERO_PHOTOS = [
  {
    src: '/images/hero-rede-vinho.jpg',
    alt: 'Rede com taças de vinho na varanda da Casa da Mata, em meio à Mata Atlântica',
  },
  {
    src: '/images/chuveiro-externo.jpg',
    alt: 'Chuveiro externo de madeira da Casa da Mata',
  },
  {
    src: '/images/jantar-externo.jpg',
    alt: 'Mesa de jantar externa da Casa da Mata em meio ao jardim',
  },
];

export function Hero() {
  const guestFavoriteBadge = property.badges.find(
    (badge) => badge.label === "Preferido dos hóspedes",
  );
  const distanceToBh = locationFacts.distances[0];
  const outdoorAreaSqm = property.capacity.outdoorAreaSqm;

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes scroll-carousel {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-${(HERO_PHOTOS.length / 2) * 100}%);
        }
      }
      .carousel-track {
        animation: scroll-carousel 20s linear infinite;
      }
      .carousel-track:hover {
        animation-play-state: paused;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <section className="grid w-full items-center gap-10 px-6 pt-10 pb-16 md:grid-cols-2 md:px-16 lg:px-24">
      <div>
        <div className="mb-8 flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-oliva-escuro px-3 py-1 text-xs tracking-[0.12em] text-oliva-escuro uppercase">
            ★ {property.reputation.overallRating.toFixed(1).replace(".", ",")}{" "}
            · {property.reputation.reviewCount} avaliações
          </span>
          {guestFavoriteBadge ? (
            <span className="text-xs tracking-[0.12em] text-terracota uppercase">
              {guestFavoriteBadge.label} · Top 5%
            </span>
          ) : null}
        </div>

        <h1
          className="mb-8 font-light leading-[0.95] text-oliva-escuro"
          style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)" }}
        >
          Um refúgio
          <br />
          <span className="font-semibold">na Mata Atlântica</span>
          <br />a {distanceToBh.km} km de BH.
        </h1>

        <p className="mb-10 max-w-xl text-lg leading-relaxed text-oliva-escuro">
          Casa contêiner elegante e arejada em meio a {outdoorAreaSqm} m² de
          mata, com riacho ao pé da casa, fogo de chão e redário.{" "}
          {locationFacts.condominium}, {locationFacts.city} — a{" "}
          {distanceToBh.km} km de BH.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href={property.airbnbUrl}
            target="_blank"
            rel="noopener"
            className="bg-oliva-escuro px-8 py-4 text-sm tracking-wide text-off-2 uppercase"
          >
            Ver disponibilidade no Airbnb
          </a>
          <Link
            href="/a-casa"
            className="border border-oliva-escuro px-8 py-4 text-sm tracking-wide text-oliva-escuro uppercase"
          >
            Conhecer a casa
          </Link>
        </div>
      </div>

      <div className="h-[460px] overflow-hidden border-t-[3px] border-terracota">
        <div className="carousel-track flex h-full gap-3" style={{ width: `${(HERO_PHOTOS.length * 2) * 100}%` }}>
          {[...HERO_PHOTOS, ...HERO_PHOTOS].map((photo, idx) => (
            <div key={`${photo.src}-${idx}`} className="h-full flex-shrink-0" style={{ width: `${100 / (HERO_PHOTOS.length * 2)}%` }}>
              <Image
                src={photo.src}
                alt={photo.alt}
                width={300}
                height={460}
                className="h-full w-full object-cover"
                priority={idx < HERO_PHOTOS.length}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
