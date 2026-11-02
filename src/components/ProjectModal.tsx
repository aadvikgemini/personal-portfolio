import { useEffect } from 'react';
import { ProjectDetail } from '../content';

interface ProjectModalProps {
  project: ProjectDetail | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
      {/* Backdrop */}
      <div
        onClick={onClose}
        aria-hidden="true"
        className="fixed inset-0 bg-void/90 backdrop-blur-md transition-opacity"
      />

      {/* Modal Dialog */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-[8px] bg-void-2 border border-earth/40 p-6 sm:p-8 shadow-2xl z-10 text-regolith brackets"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 px-3 py-1 rounded bg-white/5 hover:bg-white/10 text-regolith hover:text-white font-mono text-[0.6875rem] uppercase tracking-wider transition-colors cursor-pointer"
        >
          Close [Esc]
        </button>

        {/* Modal Header */}
        <div className="pr-12">
          <div className="flex flex-wrap items-center gap-2 mb-2 font-mono text-[0.625rem] uppercase tracking-widest">
            <span className="bg-earth/20 text-earth px-2 py-0.5 rounded border border-earth/30 font-semibold">
              {project.tag}
            </span>
            <span className="bg-white/5 text-regolith/80 px-2 py-0.5 rounded border border-white/10">
              {project.category}
            </span>
            <span className="bg-void text-earth px-2 py-0.5 rounded border border-earth/20">
              STATUS: {project.status}
            </span>
            {project.team && (
              <span className="bg-void text-sunlit px-2 py-0.5 rounded border border-sunlit/30">
                TEAM: {project.team}
              </span>
            )}
          </div>

          <h3 id="modal-project-title" className="font-display text-2xl sm:text-3xl text-white tracking-wide mt-2">
            {project.title}
          </h3>
          <p className="font-mono text-xs text-regolith/60 mt-1">{project.subtitle}</p>
        </div>

        {/* Important Notice Callout if applicable */}
        {project.specificNotice && (
          <div className="mt-5 p-3.5 rounded-[4px] bg-earth/10 border border-earth/30 flex items-start gap-3 font-mono text-xs text-earth">
            <span className="font-bold shrink-0">NOTICE:</span>
            <span>{project.specificNotice}</span>
          </div>
        )}

        {/* Modal Content Sections */}
        <div className="mt-6 space-y-6 text-sm">
          {/* Overview */}
          <div>
            <h4 className="font-mono text-label text-earth uppercase tracking-widest mb-1.5 font-bold">
              // PROJECT OVERVIEW
            </h4>
            <p className="text-body text-regolith/85 font-light leading-relaxed">{project.overview}</p>
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-[4px] bg-void border border-white/10">
              <span className="font-mono text-[0.625rem] uppercase tracking-widest text-red-400 block mb-1.5 font-bold">
                PROBLEM STATEMENT
              </span>
              <p className="text-xs text-regolith/80 leading-relaxed font-light">{project.problem}</p>
            </div>

            <div className="p-4 rounded-[4px] bg-void border border-white/10">
              <span className="font-mono text-[0.625rem] uppercase tracking-widest text-emerald-400 block mb-1.5 font-bold">
                PROPOSED SOLUTION
              </span>
              <p className="text-xs text-regolith/80 leading-relaxed font-light">{project.solution}</p>
            </div>
          </div>

          {/* Contribution */}
          <div>
            <h4 className="font-mono text-label text-earth uppercase tracking-widest mb-1.5 font-bold">
              // MY CONTRIBUTION
            </h4>
            <p className="text-body text-regolith/85 font-light leading-relaxed">{project.contribution}</p>
          </div>

          {/* Technology Stack */}
          <div>
            <h4 className="font-mono text-label text-earth uppercase tracking-widest mb-2 font-bold">
              // TECHNOLOGY STACK
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-[3px] bg-void border border-white/10 font-mono text-xs text-regolith/90"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Current Status */}
          <div>
            <h4 className="font-mono text-label text-earth uppercase tracking-widest mb-1.5 font-bold">
              // CURRENT STATUS
            </h4>
            <div className="p-3 rounded-[4px] bg-void border border-white/10 font-mono text-xs text-earth">
              {project.currentStatus}
            </div>
          </div>

          {/* Future Improvements */}
          <div>
            <h4 className="font-mono text-label text-earth uppercase tracking-widest mb-2 font-bold">
              // FUTURE ROADMAP
            </h4>
            <ul className="space-y-2">
              {project.futureImprovements.map((imp, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-regolith/80 font-light">
                  <span className="font-mono text-earth mt-0.5">➔</span>
                  <span>{imp}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="mt-8 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-[4px] bg-white/10 hover:bg-white/20 border border-white/20 text-white uppercase tracking-wider transition-colors"
            >
              GitHub Repository
            </a>

            {project.hasLiveDemo ? (
              <a
                href={project.liveUrl}
                className="px-4 py-2 rounded-[4px] bg-earth text-void font-bold uppercase tracking-wider hover:bg-white transition-colors"
              >
                {project.demoLabel} ↗
              </a>
            ) : (
              <span className="px-4 py-2 rounded-[4px] bg-white/5 border border-white/5 text-regolith/40 uppercase">
                {project.demoLabel}
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="text-regolith/50 hover:text-white uppercase transition-colors cursor-pointer"
          >
            [ESC] Dismiss
          </button>
        </div>
      </div>
    </div>
  );
}
