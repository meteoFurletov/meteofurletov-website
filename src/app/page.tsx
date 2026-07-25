import { Hero } from "./(home)/Hero";
import { FactStrip } from "./(home)/FactStrip";
import { HowIWork } from "./(home)/HowIWork";
import { ProofStrip } from "./(home)/ProofStrip";
import { FeaturedProjects } from "./(home)/FeaturedProjects";
import { Notes } from "./(home)/Notes";
import { ContactBand } from "./(home)/ContactBand";

export default function Home() {
  return (
    <main>
      <Hero />
      <FactStrip />
      <HowIWork />
      <ProofStrip />
      <FeaturedProjects />
      <Notes />
      <ContactBand />
    </main>
  );
}
