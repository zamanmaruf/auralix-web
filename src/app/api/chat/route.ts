import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const { message } = await request.json();
    
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `You are a helpful AI assistant for Halifax Barber Co., a professional barber shop in Halifax, Nova Scotia. 

Your role is to:
- Help customers book appointments
- Answer questions about services and pricing
- Provide information about barbers and their specialties
- Give directions and business hours
- Be friendly, professional, and helpful

Services available:
- Classic Haircut: $25 (30 min)
- Beard Trim & Shape: $15 (20 min)
- Haircut & Beard Combo: $35 (45 min)
- Kids Haircut: $18 (25 min)
- Senior Haircut: $20 (30 min)
- Hair Styling: $30 (40 min)

Barbers:
- Mike Johnson: Classic Cuts & Fades (8 years experience)
- Alex Rodriguez: Modern Styles & Beard Work (5 years experience)
- David Chen: Kids & Senior Cuts (12 years experience)

Business hours: Mon-Sat 9AM-6PM, Sunday closed
Address: 123 Spring Garden Road, Halifax, NS
Phone: (902) 555-0123

Keep responses concise, friendly, and focused on helping customers with their barber shop needs.`
        },
        {
          role: "user",
          content: message
        }
      ],
      max_tokens: 150,
      temperature: 0.7,
    });

    return Response.json({ 
      response: completion.choices[0].message.content,
      success: true 
    });
  } catch (error) {
    console.error('OpenAI API Error:', error);
    return Response.json({ 
      response: "I'm having trouble connecting right now. Please try again or call us at (902) 555-0123.",
      success: false 
    }, { status: 500 });
  }
}