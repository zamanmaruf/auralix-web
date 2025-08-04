'use client';

import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import LeadCaptureForm from '@/components/LeadCaptureForm';

interface ChatMessage {
  id: string;
  type: 'bot' | 'user';
  content: string;
  timestamp: Date;
  options?: string[];
}

interface LeadData {
  name: string;
  phone: string;
  email: string;
  intent: string;
  service?: string;
}

export default function SmallBusinessDemo() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [currentStep, setCurrentStep] = useState<'welcome' | 'intent' | 'service' | 'details' | 'success'>('welcome');
  const [leadData, setLeadData] = useState<LeadData>({ name: '', phone: '', email: '', intent: '' });
  const [isProcessing, setIsProcessing] = useState(false);
  const [showMetrics, setShowMetrics] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [automatedFlow, setAutomatedFlow] = useState(false);
  const [flowStep, setFlowStep] = useState(0);
  const [showFuturisticMetrics, setShowFuturisticMetrics] = useState(false);
  
  const initialMetrics = useMemo(() => ({
    visitors: 1247,
    leads: 89,
    responseTime: 23,
    conversionRate: 7.1
  }), []);

  const [metrics, setMetrics] = useState(initialMetrics);
  
  const [futuristicMetrics, setFuturisticMetrics] = useState({
    marketSize: '$2.1B',
    conversionRate: '7.2%',
    responseTime: '23s',
    leadsPerDay: '12',
    revenueImpact: '+$45K/month'
  });
  
  const [executiveMetrics, setExecutiveMetrics] = useState({
    totalRevenue: '$540K',
    costSavings: '$180K',
    headcountReduction: '3 FTEs',
    roi: '300%',
    timeToValue: '30 days'
  });

  useEffect(() => {
    // Auto-open chat after 2 seconds for faster demo (only if not in automated flow)
    if (!automatedFlow) {
      const timer = setTimeout(() => {
        // Double-check that automated flow hasn't started while timer was running
        if (!automatedFlow) {
          setIsChatOpen(true);
          addBotMessage("Hi! 👋 Want today's special, price list, or to book? Choose an option:", [
            "💎 Today's Specials",
            "💰 Price List", 
            "📅 Book Now"
          ]);
        }
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [automatedFlow]);

  const addBotMessage = (content: string, options?: string[]) => {
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'bot',
      content,
      timestamp: new Date(),
      options
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const addUserMessage = (content: string) => {
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      content,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleOptionClick = (option: string) => {
    addUserMessage(option);
    
    if (currentStep === 'welcome') {
      setLeadData(prev => ({ ...prev, intent: option }));
      setCurrentStep('intent');
      
      if (option.includes('Book')) {
        setTimeout(() => {
          addBotMessage("Great! What service are you interested in?", [
            "🦷 Teeth Cleaning - $129",
            "✨ Whitening - $299",
            "🔧 Full Checkup - $199"
          ]);
        }, 500);
      } else {
        setTimeout(() => {
          addBotMessage("Perfect! Let me get your details to send you the information:", [
            "📱 Continue"
          ]);
        }, 500);
      }
    } else if (currentStep === 'intent') {
      setLeadData(prev => ({ ...prev, service: option }));
      setCurrentStep('details');
      
      setTimeout(() => {
        addBotMessage("Excellent choice! Just a few quick details to get you set up:");
      }, 500);
      
      setTimeout(() => {
        addBotMessage("📝 Please provide your details:", [
          "Fill Form"
        ]);
        setShowForm(true);
      }, 1000);
    }
  };

  const startAutomatedFlow = () => {
    setAutomatedFlow(true);
    setFlowStep(0);
    
    // Clear any existing messages and reset state
    setMessages([]);
    setCurrentStep('welcome');
    setLeadData({ name: '', phone: '', email: '', intent: '', service: '' });
    setShowForm(false);
    setShowMetrics(false);
    setShowFuturisticMetrics(false);
    setIsProcessing(false);
    
    // Simple step-by-step flow
    setTimeout(() => {
      setIsChatOpen(true);
      addBotMessage("Hi! 👋 Want today's special, price list, or to book? Choose an option:", [
        "💎 Today's Specials",
        "💰 Price List", 
        "📅 Book Now"
      ]);
      setFlowStep(1);
    }, 1000);
    
    setTimeout(() => {
      addUserMessage("📅 Book Now");
      setLeadData(prev => ({ ...prev, intent: "📅 Book Now" }));
      setCurrentStep('intent');
      setFlowStep(2);
    }, 3000);
    
    setTimeout(() => {
      addBotMessage("Great! What service are you interested in?", [
        "🦷 Teeth Cleaning - $129",
        "✨ Whitening - $299",
        "🔧 Full Checkup - $199"
      ]);
      setFlowStep(3);
    }, 5000);
    
    setTimeout(() => {
      addUserMessage("🦷 Teeth Cleaning - $129");
      setLeadData(prev => ({ ...prev, service: "🦷 Teeth Cleaning - $129" }));
      setCurrentStep('details');
      setFlowStep(4);
    }, 7000);
    
    setTimeout(() => {
      addBotMessage("Excellent choice! Just a few quick details to get you set up:");
      setFlowStep(5);
    }, 9000);
    
    setTimeout(() => {
      addBotMessage("📝 Please provide your details:", ["Fill Form"]);
      setShowForm(true);
      setFlowStep(6);
    }, 11000);
    
    setTimeout(() => {
      addUserMessage("Fill Form");
      setFlowStep(6.5);
    }, 13000);
    
    setTimeout(() => {
      setLeadData(prev => ({ ...prev, name: "Sarah Johnson" }));
      setFlowStep(6.6);
    }, 14000);
    
    setTimeout(() => {
      setLeadData(prev => ({ ...prev, phone: "(555) 123-4567" }));
      setFlowStep(6.7);
    }, 15000);
    
    setTimeout(() => {
      setLeadData(prev => ({ ...prev, email: "sarah.j@email.com" }));
      setFlowStep(6.8);
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
      setFlowStep(7);
    }, 18000);
    
    setTimeout(() => {
      setIsProcessing(false);
      setCurrentStep('success');
      addBotMessage("🎉 You're all set! We'll confirm within 5-10 minutes by SMS. Questions? Just reply here.");
      
      // Update metrics
      setMetrics(prev => ({
        ...prev,
        leads: prev.leads + 1,
        conversionRate: ((prev.leads + 1) / prev.visitors * 100)
      }));
      
      setShowMetrics(true);
      setShowFuturisticMetrics(true);
      setFlowStep(8);
    }, 20000);
    
    setTimeout(() => {
      setAutomatedFlow(false);
    }, 23000);
  };

  const handleFormSubmit = (formData: LeadData) => {
    setLeadData(formData);
    setIsProcessing(true);
    setShowForm(false);
    
    setTimeout(() => {
      setIsProcessing(false);
      setCurrentStep('success');
      addBotMessage("🎉 You're all set! We'll confirm within 5-10 minutes by SMS. Questions? Just reply here.");
      
      // Update metrics
      setMetrics(prev => ({
        ...prev,
        leads: prev.leads + 1,
        conversionRate: ((prev.leads + 1) / prev.visitors * 100)
      }));
      
      setShowMetrics(true);
    }, 1000);
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
                <p className="text-blue-200 text-sm">Enterprise Lead Capture Demo</p>
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
            
            {/* Automated Flow Button */}
            <button
              onClick={startAutomatedFlow}
              disabled={automatedFlow}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200 disabled:opacity-50 shadow-lg"
            >
              {automatedFlow ? '🤖 Auto-Demo Running...' : '🚀 Start Auto-Demo'}
            </button>
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
                  <span className="text-white text-sm font-bold">30 Days TTV</span>
                </div>
              </div>
            </div>

            {/* Website Mock */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold text-xl">DentalCare Pro</h3>
                  <div className="flex items-center space-x-4">
                    <span className="text-blue-100">📞 (555) 123-4567</span>
                    <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                              <div className="text-center mb-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Professional Dental Care</h4>
                <p className="text-gray-700 font-medium">Experience the future of dental care with our AI-powered scheduling</p>
              </div>
                
                                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-6 rounded-xl text-center border border-blue-300 shadow-lg">
                    <div className="text-3xl mb-2">🦷</div>
                    <h5 className="font-semibold text-blue-900">Teeth Cleaning</h5>
                    <p className="text-green-700 font-bold">$129</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-6 rounded-xl text-center border border-purple-300 shadow-lg">
                    <div className="text-3xl mb-2">✨</div>
                    <h5 className="font-semibold text-purple-900">Whitening</h5>
                    <p className="text-green-700 font-bold">$299</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-100 to-green-200 p-6 rounded-xl text-center border border-green-300 shadow-lg">
                    <div className="text-3xl mb-2">🔧</div>
                    <h5 className="font-semibold text-green-900">Full Checkup</h5>
                    <p className="text-green-700 font-bold">$199</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

                       {/* Right Side - Chat Interface */}
             <div className="space-y-6">
               {showForm && (
                 <LeadCaptureForm 
                   onSubmit={handleFormSubmit}
                   isVisible={showForm}
                 />
               )}
               <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-green-500 to-blue-500 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-white font-semibold">AI Assistant</span>
                  </div>
                  <div className="text-white text-sm">Live • 24/7</div>
                </div>
              </div>
              
              <div className="h-96 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                      message.type === 'user' 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-gray-100 text-gray-900'
                    }`}>
                      <p className="text-sm font-medium">{message.content}</p>
                      {message.options && (
                        <div className="mt-3 space-y-2">
                          {message.options.map((option, index) => (
                            <button
                              key={index}
                              onClick={() => handleOptionClick(option)}
                              className="block w-full text-left px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors"
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                
                {isProcessing && (
                  <div className="flex justify-start">
                                         <div className="bg-gray-100 text-gray-900 px-4 py-2 rounded-2xl">
                       <div className="flex items-center space-x-2">
                         <div className="flex space-x-1">
                           <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce"></div>
                           <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                           <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                         </div>
                         <span className="text-sm font-medium">Processing...</span>
                       </div>
                     </div>
                  </div>
                )}
              </div>
            </div>

            {/* Success Metrics */}
            {showMetrics && (
              <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4">🎯 Lead Captured Successfully!</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl font-bold">{leadData.name}</div>
                    <div className="text-sm opacity-90">Name</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{leadData.phone}</div>
                    <div className="text-sm opacity-90">Phone</div>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-green-400 bg-opacity-30 rounded-lg border border-green-300">
                  <div className="text-sm text-white font-medium">
                    <strong className="text-green-200">SMS Sent:</strong> "Hi {leadData.name}, thanks for reaching out to DentalCare Pro. We'll confirm shortly. Reply STOP to opt-out."
                  </div>
                </div>
              </div>
            )}

            {/* SMS Preview - Always Show */}
            <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-6 text-white shadow-2xl border border-emerald-400">
              <h3 className="text-xl font-bold mb-4">📱 Instant SMS Follow-up</h3>
              <div className="mt-4 p-4 bg-emerald-400 bg-opacity-30 rounded-lg border border-emerald-300">
                <div className="text-sm text-white font-medium">
                  <strong className="text-emerald-200">Sample SMS:</strong> "Hi Sarah, thanks for reaching out to DentalCare Pro! We've received your booking request for Teeth Cleaning. We'll confirm your appointment within 5-10 minutes. Reply STOP to opt-out."
                </div>
              </div>
            </div>

            {/* AI Analysis Preview - Always Show */}
            <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 rounded-2xl p-6 border border-indigo-400 shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">🚀 Market Impact Analysis</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-sm font-medium">LIVE</span>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
                <div className="text-center">
                  <div className="text-lg md:text-xl lg:text-2xl font-bold text-purple-300 break-words">$2.1B</div>
                  <div className="text-xs text-gray-300">Market Size</div>
                </div>
                <div className="text-center">
                  <div className="text-lg md:text-xl lg:text-2xl font-bold text-blue-300">7.2%</div>
                  <div className="text-xs text-gray-300">Conversion Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-lg md:text-xl lg:text-2xl font-bold text-green-300">23s</div>
                  <div className="text-xs text-gray-300">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-lg md:text-xl lg:text-2xl font-bold text-yellow-300">12</div>
                  <div className="text-xs text-gray-300">Leads/Day</div>
                </div>
                <div className="text-center col-span-2 md:col-span-1">
                  <div className="text-lg md:text-xl lg:text-2xl font-bold text-red-300 break-words">+$45K/month</div>
                  <div className="text-xs text-gray-300">Revenue Impact</div>
                </div>
              </div>
              <div className="mt-4 p-4 bg-indigo-400 bg-opacity-30 rounded-lg border border-indigo-300">
                <div className="text-sm text-white font-medium">
                  <strong className="text-indigo-200">AI Analysis:</strong> Our AI predicts a 7.2% conversion improvement over industry average. 
                  Each lead captured represents $45,000 in annual revenue potential with full automation deployment.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Features */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 shadow-2xl border border-blue-400">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="text-xl font-bold text-white mb-2">60-Second Response</h3>
            <p className="text-blue-100 font-medium">AI-powered instant replies that convert visitors into leads</p>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 shadow-2xl border border-green-400">
            <div className="text-3xl mb-4">📱</div>
            <h3 className="text-xl font-bold text-white mb-2">Instant SMS Follow-up</h3>
            <p className="text-green-100 font-medium">Automated SMS confirmations with business branding</p>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 shadow-2xl border border-purple-400">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-white mb-2">Guaranteed ROI</h3>
            <p className="text-purple-100 font-medium">Track leads, conversions, and revenue impact in real-time</p>
          </div>
        </div>
      </div>

      {/* Floating Chat Button */}
      {!isChatOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={() => setIsChatOpen(true)}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-200"
          >
            <div className="flex items-center space-x-2">
              <span className="text-xl">💬</span>
              <span className="text-sm font-semibold">Got a question? Get a reply in 60s</span>
            </div>
          </button>
        </div>
      )}
    </div>
  );
} 