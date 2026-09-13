import { Hero } from "@/components/home/hero";
import { RealExperience } from "@/components/home/real-experience";
import { ServicesPreview } from "@/components/home/services-preview";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main>
        <Hero />
        <RealExperience />
        <ServicesPreview />
      </main>
    </>
  );
}