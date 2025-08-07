'use client';

import React, { useState, useEffect } from 'react';

export default function MenuOrderingDemo() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const revolutionaryComponents = [
    {
      id: 'workflow-automation',
      title: 'Workflow Automation Demo',
      description: 'Step-by-step demonstration of how it all works',
      icon: '🔄',
      gradient: 'from-emerald-500 to-teal-600',
      hoverGradient: 'from-emerald-600 to-teal-700',
      shadow: 'shadow-emerald-500/25',
      link: '/solutions/small-business-demo/workflow-automation',
      features: [
        '11-Step Revolutionary Process',
        'Real-time Progress Tracking',
        'Interactive Controls',
        'Detailed Process Visualization'
      ]
    },
    {
      id: 'quantum-consciousness',
      title: 'Quantum Consciousness Menu',
      description: 'Menu that adapts to your consciousness state',
      icon: '🧠',
      gradient: 'from-purple-500 to-indigo-600',
      hoverGradient: 'from-purple-600 to-indigo-700',
      shadow: 'shadow-purple-500/25',
      link: '/solutions/small-business-demo/quantum-consciousness',
      features: [
        'Consciousness State Detection',
        'Adaptive Menu Items',
        'Quantum Superposition',
        'Global Entanglement Network'
      ]
    },
    {
      id: 'neural-interface',
      title: 'Neural Interface Ordering',
      description: 'Order with your thoughts - The future of dining',
      icon: '⚡',
      gradient: 'from-blue-500 to-cyan-600',
      hoverGradient: 'from-blue-600 to-cyan-700',
      shadow: 'shadow-blue-500/25',
      link: '/solutions/small-business-demo/neural-interface',
      features: [
        'Brain Wave Analysis',
        'Thought-Based Ordering',
        'Neural Signal Processing',
        'Consciousness Level Monitoring'
      ]
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
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center mb-16">
            <div className="relative inline-block">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-25 animate-pulse"></div>
              <h1 className="relative text-5xl lg:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                🚀 Revolutionary AI Systems
              </h1>
            </div>
            <p className="text-2xl text-blue-200 mb-8 animate-fade-in max-w-4xl mx-auto">
              Experience the future of dining with consciousness-based ordering, neural interfaces, and quantum menu adaptation
            </p>
            
            {/* Enterprise Badge */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 border border-emerald-400/30 rounded-full px-6 py-3 mb-8">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-emerald-300 font-semibold">Enterprise Grade Technology</span>
            </div>
          </div>
        </div>
      </div>

      {/* Revolutionary Components */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          {revolutionaryComponents.map((component, index) => (
            <div key={component.id} className="group">
              <a 
                href={component.link}
                className="block relative bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/20 rounded-3xl p-8 hover:scale-105 transition-all duration-500 hover:shadow-2xl overflow-hidden"
              >
                {/* Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-r ${component.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
                
                <div className="relative">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 bg-gradient-to-r ${component.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-3xl">{component.icon}</span>
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                          {component.title}
                        </h3>
                        <p className="text-lg text-gray-300">{component.description}</p>
                      </div>
                    </div>
                    
                    {/* Arrow */}
                    <div className="text-4xl text-gray-400 group-hover:text-white group-hover:translate-x-2 transition-all duration-300">
                      →
                    </div>
                  </div>
                  
                  {/* Features Grid */}
                  <div className="grid md:grid-cols-2 gap-4">
                    {component.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3 p-4 bg-white/5 rounded-xl border border-white/10 group-hover:border-white/20 transition-all duration-300">
                        <div className={`w-2 h-2 bg-gradient-to-r ${component.gradient} rounded-full`}></div>
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Hover Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${component.hoverGradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Enterprise Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/20 rounded-3xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">🏢 Enterprise Features</h2>
            <p className="text-xl text-gray-300">Built for scale, security, and innovation</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Enterprise Security</h3>
              <p className="text-gray-300">Bank-level encryption, SOC 2 compliance, and advanced threat protection</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">High Performance</h3>
              <p className="text-gray-300">99.9% uptime, sub-second response times, and global CDN distribution</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🌐</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Global Scale</h3>
              <p className="text-gray-300">Multi-region deployment, auto-scaling, and intelligent load balancing</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Experience the Future?</h2>
          <p className="text-xl text-gray-300 mb-8">Choose your revolutionary system and transform your dining experience</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 shadow-2xl transform hover:scale-105">
              🚀 Start Your Journey
            </button>
            <button className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-400 hover:text-white transition-all duration-300">
              📞 Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 