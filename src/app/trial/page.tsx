'use client';
import { FaArrowLeft, FaCheck, FaRocket, FaHeadset, FaShieldAlt, FaUsers } from 'react-icons/fa';
import { useState } from 'react';
import Link from 'next/link';

export default function TrialPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    businessName: '',
    industry: '',
    teamSize: '',
    useCase: '',
    painPoints: ''
  });
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [submissionMessage, setSubmissionMessage] = useState('');

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, 3));
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleTrialSubmission = async () => {
    setSubmissionStatus('loading');
    setSubmissionMessage('');

    try {
      const response = await fetch('/api/trial', {
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
      } else {
        setSubmissionStatus('error');
        setSubmissionMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmissionStatus('error');
      setSubmissionMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a2a3a] via-[#0a2233] to-[#0a0a0a] text-white">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-8">
          <FaArrowLeft />
          Back to Home
        </Link>
        
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-cyan-300">Start Your Free Trial</h1>
          <p className="text-xl text-gray-300">Experience the power of AI automation in just 14 days</p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-4">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                  currentStep >= step 
                    ? 'bg-cyan-500 text-black' 
                    : 'bg-[#333] text-gray-400'
                }`}>
                  {step}
                </div>
                {step < 3 && (
                  <div className={`w-16 h-1 mx-2 ${
                    currentStep > step ? 'bg-cyan-500' : 'bg-[#333]'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step 1: Business Information */}
        {currentStep === 1 && (
          <div className="bg-[#1a1a1a] rounded-2xl p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6">Tell us about your business</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-white font-semibold mb-2">Business Name *</label>
                <input
                  type="text"
                  value={formData.businessName}
                  onChange={(e) => handleInputChange('businessName', e.target.value)}
                  className="w-full px-4 py-3 bg-[#333] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  placeholder="Enter your business name"
                />
              </div>
              
              <div>
                <label className="block text-white font-semibold mb-2">Industry *</label>
                <select
                  value={formData.industry}
                  onChange={(e) => handleInputChange('industry', e.target.value)}
                  className="w-full px-4 py-3 bg-[#333] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  <option value="">Select your industry</option>
                  <option value="restaurant">Restaurant & Food Service</option>
                  <option value="retail">Retail</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="professional-services">Professional Services</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="technology">Technology</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-white font-semibold mb-2">Team Size *</label>
                <select
                  value={formData.teamSize}
                  onChange={(e) => handleInputChange('teamSize', e.target.value)}
                  className="w-full px-4 py-3 bg-[#333] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  <option value="">Select team size</option>
                  <option value="1-5">1-5 employees</option>
                  <option value="6-10">6-10 employees</option>
                  <option value="11-25">11-25 employees</option>
                  <option value="26-50">26-50 employees</option>
                  <option value="50+">50+ employees</option>
                </select>
              </div>
            </div>
            
            <div className="mt-8 flex justify-end">
              <button
                onClick={nextStep}
                disabled={!formData.businessName || !formData.industry || !formData.teamSize}
                className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 disabled:bg-gray-600 disabled:cursor-not-allowed text-black font-bold rounded-lg transition-all duration-200"
              >
                Next Step
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Use Case & Pain Points */}
        {currentStep === 2 && (
          <div className="bg-[#1a1a1a] rounded-2xl p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6">What are your goals?</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-white font-semibold mb-2">Primary Use Case *</label>
                <select
                  value={formData.useCase}
                  onChange={(e) => handleInputChange('useCase', e.target.value)}
                  className="w-full px-4 py-3 bg-[#333] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  <option value="">Select your primary goal</option>
                  <option value="customer-service">Improve Customer Service</option>
                  <option value="automation">Automate Manual Tasks</option>
                  <option value="analytics">Better Business Intelligence</option>
                  <option value="efficiency">Increase Operational Efficiency</option>
                  <option value="growth">Scale Business Operations</option>
                </select>
              </div>
              
              <div>
                <label className="block text-white font-semibold mb-2">Current Pain Points *</label>
                <textarea
                  value={formData.painPoints}
                  onChange={(e) => handleInputChange('painPoints', e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 bg-[#333] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  placeholder="Describe your current challenges and what you hope to achieve with AI automation..."
                />
              </div>
            </div>
            
            <div className="mt-8 flex justify-between">
              <button
                onClick={prevStep}
                className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold rounded-lg transition-all duration-200"
              >
                Previous
              </button>
              <button
                onClick={nextStep}
                disabled={!formData.useCase || !formData.painPoints}
                className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 disabled:bg-gray-600 disabled:cursor-not-allowed text-black font-bold rounded-lg transition-all duration-200"
              >
                Next Step
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Trial Features & Welcome */}
        {currentStep === 3 && (
          <div className="bg-[#1a1a1a] rounded-2xl p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6">Your Trial Includes</h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <FaRocket className="text-cyan-400 text-xl mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Full Platform Access</h3>
                  <p className="text-gray-300">Access to all Small Business plan features for 14 days</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <FaHeadset className="text-cyan-400 text-xl mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Dedicated Support</h3>
                  <p className="text-gray-300">Email and chat support throughout your trial period</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <FaShieldAlt className="text-cyan-400 text-xl mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">No Credit Card Required</h3>
                  <p className="text-gray-300">Start your trial instantly without any payment information</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <FaUsers className="text-cyan-400 text-xl mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Onboarding Session</h3>
                  <p className="text-gray-300">Free 30-minute setup call with our AI specialists</p>
                </div>
              </div>
            </div>
            
            <div className="bg-[#0a2a3a] rounded-xl p-6 mb-8">
              <h3 className="text-lg font-bold text-cyan-300 mb-3">What happens next?</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <FaCheck className="text-cyan-400" />
                  <span>You&apos;ll receive an email with your trial credentials</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck className="text-cyan-400" />
                  <span>Our team will reach out within 24 hours to schedule your onboarding</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck className="text-cyan-400" />
                  <span>Start exploring the platform and see results in your first week</span>
                </li>
              </ul>
            </div>
            
            <div className="text-center">
              {submissionStatus === 'success' ? (
                <div className="text-center">
                  <div className="text-green-400 text-6xl mb-4">✓</div>
                  <h3 className="text-2xl font-bold text-white mb-2">Trial Request Submitted!</h3>
                  <p className="text-gray-300 mb-4">{submissionMessage}</p>
                  <button
                    onClick={() => {
                      setCurrentStep(1);
                      setFormData({
                        businessName: '',
                        industry: '',
                        teamSize: '',
                        useCase: '',
                        painPoints: ''
                      });
                      setSubmissionStatus('idle');
                      setSubmissionMessage('');
                    }}
                    className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-lg transition-all duration-200"
                  >
                    Start Another Trial
                  </button>
                </div>
              ) : (
                <>
                  <button 
                    onClick={handleTrialSubmission}
                    disabled={submissionStatus === 'loading'}
                    className="px-12 py-4 bg-cyan-500 hover:bg-cyan-400 disabled:bg-gray-600 disabled:cursor-not-allowed text-black font-bold rounded-lg transition-all duration-200 shadow-lg text-lg"
                  >
                    {submissionStatus === 'loading' ? 'Submitting...' : 'Start Your Free Trial'}
                  </button>
                  {submissionMessage && (
                    <div className={`mt-4 text-sm ${submissionStatus === 'error' ? 'text-red-400' : 'text-gray-400'}`}>
                      {submissionMessage}
                    </div>
                  )}
                  <p className="text-sm text-gray-400 mt-4">
                    By starting your trial, you agree to our Terms of Service and Privacy Policy
                  </p>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}