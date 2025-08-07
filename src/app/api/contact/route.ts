import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, businessName, serviceNeeded, message } = await request.json();

    // Validate required fields
    if (!name || !email || !phone || !businessName || !serviceNeeded || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // For now, we'll just log the contact request
    // In a real application, you would:
    // 1. Store in a database
    // 2. Send to CRM (HubSpot, Salesforce, etc.)
    // 3. Send notification email to sales team
    // 4. Send confirmation email to customer
    console.log('New contact request:', {
      name,
      email,
      phone,
      businessName,
      serviceNeeded,
      message,
      timestamp: new Date().toISOString()
    });

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json({ 
      success: true,
      message: 'Thank you for your message! We\'ll get back to you within 24 hours.',
      contactId: `CONTACT-${Date.now()}`
    });

  } catch (error) {
    console.error('Contact submission error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}