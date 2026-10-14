import React, { useState } from 'react';
import { X, Compass, ChevronRight, CheckCircle2, RotateCw, Sparkles, Maximize2, Shield } from 'lucide-react';
import { OLYMPIC_IMAGE, SPA_IMAGE, HERO_IMAGE } from '../data/gymData.ts';

interface VirtualTourModalProps {
  isOpen: boolean;
  initialZone?: string;
  onClose: () => void;
  onOpenVIPModal: () => void;
}

export const VirtualTourModal: React.FC<VirtualTourModalProps> = ({
  isOpen,
  initialZone,
  onClose,
  onOpenVIPModal
}) => {
  const [activeZone, setActiveZone] = useState<number>(0);
  const [selectedHotspot, setSelectedHotspot] = useState<number | null>(0);
  const [panX, setPanX] = useState<number>(0);

  if (!isOpen) return null;

  const tourZones = [
    {
      name: 'Olympic Weightlifting Vault',
      image: OLYMPIC_IMAGE,
      description: 'Custom engineered Swedish steel barbell sanctuary with laser position transducers and vibration isolation.',
      hotspots: [
        {
          id: 0,
          title: 'Eleiko IWF Competition Barbell',
          x: '48%',
          y: '42%',
          spec: 'Swedish clean-drawn steel rated to 215,000 PSI tensile strength with calibrated needle bearings for friction-free rotation.'
        },
        {
          id: 1,
          title: 'Velocity Transducer System',
          x: '75%',
          y: '22%',
          spec: 'GymAware real-time bar speed measurement telemetry mounted on overhead gantry displays instantaneous meters/second.'
        },
        {
          id: 2,
          title: 'Laser-Etched Hardwood Platform',
          x: '40%',
          y: '78%',
          spec: 'Tri-layer laminated oak with high-density vulcanized rubber drop zones for maximum kinetic absorption.'
        }
      ]
    },
    {
      name: 'Thermal Contrast Sanctuary',
      image: SPA_IMAGE,
      description: 'Chilled 3°C cold plunge tubs paired with a 90°C Finnish cedar infrared sauna for cellular shock protein activation.',
      hotspots: [
        {
          id: 0,
          title: '3°C Continuous Cold Plunge',
          x: '28%',
          y: '72%',
          spec: 'Continuous circulation with medical-grade UV-C filtration, maintaining exactly 3.0°C (37°F) for rapid parasympathetic tone.'
        },
        {
          id: 1,
          title: '90°C Finnish Cedar Sauna',
          x: '62%',
          y: '45%',
          spec: 'Sustainably harvested northern red cedar with full-spectrum infrared heating panels and volcanic stone convection heater.'
        },
        {
          id: 2,
          title: 'Acoustic Sound Bath System',
          x: '82%',
          y: '18%',
          spec: 'Binaural 432Hz spatial audio integration dampens cognitive chatter during post-workout thermal recovery cycles.'
        }
      ]
    },
    {
      name: 'Metabolic Sprint & Sled Turf',
      image: HERO_IMAGE,
      description: '40-yard competition turf runway flanked by curved manual treadmills and biometric heart rate monitoring.',
      hotspots: [
        {
          id: 0,
          title: '40-Yard Sprint Strip',
          x: '45%',
          y: '65%',
          spec: 'Dense 12mm texturized nylon turf allowing seamless sled push traction without joint shearing forces.'
        },
        {
          id: 1,
          title: 'Woodway Curved Treadmills',
          x: '72%',
          y: '58%',
          spec: 'Motorless curved slat belt driven purely by athlete kinetic power, demanding 30% greater metabolic recruitment.'
        },
        {
          id: 2,
          title: 'HEPA 13 Air Scrubber Grid',
          x: '30%',
          y: '15%',
          spec: 'Hospital-grade ventilation cycling 100% fresh conditioned air through the high-intensity zone every 8 minutes.'
        }
      ]
    }
  ];

  const currentZoneData = tourZones[activeZone];
  const activeSpot = selectedHotspot !== null ? currentZoneData.hotspots[selectedHotspot] : null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl h-[92vh] max-h-[850px] glass-panel-elevated rounded-3xl border border-white/20 flex flex-col overflow-hidden shadow-2xl">
        
        {/* Top Header Bar */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-black/40">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#00D2FF]/20 text-[#00D2FF] flex items-center justify-center">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs uppercase font-mono tracking-wider text-[#00D2FF]">3D Virtual Facility Tour</span>
              <h3 className="font-['Barlow_Condensed'] text-xl font-bold uppercase text-white">
                {currentZoneData.name}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                onClose();
                onOpenVIPModal();
              }}
              className="hidden sm:inline-flex px-4 py-2 rounded-lg text-xs font-bold text-white bg-[#FF5E1A] hover:bg-[#ff7700] transition-colors"
            >
              Book In-Person Visit
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Zone Selector Strip */}
        <div className="px-6 py-2.5 bg-white/5 border-b border-white/10 flex items-center gap-2 overflow-x-auto">
          {tourZones.map((zone, idx) => (
            <button
              key={idx}
              onClick={() => {
                setActiveZone(idx);
                setSelectedHotspot(0);
              }}
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                activeZone === idx
                  ? 'bg-[#00D2FF] text-black font-bold shadow'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              {zone.name}
            </button>
          ))}
        </div>

        {/* 360 Interactive Viewport Area */}
        <div className="relative flex-1 bg-slate-950 overflow-hidden select-none">
          {/* Main Panorama Image */}
          <img
            src={currentZoneData.image}
            alt={currentZoneData.name}
            className="w-full h-full object-cover transition-transform duration-500"
            style={{ transform: `scale(1.08) translateX(${panX}px)` }}
          />

          {/* Vignette Scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none" />

          {/* Interactive Hotspot Pins */}
          {currentZoneData.hotspots.map((spot, i) => (
            <button
              key={i}
              onClick={() => setSelectedHotspot(i)}
              style={{ left: spot.x, top: spot.y }}
              className={`absolute -translate-x-1/2 -translate-y-1/2 p-2 rounded-full transition-all duration-200 group z-20 ${
                selectedHotspot === i
                  ? 'scale-125 ring-4 ring-[#00D2FF]/50 bg-[#00D2FF] text-black shadow-[0_0_20px_#00D2FF]'
                  : 'bg-black/70 text-white hover:scale-110 border border-white/40'
              }`}
            >
              <div className="w-3 h-3 rounded-full bg-white animate-ping opacity-75 absolute inset-0 m-auto" />
              <div className="w-3 h-3 rounded-full bg-current relative z-10" />
            </button>
          ))}

          {/* Selected Hotspot Detail Box */}
          {activeSpot && (
            <div className="absolute bottom-6 left-6 right-6 sm:right-auto sm:max-w-md glass-panel-elevated p-5 rounded-2xl border border-[#00D2FF]/40 shadow-2xl animate-in slide-in-from-bottom-4 duration-200 z-30">
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <span className="text-[11px] font-mono text-[#00D2FF] font-semibold uppercase tracking-wider">
                  Equipment Benchmark
                </span>
                <span className="text-xs text-slate-400">Spec Detail</span>
              </div>
              <h4 className="mt-2 text-base font-bold text-white">
                {activeSpot.title}
              </h4>
              <p className="mt-1 text-xs text-slate-300 leading-relaxed">
                {activeSpot.spec}
              </p>
            </div>
          )}

          {/* Panning Controls */}
          <div className="absolute top-4 right-4 glass-panel px-3 py-1.5 rounded-xl border border-white/10 flex items-center gap-2 text-xs text-slate-300">
            <button
              onClick={() => setPanX(Math.min(panX + 30, 60))}
              className="p-1 hover:text-white"
              title="Pan Left"
            >
              ←
            </button>
            <span className="text-[11px] font-mono uppercase">Rotate Field</span>
            <button
              onClick={() => setPanX(Math.max(panX - 30, -60))}
              className="p-1 hover:text-white"
              title="Pan Right"
            >
              →
            </button>
          </div>
        </div>

        {/* Footer info strip */}
        <div className="px-6 py-3 bg-[#080B12] border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
          <span>Click on glowing markers to inspect equipment engineering and hygiene standards.</span>
          <button
            onClick={() => {
              onClose();
              onOpenVIPModal();
            }}
            className="text-[#FF5E1A] font-semibold hover:underline"
          >
            Schedule VIP Walkthrough →
          </button>
        </div>

      </div>
    </div>
  );
};
