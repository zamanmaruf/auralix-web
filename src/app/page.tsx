'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageSquare, Globe, Settings, TrendingUp, Clock, DollarSign, CheckCircle, ArrowRight, Calculator } from 'lucide-react';
import Hero from '../components/Hero';
import FeatureCard from '../components/FeatureCard';
import CaseStudyCard from '../components/CaseStudyCard';
import RevenueCalculator from '../components/RevenueCalculator';

export default function HomePage() {
  const [showCalculator, setShowCalculator] = useState(false);

  const solutions = [
    {
      icon: Settings,
      title: 'AI Receptionist',
      description: 'Answers every call like a real host. Takes reservations, cancels orders, provides wait times, and routes calls instantly.',
      features: [
        'Human-like conversation',
        'Take reservations & orders',
        'Cancel or modify bookings',
        'Provide real-time wait times',
        'Intelligent call routing',
        '24/7 availability'
      ],
      color: 'primary' as const
    },
    {
      icon: MessageSquare,
      title: 'Website & Social Chatbot',
      description: 'Books tables, takes orders, and answers FAQs across your website, Instagram, and WhatsApp 24/7.',
      features: [
        'Table booking automation',
        'Order taking & confirmation',
        'FAQ automation',
        'Multi-platform support',
        'Instagram DM automation',
        'WhatsApp Business API'
      ],
      color: 'blue' as const
    },
    {
      icon: Settings,
      title: 'Order & Review Automation',
      description: 'Automatically confirm takeout orders, send follow-up texts, and collect 5-star reviews while you focus on guests.',
      features: [
        'Automated order confirmations',
        'Review request automation',
        'Follow-up text sequences',
        'Payment reminder workflows',
        'Customer satisfaction tracking',
        'Custom workflow builder'
      ],
      color: 'purple' as const
    },
    {
      icon: Globe,
      title: 'Restaurant Websites with AI Built-In',
      description: 'Modern designs with live chat, online ordering, and automated workflows from day one.',
      features: [
        'AI chatbot included',
        'Online ordering system',
        'Table booking automation',
        'Modern responsive design',
        'SEO optimized',
        'Analytics dashboard'
      ],
      color: 'teal' as const
    }
  ];

  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <Hero
        title="Never miss another restaurant call."
        subtitle="Auralix AI answers every call 24/7, books tables, and captures take-out orders — even during rush hour."
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
              Every missed call is lost revenue. See how much you're losing and how Auralix AI can help you recover it.
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
              <div className="text-4xl font-bold text-red-400 mb-2">43%</div>
              <div className="text-white font-semibold mb-2">of restaurant calls go unanswered</div>
              <div className="text-neutral-400 text-sm">Industry average during peak hours</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-orange-500/10 border border-orange-500/30 rounded-2xl p-8 text-center"
            >
              <div className="text-4xl font-bold text-orange-400 mb-2">$2,000</div>
              <div className="text-white font-semibold mb-2">lost per month per location</div>
              <div className="text-neutral-400 text-sm">From missed calls and orders</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-primary-500/10 border border-primary-500/30 rounded-2xl p-8 text-center"
            >
              <div className="text-4xl font-bold text-primary-400 mb-2">100%</div>
              <div className="text-white font-semibold mb-2">of calls answered by Auralix AI</div>
              <div className="text-neutral-400 text-sm">Never miss another order</div>
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

      {/* Solutions Preview */}
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
              AI Solutions That Run Your Front Desk Automatically
            </h2>
            <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
              Four powerful tools designed specifically for restaurants to never miss a call, order, or booking again.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution, index) => (
              <FeatureCard
                key={index}
                icon={solution.icon}
                title={solution.title}
                description={solution.description}
                features={solution.features}
                color={solution.color}
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
              See How It Works
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Case Study Snapshot */}
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
              Success Story: Halifax Restaurant Chain
            </h2>
            <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
              Before Auralix, their phones went unanswered during peak hours. After implementing our AI receptionist, 
              bookings increased 40%, admin workload dropped 60%, and monthly revenue climbed 25%.
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
                  "We never miss a call anymore — our bookings jumped 40%. The AI handles everything 
                  so naturally, customers can't tell the difference."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">SM</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Sarah Mitchell</div>
                    <div className="text-neutral-400 text-sm">Owner, Halifax Seafood Co.</div>
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
                <div className="text-3xl font-bold text-green-400 mb-2">40%</div>
                <div className="text-neutral-300 text-sm">Increase in Bookings</div>
              </div>
              <div className="bg-neutral-800 rounded-xl p-6 text-center">
                <Clock className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-blue-400 mb-2">60%</div>
                <div className="text-neutral-300 text-sm">Reduction in Admin Time</div>
              </div>
              <div className="bg-neutral-800 rounded-xl p-6 text-center">
                <DollarSign className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-purple-400 mb-2">25%</div>
                <div className="text-neutral-300 text-sm">Increase in Revenue</div>
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
              href="/case-studies/halifax-chain"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 hover:bg-primary-400 text-white font-bold rounded-lg transition-all duration-200 hover:scale-105"
            >
              Read Full Case Study
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Features / Compliance */}
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
              Enterprise-Grade Features
            </h2>
            <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
              Built for scale, security, and compliance — so you can focus on serving great food.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: CheckCircle,
                title: 'SOC 2 Ready',
                description: 'Enterprise-grade security and compliance',
                color: 'green'
              },
              {
                icon: CheckCircle,
                title: 'GDPR Compliant',
                description: 'Data protection and privacy compliance',
                color: 'blue'
              },
              {
                icon: CheckCircle,
                title: 'Multi-location Scaling',
                description: 'Manage multiple restaurants from one dashboard',
                color: 'purple'
              },
              {
                icon: CheckCircle,
                title: 'Real-time Analytics',
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
              Ready to Stop Losing Orders to Missed Calls?
            </h2>
            <p className="text-lg text-neutral-300 mb-8">
              Join hundreds of restaurants that have already automated their operations with Auralix AI.
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