"use client";

import { FaRegClock, FaRobot, FaChartBar, FaSearch, FaCalendarCheck } from "react-icons/fa";
import { MdRestaurant, MdLocalHospital, MdContentCut, MdStore } from "react-icons/md";
import Image from "next/image";
import Head from "next/head";
import { useState } from "react";

export default function AutomateWithAIPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    serviceNeeded: '',
    message: ''
  });
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [submissionMessage, setSubmissionMessage] = useState('');

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionStatus('loading');
    setSubmissionMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmissionStatus('success');
        setSubmissionMessage(data.message);
        setFormData({
          name: '',
          email: '',
          phone: '',
          businessName: '',
          serviceNeeded: '',
          message: ''
        });
      } else {
        setSubmissionStatus('error');
        setSubmissionMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setSubmissionStatus('error');
      setSubmissionMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <>
      <Head>
        <title>Automate With AI | Auralix AI</title>
        <meta name="description" content="Simplify, scale, and save with AI automation for local businesses. Discover how Auralix AI helps you reduce costs, improve efficiency, and grow with automation." />
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-[#0a2a3a] via-[#0a2233] to-[#0a0a0a] text-white pb-20">
        {/* Intro Section */}
        <section className="max-w-4xl mx-auto text-center py-20 px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-cyan-300">
            Simplify, Scale, and Save With AI
          </h1>
          <p className="text-xl md:text-2xl text-cyan-100 mb-8">
            Discover how we help local businesses reduce costs, improve efficiency, and grow with AI automation.
          </p>
        </section>

        {/* Benefits Section */}
        <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 mb-20">
          <div className="bg-[#11202a] rounded-2xl p-8 flex flex-col items-center shadow-xl">
            <FaRegClock className="text-4xl text-cyan-400 mb-4" />
            <div className="font-bold text-lg mb-2">Save 20+ hours/week</div>
            <p className="text-cyan-100 text-center">Automate repetitive tasks and focus on what matters most.</p>
          </div>
          <div className="bg-[#11202a] rounded-2xl p-8 flex flex-col items-center shadow-xl">
            <FaRobot className="text-4xl text-cyan-400 mb-4" />
            <div className="font-bold text-lg mb-2">Instant Customer Support</div>
            <p className="text-cyan-100 text-center">24/7 AI chatbots handle bookings, FAQs, and more.</p>
          </div>
          <div className="bg-[#11202a] rounded-2xl p-8 flex flex-col items-center shadow-xl">
            <FaChartBar className="text-4xl text-cyan-400 mb-4" />
            <div className="font-bold text-lg mb-2">Smart Dashboards</div>
            <p className="text-cyan-100 text-center">Visualize your business with real-time, actionable insights.</p>
          </div>
          <div className="bg-[#11202a] rounded-2xl p-8 flex flex-col items-center shadow-xl">
            <FaSearch className="text-4xl text-cyan-400 mb-4" />
            <div className="font-bold text-lg mb-2">Auto Website SEO Updates</div>
            <p className="text-cyan-100 text-center">Stay ahead on Google with AI-powered SEO improvements.</p>
          </div>
          <div className="bg-[#11202a] rounded-2xl p-8 flex flex-col items-center shadow-xl">
            <FaCalendarCheck className="text-4xl text-cyan-400 mb-4" />
            <div className="font-bold text-lg mb-2">Streamlined Appointments</div>
            <p className="text-cyan-100 text-center">Automate bookings, reminders, and order systems.</p>
          </div>
        </section>

        {/* Live Demos Section */}
        <section className="max-w-5xl mx-auto py-16 px-4 text-center">
          <h2 className="text-2xl font-bold text-cyan-200 mb-8">See AI in Action</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-[#181f2a] rounded-xl p-6 w-72 shadow-lg flex flex-col items-center">
              <div className="bg-cyan-900 rounded-lg w-full h-32 mb-4 flex items-center justify-center text-cyan-300 text-lg font-semibold">
                Coming soon
              </div>
              <div className="font-semibold mb-1">AI Chatbot</div>
              <p className="text-cyan-100 text-sm">See how our chatbot handles real customer questions.</p>
            </div>
            <div className="bg-[#181f2a] rounded-xl p-6 w-72 shadow-lg flex flex-col items-center">
              <div className="bg-cyan-900 rounded-lg w-full h-32 mb-4 flex items-center justify-center text-cyan-300 text-lg font-semibold">
                Coming soon
              </div>
              <div className="font-semibold mb-1">AI Booking System</div>
              <p className="text-cyan-100 text-sm">Experience seamless, automated appointment scheduling.</p>
            </div>
            <div className="bg-[#181f2a] rounded-xl p-6 w-72 shadow-lg flex flex-col items-center">
              <div className="bg-cyan-900 rounded-lg w-full h-32 mb-4 flex items-center justify-center">
                <Image
                  src="/dashboard.jpg"
                  alt="Analytics Dashboard Demo"
                  width={288}
                  height={128}
                  className="rounded-lg object-cover w-full h-32"
                  style={{ maxHeight: '8rem' }}
                />
              </div>
              <div className="font-semibold mb-1">Analytics Dashboard</div>
              <p className="text-cyan-100 text-sm">Visualize your business growth with smart dashboards.</p>
            </div>
          </div>
        </section>

        {/* Industries Supported */}
        <section className="max-w-4xl mx-auto py-16 px-4 text-center">
          <h2 className="text-2xl font-bold text-orange-400 mb-8">Industries We Serve</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex flex-col items-center bg-[#222] rounded-xl px-6 py-4 text-white w-40">
              <MdRestaurant className="text-3xl mb-2 text-orange-300" />
              Restaurants
            </div>
            <div className="flex flex-col items-center bg-[#222] rounded-xl px-6 py-4 text-white w-40">
              <MdContentCut className="text-3xl mb-2 text-orange-300" />
              Salons
            </div>
            <div className="flex flex-col items-center bg-[#222] rounded-xl px-6 py-4 text-white w-40">
              <MdLocalHospital className="text-3xl mb-2 text-orange-300" />
              Clinics
            </div>
            <div className="flex flex-col items-center bg-[#222] rounded-xl px-6 py-4 text-white w-40">
              <FaChartBar className="text-3xl mb-2 text-orange-300" />
              Law Firms
            </div>
            <div className="flex flex-col items-center bg-[#222] rounded-xl px-6 py-4 text-white w-40">
              <MdStore className="text-3xl mb-2 text-orange-300" />
              Auto Shops
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-cyan-200 mb-6">
            Ready to Automate Your Business?
          </h2>
          <a
            href="/trial"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-cyan-400 hover:bg-cyan-300 text-black font-bold rounded-full text-lg shadow-lg transition-all duration-200 mr-4 inline-block text-center"
          >
            Book a Free Automation Strategy Call
          </a>
        </section>

        {/* Contact Us Section for anchor scroll */}
        <section id="contact" className="py-16 text-center bg-[#181818] rounded-xl max-w-lg mx-auto mt-10">
          <h2 className="text-3xl font-bold text-cyan-400 mb-8">Contact Us</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className="p-3 rounded bg-[#222] text-white"
            />
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="p-3 rounded bg-[#222] text-white"
            />
            <input
              type="tel"
              placeholder="Phone"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className="p-3 rounded bg-[#222] text-white"
            />
            <input
              type="text"
              placeholder="Business Name"
              value={formData.businessName}
              onChange={(e) => handleInputChange('businessName', e.target.value)}
              className="p-3 rounded bg-[#222] text-white"
            />
            <input
              type="text"
              placeholder="Service Needed"
              value={formData.serviceNeeded}
              onChange={(e) => handleInputChange('serviceNeeded', e.target.value)}
              className="p-3 rounded bg-[#222] text-white"
            />
            <textarea
              placeholder="Message"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              rows={4}
              className="p-3 rounded bg-[#222] text-white"
            />
            <button
              type="submit"
              className="mt-4 px-8 py-3 bg-cyan-400 hover:bg-cyan-300 text-black font-bold rounded-full text-lg shadow-lg transition-all duration-200"
              disabled={submissionStatus === 'loading'}
            >
              {submissionStatus === 'loading' ? 'Sending...' : 'Send Message'}
            </button>
            {submissionStatus === 'success' && (
              <p className="text-green-400 text-center mt-4">{submissionMessage}</p>
            )}
            {submissionStatus === 'error' && (
              <p className="text-red-400 text-center mt-4">{submissionMessage}</p>
            )}
          </form>
        </section>
      </div>
    </>
  );
}
