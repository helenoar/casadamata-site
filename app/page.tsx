// Página temporária de verificação do scaffold (Task 0). Só confirma que a
// paleta de cores e a fonte (via --font-heading / --font-body) estão ligadas
// corretamente. Será substituída pela home real na Fase 2.

const swatches = [
  { name: "oliva", var: "--color-oliva", hex: "#819c5d" },
  { name: "oliva-escuro", var: "--color-oliva-escuro", hex: "#4d5c30" },
  { name: "terracota", var: "--color-terracota", hex: "#8a4b2f" },
  { name: "off-1", var: "--color-off-1", hex: "#eee8dc" },
  { name: "off-2", var: "--color-off-2", hex: "#f9efdc" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-off-1 flex flex-col items-center justify-center gap-8 p-8">
      <h1 className="font-heading text-oliva-escuro text-4xl font-semibold text-center">
        Casa da Mata — scaffold OK
      </h1>

      <div className="flex flex-wrap gap-4 justify-center">
        {swatches.map((swatch) => (
          <div key={swatch.name} className="flex flex-col items-center gap-2">
            <div
              className="w-20 h-20 rounded-md border border-black/10"
              style={{ backgroundColor: swatch.hex }}
            />
            <span className="font-body text-sm text-oliva-escuro">
              {swatch.name}
            </span>
          </div>
        ))}
      </div>
    </main>
  );
}
