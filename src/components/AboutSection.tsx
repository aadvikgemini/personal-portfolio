import {
  GraduationCap,
  Target,
  Sparkles,
  BookOpen,
  Brain,
  Shield,
  Layout,
  Code,
  Trophy,
  Rocket,
  GitPullRequest,
  Compass,
  CheckCircle2,
  MapPin,
  Building2,
} from 'lucide-react';
import { aboutContent } from '../content';

const iconMap: Record<string, React.ElementType> = {
  Brain,
  Shield,
  Layout,
  Code,
  Trophy,
  Rocket,
  GitPullRequest,
  Compass,
};

export function AboutSection() {
  return (
    <section
      id="about"
      aria-label="About Me Section"
      className="relative min-h-screen w-full bg-[#080b10] py-24 sm:py-32 border-t border-white/5 tech-grid"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono uppercase tracking-widest mb-3">
            <Sparkles className="size-3.5" />
            <span>{aboutContent.subheading}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {aboutContent.heading}
          </h2>
        </div>

        {/* Top Grid: Personal Statement & Education Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: Narrative paragraphs */}
          <div className="lg:col-span-7 space-y-5">
            <div className="rounded-2xl bg-[#0e131d]/80 border border-white/10 p-6 sm:p-8 backdrop-blur-md shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />
              
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span>The Student Journey</span>
                <span className="size-1.5 rounded-full bg-cyan-400" />
              </h3>

              <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed font-light">
                {aboutContent.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Core Philosophy pill */}
              <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
                <span className="text-cyan-400 font-semibold">Core Principle:</span>
                <span>Active experimentation & honest learning over passive memorization</span>
              </div>
            </div>
          </div>

          {/* Right Column: Education Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-gradient-to-b from-[#0f1523] to-[#0a0d14] border border-sky-500/25 p-6 sm:p-7 shadow-xl backdrop-blur-md relative">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2 text-sky-400 text-xs font-mono uppercase tracking-wider">
                  <GraduationCap className="size-4" />
                  <span>Academic Foundations</span>
                </div>
                <span className="text-[0.625rem] font-mono bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded border border-cyan-500/30">
                  {aboutContent.education.period}
                </span>
              </div>

              <div className="mt-5 space-y-4">
                <div>
                  <span className="text-xs font-mono text-slate-400 block uppercase">Degree Program</span>
                  <h4 className="text-xl font-bold text-white mt-0.5">
                    {aboutContent.education.degree}
                  </h4>
                </div>

                <div className="space-y-2 text-sm text-slate-300">
                  <div className="flex items-start gap-2.5">
                    <Building2 className="size-4 text-sky-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white">{aboutContent.education.school}</span>
                      <span className="block text-slate-400 text-xs">{aboutContent.education.university}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 text-xs text-slate-400 pt-1">
                    <MapPin className="size-3.5 text-slate-500 shrink-0" />
                    <span>{aboutContent.education.location}</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#070a0f] border border-white/5 text-xs text-slate-400 leading-relaxed">
                  <span className="text-slate-300 font-medium block mb-1">Focus Area:</span>
                  {aboutContent.education.note}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Current Interests Section */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-6">
            <BookOpen className="size-5 text-sky-400" />
            <h3 className="text-2xl font-bold text-white">Current Areas of Interest</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {aboutContent.currentInterests.map((interest) => {
              const IconComponent = iconMap[interest.icon] || Sparkles;

              return (
                <div
                  key={interest.title}
                  className="rounded-xl bg-[#0e131d]/70 border border-white/10 p-5 hover:border-sky-500/30 transition-all hover:bg-[#121926]/80 group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 group-hover:text-cyan-300 transition-colors">
                      <IconComponent className="size-4" />
                    </div>
                    <span className="text-[0.625rem] font-mono text-slate-500 uppercase">
                      {interest.category}
                    </span>
                  </div>
                  <h4 className="text-base font-semibold text-white group-hover:text-sky-200 transition-colors">
                    {interest.title}
                  </h4>
                  <p className="mt-1.5 text-xs text-slate-400 leading-relaxed font-light">
                    {interest.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Long-term Development Goals */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Target className="size-5 text-cyan-400" />
            <h3 className="text-2xl font-bold text-white">Long-Term Development Goals</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {aboutContent.longTermGoals.map((goalItem) => (
              <div
                key={goalItem.id}
                className="rounded-xl bg-[#0e131d]/60 border border-white/10 p-5 hover:border-cyan-500/30 transition-all group relative overflow-hidden"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="size-6 rounded-full bg-sky-500/10 text-sky-300 text-xs font-mono font-bold flex items-center justify-center border border-sky-500/20">
                    0{goalItem.id}
                  </span>
                  <span className="text-[0.625rem] font-mono uppercase bg-white/5 text-slate-400 px-2 py-0.5 rounded">
                    {goalItem.category}
                  </span>
                </div>

                <h4 className="text-sm font-semibold text-white group-hover:text-cyan-200 transition-colors flex items-start gap-2">
                  <CheckCircle2 className="size-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{goalItem.goal}</span>
                </h4>

                <p className="mt-2 text-xs text-slate-400 font-light leading-relaxed pl-6">
                  {goalItem.focus}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
