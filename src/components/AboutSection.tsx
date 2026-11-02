import { about } from '../content';
import { useReveals } from '../hooks/useReveals';

export function AboutSection() {
  const ref = useReveals<HTMLElement>();

  return (
    <section
      ref={ref}
      id="about"
      aria-labelledby="about-title"
      className="relative bg-void px-4 py-28 sm:px-6 md:px-[6vw] md:py-36 border-t border-white/10"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div data-reveal className="max-w-3xl">
          <p className="font-mono text-label text-earth uppercase tracking-[0.2em]">
            // {about.eyebrow}
          </p>
          <h2 id="about-title" className="mt-4 font-display text-display text-white">
            {about.heading}
          </h2>
        </div>

        {/* Narrative & Education Card Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Narrative */}
          <div data-reveal className="lg:col-span-7 space-y-6">
            <div className="rounded-[6px] bg-void-2/80 p-6 sm:p-8 border border-white/10 brackets relative">
              <span className="font-mono text-[0.625rem] text-earth uppercase tracking-widest block mb-4">
                TRANSMISSION // STUDENT STATEMENT
              </span>
              <div className="space-y-4 text-body text-regolith/85 font-light leading-relaxed">
                {about.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
              <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between text-xs font-mono text-regolith/50">
                <span>NEWTON SCHOOL OF TECHNOLOGY</span>
                <span className="text-earth">STATUS: LEARNING & BUILDING</span>
              </div>
            </div>
          </div>

          {/* Right Column: Academic Foundations Card */}
          <div data-reveal className="lg:col-span-5">
            <div className="rounded-[6px] bg-void-2 p-6 sm:p-7 border border-earth/30 brackets relative">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="font-mono text-[0.625rem] uppercase tracking-widest text-earth">
                  ACADEMIC SPECIFICATION
                </span>
                <span className="font-mono text-[0.625rem] bg-earth/15 text-earth px-2 py-0.5 rounded">
                  {about.education.period}
                </span>
              </div>

              <div className="mt-5 space-y-4">
                <div>
                  <span className="font-mono text-label text-regolith/50 uppercase block">Degree Program</span>
                  <h3 className="font-display text-[1.125rem] text-white mt-1 tracking-wide">
                    {about.education.degree}
                  </h3>
                </div>

                <div className="space-y-1 font-mono text-xs text-regolith/80">
                  <p className="text-white font-medium">{about.education.school}</p>
                  <p className="text-regolith/60">{about.education.university}</p>
                  <p className="text-earth/80 pt-1">{about.education.location}</p>
                </div>

                <p className="text-xs text-regolith/70 font-light leading-relaxed pt-2 border-t border-white/5">
                  {about.education.note}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Current Interests Grid */}
        <div className="mt-20">
          <div data-reveal className="flex items-center justify-between mb-8 pb-3 border-b border-white/10">
            <div>
              <p className="font-mono text-label text-earth uppercase tracking-[0.2em]">// AREAS OF STUDY</p>
              <h3 className="font-display text-[1.5rem] text-white mt-1 tracking-wide">
                Current Technical Interests
              </h3>
            </div>
            <span className="font-mono text-label text-regolith/50 uppercase hidden sm:inline">
              8 SPECIALIZATION PATHS
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {about.interests.map((item, i) => (
              <div
                key={item.title}
                data-reveal
                style={{ transitionDelay: `${i * 60}ms` }}
                className="rounded-[6px] bg-void-2/60 p-5 border border-white/10 hover:border-earth/40 transition-colors group"
              >
                <div className="flex items-center justify-between font-mono text-[0.625rem] text-regolith/50 uppercase mb-3">
                  <span>0{i + 1}</span>
                  <span className="text-earth">{item.category}</span>
                </div>
                <h4 className="font-display text-[0.9375rem] text-white tracking-wide group-hover:text-earth transition-colors">
                  {item.title}
                </h4>
                <p className="mt-2 text-xs text-regolith/70 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Long-Term Development Goals */}
        <div className="mt-20">
          <div data-reveal className="flex items-center justify-between mb-8 pb-3 border-b border-white/10">
            <div>
              <p className="font-mono text-label text-earth uppercase tracking-[0.2em]">// HORIZON</p>
              <h3 className="font-display text-[1.5rem] text-white mt-1 tracking-wide">
                Long-Term Development Goals
              </h3>
            </div>
            <span className="font-mono text-label text-regolith/50 uppercase hidden sm:inline">
              SYSTEM MILESTONES
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {about.goals.map((g, i) => (
              <div
                key={g.id}
                data-reveal
                style={{ transitionDelay: `${i * 80}ms` }}
                className="rounded-[6px] bg-void-2/40 p-5 border border-white/10 hover:border-white/25 transition-colors brackets relative"
              >
                <span className="font-mono text-label text-earth block mb-2">{g.id}</span>
                <h4 className="font-display text-[0.9375rem] text-white tracking-wide">
                  {g.goal}
                </h4>
                <p className="mt-2 text-xs text-regolith/70 font-light leading-relaxed font-sans">
                  {g.focus}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
