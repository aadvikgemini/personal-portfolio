import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Info, Sparkles, AlertCircle, ArrowUpRight } from 'lucide-react';
import { projectsContent, ProjectDetail } from '../content';
import { ProjectModal } from './ProjectModal';
import { GithubIcon } from './Icons';

export function ProjectsShowcase() {
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);

  return (
    <section
      id="projects"
      aria-label="Things I'm Building"
      className="relative min-h-screen w-full bg-[#07090e] py-24 sm:py-32 border-t border-white/5 tech-grid"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
            <Sparkles className="size-3.5" />
            <span>{projectsContent.subheading}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {projectsContent.heading}
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl font-light">
            {projectsContent.note}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsContent.items.map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col justify-between rounded-2xl bg-[#0b0f17]/85 border border-sky-500/20 hover:border-sky-400/40 p-6 sm:p-7 backdrop-blur-xl shadow-xl transition-all duration-300 hover:shadow-[0_10px_35px_-10px_rgba(56,189,248,0.15)] group relative overflow-hidden"
            >
              {/* Top Meta info */}
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[0.6875rem] font-mono uppercase bg-sky-500/10 text-sky-300 px-2.5 py-0.5 rounded border border-sky-500/20">
                      {proj.category}
                    </span>
                    <span className="text-[0.6875rem] font-mono uppercase bg-cyan-500/10 text-cyan-300 px-2.5 py-0.5 rounded border border-cyan-500/20">
                      {proj.status}
                    </span>
                  </div>

                  <span className="text-xs font-mono text-slate-500 font-semibold">
                    0{idx + 1}
                  </span>
                </div>

                {/* Project Visual Schematic Card */}
                <div className="w-full h-44 rounded-xl bg-gradient-to-br from-[#0e1422] to-[#070a10] border border-white/10 p-4 mb-6 flex flex-col justify-between relative overflow-hidden group-hover:border-sky-500/30 transition-colors">
                  {/* Background grid dots */}
                  <div className="absolute inset-0 tech-grid-dots opacity-30 pointer-events-none" />

                  {/* Top Schematic Header */}
                  <div className="relative z-10 flex items-center justify-between text-[0.625rem] font-mono text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <span className="size-1.5 rounded-full bg-cyan-400" />
                      <span>{proj.badge}</span>
                    </span>
                    <span className="text-slate-500">SPEC_ID: {proj.id.toUpperCase()}</span>
                  </div>

                  {/* Middle Schematic Illustration */}
                  <div className="relative z-10 my-auto flex items-center justify-center">
                    {proj.id === 'roomrush' && (
                      <div className="flex items-center gap-4 text-xs font-mono text-slate-300">
                        <div className="px-3 py-1.5 rounded bg-sky-950/60 border border-sky-500/30 text-sky-300">
                          Residences R1-R4
                        </div>
                        <span className="text-cyan-400">➔</span>
                        <div className="px-3 py-1.5 rounded bg-cyan-950/60 border border-cyan-500/30 text-cyan-300">
                          Hostel Micro-Shop
                        </div>
                        <span className="text-cyan-400">➔</span>
                        <div className="px-3 py-1.5 rounded bg-emerald-950/60 border border-emerald-500/30 text-emerald-300">
                          Self-Pickup
                        </div>
                      </div>
                    )}

                    {proj.id === 'nst-notes-extension' && (
                      <div className="w-full max-w-xs p-2.5 rounded-lg bg-[#07090e] border border-white/10 text-[0.6875rem] font-mono text-slate-300">
                        <div className="flex items-center justify-between pb-1.5 border-b border-white/10 text-slate-400">
                          <span>NST Notes Chrome Ext</span>
                          <span className="text-cyan-400">v1.0 (Dev)</span>
                        </div>
                        <div className="pt-2 flex justify-between text-xs">
                          <span className="text-sky-300">📁 CS Modules</span>
                          <span className="text-slate-400">1-Click Fast Sync</span>
                        </div>
                      </div>
                    )}

                    {proj.id === 'sih-lidar-mapping' && (
                      <div className="flex items-center gap-3 font-mono text-xs text-slate-300">
                        <div className="p-2 rounded bg-purple-950/50 border border-purple-500/30 text-purple-300">
                          LiDAR Sensor
                        </div>
                        <span className="text-purple-400">⟷</span>
                        <div className="p-2 rounded bg-sky-950/50 border border-sky-500/30 text-sky-300">
                          Adaptive 2.5D Grid
                        </div>
                        <span className="text-sky-400">⟷</span>
                        <div className="p-2 rounded bg-cyan-950/50 border border-cyan-500/30 text-cyan-300">
                          Smart Vehicle
                        </div>
                      </div>
                    )}

                    {proj.id === 'personal-portfolio' && (
                      <div className="flex items-center gap-3 font-mono text-xs text-slate-300">
                        <div className="p-2 rounded bg-sky-950/50 border border-sky-500/30 text-sky-300">
                          React 19 + Vite
                        </div>
                        <span className="text-sky-400">+</span>
                        <div className="p-2 rounded bg-cyan-950/50 border border-cyan-500/30 text-cyan-300">
                          Tailwind & Motion
                        </div>
                        <span className="text-cyan-400">+</span>
                        <div className="p-2 rounded bg-emerald-950/50 border border-emerald-500/30 text-emerald-300">
                          Verified Bio
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Bottom Schematic Footer */}
                  <div className="relative z-10 flex items-center justify-between text-[0.625rem] font-mono text-slate-400">
                    <span>{proj.tech.slice(0, 3).join(' · ')}</span>
                    <span className="text-cyan-400 flex items-center gap-1">
                      <span>Explore Architecture</span>
                      <ArrowUpRight className="size-3" />
                    </span>
                  </div>
                </div>

                {/* Project Title & Tagline */}
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {proj.title}
                </h3>
                <p className="text-xs font-mono text-sky-400 mt-1 mb-3">
                  {proj.tagline}
                </p>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed font-light mb-4">
                  {proj.description}
                </p>

                {/* Notice pill if present */}
                {proj.specificNotice && (
                  <div className="mb-4 p-2.5 rounded-lg bg-cyan-950/30 border border-cyan-500/30 text-xs text-cyan-200 flex items-center gap-2">
                    <AlertCircle className="size-3.5 text-cyan-400 shrink-0" />
                    <span className="font-mono text-[0.6875rem]">{proj.specificNotice}</span>
                  </div>
                )}

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {proj.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 rounded-md bg-[#111723] border border-white/5 text-[0.6875rem] font-mono text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions: GitHub, Live Demo / Coming Soon, View Details */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  {/* GitHub button */}
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#111723] hover:bg-[#161f30] border border-white/10 hover:border-sky-500/40 text-xs text-slate-200 transition-colors"
                  >
                    <GithubIcon className="size-3.5 text-sky-400" />
                    <span>GitHub</span>
                  </a>

                  {/* Live demo button */}
                  {proj.hasLiveDemo ? (
                    <a
                      href={proj.liveUrl}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-500/20 hover:bg-sky-500/30 border border-sky-400/40 text-xs text-sky-200 transition-colors"
                    >
                      <span>{proj.demoLabel}</span>
                      <ExternalLink className="size-3" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-xs font-mono text-slate-500 cursor-default">
                      <span>{proj.demoLabel}</span>
                    </span>
                  )}
                </div>

                {/* View Details modal trigger button */}
                <button
                  type="button"
                  onClick={() => setSelectedProject(proj)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-400 hover:to-cyan-400 text-slate-950 font-bold text-xs shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <Info className="size-3.5" />
                  <span>View Details</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
