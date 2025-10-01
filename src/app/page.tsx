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
          className="opacity-90"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4 leading-tight">
            AI Automation That Scales With You
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-teal-200 mb-6 px-4">
            From Startup to Enterprise — Revolutionizing Business Operations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center items-center">
            <a href="https://calendly.com/auralixai/30min" target="_blank" rel="noopener noreferrer" className="px-6 sm:px-8 py-4 bg-teal-500 hover:bg-teal-400 text-black font-bold rounded-full text-base sm:text-lg shadow-lg transition-all duration-200 text-center min-w-[200px]">
              Book Free Consultation
            </a>
            <a href="/solutions" className="px-6 sm:px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full text-base sm:text-lg shadow-lg transition-all duration-200 text-center min-w-[200px]">
              View Solutions
            </a>
          </div>
          
          {/* Trust Signals */}
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 mt-8 opacity-80 px-4">
            <div className="text-white text-xs sm:text-sm">97% Scheduling Accuracy</div>
            <div className="text-white text-xs sm:text-sm">85% Manual Input Reduction</div>
            <div className="text-white text-xs sm:text-sm">SOC 2 Ready</div>
            <div className="text-white text-xs sm:text-sm">GDPR Compliant</div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="bg-[#0a0a0a] py-8 sm:py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">Serving Nova Scotia businesses with AI automation</p>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 opacity-60">
            <div className="text-white text-sm sm:text-lg font-semibold">Garments Industry</div>
            <div className="text-white text-sm sm:text-lg font-semibold">Media Companies</div>
            <div className="text-white text-sm sm:text-lg font-semibold">Insurance Companies</div>
            <div className="text-white text-sm sm:text-lg font-semibold">Healthcare Clinics</div>
            <div className="text-white text-sm sm:text-lg font-semibold">Retail Stores</div>
            <div className="text-white text-sm sm:text-lg font-semibold">Professional Services</div>
          </div>
        </div>
      </section>

      {/* Our Ready Solutions */}
      <section className="w-full py-12 sm:py-20 px-4 bg-gradient-to-b from-[#0a2a3a] via-[#0a2233] to-[#0a0a0a]">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 text-cyan-300 tracking-wide">OUR READY SOLUTIONS</h2>
        <p className="text-center text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto">Production-ready AI solutions you can deploy immediately</p>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div className="flex flex-col bg-[#11202a] bg-opacity-80 rounded-2xl p-6 sm:p-8 shadow-xl hover:scale-105 transition-transform">
            <TbSettingsAutomation className="text-4xl sm:text-5xl mb-4 text-cyan-400 drop-shadow-glow" />
            <div className="font-bold text-base sm:text-lg text-cyan-200 mb-3 text-center">Workflow Automation</div>
            <p className="text-xs sm:text-sm text-gray-300 mb-4 flex-grow">Automate review requests, email/SMS follow-ups, order updates, and payment reminders. Free up your staff from busywork and focus on real customers.</p>
            <div className="text-xs text-teal-400 font-semibold text-center">Fully Automated</div>
          </div>
          <div className="flex flex-col bg-[#11202a] bg-opacity-80 rounded-2xl p-6 sm:p-8 shadow-xl hover:scale-105 transition-transform">
            <PiRobotLight className="text-4xl sm:text-5xl mb-4 text-cyan-400 drop-shadow-glow" />
            <div className="font-bold text-base sm:text-lg text-cyan-200 mb-3 text-center">Voice Agents</div>
            <p className="text-xs sm:text-sm text-gray-300 mb-4 flex-grow">AI that answers calls like a human. Takes orders, cancels orders, provides wait times, and routes calls. Perfect for restaurants, salons, and service businesses.</p>
            <div className="text-xs text-teal-400 font-semibold text-center">Human-like AI</div>
          </div>
          <div className="flex flex-col bg-[#11202a] bg-opacity-80 rounded-2xl p-6 sm:p-8 shadow-xl hover:scale-105 transition-transform">
            <MdOutlineAnalytics className="text-4xl sm:text-5xl mb-4 text-cyan-400 drop-shadow-glow" />
            <div className="font-bold text-base sm:text-lg text-cyan-200 mb-3 text-center">AI Chatbots</div>
            <p className="text-xs sm:text-sm text-gray-300 mb-4 flex-grow">Capture leads, answer FAQs, book appointments, and automate customer support. Works across websites, Instagram, Facebook, and WhatsApp.</p>
            <div className="text-xs text-teal-400 font-semibold text-center">Multi-platform</div>
          </div>
          <div className="flex flex-col bg-[#11202a] bg-opacity-80 rounded-2xl p-6 sm:p-8 shadow-xl hover:scale-105 transition-transform">
            <FaRegWindowMaximize className="text-4xl sm:text-5xl mb-4 text-cyan-400 drop-shadow-glow" />
            <div className="font-bold text-base sm:text-lg text-cyan-200 mb-3 text-center">AI-Powered Websites</div>
            <p className="text-xs sm:text-sm text-gray-300 mb-4 flex-grow">Modern, enterprise-grade websites with AI features integrated. Includes chatbots, automation workflows, and customer engagement tools built in from day one.</p>
            <div className="text-xs text-teal-400 font-semibold text-center">AI-first design</div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-12 sm:py-20 px-4 bg-[#111]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Success Story: Nova Scotia Restaurant Chain</h2>
            <p className="text-base sm:text-lg text-gray-300">How we transformed a local restaurant chain into an AI-powered operation</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-[#1a1a1a] rounded-xl p-6 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-2">40%</div>
              <div className="text-gray-300 text-sm sm:text-base">Increase in Bookings</div>
            </div>
            <div className="bg-[#1a1a1a] rounded-xl p-6 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-2">60%</div>
              <div className="text-gray-300 text-sm sm:text-base">Reduction in Admin Time</div>
            </div>
            <div className="bg-[#1a1a1a] rounded-xl p-6 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-2">25%</div>
              <div className="text-gray-300 text-sm sm:text-base">Increase in Revenue</div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Features Section */}
      <section className="py-12 sm:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Enterprise-Grade Features</h2>
            <p className="text-base sm:text-lg text-gray-300">Built for scale, security, and compliance</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#1a1a1a] rounded-xl p-6 text-center">
              <FaLock className="text-3xl sm:text-4xl text-green-400 mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">SOC 2 Ready</h3>
              <p className="text-gray-300 text-xs sm:text-sm">Enterprise-grade security and compliance</p>
            </div>
            <div className="bg-[#1a1a1a] rounded-xl p-6 text-center">
              <FaUsers className="text-3xl sm:text-4xl text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Multi-Tenant</h3>
              <p className="text-gray-300 text-xs sm:text-sm">Scalable architecture for growing businesses</p>
            </div>
            <div className="bg-[#1a1a1a] rounded-xl p-6 text-center">
              <FaChartLine className="text-3xl sm:text-4xl text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Analytics</h3>
              <p className="text-gray-300 text-xs sm:text-sm">Advanced reporting and insights</p>
            </div>
            <div className="bg-[#1a1a1a] rounded-xl p-6 text-center">
              <FaShieldAlt className="text-3xl sm:text-4xl text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">GDPR Compliant</h3>
              <p className="text-gray-300 text-xs sm:text-sm">Data protection and privacy compliance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Security Section */}
      <section className="py-12 sm:py-20 px-4 bg-[#111]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Compliance & Security</h2>
            <p className="text-base sm:text-lg text-gray-300">Enterprise-grade security for peace of mind</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-[#1a1a1a] rounded-xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Security Standards</h3>
              <ul className="space-y-3 text-gray-300 text-sm sm:text-base">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                  <span>End-to-end encryption</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                  <span>SOC 2 Type II compliance</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                  <span>GDPR and CCPA compliant</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                  <span>Regular security audits</span>
                </li>
              </ul>
            </div>
            <div className="bg-[#1a1a1a] rounded-xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Data Protection</h3>
              <ul className="space-y-3 text-gray-300 text-sm sm:text-base">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                  <span>Data residency controls</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                  <span>Automated backup systems</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                  <span>Role-based access control</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                  <span>24/7 monitoring</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-20 px-4 bg-gradient-to-b from-[#0a2a3a] to-[#0a0a0a]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-base sm:text-lg text-gray-300">Get started with AI automation today</p>
          </div>
          
          <div className="bg-[#1a1a1a] rounded-2xl p-6 sm:p-8">
            {messageSent ? (
              <div className="text-center">
                <div className="text-green-400 text-4xl sm:text-6xl mb-4">✓</div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Message Sent Successfully!</h3>
                <p className="text-gray-300 text-sm sm:text-base">We&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2 text-sm sm:text-base">Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-[#333] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2 text-sm sm:text-base">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-[#333] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-base"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2 text-sm sm:text-base">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      className="w-full px-4 py-3 bg-[#333] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2 text-sm sm:text-base">Business Type *</label>
                    <select
                      name="business"
                      required
                      className="w-full px-4 py-3 bg-[#333] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-base"
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
                  <label className="block text-white font-semibold mb-2 text-sm sm:text-base">Service Interest *</label>
                  <select
                    name="service"
                    required
                    className="w-full px-4 py-3 bg-[#333] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-base"
                  >
                    <option value="">Select Service</option>
                    <option value="workflow-automation">Workflow Automation</option>
                    <option value="voice-agents">Voice Agents</option>
                    <option value="ai-chatbots">AI Chatbots</option>
                    <option value="ai-websites">AI-Powered Websites</option>
                    <option value="consultation">Free Consultation</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2 text-sm sm:text-base">Message *</label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 bg-[#333] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-base"
                    placeholder="Tell us about your business needs..."
                  ></textarea>
                </div>
                {error && <p className="text-red-400 text-sm">{error}</p>}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button
                    type="submit"
                    className="w-full px-6 sm:px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-lg transition-all duration-200 shadow-lg text-base"
                  >
                    Send Message
                  </button>
                  <a 
                    href="https://calendly.com/auralixai/30min" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full px-6 sm:px-8 py-4 bg-teal-500 hover:bg-teal-400 text-black font-bold rounded-lg transition-all duration-200 shadow-lg text-base text-center flex items-center justify-center"
                  >
                    Book 30-Min Call
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
