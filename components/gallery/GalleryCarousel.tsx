'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import type { GalleryPhoto } from '@/content/data/gallery';
import { Lightbox } from './Lightbox';

interface GalleryCarouselProps {
  photos: GalleryPhoto[];
  category: string;
}

export function GalleryCarousel({ photos, category }: GalleryCarouselProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const startXRef = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    startXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const endX = e.changedTouches[0].clientX;
    const diff = startXRef.current - endX;

    if (Math.abs(diff) > 50 && carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth * 0.8;
      carouselRef.current.scrollBy({
        left: diff > 0 ? scrollAmount : -scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <div
        ref={carouselRef}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="flex gap-3 overflow-x-auto pb-4 scroll-smooth [-webkit-overflow-scrolling:touch]"
        style={{
          scrollBehavior: 'smooth',
        }}
      >
        {photos.map((photo, idx) => (
          <button
            key={photo.src}
            onClick={() => setSelectedIndex(idx)}
            className="group relative h-[280px] w-[280px] flex-shrink-0 overflow-hidden border-t-[3px] border-terracota shadow-soft transition-all duration-300 hover:shadow-lifted hover:-translate-y-1"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              sizes="(max-width: 768px) 280px, 350px"
            />
          </button>
        ))}
      </div>

      {selectedIndex !== null && (
        <Lightbox
          photos={photos}
          currentIndex={selectedIndex}
          onClose={() => setSelectedIndex(null)}
          onNext={() =>
            setSelectedIndex((idx) =>
              idx !== null && idx < photos.length - 1 ? idx + 1 : idx
            )
          }
          onPrev={() =>
            setSelectedIndex((idx) => (idx !== null && idx > 0 ? idx - 1 : idx))
          }
        />
      )}
    </>
  );
}
