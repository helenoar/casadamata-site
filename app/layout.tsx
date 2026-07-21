import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";

// Fonte de marca real (ITC Avant Garde Gothic) ainda sem licença de uso web
// resolvida. Jost é o fallback temporário — --font-heading e --font-body
// apontam para a mesma fonte por enquanto; trocar depois é uma linha só.
const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jost",
});

export const metadata: Metadata = {
  title: "Casa da Mata",
  description: "Casa da Mata — Nova Lima/MG",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${jost.variable} font-body`}>{children}</body>
    </html>
  );
}
