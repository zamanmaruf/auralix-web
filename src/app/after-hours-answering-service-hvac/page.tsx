'use client';

import { motion } from 'framer-motion';
import { Phone, CheckCircle, ArrowRight, Clock, Calendar } from 'lucide-react';
import Link from 'next/link';

export default function AfterHoursAnsweringServiceHVACPage() {
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
            After-Hours Answering Service for HVAC
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-neutral-300 mb-8 max-w-4xl mx-auto"
          >
            Never miss another after-hours heating or cooling emergency. Auralix answers every call, qualifies leads, and books urgent service 24/7.
          </motion.p>
          
          {/* Demo Phone Number */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mb-8"
          >
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-4 border border-cyan-500/30 inline-block">
              <p className="text-neutral-300 text-sm mb-2">Book a free consultation to experience it live:</p>
              <a
                href="https://calendly.com/auralixai/strategy-call"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).gtag) {
                    (window as any).gtag('event', 'calendly_click', {
                      event_category: 'conversion',
                      event_label: 'After Hours Hero',
                      location: 'after_hours_hero',
                    });
                  }
                }}
                className="text-2xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors flex items-center justify-center gap-2"
              >
                <Calendar className="w-6 h-6" />
                Free Consultation
              </a>
            </div>
          </motion.div>
          
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
            <a
              href="https://calendly.com/auralixai/strategy-call"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).gtag) {
                  (window as any).gtag('event', 'calendly_click', {
                    event_category: 'conversion',
                    event_label: 'After Hours CTA',
                    location: 'after_hours_cta',
                  });
                }
              }}
              className="px-8 py-4 border-2 border-primary-400 text-primary-400 hover:bg-primary-400 hover:text-black font-bold rounded-lg transition-all duration-200 inline-flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Free Consultation
            </a>
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
            <h2 className="text-2xl font-bold text-white mb-4 font-heading">The After-Hours Problem</h2>
            <p className="text-neutral-300 mb-4">
              Most HVAC emergencies happen after hours, on weekends, or during holidays. When your team is off, 
              customers leave voicemails or call your competitor. Every missed after-hours call is lost revenue.
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
            <h2 className="text-3xl font-bold text-white mb-4 font-heading">How After-Hours Coverage Works</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Clock,
                title: '24/7 Coverage',
                description: 'Answers every call, even when your team is off'
              },
              {
                icon: CheckCircle,
                title: 'Emergency Triage',
                description: 'Identifies urgent calls and routes them appropriately'
              },
              {
                icon: Phone,
                title: 'Lead Capture',
                description: 'Captures complete information and books service'
              }
            ].map((feature, index) => {
              const FeatureIcon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-neutral-800/80 rounded-xl p-6 border border-neutral-700 text-center"
                >
                  <FeatureIcon className="w-10 h-10 text-primary-400 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2 font-heading">{feature.title}</h3>
                  <p className="text-neutral-300 text-sm">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Objections Answered */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4 font-heading">Common Questions Answered</h2>
            <p className="text-lg text-neutral-300">Addressing the top concerns about after-hours AI answering</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-neutral-800/80 backdrop-blur-sm rounded-xl p-6 border border-neutral-700"
            >
              <h3 className="text-xl font-bold text-white mb-3 font-heading">1. Is it worth the cost?</h3>
              <p className="text-neutral-300 text-sm mb-4">
                Most HVAC emergencies happen after hours. If you're missing just 5 after-hours calls per month at $500 each, 
                that's $2,500 in lost revenue. Our after-hours plan starts at $399/month—less than one missed emergency.
              </p>
              <p className="text-primary-400 text-sm font-semibold">
                ROI: Most businesses see payback in the first month.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-neutral-800/80 backdrop-blur-sm rounded-xl p-6 border border-neutral-700"
            >
              <h3 className="text-xl font-bold text-white mb-3 font-heading">2. Will AI handle after-hours emergencies well?</h3>
              <p className="text-neutral-300 text-sm mb-4">
                Our AI is specifically trained to triage HVAC emergencies—understanding urgency, collecting critical info, 
                and booking priority service calls. It handles "no heat" and "AC failure" calls like a seasoned dispatcher.
              </p>
              <p className="text-primary-400 text-sm font-semibold">
                <a href="https://calendly.com/auralixai/strategy-call" target="_blank" rel="noopener noreferrer" className="underline">Book a free consultation</a> to experience it yourself.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-neutral-800/80 backdrop-blur-sm rounded-xl p-6 border border-neutral-700"
            >
              <h3 className="text-xl font-bold text-white mb-3 font-heading">3. What if they need a human?</h3>
              <p className="text-neutral-300 text-sm mb-4">
                If a caller requests a human or the situation requires escalation, our AI seamlessly transfers to your on-call team. 
                The AI captures all the details first, so your team has full context when they take over.
              </p>
              <p className="text-primary-400 text-sm font-semibold">
                Best of both worlds: AI efficiency + human touch when needed.
              </p>
            </motion.div>
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
            <h2 className="text-3xl font-bold text-white mb-6 font-heading">Ready for 24/7 Coverage?</h2>
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
    </div>
  );
}

