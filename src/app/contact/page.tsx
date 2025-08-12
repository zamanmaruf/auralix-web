'use client';
import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    service: '',
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
          service: '',
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

  const getMessageColor = () => {
    if (submissionStatus === 'success') return 'text-green-400';
    if (submissionStatus === 'error') return 'text-red-400';
    return 'text-gray-400';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a2a3a] via-[#0a2233] to-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-cyan-300">Get in Touch</h1>
        <p className="text-xl md:text-2xl text-cyan-100 mb-8">Ready to transform your business with AI automation? Let&apos;s start a conversation.</p>
      </section>

      {/* Contact Information */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
            
            {submissionStatus === 'success' ? (
              <div className="text-center">
                <div className="text-green-400 text-6xl mb-4">✓</div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent Successfully!</h3>
                <p className="text-gray-300 mb-4">{submissionMessage}</p>
                <button
                  onClick={() => {
                    setSubmissionStatus('idle');
                    setSubmissionMessage('');
                  }}
                  className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-lg transition-all duration-200"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">Name *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                      className="w-full px-4 py-3 bg-[#333] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Email *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
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
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      required
                      className="w-full px-4 py-3 bg-[#333] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Business Name *</label>
                    <input
                      type="text"
                      value={formData.businessName}
                      onChange={(e) => handleInputChange('businessName', e.target.value)}
                      required
                      className="w-full px-4 py-3 bg-[#333] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Service Interest *</label>
                  <select
                    value={formData.service}
                    onChange={(e) => handleInputChange('service', e.target.value)}
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
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    rows={4}
                    required
                    className="w-full px-4 py-3 bg-[#333] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    placeholder="Tell us about your business needs..."
                  ></textarea>
                </div>
                {submissionMessage && (
                  <div className={`text-sm ${getMessageColor()}`}>
                    {submissionMessage}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={submissionStatus === 'loading'}
                  className="w-full px-8 py-4 bg-cyan-500 hover:bg-cyan-400 disabled:bg-gray-600 disabled:cursor-not-allowed text-black font-bold rounded-lg transition-all duration-200 shadow-lg"
                >
                  {submissionStatus === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <FaEnvelope className="text-cyan-400 text-xl" />
                  <div>
                    <div className="text-white font-semibold">Email</div>
                    <div className="text-gray-300">auralixai@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <FaPhone className="text-cyan-400 text-xl" />
                  <div>
                    <div className="text-white font-semibold">Phone</div>
                    <div className="text-gray-300">+1 (902) 555-0123</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <FaMapMarkerAlt className="text-cyan-400 text-xl" />
                  <div>
                    <div className="text-white font-semibold">Location</div>
                    <div className="text-gray-300">Halifax, Nova Scotia, Canada</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <FaClock className="text-cyan-400 text-xl" />
                  <div>
                    <div className="text-white font-semibold">Business Hours</div>
                    <div className="text-gray-300">Mon-Fri: 9:00 AM - 6:00 PM AST</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-4">Why Choose Auralix AI?</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <div className="text-gray-300">Local Nova Scotia expertise with global AI capabilities</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <div className="text-gray-300">Proven track record with local businesses</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <div className="text-gray-300">Personalized service and ongoing support</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <div className="text-gray-300">Flexible solutions that scale with your business</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-4">Ready to Get Started?</h3>
              <div className="space-y-3">
                <a
                  href="/trial"
                  className="block w-full px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-lg transition-all duration-200 text-center"
                >
                  Start Free Trial
                </a>
                <a
                  href="https://calendly.com/auralixai/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-6 py-3 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold rounded-lg transition-all duration-200 text-center"
                >
                  Book Strategy Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}