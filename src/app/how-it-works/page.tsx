'use client';

import { motion } from 'framer-motion';
import { Phone, MessageSquare, Calendar, Users, ArrowRight, CheckCircle, AlertTriangle, X, Zap, Clock, FileText, Settings } from 'lucide-react';
import Link from 'next/link';

export default function HowItWorksPage() {
  const callFlowSteps = [
    {
      step: 1,
      title: 'Call Received',
      description: 'Customer calls your business number. Auralix AI answers immediately, 24/7.',
      icon: Phone,
      color: 'blue'
    },
    {
      step: 2,
      title: 'AI Disclosure',
      description: 'AI introduces itself: "Hello, this is Auralix AI, an artificial intelligence assistant. How can I help you today?"',
      icon: MessageSquare,
      color: 'cyan'
    },
    {
      step: 3,
      title: 'Qualify & Understand',
      description: 'AI listens to the customer\'s request, understands urgency, and collects key details: address, issue type, preferred time.',
      icon: FileText,
      color: 'purple'
    },
    {
      step: 4,
      title: 'Propose Solution',
      description: 'AI proposes available time slots or immediate dispatch for emergencies. Confirms service type and pricing if needed.',
      icon: Calendar,
      color: 'green'
    },
    {
      step: 5,
      title: 'Confirm & Book',
      description: 'Customer confirms appointment. AI creates job/lead in your CRM (ServiceTitan, Jobber, Housecall Pro, etc.).',
      icon: CheckCircle,
      color: 'emerald'
    },
    {
      step: 6,
      title: 'Notify Team',
      description: 'Your dispatch team receives instant notification: new job created, customer details, appointment time, and urgency level.',
      icon: Users,
      color: 'orange'
    },
    {
      step: 7,
      title: 'SMS Confirmation',
      description: 'Customer receives automated SMS confirmation with appointment details, technician ETA (if available), and contact info.',
      icon: MessageSquare,
      color: 'blue'
    },
  ];

  const escalationRules = [
    {
      scenario: 'Emergency Situation',
      description: 'No heat, burst pipe, power outage, or other urgent issue',
      action: 'AI immediately routes to on-call team with full context',
      icon: AlertTriangle,
      color: 'red'
    },
    {
      scenario: 'Customer Requests Human',
      description: 'Caller explicitly asks to speak with a person',
      action: 'AI seamlessly transfers to on-call team, providing all collected information',
      icon: Users,
      color: 'blue'
    },
    {
      scenario: 'Abusive or Spam Call',
      description: 'Detected spam, telemarketer, or abusive language',
      action: 'AI politely terminates call. Spam calls under 10 seconds don\'t count toward usage.',
      icon: X,
      color: 'gray'
    },
    {
      scenario: 'Unknown Service Area',
      description: 'Customer is outside your service coverage area',
      action: 'AI captures contact info and request, routes to voicemail or sends follow-up text for future expansion',
      icon: Clock,
      color: 'yellow'
    },
    {
      scenario: 'Complex Technical Question',
      description: 'Question requires deep technical knowledge beyond AI scope',
      action: 'AI collects details and transfers to appropriate team member with full context',
      icon: Settings,
      color: 'purple'
    },
  ];

  const integrations = [
    {
      name: 'ServiceTitan',
      description: 'Integrates via API/Zapier/webhooks. Native connectors available for select systems. Jobs created automatically in ServiceTitan.',
      method: 'API'
    },
    {
      name: 'Jobber',
      description: 'Integrates via API/Zapier/webhooks. Native connectors available for select systems. Appointments sync in real-time.',
      method: 'API'
    },
    {
      name: 'Housecall Pro',
      description: 'Integrates via API/Zapier/webhooks. Native connectors available for select systems. Leads and jobs created automatically.',
      method: 'API'
    },
    {
      name: 'Zapier',
      description: 'Connect to 5,000+ apps. Custom workflows and automations.',
      method: 'Zapier'
    },
    {
      name: 'Webhooks',
      description: 'Custom webhook integration for any system. Real-time data sync.',
      method: 'Webhook'
    },
    {
      name: 'SMS/Email',
      description: 'Automated confirmations and notifications via SMS and email.',
      method: 'Built-in'
    },
  ];

  return (
    <div className="min-h-screen text-white">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 px-4 bg-section-main bg-neutral-900/60 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 font-heading"
          >
            How Auralix AI Works
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-neutral-300 mb-8 max-w-4xl mx-auto"
          >
            From call received to job booked, see how our AI receptionist handles every call like a seasoned dispatcher—24/7.
          </motion.p>
        </div>
      </section>

      {/* Call Flow Diagram */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4 font-heading">The Complete Call Flow</h2>
            <p className="text-lg text-neutral-300">Every call follows this proven process</p>
          </motion.div>

          <div className="space-y-8">
            {callFlowSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-start gap-6"
              >
                <div className={`flex-shrink-0 w-16 h-16 bg-${step.color}-500 rounded-full flex items-center justify-center text-white font-bold text-xl`}>
                  {step.step}
                </div>
                <div className="flex-1 bg-neutral-800/80 backdrop-blur-sm rounded-xl p-6 border border-neutral-700">
                  <div className="flex items-start gap-4">
                    <step.icon className={`w-8 h-8 text-${step.color}-400 flex-shrink-0`} />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 font-heading">{step.title}</h3>
                      <p className="text-neutral-300">{step.description}</p>
                    </div>
                  </div>
                </div>
                {index < callFlowSteps.length - 1 && (
                  <div className="hidden md:block absolute left-8 mt-16 w-0.5 h-8 bg-gradient-to-b from-cyan-400 to-blue-500" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Escalation Rules */}
      <section className="py-16 px-4 bg-section-main bg-neutral-800/60 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4 font-heading">Escalation Rules & Handoff Logic</h2>
            <p className="text-lg text-neutral-300">Our AI knows when to escalate and how to hand off seamlessly</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {escalationRules.map((rule, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-neutral-800/80 backdrop-blur-sm rounded-xl p-6 border border-neutral-700 hover:border-primary-500/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <rule.icon className={`w-8 h-8 text-${rule.color}-400 flex-shrink-0`} />
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2 font-heading">{rule.scenario}</h3>
                    <p className="text-neutral-300 text-sm mb-3">{rule.description}</p>
                    <div className="bg-primary-500/10 border border-primary-500/30 rounded-lg p-3">
                      <p className="text-primary-300 text-sm font-semibold">→ {rule.action}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Flow */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4 font-heading">Integration Flow</h2>
            <p className="text-lg text-neutral-300">How Auralix AI connects with your existing systems</p>
          </motion.div>

          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-cyan-500/30 mb-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-2 font-heading">Call → AI → CRM → Team</h3>
                <p className="text-neutral-300">
                  When a job is booked, Auralix AI automatically creates the lead/job in your CRM, 
                  sends notifications to your team, and triggers SMS confirmations—all in real-time.
                </p>
              </div>
              <div className="flex items-center gap-2 text-cyan-400">
                <Phone className="w-8 h-8" />
                <ArrowRight className="w-6 h-6" />
                <Zap className="w-8 h-8" />
                <ArrowRight className="w-6 h-6" />
                <Settings className="w-8 h-8" />
                <ArrowRight className="w-6 h-6" />
                <Users className="w-8 h-8" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-neutral-800/80 backdrop-blur-sm rounded-xl p-6 border border-neutral-700"
              >
                <h3 className="text-lg font-bold text-white mb-2 font-heading">{integration.name}</h3>
                <p className="text-neutral-300 text-sm mb-3">{integration.description}</p>
                <span className="inline-block px-3 py-1 bg-primary-500/20 text-primary-300 text-xs font-semibold rounded-full">
                  {integration.method}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Setup Process */}
      <section className="py-16 px-4 bg-section-main bg-neutral-800/60 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4 font-heading">Setup in 48-72 Hours</h2>
            <p className="text-lg text-neutral-300">Get up and running quickly with our white-glove onboarding</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: 'Day 1',
                title: 'Onboarding Call',
                description: 'We learn your business, call flows, and integration needs'
              },
              {
                step: 'Day 2',
                title: 'AI Training',
                description: 'We configure AI for your specific services, pricing, and booking rules'
              },
              {
                step: 'Day 3',
                title: 'Integration & Testing',
                description: 'We connect your CRM, test call flows, and verify job creation'
              },
              {
                step: 'Day 4',
                title: 'Go Live',
                description: 'AI goes live on your number. Your team receives training and support'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-neutral-800/80 backdrop-blur-sm rounded-xl p-6 border border-neutral-700 text-center"
              >
                <div className="text-2xl font-bold text-primary-400 mb-2">{item.step}</div>
                <h3 className="text-lg font-bold text-white mb-2 font-heading">{item.title}</h3>
                <p className="text-neutral-300 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
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
            <h2 className="text-3xl font-bold text-white mb-6 font-heading">Ready to See It in Action?</h2>
            <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto">
              Click below to start a demo call and experience how Auralix AI handles calls and captures leads.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/auralixai/strategy-call"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).gtag) {
                    (window as any).gtag('event', 'calendly_click', {
                      event_category: 'conversion',
                      event_label: 'How It Works',
                      location: 'how_it_works',
                    });
                  }
                }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent-orange hover:bg-accent-orange/90 text-white font-bold rounded-lg transition-all duration-200 hover:scale-105"
              >
                <Calendar className="w-5 h-5" />
                Free Consultation
              </a>
              <button
                onClick={() => {
                  if ((window as any).triggerVapiCall) {
                    (window as any).triggerVapiCall();
                  } else {
                    window.dispatchEvent(new Event('trigger-vapi-call'));
                  }
                }}
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary-400 text-primary-400 hover:bg-primary-400 hover:text-black font-bold rounded-lg transition-all duration-200"
              >
                Start Demo Call
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <p className="text-sm text-neutral-400 mt-4 max-w-2xl mx-auto">
              <strong>Note:</strong> Demo calls may be recorded for quality and training purposes. By starting a demo call, you consent to recording. 
              See our <Link href="/privacy" className="text-primary-400 hover:text-primary-300 underline">Privacy Policy</Link> for details.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

