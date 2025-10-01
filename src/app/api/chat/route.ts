import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const ChatRequestSchema = z.object({
  message: z.string().min(1).max(1000),
  conversationHistory: z.array(z.any()).optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { message, conversationHistory } = ChatRequestSchema.parse(body);
    
    const apiKey = process.env.OPENAI_API_KEY;
    
    if (!apiKey) {
      return NextResponse.json({
        success: false,
        response: "I'm currently unavailable. Please contact us directly at auralixai@gmail.com or book a consultation.",
        error: 'OpenAI API key not configured'
      }, { status: 500 });
    }

    // Build conversation context
    const messages = [
      {
        role: 'system',
        content: `You are a helpful AI assistant for Auralix AI, a company that offers 4 ready-to-deploy AI solutions:

1. **Workflow Automation** - Automate review requests, email/SMS follow-ups, order updates, and payment reminders. Free up staff from busywork.

2. **Voice Agents** - AI that answers calls like a human receptionist. Takes orders, cancels orders, provides wait times, and routes calls. Perfect for restaurants, salons, and service businesses.

3. **AI Chatbots** - Multi-platform chatbots that capture leads, answer FAQs, book appointments, and automate customer support. Works across websites, Instagram, Facebook, and WhatsApp.

4. **AI-Powered Websites** - Modern, enterprise-grade websites with AI features built in from day one. Includes chatbots, automation workflows, and customer engagement tools.

Your role is to:
- Answer questions about these 4 products
- Explain how they can help businesses
- Be friendly, concise, and helpful
- Encourage users to book a free consultation at https://calendly.com/auralixai/30min
- All solutions have custom pricing based on business needs

Keep responses concise (2-3 sentences max) and focused on Auralix's 4 products.`
      }
    ];

    // Add conversation history (last 5 messages only)
    if (conversationHistory && conversationHistory.length > 0) {
      const recentHistory = conversationHistory.slice(-5);
      recentHistory.forEach((msg: any) => {
        if (msg.sender === 'user') {
          messages.push({ role: 'user', content: msg.text });
        } else if (msg.sender === 'bot') {
          messages.push({ role: 'assistant', content: msg.text });
        }
      });
    }

    // Add current message
    messages.push({ role: 'user', content: message });

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: messages,
        max_tokens: 200,
        temperature: 0.7,
      })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error?.message || 'OpenAI API error');
    }

    const aiResponse = data.choices[0].message.content;

    return NextResponse.json({
      success: true,
      response: aiResponse,
    });
    
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json({
      success: false,
      response: "I apologize, but I'm having trouble connecting right now. Please contact us at auralixai@gmail.com or book a free consultation at https://calendly.com/auralixai/30min",
      error: error instanceof Error ? error.message : 'Internal server error'
    }, { status: 500 });
  }
}
