// Galeria de fotos da Casa da Mata, categorizadas em Interno/Externo
// As 6 primeiras fotos têm categoria inferida do nome do arquivo
// As demais (1.jpg–13.jpg, ILA_*.jpg) estão como "externo" por padrão
// e devem ser reclassificadas visualmente pelo editor

export interface GalleryPhoto {
  src: string;
  alt: string;
  category: "interno" | "externo";
}

export const galleryPhotos: GalleryPhoto[] = [
  // Fotos com nome categorizável
  {
    src: "/images/interior-quarto-closet.jpg",
    alt: "Interior da Casa da Mata: quarto, closet e cozinha integrados",
    category: "interno",
  },
  {
    src: "/images/cozinha-varanda-noite.jpg",
    alt: "Cozinha e varanda da Casa da Mata ao entardecer",
    category: "interno",
  },
  {
    src: "/images/exterior-container-jardim.jpg",
    alt: "Container e jardim externo da Casa da Mata",
    category: "externo",
  },
  {
    src: "/images/exterior-deck-rede.jpg",
    alt: "Deck externo e varanda com rede da Casa da Mata",
    category: "externo",
  },
  {
    src: "/images/chuveiro-externo.jpg",
    alt: "Chuveiro externo de madeira da Casa da Mata",
    category: "externo",
  },
  {
    src: "/images/jantar-externo.jpg",
    alt: "Mesa de jantar externa da Casa da Mata em meio ao jardim",
    category: "externo",
  },
  {
    src: "/images/hero-rede-vinho.jpg",
    alt: "Rede na varanda da Casa da Mata ao entardecer",
    category: "externo",
  },
  // Fotos sem categoria no nome — padrão "externo"
  // TODO: reclassificar manualmente após revisar as imagens
  {
    src: "/images/1.jpg",
    alt: "Foto interna da Casa da Mata",
    category: "externo",
  },
  {
    src: "/images/2.jpg",
    alt: "Foto interna da Casa da Mata",
    category: "externo",
  },
  {
    src: "/images/3.jpg",
    alt: "Foto interna da Casa da Mata",
    category: "externo",
  },
  {
    src: "/images/4.jpg",
    alt: "Foto interna da Casa da Mata",
    category: "externo",
  },
  {
    src: "/images/5.jpg",
    alt: "Foto interna da Casa da Mata",
    category: "externo",
  },
  {
    src: "/images/6.jpg",
    alt: "Foto interna da Casa da Mata",
    category: "externo",
  },
  {
    src: "/images/7.jpg",
    alt: "Foto interna da Casa da Mata",
    category: "externo",
  },
  {
    src: "/images/8.jpg",
    alt: "Foto interna da Casa da Mata",
    category: "externo",
  },
  {
    src: "/images/9.jpg",
    alt: "Foto interna da Casa da Mata",
    category: "externo",
  },
  {
    src: "/images/10.jpg",
    alt: "Foto interna da Casa da Mata",
    category: "externo",
  },
  {
    src: "/images/11.jpg",
    alt: "Foto interna da Casa da Mata",
    category: "externo",
  },
  {
    src: "/images/12.jpg",
    alt: "Foto interna da Casa da Mata",
    category: "externo",
  },
  {
    src: "/images/13.jpg",
    alt: "Foto interna da Casa da Mata",
    category: "externo",
  },
  {
    src: "/images/ILA_1560.jpg",
    alt: "Foto da Casa da Mata",
    category: "externo",
  },
  {
    src: "/images/ILA_1586.jpg",
    alt: "Foto da Casa da Mata",
    category: "externo",
  },
  {
    src: "/images/ILA_1696.jpg",
    alt: "Foto da Casa da Mata",
    category: "externo",
  },
  {
    src: "/images/ILA_1709.jpg",
    alt: "Foto da Casa da Mata",
    category: "externo",
  },
  {
    src: "/images/ILA_1730.jpg",
    alt: "Foto da Casa da Mata",
    category: "externo",
  },
  {
    src: "/images/ILA_1765.jpg",
    alt: "Foto da Casa da Mata",
    category: "externo",
  },
  {
    src: "/images/ILA_1818.jpg",
    alt: "Foto da Casa da Mata",
    category: "externo",
  },
  {
    src: "/images/ILA_1835.jpg",
    alt: "Foto da Casa da Mata",
    category: "externo",
  },
  {
    src: "/images/ILA_2881.jpg",
    alt: "Foto da Casa da Mata",
    category: "externo",
  },
  {
    src: "/images/ILA_2891.jpg",
    alt: "Foto da Casa da Mata",
    category: "externo",
  },
  {
    src: "/images/ILA_2942.jpg",
    alt: "Foto da Casa da Mata",
    category: "externo",
  },
  {
    src: "/images/ILA_2954.jpg",
    alt: "Foto da Casa da Mata",
    category: "externo",
  },
  {
    src: "/images/ILA_2993.jpg",
    alt: "Foto da Casa da Mata",
    category: "externo",
  },
  {
    src: "/images/ILA_3007.jpg",
    alt: "Foto da Casa da Mata",
    category: "externo",
  },
  {
    src: "/images/ILA_3038.jpg",
    alt: "Foto da Casa da Mata",
    category: "externo",
  },
  {
    src: "/images/ILA_3056.jpg",
    alt: "Foto da Casa da Mata",
    category: "externo",
  },
  {
    src: "/images/ILA_3086.jpg",
    alt: "Foto da Casa da Mata",
    category: "externo",
  },
  {
    src: "/images/ILA_3113.jpg",
    alt: "Foto da Casa da Mata",
    category: "externo",
  },
  {
    src: "/images/ILA_3358.jpg",
    alt: "Foto da Casa da Mata",
    category: "externo",
  },
];
