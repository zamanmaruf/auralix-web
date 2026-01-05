export interface FAQItem {
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    question: 'How does Auralix Voice Agent work?',
    answer: 'Auralix Voice Agent answers your business phone calls using AI. When a call comes in, the agent greets the caller, understands their request, books appointments, captures leads, and routes emergencies to your team. You receive a summary of every call with a full transcript.',
  },
  {
    question: 'What happens if the AI can\'t handle a call?',
    answer: 'You define escalation rules during setup. The agent can transfer calls to a human team member, take a message, or schedule a callback. For emergencies, calls are immediately routed to your on-call staff.',
  },
  {
    question: 'How long does setup take?',
    answer: 'Most businesses go live within 24-48 hours. On Day 0, we gather your requirements. Day 1 is configuration and testing. Day 2 is go-live with monitoring and adjustments.',
  },
  {
    question: 'What information do you need from me?',
    answer: 'We need your business phone number to forward, your service areas and availability, your booking calendar or job management tool, and your escalation preferences (when to transfer to human).',
  },
  {
    question: 'Does it work with my existing tools?',
    answer: 'Yes. Auralix integrates with Google Calendar, Outlook, and popular job management tools like ServiceTitan, Jobber, and Housecall Pro. We also support webhooks and Zapier for custom integrations.',
  },
  {
    question: 'What counts as a "call"?',
    answer: 'A call is any inbound call that connects and is answered by the voice agent. Spam calls are filtered automatically. Calls that don\'t connect (busy, no answer) don\'t count.',
  },
  {
    question: 'What if I exceed my plan\'s call limit?',
    answer: 'Overage calls are billed at a per-call rate. We\'ll notify you when you\'re approaching your limit so you can upgrade if needed. Most businesses stay within their plan limits.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Yes. We use encryption in transit and at rest, follow security best practices, and are transparent about data handling. See our Trust Center for details on security and privacy.',
  },
  {
    question: 'Can I try it before committing?',
    answer: 'Yes. You can test the voice agent on our website, and we offer a demo call line. For full setup, we require a setup fee, but you can cancel anytime with 30 days notice.',
  },
  {
    question: 'What industries do you support?',
    answer: 'We specialize in home services (HVAC, plumbing, electrical) but also support clinics, restaurants, property management, professional services, and more. If your industry isn\'t listed, contact us—we can configure it.',
  },
];

export const homepageFaqs = faqs.slice(0, 6);
