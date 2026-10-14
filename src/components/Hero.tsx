import React, { useState, useRef, MouseEvent } from 'react';
import { ArrowUpRight, Play, ShieldCheck, Activity, Compass, Flame } from 'lucide-react';
import { HERO_IMAGE, GYM_STATS } from '../data/gymData.ts';

interface HeroProps {
  onOpenVIPModal: () => void;
  onOpenVirtualTour: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenVIPModal, onOpenVirtualTour }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -9; // Tilt up/down
    const rY = ((x - centerX) / centerX) * 9;  // Tilt left/right
    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-[#06080D]">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#00D2FF]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-[#FF5E1A]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 2-column split with balanced spatial alignment */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Proposition & Direct Action */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-7">
            
            {/* Clean unboxed metadata (anti-pill discipline) */}
            <div className="flex flex-wrap items-center gap-2.5 text-xs font-semibold tracking-widest uppercase text-slate-400">
              <span className="text-[#00D2FF]">Grand Central Flagship</span>
              <span aria-hidden="true" className="text-white/20">·</span>
              <span>45,000 Sq Ft Compound</span>
              <span aria-hidden="true" className="text-white/20">·</span>
              <span className="text-[#FF5E1A]">Memberships Capped</span>
            </div>

            {/* Display Headline */}
            <h1 className="font-['Barlow_Condensed'] text-5xl sm:text-6xl xl:text-7xl font-extrabold uppercase tracking-tight text-white leading-[0.95] text-balance">
              FORGE <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00D2FF] to-white">OLYMPIC POWER</span>. <br />
              MASTER <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5E1A] to-[#FFA040]">CELLULAR RECOVERY</span>.
            </h1>

            {/* Clear value proposition */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              FlexFinity unites competition-grade Eleiko barbell vaults, velocity tracking sensors, and a medical-grade contrast hydrotherapy suite. Engineered for high-performers who refuse to compromise on training floor standards.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenVIPModal}
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-[#FF5E1A] via-[#FF6A1A] to-[#FF851A] hover:shadow-[0_0_30px_rgba(255,94,26,0.45)] transition-all duration-200 active:scale-98 whitespace-nowrap shrink-0 focus-visible:ring-2 focus-visible:ring-[#00D2FF]"
              >
                <Flame className="w-5 h-5 text-amber-200" />
                <span>Claim 1-Day VIP Pass</span>
                <ArrowUpRight className="w-5 h-5 text-white/90 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>

              <button
                onClick={onOpenVirtualTour}
                className="group inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-semibold text-slate-200 glass-panel hover:text-white hover:border-[#00D2FF]/50 transition-all duration-200 whitespace-nowrap shrink-0 focus-visible:ring-2 focus-visible:ring-[#00D2FF]"
              >
                <Compass className="w-5 h-5 text-[#00D2FF]" />
                <span>Explore 3D Virtual Tour</span>
              </button>
            </div>

            {/* Real Quality Anchors */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#00D2FF]" />
                <span>Eleiko IWF Certified Platforms</span>
              </div>
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-[#FF5E1A]" />
                <span>Real-time Velocity Transducers</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                <span>Floor Capacity: 46% (Open Racks)</span>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Depth Visual Container */}
          <div className="lg:col-span-5 perspective-1000">
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out'
              }}
              className="relative rounded-2xl overflow-hidden glass-panel-elevated p-2 border border-white/15 shadow-2xl group cursor-pointer"
              onClick={onOpenVirtualTour}
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/10] sm:aspect-[4/3] rounded-xl overflow-hidden bg-slate-900">
                <img
                  src={HERO_IMAGE}
                  alt="FlexFinity flagship training compound interior at dusk"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                />

                {/* Subtle dark gradient scrim for text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

                {/* Interactive Tour Trigger Badge */}
                <div className="absolute top-4 right-4 glass-panel px-3 py-1.5 rounded-lg text-xs font-semibold text-white flex items-center gap-1.5 border border-white/20">
                  <Play className="w-3.5 h-3.5 fill-[#00D2FF] text-[#00D2FF]" />
                  <span>Interactive 360° View</span>
                </div>

                {/* Floating Bottom Telemetry Info */}
                <div className="absolute bottom-4 left-4 right-4 space-y-2">
                  <div className="flex items-center justify-between text-xs text-white">
                    <span className="font-medium flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#00D2FF] shadow-[0_0_8px_#00D2FF]"></span>
                      Main Strength Floor · Level 1
                    </span>
                    <span className="font-mono text-slate-300">Live Status</span>
                  </div>
                  
                  <div className="glass-panel p-2.5 rounded-lg border border-white/10 flex items-center justify-between text-xs text-slate-300">
                    <div>
                      <div className="text-white font-semibold">Contrast Spa & Plunge</div>
                      <div className="text-[11px] text-slate-400">3°C Ice Bath · 90°C Cedar Sauna</div>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[11px] font-semibold text-[#00D2FF] bg-[#00D2FF]/10 border border-[#00D2FF]/30">
                      Walk-in Ready
                    </span>
                  </div>
                </div>

              </div>

              {/* Decorative accent glow border */}
              <div className="absolute -inset-px rounded-2xl pointer-events-none border border-[#00D2FF]/20 group-hover:border-[#00D2FF]/60 transition-colors" />
            </div>
          </div>

        </div>

        {/* Full-width 4-Column KPI Strip below the hero split (Section 13 layout rule) */}
        <div className="mt-16 sm:mt-20 pt-10 border-t border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {GYM_STATS.map((stat, idx) => (
            <div key={idx} className="glass-panel p-5 rounded-xl border border-white/5 hover:border-[#00D2FF]/30 transition-all">
              <div className="font-['Barlow_Condensed'] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tabular-nums tracking-tight">
                {stat.value}
                {stat.unit && <span className="text-[#00D2FF] text-xl sm:text-2xl ml-1 font-semibold">{stat.unit}</span>}
              </div>
              <div className="mt-1 text-xs sm:text-sm text-slate-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
