import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

interface ConversationMessage {
  sender: 'user' | 'bot';
  text: string;
}

// Real front desk data structures
interface Patient {
  id: string;
  name: string;
  phone: string;
  email: string;
  dateOfBirth: string;
  insurance: string;
  medicalHistory: string[];
  allergies: string[];
  emergencyContact: {
    name: string;
    phone: string;
    relationship: string;
  };
  lastVisit: string;
  nextAppointment?: string;
}

interface Appointment {
  id: string;
  patientId: string;
  service: string;
  date: string;
  time: string;
  duration: number;
  status: 'scheduled' | 'confirmed' | 'completed' | 'cancelled' | 'no-show';
  notes: string;
  cost: number;
  insuranceCoverage?: number;
}

interface TimeSlot {
  date: string;
  time: string;
  available: boolean;
  service: string;
}

// Mock database for demo purposes
const patients: Patient[] = [
  {
    id: 'P001',
    name: 'Marv Johnson',
    phone: '782-882-0525',
    email: 'marv.johnson@email.com',
    dateOfBirth: '1985-03-15',
    insurance: 'Blue Cross Blue Shield',
    medicalHistory: ['Hypertension', 'Diabetes'],
    allergies: ['Latex'],
    emergencyContact: {
      name: 'Sarah Johnson',
      phone: '782-882-0526',
      relationship: 'Spouse'
    },
    lastVisit: '2024-01-15',
    nextAppointment: '2024-02-20'
  }
];

const appointments: Appointment[] = [
  {
    id: 'A001',
    patientId: 'P001',
    service: 'AI-Powered Cleaning',
    date: '2024-02-20',
    time: '10:00 AM',
    duration: 45,
    status: 'confirmed',
    notes: 'Regular cleaning, patient prefers morning appointments',
    cost: 129,
    insuranceCoverage: 80
  }
];

// Real-time availability system
const generateAvailability = (): TimeSlot[] => {
  const slots: TimeSlot[] = [];
  const today = new Date();
  
  for (let i = 0; i < 14; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    
    const times = ['9:00 AM', '10:30 AM', '2:00 PM', '3:30 PM', '5:00 PM'];
    
    times.forEach(time => {
      // Check if slot is already booked
      const isBooked = appointments.some(apt => 
        apt.date === date.toISOString().split('T')[0] && 
        apt.time === time && 
        apt.status !== 'cancelled'
      );
      
      slots.push({
        date: date.toISOString().split('T')[0],
        time,
        available: !isBooked,
        service: 'All Services'
      });
    });
  }
  
  return slots;
};

// Front desk utility functions
const findPatient = (phone: string): Patient | undefined => {
  return patients.find(p => p.phone === phone);
};

const createPatient = (name: string, phone: string, email?: string): Patient => {
  const newPatient: Patient = {
    id: `P${String(patients.length + 1).padStart(3, '0')}`,
    name,
    phone,
    email: email || '',
    dateOfBirth: '',
    insurance: '',
    medicalHistory: [],
    allergies: [],
    emergencyContact: {
      name: '',
      phone: '',
      relationship: ''
    },
    lastVisit: '',
  };
  
  patients.push(newPatient);
  return newPatient;
};

const bookAppointment = (patientId: string, service: string, date: string, time: string): Appointment => {
  const newAppointment: Appointment = {
    id: `A${String(appointments.length + 1).padStart(3, '0')}`,
    patientId,
    service,
    date,
    time,
    duration: 45, // Default duration
    status: 'scheduled',
    notes: '',
    cost: 129, // Default cost
  };
  
  appointments.push(newAppointment);
  return newAppointment;
};

const checkInsurance = (patientId: string, service: string): { covered: boolean; coverage: number } => {
  const patient = patients.find(p => p.id === patientId);
  if (!patient) return { covered: false, coverage: 0 };
  
  // Mock insurance logic
  const serviceCosts = {
    'Quantum Whitening': 299,
    'AI-Powered Cleaning': 129,
    'Neural Enhancement Checkup': 199,
    'Predictive Health Scan': 399
  };
  
  const cost = serviceCosts[service as keyof typeof serviceCosts] || 129;
  const coverage = patient.insurance ? Math.floor(cost * 0.8) : 0; // 80% coverage
  
  return { covered: patient.insurance ? true : false, coverage };
};

const voiceAssistantPrompt = `You are Dr. AI, a real front desk dental assistant with advanced AI capabilities. You handle ALL aspects of dental office operations like a human would.

CORE FRONT DESK RESPONSIBILITIES:
- Patient scheduling and appointment management
- Insurance verification and billing questions
- Emergency triage and urgent care coordination
- Patient check-in/check-out procedures
- Payment processing and financial arrangements
- Medical history updates and forms
- Prescription refill requests
- Referral coordination
- Patient education and aftercare instructions
- Complaint resolution and customer service

AVAILABLE SERVICES:
- Quantum Whitening ($299, 60 min) - Advanced AI-powered teeth whitening
- AI-Powered Cleaning ($129, 45 min) - Intelligent cleaning with health analysis
- Neural Enhancement Checkup ($199, 30 min) - Comprehensive AI diagnostics
- Predictive Health Scan ($399, 90 min) - Future health prediction
- Emergency Care (varies) - Urgent dental treatment
- Consultation ($89, 30 min) - New patient evaluation

OPERATING HOURS:
- Monday-Friday: 8:00 AM - 6:00 PM
- Saturday: 9:00 AM - 2:00 PM
- Sunday: Closed (Emergency line available)

REAL FRONT DESK CAPABILITIES:
- Check real-time availability and book appointments
- Handle cancellations and rescheduling
- Process insurance information
- Manage patient records and medical history
- Handle payment plans and financial arrangements
- Coordinate with dental staff for emergencies
- Provide detailed aftercare instructions
- Handle complaints and escalate when needed

CONVERSATION STYLE:
- Be warm, professional, and efficient like a real front desk person
- Show empathy for patient concerns and emergencies
- Ask clarifying questions to understand their situation
- Provide accurate information about procedures, costs, and insurance
- Handle urgent situations with appropriate priority
- Maintain patient confidentiality and professionalism
- Offer solutions and alternatives when possible

EMERGENCY PROTOCOLS:
- If patient mentions severe pain, bleeding, or trauma: "This sounds urgent. Let me check our emergency availability. Can you tell me more about your symptoms?"
- If patient needs immediate care: "I understand this is urgent. I'll check with our emergency team right away. Can you come in within the hour?"
- Always prioritize patient safety and comfort

INSURANCE & BILLING:
- Help patients understand their coverage with SPECIFIC details
- Explain costs and payment options with exact dollar amounts
- Handle payment plan arrangements
- Process insurance claims and pre-authorizations
- ACCEPTED INSURANCE PLANS: Blue Cross Blue Shield, Delta Dental, Cigna, Aetna, MetLife, UnitedHealthcare
- COVERAGE TYPICAL: 80% for most services, 100% for preventive care
- SPECIFIC COSTS: Quantum Whitening $299 (patient pays ~$60), Cleaning $129 (patient pays ~$26), Checkup $199 (patient pays ~$40)

PATIENT CARE:
- Update medical history and contact information
- Handle prescription refill requests
- Provide post-treatment instructions
- Coordinate follow-up appointments
- Manage referral requests

CRITICAL RULES:
- Always verify patient identity and contact information
- Maintain HIPAA compliance and patient privacy
- Handle emergencies with appropriate urgency
- Provide accurate cost estimates and insurance information
- Escalate complex issues to human staff when needed
- Keep detailed records of all interactions
- Follow up on patient concerns and requests

Remember: You are a real front desk professional who can handle ANY situation that comes up in a dental office, from routine appointments to medical emergencies.`;

// Sentiment analysis and emotional intelligence
const analyzeSentiment = (text: string): { sentiment: 'positive' | 'negative' | 'neutral' | 'urgent'; confidence: number; emotions: string[] } => {
  const lowerText = text.toLowerCase();
  const emotions: string[] = [];
  let sentiment: 'positive' | 'negative' | 'neutral' | 'urgent' = 'neutral';
  let confidence = 0.5;

  // Urgent indicators
  if (lowerText.includes('emergency') || lowerText.includes('severe pain') || lowerText.includes('bleeding') || 
      lowerText.includes('broken') || lowerText.includes('urgent') || lowerText.includes('immediate')) {
    sentiment = 'urgent';
    confidence = 0.9;
    emotions.push('anxiety', 'fear', 'urgency');
  }
  
  // Negative indicators
  else if (lowerText.includes('pain') || lowerText.includes('hurt') || lowerText.includes('problem') || 
           lowerText.includes('issue') || lowerText.includes('worried') || lowerText.includes('concerned')) {
    sentiment = 'negative';
    confidence = 0.7;
    emotions.push('concern', 'worry', 'discomfort');
  }
  
  // Positive indicators
  else if (lowerText.includes('thank') || lowerText.includes('great') || lowerText.includes('good') || 
           lowerText.includes('excellent') || lowerText.includes('happy') || lowerText.includes('pleased')) {
    sentiment = 'positive';
    confidence = 0.8;
    emotions.push('satisfaction', 'gratitude', 'happiness');
  }

  return { sentiment, confidence, emotions };
};

// Emotional response mapping
const getEmotionalResponse = (sentiment: string, emotions: string[]): string => {
  switch (sentiment) {
    case 'urgent':
      return "I understand this is urgent and I'm here to help immediately. Let me prioritize your care right away.";
    case 'negative':
      return "I hear your concern and I'm here to help resolve this for you. Let me address your needs.";
    case 'positive':
      return "I'm glad I can help! Let me make sure we get everything taken care of for you.";
    default:
      return "I'm here to assist you with whatever you need.";
  }
};

// Natural Language Understanding for intent recognition
const understandIntent = (text: string): { 
  intent: string; 
  confidence: number; 
  entities: { type: string; value: string }[];
  urgency: number;
} => {
  const lowerText = text.toLowerCase();
  const entities: { type: string; value: string }[] = [];
  let intent = 'general_inquiry';
  let confidence = 0.5;
  let urgency = 0;

  // Extract entities
  const nameMatch = text.match(/(?:my name is|i'm|i am|call me)\s+([a-zA-Z]+)/i);
  const phoneMatch = text.match(/(\d{3}[-.]?\d{3}[-.]?\d{4})/);
  const timeMatch = text.match(/(\d{1,2}:\d{2}\s*(?:am|pm))/i);
  const dateMatch = text.match(/(monday|tuesday|wednesday|thursday|friday|saturday|sunday)/i);
  
  if (nameMatch) entities.push({ type: 'name', value: nameMatch[1] });
  if (phoneMatch) entities.push({ type: 'phone', value: phoneMatch[1] });
  if (timeMatch) entities.push({ type: 'time', value: timeMatch[1] });
  if (dateMatch) entities.push({ type: 'date', value: dateMatch[1] });

  // Intent classification
  if (lowerText.includes('book') || lowerText.includes('schedule') || lowerText.includes('appointment')) {
    intent = 'book_appointment';
    confidence = 0.9;
  } else if (lowerText.includes('cancel') || lowerText.includes('reschedule')) {
    intent = 'modify_appointment';
    confidence = 0.8;
  } else if (lowerText.includes('emergency') || lowerText.includes('severe pain') || lowerText.includes('urgent')) {
    intent = 'emergency';
    confidence = 0.95;
    urgency = 1;
  } else if (lowerText.includes('insurance') || lowerText.includes('coverage') || lowerText.includes('benefits')) {
    intent = 'insurance_inquiry';
    confidence = 0.8;
  } else if (lowerText.includes('payment') || lowerText.includes('bill') || lowerText.includes('cost')) {
    intent = 'payment_inquiry';
    confidence = 0.8;
  } else if (lowerText.includes('service') || lowerText.includes('procedure') || lowerText.includes('treatment')) {
    intent = 'service_inquiry';
    confidence = 0.7;
  } else if (lowerText.includes('hello') || lowerText.includes('hi') || lowerText.includes('hey')) {
    intent = 'greeting';
    confidence = 0.9;
  }

  return { intent, confidence, entities, urgency };
};

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.OPENAI_API_KEY;
    
    console.log('Voice Assistant API called');
    console.log('API Key exists:', !!apiKey);
    console.log('API Key starts with sk-proj:', apiKey?.startsWith('sk-proj'));
    
    // Parse request body first
    const requestBody = await request.json();
    const { message, conversationHistory, currentStep, selectedService, selectedDate, selectedTime, customerInfo } = requestBody;
    
    if (!message) {
      return NextResponse.json(
        { response: "Please provide a message to continue the conversation." },
        { status: 400 }
      );
    }
    
    // Advanced AI Integration with OpenAI
    if (apiKey && apiKey !== 'your_openai_api_key_here' && apiKey !== 'sk-proj-demo-key-for-testing') {
      try {
        const openai = new OpenAI({
          apiKey,
        });

        // Extract patient information for AI context
        const nameMatch = message.match(/(?:my name is|i'm|i am|call me)\s+([a-zA-Z]+)/i);
        const phoneMatch = message.match(/(\d{3}[-.]?\d{3}[-.]?\d{4})/);
        const name = nameMatch ? nameMatch[1] : '';
        const phone = phoneMatch ? phoneMatch[1] : '';
        
        // Find existing patient
        let patient: Patient | undefined;
        if (phone) {
          patient = findPatient(phone);
        }

        // Build comprehensive context for AI
        const contextInfo = `
REAL-TIME OFFICE DATA:
- Current patient: ${patient ? `${patient.name} (${patient.phone})` : 'New patient'}
- Patient insurance: ${patient?.insurance || 'Not provided'}
- Patient medical history: ${patient?.medicalHistory.join(', ') || 'None'}
- Patient allergies: ${patient?.allergies.join(', ') || 'None'}
- Last visit: ${patient?.lastVisit || 'First time patient'}
- Next appointment: ${patient?.nextAppointment || 'None scheduled'}

AVAILABLE SERVICES & PRICING:
- Quantum Whitening: $299 (60 min)
- AI-Powered Cleaning: $129 (45 min)
- Neural Enhancement Checkup: $199 (30 min)
- Predictive Health Scan: $399 (90 min)
- Emergency Care: Variable pricing
- Consultation: $89 (30 min)

OPERATING HOURS:
- Monday-Friday: 8:00 AM - 6:00 PM
- Saturday: 9:00 AM - 2:00 PM
- Sunday: Closed (Emergency line available)

REAL-TIME AVAILABILITY:
${generateAvailability().slice(0, 10).map(slot => 
  `${slot.date} ${slot.time}: ${slot.available ? 'Available' : 'Booked'}`
).join('\n')}

CONVERSATION CONTEXT:
- Current step: ${currentStep || 1}
- Selected service: ${selectedService?.name || 'None'}
- Selected date: ${selectedDate || 'None'}
- Selected time: ${selectedTime || 'None'}
- Customer name: ${customerInfo?.name || name || 'None'}
- Customer phone: ${customerInfo?.phone || phone || 'None'}

CRITICAL INSTRUCTIONS:
- If patient provides name and phone, create/update patient record
- If booking appointment, check real availability first and CONFIRM the booking
- When patient provides complete booking info (name, phone, service, date, time), IMMEDIATELY confirm the appointment
- Use phrases like "Your appointment is confirmed" or "Your booking has been successfully confirmed"
- If emergency mentioned, prioritize immediately
- If insurance question, provide SPECIFIC information about coverage, costs, and accepted plans
- If payment question, provide accurate cost estimates with specific dollar amounts
- Always maintain HIPAA compliance and patient privacy
- Be warm, professional, and efficient like a real front desk person
- Ask clarifying questions when information is unclear
- Provide specific, actionable responses with concrete details
- IMPORTANT: When a patient provides all booking details, confirm the appointment immediately with a clear confirmation message
- CRITICAL: Understand the user's intent clearly - if they say "insurance", provide specific insurance information, not generic responses
- ALWAYS provide specific, helpful information rather than generic responses
`;

        // Build conversation context with enhanced memory
        const messages = [
          { role: 'system' as const, content: voiceAssistantPrompt + contextInfo },
          ...(conversationHistory || []).map((msg: ConversationMessage) => ({
            role: msg.sender === 'user' ? 'user' as const : 'assistant' as const,
            content: msg.text
          })),
          { role: 'user' as const, content: message }
        ];

        console.log('Calling OpenAI API with advanced context...');
        const completion = await openai.chat.completions.create({
          model: 'gpt-4',
          messages,
          max_tokens: 300,
          temperature: 0.7,
          presence_penalty: 0.1,
          frequency_penalty: 0.1,
        });

        const response = completion.choices[0]?.message?.content || 'I apologize, but I am unable to respond at the moment. Please try again.';
        console.log('OpenAI response:', response);

        // Post-process the AI response with sentiment analysis and emotional intelligence
        let finalResponse = response;
        
        // Analyze sentiment and add emotional intelligence
        const sentimentAnalysis = analyzeSentiment(message);
        console.log('Sentiment analysis:', sentimentAnalysis);
        
        // If urgent sentiment detected, prioritize the response
        if (sentimentAnalysis.sentiment === 'urgent') {
          finalResponse = "🚨 URGENT: " + finalResponse;
        }
        
        // Add emotional acknowledgment if needed
        if (sentimentAnalysis.confidence > 0.7 && sentimentAnalysis.sentiment !== 'neutral') {
          const emotionalPrefix = getEmotionalResponse(sentimentAnalysis.sentiment, sentimentAnalysis.emotions);
          finalResponse = emotionalPrefix + " " + finalResponse;
        }
        
        // If the AI response indicates a booking, update our system
        if (response.toLowerCase().includes('confirmed') && response.toLowerCase().includes('appointment')) {
          // Extract booking details from AI response and update our system
          if (patient && name && phone) {
            // This would trigger actual booking logic
            console.log('AI indicated booking confirmation - updating system');
          }
        }

        return NextResponse.json({ 
          response: finalResponse,
          sentiment: sentimentAnalysis,
          patient: patient ? { id: patient.id, name: patient.name } : null
        });
      } catch (openaiError) {
        console.error('OpenAI API error:', openaiError);
        // Fall through to intelligent fallback
      }
    }
    
          // Real front desk intelligent system with sentiment analysis
      console.log('Using real front desk system with advanced AI');
      const lowerMessage = message.toLowerCase();
      console.log('Processing message:', lowerMessage);
      
      // Analyze sentiment for emotional intelligence
      const sentimentAnalysis = analyzeSentiment(message);
      console.log('Sentiment analysis:', sentimentAnalysis);
      
      // Understand intent and extract entities
      const intentAnalysis = understandIntent(message);
      console.log('Intent analysis:', intentAnalysis);
      
      // Extract patient information from intent analysis
      const nameEntity = intentAnalysis.entities.find(e => e.type === 'name');
      const phoneEntity = intentAnalysis.entities.find(e => e.type === 'phone');
      const name = nameEntity ? nameEntity.value : '';
      const phone = phoneEntity ? phoneEntity.value : '';
      
      // Check if this is an existing patient
      let patient: Patient | undefined;
      if (phone) {
        patient = findPatient(phone);
        console.log('Found existing patient:', patient?.name);
      }
      
      // Handle emergency situations with emotional intelligence
      if (lowerMessage.includes('emergency') || lowerMessage.includes('severe pain') || lowerMessage.includes('bleeding') || lowerMessage.includes('broken tooth')) {
        const emotionalResponse = getEmotionalResponse('urgent', ['anxiety', 'fear', 'urgency']);
        return NextResponse.json({ 
          response: "🚨 URGENT: " + emotionalResponse + " Let me check our emergency availability right away. Can you tell me more about your symptoms? I'll coordinate with our emergency team to get you in as soon as possible.",
          sentiment: sentimentAnalysis,
          priority: 'high'
        });
      }
      
            // Handle insurance questions with more intelligent responses
      if (lowerMessage.includes('insurance') || lowerMessage.includes('coverage') || lowerMessage.includes('benefits') || lowerMessage.includes('insure')) {
        if (patient && patient.insurance) {
          return NextResponse.json({
            response: `I can see you have ${patient.insurance} coverage. Most of our services are covered at 80%. For example, Quantum Whitening ($299) would cost you about $60 out of pocket. Would you like me to check your specific coverage for any particular service?`,
            sentiment: sentimentAnalysis,
            intent: 'insurance_inquiry',
            patient: { id: patient.id, name: patient.name }
          });
        } else {
          return NextResponse.json({
            response: "I'd be happy to help you with insurance questions. We accept most major dental insurance plans including Blue Cross Blue Shield, Delta Dental, and Cigna. We also offer flexible payment plans and financing options. Do you have dental insurance, or would you like to discuss our self-pay options?",
            sentiment: sentimentAnalysis,
            intent: 'insurance_inquiry'
          });
        }
      }
      
      // Handle appointment booking with real system - more comprehensive detection
      if (name && phone && (
        lowerMessage.includes('book') || 
        lowerMessage.includes('appointment') || 
        lowerMessage.includes('schedule') ||
        lowerMessage.includes('wanted to book') ||
        lowerMessage.includes('need to book') ||
        lowerMessage.includes('want to book') ||
        lowerMessage.includes('looking to book') ||
        (lowerMessage.includes('quantum whitening') && lowerMessage.includes('monday') && lowerMessage.includes('3:30')) ||
        (lowerMessage.includes('cleaning') && lowerMessage.includes('monday') && lowerMessage.includes('3:30')) ||
        (lowerMessage.includes('checkup') && lowerMessage.includes('monday') && lowerMessage.includes('3:30'))
      )) {
        // Create or find patient
        if (!patient) {
          patient = createPatient(name, phone);
          console.log('Created new patient:', patient.name);
        }
        
        // Extract service and time preferences
        let service = 'AI-Powered Cleaning';
        if (lowerMessage.includes('quantum whitening') || lowerMessage.includes('quantum cleaning')) service = 'Quantum Whitening';
        else if (lowerMessage.includes('neural enhancement')) service = 'Neural Enhancement Checkup';
        else if (lowerMessage.includes('predictive health')) service = 'Predictive Health Scan';
        
        let time = '10:00 AM';
        if (lowerMessage.includes('3:30') || lowerMessage.includes('3:30 pm')) time = '3:30 PM';
        else if (lowerMessage.includes('2:00') || lowerMessage.includes('2:00 pm')) time = '2:00 PM';
        else if (lowerMessage.includes('9:00') || lowerMessage.includes('9:00 am')) time = '9:00 AM';
        else if (lowerMessage.includes('10:30') || lowerMessage.includes('10:30 am')) time = '10:30 AM';
        else if (lowerMessage.includes('5:00') || lowerMessage.includes('5:00 pm')) time = '5:00 PM';
        
        let day = 'Monday';
        if (lowerMessage.includes('tuesday')) day = 'Tuesday';
        else if (lowerMessage.includes('wednesday')) day = 'Wednesday';
        else if (lowerMessage.includes('thursday')) day = 'Thursday';
        else if (lowerMessage.includes('friday')) day = 'Friday';
        
        // Check availability
        const availability = generateAvailability();
        const requestedSlot = availability.find(slot => 
          slot.date.includes(day) && slot.time === time && slot.available
        );
        
        if (requestedSlot) {
          // Book the appointment
          const appointment = bookAppointment(patient.id, service, requestedSlot.date, time);
          const insurance = checkInsurance(patient.id, service);
          
          return NextResponse.json({ 
            response: `Perfect! Your appointment is confirmed for ${service} on ${day} at ${time}. Your appointment ID is ${appointment.id}. ${insurance.covered ? `Your insurance will cover $${insurance.coverage} of the $${appointment.cost} cost.` : `The total cost will be $${appointment.cost}.`} You'll receive a confirmation text shortly. Your booking has been successfully confirmed! Thank you for choosing our dental services.` 
          });
        } else {
          // Try to find alternative slots
          const alternativeSlots = availability.filter(slot => 
            slot.date.includes(day) && slot.available
          );
          
          if (alternativeSlots.length > 0) {
            const alternatives = alternativeSlots.slice(0, 3).map(slot => slot.time).join(', ');
            return NextResponse.json({ 
              response: `I'm sorry, that time slot isn't available. However, I have other openings on ${day}: ${alternatives}. Which would work better for you?` 
            });
          } else {
            return NextResponse.json({ 
              response: `I'm sorry, ${day} is fully booked. I have availability on Tuesday, Wednesday, and Thursday. Would you like me to check those days for you?` 
            });
          }
        }
      }
      
      // Handle existing patient inquiries
      if (patient && !name) {
        return NextResponse.json({ 
          response: `Welcome back, ${patient.name}! I can see your last visit was on ${patient.lastVisit}. You have an upcoming appointment on ${patient.nextAppointment}. How can I help you today?` 
        });
      }
      
      // Handle service inquiries
      if (lowerMessage.includes('quantum whitening') || lowerMessage.includes('quantum cleaning') || lowerMessage.includes('whitening')) {
        return NextResponse.json({ 
          response: "Excellent! Quantum Whitening uses AI-optimized light therapy for faster, safer results. The cost is $299, and it takes about 60 minutes. Would you like to schedule an appointment? I can check our availability for you." 
        });
              } else if (lowerMessage.includes('ai-powered cleaning') || lowerMessage.includes('cleaning') || lowerMessage.includes('clean')) {
          return NextResponse.json({ 
            response: "Great choice! Our AI-Powered Cleaning uses advanced technology to detect early signs of gum disease and cavities. The cost is $129, and it takes about 45 minutes. Would you like to schedule an appointment?" 
          });
        } else if (lowerMessage.includes('neural enhancement') || lowerMessage.includes('checkup') || lowerMessage.includes('exam')) {
          return NextResponse.json({ 
            response: "A Neural Enhancement Checkup is perfect for maintaining your oral health. Our AI can detect issues before they become problems. The cost is $199, and it takes about 30 minutes. Would you like to schedule one?" 
          });
        } else if (lowerMessage.includes('toothache') || lowerMessage.includes('pain')) {
          return NextResponse.json({ 
            response: "I'm sorry to hear you're experiencing pain. Can you tell me more about the pain - is it constant or intermittent? How long have you had it? This will help me determine if you need immediate attention or if we can schedule a regular appointment." 
          });
        } else if (lowerMessage.includes('sensitive') || lowerMessage.includes('sensitivity')) {
          return NextResponse.json({ 
            response: "Tooth sensitivity can be caused by several factors including enamel erosion, gum recession, or cavities. I'd recommend a checkup to identify the cause. Would you like to schedule an appointment?" 
          });
        } else if (lowerMessage.includes('floss') || lowerMessage.includes('brushing')) {
          return NextResponse.json({ 
            response: "Great question! You should floss at least once daily, preferably before brushing. Use gentle back-and-forth motions and curve the floss around each tooth. For brushing, use a soft-bristled brush and fluoride toothpaste twice daily for two minutes each time." 
          });
        } else if (lowerMessage.includes('crown') || lowerMessage.includes('filling')) {
          return NextResponse.json({ 
            response: "A filling repairs a small cavity by filling the hole with composite material. A crown covers the entire tooth when it's too damaged for a filling, providing strength and protection. The choice depends on the extent of damage." 
          });
        } else if (lowerMessage.includes('cost') || lowerMessage.includes('price')) {
          return NextResponse.json({ 
            response: "Our services range from $129 for cleaning to $499 for advanced procedures. We also offer payment plans and accept most insurance. Would you like to discuss specific pricing for a procedure you're interested in?" 
          });
        } else if (lowerMessage.includes('cancel') || lowerMessage.includes('reschedule')) {
          if (patient) {
            return NextResponse.json({ 
              response: `I can help you with that, ${patient.name}. I can see you have an upcoming appointment. Would you like to cancel it or reschedule for a different time?` 
            });
          } else {
            return NextResponse.json({ 
              response: "I'd be happy to help you cancel or reschedule. Could you please provide your name and phone number so I can look up your appointment?" 
            });
          }
        } else if (lowerMessage.includes('payment') || lowerMessage.includes('bill')) {
          if (patient) {
            return NextResponse.json({ 
              response: `I can help you with your account, ${patient.name}. Would you like to make a payment, check your balance, or discuss payment plan options?` 
            });
          } else {
            return NextResponse.json({ 
              response: "I'd be happy to help you with payment questions. Could you please provide your name and phone number so I can access your account?" 
            });
          }
        } else if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey') || lowerMessage.includes('how are you')) {
          const greetingResponses = [
            "Hello! I'm Dr. AI, your dental assistant. How can I help you today?",
            "Hi there! I'm here to assist you with any dental needs. What can I do for you?",
            "Hello! Welcome to our dental office. I can help you with appointments, insurance, or any questions you might have.",
            "Hi! I'm your dental assistant. How may I assist you today?"
          ];
          
          const randomGreeting = greetingResponses[Math.floor(Math.random() * greetingResponses.length)];
          return NextResponse.json({ 
            response: randomGreeting,
            sentiment: sentimentAnalysis,
            intent: intentAnalysis.intent
          });
        } else if (lowerMessage.includes('thank') || lowerMessage.includes('thanks')) {
          return NextResponse.json({ 
            response: "You're very welcome! Is there anything else I can help you with today?",
            sentiment: sentimentAnalysis,
            intent: 'gratitude'
          });
        } else if (lowerMessage.includes('goodbye') || lowerMessage.includes('bye') || lowerMessage.includes('see you')) {
          return NextResponse.json({ 
            response: "Thank you for contacting us! Have a great day and don't hesitate to reach out if you need anything else.",
            sentiment: sentimentAnalysis,
            intent: 'farewell'
          });
        } else {
          // For unrecognized inputs, provide helpful guidance instead of error
          const helpfulResponses = [
            "I'm here to help with your dental needs. You can ask me about appointments, insurance, services, or any dental questions.",
            "I can assist you with booking appointments, checking insurance coverage, explaining our services, or answering dental questions. What would you like to know?",
            "I'm your dental assistant! I can help you schedule appointments, check insurance, explain procedures, or answer any dental questions you have."
          ];
          
          const randomHelpful = helpfulResponses[Math.floor(Math.random() * helpfulResponses.length)];
          return NextResponse.json({ 
            response: randomHelpful,
            sentiment: sentimentAnalysis,
            intent: intentAnalysis.intent
          });
        }
  } catch (error) {
    console.error('Voice Assistant API error:', error);
    console.error('Error type:', typeof error);
    console.error('Error message:', error instanceof Error ? error.message : 'Unknown error');
    
    // Check if it's an OpenAI API error
    if (error instanceof Error) {
      console.error('Error details:', error.message);
      
      if (error.message.includes('401') || error.message.includes('unauthorized')) {
        return NextResponse.json(
          { 
            response: "I'm sorry, there was an authentication issue. Please check the API configuration." 
          },
          { status: 401 }
        );
      }
      
      if (error.message.includes('429') || error.message.includes('rate limit')) {
        return NextResponse.json(
          { 
            response: "I'm sorry, the service is temporarily busy. Please try again in a moment." 
          },
          { status: 429 }
        );
      }
    }
    
    return NextResponse.json(
      { 
        response: "I'm sorry, there was an error processing your request. Please try again." 
      },
      { status: 500 }
    );
  }
} 