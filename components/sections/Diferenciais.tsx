import { property } from "@/content/data/property";

type Differential = {
  title: string;
  description: string;
};

export function Diferenciais() {
  const outdoorAreaSqm = property.capacity.outdoorAreaSqm;

  const differentials: Differential[] = [
    {
      title: "Riacho ao pé da casa",
      description:
        "O som da água acompanha a estadia do início ao fim — parte do nome do próprio refúgio.",
    },
    {
      title: "Fogo de chão",
      description:
        "Noites sob céu estrelado, no cenário que completa a experiência da mata.",
    },
    {
      title: `${outdoorAreaSqm} m² de Mata Atlântica`,
      description:
        "Quintal privado cercado por vegetação preservada, com redário e área de jantar externa.",
    },
    {
      title: "Self check-in seguro",
      description:
        "Cofre de chaves, condomínio fechado com portaria controlada e câmeras 24 horas.",
    },
  ];

  return (
    <section id="casa" className="w-full px-6 py-20 md:py-32 lg:py-40 md:px-16 lg:px-24">
      <p className="mb-6 text-xs tracking-[0.2em] text-terracota uppercase">
        Diferenciais
      </p>
      <h2
        className="mb-20 font-light leading-[1] text-oliva-escuro"
        style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
      >
        Feita para desacelerar.
      </h2>

      <div className="grid gap-x-16 gap-y-16 md:grid-cols-2 md:gap-y-20 lg:gap-28">
        {differentials.map((item) => (
          <div key={item.title} className="border-t border-terracota/35 pt-6">
            <h3 className="mb-2 flex items-center gap-2 text-xl font-medium text-oliva-escuro">
              <span
                className="inline-block h-2 w-2 bg-terracota"
                aria-hidden="true"
              />
              {item.title}
            </h3>
            <p className="leading-relaxed text-oliva-escuro">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
