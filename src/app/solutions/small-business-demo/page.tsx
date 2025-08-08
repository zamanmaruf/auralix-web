'use client';

import React, { useState, useEffect } from 'react';
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
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Trigger animations after component mounts
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const demos: DemoCard[] = [
    {
      id: 'barbertech',
      title: '💈 BarberTech Pro Platform',
      subtitle: 'AI-Powered Booking • Inventory Management • Customer Analytics',
      description: 'Complete barber shop management system with intelligent appointment scheduling, inventory tracking, customer relationship management, and automated marketing. Perfect for modern barbershops across Nova Scotia.',
      icon: '💈',
      color: 'from-orange-500 to-red-600',
      status: '✅ Live',
      href: '/solutions/small-business-demo/barbertech-pro'
    },
    {
      id: 'leads',
      title: 'Intelligent Lead Generation System',
      subtitle: 'Enterprise-grade visitor-to-lead conversion platform',
      description: 'Advanced AI-powered lead capture system with real-time qualification, instant follow-up automation, and intelligent lead scoring. Converts anonymous visitors into high-value prospects.',
      icon: '💬',
      color: 'from-blue-500 to-purple-600',
      status: '✅ Live',
      href: '/solutions/small-business-demo/lead-capture'
    },
    {
      id: 'reviews',
      title: 'Reputation Management Suite',
      subtitle: 'Automated review optimization with sentiment analysis',
      description: 'Enterprise reputation management platform with intelligent sentiment routing, automated review solicitation, and real-time reputation monitoring. Protect and amplify your brand presence.',
      icon: '⭐',
      color: 'from-yellow-500 to-orange-600',
      status: '✅ Live',
      href: '/solutions/small-business-demo/reviews-autopilot'
    },
    {
      id: 'revolution',
      title: 'Quantum AI Innovation Platform',
      subtitle: 'Next-generation artificial intelligence ecosystem',
      description: 'Revolutionary quantum AI platform featuring advanced neural networks, holographic interfaces, emotional intelligence, and predictive analytics. The most sophisticated AI demonstration ever created.',
      icon: '🧠',
      color: 'from-purple-500 to-cyan-600',
      status: '✅ Live',
      href: '/solutions/small-business-demo/ai-revolution'
    },
    {
      id: 'ordering',
      title: 'Cognitive Menu Intelligence',
      subtitle: 'AI-powered ordering optimization system',
      description: 'Advanced cognitive menu system with intelligent upselling, preference learning, and real-time optimization. Maximize order value through sophisticated AI-driven recommendations.',
      icon: '🍔',
      color: 'from-red-500 to-pink-600',
      status: '✅ Live',
      href: '/solutions/small-business-demo/menu-ordering'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      {isClient && (
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
      )}
      
      {/* Floating Particles */}
      {isClient && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
              style={{
                left: `${(i * 5) % 100}%`,
                top: `${(i * 7) % 100}%`,
                animationDelay: `${(i * 0.2)}s`,
                animationDuration: `${3 + (i % 2)}s`,
              }}
            ></div>
          ))}
        </div>
      )}

      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-blue-900/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="relative inline-block">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-25 animate-pulse"></div>
                <h1 className="relative text-4xl sm:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  🚀 Small Business AI Demo Hub
                </h1>
              </div>
            </div>
            
            <div className={`transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <p className="text-xl sm:text-2xl text-purple-200 mb-8 max-w-4xl mx-auto">
                Explore 4 enterprise-grade AI solutions including the revolutionary AI demo
              </p>
            </div>
            
            <div className={`transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="flex flex-wrap justify-center gap-4 text-sm sm:text-base">
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <span className="font-semibold animate-pulse">⚡</span> Instant Setup
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <span className="font-semibold animate-pulse">💰</span> ROI Guaranteed
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <span className="font-semibold animate-pulse">🎯</span> Business Focused
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {demos.map((demo, index) => (
            <Link
              key={demo.id}
              href={demo.href}
              className="group block"
              onMouseEnter={() => setHoveredCard(demo.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div 
                className={`relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: `${index * 200}ms`,
                  transform: hoveredCard === demo.id ? 'scale(1.05) translateY(-8px)' : 'scale(1) translateY(0)',
                }}
              >
                {/* Animated Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-r ${demo.color} opacity-0 transition-opacity duration-500 ${
                  hoveredCard === demo.id ? 'opacity-10' : 'opacity-0'
                }`}></div>
                
                {/* Floating Particles on Hover */}
                {hoveredCard === demo.id && isClient && (
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
                        style={{
                          left: `${20 + (i * 10)}%`,
                          top: `${20 + (i * 8)}%`,
                          animationDelay: `${i * 0.1}s`,
                          animationDuration: '2s',
                        }}
                      ></div>
                    ))}
                  </div>
                )}
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`text-4xl sm:text-5xl transition-all duration-300 ${
                      hoveredCard === demo.id ? 'scale-110 rotate-3' : 'scale-100 rotate-0'
                    }`}>
                      {demo.icon}
                    </div>
                    <div className={`text-xs font-semibold text-green-400 bg-green-400/10 px-2 py-1 rounded-full transition-all duration-300 ${
                      hoveredCard === demo.id ? 'scale-110 bg-green-400/20' : 'scale-100'
                    }`}>
                      {demo.status}
                    </div>
                  </div>
                  
                  <h3 className={`text-xl sm:text-2xl font-bold text-white mb-2 transition-all duration-300 ${
                    hoveredCard === demo.id ? 'text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text' : 'text-white'
                  }`}>
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
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${demo.color} transition-all duration-300 ${
                        hoveredCard === demo.id ? 'scale-150' : 'scale-100'
                      }`}></div>
                      <span className="text-xs text-gray-400">Click to explore</span>
                    </div>
                    <div className={`text-purple-300 transition-all duration-300 ${
                      hoveredCard === demo.id ? 'text-white translate-x-2' : 'text-purple-300 translate-x-0'
                    }`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className={`relative bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-sm border border-purple-400/20 rounded-2xl p-8 text-center overflow-hidden transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 animate-pulse">
              Ready to Transform Your Business?
            </h3>
            <p className="text-purple-200 mb-6 max-w-2xl mx-auto">
              Each demo showcases real AI solutions that can be implemented in days, not months. 
              See the future of small business automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-bold text-lg hover:from-purple-500 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center gap-3">
                  <span className="animate-bounce">🚀</span>
                  Get Started Today
                </div>
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
    </div>
  );
} 