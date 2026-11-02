import { motion } from 'framer-motion';
import {
  Activity,
  Terminal,
  Cpu,
  Layers,
  ShieldAlert,
  Network,
  Server,
  BrainCircuit,
  GitMerge,
  Sparkles,
} from 'lucide-react';
import { currentlyExploringContent, ExploringTopic } from '../content';

const topicIcons: Record<string, React.ElementType> = {
  'topic-python': Terminal,
  'topic-cpp': Cpu,
  'topic-dsa': Layers,
  'topic-cybersecurity': ShieldAlert,
  'topic-networking': Network,
  'topic-backend': Server,
  'topic-aiml': BrainCircuit,
  'topic-opensource': GitMerge,
};

export function LearningDashboard() {
  return (
    <section
      id="exploring"
      aria-label="Currently Exploring — Developer Learning Dashboard"
      className="relative min-h-screen w-full bg-[#07090e] py-24 sm:py-32 border-t border-white/5 tech-grid"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
            <Activity className="size-3.5" />
            <span>{currentlyExploringContent.subheading}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {currentlyExploringContent.heading}
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl font-light">
            {currentlyExploringContent.note}
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {currentlyExploringContent.topics.map((t: ExploringTopic, idx: number) => {
            const IconComp = topicIcons[t.id] || Sparkles;

            return (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="rounded-2xl bg-[#0b0f17]/90 border border-white/10 hover:border-cyan-500/35 p-5 backdrop-blur-xl transition-all duration-300 hover:bg-[#0f1422] group flex flex-col justify-between shadow-lg relative overflow-hidden"
              >
                {/* Subtle telemetry line at top */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Top Bar: Icon + Status */}
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      <IconComp className="size-4" />
                    </div>

                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[0.6875rem] font-mono bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                      <span className="size-1.5 rounded-full bg-cyan-400 animate-pulse" />
                      <span>{t.status}</span>
                    </span>
                  </div>

                  {/* Topic Title */}
                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                    {t.topic}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs text-slate-300 leading-relaxed font-light mb-4">
                    {t.shortDescription}
                  </p>
                </div>

                {/* Bottom Card Context: Related Project & Focus Track */}
                <div className="pt-3 border-t border-white/5 space-y-2">
                  {t.relatedProjects && (
                    <div className="text-[0.6875rem] font-mono">
                      <span className="text-slate-500 block">Related:</span>
                      <span className="text-slate-300 line-clamp-1">{t.relatedProjects}</span>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1 pt-1">
                    {t.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded bg-white/5 text-[0.625rem] font-mono text-slate-400"
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

        {/* Learning telemetry footer banner */}
        <div className="mt-12 p-5 rounded-2xl bg-[#0e131d]/90 border border-sky-500/20 backdrop-blur-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400">
              <Activity className="size-5" />
            </div>
            <div>
              <span className="text-xs font-mono text-slate-400 block uppercase">
                Active Learning Cadence
              </span>
              <p className="text-sm font-semibold text-white">
                Daily commits, reading documentation, and building practical proofs of concept.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-sky-300">
            <span className="size-2 rounded-full bg-cyan-400 animate-ping" />
            <span>Open to study groups & hackathon teams</span>
          </div>
        </div>

      </div>
    </section>
  );
}
