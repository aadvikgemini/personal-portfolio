import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  Terminal,
  Cpu,
  FileCode,
  Palette,
  Smartphone,
  GitBranch,
  Monitor,
  Command,
  Sparkles,
  Brain,
  ShieldCheck,
  Globe,
  Layers,
  Filter,
} from 'lucide-react';
import { skillsContent, SkillItem } from '../content';
import { GithubIcon } from './Icons';

const iconMap: Record<string, React.ElementType> = {
  Terminal,
  Cpu,
  Code2,
  FileCode,
  Palette,
  Smartphone,
  GitBranch,
  Github: GithubIcon,
  Monitor,
  CommandLine: Command,
  Sparkles,
  Brain,
  ShieldCheck,
  Globe,
  Layers,
};

const statusColors: Record<string, { bg: string; text: string; border: string; dot: string }> = {
  Learning: {
    bg: 'bg-amber-500/10',
    text: 'text-amber-300',
    border: 'border-amber-500/25',
    dot: 'bg-amber-400',
  },
  Practicing: {
    bg: 'bg-sky-500/10',
    text: 'text-sky-300',
    border: 'border-sky-500/25',
    dot: 'bg-sky-400',
  },
  Exploring: {
    bg: 'bg-purple-500/10',
    text: 'text-purple-300',
    border: 'border-purple-500/25',
    dot: 'bg-purple-400',
  },
  'Building With': {
    bg: 'bg-cyan-500/10',
    text: 'text-cyan-300',
    border: 'border-cyan-500/25',
    dot: 'bg-cyan-400',
  },
};

export function TechStack() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredSkills =
    activeCategory === 'All'
      ? skillsContent.items
      : skillsContent.items.filter((item) => item.category === activeCategory);

  return (
    <section
      id="skills"
      aria-label="My Tech Stack"
      className="relative min-h-screen w-full bg-[#080b10] py-24 sm:py-32 border-t border-white/5 tech-grid"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono uppercase tracking-widest mb-3">
            <Sparkles className="size-3.5" />
            <span>{skillsContent.subheading}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {skillsContent.heading}
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl font-light">
            {skillsContent.note}
          </p>

          {/* Honest Status Legend */}
          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-mono">
            <span className="text-slate-500 font-semibold uppercase">Status Legend:</span>
            {Object.entries(statusColors).map(([status, styles]) => (
              <span
                key={status}
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full ${styles.bg} ${styles.text} border ${styles.border}`}
              >
                <span className={`size-1.5 rounded-full ${styles.dot}`} />
                <span>{status}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-white/10">
          <Filter className="size-4 text-slate-500 mr-2" />
          {skillsContent.categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-sky-500 to-cyan-500 text-slate-950 font-bold shadow-md'
                    : 'bg-[#0e131d] text-slate-400 hover:text-white border border-white/10 hover:border-sky-500/30'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence>
            {filteredSkills.map((skill: SkillItem) => {
              const IconComp = iconMap[skill.iconName] || Code2;
              const statusStyle = statusColors[skill.status] || statusColors['Learning'];

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  key={skill.name}
                  className="rounded-2xl bg-[#0b0f17]/90 border border-white/10 hover:border-sky-500/35 p-5 backdrop-blur-xl shadow-lg transition-all duration-300 hover:bg-[#0f1522] group flex flex-col justify-between"
                >
                  <div>
                    {/* Top Row: Icon + Category + Status */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400 group-hover:text-cyan-300 transition-colors">
                        <IconComp className="size-5" />
                      </div>

                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[0.6875rem] font-mono font-medium ${statusStyle.bg} ${statusStyle.text} border ${statusStyle.border}`}
                      >
                        <span className={`size-1.5 rounded-full ${statusStyle.dot}`} />
                        <span>{skill.status}</span>
                      </span>
                    </div>

                    {/* Skill Name */}
                    <div className="mb-2">
                      <span className="text-[0.625rem] font-mono uppercase text-slate-500 tracking-wider">
                        {skill.category}
                      </span>
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {skill.name}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-slate-300 text-xs leading-relaxed font-light mb-4">
                      {skill.description}
                    </p>
                  </div>

                  {/* Focus Area Footer */}
                  <div className="pt-3 border-t border-white/5 text-[0.6875rem] font-mono text-slate-400">
                    <span className="text-slate-500">Focus: </span>
                    <span className="text-slate-300">{skill.focusArea}</span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
