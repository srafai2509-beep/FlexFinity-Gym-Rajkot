import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenVIPModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenVIPModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080B12]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/80'
          : 'bg-transparent border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strictly compliant 3-Zone Top Bar Contract */}
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#hero"
            className="flex items-center gap-2 group whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D2FF]"
          >
            <span className="font-['Barlow_Condensed'] text-2xl sm:text-3xl font-extrabold tracking-wider text-white uppercase flex items-center">
              FLEX<span className="text-[#00D2FF]">FINITY</span>
              <span className="inline-block w-2 h-2 ml-1.5 rounded-full bg-[#FF5E1A]"></span>
            </span>
          </a>

          {/* Zone 2: 5 clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a
              href="#facilities"
              className="hover:text-[#00D2FF] transition-colors whitespace-nowrap shrink-0 hover:underline hover:underline-offset-8"
            >
              Facilities
            </a>
            <a
              href="#programs"
              className="hover:text-[#00D2FF] transition-colors whitespace-nowrap shrink-0 hover:underline hover:underline-offset-8"
            >
              Programs
            </a>
            <a
              href="#schedule"
              className="hover:text-[#00D2FF] transition-colors whitespace-nowrap shrink-0 hover:underline hover:underline-offset-8"
            >
              Live Schedule
            </a>
            <a
              href="#coaches"
              className="hover:text-[#00D2FF] transition-colors whitespace-nowrap shrink-0 hover:underline hover:underline-offset-8"
            >
              Coaches
            </a>
            <a
              href="#memberships"
              className="hover:text-[#00D2FF] transition-colors whitespace-nowrap shrink-0 hover:underline hover:underline-offset-8"
            >
              Memberships
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenVIPModal}
              className="relative group overflow-hidden px-5 py-2.5 rounded-lg text-sm font-semibold tracking-wide text-white bg-gradient-to-r from-[#FF5E1A] to-[#FF7700] hover:from-[#ff6b2b] hover:to-[#ff851a] shadow-lg shadow-[#FF5E1A]/25 transition-all duration-200 active:scale-95 whitespace-nowrap shrink-0 flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-[#00D2FF]"
            >
              <span>Book VIP Pass</span>
              <ArrowUpRight className="w-4 h-4 text-white/90 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenVIPModal}
              className="px-3 py-1.5 text-xs font-semibold rounded-md bg-[#FF5E1A] text-white whitespace-nowrap"
            >
              VIP Pass
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white focus-visible:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden glass-panel border-b border-white/10 px-6 py-6 space-y-4 animate-in fade-in duration-200">
          <a
            href="#facilities"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-slate-200 hover:text-[#00D2FF]"
          >
            Facilities & 3D Tour
          </a>
          <a
            href="#programs"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-slate-200 hover:text-[#00D2FF]"
          >
            Training Programs
          </a>
          <a
            href="#schedule"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-slate-200 hover:text-[#00D2FF]"
          >
            Class Schedule
          </a>
          <a
            href="#coaches"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-slate-200 hover:text-[#00D2FF]"
          >
            Elite Coaches
          </a>
          <a
            href="#memberships"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-slate-200 hover:text-[#00D2FF]"
          >
            Membership Plans
          </a>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenVIPModal();
              }}
              className="w-full py-3 rounded-lg text-center font-semibold text-white bg-gradient-to-r from-[#FF5E1A] to-[#FF7700] shadow-md shadow-[#FF5E1A]/30"
            >
              Claim VIP Day Pass
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
