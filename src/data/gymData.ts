import { Program, ClassSession, Coach, MembershipPlan, TransformationStory } from '../types/index.ts';

export const HERO_IMAGE = '/src/assets/images/hero_flexfinity_gym_1791957504205.jpg';
export const OLYMPIC_IMAGE = '/src/assets/images/facility_olympic_training_1791957505606.jpg';
export const SPA_IMAGE = '/src/assets/images/facility_recovery_spa_1791957505817.jpg';
export const HEAD_COACH_IMAGE = '/src/assets/images/trainer_performance_coach_1791957505827.jpg';

export const GYM_STATS = [
  { value: '45,000', unit: 'sq ft', label: 'Flagship Athletic Compound' },
  { value: '3°C / 90°C', unit: '', label: 'Contrast Hydro-Thermal Suites' },
  { value: '100%', unit: '', label: 'Custom Eleiko & Keiser Precision Rigs' },
  { value: '24 / 7', unit: '', label: 'Biometric RFID Club Access' },
];

export const PROGRAMS: Program[] = [
  {
    id: 'hypertrophy-blueprint',
    title: 'Hypertrophy Engineering',
    tagline: 'Precision mechanical tension & metabolic muscle volume',
    focus: 'Hypertrophy & Structural Density',
    intensity: 'Maximum',
    duration: '60 min',
    coach: 'Marcus Vance',
    benefits: [
      'Velocity-based transducer barbell tracking',
      'Intra-workout hydration & amino bar access',
      'Post-session infrared hyperthermia recovery'
    ],
    description: 'Designed for advanced lifters seeking dense muscle accretion through progressive overload, calibrated eccentric tempos, and personalized biomechanical tuning.'
  },
  {
    id: 'hyrox-metabolic',
    title: 'HYROX & Aerobic Engine',
    tagline: 'High-power lactic endurance & hybrid race conditioning',
    focus: 'Cardiovascular Work Capacity',
    intensity: 'Elite',
    duration: '50 min',
    coach: 'Elena Rostova',
    benefits: [
      'Woodway curved sprint kinematics',
      'Torque sled power intervals on sprint turf',
      'Real-time polar telemetry cardiac output'
    ],
    description: 'A masterclass in hybrid engine building. Learn energy system pacing, sled mechanics, and rowing economy engineered to shatter HYROX and obstacle benchmarks.'
  },
  {
    id: 'olympic-velocity',
    title: 'Olympic Weightlifting Masterclass',
    tagline: 'Explosive triple extension & bar path mastery',
    focus: 'Power, Speed & Dynamic Mobility',
    intensity: 'Elite',
    duration: '75 min',
    coach: 'Marcus Vance',
    benefits: [
      'Competition Eleiko IWF barbells & bumper sets',
      'High-speed video playback technique analysis',
      'Laser-aligned lifting platforms'
    ],
    description: 'Systematic breakdown of the Snatch and Clean & Jerk. Master turnover velocity, bar catch stability, and explosive kinetic chain sequencing.'
  },
  {
    id: 'neuro-recovery',
    title: 'Neuro-Reset & Contrast Therapy',
    tagline: 'Parasympathetic reactivation & cellular rejuvenation',
    focus: 'Systemic Recovery & Longevity',
    intensity: 'Restorative',
    duration: '45 min',
    coach: 'Dr. Sean Davis',
    benefits: [
      '3-minute submerged 3°C cold plunge therapy',
      'Cedar infrared sauna dry thermal shock',
      'Normatec dynamic pneumatic compression'
    ],
    description: 'Deliberate cold-to-hot thermal cycling paired with guided down-regulation breathwork to flush lactic build-up, lower systemic inflammation, and optimize HRV.'
  }
];

export const SCHEDULE_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export const SCHEDULE_DATA: ClassSession[] = [
  // Monday
  { id: 'mon-1', day: 'Monday', time: '06:00 AM', title: 'HYROX Engine Conditioning', coach: 'Elena Rostova', zone: 'Turf Sprint Bay', spotsLeft: 3, totalSpots: 16, category: 'endurance' },
  { id: 'mon-2', day: 'Monday', time: '07:30 AM', title: 'Olympic Snatch Mechanics', coach: 'Marcus Vance', zone: 'Platform Row A', spotsLeft: 2, totalSpots: 10, category: 'olympic' },
  { id: 'mon-3', day: 'Monday', time: '12:00 PM', title: 'Hypertrophy: Posterior Chain', coach: 'Marcus Vance', zone: 'Free Weight Vault', spotsLeft: 5, totalSpots: 14, category: 'strength' },
  { id: 'mon-4', day: 'Monday', time: '05:30 PM', title: 'HYROX Engine Conditioning', coach: 'Elena Rostova', zone: 'Turf Sprint Bay', spotsLeft: 1, totalSpots: 16, category: 'endurance' },
  { id: 'mon-5', day: 'Monday', time: '07:00 PM', title: 'Neuro-Reset: Contrast Plunge', coach: 'Dr. Sean Davis', zone: 'Thermal Sanctuary', spotsLeft: 4, totalSpots: 12, category: 'recovery' },

  // Tuesday
  { id: 'tue-1', day: 'Tuesday', time: '06:30 AM', title: 'Clean & Jerk Velocity', coach: 'Marcus Vance', zone: 'Platform Row A', spotsLeft: 4, totalSpots: 10, category: 'olympic' },
  { id: 'tue-2', day: 'Tuesday', time: '08:00 AM', title: 'Upper Body Hypertrophy Lab', coach: 'Marcus Vance', zone: 'Free Weight Vault', spotsLeft: 2, totalSpots: 14, category: 'strength' },
  { id: 'tue-3', day: 'Tuesday', time: '01:00 PM', title: 'Functional Mobility Flow', coach: 'Dr. Sean Davis', zone: 'Movement Studio', spotsLeft: 6, totalSpots: 15, category: 'recovery' },
  { id: 'tue-4', day: 'Tuesday', time: '06:00 PM', title: 'Threshold Sled & Row Matrix', coach: 'Elena Rostova', zone: 'Turf Sprint Bay', spotsLeft: 3, totalSpots: 16, category: 'endurance' },

  // Wednesday
  { id: 'wed-1', day: 'Wednesday', time: '06:00 AM', title: 'HYROX Power Intervals', coach: 'Elena Rostova', zone: 'Turf Sprint Bay', spotsLeft: 2, totalSpots: 16, category: 'endurance' },
  { id: 'wed-2', day: 'Wednesday', time: '07:30 AM', title: 'Squat Mastery & Speed Work', coach: 'Marcus Vance', zone: 'Power Racks', spotsLeft: 3, totalSpots: 12, category: 'strength' },
  { id: 'wed-3', day: 'Wednesday', time: '05:30 PM', title: 'Olympic Complex Calibration', coach: 'Marcus Vance', zone: 'Platform Row A', spotsLeft: 1, totalSpots: 10, category: 'olympic' },
  { id: 'wed-4', day: 'Wednesday', time: '07:00 PM', title: 'Breathwork & Ice Sanctuary', coach: 'Dr. Sean Davis', zone: 'Thermal Sanctuary', spotsLeft: 5, totalSpots: 12, category: 'recovery' },

  // Thursday
  { id: 'thu-1', day: 'Thursday', time: '06:30 AM', title: 'Chest & Back Hypertrophy', coach: 'Marcus Vance', zone: 'Free Weight Vault', spotsLeft: 4, totalSpots: 14, category: 'strength' },
  { id: 'thu-2', day: 'Thursday', time: '08:00 AM', title: 'Aerobic Base Long Intervals', coach: 'Elena Rostova', zone: 'Turf Sprint Bay', spotsLeft: 6, totalSpots: 16, category: 'endurance' },
  { id: 'thu-3', day: 'Thursday', time: '06:00 PM', title: 'Olympic Jerk Drives & Balance', coach: 'Marcus Vance', zone: 'Platform Row A', spotsLeft: 2, totalSpots: 10, category: 'olympic' },
  { id: 'thu-4', day: 'Thursday', time: '07:30 PM', title: 'Hyperbaric & Cold Plunge Circuit', coach: 'Dr. Sean Davis', zone: 'Thermal Sanctuary', spotsLeft: 3, totalSpots: 10, category: 'recovery' },

  // Friday
  { id: 'fri-1', day: 'Friday', time: '06:00 AM', title: 'Total Body Kinetic Blast', coach: 'Elena Rostova', zone: 'Turf Sprint Bay', spotsLeft: 3, totalSpots: 16, category: 'endurance' },
  { id: 'fri-2', day: 'Friday', time: '07:30 AM', title: 'Deadlift & Posterior Chain', coach: 'Marcus Vance', zone: 'Platform Row B', spotsLeft: 2, totalSpots: 12, category: 'strength' },
  { id: 'fri-3', day: 'Friday', time: '05:30 PM', title: 'Friday Night Heavy Singles', coach: 'Marcus Vance', zone: 'Platform Row A', spotsLeft: 1, totalSpots: 10, category: 'olympic' },
  { id: 'fri-4', day: 'Friday', time: '07:00 PM', title: 'Restorative Cryo Sound Bath', coach: 'Dr. Sean Davis', zone: 'Thermal Sanctuary', spotsLeft: 6, totalSpots: 14, category: 'recovery' },

  // Saturday
  { id: 'sat-1', day: 'Saturday', time: '08:00 AM', title: 'Saturday HYROX Team Simulation', coach: 'Elena Rostova', zone: 'Full Compound', spotsLeft: 4, totalSpots: 24, category: 'endurance' },
  { id: 'sat-2', day: 'Saturday', time: '10:00 AM', title: 'Olympic Weightlifting Open Bar', coach: 'Marcus Vance', zone: 'Platform Row A', spotsLeft: 3, totalSpots: 12, category: 'olympic' },
  { id: 'sat-3', day: 'Saturday', time: '12:00 PM', title: 'Hypertrophy Arm & Deltoid Lab', coach: 'Marcus Vance', zone: 'Free Weight Vault', spotsLeft: 5, totalSpots: 16, category: 'strength' },
  { id: 'sat-4', day: 'Saturday', time: '02:00 PM', title: 'Total System Cold/Hot Regeneration', coach: 'Dr. Sean Davis', zone: 'Thermal Sanctuary', spotsLeft: 2, totalSpots: 12, category: 'recovery' },

  // Sunday
  { id: 'sun-1', day: 'Sunday', time: '09:00 AM', title: 'Longevity Aerobic Engine (Zone 2)', coach: 'Elena Rostova', zone: 'Turf Sprint Bay', spotsLeft: 8, totalSpots: 20, category: 'endurance' },
  { id: 'sun-2', day: 'Sunday', time: '11:00 AM', title: 'Spine Decompression & Mobility', coach: 'Dr. Sean Davis', zone: 'Movement Studio', spotsLeft: 5, totalSpots: 15, category: 'recovery' },
  { id: 'sun-3', day: 'Sunday', time: '01:00 PM', title: 'Thermal Recovery & Sauna Mastery', coach: 'Dr. Sean Davis', zone: 'Thermal Sanctuary', spotsLeft: 4, totalSpots: 12, category: 'recovery' }
];

export const COACHES: Coach[] = [
  {
    id: 'marcus-vance',
    name: 'Marcus Vance, CSCS',
    title: 'Head of Strength & Olympic Performance',
    specialty: 'Velocity-Based Strength & Kinetic Power',
    experience: '14 Years Elite Coaching',
    bio: 'Former collegiate strength director and USA Weightlifting senior coach. Marcus specializes in barbell velocity metrics, CNS fatigue management, and biomechanically calibrated hypertrophy.',
    image: HEAD_COACH_IMAGE,
    certifications: ['CSCS · NSCA', 'USAW Senior Coach Level 2', 'GymAware Velocity Specialist']
  },
  {
    id: 'elena-rostova',
    name: 'Elena Rostova',
    title: 'Lead HYROX & Metabolic Conditioning Specialist',
    specialty: 'Lactic Threshold & Sled Biomechanics',
    experience: '9 Years Pro Hybrid Athlete',
    bio: 'Top-10 global HYROX pro athlete and triathlete coach. Elena designs proprietary metabolic interval programming that maximizes VO2 ceiling without sacrificing lean muscle mass.',
    image: OLYMPIC_IMAGE,
    certifications: ['HYROX Master Trainer', 'EXOS Performance Specialist', 'CrossFit Level 3']
  },
  {
    id: 'dr-sean-davis',
    name: 'Dr. Sean Davis, DPT',
    title: 'Director of Human Recovery & Thermal Medicine',
    specialty: 'Contrast Hydrotherapy & HRV Optimization',
    experience: '11 Years Clinical Physiologist',
    bio: 'Doctor of Physical Therapy and human performance researcher. Sean oversees the FlexFinity contrast suites, cold plunge protocols, and biomechanical injury prehabilitation.',
    image: SPA_IMAGE,
    certifications: ['Doctor of Physical Therapy (DPT)', 'Oura & Whoop Bio-Integrator', 'FAAOMPT Fellow']
  }
];

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: 'onyx-tier',
    name: 'Onyx Access',
    badge: 'Core Foundation',
    monthlyPrice: 195,
    annualPriceMonthly: 155,
    description: 'Complete unrestricted access to our 45,000 sq ft compound, Olympic lifting vault, and locker room amenities.',
    features: [
      '24/7 Biometric RFID access to flagship club',
      'Full access to Eleiko Olympic platforms & turf',
      'Daily complimentary towel & locker service',
      'FlexFinity mobile telemetry & booking app',
      'Infrared sauna access (2 sessions / month)'
    ]
  },
  {
    id: 'infinite-black',
    name: 'Infinite Black',
    badge: 'Most Popular',
    monthlyPrice: 295,
    annualPriceMonthly: 235,
    isPopular: true,
    description: 'Engineered for dedicated athletes demanding elite coaching, unlimited recovery protocols, and priority class reservation.',
    features: [
      'Everything in Onyx Access',
      'Unlimited 3°C cold plunge & Finnish cedar sauna',
      '2 Private 1:1 elite coaching sessions per month',
      'Priority 7-day advance booking for all classes',
      'Quarterly 3D DEXA body composition scan',
      '2 Guest passes per month for training partners'
    ]
  },
  {
    id: 'sovereign-vip',
    name: 'Sovereign VIP',
    badge: 'Maximum Luxury',
    monthlyPrice: 495,
    annualPriceMonthly: 395,
    description: 'The pinnacle of private athletic membership with personal concierge, dedicated locker, and comprehensive physiological oversight.',
    features: [
      'Everything in Infinite Black',
      'Dedicated permanent executive locker suite with laundry',
      'Weekly 1:1 private coaching & velocity analysis',
      'Personalized biometric nutrition & blood panel review',
      'Complimentary valet parking & shake bar daily',
      'Unrestricted VIP guest access at any time'
    ]
  }
];

export const TRANSFORMATION_STORIES: TransformationStory[] = [
  {
    id: 'case-1',
    name: 'Julian Sterling',
    role: 'Venture Partner & Masters Lifter',
    duration: '6 Months',
    highlightMetric: '+38 kg',
    metricLabel: 'Olympic Deadlift & Squat Total',
    quote: 'FlexFinity is unlike any gym on Earth. The velocity tracking combined with immediate 3°C cold plunge cut my recovery time in half while running a demanding investment fund.',
    programUsed: 'Olympic Weightlifting Masterclass'
  },
  {
    id: 'case-2',
    name: 'Sophia Aris',
    role: 'HYROX Pro Athlete & Architect',
    duration: '4 Months',
    highlightMetric: '-18 min',
    metricLabel: 'HYROX World Championship PR',
    quote: 'The metabolic turf, curved treadmills, and Elena’s pacing strategy transformed my lactic tolerance. I dropped from 1:19 down to 1:01 in four months of disciplined coaching.',
    programUsed: 'HYROX & Aerobic Engine'
  },
  {
    id: 'case-3',
    name: 'David Chen',
    role: 'Fintech Founder',
    duration: '8 Months',
    highlightMetric: '-14.2%',
    metricLabel: 'DEXA Body Fat Reduction',
    quote: 'Between the executive locker service, precision barbell platforms, and personalized nutrition guidance, FlexFinity removed every single friction point in my schedule.',
    programUsed: 'Hypertrophy Engineering'
  }
];

export const FAQS = [
  {
    q: 'How does the 1-Day VIP Guest Pass work?',
    a: 'Your VIP pass grants you full day-access to our strength vault, Olympic platforms, cardio deck, and a complimentary 30-minute contrast therapy cycle (cold plunge and infrared sauna). A member concierge will greet you upon arrival for a personalized tour.'
  },
  {
    q: 'What makes FlexFinity different from commercial health clubs?',
    a: 'We cap our total active membership to preserve uncompromised training floor density. You will never wait for a rack or platform. We feature certified Eleiko IWF barbells, Keiser pneumatic machines, GymAware velocity monitoring, and hospital-grade air filtration.'
  },
  {
    q: 'Are coaching sessions included in the membership?',
    a: 'Yes. Our Infinite Black tier includes two 1:1 private coaching sessions monthly, while the Sovereign VIP tier includes weekly personal sessions. All tiers have access to our certified master trainers during open floor hours.'
  },
  {
    q: 'What is the temperature and protocol for the recovery suites?',
    a: 'Our cold plunge pools are chilled to a steady 3°C (37°F) with active UV-C continuous filtration. Our traditional Finnish cedar saunas operate at 90°C (194°F) alongside medical-grade full-spectrum infrared therapy lamps.'
  },
  {
    q: 'Can I freeze or cancel my membership if I travel frequently?',
    a: 'Absolutely. All annual and monthly memberships can be placed on complimentary pause for up to 60 days per calendar year directly through the FlexFinity mobile app with zero penalty fees.'
  }
];
