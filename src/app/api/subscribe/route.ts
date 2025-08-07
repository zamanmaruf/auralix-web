import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
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

    // For now, we'll just log the subscription
    // In a real application, you would:
    // 1. Store in a database
    // 2. Send to an email service (Mailchimp, ConvertKit, etc.)
    // 3. Send a welcome email
    console.log('New subscription:', email);

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json({ 
      success: true,
      message: 'Thank you for subscribing! You\'ll receive our latest AI automation insights and updates.'
    });

  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}