'use client';
import Image from "next/image";
import { FaRegWindowMaximize } from "react-icons/fa6";
import { MdOutlineAnalytics } from "react-icons/md";
import { PiRobotLight } from "react-icons/pi";
import { TbSettingsAutomation } from "react-icons/tb";
import { MdOutlineDashboard } from "react-icons/md";
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
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-black overflow-hidden">
        <Image
          src="/hero-ai-bg.jpg" // Place your image in public/hero-ai-bg.jpg
          alt="AI transformation background"
          fill
          style={{ objectFit: "cover" }}
          className="opacity-70"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4">
            AI Solutions for Every Industry
          </h1>
          <p className="text-xl md:text-2xl text-teal-200 mb-8">
            Revolutionizing Local Businesses With Automation, Analytics, and Smart Design
          </p>
          <a href="#contact" className="px-8 py-4 bg-teal-500 hover:bg-teal-400 text-black font-bold rounded-full text-lg shadow-lg transition-all duration-200">
            Get a Free Consultation
          </a>
        </div>
      </section>

      {/* What We Do */}
      <section className="w-full py-20 px-4 bg-gradient-to-b from-[#0a2a3a] via-[#0a2233] to-[#0a0a0a]">
        <h2 className="text-3xl font-bold text-center mb-12 text-cyan-300 tracking-wide">WHAT WE DO</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
          <div className="flex flex-col items-center bg-[#11202a] bg-opacity-80 rounded-2xl p-8 shadow-xl hover:scale-105 transition-transform">
            <FaRegWindowMaximize className="text-5xl mb-4 text-cyan-400 drop-shadow-glow" />
            <div className="font-bold text-lg text-cyan-200 mb-1 text-center">AI-powered Website Design</div>
          </div>
          <div className="flex flex-col items-center bg-[#11202a] bg-opacity-80 rounded-2xl p-8 shadow-xl hover:scale-105 transition-transform">
            <MdOutlineAnalytics className="text-5xl mb-4 text-cyan-400 drop-shadow-glow" />
            <div className="font-bold text-lg text-cyan-200 mb-1 text-center">SEO Optimization</div>
          </div>
          <div className="flex flex-col items-center bg-[#11202a] bg-opacity-80 rounded-2xl p-8 shadow-xl hover:scale-105 transition-transform">
            <TbSettingsAutomation className="text-5xl mb-4 text-cyan-400 drop-shadow-glow" />
            <div className="font-bold text-lg text-cyan-200 mb-1 text-center">Workflow Automation</div>
          </div>
          <div className="flex flex-col items-center bg-[#11202a] bg-opacity-80 rounded-2xl p-8 shadow-xl hover:scale-105 transition-transform">
            <PiRobotLight className="text-5xl mb-4 text-cyan-400 drop-shadow-glow" />
            <div className="font-bold text-lg text-cyan-200 mb-1 text-center">AI Chatbots</div>
          </div>
          <div className="flex flex-col items-center bg-[#11202a] bg-opacity-80 rounded-2xl p-8 shadow-xl hover:scale-105 transition-transform">
            <MdOutlineDashboard className="text-5xl mb-4 text-cyan-400 drop-shadow-glow" />
            <div className="font-bold text-lg text-cyan-200 mb-1 text-center">Business Intelligence Dashboards</div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="bg-[#111] py-20 px-4" id="industries">
        <h2 className="text-3xl font-bold text-center mb-10 text-orange-400">Industries We Serve</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {/* Carousel/grid placeholders */}
          <div className="bg-[#222] rounded-xl px-6 py-4 text-white">Restaurants</div>
          <div className="bg-[#222] rounded-xl px-6 py-4 text-white">Cafes</div>
          <div className="bg-[#222] rounded-xl px-6 py-4 text-white">Law Firms</div>
          <div className="bg-[#222] rounded-xl px-6 py-4 text-white">Salons</div>
          <div className="bg-[#222] rounded-xl px-6 py-4 text-white">Clinics</div>
          <div className="bg-[#222] rounded-xl px-6 py-4 text-white">Auto Shops</div>
          <div className="bg-[#222] rounded-xl px-6 py-4 text-white">Real Estate Agencies</div>
        </div>
      </section>

      {/* Why Auralix */}
      <section className="max-w-5xl mx-auto py-20 px-4" id="why-auralix">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-400">Why Auralix?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-[#181818] rounded-xl p-8 shadow-lg">
            <h3 className="text-xl font-semibold mb-2 text-teal-300">Speed & Simplicity</h3>
            <p>Launch fast with easy-to-use AI tools.</p>
          </div>
          <div className="bg-[#181818] rounded-xl p-8 shadow-lg">
            <h3 className="text-xl font-semibold mb-2 text-orange-300">Affordable AI</h3>
            <p>Enterprise-grade solutions for local budgets.</p>
          </div>
          <div className="bg-[#181818] rounded-xl p-8 shadow-lg">
            <h3 className="text-xl font-semibold mb-2 text-blue-300">Scalable Growth</h3>
            <p>Grow your business with future-proof tech.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-teal-500 to-blue-500 py-16 text-center" id="cta">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Let&apos;s Build the Future of Your Business</h2>
        <a href="/automate-with-ai" className="px-10 py-4 bg-black hover:bg-[#222] text-teal-300 font-bold rounded-full text-lg shadow-lg transition-all duration-200">
          Book a Demo
        </a>
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
