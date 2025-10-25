'use client';

import { motion } from 'framer-motion';
import { Check, Star, ArrowRight, Calculator, TrendingUp, Clock, DollarSign, Phone } from 'lucide-react';
import PricingTable from '../../components/PricingTable';

const pricingPlans = [
  {
    name: 'Pro',
    price: '$199',
    period: '/month',
    setupFee: '$499 CAD',
    description: 'Most popular choice for growing restaurants',
    features: [
      'AI Receptionist (voice)',
      'Website & social chatbot',
      'Order automation',
      'Review collection',
      'Advanced analytics',
      'Priority support',
      'Up to 3 locations',
      'Unlimited conversations',
      'Custom integrations',
      'Phone support'
    ],
    cta: 'Buy Now',
    color: 'blue' as const,
    popular: true
  },
  {
    name: 'Premium',
    price: '$599',
    period: '/month',
    setupFee: '$599 CAD',
    description: 'Complete solution for multi-location restaurant chains',
    features: [
      'Everything in Pro',
      'Multi-location management',
      'Advanced reporting',
      'Custom AI training',
      'Dedicated account manager',
      '24/7 phone support',
      'Unlimited locations',
      'White-label options',
      'API access',
      'Custom workflows'
    ],
    cta: 'Buy Now',
    color: 'purple' as const
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
            Simple Pricing for Restaurant AI
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-neutral-300 mb-8 max-w-3xl mx-auto"
          >
            Choose the plan that fits your restaurant size. Professional setup included with all plans.
          </motion.p>
          
          {/* Primary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8"
          >
            <a
              href="/contact"
              className="bg-accent-orange hover:bg-accent-orange/90 text-white px-8 py-4 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-200 hover:scale-105 flex items-center justify-center gap-3 mx-auto max-w-md"
            >
              <DollarSign className="w-6 h-6" />
              Choose Your Plan
            </a>
            <p className="text-primary-200 text-lg font-semibold mt-3">
              Select the perfect plan for your restaurant and get started today
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 text-sm text-neutral-400"
          >
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-400" />
              <span>Professional Setup</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-400" />
              <span>No Contracts</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-400" />
              <span>Cancel Anytime</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <PricingTable plans={pricingPlans} showROI={true} />
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-neutral-800/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4 font-heading">How Our Pricing Works</h2>
            <p className="text-lg text-neutral-300">Simple, transparent pricing with no hidden fees</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Choose Your Plan',
                description: 'Select the plan that best fits your restaurant size and needs',
                icon: Calculator,
                color: 'blue'
              },
              {
                step: '2',
                title: 'Professional Setup',
                description: 'We handle the complete setup and integration for your restaurant',
                icon: Check,
                color: 'primary'
              },
              {
                step: '3',
                title: 'Scale as You Grow',
                description: 'Upgrade or downgrade anytime as your restaurant expands',
                icon: TrendingUp,
                color: 'purple'
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
                <div className={`w-16 h-16 bg-${step.color}-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4`}>
                  {step.step}
                </div>
                <step.icon className={`w-8 h-8 text-${step.color}-400 mx-auto mb-4`} />
                <h3 className="text-xl font-bold text-white mb-3 font-heading">{step.title}</h3>
                <p className="text-neutral-300">{step.description}</p>
              </motion.div>
            ))}
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
            <h2 className="text-3xl font-bold text-white mb-4 font-heading">Pricing FAQs</h2>
            <p className="text-lg text-neutral-300">Common questions about our pricing and plans</p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: 'What\'s included in the setup fee?',
                answer: 'The setup fee covers professional installation, configuration, and training for your restaurant staff. We handle all technical setup and ensure everything works perfectly before you go live.'
              },
              {
                question: 'Can I change plans later?',
                answer: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any billing differences.'
              },
              {
                question: 'What are the setup fees?',
                answer: 'Pro plan has a $499 CAD setup fee, and Premium plan has a $599 CAD setup fee. This covers professional installation and configuration.'
              },
              {
                question: 'What happens if I exceed my plan limits?',
                answer: 'We\'ll notify you before you reach your limits and offer options to upgrade. We never cut off service unexpectedly.'
              },
              {
                question: 'Do you offer discounts for annual plans?',
                answer: 'Yes! Annual plans include a 20% discount. Contact our sales team for custom enterprise pricing for large restaurant chains.'
              },
              {
                question: 'What support is included?',
                answer: 'Pro includes priority email and phone support, and Premium includes 24/7 phone support with a dedicated account manager.'
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
                <h3 className="text-lg font-bold text-white mb-3 font-heading">{faq.question}</h3>
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
            <h2 className="text-3xl font-bold text-white mb-4 font-heading">
              Ready to Transform Your Restaurant?
            </h2>
            <p className="text-lg text-neutral-300 mb-8">
              Get started with Auralix AI today and see how we can help you never miss another call or order.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent-orange hover:bg-accent-orange/90 text-white font-bold rounded-lg transition-all duration-200 hover:scale-105"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border-2 border-primary-400 text-primary-400 hover:bg-primary-400 hover:text-black font-bold rounded-lg transition-all duration-200"
              >
                Contact Sales
              </a>
            </div>
            <p className="text-sm text-neutral-400 mt-4">
              Professional setup included • No contracts • Cancel anytime
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}