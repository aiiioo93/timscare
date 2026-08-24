import { Hero } from "@/components/home/hero";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main>
        <Hero />

        <section
          id="prestations"
          className="min-h-[50vh] bg-timscare-beige"
        />
      </main>
    </>
  );
}