'use client';

import React, { useState, useMemo } from 'react';

interface ChatMessage {
  id: string;
  content: string;
  type: 'user' | 'bot';
  options?: string[];
}

interface LeadData {
  name: string;
  phone: string;
  email: string;
  intent: string;
  service: string;
}

export default function LeadCaptureDemo() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [currentStep, setCurrentStep] = useState<'welcome' | 'intent' | 'details' | 'success'>('welcome');
  const [leadData, setLeadData] = useState<LeadData>({ name: '', phone: '', email: '', intent: '', service: '' });
  const [showForm, setShowForm] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [automatedFlow, setAutomatedFlow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Executive metrics for the demo
  const executiveMetrics = useMemo(() => ({
    totalRevenue: '$2.1M',
    roi: '340%',
    costSavings: '$180K',
    leadConversion: '7.2%',
    responseTime: '23s',
    dailyLeads: '12'
  }), []);

  // Add bot message with optional options
  const addBotMessage = (content: string, options?: string[]) => {
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      content,
      type: 'bot',
      options
    };
    setMessages(prev => [...prev, newMessage]);
  };

  // Add user message
  const addUserMessage = (content: string) => {
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      content,
      type: 'user'
    };
    setMessages(prev => [...prev, newMessage]);
  };

  // Handle option click
  const handleOptionClick = (option: string) => {
    addUserMessage(option);
    
    if (option === "📅 Book Now") {
      setLeadData(prev => ({ ...prev, intent: option }));
      setCurrentStep('intent');
      addBotMessage("Great! What service are you interested in?", [
        "🦷 Teeth Cleaning - $129",
        "✨ Whitening - $299",
        "🔧 Full Checkup - $199"
      ]);
    } else if (option.includes("🦷") || option.includes("✨") || option.includes("🔧")) {
      setLeadData(prev => ({ ...prev, service: option }));
      setCurrentStep('details');
      addBotMessage("Excellent choice! Just a few quick details to get you set up:");
      setTimeout(() => {
        addBotMessage("📝 Please provide your details:", ["Fill Form"]);
        setShowForm(true);
      }, 2000);
    } else if (option === "Fill Form") {
      // Auto-fill form
      setTimeout(() => {
        setLeadData(prev => ({ ...prev, name: "Sarah Johnson" }));
      }, 1000);
      setTimeout(() => {
        setLeadData(prev => ({ ...prev, phone: "(555) 123-4567" }));
      }, 2000);
      setTimeout(() => {
        setLeadData(prev => ({ ...prev, email: "sarah.j@email.com" }));
      }, 3000);
      setTimeout(() => {
        handleFormSubmit({
          name: "Sarah Johnson",
          phone: "(555) 123-4567",
          email: "sarah.j@email.com",
          intent: "📅 Book Now",
          service: "🦷 Teeth Cleaning - $129"
        });
      }, 5000);
    }
  };

  // Handle form submit
  const handleFormSubmit = (data: LeadData) => {
    setLeadData(data);
    setIsProcessing(true);
    setShowForm(false);
    
    setTimeout(() => {
      setIsProcessing(false);
      setCurrentStep('success');
      addBotMessage("🎉 You&apos;re all set! We&apos;ll confirm within 5-10 minutes by SMS. Questions? Just reply here.");
    }, 2000);
  };

  // Start automated demo flow
  const startAutomatedFlow = () => {
    setAutomatedFlow(true);
    
    // Clear any existing messages and reset state
    setMessages([]);
    setCurrentStep('welcome');
    setIsProcessing(false);

    // Simplified step-by-step flow
    setTimeout(() => {
      setIsChatOpen(true);
      addBotMessage("Hi! 👋 Want today's special, price list, or to book? Choose an option:", [
        "💎 Today's Specials",
        "💰 Price List",
        "📅 Book Now"
      ]);
    }, 1000);

    setTimeout(() => {
      addUserMessage("📅 Book Now");
      setLeadData(prev => ({ ...prev, intent: "📅 Book Now" }));
      setCurrentStep('intent');
    }, 3000);

    setTimeout(() => {
      addBotMessage("Great! What service are you interested in?", [
        "🦷 Teeth Cleaning - $129",
        "✨ Whitening - $299",
        "🔧 Full Checkup - $199"
      ]);
    }, 5000);

    setTimeout(() => {
      addUserMessage("🦷 Teeth Cleaning - $129");
      setLeadData(prev => ({ ...prev, service: "🦷 Teeth Cleaning - $129" }));
      setCurrentStep('details');
    }, 7000);

    setTimeout(() => {
      addBotMessage("Excellent choice! Just a few quick details to get you set up:");
    }, 9000);

    setTimeout(() => {
      addBotMessage("📝 Please provide your details:", ["Fill Form"]);
      setShowForm(true);
    }, 11000);

    setTimeout(() => {
      addUserMessage("Fill Form");
    }, 13000);

    setTimeout(() => {
      setLeadData(prev => ({ ...prev, name: "Sarah Johnson" }));
    }, 14000);

    setTimeout(() => {
      setLeadData(prev => ({ ...prev, phone: "(555) 123-4567" }));
    }, 15000);

    setTimeout(() => {
      setLeadData(prev => ({ ...prev, email: "sarah.j@email.com" }));
    }, 16000);

    setTimeout(() => {
      const mockFormData = {
        name: "Sarah Johnson",
        phone: "(555) 123-4567",
        email: "sarah.j@email.com",
        intent: "📅 Book Now",
        service: "🦷 Teeth Cleaning - $129"
      };
      setLeadData(mockFormData);
      setIsProcessing(true);
      setShowForm(false);
    }, 18000);

    setTimeout(() => {
      setIsProcessing(false);
      setCurrentStep('success');
      addBotMessage("🎉 You're all set! We'll confirm within 5-10 minutes by SMS. Questions? Just reply here.");
    }, 20000);

    setTimeout(() => {
      setAutomatedFlow(false);
    }, 23000);
  };

  // Handle Get Started Today button
  const handleGetStarted = () => {
    setIsLoading(true);
    // Simulate a brief loading state for better UX
    setTimeout(() => {
      setIsLoading(false);
      // Open chat and start the demo flow
      setIsChatOpen(true);
      addBotMessage("Hi! 👋 Want today's special, price list, or to book? Choose an option:", [
        "💎 Today's Specials",
        "💰 Price List", 
        "📅 Book Now"
      ]);
      setCurrentStep('welcome');
      
      // Scroll to chat section after a brief delay
      setTimeout(() => {
        const chatSection = document.querySelector('.bg-gradient-to-br.from-gray-800.to-gray-900');
        if (chatSection) {
          chatSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 1000);
    }, 500);
  };

  // Handle Watch Demo button
  const handleWatchDemo = () => {
    setIsLoading(true);
    // Simulate a brief loading state for better UX
    setTimeout(() => {
      setIsLoading(false);
      // Start the automated demo flow
      startAutomatedFlow();
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Auralix AI</h1>
                <p className="text-blue-200 text-sm">AI Lead Capture Demo</p>
              </div>
            </div>
            
            {/* Executive Metrics */}
            <div className="hidden lg:flex items-center space-x-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{executiveMetrics.totalRevenue}</div>
                <div className="text-xs text-gray-300 font-medium">Annual Revenue</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{executiveMetrics.roi}</div>
                <div className="text-xs text-gray-300 font-medium">ROI</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">{executiveMetrics.costSavings}</div>
                <div className="text-xs text-gray-300 font-medium">Cost Savings</div>
              </div>
            </div>
            
            {/* Demo Status */}
            <div className="text-right">
              <div className="text-sm text-purple-400 font-semibold">
                {automatedFlow ? '🤖 Auto-Demo Running...' : 'Ready to Demo'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Website Mock */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Enterprise AI Lead Generation
              </h2>
              <p className="text-xl text-blue-200 mb-4">
                Transform your business with AI-powered lead capture that scales
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg px-4 py-2 border border-green-400 shadow-lg">
                  <span className="text-white text-sm font-bold">300% ROI</span>
                </div>
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg px-4 py-2 border border-blue-400 shadow-lg">
                  <span className="text-white text-sm font-bold">$180K Savings</span>
                </div>
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg px-4 py-2 border border-purple-400 shadow-lg">
                  <span className="text-white text-sm font-bold">7.2% Conversion</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleGetStarted}
                  disabled={isLoading}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-2xl transform hover:scale-105 disabled:opacity-50"
                >
                  {isLoading ? (
                    <div className="flex items-center space-x-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span>Getting Started...</span>
                    </div>
                  ) : (
                    "Get Started Today"
                  )}
                </button>
                <button 
                  onClick={handleWatchDemo}
                  disabled={isLoading}
                  className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-400 hover:text-white transition-all duration-200 disabled:opacity-50"
                >
                  {isLoading ? (
                    <div className="flex items-center space-x-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-400"></div>
                      <span>Watching Demo...</span>
                    </div>
                  ) : (
                    "Watch Demo"
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Chat Interface */}
          <div className="space-y-6">
            {/* Chat Container */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-2xl border border-gray-700 h-96 overflow-y-auto">
              {messages.map((message) => (
                <div key={message.id} className={`mb-4 ${message.type === 'user' ? 'text-right' : 'text-left'}`}>
                  <div className={`inline-block max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                    message.type === 'user'
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                      : 'bg-gradient-to-r from-gray-700 to-gray-800 text-white'
                  }`}>
                    <p className="text-sm">{message.content}</p>
                  </div>
                  {message.options && (
                    <div className="mt-3 space-y-2">
                      {message.options.map((option, index) => (
                        <button
                          key={index}
                          onClick={() => handleOptionClick(option)}
                          className="block w-full text-left bg-gradient-to-r from-gray-600 to-gray-700 text-white px-4 py-2 rounded-lg hover:from-gray-500 hover:to-gray-600 transition-all duration-200 text-sm"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {isProcessing && (
                <div className="text-center">
                  <div className="inline-block bg-gradient-to-r from-gray-700 to-gray-800 text-white px-4 py-2 rounded-2xl">
                    <div className="flex items-center space-x-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span className="text-sm">Processing...</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Lead Form */}
            {showForm && (
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-6 text-white shadow-2xl border border-emerald-400">
                <h3 className="text-xl font-bold mb-4">📝 Contact Information</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      value={leadData.name}
                      onChange={(e) => setLeadData(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 text-white placeholder-gray-300 border border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <input
                      type="tel"
                      value={leadData.phone}
                      onChange={(e) => setLeadData(prev => ({ ...prev, phone: e.target.value }))}
                      className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 text-white placeholder-gray-300 border border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email (Optional)</label>
                    <input
                      type="email"
                      value={leadData.email}
                      onChange={(e) => setLeadData(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 text-white placeholder-gray-300 border border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                      placeholder="Enter your email"
                    />
                  </div>
                  <button
                    onClick={() => handleFormSubmit(leadData)}
                    className="w-full bg-gradient-to-r from-emerald-600 to-teal-700 text-white px-6 py-3 rounded-lg font-bold hover:from-emerald-700 hover:to-teal-800 transition-all duration-200 shadow-lg"
                  >
                    Submit & Get Confirmation
                  </button>
                </div>
              </div>
            )}

            {/* Success State */}
            {currentStep === 'success' && (
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white shadow-2xl border border-green-400">
                <h3 className="text-xl font-bold mb-4">✅ Lead Captured Successfully!</h3>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-2xl font-bold">{leadData.name}</div>
                    <div className="text-sm opacity-90">Name</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{leadData.phone}</div>
                    <div className="text-sm opacity-90">Phone</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{leadData.intent}</div>
                    <div className="text-sm opacity-90">Intent</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{leadData.service}</div>
                    <div className="text-sm opacity-90">Service</div>
                  </div>
                </div>
                
                <div className="mt-4 p-4 bg-green-400 bg-opacity-30 rounded-lg border border-green-300">
                  <div className="text-sm text-white font-medium">
                    <strong className="text-green-200">SMS Sent:</strong> &quot;Hi {leadData.name}, thanks for reaching out to DentalCare Pro. We&apos;ll confirm shortly. Reply STOP to opt-out.&quot;
                  </div>
                </div>
              </div>
            )}

            {/* SMS Preview - Always Show */}
            <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-6 text-white shadow-2xl border border-emerald-400">
              <h3 className="text-xl font-bold mb-4">📱 Instant SMS Follow-up</h3>
              <div className="mt-4 p-4 bg-emerald-400 bg-opacity-30 rounded-lg border border-emerald-300">
                <div className="text-sm text-white font-medium">
                  <strong className="text-emerald-200">Sample SMS:</strong> &quot;Hi Sarah, thanks for reaching out to DentalCare Pro! We&apos;ve received your booking request for Teeth Cleaning. We&apos;ll confirm your appointment within 5-10 minutes. Reply STOP to opt-out.&quot;
                </div>
              </div>
            </div>

            {/* AI Analysis Preview */}
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-6 text-white shadow-2xl border border-indigo-400">
              <h3 className="text-xl font-bold mb-4">🤖 AI Analysis</h3>
              <div className="mt-4 p-4 bg-indigo-400 bg-opacity-30 rounded-lg border border-indigo-300">
                <div className="text-sm text-white font-medium">
                  <strong className="text-indigo-200">AI Analysis:</strong> Our AI predicts a 7.2% conversion improvement over industry average.
                  Each lead captured represents $45,000 in annual revenue potential with full automation deployment.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 