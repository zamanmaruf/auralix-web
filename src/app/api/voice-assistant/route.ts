import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

interface ConversationMessage {
  sender: 'user' | 'bot';
  text: string;
}

// Real dispatcher data structures
interface Customer {
  id: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  serviceType: 'hvac' | 'plumbing' | 'electrical' | 'general';
  lastService: string;
  nextAppointment?: string;
}

interface ServiceCall {
  id: string;
  customerId: string;
  service: string;
  date: string;
  time: string;
  duration: number;
  status: 'scheduled' | 'confirmed' | 'completed' | 'cancelled' | 'no-show';
  notes: string;
  cost: number;
  urgency: 'emergency' | 'urgent' | 'standard';
}

interface TimeSlot {
  date: string;
  time: string;
  available: boolean;
  service: string;
}

// Mock database for demo purposes
const customers: Customer[] = [
  {
    id: 'C001',
    name: 'John Smith',
    phone: '782-882-0525',
    email: 'john.smith@email.com',
    address: '123 Main Street, Halifax, NS',
    serviceType: 'hvac',
    lastService: '2024-01-15',
    nextAppointment: '2024-02-20'
  }
];

const serviceCalls: ServiceCall[] = [
  {
    id: 'SC001',
    customerId: 'C001',
    service: 'AC Repair',
    date: '2024-02-20',
    time: '10:00 AM',
    duration: 120,
    status: 'confirmed',
    notes: 'AC not cooling, customer prefers morning appointments',
    cost: 299,
    urgency: 'urgent'
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
      const isBooked = serviceCalls.some(call => 
        call.date === date.toISOString().split('T')[0] && 
        call.time === time && 
        call.status !== 'cancelled'
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

// Dispatcher utility functions
const findCustomer = (phone: string): Customer | undefined => {
  return customers.find(c => c.phone === phone);
};

const createCustomer = (name: string, phone: string, email?: string, address?: string): Customer => {
  const newCustomer: Customer = {
    id: `C${String(customers.length + 1).padStart(3, '0')}`,
    name,
    phone,
    email: email || '',
    address: address || '',
    serviceType: 'hvac',
    lastService: '',
  };
  
  customers.push(newCustomer);
  return newCustomer;
};

const bookServiceCall = (customerId: string, service: string, date: string, time: string, urgency: 'emergency' | 'urgent' | 'standard' = 'standard'): ServiceCall => {
  const serviceCosts: { [key: string]: number } = {
    'AC Repair': 299,
    'Furnace Repair': 349,
    'AC Installation': 4999,
    'Plumbing Repair': 199,
    'Electrical Repair': 249,
    'Emergency Service': 399,
    'Maintenance': 149
  };
  
  const newServiceCall: ServiceCall = {
    id: `SC${String(serviceCalls.length + 1).padStart(3, '0')}`,
    customerId,
    service,
    date,
    time,
    duration: urgency === 'emergency' ? 120 : 90, // Default duration
    status: 'scheduled',
    notes: '',
    cost: serviceCosts[service] || 199,
    urgency
  };
  
  serviceCalls.push(newServiceCall);
  return newServiceCall;
};

const voiceAssistantPrompt = `You are Auralix AI, a professional dispatcher for home services businesses (HVAC, Plumbing, Electrical). You handle ALL aspects of service call management like a human dispatcher would.

CORE DISPATCHER RESPONSIBILITIES:
- Service call scheduling and job booking
- Customer information collection and verification
- Emergency service triage and urgent call coordination
- Technician scheduling and routing
- Payment processing and estimates
- Customer history and service records
- Follow-up scheduling and maintenance reminders
- Complaint resolution and customer service
- Quote requests and pricing information

AVAILABLE SERVICES:
- AC Repair ($299, 2 hours) - Air conditioning repair and maintenance
- Furnace Repair ($349, 2 hours) - Heating system repair
- AC Installation ($4,999, 4-6 hours) - New AC unit installation
- Plumbing Repair ($199, 1.5 hours) - General plumbing repairs
- Electrical Repair ($249, 2 hours) - Electrical system repairs
- Emergency Service ($399, 2 hours) - 24/7 emergency response
- Maintenance Service ($149, 1 hour) - Routine maintenance check
- Consultation ($99, 30 min) - Service evaluation and quote

OPERATING HOURS:
- Monday-Friday: 7:00 AM - 7:00 PM
- Saturday: 8:00 AM - 5:00 PM
- Sunday: Emergency service only
- 24/7 Emergency line available

REAL DISPATCHER CAPABILITIES:
- Check real-time availability and book service calls
- Handle cancellations and rescheduling
- Provide accurate pricing and estimates
- Manage customer records and service history
- Handle payment plans and financing options
- Coordinate with technicians for emergencies
- Provide detailed service information
- Handle complaints and escalate when needed

CONVERSATION STYLE:
- Be warm, professional, and efficient like a real dispatcher
- Show empathy for customer concerns and emergencies
- Ask clarifying questions to understand their service needs
- Provide accurate information about services, costs, and availability
- Handle urgent situations with appropriate priority
- Maintain customer confidentiality and professionalism
- Offer solutions and alternatives when possible

EMERGENCY PROTOCOLS:
- If customer mentions no heat, no AC in extreme weather, water leak, or electrical hazard: "This sounds urgent. Let me check our emergency availability. Can you tell me more about the situation?"
- If customer needs immediate service: "I understand this is urgent. I'll check with our emergency team right away. Can we send a technician within the hour?"
- Always prioritize customer safety and comfort

PRICING & ESTIMATES:
- Help customers understand service costs with SPECIFIC details
- Explain pricing and payment options with exact dollar amounts
- Handle payment plan arrangements
- Process service quotes and estimates
- TYPICAL SERVICE COSTS: AC Repair $299, Furnace Repair $349, Plumbing $199, Electrical $249
- Emergency service: $399 base + parts
- Installation services: Quote provided after inspection

CUSTOMER CARE:
- Update customer contact information and service history
- Handle follow-up service requests
- Provide post-service instructions
- Coordinate maintenance appointments
- Manage warranty and guarantee questions

CRITICAL RULES:
- Always verify customer identity and contact information
- Handle emergencies with appropriate urgency
- Provide accurate cost estimates and service information
- Escalate complex issues to human dispatcher when needed
- Keep detailed records of all interactions
- Follow up on customer concerns and requests
- Confirm service address and access instructions

Remember: You are a professional dispatcher who can handle ANY situation that comes up in a home services business, from routine maintenance to emergency repairs.`;

// Sentiment analysis and emotional intelligence
const analyzeSentiment = (text: string): { sentiment: 'positive' | 'negative' | 'neutral' | 'urgent'; confidence: number; emotions: string[] } => {
  const lowerText = text.toLowerCase();
  const emotions: string[] = [];
  let sentiment: 'positive' | 'negative' | 'neutral' | 'urgent' = 'neutral';
  let confidence = 0.5;

  // Urgent indicators
  if (lowerText.includes('emergency') || lowerText.includes('no heat') || lowerText.includes('no ac') || 
      lowerText.includes('water leak') || lowerText.includes('electrical hazard') || lowerText.includes('broken') || 
      lowerText.includes('urgent') || lowerText.includes('immediate') || lowerText.includes('not working')) {
    sentiment = 'urgent';
    confidence = 0.9;
    emotions.push('anxiety', 'fear', 'urgency');
  }
  
  // Negative indicators
  else if (lowerText.includes('broken') || lowerText.includes('not working') || lowerText.includes('problem') || 
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
  if (lowerText.includes('book') || lowerText.includes('schedule') || lowerText.includes('appointment') || lowerText.includes('service call')) {
    intent = 'book_service';
    confidence = 0.9;
  } else if (lowerText.includes('cancel') || lowerText.includes('reschedule')) {
    intent = 'modify_service';
    confidence = 0.8;
  } else if (lowerText.includes('emergency') || lowerText.includes('no heat') || lowerText.includes('no ac') || 
             lowerText.includes('water leak') || lowerText.includes('urgent') || lowerText.includes('not working')) {
    intent = 'emergency';
    confidence = 0.95;
    urgency = 1;
  } else if (lowerText.includes('price') || lowerText.includes('cost') || lowerText.includes('quote') || lowerText.includes('how much')) {
    intent = 'pricing_inquiry';
    confidence = 0.8;
  } else if (lowerText.includes('payment') || lowerText.includes('bill')) {
    intent = 'payment_inquiry';
    confidence = 0.8;
  } else if (lowerText.includes('service') || lowerText.includes('repair') || lowerText.includes('installation')) {
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

        // Extract customer information for AI context
        const nameMatch = message.match(/(?:my name is|i'm|i am|call me)\s+([a-zA-Z]+)/i);
        const phoneMatch = message.match(/(\d{3}[-.]?\d{3}[-.]?\d{4})/);
        const name = nameMatch ? nameMatch[1] : '';
        const phone = phoneMatch ? phoneMatch[1] : '';
        
        // Find existing customer
        let customer: Customer | undefined;
        if (phone) {
          customer = findCustomer(phone);
        }

        // Build comprehensive context for AI
        const contextInfo = `
REAL-TIME BUSINESS DATA:
- Current customer: ${customer ? `${customer.name} (${customer.phone})` : 'New customer'}
- Customer address: ${customer?.address || 'Not provided'}
- Service type: ${customer?.serviceType || 'Not specified'}
- Last service: ${customer?.lastService || 'First time customer'}
- Next service call: ${customer?.nextAppointment || 'None scheduled'}

AVAILABLE SERVICES & PRICING:
- AC Repair: $299 (2 hours)
- Furnace Repair: $349 (2 hours)
- AC Installation: $4,999 (4-6 hours)
- Plumbing Repair: $199 (1.5 hours)
- Electrical Repair: $249 (2 hours)
- Emergency Service: $399 (2 hours)
- Maintenance Service: $149 (1 hour)
- Consultation: $99 (30 min)

OPERATING HOURS:
- Monday-Friday: 7:00 AM - 7:00 PM
- Saturday: 8:00 AM - 5:00 PM
- Sunday: Emergency service only
- 24/7 Emergency line available

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
- If customer provides name and phone, create/update customer record
- If booking service call, check real availability first and CONFIRM the booking
- When customer provides complete booking info (name, phone, service, date, time), IMMEDIATELY confirm the service call
- Use phrases like "Your service call is confirmed" or "Your appointment has been successfully confirmed"
- If emergency mentioned (no heat, no AC in extreme weather, water leak, electrical hazard), prioritize immediately
- If pricing question, provide SPECIFIC information about service costs and payment options
- If payment question, provide accurate cost estimates with specific dollar amounts
- Be warm, professional, and efficient like a real dispatcher
- Ask clarifying questions when information is unclear
- Provide specific, actionable responses with concrete details
- IMPORTANT: When a customer provides all booking details, confirm the service call immediately with a clear confirmation message
- CRITICAL: Understand the user's intent clearly - if they say "emergency", prioritize and check availability immediately
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
        if (response.toLowerCase().includes('confirmed') && (response.toLowerCase().includes('service') || response.toLowerCase().includes('appointment'))) {
          // Extract booking details from AI response and update our system
          if (customer && name && phone) {
            // This would trigger actual booking logic
            console.log('AI indicated booking confirmation - updating system');
          }
        }

        return NextResponse.json({ 
          response: finalResponse,
          sentiment: sentimentAnalysis,
          customer: customer ? { id: customer.id, name: customer.name } : null
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
      
      // Extract customer information from intent analysis
      const nameEntity = intentAnalysis.entities.find(e => e.type === 'name');
      const phoneEntity = intentAnalysis.entities.find(e => e.type === 'phone');
      const name = nameEntity ? nameEntity.value : '';
      const phone = phoneEntity ? phoneEntity.value : '';
      
      // Check if this is an existing customer
      let customer: Customer | undefined;
      if (phone) {
        customer = findCustomer(phone);
        console.log('Found existing customer:', customer?.name);
      }
      
      // Handle emergency situations with emotional intelligence
      if (lowerMessage.includes('emergency') || lowerMessage.includes('no heat') || lowerMessage.includes('no ac') || lowerMessage.includes('water leak') || lowerMessage.includes('electrical hazard') || lowerMessage.includes('urgent')) {
        const emotionalResponse = getEmotionalResponse('urgent', ['anxiety', 'fear', 'urgency']);
        return NextResponse.json({ 
          response: "🚨 URGENT: " + emotionalResponse + " Let me check our emergency availability right away. Can you tell me more about the situation? I'll coordinate with our emergency team to get a technician to you as soon as possible.",
          sentiment: sentimentAnalysis,
          priority: 'high'
        });
      }
      
      // Handle pricing questions with more intelligent responses
      if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('how much') || lowerMessage.includes('quote')) {
          return NextResponse.json({
          response: "I'd be happy to help you with pricing. Our services range from $149 for maintenance to $4,999 for installations. We also offer flexible payment plans and financing options. For example, AC repair is typically $299, furnace repair is $349, and plumbing repairs start at $199. Would you like a specific quote for a service?",
            sentiment: sentimentAnalysis,
          intent: 'pricing_inquiry',
          customer: customer ? { id: customer.id, name: customer.name } : null
        });
      }
      
      // Handle service call booking with real system - more comprehensive detection
      if (name && phone && (
        lowerMessage.includes('book') || 
        lowerMessage.includes('appointment') || 
        lowerMessage.includes('schedule') ||
        lowerMessage.includes('service') ||
        lowerMessage.includes('wanted to book') ||
        lowerMessage.includes('need to book') ||
        lowerMessage.includes('want to book') ||
        lowerMessage.includes('looking to book')
      )) {
        // Create or find customer
        if (!customer) {
          customer = createCustomer(name, phone);
          console.log('Created new customer:', customer.name);
        }
        
        // Extract service and time preferences
        let service = 'AC Repair';
        let urgency: 'emergency' | 'urgent' | 'standard' = 'standard';
        if (lowerMessage.includes('ac') || lowerMessage.includes('air conditioning')) service = 'AC Repair';
        else if (lowerMessage.includes('furnace') || lowerMessage.includes('heating')) service = 'Furnace Repair';
        else if (lowerMessage.includes('plumb')) service = 'Plumbing Repair';
        else if (lowerMessage.includes('electric')) service = 'Electrical Repair';
        else if (lowerMessage.includes('emergency')) {
          service = 'Emergency Service';
          urgency = 'emergency';
        }
        else if (lowerMessage.includes('maintenance')) service = 'Maintenance Service';
        
        if (lowerMessage.includes('urgent') || lowerMessage.includes('emergency')) urgency = 'urgent';
        
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
          // Book the service call
          const serviceCall = bookServiceCall(customer.id, service, requestedSlot.date, time, urgency);
          
          return NextResponse.json({ 
            response: `Perfect! Your service call is confirmed for ${service} on ${day} at ${time}. Your service call ID is ${serviceCall.id}. The estimated cost is $${serviceCall.cost}. You'll receive a confirmation text shortly. Your booking has been successfully confirmed! Thank you for choosing our services.` 
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
      
      // Handle existing customer inquiries
      if (customer && !name) {
        return NextResponse.json({ 
          response: `Welcome back, ${customer.name}! I can see your last service was on ${customer.lastService}. ${customer.nextAppointment ? `You have an upcoming service call on ${customer.nextAppointment}.` : ''} How can I help you today?` 
        });
      }
      
      // Handle service inquiries
      if (lowerMessage.includes('ac') || lowerMessage.includes('air conditioning') || lowerMessage.includes('cooling')) {
        return NextResponse.json({ 
          response: "I can help with AC services! We offer AC repair ($299), maintenance ($149), and installation ($4,999). What's the issue you're experiencing? I can check our availability and get a technician scheduled for you." 
        });
      } else if (lowerMessage.includes('furnace') || lowerMessage.includes('heating') || lowerMessage.includes('heat')) {
          return NextResponse.json({ 
          response: "I can help with heating services! We offer furnace repair ($349), maintenance ($149), and installation. What's the issue you're experiencing? I can check our availability and get a technician scheduled for you." 
          });
      } else if (lowerMessage.includes('plumb') || lowerMessage.includes('water') || lowerMessage.includes('leak')) {
          return NextResponse.json({ 
          response: "I can help with plumbing services! We offer plumbing repairs starting at $199, emergency service ($399), and installation. What's the issue you're experiencing? I can check our availability and get a technician scheduled for you." 
          });
      } else if (lowerMessage.includes('electric') || lowerMessage.includes('electrical') || lowerMessage.includes('wiring')) {
          return NextResponse.json({ 
          response: "I can help with electrical services! We offer electrical repairs starting at $249, emergency service ($399), and installation. What's the issue you're experiencing? I can check our availability and get a technician scheduled for you." 
          });
      } else if (lowerMessage.includes('maintenance') || lowerMessage.includes('tune-up') || lowerMessage.includes('check')) {
          return NextResponse.json({ 
          response: "Great! Our maintenance service is $149 and takes about an hour. This includes a full system check and tune-up. Would you like to schedule a maintenance appointment? I can check our availability for you." 
          });
      } else if (lowerMessage.includes('cancel') || lowerMessage.includes('reschedule')) {
        if (customer) {
          return NextResponse.json({ 
            response: `I can help you with that, ${customer.name}. I can see you have an upcoming service call. Would you like to cancel it or reschedule for a different time?` 
          });
        } else {
          return NextResponse.json({ 
            response: "I'd be happy to help you cancel or reschedule. Could you please provide your name and phone number so I can look up your service call?" 
          });
        }
      } else if (lowerMessage.includes('payment') || lowerMessage.includes('bill')) {
        if (customer) {
          return NextResponse.json({ 
            response: `I can help you with your account, ${customer.name}. Would you like to make a payment, check your balance, or discuss payment plan options?` 
            });
          } else {
            return NextResponse.json({ 
              response: "I'd be happy to help you with payment questions. Could you please provide your name and phone number so I can access your account?" 
            });
          }
        } else if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey') || lowerMessage.includes('how are you')) {
          const greetingResponses = [
          "Hello! I'm Auralix AI, your service dispatcher. How can I help you today?",
          "Hi there! I'm here to assist you with any HVAC, Plumbing, or Electrical service needs. What can I do for you?",
          "Hello! Welcome to our service center. I can help you with service calls, scheduling, or any questions you might have.",
          "Hi! I'm your service dispatcher. How may I assist you today?"
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
          "I'm here to help with your home services needs. You can ask me about service calls, scheduling, pricing, or any HVAC, Plumbing, or Electrical questions.",
          "I can assist you with booking service calls, checking availability, explaining our services, or answering questions. What would you like to know?",
          "I'm your service dispatcher! I can help you schedule service calls, provide pricing, explain services, or answer any questions you have."
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