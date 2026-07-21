import Image from "next/image";

import { host } from "@/content/data/host";

export function HostSection() {
  return (
    <section
      id="anfitria"
      className="w-full bg-oliva-escuro px-6 py-28 md:px-16 lg:px-24"
    >
      {/* Coluna da foto com largura FIXA (~340px), não 50/50 — pedido explícito
          do cliente para a foto não boiar num vão vazio (ASSUMPTIONS v6/v4). */}
      <div className="grid w-full items-center gap-10 md:grid-cols-[340px_1fr] md:gap-16">
        <div className="mx-auto aspect-[3/4] w-full max-w-xs overflow-hidden border-t-[3px] border-terracota md:mx-0 md:max-w-none">
          <Image
            src="/images/anfitria-leticia.jpg"
            alt={`${host.name}, anfitriã da Casa da Mata`}
            width={510}
            height={680}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <p className="mb-4 text-xs tracking-[0.2em] text-off-1/70 uppercase">
            Sua anfitriã
          </p>
          <h2
            className="mb-6 font-light text-off-2"
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
          >
            {host.name}
          </h2>
          <p className="mb-6 leading-relaxed text-off-1/90">{host.bio}</p>
          <span className="border border-off-1 px-4 py-2 text-xs tracking-[0.15em] text-off-1 uppercase">
            {host.isSuperhost ? "Superhost" : "Anfitriã"} · hospeda há{" "}
            {host.hostingSince}
          </span>
        </div>
      </div>
    </section>
  );
}
