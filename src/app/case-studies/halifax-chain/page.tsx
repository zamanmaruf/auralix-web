'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, TrendingUp, Clock, DollarSign, MapPin, Users, CheckCircle, Phone, MessageSquare, Globe, Settings } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function HalifaxChainCaseStudy() {
  const challenges = [
    'Phone ringing constantly during peak hours',
    'Staff overwhelmed with call volume',
    'Missing reservations and takeout orders',
    'No system to track missed opportunities',
    'Customer complaints about busy signals'
  ];

  const solutions = [
    {
      icon: Phone,
      title: 'AI Receptionist',
      description: '24/7 voice AI that answers every call naturally',
      impact: '100% call answer rate'
    },
    {
      icon: MessageSquare,
      title: 'Multi-Platform Chatbot',
      description: 'Website, Instagram, and WhatsApp automation',
      impact: 'Capture leads 24/7'
    },
    {
      icon: Settings,
      title: 'Order Automation',
      description: 'Automated confirmations and follow-ups',
      impact: 'Reduce manual work by 60%'
    },
    {
      icon: Globe,
      title: 'AI-Powered Website',
      description: 'Modern site with built-in automation',
      impact: 'Professional online presence'
    }
  ];

  const results = [
    {
      metric: '40%',
      label: 'Increase in Bookings',
      description: 'More reservations captured during peak hours',
      icon: TrendingUp,
      color: 'green'
    },
    {
      metric: '60%',
      label: 'Reduction in Admin Time',
      description: 'Staff freed up to focus on service',
      icon: Clock,
      color: 'blue'
    },
    {
      metric: '25%',
      label: 'Increase in Revenue',
      description: 'Higher order volume and customer satisfaction',
      icon: DollarSign,
      color: 'purple'
    },
    {
      metric: '100%',
      label: 'Call Answer Rate',
      description: 'Never miss another call or order',
      icon: Phone,
      color: 'primary'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-900 text-white">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Link 
          href="/case-studies" 
          className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Case Studies
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 font-heading">
              Halifax Restaurant Chain Boosts Bookings by 40%
            </h1>
            <p className="text-xl text-neutral-300 mb-8 max-w-3xl mx-auto">
              How Halifax Seafood Co. transformed their operations with Auralix AI, 
              never missing another call and increasing revenue by 25%.
            </p>
            
            <div className="flex items-center justify-center gap-6 text-neutral-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Halifax, Nova Scotia</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>Multi-location Restaurant</span>
              </div>
            </div>
          </motion.div>

          {/* Restaurant Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-64 sm:h-80 rounded-2xl overflow-hidden mb-12"
          >
            <Image
              src="/dashboard.jpg"
              alt="Halifax Seafood Co. restaurant interior"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <h2 className="text-2xl font-bold font-heading">Halifax Seafood Co.</h2>
              <p className="text-neutral-200">Premium seafood restaurant in downtown Halifax</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results Overview */}
      <section className="py-16 px-4 bg-neutral-800/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4 font-heading">The Results</h2>
            <p className="text-lg text-neutral-300">Measurable improvements in just 3 months</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-neutral-800/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-neutral-700"
              >
                <result.icon className={`w-12 h-12 mx-auto mb-4 text-${result.color}-400`} />
                <div className="text-3xl font-bold text-white mb-2">{result.metric}</div>
                <div className="text-lg font-semibold text-neutral-300 mb-2">{result.label}</div>
                <div className="text-sm text-neutral-400">{result.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6 font-heading">The Challenge</h2>
              <p className="text-lg text-neutral-300 mb-6">
                Halifax Seafood Co. was struggling with overwhelming call volume during peak hours. 
                Their phone would ring constantly, but staff couldn't keep up, leading to missed 
                reservations and frustrated customers.
              </p>
              <div className="space-y-3">
                {challenges.map((challenge, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-neutral-300">{challenge}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-red-500/10 border border-red-500/30 rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold text-red-400 mb-4">Before Auralix AI</h3>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-400 mb-2">43%</div>
                  <div className="text-neutral-300">Calls went unanswered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-400 mb-2">$2,000</div>
                  <div className="text-neutral-300">Lost revenue per month</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-400 mb-2">15+</div>
                  <div className="text-neutral-300">Hours of admin work daily</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 px-4 bg-neutral-800/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4 font-heading">The Solution</h2>
            <p className="text-lg text-neutral-300">Auralix AI's comprehensive restaurant automation suite</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-neutral-800/80 backdrop-blur-sm rounded-2xl p-6 border border-neutral-700"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <solution.icon className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 font-heading">{solution.title}</h3>
                    <p className="text-neutral-300 mb-3">{solution.description}</p>
                    <div className="text-primary-400 font-semibold">{solution.impact}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Quote */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary-500/20 to-blue-500/20 rounded-2xl p-8 border border-primary-500/30"
          >
            <blockquote className="text-2xl text-white italic mb-6 text-center">
              "We never miss a call anymore — our bookings jumped 40%. The AI handles everything 
              so naturally, customers can't tell the difference. It's like having a perfect 
              receptionist who never takes a break."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">SM</span>
              </div>
              <div className="text-center">
                <div className="text-white font-semibold text-lg">Sarah Mitchell</div>
                <div className="text-neutral-400">Owner, Halifax Seafood Co.</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-16 px-4 bg-neutral-800/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4 font-heading">Implementation Timeline</h2>
            <p className="text-lg text-neutral-300">From setup to full results in just 3 months</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                week: 'Week 1-2',
                title: 'Setup & Training',
                description: 'AI system configured with restaurant-specific knowledge and menu items'
              },
              {
                week: 'Week 3-4',
                title: 'Testing & Optimization',
                description: 'Fine-tuning responses and handling edge cases with real customer calls'
              },
              {
                week: 'Week 5-12',
                title: 'Full Deployment',
                description: 'Complete automation across all channels with measurable results'
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-neutral-800/80 backdrop-blur-sm rounded-2xl p-6 border border-neutral-700"
              >
                <div className="text-primary-400 font-bold text-sm mb-2">{phase.week}</div>
                <h3 className="text-xl font-bold text-white mb-3 font-heading">{phase.title}</h3>
                <p className="text-neutral-300">{phase.description}</p>
              </motion.div>
            ))}
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
            className="bg-gradient-to-r from-accent-orange/20 to-primary-500/20 rounded-2xl p-8 border border-accent-orange/30"
          >
            <h2 className="text-3xl font-bold text-white mb-4 font-heading">
              Get the Same Results for Your Restaurant
            </h2>
            <p className="text-lg text-neutral-300 mb-8">
              Join Halifax Seafood Co. and hundreds of other restaurants using Auralix AI 
              to never miss another call or order.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/trial"
                className="px-8 py-4 bg-accent-orange hover:bg-accent-orange/90 text-white font-bold rounded-lg transition-all duration-200 hover:scale-105"
              >
                Start Free Trial
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border-2 border-primary-400 text-primary-400 hover:bg-primary-400 hover:text-black font-bold rounded-lg transition-all duration-200"
              >
                Book Strategy Call
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
