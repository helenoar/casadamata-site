import Link from "next/link";

import { property } from "@/content/data/property";

const NAV_LINKS = [
  { href: "/a-casa", label: "A Casa" },
  { href: "/o-que-fazer", label: "O que fazer" },
  { href: "/anfitria", label: "Anfitriã" },
  { href: "/avaliacoes", label: "Avaliações" },
  { href: "/faq", label: "FAQ" },
];

export function Header() {
  return (
    <header className="flex w-full flex-wrap items-center justify-between gap-4 border-b border-terracota/30 px-6 py-6 md:px-16 lg:px-24">
      <div className="flex items-center gap-3">
        <span className="text-2xl leading-none font-semibold tracking-[0.01em] text-oliva-escuro md:text-3xl">
          CASA DA MATA
        </span>
        {/* "45" é a placa numerada da casa no condomínio */}
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-terracota text-sm font-bold text-off-2 md:h-10 md:w-10">
          45
        </span>
      </div>

      <nav className="hidden items-center gap-8 text-sm tracking-wide text-oliva-escuro md:flex">
        {NAV_LINKS.map((link) => (
          <Link key={link.href} href={link.href} className="hover:opacity-70">
            {link.label}
          </Link>
        ))}
      </nav>

      <a
        href={property.airbnbUrl}
        target="_blank"
        rel="noopener"
        className="rounded-none border border-oliva-escuro px-5 py-2.5 text-sm text-oliva-escuro"
      >
        Reservar
      </a>
    </header>
  );
}
