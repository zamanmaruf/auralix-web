'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  FaCalendar, FaClock, FaUser, FaPhone, FaEnvelope, FaMapMarkerAlt,
  FaStar, FaHeart, FaCheck, FaArrowRight, FaChartLine, FaUsers,
  FaDollarSign, FaCog, FaBrain, FaRobot, FaBell, FaShoppingCart,
  FaInstagram, FaFacebook, FaGoogle, FaYelp, FaWhatsapp, FaMicrophone,
  FaComments, FaTimes, FaPlay, FaPause, FaVolumeUp, FaVolumeMute,
  FaBullhorn, FaMicrophoneSlash, FaExclamationTriangle, FaFire,
  FaRocket, FaShieldAlt, FaTrophy, FaGift
} from 'react-icons/fa';
import { MdDashboard, MdAnalytics, MdInventory } from 'react-icons/md';
import { BiTrendingUp, BiTrendingDown } from 'react-icons/bi';

// Add Web Speech API types
declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
    speechSynthesis: any;
  }
}

interface ConversationMemory {
  conversationId: string;
  bookingStage: string;
  customerName: string;
  customerPhone: string;
  preferredService: string;
  preferredBarber: string;
  preferredDate: string;
  preferredTime: string;
  conversationHistory: string[];
}

export default function BarberTechProDemo() {
  // Demo State
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voicesLoaded, setVoicesLoaded] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    shopName: '',
    message: ''
  });
  const [conversationMemory, setConversationMemory] = useState<ConversationMemory>({
    conversationId: 'demo_' + Date.now(),
    bookingStage: 'initial',
    customerName: '',
    customerPhone: '',
    preferredService: '',
    preferredBarber: '',
    preferredDate: '',
    preferredTime: '',
    conversationHistory: []
  });
  const [aiMessages, setAiMessages] = useState<string[]>([]);
  const [userMessages, setUserMessages] = useState<string[]>([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [showVoiceAssistant, setShowVoiceAssistant] = useState(false);

  // Countdown Timer for Urgency
  const [countdown, setCountdown] = useState({
    hours: 2,
    minutes: 47,
    seconds: 32
  });
  const [isClient, setIsClient] = useState(false);

  // Business Metrics
  const [businessMetrics] = useState({
    todayRevenue: 485,
    todayAppointments: 12,
    totalCustomers: 1247,
    averageRating: 4.8,
    popularService: 'Classic Haircut',
    monthlyGrowth: 23,
    customerRetention: 85,
    peakHours: ['2:00 PM', '3:00 PM', '4:00 PM']
  });

  // Speech Synthesis Setup
  const synthesisRef = useRef<any>(null);

  // Client-side only effect
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Countdown Timer Effect
  useEffect(() => {
    if (!isClient) return;
    
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 2, minutes: 47, seconds: 32 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isClient]);

  // Initialize Speech Synthesis for demo
  useEffect(() => {
    if (typeof window !== 'undefined') {
      synthesisRef.current = window.speechSynthesis;
      
      // Load voices when they become available
      const loadVoices = () => {
        if (synthesisRef.current) {
          synthesisRef.current.getVoices();
          setVoicesLoaded(true);
        }
      };
      
      // Some browsers need a user interaction to load voices
      synthesisRef.current.onvoiceschanged = loadVoices;
      loadVoices(); // Try to load immediately
    }
  }, []);

  // Format countdown numbers
  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  // Add AI Message with synchronized text and speech
  const addAIMessage = (message: string) => {
    // For demo, add text immediately and then start speech
    setAiMessages(prev => [...prev, message]);
    console.log('Message added to chat:', message);
    
    // Start speech after a small delay
    setTimeout(() => {
      speakMessage(message);
    }, 200);
  };

  // Speak Message
  const speakMessage = (message: string) => {
    if (synthesisRef.current) {
      setIsSpeaking(true);
      const utterance = new SpeechSynthesisUtterance(message);
      
      // Set male voice if available
      const voices = synthesisRef.current.getVoices();
      
      // Priority list for male voices
      const maleVoiceNames = [
        'Google UK English Male',
        'Google US English Male', 
        'Microsoft David - English (United States)',
        'Microsoft James - English (United States)',
        'Alex',
        'Daniel',
        'David',
        'James',
        'John',
        'Male'
      ];
      
      const maleVoice = voices.find(voice => 
        voice.lang.includes('en') && 
        maleVoiceNames.some(name => voice.name.includes(name))
      ) || voices.find(voice => 
        voice.lang.includes('en') && 
        voice.name.toLowerCase().includes('male')
      );
      
      if (maleVoice) {
        utterance.voice = maleVoice;
        console.log('Using male voice:', maleVoice.name);
      } else {
        console.log('No male voice found, using default. Available voices:', voices.map(v => v.name));
      }
      
      utterance.rate = 0.9;
      utterance.pitch = 0.8; // Slightly lower pitch for male voice
      utterance.volume = 0.8;
      
      utterance.onend = () => {
        setIsSpeaking(false);
        console.log('Speech ended');
      };
      
      utterance.onerror = (event) => {
        console.error('Speech synthesis error:', event);
        setIsSpeaking(false);
      };
      
      try {
        synthesisRef.current.speak(utterance);
        console.log('Speech synthesis started');
      } catch (error) {
        console.error('Error starting speech synthesis:', error);
        setIsSpeaking(false);
      }
    } else {
      console.log('Speech synthesis not available');
    }
  };



  // Handle User Input
  const handleUserInput = async (message: string) => {
    setUserMessages(prev => [...prev, message]);
    
    // Update conversation memory
    const updatedMemory = {
      ...conversationMemory,
      conversationHistory: [...conversationMemory.conversationHistory, `User: ${message}`]
    };
    setConversationMemory(updatedMemory);

    // Send to backend for processing
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message,
          conversationId: conversationMemory.conversationId,
          userId: 'demo_user',
          context: {
            bookingStage: conversationMemory.bookingStage,
            customerName: conversationMemory.customerName,
            preferredService: conversationMemory.preferredService,
            preferredBarber: conversationMemory.preferredBarber,
            preferredDate: conversationMemory.preferredDate,
            preferredTime: conversationMemory.preferredTime,
            customerPhone: conversationMemory.customerPhone,
            conversationHistory: updatedMemory.conversationHistory,
          },
          sessionToken: 'demo_session_token',
        }),
      });

      const data = await response.json();
      
      if (data.message) {
        addAIMessage(data.message);
        
        // Update conversation memory with new context
        if (data.context) {
          setConversationMemory(prev => ({
            ...prev,
            ...data.context,
            conversationHistory: [...prev.conversationHistory, `AI: ${data.message}`]
          }));
        }
      }
    } catch (error) {
      console.error('Error sending message:', error);
      addAIMessage("I apologize, but I encountered a technical issue. Please try again or call us directly at (902) 555-0123 for immediate assistance.");
    }
  };

  // Start AI Voice Assistant
  const startAIVoiceAssistant = () => {
    setShowVoiceAssistant(true);
    // Start the customer service demo immediately
    handleDemoCustomerService();
  };

    // Stop AI Voice Assistant
  const stopAIVoiceAssistant = () => {
    setIsSpeaking(false);
    if (synthesisRef.current) {
      synthesisRef.current.cancel();
    }
  };

  // Demo Workflow Functions
  const handleDemoCustomerService = () => {
    console.log('Starting demo...');
    
    // Start with first message
    addAIMessage("Customer: Hi, I have an appointment today but I'm running late. Can I reschedule?");
    
    // Chain the messages to wait for speech to finish
    const messages = [
      "AI Assistant: No problem at all! I can see you have a 3 PM appointment with Mike. I have a 4:30 PM slot available today, or I can move you to tomorrow at 3 PM. Which works better for you?",
      "Customer: Tomorrow at 3 PM would be perfect. Thank you!",
      "AI Assistant: Perfect! I've rescheduled your appointment to tomorrow at 3 PM with Mike. You'll receive a confirmation text shortly. Is there anything else I can help you with?",
      "Customer: Actually, what services do you offer for kids?",
      "AI Assistant: We offer several services for kids! We have Kids Haircuts for $18, Kids Haircut & Style for $25, and we also do special occasion styling. Our barber David specializes in kids' cuts and has 12 years of experience. Would you like to book an appointment for your child?",
      "Customer: Yes, that sounds great. Can I book my son for tomorrow at 4 PM?",
      "AI Assistant: Absolutely! I have David available tomorrow at 4 PM. I'll book your son for a Kids Haircut at 4 PM tomorrow. What's your son's name?",
      "Customer: His name is Tommy.",
      "AI Assistant: Perfect! I've booked Tommy for a Kids Haircut tomorrow at 4 PM with David. You'll receive a confirmation text shortly. Both appointments are now set - yours at 3 PM and Tommy's at 4 PM. Thank you!"
    ];
    
    let currentIndex = 0;
    
    const addNextMessage = () => {
      if (currentIndex < messages.length) {
        console.log(`Adding message ${currentIndex + 1}:`, messages[currentIndex]);
        addAIMessage(messages[currentIndex]);
        currentIndex++;
        
        // Schedule next message after a longer delay to ensure speech finishes
        setTimeout(addNextMessage, 5000);
      }
    };
    
    // Start the chain after first message with longer delay
    setTimeout(addNextMessage, 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Urgency Banner */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white text-center py-3">
        <div className="text-lg font-bold">
          🔥 LIMITED TIME: First 15 barber shops get 50% OFF first month + FREE setup! Only 8 spots left!
            </div>
        <div className="text-sm mt-1">
          ⏰ Offer expires in {isClient ? `${formatNumber(countdown.hours)}:${formatNumber(countdown.minutes)}:${formatNumber(countdown.seconds)}` : '02:47:32'}
          </div>
        </div>

      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-sm border-b border-gray-700/50 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="text-2xl">💈</div>
              <div>
                <h1 className="text-xl font-bold text-white">BarberTech Pro</h1>
                <p className="text-gray-400 text-sm">AI-Powered Barber Shop Management</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <span className="text-blue-400 text-sm font-semibold">🚀 Revolutionary AI Technology</span>
              <button 
                onClick={() => setShowContactForm(true)}
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                <FaMicrophone />
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            The AI That 
            <span className="text-orange-400"> Replaces Your Front Desk</span>
            <br />
            <span className="text-2xl md:text-4xl text-gray-300 mt-4 block">
                              Save Time & Money • Never Miss a Call • 24/7 Availability
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your barber shop with AI that books appointments, manages inventory, and grows your business automatically. 
            No more missed calls, no more manual scheduling, no more lost revenue.
          </p>

          {/* Value Proposition Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50">
                              <div className="text-3xl font-bold text-orange-400 mb-2">40%</div>
                <div className="text-gray-300">Time Saved</div>
                  </div>
            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50">
              <div className="text-3xl font-bold text-green-400 mb-2">40%</div>
              <div className="text-gray-300">Revenue Increase</div>
                </div>
            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50">
              <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
              <div className="text-gray-300">Availability</div>
              </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <FaShieldAlt className="text-green-400" />
              30-day money-back guarantee
                </div>
            <div className="flex items-center gap-2">
              <FaGift className="text-orange-400" />
              Free setup & training
                </div>
                         <div className="flex items-center gap-2">
               <FaClock className="text-blue-400" />
               24/7 support included
                </div>
              </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={startAIVoiceAssistant}
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
            >
              <FaMicrophone />
              Try AI Live Demo
            </button>
            <button 
              onClick={handleDemoCustomerService}
              className="border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              See Customer Service Demo
            </button>
          </div>
        </div>
      </section>

            {/* Innovation & Technology Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
          <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Revolutionary AI Technology</h2>
          
          {/* Innovation Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
              <div className="text-gray-300">AI Availability</div>
              </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime</div>
              </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">10min</div>
              <div className="text-gray-300">Setup Time</div>
              </div>
                          <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">40%</div>
                <div className="text-gray-300">Time Saved</div>
              </div>
            </div>

          {/* Technology Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50">
              <div className="text-center mb-4">
                <FaBrain className="text-4xl text-blue-400 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-white mb-2">Advanced AI</h3>
          </div>
              <p className="text-gray-300 text-center">
                State-of-the-art natural language processing that understands customer intent and provides human-like responses.
              </p>
            </div>
            
            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50">
              <div className="text-center mb-4">
                <FaRobot className="text-4xl text-green-400 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-white mb-2">Voice Intelligence</h3>
                </div>
              <p className="text-gray-300 text-center">
                Real-time speech recognition and text-to-speech technology that sounds completely natural to customers.
              </p>
                </div>
            
            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50">
              <div className="text-center mb-4">
                <FaChartLine className="text-4xl text-purple-400 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-white mb-2">Smart Analytics</h3>
                </div>
              <p className="text-gray-300 text-center">
                AI-powered insights that optimize your business operations and maximize revenue potential.
              </p>
                </div>
              </div>

          {/* Innovation Highlight */}
          <div className="mt-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg p-8 border border-blue-500/30">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">🚀 First-to-Market AI Voice Assistant</h3>
              <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
                BarberTech Pro is the first AI voice assistant specifically designed for barber shops. 
                Our revolutionary technology combines advanced natural language processing with industry-specific knowledge 
                to create the most intelligent booking system ever built.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">AI-Powered</div>
                  <div className="text-gray-300">Voice Recognition</div>
            </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">Industry-Specific</div>
                  <div className="text-gray-300">Knowledge Base</div>
              </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">Real-Time</div>
                  <div className="text-gray-300">Processing</div>
                </div>
              </div>
              <button 
                onClick={() => addAIMessage("BarberTech Pro is the first AI voice assistant specifically designed for barber shops. Our revolutionary technology combines advanced natural language processing with industry-specific knowledge to create the most intelligent booking system ever built. This is cutting-edge technology that will transform how barber shops operate.")}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Learn About Our Technology
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Voice Assistant Section */}
      {showVoiceAssistant && (
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-gray-700/50">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                  <FaRobot className="text-orange-400" />
                  Enterprise AI Voice Assistant
                </h2>
                <button 
                  onClick={stopAIVoiceAssistant}
                  className="text-gray-400 hover:text-white transition"
                >
                  <FaTimes className="text-xl" />
                </button>
              </div>

                            {/* Demo Instructions */}
              <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4 mb-6">
                <h3 className="text-blue-400 font-semibold mb-2">🎯 Automated Customer Service Demo</h3>
                <p className="text-gray-300 text-sm mb-3">
                  Watch our AI handle a complete customer interaction automatically. No microphone needed - this is a fully automated demonstration.
                </p>
                <div className="text-xs text-gray-400">
                  <div>🎧 <strong>Features demonstrated:</strong> Rescheduling, service inquiries, multi-appointment booking, and natural conversation flow</div>
                </div>
              </div>

                            {/* Status Indicator */}
              <div className="flex items-center justify-center mb-6">
                <div className={`p-3 rounded-full ${aiMessages.length > 0 ? 'bg-green-500' : 'bg-gray-600'}`}>
                  {aiMessages.length > 0 ? (
                    <FaPlay className="text-white text-xl" />
                  ) : (
                    <FaMicrophone className="text-white text-xl" />
                  )}
                </div>
                <span className="ml-3 text-gray-300">
                  {aiMessages.length > 0 ? 'Demo Running...' : 'Ready for Demo'}
                </span>
              </div>

              {/* Conversation Display */}
              <div className="bg-gray-900/50 rounded-lg p-4 h-80 overflow-y-auto mb-4">
                {aiMessages.map((message, index) => (
                  <div key={index} className="mb-4">
                    {message.startsWith('Customer:') ? (
                      <div className="flex justify-end">
                        <div className="bg-blue-600 text-white px-4 py-2 rounded-lg max-w-xs">
                          <div className="text-xs text-blue-200 mb-1">Customer</div>
                          <div className="text-sm">{message.replace('Customer: ', '')}</div>
                          </div>
                          </div>
                    ) : message.startsWith('AI Assistant:') ? (
                      <div className="flex justify-start">
                        <div className="bg-gray-700 text-white px-4 py-2 rounded-lg max-w-xs">
                          <div className="text-xs text-orange-300 mb-1">AI Assistant</div>
                          <div className="text-sm">{message.replace('AI Assistant: ', '')}</div>
                            </div>
                          </div>
                    ) : (
                      <div className="flex justify-start">
                        <div className="bg-orange-600 text-white px-4 py-2 rounded-lg max-w-xs">
                          <div className="text-xs text-orange-200 mb-1">System</div>
                          <div className="text-sm">{message}</div>
                        </div>
                      </div>
                    )}
                      </div>
                    ))}
                {userMessages.map((message, index) => (
                  <div key={index} className="mb-4">
                    <div className="flex justify-end">
                      <div className="bg-blue-600 text-white px-4 py-2 rounded-lg max-w-xs">
                        <div className="text-xs text-blue-200 mb-1">You</div>
                        <div className="text-sm">{message}</div>
                  </div>
                </div>
                  </div>
                ))}
              </div>

                            {/* Controls */}
              <div className="flex justify-center gap-4 mb-4">
                <button 
                  onClick={() => {
                    setAiMessages([]);
                    setUserMessages([]);
                    setConversationMemory({
                      conversationId: 'demo_' + Date.now(),
                      bookingStage: 'initial',
                      customerName: '',
                      customerPhone: '',
                      preferredService: '',
                      preferredBarber: '',
                      preferredDate: '',
                      preferredTime: '',
                      conversationHistory: []
                    });
                  }}
                  className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                >
                  <FaTimes />
                  Clear Demo
                </button>
                <button 
                  onClick={handleDemoCustomerService}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                >
                  <FaPlay />
                  Start Demo
                </button>
              </div>

              {/* Demo Button */}
              <div className="mt-6 flex justify-center">
                  <button
                  onClick={handleDemoCustomerService}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 font-semibold flex items-center gap-3"
                >
                  <span className="text-xl">🎧</span>
                  <span>Start Customer Service Demo</span>
                  </button>
                </div>

                  </div>
                </div>
        </section>
      )}

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Everything You Need to Dominate Your Market</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 transform hover:scale-105">
              <FaBrain className="text-3xl text-orange-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">AI Voice Booking</h3>
              <p className="text-gray-400 text-sm">Natural conversation AI that books appointments 24/7. Never miss another call again.</p>
            </div>
            
            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 transform hover:scale-105">
              <FaChartLine className="text-3xl text-orange-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Smart Analytics</h3>
              <p className="text-gray-400 text-sm">AI-powered insights that predict trends and optimize your business automatically.</p>
          </div>
            
            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 transform hover:scale-105">
              <FaBell className="text-3xl text-orange-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Auto Reminders</h3>
              <p className="text-gray-400 text-sm">Automated appointment reminders reduce no-shows by 85% and increase rebooking rates.</p>
        </div>
            
            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 transform hover:scale-105">
              <FaUsers className="text-3xl text-orange-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Customer Management</h3>
              <p className="text-gray-400 text-sm">Complete customer profiles with preferences, history, and automated follow-ups.</p>
              </div>
            </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-900/20 to-red-900/20">
        <div className="max-w-7xl mx-auto">
          {/* Urgency Banner */}
          <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white text-center py-4 mb-8 rounded-lg">
                            <div className="text-xl font-bold">🔥 FLASH SALE: 50% OFF First Month + FREE Setup + 30-Day Money Back Guarantee</div>
            <div className="text-sm mt-1">⏰ Only 8 spots left at this price! Offer expires in {isClient ? `${formatNumber(countdown.hours)}:${formatNumber(countdown.minutes)}:${formatNumber(countdown.seconds)}` : '02:47:32'}!</div>
          </div>

          <h2 className="text-3xl font-bold text-white text-center mb-12">Choose Your Plan</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700/50 relative">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Starter</h3>
                <div className="text-gray-400 line-through mb-2">$199/month</div>
                <div className="text-3xl font-bold text-orange-400 mb-4">$99/month</div>
                <ul className="text-gray-300 text-sm space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-green-400" />
                    AI Voice Booking
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-green-400" />
                    Basic Analytics
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-green-400" />
                    Appointment Reminders
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-green-400" />
                    Customer Database
                  </li>
                </ul>
            <button 
                  onClick={() => window.open('https://calendly.com/auralixai/30min', '_blank')}
                  className="w-full bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
                  Get Started Now
            </button>
        </div>
      </div>

            {/* Professional Plan */}
            <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg p-8 border border-orange-500/50 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  MOST POPULAR
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Professional</h3>
                <div className="text-gray-400 line-through mb-2">$399/month</div>
                <div className="text-3xl font-bold text-orange-400 mb-4">$199/month</div>
                <ul className="text-gray-300 text-sm space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-green-400" />
                    Everything in Starter
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-green-400" />
                    Advanced AI Analytics
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-green-400" />
                    Inventory Management
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-green-400" />
                    Marketing Automation
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-green-400" />
                    Priority Support
                  </li>
                </ul>
                <button 
                  onClick={() => window.open('https://calendly.com/auralixai/30min', '_blank')}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Get Professional Now
                </button>
            </div>
          </div>

            {/* Enterprise Plan */}
            <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700/50 relative">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
                <div className="text-gray-400 line-through mb-2">$799/month</div>
                <div className="text-3xl font-bold text-orange-400 mb-4">$399/month</div>
                <ul className="text-gray-300 text-sm space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-green-400" />
                    Everything in Professional
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-green-400" />
                    Multi-location Support
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-green-400" />
                    Custom AI Training
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-green-400" />
                    Dedicated Account Manager
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-green-400" />
                    White-label Options
                  </li>
                </ul>
                <button 
                  onClick={() => window.open('https://calendly.com/auralixai/30min', '_blank')}
                  className="w-full bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Contact Sales
                </button>
                </div>
              </div>
            </div>

          {/* Risk-Free Guarantee */}
          <div className="mt-12 bg-gray-800/50 rounded-lg p-8 border border-gray-700/50 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">100% Risk-Free Guarantee</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center gap-3">
                <FaShieldAlt className="text-green-400 text-2xl" />
              <div>
                  <div className="text-white font-semibold">30-Day Money Back</div>
                  <div className="text-gray-400 text-sm">No questions asked</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <FaRocket className="text-blue-400 text-2xl" />
                <div>
                  <div className="text-white font-semibold">10-Minute Setup</div>
                  <div className="text-gray-400 text-sm">Get started instantly</div>
            </div>
          </div>
              <div className="flex items-center justify-center gap-3">
                <FaTrophy className="text-orange-400 text-2xl" />
              <div>
                  <div className="text-white font-semibold">Proven Results</div>
                  <div className="text-gray-400 text-sm">98% success rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Irresistible CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Countdown Timer */}
          <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">⏰ FLASH SALE ENDS IN:</h3>
                         <div className="flex justify-center gap-4 text-4xl font-bold text-white">
               <div className="bg-black/30 rounded-lg p-4">
                 <div>{isClient ? formatNumber(countdown.hours) : '02'}</div>
                 <div className="text-sm">Hours</div>
            </div>
               <div className="bg-black/30 rounded-lg p-4">
                 <div>{isClient ? formatNumber(countdown.minutes) : '47'}</div>
                 <div className="text-sm">Minutes</div>
            </div>
               <div className="bg-black/30 rounded-lg p-4">
                 <div>{isClient ? formatNumber(countdown.seconds) : '32'}</div>
                 <div className="text-sm">Seconds</div>
            </div>
          </div>
        </div>

          <h2 className="text-4xl font-bold text-white mb-6">Don't Let Your Competition Beat You</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-red-500/20 rounded-lg p-6 border border-red-500/30">
              <h3 className="text-xl font-bold text-red-400 mb-4">What Happens If You Wait</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Your competition gets the 50% discount</li>
                <li>• They start saving time and money before you</li>
                <li>• They capture your customers with 24/7 booking</li>
                <li>• You fall further behind every day</li>
              </ul>
            </div>
            <div className="bg-green-500/20 rounded-lg p-6 border border-green-500/30">
              <h3 className="text-xl font-bold text-green-400 mb-4">What Happens If You Act Now</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• You lock in 50% OFF first month</li>
                <li>• You start saving time and money immediately</li>
                <li>• You dominate your market with AI advantage</li>
                <li>• You grow while others struggle</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button 
              onClick={() => window.open('https://calendly.com/auralixai/30min', '_blank')}
              className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-8 py-4 rounded-lg text-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <FaFire />
                              CLAIM 50% OFF FIRST MONTH
          </button>
            <button 
              onClick={startAIVoiceAssistant}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg text-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <FaMicrophone />
              Try AI Live Demo
          </button>
        </div>

          <div className="text-gray-400 text-sm">
            <p>🚀 First-to-Market Technology • 99.9% Uptime • 10-Minute Setup • 30-Day Money Back</p>
      </div>
    </div>
      </section>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-lg p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-white">Get Started Today</h3>
              <button 
                onClick={() => setShowContactForm(false)}
                className="text-gray-400 hover:text-white text-2xl"
              >
                ×
              </button>
            </div>
            
            <form onSubmit={(e) => {
              e.preventDefault();
              // Here you would typically send the form data to your backend
              alert('Thank you! We\'ll contact you within 24 hours to get you started.');
              setShowContactForm(false);
            }}>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={contactForm.name}
                  onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                  className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-orange-500 focus:outline-none"
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={contactForm.email}
                  onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                  className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-orange-500 focus:outline-none"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={contactForm.phone}
                  onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                  className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-orange-500 focus:outline-none"
                  required
                />
                <input
                  type="text"
                  placeholder="Barber Shop Name"
                  value={contactForm.shopName}
                  onChange={(e) => setContactForm({...contactForm, shopName: e.target.value})}
                  className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-orange-500 focus:outline-none"
                  required
                />
                <textarea
                  placeholder="Tell us about your business (optional)"
                  value={contactForm.message}
                  onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                  className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-orange-500 focus:outline-none h-24 resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Get My 50% OFF First Month
                </button>
              </div>
            </form>
            
            <div className="text-center mt-4">
              <p className="text-gray-400 text-sm">
                🔒 Your information is secure • 30-day money-back guarantee
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-black/20 border-t border-gray-700/50 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2024 BarberTech Pro. All rights reserved. | AI-Powered Barber Shop Management</p>
        </div>
      </footer>
    </div>
  );
}
