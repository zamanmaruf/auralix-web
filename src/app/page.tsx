'use client';
import Image from "next/image";
import { FaRegWindowMaximize } from "react-icons/fa6";
import { MdOutlineAnalytics } from "react-icons/md";
import { PiRobotLight } from "react-icons/pi";
import { TbSettingsAutomation } from "react-icons/tb";
import { MdOutlineDashboard } from "react-icons/md";
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
            <a href="#contact" className="px-8 py-4 bg-teal-500 hover:bg-teal-400 text-black font-bold rounded-full text-lg shadow-lg transition-all duration-200">
              For Small Businesses
            </a>
            <a href="#enterprise" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full text-lg shadow-lg transition-all duration-200">
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
            <MdOutlineAnalytics className="text-5xl mb-4 text-cyan-400 drop-shadow-glow" />
            <div className="font-bold text-lg text-cyan-200 mb-2 text-center">Advanced Analytics</div>
            <p className="text-sm text-gray-300 text-center">Real-time business intelligence and performance tracking</p>
          </div>
          <div className="flex flex-col items-center bg-[#11202a] bg-opacity-80 rounded-2xl p-8 shadow-xl hover:scale-105 transition-transform">
            <TbSettingsAutomation className="text-5xl mb-4 text-cyan-400 drop-shadow-glow" />
            <div className="font-bold text-lg text-cyan-200 mb-2 text-center">Workflow Automation</div>
            <p className="text-sm text-gray-300 text-center">Custom automation for complex business processes</p>
          </div>
          <div className="flex flex-col items-center bg-[#11202a] bg-opacity-80 rounded-2xl p-8 shadow-xl hover:scale-105 transition-transform">
            <PiRobotLight className="text-5xl mb-4 text-cyan-400 drop-shadow-glow" />
            <div className="font-bold text-lg text-cyan-200 mb-2 text-center">AI Chatbots</div>
            <p className="text-sm text-gray-300 text-center">Intelligent customer service and lead qualification</p>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="bg-[#111] py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-orange-400">Success Story</h2>
          <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-4 text-white">4-Location Salon Chain Transformation</h3>
            <p className="text-lg text-gray-300 mb-6">
              "A Nova Scotia salon chain used Auralix AI to automate booking and customer management, 
              resulting in a 22% increase in monthly revenue and 60% reduction in administrative overhead."
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="text-green-400">✓ 22% Revenue Increase</div>
              <div className="text-blue-400">✓ 60% Admin Reduction</div>
              <div className="text-purple-400">✓ 95% Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve - Enhanced */}
      <section className="bg-[#0a0a0a] py-20 px-4" id="industries">
        <h2 className="text-3xl font-bold text-center mb-10 text-orange-400">Industries We Serve</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="bg-[#222] rounded-xl px-6 py-4 text-white hover:bg-[#333] transition-colors cursor-pointer">Restaurants</div>
          <div className="bg-[#222] rounded-xl px-6 py-4 text-white hover:bg-[#333] transition-colors cursor-pointer">Cafes</div>
          <div className="bg-[#222] rounded-xl px-6 py-4 text-white hover:bg-[#333] transition-colors cursor-pointer">Law Firms</div>
          <div className="bg-[#222] rounded-xl px-6 py-4 text-white hover:bg-[#333] transition-colors cursor-pointer">Salons</div>
          <div className="bg-[#222] rounded-xl px-6 py-4 text-white hover:bg-[#333] transition-colors cursor-pointer">Clinics</div>
          <div className="bg-[#222] rounded-xl px-6 py-4 text-white hover:bg-[#333] transition-colors cursor-pointer">Auto Shops</div>
          <div className="bg-[#222] rounded-xl px-6 py-4 text-white hover:bg-[#333] transition-colors cursor-pointer">Real Estate</div>
          <div className="bg-[#222] rounded-xl px-6 py-4 text-white hover:bg-[#333] transition-colors cursor-pointer">Manufacturing</div>
        </div>
      </section>

      {/* Enterprise Features Section */}
      <section className="max-w-6xl mx-auto py-20 px-4" id="enterprise">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-400">Enterprise Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-[#181818] rounded-xl p-8 shadow-lg text-center">
            <FaShieldAlt className="text-4xl mx-auto mb-4 text-green-400" />
            <h3 className="text-xl font-semibold mb-2 text-white">Enterprise Security</h3>
            <p className="text-gray-300">SOC 2, GDPR, and CASL compliance with end-to-end encryption</p>
          </div>
          <div className="bg-[#181818] rounded-xl p-8 shadow-lg text-center">
            <FaUsers className="text-4xl mx-auto mb-4 text-blue-400" />
            <h3 className="text-xl font-semibold mb-2 text-white">Dedicated Support</h3>
            <p className="text-gray-300">24/7 technical support with dedicated account managers</p>
          </div>
          <div className="bg-[#181818] rounded-xl p-8 shadow-lg text-center">
            <FaChartLine className="text-4xl mx-auto mb-4 text-purple-400" />
            <h3 className="text-xl font-semibold mb-2 text-white">Advanced Analytics</h3>
            <p className="text-gray-300">Real-time dashboards and predictive insights</p>
          </div>
          <div className="bg-[#181818] rounded-xl p-8 shadow-lg text-center">
            <FaLock className="text-4xl mx-auto mb-4 text-orange-400" />
            <h3 className="text-xl font-semibold mb-2 text-white">API Integration</h3>
            <p className="text-gray-300">Seamless integration with existing ERP and CRM systems</p>
          </div>
        </div>
      </section>

      {/* Why Auralix - Enhanced */}
      <section className="max-w-5xl mx-auto py-20 px-4" id="why-auralix">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-400">Why Auralix?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-[#181818] rounded-xl p-8 shadow-lg">
            <h3 className="text-xl font-semibold mb-2 text-teal-300">Speed & Simplicity</h3>
            <p className="text-gray-300">Launch fast with enterprise-grade AI tools designed for scale.</p>
          </div>
          <div className="bg-[#181818] rounded-xl p-8 shadow-lg">
            <h3 className="text-xl font-semibold mb-2 text-orange-300">ROI Focused</h3>
            <p className="text-gray-300">Proven results with measurable business impact and rapid ROI.</p>
          </div>
          <div className="bg-[#181818] rounded-xl p-8 shadow-lg">
            <h3 className="text-xl font-semibold mb-2 text-blue-300">Future-Ready</h3>
            <p className="text-gray-300">Scalable architecture that grows with your business needs.</p>
          </div>
        </div>
      </section>

      {/* Compliance & Security Section */}
      <section className="bg-gradient-to-r from-[#0a1a2a] to-[#0a2a3a] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-white">Trust & Compliance</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400 mb-2">100% Encrypted</div>
              <p className="text-gray-300">End-to-end data encryption at rest and in transit</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400 mb-2">Enterprise Infrastructure</div>
              <p className="text-gray-300">Built on AWS with 99.9% uptime SLA</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400 mb-2">Compliance Ready</div>
              <p className="text-gray-300">SOC 2, GDPR, and CASL compliance roadmap</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="bg-gradient-to-r from-teal-500 to-blue-500 py-16 text-center" id="cta">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Let&apos;s Build the Future of Your Business</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/automate-with-ai" className="px-10 py-4 bg-black hover:bg-[#222] text-teal-300 font-bold rounded-full text-lg shadow-lg transition-all duration-200">
            Book a Demo
          </a>
          <a href="#contact" className="px-10 py-4 bg-white hover:bg-gray-100 text-blue-600 font-bold rounded-full text-lg shadow-lg transition-all duration-200">
            Get Free Consultation
          </a>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative py-20 px-4 bg-[#0a0a0a]" id="contact">
        <div className="absolute inset-0 bg-[url('/hero-ai-bg.jpg')] bg-cover bg-center opacity-20 pointer-events-none" />
        <div className="relative max-w-xl mx-auto bg-[#181818] bg-opacity-90 rounded-xl p-10 shadow-2xl z-10">
          <h2 className="text-3xl font-bold text-center mb-8 text-teal-400">Contact Us</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input name="name" className="p-3 rounded bg-[#222] text-white" placeholder="Name" />
            <input name="email" className="p-3 rounded bg-[#222] text-white" placeholder="Email" />
            <input name="phone" className="p-3 rounded bg-[#222] text-white" placeholder="Phone" />
            <input name="business" className="p-3 rounded bg-[#222] text-white" placeholder="Business Name" />
            <input name="service" className="p-3 rounded bg-[#222] text-white" placeholder="Service Needed" />
            <textarea name="message" className="p-3 rounded bg-[#222] text-white" placeholder="Message" rows={4} />
            <button type="submit" className="mt-4 px-8 py-3 bg-teal-500 hover:bg-teal-400 text-black font-bold rounded-full text-lg shadow-lg transition-all duration-200">
              Send Message
            </button>
          </form>
          {error && (
            <div className="mt-4 text-red-400 font-semibold text-center">{error}</div>
          )}
          {messageSent && (
            <div className="mt-4 text-green-400 font-semibold text-center">Message sent!</div>
          )}
        </div>
      </section>
    </div>
  );
}
