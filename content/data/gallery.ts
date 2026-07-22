export interface GalleryPhoto {
  src: string;
  alt: string;
  category: 'a-casa' | 'interior' | 'exterior';
}

export const galleryPhotos: GalleryPhoto[] = [
  // A CASA
  {
    src: '/images/A casa.jpg',
    alt: 'Casa da Mata vista geral',
    category: 'a-casa',
  },
  {
    src: '/images/A CASA7.jpg',
    alt: 'Detalhes construtivos da Casa da Mata',
    category: 'a-casa',
  },
  {
    src: '/images/A CASA 8.jpg',
    alt: 'Acabamento e detalhes da estrutura',
    category: 'a-casa',
  },
  {
    src: '/images/A CASA11.jpg',
    alt: 'Casa contêiner em detalhes',
    category: 'a-casa',
  },
  {
    src: '/images/ACASA.jpg',
    alt: 'Vista lateral da Casa da Mata',
    category: 'a-casa',
  },
  {
    src: '/images/ACASA2.jpg',
    alt: 'Detalhes de construção e paisagismo',
    category: 'a-casa',
  },
  {
    src: '/images/ACASA3.jpg',
    alt: 'Integração com a mata e jardim',
    category: 'a-casa',
  },
  {
    src: '/images/ACASA4.jpg',
    alt: 'Perspectiva da casa e entorno',
    category: 'a-casa',
  },
  {
    src: '/images/ACASA5.jpg',
    alt: 'Detalhe de acabamentos exteriores',
    category: 'a-casa',
  },
  {
    src: '/images/ACASA6.jpg',
    alt: 'Casa em contexto natural',
    category: 'a-casa',
  },

  // INTERIOR
  {
    src: '/images/Interior1.jpg',
    alt: 'Sala de estar integrada da Casa da Mata',
    category: 'interior',
  },
  {
    src: '/images/Interior2.jpg',
    alt: 'Suite e áreas integradas',
    category: 'interior',
  },
  {
    src: '/images/INTERIOR3.jpg',
    alt: 'Quarto principal com janelas amplas',
    category: 'interior',
  },
  {
    src: '/images/INTERIOR4BANHEIRO.jpg',
    alt: 'Banheiro com design minimalista',
    category: 'interior',
  },
  {
    src: '/images/INTERIOR5.jpg',
    alt: 'Cozinha integrada e sala de jantar',
    category: 'interior',
  },
  {
    src: '/images/INTERIOR7.jpg',
    alt: 'Detalhes dos acabamentos interiores',
    category: 'interior',
  },
  {
    src: '/images/INTERIOR8.jpg',
    alt: 'Suite com elementos de madeira',
    category: 'interior',
  },
  {
    src: '/images/INTERIOR9.jpg',
    alt: 'Espaço integrado sala-cozinha-quarto',
    category: 'interior',
  },
  {
    src: '/images/INTERIORBANHEIRO.jpg',
    alt: 'Banheiro com toques naturais',
    category: 'interior',
  },
  {
    src: '/images/INTEIOR6.jpg',
    alt: 'Interior com janelas e vista externa',
    category: 'interior',
  },

  // EXTERIOR
  {
    src: '/images/Exterior.jpg',
    alt: 'Fachada e entrada da Casa da Mata',
    category: 'exterior',
  },
  {
    src: '/images/Exterior3.jpg',
    alt: 'Varanda e área externa',
    category: 'exterior',
  },
  {
    src: '/images/Exterior4.jpg',
    alt: 'Deck e rede em área de lazer',
    category: 'exterior',
  },
  {
    src: '/images/Exteriror2.jpg',
    alt: 'Área externa e paisagismo',
    category: 'exterior',
  },
  {
    src: '/images/EXTERIOR5. jpg.jpg',
    alt: 'Varanda com redes de macramé',
    category: 'exterior',
  },
  {
    src: '/images/EXTERIOR6.jpg',
    alt: 'Área de pátio e fogo de chão',
    category: 'exterior',
  },
  {
    src: '/images/EXTERIOR7.jpg',
    alt: 'Mesa de jantar externa',
    category: 'exterior',
  },
  {
    src: '/images/EXTERIOR8.jpg',
    alt: 'Chuveiro externo em ambiente natural',
    category: 'exterior',
  },
  {
    src: '/images/EXTERIOR9.jpg',
    alt: 'Caminhos no jardim entre árvores',
    category: 'exterior',
  },
  {
    src: '/images/EXTERIOR10.jpg',
    alt: 'Redes de macramé penduradas',
    category: 'exterior',
  },
  {
    src: '/images/EXTERIOR11.jpg',
    alt: 'Fogo de chão à noite',
    category: 'exterior',
  },
  {
    src: '/images/EXTERIOR12.jpg',
    alt: 'Vista noturna da casa iluminada',
    category: 'exterior',
  },
];

export const galleryCategories = [
  { id: 'a-casa', label: 'A Casa' },
  { id: 'interior', label: 'Interior' },
  { id: 'exterior', label: 'Exterior' },
] as const;
