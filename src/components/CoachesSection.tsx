import React from 'react';
import { Award, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { COACHES } from '../data/gymData.ts';
import { Coach } from '../types/index.ts';

interface CoachesSectionProps {
  onConsultCoach: (coach: Coach) => void;
}

export const CoachesSection: React.FC<CoachesSectionProps> = ({ onConsultCoach }) => {
  return (
    <section id="coaches" className="py-24 bg-[#06080E] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#FF5E1A]">
              <span>Olympic & Collegiate Pedigree</span>
              <span aria-hidden="true" className="text-white/20">·</span>
              <span>1:1 Mentorship</span>
            </div>
            <h2 className="mt-2 font-['Barlow_Condensed'] text-4xl sm:text-5xl font-extrabold text-white uppercase tracking-tight">
              MASTER COACHES & <span className="text-[#FF5E1A]">PHYSIOLOGISTS</span>
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-xl">
              No generic personal trainers. Our cadre consists of published physiologists, Olympic weightlifting directors, and world-ranked hybrid racers.
            </p>
          </div>

          <div className="text-xs text-slate-400 flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-white font-semibold">
              <ShieldCheck className="w-4 h-4 text-[#00D2FF]" />
              NSCA & USAW Certified
            </span>
            <span aria-hidden="true" className="text-white/20">·</span>
            <span>All coaches vetted $\ge$ 8 years</span>
          </div>
        </div>

        {/* Master Coaches Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {COACHES.map((coach) => (
            <div
              key={coach.id}
              className="glass-panel rounded-2xl overflow-hidden border border-white/10 hover:border-[#00D2FF]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Coach Portrait Frame */}
                <div className="relative h-80 w-full overflow-hidden bg-slate-950">
                  <img
                    src={coach.image}
                    alt={coach.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E121A] via-transparent to-transparent opacity-90" />

                  {/* Experience badge */}
                  <div className="absolute top-4 left-4 glass-panel px-3 py-1 rounded-md text-xs font-semibold text-white border border-white/10 font-mono">
                    {coach.experience}
                  </div>

                  {/* Specialty callout at bottom of image */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-xs font-semibold text-[#00D2FF]">
                      {coach.specialty}
                    </span>
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-['Barlow_Condensed'] text-2xl font-bold uppercase text-white tracking-wide">
                      {coach.name}
                    </h3>
                    <p className="text-xs text-[#FF7700] font-semibold mt-0.5">
                      {coach.title}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {coach.bio}
                  </p>

                  {/* Verified Credentials */}
                  <div className="pt-3 border-t border-white/5 space-y-1.5">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Accredited Credentials:
                    </div>
                    {coach.certifications.map((cert, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00D2FF] shrink-0" />
                        <span>{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Consultation trigger */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onConsultCoach(coach)}
                  className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-white/10 hover:bg-gradient-to-r hover:from-[#FF5E1A] hover:to-[#FF7700] transition-all flex items-center justify-center gap-2"
                >
                  <span>Book 1:1 Diagnostic with {coach.name.split(',')[0].split(' ')[0]}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
