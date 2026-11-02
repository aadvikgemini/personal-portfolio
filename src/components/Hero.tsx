import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Mail, Sparkles, Code2, ShieldCheck, Cpu } from 'lucide-react';
import { heroContent } from '../content';
import { siteConfig } from '../config';
import { scrollToHash } from '../lib/scroll';
import { GithubIcon, LinkedinIcon } from './Icons';

export function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero Introduction"
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#07090e] pt-32 pb-12 tech-grid"
    >
      {/* Ambient background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-sky-500/10 blur-[150px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-12 right-10 w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-[130px]"
      />

      {/* Main Hero Container */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Small Introduction Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 mb-6 bg-[#0e131d]/90 border border-sky-500/25 px-3.5 py-1.5 rounded-full shadow-lg backdrop-blur-md"
            >
              <span className="size-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#22d3ee]" />
              <span className="text-[0.6875rem] font-mono tracking-widest text-sky-200 uppercase font-semibold">
                {heroContent.smallIntro}
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight text-white leading-[1.05]"
            >
              <span className="block text-white">Learning.</span>
              <span className="block text-cyan-gradient">Building.</span>
              <span className="block text-blue-gradient">Innovating.</span>
            </motion.h1>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-light"
            >
              {heroContent.supportingText}
            </motion.p>

            {/* Status Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-5 flex items-center gap-2.5 px-3.5 py-1.5 rounded-lg bg-[#0e131d] border border-white/10 text-xs font-mono text-slate-300"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
              </span>
              <span className="text-slate-400 font-medium">Status:</span>
              <span className="text-cyan-300 font-semibold">{heroContent.statusIndicator}</span>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              {/* Primary Button */}
              <button
                type="button"
                onClick={() => scrollToHash(heroContent.primaryBtn.href)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-400 hover:to-cyan-400 text-slate-950 font-bold text-sm shadow-[0_0_20px_rgba(56,189,248,0.35)] transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>{heroContent.primaryBtn.label}</span>
                <ArrowUpRight className="size-4" />
              </button>

              {/* Secondary Button */}
              <button
                type="button"
                onClick={() => scrollToHash(heroContent.secondaryBtn.href)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0e131d] hover:bg-[#131926] text-slate-200 hover:text-white font-medium text-sm border border-white/15 hover:border-sky-500/40 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>{heroContent.secondaryBtn.label}</span>
                <Mail className="size-4 text-sky-400" />
              </button>
            </motion.div>

            {/* Social Links & University Mention */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex items-center gap-4 text-xs font-mono text-slate-400"
            >
              <div className="flex items-center gap-2">
                <a
                  href={heroContent.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 p-2 rounded-lg bg-[#0e131d] border border-white/10 text-slate-300 hover:text-white hover:border-sky-500/40 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="size-4 text-sky-400" />
                  <span>GitHub</span>
                </a>

                <a
                  href={heroContent.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 p-2 rounded-lg bg-[#0e131d] border border-white/10 text-slate-300 hover:text-white hover:border-sky-500/40 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="size-4 text-sky-400" />
                  <span>LinkedIn</span>
                </a>
              </div>

              <span className="text-slate-600">|</span>
              <span className="hidden sm:inline text-slate-400">NST · Rishihood University</span>
            </motion.div>
          </div>

          {/* Right Column: Interactive Developer Telemetry Card */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-full max-w-md rounded-2xl bg-[#0b0f17]/90 border border-sky-500/25 p-5 shadow-2xl backdrop-blur-xl relative overflow-hidden"
            >
              {/* Corner brackets */}
              <div className="absolute inset-0 brackets pointer-events-none text-sky-500/20" />

              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="size-3 rounded-full bg-rose-500/80" />
                  <span className="size-3 rounded-full bg-amber-500/80" />
                  <span className="size-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400">aadvik_dev_profile.json</span>
                </div>
                <span className="text-[0.625rem] font-mono uppercase bg-sky-500/10 text-sky-300 px-2 py-0.5 rounded border border-sky-500/20">
                  UNDERGRAD
                </span>
              </div>

              {/* Card Body: Code / Config representation */}
              <div className="pt-4 font-mono text-xs space-y-3 leading-relaxed text-slate-300">
                <div>
                  <span className="text-sky-400">const</span> developer = {'{'}
                </div>

                <div className="pl-4 space-y-1 text-slate-300">
                  <div>
                    <span className="text-slate-400">name:</span> <span className="text-emerald-300">"{siteConfig.personal.name}"</span>,
                  </div>
                  <div>
                    <span className="text-slate-400">institution:</span> <span className="text-emerald-300">"Newton School of Technology"</span>,
                  </div>
                  <div>
                    <span className="text-slate-400">university:</span> <span className="text-emerald-300">"Rishihood University"</span>,
                  </div>
                  <div>
                    <span className="text-slate-400">major:</span> <span className="text-cyan-300">"Computer Science / AI & ML"</span>,
                  </div>
                  <div>
                    <span className="text-slate-400">currentStatus:</span>{' '}
                    <span className="text-amber-300">"Learning & Building"</span>,
                  </div>
                  <div>
                    <span className="text-slate-400">mindset:</span>{' '}
                    <span className="text-purple-300">{'"Curiosity > Pretension"'}</span>,
                  </div>
                  <div>
                    <span className="text-slate-400">coreInterests:</span> [
                    <span className="text-sky-300">"AI/ML"</span>,{' '}
                    <span className="text-sky-300">"Cybersecurity"</span>,{' '}
                    <span className="text-sky-300">"Web"</span>,{' '}
                    <span className="text-sky-300">"Startups"</span>],
                  </div>
                </div>

                <div>{'};'}</div>
              </div>

              {/* Interactive Focus Tags */}
              <div className="mt-5 pt-4 border-t border-white/10 grid grid-cols-2 gap-2 text-[0.6875rem] font-mono">
                <div className="flex items-center gap-2 bg-[#080b11] p-2 rounded-lg border border-white/5">
                  <Cpu className="size-3.5 text-sky-400" />
                  <span className="text-slate-300">CS & Low-Level</span>
                </div>
                <div className="flex items-center gap-2 bg-[#080b11] p-2 rounded-lg border border-white/5">
                  <Sparkles className="size-3.5 text-cyan-400" />
                  <span className="text-slate-300">AI / ML Focus</span>
                </div>
                <div className="flex items-center gap-2 bg-[#080b11] p-2 rounded-lg border border-white/5">
                  <ShieldCheck className="size-3.5 text-blue-400" />
                  <span className="text-slate-300">Cyber Defense</span>
                </div>
                <div className="flex items-center gap-2 bg-[#080b11] p-2 rounded-lg border border-white/5">
                  <Code2 className="size-3.5 text-emerald-400" />
                  <span className="text-slate-300">Rapid Shipping</span>
                </div>
              </div>

              {/* Active Build Highlight */}
              <div className="mt-4 p-3 rounded-xl bg-gradient-to-r from-sky-950/40 to-cyan-950/40 border border-sky-500/20 text-xs flex items-center justify-between">
                <div>
                  <span className="text-[0.625rem] font-mono text-sky-400 block uppercase">Featured Concept</span>
                  <span className="text-white font-semibold">RoomRush · Hostel Marketplace</span>
                </div>
                <span className="text-[0.625rem] font-mono px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-500/30">
                  In Dev
                </span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="relative z-10 mx-auto mt-8 flex flex-col items-center">
        <button
          type="button"
          onClick={() => scrollToHash('#about')}
          className="flex flex-col items-center gap-2 text-slate-400 hover:text-cyan-300 transition-colors group cursor-pointer"
          aria-label="Scroll down to About section"
        >
          <span className="text-[0.6875rem] font-mono uppercase tracking-widest group-hover:tracking-wider transition-all">
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="p-1 rounded-full border border-white/10 group-hover:border-cyan-400/40"
          >
            <ArrowDown className="size-3.5" />
          </motion.div>
        </button>
      </div>
    </section>
  );
}
