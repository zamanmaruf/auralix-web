'use client';
import { FaRocket, FaUsers, FaChartLine, FaHeadset, FaCogs, FaDatabase } from 'react-icons/fa';

export default function MidMarketPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a2a3a] via-[#0a2233] to-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-cyan-300">Growing Home Services Business AI Solutions</h1>
        <p className="text-xl md:text-2xl text-cyan-100 mb-8">Advanced AI automation for growing HVAC, plumbing, and electrical businesses.</p>
        <p className="text-gray-300">Perfect for home services businesses with 11-50 employees looking to scale operations and never miss a call.</p>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">What&apos;s Included</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl">
            <FaRocket className="text-5xl mb-4 text-cyan-400" />
            <h3 className="text-xl font-bold text-white mb-4">Advanced AI Receptionist</h3>
            <p className="text-gray-300 mb-4">Sophisticated AI receptionist with advanced conversation capabilities.</p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Up to 10,000 calls/month</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Multi-language support</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Advanced lead qualification</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl">
            <FaChartLine className="text-5xl mb-4 text-cyan-400" />
            <h3 className="text-xl font-bold text-white mb-4">Advanced Analytics</h3>
            <p className="text-gray-300 mb-4">Comprehensive analytics and business intelligence dashboards.</p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Real-time reporting</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Custom dashboards</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Predictive analytics</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl">
            <FaHeadset className="text-5xl mb-4 text-cyan-400" />
            <h3 className="text-xl font-bold text-white mb-4">Priority Support</h3>
            <p className="text-gray-300 mb-4">Dedicated support team with faster response times.</p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>4-hour response time</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Dedicated account manager</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Phone and email support</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl">
            <FaCogs className="text-5xl mb-4 text-cyan-400" />
            <h3 className="text-xl font-bold text-white mb-4">Workflow Automation</h3>
            <p className="text-gray-300 mb-4">Advanced automation tools to streamline complex business processes.</p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Custom workflow builder</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>CRM integrations</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Advanced triggers</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl">
            <FaDatabase className="text-5xl mb-4 text-cyan-400" />
            <h3 className="text-xl font-bold text-white mb-4">Data Management</h3>
            <p className="text-gray-300 mb-4">Advanced data management and integration capabilities.</p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Advanced CRM sync</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Data export tools</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>API access</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl">
            <FaUsers className="text-5xl mb-4 text-cyan-400" />
            <h3 className="text-xl font-bold text-white mb-4">Team Management</h3>
            <p className="text-gray-300 mb-4">Advanced team collaboration and management features.</p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Unlimited users</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Advanced permissions</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Team analytics</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-4xl mx-auto py-16 px-4">
        <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl p-8 border border-cyan-500/30 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Starting at $799/month</h2>
          <p className="text-gray-300 mb-6">Overflow + After Hours plan perfect for growing home services businesses</p>
          <a
            href="/pricing"
            className="inline-block bg-cyan-500 hover:bg-cyan-400 text-white font-bold px-8 py-3 rounded-lg transition-colors"
          >
            View Pricing
          </a>
        </div>
      </section>
    </div>
  );
}
