'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  FaCalendar, FaClock, FaUser, FaPhone, FaEnvelope, FaMapMarkerAlt,
  FaStar, FaHeart, FaCheck, FaArrowRight, FaChartLine, FaUsers,
  FaDollarSign, FaCog, FaBrain, FaRobot, FaBell, FaShoppingCart,
  FaInstagram, FaFacebook, FaGoogle, FaYelp, FaWhatsapp, FaMicrophone,
  FaComments, FaTimes, FaPlay, FaPause, FaVolumeUp, FaVolumeMute
} from 'react-icons/fa';
import { MdDashboard, MdAnalytics, MdInventory } from 'react-icons/md';
import { BiTrendingUp, BiTrendingDown } from 'react-icons/bi';

interface Service {
  id: string;
  name: string;
  description: string;
  duration: number;
  price: number;
  popular?: boolean;
  category: string;
}

interface Barber {
  id: string;
  name: string;
  specialty: string;
  experience: string;
  rating: number;
  image: string;
  available: boolean;
  nextAvailable: string;
}

interface Appointment {
  id: string;
  customerName: string;
  service: string;
  barber: string;
  date: string;
  time: string;
  status: 'confirmed' | 'pending' | 'completed';
}

interface BusinessMetrics {
  todayRevenue: number;
  todayAppointments: number;
  totalCustomers: number;
  averageRating: number;
  popularService: string;
  monthlyGrowth: number;
  customerRetention: number;
  peakHours: string[];
}

interface AIChat {
  id: string;
  message: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  type: 'text' | 'voice' | 'booking';
}

export default function BarberTechProDemo() {
  const [activeTab, setActiveTab] = useState<'website' | 'dashboard'>('website');
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedBarber, setSelectedBarber] = useState<Barber | null>(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    email: ''
  });
  const [isBooking, setIsBooking] = useState(false);
  const [bookingStep, setBookingStep] = useState(1);
  const [showAIFeatures, setShowAIFeatures] = useState(false);
  const [showAIChat, setShowAIChat] = useState(false);
  const [aiChatMessages, setAiChatMessages] = useState<AIChat[]>([]);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentRevenue, setCurrentRevenue] = useState(0);
  const [currentAppointments, setCurrentAppointments] = useState(0);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);

  const businessMetrics: BusinessMetrics = {
    todayRevenue: 485,
    todayAppointments: 12,
    totalCustomers: 1247,
    averageRating: 4.8,
    popularService: 'Classic Haircut',
    monthlyGrowth: 23,
    customerRetention: 85,
    peakHours: ['2:00 PM', '3:00 PM', '4:00 PM']
  };

  const services: Service[] = [
    {
      id: '1',
      name: 'Classic Haircut',
      description: 'Professional haircut with wash and style',
      duration: 30,
      price: 25,
      popular: true,
      category: 'haircut'
    },
    {
      id: '2',
      name: 'Beard Trim & Shape',
      description: 'Precise beard trimming and shaping',
      duration: 20,
      price: 15,
      category: 'beard'
    },
    {
      id: '3',
      name: 'Haircut & Beard Combo',
      description: 'Complete grooming package',
      duration: 45,
      price: 35,
      popular: true,
      category: 'combo'
    },
    {
      id: '4',
      name: 'Kids Haircut',
      description: 'Specialized cuts for children',
      duration: 25,
      price: 18,
      category: 'kids'
    },
    {
      id: '5',
      name: 'Senior Haircut',
      description: 'Gentle cuts for seniors',
      duration: 30,
      price: 20,
      category: 'senior'
    },
    {
      id: '6',
      name: 'Hair Styling',
      description: 'Special occasion styling',
      duration: 40,
      price: 30,
      category: 'styling'
    }
  ];

  const barbers: Barber[] = [
    {
      id: '1',
      name: 'Mike Johnson',
      specialty: 'Classic Cuts & Fades',
      experience: '8 years',
      rating: 4.9,
      image: '/api/placeholder/150/150',
      available: true,
      nextAvailable: '2:00 PM'
    },
    {
      id: '2',
      name: 'Alex Rodriguez',
      specialty: 'Modern Styles & Beard Work',
      experience: '5 years',
      rating: 4.8,
      image: '/api/placeholder/150/150',
      available: true,
      nextAvailable: '1:30 PM'
    },
    {
      id: '3',
      name: 'David Chen',
      specialty: 'Kids & Senior Cuts',
      experience: '12 years',
      rating: 4.9,
      image: '/api/placeholder/150/150',
      available: true,
      nextAvailable: '3:00 PM'
    }
  ];

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM'
  ];

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRevenue(prev => prev + Math.random() * 5);
      setCurrentAppointments(prev => prev + (Math.random() > 0.8 ? 1 : 0));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Auto-scroll chat to bottom
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [aiChatMessages]);

  const handleServiceSelect = (service: Service) => {
    setSelectedService(service);
    setBookingStep(2);
    addAIMessage(`I'd like to book a ${service.name}`, 'user');
  };

  const handleBarberSelect = (barber: Barber) => {
    setSelectedBarber(barber);
    setBookingStep(3);
    addAIMessage(`Great choice! ${barber.name} is available at ${barber.nextAvailable}. When would you like your appointment?`, 'ai');
  };

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
    setBookingStep(4);
    addAIMessage(`Perfect! I can see ${date} has several available slots. What time works best for you?`, 'ai');
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setBookingStep(5);
    addAIMessage(`Excellent! ${time} is confirmed. I just need your contact information to complete the booking.`, 'ai');
  };

  const handleBookingSubmit = () => {
    setIsBooking(true);
    addAIMessage(`Booking confirmed! You'll receive a confirmation SMS and email. See you at ${selectedTime} on ${selectedDate}!`, 'ai');
    
    setTimeout(() => {
      setIsBooking(false);
      setBookingStep(6);
      setTimeout(() => setShowAIFeatures(true), 2000);
    }, 2000);
  };

  const addAIMessage = (message: string, sender: 'user' | 'ai') => {
    const newMessage: AIChat = {
      id: Date.now().toString(),
      message,
      sender,
      timestamp: new Date(),
      type: 'text'
    };
    setAiChatMessages(prev => [...prev, newMessage]);
  };

  const sendToOpenAI = async (message: string) => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message })
      });
      const data = await response.json();
      return data.response;
    } catch (error) {
      console.error('Chat API Error:', error);
      return "I'm having trouble connecting right now. Please try again or call us at (902) 555-0123.";
    } finally {
      setIsLoading(false);
    }
  };

  const startVoiceBooking = () => {
    setIsListening(true);
    addAIMessage("🎤 Listening... Say 'book appointment' to start", 'ai');
    
    setTimeout(() => {
      setIsListening(false);
      addAIMessage("I heard you want to book an appointment! Let me help you with that.", 'ai');
      setShowBookingModal(true);
    }, 3000);
  };

  const handleBookingStart = () => {
    setShowBookingModal(true);
    setBookingStep(1);
  };

  const AIChatAssistant = () => (
    <div className={`fixed bottom-4 left-4 z-50 transition-all duration-300 ${showAIChat ? 'w-80 h-96' : 'w-16 h-16'}`}>
      {showAIChat ? (
        <div className="bg-gray-800 rounded-lg shadow-2xl border border-gray-700 h-full flex flex-col">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-orange-500 to-red-600 p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FaRobot className="text-white" />
              <span className="text-white font-semibold">AI Assistant</span>
            </div>
            <button 
              onClick={() => setShowAIChat(false)}
              className="text-white hover:text-gray-200"
            >
              <FaTimes />
            </button>
          </div>

          {/* Chat Messages */}
          <div ref={chatRef} className="flex-1 p-4 overflow-y-auto space-y-3">
            {aiChatMessages.length === 0 && (
              <div className="flex justify-start">
                <div className="bg-gray-700 text-gray-200 max-w-xs p-3 rounded-lg">
                  <p>Hi! I'm your AI assistant. How can I help you today? You can ask about our services, book an appointment, or get information about our barbers.</p>
                </div>
              </div>
            )}
            {aiChatMessages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs p-3 rounded-lg ${
                  msg.sender === 'user' 
                    ? 'bg-orange-500 text-white' 
                    : 'bg-gray-700 text-gray-200'
                }`}>
                  {msg.message}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-700 text-gray-200 max-w-xs p-3 rounded-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Chat Input */}
          <div className="p-4 border-t border-gray-700">
            <div className="flex gap-2">
              <button
                onClick={startVoiceBooking}
                className={`p-2 rounded-lg transition ${
                  isListening ? 'bg-red-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                <FaMicrophone />
              </button>
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 bg-gray-700 text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                disabled={isLoading}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && e.currentTarget.value.trim()) {
                    const userMessage = e.currentTarget.value;
                    addAIMessage(userMessage, 'user');
                    e.currentTarget.value = '';
                    
                    // Send to OpenAI
                    sendToOpenAI(userMessage).then(aiResponse => {
                      addAIMessage(aiResponse, 'ai');
                    });
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && e.currentTarget.value.trim()) {
                    const userMessage = e.currentTarget.value;
                    addAIMessage(userMessage, 'user');
                    e.currentTarget.value = '';
                    
                    // Send to OpenAI
                    sendToOpenAI(userMessage).then(aiResponse => {
                      addAIMessage(aiResponse, 'ai');
                    });
                  }
                }}
              />
              <button
                onClick={() => {
                  const input = document.querySelector('input[placeholder="Type your message..."]') as HTMLInputElement;
                  if (input && input.value.trim()) {
                    const userMessage = input.value;
                    addAIMessage(userMessage, 'user');
                    input.value = '';
                    
                    // Send to OpenAI
                    sendToOpenAI(userMessage).then(aiResponse => {
                      addAIMessage(aiResponse, 'ai');
                    });
                  }
                }}
                disabled={isLoading}
                className="p-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600 transition disabled:opacity-50"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setShowAIChat(true)}
          className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
        >
          <FaRobot className="text-white text-xl" />
        </button>
      )}
    </div>
  );

  const WebsiteView = () => (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-sm border-b border-gray-700/50 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="text-2xl">💈</div>
              <div>
                <h1 className="text-xl font-bold text-white">Halifax Barber Co.</h1>
                <p className="text-gray-400 text-sm">Professional Grooming Since 2010</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#services" className="text-gray-300 hover:text-white transition">Services</a>
              <a href="#barbers" className="text-gray-300 hover:text-white transition">Barbers</a>
              <a href="#gallery" className="text-gray-300 hover:text-white transition">Gallery</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition">Contact</a>
              <button 
                onClick={() => setActiveTab('dashboard')}
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition"
              >
                Business Dashboard
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Professional Cuts, 
            <span className="text-orange-400 animate-pulse"> Modern Style</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in-delay">
            Experience the finest barbering in Halifax. Book your appointment online and enjoy our AI-powered scheduling system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
            <button 
              onClick={handleBookingStart}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
            >
              <FaCalendar className="animate-bounce" />
              Book Appointment
            </button>
            <button className="border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
              View Services
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div 
                key={service.id}
                className={`bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border transition-all cursor-pointer hover:scale-105 ${
                  service.popular ? 'border-orange-500/50' : 'border-gray-700/50'
                }`}
                onClick={() => handleServiceSelect(service)}
              >
                {service.popular && (
                  <div className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full inline-block mb-3">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-orange-400 font-bold">${service.price}</span>
                  <span className="text-gray-500 text-sm">{service.duration} min</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Barbers Section */}
      <section id="barbers" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Barbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {barbers.map((barber) => (
              <div 
                key={barber.id}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 text-center border border-gray-700/50 hover:border-orange-500/50 transition cursor-pointer"
                onClick={() => handleBarberSelect(barber)}
              >
                <div className="w-24 h-24 bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <FaUser className="text-3xl text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{barber.name}</h3>
                <p className="text-orange-400 mb-2">{barber.specialty}</p>
                <p className="text-gray-400 text-sm mb-3">{barber.experience} experience</p>
                <div className="flex items-center justify-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={`text-sm ${i < Math.floor(barber.rating) ? 'text-yellow-400' : 'text-gray-600'}`} />
                  ))}
                  <span className="text-gray-400 text-sm ml-2">{barber.rating}</span>
                </div>
                <div className={`inline-block px-3 py-1 rounded-full text-xs ${
                  barber.available ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                }`}>
                  {barber.available ? `Available at ${barber.nextAvailable}` : 'Busy'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      {showAIFeatures && (
        <section className="py-16 px-4 bg-gradient-to-r from-orange-900/20 to-red-900/20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              🤖 AI-Powered Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50">
                <FaBrain className="text-3xl text-orange-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Smart Scheduling</h3>
                <p className="text-gray-400 text-sm">AI suggests optimal appointment times based on demand patterns</p>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50">
                <FaRobot className="text-3xl text-orange-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Voice Booking</h3>
                <p className="text-gray-400 text-sm">Call and book appointments using AI voice assistant</p>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50">
                <FaBell className="text-3xl text-orange-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Smart Reminders</h3>
                <p className="text-gray-400 text-sm">Automated appointment reminders and rebooking suggestions</p>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50">
                <FaChartLine className="text-3xl text-orange-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Customer Insights</h3>
                <p className="text-gray-400 text-sm">AI analyzes customer preferences and behavior patterns</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Visit Us</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-orange-400" />
                  <span className="text-gray-300">123 Spring Garden Road, Halifax, NS</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaPhone className="text-orange-400" />
                  <span className="text-gray-300">(902) 555-0123</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-orange-400" />
                  <span className="text-gray-300">hello@halifaxbarberco.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaClock className="text-orange-400" />
                  <span className="text-gray-300">Mon-Sat: 9AM-6PM, Sun: Closed</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-orange-400 transition">
                  <FaInstagram className="text-2xl" />
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition">
                  <FaFacebook className="text-2xl" />
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition">
                  <FaGoogle className="text-2xl" />
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition">
                  <FaYelp className="text-2xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Chat Assistant */}
      <AIChatAssistant />

      {/* Booking Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-lg shadow-2xl border border-gray-700 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-white">Book Your Appointment</h3>
                <button 
                  onClick={() => setShowBookingModal(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <FaTimes />
                </button>
              </div>

              {bookingStep === 1 && (
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white mb-4">Select Service</h4>
                  <div className="space-y-3">
                    {services.map((service) => (
                      <div 
                        key={service.id}
                        className="bg-gray-700 rounded-lg p-4 cursor-pointer hover:bg-gray-600 transition border border-gray-600"
                        onClick={() => {
                          setSelectedService(service);
                          setBookingStep(2);
                        }}
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <h5 className="text-white font-semibold">{service.name}</h5>
                            <p className="text-gray-400 text-sm">{service.description}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-orange-400 font-bold">${service.price}</p>
                            <p className="text-gray-400 text-xs">{service.duration} min</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {bookingStep === 2 && (
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white mb-4">Select Barber</h4>
                  <div className="space-y-3">
                    {barbers.map((barber) => (
                      <div 
                        key={barber.id}
                        className="bg-gray-700 rounded-lg p-4 cursor-pointer hover:bg-gray-600 transition border border-gray-600"
                        onClick={() => {
                          setSelectedBarber(barber);
                          setBookingStep(3);
                        }}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center">
                            <FaUser className="text-gray-400" />
                          </div>
                          <div className="flex-1">
                            <h5 className="text-white font-semibold">{barber.name}</h5>
                            <p className="text-orange-400 text-sm">{barber.specialty}</p>
                            <p className="text-gray-400 text-xs">{barber.experience} experience</p>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center gap-1 mb-1">
                              {[...Array(5)].map((_, i) => (
                                <FaStar key={i} className={`text-xs ${i < Math.floor(barber.rating) ? 'text-yellow-400' : 'text-gray-600'}`} />
                              ))}
                            </div>
                            <p className="text-green-400 text-xs">Available</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {bookingStep === 3 && (
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white mb-4">Select Date & Time</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {['Today', 'Tomorrow', 'Wednesday', 'Thursday', 'Friday'].map((day) => (
                      <button
                        key={day}
                        onClick={() => {
                          setSelectedDate(day);
                          setBookingStep(4);
                        }}
                        className="bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-lg transition"
                      >
                        {day}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {bookingStep === 4 && (
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white mb-4">Select Time</h4>
                  <div className="grid grid-cols-3 gap-2">
                    {timeSlots.slice(0, 12).map((time) => (
                      <button
                        key={time}
                        onClick={() => {
                          setSelectedTime(time);
                          setBookingStep(5);
                        }}
                        className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded text-sm transition"
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {bookingStep === 5 && (
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white mb-4">Your Information</h4>
                  <div className="space-y-3">
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={customerInfo.name}
                      onChange={(e) => setCustomerInfo(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full bg-gray-700 text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={customerInfo.phone}
                      onChange={(e) => setCustomerInfo(prev => ({ ...prev, phone: e.target.value }))}
                      className="w-full bg-gray-700 text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    <input
                      type="email"
                      placeholder="Email (optional)"
                      value={customerInfo.email}
                      onChange={(e) => setCustomerInfo(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full bg-gray-700 text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  <button
                    onClick={() => {
                      setBookingStep(6);
                      setTimeout(() => {
                        setShowBookingModal(false);
                        addAIMessage(`Booking confirmed! You'll receive a confirmation SMS and email. See you at ${selectedTime} on ${selectedDate}!`, 'ai');
                      }, 2000);
                    }}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition"
                  >
                    Confirm Booking
                  </button>
                </div>
              )}

              {bookingStep === 6 && (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaCheck className="text-white text-2xl" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Booking Confirmed!</h4>
                  <p className="text-gray-400">You'll receive a confirmation shortly.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const DashboardView = () => (
    <div className="min-h-screen bg-gray-900">
      {/* Dashboard Header */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="text-2xl">💈</div>
              <div>
                <h1 className="text-xl font-bold text-white">BarberTech Pro Dashboard</h1>
                <p className="text-gray-400 text-sm">Halifax Barber Co. - Business Analytics</p>
              </div>
            </div>
            <button 
              onClick={() => setActiveTab('website')}
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition"
            >
              View Website
            </button>
          </div>
        </div>
      </div>

      {/* Metrics Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Today's Revenue</p>
                <p className="text-2xl font-bold text-white">${Math.floor(businessMetrics.todayRevenue + currentRevenue)}</p>
                <div className="flex items-center gap-1 mt-1">
                  <BiTrendingUp className="text-green-400 text-sm" />
                  <span className="text-green-400 text-xs">+{businessMetrics.monthlyGrowth}%</span>
                </div>
              </div>
              <FaDollarSign className="text-3xl text-green-400" />
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Today's Appointments</p>
                <p className="text-2xl font-bold text-white">{businessMetrics.todayAppointments + currentAppointments}</p>
                <div className="flex items-center gap-1 mt-1">
                  <BiTrendingUp className="text-blue-400 text-sm" />
                  <span className="text-blue-400 text-xs">+3 this hour</span>
                </div>
              </div>
              <FaCalendar className="text-3xl text-blue-400" />
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total Customers</p>
                <p className="text-2xl font-bold text-white">{businessMetrics.totalCustomers}</p>
                <div className="flex items-center gap-1 mt-1">
                  <BiTrendingUp className="text-purple-400 text-sm" />
                  <span className="text-purple-400 text-xs">+{businessMetrics.customerRetention}% retention</span>
                </div>
              </div>
              <FaUsers className="text-3xl text-purple-400" />
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Average Rating</p>
                <p className="text-2xl font-bold text-white">{businessMetrics.averageRating}</p>
                <div className="flex items-center gap-1 mt-1">
                  <FaStar className="text-yellow-400 text-sm" />
                  <span className="text-yellow-400 text-xs">4.9 this week</span>
                </div>
              </div>
              <FaStar className="text-3xl text-yellow-400" />
            </div>
          </div>
        </div>

        {/* AI Insights */}
        <div className="bg-gradient-to-r from-orange-900/20 to-red-900/20 rounded-lg p-6 mb-8 border border-orange-500/30">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <FaBrain className="text-orange-400 animate-pulse" />
            AI Business Insights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105">
              <h4 className="text-orange-400 font-semibold mb-2">Peak Hours</h4>
              <p className="text-gray-300 text-sm">AI detected peak demand between {businessMetrics.peakHours.join(', ')}. Consider adding staff during these hours.</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105">
              <h4 className="text-orange-400 font-semibold mb-2">Customer Retention</h4>
              <p className="text-gray-300 text-sm">{businessMetrics.customerRetention}% of customers return within 3 weeks. AI suggests personalized follow-up campaigns.</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105">
              <h4 className="text-orange-400 font-semibold mb-2">Inventory Alert</h4>
              <p className="text-gray-300 text-sm">Beard oil running low. AI recommends reordering 15 units to maintain stock.</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <button className="bg-gray-800 hover:bg-gray-700 rounded-lg p-6 border border-gray-700 transition text-left">
            <MdDashboard className="text-3xl text-blue-400 mb-3" />
            <h3 className="text-white font-semibold mb-2">Manage Appointments</h3>
            <p className="text-gray-400 text-sm">View and manage today's schedule</p>
          </button>
          <button className="bg-gray-800 hover:bg-gray-700 rounded-lg p-6 border border-gray-700 transition text-left">
            <MdAnalytics className="text-3xl text-green-400 mb-3" />
            <h3 className="text-white font-semibold mb-2">View Analytics</h3>
            <p className="text-gray-400 text-sm">Detailed business performance reports</p>
          </button>
          <button className="bg-gray-800 hover:bg-gray-700 rounded-lg p-6 border border-gray-700 transition text-left">
            <MdInventory className="text-3xl text-purple-400 mb-3" />
            <h3 className="text-white font-semibold mb-2">Inventory Management</h3>
            <p className="text-gray-400 text-sm">Track products and supplies</p>
          </button>
          <button className="bg-gray-800 hover:bg-gray-700 rounded-lg p-6 border border-gray-700 transition text-left">
            <FaBullhorn className="text-3xl text-orange-400 mb-3" />
            <h3 className="text-white font-semibold mb-2">Marketing Tools</h3>
            <p className="text-gray-400 text-sm">Send promotions and campaigns</p>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      {activeTab === 'website' ? <WebsiteView /> : <DashboardView />}
    </div>
  );
}
