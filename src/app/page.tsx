'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Users, TrendingUp, Clock, DollarSign, CheckCircle, ArrowRight, Calculator, Brain, Mic, Zap, Globe, Shield, Activity } from 'lucide-react';
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
        'Custom reporting dashboards'
      ],
      color: 'teal' as const
    }
  ];

  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <Hero
        title="Auralix AI Voice Agent: Built for real business calls"
        subtitle="Enterprise-grade voice AI that handles phone calls, appointments, and customer service 24/7. Built for dental practices, restaurants, hotel chains, and service businesses."
        primaryCta={{ text: "Get Started", href: "/contact" }}
        secondaryCta={{ text: "Hear Live Demo", href: "/solutions" }}
        showScrollCue={true}
      />

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
              Every missed call is lost revenue. Service businesses across industries lose thousands monthly from unanswered phones during peak hours.
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
              <div className="text-4xl font-bold text-red-400 mb-2">40%+</div>
              <div className="text-white font-semibold mb-2">of calls go unanswered</div>
              <div className="text-neutral-400 text-sm">Industry average during peak hours</div>
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
              One powerful voice agent solution that handles appointments, inquiries, and customer service across industries.
              Never miss a call, booking, or customer interaction again.
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
            <a
              href="/solutions"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 hover:bg-primary-400 text-white font-bold rounded-lg transition-all duration-200 hover:scale-105"
            >
              Explore Voice Agent Capabilities
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Multi-Industry Case Study */}
      <section className="py-16 sm:py-20 px-4 bg-neutral-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-heading">
              Trusted Across Industries
            </h2>
            <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
              From dental practices to restaurant chains to hotels, businesses trust Auralix Voice Agent 
              to handle their customer calls professionally and reliably.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-r from-primary-500/20 to-blue-500/20 rounded-2xl p-8 border border-primary-500/30">
                <blockquote className="text-xl text-white italic mb-6">
                  "We never miss a call anymore. The voice agent handles everything so naturally — 
                  customers can't tell they're talking to AI. Our appointment bookings increased significantly, 
                  and our staff can focus on patient care."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">DR</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Dr. Robert Chen</div>
                    <div className="text-neutral-400 text-sm">Dental Practice Owner</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6"
            >
              <div className="bg-neutral-800 rounded-xl p-6 text-center">
                <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-green-400 mb-2">35%+</div>
                <div className="text-neutral-300 text-sm">Increase in Bookings</div>
              </div>
              <div className="bg-neutral-800 rounded-xl p-6 text-center">
                <Clock className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-blue-400 mb-2">50%+</div>
                <div className="text-neutral-300 text-sm">Reduction in Admin Time</div>
              </div>
              <div className="bg-neutral-800 rounded-xl p-6 text-center">
                <DollarSign className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
                <div className="text-neutral-300 text-sm">Uptime Guarantee</div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <a
              href="/case-studies"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 hover:bg-primary-400 text-white font-bold rounded-lg transition-all duration-200 hover:scale-105"
            >
              View Case Studies
              <ArrowRight className="w-5 h-5" />
            </a>
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
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: 'SOC 2 Ready',
                description: 'Enterprise-grade security and compliance',
                color: 'green'
              },
              {
                icon: CheckCircle,
                title: 'GDPR & HIPAA Compliant',
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
              Join businesses across industries that trust Auralix Voice Agent to handle their customer calls intelligently, professionally, and reliably 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-accent-orange hover:bg-accent-orange/90 text-white font-bold rounded-lg transition-all duration-200 hover:scale-105"
              >
                Get Started Today
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border-2 border-primary-400 text-primary-400 hover:bg-primary-400 hover:text-black font-bold rounded-lg transition-all duration-200"
              >
                Book Strategy Call
              </a>
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
