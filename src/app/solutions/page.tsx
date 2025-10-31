'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, ArrowRight, CheckCircle, Play, Pause, 
  Clock, Users, TrendingUp, Shield, Star, DollarSign,
  Calendar, Headphones, Mic, Brain, Zap, Globe,
  Activity, Settings, Database, Lock, MessageCircle
} from 'lucide-react';
import Link from 'next/link';

export default function SolutionsPage() {
  const [activeDemo, setActiveDemo] = useState('dental');
  const [isPlaying, setIsPlaying] = useState(false);

  const industryDemos = [
    {
      id: 'dental',
      title: 'Dental Practice',
      icon: Users,
      color: 'blue',
      transcript: [
        { speaker: 'AI', message: 'Thank you for calling Bright Smile Dental. This is Auralix AI. How can I assist you today?' },
        { speaker: 'Customer', message: 'Hi, I need to schedule a cleaning appointment.' },
        { speaker: 'AI', message: 'I\'d be happy to help you schedule a cleaning appointment. Let me check our availability. What day works best for you?' },
        { speaker: 'Customer', message: 'Next Tuesday morning would be perfect.' },
        { speaker: 'AI', message: 'Great! I have availability at 10:00 AM or 11:30 AM on Tuesday. Which time do you prefer?' },
        { speaker: 'Customer', message: '10 AM works for me.' },
        { speaker: 'AI', message: 'Perfect! I\'ve scheduled your cleaning appointment for Tuesday at 10:00 AM. Can I get your name and phone number for the confirmation?' },
        { speaker: 'Customer', message: 'Sure, it\'s John Smith, 555-1234.' },
        { speaker: 'AI', message: 'Excellent! Your appointment is confirmed for Tuesday at 10:00 AM, John. We\'ll send you a confirmation text. Is there anything else I can help you with?' }
      ]
    },
    {
      id: 'restaurant',
      title: 'Restaurant',
      icon: Phone,
      color: 'primary',
      transcript: [
        { speaker: 'AI', message: 'Thank you for calling The Harbor Restaurant. This is Auralix AI. How can I help you today?' },
        { speaker: 'Customer', message: 'I\'d like to make a reservation for tonight at 7 PM for 4 people.' },
        { speaker: 'AI', message: 'I\'d be happy to help with that! Let me check our availability for tonight at 7 PM for 4 people.' },
        { speaker: 'AI', message: 'Perfect! We have a table available. Can I get your name and phone number for the reservation?' },
        { speaker: 'Customer', message: 'Sure, it\'s Sarah Johnson, +1 555-9876.' },
        { speaker: 'AI', message: 'Excellent! I\'ve confirmed your reservation for 4 people at 7 PM tonight under Sarah Johnson. We\'ll see you then!' }
      ]
    },
    {
      id: 'hotel',
      title: 'Hotel Chain',
      icon: Globe,
      color: 'purple',
      transcript: [
        { speaker: 'AI', message: 'Thank you for calling Grand Hotel. This is Auralix AI. How may I assist you today?' },
        { speaker: 'Customer', message: 'I need to book a room for this weekend.' },
        { speaker: 'AI', message: 'I\'d be happy to help you book a room. What dates are you looking for?' },
        { speaker: 'Customer', message: 'Friday and Saturday night, checking out Sunday.' },
        { speaker: 'AI', message: 'Perfect! I have several room options available. Would you prefer a standard room, deluxe, or suite?' },
        { speaker: 'Customer', message: 'Deluxe sounds good.' },
        { speaker: 'AI', message: 'Great choice! I have a deluxe room available for Friday and Saturday nights at $199 per night. Can I get your name and contact information to complete the booking?' }
      ]
    }
  ];

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
        'SOC 2 Type II compliance',
        'GDPR and HIPAA considerations',
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
            <a
              href="tel:+14385333214"
              className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-200 hover:scale-105 flex items-center justify-center gap-3 mx-auto max-w-md"
            >
              <Phone className="w-6 h-6" />
              Call Live Demo: +1 438 533 3214
            </a>
            <p className="text-primary-200 text-lg font-semibold mt-3">
              Experience our voice agent in action — call now and test it yourself
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

      {/* Interactive Demo Section */}
      <section className="py-16 px-4 bg-neutral-800/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4 font-heading">See It In Action</h2>
            <p className="text-lg text-neutral-300">Experience how our voice agent works across different industries</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Demo Controls */}
            <div>
              <div className="bg-neutral-800/80 backdrop-blur-sm rounded-2xl p-8 border border-neutral-700">
                <h3 className="text-xl font-bold text-white mb-6 font-heading">Try Different Industries</h3>
                
                <div className="space-y-4">
                  {industryDemos.map((demo) => {
                    const DemoIcon = demo.icon;
                    return (
                      <motion.button
                        key={demo.id}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setActiveDemo(demo.id)}
                        className={`w-full p-4 rounded-lg text-left transition-all duration-200 ${
                          activeDemo === demo.id 
                            ? 'bg-primary-500 text-black' 
                            : 'bg-neutral-700 text-white hover:bg-neutral-600'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <DemoIcon className="w-5 h-5" />
                          <div>
                            <div className="font-semibold">{demo.title}</div>
                            <div className="text-sm opacity-80">Voice Agent Demo</div>
                          </div>
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Demo Display */}
            <div>
              <div className="bg-neutral-800/80 backdrop-blur-sm rounded-2xl p-8 border border-neutral-700">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-white font-heading">
                    {industryDemos.find(d => d.id === activeDemo)?.title} Call Demo
                  </h3>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-10 h-10 bg-primary-500 text-black rounded-full flex items-center justify-center"
                  >
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                  </motion.button>
                </div>
                
                <div className="bg-neutral-900 rounded-lg p-6 space-y-4 max-h-96 overflow-y-auto">
                  {industryDemos.find(d => d.id === activeDemo)?.transcript.map((message, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.2 }}
                      className={`p-3 rounded-lg ${
                        message.speaker === 'AI' 
                          ? 'bg-primary-500/20 text-primary-300 ml-8' 
                          : 'bg-neutral-700 text-white mr-8'
                      }`}
                    >
                      <div className="text-xs font-semibold mb-1 uppercase">
                        {message.speaker === 'AI' ? 'Auralix Voice Agent' : 'Customer'}
                      </div>
                      <div>{message.message}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
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
            <p className="text-lg text-neutral-300">Tailored voice agent solutions for your industry</p>
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
