'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import type { GalleryPhoto } from '@/content/data/gallery';

interface LightboxProps {
  photos: GalleryPhoto[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export function Lightbox({
  photos,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose, onNext, onPrev]);

  const photo = photos[currentIndex];

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-50 text-white hover:text-off-1 transition-colors"
        aria-label="Fechar"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Image container */}
      <div
        className="relative w-full h-full max-w-4xl max-h-[80vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 80vw"
          priority
        />
      </div>

      {/* Navigation arrows */}
      {photos.length > 1 && (
        <>
          {/* Previous */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-40 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 transition-colors"
            aria-label="Foto anterior"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-40 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 transition-colors"
            aria-label="Próxima foto"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-sm bg-black/40 px-4 py-2 rounded">
            {currentIndex + 1} de {photos.length}
          </div>
        </>
      )}
    </div>
  );
}
