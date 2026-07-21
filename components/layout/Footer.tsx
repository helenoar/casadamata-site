import Link from "next/link";
import { property } from "@/content/data/property";
import { locationFacts } from "@/content/data/location-facts";
import { BrandStripe } from "@/components/ui/BrandStripe";

export function Footer() {
  return (
    <>
      {/* faixa espelhando a do topo — simetria de linha */}
      <BrandStripe />
      <footer className="w-full space-y-6 px-6 py-10 md:px-16 lg:px-24">
        <div className="flex flex-wrap justify-center gap-6 border-b border-oliva-escuro/10 pb-6 text-xs text-oliva-escuro/80">
          <Link
            href="/hospedagem-nova-lima-e-macacos"
            className="hover:text-oliva-escuro transition-colors"
          >
            Hospedagem
          </Link>
          <Link
            href="/inhotim-e-atracoes-turisticas"
            className="hover:text-oliva-escuro transition-colors"
          >
            Atrações Próximas
          </Link>
          <Link href="/o-que-fazer" className="hover:text-oliva-escuro transition-colors">
            O que fazer
          </Link>
          <Link href="/faq" className="hover:text-oliva-escuro transition-colors">
            Perguntas Frequentes
          </Link>
        </div>
        <div className="text-center text-xs text-oliva-escuro/60">
          {property.brandName} · {locationFacts.condominium}, {locationFacts.city} — MG
        </div>
      </footer>
    </>
  );
}
