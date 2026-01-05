export interface IndustryData {
  id: string;
  name: string;
  slug: string;
  headline: string;
  description: string;
  callScenarios: string[];
  whyItWorks: string[];
  setupRequirements: string[];
  icon?: string;
}

export const industries: IndustryData[] = [
  {
    id: 'home-services',
    name: 'Home Services',
    slug: 'home-services',
    headline: 'Never miss a service call again',
    description: 'HVAC, plumbing, and electrical contractors lose thousands monthly from missed calls. Auralix answers every call, books jobs, and routes emergencies—24/7.',
    callScenarios: [
      'Emergency service requests (no heat, burst pipe, electrical outage)',
      'Scheduling routine maintenance and installations',
      'Quote requests and lead qualification',
    ],
    whyItWorks: [
      'Peak call times (mornings, evenings, weekends) are covered automatically',
      'Emergency calls are immediately routed to on-call technicians',
      'Appointments sync with your existing calendar and job management tools',
      'Every call is captured with full transcript and summary',
    ],
    setupRequirements: [
      'Forward your business phone number to Auralix',
      'Provide your service areas and availability',
      'Share your booking calendar (Google Calendar, Outlook, or job management tool)',
      'Define escalation rules (when to transfer to human)',
    ],
  },
  {
    id: 'clinics',
    name: 'Clinics & Wellness',
    slug: 'clinics',
    headline: 'Patient calls answered, appointments booked',
    description: 'Medical and wellness clinics handle appointment scheduling, patient inquiries, and urgent requests—without adding staff.',
    callScenarios: [
      'Appointment scheduling and rescheduling',
      'Insurance verification and coverage questions',
      'Urgent appointment requests',
    ],
    whyItWorks: [
      'HIPAA-compliant handling of patient information',
      'Seamless integration with practice management systems',
      'Reduces front desk workload during peak hours',
      'Captures every patient inquiry, even after hours',
    ],
    setupRequirements: [
      'Forward clinic phone number',
      'Connect practice management system (if applicable)',
      'Define appointment types and availability',
      'Set up patient information handling protocols',
    ],
  },
  {
    id: 'restaurants',
    name: 'Restaurants',
    slug: 'restaurants',
    headline: 'Handle reservations and takeout orders 24/7',
    description: 'Restaurants miss bookings and orders during busy periods. Auralix answers calls, takes reservations, and processes takeout orders.',
    callScenarios: [
      'Reservation requests and modifications',
      'Takeout and delivery order taking',
      'Hours, menu, and special event inquiries',
    ],
    whyItWorks: [
      'Captures bookings during peak dinner rush when staff is busy',
      'Processes takeout orders without interrupting kitchen flow',
      'Provides consistent customer experience every time',
      'Integrates with reservation and POS systems',
    ],
    setupRequirements: [
      'Forward restaurant phone number',
      'Connect reservation system (if applicable)',
      'Provide menu and pricing information',
      'Define business hours and special events',
    ],
  },
  {
    id: 'property-management',
    name: 'Property Management',
    slug: 'property-management',
    headline: 'Tenant calls handled, maintenance requests logged',
    description: 'Property management companies field maintenance requests, tenant inquiries, and emergency calls around the clock.',
    callScenarios: [
      'Maintenance and repair requests',
      'Emergency calls (water leaks, heating issues, lockouts)',
      'Tenant inquiries about policies, payments, and move-ins',
    ],
    whyItWorks: [
      '24/7 coverage for emergency maintenance requests',
      'Automatically routes urgent issues to on-call maintenance',
      'Logs all requests in your property management system',
      'Reduces after-hours call volume for property managers',
    ],
    setupRequirements: [
      'Forward property management phone number',
      'Connect property management software',
      'Define maintenance request categories and priorities',
      'Set up emergency escalation procedures',
    ],
  },
  {
    id: 'professional-services',
    name: 'Professional Services',
    slug: 'professional-services',
    headline: 'Client inquiries answered, consultations scheduled',
    description: 'Law firms, accounting practices, consulting firms, and other professional services capture every client inquiry and book consultations.',
    callScenarios: [
      'Consultation and meeting scheduling',
      'Service inquiries and pricing questions',
      'Client support and follow-up calls',
    ],
    whyItWorks: [
      'Professional, consistent client communication',
      'Captures leads even when staff is in meetings',
      'Schedules consultations based on real availability',
      'Provides call summaries for client relationship management',
    ],
    setupRequirements: [
      'Forward business phone number',
      'Connect calendar system (Google Calendar, Outlook)',
      'Define consultation types and duration',
      'Set up client intake workflows',
    ],
  },
];

export function getIndustryBySlug(slug: string): IndustryData | undefined {
  return industries.find((industry) => industry.slug === slug);
}

export function getIndustryById(id: string): IndustryData | undefined {
  return industries.find((industry) => industry.id === id);
}
