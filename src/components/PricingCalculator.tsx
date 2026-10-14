import React, { useState } from 'react';
import { Check, Flame, Shield, ArrowUpRight, Calculator, Sparkles } from 'lucide-react';
import { MEMBERSHIP_PLANS } from '../data/gymData.ts';
import { MembershipPlan } from '../types/index.ts';

interface PricingCalculatorProps {
  onSelectPlan: (plan: MembershipPlan, billingCycle: 'monthly' | 'annual') => void;
  onOpenVIPModal: () => void;
}

export const PricingCalculator: React.FC<PricingCalculatorProps> = ({ onSelectPlan, onOpenVIPModal }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');
  const [trainingDays, setTrainingDays] = useState<number>(4);
  const [wantsRecovery, setWantsRecovery] = useState<boolean>(true);
  const [wantsPrivateCoaching, setWantsPrivateCoaching] = useState<boolean>(false);

  // Dynamic recommendation based on customizer sliders
  const getRecommendedTierId = () => {
    if (wantsPrivateCoaching) return 'sovereign-vip';
    if (trainingDays >= 4 || wantsRecovery) return 'infinite-black';
    return 'onyx-tier';
  };

  const recommendedId = getRecommendedTierId();

  return (
    <section id="memberships" className="py-24 bg-[#080B12] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-bold tracking-widest uppercase text-[#00D2FF]">
            <span>Transparent Investment</span>
            <span aria-hidden="true" className="text-white/20">·</span>
            <span>No Initiation Fees</span>
          </div>
          <h2 className="mt-2 font-['Barlow_Condensed'] text-4xl sm:text-5xl font-extrabold text-white uppercase tracking-tight">
            MEMBERSHIP <span className="text-gradient-electric">TIERS</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            All memberships include 24/7 biometric RFID access, towel and locker service, and complimentary membership pause during travel.
          </p>

          {/* Billing Toggle (Monthly vs Annual with 20% savings) */}
          <div className="mt-8 inline-flex items-center gap-3 p-1.5 rounded-xl bg-white/5 border border-white/10">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-5 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-white/20 text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-5 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all flex items-center gap-2 ${
                billingCycle === 'annual'
                  ? 'bg-gradient-to-r from-[#00D2FF] to-[#0066FF] text-black font-bold shadow-md shadow-[#00D2FF]/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>Annual Commitment</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-black/40 text-white font-mono uppercase tracking-wider">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {MEMBERSHIP_PLANS.map((plan) => {
            const price = billingCycle === 'annual' ? plan.annualPriceMonthly : plan.monthlyPrice;
            const isRec = plan.id === recommendedId;

            return (
              <div
                key={plan.id}
                className={`rounded-2xl p-8 relative flex flex-col justify-between transition-all duration-300 ${
                  plan.isPopular
                    ? 'glass-panel-elevated border-2 border-[#00D2FF] glass-glow-blue lg:-translate-y-2'
                    : 'glass-panel border border-white/10 hover:border-white/20'
                }`}
              >
                {/* Popular / Recommended Badge */}
                {plan.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-black bg-gradient-to-r from-[#00D2FF] to-[#00F0FF] shadow-lg uppercase tracking-wider">
                    Most Popular Tier
                  </div>
                )}

                {isRec && !plan.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full text-xs font-bold text-white bg-[#FF5E1A] shadow-md uppercase tracking-wider">
                    Matches Your Profile
                  </div>
                )}

                <div>
                  {/* Tier Title & Description */}
                  <div className="border-b border-white/10 pb-6">
                    <div className="flex items-center justify-between">
                      <h3 className="font-['Barlow_Condensed'] text-3xl font-extrabold uppercase text-white tracking-wide">
                        {plan.name}
                      </h3>
                      <span className="text-xs font-semibold text-slate-400 font-mono">
                        {plan.badge}
                      </span>
                    </div>
                    <p className="mt-2 text-xs sm:text-sm text-slate-300 min-h-[40px]">
                      {plan.description}
                    </p>

                    {/* Price Block */}
                    <div className="mt-6 flex items-baseline gap-2">
                      <span className="text-xs text-slate-400 uppercase font-semibold">$</span>
                      <span className="font-['Barlow_Condensed'] text-5xl font-extrabold text-white tabular-nums tracking-tight">
                        {price}
                      </span>
                      <span className="text-slate-400 text-xs sm:text-sm font-medium">
                        / month {billingCycle === 'annual' ? '(billed yearly)' : ''}
                      </span>
                    </div>
                    {billingCycle === 'annual' && (
                      <div className="mt-1 text-xs text-emerald-400 font-medium">
                        Saves ${(plan.monthlyPrice - plan.annualPriceMonthly) * 12}/year vs monthly
                      </div>
                    )}
                  </div>

                  {/* Features List */}
                  <div className="py-6 space-y-3.5">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Included Privileges:
                    </div>
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                        <div className={`w-4 h-4 rounded-full mt-0.5 flex items-center justify-center shrink-0 ${
                          plan.isPopular ? 'bg-[#00D2FF]/20 text-[#00D2FF]' : 'bg-white/10 text-slate-300'
                        }`}>
                          <Check className="w-3 h-3" />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-6 border-t border-white/10">
                  <button
                    onClick={() => onSelectPlan(plan, billingCycle)}
                    className={`w-full py-4 rounded-xl text-sm font-bold tracking-wide transition-all duration-200 flex items-center justify-center gap-2 active:scale-98 ${
                      plan.isPopular
                        ? 'bg-gradient-to-r from-[#00D2FF] to-[#0066FF] text-black hover:shadow-lg hover:shadow-[#00D2FF]/30 font-extrabold'
                        : 'bg-white/10 text-white hover:bg-[#FF5E1A] hover:text-white'
                    }`}
                  >
                    <span>Enroll in {plan.name}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                  <p className="mt-2 text-center text-[11px] text-slate-400">
                    Complimentary 7-day satisfaction refund guarantee
                  </p>
                </div>

              </div>
            );
          })}
        </div>

        {/* Interactive Customizer Tool: "Calculate Your Optimal Protocol" */}
        <div className="mt-16 glass-panel-elevated p-8 rounded-3xl border border-white/15">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#00D2FF]/10 border border-[#00D2FF]/30 flex items-center justify-center">
                <Calculator className="w-5 h-5 text-[#00D2FF]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Interactive Training Tier Calculator</h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  Adjust your weekly training habits to determine your optimal membership package.
                </p>
              </div>
            </div>

            <div className="glass-panel px-4 py-2 rounded-xl border border-white/10 text-xs text-slate-300">
              Algorithm Recommendation:{' '}
              <strong className="text-[#00D2FF] uppercase font-bold">
                {MEMBERSHIP_PLANS.find(p => p.id === recommendedId)?.name}
              </strong>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
            {/* Slider 1: Training frequency */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-300">
                <span>Weekly Training Frequency:</span>
                <span className="font-mono text-[#00D2FF] text-sm tabular-nums">{trainingDays} Days / Week</span>
              </div>
              <input
                type="range"
                min="2"
                max="7"
                step="1"
                value={trainingDays}
                onChange={(e) => setTrainingDays(Number(e.target.value))}
                className="w-full accent-[#00D2FF] cursor-pointer bg-white/10 h-2 rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>2 (Recovery Focus)</span>
                <span>4 (Balanced)</span>
                <span>7 (Daily Athlete)</span>
              </div>
            </div>

            {/* Toggle 2: Contrast Plunge & Sauna */}
            <div className="space-y-2">
              <span className="text-xs font-semibold text-slate-300 block">
                Contrast Hydro-Thermal Recovery:
              </span>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setWantsRecovery(false)}
                  className={`py-2 px-3 rounded-lg text-xs font-semibold transition-colors ${
                    !wantsRecovery ? 'bg-white/20 text-white' : 'glass-panel text-slate-400'
                  }`}
                >
                  Occasional
                </button>
                <button
                  type="button"
                  onClick={() => setWantsRecovery(true)}
                  className={`py-2 px-3 rounded-lg text-xs font-semibold transition-colors ${
                    wantsRecovery ? 'bg-[#00D2FF] text-black font-bold' : 'glass-panel text-slate-400'
                  }`}
                >
                  Unlimited (3°C / 90°C)
                </button>
              </div>
              <p className="text-[11px] text-slate-400">Recommended for lifting $\ge 3$ times weekly</p>
            </div>

            {/* Toggle 3: 1:1 Private Coaching */}
            <div className="space-y-2">
              <span className="text-xs font-semibold text-slate-300 block">
                1:1 Master Coaching & Velocity:
              </span>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setWantsPrivateCoaching(false)}
                  className={`py-2 px-3 rounded-lg text-xs font-semibold transition-colors ${
                    !wantsPrivateCoaching ? 'bg-white/20 text-white' : 'glass-panel text-slate-400'
                  }`}
                >
                  Open Floor Ratios
                </button>
                <button
                  type="button"
                  onClick={() => setWantsPrivateCoaching(true)}
                  className={`py-2 px-3 rounded-lg text-xs font-semibold transition-colors ${
                    wantsPrivateCoaching ? 'bg-[#FF5E1A] text-white font-bold' : 'glass-panel text-slate-400'
                  }`}
                >
                  Dedicated 1:1 Coach
                </button>
              </div>
              <p className="text-[11px] text-slate-400">Includes force plate diagnostics</p>
            </div>
          </div>

          {/* Quick Apply Button */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-400">
              Based on your selection, you save an estimated <strong className="text-white">$140/month</strong> in individual recovery and guest fee costs.
            </span>
            <button
              onClick={() => {
                const plan = MEMBERSHIP_PLANS.find(p => p.id === recommendedId) || MEMBERSHIP_PLANS[1];
                onSelectPlan(plan, billingCycle);
              }}
              className="px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#FF5E1A] to-[#FF7700] hover:shadow-lg hover:shadow-[#FF5E1A]/20 transition-all whitespace-nowrap"
            >
              Enroll In Recommended Plan
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
