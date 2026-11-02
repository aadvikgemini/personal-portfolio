import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Mail } from 'lucide-react';
import { navigationItems } from '../content';
import { siteConfig } from '../config';
import { scrollToHash } from '../lib/scroll';
import { GithubIcon, LinkedinIcon } from './Icons';

export function Navigation() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sectionIds = navigationItems.map((item) => item.href.replace('#', ''));
      const scrollPos = window.scrollY + 220;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    scrollToHash(href);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#090c12]/90 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl'
            : 'bg-transparent py-4 sm:py-6'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 flex items-center justify-between gap-4">
          {/* Logo / Monogram */}
          <motion.a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2.5 bg-[#0e131d]/90 hover:bg-[#131926] text-slate-200 px-3.5 py-1.5 rounded-full border border-sky-500/20 text-xs font-mono uppercase tracking-wider transition-colors shadow-lg cursor-pointer"
          >
            <span className="size-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#22d3ee]" />
            <span className="font-semibold text-white tracking-wide">Aadvik Gemini</span>
            <span className="text-slate-500">·</span>
            <span className="text-sky-300/90 font-medium">NST CS</span>
          </motion.a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#0e131d]/85 border border-white/10 px-2.5 py-1.5 rounded-full backdrop-blur-md shadow-xl">
            {navigationItems.map((item) => {
              const secId = item.href.replace('#', '');
              const isActive = activeSection === secId;

              return (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => handleNavClick(item.href)}
                  className={`relative px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                    isActive ? 'text-white font-semibold' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="navActivePill"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      className="absolute inset-0 bg-sky-500/20 border border-sky-400/40 rounded-full"
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Controls: Availability Status & Let's Connect */}
          <div className="flex items-center gap-2.5">
            {/* Status Indicator */}
            <div className="hidden sm:flex items-center gap-2 bg-[#0e131d]/90 px-3 py-1.5 rounded-full border border-white/10 text-[0.6875rem] font-mono text-slate-300">
              <span className="size-2 rounded-full bg-cyan-400 animate-ping opacity-75" />
              <span className="text-slate-400">STATUS:</span>
              <span className="text-cyan-300 font-medium">Learning & Building</span>
            </div>

            {/* Quick Contact CTA */}
            <button
              type="button"
              onClick={() => handleNavClick('#contact')}
              className="hidden md:inline-flex items-center gap-1.5 bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-400 hover:to-cyan-400 text-slate-950 font-semibold px-4 py-1.5 rounded-full text-xs shadow-md transition-transform hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Connect</span>
              <ArrowUpRight className="size-3.5" />
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden flex items-center justify-center size-9 rounded-full bg-[#0e131d] border border-white/15 text-slate-300 hover:text-white"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[60px] z-40 bg-[#090c12]/95 backdrop-blur-2xl border-b border-white/15 px-6 py-6 shadow-2xl lg:hidden max-h-[85vh] overflow-y-auto"
          >
            {/* Status indicator in mobile */}
            <div className="flex items-center gap-2 pb-4 mb-4 border-b border-white/10 text-xs font-mono text-slate-300">
              <span className="size-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#22d3ee]" />
              <span className="text-slate-400">Status:</span>
              <span className="text-cyan-300 font-medium">{siteConfig.personal.status}</span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {navigationItems.map((item) => {
                const secId = item.href.replace('#', '');
                const isActive = activeSection === secId;

                return (
                  <button
                    key={item.href}
                    type="button"
                    onClick={() => handleNavClick(item.href)}
                    className={`flex items-center justify-between p-3 rounded-xl text-sm font-medium transition-colors text-left ${
                      isActive
                        ? 'bg-sky-500/20 text-white border border-sky-400/40'
                        : 'bg-[#0e131d] text-slate-300 hover:bg-[#131926] border border-white/5'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="size-1.5 rounded-full bg-cyan-400" />}
                  </button>
                );
              })}
            </div>

            {/* Social Links inside Mobile Nav */}
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">Aadvik Gemini · NST</span>
              <div className="flex items-center gap-3">
                <a
                  href={siteConfig.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-[#0e131d] border border-white/10 text-slate-400 hover:text-white"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="size-4" />
                </a>
                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-[#0e131d] border border-white/10 text-slate-400 hover:text-white"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="size-4" />
                </a>
                <a
                  href={siteConfig.socials.email}
                  className="p-2 rounded-full bg-[#0e131d] border border-white/10 text-slate-400 hover:text-white"
                  aria-label="Send Email"
                >
                  <Mail className="size-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
