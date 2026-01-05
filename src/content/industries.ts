export interface ConversationLine {
  speaker: 'AI' | 'Customer';
  text: string;
}

export interface DetailedScenario {
  title: string;
  description: string;
  conversation: ConversationLine[];
  outcome: string;
}

export interface Metric {
  stat: string;
  label: string;
  description: string;
}

export interface UseCase {
  title: string;
  description: string;
  workflow: string[];
  benefits: string[];
}

export interface IndustryFeature {
  title: string;
  description: string;
  icon?: string;
}

export interface Integration {
  name: string;
  description: string;
  benefits: string[];
  status: 'Available' | 'Coming Soon';
}

export interface BeforeAfter {
  before: string[];
  after: string[];
}

export interface IndustryTestimonial {
  quote: string;
  author: string;
  role: string;
  company?: string;
}

export interface IndustryData {
  id: string;
  name: string;
  slug: string;
  headline: string;
  description: string;
  callScenarios: string[];
  detailedScenarios?: DetailedScenario[];
  metrics: Metric[];
  useCases: UseCase[];
  features: IndustryFeature[];
  integrations: Integration[];
  beforeAfter: BeforeAfter;
  testimonials?: IndustryTestimonial[];
  whyItWorks: string[];
  setupRequirements: string[];
  pricingNote?: string;
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
    detailedScenarios: [
      {
        title: 'Emergency Heating Failure',
        description: 'Customer calls with urgent heating issue during winter',
        conversation: [
          { speaker: 'AI', text: 'Hello, this is Auralix AI, an artificial intelligence assistant. How can I help you today?' },
          { speaker: 'Customer', text: 'My heat isn\'t working and it\'s freezing in here. I have a 2-year-old and it\'s 15 degrees outside.' },
          { speaker: 'AI', text: 'I understand this is urgent. Let me get you help right away. What\'s your address?' },
          { speaker: 'Customer', text: '123 Main Street, apartment 4B.' },
          { speaker: 'AI', text: 'Got it. And what type of heating system do you have?' },
          { speaker: 'Customer', text: 'It\'s a gas furnace. The pilot light might be out.' },
          { speaker: 'AI', text: 'I\'m creating an emergency service request now. Our on-call technician will be dispatched as soon as possible. I\'ll send you a text confirmation with their ETA. Is there anything else I should know?' },
          { speaker: 'Customer', text: 'No, that\'s it. Thank you so much.' },
          { speaker: 'AI', text: 'You\'re welcome. Stay warm, and our technician will be there soon.' },
        ],
        outcome: 'Emergency job created and dispatched to on-call technician. Customer received SMS confirmation with technician ETA.',
      },
      {
        title: 'Routine Maintenance Booking',
        description: 'Customer wants to schedule annual HVAC maintenance',
        conversation: [
          { speaker: 'AI', text: 'Hello, this is Auralix AI. How can I help you?' },
          { speaker: 'Customer', text: 'I need to schedule my annual AC tune-up before summer.' },
          { speaker: 'AI', text: 'Absolutely. Let me check our availability. What days work best for you?' },
          { speaker: 'Customer', text: 'I\'m free most weekday mornings, or Saturday if that works.' },
          { speaker: 'AI', text: 'I have availability this Saturday at 9 AM or 10 AM, or next Tuesday morning. Which do you prefer?' },
          { speaker: 'Customer', text: 'Saturday at 9 AM sounds perfect.' },
          { speaker: 'AI', text: 'Great! I\'ve booked you for Saturday at 9 AM. The service includes cleaning, inspection, and basic maintenance. The cost is $149. I\'ll send you a confirmation text with the appointment details. Is there anything else?' },
          { speaker: 'Customer', text: 'No, that\'s perfect. Thank you!' },
        ],
        outcome: 'Appointment booked directly into calendar. Job created in CRM. Customer received confirmation SMS with appointment details.',
      },
      {
        title: 'Quote Request for New Installation',
        description: 'Homeowner needs quote for new HVAC system',
        conversation: [
          { speaker: 'AI', text: 'Hello, this is Auralix AI. How can I help you today?' },
          { speaker: 'Customer', text: 'I need a quote for replacing my old air conditioning unit.' },
          { speaker: 'AI', text: 'I\'d be happy to help with that. To give you an accurate quote, I\'ll need some information. What size is your home?' },
          { speaker: 'Customer', text: 'It\'s about 2,000 square feet, two stories.' },
          { speaker: 'AI', text: 'And what type of system are you looking for? Central air, heat pump, or something else?' },
          { speaker: 'Customer', text: 'I think central air would be best for our home.' },
          { speaker: 'AI', text: 'Perfect. I\'m creating a lead for you, and one of our specialists will call you within 24 hours to schedule a free in-home consultation. They\'ll provide a detailed quote based on your specific needs. What\'s the best number to reach you?' },
          { speaker: 'Customer', text: '555-1234. And my name is Sarah Johnson.' },
          { speaker: 'AI', text: 'Thank you, Sarah. I\'ve got everything set up. You\'ll receive a text confirmation, and our specialist will contact you soon. Is there anything else I can help with?' },
        ],
        outcome: 'Qualified lead captured with all details. Lead created in CRM and assigned to sales team. Customer added to follow-up sequence.',
      },
    ],
    metrics: [
      { stat: '24/7', label: 'Availability', description: 'After-hours and weekend coverage' },
      { stat: 'Instant', label: 'Call answering', description: 'Every call answered immediately' },
      { stat: '100%', label: 'Call capture rate', description: 'Never miss a call' },
      { stat: 'Reduced', label: 'Administrative time', description: 'Less time on phone management' },
    ],
    useCases: [
      {
        title: 'After-Hours Emergency Coverage',
        description: 'Handle urgent calls when your team is off',
        workflow: [
          'Customer calls with emergency (no heat, burst pipe, etc.)',
          'AI identifies urgency and collects essential details',
          'Emergency job created in CRM',
          'On-call technician receives instant notification with full context',
          'Customer gets SMS confirmation with technician ETA',
          'Technician arrives and completes service',
        ],
        benefits: [
          'Never lose an emergency call',
          'Faster response times',
          'Better customer satisfaction',
          'Increased revenue from after-hours calls',
        ],
      },
      {
        title: 'Peak Hour Overflow',
        description: 'Handle call volume spikes during busy periods',
        workflow: [
          'Multiple calls come in during morning rush',
          'AI answers all calls simultaneously',
          'Qualifies leads and books appointments',
          'Routes urgent calls to available staff',
          'All calls logged with full transcripts',
          'Team receives organized call summaries',
        ],
        benefits: [
          'No busy signals or voicemail',
          'Every call answered professionally',
          'Better lead qualification',
          'Reduced staff stress during peak times',
        ],
      },
      {
        title: 'Automated Appointment Booking',
        description: 'Streamline scheduling without human intervention',
        workflow: [
          'Customer calls to schedule service',
          'AI checks real-time calendar availability',
          'Presents available time slots',
          'Customer selects preferred time',
          'Appointment booked directly into calendar',
          'Job created in CRM with customer details',
          'Confirmation SMS sent to customer',
        ],
        benefits: [
          'No double-bookings',
          'Reduced scheduling errors',
          'Faster booking process',
          'Better customer experience',
        ],
      },
    ],
    features: [
      {
        title: 'Emergency Triage & Routing',
        description: 'Intelligently identifies urgent calls and routes them to on-call technicians with full context and priority handling.',
      },
      {
        title: 'CRM Integration',
        description: 'Seamlessly integrates with ServiceTitan, Jobber, Housecall Pro, and other popular home services CRMs for automatic job creation.',
      },
      {
        title: 'Lead Qualification',
        description: 'Asks qualifying questions to capture complete customer information, service needs, and urgency level before booking.',
      },
      {
        title: 'Multi-Location Support',
        description: 'Handles calls for multiple service locations, routing to the appropriate team based on service area and availability.',
      },
      {
        title: 'Call Summaries & Transcripts',
        description: 'Provides detailed call summaries and full transcripts sent to your team via email or integrated into your CRM.',
      },
      {
        title: 'SMS Confirmations',
        description: 'Sends SMS confirmations to customers with appointment details, technician ETA, and service reminders.',
      },
    ],
    integrations: [
      {
        name: 'ServiceTitan',
        description: 'Native API integration for automatic job creation and real-time sync',
        benefits: [
          'Automatic job/lead creation',
          'Real-time appointment sync',
          'Customer data synchronization',
          'Service history access',
        ],
        status: 'Available',
      },
      {
        name: 'Jobber',
        description: 'Seamless API integration for appointment scheduling and job management',
        benefits: [
          'Automatic appointment booking',
          'Job creation and updates',
          'Customer information sync',
          'Schedule management',
        ],
        status: 'Available',
      },
      {
        name: 'Housecall Pro',
        description: 'Full API integration for leads, jobs, and customer management',
        benefits: [
          'Lead and job creation',
          'Customer data sync',
          'Appointment scheduling',
          'Payment processing integration',
        ],
        status: 'Available',
      },
      {
        name: 'Google Calendar',
        description: 'Direct calendar integration for real-time availability checking',
        benefits: [
          'Real-time availability',
          'Automatic booking',
          'Conflict prevention',
          'Multi-calendar support',
        ],
        status: 'Available',
      },
    ],
    beforeAfter: {
      before: [
        'Missed calls go to voicemail, customers call competitors',
        'After-hours emergencies require expensive on-call staff',
        'Manual scheduling leads to double-bookings and errors',
        'Staff overwhelmed during peak call times',
        'No visibility into call volume or lead quality',
        'Inconsistent customer experience',
      ],
      after: [
        'Every call answered instantly, 24/7',
        'Emergency calls routed to on-call team',
        'Automated scheduling eliminates booking errors',
        'AI handles overflow, staff focuses on service',
        'Complete call analytics and lead tracking',
        'Professional, consistent experience every time',
      ],
    },
    testimonials: [
      {
        quote: 'We\'re capturing significantly more service calls. Auralix AI handles our phone calls so naturally that customers can\'t tell they\'re talking to AI. It\'s a no-brainer for multi-location HVAC businesses.',
        author: 'Michael Hauke',
        role: 'Multi-Location Operator',
      },
      {
        quote: 'I can focus on service calls because Auralix AI manages the phones. The voice agent handles everything so naturally — customers can\'t tell they\'re talking to AI. Game changer for our operations.',
        author: 'Costa Alexandrou',
        role: 'Business Owner',
      },
    ],
    whyItWorks: [
      'Peak call times (mornings, evenings, weekends) are covered',
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
    pricingNote: 'Starting at $399/month for after-hours coverage. Perfect for home services businesses looking to capture every call.',
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
    detailedScenarios: [
      {
        title: 'New Patient Appointment',
        description: 'Patient calls to schedule first visit',
        conversation: [
          { speaker: 'AI', text: 'Hello, this is Auralix AI. How can I help you today?' },
          { speaker: 'Customer', text: 'I need to make an appointment for a physical exam.' },
          { speaker: 'AI', text: 'I\'d be happy to help. Are you a new patient or existing patient?' },
          { speaker: 'Customer', text: 'I\'m new. I just moved to the area.' },
          { speaker: 'AI', text: 'Welcome! For new patients, we typically schedule a 45-minute appointment. What days work best for you?' },
          { speaker: 'Customer', text: 'I\'m available weekday mornings, preferably Tuesday or Thursday.' },
          { speaker: 'AI', text: 'I have availability next Tuesday at 10 AM or Thursday at 9:30 AM. Which works better?' },
          { speaker: 'Customer', text: 'Tuesday at 10 AM is perfect.' },
          { speaker: 'AI', text: 'Great! I\'ve booked you for Tuesday at 10 AM. I\'ll need some information for your patient file. What\'s your name and date of birth?' },
          { speaker: 'Customer', text: 'John Smith, date of birth is March 15, 1985.' },
          { speaker: 'AI', text: 'Thank you. I\'ve created your patient record. You\'ll receive a confirmation text with appointment details and new patient forms to complete online. Is there anything else?' },
        ],
        outcome: 'New patient appointment scheduled. Patient record created in practice management system. Confirmation and forms sent via SMS.',
      },
      {
        title: 'Appointment Rescheduling',
        description: 'Patient needs to change existing appointment',
        conversation: [
          { speaker: 'AI', text: 'Hello, this is Auralix AI. How can I help you?' },
          { speaker: 'Customer', text: 'I need to reschedule my appointment for next week. Something came up.' },
          { speaker: 'AI', text: 'Of course. What\'s your name and the date of your current appointment?' },
          { speaker: 'Customer', text: 'Maria Garcia, and I have an appointment on Tuesday at 2 PM.' },
          { speaker: 'AI', text: 'I found your appointment. What day and time would work better for you?' },
          { speaker: 'Customer', text: 'Could I do Thursday afternoon instead?' },
          { speaker: 'AI', text: 'I have Thursday at 3 PM or 4 PM available. Which do you prefer?' },
          { speaker: 'Customer', text: '3 PM works great.' },
          { speaker: 'AI', text: 'Perfect. I\'ve rescheduled your appointment to Thursday at 3 PM. You\'ll receive a confirmation text. Is there anything else?' },
        ],
        outcome: 'Appointment rescheduled in practice management system. Original slot freed up. Patient received confirmation SMS.',
      },
      {
        title: 'Urgent Appointment Request',
        description: 'Patient needs same-day appointment for urgent concern',
        conversation: [
          { speaker: 'AI', text: 'Hello, this is Auralix AI. How can I help you?' },
          { speaker: 'Customer', text: 'I need to see a doctor today if possible. I\'m having chest pain.' },
          { speaker: 'AI', text: 'I understand this is urgent. For chest pain, I\'m going to connect you with our on-call nurse right away. Please hold for just a moment.' },
          { speaker: 'Customer', text: 'Okay, thank you.' },
        ],
        outcome: 'Urgent call escalated to on-call medical staff. Patient connected with nurse for triage. If needed, same-day appointment can be arranged.',
      },
    ],
    metrics: [
      { stat: '24/7', label: 'Patient access', description: 'Answer calls anytime, day or night' },
      { stat: '100%', label: 'Calls answered', description: 'No missed patient inquiries' },
      { stat: 'Faster', label: 'Booking process', description: 'Streamlined appointment scheduling' },
      { stat: 'HIPAA', label: 'Compliant', description: 'Secure patient data handling' },
    ],
    useCases: [
      {
        title: 'Routine Appointment Scheduling',
        description: 'Automate standard appointment bookings',
        workflow: [
          'Patient calls to schedule appointment',
          'AI checks real-time availability in practice management system',
          'Presents available time slots based on appointment type',
          'Patient selects preferred time',
          'Appointment booked directly into system',
          'Patient receives confirmation SMS with details',
          'Reminder sent 24 hours before appointment',
        ],
        benefits: [
          'Reduces front desk workload',
          'Faster booking process',
          'Fewer scheduling errors',
          'Better patient experience',
        ],
      },
      {
        title: 'After-Hours Patient Inquiries',
        description: 'Handle patient calls outside business hours',
        workflow: [
          'Patient calls after hours',
          'AI answers and identifies inquiry type',
          'For urgent matters, escalates to on-call staff',
          'For routine questions, provides information or schedules callback',
          'All interactions logged in patient record',
          'Staff receives summary next morning',
        ],
        benefits: [
          '24/7 patient support',
          'Urgent issues handled promptly',
          'No missed patient calls',
          'Better patient satisfaction',
        ],
      },
      {
        title: 'Insurance Verification',
        description: 'Streamline insurance coverage questions',
        workflow: [
          'Patient calls with insurance question',
          'AI accesses practice management system',
          'Retrieves patient insurance information',
          'Provides coverage details and answers questions',
          'Schedules appointment if needed',
          'Updates patient record with notes',
        ],
        benefits: [
          'Faster insurance verification',
          'Reduced front desk calls',
          'Better patient information',
          'Fewer billing issues',
        ],
      },
    ],
    features: [
      {
        title: 'HIPAA-Compliant Handling',
        description: 'Secure, compliant handling of patient information with full audit trails and encryption.',
      },
      {
        title: 'Practice Management Integration',
        description: 'Integration via Zapier with popular practice management systems, or direct calendar integration.',
      },
      {
        title: 'Appointment Reminders',
        description: 'Automated SMS and email reminders to reduce no-shows and improve patient attendance.',
      },
      {
        title: 'Urgent Call Triage',
        description: 'Intelligently identifies urgent medical concerns and routes to appropriate medical staff.',
      },
      {
        title: 'Multi-Provider Scheduling',
        description: 'Handles scheduling for multiple providers, considering each provider\'s availability and specialties.',
      },
      {
        title: 'Patient Information Management',
        description: 'Captures and updates patient information, insurance details, and medical history securely.',
      },
    ],
    integrations: [
      {
        name: 'Zapier',
        description: 'Connect with any practice management system via Zapier',
        benefits: [
          'Universal compatibility',
          'Custom workflows',
          'Flexible integration',
          'Easy configuration',
        ],
        status: 'Available',
      },
      {
        name: 'Google Calendar',
        description: 'Calendar integration for provider availability',
        benefits: [
          'Real-time availability',
          'Multi-provider support',
          'Conflict prevention',
          'Easy setup',
        ],
        status: 'Available',
      },
    ],
    beforeAfter: {
      before: [
        'Front desk overwhelmed during peak hours',
        'Patients wait on hold or get voicemail',
        'After-hours calls go unanswered',
        'Manual scheduling leads to errors',
        'No automated reminders increase no-shows',
        'Staff time spent on routine scheduling',
      ],
      after: [
        'AI handles routine scheduling, staff focuses on patients',
        'Every call answered instantly',
        '24/7 availability for patient inquiries',
        'Automated scheduling eliminates errors',
        'Automated reminders can help reduce no-shows',
        'Staff time freed for patient care',
      ],
    },
    testimonials: [
      {
        quote: 'Auralix has transformed how we handle patient calls. Our front desk staff can focus on in-person patient care while the AI handles scheduling. Patients love the instant response.',
        author: 'Dr. Sarah Chen',
        role: 'Medical Director',
        company: 'Wellness Medical Center',
      },
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
    pricingNote: 'Starting at $399/month. Perfect for clinics looking to improve patient access and reduce administrative burden.',
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
    detailedScenarios: [
      {
        title: 'Dinner Reservation',
        description: 'Customer calls to make weekend reservation',
        conversation: [
          { speaker: 'AI', text: 'Hello, this is Auralix AI. How can I help you today?' },
          { speaker: 'Customer', text: 'I\'d like to make a reservation for Saturday night.' },
          { speaker: 'AI', text: 'Absolutely! What time are you looking for, and how many people?' },
          { speaker: 'Customer', text: '7 PM for a party of 4.' },
          { speaker: 'AI', text: 'Let me check availability. I have 6:30 PM or 7:30 PM available for 4 people. Would either of those work?' },
          { speaker: 'Customer', text: '7:30 PM is perfect.' },
          { speaker: 'AI', text: 'Great! I\'ve reserved a table for 4 at 7:30 PM on Saturday. What\'s the name for the reservation?' },
          { speaker: 'Customer', text: 'Smith, John Smith.' },
          { speaker: 'AI', text: 'Perfect, Mr. Smith. Your reservation is confirmed. You\'ll receive a confirmation text. We look forward to seeing you Saturday at 7:30 PM!' },
        ],
        outcome: 'Reservation booked in reservation system. Table allocated. Customer received confirmation SMS with reservation details.',
      },
      {
        title: 'Takeout Order',
        description: 'Customer calls to place takeout order during busy dinner rush',
        conversation: [
          { speaker: 'AI', text: 'Hello, this is Auralix AI. How can I help you?' },
          { speaker: 'Customer', text: 'I\'d like to place a takeout order.' },
          { speaker: 'AI', text: 'I\'d be happy to help. What would you like to order?' },
          { speaker: 'Customer', text: 'I\'ll have two orders of the chicken parmesan and one Caesar salad.' },
          { speaker: 'AI', text: 'Got it. Two chicken parmesan and one Caesar salad. Anything to drink?' },
          { speaker: 'Customer', text: 'No drinks, thanks.' },
          { speaker: 'AI', text: 'Perfect. Your total is $42.50. When would you like to pick it up?' },
          { speaker: 'Customer', text: 'In about 30 minutes.' },
          { speaker: 'AI', text: 'Great! Your order will be ready at 7:30 PM. What\'s your name and phone number for the order?' },
          { speaker: 'Customer', text: 'Lisa Johnson, 555-9876.' },
          { speaker: 'AI', text: 'Thank you, Lisa. Your order is confirmed. You\'ll receive a text when it\'s ready for pickup. See you soon!' },
        ],
        outcome: 'Takeout order entered into POS system. Kitchen ticket created. Customer will receive SMS when order is ready.',
      },
      {
        title: 'Menu and Hours Inquiry',
        description: 'Customer calls to check menu and operating hours',
        conversation: [
          { speaker: 'AI', text: 'Hello, this is Auralix AI. How can I help you?' },
          { speaker: 'Customer', text: 'What are your hours today, and do you have vegetarian options?' },
          { speaker: 'AI', text: 'We\'re open today from 11 AM to 10 PM. And yes, we have several vegetarian options including our portobello mushroom burger, veggie pasta, and Mediterranean salad. Would you like me to tell you more about any of those?' },
          { speaker: 'Customer', text: 'The portobello burger sounds good. Can I make a reservation for tonight?' },
          { speaker: 'AI', text: 'Absolutely! What time works for you?' },
        ],
        outcome: 'Customer received information and proceeded to make reservation. All inquiries handled without staff interruption.',
      },
    ],
    metrics: [
      { stat: '24/7', label: 'Reservation availability', description: 'Capture bookings anytime' },
      { stat: '100%', label: 'Calls answered', description: 'Never miss a reservation' },
      { stat: 'Faster', label: 'Order processing', description: 'Streamlined order taking' },
      { stat: 'Peak hours', label: 'Coverage', description: 'Handle rush periods seamlessly' },
    ],
    useCases: [
      {
        title: 'Peak Hour Reservation Management',
        description: 'Handle reservation calls during busy dinner rush',
        workflow: [
          'Multiple reservation calls come in during peak hours',
          'AI answers all calls simultaneously',
          'Checks real-time table availability',
          'Books reservations directly into system',
          'Sends confirmation SMS to customers',
          'Kitchen and front-of-house notified',
        ],
        benefits: [
          'No missed reservations',
          'Better table utilization',
          'Reduced staff stress',
          'Improved customer experience',
        ],
      },
      {
        title: 'Takeout Order Processing',
        description: 'Streamline takeout orders without interrupting kitchen',
        workflow: [
          'Customer calls to place takeout order',
          'AI takes order details and confirms items',
          'Order entered into POS system',
          'Kitchen receives ticket',
          'Customer receives pickup time estimate',
          'SMS sent when order is ready',
        ],
        benefits: [
          'Faster order processing',
          'No phone interruptions in kitchen',
          'Better order accuracy',
          'Improved customer satisfaction',
        ],
      },
      {
        title: 'After-Hours Order Taking',
        description: 'Accept orders even when restaurant is closed',
        workflow: [
          'Customer calls after hours',
          'AI answers and explains hours',
          'Takes order for next day pickup/delivery',
          'Order scheduled for preparation time',
          'Customer receives confirmation',
          'Restaurant receives order in morning',
        ],
        benefits: [
          'Capture orders 24/7',
          'Increase revenue opportunities',
          'Better customer convenience',
          'Competitive advantage',
        ],
      },
    ],
    features: [
      {
        title: 'Reservation Management',
        description: 'Integration via Zapier with reservation systems, or direct calendar integration for table management.',
      },
      {
        title: 'POS Integration',
        description: 'Integration via Zapier with POS systems, or manual order entry with automated kitchen notifications.',
      },
      {
        title: 'Menu Knowledge',
        description: 'Full menu awareness including items, prices, dietary restrictions, and daily specials for accurate order taking.',
      },
      {
        title: 'Order Confirmation',
        description: 'Automated SMS confirmations for reservations and orders with pickup times and order details.',
      },
      {
        title: 'Peak Hour Handling',
        description: 'Handles multiple simultaneous calls during busy periods without overwhelming staff or missing orders.',
      },
      {
        title: 'Special Events',
        description: 'Manages special event bookings, private dining reservations, and catering inquiries.',
      },
    ],
    integrations: [
      {
        name: 'Zapier',
        description: 'Connect with reservation and POS systems via Zapier',
        benefits: [
          'Universal compatibility',
          'Custom workflows',
          'Flexible integration',
          'Easy configuration',
        ],
        status: 'Available',
      },
      {
        name: 'Google Calendar',
        description: 'Calendar integration for reservation management',
        benefits: [
          'Real-time availability',
          'Reservation tracking',
          'Conflict prevention',
          'Easy setup',
        ],
        status: 'Available',
      },
    ],
    beforeAfter: {
      before: [
        'Missed reservations during busy periods',
        'Staff overwhelmed taking phone orders',
        'Kitchen interrupted by phone calls',
        'After-hours calls go unanswered',
        'Manual order entry leads to errors',
        'Inconsistent customer experience',
      ],
      after: [
        'Every reservation captured, even during rush',
        'AI handles phone orders, staff focuses on service',
        'Kitchen receives orders',
        '24/7 order taking capability',
        'Automated order entry eliminates errors',
        'Professional, consistent experience',
      ],
    },
    testimonials: [
      {
        quote: 'Auralix has been a game-changer for our restaurant. During our busiest dinner rushes, the AI handles all reservation calls so our staff can focus on the guests in the restaurant. We\'ve seen a 40% increase in reservations.',
        author: 'Chef Marcus Rodriguez',
        role: 'Restaurant Owner',
        company: 'Bella Vista Restaurant',
      },
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
    pricingNote: 'Starting at $399/month. Perfect for restaurants looking to capture every reservation and order.',
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
    detailedScenarios: [
      {
        title: 'Emergency Water Leak',
        description: 'Tenant reports urgent water leak',
        conversation: [
          { speaker: 'AI', text: 'Hello, this is Auralix AI. How can I help you?' },
          { speaker: 'Customer', text: 'There\'s water leaking from my ceiling! It\'s coming down pretty fast.' },
          { speaker: 'AI', text: 'I understand this is urgent. Let me get you help right away. What\'s your unit number and building address?' },
          { speaker: 'Customer', text: 'Unit 3B, 456 Oak Street.' },
          { speaker: 'AI', text: 'Got it. Is the water coming from an upstairs unit or from the ceiling itself?' },
          { speaker: 'Customer', text: 'It\'s coming from the ceiling, so probably the unit above me.' },
          { speaker: 'AI', text: 'I\'m creating an emergency maintenance request and dispatching our on-call maintenance team. They\'ll be there as soon as possible. In the meantime, if it\'s safe to do so, try to contain the water with towels. I\'ll send you a text with the technician\'s ETA. Is there anything else?' },
          { speaker: 'Customer', text: 'No, that\'s it. Thank you for the quick response.' },
        ],
        outcome: 'Emergency work order created and dispatched to on-call maintenance. Property manager notified. Tenant received SMS with technician ETA.',
      },
      {
        title: 'Routine Maintenance Request',
        description: 'Tenant needs non-urgent repair',
        conversation: [
          { speaker: 'AI', text: 'Hello, this is Auralix AI. How can I help you?' },
          { speaker: 'Customer', text: 'My kitchen faucet is dripping. It\'s been going on for a few days.' },
          { speaker: 'AI', text: 'I can help with that. What\'s your unit number and the property address?' },
          { speaker: 'Customer', text: 'Unit 5A, 789 Maple Avenue.' },
          { speaker: 'AI', text: 'Thank you. I\'ve created a maintenance request for a dripping kitchen faucet in unit 5A. Our maintenance team will schedule this within the next 2-3 business days. You\'ll receive a text when we schedule the appointment. Is there anything else I can help with?' },
          { speaker: 'Customer', text: 'No, that\'s all. Thanks!' },
        ],
        outcome: 'Maintenance request logged in property management system. Assigned to maintenance team. Tenant will receive scheduling notification.',
      },
      {
        title: 'Rent Payment Inquiry',
        description: 'Tenant has question about rent payment',
        conversation: [
          { speaker: 'AI', text: 'Hello, this is Auralix AI. How can I help you?' },
          { speaker: 'Customer', text: 'I have a question about my rent payment. I paid online but I\'m not sure if it went through.' },
          { speaker: 'AI', text: 'I can help check on that. What\'s your unit number and name?' },
          { speaker: 'Customer', text: 'Unit 2C, Jennifer Martinez.' },
          { speaker: 'AI', text: 'Let me check your account. I can see that your payment of $1,200 was received on the 1st and is showing as processed. You should see it reflected in your online portal. Is there anything else I can help with?' },
          { speaker: 'Customer', text: 'No, that answers my question. Thank you!' },
        ],
        outcome: 'Tenant inquiry handled. Payment status confirmed. Information logged in tenant record.',
      },
    ],
    metrics: [
      { stat: '24/7', label: 'Emergency coverage', description: 'Handle urgent requests anytime' },
      { stat: 'Fast', label: 'Request routing', description: 'Emergency requests routed promptly' },
      { stat: '100%', label: 'Requests logged', description: 'Every maintenance request captured' },
      { stat: 'Reduced', label: 'Call volume', description: 'AI handles routine tenant inquiries' },
    ],
    useCases: [
      {
        title: 'Emergency Maintenance Routing',
        description: 'Handle urgent maintenance requests promptly',
        workflow: [
          'Tenant calls with emergency (water leak, no heat, etc.)',
          'AI identifies urgency and collects details',
          'Emergency work order created in property management system',
          'On-call maintenance team receives instant notification',
          'Tenant receives SMS with technician ETA',
          'Technician arrives and resolves issue',
          'Work order updated and closed',
        ],
        benefits: [
          'Faster emergency response',
          'Better tenant satisfaction',
          'Reduced property damage',
          'Improved tenant retention',
        ],
      },
      {
        title: 'Routine Request Management',
        description: 'Streamline non-urgent maintenance requests',
        workflow: [
          'Tenant calls with routine maintenance need',
          'AI logs request with all details',
          'Work order created and prioritized',
          'Assigned to appropriate maintenance team',
          'Tenant receives confirmation and scheduling info',
          'Maintenance completed and work order closed',
        ],
        benefits: [
          'Better request tracking',
          'Improved organization',
          'Faster resolution times',
          'Tenant communication',
        ],
      },
      {
        title: 'Tenant Information Management',
        description: 'Handle tenant inquiries and information requests',
        workflow: [
          'Tenant calls with question',
          'AI accesses property management system',
          'Retrieves relevant tenant information',
          'Answers question or provides information',
          'Logs interaction in tenant record',
          'Escalates to property manager if needed',
        ],
        benefits: [
          'Faster tenant service',
          'Reduced property manager workload',
          'Better tenant communication',
          'Complete interaction history',
        ],
      },
    ],
    features: [
      {
        title: 'Emergency Triage',
        description: 'Intelligently identifies urgent maintenance issues and routes them to on-call maintenance teams immediately.',
      },
      {
        title: 'Property Management Integration',
        description: 'Integration via Zapier with property management platforms, or direct calendar integration.',
      },
      {
        title: 'Work Order Management',
        description: 'Creates, assigns, and tracks work orders in your property management system.',
      },
      {
        title: 'Tenant Communication',
        description: 'Sends SMS updates to tenants with work order status, technician ETA, and completion notifications.',
      },
      {
        title: 'Multi-Property Support',
        description: 'Handles calls for multiple properties, routing to appropriate teams based on property and issue type.',
      },
      {
        title: 'After-Hours Coverage',
        description: '24/7 availability for emergency maintenance requests, reducing after-hours call volume for property managers.',
      },
    ],
    integrations: [
      {
        name: 'Zapier',
        description: 'Connect with any property management system via Zapier',
        benefits: [
          'Universal compatibility',
          'Custom workflows',
          'Flexible integration',
          'Easy configuration',
        ],
        status: 'Available',
      },
      {
        name: 'Google Calendar',
        description: 'Calendar integration for maintenance scheduling',
        benefits: [
          'Real-time availability',
          'Maintenance scheduling',
          'Conflict prevention',
          'Easy setup',
        ],
        status: 'Available',
      },
    ],
    beforeAfter: {
      before: [
        'After-hours emergency calls go to voicemail',
        'Property managers overwhelmed with routine calls',
        'Maintenance requests lost or delayed',
        'No visibility into call volume or request types',
        'Inconsistent tenant communication',
        'Manual work order entry leads to errors',
      ],
      after: [
        '24/7 emergency coverage with instant routing',
        'AI handles routine calls, managers focus on complex issues',
        'Every request logged and tracked',
        'Complete analytics on call volume and request types',
        'Consistent, professional tenant communication',
        'Automated work order creation eliminates errors',
      ],
    },
    testimonials: [
      {
        quote: 'Auralix has transformed how we handle tenant calls. Emergency maintenance requests are now routed instantly, and our property managers can focus on higher-value work. Tenant satisfaction has improved significantly.',
        author: 'David Park',
        role: 'Property Management Director',
        company: 'Metro Properties',
      },
    ],
    whyItWorks: [
      '24/7 coverage for emergency maintenance requests',
        'Routes urgent issues to on-call maintenance',
      'Logs all requests in your property management system',
      'Reduces after-hours call volume for property managers',
    ],
    setupRequirements: [
      'Forward property management phone number',
      'Connect property management software',
      'Define maintenance request categories and priorities',
      'Set up emergency escalation procedures',
    ],
    pricingNote: 'Starting at $399/month. Perfect for property management companies looking to improve tenant service and reduce administrative burden.',
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
    detailedScenarios: [
      {
        title: 'Initial Consultation Request',
        description: 'Potential client calls to schedule consultation',
        conversation: [
          { speaker: 'AI', text: 'Hello, this is Auralix AI. How can I help you today?' },
          { speaker: 'Customer', text: 'I need to speak with a lawyer about a business matter.' },
          { speaker: 'AI', text: 'I\'d be happy to help schedule a consultation. What type of legal matter is this regarding?' },
          { speaker: 'Customer', text: 'I\'m starting a new business and need help with incorporation and contracts.' },
          { speaker: 'AI', text: 'Perfect. Our business law team handles incorporations and contract work. For new clients, we typically schedule a 60-minute initial consultation. What days work best for you?' },
          { speaker: 'Customer', text: 'I\'m available weekday afternoons, preferably Tuesday or Wednesday.' },
          { speaker: 'AI', text: 'I have availability next Tuesday at 2 PM or Wednesday at 3 PM with our business law attorney. Which works better?' },
          { speaker: 'Customer', text: 'Tuesday at 2 PM sounds good.' },
          { speaker: 'AI', text: 'Great! I\'ve scheduled your consultation for Tuesday at 2 PM. The consultation fee is $200. What\'s your name and contact information?' },
          { speaker: 'Customer', text: 'Robert Chen, and my email is robert@email.com, phone 555-1234.' },
          { speaker: 'AI', text: 'Thank you, Robert. I\'ve created your client file and scheduled your consultation. You\'ll receive a confirmation email with meeting details and intake forms. Is there anything else?' },
        ],
        outcome: 'New client consultation scheduled. Client record created in CRM. Attorney notified. Confirmation and intake forms sent via email.',
      },
      {
        title: 'Service Inquiry',
        description: 'Potential client calls to learn about services',
        conversation: [
          { speaker: 'AI', text: 'Hello, this is Auralix AI. How can I help you?' },
          { speaker: 'Customer', text: 'I\'m looking for accounting services for my small business. What do you offer?' },
          { speaker: 'AI', text: 'We offer a full range of accounting services including bookkeeping, tax preparation, financial planning, and business consulting. What specific needs does your business have?' },
          { speaker: 'Customer', text: 'I need help with bookkeeping and quarterly tax filings.' },
          { speaker: 'AI', text: 'Perfect. We have several bookkeeping and tax service packages. Would you like to schedule a free consultation to discuss your specific needs and get a customized quote?' },
          { speaker: 'Customer', text: 'Yes, that would be great.' },
          { speaker: 'AI', text: 'Excellent. What days work best for you?' },
        ],
        outcome: 'Service inquiry handled. Qualified lead captured. Consultation scheduled. Client added to CRM for follow-up.',
      },
      {
        title: 'Existing Client Follow-Up',
        description: 'Current client calls with question',
        conversation: [
          { speaker: 'AI', text: 'Hello, this is Auralix AI. How can I help you?' },
          { speaker: 'Customer', text: 'I need to speak with my accountant about my tax return.' },
          { speaker: 'AI', text: 'I can help with that. What\'s your name?' },
          { speaker: 'Customer', text: 'Amanda Williams.' },
          { speaker: 'AI', text: 'Thank you, Amanda. I see you\'re working with Sarah Johnson. Would you like me to connect you with her, or would you prefer to schedule a call back?' },
          { speaker: 'Customer', text: 'A call back would be fine. This afternoon if possible.' },
          { speaker: 'AI', text: 'Perfect. I\'ve scheduled a call back for this afternoon. Sarah will contact you soon. Is there a specific topic you\'d like her to prepare for?' },
          { speaker: 'Customer', text: 'Yes, I have questions about deductions for my home office.' },
          { speaker: 'AI', text: 'Got it. I\'ve noted that in your file. Sarah will be prepared to discuss home office deductions when she calls. Is there anything else?' },
        ],
        outcome: 'Client inquiry logged. Call back scheduled with accountant. Notes added to client file. Accountant notified with context.',
      },
    ],
    metrics: [
      { stat: '24/7', label: 'Lead capture', description: 'Capture inquiries anytime' },
      { stat: '100%', label: 'Calls answered', description: 'Never miss a potential client' },
      { stat: 'Faster', label: 'Booking process', description: 'Streamlined consultation scheduling' },
      { stat: 'Professional', label: 'Communication', description: 'Consistent client experience' },
    ],
    useCases: [
      {
        title: 'Consultation Scheduling',
        description: 'Automate initial consultation bookings',
        workflow: [
          'Potential client calls to schedule consultation',
          'AI checks attorney/consultant availability',
          'Presents available time slots',
          'Client selects preferred time',
          'Consultation booked in calendar',
          'Client record created in CRM',
          'Confirmation and intake forms sent',
          'Professional notified with client details',
        ],
        benefits: [
          'Faster booking process',
          'Better lead qualification',
          'Reduced scheduling errors',
          'Improved client experience',
        ],
      },
      {
        title: 'Lead Qualification',
        description: 'Capture and qualify potential clients',
        workflow: [
          'Potential client calls with inquiry',
          'AI asks qualifying questions',
          'Captures client information and needs',
          'Determines if client is a good fit',
          'Schedules consultation or provides information',
          'Lead created in CRM with full context',
          'Assigned to appropriate team member',
        ],
        benefits: [
          'Better lead quality',
          'Faster response times',
          'Improved conversion rates',
          'Complete client information',
        ],
      },
      {
        title: 'Client Support',
        description: 'Handle existing client inquiries',
        workflow: [
          'Client calls with question or request',
          'AI accesses client record',
          'Retrieves relevant information',
          'Answers question or schedules callback',
          'Logs interaction in client file',
          'Notifies professional if escalation needed',
        ],
        benefits: [
          'Faster client service',
          'Reduced professional workload',
          'Better client communication',
          'Complete interaction history',
        ],
      },
    ],
    features: [
      {
        title: 'CRM Integration',
        description: 'Integration via Zapier with popular CRMs, or direct calendar integration for consultation scheduling.',
      },
      {
        title: 'Calendar Management',
        description: 'Direct integration with Google Calendar, Outlook, and other calendar systems for real-time availability and booking.',
      },
      {
        title: 'Client Intake',
        description: 'Automated collection of client information, case details, and intake forms before consultations.',
      },
      {
        title: 'Lead Qualification',
        description: 'Intelligently asks qualifying questions to determine client fit and route to appropriate team members.',
      },
      {
        title: 'Confidentiality',
        description: 'Secure handling of sensitive client information with encryption and compliance with professional standards.',
      },
      {
        title: 'Call Summaries',
        description: 'Detailed call summaries and transcripts for client relationship management and follow-up.',
      },
    ],
    integrations: [
      {
        name: 'Zapier',
        description: 'Connect with any CRM or practice management system via Zapier',
        benefits: [
          'Universal compatibility',
          'Custom workflows',
          'Flexible integration',
          'Easy configuration',
        ],
        status: 'Available',
      },
      {
        name: 'Google Calendar',
        description: 'Calendar integration for consultation scheduling',
        benefits: [
          'Real-time availability',
          'Multi-attorney support',
          'Conflict prevention',
          'Easy setup',
        ],
        status: 'Available',
      },
    ],
    beforeAfter: {
      before: [
        'Missed calls when staff is in meetings',
        'Manual scheduling leads to errors',
        'No lead qualification before consultations',
        'Staff time spent on routine scheduling',
        'Inconsistent client communication',
        'Lost potential clients to competitors',
      ],
      after: [
        'Every call answered, even during meetings',
        'Automated scheduling eliminates errors',
        'Intelligent lead qualification improves conversion',
        'Staff time freed for billable work',
        'Professional, consistent communication',
        'Capture every potential client inquiry',
      ],
    },
    testimonials: [
      {
        quote: 'Auralix has been invaluable for our law firm. We never miss a potential client call, even when all our attorneys are in court or meetings. The lead qualification is excellent, and consultations are booked seamlessly.',
        author: 'Jennifer Martinez',
        role: 'Managing Partner',
        company: 'Martinez & Associates Law Firm',
      },
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
    pricingNote: 'Starting at $399/month. Perfect for professional services firms looking to capture every client inquiry and improve efficiency.',
  },
];

export function getIndustryBySlug(slug: string): IndustryData | undefined {
  return industries.find((industry) => industry.slug === slug);
}

export function getIndustryById(id: string): IndustryData | undefined {
  return industries.find((industry) => industry.id === id);
}
