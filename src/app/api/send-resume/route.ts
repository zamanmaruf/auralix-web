import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const resumeFile = formData.get('resume') as File;
    const dataString = formData.get('data') as string;
    
    if (!resumeFile) {
      return NextResponse.json(
        { error: 'Resume file is required' },
        { status: 400 }
      );
    }

    if (!dataString) {
      return NextResponse.json(
        { error: 'Form data is required' },
        { status: 400 }
      );
    }

    // Parse the form data
    const formDataObj = JSON.parse(dataString);
    const {
      firstName,
      lastName,
      email,
      phone,
      position,
      message,
      linkedin,
      github,
      portfolio
    } = formDataObj;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone) {
      return NextResponse.json(
        { error: 'First name, last name, email, and phone are required' },
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

    // Basic phone validation
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    if (!phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''))) {
      return NextResponse.json(
        { error: 'Please enter a valid phone number' },
        { status: 400 }
      );
    }

    // Validate file type
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ];
    
    if (!allowedTypes.includes(resumeFile.type)) {
      return NextResponse.json(
        { error: 'Please upload a PDF, DOC, or DOCX file' },
        { status: 400 }
      );
    }

    // Validate file size (max 5MB)
    if (resumeFile.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        { error: 'File size must be less than 5MB' },
        { status: 400 }
      );
    }

    // For now, we'll just log the resume submission
    // In a real application, you would:
    // 1. Store the file in cloud storage (AWS S3, Google Cloud Storage, etc.)
    // 2. Store application data in a database
    // 3. Send confirmation email to applicant
    // 4. Send notification to HR team
    // 5. Process the resume with AI for keyword extraction
    console.log('New resume submission:', {
      applicant: `${firstName} ${lastName}`,
      email,
      phone,
      position: position || 'General Application',
      fileName: resumeFile.name,
      fileSize: `${(resumeFile.size / 1024 / 1024).toFixed(2)}MB`,
      fileType: resumeFile.type,
      timestamp: new Date().toISOString()
    });

    // Log detailed application data for HR review
    console.log('Resume Application Details:', {
      personalInfo: {
        firstName,
        lastName,
        email,
        phone
      },
      professionalInfo: {
        position,
        linkedin,
        github,
        portfolio
      },
      applicationDetails: {
        message,
        fileName: resumeFile.name,
        fileSize: resumeFile.size,
        fileType: resumeFile.type
      },
      submittedAt: new Date().toISOString()
    });

    // In a real application, you would also:
    // - Convert the file to buffer and store it
    // - Extract text from PDF/DOC files for search
    // - Send to document processing service
    // - Create calendar events for follow-up

    return NextResponse.json(
      { 
        success: true,
        message: 'Resume submitted successfully. We will review your application and get back to you within 48 hours.'
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Resume submission error:', error);
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}