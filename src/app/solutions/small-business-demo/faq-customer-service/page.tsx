'use client';

import React, { useState, useMemo } from 'react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
  confidence: number;
}

interface LeadData {
  name: string;
  phone: string;
  question: string;
}

export default function FAQCustomerServiceDemo() {
  const [isLoading, setIsLoading] = useState(false);
  const [automatedFlow, setAutomatedFlow] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [showEscalation, setShowEscalation] = useState(false);
  const [leadData, setLeadData] = useState<LeadData>({ name: '', phone: '', question: '' });

  const executiveMetrics = useMemo(() => ({
    questionsAnswered: '2,847',
    deflectionRate: '78%',
    responseTime: '12s',
    customerSatisfaction: '4.6★',
    costReduction: '65%'
  }), []);

  const businessImpact = useMemo(() => ({
    callReduction: '60%',
    timeSaved: '25 hours/week',
    leadCapture: '340 leads',
    costSavings: '$32K/year'
  }), []);

  const faqItems: FAQItem[] = [
    {
      question: 'What are your business hours?',
      answer: 'We are open Monday-Friday 9AM-6PM, Saturday 10AM-4PM, and Sunday 12PM-4PM.',
      category: 'hours',
      confidence: 95
    },
    {
      question: 'Do you accept Blue Cross insurance?',
      answer: 'Yes! We accept Blue Cross Blue Shield and most major insurance plans. Coverage varies by plan, so we recommend calling to verify your specific benefits.',
      category: 'insurance',
      confidence: 88
    },
    {
      question: 'How much does a teeth cleaning cost?',
      answer: 'Our teeth cleaning costs $129. With insurance, your out-of-pocket cost is typically $20-50 depending on your plan.',
      category: 'pricing',
      confidence: 92
    },
    {
      question: 'Can I reschedule my appointment?',
      answer: 'Absolutely! You can reschedule up to 24 hours before your appointment. Call us or use our online booking system.',
      category: 'appointments',
      confidence: 90
    },
    {
      question: 'Do you offer payment plans?',
      answer: 'Yes, we offer flexible payment plans through CareCredit. We also accept all major credit cards and cash.',
      category: 'pricing',
      confidence: 85
    },
    {
      question: 'What should I bring to my first appointment?',
      answer: 'Please bring your ID, insurance card, and any previous dental records. We\'ll have you fill out forms when you arrive.',
      category: 'appointments',
      confidence: 87
    }
  ];

  const startFAQDemo = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setAutomatedFlow(true);
      // Simulate automated FAQ flow
      setTimeout(() => {
        setCurrentQuestion('Do you accept Blue Cross insurance?');
        setTimeout(() => {
          setAiResponse('Yes! We accept Blue Cross Blue Shield and most major insurance plans. Coverage varies by plan, so we recommend calling to verify your specific benefits. Would you like me to have someone call you with more details?');
          setTimeout(() => {
            setShowEscalation(true);
          }, 2000);
        }, 2000);
      }, 2000);
    }, 1000);
  };

  const askQuestion = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      // Simulate asking a question
      console.log('Question asked successfully');
    }, 2000);
  };

  const handleEscalation = (data: LeadData) => {
    setLeadData(data);
    // Simulate escalation
    console.log('Lead escalated successfully');
  };

  const filteredFAQs = selectedCategory === 'all' 
    ? faqItems 
    : faqItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/50 to-purple-900/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Business Impact */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  ❓ AI FAQ & Customer Service
                </h1>
                <p className="text-xl text-indigo-200 mb-6">
                  Cut repetitive calls with smart escalation
                </p>
                
                {/* Executive Metrics */}
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                  <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl p-4 text-white shadow-lg border border-indigo-400">
                    <div className="text-2xl font-bold">{executiveMetrics.questionsAnswered}</div>
                    <div className="text-sm opacity-90">Questions Answered</div>
                  </div>
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-4 text-white shadow-lg border border-purple-400">
                    <div className="text-2xl font-bold">{executiveMetrics.deflectionRate}</div>
                    <div className="text-sm opacity-90">Deflection Rate</div>
                  </div>
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-4 text-white shadow-lg border border-blue-400">
                    <div className="text-2xl font-bold">{executiveMetrics.responseTime}</div>
                    <div className="text-sm opacity-90">Response Time</div>
                  </div>
                </div>

                {/* Business Impact */}
                <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 backdrop-blur-sm border border-indigo-400/20 rounded-2xl p-6 mb-8">
                  <h3 className="text-xl font-bold text-white mb-4">💼 Business Impact</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-2xl font-bold text-indigo-400">{businessImpact.callReduction}</div>
                      <div className="text-sm text-indigo-200">Call Reduction</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-400">{businessImpact.timeSaved}</div>
                      <div className="text-sm text-purple-200">Time Saved</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-400">{businessImpact.leadCapture}</div>
                      <div className="text-sm text-blue-200">Leads Captured</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-400">{businessImpact.costSavings}</div>
                      <div className="text-sm text-green-200">Cost Savings</div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={startFAQDemo}
                    disabled={isLoading}
                    className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-200 shadow-2xl transform hover:scale-105 disabled:opacity-50"
                  >
                    {isLoading ? (
                      <div className="flex items-center space-x-2">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        <span>Starting Demo...</span>
                      </div>
                    ) : (
                      "🚀 Start FAQ Demo"
                    )}
                  </button>
                  <button 
                    onClick={askQuestion}
                    disabled={isLoading}
                    className="border-2 border-indigo-400 text-indigo-400 px-8 py-4 rounded-xl font-bold text-lg hover:bg-indigo-400 hover:text-white transition-all duration-200 disabled:opacity-50"
                  >
                    ❓ Ask Question
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side - FAQ Interface */}
            <div className="space-y-6">
              {/* FAQ Chat Interface */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-2xl border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-4">💬 AI Customer Service</h3>
                
                {/* Chat Messages */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">🤖</span>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-3 max-w-xs">
                      <p className="text-sm text-white">Hi! I can help with hours, pricing, insurance, and appointments. What do you need?</p>
                    </div>
                  </div>
                  {currentQuestion && (
                    <div className="flex items-start space-x-3 justify-end">
                      <div className="bg-indigo-500 rounded-lg p-3 max-w-xs">
                        <p className="text-sm text-white">{currentQuestion}</p>
                      </div>
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">👤</span>
                      </div>
                    </div>
                  )}
                  {aiResponse && (
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">🤖</span>
                      </div>
                      <div className="bg-gray-700 rounded-lg p-3 max-w-xs">
                        <p className="text-sm text-white">{aiResponse}</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-2 gap-2">
                  <button 
                    onClick={() => setShowEscalation(true)}
                    className="p-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-sm transition-all"
                  >
                    Get Call Back
                  </button>
                  <button 
                    onClick={() => setCurrentQuestion('What are your business hours?')}
                    className="p-2 bg-gray-600 hover:bg-gray-500 text-white rounded-lg text-sm transition-all"
                  >
                    Ask Hours
                  </button>
                </div>
              </div>

              {/* Escalation Form */}
              {showEscalation && (
                <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-6 text-white shadow-2xl border border-indigo-400">
                  <h3 className="text-xl font-bold mb-4">📞 Request Call Back</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name</label>
                      <input
                        type="text"
                        value={leadData.name}
                        onChange={(e) => setLeadData(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 text-white placeholder-gray-300 border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone</label>
                      <input
                        type="tel"
                        value={leadData.phone}
                        onChange={(e) => setLeadData(prev => ({ ...prev, phone: e.target.value }))}
                        className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 text-white placeholder-gray-300 border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Question</label>
                      <textarea
                        value={leadData.question}
                        onChange={(e) => setLeadData(prev => ({ ...prev, question: e.target.value }))}
                        className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 text-white placeholder-gray-300 border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        placeholder="Brief description of your question"
                        rows={3}
                      ></textarea>
                    </div>
                    <button 
                      onClick={() => handleEscalation(leadData)}
                      className="w-full bg-white text-indigo-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all duration-200 shadow-lg"
                    >
                      Request Call Back
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/20 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">❓ FAQ Categories</h3>
          
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {['all', 'hours', 'pricing', 'insurance', 'appointments'].map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* FAQ Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {filteredFAQs.map((item, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-lg font-bold text-white">{item.question}</h4>
                  <div className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded-full">
                    {item.confidence}% confidence
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-4">{item.answer}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-400 bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded-full">
                    {item.category}
                  </span>
                  <button
                    onClick={() => {
                      setCurrentQuestion(item.question);
                      setAiResponse(item.answer);
                    }}
                    className="text-indigo-400 hover:text-indigo-300 text-sm font-semibold"
                  >
                    Ask This Question
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Service Analysis */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-r from-green-900/50 to-teal-900/50 backdrop-blur-sm border border-green-400/20 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">🤖 AI Service Analysis</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-green-200">Smart Features</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span>Instant answers to common questions</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span>Intelligent escalation for complex issues</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span>Lead capture when answers don&apos;t suffice</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span>24/7 availability without staff overhead</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-green-200">Business Benefits</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center space-x-2">
                  <span className="text-green-400">→</span>
                  <span>60% reduction in support calls</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-400">→</span>
                  <span>78% question deflection rate</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-400">→</span>
                  <span>12-second average response time</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-400">→</span>
                  <span>340 qualified leads captured</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 