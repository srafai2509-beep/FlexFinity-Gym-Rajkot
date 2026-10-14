import React from 'react';
import { ArrowUpRight, MapPin, Phone, Mail, Clock } from 'lucide-react';

interface FooterProps {
  onOpenVIPModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenVIPModal }) => {
  return (
    <footer className="bg-[#05070B] text-slate-400 border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#hero" className="inline-block">
              <span className="font-['Barlow_Condensed'] text-3xl font-extrabold tracking-wider text-white uppercase flex items-center">
                FLEX<span className="text-[#00D2FF]">FINITY</span>
                <span className="inline-block w-2 h-2 ml-1.5 rounded-full bg-[#FF5E1A]"></span>
              </span>
            </a>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              The premier high-performance fitness sanctuary engineered for athletes, executives, and relentless pursuers of physical supremacy.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenVIPModal}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF5E1A] hover:text-[#ff7700] transition-colors"
              >
                <span>Request Private Facility Walkthrough</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Club Compound</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#facilities" className="hover:text-white transition-colors">Olympic Lifting Vault</a></li>
              <li><a href="#facilities" className="hover:text-white transition-colors">Thermal Contrast Spa</a></li>
              <li><a href="#facilities" className="hover:text-white transition-colors">HYROX Sled Turf</a></li>
              <li><a href="#facilities" className="hover:text-white transition-colors">DEXA Biometrics Lab</a></li>
              <li><a href="#schedule" className="hover:text-white transition-colors">Class Timetable</a></li>
            </ul>
          </div>

          {/* Programs */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Protocols</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#programs" className="hover:text-white transition-colors">Hypertrophy Engineering</a></li>
              <li><a href="#programs" className="hover:text-white transition-colors">Olympic Weightlifting</a></li>
              <li><a href="#programs" className="hover:text-white transition-colors">Aerobic Engine Building</a></li>
              <li><a href="#programs" className="hover:text-white transition-colors">Neuro-Reset Breathwork</a></li>
              <li><a href="#memberships" className="hover:text-white transition-colors">Membership Options</a></li>
            </ul>
          </div>

          {/* Location & Hours */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Flagship Location</h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#00D2FF] shrink-0 mt-0.5" />
                <span>450 Lexington Avenue, Grand Central, New York, NY 10017</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#00D2FF] shrink-0" />
                <span>24/7 Biometric Member Access</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#00D2FF] shrink-0" />
                <span>+1 (212) 890-4400</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#00D2FF] shrink-0" />
                <span>concierge@flexfinitygym.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Quiet Bottom Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} FlexFinity Athletic Compounds LLC. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#privacy" onClick={(e) => e.preventDefault()} className="hover:text-slate-400">Privacy Policy</a>
            <a href="#terms" onClick={(e) => e.preventDefault()} className="hover:text-slate-400">Terms of Service</a>
            <a href="#accessibility" onClick={(e) => e.preventDefault()} className="hover:text-slate-400">Club Bylaws</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
