'use client';

import { useState, useEffect, useRef } from 'react';
import { FaMicrophone, FaMicrophoneSlash, FaBrain, FaCalendar, FaCreditCard, FaCheck, FaTimes, FaRocket, FaStar, FaGem, FaPlay, FaPause, FaArrowRight, FaUser, FaClock, FaMapMarkerAlt, FaVolumeUp } from 'react-icons/fa';
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
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [voiceResponse, setVoiceResponse] = useState('');
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [conversationHistory, setConversationHistory] = useState<Array<{sender: 'user' | 'bot', text: string}>>([]);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [aiInsights, setAiInsights] = useState<string[]>([]);
  const [quantumState, setQuantumState] = useState(0);
  const [aiConsciousness, setAiConsciousness] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const recognitionRef = useRef<any>(null);
  const synthesisRef = useRef<SpeechSynthesisUtterance | null>(null);

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

  const getBookingSteps = (): BookingStep[] => [
    {
      id: 1,
      title: 'Voice Recognition',
      description: 'Speak your appointment request',
      status: currentStep >= 1 ? 'completed' : 'pending',
      icon: '🎤'
    },
    {
      id: 2,
      title: 'Service Selection',
      description: 'Choose your AI-powered service',
      status: selectedService ? 'completed' : currentStep >= 2 ? 'active' : 'pending',
      icon: '🧠'
    },
    {
      id: 3,
      title: 'Schedule Optimization',
      description: 'AI finds the perfect time for you',
      status: selectedDate && selectedTime ? 'completed' : currentStep >= 3 ? 'active' : 'pending',
      icon: '📅'
    },
    {
      id: 4,
      title: 'Customer Information',
      description: 'Quick and secure data collection',
      status: customerInfo.name && customerInfo.phone ? 'completed' : currentStep >= 4 ? 'active' : 'pending',
      icon: '👤'
    },
    {
      id: 5,
      title: 'Quantum Confirmation',
      description: 'AI confirms and optimizes your booking',
      status: bookingConfirmed ? 'completed' : currentStep >= 5 ? 'active' : 'pending',
      icon: '✅'
    }
  ];

  const bookingSteps = getBookingSteps();

  // Initialize speech recognition and synthesis
  useEffect(() => {
    // Only initialize if browser supports it
    if (typeof window !== 'undefined' && ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
      try {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        recognitionRef.current = new SpeechRecognition();
        recognitionRef.current.continuous = true; // Keep listening
        recognitionRef.current.interimResults = false; // Only final results
        recognitionRef.current.lang = 'en-US';

        recognitionRef.current.onresult = (event: any) => {
          let finalTranscript = '';
          for (let i = event.resultIndex; i < event.results.length; i++) {
            if (event.results[i].isFinal) {
              finalTranscript += event.results[i][0].transcript;
            }
          }
          if (finalTranscript) {
            console.log('Voice input received:', finalTranscript);
            setTranscript(finalTranscript);
            processVoiceInput(finalTranscript);
          }
        };

        recognitionRef.current.onerror = (event: any) => {
          console.error('Speech recognition error:', event.error);
          setIsListening(false);
          // Restart listening after error
          setTimeout(() => {
            if (!isProcessing && !isSpeaking) {
              startListening();
            }
          }, 2000);
        };

        recognitionRef.current.onend = () => {
          setIsListening(false);
          // Auto-restart if not processing or speaking
          setTimeout(() => {
            if (!isProcessing && !isSpeaking) {
              startListening();
            }
          }, 1000);
        };
      } catch (error) {
        console.error('Speech recognition initialization error:', error);
      }
    }

    // Cleanup function to prevent memory leaks
    return () => {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.stop();
        } catch (error) {
          console.error('Error stopping recognition on cleanup:', error);
        }
      }
    };
  }, []);

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

  // Auto-start voice recognition with welcome message
  useEffect(() => {
    const timer = setTimeout(() => {
      if (recognitionRef.current && !isListening && !isSpeaking && !isProcessing && !voiceResponse) {
        setVoiceResponse("Welcome to AI Revolution! I'm Dr. AI, your intelligent dental assistant. I can answer any dental questions, explain procedures, provide oral health advice, or help you book appointments. What would you like to know about today?");
        speakVoicePrompt("Welcome to AI Revolution! I'm Dr. AI, your intelligent dental assistant. I can answer any dental questions, explain procedures, provide oral health advice, or help you book appointments. What would you like to know about today?");
      }
    }, 2000); // Wait 2 seconds after component mounts

    return () => clearTimeout(timer);
  }, []); // Only run once on mount

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

  const speakVoicePrompt = (text: string) => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      try {
        // Cancel any existing speech
        window.speechSynthesis.cancel();
        
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 0.9;
        utterance.pitch = 1.1;
        utterance.volume = 0.8;
        
        utterance.onstart = () => setIsSpeaking(true);
        utterance.onend = () => {
          console.log('Speech synthesis ended, restarting listening...');
          setIsSpeaking(false);
          // Restart listening after speaking
          setTimeout(() => {
            console.log('Starting listening after speech...');
            startListening();
          }, 1000);
        };
        
        utterance.onerror = (event) => {
          console.error('Speech synthesis error:', event);
          setIsSpeaking(false);
          // Restart listening even if speech fails
          setTimeout(() => {
            startListening();
          }, 1000);
        };
        
        synthesisRef.current = utterance;
        window.speechSynthesis.speak(utterance);
      } catch (error) {
        console.error('Speech synthesis error:', error);
        setIsSpeaking(false);
        // Restart listening even if speech fails
        setTimeout(() => {
          if (!isProcessing) {
            startListening();
          }
        }, 1000);
      }
    } else {
      // Fallback if speech synthesis not available
      setTimeout(() => {
        startListening();
      }, 1000);
    }
  };

  const startListening = () => {
    console.log('Attempting to start listening...', { isListening, hasRecognition: !!recognitionRef.current });
    if (recognitionRef.current && !isListening) {
      try {
        setIsListening(true);
        recognitionRef.current.start();
        console.log('Listening started successfully');
      } catch (error) {
        console.error('Error starting speech recognition:', error);
        setIsListening(false);
      }
    } else {
      console.log('Cannot start listening:', { hasRecognition: !!recognitionRef.current, isListening });
    }
  };

  const stopListening = () => {
    if (recognitionRef.current && isListening) {
      try {
        setIsListening(false);
        recognitionRef.current.stop();
      } catch (error) {
        console.error('Error stopping speech recognition:', error);
        setIsListening(false);
      }
    }
  };

  const processVoiceInput = async (input: string) => {
    console.log('Processing voice input:', input, 'Current step:', currentStep);
    
    // If booking is already confirmed, don't process further booking requests
    if (bookingConfirmed) {
      setVoiceResponse("Your appointment has already been confirmed! Is there anything else I can help you with today?");
      speakVoicePrompt("Your appointment has already been confirmed! Is there anything else I can help you with today?");
      return;
    }
    
    setIsProcessing(true);
    stopListening();

    try {
      // Use the smart AI voice assistant
      const response = await fetch('/api/voice-assistant', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: input,
          conversationHistory,
          currentStep,
          selectedService,
          selectedDate,
          selectedTime,
          customerInfo
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get AI response');
      }

      const data = await response.json();
      const aiResponse = data.response;
      
      // Update the voice response
      setVoiceResponse(aiResponse);
      
      // Add to conversation history
      setConversationHistory(prev => [...prev, 
        { sender: 'user', text: input },
        { sender: 'bot', text: aiResponse }
      ]);
      
      // Check if the AI response indicates we should update the booking state
      const lowerResponse = aiResponse.toLowerCase();
      const lowerInput = input.toLowerCase();
      
      // Extract service information if mentioned in user input - be more precise
      if (lowerInput.includes('quantum whitening') || lowerInput.includes('whitening') || lowerInput.includes('white')) {
        setSelectedService(services[0]);
        setCurrentStep(3);
        setAiInsights(prev => [...prev, `🧠 Service selected: ${services[0].name} - AI optimizing schedule...`]);
      } else if (lowerInput.includes('ai-powered cleaning') || lowerInput.includes('cleaning') || lowerInput.includes('clean')) {
        setSelectedService(services[1]);
        setCurrentStep(3);
        setAiInsights(prev => [...prev, `🧠 Service selected: ${services[1].name} - AI optimizing schedule...`]);
      } else if (lowerInput.includes('neural enhancement') || lowerInput.includes('checkup') || lowerInput.includes('exam') || lowerInput.includes('neural') || lowerInput.includes('enhancement')) {
        setSelectedService(services[2]);
        setCurrentStep(3);
        setAiInsights(prev => [...prev, `🧠 Service selected: ${services[2].name} - AI optimizing schedule...`]);
      } else if (lowerInput.includes('predictive health scan') || lowerInput.includes('health scan') || lowerInput.includes('scan') || lowerInput.includes('predictive')) {
        setSelectedService(services[3]);
        setCurrentStep(3);
        setAiInsights(prev => [...prev, `🧠 Service selected: ${services[3].name} - AI optimizing schedule...`]);
      }
      
      // Extract date/time information if mentioned in user input
      if (lowerInput.includes('monday') || lowerInput.includes('10 am') || lowerInput.includes('morning')) {
        setSelectedDate('Monday, August 12th');
        setSelectedTime('10:00 AM');
        setAiInsights(prev => [...prev, '📅 Appointment scheduled: Monday at 10:00 AM']);
        if (selectedService) {
          setCurrentStep(4);
        }
      } else if (lowerInput.includes('tuesday') || lowerInput.includes('2 pm') || lowerInput.includes('afternoon')) {
        setSelectedDate('Tuesday, August 13th');
        setSelectedTime('2:00 PM');
        setAiInsights(prev => [...prev, '📅 Appointment scheduled: Tuesday at 2:00 PM']);
        if (selectedService) {
          setCurrentStep(4);
        }
      } else if (lowerInput.includes('wednesday') || lowerInput.includes('3 pm')) {
        setSelectedDate('Wednesday, August 14th');
        setSelectedTime('3:30 PM');
        setAiInsights(prev => [...prev, '📅 Appointment scheduled: Wednesday at 3:30 PM']);
        if (selectedService) {
          setCurrentStep(4);
        }
      } else if (lowerInput.includes('3:30 pm') || lowerInput.includes('3 30 pm') || lowerInput.includes('3:30pm') || lowerInput.includes('3 30pm') || lowerInput.includes('3:30 p.m.') || lowerInput.includes('3 30 p.m.')) {
        // Handle 3:30 PM specifically
        if (lowerInput.includes('monday')) {
          setSelectedDate('Monday, August 12th');
        } else if (lowerInput.includes('tuesday')) {
          setSelectedDate('Tuesday, August 13th');
        } else if (lowerInput.includes('wednesday')) {
          setSelectedDate('Wednesday, August 14th');
        } else {
          setSelectedDate('Monday, August 12th'); // Default to Monday
        }
        setSelectedTime('3:30 PM');
        setAiInsights(prev => [...prev, '📅 Appointment scheduled: Monday at 3:30 PM']);
        if (selectedService) {
          setCurrentStep(4);
        }
      } else if (lowerInput.includes('2:00 pm') || lowerInput.includes('2 pm') || lowerInput.includes('2:00pm') || lowerInput.includes('2pm')) {
        // Handle 2:00 PM
        if (lowerInput.includes('monday')) {
          setSelectedDate('Monday, August 12th');
        } else if (lowerInput.includes('tuesday')) {
          setSelectedDate('Tuesday, August 13th');
        } else if (lowerInput.includes('wednesday')) {
          setSelectedDate('Wednesday, August 14th');
        } else {
          setSelectedDate('Monday, August 12th'); // Default to Monday
        }
        setSelectedTime('2:00 PM');
        setAiInsights(prev => [...prev, '📅 Appointment scheduled: Monday at 2:00 PM']);
        if (selectedService) {
          setCurrentStep(4);
        }
      } else if (lowerInput.includes('10:00 am') || lowerInput.includes('10 am') || lowerInput.includes('10:00am') || lowerInput.includes('10am')) {
        // Handle 10:00 AM
        if (lowerInput.includes('monday')) {
          setSelectedDate('Monday, August 12th');
        } else if (lowerInput.includes('tuesday')) {
          setSelectedDate('Tuesday, August 13th');
        } else if (lowerInput.includes('wednesday')) {
          setSelectedDate('Wednesday, August 14th');
        } else {
          setSelectedDate('Monday, August 12th'); // Default to Monday
        }
        setSelectedTime('10:00 AM');
        setAiInsights(prev => [...prev, '📅 Appointment scheduled: Monday at 10:00 AM']);
        if (selectedService) {
          setCurrentStep(4);
        }
      } else if (lowerInput.includes('anytime') || lowerInput.includes('any time') || lowerInput.includes('whenever') || lowerInput.includes('when ever')) {
        // Set a default time if they say "anytime"
        setSelectedDate('Monday, August 12th');
        setSelectedTime('10:00 AM');
        setAiInsights(prev => [...prev, '📅 Appointment scheduled: Monday at 10:00 AM (default time)']);
        if (selectedService) {
          setCurrentStep(4);
        }
      } else {
        // Try to extract time using regex for any format
        const timeMatch = input.match(/(\d{1,2}):?(\d{2})\s*(am|pm|a\.m\.|p\.m\.)/i);
        if (timeMatch) {
          let hour = parseInt(timeMatch[1]);
          const minute = timeMatch[2];
          const period = timeMatch[3].toLowerCase();
          
          // Convert to 24-hour format for comparison
          if (period.includes('pm') && hour !== 12) {
            hour += 12;
          } else if (period.includes('am') && hour === 12) {
            hour = 0;
          }
          
          // Map to available time slots
          let selectedTimeSlot = '';
          if (hour === 9) selectedTimeSlot = '9:00 AM';
          else if (hour === 10) selectedTimeSlot = '10:30 AM';
          else if (hour === 14) selectedTimeSlot = '2:00 PM';
          else if (hour === 15) selectedTimeSlot = '3:30 PM';
          else if (hour === 17) selectedTimeSlot = '5:00 PM';
          else selectedTimeSlot = '10:00 AM'; // Default
          
          // Determine date
          let selectedDateSlot = 'Monday, August 12th';
          if (lowerInput.includes('tuesday')) {
            selectedDateSlot = 'Tuesday, August 13th';
          } else if (lowerInput.includes('wednesday')) {
            selectedDateSlot = 'Wednesday, August 14th';
          }
          
          setSelectedDate(selectedDateSlot);
          setSelectedTime(selectedTimeSlot);
          setAiInsights(prev => [...prev, `📅 Appointment scheduled: ${selectedDateSlot} at ${selectedTimeSlot}`]);
          if (selectedService) {
            setCurrentStep(4);
          }
        }
      }
      
      // Extract customer information if mentioned - enhanced to remember throughout conversation
      const nameMatch = input.match(/(?:my name is|i'm|call me|name is)\s+([a-zA-Z\s]+)/i);
      const phoneMatch = input.match(/(\d{3}[-.\s]?\d{3}[-.\s]?\d{4})/);
      const simpleNameMatch = input.match(/^([a-zA-Z\s]+)\s+(\d{3}[-.\s]?\d{3}[-.\s]?\d{4})$/i);
      const namePhonePattern = input.match(/^([a-zA-Z\s]+)\s+(\d{3}[-.\s]?\d{3}[-.\s]?\d{4})$/i);
      
      // Also check for just a name mentioned anywhere in the conversation (if we don't have one yet)
      const justNameMatch = input.match(/\b([A-Z][a-z]+(?:\s+[A-Z][a-z]+)*)\b/);
      
      if ((nameMatch && phoneMatch) || simpleNameMatch || namePhonePattern) {
        let customerName, customerPhone;
        
        if (simpleNameMatch || namePhonePattern) {
          customerName = (simpleNameMatch || namePhonePattern)![1].trim();
          customerPhone = (simpleNameMatch || namePhonePattern)![2];
        } else {
          customerName = nameMatch![1].trim();
          customerPhone = phoneMatch![1];
        }
        
        setCustomerInfo(prev => ({ 
          ...prev, 
          name: customerName,
          phone: customerPhone
        }));
        
        // If we have a service selected, move to confirmation
        if (selectedService) {
          setCurrentStep(5);
          processBooking();
        } else {
          // If no service selected, set a default and confirm
          setSelectedService(services[1]); // Default to AI-Powered Cleaning
          setSelectedDate('Monday, August 12th'); // Default date
          setSelectedTime('10:00 AM'); // Default time
          setCurrentStep(5);
          processBooking();
        }
      } else if (justNameMatch && !customerInfo.name) {
        // If they just mention a name and we don't have one yet, remember it
        const name = justNameMatch[1].trim();
        setCustomerInfo(prev => ({ ...prev, name }));
      }
      
      // If AI confirms booking, move to step 5
      if (lowerResponse.includes('confirmed') || lowerResponse.includes('booked') || lowerResponse.includes('scheduled') || lowerResponse.includes('thank you') || lowerResponse.includes('appointment is confirmed') || lowerResponse.includes('booking has been successfully confirmed')) {
        // Ensure we have default values if none set
        if (!selectedService) {
          setSelectedService(services[1]); // Default to AI-Powered Cleaning
        }
        if (!selectedDate) {
          setSelectedDate('Monday, August 12th');
        }
        if (!selectedTime) {
          setSelectedTime('10:00 AM');
        }
        setCurrentStep(5);
        setBookingConfirmed(true);
        processBooking();
        
        // Add a clear confirmation message to the conversation
        setTimeout(() => {
          const confirmationMessage = "Your booking has been successfully confirmed! Thank you for choosing our dental services.";
          setConversationHistory(prev => [...prev, 
            { sender: 'bot', text: confirmationMessage }
          ]);
          setVoiceResponse(confirmationMessage);
          speakVoicePrompt(confirmationMessage);
        }, 1000);
      }
      
      setIsProcessing(false);
      
      // Speak the response immediately
      speakVoicePrompt(aiResponse);
    } catch (error) {
      console.error('Error processing voice input:', error);
      setIsProcessing(false);
      setVoiceResponse("I'm sorry, there was an error processing your request. Please try again.");
    }
  };

  const toggleVoiceRecognition = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };

  const resetBooking = () => {
    setCurrentStep(1);
    setSelectedService(null);
    setSelectedDate('');
    setSelectedTime('');
    setCustomerInfo({ name: '', email: '', phone: '' });
    setBookingConfirmed(false);
    setShowConfirmation(false);
    setConversationHistory([]);
    setVoiceResponse('');
    setTranscript('');
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
      service: selectedService?.name || 'AI-Powered Cleaning',
      date: selectedDate,
      time: selectedTime,
      duration: selectedService?.duration || 45,
      price: selectedService?.price || 129,
      status: 'confirmed',
      customerName: customerInfo?.name || '',
      customerEmail: customerInfo?.email || '',
      customerPhone: customerInfo?.phone || ''
    };
    
    setAppointments(prev => [...prev, newAppointment]);
    setShowConfirmation(true);
    setBookingConfirmed(true);
    setIsProcessing(false);
    setAiInsights(prev => [...prev, '✅ Quantum AI confirmed your appointment!']);
    
    // Provide a clear confirmation message with exact service details
    const serviceName = selectedService?.name || 'AI-Powered Cleaning';
    const servicePrice = selectedService?.price || 129;
    const serviceDuration = selectedService?.duration || 45;
    
    const confirmationMessage = `Perfect! Your appointment is confirmed for ${serviceName} ($${servicePrice}, ${serviceDuration} minutes) on ${selectedDate} at ${selectedTime}. You'll receive a confirmation text shortly. Your booking has been successfully confirmed!`;
    setVoiceResponse(confirmationMessage);
    speakVoicePrompt(confirmationMessage);
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
            Intelligent Dental AI Assistant
          </p>
          
          {/* Voice Status */}
          <div className="bg-purple-900/50 p-4 rounded-2xl mb-6 border border-cyan-400">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className={`p-2 rounded-full ${isListening ? 'bg-green-500 animate-pulse' : isSpeaking ? 'bg-blue-500' : 'bg-gray-600'}`}>
                  {isListening ? <FaMicrophone className="text-white" /> : isSpeaking ? <FaVolumeUp className="text-white" /> : <FaMicrophoneSlash className="text-white" />}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-cyan-300">
                    {isListening ? 'Listening...' : isSpeaking ? 'AI Speaking...' : 'Voice Assistant Ready'}
                  </h3>
                  <p className="text-gray-300">
                    {isListening ? 'Speak now' : isSpeaking ? 'AI is responding' : 'Click microphone to start'}
                  </p>
                </div>
              </div>
              <button
                onClick={toggleVoiceRecognition}
                disabled={isProcessing || isSpeaking}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  isListening 
                    ? 'bg-red-600 hover:bg-red-500 text-white' 
                    : 'bg-green-600 hover:bg-green-500 text-white'
                } ${(isProcessing || isSpeaking) ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isListening ? 'Stop' : 'Start Voice'}
              </button>
            </div>
            
            {transcript && (
              <div className="mt-3 p-3 bg-blue-900/30 rounded-lg">
                <p className="text-sm text-gray-300">You said:</p>
                <p className="text-cyan-300 font-medium">{transcript}</p>
                {selectedService && (
                  <div className="mt-2 p-2 bg-green-900/30 rounded border border-green-400/30">
                    <p className="text-sm text-green-300">✅ Service: {selectedService.name}</p>
                    {selectedDate && selectedTime && (
                      <p className="text-sm text-green-300">📅 Time: {selectedDate} at {selectedTime}</p>
                    )}
                  </div>
                )}
              </div>
            )}
            
            {voiceResponse && (
              <div className="mt-3 p-3 bg-green-900/30 rounded-lg">
                <p className="text-sm text-gray-300">AI Response:</p>
                <p className="text-green-300 font-medium">{voiceResponse}</p>
              </div>
            )}
          </div>
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
                <div className="space-y-3">
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
                  
                  {/* Quick test buttons */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        setSelectedService(services[1]);
                        setVoiceResponse("Great choice! AI-Powered Cleaning is a popular service. I have two available slots: Monday at 10 AM or Wednesday at 2 PM. Which would you prefer?");
                        setCurrentStep(3);
                      }}
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm"
                    >
                      Test: Select Cleaning
                    </button>
                    <button
                      onClick={() => {
                        setSelectedService(services[0]);
                        setVoiceResponse("I understand you want Quantum Whitening. I have two available slots: Monday at 10 AM or Wednesday at 2 PM. Which would you prefer?");
                        setCurrentStep(3);
                      }}
                      className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-lg text-sm"
                    >
                      Test: Select Whitening
                    </button>
                  </div>
                </div>
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
                    <button
                      onClick={resetBooking}
                      className="mt-4 px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white rounded-lg font-semibold transition-all duration-300"
                    >
                      Book Another Appointment
                    </button>
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

            {/* Conversation Memory */}
            {conversationHistory.length > 0 && (
              <div className="bg-black/30 p-6 rounded-2xl border border-cyan-400/30">
                <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
                  💬 Conversation Memory
                </h3>
                <div className="space-y-2 max-h-32 overflow-y-auto">
                  {conversationHistory.slice(-6).map((msg, index) => (
                    <div key={index} className={`p-2 rounded-lg text-sm ${
                      msg.sender === 'user' 
                        ? 'bg-blue-900/30 border border-blue-400/20 text-blue-300' 
                        : 'bg-green-900/30 border border-green-400/20 text-green-300'
                    }`}>
                      <span className="font-bold">{msg.sender === 'user' ? 'You:' : 'Dr. AI:'}</span> {msg.text}
                    </div>
                  ))}
                </div>
              </div>
            )}

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
                <h3 className="text-xl font-bold text-green-400 mb-4">🎯 Your Booking Details</h3>
                <div className="space-y-3">
                  <div>
                    <span className="text-gray-300">Service:</span>
                    <span className="text-white font-bold ml-2">{selectedService?.name || 'Not selected'}</span>
                  </div>
                  <div>
                    <span className="text-gray-300">Duration:</span>
                    <span className="text-white font-bold ml-2">{selectedService?.duration || 0} minutes</span>
                  </div>
                  <div>
                    <span className="text-gray-300">Price:</span>
                    <span className="text-green-400 font-bold ml-2">${selectedService?.price || 0}</span>
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
                  {customerInfo.name && (
                    <div>
                      <span className="text-gray-300">Name:</span>
                      <span className="text-white font-bold ml-2">{customerInfo.name}</span>
                    </div>
                  )}
                  {customerInfo.phone && (
                    <div>
                      <span className="text-gray-300">Phone:</span>
                      <span className="text-white font-bold ml-2">{customerInfo.phone}</span>
                    </div>
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
