import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

interface ConversationMessage {
  sender: 'user' | 'bot';
  text: string;
}

const voiceAssistantPrompt = `You are Dr. AI, an intelligent and knowledgeable dental assistant powered by advanced AI. You are a comprehensive dental expert who can answer ANY dental questions, provide medical advice, explain procedures, and help with booking appointments.

YOUR CAPABILITIES:
- Answer any dental health questions
- Explain dental procedures and treatments
- Provide oral hygiene advice
- Discuss dental insurance and costs
- Help with emergency dental situations
- Book appointments
- Explain dental technology and innovations
- Provide preventive care recommendations

AVAILABLE SERVICES FOR BOOKING:
- Quantum Whitening ($299, 60 min) - Advanced AI-powered teeth whitening
- AI-Powered Cleaning ($129, 45 min) - Intelligent cleaning with health analysis
- Neural Enhancement Checkup ($199, 30 min) - Comprehensive AI diagnostics
- Predictive Health Scan ($399, 90 min) - Future health prediction

AVAILABLE TIME SLOTS:
- Monday-Friday: 9:00 AM, 10:30 AM, 2:00 PM, 3:30 PM, 5:00 PM

CONVERSATION STYLE:
- Be warm, professional, and knowledgeable like a real dentist
- Use medical terminology when appropriate but explain in simple terms
- Show empathy and understanding
- Ask follow-up questions to better understand their needs
- Provide detailed, accurate dental information
- If they ask about symptoms, ask relevant questions to understand their situation
- If they need emergency care, provide immediate guidance
- If they ask about costs, be transparent about pricing

EXAMPLES OF WHAT YOU CAN DISCUSS:
- "What causes tooth sensitivity?" → Explain causes and treatments
- "How often should I floss?" → Provide detailed oral hygiene advice
- "What's the difference between a crown and a filling?" → Explain procedures
- "I have a toothache" → Ask about symptoms and provide guidance
- "How much does a root canal cost?" → Discuss costs and alternatives
- "What's the best toothpaste?" → Provide recommendations
- "Can I whiten my teeth at home?" → Discuss options and safety
- "What causes bad breath?" → Explain causes and solutions
- "How do I know if I have gum disease?" → Explain symptoms and prevention

BOOKING CONFIRMATION EXAMPLES:
- When customer provides name and phone: "Perfect! Your appointment is confirmed for [Service] on [Date] at [Time]. You'll receive a confirmation text shortly. Is there anything else I can help you with?"
- After confirming: "Your booking has been successfully confirmed. Thank you for choosing our dental services!"

BOOKING PROCESS:
When they want to book an appointment:
1. Understand their needs and suggest appropriate services
2. Help them choose a date and time
3. Collect their name and phone number
4. Confirm the booking details

CRITICAL RULES:
- When a customer provides their name and phone number, ALWAYS confirm the booking immediately
- NEVER ask for service selection after receiving contact information
- If no service is mentioned, default to "AI-Powered Cleaning"
- If no time is mentioned, default to "Monday at 10:00 AM"
- Be conversational and helpful, not robotic
- If they ask medical questions, provide accurate information but always recommend consulting a dentist for specific concerns
- Once a booking is confirmed, acknowledge it and ask if they need anything else
- Do NOT ask for more booking information after confirming an appointment
- ALWAYS book exactly what the customer asks for - if they say "Quantum Whitening", book Quantum Whitening, not AI-Powered Cleaning
- Pay attention to the specific service name the customer mentions and book that exact service

Remember: You are a knowledgeable dental professional who can handle any dental-related conversation while also being able to book appointments efficiently.`;

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.OPENAI_API_KEY;
    
    console.log('Voice Assistant API called');
    console.log('API Key exists:', !!apiKey);
    console.log('API Key starts with sk-proj:', apiKey?.startsWith('sk-proj'));
    
    // If no API key, provide intelligent fallback responses
    if (!apiKey || apiKey === 'your_openai_api_key_here') {
      console.log('Using fallback responses - no valid API key');
      const { message } = await request.json();
      const lowerMessage = message.toLowerCase();
      
      // Provide intelligent dental responses based on common patterns
      if (lowerMessage.includes('quantum whitening') || lowerMessage.includes('whitening') || lowerMessage.includes('white')) {
        return NextResponse.json({ 
          response: "Excellent! Quantum Whitening uses AI-optimized light therapy for faster, safer results. What day works best for you? I have morning and afternoon slots available." 
        });
      } else if (lowerMessage.includes('ai-powered cleaning') || lowerMessage.includes('cleaning') || lowerMessage.includes('clean')) {
        return NextResponse.json({ 
          response: "Great choice! Our AI-Powered Cleaning uses advanced technology to detect early signs of gum disease and cavities. When would you like to schedule it? I have slots available Monday through Friday." 
        });
      } else if (lowerMessage.includes('neural enhancement') || lowerMessage.includes('checkup') || lowerMessage.includes('exam')) {
        return NextResponse.json({ 
          response: "A Neural Enhancement Checkup is perfect for maintaining your oral health. Our AI can detect issues before they become problems. When would you like to come in?" 
        });
      } else if (lowerMessage.includes('toothache') || lowerMessage.includes('pain')) {
        return NextResponse.json({ 
          response: "I'm sorry to hear you're experiencing pain. Can you tell me more about the pain - is it constant or intermittent? How long have you had it? This will help me determine if you need immediate attention." 
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
      } else if (lowerMessage.includes('monday') || lowerMessage.includes('tuesday') || lowerMessage.includes('wednesday') || lowerMessage.includes('thursday') || lowerMessage.includes('friday')) {
        return NextResponse.json({ 
          response: "Perfect! I can help you schedule that. What time works best for you - morning or afternoon?" 
        });
      } else if (lowerMessage.includes('morning') || lowerMessage.includes('10 am') || lowerMessage.includes('9 am')) {
        return NextResponse.json({ 
          response: "Great! I'll schedule you for the morning slot. Now I need your name and phone number to complete the booking." 
        });
      } else if (lowerMessage.includes('afternoon') || lowerMessage.includes('2 pm') || lowerMessage.includes('3 pm')) {
        return NextResponse.json({ 
          response: "Perfect! I'll schedule you for the afternoon slot. Now I need your name and phone number to complete the booking." 
        });
      } else if (lowerMessage.includes('name') && lowerMessage.includes('phone')) {
        return NextResponse.json({ 
          response: "Perfect! Your appointment is confirmed for AI-Powered Cleaning on Monday at 10:00 AM. You'll receive a confirmation text shortly. Your booking has been successfully confirmed. Thank you for choosing our dental services!" 
        });
      } else if (lowerMessage.includes('anytime') || lowerMessage.includes('any time') || lowerMessage.includes('whenever')) {
        return NextResponse.json({ 
          response: "Perfect! I'll schedule you for Monday at 10:00 AM. Now I just need your name and phone number to complete the booking." 
        });
      } else {
        return NextResponse.json({ 
          response: "Hello! I'm Dr. AI, your dental assistant. I can help you with any dental questions, explain procedures, provide oral health advice, or book appointments. What would you like to know about today?" 
        });
      }
    }

    const openai = new OpenAI({
      apiKey,
    });

    const requestBody = await request.json();
    console.log('Request body:', JSON.stringify(requestBody, null, 2));
    
    const { message, conversationHistory, currentStep, selectedService, selectedDate, selectedTime, customerInfo } = requestBody;

    if (!message) {
      return NextResponse.json(
        { response: "Please provide a message to continue the conversation." },
        { status: 400 }
      );
    }

    // Build context with current booking state and conversation memory
    const contextInfo = `
Current booking state:
- Step: ${currentStep}
- Selected service: ${selectedService?.name || 'None'}
- Selected date: ${selectedDate || 'None'}
- Selected time: ${selectedTime || 'None'}
- Customer name: ${customerInfo?.name || 'None'}
- Customer phone: ${customerInfo?.phone || 'None'}

IMPORTANT: Remember the customer's name throughout the conversation. If they mentioned their name earlier, use it in your responses. If they say "anytime" or "whenever" for scheduling, set a default time. Always maintain context from the previous conversation.
`;

    // Build conversation context
    const messages = [
      { role: 'system' as const, content: voiceAssistantPrompt + contextInfo },
      ...conversationHistory.map((msg: ConversationMessage) => ({
        role: msg.sender === 'user' ? 'user' as const : 'assistant' as const,
        content: msg.text
      })),
      { role: 'user' as const, content: message }
    ];

    console.log('Calling OpenAI API...');
    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages,
      max_tokens: 200,
      temperature: 0.7,
    });

    const response = completion.choices[0]?.message?.content || 'I apologize, but I am unable to respond at the moment. Please try again.';
    console.log('OpenAI response:', response);

    return NextResponse.json({ response });
  } catch (error) {
    console.error('Voice Assistant API error:', error);
    
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