// Perfil da anfitriã Letícia Carneiro.
// Fonte da verdade: LAB 360°/Lab360Entregas/clientes/casadamata/casa-da-mata-45/dados-cliente/airbnb-dados-completos.md
// Seção 9 do arquivo-fonte. Bio é citação literal.

export type Host = {
  name: string;
  isSuperhost: boolean;
  /** Tempo hospedando no Airbnb, string literal do arquivo-fonte. */
  hostingSince: string;
  responseRate: string;
  responseTime: string;
  identityVerified: boolean;
  airbnbProfileUrl: string;
  /** Bio completa, citação literal do arquivo-fonte (seção 9). */
  bio: string;
};

export const host: Host = {
  name: "Letícia Carneiro",
  isSuperhost: true,
  hostingSince: "5 meses",
  responseRate: "100%",
  responseTime: "1 hora",
  identityVerified: true,
  airbnbProfileUrl: "https://www.airbnb.com.br/users/profile/1537170855151351480",
  bio: "Nasci na década de 60. Meu trabalho: Bailarina. Sou Letícia, tenho 64 anos — anfitriã, artista e amante da natureza. Recebo pessoas como quem recebe em casa: com presença, escuta e cuidado. Sou bailarina, formada em Artes Visuais, apaixonada por literatura, cinema, viagem e pelas pequenas belezas do cotidiano. Acredito na tranquilidade, no tempo desacelerado e na troca verdadeira. A Casa da Mata 45 nasce desse lugar: natureza, arte, silêncio e acolhimento.",
};
