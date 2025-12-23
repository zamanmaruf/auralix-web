'use client';

import { motion } from 'framer-motion';
import { Check, X, ArrowRight, Phone, DollarSign, Users, Clock, Zap, Calendar } from 'lucide-react';
import Link from 'next/link';

export default function CompareJobberPage() {
  const comparison = [
    {
      feature: 'Pricing Model',
      auralix: 'Per-location base + included usage, transparent overage',
      jobber: '$99/mo add-on (embedded in Jobber subscription)',
      winner: 'auralix'
    },
    {
      feature: 'Standalone vs Embedded',
      auralix: 'Standalone - works with any CRM/scheduling system',
      jobber: 'Embedded - requires Jobber subscription ($129-$249/mo base)',
      winner: 'auralix'
    },
    {
      feature: 'Coverage Scope',
      auralix: '24/7 after-hours + overflow during business hours',
      jobber: '24/7 answering (embedded in Jobber platform)',
      winner: 'tie'
    },
    {
      feature: 'Integration Flexibility',
      auralix: 'Works with ServiceTitan, Housecall Pro, Jobber, or any CRM via API/Zapier',
      jobber: 'Only works within Jobber ecosystem',
      winner: 'auralix'
    },
    {
      feature: 'Setup Complexity',
      auralix: 'White-glove setup included (annual) or one-time fee (monthly)',
      jobber: 'Simple activation within Jobber (if you already use Jobber)',
      winner: 'jobber'
    },
    {
      feature: 'Multi-CRM Support',
      auralix: 'Yes - can integrate with multiple systems simultaneously',
      jobber: 'No - Jobber-only',
      winner: 'auralix'
    },
    {
      feature: 'Pricing Transparency',
      auralix: 'Clear per-location pricing with included usage',
      jobber: 'Add-on pricing, but requires Jobber base subscription',
      winner: 'auralix'
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
            Auralix AI vs Jobber Receptionist
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-neutral-300 mb-8 max-w-4xl mx-auto"
          >
            Comparing standalone AI receptionist vs embedded Jobber add-on. Choose the right solution for your home services business.
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
                  <span className="text-neutral-300">Starting at $399/month per location</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary-400" />
                  <span className="text-neutral-300">Standalone - works with any CRM</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary-400" />
                  <span className="text-neutral-300">Multi-CRM support</span>
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
              <h2 className="text-2xl font-bold text-white mb-4 font-heading">Jobber Receptionist</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-neutral-400" />
                  <span className="text-neutral-300">$99/month add-on</span>
                </div>
                <div className="flex items-center gap-2">
                  <X className="w-5 h-5 text-red-400" />
                  <span className="text-neutral-300">Requires Jobber subscription ($129-$249/mo)</span>
                </div>
                <div className="flex items-center gap-2">
                  <X className="w-5 h-5 text-red-400" />
                  <span className="text-neutral-300">Jobber-only integration</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Comparison Table */}
      <section className="py-16 px-4">
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
                  <th className="text-center p-4 text-white font-semibold">Jobber Receptionist</th>
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
                    <td className={`p-4 text-center ${item.winner === 'jobber' ? 'bg-green-500/10' : ''}`}>
                      <div className="flex items-center justify-center gap-2">
                        {item.winner === 'jobber' && <Check className="w-5 h-5 text-green-400" />}
                        <span className="text-neutral-300 text-sm">{item.jobber}</span>
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
      <section className="py-16 px-4 bg-neutral-800/50">
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
                  <span>You use ServiceTitan, Housecall Pro, or multiple systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>You want standalone AI that works independently</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>You need multi-CRM support or plan to switch systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>You want transparent, per-location pricing</span>
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
              <h3 className="text-2xl font-bold text-white mb-4 font-heading">Choose Jobber Receptionist If:</h3>
              <ul className="space-y-3 text-neutral-300">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>You already use Jobber and plan to stay with it</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>You want everything in one platform (CRM + AI)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>You prefer lower add-on pricing ($99/mo)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>You don't need multi-CRM flexibility</span>
                </li>
              </ul>
            </motion.div>
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
            <h2 className="text-3xl font-bold text-white mb-6 font-heading">Ready to Try Auralix AI?</h2>
            <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto">
              Experience our standalone AI receptionist that works with any CRM, including Jobber.
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
                      event_label: 'Compare Jobber',
                      location: 'compare_jobber',
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

