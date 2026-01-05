'use client';

import { motion } from 'framer-motion';
import { Check, Star, ArrowRight, Phone, TrendingUp, Clock, DollarSign, Users, Shield, Globe } from 'lucide-react';
import PricingTable from '../../components/PricingTable';

const pricingPlans = [
  {
    name: 'After Hours',
    price: '$399',
    period: '/month',
    setupFee: '$699',
    description: 'Perfect for after-hours and weekend coverage for home services businesses',
    callVolume: 'Up to 300 calls/month',
    features: [
      'After-hours + weekends coverage',
      'Lead capture and qualification',
      'SMS confirmations',
      'Basic booking and scheduling',
      'CRM integration',
      'Email support',
      'Single location',
      '1 phone line'
    ],
    cta: 'Get Started',
    color: 'blue' as const,
    popular: false
  },
  {
    name: 'Overflow + After Hours',
    price: '$799',
    period: '/month',
    setupFee: '$999',
    description: 'Ideal for home services businesses needing overflow coverage during peak hours',
    callVolume: 'Up to 1,000 calls/month',
    features: [
      'Everything in After Hours',
      'Business hours overflow coverage',
      'Call routing rules',
      'Deeper lead qualification',
      'Integrations (ServiceTitan, Jobber, etc.)',
      'Advanced reporting',
      'Priority phone support',
      'Multi-location support (up to 3)',
      'Up to 3 phone lines'
    ],
    cta: 'Get Started',
    color: 'purple' as const,
    popular: true
  },
  {
    name: 'Dispatcher Pro',
    price: '$1,499',
    period: '/month',
    setupFee: 'Custom',
    description: 'Scalable solution for large home services organizations and multi-location chains',
    callVolume: 'Unlimited calls',
    features: [
      'Everything in Overflow + After Hours',
      'Unlimited phone lines',
      'Unlimited locations',
      'Enterprise-grade security (SOC 2–aligned)',
      'Dedicated account manager',
      'Custom AI model training',
      'White-label options',
      'API access & webhooks',
      'Multi-language support (15+ languages)',
      '24/7 priority support',
      'SLA guarantees',
      'Custom integrations',
      'Advanced reporting & analytics'
    ],
    cta: 'Contact Sales',
    color: 'gold' as const,
    popular: false
  }
];

export default function PricingPage() {
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
            Enterprise-Grade Voice AI Pricing
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-neutral-300 mb-8 max-w-3xl mx-auto"
          >
            Transparent pricing designed for home services businesses that demand reliability. Professional setup included with all plans. 
            Scales seamlessly from single locations to multi-location operations.
          </motion.p>
          
          {/* Primary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8"
          >
            <button
              onClick={() => {
                if ((window as any).triggerVapiCall) {
                  (window as any).triggerVapiCall();
                } else {
                  window.dispatchEvent(new Event('trigger-vapi-call'));
                }
              }}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-bold text-xl shadow-2xl flex items-center justify-center gap-3 mx-auto max-w-md border-2 border-cyan-400/50 hover:scale-105 transition-all duration-200 cursor-pointer"
            >
              <Phone className="w-6 h-6 animate-pulse group-hover:rotate-12 transition-transform" />
              Talk to Auralix AI Voice Agent
            </button>
            <p className="text-primary-200 text-lg font-semibold mt-3 text-center">
              Click the voice button in the bottom-right to speak with our AI agent. Get instant answers about pricing, features, or how we can help your business.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 text-sm text-neutral-400"
          >
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-400" />
              <span>One-time setup fee (waived on annual prepay)</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-400" />
              <span>Month-to-month with 30-day notice</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-400" />
              <span>30-day money-back guarantee</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-neutral-800/80 backdrop-blur-sm rounded-2xl p-8 border-2 transition-all duration-300 ${
                  plan.popular
                    ? 'border-primary-500 scale-105 shadow-2xl'
                    : 'border-neutral-700 hover:border-primary-500/50'
                }`}
              >
                {plan.popular && (
                  <div className="bg-primary-500 text-black text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                    MOST POPULAR
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-white mb-2 font-heading">{plan.name}</h3>
                <p className="text-neutral-400 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    {plan.period && <span className="text-neutral-400">{plan.period}</span>}
                  </div>
                  <div className="text-sm text-neutral-400 mt-2">
                    One-time setup: {plan.setupFee} {plan.setupFee !== 'Custom' && '(waived on annual prepay)'}
                  </div>
                  <div className="text-sm text-primary-400 mt-2 font-semibold">
                    {plan.callVolume}
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {plan.name === 'Dispatcher Pro' && (
                  <div className="mb-6 p-4 bg-primary-500/10 border border-primary-500/30 rounded-lg">
                    <p className="text-sm text-neutral-300">
                      <strong className="text-white">For enterprise & financial institutions:</strong> Includes security & compliance review support (SOC 2–aligned controls, vendor due-diligence documentation, DPA templates).
                    </p>
                  </div>
                )}
                
                <a
                  href="https://calendly.com/auralixai/strategy-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center py-3 rounded-lg font-bold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-primary-500 hover:bg-primary-400 text-white'
                      : 'bg-neutral-700 hover:bg-neutral-600 text-white'
                  }`}
                >
                  {plan.cta}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-16 px-4 bg-section-main bg-neutral-900/60 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4 font-heading">Compare Plans</h2>
            <p className="text-lg text-neutral-300">See what&apos;s included in each plan</p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full bg-neutral-800/80 backdrop-blur-sm rounded-2xl border border-neutral-700" aria-label="Pricing comparison table">
              <thead>
                <tr className="border-b border-neutral-700">
                  <th className="text-left p-4 text-white font-semibold">Features</th>
                  <th className="text-center p-4 text-white font-semibold">After Hours</th>
                  <th className="text-center p-4 text-white font-semibold bg-primary-500/20">Overflow + After Hours</th>
                  <th className="text-center p-4 text-white font-semibold">Dispatcher Pro</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Voice agent 24/7', starter: true, professional: true, enterprise: true },
                  { feature: 'Natural language processing', starter: true, professional: true, enterprise: true },
                  { feature: 'Appointment/booking management', starter: true, professional: true, enterprise: true },
                  { feature: 'Basic call routing', starter: true, professional: true, enterprise: true },
                  { feature: 'CRM integration', starter: true, professional: true, enterprise: true },
                  { feature: 'Email support', starter: true, professional: 'Phone only', enterprise: false },
                  { feature: 'Phone support', starter: false, professional: true, enterprise: true },
                  { feature: 'Priority support', starter: false, professional: true, enterprise: true },
                  { feature: 'Multi-language support', starter: false, professional: '5 languages', enterprise: '15+ languages' },
                  { feature: 'Custom AI training', starter: false, professional: true, enterprise: true },
                  { feature: 'Advanced analytics', starter: false, professional: true, enterprise: true },
                  { feature: 'Multi-location support', starter: false, professional: 'Up to 3', enterprise: 'Unlimited' },
                  { feature: 'Phone lines', starter: '1', professional: 'Up to 3', enterprise: 'Unlimited' },
                  { feature: 'Call volume/month', starter: 'Up to 300', professional: 'Up to 1,000', enterprise: 'Unlimited' },
                  { feature: 'SOC 2–aligned security controls', starter: false, professional: false, enterprise: true },
                  { feature: 'Dedicated account manager', starter: false, professional: false, enterprise: true },
                  { feature: 'White-label options', starter: false, professional: false, enterprise: true },
                  { feature: 'API access & webhooks', starter: false, professional: false, enterprise: true },
                ].map((row, index) => (
                  <tr key={index} className="border-b border-neutral-700/50 hover:bg-neutral-700/30 transition-colors">
                    <td className="p-4 text-neutral-300">{row.feature}</td>
                    <td className="p-4 text-center">
                      {row.starter === true ? (
                        <Check className="w-5 h-5 text-success-500 mx-auto" aria-label="Included" />
                      ) : row.starter === false ? (
                        <span className="text-neutral-500">—</span>
                      ) : (
                        <span className="text-neutral-300">{row.starter}</span>
                      )}
                    </td>
                    <td className="p-4 text-center bg-primary-500/10">
                      {row.professional === true ? (
                        <Check className="w-5 h-5 text-success-500 mx-auto" aria-label="Included" />
                      ) : row.professional === false ? (
                        <span className="text-neutral-500">—</span>
                      ) : (
                        <span className="text-neutral-300">{row.professional}</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {row.enterprise === true ? (
                        <Check className="w-5 h-5 text-success-500 mx-auto" aria-label="Included" />
                      ) : row.enterprise === false ? (
                        <span className="text-neutral-500">—</span>
                      ) : (
                        <span className="text-neutral-300">{row.enterprise}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4 font-heading">Frequently Asked Questions</h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: 'How are calls counted?',
                answer: 'Each inbound call to your voice agent counts as one call, regardless of duration. If a call is routed to a human agent, it still counts as one call. Spam calls under 10 seconds don\'t count toward usage. Transfers count as part of the same call.'
              },
              {
                question: 'What happens if I exceed my call limit?',
                answer: 'We\'ll notify you when you\'re approaching your limit. You can upgrade your plan or purchase additional call credits at $2 per call. We never cut off service without notice.'
              },
              {
                question: 'What about SMS usage?',
                answer: 'SMS confirmations and reminders are included in all plans. Overage SMS charges apply at $0.05 per message beyond included limits.'
              },
              {
                question: 'Can I switch plans?',
                answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle. Downgrades require 30-day notice.'
              },
              {
                question: 'What is included in professional setup?',
                answer: 'Professional setup includes: configuring your voice agent with business details, services, and pricing; CRM integration (ServiceTitan, Jobber, Housecall Pro, or Zapier); testing call flows; and team training. Setup typically takes 48-72 hours.'
              },
              {
                question: 'What is the cancellation policy?',
                answer: 'You can cancel your subscription with 30-day written notice. Monthly subscription fees are prorated. Setup fees are non-refundable. See our Terms of Service for full details.'
              },
              {
                question: 'Do you offer multi-location packages?',
                answer: 'Our Dispatcher Pro plan can be customized for businesses operating across multiple locations. Contact us for custom pricing.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-neutral-800/80 backdrop-blur-sm rounded-xl p-6 border border-neutral-700"
              >
                <h3 className="text-xl font-bold text-white mb-2 font-heading">{faq.question}</h3>
                <p className="text-neutral-300">{faq.answer}</p>
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
            <h2 className="text-3xl font-bold text-white mb-6 font-heading">Ready to Get Started?</h2>
            <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto">
              Join home services businesses that trust Auralix Voice Agent to handle their customer calls.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/auralixai/strategy-call"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 hover:bg-primary-400 text-white font-bold rounded-lg transition-all duration-200 hover:scale-105"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </a>
              <div className="inline-flex items-center gap-2 px-8 py-4 border-2 border-cyan-400 text-cyan-400 bg-gradient-to-r from-blue-600/20 to-purple-600/20 font-bold rounded-lg">
                <Phone className="w-5 h-5 animate-pulse" />
                Talk to AI Agent
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
