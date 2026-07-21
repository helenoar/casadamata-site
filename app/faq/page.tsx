import type { Metadata } from "next";

import { faq } from "@/content/data/faq";
import { Accordion } from "@/components/ui/Accordion";
import { FaqJsonLd } from "@/components/schema/FaqJsonLd";
import { BackToHomeHeader } from "@/components/layout/BackToHomeHeader";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Perguntas Frequentes",
  description:
    "Respostas objetivas às perguntas mais comuns sobre a Casa da Mata: segurança, check-in, Wi-Fi, estacionamento, ar-condicionado e mais.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <main className="w-full px-6 pt-10 pb-24 md:px-16 lg:px-24">
      <FaqJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Perguntas Frequentes", path: "/faq" },
        ]}
      />
      <p className="mb-4 text-xs tracking-[0.2em] text-terracota uppercase">
        Perguntas frequentes
      </p>
      <h1
        className="mb-14 max-w-3xl font-light leading-[1.05] text-oliva-escuro"
        style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
      >
        O que você precisa saber antes de reservar a Casa da Mata?
      </h1>

      <div className="max-w-3xl">
        <Accordion items={faq} />
      </div>
    </main>
  );
}
