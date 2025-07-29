'use client';
import { FaUsers, FaShieldAlt, FaChartLine, FaLock, FaRocket, FaCog, FaHeadset, FaGlobe } from "react-icons/fa";
import { MdOutlineAnalytics, MdOutlineDashboard } from "react-icons/md";
import { TbSettingsAutomation } from "react-icons/tb";
import { PiRobotLight } from "react-icons/pi";

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-[#0a2a3a] to-[#0a0a0a]">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Solutions That Scale With You
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            From startup to enterprise, we provide AI automation solutions tailored to your business size, 
            complexity, and growth trajectory.
          </p>
        </div>
      </section>

      {/* Solution Tiers */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Small Business */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-teal-400 mb-4">Small Business Solutions</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Perfect for businesses with 1-10 employees. Get started quickly with affordable, 
                easy-to-use AI tools that deliver immediate results.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-[#1a1a1a] rounded-xl p-6 shadow-lg">
                <FaRocket className="text-4xl text-teal-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Quick Setup</h3>
                <p className="text-gray-300 text-sm">Get up and running in under 24 hours with our streamlined onboarding process.</p>
              </div>
              <div className="bg-[#1a1a1a] rounded-xl p-6 shadow-lg">
                <PiRobotLight className="text-4xl text-teal-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">AI Chatbot</h3>
                <p className="text-gray-300 text-sm">Automate customer service and lead qualification with intelligent chatbots.</p>
              </div>
              <div className="bg-[#1a1a1a] rounded-xl p-6 shadow-lg">
                <MdOutlineAnalytics className="text-4xl text-teal-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Basic Analytics</h3>
                <p className="text-gray-300 text-sm">Track performance and customer insights with simple, actionable dashboards.</p>
              </div>
              <div className="bg-[#1a1a1a] rounded-xl p-6 shadow-lg">
                <FaHeadset className="text-4xl text-teal-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Email Support</h3>
                <p className="text-gray-300 text-sm">Get help when you need it with responsive email support during business hours.</p>
              </div>
            </div>

            <div className="text-center mt-8">
              <a href="/trial" className="px-8 py-3 bg-teal-500 hover:bg-teal-400 text-black font-bold rounded-full text-lg shadow-lg transition-all duration-200">
                Start Free Trial
              </a>
            </div>
          </div>

          {/* Mid-Market */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-400 mb-4">Mid-Market Solutions</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Designed for growing businesses with 10-100 employees. Advanced features with 
                dedicated support to help you scale efficiently.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-[#1a1a1a] rounded-xl p-6 shadow-lg">
                <FaCog className="text-4xl text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Custom Workflows</h3>
                <p className="text-gray-300 text-sm">Tailored automation workflows designed for your specific business processes.</p>
              </div>
              <div className="bg-[#1a1a1a] rounded-xl p-6 shadow-lg">
                <TbSettingsAutomation className="text-4xl text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Advanced Automation</h3>
                <p className="text-gray-300 text-sm">Complex automation rules and multi-step processes for sophisticated operations.</p>
              </div>
              <div className="bg-[#1a1a1a] rounded-xl p-6 shadow-lg">
                <MdOutlineDashboard className="text-4xl text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Advanced Dashboards</h3>
                <p className="text-gray-300 text-sm">Comprehensive business intelligence with custom KPIs and reporting.</p>
              </div>
              <div className="bg-[#1a1a1a] rounded-xl p-6 shadow-lg">
                <FaHeadset className="text-4xl text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Priority Support</h3>
                <p className="text-gray-300 text-sm">Dedicated support team with faster response times and proactive monitoring.</p>
              </div>
            </div>

            <div className="text-center mt-8">
              <a href="#contact" className="px-8 py-3 bg-blue-500 hover:bg-blue-400 text-white font-bold rounded-full text-lg shadow-lg transition-all duration-200">
                Schedule Demo
              </a>
            </div>
          </div>

          {/* Enterprise */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-purple-400 mb-4">Enterprise Solutions</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Built for large organizations with 100+ employees. Enterprise-grade security, 
                compliance, and scalability with dedicated account management.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-[#1a1a1a] rounded-xl p-6 shadow-lg">
                <FaShieldAlt className="text-4xl text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Enterprise Security</h3>
                <p className="text-gray-300 text-sm">SOC 2, GDPR, and CASL compliance with end-to-end encryption and audit trails.</p>
              </div>
              <div className="bg-[#1a1a1a] rounded-xl p-6 shadow-lg">
                <FaLock className="text-4xl text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">API Integration</h3>
                <p className="text-gray-300 text-sm">Seamless integration with existing ERP, CRM, and business systems.</p>
              </div>
              <div className="bg-[#1a1a1a] rounded-xl p-6 shadow-lg">
                <FaChartLine className="text-4xl text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Predictive Analytics</h3>
                <p className="text-gray-300 text-sm">AI-powered insights and forecasting for strategic decision making.</p>
              </div>
              <div className="bg-[#1a1a1a] rounded-xl p-6 shadow-lg">
                <FaUsers className="text-4xl text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Dedicated Manager</h3>
                <p className="text-gray-300 text-sm">Personal account manager with 24/7 support and strategic consulting.</p>
              </div>
            </div>

            <div className="text-center mt-8">
              <a href="#contact" className="px-8 py-3 bg-purple-500 hover:bg-purple-400 text-white font-bold rounded-full text-lg shadow-lg transition-all duration-200">
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-4 bg-[#111]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Solution Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#333]">
                  <th className="text-left py-4 text-gray-300">Features</th>
                  <th className="text-center py-4 text-teal-400">Small Business</th>
                  <th className="text-center py-4 text-blue-400">Mid-Market</th>
                  <th className="text-center py-4 text-purple-400">Enterprise</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-[#222]">
                  <td className="py-4">Setup Time</td>
                  <td className="text-center py-4">24 hours</td>
                  <td className="text-center py-4">1 week</td>
                  <td className="text-center py-4">Custom</td>
                </tr>
                <tr className="border-b border-[#222]">
                  <td className="py-4">Support</td>
                  <td className="text-center py-4">Email</td>
                  <td className="text-center py-4">Priority</td>
                  <td className="text-center py-4">24/7 Dedicated</td>
                </tr>
                <tr className="border-b border-[#222]">
                  <td className="py-4">Security</td>
                  <td className="text-center py-4">Standard</td>
                  <td className="text-center py-4">Enhanced</td>
                  <td className="text-center py-4">Enterprise</td>
                </tr>
                <tr className="border-b border-[#222]">
                  <td className="py-4">Integrations</td>
                  <td className="text-center py-4">Basic</td>
                  <td className="text-center py-4">Advanced</td>
                  <td className="text-center py-4">Custom API</td>
                </tr>
                <tr className="border-b border-[#222]">
                  <td className="py-4">Analytics</td>
                  <td className="text-center py-4">Basic</td>
                  <td className="text-center py-4">Advanced</td>
                  <td className="text-center py-4">Predictive</td>
                </tr>
                <tr className="border-b border-[#222]">
                  <td className="py-4">Compliance</td>
                  <td className="text-center py-4">GDPR</td>
                  <td className="text-center py-4">GDPR + CASL</td>
                  <td className="text-center py-4">SOC 2 + All</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-teal-500 to-blue-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white mb-8">
            Let's discuss how Auralix AI can scale with your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="px-8 py-4 bg-black hover:bg-[#222] text-teal-300 font-bold rounded-full text-lg shadow-lg transition-all duration-200">
              Get Free Consultation
            </a>
            <a href="/pricing" className="px-8 py-4 bg-white hover:bg-gray-100 text-blue-600 font-bold rounded-full text-lg shadow-lg transition-all duration-200">
              View Pricing
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}