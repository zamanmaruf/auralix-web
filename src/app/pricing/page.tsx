'use client';
import { FaGlobe, FaSearchDollar, FaRobot, FaChartBar, FaCogs, FaGift, FaShieldAlt, FaUsers, FaLock, FaHeadset, FaDownload } from "react-icons/fa";
import { useState } from "react";

export default function PricingPage() {
  const [selectedPlan, setSelectedPlan] = useState('monthly');
  const [teamSize, setTeamSize] = useState(5);
  const [locations, setLocations] = useState(1);

  const calculatePrice = (basePrice: number, plan: string, team: number, loc: number) => {
    let price = basePrice;
    if (plan === 'yearly') price *= 0.8; // 20% discount
    price += (team - 5) * 50; // $50 per additional team member
    price += (loc - 1) * 100; // $100 per additional location
    return Math.max(price, basePrice * 0.5); // Minimum 50% of base price
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a2a3a] via-[#0a2233] to-[#0a0a0a] text-white pb-20">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-cyan-300">Enterprise-Grade AI Solutions</h1>
        <p className="text-xl md:text-2xl text-cyan-100 mb-8">From startup to enterprise, we provide scalable AI automation solutions with transparent pricing that grows with your business.</p>
      </section>

      {/* Pricing Toggle */}
      <section className="max-w-2xl mx-auto text-center mb-12">
        <div className="bg-[#1a1a1a] rounded-full p-2 inline-flex">
          <button 
            onClick={() => setSelectedPlan('monthly')}
            className={`px-6 py-2 rounded-full transition-all ${selectedPlan === 'monthly' ? 'bg-cyan-500 text-black font-bold' : 'text-gray-300'}`}
          >
            Monthly
          </button>
          <button 
            onClick={() => setSelectedPlan('yearly')}
            className={`px-6 py-2 rounded-full transition-all ${selectedPlan === 'yearly' ? 'bg-cyan-500 text-black font-bold' : 'text-gray-300'}`}
          >
            Yearly (Save 20%)
          </button>
        </div>
      </section>

      {/* Dynamic Pricing Calculator */}
      <section className="max-w-4xl mx-auto mb-16 px-4">
        <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl">
          <h2 className="text-2xl font-bold text-center mb-8 text-white">Customize Your Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Team Size</label>
              <input 
                type="range" 
                min="1" 
                max="100" 
                value={teamSize} 
                onChange={(e) => setTeamSize(parseInt(e.target.value))}
                className="w-full"
              />
              <div className="text-center text-cyan-400 font-semibold">{teamSize} employees</div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Number of Locations</label>
              <input 
                type="range" 
                min="1" 
                max="20" 
                value={locations} 
                onChange={(e) => setLocations(parseInt(e.target.value))}
                className="w-full"
              />
              <div className="text-center text-cyan-400 font-semibold">{locations} location{locations > 1 ? 's' : ''}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tiered Pricing Cards */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 mb-20">
        {/* Small Business */}
        <div className="bg-[#11202a] rounded-2xl p-8 shadow-xl border border-teal-700 relative">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-teal-400 mb-2">Small Business</h3>
            <div className="text-3xl font-bold text-white mb-1">
              ${calculatePrice(299, selectedPlan, teamSize, locations).toFixed(0)}
              <span className="text-lg text-gray-400">/{selectedPlan === 'monthly' ? 'mo' : 'mo'}</span>
            </div>
            <p className="text-gray-300 text-sm">Perfect for 1-10 employees</p>
          </div>
          
          <ul className="space-y-3 mb-8">
            <li className="flex items-center text-sm text-gray-300">
              <FaRobot className="text-teal-400 mr-2" />
              AI Chatbot (Basic)
            </li>
            <li className="flex items-center text-sm text-gray-300">
              <FaChartBar className="text-teal-400 mr-2" />
              Basic Analytics Dashboard
            </li>
            <li className="flex items-center text-sm text-gray-300">
              <FaCogs className="text-teal-400 mr-2" />
              Workflow Automation (5 processes)
            </li>
            <li className="flex items-center text-sm text-gray-300">
              <FaGlobe className="text-teal-400 mr-2" />
              Website Design & SEO
            </li>
            <li className="flex items-center text-sm text-gray-300">
              <FaHeadset className="text-teal-400 mr-2" />
              Email Support
            </li>
          </ul>
          
          <a href="/trial" className="w-full bg-teal-500 hover:bg-teal-400 text-black font-bold py-3 px-6 rounded-lg transition-all duration-200 text-center block">
            Start Free Trial
          </a>
        </div>

        {/* Mid-Market */}
        <div className="bg-[#11202a] rounded-2xl p-8 shadow-xl border border-blue-700 relative transform scale-105">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-black px-4 py-1 rounded-full text-sm font-bold">
            MOST POPULAR
          </div>
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-blue-400 mb-2">Mid-Market</h3>
            <div className="text-3xl font-bold text-white mb-1">
              ${calculatePrice(799, selectedPlan, teamSize, locations).toFixed(0)}
              <span className="text-lg text-gray-400">/{selectedPlan === 'monthly' ? 'mo' : 'mo'}</span>
            </div>
            <p className="text-gray-300 text-sm">Perfect for 10-50 employees</p>
          </div>
          
          <ul className="space-y-3 mb-8">
            <li className="flex items-center text-sm text-gray-300">
              <FaRobot className="text-blue-400 mr-2" />
              Advanced AI Chatbot
            </li>
            <li className="flex items-center text-sm text-gray-300">
              <FaChartBar className="text-blue-400 mr-2" />
              Advanced Analytics & BI
            </li>
            <li className="flex items-center text-sm text-gray-300">
              <FaCogs className="text-blue-400 mr-2" />
              Unlimited Workflow Automation
            </li>
            <li className="flex items-center text-sm text-gray-300">
              <FaShieldAlt className="text-blue-400 mr-2" />
              Enhanced Security Features
            </li>
            <li className="flex items-center text-sm text-gray-300">
              <FaUsers className="text-blue-400 mr-2" />
              Multi-User Access
            </li>
            <li className="flex items-center text-sm text-gray-300">
              <FaHeadset className="text-blue-400 mr-2" />
              Priority Support
            </li>
          </ul>
          
          <a href="/trial" className="w-full bg-blue-500 hover:bg-blue-400 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 text-center block">
            Start Free Trial
          </a>
        </div>

        {/* Enterprise */}
        <div className="bg-[#11202a] rounded-2xl p-8 shadow-xl border border-purple-700 relative">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-purple-400 mb-2">Enterprise</h3>
            <div className="text-3xl font-bold text-white mb-1">
              ${calculatePrice(1999, selectedPlan, teamSize, locations).toFixed(0)}
              <span className="text-lg text-gray-400">/{selectedPlan === 'monthly' ? 'mo' : 'mo'}</span>
            </div>
            <p className="text-gray-300 text-sm">Perfect for 50+ employees</p>
          </div>
          
          <ul className="space-y-3 mb-8">
            <li className="flex items-center text-sm text-gray-300">
              <FaRobot className="text-purple-400 mr-2" />
              Custom AI Solutions
            </li>
            <li className="flex items-center text-sm text-gray-300">
              <FaChartBar className="text-purple-400 mr-2" />
              Enterprise BI & Analytics
            </li>
            <li className="flex items-center text-sm text-gray-300">
              <FaCogs className="text-purple-400 mr-2" />
              Custom Automation Development
            </li>
            <li className="flex items-center text-sm text-gray-300">
              <FaLock className="text-purple-400 mr-2" />
              SOC 2 Compliance
            </li>
            <li className="flex items-center text-sm text-gray-300">
              <FaUsers className="text-purple-400 mr-2" />
              Unlimited Users
            </li>
            <li className="flex items-center text-sm text-gray-300">
              <FaHeadset className="text-purple-400 mr-2" />
              24/7 Dedicated Support
            </li>
          </ul>
          
          <a href="/trial" className="w-full bg-purple-500 hover:bg-purple-400 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 text-center block">
            Start Free Trial
          </a>
        </div>
      </section>

      {/* Enterprise-Only Package */}
      <section className="max-w-4xl mx-auto mb-20 px-4">
        <div className="bg-gradient-to-r from-[#1a1a1a] to-[#0a2a3a] rounded-2xl p-8 shadow-xl border border-cyan-500">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-cyan-300 mb-4">Enterprise AI Suite</h2>
            <p className="text-lg text-gray-300">Custom AI solutions for large enterprises with specific requirements</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Custom Features</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span>Custom AI Model Development</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span>API Integration Services</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span>Dedicated Infrastructure</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span>Custom Training & Onboarding</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Enterprise Benefits</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span>Dedicated Account Manager</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span>SLA Guarantees</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span>Custom Reporting</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span>White-label Solutions</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center">
            <a href="/trial" className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-8 py-4 rounded-lg transition-all duration-200">
              <FaDownload />
              Download Pricing Deck
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto mb-20 px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-[#1a1a1a] rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-3">Can I change my plan later?</h3>
            <p className="text-gray-300">Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.</p>
          </div>
          <div className="bg-[#1a1a1a] rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-3">Is there a setup fee?</h3>
            <p className="text-gray-300">No setup fees for standard plans. Enterprise custom solutions may have one-time implementation costs.</p>
          </div>
          <div className="bg-[#1a1a1a] rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-3">What's included in the free trial?</h3>
            <p className="text-gray-300">14-day free trial includes all features of the Small Business plan with full support and no credit card required.</p>
          </div>
          <div className="bg-[#1a1a1a] rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-3">Do you offer volume discounts?</h3>
            <p className="text-gray-300">Yes, we offer volume discounts for enterprise customers with 100+ users. Contact us for custom pricing.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
        <p className="text-lg text-gray-300 mb-8">Join hundreds of businesses already using Auralix AI to automate their operations.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/trial" className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-lg transition-all duration-200 shadow-lg">
            Start Free Trial
          </a>
          <a href="/solutions" className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold rounded-lg transition-all duration-200">
            View Solutions
          </a>
        </div>
      </section>
    </div>
  );
} 