'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';
import PricingTableSimple from '@/components/PricingTableSimple';
import SetupGuarantee from '@/components/SetupGuarantee';
import TrustBadges from '@/components/TrustBadges';
import DemoPlaceholder from '@/components/DemoPlaceholder';
import FAQAccordion from '@/components/FAQAccordion';

export default function OnePagerPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-heading">
              AI Receptionist for Restaurants
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-primary-400">
              Never Miss a Customer Call Again. Go Live in 48 Hours.
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Trusted by restaurants across Halifax, Toronto & Vancouver
            </p>
            <p className="text-lg text-gray-200 mb-12 max-w-3xl mx-auto">
              Auralix instantly answers missed calls, books tables or orders, and boosts your restaurant's revenue with intelligent voice and chat automation.
            </p>
            
            <div className="mb-12">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-6 rounded-2xl font-bold text-2xl flex items-center justify-center gap-3 mx-auto max-w-md shadow-2xl border-2 border-cyan-400/50">
                <Phone className="w-8 h-8 animate-pulse" />
                Talk to Auralix AI Voice Agent
              </div>
              <p className="text-lg text-primary-100 mt-4 max-w-2xl mx-auto">
                Click the voice button in the bottom-right to start a live conversation. Our AI agent can answer all your questions about Auralix.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="https://calendly.com/auralixai/strategy-call"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                Book Your Demo Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-700 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                Get Started — Go Live in 48 Hours
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-300">
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span>marufzaman@auralixai.ca</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>+1 9024414928</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingTableSimple />

      {/* Proof Points Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Proven Results for Canadian Restaurants
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real success stories from restaurants using Auralix AI
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8 border-2 border-primary-500"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Nova Scotia Restaurant Chain
                </h3>
                <p className="text-gray-600 mb-6">
                  "Auralix AI answers 80% of our calls so staff can focus on food and guests."
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">+40%</div>
                  <div className="text-sm text-gray-600">Bookings</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">-60%</div>
                  <div className="text-sm text-gray-600">Admin Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">+25%</div>
                  <div className="text-sm text-gray-600">Revenue</div>
                </div>
              </div>

              <div className="bg-primary-50 border border-primary-200 rounded-lg p-4">
                <p className="text-primary-800 font-semibold">
                  "We boosted bookings 40% in 48 hours with Auralix"
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Key Performance Indicator
                </h4>
                <div className="text-4xl font-bold text-primary-500 mb-2">43%</div>
                <p className="text-gray-600">
                  Average call recapture rate for restaurants using Auralix AI
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Customer Testimonial
                </h4>
                <blockquote className="text-gray-700 italic mb-4">
                  "Auralix saved us from losing customers during rush. We booked more tables and streamlined our staff workload."
                </blockquote>
                <cite className="text-sm text-gray-600">— Restaurant Owner, Halifax</cite>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Setup Timeline
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Day 1: System setup and configuration</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Day 2: Testing and staff training</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Day 3: Live monitoring and optimization</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <DemoPlaceholder />

      {/* Setup Guarantee Section */}
      <SetupGuarantee />

      {/* Trust Signals Section */}
      <TrustBadges />

      {/* FAQ Section */}
      <FAQAccordion />

      {/* CTA Section */}
      <section className="py-16 bg-primary-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Never Miss Another Customer Call?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of Canadian restaurants already using Auralix AI to boost their revenue and streamline operations.
            </p>
            
            <div className="mb-8">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-6 rounded-2xl font-bold text-2xl flex items-center justify-center gap-3 mx-auto max-w-md shadow-2xl border-2 border-cyan-400/50 mb-6">
                <Phone className="w-8 h-8 animate-pulse" />
                Talk to Auralix AI Voice Agent
              </div>
              <p className="text-xl text-primary-100 mb-6 max-w-2xl mx-auto">
                Click the voice button in the bottom-right to start a live conversation. Our AI agent can answer all your questions about Auralix.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="https://calendly.com/auralixai/strategy-call"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary-500 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                Book Your Demo Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="text-primary-100">
              <p className="mb-2">Questions? Contact us directly:</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a
                  href="mailto:marufzaman@auralixai.ca"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  marufzaman@auralixai.ca
                </a>
                <a
                  href="tel:+19024414928"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  +1 9024414928
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Auralix AI</h4>
              <p className="text-gray-300 mb-4">
                AI automation solutions for Canadian restaurants. Never miss another customer call.
              </p>
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="w-4 h-4" />
                <span>Halifax, Nova Scotia, Canada</span>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:marufzaman@auralixai.ca" className="hover:text-white transition-colors">
                    marufzaman@auralixai.ca
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+19024414928" className="hover:text-white transition-colors">
                    +1 9024414928
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <div className="space-y-2">
                <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors block">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-gray-300 hover:text-white transition-colors block">
                  Terms of Service
                </Link>
                <Link href="/security" className="text-gray-300 hover:text-white transition-colors block">
                  Security
                </Link>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Auralix AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}