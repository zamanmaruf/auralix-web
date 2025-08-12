import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// Simple request validation for demo
const ChatRequestSchema = z.object({
  message: z.string().min(1).max(1000),
  conversationId: z.string().optional(),
  userId: z.string().optional(),
  context: z.object({
    bookingStage: z.string().optional(),
    customerName: z.string().optional(),
    preferredService: z.string().optional(),
    preferredBarber: z.string().optional(),
    preferredDate: z.string().optional(),
    preferredTime: z.string().optional(),
    conversationHistory: z.array(z.string()).optional(),
  }).optional(),
});

// Helper function to extract details from message
const extractDetails = (message: string) => {
  const nameMatch = message.match(/my name is (\w+)/i);
  const phoneMatch = message.match(/(\d{3}[-.]?\d{3}[-.]?\d{4})/);
  
  return {
    customerName: nameMatch ? nameMatch[1] : '',
    customerPhone: phoneMatch ? phoneMatch[1] : ''
  };
};

// Helper function to format phone for speech
const formatPhoneForSpeech = (phone: string) => {
  return phone.replace(/\D/g, '').split('').join(' ');
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { message, context } = ChatRequestSchema.parse(body);
    
    console.log('Received message:', message);
    console.log('Context:', context);
    
    const lowerMessage = message.toLowerCase();
    const { customerName, customerPhone } = extractDetails(message);
    
    // Demo response logic
    let demoResponse;
    
    if (lowerMessage.includes('yes it is') || lowerMessage.includes('yes') || lowerMessage.includes('confirm')) {
      const name = customerName || context?.customerName || 'Mark';
      const phone = customerPhone || context?.customerPhone || '782-882-0525';
      const formattedPhone = formatPhoneForSpeech(phone);
      
      demoResponse = {
        message: `Perfect! I've confirmed your appointment for ${name}. You'll receive a confirmation text at ${formattedPhone} shortly. Your appointment is all set!`,
        context: {
          bookingStage: 'confirmed',
          customerName: name,
          customerPhone: phone
        }
      };
    } else if (lowerMessage.includes('book') || lowerMessage.includes('hair') || lowerMessage.includes('beard')) {
      const name = customerName || context?.customerName || 'Mark';
      const phone = customerPhone || context?.customerPhone || '782-882-0525';
      const formattedPhone = formatPhoneForSpeech(phone);
      
      demoResponse = {
        message: `Great! I have you down for a haircut and beard trim with Mike on Monday at 4 PM. I just need to confirm your phone number - is it ${formattedPhone}?`,
        context: {
          bookingStage: 'asking_for_confirmation',
          customerName: name,
          customerPhone: phone
        }
      };
    } else {
      demoResponse = {
        message: "I'm glad to hear from you! How can I assist you today? Let me know what you need help with.",
        context: {
          bookingStage: 'initial',
          customerName: customerName || '',
          customerPhone: customerPhone || ''
        }
      };
    }
    
    return NextResponse.json({
      success: true,
      message: demoResponse.message,
      context: demoResponse.context
    });
    
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json({
      success: false,
      message: "I apologize, but I encountered a technical issue. Please try again or call us directly at (902) 555-0123 for immediate assistance.",
      error: 'Internal server error'
    }, { status: 500 });
  }
}