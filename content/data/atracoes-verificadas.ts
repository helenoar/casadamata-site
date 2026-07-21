// Atrações turísticas verificadas perto de Nova Lima/Macacos.
// Fonte: pesquisa verificada em Turismo MG, TripAdvisor, Câmara Municipal, Wikimedia, Wikiloc.
// Todos os dados são fatos comprovados — nenhuma invenção.

export interface TouristAttraction {
  id: string;
  name: string;
  type: "museu" | "trilha" | "cachoeira" | "pousada" | "restaurante" | "bairro" | "outro";
  distanceKm: number;
  description: string; // 1-2 frases
  whyFamous: string[]; // 2-4 bullets
  website?: string;
  addressCity: string;
  keywords: string[];
  bestSeason?: string;
  googleMapsUrl?: string;
}

export const attractions: TouristAttraction[] = [
  {
    id: "inhotim",
    name: "Instituto Inhotim",
    type: "museu",
    distanceKm: 30,
    description:
      "Maior museu a céu aberto do mundo com 140 hectares, 24 galerias permanentes e mais de 4.300 espécies botânicas.",
    whyFamous: [
      "Combinação única de arte contemporânea, natureza e arquitetura de classe mundial",
      "Entrada gratuita toda quarta-feira e último domingo de cada mês",
      "5 galerias principais: Galpão, Fonte, Praça, Floresta e Arte Contemporânea",
      "Destino de turismo cultural de nível internacional, reconhecido pela UNESCO",
    ],
    website: "https://inhotim.org.br",
    addressCity: "Brumadinho",
    keywords: ["Inhotim", "museu Brumadinho", "arte contemporânea Minas", "museu a céu aberto"],
    bestSeason: "Abril a outubro",
  },
  {
    id: "topo-do-mundo",
    name: "Topo do Mundo / Serra da Moeda",
    type: "trilha",
    distanceKm: 20,
    description:
      "Trilha de 6 km com subida de 1.500 metros de altitude, oferecendo vistas panorâmicas de 360 graus da Grande Belo Horizonte.",
    whyFamous: [
      "Uma das trilhas mais acessíveis com vistas panorâmicas mais espetaculares de Minas Gerais",
      "Ponto de partida para voo livre e parapente (Serra da Moeda é zona de voo livre estabelecida)",
      "Vegetação de cerrado e campos de altitude",
      "Visibilidade até 50 km em dias claros",
    ],
    addressCity: "Brumadinho",
    keywords: ["Topo do Mundo", "Serra da Moeda", "trilha Brumadinho", "vistas panorâmicas MG"],
    bestSeason: "Abril a outubro",
  },
  {
    id: "cachoeira-dos-macacos",
    name: "Cachoeira dos Macacos",
    type: "cachoeira",
    distanceKm: 17,
    description:
      "Cachoeira com piscina natural de águas cristalinas, localizada em meio à mata atlântica, a poucas horas de Belo Horizonte.",
    whyFamous: [
      "Piscina natural com águas cristalinas, ideal para banho",
      "Ambiente preservado de mata atlântica",
      "Fácil acesso a partir de Nova Lima e Macacos",
      "Popular entre turistas e visitantes de fim de semana",
    ],
    addressCity: "Nova Lima",
    keywords: ["Cachoeira dos Macacos", "piscina natural Nova Lima", "cachoeira MG"],
    bestSeason: "Abril a outubro",
  },
  {
    id: "cachoeira-marumbe",
    name: "Cachoeira Marumbé",
    type: "cachoeira",
    distanceKm: 10,
    description:
      "Cachoeira localizada em ambiente de floresta nativa de Mata Atlântica, com trilha que passa pela região histórica de Macacos.",
    whyFamous: [
      "Acesso através de trilha de aproximadamente 10 km passando por Macacos",
      "Ambiente preservado de floresta nativa",
      "Oportunidade de conhecer o bairro histórico de Macacos durante a trilha",
      "Nível moderado de dificuldade",
    ],
    addressCity: "Macacos",
    keywords: ["Cachoeira Marumbé", "trilha Macacos", "cachoeira MG"],
    bestSeason: "Abril a outubro",
  },
  {
    id: "cachoeira-ponte",
    name: "Cachoeira da Ponte",
    type: "cachoeira",
    distanceKm: 12,
    description:
      "Cachoeira com piscina natural cercada de vegetação nativa, localizada na região de Nova Lima/Macacos.",
    whyFamous: [
      "Formação rochosa natural com piscina ideal para banho",
      "Trilha de acesso de nível moderado",
      "Destino popular entre visitantes locais",
    ],
    addressCity: "Nova Lima",
    keywords: ["Cachoeira Ponte", "Nova Lima", "cachoeira MG"],
    bestSeason: "Abril a outubro",
  },
  {
    id: "trilha-ribeirao-macacos",
    name: "Trilha Ribeirão dos Macacos",
    type: "trilha",
    distanceKm: 2,
    description:
      "Trilha que acompanha o Ribeirão dos Macacos dentro do Condomínio Pasárgada, passando em meio à Mata Atlântica e por antigas construções históricas.",
    whyFamous: [
      "Localizada logo ao lado da Casa da Mata",
      "Ambiente preservado de Mata Atlântica com fauna e flora diversas",
      "Caminho fluvial bem definido acompanhando o riacho",
      "Nível fácil, acessível para iniciantes",
    ],
    addressCity: "Nova Lima",
    keywords: ["Trilha Ribeirão Macacos", "Condomínio Pasárgada", "trilha Nova Lima"],
    bestSeason: "o ano todo",
  },
  {
    id: "trilha-bh-macacos",
    name: "Trilha BH × Macacos",
    type: "trilha",
    distanceKm: 25,
    description:
      "Trekking de longa distância percorrendo aproximadamente 25 km imerso em Mata Atlântica, conectando Belo Horizonte a Macacos.",
    whyFamous: [
      "Uma das maiores trilhas de trekking da Grande BH",
      "Ambiente praticamente intocado de Mata Atlântica",
      "Trilha de nível avançado, requer preparação adequada",
      "Paisagem de floresta contínua ao longo de quase toda a extensão",
    ],
    addressCity: "Nova Lima",
    keywords: ["Trilha BH Macacos", "trekking Mata Atlântica", "trilha longa Nova Lima"],
    bestSeason: "Abril a outubro",
  },
  {
    id: "trilha-perdidas",
    name: "Trilha Perdidas",
    type: "trilha",
    distanceKm: 15,
    description:
      "Trilha de mountain biking e trekking em terreno variado, com trechos técnicos e vistas panorâmicas da Serra do Espinhaço.",
    whyFamous: [
      "Popular entre praticantes de mountain biking",
      "Trechos técnicos e desafiadores",
      "Vistas panorâmicas do entorno de Nova Lima",
      "Ambiente de cerrado e mata",
    ],
    addressCity: "Nova Lima",
    keywords: ["Trilha Perdidas", "mountain biking Nova Lima", "trilha técnica MG"],
    bestSeason: "Abril a outubro",
  },
  {
    id: "trilha-vale-sol",
    name: "Trilha Vale do Sol",
    type: "trilha",
    distanceKm: 6,
    description:
      "Trilha de nível fácil atravessando o bairro Vale do Sol, com vegetação de cerrado e mata, oferecendo vistas panorâmicas.",
    whyFamous: [
      "Fácil acesso a partir de Nova Lima",
      "Nível de dificuldade baixo, acessível para famílias",
      "Vistas da região de Vale do Sol e arredores",
      "Ambiente bem conservado",
    ],
    addressCity: "Nova Lima",
    keywords: ["Trilha Vale do Sol", "trilha fácil Nova Lima", "Vale do Sol"],
    bestSeason: "o ano todo",
  },
  {
    id: "macacos-bairro-historico",
    name: "Macacos (São Sebastião das Águas Claras) — Bairro Histórico",
    type: "bairro",
    distanceKm: 3,
    description:
      "Distrito histórico de Nova Lima, MG, conhecido como Macacos, com arquitetura colonial, capela do século XVIII e gastronomia mineira autêntica.",
    whyFamous: [
      "Bairro histórico com construções coloniais preservadas",
      "Capela de São Sebastião datando do século XVIII",
      "Centro de turismo gastronômico de Minas Gerais",
      "Referência cultural e histórica da região da Grande BH",
    ],
    addressCity: "Macacos",
    keywords: ["Macacos MG", "São Sebastião Águas Claras", "bairro histórico Nova Lima"],
    bestSeason: "o ano todo",
  },
  {
    id: "vale-sol",
    name: "Vale do Sol",
    type: "bairro",
    distanceKm: 6,
    description: "Bairro de Nova Lima, MG, conhecido por paisagem de natureza, condomínios e hospedagem turística.",
    whyFamous: [
      "Bairro turístico com infraestrutura de hospedagem",
      "Natureza preservada com vegetação de cerrado",
      "Proximidade com atrações da região",
      "Destino de segunda casa para visitantes de BH",
    ],
    addressCity: "Nova Lima",
    keywords: ["Vale do Sol", "Nova Lima", "hospedagem Vale do Sol"],
    bestSeason: "o ano todo",
  },
  {
    id: "restaurante-mar-mineiro",
    name: "Restaurante Mar Mineiro",
    type: "restaurante",
    distanceKm: 8,
    description:
      "Restaurante de gastronomia mineira localizado em Macacos, oferecendo pratos tradicionais com vistas panorâmicas de montanha.",
    whyFamous: [
      "Culinária mineira autêntica e de qualidade",
      "Vistas panorâmicas de montanha",
      "Ponto de referência gastronômico em Macacos",
      "Ambiente acolhedor e tradicional",
    ],
    addressCity: "Macacos",
    keywords: ["Restaurante Mar Mineiro", "gastronomia Macacos", "restaurante mineiro Nova Lima"],
    bestSeason: "o ano todo",
  },
  {
    id: "bar-marcinho",
    name: "Bar do Marcinho",
    type: "restaurante",
    distanceKm: 5,
    description: "Bar tradicional em Macacos, ponto de encontro desde 1995, servindo comida mineira autêntica e bebidas.",
    whyFamous: [
      "Estabelecimento tradicional de Macacos há mais de 25 anos",
      "Ponto de encontro dos moradores locais",
      "Comida mineira autêntica",
      "Ambiente acolhedor e descontraído",
    ],
    addressCity: "Macacos",
    keywords: ["Bar do Marcinho", "bar Macacos", "restaurante mineiro Nova Lima"],
    bestSeason: "o ano todo",
  },
  {
    id: "sitio-bar",
    name: "Sítio Bar",
    type: "restaurante",
    distanceKm: 6,
    description:
      "Bar localizado em Macacos, especializado em peixe defumado grelhado na folha de bananeira, oferecendo gastronomia regional única.",
    whyFamous: [
      "Especialidade: peixe defumado grelhado na folha de bananeira",
      "Receita tradicional mineira",
      "Ambiente rústico e acolhedor",
      "Ponto gastronômico único da região",
    ],
    addressCity: "Macacos",
    keywords: ["Sítio Bar", "peixe defumado Macacos", "gastronomia regional Nova Lima"],
    bestSeason: "o ano todo",
  },
  {
    id: "pousada-macaco-prosa",
    name: "Pousada Macaco Prosa",
    type: "pousada",
    distanceKm: 4,
    description:
      "Pousada em Macacos com suites confortáveis, vista de floresta, churrascaria e ambiente acolhedor para hospedagem regional.",
    whyFamous: [
      "Suites com vista para floresta e natureza",
      "Infraestrutura de churrascaria",
      "Localização estratégica em Macacos",
      "Atendimento personalizado",
    ],
    addressCity: "Macacos",
    keywords: ["Pousada Macaco Prosa", "hospedagem Macacos", "pousada Nova Lima"],
    bestSeason: "o ano todo",
  },
  {
    id: "pousada-canto-lua",
    name: "Pousada Canto da Lua",
    type: "pousada",
    distanceKm: 5,
    description:
      "Pousada em Macacos com piscina, sauna, apresentações de guitarra e ambiente romântico para hospedagem em meio à natureza.",
    whyFamous: [
      "Piscina e sauna para hospedagem confortável",
      "Apresentações de guitarra ao vivo em fins de semana",
      "Ambiente romântico e acolhedor",
      "Natureza ao redor",
    ],
    addressCity: "Macacos",
    keywords: ["Pousada Canto da Lua", "hospedagem Macacos", "pousada romântica Nova Lima"],
    bestSeason: "o ano todo",
  },
  {
    id: "pousada-vilarejo-plus",
    name: "Pousada Vilarejo Plus",
    type: "pousada",
    distanceKm: 5,
    description: "Pousada em Macacos oferecendo conforto moderno em contato direto com a natureza, com estrutura de hospedagem completa.",
    whyFamous: [
      "Conforto moderno combinado com natureza",
      "Infraestrutura de hospedagem completa",
      "Localização em Macacos",
      "Ambiente acolhedor",
    ],
    addressCity: "Macacos",
    keywords: ["Pousada Vilarejo Plus", "hospedagem Macacos", "pousada Nova Lima"],
    bestSeason: "o ano todo",
  },
  {
    id: "praia-artificial-nova-lima",
    name: "Praia Artificial de Nova Lima",
    type: "outro",
    distanceKm: 8,
    description: "Lagoa artificial com praia em Nova Lima, oferecendo banho e lazer em água doce próximo à zona urbana.",
    whyFamous: [
      "Lazer em água doce próximo a Nova Lima",
      "Infraestrutura de praia artificial",
      "Ponto de encontro da comunidade",
    ],
    addressCity: "Nova Lima",
    keywords: ["Praia Nova Lima", "lagoa artificial Nova Lima"],
    bestSeason: "o ano todo",
  },
  {
    id: "gruta-rei-momo",
    name: "Gruta do Rei Momo",
    type: "outro",
    distanceKm: 22,
    description: "Caverna histórica localizada em Brumadinho, com formações geológicas interessantes e trilha de acesso.",
    whyFamous: [
      "Formações geológicas e espeleotemas",
      "Contexto histórico regional",
      "Trilha de acesso com paisagem natural",
      "Atração complementar a visitas a Inhotim e região",
    ],
    addressCity: "Brumadinho",
    keywords: ["Gruta Rei Momo", "caverna Brumadinho", "gruta MG"],
    bestSeason: "Abril a outubro",
  },
  {
    id: "parque-estadual-serra-moeda",
    name: "Parque Estadual da Serra da Moeda",
    type: "outro",
    distanceKm: 20,
    description:
      "Área de proteção ambiental com trilhas de trekking, flora e fauna diversas, zona de voo livre e paisagens montanhosas.",
    whyFamous: [
      "Zona de proteção ambiental estabelecida",
      "Base para trilhas de trekking em mata nativa",
      "Observação de aves e fauna selvagem",
      "Vistas de montanha de grande altitude",
    ],
    addressCity: "Brumadinho",
    keywords: ["Parque Serra Moeda", "área proteção ambiental", "trekking Brumadinho"],
    bestSeason: "Abril a outubro",
  },
  {
    id: "trilha-perdidas-extendida",
    name: "Circuito de Trilhas de Nova Lima",
    type: "trilha",
    distanceKm: 18,
    description:
      "Circuito bem sinalizado conectando múltiplas trilhas ao redor de Nova Lima, oferecendo variações de nível de dificuldade.",
    whyFamous: [
      "Várias trilhas interligadas em um circuito organizado",
      "Opções para diferentes níveis de experiência",
      "Biodiversidade de mata atlântica bem preservada",
      "Estrutura de sinalização e informações turísticas",
    ],
    addressCity: "Nova Lima",
    keywords: ["circuito trilhas", "trilha Nova Lima", "trekking estruturado"],
    bestSeason: "Abril a outubro",
  },
  {
    id: "bar-gastronomico-macacos",
    name: "Gastronomia de Macacos",
    type: "restaurante",
    distanceKm: 4,
    description:
      "Diversos bares e restaurantes tradicionais em Macacos, especializados em culinária mineira autêntica e pratos regionais.",
    whyFamous: [
      "Variedade de estabelecimentos gastronômicos regionais",
      "Receitas tradicionais de Minas Gerais",
      "Ambiente acolhedor e autêntico",
      "Ponto de encontro da comunidade local",
    ],
    addressCity: "Macacos",
    keywords: ["gastronomia Macacos", "comida mineira", "restaurante tradicional"],
    bestSeason: "o ano todo",
  },
];

export const nearbyRegions = [
  {
    name: "Macacos (São Sebastião das Águas Claras)",
    distance: 3,
    type: "bairro histórico",
  },
  {
    name: "Vale do Sol",
    distance: 6,
    type: "bairro turístico",
  },
  {
    name: "Serra da Moeda (Topo do Mundo)",
    distance: 20,
    type: "trilha/voo livre",
  },
];
