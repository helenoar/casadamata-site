import Link from "next/link";

import { attractions } from "@/content/data/atracoes-verificadas";
import { Reveal } from "@/components/ui/Reveal";

const typeColors: Record<string, { bg: string; text: string }> = {
  museu: { bg: "bg-purple-100", text: "text-purple-900" },
  trilha: { bg: "bg-green-100", text: "text-green-900" },
  cachoeira: { bg: "bg-blue-100", text: "text-blue-900" },
  pousada: { bg: "bg-amber-100", text: "text-amber-900" },
  restaurante: { bg: "bg-orange-100", text: "text-orange-900" },
  bairro: { bg: "bg-gray-100", text: "text-gray-900" },
  outro: { bg: "bg-gray-100", text: "text-gray-900" },
};

export function AtracoesProximas() {
  const featuredIds = ["inhotim", "topo-do-mundo", "cachoeira-dos-macacos"];
  const featured = featuredIds
    .map((id) => attractions.find((a) => a.id === id))
    .filter((a): a is typeof attractions[0] => a !== undefined);
  return (
    <section className="w-full surface-gradient-muted px-6 py-20 md:py-32 lg:py-40 md:px-16 lg:px-24">
      <Reveal>
      <div className="max-w-3xl">
        <p className="mb-4 text-xs tracking-[0.2em] text-terracota uppercase">
          Explore a região
        </p>
        <h2
          className="mb-8 font-light leading-[1.05] text-oliva-escuro"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
        >
          Inhotim, Topo do Mundo e 20+ atrações turísticas verificadas
        </h2>
        <p className="mb-8 text-sm leading-relaxed text-oliva-escuro/80">
          A região de Nova Lima e Macacos oferece museus de classe mundial, trilhas de trekking
          em Mata Atlântica, cachoeiras com piscinas naturais e gastronomia mineira autêntica —
          tudo a poucos quilômetros da Casa da Mata.
        </p>

        <div className="mb-10 grid gap-4 md:grid-cols-3">
          {featured.map((attraction) => {
            const color = typeColors[attraction.type] || typeColors.outro;
            return (
              <div
                key={attraction.id}
                className="rounded-sm border border-oliva-escuro/10 bg-off-1/50 backdrop-blur-sm p-4 shadow-soft hover:shadow-lifted hover:-translate-y-1 transition-all duration-300"
              >
                <div className="mb-2 flex items-center justify-between">
                  <span className={`text-xs font-semibold uppercase tracking-wide ${color.text} ${color.bg} px-2 py-1 rounded`}>
                    {attraction.type}
                  </span>
                  <span className="text-xs text-oliva-escuro/60">
                    {attraction.distanceKm} km
                  </span>
                </div>
                <h4 className="text-sm font-medium text-oliva-escuro mb-1">
                  {attraction.name}
                </h4>
              </div>
            );
          })}
        </div>

        <Link
          href="/inhotim-e-atracoes-turisticas"
          className="inline-block backdrop-blur-xs bg-off-1/50 border border-terracota border-oliva-escuro px-8 py-4 text-sm tracking-wide text-oliva-escuro uppercase hover:bg-oliva-escuro hover:text-off-2 transition-colors"
        >
          Ver guia completo de atrações
        </Link>
      </div>
      </Reveal>
    </section>
  );
}
