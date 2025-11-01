'use client';

import { motion } from 'framer-motion';
import { Check, Star, ArrowRight, Phone, TrendingUp, Clock, DollarSign, Users, Shield, Globe } from 'lucide-react';
import PricingTable from '../../components/PricingTable';

const pricingPlans = [
  {
    name: 'Starter',
    price: '$199',
    period: '/month',
    setupFee: '$499',
    description: 'Perfect for small businesses getting started with voice AI',
    callVolume: 'Up to 500 calls/month',
    features: [
      'Voice agent 24/7',
      'Natural language processing',
      'Appointment/booking management',
      'Basic call routing',
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
    name: 'Professional',
    price: '$499',
    period: '/month',
    setupFee: '$799',
    description: 'Ideal for growing businesses across industries',
    callVolume: 'Up to 2,000 calls/month',
    features: [
      'Everything in Starter',
      'Advanced NLP capabilities',
      'Multi-language support (5 languages)',
      'Custom AI training',
      'Priority phone support',
      'Multi-location support (up to 3)',
      'Up to 3 phone lines',
      'Advanced analytics dashboard',
      'Custom integrations'
    ],
    cta: 'Get Started',
    color: 'purple' as const,
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '/month',
    setupFee: 'Custom',
    description: 'Scalable solution for large organizations and multi-location chains',
    callVolume: 'Unlimited calls',
    features: [
      'Everything in Professional',
      'Unlimited phone lines',
      'Unlimited locations',
      'Enterprise-grade security (SOC 2)',
      'Dedicated account manager',
      'Custom AI model training',
      'White-label options',
      'API access & webhooks',
      'Multi-language support (15+ languages)',
      '24/7 priority support',
      'SLA guarantees',
      'Custom integrations',
      'Advanced reporting & analytics',
      'HIPAA compliance options'
    ],
    cta: 'Contact Sales',
    color: 'gold' as const,
    popular: false
  }
];

export default function PricingPage() {
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
            Simple Pricing for Voice Agent SaaS
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-neutral-300 mb-8 max-w-3xl mx-auto"
          >
            Choose the plan that fits your business size. Professional setup included with all plans. 
            Scales from single locations to enterprise chains.
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
              <span>No setup fees on annual plans</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-400" />
              <span>Cancel anytime</span>
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
                    Setup: {plan.setupFee}
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
                
                <a
                  href="/contact"
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

      {/* Industry-Specific Pricing Info */}
      <section className="py-16 px-4 bg-neutral-800/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4 font-heading">Pricing That Scales with Your Industry</h2>
            <p className="text-lg text-neutral-300">Our voice agent works across industries with flexible pricing</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'Dental Practices',
                description: 'Perfect for managing patient appointments and inquiries',
                recommended: 'Starter or Professional'
              },
              {
                icon: Phone,
                title: 'Restaurants',
                description: 'Handle reservations and orders during peak hours',
                recommended: 'Professional'
              },
              {
                icon: Globe,
                title: 'Hotel Chains',
                description: 'Enterprise solution for multi-location operations',
                recommended: 'Enterprise'
              }
            ].map((industry, index) => {
              const IndustryIcon = industry.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-neutral-800/80 backdrop-blur-sm rounded-xl p-6 border border-neutral-700"
                >
                  <IndustryIcon className="w-10 h-10 text-primary-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2 font-heading">{industry.title}</h3>
                  <p className="text-neutral-300 mb-4">{industry.description}</p>
                  <div className="text-sm text-primary-400 font-semibold">
                    Recommended: {industry.recommended}
                  </div>
                </motion.div>
              );
            })}
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
                answer: 'Each inbound call to your voice agent counts as one call. If a call is routed to a human agent, it still counts as one call.'
              },
              {
                question: 'What happens if I exceed my call limit?',
                answer: 'We\'ll notify you when you\'re approaching your limit. You can upgrade your plan or purchase additional call credits. We never cut off service without notice.'
              },
              {
                question: 'Can I switch plans?',
                answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle.'
              },
              {
                question: 'Is professional setup included?',
                answer: 'Yes, all plans include professional setup where our team configures your voice agent, integrates with your systems, and ensures everything works perfectly.'
              },
              {
                question: 'Do you offer multi-industry packages?',
                answer: 'Our Enterprise plan can be customized for businesses operating across multiple industries or locations. Contact us for custom pricing.'
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
              Join businesses across industries that trust Auralix Voice Agent to handle their customer calls.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
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
