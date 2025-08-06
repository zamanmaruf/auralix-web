'use client';

import { useState, useEffect, useRef } from 'react';
import { FaMicrophone, FaMicrophoneSlash, FaBrain, FaCalendar, FaCreditCard, FaCheck, FaTimes, FaRocket, FaStar, FaGem, FaPlay, FaPause, FaArrowRight, FaUser, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import { MdEmojiEmotions, MdPsychology, MdTrendingUp, MdSecurity, MdTouchApp, MdInfo, MdPayment, MdSchedule } from 'react-icons/md';
import { BiBrain, BiChip, BiWifi, BiRadar } from 'react-icons/bi';
import { GiBrain, GiCrystalBall, GiPalmTree } from 'react-icons/gi';

interface Appointment {
  id: string;
  service: string;
  date: string;
  time: string;
  duration: number;
  price: number;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  customerName: string;
  customerEmail: string;
  customerPhone: string;
}

interface Service {
  id: string;
  name: string;
  description: string;
  duration: number;
  price: number;
  category: string;
  available: boolean;
}

interface BookingStep {
  id: number;
  title: string;
  description: string;
  status: 'pending' | 'active' | 'completed';
  icon: string;
}

export default function AIRevolutionDemo() {
  const [isListening, setIsListening] = useState(false);
  const [voiceCommand, setVoiceCommand] = useState('');
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [aiInsights, setAiInsights] = useState<string[]>([]);
  const [quantumState, setQuantumState] = useState(0);
  const [aiConsciousness, setAiConsciousness] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const services: Service[] = [
    {
      id: '1',
      name: 'Quantum Whitening',
      description: 'Advanced AI-powered teeth whitening with quantum technology',
      duration: 60,
      price: 299,
      category: 'cosmetic',
      available: true
    },
    {
      id: '2',
      name: 'AI-Powered Cleaning',
      description: 'Intelligent cleaning with predictive health analysis',
      duration: 45,
      price: 129,
      category: 'preventive',
      available: true
    },
    {
      id: '3',
      name: 'Neural Enhancement Checkup',
      description: 'Comprehensive examination with AI diagnostics',
      duration: 30,
      price: 199,
      category: 'diagnostic',
      available: true
    },
    {
      id: '4',
      name: 'Predictive Health Scan',
      description: 'Future health prediction using quantum algorithms',
      duration: 90,
      price: 499,
      category: 'advanced',
      available: true
    }
  ];

  const bookingSteps: BookingStep[] = [
    {
      id: 1,
      title: 'Voice Recognition',
      description: 'Speak your appointment request',
      status: 'active',
      icon: '🎤'
    },
    {
      id: 2,
      title: 'Service Selection',
      description: 'Choose your AI-powered service',
      status: 'pending',
      icon: '🧠'
    },
    {
      id: 3,
      title: 'Schedule Optimization',
      description: 'AI finds the perfect time for you',
      status: 'pending',
      icon: '📅'
    },
    {
      id: 4,
      title: 'Customer Information',
      description: 'Quick and secure data collection',
      status: 'pending',
      icon: '👤'
    },
    {
      id: 5,
      title: 'Quantum Confirmation',
      description: 'AI confirms and optimizes your booking',
      status: 'pending',
      icon: '✅'
    }
  ];

  // Voice Recognition
  useEffect(() => {
    if (isListening) {
      const recognition = new (window as any).webkitSpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = 'en-US';

      recognition.onresult = (event: any) => {
        const transcript = Array.from(event.results)
          .map((result: any) => result[0])
          .map(result => result.transcript)
          .join('');
        
        setVoiceCommand(transcript);
        processVoiceCommand(transcript);
      };

      recognition.start();
      return () => recognition.stop();
    }
  }, [isListening]);

  // Quantum State Animation
  useEffect(() => {
    const interval = setInterval(() => {
      setQuantumState(prev => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // AI Consciousness
  useEffect(() => {
    const interval = setInterval(() => {
      setAiConsciousness(prev => Math.min(100, prev + Math.random() * 0.1));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Holographic Background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || typeof window === 'undefined') return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size based on window dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const time = Date.now() * 0.001;
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      for (let i = 0; i < 50; i++) {
        const angle = (i / 50) * Math.PI * 2 + time;
        const radius = 100 + Math.sin(time * 2 + i) * 20;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        
        const alpha = 0.5 + 0.5 * Math.sin(time * 3 + i);
        ctx.fillStyle = `rgba(0, 255, 255, ${alpha})`;
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fill();
      }
      
      requestAnimationFrame(animate);
    };
    
    animate();
  }, []);

  const processVoiceCommand = (command: string) => {
    const lowerCommand = command.toLowerCase();
    
    if (lowerCommand.includes('whitening') || lowerCommand.includes('white')) {
      setSelectedService(services[0]);
      setCurrentStep(2);
      setAiInsights(prev => [...prev, '🎯 AI detected: Quantum Whitening service selected']);
    } else if (lowerCommand.includes('cleaning') || lowerCommand.includes('clean')) {
      setSelectedService(services[1]);
      setCurrentStep(2);
      setAiInsights(prev => [...prev, '🎯 AI detected: AI-Powered Cleaning service selected']);
    } else if (lowerCommand.includes('checkup') || lowerCommand.includes('exam')) {
      setSelectedService(services[2]);
      setCurrentStep(2);
      setAiInsights(prev => [...prev, '🎯 AI detected: Neural Enhancement Checkup selected']);
    } else if (lowerCommand.includes('scan') || lowerCommand.includes('predictive')) {
      setSelectedService(services[3]);
      setCurrentStep(2);
      setAiInsights(prev => [...prev, '🎯 AI detected: Predictive Health Scan selected']);
    } else if (lowerCommand.includes('book') || lowerCommand.includes('appointment')) {
      setAiInsights(prev => [...prev, '🎯 AI detected booking intent - optimizing schedule...']);
    }
  };

  const toggleVoiceRecognition = () => {
    setIsListening(!isListening);
    if (!isListening) {
      setAiInsights(prev => [...prev, '🎤 Voice recognition activated - AI is listening...']);
    }
  };

  const selectService = (service: Service) => {
    setSelectedService(service);
    setCurrentStep(3);
    setAiInsights(prev => [...prev, `🧠 Service selected: ${service.name} - AI optimizing schedule...`]);
  };

  const selectDateTime = (date: string, time: string) => {
    setSelectedDate(date);
    setSelectedTime(time);
    setCurrentStep(4);
    setAiInsights(prev => [...prev, `📅 Appointment scheduled: ${date} at ${time}`]);
  };

  const submitCustomerInfo = () => {
    setCurrentStep(5);
    setAiInsights(prev => [...prev, '👤 Customer information collected - AI processing...']);
    processBooking();
  };

  const processBooking = async () => {
    setIsProcessing(true);
    
    // Simulate AI processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const newAppointment: Appointment = {
      id: Date.now().toString(),
      service: selectedService!.name,
      date: selectedDate,
      time: selectedTime,
      duration: selectedService!.duration,
      price: selectedService!.price,
      status: 'confirmed',
      customerName: customerInfo.name,
      customerEmail: customerInfo.email,
      customerPhone: customerInfo.phone
    };
    
    setAppointments(prev => [...prev, newAppointment]);
    setShowConfirmation(true);
    setIsProcessing(false);
    setAiInsights(prev => [...prev, '✅ Quantum AI confirmed your appointment!']);
  };

  const generateAvailableSlots = () => {
    const slots = [];
    const today = new Date();
    
    for (let i = 1; i <= 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      const times = ['9:00 AM', '10:30 AM', '2:00 PM', '3:30 PM', '5:00 PM'];
      
      times.forEach(time => {
        slots.push({
          date: date.toISOString().split('T')[0],
          time,
          available: Math.random() > 0.3
        });
      });
    }
    
    return slots;
  };

  const availableSlots = generateAvailableSlots();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 text-white p-8 relative overflow-hidden">
      
      {/* Holographic Background */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-30"
        width={typeof window !== 'undefined' ? window.innerWidth : 1200}
        height={typeof window !== 'undefined' ? window.innerHeight : 800}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent mb-8 animate-pulse">
            🚀 AI Revolution
          </h1>
          <p className="text-2xl md:text-3xl mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            End-to-End AI Booking System
          </p>
          
          {isListening && (
            <div className="bg-purple-900/50 p-4 rounded-2xl mb-6 border border-cyan-400 animate-pulse">
              <p className="text-lg text-cyan-300">🎤 Listening: "{voiceCommand}"</p>
            </div>
          )}
        </div>

        {/* Booking Progress */}
        <div className="bg-black/30 p-6 rounded-2xl border border-cyan-400/30 backdrop-blur-sm mb-8">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">AI-Powered Booking Progress</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {bookingSteps.map((step) => (
              <div
                key={step.id}
                className={`p-4 rounded-xl border transition-all duration-300 ${
                  step.id === currentStep
                    ? 'bg-gradient-to-br from-cyan-900/50 to-blue-900/50 border-cyan-400/50 scale-105'
                    : step.id < currentStep
                    ? 'bg-gradient-to-br from-green-900/30 to-blue-900/30 border-green-400/30'
                    : 'bg-gradient-to-br from-gray-900/30 to-gray-800/30 border-gray-400/20'
                }`}
              >
                <div className="text-center">
                  <div className="text-2xl mb-2">{step.icon}</div>
                  <h3 className="font-bold text-white text-sm">{step.title}</h3>
                  <p className="text-gray-300 text-xs mt-1">{step.description}</p>
                  {step.id === currentStep && (
                    <div className="flex items-center justify-center gap-1 text-cyan-400 text-xs mt-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                      Active
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Booking Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Panel - Booking Steps */}
          <div className="space-y-6">
            
            {/* Step 1: Voice Recognition */}
            {currentStep === 1 && (
              <div className="bg-black/30 p-6 rounded-2xl border border-cyan-400/30">
                <h3 className="text-xl font-bold text-cyan-400 mb-4">🎤 Voice Recognition</h3>
                <p className="text-gray-300 mb-4">Speak your appointment request. Try saying:</p>
                <div className="space-y-2 mb-6">
                  <div className="bg-purple-900/30 p-3 rounded-lg">
                    <p className="text-cyan-300">"I want quantum whitening"</p>
                  </div>
                  <div className="bg-purple-900/30 p-3 rounded-lg">
                    <p className="text-cyan-300">"Book me a cleaning appointment"</p>
                  </div>
                  <div className="bg-purple-900/30 p-3 rounded-lg">
                    <p className="text-cyan-300">"I need a checkup"</p>
                  </div>
                </div>
                <button
                  onClick={toggleVoiceRecognition}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                    isListening 
                      ? 'bg-red-600 hover:bg-red-500 text-white' 
                      : 'bg-green-600 hover:bg-green-500 text-white'
                  }`}
                >
                  {isListening ? <FaMicrophoneSlash /> : <FaMicrophone />}
                  {isListening ? 'Stop Listening' : 'Start Voice Recognition'}
                </button>
              </div>
            )}

            {/* Step 2: Service Selection */}
            {currentStep === 2 && (
              <div className="bg-black/30 p-6 rounded-2xl border border-cyan-400/30">
                <h3 className="text-xl font-bold text-cyan-400 mb-4">🧠 AI Services</h3>
                <div className="grid grid-cols-1 gap-4">
                  {services.map((service) => (
                    <div
                      key={service.id}
                      onClick={() => selectService(service)}
                      className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 p-4 rounded-xl border border-purple-400/30 cursor-pointer hover:scale-105 transition-all duration-300"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-white">{service.name}</h4>
                        <span className="text-cyan-400 font-bold">${service.price}</span>
                      </div>
                      <p className="text-gray-300 text-sm mb-2">{service.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-xs">{service.duration} min</span>
                        <span className="text-green-400 text-xs">Available</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Schedule Selection */}
            {currentStep === 3 && (
              <div className="bg-black/30 p-6 rounded-2xl border border-cyan-400/30">
                <h3 className="text-xl font-bold text-cyan-400 mb-4">📅 AI-Optimized Schedule</h3>
                <div className="grid grid-cols-2 gap-4">
                  {availableSlots.slice(0, 8).map((slot, index) => (
                    <div
                      key={index}
                      onClick={() => slot.available && selectDateTime(slot.date, slot.time)}
                      className={`p-3 rounded-lg border cursor-pointer transition-all duration-300 ${
                        slot.available
                          ? 'bg-green-900/30 border-green-400/30 hover:bg-green-900/50'
                          : 'bg-gray-900/30 border-gray-400/20 opacity-50'
                      }`}
                    >
                      <div className="text-center">
                        <p className="text-white font-bold text-sm">{slot.time}</p>
                        <p className="text-gray-400 text-xs">{slot.date}</p>
                        {slot.available && (
                          <span className="text-green-400 text-xs">Available</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4: Customer Information */}
            {currentStep === 4 && (
              <div className="bg-black/30 p-6 rounded-2xl border border-cyan-400/30">
                <h3 className="text-xl font-bold text-cyan-400 mb-4">👤 Customer Information</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-300 text-sm mb-2">Name</label>
                    <input
                      type="text"
                      value={customerInfo.name}
                      onChange={(e) => setCustomerInfo(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full p-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm mb-2">Email</label>
                    <input
                      type="email"
                      value={customerInfo.email}
                      onChange={(e) => setCustomerInfo(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full p-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm mb-2">Phone</label>
                    <input
                      type="tel"
                      value={customerInfo.phone}
                      onChange={(e) => setCustomerInfo(prev => ({ ...prev, phone: e.target.value }))}
                      className="w-full p-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <button
                    onClick={submitCustomerInfo}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white py-3 rounded-xl font-bold transition-all duration-300"
                  >
                    Confirm Booking
                  </button>
                </div>
              </div>
            )}

            {/* Step 5: Confirmation */}
            {currentStep === 5 && (
              <div className="bg-black/30 p-6 rounded-2xl border border-cyan-400/30">
                <h3 className="text-xl font-bold text-cyan-400 mb-4">✅ Quantum Confirmation</h3>
                {isProcessing ? (
                  <div className="text-center py-8">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400 mx-auto mb-4"></div>
                    <p className="text-cyan-300">AI is processing your booking...</p>
                  </div>
                ) : showConfirmation ? (
                  <div className="text-center py-8">
                    <div className="text-6xl mb-4">✅</div>
                    <h4 className="text-xl font-bold text-green-400 mb-2">Booking Confirmed!</h4>
                    <p className="text-gray-300">Your AI-powered appointment is scheduled</p>
                  </div>
                ) : null}
              </div>
            )}
          </div>

          {/* Right Panel - AI Insights & Metrics */}
          <div className="space-y-6">
            
            {/* AI Insights */}
            <div className="bg-black/30 p-6 rounded-2xl border border-cyan-400/30">
              <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
                <FaBrain />
                AI Insights
              </h3>
              <div className="space-y-3 max-h-40 overflow-y-auto">
                {aiInsights.slice(-5).map((insight, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-purple-900/30 rounded-lg border border-purple-400/20">
                    <FaStar className="text-yellow-400 flex-shrink-0" />
                    <span className="text-cyan-300 text-sm">{insight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quantum Metrics */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-cyan-900/50 to-blue-900/50 p-4 rounded-xl border border-cyan-400/30">
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">{quantumState}°</div>
                  <div className="text-cyan-300 text-xs">Quantum State</div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-pink-900/50 to-purple-900/50 p-4 rounded-xl border border-pink-400/30">
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-400">{aiConsciousness.toFixed(1)}%</div>
                  <div className="text-pink-300 text-xs">AI Consciousness</div>
                </div>
              </div>
            </div>

            {/* Selected Service Info */}
            {selectedService && (
              <div className="bg-gradient-to-br from-green-900/50 to-blue-900/50 p-6 rounded-xl border border-green-400/30">
                <h3 className="text-xl font-bold text-green-400 mb-4">Selected Service</h3>
                <div className="space-y-3">
                  <div>
                    <span className="text-gray-300">Service:</span>
                    <span className="text-white font-bold ml-2">{selectedService.name}</span>
                  </div>
                  <div>
                    <span className="text-gray-300">Duration:</span>
                    <span className="text-white font-bold ml-2">{selectedService.duration} minutes</span>
                  </div>
                  <div>
                    <span className="text-gray-300">Price:</span>
                    <span className="text-green-400 font-bold ml-2">${selectedService.price}</span>
                  </div>
                  {selectedDate && selectedTime && (
                    <>
                      <div>
                        <span className="text-gray-300">Date:</span>
                        <span className="text-white font-bold ml-2">{selectedDate}</span>
                      </div>
                      <div>
                        <span className="text-gray-300">Time:</span>
                        <span className="text-white font-bold ml-2">{selectedTime}</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Recent Bookings */}
        {appointments.length > 0 && (
          <div className="mt-8 bg-black/30 p-6 rounded-2xl border border-cyan-400/30">
            <h3 className="text-xl font-bold text-cyan-400 mb-4">Recent AI Bookings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {appointments.slice(-3).map((appointment) => (
                <div key={appointment.id} className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 p-4 rounded-xl border border-purple-400/30">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-white">{appointment.service}</h4>
                    <span className="text-green-400 text-xs">Confirmed</span>
                  </div>
                  <p className="text-gray-300 text-sm mb-2">{appointment.customerName}</p>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-400">{appointment.date} at {appointment.time}</span>
                    <span className="text-cyan-400">${appointment.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
