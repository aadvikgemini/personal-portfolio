import { useState, type MouseEvent } from 'react';
import { brand, nav, hero } from '../content';
import { scrollToHash } from '../lib/scroll';

function go(e: MouseEvent<HTMLAnchorElement>, then?: () => void) {
  const hash = e.currentTarget.getAttribute('href');
  if (!hash?.startsWith('#')) return;
  e.preventDefault();
  then?.();
  scrollToHash(hash);
}

/** A crescent: celestial mark */
function Crescent({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path d="M15.5 3.2A9 9 0 1 0 20.8 16 7.2 7.2 0 0 1 15.5 3.2Z" fill="currentColor" />
    </svg>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 text-white">
      <div className="flex items-center justify-between px-4 pt-4 sm:px-6 sm:pt-5 md:px-[3vw]">
        {/* Brand Monogram */}
        <a
          href="#top"
          onClick={(e) => go(e)}
          className="flex items-center gap-2.5 group cursor-pointer"
          aria-label={`${brand.name} — back to top`}
        >
          <Crescent className="size-5 text-earth transition-transform duration-300 group-hover:rotate-12" />
          <span className="font-display text-[0.875rem] tracking-[0.32em] uppercase font-bold text-white group-hover:text-earth transition-colors">
            {brand.wordmark}
          </span>
          <span className="hidden sm:inline font-mono text-[0.625rem] text-regolith/50 tracking-[0.16em] uppercase">
            · NST CS
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav aria-label="Primary" className="hidden items-center gap-6 lg:gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => go(e)}
              className="font-mono text-label text-regolith/75 uppercase tracking-[0.16em] transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}

          {/* Status pill */}
          <div className="hidden xl:flex items-center gap-2 bg-void-2 px-3 py-1.5 rounded-[4px] border border-white/10 font-mono text-[0.625rem] text-regolith/80 uppercase tracking-widest">
            <span className="size-1.5 rounded-full bg-earth animate-pulse" />
            <span>{hero.status}</span>
          </div>

          <a
            href="#contact"
            onClick={(e) => go(e)}
            className="rounded-[4px] bg-white px-4 py-2 font-mono text-label text-void font-bold uppercase transition-colors hover:bg-earth cursor-pointer"
          >
            Connect
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu"
          className="font-mono text-label uppercase tracking-widest md:hidden px-3 py-1.5 rounded border border-white/10 bg-void-2 text-regolith hover:text-white"
        >
          {open ? 'Close [x]' : 'Menu [=]'}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        id="menu"
        inert={!open ? true : undefined}
        className={`fixed inset-0 -z-10 flex flex-col justify-center gap-6 bg-void/98 px-8 backdrop-blur-2xl transition-opacity duration-300 md:hidden ${
          open ? 'opacity-100 pointer-events-auto' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="mb-4 font-mono text-[0.6875rem] text-earth uppercase tracking-widest">
          // NAVIGATION TELEMETRY
        </div>
        {nav.map((item, i) => (
          <a
            key={item.href}
            href={item.href}
            onClick={(e) => go(e, () => setOpen(false))}
            className="flex items-baseline gap-4 font-display text-[1.5rem] tracking-[0.14em] uppercase text-white hover:text-earth transition-colors"
          >
            <span className="font-mono text-label text-earth">0{i + 1}</span>
            <span>{item.label}</span>
          </a>
        ))}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col gap-3 font-mono text-label text-regolith/60">
          <span>{brand.role}</span>
          <span>{brand.location}</span>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-void px-4 py-12 sm:px-6 md:px-[6vw]">
      <div className="flex flex-col gap-6 font-mono text-label text-regolith/50 uppercase md:flex-row md:items-center md:justify-between">
        <span className="flex items-center gap-2.5 text-white/80">
          <Crescent className="size-4 text-earth" />
          <span className="font-display tracking-[0.2em]">{brand.wordmark}</span>
          <span>· {brand.university}</span>
        </span>

        <div className="flex flex-wrap items-center gap-6 text-regolith/70">
          <a
            href={brand.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-earth transition-colors"
          >
            GitHub
          </a>
          <a
            href={brand.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-earth transition-colors"
          >
            LinkedIn
          </a>
          <a href={`mailto:${brand.email}`} className="hover:text-earth transition-colors">
            {brand.email}
          </a>
        </div>

        <a href="#top" onClick={(e) => go(e)} className="hover:text-white flex items-center gap-1.5 transition-colors">
          <span>Back to the surface</span>
          <span>↑</span>
        </a>
      </div>

      <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[0.625rem] font-mono text-regolith/40 gap-2">
        <p>Built with curiosity, first principles & single-rAF scroll kinematics.</p>
        <p>© {new Date().getFullYear()} Aadvik Gemini. All rights reserved.</p>
      </div>
    </footer>
  );
}
