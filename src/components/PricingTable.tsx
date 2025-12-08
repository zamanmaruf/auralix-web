'use client';

import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  setupFee?: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
  color: 'primary' | 'blue' | 'purple' | 'gold';
}

interface PricingTableProps {
  plans: PricingPlan[];
  showROI?: boolean;
}

const colorClasses = {
  primary: {
    bg: 'bg-primary-500',
    text: 'text-primary-400',
    border: 'border-primary-400',
    hover: 'hover:bg-primary-400',
  },
  blue: {
    bg: 'bg-blue-500',
    text: 'text-blue-400',
    border: 'border-blue-400',
    hover: 'hover:bg-blue-400',
  },
  purple: {
    bg: 'bg-purple-500',
    text: 'text-purple-400',
    border: 'border-purple-400',
    hover: 'hover:bg-purple-400',
  },
  gold: {
    bg: 'bg-yellow-500',
    text: 'text-yellow-400',
    border: 'border-yellow-400',
    hover: 'hover:bg-yellow-400',
  },
};

export default function PricingTable({ plans, showROI = true }: PricingTableProps) {
  return (
    <div className="w-full">
      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 max-w-6xl mx-auto">
        {plans.map((plan, index) => {
          const colors = colorClasses[plan.color];
          return (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-neutral-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border ${
                plan.popular ? 'border-accent-orange scale-105' : 'border-neutral-700'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent-orange text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                  <Star className="w-4 h-4" />
                  MOST POPULAR
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2 font-heading">
                  {plan.name}
                </h3>
                <p className="text-neutral-300 mb-4">{plan.description}</p>
                <div className="text-4xl font-bold text-white mb-1">
                  {plan.price}
                </div>
                <div className="text-neutral-400 text-sm mb-2">{plan.period}</div>
                {plan.setupFee && (
                  <div className="text-neutral-400 text-sm">
                    Setup: {plan.setupFee}
                  </div>
                )}
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href={plan.name === 'Pro' ? 'https://buy.stripe.com/5kQ28rfoTcag3Ix4Rh73G00' : plan.name === 'Premium' ? 'https://buy.stripe.com/cNicN5ccH1vCa6V0B173G01' : '/contact'}
                target={plan.name === 'Enterprise' ? '_self' : '_blank'}
                rel={plan.name === 'Enterprise' ? '' : 'noopener noreferrer'}
                className={`w-full ${colors.bg} ${colors.hover} text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 text-center block hover:scale-105`}
              >
                {plan.cta}
              </a>
            </motion.div>
          );
        })}
      </div>

      {/* ROI Comparison */}
      {showROI && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-neutral-800 to-neutral-900 rounded-2xl p-8 border border-neutral-700"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center font-heading">
            ROI Comparison: Human Receptionist vs Auralix AI
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <h4 className="text-lg font-semibold text-red-400 mb-4">Human Receptionist</h4>
              <div className="text-3xl font-bold text-red-400 mb-2">$48,000</div>
              <div className="text-neutral-400 text-sm">Annual cost (full-time)</div>
              <ul className="mt-4 space-y-2 text-sm text-neutral-300">
                <li>• Limited to business hours</li>
                <li>• Benefits & training costs</li>
                <li>• Sick days & vacation</li>
                <li>• Human error potential</li>
              </ul>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-semibold text-primary-400 mb-4">Auralix AI</h4>
              <div className="text-3xl font-bold text-primary-400 mb-2">$2,388</div>
              <div className="text-neutral-400 text-sm">Annual cost (Pro plan)</div>
              <ul className="mt-4 space-y-2 text-sm text-neutral-300">
                <li>• 24/7 availability</li>
                <li>• No benefits or training</li>
                <li>• Never takes time off</li>
                <li>• Consistent performance</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-6">
            <div className="text-2xl font-bold text-green-400">
              Save $45,612 per year
            </div>
            <div className="text-neutral-400 text-sm">That&apos;s 95% cost reduction</div>
          </div>
        </motion.div>
      )}

      {/* Founder's Special */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-8 text-center"
      >
        <div className="bg-gradient-to-r from-accent-orange/20 to-primary-500/20 rounded-xl p-6 border border-accent-orange/30">
          <h4 className="text-xl font-bold text-white mb-2 font-heading">
            Founder&apos;s Special
          </h4>
          <p className="text-neutral-300">
            First 100 restaurants get <span className="text-accent-orange font-bold">20% off for life</span>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
