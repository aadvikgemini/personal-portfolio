import { useEffect } from 'react';
import { Footer, Header } from './components/Chrome';
import { Earthrise } from './components/Earthrise';
import { AboutSection } from './components/AboutSection';
import { ProjectsReel } from './components/ProjectsReel';
import { Trajectory } from './components/Trajectory';
import { SkillsMissions } from './components/SkillsMissions';
import { HackathonsBeyond } from './components/HackathonsBeyond';
import { CurrentlyExploring } from './components/CurrentlyExploring';
import { ReserveContact } from './components/ReserveContact';
import { useReducedMotion } from './hooks/useReducedMotion';
import { startScroll } from './lib/scroll';

export default function App() {
  const reduced = useReducedMotion();
  useEffect(() => startScroll(reduced), [reduced]);

  return (
    <div className="min-h-screen bg-void text-regolith selection:bg-earth selection:text-void font-sans">
      <Header />
      <main id="main-content">
        <Earthrise />
        <AboutSection />
        <ProjectsReel />
        <Trajectory />
        <SkillsMissions />
        <HackathonsBeyond />
        <CurrentlyExploring />
        <ReserveContact />
      </main>
      <Footer />
    </div>
  );
}
