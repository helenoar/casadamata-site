'use client';

import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";

import { property } from "@/content/data/property";
import { locationFacts } from "@/content/data/location-facts";
import { Reveal } from "@/components/ui/Reveal";

const HERO_SLIDESHOW_PHOTOS = [
  '/images/hero-rede-vinho.jpg',
  '/images/chuveiro-externo.jpg',
  '/images/jantar-externo.jpg',
  '/images/cozinha-varanda-noite.jpg',
  '/images/exterior-container-jardim.jpg',
  '/images/exterior-deck-rede.jpg',
];

export function Hero() {
  const [currentPhoto, setCurrentPhoto] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhoto((prev) => (prev === HERO_SLIDESHOW_PHOTOS.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const guestFavoriteBadge = property.badges.find(
    (badge) => badge.label === "Preferido dos hóspedes",
  );
  const distanceToBh = locationFacts.distances[0];
  const outdoorAreaSqm = property.capacity.outdoorAreaSqm;

  return (
    <section className="grid w-full items-start gap-10 px-6 pt-10 pb-16 md:grid-cols-2 md:px-16 lg:px-24">
      <Reveal>
      <div>
        <div className="mb-8 flex justify-center">
          <div className="h-40 w-40 md:h-48 md:w-48 shrink-0 overflow-hidden rounded-full bg-off-1 flex items-center justify-center">
            <Image
              src="/logo-casa-da-mata.png"
              alt="Logo Casa da Mata"
              width={240}
              height={240}
              className="h-[145%] w-[145%] object-cover"
              priority
            />
          </div>
        </div>

        <div className="mb-8 text-center">
          <div className="text-oliva-escuro/60 text-sm tracking-widest uppercase mb-6">
            Casa da Mata · 45
          </div>
          <h1
            className="font-light leading-[0.95] text-oliva-escuro mb-8"
            style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)" }}
          >
            Um refúgio
            <br />
            <span className="font-semibold">na Mata Atlântica</span>
            <br />a {distanceToBh.km} km de BH.
          </h1>
        </div>

        <div className="mb-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
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

        <p className="mb-10 text-lg leading-relaxed text-oliva-escuro text-center md:text-left">
          Casa contêiner elegante e arejada em meio a {outdoorAreaSqm} m² de
          mata, com riacho ao pé da casa, fogo de chão e redário.{" "}
          {locationFacts.condominium}, {locationFacts.city} — a{" "}
          {distanceToBh.km} km de BH.
        </p>
      </div>
      </Reveal>

      <div>
        <div className="h-[540px] overflow-hidden border-t-[3px] border-terracota relative mb-10 shadow-soft hover:shadow-lifted hover:-translate-y-1 transition-all duration-300 will-change-transform">
          {HERO_SLIDESHOW_PHOTOS.map((photo, idx) => (
            <Image
              key={photo}
              src={photo}
              alt={`Foto da Casa da Mata ${idx + 1}`}
              width={900}
              height={600}
              className={`absolute h-full w-full object-cover transition-opacity duration-700 ${
                idx === currentPhoto ? 'opacity-100' : 'opacity-0'
              }`}
              priority={idx === 0}
            />
          ))}
        </div>

        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <a
            href={property.airbnbUrl}
            target="_blank"
            rel="noopener"
            className="backdrop-blur-xs bg-off-1/50 border border-terracota bg-oliva-escuro px-8 py-4 text-sm tracking-wide text-off-2 uppercase"
          >
            Ver disponibilidade no Airbnb
          </a>
          <Link
            href="/a-casa"
            className="backdrop-blur-xs bg-off-1/50 border border-terracota border-oliva-escuro px-8 py-4 text-sm tracking-wide text-oliva-escuro uppercase"
          >
            Conhecer a casa
          </Link>
        </div>
      </div>
    </section>
  );
}
