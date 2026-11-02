import { currentlyExploringData } from '../content';
import { useReveals } from '../hooks/useReveals';

export function CurrentlyExploring() {
  const ref = useReveals<HTMLElement>();

  return (
    <section
      ref={ref}
      id="exploring"
      aria-labelledby="exploring-title"
      className="relative bg-void px-4 py-28 sm:px-6 md:px-[6vw] md:py-36 border-t border-white/10"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div data-reveal className="max-w-3xl">
          <p className="font-mono text-label text-earth uppercase tracking-[0.2em]">
            // {currentlyExploringData.eyebrow}
          </p>
          <h2 id="exploring-title" className="mt-4 font-display text-display text-white">
            {currentlyExploringData.heading}
          </h2>
          <p className="mt-3 font-mono text-label text-regolith/50 uppercase">
            {currentlyExploringData.note}
          </p>
        </div>

        {/* Telemetry Dashboard Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {currentlyExploringData.topics.map((t, idx) => (
            <div
              key={t.id}
              data-reveal
              style={{ transitionDelay: `${idx * 50}ms` }}
              className="flex flex-col justify-between rounded-[6px] bg-void-2/80 p-5 border border-white/10 brackets relative transition-colors hover:border-earth/40 group"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-[0.625rem] text-regolith/50 uppercase mb-3 pb-2 border-b border-white/5">
                  <span>EXP_NODE 0{idx + 1}</span>
                  <span className="flex items-center gap-1.5 text-earth">
                    <span className="size-1 rounded-full bg-earth animate-pulse" />
                    <span>{t.track}</span>
                  </span>
                </div>

                <h3 className="font-display text-[0.9375rem] text-white tracking-wide uppercase group-hover:text-earth transition-colors">
                  {t.title}
                </h3>

                <p className="mt-2.5 text-xs text-regolith/75 font-light leading-relaxed">
                  {t.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between font-mono text-[0.625rem] text-regolith/40">
                <span>DAILY CADENCE</span>
                <span className="text-white/60">ACTIVE</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
