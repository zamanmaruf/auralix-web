'use client';

import { motion } from 'framer-motion';
import { Check, X, ArrowRight, Phone, DollarSign, Users, Clock, Zap, TrendingUp, Calendar } from 'lucide-react';
import Link from 'next/link';

export default function CompareServiceTitanPage() {
  const comparison = [
    {
      feature: 'Pricing Model',
      auralix: 'Per-location base + included usage ($399-$1,499/mo)',
      servicetitan: '$2.99 per call (usage-based)',
      winner: 'auralix'
    },
    {
      feature: 'Pricing Predictability',
      auralix: 'Fixed monthly cost with included usage',
      servicetitan: 'Variable cost - depends on call volume',
      winner: 'auralix'
    },
    {
      feature: 'Integration',
      auralix: 'Works with ServiceTitan, Jobber, Housecall Pro, or any CRM',
      servicetitan: 'Native ServiceTitan integration (ServiceTitan-only)',
      winner: 'tie'
    },
    {
      feature: 'Data Access',
      auralix: 'Integrates with ServiceTitan API for seamless data sync',
      servicetitan: 'Full access to ServiceTitan data (native integration)',
      winner: 'servicetitan'
    },
    {
      feature: 'Standalone Option',
      auralix: 'Yes - can work independently or with ServiceTitan',
      servicetitan: 'No - requires ServiceTitan subscription',
      winner: 'auralix'
    },
    {
      feature: 'Cost at Scale',
      auralix: 'Predictable per-location pricing, better for high call volume',
      servicetitan: 'Per-call pricing can get expensive with high volume',
      winner: 'auralix'
    },
    {
      feature: 'Setup & Onboarding',
      auralix: 'White-glove setup included (annual) or one-time fee',
      servicetitan: 'Native activation within ServiceTitan platform',
      winner: 'servicetitan'
    },
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
            Auralix AI vs ServiceTitan Voice Agent
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-neutral-300 mb-8 max-w-4xl mx-auto"
          >
            Comparing fixed per-location pricing vs usage-based per-call pricing. Choose the model that fits your call volume.
          </motion.p>
        </div>
      </section>

      {/* Quick Comparison */}
      <section className="py-16 px-4 bg-neutral-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-primary-500/20 to-blue-500/20 rounded-2xl p-8 border border-primary-500/30"
            >
              <h2 className="text-2xl font-bold text-white mb-4 font-heading">Auralix AI</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-primary-400" />
                  <span className="text-neutral-300">$399-$1,499/month per location (fixed)</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary-400" />
                  <span className="text-neutral-300">Predictable costs with included usage</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary-400" />
                  <span className="text-neutral-300">Works with ServiceTitan or standalone</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-neutral-800/80 rounded-2xl p-8 border border-neutral-700"
            >
              <h2 className="text-2xl font-bold text-white mb-4 font-heading">ServiceTitan Voice Agent</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-neutral-400" />
                  <span className="text-neutral-300">$2.99 per call (usage-based)</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-neutral-400" />
                  <span className="text-neutral-300">Variable cost - scales with call volume</span>
                </div>
                <div className="flex items-center gap-2">
                  <X className="w-5 h-5 text-red-400" />
                  <span className="text-neutral-300">Requires ServiceTitan subscription</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cost Comparison Example */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4 font-heading">Cost Comparison Example</h2>
            <p className="text-lg text-neutral-300">For a business handling 500 calls/month</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl p-8 border border-green-500/30"
            >
              <h3 className="text-2xl font-bold text-white mb-4 font-heading">Auralix AI</h3>
              <div className="space-y-3 text-neutral-300">
                <div className="flex justify-between">
                  <span>Base plan (Overflow + After Hours):</span>
                  <span className="font-bold text-white">$799/mo</span>
                </div>
                <div className="flex justify-between">
                  <span>Included usage (1,000 calls):</span>
                  <span className="font-bold text-green-400">Included</span>
                </div>
                <div className="border-t border-green-500/30 pt-3 mt-3">
                  <div className="flex justify-between text-xl">
                    <span className="font-bold text-white">Total Monthly Cost:</span>
                    <span className="font-bold text-green-400">$799</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-neutral-800/80 rounded-xl p-8 border border-neutral-700"
            >
              <h3 className="text-2xl font-bold text-white mb-4 font-heading">ServiceTitan Voice Agent</h3>
              <div className="space-y-3 text-neutral-300">
                <div className="flex justify-between">
                  <span>500 calls × $2.99:</span>
                  <span className="font-bold text-white">$1,495/mo</span>
                </div>
                <div className="flex justify-between text-sm text-neutral-400">
                  <span>Plus ServiceTitan base subscription:</span>
                  <span>$249-$499/mo</span>
                </div>
                <div className="border-t border-neutral-700 pt-3 mt-3">
                  <div className="flex justify-between text-xl">
                    <span className="font-bold text-white">Total Monthly Cost:</span>
                    <span className="font-bold text-red-400">$1,495+</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Comparison Table */}
      <section className="py-16 px-4 bg-neutral-800/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4 font-heading">Feature Comparison</h2>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-neutral-700">
                  <th className="text-left p-4 text-white font-semibold">Feature</th>
                  <th className="text-center p-4 text-white font-semibold bg-primary-500/20">Auralix AI</th>
                  <th className="text-center p-4 text-white font-semibold">ServiceTitan Voice Agent</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((item, index) => (
                  <tr key={index} className="border-b border-neutral-700/50 hover:bg-neutral-800/50 transition-colors">
                    <td className="p-4 text-neutral-300 font-semibold">{item.feature}</td>
                    <td className={`p-4 text-center ${item.winner === 'auralix' ? 'bg-green-500/10' : ''}`}>
                      <div className="flex items-center justify-center gap-2">
                        {item.winner === 'auralix' && <Check className="w-5 h-5 text-green-400" />}
                        <span className="text-neutral-300 text-sm">{item.auralix}</span>
                      </div>
                    </td>
                    <td className={`p-4 text-center ${item.winner === 'servicetitan' ? 'bg-green-500/10' : ''}`}>
                      <div className="flex items-center justify-center gap-2">
                        {item.winner === 'servicetitan' && <Check className="w-5 h-5 text-green-400" />}
                        <span className="text-neutral-300 text-sm">{item.servicetitan}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* When to Choose Each */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4 font-heading">When to Choose Each</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-primary-500/20 to-blue-500/20 rounded-xl p-8 border border-primary-500/30"
            >
              <h3 className="text-2xl font-bold text-white mb-4 font-heading">Choose Auralix AI If:</h3>
              <ul className="space-y-3 text-neutral-300">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>You handle 200+ calls/month (better value with fixed pricing)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>You want predictable monthly costs</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>You use ServiceTitan but want flexibility to switch</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>You need multi-CRM support or standalone option</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-neutral-800/80 rounded-xl p-8 border border-neutral-700"
            >
              <h3 className="text-2xl font-bold text-white mb-4 font-heading">Choose ServiceTitan Voice Agent If:</h3>
              <ul className="space-y-3 text-neutral-300">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>You handle fewer than 200 calls/month (lower cost at low volume)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>You're committed to ServiceTitan long-term</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>You want native ServiceTitan data access</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>You prefer pay-per-use pricing model</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-neutral-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary-500/20 to-blue-500/20 rounded-2xl p-8 border border-primary-500/30"
          >
            <h2 className="text-3xl font-bold text-white mb-6 font-heading">Ready to Try Auralix AI?</h2>
            <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto">
              Get predictable pricing that scales with your business. Integrates seamlessly with ServiceTitan.
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
                      event_label: 'Compare ServiceTitan',
                      location: 'compare_servicetitan',
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
                className="px-8 py-4 border-2 border-primary-400 text-primary-400 hover:bg-primary-400 hover:text-black font-bold rounded-lg transition-all duration-200"
              >
                Demo Call
                <ArrowRight className="w-5 h-5 inline-block ml-2" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

