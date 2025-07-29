'use client';
import { useState } from "react";
import { FaRocket, FaShieldAlt, FaUsers, FaChartLine, FaCheck, FaArrowRight, FaClock, FaHeadset } from "react-icons/fa";
import { MdOutlineAnalytics, MdOutlineSecurity } from "react-icons/md";

export default function TrialPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    email: '',
    phone: '',
    businessSize: '',
    industry: '',
    useCase: '',
    painPoints: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Trial signup:', formData);
    setCurrentStep(2);
  };

  const steps = [
    { id: 1, title: "Business Information", description: "Tell us about your business" },
    { id: 2, title: "Trial Setup", description: "Configure your trial environment" },
    { id: 3, title: "Welcome", description: "Get started with your trial" }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-[#0a2a3a] to-[#0a0a0a]">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Start Your Free Trial
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get up and running in under 5 minutes. No credit card required. 
            Experience the power of AI automation for your business.
          </p>
          
          {/* Progress Steps */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-4">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    currentStep >= step.id ? 'bg-cyan-500 text-black' : 'bg-gray-700 text-gray-400'
                  }`}>
                    {currentStep > step.id ? <FaCheck /> : step.id}
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-16 h-1 ${
                      currentStep > step.id ? 'bg-cyan-500' : 'bg-gray-700'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Step 1: Business Information */}
      {currentStep === 1 && (
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">Tell Us About Your Business</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Business Name *</label>
                    <input
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-[#333] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                      placeholder="Your Business Name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Contact Name *</label>
                    <input
                      type="text"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-[#333] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                      placeholder="Your Full Name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-[#333] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-[#333] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Business Size *</label>
                    <select
                      name="businessSize"
                      value={formData.businessSize}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-[#333] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    >
                      <option value="">Select business size</option>
                      <option value="1-5">1-5 employees</option>
                      <option value="6-10">6-10 employees</option>
                      <option value="11-25">11-25 employees</option>
                      <option value="26-50">26-50 employees</option>
                      <option value="50+">50+ employees</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Industry *</label>
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-[#333] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    >
                      <option value="">Select your industry</option>
                      <option value="restaurant">Restaurant & Food Service</option>
                      <option value="retail">Retail</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="legal">Legal Services</option>
                      <option value="beauty">Beauty & Salon</option>
                      <option value="automotive">Automotive</option>
                      <option value="real-estate">Real Estate</option>
                      <option value="consulting">Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Primary Use Case *</label>
                  <select
                    name="useCase"
                    value={formData.useCase}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[#333] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  >
                    <option value="">What do you want to automate?</option>
                    <option value="customer-service">Customer Service & Support</option>
                    <option value="appointments">Appointment Booking</option>
                    <option value="lead-generation">Lead Generation</option>
                    <option value="analytics">Business Analytics</option>
                    <option value="workflow">Workflow Automation</option>
                    <option value="content">Content Generation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Current Pain Points</label>
                  <textarea
                    name="painPoints"
                    value={formData.painPoints}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 bg-[#333] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    placeholder="What challenges are you currently facing? (e.g., too much manual work, poor customer response times, etc.)"
                  />
                </div>
                
                <div className="text-center">
                  <button
                    type="submit"
                    className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-full text-lg shadow-lg transition-all duration-200 flex items-center gap-2 mx-auto"
                  >
                    Start My Free Trial
                    <FaArrowRight />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      )}

      {/* Step 2: Trial Setup */}
      {currentStep === 2 && (
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">Configure Your Trial</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-[#333] rounded-xl p-6 text-center">
                  <FaRocket className="text-4xl text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Quick Setup</h3>
                  <p className="text-gray-300 text-sm">Get started in under 5 minutes with our guided setup wizard</p>
                </div>
                
                <div className="bg-[#333] rounded-xl p-6 text-center">
                  <MdOutlineAnalytics className="text-4xl text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Sample Data</h3>
                  <p className="text-gray-300 text-sm">Pre-loaded with sample data to help you explore features</p>
                </div>
                
                <div className="bg-[#333] rounded-xl p-6 text-center">
                  <FaHeadset className="text-4xl text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Support Included</h3>
                  <p className="text-gray-300 text-sm">Email support during your trial period</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">What's Included in Your Trial:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <FaCheck className="text-green-400" />
                    <span className="text-gray-300">AI Chatbot (Basic)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCheck className="text-green-400" />
                    <span className="text-gray-300">Analytics Dashboard</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCheck className="text-green-400" />
                    <span className="text-gray-300">Workflow Automation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCheck className="text-green-400" />
                    <span className="text-gray-300">Email Support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCheck className="text-green-400" />
                    <span className="text-gray-300">14-Day Trial Period</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCheck className="text-green-400" />
                    <span className="text-gray-300">No Credit Card Required</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <button
                  onClick={() => setCurrentStep(3)}
                  className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-full text-lg shadow-lg transition-all duration-200 flex items-center gap-2 mx-auto"
                >
                  Continue to Trial
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Step 3: Welcome */}
      {currentStep === 3 && (
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <FaCheck className="text-3xl text-black" />
              </div>
              
              <h2 className="text-3xl font-bold text-white mb-4">Welcome to Auralix AI!</h2>
              <p className="text-lg text-gray-300 mb-8">
                Your trial account has been created successfully. Check your email for login credentials and setup instructions.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-[#333] rounded-xl p-6">
                  <FaClock className="text-3xl text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Next Steps</h3>
                  <ul className="text-sm text-gray-300 space-y-2 text-left">
                    <li>• Check your email for login details</li>
                    <li>• Complete the 5-minute setup wizard</li>
                    <li>• Explore sample data and templates</li>
                    <li>• Schedule a demo consultation</li>
                  </ul>
                </div>
                
                <div className="bg-[#333] rounded-xl p-6">
                  <FaHeadset className="text-3xl text-blue-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Support</h3>
                  <ul className="text-sm text-gray-300 space-y-2 text-left">
                    <li>• Email: support@auralix.ai</li>
                    <li>• Documentation available</li>
                    <li>• Video tutorials included</li>
                    <li>• Live chat during business hours</li>
                  </ul>
                </div>
                
                <div className="bg-[#333] rounded-xl p-6">
                  <FaShieldAlt className="text-3xl text-purple-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Security</h3>
                  <ul className="text-sm text-gray-300 space-y-2 text-left">
                    <li>• SOC 2 compliant infrastructure</li>
                    <li>• End-to-end encryption</li>
                    <li>• GDPR compliant data handling</li>
                    <li>• Regular security audits</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/dashboard" className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-full text-lg shadow-lg transition-all duration-200">
                  Access Your Dashboard
                </a>
                <a href="/solutions" className="px-8 py-4 bg-transparent hover:bg-white hover:text-black text-white font-bold rounded-full text-lg border-2 border-white transition-all duration-200">
                  View All Solutions
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-[#111]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Why Start Your Trial Today?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <FaRocket className="text-4xl text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Quick Setup</h3>
              <p className="text-gray-300 text-sm">Get up and running in under 5 minutes with our streamlined onboarding process.</p>
            </div>
            
            <div className="text-center">
              <FaShieldAlt className="text-4xl text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No Risk</h3>
              <p className="text-gray-300 text-sm">14-day free trial with no credit card required. Cancel anytime.</p>
            </div>
            
            <div className="text-center">
              <FaUsers className="text-4xl text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Full Access</h3>
              <p className="text-gray-300 text-sm">Experience all features with sample data and pre-built templates.</p>
            </div>
            
            <div className="text-center">
              <FaHeadset className="text-4xl text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Expert Support</h3>
              <p className="text-gray-300 text-sm">Get help when you need it with responsive email support.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}