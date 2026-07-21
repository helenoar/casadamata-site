import Image from 'next/image';
import Link from 'next/link';

const STRIP_PHOTOS = [
  '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg',
  '11.jpg', '12.jpg', '13.jpg', 'ILA_1560.jpg', 'ILA_1586.jpg', 'ILA_1696.jpg', 'ILA_1709.jpg',
  'ILA_1730.jpg', 'ILA_1765.jpg', 'ILA_1818.jpg', 'ILA_2881.jpg', 'ILA_2891.jpg',
  'ILA_2942.jpg', 'ILA_2954.jpg', 'ILA_2993.jpg', 'ILA_3007.jpg', 'ILA_3038.jpg', 'ILA_3056.jpg',
  'ILA_3086.jpg', 'ILA_3113.jpg', 'ILA_3358.jpg',
];

export function HeroPhotoStrip() {
  return (
    <>
      <style>{`
        @keyframes slide-photos {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .photo-strip-track {
          animation: slide-photos 120s linear infinite;
        }
        .photo-strip-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <section className="w-full bg-off-1 px-6 py-8 md:px-16 lg:px-24">
        <div className="overflow-hidden mb-6">
          <div className="photo-strip-track flex h-[200px] gap-4" style={{ width: '200%' }}>
            {[...STRIP_PHOTOS, ...STRIP_PHOTOS].map((photo, idx) => (
              <div
                key={`${photo}-${idx}`}
                className="h-full flex-shrink-0 rounded-sm overflow-hidden shadow-soft"
                style={{ width: '320px', minWidth: '320px' }}
              >
                <Image
                  src={`/images/${photo}`}
                  alt={`Foto da Casa da Mata`}
                  width={320}
                  height={200}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        <Link
          href="/galeria"
          className="inline-block border-b border-terracota text-sm tracking-wide text-terracota uppercase"
        >
          Ver todas as fotos →
        </Link>
      </section>
    </>
  );
}
