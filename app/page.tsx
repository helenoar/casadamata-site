import type { Metadata } from "next";

import { Hero } from "@/components/sections/Hero";
import { GalleryStripCarousel } from "@/components/sections/GalleryStripCarousel";
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
      <Hero />
      <GalleryStripCarousel />
      <Diferenciais />
      <AmenitiesPreview />
      <ReviewsPreview />
      <HostSection />
      <AtracoesProximas />
      <CtaAirbnb />
    </main>
  );
}
