// Bloco curto de fatos objetivos e extraíveis (números, não adjetivos) — usado
// logo abaixo do heading em formato de pergunta, nas páginas de produto
// (padrão GEO/AEO do projeto). Cada string já vem pronta de content/data/*.ts
// ou é composta a partir de campos tipados de lá — nunca texto solto novo.

type FactListProps = {
  facts: string[];
  className?: string;
};

export function FactList({ facts, className = "" }: FactListProps) {
  return (
    <ul
      className={`flex flex-col gap-2 border-l-2 border-terracota pl-5 text-sm text-oliva-escuro md:text-base ${className}`}
    >
      {facts.map((fact) => (
        <li key={fact}>{fact}</li>
      ))}
    </ul>
  );
}
