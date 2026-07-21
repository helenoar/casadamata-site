// Galeria de fotos da Casa da Mata, categorizadas em Interno/Externo
// Categorização revisada visualmente em 2026-07-21

export interface GalleryPhoto {
  src: string;
  alt: string;
  category: "interno" | "externo";
}

export const galleryPhotos: GalleryPhoto[] = [
  // Interiores
  {
    src: "/images/interior-quarto-closet.jpg",
    alt: "Quarto integrado com closet e cozinha americana da Casa da Mata",
    category: "interno",
  },
  {
    src: "/images/7.jpg",
    alt: "Sala de estar com sofá, TV e varanda integrada ao ambiente",
    category: "interno",
  },
  {
    src: "/images/8.jpg",
    alt: "Suite com cama, banheiro integrado e closet da Casa da Mata",
    category: "interno",
  },
  {
    src: "/images/9.jpg",
    alt: "Suite com cama, cozinha americana e banheiro integrados",
    category: "interno",
  },
  {
    src: "/images/ILA_3007.jpg",
    alt: "Cozinha americana com vista para o jardim externo",
    category: "interno",
  },
  {
    src: "/images/ILA_3038.jpg",
    alt: "Suite com grande janela, cama integrada à varanda da Casa da Mata",
    category: "interno",
  },
  {
    src: "/images/ILA_3056.jpg",
    alt: "Suite com revestimento de madeira e closet integrado",
    category: "interno",
  },
  {
    src: "/images/ILA_3086.jpg",
    alt: "Cozinha e sala de jantar integradas com varanda ao fundo",
    category: "interno",
  },
  {
    src: "/images/ILA_3113.jpg",
    alt: "Banheiro com pia de madeira e azulejos brancos da Casa da Mata",
    category: "interno",
  },

  // Exteriores
  {
    src: "/images/cozinha-varanda-noite.jpg",
    alt: "Varanda e área de estar ao entardecer na Casa da Mata",
    category: "externo",
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
    alt: "Chuveiro externo de madeira em meio ao jardim",
    category: "externo",
  },
  {
    src: "/images/jantar-externo.jpg",
    alt: "Mesa de jantar externa da Casa da Mata em meio ao jardim",
    category: "externo",
  },
  {
    src: "/images/hero-rede-vinho.jpg",
    alt: "Rede na varanda com vista para a mata ao entardecer",
    category: "externo",
  },
  {
    src: "/images/1.jpg",
    alt: "Container e varanda com vista panorâmica da propriedade",
    category: "externo",
  },
  {
    src: "/images/2.jpg",
    alt: "Mesa de piquenique em área de jardim entre árvores",
    category: "externo",
  },
  {
    src: "/images/3.jpg",
    alt: "Casa iluminada à noite vista do exterior com varanda",
    category: "externo",
  },
  {
    src: "/images/4.jpg",
    alt: "Redes de macramé penduradas em árvores da mata",
    category: "externo",
  },
  {
    src: "/images/5.jpg",
    alt: "Chuveiro externo de madeira em ambiente natural",
    category: "externo",
  },
  {
    src: "/images/6.jpg",
    alt: "Fogo de chão em área de pátio com paisagismo",
    category: "externo",
  },
  {
    src: "/images/10.jpg",
    alt: "Detalhe de amenidades do banheiro com toalhas e acessórios",
    category: "externo",
  },
  {
    src: "/images/11.jpg",
    alt: "Fogo de chão aceso à noite com casa iluminada ao fundo",
    category: "externo",
  },
  {
    src: "/images/12.jpg",
    alt: "Mesa de jantar preparada em área externa com vista para mata",
    category: "externo",
  },
  {
    src: "/images/13.jpg",
    alt: "Visão geral da propriedade com caminhos entre árvores",
    category: "externo",
  },
  {
    src: "/images/ILA_1560.jpg",
    alt: "Rede de macramé em varanda com vista para a mata",
    category: "externo",
  },
  {
    src: "/images/ILA_1586.jpg",
    alt: "Detalhe de bebidas em mesa da varanda com plantas",
    category: "externo",
  },
  {
    src: "/images/ILA_1696.jpg",
    alt: "Mesa de piquenique em área de jardim com prato preparado",
    category: "externo",
  },
  {
    src: "/images/ILA_1709.jpg",
    alt: "Varanda com rede de macramé, mesa e vista para mata",
    category: "externo",
  },
  {
    src: "/images/ILA_1730.jpg",
    alt: "Orquídea epífita com casa iluminada ao fundo à noite",
    category: "externo",
  },
  {
    src: "/images/ILA_1765.jpg",
    alt: "Casa iluminada à noite vista do exterior com varanda",
    category: "externo",
  },
  {
    src: "/images/ILA_1818.jpg",
    alt: "Varanda e deck exterior com vista para interior illuminado",
    category: "externo",
  },
  {
    src: "/images/ILA_1835.jpg",
    alt: "Redes de macramé penduradas em árvores à noite",
    category: "externo",
  },
  {
    src: "/images/ILA_2881.jpg",
    alt: "Container com varanda vista de longe no meio da mata",
    category: "externo",
  },
  {
    src: "/images/ILA_2891.jpg",
    alt: "Container com varanda e caminhos em meio ao jardim",
    category: "externo",
  },
  {
    src: "/images/ILA_2942.jpg",
    alt: "Chuveiro externo de madeira com mesa de jantar no jardim",
    category: "externo",
  },
  {
    src: "/images/ILA_2954.jpg",
    alt: "Redes de macramé com orquídeas epífitas em árvores",
    category: "externo",
  },
  {
    src: "/images/ILA_2993.jpg",
    alt: "Container vista de longe em caminhos do jardim",
    category: "externo",
  },
  {
    src: "/images/ILA_3358.jpg",
    alt: "Mesa de jantar externa preparada com bebidas e plantas",
    category: "externo",
  },
];
