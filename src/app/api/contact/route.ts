import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, businessName, service, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !businessName || !service || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Send email to founders
    if (!resend) {
      console.log('Resend API key not configured, skipping email send');
      return NextResponse.json({
        message: 'Message sent successfully! We\'ll get back to you soon.',
        success: true
      });
    }

    const emailData = await resend.emails.send({
      from: 'Auralix AI <noreply@auralix.ai>',
      to: ['auralixai@gmail.com'],
      subject: `New Contact Form Submission from ${businessName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #14b8a6;">New Contact Form Submission</h2>
          
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Contact Details</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Restaurant:</strong> ${businessName}</p>
            <p><strong>Service Interest:</strong> ${service}</p>
          </div>
          
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="background: #e3f2fd; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; color: #1976d2;">
              <strong>Next Steps:</strong> Follow up within 24 hours and schedule a strategy call if interested.
            </p>
          </div>
        </div>
      `,
    });

    // Send confirmation email to customer
    await resend.emails.send({
      from: 'Auralix AI <noreply@auralix.ai>',
      to: [email],
      subject: 'Thank you for contacting Auralix AI',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #14b8a6;">Thank you for reaching out!</h2>
          
          <p>Hi ${name},</p>
          
          <p>Thank you for your interest in Auralix AI for ${businessName}. We've received your message and will get back to you within 24 hours.</p>
          
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">What happens next?</h3>
            <ul>
              <li>Our team will review your restaurant's specific needs</li>
              <li>We'll prepare a customized solution for ${businessName}</li>
              <li>We'll schedule a strategy call to discuss your requirements</li>
              <li>You'll receive a detailed proposal within 48 hours</li>
            </ul>
          </div>
          
          <div style="background: #e8f5e8; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; color: #2e7d32;">
              <strong>Ready to get started sooner?</strong> 
              <a href="https://calendly.com/auralix-ai/strategy-call" style="color: #14b8a6;">Book a strategy call</a> 
              or <a href="/pricing" style="color: #14b8a6;">view our pricing</a>.
            </p>
          </div>
          
          <p>Best regards,<br>
          The Auralix AI Team<br>
          Halifax, Nova Scotia</p>
          
          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
          <p style="font-size: 12px; color: #666;">
            Auralix AI - Never miss another restaurant call<br>
            Halifax, Nova Scotia, Canada | auralixai@gmail.com
          </p>
        </div>
      `,
    });

    return NextResponse.json({
      message: 'Message sent successfully! We\'ll get back to you within 24 hours.',
      success: true
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}