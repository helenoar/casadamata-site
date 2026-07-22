import type { Metadata } from "next";
import Image from "next/image";

import { host } from "@/content/data/host";
import { FactList } from "@/components/ui/FactList";
import { PersonJsonLd } from "@/components/schema/PersonJsonLd";
import { BackToHomeHeader } from "@/components/layout/BackToHomeHeader";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Anfitriã",
  description: `Conheça ${host.name}, anfitriã ${host.isSuperhost ? "Superhost" : ""} da Casa da Mata — taxa de resposta de ${host.responseRate}, hospeda há ${host.hostingSince}.`,
  path: "/anfitria",
});

export default function AnfitriaPage() {
  const hostFacts = [
    host.isSuperhost ? "Superhost" : "Anfitriã",
    `Hospeda há ${host.hostingSince}`,
    `Taxa de resposta: ${host.responseRate}`,
    `Tempo de resposta: ${host.responseTime}`,
    host.identityVerified ? "Identidade verificada" : "Identidade não verificada",
  ];

  return (
    <main className="w-full px-6 pt-10 pb-24 md:px-16 lg:px-24">
      <BackToHomeHeader />
      <PersonJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Anfitriã", path: "/anfitria" },
        ]}
      />
      <div className="backdrop-blur-sm bg-off-2/40 border border-terracota/20 rounded-lg p-8 mb-20">
        <p className="mb-4 text-xs tracking-[0.2em] text-terracota uppercase">
          Sua anfitriã
        </p>
        <h1
          className="mb-10 max-w-5xl font-light leading-[1.05] text-oliva-escuro"
          style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
        >
          Quem é a anfitriã da Casa da Mata?
        </h1>
      </div>

      <div className="backdrop-blur-sm bg-off-2/40 border border-terracota/20 rounded-lg p-8 mb-20">
        <div className="grid w-full items-start gap-10 md:grid-cols-[340px_1fr] md:gap-16">
        <div className="mx-auto aspect-[3/4] w-full max-w-xs overflow-hidden border-t-[3px] border-terracota md:mx-0 md:max-w-none shadow-soft hover:shadow-lifted hover:-translate-y-1 transition-all duration-300 will-change-transform">
          <Image
            src="/images/anfitria-leticia.jpg"
            alt={`${host.name}, anfitriã da Casa da Mata`}
            width={510}
            height={680}
            className="h-full w-full object-cover"
            priority
          />
        </div>

        <div>
          <h2 className="mb-4 text-2xl font-medium text-oliva-escuro">
            {host.name}
          </h2>
          <FactList facts={hostFacts} className="mb-8" />
          <p className="mb-8 leading-relaxed text-oliva-escuro">
            {host.bio}
          </p>
          <a
            href={host.airbnbProfileUrl}
            target="_blank"
            rel="noopener"
            className="inline-block border-b border-terracota text-sm tracking-wide text-terracota uppercase"
          >
            Ver perfil no Airbnb →
          </a>
        </div>
      </div>
      </div>
    </main>
  );
}
