'use client';

import React from 'react';
import Link from 'next/link';

interface DemoCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  color: string;
  status: string;
  href: string;
}

export default function SmallBusinessDemoHub() {
  const demos: DemoCard[] = [
    {
      id: 'leads',
      title: 'AI Lead Capture',
      subtitle: 'Turn visitors into booked leads in 60 seconds',
      description: 'Automated chatbot that captures leads 24/7 with instant SMS/email follow-up. Converts anonymous visitors into qualified leads.',
      icon: '💬',
      color: 'from-blue-500 to-purple-600',
      status: '✅ Live',
      href: '/solutions/small-business-demo/lead-capture'
    },
    {
      id: 'reviews',
      title: 'Google Reviews Autopilot',
      subtitle: 'Add 30-100 reviews with smart sentiment routing',
      description: 'Automatically request reviews from happy customers while routing unhappy ones to private feedback. Protect and amplify your reputation.',
      icon: '⭐',
      color: 'from-yellow-500 to-orange-600',
      status: '✅ Live',
      href: '/solutions/small-business-demo/reviews-autopilot'
    },
    {
      id: 'revolution',
      title: '🚀 AI Revolution',
      subtitle: 'Experience the future of quantum AI technology',
      description: 'Revolutionary AI demo featuring voice commands, emotional AI, holographic interfaces, quantum predictions, and neural network visualization. The most advanced AI demo ever created.',
      icon: '🧠',
      color: 'from-purple-500 to-cyan-600',
      status: '✅ Live',
      href: '/solutions/small-business-demo/ai-revolution'
    },
    {
      id: 'ordering',
      title: 'AI Menu & Ordering',
      subtitle: 'Smart suggestions and upsell automation',
      description: 'AI-powered menu assistant that suggests items based on preferences and dietary needs. Increase order value with intelligent upselling.',
      icon: '🍔',
      color: 'from-red-500 to-pink-600',
      status: '✅ Live',
      href: '/solutions/small-business-demo/menu-ordering'
    },
    {
      id: 'faq',
      title: 'AI FAQ & Customer Service',
      subtitle: 'Cut repetitive calls with smart escalation',
      description: 'Answer common questions instantly while capturing leads when answers don\'t suffice. Reduce support calls by 70%.',
      icon: '❓',
      color: 'from-indigo-500 to-purple-600',
      status: '✅ Live',
      href: '/solutions/small-business-demo/faq-customer-service'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-blue-900/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
              🚀 Small Business AI Demo Hub
            </h1>
            <p className="text-xl sm:text-2xl text-purple-200 mb-8 max-w-4xl mx-auto">
              Explore 5 enterprise-grade AI solutions including the revolutionary AI demo
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm sm:text-base">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white">
                <span className="font-semibold">⚡</span> Instant Setup
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white">
                <span className="font-semibold">💰</span> ROI Guaranteed
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white">
                <span className="font-semibold">🎯</span> Business Focused
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {demos.map((demo) => (
            <Link
              key={demo.id}
              href={demo.href}
              className="group block"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl sm:text-5xl">{demo.icon}</div>
                  <div className="text-xs font-semibold text-green-400 bg-green-400/10 px-2 py-1 rounded-full">
                    {demo.status}
                  </div>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {demo.title}
                </h3>
                
                <p className="text-purple-200 font-semibold mb-3 text-sm sm:text-base">
                  {demo.subtitle}
                </p>
                
                <p className="text-gray-300 text-sm sm:text-base mb-6 leading-relaxed">
                  {demo.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${demo.color}`}></div>
                    <span className="text-xs text-gray-400">Click to explore</span>
                  </div>
                  <div className="text-purple-300 group-hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-sm border border-purple-400/20 rounded-2xl p-8 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-purple-200 mb-6 max-w-2xl mx-auto">
            Each demo showcases real AI solutions that can be implemented in days, not months. 
            See the future of small business automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-bold text-lg hover:from-purple-500 hover:to-blue-500 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              🚀 Get Started Today
            </Link>
            <Link
              href="/solutions"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-200 border border-white/20"
            >
              📋 View All Solutions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 