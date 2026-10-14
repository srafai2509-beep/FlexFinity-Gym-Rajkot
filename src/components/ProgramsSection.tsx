import React, { useState } from 'react';
import { Target, Clock, User, ArrowRight, Sparkles, Check, ChevronDown, Dumbbell } from 'lucide-react';
import { PROGRAMS } from '../data/gymData.ts';
import { Program } from '../types/index.ts';

interface ProgramsSectionProps {
  onSelectProgram: (program: Program) => void;
  onOpenVIPModal: () => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ onSelectProgram, onOpenVIPModal }) => {
  const [selectedGoal, setSelectedGoal] = useState<'all' | 'strength' | 'conditioning' | 'recovery'>('all');
  const [expandedProgram, setExpandedProgram] = useState<string | null>(PROGRAMS[0].id);

  const goalFilteredPrograms = selectedGoal === 'all'
    ? PROGRAMS
    : PROGRAMS.filter(p => {
        if (selectedGoal === 'strength') return p.focus.toLowerCase().includes('hypertrophy') || p.focus.toLowerCase().includes('power');
        if (selectedGoal === 'conditioning') return p.focus.toLowerCase().includes('cardiovascular') || p.id.includes('hyrox');
        if (selectedGoal === 'recovery') return p.focus.toLowerCase().includes('recovery') || p.id.includes('neuro');
        return true;
      });

  return (
    <section id="programs" className="py-24 bg-[#06080E] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-bold tracking-widest uppercase text-[#FF5E1A]">
            <span>Calibrated Periodization</span>
            <span aria-hidden="true" className="text-white/20">·</span>
            <span>Sports Science</span>
          </div>
          <h2 className="mt-2 font-['Barlow_Condensed'] text-4xl sm:text-5xl font-extrabold text-white uppercase tracking-tight">
            SIGNATURE <span className="text-gradient-fire">TRAINING PROTOCOLS</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Every FlexFinity program is engineered on exercise physiology invariants: velocity threshold autoregulation, calibrated mechanical tension, and parasympathetic recovery resets.
          </p>

          {/* Interactive Training Goal Filter */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setSelectedGoal('all')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                selectedGoal === 'all'
                  ? 'bg-gradient-to-r from-[#FF5E1A] to-[#FF7700] text-white shadow-md shadow-[#FF5E1A]/20'
                  : 'glass-panel text-slate-400 hover:text-white'
              }`}
            >
              All Programs
            </button>
            <button
              onClick={() => setSelectedGoal('strength')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                selectedGoal === 'strength'
                  ? 'bg-gradient-to-r from-[#FF5E1A] to-[#FF7700] text-white shadow-md shadow-[#FF5E1A]/20'
                  : 'glass-panel text-slate-400 hover:text-white'
              }`}
            >
              Maximum Strength & Hypertrophy
            </button>
            <button
              onClick={() => setSelectedGoal('conditioning')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                selectedGoal === 'conditioning'
                  ? 'bg-gradient-to-r from-[#FF5E1A] to-[#FF7700] text-white shadow-md shadow-[#FF5E1A]/20'
                  : 'glass-panel text-slate-400 hover:text-white'
              }`}
            >
              HYROX & Aerobic Engine
            </button>
            <button
              onClick={() => setSelectedGoal('recovery')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                selectedGoal === 'recovery'
                  ? 'bg-gradient-to-r from-[#FF5E1A] to-[#FF7700] text-white shadow-md shadow-[#FF5E1A]/20'
                  : 'glass-panel text-slate-400 hover:text-white'
              }`}
            >
              Longevity & Contrast Reset
            </button>
          </div>
        </div>

        {/* 2x2 Grid with Interactive Card Detail */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {goalFilteredPrograms.map((program) => {
            const isExpanded = expandedProgram === program.id;
            return (
              <div
                key={program.id}
                className={`glass-panel rounded-2xl p-6 sm:p-8 border transition-all duration-300 relative flex flex-col justify-between ${
                  isExpanded
                    ? 'border-[#00D2FF]/50 bg-[#121824]/90 shadow-[0_0_30px_rgba(0,210,255,0.12)]'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                <div>
                  {/* Top Unboxed Metadata */}
                  <div className="flex items-center justify-between text-xs text-slate-400 pb-3 border-b border-white/5">
                    <span className="font-semibold text-[#00D2FF] uppercase tracking-wider">{program.focus}</span>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span>{program.duration}</span>
                      </span>
                      <span className="font-mono text-slate-300 px-2 py-0.5 rounded bg-white/5">
                        {program.intensity}
                      </span>
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div className="mt-4">
                    <h3 className="font-['Barlow_Condensed'] text-2xl sm:text-3xl font-bold uppercase text-white tracking-wide">
                      {program.title}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-[#FF7700] font-medium">
                      {program.tagline}
                    </p>
                    <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {program.description}
                    </p>
                  </div>

                  {/* Key Program Pillars */}
                  <div className="mt-5 space-y-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Scientific Deliverables:
                    </div>
                    {program.benefits.map((b, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-200">
                        <div className="w-4 h-4 rounded-full bg-[#00D2FF]/10 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-[#00D2FF]" />
                        </div>
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>

                  {/* Master Coach Reference */}
                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-[#00D2FF]" />
                      <span>Led by: <strong className="text-white">{program.coach}</strong></span>
                    </span>
                    <span className="text-emerald-400 font-medium">Enrolling Athletes</span>
                  </div>
                </div>

                {/* Card Action Area */}
                <div className="mt-6 pt-4 flex items-center justify-between gap-4">
                  <button
                    onClick={() => onSelectProgram(program)}
                    className="flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-white/10 hover:bg-[#00D2FF] hover:text-black transition-all text-center flex items-center justify-center gap-1.5"
                  >
                    <span>Reserve Program Spot</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setExpandedProgram(isExpanded ? null : program.id)}
                    className="px-3 py-3 rounded-xl glass-panel text-slate-300 hover:text-white transition-colors text-xs font-semibold"
                    title="Toggle details"
                  >
                    {isExpanded ? 'Active' : 'Details'}
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Custom Diagnostic Banner */}
        <div className="mt-12 glass-panel p-6 sm:p-8 rounded-2xl border border-[#FF5E1A]/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#FF5E1A]/10 border border-[#FF5E1A]/40 flex items-center justify-center shrink-0">
              <Dumbbell className="w-6 h-6 text-[#FF5E1A]" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Unsure which protocol fits your biological vector?</h4>
              <p className="text-xs sm:text-sm text-slate-300">
                Book a 20-minute movement diagnostic and force plate evaluation with Head Coach Marcus Vance.
              </p>
            </div>
          </div>
          <button
            onClick={onOpenVIPModal}
            className="w-full md:w-auto px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#FF5E1A] to-[#FF7700] hover:shadow-lg hover:shadow-[#FF5E1A]/30 transition-all whitespace-nowrap"
          >
            Book Free Movement Diagnostic
          </button>
        </div>

      </div>
    </section>
  );
};
