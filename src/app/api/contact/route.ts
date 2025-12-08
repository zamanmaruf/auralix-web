import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { sanitizeString, sanitizeEmail, sanitizePhone, sanitizeText, containsDangerousContent } from '@/lib/sanitize';
import { checkRateLimit, getClientIP } from '@/lib/rateLimit';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const clientIP = getClientIP(request);
    const rateLimit = checkRateLimit(clientIP, {
      windowMs: 15 * 60 * 1000, // 15 minutes
      maxRequests: 10, // 10 contact form submissions per 15 minutes
    });

    if (!rateLimit.allowed) {
      return NextResponse.json(
        { 
          error: 'Too many requests. Please try again later.',
          retryAfter: Math.ceil((rateLimit.resetTime - Date.now()) / 1000),
        },
        { 
          status: 429,
          headers: {
            'Retry-After': Math.ceil((rateLimit.resetTime - Date.now()) / 1000).toString(),
            'X-RateLimit-Limit': '10',
            'X-RateLimit-Remaining': rateLimit.remaining.toString(),
            'X-RateLimit-Reset': rateLimit.resetTime.toString(),
          },
        }
      );
    }

    const body = await request.json();
    let { name, email, phone, businessName, service, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !businessName || !service || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Sanitize all inputs
    name = sanitizeString(name);
    email = sanitizeEmail(email);
    phone = sanitizePhone(phone);
    businessName = sanitizeString(businessName);
    service = sanitizeString(service);
    message = sanitizeText(message, 5000); // Max 5000 characters

    // Check for dangerous content
    if (containsDangerousContent(name) || containsDangerousContent(businessName) || containsDangerousContent(message)) {
      return NextResponse.json(
        { error: 'Invalid content detected. Please check your input.' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Validate phone format
    const phoneRegex = /^[\+]?[1-9][\d\s\-\(\)]{9,}$/;
    if (!phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''))) {
      return NextResponse.json(
        { error: 'Please enter a valid phone number' },
        { status: 400 }
      );
    }

    // Escape HTML in user inputs for email
    const escapeHtml = (text: string): string => {
      const map: Record<string, string> = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;',
      };
      return text.replace(/[&<>"']/g, m => map[m]);
    };

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
      to: ['info@auralixai.ca'],
      subject: `New Contact Form Submission from ${escapeHtml(businessName)}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #14b8a6;">New Contact Form Submission</h2>
          
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Contact Details</h3>
            <p><strong>Name:</strong> ${escapeHtml(name)}</p>
            <p><strong>Email:</strong> ${escapeHtml(email)}</p>
            <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
            <p><strong>Restaurant:</strong> ${escapeHtml(businessName)}</p>
            <p><strong>Service Interest:</strong> ${escapeHtml(service)}</p>
          </div>
          
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
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
          
          <p>Hi ${escapeHtml(name)},</p>
          
          <p>Thank you for your interest in Auralix AI for ${escapeHtml(businessName)}. We've received your message and will get back to you within 24 hours.</p>
          
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">What happens next?</h3>
            <ul>
              <li>Our team will review your restaurant's specific needs</li>
              <li>We'll prepare a customized solution for ${escapeHtml(businessName)}</li>
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
            1800 Argyle Street, Halifax, Nova Scotia, Canada | info@auralixai.ca
          </p>
        </div>
      `,
    });

    return NextResponse.json({
      message: 'Message sent successfully! We\'ll get back to you within 24 hours.',
      success: true
    }, {
      headers: {
        'X-RateLimit-Limit': '10',
        'X-RateLimit-Remaining': rateLimit.remaining.toString(),
        'X-RateLimit-Reset': rateLimit.resetTime.toString(),
      },
    });

  } catch (error) {
    console.error('Contact form error:', error);
    
    // Don't expose internal error details to client
    const errorMessage = error instanceof Error && process.env.NODE_ENV === 'development'
      ? error.message
      : 'Failed to send message. Please try again.';

    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}