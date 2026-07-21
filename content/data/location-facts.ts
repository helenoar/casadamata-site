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
