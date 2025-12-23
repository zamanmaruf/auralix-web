'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp, Phone, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import RevenueCalculator from '../../components/RevenueCalculator';

export default function MissedCallCalculatorHomeServicesPage() {
  const [showCalculator, setShowCalculator] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-900 text-white">
      <section className="py-16 sm:py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 font-heading"
          >
            Calculate Your Lost Revenue from Missed Calls
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-neutral-300 mb-8 max-w-4xl mx-auto"
          >
            See how much revenue you're losing from missed calls. Enter your numbers and discover the hidden cost of unanswered phones.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => setShowCalculator(true)}
              className="px-8 py-4 bg-accent-orange hover:bg-accent-orange/90 text-white font-bold rounded-lg transition-all duration-200 hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              <Calculator className="w-5 h-5" />
              Open Calculator
            </button>
            <button
              onClick={() => {
                if ((window as any).triggerVapiCall) {
                  (window as any).triggerVapiCall();
                } else {
                  window.dispatchEvent(new Event('trigger-vapi-call'));
                }
              }}
              className="px-8 py-4 border-2 border-primary-400 text-primary-400 hover:bg-primary-400 hover:text-black font-bold rounded-lg transition-all duration-200 inline-flex items-center justify-center gap-2"
            >
              Demo Call
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4 bg-neutral-800/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-red-500/10 border border-red-500/30 rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-4 font-heading">The Hidden Cost of Missed Calls</h2>
            <p className="text-neutral-300 mb-4">
              Industry research shows that home services businesses miss 27% of calls on average. 
              During peak season or after hours, that number can jump to 40% or higher.
            </p>
            <p className="text-neutral-300">
              Every missed call represents a lost opportunity. Use the calculator above to see exactly how much revenue you're losing.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4 font-heading">How It Works</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: '1',
                title: 'Enter Your Numbers',
                description: 'Monthly ad spend, average ticket, close rate, and missed call rate'
              },
              {
                step: '2',
                title: 'See Your Loss',
                description: 'Calculate daily, monthly, and yearly revenue lost from missed calls'
              },
              {
                step: '3',
                title: 'Recover Revenue',
                description: 'Auralix answers 100% of calls and helps you recover lost revenue'
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

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary-500/20 to-blue-500/20 rounded-2xl p-8 border border-primary-500/30"
          >
            <h2 className="text-3xl font-bold text-white mb-6 font-heading">Ready to Stop Losing Revenue?</h2>
            <p className="text-lg text-neutral-300 mb-8">
              Try our demo call to experience how Auralix AI handles calls and captures leads.
            </p>
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
          </motion.div>
        </div>
      </section>

      <RevenueCalculator isOpen={showCalculator} onClose={() => setShowCalculator(false)} />
    </div>
  );
}

