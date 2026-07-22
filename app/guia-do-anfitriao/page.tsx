import type { Metadata } from "next";
import Link from "next/link";

import { property } from "@/content/data/property";
import { BackToHomeHeader } from "@/components/layout/BackToHomeHeader";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Guia do Anfitrião — Casa da Mata",
  description:
    "Guia completo para anfitriões: informações sobre hospedagem, check-in, comodidades, regras da casa e como aproveitar ao máximo a Casa da Mata.",
  path: "/guia-do-anfitriao",
});

export default function GuiaDoAnfitriaoPage() {
  return (
    <main className="w-full px-6 pt-10 pb-24 md:px-16 lg:px-24">
      <BackToHomeHeader />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Guia do Anfitrião", path: "/guia-do-anfitriao" },
        ]}
      />

      <p className="mb-4 text-xs tracking-[0.2em] text-terracota uppercase">
        Bem-vindo
      </p>
      <h1
        className="mb-6 font-light leading-[1.05] text-oliva-escuro"
        style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
      >
        Guia do Anfitrião
      </h1>
      <p className="mb-14 leading-relaxed text-oliva-escuro max-w-2xl">
        Tudo o que você precisa saber para aproveitar ao máximo sua estadia na Casa da Mata.
      </p>

      <div className="max-w-5xl space-y-12">
        {/* Self Check-In */}
        <section>
          <h2 className="mb-4 text-2xl font-light text-oliva-escuro">
            Check-in e Check-out
          </h2>
          <div className="space-y-3 text-sm leading-relaxed text-oliva-escuro/85">
            <p>
              <strong>Self check-in por cofre de chaves.</strong> A entrada é totalmente autônoma — você não precisa combinar horário com ninguém. A chave fica guardada em um cofre numérico na entrada da casa.
            </p>
            <p>
              <strong>Acesso 24 horas.</strong> Você pode chegar a qualquer hora do dia ou da noite. O Condomínio Pasárgada tem portaria 24h, então sua entrada é sempre autorizada.
            </p>
            <p>
              <strong>Check-out:</strong> Devolver a chave ao cofre no horário combinado (padrão: 11h da manhã).
            </p>
          </div>
        </section>

        {/* Infraestrutura */}
        <section>
          <h2 className="mb-4 text-2xl font-light text-oliva-escuro">
            A Casa — Infraestrutura Completa
          </h2>
          <div className="space-y-3 text-sm leading-relaxed text-oliva-escuro/85">
            <p>
              A Casa da Mata é uma unidade isolada (house full) com 1000 m² de área externa privativa. Você usa toda a casa sozinho ou com quem escolher — não há hóspedes adjacentes.
            </p>
            <p>
              <strong>Comodidades:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Cozinha completa com eletrodomésticos modernos</li>
              <li>Climatização e aquecimento</li>
              <li>Internet de alta velocidade (WiFi)</li>
              <li>Fogo de chão com lenha (fornecida)</li>
              <li>Redário para descanso ao ar livre</li>
              <li>Pátio gramado com vista para a mata</li>
              <li>Riacho ao pé da casa</li>
            </ul>
          </div>
        </section>

        {/* Segurança */}
        <section>
          <h2 className="mb-4 text-2xl font-light text-oliva-escuro">
            Segurança do Condomínio
          </h2>
          <div className="space-y-3 text-sm leading-relaxed text-oliva-escuro/85">
            <p>
              O Condomínio Pasárgada oferece segurança rigorosa:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Portaria controlada com entrada autorizada apenas a hóspedes</li>
              <li>Câmeras de vigilância</li>
              <li>Rondas internas 24 horas</li>
              <li>Acesso restrito aos hóspedes e moradores autorizados</li>
            </ul>
            <p className="mt-4">
              <strong>Nota importante:</strong> Visitas externas não são permitidas durante a hospedagem, conforme política de segurança do condomínio.
            </p>
          </div>
        </section>

        {/* Localização */}
        <section>
          <h2 className="mb-4 text-2xl font-light text-oliva-escuro">
            Localização e Distâncias
          </h2>
          <div className="space-y-3 text-sm leading-relaxed text-oliva-escuro/85">
            <p>
              <strong>26 km do BH Shopping</strong> (referência da cidade — sentido Rio de Janeiro via BR-040)
            </p>
            <p>
              <strong>3 km de Macacos</strong> (São Sebastião das Águas Claras) — distrito histórico com gastronomia mineira
            </p>
            <p>
              <strong>6 km do Vale do Sol</strong> — bairro turístico de Nova Lima
            </p>
            <p>
              <strong>30 km do Instituto Inhotim</strong> — maior museu a céu aberto do mundo
            </p>
          </div>
        </section>

        {/* Atrações */}
        <section>
          <h2 className="mb-4 text-2xl font-light text-oliva-escuro">
            Atrações Próximas
          </h2>
          <div className="space-y-3 text-sm leading-relaxed text-oliva-escuro/85">
            <p>
              Você está cercado por mais de 20 atrações verificadas: museus, trilhas de trekking, cachoeiras com piscinas naturais, gastronomia mineira autêntica e bairros históricos.
            </p>
            <p>
              Visite a seção <Link href="/a-regiao" className="text-terracota hover:underline font-medium">A Região</Link> para descobrir guias detalhados sobre cada atração.
            </p>
          </div>
        </section>

        {/* Dúvidas */}
        <section>
          <h2 className="mb-4 text-2xl font-light text-oliva-escuro">
            Dúvidas?
          </h2>
          <div className="space-y-3 text-sm leading-relaxed text-oliva-escuro/85">
            <p>
              Entre em contato via Airbnb (mensagem na plataforma) ou através dos dados fornecidos no seu booking. A anfitriã está à disposição para orientar você durante toda a estadia.
            </p>
          </div>
        </section>
      </div>

      <div className="mt-16 pt-12 border-t border-terracota/20">
        <a
          href={property.airbnbUrl}
          target="_blank"
          rel="noopener"
          className="inline-block bg-oliva-escuro px-8 py-4 text-sm tracking-wide text-off-2 uppercase hover:bg-terracota transition-colors"
        >
          Ver Disponibilidade no Airbnb
        </a>
      </div>
    </main>
  );
}
