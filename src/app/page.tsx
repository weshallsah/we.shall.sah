import { ResumeHeader } from '@/components/sections/resume-header';
import { About } from '@/components/sections/about';
import { Experience } from '@/components/sections/experience';
import { Projects } from '@/components/sections/projects';
import { Hackathons } from '@/components/sections/hackathons';
import { Education } from '@/components/sections/education';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <>
      <ResumeHeader />
      <main>
        <About />
        <Experience />
        <Projects />
        <Hackathons />
        <Education />
      </main>
      <Footer />
    </>
  );
}
