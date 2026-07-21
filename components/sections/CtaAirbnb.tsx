import { property } from "@/content/data/property";

export function CtaAirbnb() {
  return (
    <section id="reservar" className="w-full px-6 py-28 text-center md:px-16 lg:px-24">
      <h2
        className="mb-8 font-light text-oliva-escuro"
        style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
      >
        O tempo desacelera aqui.
      </h2>
      <a
        href={property.airbnbUrl}
        target="_blank"
        rel="noopener"
        className="inline-block bg-oliva-escuro px-10 py-5 text-sm tracking-wide text-off-2 uppercase shadow-soft hover:shadow-lifted transition-shadow duration-300"
      >
        Reservar no Airbnb
      </a>
    </section>
  );
}
