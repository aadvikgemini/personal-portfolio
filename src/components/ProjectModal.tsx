import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Sparkles, CheckCircle, AlertCircle, Layers, Users } from 'lucide-react';
import { ProjectDetail } from '../content';
import { GithubIcon } from './Icons';

interface ProjectModalProps {
  project: ProjectDetail | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Lock background scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0b0e15] border border-sky-500/30 p-6 sm:p-8 shadow-2xl z-10 text-slate-200"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close project modal"
          >
            <X className="size-5" />
          </button>

          {/* Modal Header */}
          <div className="pr-8">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs font-mono uppercase bg-sky-500/15 text-sky-300 px-2.5 py-0.5 rounded border border-sky-500/30">
                {project.category}
              </span>
              <span className="text-xs font-mono uppercase bg-cyan-500/15 text-cyan-300 px-2.5 py-0.5 rounded border border-cyan-500/30">
                {project.status}
              </span>
              {project.team && (
                <span className="text-xs font-mono uppercase bg-purple-500/15 text-purple-300 px-2.5 py-0.5 rounded border border-purple-500/30 flex items-center gap-1">
                  <Users className="size-3" />
                  {project.team}
                </span>
              )}
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {project.title}
            </h3>
            <p className="text-slate-400 text-sm mt-1">{project.tagline}</p>
          </div>

          {/* Important Notice Callout if applicable (e.g. RoomRush self-pickup) */}
          {project.specificNotice && (
            <div className="mt-5 p-3.5 rounded-xl bg-cyan-950/40 border border-cyan-500/40 flex items-start gap-3 text-xs text-cyan-200">
              <AlertCircle className="size-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>{project.specificNotice}</span>
            </div>
          )}

          {/* Modal Content Sections */}
          <div className="mt-6 space-y-6 text-sm">
            
            {/* Overview */}
            <div>
              <h4 className="text-xs font-mono uppercase text-sky-400 mb-1.5 flex items-center gap-1.5 font-semibold">
                <Sparkles className="size-3.5" />
                <span>Project Overview</span>
              </h4>
              <p className="text-slate-300 leading-relaxed font-light">{project.overview}</p>
            </div>

            {/* Problem & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#0e131e] border border-white/5">
                <span className="text-xs font-mono uppercase text-rose-400 font-semibold block mb-1">
                  The Problem
                </span>
                <p className="text-slate-300 text-xs leading-relaxed">{project.problem}</p>
              </div>

              <div className="p-4 rounded-xl bg-[#0e131e] border border-white/5">
                <span className="text-xs font-mono uppercase text-emerald-400 font-semibold block mb-1">
                  Proposed Solution
                </span>
                <p className="text-slate-300 text-xs leading-relaxed">{project.solution}</p>
              </div>
            </div>

            {/* My Contribution */}
            <div>
              <h4 className="text-xs font-mono uppercase text-sky-400 mb-1.5 flex items-center gap-1.5 font-semibold">
                <CheckCircle className="size-3.5" />
                <span>My Contribution</span>
              </h4>
              <p className="text-slate-300 leading-relaxed font-light">{project.contribution}</p>
            </div>

            {/* Technology Stack */}
            <div>
              <h4 className="text-xs font-mono uppercase text-sky-400 mb-2 flex items-center gap-1.5 font-semibold">
                <Layers className="size-3.5" />
                <span>Technology Stack</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-lg bg-[#141b27] border border-white/10 text-xs font-mono text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Current Status */}
            <div>
              <h4 className="text-xs font-mono uppercase text-sky-400 mb-1.5 font-semibold">
                Current Status
              </h4>
              <div className="p-3.5 rounded-xl bg-[#0e131e] border border-white/5 text-xs text-slate-300 font-mono">
                {project.currentStatus}
              </div>
            </div>

            {/* Future Improvements */}
            <div>
              <h4 className="text-xs font-mono uppercase text-sky-400 mb-2 font-semibold">
                Future Improvements & Roadmap
              </h4>
              <ul className="space-y-2">
                {project.futureImprovements.map((imp, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <span className="size-1.5 rounded-full bg-cyan-400 shrink-0 mt-1.5" />
                    <span>{imp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Modal Footer Actions */}
          <div className="mt-8 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#141b27] hover:bg-[#1a2333] border border-white/15 text-xs font-medium text-white transition-colors"
              >
                <GithubIcon className="size-3.5 text-sky-400" />
                <span>GitHub Repository</span>
              </a>

              {project.hasLiveDemo ? (
                <a
                  href={project.liveUrl}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 text-slate-950 font-bold text-xs shadow-md hover:scale-105 transition-transform"
                >
                  <span>{project.demoLabel}</span>
                  <ExternalLink className="size-3.5" />
                </a>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-slate-400 cursor-not-allowed">
                  <span>{project.demoLabel}</span>
                </span>
              )}
            </div>

            <button
              type="button"
              onClick={onClose}
              className="text-xs font-mono text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              Close Window [Esc]
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
