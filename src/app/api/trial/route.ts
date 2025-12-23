import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { businessName, industry, teamSize, useCase, painPoints, email, phone } = body;

    // Validate required fields
    if (!businessName || !industry || !teamSize || !useCase || !painPoints || !email || !phone) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Send confirmation email to business
    if (!resend) {
      console.log('Resend API key not configured, skipping email send');
      return NextResponse.json({
        message: 'Trial request submitted successfully! We\'ll contact you soon.',
        success: true
      });
    }

    const businessEmail = await resend.emails.send({
      from: 'Auralix AI <hello@auralix.ai>',
      to: [email],
      subject: 'Welcome to Your Auralix AI Trial! 🎉',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #0a0a0a, #1a1a1a); padding: 30px; border-radius: 10px; color: white;">
            <h1 style="color: #22d3ee; font-size: 28px; margin-bottom: 20px;">Welcome to Auralix AI!</h1>
            
            <p style="font-size: 18px; margin-bottom: 20px;">Hi ${businessName} team,</p>
            
            <p style="font-size: 16px; margin-bottom: 20px;">
              Thank you for requesting your free trial! We're excited to help you automate your home services operations and never miss another call.
            </p>
            
            <div style="background: #1a1a1a; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #22d3ee; margin-bottom: 15px;">Your Trial Details:</h3>
              <ul style="list-style: none; padding: 0;">
                <li style="margin-bottom: 8px;"><strong>Business:</strong> ${businessName}</li>
                <li style="margin-bottom: 8px;"><strong>Type:</strong> ${industry}</li>
                <li style="margin-bottom: 8px;"><strong>Team Size:</strong> ${teamSize}</li>
                <li style="margin-bottom: 8px;"><strong>Goal:</strong> ${useCase}</li>
              </ul>
            </div>
            
            <div style="background: #0a0a0a; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #22d3ee; margin-bottom: 15px;">What happens next?</h3>
              <ol style="padding-left: 20px;">
                <li style="margin-bottom: 10px;">Our team will contact you within 24 hours to schedule your onboarding call</li>
                <li style="margin-bottom: 10px;">You'll receive your trial credentials and platform access</li>
                <li style="margin-bottom: 10px;">Start exploring and see results in your first week!</li>
              </ol>
            </div>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://auralix.ai/solutions" style="background: #22d3ee; color: #0a0a0a; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">
                Explore Our Solutions
              </a>
            </div>
            
            <p style="font-size: 14px; color: #888; margin-top: 30px;">
              Questions? Reply to this email or visit our support center.
            </p>
          </div>
        </div>
      `,
    });

    // Send notification to Auralix team
    const teamEmail = await resend.emails.send({
      from: 'Auralix AI <hello@auralix.ai>',
      to: ['hello@auralix.ai'],
      subject: `New Trial Request: ${businessName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #22d3ee;">New Trial Request</h2>
          
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3>Business Details:</h3>
            <ul>
              <li><strong>Name:</strong> ${businessName}</li>
              <li><strong>Type:</strong> ${industry}</li>
              <li><strong>Team Size:</strong> ${teamSize}</li>
              <li><strong>Email:</strong> ${email}</li>
              <li><strong>Phone:</strong> ${phone}</li>
            </ul>
          </div>
          
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3>Goals & Challenges:</h3>
            <p><strong>Primary Goal:</strong> ${useCase}</p>
            <p><strong>Challenges:</strong> ${painPoints}</p>
          </div>
          
          <p style="color: #666; font-size: 14px;">
            Follow up within 24 hours to schedule their onboarding call.
          </p>
        </div>
      `,
    });

    return NextResponse.json({
      message: 'Trial request submitted successfully! Check your email for next steps.',
      success: true
    });

  } catch (error) {
    console.error('Trial submission error:', error);
    return NextResponse.json(
      { error: 'Failed to submit trial request. Please try again.' },
      { status: 500 }
    );
  }
}