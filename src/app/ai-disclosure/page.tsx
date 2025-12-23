'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Shield, MessageSquare, Phone, ArrowRight, Calendar } from 'lucide-react';
import Link from 'next/link';

export default function AIDisclosurePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-900 text-white">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 font-heading"
          >
            AI Disclosure & Transparency
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-neutral-300 mb-8 max-w-3xl mx-auto"
          >
            Auralix AI is committed to transparency. We disclose that callers are speaking with an AI assistant at the beginning of every call.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-cyan-500/30 mb-12"
          >
            <div className="flex items-start gap-4 mb-6">
              <MessageSquare className="w-8 h-8 text-cyan-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-white mb-3 font-heading">Our AI Disclosure Statement</h2>
                <p className="text-lg text-neutral-300 mb-4">
                  At the start of every call, Auralix AI clearly states:
                </p>
                <div className="bg-neutral-900/50 rounded-lg p-6 border border-neutral-700">
                  <p className="text-neutral-200 italic text-lg leading-relaxed">
                    "Hello, this is Auralix AI, an artificial intelligence assistant. I'm here to help you with your service request. 
                    How can I assist you today?"
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-neutral-800/80 backdrop-blur-sm rounded-xl p-8 border border-neutral-700"
            >
              <h2 className="text-2xl font-bold text-white mb-4 font-heading flex items-center gap-3">
                <Shield className="w-6 h-6 text-green-400" />
                Why We Disclose
              </h2>
              <div className="space-y-4 text-neutral-300">
                <p>
                  Transparency is a core value at Auralix AI. We believe callers have the right to know they're speaking with an AI assistant. 
                  This approach:
                </p>
                <ul className="space-y-3 ml-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Builds trust:</strong> Callers appreciate honesty and are more likely to engage when they understand who they're speaking with</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Sets expectations:</strong> Callers know they're speaking with an AI that can handle their request efficiently</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Reduces complaints:</strong> Clear disclosure prevents confusion and ensures callers understand the service</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Aligns with best practices:</strong> Following guidance from leading field service management platforms and privacy regulators</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-neutral-800/80 backdrop-blur-sm rounded-xl p-8 border border-neutral-700"
            >
              <h2 className="text-2xl font-bold text-white mb-4 font-heading flex items-center gap-3">
                <Phone className="w-6 h-6 text-blue-400" />
                How It Works
              </h2>
              <div className="space-y-4 text-neutral-300">
                <p>
                  When a caller reaches your business through Auralix AI:
                </p>
                <ol className="space-y-3 ml-4 list-decimal">
                  <li><strong>Immediate disclosure:</strong> The AI introduces itself as an AI assistant in the greeting</li>
                  <li><strong>Natural conversation:</strong> The AI handles the call conversationally, just like a human dispatcher would</li>
                  <li><strong>Human handoff available:</strong> If the caller requests a human or the situation requires it, the AI seamlessly transfers to your team</li>
                  <li><strong>Full transparency:</strong> Call transcripts and recordings clearly indicate the AI disclosure was made</li>
                </ol>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-neutral-800/80 backdrop-blur-sm rounded-xl p-8 border border-neutral-700"
            >
              <h2 className="text-2xl font-bold text-white mb-4 font-heading">Call Recording & Consent</h2>
              <div className="space-y-4 text-neutral-300">
                <p>
                  In addition to AI disclosure, Auralix AI also obtains explicit consent for call recording at the start of each call, 
                  in compliance with Canadian privacy regulations (PIPEDA).
                </p>
                <p>
                  The AI states: <em>"This call may be recorded for quality and training purposes. Do you consent to being recorded?"</em>
                </p>
                <p>
                  If the caller does not consent, the call can still proceed, but recording will be disabled. 
                  For more information, see our <Link href="/privacy" className="text-primary-400 hover:text-primary-300 underline">Privacy Policy</Link>.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-neutral-800/80 backdrop-blur-sm rounded-xl p-8 border border-neutral-700"
            >
              <h2 className="text-2xl font-bold text-white mb-4 font-heading">Industry Alignment</h2>
              <div className="space-y-4 text-neutral-300">
                <p>
                  Our disclosure approach aligns with how leading field service management platforms handle AI transparency:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Housecall Pro CSR AI:</strong> Discloses it is AI at the beginning of calls</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span><strong>ServiceTitan Voice Agent:</strong> Uses clear AI identification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Best practices:</strong> Following guidance from the Office of the Privacy Commissioner of Canada</span>
                  </li>
                </ul>
              </div>
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
            <h2 className="text-3xl font-bold text-white mb-6 font-heading">Experience Our AI Disclosure</h2>
            <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto">
              Call our demo number to hear how Auralix AI discloses itself and handles calls transparently.
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
                      event_label: 'AI Disclosure',
                      location: 'ai_disclosure_page',
                    });
                  }
                }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent-orange hover:bg-accent-orange/90 text-white font-bold rounded-lg transition-all duration-200 hover:scale-105"
              >
                <Calendar className="w-5 h-5" />
                Free Consultation
              </a>
              <a
                href="https://calendly.com/auralixai/strategy-call"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-primary-400 text-primary-400 hover:bg-primary-400 hover:text-black font-bold rounded-lg transition-all duration-200"
              >
                Get Started
                <ArrowRight className="w-5 h-5 inline-block ml-2" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

