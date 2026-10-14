export interface Program {
  id: string;
  title: string;
  tagline: string;
  focus: string;
  intensity: 'High' | 'Elite' | 'Maximum' | 'Restorative';
  duration: string;
  coach: string;
  benefits: string[];
  description: string;
}

export interface ClassSession {
  id: string;
  day: string;
  time: string;
  title: string;
  coach: string;
  zone: string;
  spotsLeft: number;
  totalSpots: number;
  category: 'strength' | 'endurance' | 'recovery' | 'olympic';
}

export interface Coach {
  id: string;
  name: string;
  title: string;
  specialty: string;
  experience: string;
  bio: string;
  image: string;
  certifications: string[];
}

export interface MembershipPlan {
  id: string;
  name: string;
  badge?: string;
  monthlyPrice: number;
  annualPriceMonthly: number;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export interface TransformationStory {
  id: string;
  name: string;
  role: string;
  duration: string;
  highlightMetric: string;
  metricLabel: string;
  quote: string;
  programUsed: string;
}
