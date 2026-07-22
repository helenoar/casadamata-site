import type { Metadata } from "next";

import { Hero } from "@/components/sections/Hero";
import { HeroPhotoStrip } from "@/components/sections/HeroPhotoStrip";
import { Diferenciais } from "@/components/sections/Diferenciais";
import { AmenitiesPreview } from "@/components/sections/AmenitiesPreview";
import { ReviewsPreview } from "@/components/sections/ReviewsPreview";
import { HostSection } from "@/components/sections/HostSection";
import { AtracoesProximas } from "@/components/sections/AtracoesProximas";
import { CtaAirbnb } from "@/components/sections/CtaAirbnb";
import { DEFAULT_DESCRIPTION } from "@/lib/seo";

export const metadata: Metadata = {
  description: DEFAULT_DESCRIPTION,
};

export default function Home() {
  return (
    <main>
      <div className="backdrop-blur-sm bg-off-2/40 border border-terracota/20 rounded-lg p-6 md:p-8 lg:p-12 mb-20">
        <Hero />
      </div>
      <HeroPhotoStrip />
      <div className="backdrop-blur-sm bg-off-2/40 border border-terracota/20 rounded-lg p-6 md:p-8 lg:p-12 mb-20">
        <Diferenciais />
      </div>
      <div className="backdrop-blur-sm bg-off-2/40 border border-terracota/20 rounded-lg p-6 md:p-8 lg:p-12 mb-20">
        <AmenitiesPreview />
      </div>
      <div className="backdrop-blur-sm bg-off-2/40 border border-terracota/20 rounded-lg p-6 md:p-8 lg:p-12 mb-20">
        <ReviewsPreview />
      </div>
      <div className="backdrop-blur-sm bg-off-2/40 border border-terracota/20 rounded-lg p-6 md:p-8 lg:p-12 mb-20">
        <HostSection />
      </div>
      <div className="backdrop-blur-sm bg-off-2/40 border border-terracota/20 rounded-lg p-6 md:p-8 lg:p-12 mb-20">
        <AtracoesProximas />
      </div>
      <CtaAirbnb />
    </main>
  );
}
