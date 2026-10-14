import React, { useState } from 'react';
import { Quote, TrendingUp, Award, CheckCircle, ArrowRight } from 'lucide-react';
import { TRANSFORMATION_STORIES } from '../data/gymData.ts';

interface TransformationsProps {
  onOpenVIPModal: () => void;
}

export const Transformations: React.FC<TransformationsProps> = ({ onOpenVIPModal }) => {
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const currentStory = TRANSFORMATION_STORIES[activeStoryIndex];

  return (
    <section className="py-24 bg-[#06080E] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-bold tracking-widest uppercase text-[#FF5E1A]">
            <span>Empirical Evidence</span>
            <span aria-hidden="true" className="text-white/20">·</span>
            <span>Verified Member Metrics</span>
          </div>
          <h2 className="mt-2 font-['Barlow_Condensed'] text-4xl sm:text-5xl font-extrabold text-white uppercase tracking-tight">
            QUANTIFIED <span className="text-gradient-duo">ATHLETIC TRANSFORMATIONS</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            No unverified claims or airbrushed lighting tricks. Every athlete transformation at FlexFinity is measured via DEXA scans, barbell transducers, and competition results.
          </p>
        </div>

        {/* 3 Story Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {TRANSFORMATION_STORIES.map((story, idx) => (
            <div
              key={story.id}
              onClick={() => setActiveStoryIndex(idx)}
              className={`cursor-pointer glass-panel rounded-2xl p-8 border transition-all duration-300 flex flex-col justify-between ${
                activeStoryIndex === idx
                  ? 'border-[#00D2FF] bg-[#121824]/90 shadow-[0_0_25px_rgba(0,210,255,0.15)] -translate-y-1'
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              <div>
                {/* Metric Highlight Box */}
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 mb-6">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                    <span className="font-semibold uppercase tracking-wider">{story.metricLabel}</span>
                    <span className="font-mono text-[#00D2FF] font-bold">{story.duration}</span>
                  </div>
                  <div className="font-['Barlow_Condensed'] text-4xl font-extrabold text-white tabular-nums tracking-tight">
                    {story.highlightMetric}
                  </div>
                </div>

                {/* Quote */}
                <p className="text-slate-300 text-sm leading-relaxed italic">
                  "{story.quote}"
                </p>
              </div>

              {/* Attribution */}
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                    {story.name}
                    <CheckCircle className="w-3.5 h-3.5 text-[#00D2FF]" />
                  </h4>
                  <p className="text-xs text-slate-400">{story.role}</p>
                </div>
                <span className="text-[11px] font-semibold text-[#FF7700] px-2 py-0.5 rounded bg-[#FF7700]/10 border border-[#FF7700]/20">
                  {story.programUsed.split(' ')[0]} Protocol
                </span>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Social Proof Banner */}
        <div className="mt-14 glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="flex -space-x-2 overflow-hidden">
              <div className="inline-block h-10 w-10 rounded-full ring-2 ring-[#080B12] bg-[#00D2FF]/30 flex items-center justify-center font-bold text-xs text-white">JS</div>
              <div className="inline-block h-10 w-10 rounded-full ring-2 ring-[#080B12] bg-[#FF5E1A]/30 flex items-center justify-center font-bold text-xs text-white">SA</div>
              <div className="inline-block h-10 w-10 rounded-full ring-2 ring-[#080B12] bg-[#0066FF]/30 flex items-center justify-center font-bold text-xs text-white">DC</div>
            </div>
            <div>
              <div className="text-sm font-bold text-white">Join 450+ Verified Club Members</div>
              <div className="text-xs text-slate-400">Strict member cap enforced to safeguard training floor velocity.</div>
            </div>
          </div>

          <button
            onClick={onOpenVIPModal}
            className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#FF5E1A] to-[#FF7700] hover:shadow-lg hover:shadow-[#FF5E1A]/20 transition-all whitespace-nowrap"
          >
            Start Your Protocol Today
          </button>
        </div>

      </div>
    </section>
  );
};
