'use client';
import { FaRocket, FaUsers, FaChartLine, FaHeadset, FaShieldAlt, FaClock } from 'react-icons/fa';

export default function SmallBusinessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a2a3a] via-[#0a2233] to-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-cyan-300">Small Home Services Business AI Solutions</h1>
        <p className="text-xl md:text-2xl text-cyan-100 mb-8">Affordable AI automation that helps small HVAC, plumbing, and electrical businesses never miss a call.</p>
        <p className="text-gray-300">Perfect for small home services businesses with 1-10 employees looking to capture every lead and book more jobs.</p>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">What&apos;s Included</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl">
            <FaRocket className="text-5xl mb-4 text-cyan-400" />
            <h3 className="text-xl font-bold text-white mb-4">AI Receptionist</h3>
            <p className="text-gray-300 mb-4">Basic AI receptionist to handle calls, qualify leads, and book service appointments 24/7.</p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Up to 1,000 calls/month</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Lead qualification & booking</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Phone system integration</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl">
            <FaChartLine className="text-5xl mb-4 text-cyan-400" />
            <h3 className="text-xl font-bold text-white mb-4">Analytics Dashboard</h3>
            <p className="text-gray-300 mb-4">Basic analytics and reporting to track your business performance.</p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Key performance metrics</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Lead insights</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Monthly reports</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl">
            <FaHeadset className="text-5xl mb-4 text-cyan-400" />
            <h3 className="text-xl font-bold text-white mb-4">Email Support</h3>
            <p className="text-gray-300 mb-4">Email-based customer support and technical assistance.</p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>48-hour response time</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Setup assistance</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Basic troubleshooting</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl">
            <FaShieldAlt className="text-5xl mb-4 text-cyan-400" />
            <h3 className="text-xl font-bold text-white mb-4">Security & Compliance</h3>
            <p className="text-gray-300 mb-4">Enterprise-grade security to protect your business data.</p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Data encryption</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Regular backups</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>PIPEDA compliance</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl">
            <FaClock className="text-5xl mb-4 text-cyan-400" />
            <h3 className="text-xl font-bold text-white mb-4">Quick Setup</h3>
            <p className="text-gray-300 mb-4">Fast implementation to get you up and running quickly.</p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>48-hour setup guarantee</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>CRM integration</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Training included</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl">
            <FaUsers className="text-5xl mb-4 text-cyan-400" />
            <h3 className="text-xl font-bold text-white mb-4">Team Collaboration</h3>
            <p className="text-gray-300 mb-4">Tools to help your team work together effectively.</p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Multi-user access</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Role-based permissions</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Team notifications</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-4xl mx-auto py-16 px-4">
        <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl p-8 border border-cyan-500/30 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Starting at $399/month</h2>
          <p className="text-gray-300 mb-6">After Hours plan perfect for small home services businesses</p>
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
