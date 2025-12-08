'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, MessageSquare, Calendar } from 'lucide-react';
import ContactForm from '../../components/ContactForm';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-900 text-white">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 font-heading"
          >
            Let's Automate Your Front Desk
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-neutral-300 mb-8 max-w-3xl mx-auto"
          >
            Ready to stop losing calls and opportunities? Get in touch and let's discuss how 
            Auralix AI can transform your business operations.
          </motion.p>
          
          {/* Primary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8"
          >
            <a
              href="#contact-form"
              className="bg-accent-orange hover:bg-accent-orange/90 text-white px-8 py-4 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-200 hover:scale-105 flex items-center justify-center gap-3 mx-auto max-w-md"
            >
              <MessageSquare className="w-6 h-6" />
              Get Started Today
            </a>
            <p className="text-primary-200 text-lg font-semibold mt-3">
              Fill out the form below and we'll contact you within 24 hours
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-neutral-800/80 backdrop-blur-sm rounded-2xl p-8 border border-neutral-700"
            >
              <h2 className="text-2xl font-bold text-white mb-6 font-heading">Send us a Message</h2>
              <ContactForm showCalendly={true} />
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-white mb-6 font-heading">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary-400" />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-lg">Email</div>
                      <div className="text-neutral-300">info@auralixai.ca</div>
                      <div className="text-sm text-neutral-400">We respond within 24 hours</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-lg">Phone</div>
                      <div className="text-neutral-300">+1 (782) 882-8635</div>
                      <div className="text-sm text-neutral-400">Mon-Fri: 9:00 AM - 6:00 PM AST</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-lg">Location</div>
                      <div className="text-neutral-300">1800 Argyle Street, Halifax, Nova Scotia, Canada</div>
                      <div className="text-sm text-neutral-400">Serving businesses coast-to-coast</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-lg">Business Hours</div>
                      <div className="text-neutral-300">Monday - Friday: 9:00 AM - 6:00 PM AST</div>
                      <div className="text-sm text-neutral-400">Weekend support for urgent matters</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary-500/10 to-blue-500/10 rounded-xl p-6 border border-primary-500/30">
                <h3 className="text-xl font-bold text-white mb-4 font-heading">Why Choose Auralix AI?</h3>
                <div className="space-y-3">
                  {[
                    'Built specifically for Canadian restaurants',
                    'Proven track record with local restaurants',
                    'Personalized service and ongoing support',
                    'Flexible solutions that scale with your restaurant',
                    'Made in Halifax, serving Canada coast-to-coast'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-neutral-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-accent-orange/10 to-primary-500/10 rounded-xl p-6 border border-accent-orange/30">
                <h3 className="text-xl font-bold text-white mb-4 font-heading">Ready to Get Started?</h3>
                <p className="text-neutral-300 mb-4">
                  Book a free strategy call to discuss your business's specific needs and see 
                  how Auralix AI can help you never miss another call.
                </p>
                <div className="space-y-3">
                  <a
                    href="/pricing"
                    className="block w-full px-6 py-3 bg-accent-orange hover:bg-accent-orange/90 text-white font-bold rounded-lg transition-all duration-200 text-center"
                  >
                    View Pricing
                  </a>
                  <a
                    href="https://calendly.com/auralix-ai/strategy-call"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full px-6 py-3 border-2 border-primary-400 text-primary-400 hover:bg-primary-400 hover:text-black font-bold rounded-lg transition-all duration-200 text-center flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    Book Strategy Call
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vapi Voice Assistant CTA */}
      <section className="py-16 px-4 bg-neutral-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 backdrop-blur-sm rounded-2xl p-8 border-2 border-cyan-500/30"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <Phone className="w-8 h-8 text-white animate-pulse" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white font-heading">Want to see how Auralix can answer calls?</h2>
                <p className="text-neutral-300">Try our live AI voice assistant</p>
              </div>
            </div>
            <p className="text-lg text-neutral-300 mb-6">
              Click the voice button in the bottom-right corner to have a real conversation with our AI agent 
              and see how it handles business inquiries naturally and professionally.
            </p>
            <button
              onClick={() => {
                if ((window as any).triggerVapiCall) {
                  (window as any).triggerVapiCall();
                } else {
                  window.dispatchEvent(new Event('trigger-vapi-call'));
                }
              }}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 cursor-pointer flex items-center justify-center gap-3 mx-auto"
            >
              <Phone className="w-5 h-5 animate-pulse group-hover:rotate-12 transition-transform" />
              Talk to Auralix AI Voice Agent
            </button>
            <div className="flex items-center justify-center gap-2 text-cyan-400 mt-4">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              <span className="text-sm">Voice AI is online and ready to help</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}