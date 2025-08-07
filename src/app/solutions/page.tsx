'use client';
import { FaRobot, FaChartBar, FaCogs, FaCheck, FaShieldAlt } from "react-icons/fa";
import { useState } from "react";

export default function SolutionsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a2a3a] via-[#0a2233] to-[#0a0a0a] text-white pb-20">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center py-12 sm:py-16 px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-cyan-300">Enterprise AI Solutions</h1>
        <p className="text-lg sm:text-xl md:text-2xl text-cyan-100 mb-6 sm:mb-8">Tailored AI automation solutions for businesses of every size and industry</p>
        
        {/* Demo CTAs */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div className="bg-gradient-to-r from-purple-900 to-purple-800 rounded-2xl p-6 sm:p-8 border border-purple-400">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">🎯 Claims Automation Demo</h2>
            <p className="text-purple-200 mb-4 sm:mb-6 text-sm sm:text-base">Experience our AI-powered claims processing system</p>
            <a 
              href="/solutions/claims-automation/demo" 
              className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-lg font-bold text-base sm:text-lg transition-all duration-200 shadow-lg"
            >
              🚀 Launch Demo
            </a>
          </div>
          
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-6 sm:p-8 border border-blue-400">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">🏢 Small Business Demo Hub</h2>
            <p className="text-blue-200 mb-4 sm:mb-6 text-sm sm:text-base">Explore 5 AI solutions for small businesses</p>
            <a 
              href="/solutions/small-business-demo" 
              className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-bold text-base sm:text-lg transition-all duration-200 shadow-lg"
            >
              🚀 Launch Demo Hub
            </a>
          </div>
        </div>
      </section>

      {/* Business Size Tabs */}
      <section className="max-w-6xl mx-auto mb-12 sm:mb-16 px-4">
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
          <button 
            onClick={() => setSelectedCategory('small')}
            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all ${
              selectedCategory === 'small' 
                ? 'bg-cyan-500 text-black' 
                : 'bg-[#1a1a1a] text-gray-300 hover:bg-[#333]'
            }`}
          >
            Small Business
          </button>
          <button 
            onClick={() => setSelectedCategory('mid')}
            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all ${
              selectedCategory === 'mid' 
                ? 'bg-cyan-500 text-black' 
                : 'bg-[#1a1a1a] text-gray-300 hover:bg-[#333]'
            }`}
          >
            Mid-Market
          </button>
          <button 
            onClick={() => setSelectedCategory('enterprise')}
            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all ${
              selectedCategory === 'enterprise' 
                ? 'bg-cyan-500 text-black' 
                : 'bg-[#1a1a1a] text-gray-300 hover:bg-[#333]'
            }`}
          >
            Enterprise
          </button>
        </div>

        {/* Small Business Solutions */}
        {(selectedCategory === 'all' || selectedCategory === 'small') && (
          <div className="bg-[#1a1a1a] rounded-2xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-teal-400 mb-6">Small Business Solutions</h2>
            <p className="text-lg text-gray-300 mb-8">Perfect for businesses with 1-10 employees looking to automate core operations</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-[#11202a] rounded-xl p-6">
                <FaRobot className="text-4xl text-teal-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">AI Chatbot</h3>
                <p className="text-gray-300 mb-4">Basic customer service automation with FAQ handling</p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-teal-400" />
                    <span>24/7 customer support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-teal-400" />
                    <span>FAQ automation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-teal-400" />
                    <span>Basic lead qualification</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-[#11202a] rounded-xl p-6">
                <FaChartBar className="text-4xl text-teal-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Analytics Dashboard</h3>
                <p className="text-gray-300 mb-4">Basic business intelligence and reporting</p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-teal-400" />
                    <span>Sales tracking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-teal-400" />
                    <span>Customer insights</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-teal-400" />
                    <span>Performance metrics</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-[#11202a] rounded-xl p-6">
                <FaCogs className="text-4xl text-teal-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Workflow Automation</h3>
                <p className="text-gray-300 mb-4">Streamline repetitive tasks and processes</p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-teal-400" />
                    <span>Email automation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-teal-400" />
                    <span>Data entry automation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-teal-400" />
                    <span>Appointment scheduling</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Mid-Market Solutions */}
        {(selectedCategory === 'all' || selectedCategory === 'mid') && (
          <div className="bg-[#1a1a1a] rounded-2xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-blue-400 mb-6">Mid-Market Solutions</h2>
            <p className="text-lg text-gray-300 mb-8">Advanced automation for growing businesses with 10-50 employees</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-[#11202a] rounded-xl p-6">
                <FaRobot className="text-4xl text-blue-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Advanced AI Chatbot</h3>
                <p className="text-gray-300 mb-4">Intelligent customer service with natural language processing</p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-blue-400" />
                    <span>Multi-language support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-blue-400" />
                    <span>Complex query handling</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-blue-400" />
                    <span>Integration with CRM</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-[#11202a] rounded-xl p-6">
                <FaChartBar className="text-4xl text-blue-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Business Intelligence</h3>
                <p className="text-gray-300 mb-4">Advanced analytics and predictive insights</p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-blue-400" />
                    <span>Predictive analytics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-blue-400" />
                    <span>Custom dashboards</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-blue-400" />
                    <span>Real-time reporting</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-[#11202a] rounded-xl p-6">
                <FaCogs className="text-4xl text-blue-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Process Automation</h3>
                <p className="text-gray-300 mb-4">End-to-end workflow automation</p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-blue-400" />
                    <span>Multi-step workflows</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-blue-400" />
                    <span>API integrations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-blue-400" />
                    <span>Error handling</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Enterprise Solutions */}
        {(selectedCategory === 'all' || selectedCategory === 'enterprise') && (
          <div className="bg-[#1a1a1a] rounded-2xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-purple-400 mb-6">Enterprise Solutions</h2>
            <p className="text-lg text-gray-300 mb-8">Custom AI solutions for large organizations with complex requirements</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-[#11202a] rounded-xl p-6">
                <FaRobot className="text-4xl text-purple-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Custom AI Development</h3>
                <p className="text-gray-300 mb-4">Tailored AI models for specific business needs</p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-purple-400" />
                    <span>Custom model training</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-purple-400" />
                    <span>Industry-specific AI</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-purple-400" />
                    <span>Scalable architecture</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-[#11202a] rounded-xl p-6">
                <FaChartBar className="text-4xl text-purple-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Enterprise Analytics</h3>
                <p className="text-gray-300 mb-4">Advanced BI with machine learning insights</p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-purple-400" />
                    <span>ML-powered insights</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-purple-400" />
                    <span>Multi-tenant support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-purple-400" />
                    <span>Custom reporting</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-[#11202a] rounded-xl p-6">
                <FaCogs className="text-4xl text-purple-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">System Integration</h3>
                <p className="text-gray-300 mb-4">Seamless integration with existing enterprise systems</p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-purple-400" />
                    <span>ERP integration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-purple-400" />
                    <span>CRM connectivity</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-purple-400" />
                    <span>Legacy system support</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-[#11202a] rounded-xl p-6">
                <FaShieldAlt className="text-4xl text-purple-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Claims Automation</h3>
                <p className="text-gray-300 mb-4">AI-powered claims processing with real-time document verification</p>
                <ul className="space-y-2 text-sm text-gray-300 mb-4">
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-purple-400" />
                    <span>Real-time document processing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-purple-400" />
                    <span>AI fraud detection</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-purple-400" />
                    <span>Enterprise compliance</span>
                  </li>
                </ul>
                <a 
                  href="/solutions/claims-automation/demo" 
                  className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-lg font-semibold transition-all duration-200 text-sm"
                >
                  🚀 View Live Demo
                </a>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Feature Comparison Table */}
      <section className="max-w-6xl mx-auto mb-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Feature Comparison</h2>
        <div className="bg-[#1a1a1a] rounded-2xl p-8 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#333]">
                <th className="text-left py-4 text-white font-semibold">Feature</th>
                <th className="text-center py-4 text-teal-400 font-semibold">Small Business</th>
                <th className="text-center py-4 text-blue-400 font-semibold">Mid-Market</th>
                <th className="text-center py-4 text-purple-400 font-semibold">Enterprise</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              <tr className="border-b border-[#333]">
                <td className="py-4">AI Chatbot</td>
                <td className="text-center py-4">Basic</td>
                <td className="text-center py-4">Advanced</td>
                <td className="text-center py-4">Custom</td>
              </tr>
              <tr className="border-b border-[#333]">
                <td className="py-4">Analytics</td>
                <td className="text-center py-4">Basic Dashboard</td>
                <td className="text-center py-4">Business Intelligence</td>
                <td className="text-center py-4">ML-Powered</td>
              </tr>
              <tr className="border-b border-[#333]">
                <td className="py-4">Automation</td>
                <td className="text-center py-4">5 Processes</td>
                <td className="text-center py-4">Unlimited</td>
                <td className="text-center py-4">Custom Development</td>
              </tr>
              <tr className="border-b border-[#333]">
                <td className="py-4">Support</td>
                <td className="text-center py-4">Email</td>
                <td className="text-center py-4">Priority</td>
                <td className="text-center py-4">24/7 Dedicated</td>
              </tr>
              <tr className="border-b border-[#333]">
                <td className="py-4">Security</td>
                <td className="text-center py-4">Standard</td>
                <td className="text-center py-4">Enhanced</td>
                <td className="text-center py-4">SOC 2 Compliant</td>
              </tr>
              <tr>
                <td className="py-4">Users</td>
                <td className="text-center py-4">1-10</td>
                <td className="text-center py-4">10-50</td>
                <td className="text-center py-4">Unlimited</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
        <p className="text-lg text-gray-300 mb-8">Choose the solution that fits your business needs and start your AI transformation journey.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/trial" className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-lg transition-all duration-200 shadow-lg">
            Start Free Trial
          </a>
          <a href="/pricing" className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold rounded-lg transition-all duration-200">
            View Pricing
          </a>
        </div>
      </section>
    </div>
  );
}