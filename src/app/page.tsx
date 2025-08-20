import { Hero } from "@/components/sections/hero";
import { FeatureShowcase } from "@/components/sections/feature-showcase";
import { AboutSummary } from "@/components/sections/about-summary";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureShowcase />
      <AboutSummary />
      <Contact />
    </>
  );
}
