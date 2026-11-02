import { useEffect, useRef, useState } from 'react';
import { projects, ProjectDetail } from '../content';
import { clamp, pinProgress, range } from '../lib/math';
import { onFrame } from '../lib/scroll';
import { ProjectModal } from './ProjectModal';

/**
 * Projects Showcase as a Mission Log Reel:
 * The section pins for 340vh and slides horizontally with the scroll.
 * The card nearest the focus line stays in full crisp focus while neighboring
 * frames dim back and drift with parallax.
 */

const SECTION_VH = 340;

export function ProjectsReel() {
  const rootRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLOListElement>(null);
  const cardRefs = useRef<HTMLLIElement[]>([]);
  const imgRefs = useRef<HTMLImageElement[]>([]);
  const barRef = useRef<HTMLSpanElement>(null);
  const countRef = useRef<HTMLSpanElement>(null);

  const [activeProject, setActiveProject] = useState<ProjectDetail | null>(null);

  useEffect(() => {
    let lastP = -1;
    return onFrame(() => {
      const root = rootRef.current;
      const track = trackRef.current;
      if (!root || !track) return;
      const { p, rect, vh } = pinProgress(root);
      if (rect.bottom < 0 || rect.top > vh) return;
      if (Math.abs(p - lastP) < 0.00005) return;
      lastP = p;

      const vw = window.innerWidth;
      const k = range(p, 0.04, 0.96);
      const travel = Math.max(0, track.offsetLeft + track.scrollWidth - vw * 0.94);
      track.style.transform = `translate3d(${-k * travel}px, 0, 0)`;

      let nearest = 0;
      let best = Infinity;
      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        const r = card.getBoundingClientRect();
        const off = (r.left + r.width / 2 - vw * 0.62) / vw;
        const a = clamp(Math.abs(off) * 1.6);
        card.style.opacity = String(1 - a * 0.55);
        card.style.transform = `scale(${1 - a * 0.07})`;
        if (imgRefs.current[i]) {
          imgRefs.current[i].style.transform = `translate3d(${off * -50}px, 0, 0) scale(1.15)`;
        }
        if (Math.abs(off) < best) {
          best = Math.abs(off);
          nearest = i;
        }
      });
      if (barRef.current) barRef.current.style.transform = `scaleX(${k})`;
      if (countRef.current) countRef.current.textContent = `0${nearest + 1}`;
    });
  }, []);

  return (
    <>
      <section
        ref={rootRef}
        id="projects"
        aria-labelledby="projects-title"
        className="relative bg-void border-t border-white/10"
        style={{ height: `${SECTION_VH}svh` }}
      >
        <div className="sticky top-0 flex h-screen-s flex-col justify-center overflow-hidden pt-16 md:flex-row md:items-center md:pt-0">
          
          {/* Section Info Column */}
          <div className="relative z-10 shrink-0 px-4 sm:px-6 md:w-[34vw] md:pl-[6vw] md:pr-10">
            <p className="font-mono text-label text-earth uppercase tracking-[0.2em]">
              // {projects.eyebrow}
            </p>
            <h2 id="projects-title" className="mt-4 font-display text-display text-white">
              {projects.heading}
            </h2>
            <p className="mt-5 max-w-[26rem] text-body text-regolith/70 font-light max-md:hidden">
              {projects.body}
            </p>

            {/* Active Card Telemetry Progress */}
            <div
              className="mt-8 flex items-center gap-4 font-mono text-label text-regolith/60 uppercase max-md:hidden"
              aria-hidden="true"
            >
              <span>
                <span ref={countRef} className="text-white font-bold">
                  01
                </span>{' '}
                / 0{projects.items.length}
              </span>
              <span className="relative h-px w-32 bg-white/15">
                <span
                  ref={barRef}
                  className="absolute inset-0 origin-left bg-earth"
                  style={{ transform: 'scaleX(0)' }}
                />
              </span>
            </div>
          </div>

          {/* Horizontal Track of Project Cards */}
          <ol
            ref={trackRef}
            className="mt-8 flex gap-6 pl-4 will-change-transform sm:pl-6 md:mt-0 md:gap-8 md:pl-0"
          >
            {projects.items.map((entry, i) => (
              <li
                key={entry.id}
                ref={(el) => {
                  if (el) cardRefs.current[i] = el;
                }}
                className="w-[78vw] shrink-0 origin-bottom sm:w-[48vw] md:w-[clamp(18rem,26vw,25rem)]"
              >
                <div className="flex flex-col rounded-[8px] bg-void-2 p-5 border border-white/10 brackets relative transition-colors hover:border-earth/40">
                  
                  {/* Visual Image Banner with drifting parallax */}
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[4px] bg-void-3">
                    <img
                      ref={(el) => {
                        if (el) imgRefs.current[i] = el;
                      }}
                      src={entry.image}
                      alt={entry.title}
                      width={840}
                      height={525}
                      loading="lazy"
                      decoding="async"
                      className="size-full object-cover will-change-transform"
                    />
                    <span className="absolute top-2.5 left-2.5 rounded-[3px] bg-void/80 px-2 py-0.5 font-mono text-[0.625rem] tracking-[0.14em] text-white uppercase backdrop-blur border border-white/10">
                      {entry.tag}
                    </span>
                    <span className="absolute top-2.5 right-2.5 rounded-[3px] bg-earth/20 px-2 py-0.5 font-mono text-[0.625rem] tracking-[0.14em] text-earth uppercase backdrop-blur border border-earth/30">
                      {entry.status}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="mt-4 flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex items-baseline gap-3 mb-1">
                        <span className="font-mono text-label text-earth font-bold">0{i + 1}</span>
                        <span className="font-mono text-[0.625rem] uppercase text-regolith/50 tracking-wider">
                          {entry.category}
                        </span>
                      </div>

                      <h3 className="font-display text-[1.125rem] tracking-[0.06em] text-white uppercase">
                        {entry.title}
                      </h3>
                      <p className="font-mono text-[0.6875rem] text-regolith/60 mt-0.5">
                        {entry.subtitle}
                      </p>

                      <p className="mt-3 text-[0.8125rem] leading-relaxed text-regolith/75 font-light line-clamp-3">
                        {entry.description}
                      </p>
                    </div>

                    {/* Tech Badges & Action Buttons */}
                    <div className="mt-5 pt-4 border-t border-white/10">
                      <div className="flex flex-wrap gap-1 mb-4">
                        {entry.tech.slice(0, 3).map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 rounded bg-white/5 font-mono text-[0.625rem] text-regolith/60"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between gap-2">
                        <button
                          type="button"
                          onClick={() => setActiveProject(entry)}
                          className="px-3 py-1.5 rounded-[3px] bg-white text-void font-mono text-[0.6875rem] uppercase font-bold tracking-wider hover:bg-earth transition-colors cursor-pointer"
                        >
                          View Details [↗]
                        </button>

                        <div className="flex items-center gap-2">
                          <a
                            href={entry.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-2.5 py-1 rounded-[3px] border border-white/15 font-mono text-[0.625rem] text-regolith hover:text-white uppercase hover:border-earth transition-colors"
                          >
                            GitHub
                          </a>
                          {entry.hasLiveDemo ? (
                            <a
                              href={entry.liveUrl}
                              className="px-2.5 py-1 rounded-[3px] bg-earth/15 text-earth border border-earth/30 font-mono text-[0.625rem] uppercase hover:bg-earth/25 transition-colors"
                            >
                              Live
                            </a>
                          ) : (
                            <span className="font-mono text-[0.625rem] text-regolith/40 uppercase">
                              Coming Soon
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Project Detail Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </>
  );
}
