import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Compass } from 'lucide-react';
import { journeyContent, JourneyMilestone } from '../content';

export function JourneySection() {
  const [selectedMilestone, setSelectedMilestone] = useState<number>(0);

  return (
    <section
      id="journey"
      aria-label="The Journey So Far"
      className="relative min-h-screen w-full bg-[#07090e] py-24 sm:py-32 border-t border-white/5 tech-grid"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
            <Compass className="size-3.5" />
            <span>{journeyContent.subheading}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {journeyContent.heading}
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl font-light">
            {journeyContent.note}
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l-2 border-sky-500/20 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {journeyContent.milestones.map((m: JourneyMilestone, idx: number) => {
            const isSelected = selectedMilestone === idx;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => setSelectedMilestone(idx)}
                className={`relative group cursor-pointer transition-all ${
                  isSelected ? 'scale-[1.01]' : 'opacity-85 hover:opacity-100'
                }`}
              >
                {/* Node on connecting line */}
                <div
                  className={`absolute -left-[31px] sm:-left-[47px] top-1.5 size-4 sm:size-5 rounded-full border-2 transition-all ${
                    m.isCurrent
                      ? 'bg-cyan-400 border-cyan-300 shadow-[0_0_12px_#22d3ee] animate-pulse'
                      : isSelected
                      ? 'bg-sky-400 border-sky-300 shadow-[0_0_8px_#38bdf8]'
                      : 'bg-[#0b0e17] border-slate-600 group-hover:border-sky-400'
                  }`}
                />

                {/* Milestone Card */}
                <div
                  className={`rounded-2xl p-6 sm:p-7 backdrop-blur-xl border transition-all duration-300 ${
                    isSelected
                      ? 'bg-[#0e1422] border-sky-500/40 shadow-xl shadow-sky-500/5'
                      : 'bg-[#090d15]/80 border-white/10 hover:border-white/20'
                  }`}
                >
                  {/* Period badge & Area */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/15 border border-sky-500/30 text-sky-300 font-mono text-xs font-bold">
                        <Calendar className="size-3" />
                        <span>{m.period}</span>
                      </span>

                      {m.isCurrent && (
                        <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-[0.625rem] font-mono uppercase font-semibold">
                          Active Focus
                        </span>
                      )}
                    </div>

                    <span className="text-xs font-mono text-slate-400">
                      Domain: <strong className="text-slate-200">{m.area}</strong>
                    </span>
                  </div>

                  {/* Headline */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {m.headline}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light mb-4">
                    {m.description}
                  </p>

                  {/* Related Tags */}
                  <div className="pt-4 border-t border-white/5 flex flex-wrap items-center gap-2">
                    <span className="text-[0.6875rem] font-mono text-slate-500 uppercase mr-1">
                      Related:
                    </span>
                    {m.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-[#131a27] border border-white/10 text-xs font-mono text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
