'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Phone, Users, TrendingUp, Clock, DollarSign, CheckCircle, ArrowRight, Calculator, Brain, Mic, Zap, Globe, Shield, Activity, Star } from 'lucide-react';
import Hero from '../components/Hero';
import FeatureCard from '../components/FeatureCard';
import RevenueCalculator from '../components/RevenueCalculator';

export default function HomePage() {
  const [showCalculator, setShowCalculator] = useState(false);

  const voiceAgentFeatures = [
    {
      icon: Brain,
      title: 'Advanced Natural Language Processing',
      description: 'Context-aware conversations that understand intent, sentiment, and nuance in every customer interaction.',
      features: [
        'Multi-turn dialogue management',
        'Context retention across conversations',
        'Intent classification with confidence scoring',
        'Entity extraction and validation',
        'Multi-language support'
      ],
      color: 'primary' as const
    },
    {
      icon: Mic,
      title: 'Real-Time Speech Recognition',
      description: 'Industry-leading speech-to-text technology with low latency and high accuracy for natural conversations.',
      features: [
        'Real-time transcription',
        'Accent and dialect adaptation',
        'Background noise filtering',
        'Voice activity detection',
        '15+ languages supported'
      ],
      color: 'blue' as const
    },
    {
      icon: Zap,
      title: 'Intelligent Call Routing',
      description: 'Automatically route calls to the right department or escalate to human agents when needed seamlessly.',
      features: [
        'Smart escalation triggers',
        'Seamless human handoff',
        'Priority-based routing',
        'Queue management',
        '24/7 availability'
      ],
      color: 'purple' as const
    },
    {
      icon: Activity,
      title: 'Real-Time Analytics & Integration',
      description: 'Monitor performance, track metrics, and integrate with your existing CRM and business systems.',
      features: [
        'Call volume and duration analytics',
        'Conversion rate tracking',
        'CRM and system integration',
        'Customer satisfaction metrics',
        'Custom reporting dashboards',
        'Full call transcripts and interaction logs for audit and quality review'
      ],
      color: 'teal' as const
    }
  ];

  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <Hero
        title="Never Miss Another Service Call"
        subtitle="AI Receptionist for HVAC, Plumbing & Electrical. Answers calls 24/7, books jobs, and captures every lead — capture more leads from missed calls."
        primaryCta={{ text: "Free Consultation", href: "https://calendly.com/auralixai/strategy-call" }}
        showScrollCue={true}
      />

      {/* Customer Testimonials Section */}
      <section id="main-content" className="py-16 sm:py-20 px-4 bg-gradient-to-b from-neutral-900 to-neutral-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-heading">
              Trusted by Business Owners Across Canada
            </h2>
            <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
              See how Auralix AI is helping businesses never miss a call and increase revenue
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-neutral-800/80 backdrop-blur-sm rounded-2xl p-8 border border-neutral-700 hover:border-primary-500/50 transition-all duration-300"
            >
              <div className="mb-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-neutral-300 text-lg italic mb-6">
                  &quot;We&apos;re capturing significantly more service calls. Auralix AI handles our phone calls so naturally that customers can&apos;t tell they&apos;re talking to AI. It&apos;s a no-brainer for multi-location HVAC businesses.&quot;
                </blockquote>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">MH</span>
                </div>
                <div>
                  <div className="text-white font-semibold text-lg">Michael Hauke</div>
                  <div className="text-neutral-400 text-sm">Multi-Location Operator</div>
                </div>
              </div>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-neutral-800/80 backdrop-blur-sm rounded-2xl p-8 border border-neutral-700 hover:border-primary-500/50 transition-all duration-300"
            >
              <div className="mb-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-neutral-300 text-lg italic mb-6">
                  &quot;I can focus on service calls because Auralix AI manages the phones. The voice agent handles everything so naturally — customers can&apos;t tell they&apos;re talking to AI. Game changer for our operations.&quot;
                </blockquote>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">CA</span>
                </div>
                <div>
                  <div className="text-white font-semibold text-lg">Costa Alexandrou</div>
                  <div className="text-neutral-400 text-sm">Business Owner</div>
                </div>
              </div>
            </motion.div>

            {/* Testimonial 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-neutral-800/80 backdrop-blur-sm rounded-2xl p-8 border border-neutral-700 hover:border-primary-500/50 transition-all duration-300"
            >
              <div className="mb-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-neutral-300 text-lg italic mb-6">
                  &quot;Without Auralix, we would be losing substantial revenue annually in missed service calls. The voice agent handles everything so naturally that customers can&apos;t tell they&apos;re talking to AI. It&apos;s essential for our business.&quot;
                </blockquote>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">D</span>
                </div>
                <div>
                  <div className="text-white font-semibold text-lg">Dru</div>
                  <div className="text-neutral-400 text-sm">Business Owner</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pain → Solution Strip */}
      <section className="py-16 sm:py-20 px-4 bg-gradient-to-b from-neutral-900 to-neutral-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 font-heading">
              The Hidden Cost of Missed Calls
            </h2>
            <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
              Every missed call is lost revenue. Home services businesses lose thousands monthly from unanswered phones during peak hours.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-red-500/10 border border-red-500/30 rounded-2xl p-8 text-center"
            >
              <div className="text-4xl font-bold text-red-400 mb-2">27%</div>
              <div className="text-white font-semibold mb-2">of calls go unanswered</div>
              <div className="text-neutral-400 text-sm">
                Home services average (
                <a 
                  href="https://www.invoca.com/blog/missed-calls-cost-home-services-businesses" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-400 hover:text-primary-300 underline"
                >
                  Invoca
                </a>
                )
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-orange-500/10 border border-orange-500/30 rounded-2xl p-8 text-center"
            >
              <div className="text-4xl font-bold text-orange-400 mb-2">$2K+</div>
              <div className="text-white font-semibold mb-2">lost per month per location</div>
              <div className="text-neutral-400 text-sm">From missed calls and appointments</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-primary-500/10 border border-primary-500/30 rounded-2xl p-8 text-center"
            >
              <div className="text-4xl font-bold text-primary-400 mb-2">100%</div>
              <div className="text-white font-semibold mb-2">of calls answered by Auralix Voice Agent</div>
              <div className="text-neutral-400 text-sm">Never miss another call</div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <button
              onClick={() => setShowCalculator(true)}
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent-orange hover:bg-accent-orange/90 text-white font-bold rounded-lg transition-all duration-200 hover:scale-105"
            >
              <Calculator className="w-5 h-5" />
              Calculate Your Lost Revenue
            </button>
          </motion.div>
        </div>
      </section>

      {/* Voice Agent Showcase */}
      <section className="py-16 sm:py-20 px-4 bg-gradient-to-b from-neutral-800 to-neutral-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-heading">
              The Voice Agent That Transforms Your Phone Calls
            </h2>
            <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
              One powerful voice agent solution built specifically for home services businesses. 
              Handles appointments, inquiries, and customer service for HVAC, plumbing, and electrical contractors — never miss a call, booking, or customer interaction again.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {voiceAgentFeatures.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                features={feature.features}
                color={feature.color}
                delay={index * 0.1}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 hover:bg-primary-400 text-white font-bold rounded-lg transition-all duration-200 hover:scale-105"
            >
              Explore Voice Agent Capabilities
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Enterprise Features */}
      <section className="py-16 sm:py-20 px-4 bg-gradient-to-b from-neutral-900 to-neutral-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-heading">
              Enterprise-Grade Voice Agent Features
            </h2>
            <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
              Built for scale, security, and reliability — so you can focus on your business while we handle every call.
            </p>
            <p className="text-base text-neutral-400 max-w-3xl mx-auto mt-4">
              API-first architecture that securely integrates with banking, booking, CRM and back-office systems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: 'SOC 2–aligned security controls',
                description: 'Enterprise-grade security and compliance',
                color: 'green'
              },
              {
                icon: CheckCircle,
                title: 'PIPEDA-first privacy (Canada) + GDPR-informed practices',
                description: 'Data protection and privacy compliance',
                color: 'blue'
              },
              {
                icon: Globe,
                title: 'Multi-Location Scaling',
                description: 'Manage multiple locations from one dashboard',
                color: 'purple'
              },
              {
                icon: Activity,
                title: 'Real-Time Analytics',
                description: '24/7 monitoring and performance insights',
                color: 'primary'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-neutral-800/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-neutral-700 hover:border-primary-500/50 transition-all duration-300"
              >
                <feature.icon className={`w-12 h-12 mx-auto mb-4 text-${feature.color}-400`} />
                <h3 className="text-xl font-bold text-white mb-2 font-heading">{feature.title}</h3>
                <p className="text-neutral-300 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/security"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary-400 text-primary-400 hover:bg-primary-400 hover:text-black font-bold rounded-lg transition-all duration-200"
            >
              View Security & Compliance
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Strip */}
      <section className="py-16 sm:py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 font-heading">
              Ready to Transform Your Phone Calls?
            </h2>
            <p className="text-lg text-neutral-300 mb-8">
              Join home services businesses that trust Auralix Voice Agent to handle their customer calls intelligently, professionally, and reliably 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/auralixai/strategy-call"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-accent-orange hover:bg-accent-orange/90 text-white font-bold rounded-lg transition-all duration-200 hover:scale-105"
              >
                Book Strategy Call
              </a>
              <button
                onClick={() => {
                  if ((window as any).triggerVapiCall) {
                    (window as any).triggerVapiCall();
                  } else {
                    window.dispatchEvent(new Event('trigger-vapi-call'));
                  }
                }}
                className="px-8 py-4 bg-primary-500 hover:bg-primary-400 text-white font-bold rounded-lg transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call the Demo Line Now
              </button>
            </div>
            <p className="text-sm text-neutral-400 mt-4">
              Professional setup included. No contracts. Our team will contact you within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Revenue Calculator Modal */}
      <RevenueCalculator isOpen={showCalculator} onClose={() => setShowCalculator(false)} />
    </div>
  );
}
