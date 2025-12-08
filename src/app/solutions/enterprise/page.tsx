'use client';
import { FaRocket, FaUsers, FaChartLine, FaShieldAlt, FaCogs, FaServer } from 'react-icons/fa';

export default function EnterprisePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a2a3a] via-[#0a2233] to-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-cyan-300">National Chain AI Solutions</h1>
        <p className="text-xl md:text-2xl text-cyan-100 mb-8">Enterprise-grade AI automation for national restaurant chains.</p>
        <p className="text-gray-300">Perfect for national chains with 50+ locations requiring advanced security, scalability, and never missing a call.</p>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Enterprise Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl">
            <FaRocket className="text-5xl mb-4 text-cyan-400" />
            <h3 className="text-xl font-bold text-white mb-4">Enterprise AI Chatbot</h3>
            <p className="text-gray-300 mb-4">Unlimited AI chatbot with enterprise-grade capabilities and customization.</p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Unlimited conversations</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Custom AI training</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Multi-language support</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl">
            <FaServer className="text-5xl mb-4 text-cyan-400" />
            <h3 className="text-xl font-bold text-white mb-4">Dedicated Infrastructure</h3>
            <p className="text-gray-300 mb-4">Private cloud deployment with dedicated servers and resources.</p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Private cloud deployment</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Dedicated servers</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Custom SLAs</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl">
            <FaShieldAlt className="text-5xl mb-4 text-cyan-400" />
            <h3 className="text-xl font-bold text-white mb-4">Advanced Security</h3>
            <p className="text-gray-300 mb-4">Enterprise-grade security with compliance and audit capabilities.</p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>SOC 2–aligned security controls</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Advanced encryption</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Comprehensive audit logs</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl">
            <FaChartLine className="text-5xl mb-4 text-cyan-400" />
            <h3 className="text-xl font-bold text-white mb-4">Enterprise Analytics</h3>
            <p className="text-gray-300 mb-4">Advanced business intelligence with custom reporting and dashboards.</p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Custom dashboards</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Predictive analytics</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Real-time reporting</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl">
            <FaCogs className="text-5xl mb-4 text-cyan-400" />
            <h3 className="text-xl font-bold text-white mb-4">Custom Automation</h3>
            <p className="text-gray-300 mb-4">Bespoke automation solutions tailored to your enterprise workflows.</p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Custom development</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>API integrations</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Workflow optimization</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl">
            <FaUsers className="text-5xl mb-4 text-cyan-400" />
            <h3 className="text-xl font-bold text-white mb-4">Unlimited Users</h3>
            <p className="text-gray-300 mb-4">Support for unlimited team members with advanced role management.</p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Unlimited user accounts</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Advanced permissions</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>SSO integration</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Support */}
      <section className="max-w-4xl mx-auto py-16 px-4">
        <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Enterprise Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-cyan-400 mb-4">Dedicated Support Team</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <span>24/7 phone and email support</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <span>Dedicated account manager</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <span>1-hour response time</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <span>On-site training available</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-cyan-400 mb-4">Implementation Services</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <span>Custom implementation plan</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <span>Dedicated project manager</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <span>Custom training programs</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <span>Ongoing optimization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-4xl mx-auto py-16 px-4">
        <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Enterprise Pricing</h2>
          <div className="text-center mb-8">
            <div className="text-4xl font-bold text-cyan-400 mb-2">Custom Pricing</div>
            <div className="text-gray-300">Tailored to your enterprise needs</div>
            <p className="text-sm text-gray-400 mt-2">Contact us for a custom quote</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-cyan-400 mb-4">What&apos;s Included</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <span>Unlimited AI chatbot conversations</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <span>Private cloud deployment</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <span>24/7 enterprise support</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <span>Unlimited user accounts</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <span>Custom integrations</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <span>Advanced security & compliance</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-cyan-400 mb-4">Additional Services</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <span>Custom development: $150/hour</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <span>On-site training: $2,000/day</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <span>Custom integrations: $5,000+</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <span>Dedicated infrastructure: $10,000+/month</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto py-16 px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Ready for Enterprise AI?</h2>
        <p className="text-xl text-gray-300 mb-8">Contact our enterprise team to discuss your specific requirements and get a custom solution.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-lg transition-all duration-200"
          >
            Contact Enterprise Sales
          </a>
          <a
            href="mailto:enterprise@auralixai.ca"
            className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold rounded-lg transition-all duration-200"
          >
            Email Enterprise Team
          </a>
        </div>
      </section>
    </div>
  );
}