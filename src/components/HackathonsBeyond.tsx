import { hackathonsData } from '../content';
import { useReveals } from '../hooks/useReveals';

export function HackathonsBeyond() {
  const ref = useReveals<HTMLElement>();

  return (
    <section
      ref={ref}
      id="activities"
      aria-labelledby="activities-title"
      className="relative bg-void px-4 py-28 sm:px-6 md:px-[6vw] md:py-36 border-t border-white/10"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div data-reveal className="max-w-3xl">
          <p className="font-mono text-label text-earth uppercase tracking-[0.2em]">
            // {hackathonsData.eyebrow}
          </p>
          <h2 id="activities-title" className="mt-4 font-display text-display text-white">
            {hackathonsData.heading}
          </h2>
          <p className="mt-3 font-mono text-label text-regolith/50 uppercase">
            {hackathonsData.note}
          </p>
        </div>

        {/* Hackathon Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {hackathonsData.items.map((item, idx) => (
            <div
              key={item.id}
              data-reveal
              style={{ transitionDelay: `${idx * 100}ms` }}
              className="flex flex-col justify-between rounded-[8px] bg-void-2 p-6 sm:p-7 border border-white/10 brackets relative transition-colors hover:border-earth/40"
            >
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10 font-mono text-[0.625rem]">
                  <span className="text-earth font-bold tracking-widest uppercase">
                    {item.year} · {item.badge}
                  </span>
                  <span className="text-regolith/50 uppercase">
                    {item.category}
                  </span>
                </div>

                {/* Event Name & Project */}
                <h3 className="font-display text-[1.125rem] text-white tracking-wide uppercase">
                  {item.name}
                </h3>

                <div className="mt-3 p-3 rounded-[4px] bg-void border border-white/5 font-mono text-xs">
                  <span className="text-[0.625rem] text-regolith/50 uppercase block">PROJECT FOCUS:</span>
                  <span className="text-white font-medium">{item.project}</span>
                  <span className="text-earth text-[0.6875rem] block mt-1">Role: {item.teamRole}</span>
                </div>

                <p className="mt-4 text-xs text-regolith/80 leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10">
                <div className="mb-3">
                  <span className="font-mono text-[0.625rem] uppercase text-earth block mb-0.5">
                    KEY TAKEAWAY:
                  </span>
                  <p className="text-[0.75rem] text-regolith/70 italic font-sans">
                    "{item.takeaway}"
                  </p>
                </div>

                <div className="flex items-center justify-between font-mono text-[0.625rem] pt-2 border-t border-white/5">
                  <span className="text-regolith/50">STATUS:</span>
                  <span className="text-earth bg-earth/10 px-2 py-0.5 rounded border border-earth/20 font-bold uppercase">
                    {item.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
