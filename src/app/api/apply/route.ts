import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      location,
      linkedin,
      github,
      position,
      experience,
      education,
      skills,
      currentCompany,
      currentRole,
      coverLetter,
      salaryExpectation,
      startDate,
      workAuthorization,
      remotePreference,
      portfolio
    } = await request.json();

    // Validate required fields
    const requiredFields = [
      'firstName', 'lastName', 'email', 'phone', 'location',
      'position', 'experience', 'education', 'skills',
      'coverLetter', 'workAuthorization'
    ];

    const formData = {
      firstName, lastName, email, phone, location,
      position, experience, education, skills,
      coverLetter, workAuthorization
    };

    for (const field of requiredFields) {
      if (!formData[field as keyof typeof formData] || String(formData[field as keyof typeof formData]).trim() === '') {
        return NextResponse.json(
          { error: `${field.charAt(0).toUpperCase() + field.slice(1)} is required` },
          { status: 400 }
        );
      }
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Basic phone validation
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    if (!phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''))) {
      return NextResponse.json(
        { error: 'Please enter a valid phone number' },
        { status: 400 }
      );
    }

    // For now, we'll just log the application
    // In a real application, you would:
    // 1. Store in a database
    // 2. Send to ATS (Applicant Tracking System)
    // 3. Send confirmation email to applicant
    // 4. Send notification to HR team
    // 5. Create calendar events for interviews
    console.log('New job application:', {
      applicant: `${firstName} ${lastName}`,
      email,
      position,
      experience,
      location,
      timestamp: new Date().toISOString()
    });

    // Log detailed application data for HR review
    console.log('Application Details:', {
      personalInfo: {
        firstName,
        lastName,
        email,
        phone,
        location,
        linkedin,
        github
      },
      professionalInfo: {
        position,
        experience,
        education,
        skills,
        currentCompany,
        currentRole
      },
      applicationDetails: {
        coverLetter,
        salaryExpectation,
        startDate,
        workAuthorization,
        remotePreference,
        portfolio
      },
      submittedAt: new Date().toISOString()
    });

    return NextResponse.json(
      { 
        success: true,
        message: 'Application submitted successfully. We will review your application and get back to you within 48 hours.'
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Application submission error:', error);
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}