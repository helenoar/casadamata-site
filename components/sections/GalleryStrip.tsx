import Image from "next/image";
import Link from "next/link";

const GALLERY_PHOTOS = [
  {
    src: "/images/cozinha-varanda-noite.jpg",
    alt: "Cozinha e varanda da Casa da Mata iluminadas à noite",
  },
  {
    src: "/images/interior-quarto-closet.jpg",
    alt: "Interior da Casa da Mata: quarto, closet e cozinha integrados",
  },
  {
    src: "/images/exterior-container-jardim.jpg",
    alt: "Casa contêiner verde da Casa da Mata cercada por Mata Atlântica",
  },
  {
    src: "/images/exterior-deck-rede.jpg",
    alt: "Deck externo e varanda com rede da Casa da Mata ao entardecer",
  },
];

export function GalleryStrip() {
  return (
    <section className="w-full px-6 pb-24 md:px-16 lg:px-24">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {GALLERY_PHOTOS.map((photo) => (
          <div
            key={photo.src}
            className="h-[220px] overflow-hidden border-t-[3px] border-terracota"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={450}
              height={450}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
      <Link
        href="/a-casa"
        className="mt-6 inline-block border-b border-terracota text-sm tracking-wide text-terracota uppercase"
      >
        Ver todas as fotos →
      </Link>
    </section>
  );
}
