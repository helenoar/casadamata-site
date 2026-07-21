// Dados estruturados da propriedade "Casa da Mata 45".
// Fonte da verdade: LAB 360°/Lab360Entregas/clientes/casadamata/casa-da-mata-45/dados-cliente/airbnb-dados-completos.md
// Extração original do Airbnb em 2026-07-21. Todo texto abaixo é literal ou tradução
// estrutural direta do arquivo-fonte — não parafraseado com mudança de sentido.

export type PropertyBadge = {
  label: string;
  description: string;
};

export type PropertyCapacity = {
  guests: number;
  bedrooms: number;
  beds: number;
  bathrooms: number;
  outdoorAreaSqm: number;
};

export type PropertyLocation = {
  city: string;
  state: string;
  country: string;
  condominium: string;
  distances: Array<{
    label: string;
    km: number;
  }>;
};

export type PropertyReputation = {
  overallRating: number;
  reviewCount: number;
};

export type Property = {
  listingName: string;
  brandName: string;
  brandNameShort: string;
  accommodationType: string;
  hostName: string;
  airbnbListingId: string;
  airbnbUrl: string;
  capacity: PropertyCapacity;
  location: PropertyLocation;
  badges: PropertyBadge[];
  reputation: PropertyReputation;
  /**
   * Texto de descrição completo (voz da marca), seção 4 do arquivo-fonte.
   * Cada string do array é um parágrafo/bloco do texto original, na ordem em que aparecem.
   */
  descriptionParagraphs: string[];
  houseRules: string[];
};

export const property: Property = {
  listingName: "Refúgio na Mata • Riacho ao Pé e Fogo de Chão",
  brandName: "Casa da Mata",
  brandNameShort: "Casa da Mata 45",
  accommodationType: "Contêiner de transporte (shipping container) — casa contêiner",
  hostName: "Letícia Carneiro",
  airbnbListingId: "1537170854409354731",
  airbnbUrl: "https://www.airbnb.com.br/h/casadamata45",
  capacity: {
    guests: 2,
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
    outdoorAreaSqm: 1000,
  },
  location: {
    city: "Nova Lima",
    state: "Minas Gerais",
    country: "Brasil",
    condominium: "Condomínio Pasárgada",
    distances: [
      { label: "BH Shopping (sentido Rio de Janeiro)", km: 26 },
      { label: "São Sebastião das Águas Claras (Macacos)", km: 3 },
      { label: "Vale do Sol", km: 6 },
    ],
  },
  badges: [
    {
      label: "Preferido dos hóspedes",
      description:
        "Guest Favorite — top 5% das acomodações elegíveis, baseado em avaliações, comentários e confiabilidade.",
    },
    {
      label: "Superhost",
      description: "Reconhecimento do Airbnb para anfitriões com histórico consistente de excelência.",
    },
    {
      label: "Self check-in",
      description: "Check-in autônomo com cofre de chaves.",
    },
    {
      label: "Paz e tranquilidade",
      description: "Badge automático do Airbnb baseado em menções recorrentes dos hóspedes.",
    },
  ],
  reputation: {
    overallRating: 5.0,
    reviewCount: 21,
  },
  descriptionParagraphs: [
    "Casa da Mata – uma experiência inesquecível em meio à natureza do Pasárgada",
    "A Casa da Mata é uma hospedagem em meio à natureza — uma casa contêiner elegante, arejada e acolhedora, pensada para quem busca descanso, conforto e inspiração.",
    "Entre no ritmo suave da mata e deixe-se envolver pelos sons, pelos cantos dos pássaros, pelos cheiros e silêncios que inspiram presença.",
    "O espaço",
    "A Casa da Mata é cercada por montanhas e árvores frondosas da Mata Atlântica, com águas doces ao redor, além de uma rede na varanda e um redário que convidam a relaxar e se deixar levar pelo balanço.",
    "Localizada no Condomínio Pasárgada, a apenas 26 km do BH Shopping, sentido Rio de Janeiro, oferece uma experiência segura e acolhedora em meio à natureza.",
    "Ideal para quem busca se reconectar, caminhar com os pés descalços entre as árvores, sentir a força da natureza — com o aconchego sereno de um lar contemporâneo.",
    "Aqui, o tempo desacelera, e cada instante convida a viver o essencial.",
    "Mais que uma hospedagem, a Casa da Mata oferece uma experiência. Cada detalhe foi pensado para unir conforto, natureza e estilo — um refúgio que inspira presença, calma e bem-estar.",
    "Acesso do hóspede",
    "Você terá acesso completo à Casa da Mata, com seu amplo quintal gramado de 1000 m², cercado pela natureza e pelas áreas verdes do condomínio fechado. Todo o entorno externo conta com monitoramento por câmeras, garantindo mais tranquilidade durante a estadia. Disponibilizamos internet de fibra óptica de alta velocidade, ideal para trabalho, lazer ou streaming.",
    "Outras observações",
    "NÃO SÃO PERMITIDAS VISITAS. A portaria é controlada e o acesso ao condomínio é rigorosamente monitorado. As ruas contam com câmeras de vigilância e rondas 24 horas. A entrada é permitida apenas aos hóspedes previamente autorizados pelo anfitrião. O local conta com entregas de aplicativos como iFood e diversos restaurantes nas proximidades.",
  ],
  houseRules: [
    "Check-in após 14:00",
    "Checkout antes das 11:00",
    "Máximo de 2 hóspedes",
    "Visitas não são permitidas",
    "Cancelamento: política padrão do Airbnb (varia conforme datas)",
  ],
};
