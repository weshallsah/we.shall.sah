import { Navigation } from '@/components/navigation';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Projects } from '@/components/sections/projects';
import { Hackathons } from '@/components/sections/hackathons';
import { Experience } from '@/components/sections/experience';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Hackathons />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
