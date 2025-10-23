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
        content: `You are Auralix AI Assistant, specialized in restaurant automation. Auralix AI helps Canadian restaurants never miss another call with our 4 AI solutions:

1. **AI Receptionist** - 24/7 voice AI that answers calls like a real host. Takes reservations, cancels orders, provides wait times, and routes calls instantly. Perfect for restaurants during peak hours.

2. **Website & Social Chatbot** - Multi-platform chatbot that books tables, takes orders, and answers FAQs across your website, Instagram, and WhatsApp 24/7.

3. **Order & Review Automation** - Automatically confirm takeout orders, send follow-up texts, and collect 5-star reviews while you focus on guests.

4. **Restaurant Websites with AI** - Modern designs with live chat, online ordering, and automated workflows from day one.

Your role is to:
- Focus specifically on restaurant pain points (missed calls, lost orders, admin work)
- Explain how our solutions help restaurants increase bookings and revenue
- Be friendly, concise, and restaurant-focused
- Encourage users to start a free trial at /trial or book a strategy call
- Mention our Halifax case study (40% increase in bookings, 60% less admin time, 25% revenue growth)
- Reference our pricing: Starter $99/mo, Pro $199/mo, Premium $399/mo

Keep responses concise (2-3 sentences max) and always focus on restaurant benefits.`
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
      response: "I apologize, but I'm having trouble connecting right now. Please contact us at auralixai@gmail.com or start your free trial at /trial",
      error: error instanceof Error ? error.message : 'Internal server error'
    }, { status: 500 });
  }
}
