import React, { useState } from 'react';
import { Eye, Zap, Droplets, Gauge, Shield, Sparkles, CheckCircle2 } from 'lucide-react';
import { OLYMPIC_IMAGE, SPA_IMAGE, HERO_IMAGE } from '../data/gymData.ts';

interface FacilityShowcaseProps {
  onOpenVirtualTour: (zoneName?: string) => void;
  onOpenVIPModal: () => void;
}

export const FacilityShowcase: React.FC<FacilityShowcaseProps> = ({ onOpenVirtualTour, onOpenVIPModal }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'strength' | 'recovery' | 'conditioning'>('all');
  const [selectedSpec, setSelectedSpec] = useState<string | null>(null);

  const facilities = [
    {
      id: 'olympic-bay',
      title: 'Olympic Weightlifting & Velocity Vault',
      category: 'strength',
      image: OLYMPIC_IMAGE,
      aspect: 'col-span-1 lg:col-span-2',
      badgeText: 'Competition Tier',
      highlight: 'Eleiko IWF Competition Barbell Vault',
      specs: [
        '8 Laser-etched Swedish hardwood lifting platforms',
        'GymAware laser linear position transducers on every rack',
        'Calibrated steel competition discs within 10g precision tolerance',
        'Integrated vibration-dampening subfloors for maximum shock dispersal'
      ],
      leadMetric: '10 Eleiko Rigs'
    },
    {
      id: 'hydro-recovery',
      title: 'Thermal Contrast & Cryo Sanctuary',
      category: 'recovery',
      image: SPA_IMAGE,
      aspect: 'col-span-1',
      badgeText: 'Regenerative Medicine',
      highlight: '3°C Submerged Cold Plunges',
      specs: [
        'Medical-grade stainless steel plunge pools at continuous 3°C',
        'Full-spectrum infrared and 90°C traditional Finnish cedar dry sauna',
        'Normatec 3 pneumatic compression boots in private bio-lounges',
        'Medical-grade oxygen enriched recovery chamber'
      ],
      leadMetric: '3°C / 90°C Cycle'
    },
    {
      id: 'turf-engine',
      title: 'HYROX Metabolic Sled & Sprint Turf',
      category: 'conditioning',
      image: HERO_IMAGE,
      aspect: 'col-span-1',
      badgeText: 'Lactic Endurance',
      highlight: '40-Yard High-Density Sprint Turf',
      specs: [
        'Curved Woodway motorless sprint treadmills',
        'Torque Tank M4 magnetic all-surface push sleds',
        'Concept2 RowErgs, SkiErgs and BikeErgs with telemetry links',
        'High-velocity industrial cooling vortex fans'
      ],
      leadMetric: '40-Yard Strip'
    },
    {
      id: 'vip-bio-lab',
      title: 'DEXA Biometrics & Movement Diagnostic Suite',
      category: 'strength',
      image: OLYMPIC_IMAGE,
      aspect: 'col-span-1 lg:col-span-2',
      badgeText: 'Physiological Science',
      highlight: 'Quarterly Gold-Standard DEXA Scans',
      specs: [
        'Full body bone density and visceral adipose tissue composition',
        'VO2 Max breath metabolic gas exchange cart',
        'Force plate jump asymmetry and ground reaction force analysis',
        'Individualized coach dashboard synchronizing Whoop and Oura sleep metrics'
      ],
      leadMetric: '99.4% Precision'
    }
  ];

  const filteredFacilities = activeFilter === 'all'
    ? facilities
    : facilities.filter(f => f.category === activeFilter);

  return (
    <section id="facilities" className="py-24 bg-[#080B12] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#00D2FF]">
              <span>Flagship Architecture</span>
              <span aria-hidden="true" className="text-white/20">·</span>
              <span>Biometric Compounds</span>
            </div>
            <h2 className="mt-2 font-['Barlow_Condensed'] text-4xl sm:text-5xl font-extrabold text-white uppercase tracking-tight">
              STATE-OF-THE-ART <span className="text-[#00D2FF]">TRAINING ZONES</span>
            </h2>
            <p className="mt-2 text-slate-400 max-w-xl text-sm sm:text-base">
              Every square inch is intentionally engineered for peak mechanical output, acoustic focus, and immediate cellular rejuvenation.
            </p>
          </div>

          {/* Interactive filter tabs (functional buttons with click handlers) */}
          <div className="flex items-center gap-1.5 p-1 bg-white/5 rounded-xl border border-white/10 self-start md:self-auto overflow-x-auto max-w-full">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeFilter === 'all'
                  ? 'bg-gradient-to-r from-[#00D2FF]/20 to-[#0066FF]/30 text-white border border-[#00D2FF]/40 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Zones
            </button>
            <button
              onClick={() => setActiveFilter('strength')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeFilter === 'strength'
                  ? 'bg-gradient-to-r from-[#00D2FF]/20 to-[#0066FF]/30 text-white border border-[#00D2FF]/40 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Strength & Lifting
            </button>
            <button
              onClick={() => setActiveFilter('recovery')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeFilter === 'recovery'
                  ? 'bg-gradient-to-r from-[#00D2FF]/20 to-[#0066FF]/30 text-white border border-[#00D2FF]/40 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Contrast Sanctuary
            </button>
            <button
              onClick={() => setActiveFilter('conditioning')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeFilter === 'conditioning'
                  ? 'bg-gradient-to-r from-[#00D2FF]/20 to-[#0066FF]/30 text-white border border-[#00D2FF]/40 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Metabolic Turf
            </button>
          </div>
        </div>

        {/* Asymmetric Bento-Grid Layout with 3D Depth Card Presence */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-10">
          {filteredFacilities.map((facility) => (
            <div
              key={facility.id}
              className={`${facility.aspect} group relative rounded-2xl overflow-hidden glass-panel border border-white/10 hover:border-[#00D2FF]/50 transition-all duration-300 flex flex-col justify-between`}
            >
              {/* Image visual wrapper */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-950">
                <img
                  src={facility.image}
                  alt={facility.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E121A] via-[#0E121A]/40 to-transparent" />

                {/* Floating zone indicator */}
                <div className="absolute top-4 left-4 glass-panel px-3 py-1 rounded-md text-xs font-semibold text-[#00D2FF] border border-[#00D2FF]/30">
                  {facility.badgeText}
                </div>

                <div className="absolute top-4 right-4 glass-panel px-3 py-1 rounded-md text-xs font-bold font-mono text-white border border-white/10">
                  {facility.leadMetric}
                </div>

                {/* Quick 3D Tour Trigger */}
                <button
                  onClick={() => onOpenVirtualTour(facility.title)}
                  className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 glass-panel hover:bg-white/20 text-white px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 border border-white/20"
                >
                  <Eye className="w-3.5 h-3.5 text-[#00D2FF]" />
                  <span>Interactive 3D View</span>
                </button>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-['Barlow_Condensed'] text-2xl font-bold uppercase tracking-wide text-white group-hover:text-[#00D2FF] transition-colors">
                    {facility.title}
                  </h3>
                  <p className="text-xs text-[#FF7700] font-semibold mt-1">
                    {facility.highlight}
                  </p>
                </div>

                {/* Technical specs list */}
                <div className="space-y-2 pt-2 border-t border-white/5">
                  {facility.specs.slice(0, 3).map((spec, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00D2FF] shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="pt-3 flex items-center justify-between">
                  <button
                    onClick={() => onOpenVirtualTour(facility.title)}
                    className="text-xs font-semibold text-[#00D2FF] hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <span>View Equipment Specs & 360°</span>
                    <span aria-hidden="true">→</span>
                  </button>

                  <button
                    onClick={onOpenVIPModal}
                    className="px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-white/10 hover:bg-[#FF5E1A] transition-colors border border-white/10 hover:border-transparent"
                  >
                    Experience In Person
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Bottom Facility Guarantee Banner */}
        <div className="mt-12 p-6 rounded-2xl glass-panel border border-[#00D2FF]/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#00D2FF]/10 border border-[#00D2FF]/30 flex items-center justify-center shrink-0">
              <Shield className="w-6 h-6 text-[#00D2FF]" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Strict Capacity Cap Guarantee</h4>
              <p className="text-xs sm:text-sm text-slate-400">
                To guarantee zero wait times on racks, platforms, and contrast tubs, FlexFinity maintains a strict cap on active members.
              </p>
            </div>
          </div>
          <button
            onClick={onOpenVIPModal}
            className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#0066FF] hover:bg-[#0052cc] transition-colors whitespace-nowrap shadow-lg shadow-[#0066FF]/20"
          >
            Check Club Floor Availability
          </button>
        </div>

      </div>
    </section>
  );
};
