import { ArrowUp } from 'lucide-react';
import { footerContent } from '../content';
import { scrollToHash } from '../lib/scroll';
import { GithubIcon, LinkedinIcon } from './Icons';

export function Footer() {
  return (
    <footer className="relative bg-[#05070a] border-t border-white/10 py-12 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          {/* Identity */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-xl font-bold text-white tracking-wide">
              {footerContent.name}
            </h3>
            <p className="text-xs font-mono text-cyan-400 mt-1">
              {footerContent.tagline}
            </p>
            <p className="text-xs text-slate-500 mt-0.5">
              Computer Science & AI/ML · Newton School of Technology
            </p>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={footerContent.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0e131d] border border-white/10 hover:border-sky-500/40 text-xs font-mono text-slate-300 hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="size-4 text-sky-400" />
              <span>GitHub</span>
            </a>

            <a
              href={footerContent.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0e131d] border border-white/10 hover:border-sky-500/40 text-xs font-mono text-slate-300 hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="size-4 text-sky-400" />
              <span>LinkedIn</span>
            </a>

            <button
              type="button"
              onClick={() => scrollToHash('#hero')}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/30 text-xs font-mono text-sky-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="size-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-3 text-center sm:text-left">
          <p>{footerContent.quote}</p>
          <p>© {new Date().getFullYear()} Aadvik Gemini. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
