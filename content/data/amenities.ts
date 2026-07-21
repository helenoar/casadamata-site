// Comodidades da Casa da Mata 45, por categoria.
// Fonte da verdade: LAB 360°/Lab360Entregas/clientes/casadamata/casa-da-mata-45/dados-cliente/airbnb-dados-completos.md
// Seção 6 do arquivo-fonte. Categorias e itens transcritos literalmente.
//
// NOTA DE AMBIGUIDADE: o cabeçalho da seção 6 do arquivo-fonte diz "47 itens", mas a
// contagem literal dos itens separados por "·" nas 12 categorias listadas totaliza 51.
// Optou-se por transcrever TODOS os itens listados no arquivo-fonte (fidelidade absoluta,
// conforme instrução da tarefa) em vez de forçar o corte para bater com o número "47" do
// cabeçalho, que parece ser um erro de contagem no documento de origem. Ver relatório da
// Task 1 para detalhes. Contagem real aqui: 51 itens em 12 categorias.

export type AmenityCategory = {
  category: string;
  items: string[];
};

export const amenityCategories: AmenityCategory[] = [
  {
    category: "Banheiro",
    items: [
      "Secador de cabelo",
      "Produtos de limpeza",
      "Xampu",
      "Condicionador",
      "Sabonete para o corpo",
      "Chuveiro externo",
      "Água quente",
    ],
  },
  {
    category: "Quarto e lavanderia",
    items: [
      "Itens básicos (toalhas, lençóis, sabonete, papel higiênico)",
      "Cabides",
      "Roupas de cama de algodão da Buddemeyer",
      "Cobertores e travesseiros extras",
      "Cortinas blackout",
      "Local para guardar as roupas",
    ],
  },
  {
    category: "Entretenimento",
    items: ["Conexão Ethernet", "TV", "Livros e material de leitura"],
  },
  {
    category: "Climatização",
    items: ["Ar-condicionado", "Aquecedor split"],
  },
  {
    category: "Segurança doméstica",
    items: [
      "Câmeras de segurança na parte externa da propriedade (ruas com vigilância e rondas 24h, entrada só para hóspedes autorizados)",
      "Kit de primeiros socorros",
    ],
  },
  {
    category: "Internet e escritório",
    items: ["Wi-Fi", "Espaço de trabalho exclusivo"],
  },
  {
    category: "Cozinha e sala de jantar",
    items: [
      "Cozinha completa",
      "Geladeira Eletrolux",
      "Micro-ondas",
      "Itens básicos (vasilhas, panelas, óleo, sal, pimenta)",
      "Pratos e talheres (tigelas, hashi, copos etc.)",
      "Fogão a gás de aço inoxidável",
      "Forno Consul de aço inoxidável",
      "Cafeteira com coador",
      "Taças de vinho",
      "Assadeira",
      "Liquidificador",
      "Mesa de jantar",
    ],
  },
  {
    category: "Características da localização",
    items: ["Entrada privada (por outra rua/prédio)", "Lavanderia nas proximidades"],
  },
  {
    category: "Área externa",
    items: [
      "Pátio/varanda privativa",
      "Quintal privado totalmente cercado",
      "Área aberta gramada",
      "Lareira externa (fogo de chão)",
      "Móveis de área externa",
      "Rede",
      "Área de jantar externa",
    ],
  },
  {
    category: "Estacionamento e instalações",
    items: ["Estacionamento gratuito no local"],
  },
  {
    category: "Serviços",
    items: [
      "Bagagem pode ficar guardada (chegada cedo/saída tarde)",
      "Estadias de longa duração permitidas (28+ dias)",
      "Self check-in com cofre de chaves",
    ],
  },
  {
    category: "Não incluso",
    items: [
      "Sem máquina de lavar",
      "Sem secadora",
      "Sem detector de fumaça",
      "Sem detector de monóxido de carbono",
    ],
  },
];

export const amenityTotalCount: number = amenityCategories.reduce(
  (total, category) => total + category.items.length,
  0,
);
