import Image from 'next/image';

const STRIP_PHOTOS = [
  '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg',
  '11.jpg', '12.jpg', '13.jpg', 'ILA_1560.jpg', 'ILA_1586.jpg', 'ILA_1696.jpg', 'ILA_1709.jpg',
  'ILA_1730.jpg', 'ILA_1765.jpg', 'ILA_1818.jpg', 'ILA_1835.jpg', 'ILA_2881.jpg', 'ILA_2891.jpg',
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

      <section className="w-full overflow-hidden bg-off-1 py-6">
        <div className="photo-strip-track flex h-[280px] gap-2" style={{ width: '200%' }}>
          {[...STRIP_PHOTOS, ...STRIP_PHOTOS].map((photo, idx) => (
            <div
              key={`${photo}-${idx}`}
              className="h-full flex-shrink-0"
              style={{ width: 'calc(20% - 0.25rem)', minWidth: 'calc(20% - 0.25rem)' }}
            >
              <Image
                src={`/images/${photo}`}
                alt={`Foto da Casa da Mata`}
                width={280}
                height={280}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
