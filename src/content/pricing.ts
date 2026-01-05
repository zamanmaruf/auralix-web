export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  callLimit: number;
  overageRate?: number;
  features: string[];
  setupFee: number;
  popular?: boolean;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Perfect for small businesses getting started',
    price: 199,
    callLimit: 200,
    overageRate: 0.50,
    setupFee: 499,
    features: [
      '200 calls per month',
      '24/7 call answering',
      'Appointment booking',
      'Lead capture',
      'Call summaries & transcripts',
      'Email notifications',
      'Basic integrations',
    ],
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'For growing businesses with higher call volume',
    price: 399,
    callLimit: 500,
    overageRate: 0.45,
    setupFee: 499,
    popular: true,
    features: [
      '500 calls per month',
      'Everything in Starter',
      'Priority support',
      'Advanced integrations',
      'Custom escalation rules',
      'Multi-location support',
      'Analytics dashboard',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'For large operations with high call volume',
    price: 799,
    callLimit: 1200,
    overageRate: 0.40,
    setupFee: 999,
    features: [
      '1,200 calls per month',
      'Everything in Professional',
      'Dedicated account manager',
      'Custom integrations',
      'SLA guarantees',
      'Advanced analytics',
      'White-glove setup',
    ],
  },
];

export interface PricingFAQ {
  question: string;
  answer: string;
}

export const pricingFaqs: PricingFAQ[] = [
  {
    question: 'What counts as a call?',
    answer: 'A call is any inbound call that connects and is answered by the voice agent. Spam calls are automatically filtered and don\'t count. Calls that don\'t connect (busy, no answer) also don\'t count.',
  },
  {
    question: 'What happens if I exceed my call limit?',
    answer: 'Overage calls are billed at the per-call rate shown on your plan. We\'ll notify you when you\'re approaching your limit so you can upgrade if needed. Most businesses stay within their plan limits.',
  },
  {
    question: 'How does the setup fee work?',
    answer: 'The setup fee covers professional configuration, integration with your tools, testing, and go-live support. It\'s a one-time fee per account. If we can\'t get you live within 48 hours, we refund the setup fee.',
  },
  {
    question: 'Can I change plans later?',
    answer: 'Yes. You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle. If you upgrade mid-cycle, we\'ll prorate the difference.',
  },
  {
    question: 'Is there a contract?',
    answer: 'No long-term contracts. You can cancel anytime with 30 days notice. We\'re confident in our service, so we don\'t lock you into anything.',
  },
  {
    question: 'Do you offer refunds?',
    answer: 'We offer a 48-hour setup guarantee: if we can\'t get your system working within 48 hours, we refund your setup fee. Monthly fees are non-refundable, but you can cancel anytime.',
  },
];
