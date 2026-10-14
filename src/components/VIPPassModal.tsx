import React, { useState } from 'react';
import { X, CheckCircle, Flame, Calendar, Clock, ShieldCheck, Download, Copy, Check } from 'lucide-react';

interface VIPPassModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VIPPassModal: React.FC<VIPPassModalProps> = ({ isOpen, onClose }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [visitDate, setVisitDate] = useState('');
  const [primaryGoal, setPrimaryGoal] = useState('hypertrophy');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [passCode, setPassCode] = useState('');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!fullName.trim()) errs.fullName = 'Full name is required';
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) errs.email = 'Valid email is required';
    if (!phone.trim() || phone.length < 7) errs.phone = 'Valid phone number is required';
    if (!visitDate) errs.visitDate = 'Please select your preferred visit date';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Generate VIP pass unique code
    const generatedCode = `FF-${Math.floor(100000 + Math.random() * 900000)}`;
    setPassCode(generatedCode);
    setIsSubmitted(true);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(passCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFullName('');
    setEmail('');
    setPhone('');
    setVisitDate('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl glass-panel-elevated rounded-3xl border border-white/20 p-6 sm:p-8 overflow-hidden shadow-2xl">
        
        {/* Glow ambient */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#FF5E1A]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#00D2FF]/20 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-none"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF5E1A]">
              <Flame className="w-4 h-4" />
              <span>Complimentary 1-Day Access</span>
            </div>
            <h3 className="mt-1 font-['Barlow_Condensed'] text-3xl sm:text-4xl font-extrabold uppercase text-white tracking-wide">
              CLAIM YOUR <span className="text-[#00D2FF]">VIP GUEST PASS</span>
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-300">
              Experience our competition lifting platforms, velocity tracking, and contrast cold plunge sanctuary for a full day. Valued at $65.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                  Full Legal Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Marcus Vance"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#00D2FF] transition-all ${
                    errors.fullName ? 'border-red-500' : 'border-white/15'
                  }`}
                />
                {errors.fullName && <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#00D2FF] transition-all ${
                      errors.email ? 'border-red-500' : 'border-white/15'
                    }`}
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                    Mobile Phone (For Pass SMS)
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#00D2FF] transition-all ${
                      errors.phone ? 'border-red-500' : 'border-white/15'
                    }`}
                  />
                  {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                    Preferred Visit Date
                  </label>
                  <input
                    type="date"
                    value={visitDate}
                    onChange={(e) => setVisitDate(e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#00D2FF] transition-all ${
                      errors.visitDate ? 'border-red-500' : 'border-white/15'
                    }`}
                  />
                  {errors.visitDate && <p className="text-red-400 text-xs mt-1">{errors.visitDate}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                    Primary Fitness Target
                  </label>
                  <select
                    value={primaryGoal}
                    onChange={(e) => setPrimaryGoal(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#141A24] border border-white/15 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#00D2FF] transition-all"
                  >
                    <option value="hypertrophy">Hypertrophy & Muscle Density</option>
                    <option value="olympic">Olympic Weightlifting Power</option>
                    <option value="hyrox">HYROX & Aerobic Work Capacity</option>
                    <option value="recovery">Contrast Therapy & Longevity</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#FF5E1A] via-[#FF6A1A] to-[#FF851A] hover:shadow-lg hover:shadow-[#FF5E1A]/30 transition-all uppercase tracking-wider"
                >
                  Generate VIP Digital Pass
                </button>
              </div>

              <p className="text-center text-[11px] text-slate-400 pt-1">
                Pass valid for 1 full training session + contrast recovery cycle within 30 days. No credit card required.
              </p>
            </form>
          </div>
        ) : (
          <div className="text-center py-4 space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div>
              <h3 className="font-['Barlow_Condensed'] text-3xl font-extrabold uppercase text-white">
                VIP PASS ISSUED FOR {fullName.toUpperCase()}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                A confirmation SMS and calendar invite have been dispatched to <strong>{email}</strong>.
              </p>
            </div>

            {/* Digital Pass Card Graphic */}
            <div className="glass-panel p-6 rounded-2xl border border-[#00D2FF]/40 bg-[#0E131D] text-left relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="font-['Barlow_Condensed'] text-xl font-bold tracking-wider text-white">
                  FLEX<span className="text-[#00D2FF]">FINITY</span> VIP PASS
                </div>
                <span className="text-xs font-mono text-emerald-400 font-semibold uppercase">ACTIVE</span>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-slate-400 block">Guest Name</span>
                  <span className="font-semibold text-white">{fullName}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Valid Date</span>
                  <span className="font-semibold text-white">{visitDate || 'Next 30 Days'}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Pass Code</span>
                  <span className="font-mono text-base font-bold text-[#FF5E1A] tracking-wider">{passCode}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Access Entitlement</span>
                  <span className="text-[#00D2FF] font-medium">Compound + Contrast Plunge</span>
                </div>
              </div>

              {/* Barcode representation */}
              <div className="mt-6 pt-4 border-t border-white/10 flex flex-col items-center justify-center">
                <div className="h-10 w-48 bg-gradient-to-r from-white via-slate-400 to-white opacity-80 flex items-center justify-around px-2">
                  {[...Array(24)].map((_, i) => (
                    <div
                      key={i}
                      className={`h-full bg-black ${i % 3 === 0 ? 'w-1' : i % 2 === 0 ? 'w-0.5' : 'w-1.5'}`}
                    />
                  ))}
                </div>
                <span className="text-[10px] font-mono text-slate-400 mt-1 tracking-widest">{passCode}</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={handleCopy}
                className="px-4 py-2.5 rounded-xl glass-panel text-xs font-semibold text-white hover:border-[#00D2FF] flex items-center gap-1.5"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Code Copied' : 'Copy Pass Code'}</span>
              </button>
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#FF5E1A] to-[#FF7700] text-xs font-bold text-white shadow-md"
              >
                Done
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
