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
      // Create a temporary container for PDF generation
      const tempContainer = document.createElement('div');
      tempContainer.style.position = 'absolute';
      tempContainer.style.left = '-9999px';
      tempContainer.style.top = '0';
      tempContainer.style.width = '210mm'; // A4 width
      tempContainer.style.backgroundColor = '#ffffff';
      tempContainer.style.padding = '20px';
      tempContainer.style.fontFamily = 'Inter, sans-serif';
      
      // Get the content element
      const element = document.getElementById('one-pager-content');
      if (!element) {
        console.error('PDF content element not found');
        alert('PDF content not found. Please refresh the page and try again.');
        return;
      }

      // Clone the content and add to temp container
      const clonedContent = element.cloneNode(true) as HTMLElement;
      clonedContent.style.display = 'block';
      clonedContent.style.position = 'static';
      clonedContent.style.left = '';
      clonedContent.style.top = '';
      clonedContent.style.opacity = '1';
      clonedContent.style.pointerEvents = 'auto';
      
      tempContainer.appendChild(clonedContent);
      document.body.appendChild(tempContainer);

      console.log('Temp container created, generating canvas...');

      const canvas = await html2canvas(tempContainer, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        width: tempContainer.scrollWidth,
        height: tempContainer.scrollHeight,
        logging: true
      });

      // Remove temp container
      document.body.removeChild(tempContainer);

      console.log('Canvas generated, creating PDF...');

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      
      const imgWidth = 210;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;

      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save('Auralix-AI-Restaurant-One-Pager.pdf');
      console.log('PDF generated successfully');
    } catch (error) {
      console.error('Error generating PDF:', error);
      // Fallback: Create PDF programmatically
      try {
        console.log('Attempting fallback PDF generation...');
        const fallbackPdf = new jsPDF('p', 'mm', 'a4');
        
        // Add title
        fallbackPdf.setFontSize(24);
        fallbackPdf.setFont('helvetica', 'bold');
        fallbackPdf.text('Auralix AI - Restaurant Automation', 20, 30);
        
        // Add subtitle
        fallbackPdf.setFontSize(16);
        fallbackPdf.setFont('helvetica', 'normal');
        fallbackPdf.text('Never Miss Another Customer Call', 20, 45);
        fallbackPdf.text('AI Receptionist + Chatbot for Restaurants', 20, 55);
        fallbackPdf.text('Increase Bookings by 40%', 20, 65);
        
        // Add problem section
        fallbackPdf.setFontSize(14);
        fallbackPdf.setFont('helvetica', 'bold');
        fallbackPdf.text('The Problem:', 20, 85);
        fallbackPdf.setFont('helvetica', 'normal');
        fallbackPdf.text('Restaurants miss up to 43% of customer calls', 20, 95);
        fallbackPdf.text('costing $27,000+ per year in lost orders.', 20, 105);
        
        // Add solution section
        fallbackPdf.setFont('helvetica', 'bold');
        fallbackPdf.text('The Auralix Solution:', 20, 125);
        fallbackPdf.setFont('helvetica', 'normal');
        fallbackPdf.text('Auralix answers every call 24/7 with AI voice agent.', 20, 135);
        fallbackPdf.text('Proven to increase bookings by 40% and reduce admin time by 60%.', 20, 145);
        
        // Add pricing
        fallbackPdf.setFont('helvetica', 'bold');
        fallbackPdf.text('Simple Monthly Plans:', 20, 165);
        fallbackPdf.setFont('helvetica', 'normal');
        fallbackPdf.text('Starter: $99/mo - Small restaurants', 20, 175);
        fallbackPdf.text('Standard: $199/mo - Most common', 20, 185);
        fallbackPdf.text('Premium: $399/mo - Growing chains', 20, 195);
        fallbackPdf.text('14-day free trial with credit card required', 20, 205);
        
        // Add contact
        fallbackPdf.setFont('helvetica', 'bold');
        fallbackPdf.text('Contact:', 20, 215);
        fallbackPdf.setFont('helvetica', 'normal');
        fallbackPdf.text('Email: auralixai@gmail.com', 20, 225);
        fallbackPdf.text('Phone: +1 9024414928', 20, 235);
        fallbackPdf.text('Website: auralixai.ca', 20, 245);
        
        fallbackPdf.save('Auralix-AI-Restaurant-One-Pager.pdf');
        console.log('Fallback PDF generated successfully');
      } catch (fallbackError) {
        console.error('Fallback PDF generation failed:', fallbackError);
        alert('Error generating PDF. Please try again or contact support.');
      }
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
