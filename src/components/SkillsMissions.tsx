import { skillsData } from '../content';
import { useReveals } from '../hooks/useReveals';
import { scrollToHash } from '../lib/scroll';

export function SkillsMissions() {
  const ref = useReveals<HTMLElement>();

  return (
    <section
      ref={ref}
      id="skills"
      aria-labelledby="skills-title"
      className="relative bg-void px-4 py-28 sm:px-6 md:px-[6vw] md:py-36 border-t border-white/10"
    >
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between" data-reveal>
        <div>
          <p className="font-mono text-label text-earth uppercase tracking-[0.2em]">
            // {skillsData.eyebrow}
          </p>
          <h2 id="skills-title" className="mt-4 font-display text-display text-white">
            {skillsData.heading}
          </h2>
        </div>
        <p className="font-mono text-label text-regolith/50 uppercase">{skillsData.note}</p>
      </div>

      <ol className="mt-14 grid gap-5 md:mt-20 md:grid-cols-3 md:gap-6">
        {skillsData.classes.map((m, i) => (
          <li
            key={m.name}
            data-reveal
            style={{ transitionDelay: `${i * 110}ms` }}
            className={`group relative flex flex-col justify-between overflow-hidden rounded-[8px] p-6 sm:p-8 ring-1 transition-[transform,box-shadow] duration-500 hover:-translate-y-1.5 ${
              m.featured
                ? 'bg-void-2 ring-earth/60 hover:shadow-[0_30px_80px_-30px_rgb(111_182_255/0.45)]'
                : 'bg-void-2/60 ring-white/10 hover:ring-white/25'
            }`}
          >
            {/* Orbit rings — one per skill/focus level rotating on hover */}
            <svg
              aria-hidden="true"
              viewBox="0 0 200 200"
              className="absolute -top-10 -right-10 size-48 text-white/10 transition-transform duration-[1.2s] group-hover:rotate-45 pointer-events-none"
            >
              {Array.from({ length: m.days }, (_, k) => (
                <ellipse
                  key={k}
                  cx="100"
                  cy="100"
                  rx={40 + k * 18}
                  ry={18 + k * 8}
                  fill="none"
                  stroke="currentColor"
                  transform={`rotate(${-20 + k * 14} 100 100)`}
                />
              ))}
              <circle cx="100" cy="100" r="9" fill="currentColor" />
            </svg>

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[0.625rem] text-earth uppercase tracking-widest bg-earth/10 px-2 py-0.5 rounded border border-earth/20">
                  {m.badge}
                </span>
                <span className="font-mono text-[0.625rem] text-regolith/50 uppercase">
                  STATUS: {m.status}
                </span>
              </div>

              <h3 className="font-display text-[1.25rem] tracking-[0.1em] text-white uppercase mt-2">
                {m.name}
              </h3>

              <p className="mt-4 flex items-baseline gap-2">
                <span className="font-display text-[2.75rem] leading-none text-white">
                  0{m.days}
                </span>
                <span className="font-mono text-label text-regolith/60 uppercase">
                  Core Modules
                </span>
              </p>

              <ul className="mt-8 space-y-3 border-t border-white/10 pt-6">
                {m.skills.map((l) => (
                  <li key={l} className="flex gap-3 text-[0.875rem] text-regolith/85 font-mono">
                    <span aria-hidden="true" className="mt-1.5 size-1.5 shrink-0 rounded-full bg-earth" />
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              type="button"
              onClick={() => scrollToHash('#contact')}
              className={`mt-10 w-full rounded-[4px] px-5 py-3.5 text-center font-mono text-label uppercase font-bold tracking-wider transition-colors cursor-pointer ${
                m.featured
                  ? 'bg-earth text-void hover:bg-white'
                  : 'text-white ring-1 ring-white/25 hover:bg-white hover:text-void'
              }`}
            >
              Collaborate on this Track →
            </button>
          </li>
        ))}
      </ol>
    </section>
  );
}
