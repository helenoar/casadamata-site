// Fatos de localização e contexto natural da Casa da Mata 45.
// Fonte da verdade: LAB 360°/Lab360Entregas/clientes/casadamata/casa-da-mata-45/dados-cliente/airbnb-dados-completos.md
// Seção 2 do arquivo-fonte.

export type Distance = {
  label: string;
  km: number;
};

export type Biome = {
  name: string;
  note: string;
};

export type LocationFacts = {
  city: string;
  state: string;
  condominium: string;
  distances: Distance[];
  biomes: Biome[];
  naturalLandmark: string;
  regionalContext: string;
};

export const locationFacts: LocationFacts = {
  city: "Nova Lima",
  state: "Minas Gerais",
  condominium: "Condomínio Pasárgada",
  distances: [
    { label: "BH Shopping (sentido Rio de Janeiro)", km: 26 },
    { label: "São Sebastião das Águas Claras (Macacos)", km: 3 },
    { label: "Vale do Sol", km: 6 },
  ],
  biomes: [
    {
      name: "Cerrado",
      note: "Uma das duas formações vegetais presentes no Condomínio Pasárgada.",
    },
    {
      name: "Mata Atlântica",
      note: "A Casa da Mata está localizada especificamente na área de Mata Atlântica do condomínio.",
    },
  ],
  naturalLandmark: "Trilhas que acompanham o Ribeirão dos Macacos.",
  regionalContext:
    "Região da Grande BH conhecida por turismo de natureza/segunda casa (Macacos, Vale do Sol, Nova Lima) — forte apelo para buscas do tipo \"airbnb natureza perto de BH\", \"pousada Nova Lima\", \"hospedagem Macacos MG\".",
};

export interface NearbyAttractionCategory {
  name: string;
  distance: number;
  description: string;
}

export const nearbyAttractions = {
  museums: [
    {
      name: "Instituto Inhotim",
      distance: 30,
      description: "Maior museu a céu aberto do mundo com 140 hectares e 24 galerias",
    },
  ],
  trails: [
    {
      name: "Topo do Mundo / Serra da Moeda",
      distance: 20,
      description: "Trilha de 6 km com vistas panorâmicas de 360 graus",
    },
    {
      name: "Trilha Ribeirão dos Macacos",
      distance: 2,
      description: "Trilha fácil acompanhando o riacho em Mata Atlântica",
    },
    {
      name: "Trilha BH × Macacos",
      distance: 25,
      description: "Trekking de 25 km imerso em Mata Atlântica",
    },
    {
      name: "Trilha Cachoeira Marumbé",
      distance: 10,
      description: "Trilha moderada passando por Macacos até cachoeira",
    },
    {
      name: "Trilha Vale do Sol",
      distance: 6,
      description: "Trilha fácil com vistas panorâmicas",
    },
    {
      name: "Trilha Perdidas",
      distance: 15,
      description: "Mountain biking com trechos técnicos",
    },
  ],
  waterfalls: [
    {
      name: "Cachoeira dos Macacos",
      distance: 17,
      description: "Piscina natural com águas cristalinas",
    },
    {
      name: "Cachoeira Marumbé",
      distance: 10,
      description: "Cachoeira em ambiente de floresta nativa",
    },
    {
      name: "Cachoeira da Ponte",
      distance: 12,
      description: "Piscina natural cercada de vegetação nativa",
    },
  ],
  restaurants: [
    {
      name: "Restaurante Mar Mineiro",
      type: "mineira",
      distance: 8,
      description: "Gastronomia mineira com vistas panorâmicas",
    },
    {
      name: "Bar do Marcinho",
      type: "bar",
      distance: 5,
      description: "Ponto tradicional desde 1995",
    },
    {
      name: "Sítio Bar",
      type: "bar",
      distance: 6,
      description: "Peixe defumado grelhado na folha de bananeira",
    },
  ],
  lodging: [
    {
      name: "Pousada Macaco Prosa",
      distance: 4,
      description: "Suites com vista de floresta e churrascaria",
    },
    {
      name: "Pousada Canto da Lua",
      distance: 5,
      description: "Piscina, sauna e apresentações de guitarra",
    },
    {
      name: "Pousada Vilarejo Plus",
      distance: 5,
      description: "Conforto moderno em contato com natureza",
    },
  ],
};
