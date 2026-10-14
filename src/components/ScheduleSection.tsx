import React, { useState } from 'react';
import { Calendar, Clock, MapPin, User, Check, Users } from 'lucide-react';
import { SCHEDULE_DAYS, SCHEDULE_DATA } from '../data/gymData.ts';
import { ClassSession } from '../types/index.ts';

interface ScheduleSectionProps {
  onBookClass: (session: ClassSession) => void;
}

export const ScheduleSection: React.FC<ScheduleSectionProps> = ({ onBookClass }) => {
  const [selectedDay, setSelectedDay] = useState<string>('Monday');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredSessions = SCHEDULE_DATA.filter(session => {
    const dayMatches = session.day === selectedDay;
    const categoryMatches = selectedCategory === 'all' || session.category === selectedCategory;
    return dayMatches && categoryMatches;
  });

  return (
    <section id="schedule" className="py-24 bg-[#080B12] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#00D2FF]">
              <span>Real-Time Club Floor Access</span>
              <span aria-hidden="true" className="text-white/20">·</span>
              <span>Intimate Coaching Ratios</span>
            </div>
            <h2 className="mt-2 font-['Barlow_Condensed'] text-4xl sm:text-5xl font-extrabold text-white uppercase tracking-tight">
              WEEKLY <span className="text-[#00D2FF]">COACHING SCHEDULE</span>
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-xl">
              Classes are strictly capped to maintain optimal 1:6 coach-to-athlete feedback. Instant spot reservation with membership or VIP Day Pass.
            </p>
          </div>

          {/* Category Filter Pills / Buttons */}
          <div className="flex items-center gap-1.5 p-1 bg-white/5 rounded-xl border border-white/10 overflow-x-auto">
            {[
              { id: 'all', label: 'All Classes' },
              { id: 'strength', label: 'Hypertrophy' },
              { id: 'olympic', label: 'Olympic Barbell' },
              { id: 'endurance', label: 'HYROX Turf' },
              { id: 'recovery', label: 'Contrast Spa' }
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                  selectedCategory === cat.id
                    ? 'bg-[#00D2FF] text-black font-bold shadow-md shadow-[#00D2FF]/20'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Days of week selector tabs */}
        <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {SCHEDULE_DAYS.map((day) => {
            const isSelected = selectedDay === day;
            return (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap shrink-0 flex items-center gap-2 ${
                  isSelected
                    ? 'bg-gradient-to-r from-[#FF5E1A] to-[#FF7700] text-white shadow-lg shadow-[#FF5E1A]/25'
                    : 'glass-panel text-slate-400 hover:text-white hover:border-white/20'
                }`}
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>{day}</span>
              </button>
            );
          })}
        </div>

        {/* Sessions List */}
        <div className="mt-8 space-y-3">
          {filteredSessions.length > 0 ? (
            filteredSessions.map((session) => (
              <div
                key={session.id}
                className="glass-panel p-5 sm:p-6 rounded-2xl border border-white/10 hover:border-[#00D2FF]/40 transition-all duration-200 flex flex-col md:flex-row md:items-center justify-between gap-4 group"
              >
                {/* Time & Session Title */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                  <div className="flex items-center gap-2 sm:w-32 shrink-0">
                    <Clock className="w-4 h-4 text-[#00D2FF]" />
                    <span className="font-mono text-sm sm:text-base font-bold text-white tabular-nums">
                      {session.time}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-[#00D2FF] transition-colors">
                      {session.title}
                    </h3>
                    <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400">
                      <span className="flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-slate-400" />
                        <span>Coach: <strong className="text-slate-200">{session.coach}</strong></span>
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        <span>{session.zone}</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Capacity Counter & Book Action */}
                <div className="flex items-center justify-between sm:justify-end gap-5 pt-3 sm:pt-0 border-t sm:border-t-0 border-white/5">
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-xs font-mono tabular-nums text-slate-300">
                      <Users className="w-3.5 h-3.5 text-[#FF7700]" />
                      <span className={`font-bold ${session.spotsLeft <= 2 ? 'text-[#FF5E1A]' : 'text-emerald-400'}`}>
                        {session.spotsLeft} spots left
                      </span>
                      <span className="text-slate-500">/ {session.totalSpots}</span>
                    </div>
                    <span className="text-[11px] text-slate-400">Capped capacity</span>
                  </div>

                  <button
                    onClick={() => onBookClass(session)}
                    className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-white/10 hover:bg-[#00D2FF] hover:text-black transition-all shadow-sm active:scale-95 whitespace-nowrap shrink-0"
                  >
                    Reserve Spot
                  </button>
                </div>

              </div>
            ))
          ) : (
            <div className="glass-panel p-12 rounded-2xl text-center text-slate-400">
              <p className="text-base">No classes found matching this category filter on {selectedDay}.</p>
              <button
                onClick={() => setSelectedCategory('all')}
                className="mt-3 text-xs font-bold text-[#00D2FF] hover:underline"
              >
                Clear filters to show all {selectedDay} sessions
              </button>
            </div>
          )}
        </div>

        {/* Bottom Booking Notice */}
        <div className="mt-8 text-center text-xs text-slate-400">
          Members enjoy 7-day advance booking window via the FlexFinity mobile app. VIP Pass holders can book 24 hours in advance.
        </div>

      </div>
    </section>
  );
};
