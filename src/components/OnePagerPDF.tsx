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
      
      // Set up colors per one-pager instructions
      const deepNavy = [15, 23, 42]; // #0F172A (deep navy)
      const electricBlue = [59, 130, 246]; // #3B82F6 (electric blue)
      const violet = [139, 92, 246]; // #8B5CF6 (violet)
      const charcoal = [55, 65, 81]; // gray-700
      const lightText = [255, 255, 255]; // white
      const darkText = [0, 0, 0]; // black
      const grayText = [107, 114, 128]; // gray-500
      
      // Clean white background
      pdf.setFillColor(255, 255, 255);
      pdf.rect(0, 0, 210, 297, 'F');
      
      // Header Block - Clean and professional
      pdf.setFontSize(28);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(deepNavy[0], deepNavy[1], deepNavy[2]);
      pdf.text('Never Miss Another Customer Call', 20, 25);
      
      // Subheadline with better spacing
      pdf.setFontSize(16);
      pdf.setFont('helvetica', 'normal');
      pdf.setTextColor(electricBlue[0], electricBlue[1], electricBlue[2]);
      pdf.text('AI Voice Agent + Chatbot for Restaurants', 20, 40);
      
      // Value proposition with better typography
      pdf.setFontSize(12);
      pdf.setFont('helvetica', 'normal');
      pdf.setTextColor(charcoal[0], charcoal[1], charcoal[2]);
      pdf.text('Boost Bookings • Save Staff Time • Recover Lost Revenue', 20, 55);
      
      // Problem → Solution (Clean Two-Column Layout)
      pdf.setFontSize(18);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(deepNavy[0], deepNavy[1], deepNavy[2]);
      pdf.text('The Problem', 20, 75);
      
      // Problem bullets with better formatting
      pdf.setFontSize(11);
      pdf.setFont('helvetica', 'normal');
      pdf.setTextColor(charcoal[0], charcoal[1], charcoal[2]);
      pdf.text('• 43% of customer calls go unanswered', 20, 88);
      pdf.text('• $2,250+/month in missed orders', 20, 98);
      pdf.text('• Staff too busy during peak hours', 20, 108);
      pdf.text('• Customers hang up, or go elsewhere', 20, 118);
      pdf.text('• Reviews suffer, retention drops', 20, 128);
      
      // Solution section
      pdf.setFontSize(18);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(electricBlue[0], electricBlue[1], electricBlue[2]);
      pdf.text('The Solution', 110, 75);
      
      // Solution bullets
      pdf.setFontSize(11);
      pdf.setFont('helvetica', 'normal');
      pdf.setTextColor(charcoal[0], charcoal[1], charcoal[2]);
      pdf.text('• AI receptionist picks up every call 24/7', 110, 88);
      pdf.text('• Smart chatbot captures bookings on Instagram, WhatsApp, and your site', 110, 98);
      pdf.text('• Automates confirmations, follow-ups, and review requests', 110, 108);
      pdf.text('• Installs in 24–48 hours. No hardware needed.', 110, 118);
      
      // Clean divider line
      pdf.setDrawColor(electricBlue[0], electricBlue[1], electricBlue[2]);
      pdf.setLineWidth(1);
      pdf.line(105, 70, 105, 135);
      
      // Key Features - Clean Grid Layout
      pdf.setFontSize(18);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(deepNavy[0], deepNavy[1], deepNavy[2]);
      pdf.text('Key Features', 20, 150);
      
      // Feature grid (2x3 layout for better readability)
      const features = [
        { title: 'AI Voice Receptionist', desc: 'Answers calls, books tables, takes orders' },
        { title: 'Multi-Channel Chatbot', desc: 'Works on Instagram, WhatsApp, Messenger' },
        { title: 'Automation Hub', desc: 'Sends reminders, requests reviews, handles re-bookings' },
        { title: 'Analytics Dashboard', desc: 'See your AI\'s performance and impact' },
        { title: 'Live Support', desc: 'Onboarding help and proactive optimization' },
        { title: 'Available 24/7', desc: 'Never miss a call — even after hours' }
      ];
      
      features.forEach((feature, index) => {
        const x = 20 + (index % 2) * 90;
        const y = 170 + Math.floor(index / 2) * 30;
        
        // Clean feature box with subtle styling
        pdf.setFillColor(248, 250, 252); // Very light gray background
        pdf.rect(x, y - 10, 80, 25, 'F');
        pdf.setDrawColor(electricBlue[0], electricBlue[1], electricBlue[2]);
        pdf.setLineWidth(1);
        pdf.rect(x, y - 10, 80, 25);
        
        // Feature title
        pdf.setFontSize(11);
        pdf.setFont('helvetica', 'bold');
        pdf.setTextColor(deepNavy[0], deepNavy[1], deepNavy[2]);
        pdf.text(feature.title, x + 5, y - 2);
        
        // Feature description
        pdf.setFontSize(9);
        pdf.setFont('helvetica', 'normal');
        pdf.setTextColor(charcoal[0], charcoal[1], charcoal[2]);
        pdf.text(feature.desc, x + 5, y + 8);
      });
      
      // Pricing Tiers - Clean Card Layout
      pdf.setFontSize(18);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(deepNavy[0], deepNavy[1], deepNavy[2]);
      pdf.text('Simple Monthly Plans', 20, 280);
      
      // Pricing cards (2-column layout)
      const plans = [
        { name: 'Starter', price: '$199/mo', setup: '$499 CAD', who: 'Small businesses', features: 'Voice agent + Basic features', color: violet, popular: false },
        { name: 'Professional', price: '$499/mo', setup: '$799 CAD', who: 'Growing businesses', features: 'Advanced features + Multi-location', color: electricBlue, popular: true },
        { name: 'Enterprise', price: 'Custom', setup: 'Custom', who: 'Large organizations', features: 'Full suite + Custom solutions', color: gold, popular: false }
      ];
      
      plans.forEach((plan, index) => {
        const x = 20 + index * 90; // Wider spacing for 2 cards
        const y = 300;
        
        // Plan card
        pdf.setFillColor(248, 250, 252); // Light background
        pdf.rect(x, y, 80, 60, 'F'); // Taller card for more content
        pdf.setDrawColor(plan.color[0], plan.color[1], plan.color[2]);
        pdf.setLineWidth(2);
        pdf.rect(x, y, 80, 60);
        
        // Popular badge
        if (plan.popular) {
          pdf.setFillColor(violet[0], violet[1], violet[2]);
          pdf.rect(x, y, 80, 8, 'F');
          pdf.setTextColor(lightText[0], lightText[1], lightText[2]);
          pdf.setFontSize(8);
          pdf.setFont('helvetica', 'bold');
          pdf.text('MOST POPULAR', x + 25, y + 5);
        }
        
        // Plan name
        pdf.setFontSize(14);
        pdf.setFont('helvetica', 'bold');
        pdf.setTextColor(plan.color[0], plan.color[1], plan.color[2]);
        pdf.text(plan.name, x + 5, y + 20);
        
        // Monthly price
        pdf.setFontSize(16);
        pdf.setFont('helvetica', 'bold');
        pdf.setTextColor(deepNavy[0], deepNavy[1], deepNavy[2]);
        pdf.text(plan.price, x + 5, y + 32);
        
        // Setup fee
        pdf.setFontSize(10);
        pdf.setFont('helvetica', 'normal');
        pdf.setTextColor(charcoal[0], charcoal[1], charcoal[2]);
        pdf.text(`Setup: ${plan.setup}`, x + 5, y + 42);
        
        // Description
        pdf.setFontSize(9);
        pdf.setFont('helvetica', 'normal');
        pdf.setTextColor(charcoal[0], charcoal[1], charcoal[2]);
        pdf.text(plan.who, x + 5, y + 52);
      });
      
      // Pricing notes
      pdf.setFontSize(10);
      pdf.setFont('helvetica', 'normal');
      pdf.setTextColor(charcoal[0], charcoal[1], charcoal[2]);
      pdf.text('Setup fees required • No contracts • Cancel anytime', 20, 370);
      pdf.text('Founder\'s Offer: First 100 clients get 20% off for life', 20, 380);
      
      // Add new page for success proof and CTA
      pdf.addPage();
      
      // White background
      pdf.setFillColor(255, 255, 255);
      pdf.rect(0, 0, 210, 297, 'F');
      
      // Success Proof - Clean Highlight Box
      pdf.setFillColor(248, 250, 252); // Light gray background
      pdf.rect(20, 30, 170, 50, 'F');
      pdf.setDrawColor(electricBlue[0], electricBlue[1], electricBlue[2]);
      pdf.setLineWidth(2);
      pdf.rect(20, 30, 170, 50);
      
      pdf.setFontSize(16);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(deepNavy[0], deepNavy[1], deepNavy[2]);
      pdf.text('Real Results from Nova Scotia Restaurant Group', 30, 45);
      
      pdf.setFontSize(12);
      pdf.setFont('helvetica', 'normal');
      pdf.setTextColor(charcoal[0], charcoal[1], charcoal[2]);
      pdf.text('+40% increase in bookings • +25% revenue growth • –60% admin time', 30, 60);
      
      pdf.setFontSize(11);
      pdf.setFont('helvetica', 'italic');
      pdf.setTextColor(charcoal[0], charcoal[1], charcoal[2]);
      pdf.text('"Auralix now answers 80% of our calls. Our staff focus on service, not phones."', 30, 75);
      
      // Final CTA - Clean and Professional
      pdf.setFontSize(20);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(deepNavy[0], deepNavy[1], deepNavy[2]);
      pdf.text('Ready to Stop Losing Bookings?', 20, 100);
      
      pdf.setFontSize(14);
      pdf.setFont('helvetica', 'normal');
      pdf.setTextColor(charcoal[0], charcoal[1], charcoal[2]);
      pdf.text('Get started with Auralix AI today. Professional setup included.', 20, 120);
      
      // Contact info
      pdf.setFontSize(12);
      pdf.setFont('helvetica', 'normal');
      pdf.setTextColor(charcoal[0], charcoal[1], charcoal[2]);
      pdf.text('Visit: www.auralixai.ca • Email: info@auralixai.ca • Phone: +1 (782) 882-8635', 20, 140);
      
      // CTA buttons - Clean design
      pdf.setFillColor(electricBlue[0], electricBlue[1], electricBlue[2]);
      pdf.rect(20, 160, 70, 20, 'F');
      pdf.setTextColor(lightText[0], lightText[1], lightText[2]);
      pdf.setFontSize(11);
      pdf.setFont('helvetica', 'bold');
      pdf.text('Request Demo', 45, 172);
      
      pdf.setFillColor(violet[0], violet[1], violet[2]);
      pdf.rect(100, 160, 70, 20, 'F');
      pdf.setTextColor(lightText[0], lightText[1], lightText[2]);
      pdf.setFontSize(11);
      pdf.setFont('helvetica', 'bold');
      pdf.text('Get Started', 120, 172);
      
      // Trust badges - Clean footer
      pdf.setFontSize(10);
      pdf.setFont('helvetica', 'normal');
      pdf.setTextColor(grayText[0], grayText[1], grayText[2]);
      pdf.text('Canadian-Owned • Built for Restaurants • Live Support Included', 20, 200);
      pdf.text('Offer Ends: After first 100 clients', 20, 210);
      
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
                <span>Schedule a demo at auralixai.ca</span>
              </div>
              <span className="hidden md:block">or</span>
              <div className="flex items-center gap-2">
                <span>email info@auralixai.ca</span>
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
