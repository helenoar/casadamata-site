import Link from 'next/link';

export function BackToHomeHeader() {
  return (
    <div className="w-full border-b border-gray-200 px-6 py-4 md:px-16 lg:px-24">
      <Link href="/" className="text-sm text-terracota hover:text-terracota/70 transition-colors">
        ← Voltar para Home
      </Link>
    </div>
  );
}
