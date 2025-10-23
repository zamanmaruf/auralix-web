'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, MessageSquare, ShoppingCart, Globe, 
  ArrowRight, CheckCircle, Play, Pause, 
  Clock, Users, TrendingUp, Shield,
  Star, Calendar, DollarSign, Headphones
} from 'lucide-react';
import Link from 'next/link';

export default function SolutionsPage() {
  const [activeDemo, setActiveDemo] = useState('receptionist');
  const [isPlaying, setIsPlaying] = useState(false);

  const solutions = [
    {
      id: 'receptionist',
      title: 'AI Receptionist',
      subtitle: 'Never miss another call',
      description: '24/7 voice AI that answers calls like a real host, takes reservations, cancels orders, and provides wait times.',
      icon: Phone,
      color: 'primary',
      features: [
        'Answers calls instantly, 24/7',
        'Takes reservations and cancellations',
        'Provides wait times and menu info',
        'Routes calls to appropriate staff',
        'Speaks naturally in multiple languages'
      ],
      demo: {
        title: 'Live Call Simulation',
        transcript: [
          { speaker: 'AI', message: 'Thank you for calling Halifax Seafood Co. This is Auralix AI. How can I help you today?' },
          { speaker: 'Customer', message: 'Hi, I\'d like to make a reservation for tonight at 7 PM for 4 people.' },
          { speaker: 'AI', message: 'I\'d be happy to help with that! Let me check our availability for tonight at 7 PM for 4 people.' },
          { speaker: 'AI', message: 'Perfect! We have availability. Can I get your name and phone number for the reservation?' },
          { speaker: 'Customer', message: 'Sure, it\'s Sarah Johnson, +1 9024414928.' },
          { speaker: 'AI', message: 'Excellent! I\'ve confirmed your reservation for 4 people at 7 PM tonight under Sarah Johnson. We\'ll see you then!' }
        ]
      }
    },
    {
      id: 'chatbot',
      title: 'Website & Social Chatbot',
      subtitle: 'Multi-platform automation',
      description: 'Intelligent chatbot that books tables, takes orders, and answers FAQs across your website, Instagram, and WhatsApp.',
      icon: MessageSquare,
      color: 'blue',
      features: [
        'Works on website, Instagram, WhatsApp',
        'Books tables and takes orders',
        'Answers common questions instantly',
        'Collects customer information',
        'Integrates with your POS system'
      ],
      demo: {
        title: 'Live Chat Demo',
        transcript: [
          { speaker: 'Customer', message: 'Hi! Do you have any tables available for lunch today?' },
          { speaker: 'AI', message: 'Hello! Yes, we have several tables available for lunch today. What time works best for you?' },
          { speaker: 'Customer', message: 'Around 1 PM would be great.' },
          { speaker: 'AI', message: 'Perfect! I can book you a table for 1 PM. How many people will be joining you?' },
          { speaker: 'Customer', message: 'Just 2 people.' },
          { speaker: 'AI', message: 'Great! I\'ve reserved a table for 2 people at 1 PM today. Can I get your name and phone number?' }
        ]
      }
    },
    {
      id: 'orders',
      title: 'Order & Review Automation',
      subtitle: 'Streamline your operations',
      description: 'Automatically confirm takeout orders, send follow-up texts, and collect 5-star reviews while you focus on guests.',
      icon: ShoppingCart,
      color: 'green',
      features: [
        'Auto-confirms takeout orders',
        'Sends order status updates',
        'Collects customer reviews',
        'Manages delivery notifications',
        'Tracks order analytics'
      ],
      demo: {
        title: 'Order Flow Demo',
        transcript: [
          { speaker: 'System', message: 'New order received: 2x Fish & Chips, 1x Caesar Salad' },
          { speaker: 'AI', message: 'Order confirmed! Your food will be ready in 25-30 minutes. We\'ll text you when it\'s ready for pickup.' },
          { speaker: 'AI', message: 'Your order is ready for pickup! Please come to the front counter.' },
          { speaker: 'AI', message: 'How was your experience? We\'d love a quick review to help other customers!' }
        ]
      }
    },
    {
      id: 'website',
      title: 'Restaurant Websites with AI',
      subtitle: 'Modern design meets automation',
      description: 'Beautiful, responsive websites with built-in AI chat, online ordering, and automated workflows from day one.',
      icon: Globe,
      color: 'purple',
      features: [
        'Mobile-responsive design',
        'Built-in AI chat widget',
        'Online ordering system',
        'Table booking integration',
        'SEO optimized for restaurants'
      ],
      demo: {
        title: 'Website Features',
        transcript: [
          { speaker: 'System', message: 'Customer visits your website' },
          { speaker: 'AI', message: 'Welcome to Halifax Seafood Co! I can help you book a table, check our menu, or answer any questions.' },
          { speaker: 'Customer', message: 'What are your hours today?' },
          { speaker: 'AI', message: 'We\'re open 11 AM - 10 PM today. Would you like to make a reservation?' }
        ]
      }
    }
  ];

  const stats = [
    { icon: TrendingUp, value: '40%', label: 'Increase in Bookings' },
    { icon: Clock, value: '60%', label: 'Less Admin Time' },
    { icon: DollarSign, value: '25%', label: 'Revenue Growth' },
    { icon: Star, value: '4.8/5', label: 'Customer Rating' }
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
            Restaurant AI Solutions That Actually Work
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-neutral-300 mb-8 max-w-4xl mx-auto"
          >
            From AI receptionists to automated order management, our solutions help Canadian restaurants 
            never miss another call, increase bookings by 40%, and reduce admin work by 60%.
          </motion.p>
          
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

      {/* Solutions Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4 font-heading">Our AI Solutions</h2>
            <p className="text-lg text-neutral-300">Choose the right solution for your restaurant's needs</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-neutral-800/80 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                  activeDemo === solution.id ? 'border-primary-500' : 'border-neutral-700'
                }`}
                onClick={() => setActiveDemo(solution.id)}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-12 h-12 bg-${solution.color}-500 text-white rounded-lg flex items-center justify-center`}>
                    <solution.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 font-heading">{solution.title}</h3>
                    <p className="text-primary-400 font-semibold">{solution.subtitle}</p>
                  </div>
                </div>
                
                <p className="text-neutral-300 mb-6">{solution.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-neutral-300">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link href={`#${solution.id}`}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 bg-primary-500 hover:bg-primary-400 text-white font-bold rounded-lg transition-all duration-200"
                  >
                    Learn More
                  </motion.button>
                </Link>
              </motion.div>
            ))}
          </div>
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
            <p className="text-lg text-neutral-300">Experience how our AI solutions work in real restaurant scenarios</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Demo Controls */}
            <div>
              <div className="bg-neutral-800/80 backdrop-blur-sm rounded-2xl p-8 border border-neutral-700">
                <h3 className="text-xl font-bold text-white mb-6 font-heading">Try Different Solutions</h3>
                
                <div className="space-y-4">
                  {solutions.map((solution) => (
                    <motion.button
                      key={solution.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setActiveDemo(solution.id)}
                      className={`w-full p-4 rounded-lg text-left transition-all duration-200 ${
                        activeDemo === solution.id 
                          ? 'bg-primary-500 text-black' 
                          : 'bg-neutral-700 text-white hover:bg-neutral-600'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <solution.icon className="w-5 h-5" />
                        <div>
                          <div className="font-semibold">{solution.title}</div>
                          <div className="text-sm opacity-80">{solution.subtitle}</div>
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>

            {/* Demo Display */}
            <div>
              <div className="bg-neutral-800/80 backdrop-blur-sm rounded-2xl p-8 border border-neutral-700">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-white font-heading">
                    {solutions.find(s => s.id === activeDemo)?.demo.title}
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
                
                <div className="bg-neutral-900 rounded-lg p-6 space-y-4">
                  {solutions.find(s => s.id === activeDemo)?.demo.transcript.map((message, index) => (
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
                        {message.speaker === 'AI' ? 'Auralix AI' : 'Customer'}
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

      {/* Detailed Solution Sections */}
      {solutions.map((solution, index) => (
        <section key={solution.id} id={solution.id} className="py-16 px-4 bg-neutral-900">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="flex items-center justify-center mb-6">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${
                  solution.color === 'primary' ? 'from-primary-500 to-primary-600' :
                  solution.color === 'blue' ? 'from-blue-500 to-blue-600' :
                  solution.color === 'green' ? 'from-green-500 to-green-600' :
                  'from-purple-500 to-purple-600'
                } flex items-center justify-center`}>
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h2 className="text-4xl font-bold text-white mb-4 font-heading">{solution.title}</h2>
              <p className="text-xl text-neutral-300 max-w-3xl mx-auto">{solution.description}</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-white mb-6">Key Features</h3>
                <ul className="space-y-4">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary-400 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-neutral-800 rounded-2xl p-8"
              >
                <h3 className="text-xl font-bold text-white mb-4">{solution.demo?.title}</h3>
                {solution.demo?.transcript && (
                  <div className="space-y-4">
                    {solution.demo.transcript.map((line, lineIndex) => (
                      <div key={lineIndex} className={`p-4 rounded-lg ${
                        line.speaker === 'AI' ? 'bg-primary-500/20 border-l-4 border-primary-500' : 'bg-neutral-700'
                      }`}>
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`text-sm font-semibold ${
                            line.speaker === 'AI' ? 'text-primary-400' : 'text-neutral-400'
                          }`}>
                            {line.speaker}
                          </span>
                          <span className="text-neutral-500">•</span>
                          <span className="text-xs text-neutral-500">Just now</span>
                        </div>
                        <p className="text-neutral-200">{line.message}</p>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Link href="/contact" className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-400 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 hover:scale-105">
                Get Started with {solution.title}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      ))}

      {/* How It Works */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4 font-heading">How It Works</h2>
            <p className="text-lg text-neutral-300">Get started in 3 simple steps</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Sign Up',
                description: 'Start your free 14-day trial with credit card required',
                icon: Calendar,
                color: 'primary'
              },
              {
                step: '2',
                title: 'Setup',
                description: 'Our team helps you configure AI for your restaurant in 30 minutes',
                icon: Headphones,
                color: 'blue'
              },
              {
                step: '3',
                title: 'Go Live',
                description: 'Watch your AI handle calls, orders, and bookings automatically',
                icon: TrendingUp,
                color: 'green'
              }
            ].map((step, index) => (
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
            ))}
          </div>
        </div>
      </section>

      {/* Sticky CTA */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-primary-500 to-blue-500 p-4 z-50"
      >
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-bold text-black">Ready to automate your restaurant?</h3>
            <p className="text-sm text-black/80">Get started with Auralix AI today</p>
          </div>
          <div className="flex gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 bg-black text-white font-bold rounded-lg hover:bg-black/80 transition-all duration-200"
            >
              Get Started
            </Link>
            <Link
              href="/pricing"
              className="px-6 py-3 border-2 border-black text-black font-bold rounded-lg hover:bg-black hover:text-white transition-all duration-200"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}