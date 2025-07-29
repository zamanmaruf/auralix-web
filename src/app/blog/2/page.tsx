'use client';
import { FaCalendar, FaUser, FaClock, FaArrowLeft, FaShare, FaBookmark } from "react-icons/fa";
import Link from "next/link";

export default function BlogPost2() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-8"
        >
          <FaArrowLeft />
          Back to Blog
        </Link>
        
        <article className="bg-[#1a1a1a] rounded-xl overflow-hidden">
          {/* Hero Image */}
          <div className="h-64 bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
            <div className="text-center text-white">
              <div className="text-6xl font-bold opacity-20">AI</div>
              <div className="text-xl font-semibold">Case Study</div>
            </div>
          </div>
          
          <div className="p-8">
            {/* Article Header */}
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-green-500 text-black text-sm font-semibold rounded-full">
                  Case Study
                </span>
                <span className="text-cyan-400 text-sm font-semibold">Case Studies</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                How Nova Scotia Restaurants Are Using AI to Boost Revenue
              </h1>
              
              <div className="flex items-center gap-6 text-sm text-gray-400 mb-6">
                <div className="flex items-center gap-2">
                  <FaUser />
                  <span>Fardeenul Islam</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCalendar />
                  <span>March 12, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaClock />
                  <span>6 min read</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 text-gray-400 hover:text-cyan-400">
                  <FaShare />
                  Share
                </button>
                <button className="flex items-center gap-2 text-gray-400 hover:text-cyan-400">
                  <FaBookmark />
                  Save
                </button>
              </div>
            </div>
            
            {/* Article Content */}
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-gray-300 mb-6">
                In the competitive restaurant industry of Nova Scotia, local establishments are discovering that AI automation isn&apos;t just for big chains—it&apos;s a game-changer for independent restaurants too. This real-world case study shows how three local restaurants increased their bookings by 40% and reduced administrative time by 60% using AI automation.
              </p>
              
              <h2 className="text-2xl font-bold text-white mb-4">The Challenge: Seasonal Tourism and Manual Operations</h2>
              <p className="text-gray-300 mb-6">
                Nova Scotia&apos;s restaurant scene faces unique challenges: seasonal tourism fluctuations, labor shortages, and the need to maintain personal service while competing with larger chains. Three local restaurants—The Maritime Grill, Ocean Breeze Seafood, and Halifax Heritage Pub—faced these exact challenges.
              </p>
              
              <h2 className="text-2xl font-bold text-white mb-4">The Solution: Comprehensive AI Integration</h2>
              
              <h3 className="text-xl font-semibold text-white mb-3">1. Smart Reservation Management</h3>
              <p className="text-gray-300 mb-6">
                The restaurants implemented AI-powered reservation systems that could handle multiple booking channels (phone, website, social media) simultaneously. The system automatically managed table availability, sent confirmation messages, and even suggested optimal seating arrangements based on party size and preferences.
              </p>
              
              <h3 className="text-xl font-semibold text-white mb-3">2. Dynamic Pricing and Menu Optimization</h3>
              <p className="text-gray-300 mb-6">
                Using AI analytics, the restaurants could adjust menu prices based on demand, seasonal availability, and competitor pricing. The system also suggested menu modifications based on customer feedback and ordering patterns, leading to better inventory management and reduced waste.
              </p>
              
              <h3 className="text-xl font-semibold text-white mb-3">3. Customer Service Automation</h3>
              <p className="text-gray-300 mb-6">
                AI chatbots handled common customer inquiries about hours, menu items, and reservation changes, freeing up staff to focus on in-person service. The chatbots were trained on local dialect and could handle requests in both English and French.
              </p>
              
              <h2 className="text-2xl font-bold text-white mb-4">Implementation Process</h2>
              
              <h3 className="text-xl font-semibold text-white mb-3">Phase 1: Assessment and Planning (2 weeks)</h3>
              <p className="text-gray-300 mb-6">
                Each restaurant underwent a thorough assessment of their current operations, identifying pain points and opportunities for automation. The team worked closely with restaurant owners to understand their unique needs and concerns.
              </p>
              
              <h3 className="text-xl font-semibold text-white mb-3">Phase 2: Pilot Program (4 weeks)</h3>
              <p className="text-gray-300 mb-6">
                A pilot program was implemented at The Maritime Bistro to test the AI solutions in a real environment. This allowed for fine-tuning and customization before full deployment.
              </p>
              
              <h3 className="text-xl font-semibold text-white mb-3">Phase 3: Full Deployment (6 weeks)</h3>
              <p className="text-gray-300 mb-6">
                The successful pilot led to full deployment across all three restaurants, with comprehensive training for staff and ongoing support.
              </p>
              
              <h2 className="text-2xl font-bold text-white mb-4">Measurable Results</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-[#0a2a3a] rounded-lg p-6">
                  <h4 className="text-xl font-bold text-cyan-400 mb-2">40% Increase in Bookings</h4>
                  <p className="text-gray-300">Improved reservation management and marketing automation led to significantly higher booking rates, especially during peak tourist seasons.</p>
                </div>
                <div className="bg-[#0a2a3a] rounded-lg p-6">
                  <h4 className="text-xl font-bold text-cyan-400 mb-2">60% Reduction in Admin Time</h4>
                  <p className="text-gray-300">Automated scheduling, inventory management, and customer communication freed up valuable time for staff to focus on service quality.</p>
                </div>
                <div className="bg-[#0a2a3a] rounded-lg p-6">
                  <h4 className="text-xl font-bold text-cyan-400 mb-2">25% Increase in Average Order Value</h4>
                  <p className="text-gray-300">AI-powered recommendations and dynamic pricing strategies led to higher customer spending per visit.</p>
                </div>
                <div className="bg-[#0a2a3a] rounded-lg p-6">
                  <h4 className="text-xl font-bold text-cyan-400 mb-2">90% Customer Satisfaction</h4>
                  <p className="text-gray-300">Improved service speed and personalized experiences resulted in higher customer satisfaction scores.</p>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-white mb-4">Key Success Factors</h2>
              
              <h3 className="text-xl font-semibold text-white mb-3">Local Market Understanding</h3>
              <p className="text-gray-300 mb-6">
                The AI solutions were customized to understand Nova Scotia&apos;s unique market dynamics, including seasonal tourism patterns and local customer preferences.
              </p>
              
              <h3 className="text-xl font-semibold text-white mb-3">Staff Training and Buy-in</h3>
              <p className="text-gray-300 mb-6">
                Comprehensive training programs ensured that staff understood how to work with the new AI systems and could focus on providing exceptional personal service.
              </p>
              
              <h3 className="text-xl font-semibold text-white mb-3">Continuous Optimization</h3>
              <p className="text-gray-300 mb-6">
                Regular reviews and updates to the AI systems ensured they remained effective as market conditions and customer preferences evolved.
              </p>
              
              <h2 className="text-2xl font-bold text-white mb-4">Lessons Learned</h2>
              <p className="text-gray-300 mb-6">
                The success of this case study demonstrates that AI automation can be effectively implemented in small, independent restaurants. The key is choosing the right solutions, providing adequate training, and maintaining the personal touch that customers value.
              </p>
              
              <h2 className="text-2xl font-bold text-white mb-4">Conclusion</h2>
              <p className="text-gray-300 mb-6">
                The Nova Scotia restaurant case study proves that AI automation isn&apos;t just for large chains—it&apos;s a powerful tool for independent restaurants looking to compete and thrive in today&apos;s market. By embracing technology while maintaining their unique character and service quality, these restaurants have positioned themselves for long-term success.
              </p>
              
              <div className="bg-[#0a2a3a] rounded-lg p-6 mt-8">
                <h3 className="text-xl font-bold text-white mb-4">Ready to Transform Your Restaurant?</h3>
                <p className="text-gray-300 mb-4">
                  Discover how Auralix AI can help your restaurant increase revenue and reduce operational costs through intelligent automation solutions.
                </p>
                <Link 
                  href="/trial" 
                  className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-6 py-3 rounded-lg transition-all duration-200"
                >
                  Start Free Trial
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}