import React, { useState } from 'react';
import { X, CheckCircle, Shield, CreditCard, ArrowRight, Check } from 'lucide-react';
import { MembershipPlan } from '../types/index.ts';

interface EnrollmentModalProps {
  plan: MembershipPlan | null;
  billingCycle: 'monthly' | 'annual';
  onClose: () => void;
}

export const EnrollmentModal: React.FC<EnrollmentModalProps> = ({ plan, billingCycle, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  if (!plan) return null;

  const price = billingCycle === 'annual' ? plan.annualPriceMonthly : plan.monthlyPrice;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !phone.trim()) {
      setError('Please complete all contact fields.');
      return;
    }
    setError('');
    setIsSuccess(true);
  };

  const handleClose = () => {
    setIsSuccess(false);
    setName('');
    setEmail('');
    setPhone('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl glass-panel-elevated rounded-3xl border border-white/20 p-6 sm:p-8 overflow-hidden shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close enrollment modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00D2FF]">
              <span>Direct Membership Enrollment</span>
            </div>
            <h3 className="mt-1 font-['Barlow_Condensed'] text-3xl sm:text-4xl font-extrabold uppercase text-white">
              JOIN {plan.name}
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-slate-300">
              Lock in your membership rate. Billed at <strong>${price}/month</strong> ({billingCycle === 'annual' ? 'annual contract' : 'monthly flex'}).
            </p>

            {/* Plan Highlights */}
            <div className="mt-5 p-4 rounded-xl glass-panel border border-white/10 space-y-2">
              <div className="flex items-center justify-between text-xs border-b border-white/10 pb-2">
                <span className="text-slate-400">Selected Tier:</span>
                <span className="font-bold text-white uppercase">{plan.name}</span>
              </div>
              <div className="space-y-1.5 pt-1">
                {plan.features.slice(0, 3).map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                    <Check className="w-3.5 h-3.5 text-[#00D2FF]" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              {error && <p className="text-xs text-red-400">{error}</p>}

              <div>
                <label className="block text-xs font-semibold uppercase text-slate-300 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Julian Sterling"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#00D2FF]"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="name@work.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#00D2FF]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-300 mb-1">
                    Mobile Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#00D2FF]"
                    required
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#FF5E1A] to-[#FF7700] hover:shadow-lg hover:shadow-[#FF5E1A]/30 transition-all uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <span>Complete Enrollment & Reserve RFID Key</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1">
                <Shield className="w-3.5 h-3.5 text-[#00D2FF]" />
                <span>Protected by 7-Day Unconditional Money-Back Guarantee</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div>
              <h3 className="font-['Barlow_Condensed'] text-3xl font-extrabold uppercase text-white">
                WELCOME TO FLEXFINITY, {name.toUpperCase()}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Your <strong>{plan.name}</strong> membership is reserved. Your digital RFID keycard instructions have been sent to <strong>{email}</strong>.
              </p>
            </div>

            <div className="glass-panel p-5 rounded-2xl text-left text-xs text-slate-300 space-y-2 border border-[#00D2FF]/30">
              <div className="flex justify-between">
                <span>Account Status:</span>
                <span className="font-bold text-emerald-400 uppercase">Active / Verified</span>
              </div>
              <div className="flex justify-between">
                <span>Monthly Investment:</span>
                <span className="font-mono text-white font-bold">${price}/month</span>
              </div>
              <div className="flex justify-between">
                <span>Next Step:</span>
                <span className="text-[#00D2FF]">Collect biometric fob at Front Concierge</span>
              </div>
            </div>

            <button
              onClick={handleClose}
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-[#FF5E1A] to-[#FF7700] text-xs font-bold text-white shadow-md"
            >
              Finish & Return to Site
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
