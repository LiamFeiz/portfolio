import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { Hero } from "@/components/sections/Hero";
import { Skills } from "@/components/sections/Skills";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <FeaturedWork />
      <Experience />
      <Skills />
      <Contact />
    </main>
  );
}
