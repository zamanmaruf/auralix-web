'use client';

import { motion } from 'framer-motion';
import { 
  Phone, ArrowRight, CheckCircle, Clock, Users, TrendingUp, Shield, Star, DollarSign,
  Calendar, Headphones, Mic, Brain, Zap, Globe,
  Activity, Settings, Database, Lock, MessageCircle
} from 'lucide-react';
import Link from 'next/link';

export default function SolutionsPage() {
  const capabilities = [
    {
      icon: Brain,
      title: 'Advanced Natural Language Understanding',
      description: 'Context-aware conversations that understand intent, sentiment, and nuance in customer requests.',
      features: [
        'Multi-turn dialogue management',
        'Context retention across conversation',
        'Intent classification with confidence scoring',
        'Entity extraction and validation'
      ]
    },
    {
      icon: Mic,
      title: 'Real-Time Speech Recognition',
      description: 'Industry-leading speech-to-text technology with low latency and high accuracy.',
      features: [
        'Real-time transcription',
        'Multi-language support',
        'Accent and dialect adaptation',
        'Background noise filtering'
      ]
    },
    {
      icon: Zap,
      title: 'Intelligent Call Routing',
      description: 'Automatically route calls to the right department or escalate to human agents when needed.',
      features: [
        'Smart escalation triggers',
        'Seamless human handoff',
        'Priority-based routing',
        'Queue management'
      ]
    },
    {
      icon: Database,
      title: 'CRM & System Integration',
      description: 'Connect with your existing tools and workflows seamlessly.',
      features: [
        'Appointment booking systems',
        'Customer databases',
        'POS and payment systems',
        'Email and SMS automation'
      ]
    },
    {
      icon: Activity,
      title: 'Real-Time Analytics',
      description: 'Monitor performance, track metrics, and gain insights into customer interactions.',
      features: [
        'Call volume and duration analytics',
        'Conversion rate tracking',
        'Customer satisfaction metrics',
        'Peak hour identification'
      ]
    },
    {
      icon: Lock,
      title: 'Enterprise-Grade Security',
      description: 'Built with security and compliance at the core.',
      features: [
        'End-to-end encryption',
        'SOC 2–aligned security controls',
        'Designed to support GDPR and HIPAA compliance',
        'Data privacy controls'
      ]
    }
  ];

  const useCases = [
    {
      industry: 'Dental Practices',
      icon: Users,
      color: 'blue',
      useCases: [
        'Appointment scheduling and rescheduling',
        'Patient inquiry handling',
        'Insurance verification assistance',
        'Emergency call routing',
        'Treatment reminders and follow-ups',
        'Office hours and location information'
      ]
    },
    {
      industry: 'Restaurants',
      icon: Phone,
      color: 'primary',
      useCases: [
        'Reservation management',
        'Order taking and confirmation',
        'Wait time information',
        'Menu inquiries and recommendations',
        'Special event bookings',
        'Cancellation handling'
      ]
    },
    {
      industry: 'Hotel Chains',
      icon: Globe,
      color: 'purple',
      useCases: [
        'Room booking and reservations',
        'Check-in and check-out inquiries',
        'Guest services and concierge',
        'Amenity information',
        'Cancellation and modification',
        'Loyalty program support'
      ]
    }
  ];

  const techStack = [
    {
      category: 'Natural Language Processing',
      technologies: ['Advanced NLP models', 'Intent classification', 'Entity extraction', 'Sentiment analysis']
    },
    {
      category: 'Speech Technology',
      technologies: ['Real-time speech recognition', 'Text-to-speech synthesis', 'Voice activity detection', 'Acoustic modeling']
    },
    {
      category: 'Infrastructure',
      technologies: ['Scalable cloud architecture', 'Low-latency processing', 'High availability', 'Auto-scaling']
    },
    {
      category: 'Integration',
      technologies: ['RESTful APIs', 'Webhook support', 'CRM connectors', 'Database integration']
    }
  ];

  const stats = [
    { icon: TrendingUp, value: '99.9%', label: 'Uptime' },
    { icon: Clock, value: '<2s', label: 'Response Time' },
    { icon: Star, value: '4.8/5', label: 'Customer Rating' },
    { icon: Globe, value: '15+', label: 'Languages' }
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
            Auralix AI Voice Agent: Built for real business calls
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-neutral-300 mb-8 max-w-4xl mx-auto"
          >
            Transform your phone calls with enterprise-grade voice AI that handles appointments, inquiries, 
            and customer service 24/7. Built for dental practices, restaurants, hotel chains, and service businesses.
          </motion.p>
          
          {/* Primary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8"
          >
            <button
              onClick={() => {
                if ((window as any).triggerVapiCall) {
                  (window as any).triggerVapiCall();
                } else {
                  window.dispatchEvent(new Event('trigger-vapi-call'));
                }
              }}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-bold text-xl shadow-2xl flex items-center justify-center gap-3 mx-auto max-w-md border-2 border-cyan-400/50 hover:scale-105 transition-all duration-200 cursor-pointer"
            >
              <Phone className="w-6 h-6 animate-pulse group-hover:rotate-12 transition-transform" />
              Talk to Auralix AI Voice Agent
            </button>
            <p className="text-primary-200 text-lg font-semibold mt-3 text-center">
              Click the voice button in the bottom-right to start a live conversation. Ask about our Enterprise-Grade Voice Agent, see how we can help your business, or get pricing information.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 text-sm text-neutral-400"
          >
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-2">
                <stat.icon className="w-4 h-4 text-primary-400" />
                <span>{stat.value} {stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Vapi Voice Assistant Promotion Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-neutral-800/50 to-neutral-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4 font-heading">Try Auralix AI Voice Agent</h2>
            <p className="text-lg text-neutral-300">Ask our personal AI agent anything about how Auralix can help YOUR business</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 backdrop-blur-sm rounded-2xl p-8 border-2 border-cyan-500/30"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Phone className="w-8 h-8 text-white animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center font-heading">Your Personal Auralix Agent</h3>
                <p className="text-neutral-300 text-center mb-6">
                  No matter what business you own, our Enterprise-Grade Voice Agent can explain how Auralix can help you specifically.
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Ask About Our Voice Agent</h4>
                    <p className="text-neutral-400 text-sm">"How can Auralix help my restaurant?" or "What can the voice agent do for hotels?"</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Get Pricing Information</h4>
                    <p className="text-neutral-400 text-sm">"What are your prices?" or "Do you have any current deals?"</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Understand Features</h4>
                    <p className="text-neutral-400 text-sm">"What features are included?" or "How does the AI work?"</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Setup & Support</h4>
                    <p className="text-neutral-400 text-sm">"How long does setup take?" or "What kind of support do you offer?"</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: CTA */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-neutral-800/80 backdrop-blur-sm rounded-2xl p-8 border border-neutral-700"
            >
              <div className="text-center">
                <div className="mb-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-6 mx-auto shadow-2xl animate-pulse">
                    <Phone className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 font-heading">Start a Live Conversation</h3>
                  <p className="text-lg text-neutral-300 mb-2">
                    Click the voice button in the bottom-right corner to start talking with our AI agent right now.
                  </p>
                  <p className="text-neutral-400 text-sm mb-8">
                    Natural conversation in your language. Ask anything about Auralix and how we can help your business.
                  </p>
                </div>

                <div className="bg-cyan-950/30 border border-cyan-500/30 rounded-xl p-6 mb-6">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  </div>
                  <p className="text-neutral-300 italic mb-2">"The AI agent answered all my questions in perfect detail. I felt like I was talking to a real expert!"</p>
                  <p className="text-cyan-400 text-sm font-semibold">- Restaurant Owner</p>
                </div>

                <div className="flex flex-col gap-3">
                  <p className="text-white font-bold text-lg">Ready to talk?</p>
                  <p className="text-cyan-400 text-sm">Look for the pulsing phone icon below ⬇️</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4 font-heading">Powerful Capabilities</h2>
            <p className="text-lg text-neutral-300">Advanced features that make our voice agent stand out</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => {
              const CapIcon = capability.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-neutral-800/80 backdrop-blur-sm rounded-2xl p-6 border border-neutral-700 hover:border-primary-500/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mb-4">
                    <CapIcon className="w-6 h-6 text-primary-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 font-heading">{capability.title}</h3>
                  <p className="text-neutral-300 text-sm mb-4">{capability.description}</p>
                  <ul className="space-y-2">
                    {capability.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-sm text-neutral-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industry-Specific Use Cases */}
      <section className="py-16 px-4 bg-neutral-800/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4 font-heading">Industry-Specific Applications</h2>
            <p className="text-lg text-neutral-300">Tailored Enterprise-Grade Voice Agent for your industry</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((industry, index) => {
              const IndustryIcon = industry.icon;
              const colorClasses = {
                blue: 'from-blue-500 to-blue-600',
                primary: 'from-primary-500 to-primary-600',
                purple: 'from-purple-500 to-purple-600'
              };
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-neutral-800/80 backdrop-blur-sm rounded-2xl p-8 border border-neutral-700"
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${colorClasses[industry.color as keyof typeof colorClasses]} flex items-center justify-center mb-6`}>
                    <IndustryIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 font-heading">{industry.industry}</h3>
                  <ul className="space-y-3">
                    {industry.useCases.map((useCase, useCaseIndex) => (
                      <li key={useCaseIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                        <span className="text-neutral-300">{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4 font-heading">Built on Advanced Technology</h2>
            <p className="text-lg text-neutral-300">Enterprise-grade infrastructure powering intelligent conversations</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {techStack.map((stack, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-neutral-800/80 backdrop-blur-sm rounded-2xl p-8 border border-neutral-700"
              >
                <h3 className="text-xl font-bold text-primary-400 mb-4 font-heading">{stack.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {stack.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-4 py-2 bg-primary-500/20 text-primary-300 rounded-lg text-sm border border-primary-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-neutral-800/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4 font-heading">Get Started in 3 Simple Steps</h2>
            <p className="text-lg text-neutral-300">Quick setup, powerful results</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Sign Up',
                description: 'Get started with professional setup included. No technical expertise required.',
                icon: Calendar,
                color: 'primary'
              },
              {
                step: '2',
                title: 'Configure',
                description: 'Our team helps you customize the voice agent for your business in under 30 minutes.',
                icon: Settings,
                color: 'blue'
              },
              {
                step: '3',
                title: 'Go Live',
                description: 'Your voice agent is ready to handle calls, appointments, and inquiries 24/7.',
                icon: TrendingUp,
                color: 'green'
              }
            ].map((step, index) => {
              const StepIcon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className={`w-16 h-16 bg-${step.color}-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4`}>
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 font-heading">{step.title}</h3>
                  <p className="text-neutral-300">{step.description}</p>
                </motion.div>
              );
            })}
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
            <h2 className="text-3xl font-bold text-white mb-6 font-heading">Ready to Transform Your Phone Calls?</h2>
            <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto">
              Join businesses across industries that trust Auralix AI to handle their customer calls intelligently, 
              professionally, and reliably 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 hover:bg-primary-400 text-white font-bold rounded-lg transition-all duration-200 hover:scale-105"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/pricing"
                className="px-8 py-4 border-2 border-primary-400 text-primary-400 hover:bg-primary-400 hover:text-black font-bold rounded-lg transition-all duration-200"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
