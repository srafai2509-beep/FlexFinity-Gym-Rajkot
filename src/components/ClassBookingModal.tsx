import React, { useState } from 'react';
import { X, CheckCircle, Clock, MapPin, User, Calendar } from 'lucide-react';
import { ClassSession } from '../types/index.ts';

interface ClassBookingModalProps {
  session: ClassSession | null;
  onClose: () => void;
}

export const ClassBookingModal: React.FC<ClassBookingModalProps> = ({ session, onClose }) => {
  const [athleteName, setAthleteName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isBooked, setIsBooked] = useState(false);
  const [error, setError] = useState('');

  if (!session) return null;

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!athleteName.trim() || !email.trim()) {
      setError('Please provide your name and email address.');
      return;
    }
    setError('');
    setIsBooked(true);
  };

  const handleClose = () => {
    setIsBooked(false);
    setAthleteName('');
    setEmail('');
    setPhone('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg glass-panel-elevated rounded-3xl border border-white/20 p-6 sm:p-8 overflow-hidden shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isBooked ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00D2FF]">
              <span>Class Reservation</span>
            </div>
            <h3 className="mt-1 font-['Barlow_Condensed'] text-2xl sm:text-3xl font-extrabold uppercase text-white">
              RESERVE YOUR SPOT
            </h3>

            {/* Session Summary Card */}
            <div className="mt-4 p-4 rounded-xl glass-panel border border-white/10 space-y-2">
              <h4 className="text-base font-bold text-white">{session.title}</h4>
              <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#00D2FF]" />
                  <span>{session.day}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#00D2FF]" />
                  <span className="font-mono">{session.time}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#FF5E1A]" />
                  <span>{session.coach}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#FF5E1A]" />
                  <span>{session.zone}</span>
                </div>
              </div>
            </div>

            <form onSubmit={handleBooking} className="mt-5 space-y-4">
              {error && <p className="text-xs text-red-400">{error}</p>}

              <div>
                <label className="block text-xs font-semibold uppercase text-slate-300 mb-1">
                  Athlete Name
                </label>
                <input
                  type="text"
                  placeholder="Your full name"
                  value={athleteName}
                  onChange={(e) => setAthleteName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#00D2FF]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-slate-300 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="your.email@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#00D2FF]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-slate-300 mb-1">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#00D2FF]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#00D2FF] to-[#0066FF] hover:shadow-lg hover:shadow-[#00D2FF]/25 transition-all uppercase tracking-wider text-black"
                >
                  Confirm Reservation
                </button>
              </div>

              <p className="text-[11px] text-center text-slate-400">
                Spots are held until 5 minutes before class start time. Towels and locker access provided.
              </p>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-5">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div>
              <h3 className="font-['Barlow_Condensed'] text-3xl font-extrabold uppercase text-white">
                SPOT CONFIRMED FOR {athleteName}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                You are registered for <strong>{session.title}</strong> on {session.day} at {session.time}.
              </p>
            </div>

            <div className="p-4 rounded-xl glass-panel text-left text-xs text-slate-300 space-y-1">
              <div>Zone: <strong className="text-white">{session.zone}</strong></div>
              <div>Lead Coach: <strong className="text-white">{session.coach}</strong></div>
              <div>Check-in: <strong className="text-[#00D2FF]">Present ID at Front Concierge</strong></div>
            </div>

            <button
              onClick={handleClose}
              className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-white"
            >
              Close & Return
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
