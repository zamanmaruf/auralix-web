'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, CheckCircle, Rocket, Headphones, Shield, Users, Calendar, Loader2 } from 'lucide-react';
import Link from 'next/link';

export default function TrialPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    businessName: '',
    industry: '',
    teamSize: '',
    useCase: '',
    painPoints: '',
    email: '',
    phone: ''
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
    } catch {
      setSubmissionStatus('error');
      setSubmissionMessage('Something went wrong. Please try again.');
    }
  };

  const steps = [
    { number: 1, title: 'Business Details', description: 'Tell us about your restaurant' },
    { number: 2, title: 'Demo Scheduling', description: 'Choose your preferred time' },
    { number: 3, title: 'Confirmation', description: 'Review and submit' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-900 text-white">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white font-heading">Start Your Free Trial</h1>
          <p className="text-xl text-neutral-300">Experience the power of AI automation for your restaurant in just 14 days</p>
        </motion.div>

        {/* Progress Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="flex items-center space-x-4">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                    currentStep >= step.number 
                      ? 'bg-primary-500 text-black' 
                      : 'bg-neutral-700 text-neutral-400'
                  }`}
                >
                  {step.number}
                </motion.div>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-1 mx-2 transition-all duration-300 ${
                    currentStep > step.number ? 'bg-primary-500' : 'bg-neutral-700'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Step Content */}
        <AnimatePresence mode="wait">
          {/* Step 1: Business Information */}
          {currentStep === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-neutral-800/80 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto border border-neutral-700"
            >
              <h2 className="text-2xl font-bold text-white mb-6 font-heading">Tell us about your restaurant</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-white font-semibold mb-2">Restaurant Name *</label>
                  <input
                    type="text"
                    value={formData.businessName}
                    onChange={(e) => handleInputChange('businessName', e.target.value)}
                    className="w-full px-4 py-3 bg-neutral-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 border border-neutral-600"
                    placeholder="Enter your restaurant name"
                  />
                </div>
                
                <div>
                  <label className="block text-white font-semibold mb-2">Restaurant Type *</label>
                  <select
                    value={formData.industry}
                    onChange={(e) => handleInputChange('industry', e.target.value)}
                    className="w-full px-4 py-3 bg-neutral-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 border border-neutral-600"
                  >
                    <option value="">Select your restaurant type</option>
                    <option value="restaurant">Full-Service Restaurant</option>
                    <option value="cafe">Café & Coffee Shop</option>
                    <option value="pizzeria">Pizzeria & Italian</option>
                    <option value="bar">Bar & Brewery</option>
                    <option value="takeout">Takeout & Delivery</option>
                    <option value="catering">Catering Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-white font-semibold mb-2">Team Size *</label>
                  <select
                    value={formData.teamSize}
                    onChange={(e) => handleInputChange('teamSize', e.target.value)}
                    className="w-full px-4 py-3 bg-neutral-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 border border-neutral-600"
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
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={nextStep}
                  disabled={!formData.businessName || !formData.industry || !formData.teamSize}
                  className="px-8 py-3 bg-primary-500 hover:bg-primary-400 disabled:bg-neutral-600 disabled:cursor-not-allowed text-white font-bold rounded-lg transition-all duration-200"
                >
                  Next Step
                </motion.button>
              </div>
            </motion.div>
          )}

          {/* Step 2: Use Case & Pain Points */}
          {currentStep === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-neutral-800/80 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto border border-neutral-700"
            >
              <h2 className="text-2xl font-bold text-white mb-6 font-heading">What are your goals?</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-white font-semibold mb-2">Primary Goal *</label>
                  <select
                    value={formData.useCase}
                    onChange={(e) => handleInputChange('useCase', e.target.value)}
                    className="w-full px-4 py-3 bg-neutral-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 border border-neutral-600"
                  >
                    <option value="">Select your primary goal</option>
                    <option value="missed-calls">Never Miss Another Call</option>
                    <option value="order-automation">Automate Order Taking</option>
                    <option value="reviews">Collect More Reviews</option>
                    <option value="efficiency">Reduce Admin Work</option>
                    <option value="revenue">Increase Revenue</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-white font-semibold mb-2">Current Challenges *</label>
                  <textarea
                    value={formData.painPoints}
                    onChange={(e) => handleInputChange('painPoints', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 bg-neutral-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 border border-neutral-600"
                    placeholder="Describe your current challenges with missed calls, order management, and what you hope to achieve with AI automation..."
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Contact Email *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-4 py-3 bg-neutral-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 border border-neutral-600"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full px-4 py-3 bg-neutral-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 border border-neutral-600"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>
              
              <div className="mt-8 flex justify-between">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={prevStep}
                  className="px-8 py-3 border-2 border-primary-400 text-primary-400 hover:bg-primary-400 hover:text-black font-bold rounded-lg transition-all duration-200"
                >
                  Previous
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={nextStep}
                  disabled={!formData.useCase || !formData.painPoints || !formData.email || !formData.phone}
                  className="px-8 py-3 bg-primary-500 hover:bg-primary-400 disabled:bg-neutral-600 disabled:cursor-not-allowed text-white font-bold rounded-lg transition-all duration-200"
                >
                  Next Step
                </motion.button>
              </div>
            </motion.div>
          )}

          {/* Step 3: Trial Features & Welcome */}
          {currentStep === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-neutral-800/80 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto border border-neutral-700"
            >
              <h2 className="text-2xl font-bold text-white mb-6 font-heading">Your Trial Includes</h2>
              
              <div className="space-y-6 mb-8">
                {[
                  {
                    icon: Rocket,
                    title: 'Full Platform Access',
                    description: 'Access to all restaurant AI features for 14 days'
                  },
                  {
                    icon: Headphones,
                    title: 'Dedicated Support',
                    description: 'Email and chat support throughout your trial period'
                  },
                  {
                    icon: Shield,
                    title: 'No Credit Card Required',
                    description: 'Start your trial instantly without any payment information'
                  },
                  {
                    icon: Users,
                    title: 'Onboarding Session',
                    description: 'Free 30-minute setup call with our restaurant AI specialists'
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <feature.icon className="text-primary-400 text-xl mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                      <p className="text-neutral-300">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="bg-primary-500/20 rounded-xl p-6 mb-8 border border-primary-500/30"
              >
                <h3 className="text-lg font-bold text-primary-300 mb-3">What happens next?</h3>
                <ul className="space-y-2 text-neutral-300">
                  {[
                    "You'll receive an email with your trial credentials",
                    "Our team will reach out within 24 hours to schedule your onboarding",
                    "Start exploring the platform and see results in your first week"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle className="text-primary-400 w-4 h-4 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              
              <div className="text-center">
                {submissionStatus === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center"
                  >
                    <CheckCircle className="text-green-400 text-6xl mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">Trial Request Submitted!</h3>
                    <p className="text-neutral-300 mb-4">{submissionMessage}</p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        setCurrentStep(1);
                        setFormData({
                          businessName: '',
                          industry: '',
                          teamSize: '',
                          useCase: '',
                          painPoints: '',
                          email: '',
                          phone: ''
                        });
                        setSubmissionStatus('idle');
                        setSubmissionMessage('');
                      }}
                      className="px-8 py-3 bg-primary-500 hover:bg-primary-400 text-white font-bold rounded-lg transition-all duration-200"
                    >
                      Start Another Trial
                    </motion.button>
                  </motion.div>
                ) : (
                  <>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleTrialSubmission}
                      disabled={submissionStatus === 'loading'}
                      className="px-12 py-4 bg-accent-orange hover:bg-accent-orange/90 disabled:bg-neutral-600 disabled:cursor-not-allowed text-white font-bold rounded-lg transition-all duration-200 shadow-lg text-lg flex items-center gap-2 mx-auto"
                    >
                      {submissionStatus === 'loading' ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Calendar className="w-5 h-5" />
                          Start Your Free Trial
                        </>
                      )}
                    </motion.button>
                    {submissionMessage && (
                      <div className={`mt-4 text-sm ${submissionStatus === 'error' ? 'text-red-400' : 'text-neutral-400'}`}>
                        {submissionMessage}
                      </div>
                    )}
                    <p className="text-sm text-neutral-400 mt-4">
                      By starting your trial, you agree to our Terms of Service and Privacy Policy
                    </p>
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}