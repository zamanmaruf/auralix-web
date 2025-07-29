import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { businessName, industry, teamSize, useCase, painPoints } = await request.json();

    // Validate required fields
    if (!businessName || !industry || !teamSize || !useCase || !painPoints) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // For now, we'll just log the trial request
    // In a real application, you would:
    // 1. Store in a database
    // 2. Send to CRM (HubSpot, Salesforce, etc.)
    // 3. Send welcome email with trial credentials
    // 4. Create trial account
    console.log('New trial request:', {
      businessName,
      industry,
      teamSize,
      useCase,
      painPoints,
      timestamp: new Date().toISOString()
    });

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json({ 
      success: true,
      message: 'Your trial request has been submitted! You\'ll receive your trial credentials and onboarding details within 24 hours.',
      trialId: `TRIAL-${Date.now()}`
    });

  } catch (error) {
    console.error('Trial submission error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}