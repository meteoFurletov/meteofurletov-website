import { Hero } from "./(home)/Hero";
import { BioTeaser } from "./(home)/BioTeaser";
import { FeaturedProjects } from "./(home)/FeaturedProjects";
import { ServicesTeaser } from "./(home)/ServicesTeaser";

export default function Home() {
  return (
    <main>
      <Hero />
      <BioTeaser />
      <FeaturedProjects />
      <ServicesTeaser />
    </main>
  );
}
