import { motion } from 'framer-motion';
import { Trophy, Users, Lightbulb, Rocket, CheckCircle, Clock } from 'lucide-react';
import { hackathonsContent, HackathonActivity } from '../content';

const statusBadgeStyles: Record<string, { bg: string; text: string; border: string }> = {
  submission: {
    bg: 'bg-purple-500/10',
    text: 'text-purple-300',
    border: 'border-purple-500/30',
  },
  participation: {
    bg: 'bg-sky-500/10',
    text: 'text-sky-300',
    border: 'border-sky-500/30',
  },
  'in-progress': {
    bg: 'bg-cyan-500/10',
    text: 'text-cyan-300',
    border: 'border-cyan-500/30',
  },
};

export function HackathonsSection() {
  return (
    <section
      id="activities"
      aria-label="Beyond the Classroom — Hackathons & Activities"
      className="relative min-h-screen w-full bg-[#07090e] py-24 sm:py-32 border-t border-white/5 tech-grid"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono uppercase tracking-widest mb-3">
            <Trophy className="size-3.5" />
            <span>{hackathonsContent.subheading}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {hackathonsContent.heading}
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl font-light">
            {hackathonsContent.note}
          </p>
        </div>

        {/* Hackathon Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {hackathonsContent.items.map((item: HackathonActivity, idx: number) => {
            const badgeStyle = statusBadgeStyles[item.statusType] || statusBadgeStyles.participation;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col justify-between rounded-2xl bg-[#0b0f17]/90 border border-white/10 hover:border-purple-500/40 p-6 sm:p-7 backdrop-blur-xl shadow-xl transition-all duration-300 hover:shadow-[0_10px_30px_-10px_rgba(168,85,247,0.15)] group"
              >
                <div>
                  {/* Top Bar: Year & Category */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-sky-400 bg-sky-500/10 px-2.5 py-0.5 rounded border border-sky-500/20">
                      {item.year}
                    </span>
                    <span className="text-[0.6875rem] font-mono uppercase bg-white/5 text-slate-400 px-2 py-0.5 rounded">
                      {item.category}
                    </span>
                  </div>

                  {/* Event Name */}
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors mb-2">
                    {item.name}
                  </h3>

                  {/* Project / Activity title */}
                  <div className="mb-4">
                    <span className="text-[0.625rem] font-mono uppercase text-slate-500 block">
                      Project Focus
                    </span>
                    <span className="text-xs font-medium text-slate-200">
                      {item.projectOrActivity}
                    </span>
                  </div>

                  {/* Team Role */}
                  <div className="mb-4 flex items-start gap-2 p-3 rounded-xl bg-[#07090f] border border-white/5 text-xs">
                    <Users className="size-4 text-purple-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-400 font-mono text-[0.6875rem] block">Role</span>
                      <span className="text-white font-medium">{item.teamRole}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light mb-4">
                    {item.description}
                  </p>
                </div>

                <div>
                  {/* Takeaway */}
                  <div className="pt-3 border-t border-white/5 mb-4">
                    <span className="text-[0.625rem] font-mono uppercase text-cyan-400 block mb-1">
                      Key Takeaway
                    </span>
                    <p className="text-xs text-slate-400 italic">"{item.takeaway}"</p>
                  </div>

                  {/* Status Tag */}
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium ${badgeStyle.bg} ${badgeStyle.text} border ${badgeStyle.border}`}
                    >
                      <CheckCircle className="size-3" />
                      <span>{item.status}</span>
                    </span>

                    <div className="flex gap-1">
                      {item.tech.slice(0, 2).map((t) => (
                        <span key={t} className="text-[0.625rem] font-mono text-slate-500">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Activities Pillars */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-[#0e131d]/60 border border-white/5">
            <Rocket className="size-4 text-cyan-400 mb-2" />
            <h4 className="text-sm font-bold text-white">Entrepreneurship</h4>
            <p className="text-xs text-slate-400 mt-1 font-light">
              Building practical student utility platforms and understanding business validation.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#0e131d]/60 border border-white/5">
            <Users className="size-4 text-sky-400 mb-2" />
            <h4 className="text-sm font-bold text-white">Team Collaboration</h4>
            <p className="text-xs text-slate-400 mt-1 font-light">
              Collaborating across diverse skillsets to rapidly assemble cohesive MVPs.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#0e131d]/60 border border-white/5">
            <Lightbulb className="size-4 text-amber-400 mb-2" />
            <h4 className="text-sm font-bold text-white">Innovation Challenges</h4>
            <p className="text-xs text-slate-400 mt-1 font-light">
              Reframing ambiguous problem statements into testable technical architectures.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#0e131d]/60 border border-white/5">
            <Clock className="size-4 text-purple-400 mb-2" />
            <h4 className="text-sm font-bold text-white">High-Velocity Sprints</h4>
            <p className="text-xs text-slate-400 mt-1 font-light">
              Embracing 24-48 hour clock pressures to write resilient, functional prototypes.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
