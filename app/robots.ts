// robots.ts — coração da estratégia GEO técnica (Task 5).
// Declara explicitamente Allow: / para os principais crawlers de IA, em vez
// de confiar no default-allow implícito — à prova de mudanças futuras de
// política restritiva por padrão em qualquer um deles.

import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/seo";

const AI_CRAWLERS = [
  "GPTBot", // OpenAI — treinamento/navegação
  "ChatGPT-User", // OpenAI — navegação em tempo real via ChatGPT
  "PerplexityBot", // Perplexity
  "ClaudeBot", // Anthropic
  "Google-Extended", // Google — Gemini/AI Overviews (distinto do Googlebot de busca)
  "CCBot", // Common Crawl (usado para treinar diversos LLMs)
  "Applebot-Extended", // Apple Intelligence
  "Amazonbot", // Amazon (Alexa/treinamento)
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      ...AI_CRAWLERS.map((userAgent) => ({
        userAgent,
        allow: "/",
      })),
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
