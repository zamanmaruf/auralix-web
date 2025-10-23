'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Phone, Bot, Zap, Clock, BarChart3, CheckCircle, Star, ArrowRight } from 'lucide-react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export default function OnePagerPDF() {
  const [isGenerating, setIsGenerating] = useState(false);

  const generatePDF = async () => {
    setIsGenerating(true);
    
    try {
      console.log('Starting enterprise-grade PDF generation...');
      
      // Create PDF with enterprise styling
      const pdf = new jsPDF('p', 'mm', 'a4');
      
      // Set up colors (matching website theme)
      const primaryColor = [20, 184, 166]; // #14b8a6 (cyan)
      const accentColor = [255, 122, 0]; // #FF7A00 (orange)
      const darkBg = [10, 10, 10]; // #0a0a0a (dark)
      const lightText = [255, 255, 255]; // white
      const grayText = [156, 163, 175]; // gray-400
      const darkGray = [55, 65, 81]; // gray-700
      
      // Add dark background
      pdf.setFillColor(darkBg[0], darkBg[1], darkBg[2]);
      pdf.rect(0, 0, 210, 297, 'F');
      
      // Header with gradient effect
      pdf.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
      pdf.rect(0, 0, 210, 60, 'F');
      
      // Logo area (simulated with text)
      pdf.setTextColor(lightText[0], lightText[1], lightText[2]);
      pdf.setFontSize(28);
      pdf.setFont('helvetica', 'bold');
      pdf.text('AURALIX AI', 20, 25);
      
      // Tagline
      pdf.setFontSize(12);
      pdf.setFont('helvetica', 'normal');
      pdf.text('Restaurant AI Automation', 20, 35);
      pdf.text('Halifax, Nova Scotia, Canada', 20, 45);
      
      // Main headline
      pdf.setFontSize(24);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(lightText[0], lightText[1], lightText[2]);
      pdf.text('Never Miss Another Customer Call', 20, 70);
      
      // Subtitle
      pdf.setFontSize(16);
      pdf.setFont('helvetica', 'normal');
      pdf.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
      pdf.text('AI Receptionist + Chatbot for Restaurants', 20, 85);
      pdf.text('Increase Bookings by 40%', 20, 95);
      
      // Problem section with red accent
      pdf.setFillColor(220, 38, 38, 0.1); // Red with transparency
      pdf.rect(20, 110, 170, 40, 'F');
      pdf.setDrawColor(220, 38, 38);
      pdf.setLineWidth(2);
      pdf.rect(20, 110, 170, 40);
      
      pdf.setFontSize(18);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(220, 38, 38);
      pdf.text('THE PROBLEM', 30, 125);
      
      pdf.setFontSize(12);
      pdf.setFont('helvetica', 'normal');
      pdf.setTextColor(lightText[0], lightText[1], lightText[2]);
      pdf.text('Restaurants miss up to 43% of customer calls', 30, 135);
      pdf.text('costing $27,000+ per year in lost orders', 30, 145);
      
      // Solution section with green accent
      pdf.setFillColor(34, 197, 94, 0.1); // Green with transparency
      pdf.rect(20, 160, 170, 40, 'F');
      pdf.setDrawColor(34, 197, 94);
      pdf.setLineWidth(2);
      pdf.rect(20, 160, 170, 40);
      
      pdf.setFontSize(18);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(34, 197, 94);
      pdf.text('THE AURALIX SOLUTION', 30, 175);
      
      pdf.setFontSize(12);
      pdf.setFont('helvetica', 'normal');
      pdf.setTextColor(lightText[0], lightText[1], lightText[2]);
      pdf.text('Auralix answers every call 24/7 with human-like AI voice', 30, 185);
      pdf.text('Proven to increase bookings by 40% and reduce admin time by 60%', 30, 195);
      
      // Features section
      pdf.setFontSize(18);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
      pdf.text('KEY FEATURES', 20, 220);
      
      // Feature boxes
      const features = [
        { title: 'AI Voice Receptionist', desc: 'Handles calls, takes bookings' },
        { title: 'Website & Social Chatbot', desc: 'Multi-platform customer service' },
        { title: 'Workflow Automation', desc: 'Review requests, payment reminders' },
        { title: 'Works 24/7', desc: 'Never miss a call or order again' },
        { title: 'Live Dashboard', desc: 'Track performance and ROI daily' }
      ];
      
      features.forEach((feature, index) => {
        const x = 20 + (index % 2) * 95;
        const y = 235 + Math.floor(index / 2) * 25;
        
        // Feature box
        pdf.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2], 0.1);
        pdf.rect(x, y - 15, 85, 20, 'F');
        pdf.setDrawColor(primaryColor[0], primaryColor[1], primaryColor[2]);
        pdf.setLineWidth(1);
        pdf.rect(x, y - 15, 85, 20);
        
        // Feature text
        pdf.setFontSize(10);
        pdf.setFont('helvetica', 'bold');
        pdf.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
        pdf.text(feature.title, x + 5, y - 5);
        
        pdf.setFontSize(8);
        pdf.setFont('helvetica', 'normal');
        pdf.setTextColor(lightText[0], lightText[1], lightText[2]);
        pdf.text(feature.desc, x + 5, y + 2);
      });
      
      // Add new page
      pdf.addPage();
      
      // Dark background for second page
      pdf.setFillColor(darkBg[0], darkBg[1], darkBg[2]);
      pdf.rect(0, 0, 210, 297, 'F');
      
      // Pricing section
      pdf.setFontSize(20);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
      pdf.text('SIMPLE MONTHLY PLANS', 20, 30);
      
      // Pricing cards
      const plans = [
        { name: 'STARTER', price: '$99/mo', desc: 'Small restaurants (Chatbot only)', color: [75, 85, 99] },
        { name: 'STANDARD', price: '$199/mo', desc: 'Most common (Chatbot + Voice Agent)', color: primaryColor, popular: true },
        { name: 'PREMIUM', price: '$399/mo', desc: 'Growing chains (All features + 2 locations)', color: [147, 51, 234] }
      ];
      
      plans.forEach((plan, index) => {
        const x = 20 + index * 60;
        const y = 50;
        
        // Plan card
        pdf.setFillColor(plan.color[0], plan.color[1], plan.color[2], 0.1);
        pdf.rect(x, y, 55, 60, 'F');
        pdf.setDrawColor(plan.color[0], plan.color[1], plan.color[2]);
        pdf.setLineWidth(2);
        pdf.rect(x, y, 55, 60);
        
        // Popular badge
        if (plan.popular) {
          pdf.setFillColor(accentColor[0], accentColor[1], accentColor[2]);
          pdf.rect(x, y, 55, 8, 'F');
          pdf.setTextColor(lightText[0], lightText[1], lightText[2]);
          pdf.setFontSize(8);
          pdf.setFont('helvetica', 'bold');
          pdf.text('MOST POPULAR', x + 15, y + 5);
        }
        
        // Plan name
        pdf.setFontSize(12);
        pdf.setFont('helvetica', 'bold');
        pdf.setTextColor(plan.color[0], plan.color[1], plan.color[2]);
        pdf.text(plan.name, x + 5, y + 20);
        
        // Price
        pdf.setFontSize(16);
        pdf.setFont('helvetica', 'bold');
        pdf.setTextColor(lightText[0], lightText[1], lightText[2]);
        pdf.text(plan.price, x + 5, y + 35);
        
        // Description
        pdf.setFontSize(8);
        pdf.setFont('helvetica', 'normal');
        pdf.setTextColor(grayText[0], grayText[1], grayText[2]);
        pdf.text(plan.desc, x + 5, y + 45);
      });
      
      // Trial info
      pdf.setFontSize(12);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(accentColor[0], accentColor[1], accentColor[2]);
      pdf.text('14-day free trial with credit card required', 20, 130);
      
      // Success story
      pdf.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2], 0.1);
      pdf.rect(20, 150, 170, 50, 'F');
      pdf.setDrawColor(primaryColor[0], primaryColor[1], primaryColor[2]);
      pdf.setLineWidth(2);
      pdf.rect(20, 150, 170, 50);
      
      pdf.setFontSize(16);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
      pdf.text('SUCCESS STORY: NOVA SCOTIA RESTAURANT GROUP', 30, 165);
      
      pdf.setFontSize(12);
      pdf.setFont('helvetica', 'normal');
      pdf.setTextColor(lightText[0], lightText[1], lightText[2]);
      pdf.text('+40% Bookings    -60% Admin Time    +25% Revenue', 30, 175);
      pdf.text('"Auralix AI answers 80% of our calls so staff can focus', 30, 185);
      pdf.text('on food and guests." - Sarah Mitchell, Owner', 30, 195);
      
      // Contact section
      pdf.setFontSize(18);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
      pdf.text('READY TO STOP LOSING ORDERS?', 20, 220);
      
      pdf.setFontSize(12);
      pdf.setFont('helvetica', 'normal');
      pdf.setTextColor(lightText[0], lightText[1], lightText[2]);
      pdf.text('Join hundreds of restaurants that have already automated', 20, 235);
      pdf.text('their operations with Auralix AI.', 20, 245);
      
      // Contact info
      pdf.setFontSize(14);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
      pdf.text('CONTACT INFORMATION', 20, 265);
      
      pdf.setFontSize(11);
      pdf.setFont('helvetica', 'normal');
      pdf.setTextColor(lightText[0], lightText[1], lightText[2]);
      pdf.text('Email: auralixai@gmail.com', 20, 275);
      pdf.text('Phone: +1 9024414928', 20, 285);
      pdf.text('Website: auralixai.ca', 20, 295);
      
      pdf.save('Auralix-AI-Restaurant-One-Pager.pdf');
      console.log('Enterprise-grade PDF generated successfully');
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating PDF. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl font-bold text-white mb-4">Download Our One-Pager</h2>
        <p className="text-gray-300 mb-6">
          Get a comprehensive overview of Auralix AI's restaurant automation solutions
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={generatePDF}
          disabled={isGenerating}
          className="bg-primary-500 hover:bg-primary-400 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 flex items-center gap-3 mx-auto"
        >
          {isGenerating ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              Generating PDF...
            </>
          ) : (
            <>
              <Download className="w-5 h-5" />
              Download One-Pager PDF
            </>
          )}
        </motion.button>
      </motion.div>

      {/* Hidden content for PDF generation */}
      <div id="one-pager-content" className="hidden">
        <div className="bg-white text-black p-8 max-w-4xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-white">A</span>
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Never Miss Another Customer Call
            </h1>
            <p className="text-xl text-gray-700 mb-2">
              AI Receptionist + Chatbot for Restaurants
            </p>
            <p className="text-2xl font-bold text-cyan-600">
              Increase Bookings by 40%
            </p>
          </div>

          {/* Problem + Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-red-800 mb-4">The Problem</h3>
              <p className="text-gray-700 mb-3">
                <strong>Restaurants miss up to 43% of customer calls</strong> — costing $27,000+ per year in lost orders.
              </p>
              <p className="text-gray-700">
                Staff are too busy to pick up during rush hours. Customers hang up. Revenue disappears.
              </p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-green-800 mb-4">The Auralix Solution</h3>
              <p className="text-gray-700 mb-3">
                <strong>Auralix answers every call 24/7</strong> with a human-like AI voice agent.
              </p>
              <p className="text-gray-700 mb-3">
                Our chatbot captures reservations, answers FAQs, and auto-texts customers on Instagram, Messenger, and your site.
              </p>
              <p className="text-gray-700 font-semibold">
                Proven to increase bookings by 40% and reduce admin time by 60%.
              </p>
            </div>
          </div>

          {/* Features Snapshot */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-6 h-6 text-cyan-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">AI Voice Receptionist</h4>
                <p className="text-sm text-gray-600">Handles calls, takes bookings, provides directions</p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Bot className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Chatbot on Web & Socials</h4>
                <p className="text-sm text-gray-600">Works on Instagram, WhatsApp, Messenger, Website</p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Workflow Automation</h4>
                <p className="text-sm text-gray-600">Review requests, payment reminders, follow-ups</p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Works 24/7</h4>
                <p className="text-sm text-gray-600">Never miss a call or order again</p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <BarChart3 className="w-6 h-6 text-orange-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Live Dashboard</h4>
                <p className="text-sm text-gray-600">Track performance and ROI daily</p>
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Simple Monthly Plans</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Starter</h4>
                <p className="text-gray-600 mb-4">Small restaurants</p>
                <div className="text-3xl font-bold text-gray-900 mb-4">$99/mo</div>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Chatbot only
                  </li>
                </ul>
              </div>
              
              <div className="border-2 border-cyan-500 rounded-lg p-6 bg-cyan-50">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="text-lg font-bold text-gray-900">Standard</h4>
                  <span className="bg-cyan-500 text-white text-xs px-2 py-1 rounded">Most Popular</span>
                </div>
                <p className="text-gray-600 mb-4">Most common</p>
                <div className="text-3xl font-bold text-gray-900 mb-4">$199/mo</div>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Chatbot + Voice Agent
                  </li>
                </ul>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Premium</h4>
                <p className="text-gray-600 mb-4">Growing chains</p>
                <div className="text-3xl font-bold text-gray-900 mb-4">$399/mo</div>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    All features + 2 locations
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-gray-700 mb-2">
                <strong>Free Trial:</strong> 14-day full access with credit card required.
              </p>
              <p className="text-cyan-600 font-semibold">
                Founder's Offer: First 100 clients get 20% off for life.
              </p>
            </div>
          </div>

          {/* Results Snapshot */}
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Success Story: Nova Scotia Restaurant Group</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">+40%</div>
                <div className="text-gray-700">Bookings</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">-60%</div>
                <div className="text-gray-700">Admin Time</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">+25%</div>
                <div className="text-gray-700">Revenue</div>
              </div>
            </div>
            <blockquote className="text-center text-lg text-gray-700 italic">
              "Auralix AI answers 80% of our calls so staff can focus on food and guests."
            </blockquote>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gray-900 text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Ready to recover lost orders and grow bookings?</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-4">
              <div className="flex items-center gap-2">
                <ArrowRight className="w-5 h-5" />
                <span>Book your free trial at auralixai.ca</span>
              </div>
              <span className="hidden md:block">or</span>
              <div className="flex items-center gap-2">
                <span>email auralixai@gmail.com</span>
              </div>
            </div>
            <p className="text-cyan-300 font-semibold">
              Spots in our Founder's Club are limited to 100. Lock in lifetime pricing today.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
