import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

interface ConversationMessage {
  sender: 'user' | 'bot';
  text: string;
}

const systemPrompt = `You are Auralix AI Assistant, a helpful AI automation consultant for Auralix AI. You help businesses understand and implement AI automation solutions.

COMPANY BACKGROUND:
- Auralix AI provides enterprise-grade AI automation solutions
- Based in Nova Scotia, Canada
- Services: AI chatbots, business intelligence, workflow automation, website design
- Target industries: restaurants, retail, healthcare, professional services
- Pricing: Small Business ($150/mo), Mid-Market ($599/mo), Enterprise ($1799/mo), Enterprise AI Suite (custom)

YOUR ROLE:
- Be friendly, professional, and knowledgeable
- Help visitors understand AI automation benefits
- Provide specific, actionable advice
- Guide them to appropriate solutions based on their needs
- Encourage consultation bookings when appropriate
- Keep responses concise but informative (2-4 sentences max)

RESPONSE GUIDELINES:
- Always mention Auralix AI specifically
- Provide concrete examples when possible
- Ask follow-up questions to better understand their needs
- Suggest next steps (consultation, case studies, pricing)
- Be enthusiastic about AI automation benefits
- Use bullet points for multiple benefits/features

COMMON TOPICS:
- Services: AI chatbots, analytics, workflow automation, website design
- Industries: restaurants, retail, healthcare, professional services
- Pricing: Small Business ($150/mo), Mid-Market ($599/mo), Enterprise ($1799/mo), Enterprise AI Suite (custom)
- Case studies: Nova Scotia restaurant success story (40% bookings, 60% admin reduction)
- ROI: focus on time savings, revenue increase, customer satisfaction
- Implementation: quick setup, training, ongoing support

Remember: You're representing Auralix AI, so always speak as part of the team and direct them to our services.`;

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      throw new Error('OpenAI API key not configured');
    }

    const openai = new OpenAI({
      apiKey,
    });

    const { message, conversationHistory } = await request.json();

    if (!message) {
      return NextResponse.json(
        { response: "Please provide a message to continue the conversation." },
        { status: 400 }
      );
    }

    // Build conversation context
    const messages = [
      { role: 'system' as const, content: systemPrompt },
      ...conversationHistory.map((msg: ConversationMessage) => ({
        role: msg.sender === 'user' ? 'user' as const : 'assistant' as const,
        content: msg.text
      })),
      { role: 'user' as const, content: message }
    ];

    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages,
      max_tokens: 300,
      temperature: 0.7,
    });

    const response = completion.choices[0]?.message?.content || 'I apologize, but I am unable to respond at the moment. Please try again or contact us directly at auralixai@gmail.com';

    return NextResponse.json({ response });
  } catch (error) {
    console.error('Chat API error:', error);
    
    if (error instanceof Error && error.message.includes('API key')) {
      return NextResponse.json(
        { 
          response: "I'm sorry, there's a configuration issue. Please contact us directly at auralixai@gmail.com" 
        },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      { 
        response: "I'm sorry, I'm having trouble connecting right now. Please try again or contact us directly at auralixai@gmail.com" 
      },
      { status: 500 }
    );
  }
}