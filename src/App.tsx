import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { FacilityShowcase } from './components/FacilityShowcase.tsx';
import { ProgramsSection } from './components/ProgramsSection.tsx';
import { ScheduleSection } from './components/ScheduleSection.tsx';
import { CoachesSection } from './components/CoachesSection.tsx';
import { PricingCalculator } from './components/PricingCalculator.tsx';
import { Transformations } from './components/Transformations.tsx';
import { FAQSection } from './components/FAQSection.tsx';
import { Footer } from './components/Footer.tsx';
import { VIPPassModal } from './components/VIPPassModal.tsx';
import { ClassBookingModal } from './components/ClassBookingModal.tsx';
import { VirtualTourModal } from './components/VirtualTourModal.tsx';
import { EnrollmentModal } from './components/EnrollmentModal.tsx';
import { Program, ClassSession, Coach, MembershipPlan } from './types/index.ts';

export default function App() {
  // Modal states
  const [isVIPModalOpen, setIsVIPModalOpen] = useState(false);
  const [isVirtualTourOpen, setIsVirtualTourOpen] = useState(false);
  const [virtualTourZone, setVirtualTourZone] = useState<string | undefined>(undefined);
  
  const [selectedSessionForBooking, setSelectedSessionForBooking] = useState<ClassSession | null>(null);
  const [selectedPlanForEnrollment, setSelectedPlanForEnrollment] = useState<MembershipPlan | null>(null);
  const [enrollmentBillingCycle, setEnrollmentBillingCycle] = useState<'monthly' | 'annual'>('annual');

  // Handlers
  const handleOpenVIPModal = () => {
    setIsVIPModalOpen(true);
  };

  const handleCloseVIPModal = () => {
    setIsVIPModalOpen(false);
  };

  const handleOpenVirtualTour = (zoneName?: string) => {
    setVirtualTourZone(zoneName);
    setIsVirtualTourOpen(true);
  };

  const handleCloseVirtualTour = () => {
    setIsVirtualTourOpen(false);
  };

  const handleSelectProgram = (program: Program) => {
    // Open VIP pass or booking flow with preselected program intent
    setIsVIPModalOpen(true);
  };

  const handleBookClass = (session: ClassSession) => {
    setSelectedSessionForBooking(session);
  };

  const handleCloseBookingModal = () => {
    setSelectedSessionForBooking(null);
  };

  const handleConsultCoach = (coach: Coach) => {
    // Open VIP modal for coach consultation
    setIsVIPModalOpen(true);
  };

  const handleSelectPlan = (plan: MembershipPlan, billingCycle: 'monthly' | 'annual') => {
    setSelectedPlanForEnrollment(plan);
    setEnrollmentBillingCycle(billingCycle);
  };

  const handleCloseEnrollmentModal = () => {
    setSelectedPlanForEnrollment(null);
  };

  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 flex flex-col font-['Plus_Jakarta_Sans'] selection:bg-[#00D2FF]/30 selection:text-white">
      {/* Top Navigation */}
      <Navbar onOpenVIPModal={handleOpenVIPModal} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero with 3D Depth Card */}
        <Hero
          onOpenVIPModal={handleOpenVIPModal}
          onOpenVirtualTour={() => handleOpenVirtualTour()}
        />

        {/* Facilities & Equipment 3D Bento Grid */}
        <FacilityShowcase
          onOpenVirtualTour={(zone) => handleOpenVirtualTour(zone)}
          onOpenVIPModal={handleOpenVIPModal}
        />

        {/* Signature Programs & Periodization */}
        <ProgramsSection
          onSelectProgram={handleSelectProgram}
          onOpenVIPModal={handleOpenVIPModal}
        />

        {/* Real-time Schedule & Spot Booking */}
        <ScheduleSection
          onBookClass={handleBookClass}
        />

        {/* Master Coaches & Physiologists */}
        <CoachesSection
          onConsultCoach={handleConsultCoach}
        />

        {/* Memberships & Interactive Tier Calculator */}
        <PricingCalculator
          onSelectPlan={handleSelectPlan}
          onOpenVIPModal={handleOpenVIPModal}
        />

        {/* Quantified Athletic Transformations */}
        <Transformations
          onOpenVIPModal={handleOpenVIPModal}
        />

        {/* FAQ Section */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer onOpenVIPModal={handleOpenVIPModal} />

      {/* Modals & Lead Funnel Overlays */}
      <VIPPassModal
        isOpen={isVIPModalOpen}
        onClose={handleCloseVIPModal}
      />

      <ClassBookingModal
        session={selectedSessionForBooking}
        onClose={handleCloseBookingModal}
      />

      <VirtualTourModal
        isOpen={isVirtualTourOpen}
        initialZone={virtualTourZone}
        onClose={handleCloseVirtualTour}
        onOpenVIPModal={handleOpenVIPModal}
      />

      <EnrollmentModal
        plan={selectedPlanForEnrollment}
        billingCycle={enrollmentBillingCycle}
        onClose={handleCloseEnrollmentModal}
      />
    </div>
  );
}
