'use client';

import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import Link from 'next/link';

interface PricingPlan {
  name: string;
  price: string;
  setupFee: string;
  description: string;
  features: string[];
  cta: string;
  href: string;
  popular?: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    name: 'Pro',
    price: '$199',
    setupFee: '$499 CAD',
    description: 'Perfect for growing restaurants',
    features: [
      'AI Voice Receptionist',
      'Website & Social Chatbot',
      'Order & Review Automation',
      '48-Hour Setup',
      'Email Support',
      'Basic Analytics'
    ],
    cta: 'Get Started',
    href: '/contact'
  },
  {
    name: 'Premium',
    price: '$599',
    setupFee: '$599 CAD',
    description: 'For multi-location chains',
    features: [
      'All Pro Features',
      'Multi-Location Support',
      'Priority Support',
      'Advanced Analytics Dashboard',
      'Custom Integrations',
      'Dedicated Account Manager'
    ],
    cta: 'Get Started',
    href: '/contact',
    popular: true
  }
];

export default function PricingTableSimple() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Simple Monthly Plans
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional setup included with all plans. No contracts, cancel anytime.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-white rounded-2xl shadow-lg border-2 p-8 ${
                plan.popular 
                  ? 'border-primary-500 ring-2 ring-primary-500/20' 
                  : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                
                <div className="mb-4">
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {plan.price}
                    <span className="text-lg font-normal text-gray-500">/month</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    Setup fee: {plan.setupFee}
                  </div>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan.href}
                className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                  plan.popular
                    ? 'bg-primary-500 text-white hover:bg-primary-600 shadow-lg hover:shadow-xl'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-orange-800 mb-2">
              Founders' Launch Special
            </h3>
            <p className="text-orange-700">
              First 100 clients get $499 setup fee for Pro plan. Prices increasing soon!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
