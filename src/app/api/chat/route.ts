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
        response: "I'm currently unavailable. Please contact us directly at info@auralixai.ca or book a consultation.",
        error: 'OpenAI API key not configured'
      }, { status: 500 });
    }

    // Build conversation context
    const messages = [
      {
        role: 'system',
        content: `You are Auralix AI Assistant. Auralix AI provides an Enterprise-Grade Voice Agent that helps Canadian home services businesses never miss another call.

**Enterprise-Grade Voice Agent** - 24/7 voice AI that answers calls, books jobs, and captures leads instantly. Perfect for HVAC, plumbing, and electrical contractors during peak hours and after-hours. Built for real business calls with enterprise-grade reliability, security, and performance.

Your role is to:
- Focus specifically on home services pain points (missed calls, lost jobs, admin work, after-hours coverage)
- Explain how our solutions help HVAC, plumbing, and electrical contractors increase booked jobs and revenue
- Be friendly, concise, and home-services focused
- Encourage users to view pricing at /pricing or book a strategy call
- Mention our integrations: ServiceTitan, Jobber, Housecall Pro
- Reference our pricing: After Hours $399/mo, Overflow + After Hours $799/mo, Dispatcher Pro $1,499/mo (see /pricing for current pricing)

Keep responses concise (2-3 sentences max) and always focus on home services benefits.`
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
      response: "I apologize, but I'm having trouble connecting right now. Please contact us at info@auralixai.ca or view our pricing at /pricing",
      error: error instanceof Error ? error.message : 'Internal server error'
    }, { status: 500 });
  }
}
