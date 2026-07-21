import Link from "next/link";

export function AtracoesProximas() {
  return (
    <section className="w-full bg-off-1 px-6 py-20 md:py-32 lg:py-40 md:px-16 lg:px-24">
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
        <Link
          href="/inhotim-e-atracoes-turisticas"
          className="inline-block border border-oliva-escuro px-8 py-4 text-sm tracking-wide text-oliva-escuro uppercase hover:bg-oliva-escuro hover:text-off-2 transition-colors"
        >
          Ver guia completo de atrações
        </Link>
      </div>
    </section>
  );
}
