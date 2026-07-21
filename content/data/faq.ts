// Perguntas frequentes sobre a Casa da Mata 45.
// Fonte da verdade: LAB 360°/Lab360Entregas/clientes/casadamata/casa-da-mata-45/dados-cliente/airbnb-dados-completos.md
// Respostas baseadas exclusivamente em fatos presentes no arquivo-fonte (seções 2, 3, 6, 7).

export type FaqItem = {
  question: string;
  answer: string;
};

export const faq: FaqItem[] = [
  {
    question: "A Casa da Mata tem fogo de chão?",
    answer:
      "Sim. A área externa privativa de 1000 m² conta com fogo de chão (lareira externa), ideal para noites sob céu estrelado.",
  },
  {
    question: "É seguro?",
    answer:
      "Sim. A propriedade fica no Condomínio Pasárgada, com portaria controlada, câmeras de segurança na parte externa e rondas 24 horas nas ruas. A entrada é permitida apenas a hóspedes previamente autorizados.",
  },
  {
    question: "Aceita visitas?",
    answer:
      "Não. Visitas não são permitidas — o acesso ao condomínio é rigorosamente monitorado e restrito aos hóspedes cadastrados.",
  },
  {
    question: "Qual a distância até o BH Shopping?",
    answer:
      "A Casa da Mata fica a 26 km do BH Shopping, sentido Rio de Janeiro, no Condomínio Pasárgada, em Nova Lima/MG.",
  },
  {
    question: "Tem Wi-Fi?",
    answer:
      "Sim. A casa oferece Wi-Fi e internet de fibra óptica de alta velocidade, adequada para trabalho, lazer ou streaming.",
  },
  {
    question: "Quantas pessoas cabem na Casa da Mata?",
    answer: "A acomodação recebe no máximo 2 hóspedes, com 1 quarto, 1 cama e 1 banheiro privado.",
  },
  {
    question: "Tem estacionamento?",
    answer: "Sim, estacionamento gratuito no local.",
  },
  {
    question: "Como funciona o check-in?",
    answer:
      "O check-in é após as 14h e o checkout até as 11h, com self check-in por cofre de chaves — não é necessário aguardar a anfitriã presencialmente.",
  },
  {
    question: "A casa tem ar-condicionado?",
    answer: "Sim. O contêiner conta com climatização interna: ar-condicionado, aquecedor split e desumidificador.",
  },
  {
    question: "Dá para ficar hospedado por um período longo?",
    answer: "Sim, a Casa da Mata aceita estadias de longa duração, de 28 dias ou mais.",
  },
];
