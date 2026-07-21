import { property } from "@/content/data/property";
import { locationFacts } from "@/content/data/location-facts";
import { BrandStripe } from "@/components/ui/BrandStripe";

export function Footer() {
  return (
    <>
      {/* faixa espelhando a do topo — simetria de linha */}
      <BrandStripe />
      <footer className="w-full px-6 py-10 text-center text-xs text-oliva-escuro/60 md:px-16 lg:px-24">
        {property.brandName} · {locationFacts.condominium}, {locationFacts.city} — MG
      </footer>
    </>
  );
}
