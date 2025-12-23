'use client';

import { motion } from 'framer-motion';
import { 
  Phone, Clock, CheckCircle, Zap, MessageSquare, TrendingUp, 
  Calendar, Shield, ArrowRight, Users, Settings, BarChart, FileText
} from 'lucide-react';
import Link from 'next/link';

export default function HomeServicesPage() {
  const useCases = [
    {
      icon: Clock,
      title: 'After-Hours Coverage',
      description: 'Never miss an emergency call. Our AI handles after-hours and weekend calls, qualifies leads, and books urgent jobs.',
      features: [
        '24/7 call answering',
        'Emergency triage and escalation',
        'Lead qualification and capture',
        'Automatic job booking'
      ]
    },
    {
      icon: Phone,
      title: 'Overflow During Peak Hours',
      description: 'When your team is busy, Auralix handles overflow calls seamlessly. No more busy signals or missed opportunities.',
      features: [
        'Smart call routing',
        'Queue management',
        'Seamless handoff to human agents',
        'Priority-based routing'
      ]
    },
    {
      icon: Zap,
      title: 'Emergency Triage + Escalation',
      description: 'Intelligently identifies urgent calls and routes them appropriately. Critical issues get immediate attention.',
      features: [
        'Urgency detection',
        'Automatic escalation rules',
        'Priority routing',
        'Real-time notifications'
      ]
    },
    {
      icon: Calendar,
      title: 'Bookings + Lead Capture',
      description: 'Captures complete lead information and books appointments automatically. Every call becomes a booked job.',
      features: [
        'Complete lead capture (address, issue, urgency)',
        'Automatic appointment booking',
        'Preferred time scheduling',
        'CRM integration'
      ]
    },
    {
      icon: MessageSquare,
      title: 'SMS Follow-Ups',
      description: 'Automatically sends SMS confirmations and reminders. Keeps customers informed and reduces no-shows.',
      features: [
        'SMS confirmations',
        'Appointment reminders',
        'Follow-up messages',
        'Two-way SMS support'
      ]
    },
    {
      icon: BarChart,
      title: 'Reporting & Analytics',
      description: 'Track leads captured, booked jobs, missed-call savings, and ROI. Make data-driven decisions.',
      features: [
        'Leads captured metrics',
        'Booked jobs tracking',
        'Missed-call savings calculator',
        'Ad spend ROI protection'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-900 text-white">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 font-heading"
          >
            AI Receptionist for Home Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-neutral-300 mb-8 max-w-4xl mx-auto"
          >
            Stop losing revenue from missed calls. Auralix answers every call, books jobs, and captures leads 24/7 for HVAC, plumbing, and electrical businesses.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => {
                if ((window as any).triggerVapiCall) {
                  (window as any).triggerVapiCall();
                } else {
                  window.dispatchEvent(new Event('trigger-vapi-call'));
                }
              }}
              className="px-8 py-4 bg-accent-orange hover:bg-accent-orange/90 text-white font-bold rounded-lg transition-all duration-200 hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              Demo Call
            </button>
            <Link
              href="/pricing"
              className="px-8 py-4 border-2 border-primary-400 text-primary-400 hover:bg-primary-400 hover:text-black font-bold rounded-lg transition-all duration-200"
            >
              View Pricing
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4 font-heading">How Auralix Works for Home Services</h2>
            <p className="text-lg text-neutral-300">Complete call handling solution for HVAC, plumbing, and electrical businesses</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => {
              const UseCaseIcon = useCase.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-neutral-800/80 backdrop-blur-sm rounded-2xl p-6 border border-neutral-700 hover:border-primary-500/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mb-4">
                    <UseCaseIcon className="w-6 h-6 text-primary-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 font-heading">{useCase.title}</h3>
                  <p className="text-neutral-300 text-sm mb-4">{useCase.description}</p>
                  <ul className="space-y-2">
                    {useCase.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-sm text-neutral-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Setup Section */}
      <section className="py-16 px-4 bg-neutral-800/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4 font-heading">Fast Setup, Powerful Results</h2>
            <p className="text-lg text-neutral-300">Get up and running in 48-72 hours</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Quick Onboarding',
                description: 'Our team configures your voice agent with your business details, services, and pricing in under 30 minutes.'
              },
              {
                step: '2',
                title: 'CRM Integration',
                description: 'Connect with ServiceTitan, Housecall Pro, Jobber, or any CRM via API or Zapier. Setup takes minutes.'
              },
              {
                step: '3',
                title: 'Go Live',
                description: 'Your AI receptionist is ready to handle calls 24/7. Start capturing leads and booking jobs immediately.'
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-heading">{step.title}</h3>
                <p className="text-neutral-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Pack Download */}
      <section className="py-16 px-4 bg-gradient-to-b from-neutral-800 to-neutral-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-cyan-500/30"
          >
            <h2 className="text-3xl font-bold text-white mb-4 font-heading">Free Download: Trades Missed-Call Playbook</h2>
            <p className="text-lg text-neutral-300 mb-6 max-w-2xl mx-auto">
              Get our comprehensive guide to reducing missed calls, including common call flows, booking rules, escalation logic, and ROI calculator.
            </p>
            <a
              href="/downloads/trades-missed-call-playbook.pdf"
              download
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).gtag) {
                  (window as any).gtag('event', 'file_download', {
                    event_category: 'engagement',
                    event_label: 'Trades Missed-Call Playbook',
                    location: 'home_services',
                  });
                }
              }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 hover:bg-primary-400 text-white font-bold rounded-lg transition-all duration-200 hover:scale-105"
            >
              <FileText className="w-5 h-5" />
              Download Free Playbook
            </a>
            <p className="text-sm text-neutral-400 mt-4">
              No email required. Instant download.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary-500/20 to-blue-500/20 rounded-2xl p-8 border border-primary-500/30"
          >
            <h2 className="text-3xl font-bold text-white mb-6 font-heading">Ready to Stop Losing Calls?</h2>
            <p className="text-lg text-neutral-300 mb-8">
              Try our demo call to experience how Auralix AI handles calls and captures leads.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  if ((window as any).triggerVapiCall) {
                    (window as any).triggerVapiCall();
                  } else {
                    window.dispatchEvent(new Event('trigger-vapi-call'));
                  }
                }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent-orange hover:bg-accent-orange/90 text-white font-bold rounded-lg transition-all duration-200 hover:scale-105"
              >
                Demo Call
                <ArrowRight className="w-5 h-5" />
              </button>
              <Link
                href="/pricing"
                className="px-8 py-4 border-2 border-primary-400 text-primary-400 hover:bg-primary-400 hover:text-black font-bold rounded-lg transition-all duration-200"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

