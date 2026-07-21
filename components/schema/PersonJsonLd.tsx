// Schema.org Person — perfil da anfitriã Letícia, usado em
// app/anfitria/page.tsx (Task 5). Gerado a partir de content/data/host.ts.

import { host } from "@/content/data/host";

export function PersonJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: host.name,
    jobTitle: "Bailarina",
    description: host.bio,
    sameAs: [host.airbnbProfileUrl],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
