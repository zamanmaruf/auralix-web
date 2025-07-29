'use client';
import Image from "next/image";
import { FaRegWindowMaximize } from "react-icons/fa6";
import { MdOutlineAnalytics } from "react-icons/md";
import { PiRobotLight } from "react-icons/pi";
import { TbSettingsAutomation } from "react-icons/tb";
import { FaShieldAlt, FaUsers, FaChartLine, FaLock } from "react-icons/fa";
import { useState } from "react";

export default function HomePage() {
  const [messageSent, setMessageSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    const form = e.currentTarget;
    const data = new FormData(form);
    const requiredFields = ["name", "email", "phone", "business", "service", "message"];
    for (const field of requiredFields) {
      if (!data.get(field) || String(data.get(field)).trim() === "") {
        setError("Please fill in all fields.");
        return;
      }
    }
    const res = await fetch("https://formspree.io/f/mnnvrdoy", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });
    if (res.ok) {
      setMessageSent(true);
      form.reset();
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-between">
      {/* Hero Section - Enterprise Positioning */}
      <section className="relative h-screen flex items-center justify-center bg-black overflow-hidden">
        <Image
          src="/hero-ai-bg.jpg"
          alt="AI transformation background"
          fill
          style={{ objectFit: "cover" }}
          className="opacity-70"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4">
            AI Automation That Scales With You
          </h1>
          <p className="text-xl md:text-2xl text-teal-200 mb-6">
            From Startup to Enterprise — Revolutionizing Business Operations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a href="/trial" className="px-8 py-4 bg-teal-500 hover:bg-teal-400 text-black font-bold rounded-full text-lg shadow-lg transition-all duration-200">
              For Small Businesses
            </a>
            <a href="/solutions" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full text-lg shadow-lg transition-all duration-200">
              For Enterprises
            </a>
          </div>
          
          {/* Trust Signals */}
          <div className="flex flex-wrap justify-center items-center gap-8 mt-8 opacity-80">
            <div className="text-white text-sm">97% Scheduling Accuracy</div>
            <div className="text-white text-sm">85% Manual Input Reduction</div>
            <div className="text-white text-sm">SOC 2 Ready</div>
            <div className="text-white text-sm">GDPR Compliant</div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="bg-[#0a0a0a] py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-gray-400 mb-8">Trusted by businesses across Nova Scotia</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-white text-lg font-semibold">Nova Scotia Health</div>
            <div className="text-white text-lg font-semibold">Dalhousie University</div>
            <div className="text-white text-lg font-semibold">Halifax Chamber</div>
            <div className="text-white text-lg font-semibold">Tech Nova Scotia</div>
          </div>
        </div>
      </section>

      {/* What We Do - Enhanced */}
      <section className="w-full py-20 px-4 bg-gradient-to-b from-[#0a2a3a] via-[#0a2233] to-[#0a0a0a]">
        <h2 className="text-3xl font-bold text-center mb-12 text-cyan-300 tracking-wide">ENTERPRISE SOLUTIONS</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center bg-[#11202a] bg-opacity-80 rounded-2xl p-8 shadow-xl hover:scale-105 transition-transform">
            <FaRegWindowMaximize className="text-5xl mb-4 text-cyan-400 drop-shadow-glow" />
            <div className="font-bold text-lg text-cyan-200 mb-2 text-center">AI-powered Website Design</div>
            <p className="text-sm text-gray-300 text-center">Enterprise-grade responsive design with advanced analytics</p>
          </div>
          <div className="flex flex-col items-center bg-[#11202a] bg-opacity-80 rounded-2xl p-8 shadow-xl hover:scale-105 transition-transform">
            <PiRobotLight className="text-5xl mb-4 text-cyan-400 drop-shadow-glow" />
            <div className="font-bold text-lg text-cyan-200 mb-2 text-center">Intelligent Chatbots</div>
            <p className="text-sm text-gray-300 text-center">Multi-language AI chatbots with human-like responses</p>
          </div>
          <div className="flex flex-col items-center bg-[#11202a] bg-opacity-80 rounded-2xl p-8 shadow-xl hover:scale-105 transition-transform">
            <MdOutlineAnalytics className="text-5xl mb-4 text-cyan-400 drop-shadow-glow" />
            <div className="font-bold text-lg text-cyan-200 mb-2 text-center">Business Intelligence</div>
            <p className="text-sm text-gray-300 text-center">Real-time analytics and predictive insights</p>
          </div>
          <div className="flex flex-col items-center bg-[#11202a] bg-opacity-80 rounded-2xl p-8 shadow-xl hover:scale-105 transition-transform">
            <TbSettingsAutomation className="text-5xl mb-4 text-cyan-400 drop-shadow-glow" />
            <div className="font-bold text-lg text-cyan-200 mb-2 text-center">Workflow Automation</div>
            <p className="text-sm text-gray-300 text-center">End-to-end process automation and optimization</p>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 px-4 bg-[#111]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Success Story: Nova Scotia Restaurant Chain</h2>
            <p className="text-lg text-gray-300">How we transformed a local restaurant chain into an AI-powered operation</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#1a1a1a] rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">40%</div>
              <div className="text-gray-300">Increase in Bookings</div>
            </div>
            <div className="bg-[#1a1a1a] rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">60%</div>
              <div className="text-gray-300">Reduction in Admin Time</div>
            </div>
            <div className="bg-[#1a1a1a] rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">25%</div>
              <div className="text-gray-300">Increase in Revenue</div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Enterprise-Grade Features</h2>
            <p className="text-lg text-gray-300">Built for scale, security, and compliance</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#1a1a1a] rounded-xl p-6 text-center">
              <FaLock className="text-4xl text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">SOC 2 Ready</h3>
              <p className="text-gray-300 text-sm">Enterprise-grade security and compliance</p>
            </div>
            <div className="bg-[#1a1a1a] rounded-xl p-6 text-center">
              <FaUsers className="text-4xl text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Multi-Tenant</h3>
              <p className="text-gray-300 text-sm">Scalable architecture for growing businesses</p>
            </div>
            <div className="bg-[#1a1a1a] rounded-xl p-6 text-center">
              <FaChartLine className="text-4xl text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Analytics</h3>
              <p className="text-gray-300 text-sm">Advanced reporting and insights</p>
            </div>
            <div className="bg-[#1a1a1a] rounded-xl p-6 text-center">
              <FaShieldAlt className="text-4xl text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">GDPR Compliant</h3>
              <p className="text-gray-300 text-sm">Data protection and privacy compliance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Security Section */}
      <section className="py-20 px-4 bg-[#111]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Compliance & Security</h2>
            <p className="text-lg text-gray-300">Enterprise-grade security for peace of mind</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#1a1a1a] rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Security Standards</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>End-to-end encryption</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>SOC 2 Type II compliance</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>GDPR and CCPA compliant</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Regular security audits</span>
                </li>
              </ul>
            </div>
            <div className="bg-[#1a1a1a] rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Data Protection</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Data residency controls</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Automated backup systems</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Role-based access control</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>24/7 monitoring</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-b from-[#0a2a3a] to-[#0a0a0a]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-lg text-gray-300">Get started with AI automation today</p>
          </div>
          
          <div className="bg-[#1a1a1a] rounded-2xl p-8">
            {messageSent ? (
              <div className="text-center">
                <div className="text-green-400 text-6xl mb-4">✓</div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent Successfully!</h3>
                <p className="text-gray-300">We&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-[#333] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-[#333] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      className="w-full px-4 py-3 bg-[#333] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Business Type *</label>
                    <select
                      name="business"
                      required
                      className="w-full px-4 py-3 bg-[#333] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    >
                      <option value="">Select Business Type</option>
                      <option value="restaurant">Restaurant</option>
                      <option value="retail">Retail</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="professional-services">Professional Services</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Service Interest *</label>
                  <select
                    name="service"
                    required
                    className="w-full px-4 py-3 bg-[#333] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  >
                    <option value="">Select Service</option>
                    <option value="website-design">Website Design</option>
                    <option value="chatbots">AI Chatbots</option>
                    <option value="analytics">Business Intelligence</option>
                    <option value="automation">Workflow Automation</option>
                    <option value="consultation">Consultation</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Message *</label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 bg-[#333] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    placeholder="Tell us about your business needs..."
                  ></textarea>
                </div>
                {error && <p className="text-red-400 text-sm">{error}</p>}
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-lg transition-all duration-200 shadow-lg"
                >
                  Get Free Consultation
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
