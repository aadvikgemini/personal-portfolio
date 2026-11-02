import { useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { TechStack } from './components/TechStack';
import { JourneySection } from './components/JourneySection';
import { HackathonsSection } from './components/HackathonsSection';
import { LearningDashboard } from './components/LearningDashboard';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { ParticleBackground } from './components/ParticleBackground';
import { useReducedMotion } from './hooks/useReducedMotion';
import { startScroll } from './lib/scroll';

export default function App() {
  const reduced = useReducedMotion();

  useEffect(() => {
    const cleanup = startScroll(reduced);
    return () => cleanup();
  }, [reduced]);

  return (
    <div className="relative min-h-screen bg-[#07090e] text-slate-100 selection:bg-cyan-500/30 selection:text-white font-sans overflow-x-hidden">
      {/* Background Particles Canvas */}
      <ParticleBackground />

      {/* Main Navigation */}
      <Navigation />

      {/* Page Content */}
      <main id="main-content" className="relative z-10">
        <Hero />
        <AboutSection />
        <ProjectsShowcase />
        <TechStack />
        <JourneySection />
        <HackathonsSection />
        <LearningDashboard />
        <ContactSection />
      </main>

      {/* Footer & Floating Controls */}
      <Footer />
      <BackToTop />
    </div>
  );
}
