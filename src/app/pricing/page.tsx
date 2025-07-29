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
              Simple Workflow Automation
            </li>
            <li className="flex items-center text-sm text-gray-300">
              <FaHeadset className="text-teal-400 mr-2" />
              Email Support
            </li>
            <li className="flex items-center text-sm text-gray-300">
              <FaShieldAlt className="text-teal-400 mr-2" />
              GDPR Compliance
            </li>
          </ul>
          
          <a href="/trial" className="w-full px-6 py-3 bg-teal-500 hover:bg-teal-400 text-black font-bold rounded-full text-center block transition-all duration-200">
            Start Free Trial
          </a>
        </div>

        {/* Mid-Market */}
        <div className="bg-[#11202a] rounded-2xl p-8 shadow-xl border-2 border-blue-500 relative transform scale-105">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold">Most Popular</span>
          </div>
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-blue-400 mb-2">Mid-Market</h3>
            <div className="text-3xl font-bold text-white mb-1">
              ${calculatePrice(799, selectedPlan, teamSize, locations).toFixed(0)}
              <span className="text-lg text-gray-400">/{selectedPlan === 'monthly' ? 'mo' : 'mo'}</span>
            </div>
            <p className="text-gray-300 text-sm">Ideal for 10-100 employees</p>
          </div>
          
          <ul className="space-y-3 mb-8">
            <li className="flex items-center text-sm text-gray-300">
              <FaRobot className="text-blue-400 mr-2" />
              Advanced AI Chatbot
            </li>
            <li className="flex items-center text-sm text-gray-300">
              <FaChartBar className="text-blue-400 mr-2" />
              Advanced Analytics & Reporting
            </li>
            <li className="flex items-center text-sm text-gray-300">
              <FaCogs className="text-blue-400 mr-2" />
              Custom Workflow Automation
            </li>
            <li className="flex items-center text-sm text-gray-300">
              <FaHeadset className="text-blue-400 mr-2" />
              Priority Support
            </li>
            <li className="flex items-center text-sm text-gray-300">
              <FaLock className="text-blue-400 mr-2" />
              Enhanced Security
            </li>
            <li className="flex items-center text-sm text-gray-300">
              <FaUsers className="text-blue-400 mr-2" />
              Multi-user Access
            </li>
          </ul>
          
          <a href="#contact" className="w-full px-6 py-3 bg-blue-500 hover:bg-blue-400 text-white font-bold rounded-full text-center block transition-all duration-200">
            Schedule Demo
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
            <p className="text-gray-300 text-sm">Built for 100+ employees</p>
          </div>
          
          <ul className="space-y-3 mb-8">
            <li className="flex items-center text-sm text-gray-300">
              <FaRobot className="text-purple-400 mr-2" />
              Enterprise AI Suite
            </li>
            <li className="flex items-center text-sm text-gray-300">
              <FaChartBar className="text-purple-400 mr-2" />
              Predictive Analytics
            </li>
            <li className="flex items-center text-sm text-gray-300">
              <FaCogs className="text-purple-400 mr-2" />
              Custom API Integration
            </li>
            <li className="flex items-center text-sm text-gray-300">
              <FaHeadset className="text-purple-400 mr-2" />
              24/7 Dedicated Support
            </li>
            <li className="flex items-center text-sm text-gray-300">
              <FaShieldAlt className="text-purple-400 mr-2" />
              SOC 2 Compliance
            </li>
            <li className="flex items-center text-sm text-gray-300">
              <FaUsers className="text-purple-400 mr-2" />
              Dedicated Account Manager
            </li>
          </ul>
          
          <a href="#contact" className="w-full px-6 py-3 bg-purple-500 hover:bg-purple-400 text-white font-bold rounded-full text-center block transition-all duration-200">
            Contact Sales
          </a>
        </div>
      </section>

      {/* Enterprise-Only Package */}
      <section className="max-w-4xl mx-auto py-12 px-4 text-center mb-16">
        <div className="bg-gradient-to-r from-purple-700 via-blue-700 to-purple-900 rounded-2xl p-10 shadow-2xl border-2 border-purple-400">
          <div className="flex flex-col items-center mb-6">
            <FaShieldAlt className="text-5xl text-yellow-300 mb-4" />
            <h2 className="text-3xl font-bold text-yellow-200 mb-2">Enterprise AI Suite</h2>
            <div className="text-xl text-purple-200 mb-4">Custom pricing for large organizations</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Enterprise Features</h3>
              <ul className="space-y-2 text-purple-200 text-sm">
                <li>• Custom onboarding & training</li>
                <li>• Dedicated account manager</li>
                <li>• SLA-backed support</li>
                <li>• Multi-platform integrations</li>
                <li>• Monthly usage reports</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Security & Compliance</h3>
              <ul className="space-y-2 text-purple-200 text-sm">
                <li>• SOC 2 Type II certification</li>
                <li>• GDPR & CASL compliance</li>
                <li>• End-to-end encryption</li>
                <li>• Audit trails & logging</li>
                <li>• Custom security policies</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="px-8 py-3 bg-yellow-300 hover:bg-yellow-200 text-black font-bold rounded-full text-lg shadow-lg transition-all duration-200">
              Contact Sales Team
            </a>
            <a href="#" className="px-8 py-3 bg-transparent hover:bg-white hover:text-black text-white font-bold rounded-full text-lg border-2 border-white transition-all duration-200 flex items-center justify-center gap-2">
              <FaDownload className="text-sm" />
              Download Pricing Deck
            </a>
          </div>
        </div>
      </section>

      {/* Service-Based Pricing */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-cyan-300">Additional Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Business Process Automation */}
          <div className="bg-[#11202a] rounded-2xl p-6 shadow-xl border border-cyan-700">
            <FaCogs className="text-4xl text-cyan-400 mb-4" />
            <div className="font-bold text-lg mb-2">Business Process Automation</div>
            <div className="text-cyan-200 font-semibold mb-2">$500 – $5,000 <span className="text-xs">(project-based)</span></div>
            <ul className="text-cyan-100 text-sm mb-4 list-disc list-inside">
              <li>Zapier/Make workflows, email automation, CRM triggers</li>
              <li>Maintenance: $100–$500/month</li>
            </ul>
            <a href="#contact" className="px-6 py-2 bg-cyan-400 hover:bg-cyan-300 text-black font-bold rounded-full text-md shadow-lg transition-all duration-200">Get Quote</a>
          </div>
          
          {/* Chatbots & Virtual Assistants */}
          <div className="bg-[#11202a] rounded-2xl p-6 shadow-xl border border-cyan-700">
            <FaRobot className="text-4xl text-cyan-400 mb-4" />
            <div className="font-bold text-lg mb-2">Chatbots & Virtual Assistants</div>
            <div className="text-cyan-200 font-semibold mb-2">$500 – $1,500 <span className="text-xs">(setup)</span></div>
            <ul className="text-cyan-100 text-sm mb-4 list-disc list-inside">
              <li>Rule-based chatbot, basic AI FAQ automation</li>
              <li>Hosting/updates: $50–$200/month</li>
            </ul>
            <a href="#contact" className="px-6 py-2 bg-cyan-400 hover:bg-cyan-300 text-black font-bold rounded-full text-md shadow-lg transition-all duration-200">Get Quote</a>
          </div>
          
          {/* Analytics Dashboards */}
          <div className="bg-[#11202a] rounded-2xl p-6 shadow-xl border border-cyan-700">
            <FaChartBar className="text-4xl text-cyan-400 mb-4" />
            <div className="font-bold text-lg mb-2">Analytics Dashboards</div>
            <div className="text-cyan-200 font-semibold mb-2">$500 – $2,000 <span className="text-xs">(one-time)</span></div>
            <ul className="text-cyan-100 text-sm mb-4 list-disc list-inside">
              <li>Sales/traffic dashboards, up to 3 data sources</li>
              <li>Support: $100–$300/month</li>
            </ul>
            <a href="#contact" className="px-6 py-2 bg-cyan-400 hover:bg-cyan-300 text-black font-bold rounded-full text-md shadow-lg transition-all duration-200">Get Quote</a>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="max-w-3xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold text-cyan-200 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="bg-[#181f2a] rounded-xl p-5 shadow-md">
            <div className="font-semibold text-cyan-300 mb-1">What's included in the pricing?</div>
            <div className="text-cyan-100 text-sm">All plans include core AI features, basic support, and standard security. Enterprise plans include advanced features, dedicated support, and compliance certifications.</div>
          </div>
          <div className="bg-[#181f2a] rounded-xl p-5 shadow-md">
            <div className="font-semibold text-cyan-300 mb-1">Can I upgrade or downgrade my plan?</div>
            <div className="text-cyan-100 text-sm">Yes, you can change your plan at any time. We'll prorate the difference and ensure a smooth transition.</div>
          </div>
          <div className="bg-[#181f2a] rounded-xl p-5 shadow-md">
            <div className="font-semibold text-cyan-300 mb-1">What kind of support do you provide?</div>
            <div className="text-cyan-100 text-sm">Small Business: Email support. Mid-Market: Priority support. Enterprise: 24/7 dedicated support with account manager.</div>
          </div>
          <div className="bg-[#181f2a] rounded-xl p-5 shadow-md">
            <div className="font-semibold text-cyan-300 mb-1">Do you offer custom solutions?</div>
            <div className="text-cyan-100 text-sm">Absolutely! Our Enterprise AI Suite is fully customizable to meet your specific business requirements and integration needs.</div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-200 mb-6">Ready to Transform Your Business?</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="px-10 py-4 bg-cyan-400 hover:bg-cyan-300 text-black font-bold rounded-full text-lg shadow-lg transition-all duration-200">
            Get Free Consultation
          </a>
          <a href="/solutions" className="px-10 py-4 bg-transparent hover:bg-white hover:text-black text-white font-bold rounded-full text-lg border-2 border-white transition-all duration-200">
            View Solutions
          </a>
        </div>
      </section>
    </div>
  );
} 