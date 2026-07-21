// As 21 avaliações reais da Casa da Mata 45, mais o resumo agregado.
// Fonte da verdade: LAB 360°/Lab360Entregas/clientes/casadamata/casa-da-mata-45/dados-cliente/airbnb-dados-completos.md
// Seção 8 do arquivo-fonte. Texto das avaliações é literal.
//
// Regras aplicadas (decisões já validadas com a cliente, ver task-1-brief.md):
// 1. Nome: primeiro nome + inicial do sobrenome quando o sobrenome existe no arquivo-fonte
//    (ex.: "Lucélia Bárbara" -> "Lucélia B."). Sem sobrenome, mantém só o primeiro nome.
// 2. Data normalizada para "mês de ano" em português. Datas relativas ("X dias/semanas atrás")
//    foram calculadas a partir da data de extração do arquivo-fonte: 2026-07-21.
//    O texto relativo original de cada avaliação está comentado ao lado, para rastreabilidade.
// 3. Todas as 21 avaliações são 5 estrelas (confirmado no arquivo-fonte) — rating é sempre 5.

export type Review = {
  id: number;
  guestName: string;
  /** Tempo do avaliador como usuário do Airbnb, string literal do arquivo-fonte (ex. "11 anos"). */
  yearsOnAirbnb: string;
  /** Data normalizada para granularidade mês/ano em português. Nunca inventar precisão de dia. */
  date: string;
  rating: 5;
  text: string;
};

export const reviews: Review[] = [
  {
    id: 1,
    guestName: "Sérgio",
    yearsOnAirbnb: "11 anos",
    // Original no arquivo-fonte: "2 dias atrás" (extraído em 2026-07-21)
    date: "julho de 2026",
    rating: 5,
    text: "Muito satisfeitos com tudo!",
  },
  {
    id: 2,
    guestName: "Giovanna",
    yearsOnAirbnb: "5 anos",
    // Original no arquivo-fonte: "3 semanas atrás" (extraído em 2026-07-21)
    date: "junho de 2026",
    rating: 5,
    text: "Lugar lindo e tranquilo. Acomodações perfeitas, lindas! Cozinha completa, roupas de cama, toalhas e itens de lazer excelentes. Tudo excelente, valeu muito a pena! Local lindo e infraestrutura excelente.",
  },
  {
    id: 3,
    guestName: "Lucélia B.",
    yearsOnAirbnb: "7 anos",
    date: "junho de 2026",
    rating: 5,
    text: "Adorei a localização lugar super tranquilo. Todo o espaço e muito bem planejado, super aconchegante, organizado e equipado. Ficamos impressionados com a organização e qualidade de cada detalhe, claramente pensando para melhor experiência dos hóspedes. Atendimento de primeira qualidade, anfitriã muito cordial e simpática. Recomendamos muito e voltaremos com certeza!",
  },
  {
    id: 4,
    guestName: "Maria",
    yearsOnAirbnb: "5 anos",
    // Original no arquivo-fonte: "1 semana atrás" (extraído em 2026-07-21)
    date: "julho de 2026",
    rating: 5,
    text: "Uma das melhores acomodações em que já ficamos. Muitos pontos positivos e surpreendentes, mas, para nós, a tranquilidade do lugar, a beleza de cada detalhe da casinha e o carinho com o qual ela é cuidada chamaram nossa atenção. Um muito obrigado aos anfitriões, que, solícitos, sempre nos responderam com rapidez. Foi um final de semana de descanso e renovo das nossas energias. Sem dúvidas, voltaremos.",
  },
  {
    id: 5,
    guestName: "Carolina",
    yearsOnAirbnb: "5 anos",
    // Original no arquivo-fonte: "3 semanas atrás" (extraído em 2026-07-21)
    date: "junho de 2026",
    rating: 5,
    text: "Já tinha me surpreendido com o anúncio mas, ao me hospedar, surpreendeu ainda mais as expectativas! Letícia deixou todas as informações muito claras, respondeu tudo que precisei na hora e o espaço é um real paraíso para o descanso, com muito conforto! Casa super bem equipada e aconchegante! Voltarei muitas e muitas vezes!",
  },
  {
    id: 6,
    guestName: "Dante",
    yearsOnAirbnb: "7 anos",
    date: "junho de 2026",
    rating: 5,
    text: "Tudo impecável, indico de olhos fechados",
  },
  {
    id: 7,
    guestName: "Marcone",
    yearsOnAirbnb: "9 anos",
    date: "maio de 2026",
    rating: 5,
    text: "Lugar exatamente como as fotos. Muito limpo e organizado",
  },
  {
    id: 8,
    guestName: "Maicon",
    yearsOnAirbnb: "4 anos",
    date: "maio de 2026",
    rating: 5,
    text: "O lugar é exatamente igual às fotos e, pessoalmente, consegue ser ainda melhor. Muito tranquilo, perfeito para quem quer se desligar da correria, relaxar e descansar a mente. Com certeza é uma experiência que vale a pena. Recebemos todo o suporte e auxílio, pretendemos, quem sabe, retornar novamente, mas da próxima vez para ficar mais dias",
  },
  {
    id: 9,
    guestName: "Karinne C.",
    yearsOnAirbnb: "3 meses",
    date: "maio de 2026",
    rating: 5,
    text: "Amei a minha estadia. Local agradável, tranquilo, bem decorado com cuidados nos mínimos detalhes. Uma gentileza de boas vindas com pão, geleia e cartão. Difícil foi ir embora. Anfitriã de parabéns",
  },
  {
    id: 10,
    guestName: "Gabriel",
    yearsOnAirbnb: "2 anos",
    date: "maio de 2026",
    rating: 5,
    text: "Minha estadia foi maravilhosa! Ambiente acolhedor, confortável, tranquilo, organizado, limpo e com tudo o que precisamos. A Letícia foi muito atenciosa! Quem procura por um lugar para descanso, é uma ótima opção. Vamos voltar mais vezes! 🏡💚",
  },
  {
    id: 11,
    guestName: "Patricia",
    yearsOnAirbnb: "6 anos",
    date: "abril de 2026",
    rating: 5,
    text: "A acomodação corresponde exatamente as fotos. A decoração é de muito bom gosto, todos os móveis e utensílios são novos e de qualidade, assim como as toalhas e roupas de cama. Tudo foi pensado com muito capricho. A acomodação fica em um condomínio de fácil acesso, tranquilo. Fiquei muito satisfeita e pretendo voltar outras vezes.",
  },
  {
    id: 12,
    guestName: "Laís",
    yearsOnAirbnb: "7 anos",
    date: "abril de 2026",
    rating: 5,
    text: "A estadia foi um espetáculo! Desde o primeiro contato com Letícia, ela sempre se mostrou muito gentil e disponível. O local é ainda mais bonito pessoalmente do que nas fotos! Eu e meu namorado passamos um final de semana maravilhoso, conseguimos cozinhar tranquilamente, pois a casa é super bem equipada e tem tudo o que precisamos. O ambiente é extremamente tranquilo, perfeito para quem busca descanso e alguns dias off. Tudo estava impecavelmente limpo e com itens de excelente qualidade.",
  },
  {
    id: 13,
    guestName: "Maria L.",
    yearsOnAirbnb: "4 anos",
    date: "abril de 2026",
    rating: 5,
    text: "A Casa da Mata é simplesmente encantadora. Pelas fotos já impressiona, mas pessoalmente é ainda mais incrível. Cada detalhe revela o cuidado e o carinho na composição do espaço, em perfeita harmonia com a natureza ao redor. O ambiente é extremamente limpo, confortável e funcional. Fomos recebidos com pão e geleia artesanais, além de um bilhete muito carinhoso e hospitaleiro. É um refúgio perfeito para quem busca tranquilidade e conexão com a natureza.",
  },
  {
    id: 14,
    guestName: "Mariana S.",
    yearsOnAirbnb: "1 ano",
    date: "abril de 2026",
    rating: 5,
    text: "Local, tranquilo, de paz, pra quem procura sossego é perfeito, local muito bem limpo e organizado, correspondente corretamente as imagens, Letícia sempre muito atenciosa.",
  },
  {
    id: 15,
    guestName: "Rafael",
    yearsOnAirbnb: "11 meses",
    date: "março de 2026",
    rating: 5,
    text: "Muito satisfatório! Só agradecer muito bom! Parabéns",
  },
  {
    id: 16,
    guestName: "Marcelo",
    yearsOnAirbnb: "4 meses",
    date: "março de 2026",
    rating: 5,
    text: "Sensacional! Valeu a pena conhecer, local lindo, muito tranquilo, casa linda, local muito seguro, anfitriões que dispensa comentários! Voltarei mais vezes com toda certeza",
  },
  {
    id: 17,
    guestName: "Luís O.",
    yearsOnAirbnb: "4 anos",
    date: "março de 2026",
    rating: 5,
    text: "Letícia ajudou muito com as principais informações sobre a casa, foi extremamente atenciosa e educada comigo e sempre à disposição pra ajudar e recomendar coisas pra fazer nos arredores... o local em si me surpreendeu, pessoalmente é AINDA melhor do que nas fotos. muito organizado e aconchegante, seguro e ideal pra quem quer um tempo pra descansar e ter mais contato com a natureza.",
  },
  {
    id: 18,
    guestName: "Moizes",
    yearsOnAirbnb: "7 anos",
    date: "junho de 2026",
    rating: 5,
    text: "Estadia incrível, local limpo, natureza fora do comum, local de paz e tranquilidade! Experiência nota mil!",
  },
  {
    id: 19,
    guestName: "Fernando",
    yearsOnAirbnb: "8 anos",
    date: "junho de 2026",
    rating: 5,
    text: "Recomendo, espaço maravilhoso! Ambiente romântico, confortável e muito agradável. Irei voltar. Melhor hospedagem que já tive na região de Macacos.",
  },
  {
    id: 20,
    guestName: "Gabriel",
    yearsOnAirbnb: "4 anos",
    date: "abril de 2026",
    rating: 5,
    text: "Minha namorada e eu passamos um final de semana incrível na Casa da Mata. O lugar é extremamente tranquilo, perfeito para quem busca desconectar e descansar de verdade. Tudo estava muito limpo e organizado. Recomendo de olhos fechados e com certeza voltaremos!",
  },
  {
    id: 21,
    guestName: "Pedro",
    yearsOnAirbnb: "7 anos",
    date: "abril de 2026",
    rating: 5,
    // TODO: confirmar com a cliente se há coanfitrião "Rodrigo" — o texto abaixo menciona
    // "O Rodrigo e a Letícia", conforme literalmente escrito no arquivo-fonte (seção 8,
    // avaliação de Pedro). Não decidir sozinho se esse nome deve aparecer em alguma
    // página do site; apenas sinalizar.
    text: "Desde o momento da nossa chegada, nos sentimos em casa. O Rodrigo e a Letícia foram extremamente atenciosos e cuidadosos. O espaço é impecável, tudo muito limpo, organizado e preparado com carinho. A decoração toda combina entre si, pensada com sensibilidade. O lugar é silencioso e perfeito para descansar, fizemos algumas caminhadas ali por perto.",
  },
];

export type ReviewCategoryScores = {
  cleanliness: number;
  accuracy: number;
  checkIn: number;
  communication: number;
  location: number;
  value: number;
};

export type MostMentionedWord = {
  word: string;
  count: number;
};

export type ReviewsSummary = {
  overallRating: number;
  reviewCount: number;
  fiveStarPercentage: number;
  categoryScores: ReviewCategoryScores;
  mostMentionedWords: MostMentionedWord[];
};

export const reviewsSummary: ReviewsSummary = {
  overallRating: 5.0,
  reviewCount: 21,
  fiveStarPercentage: 100,
  categoryScores: {
    cleanliness: 5.0,
    accuracy: 5.0,
    checkIn: 5.0,
    communication: 5.0,
    location: 5.0,
    value: 4.9,
  },
  mostMentionedWords: [
    { word: "Hospitalidade", count: 12 },
    { word: "Limpeza", count: 8 },
    { word: "Localização", count: 6 },
    { word: "Exatidão", count: 5 },
    { word: "Conforto", count: 5 },
    { word: "Decoração", count: 4 },
    { word: "Comodidades", count: 3 },
    { word: "Espaço interno", count: 3 },
    { word: "Cozinha", count: 3 },
  ],
};
