'use client';
import { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaGraduationCap, FaBriefcase, FaFileAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function ApplyPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    linkedin: '',
    github: '',
    
    // Professional Information
    position: '',
    experience: '',
    education: '',
    skills: '',
    currentCompany: '',
    currentRole: '',
    
    // Application Details
    coverLetter: '',
    salaryExpectation: '',
    startDate: '',
    workAuthorization: '',
    remotePreference: '',
    
    // Additional Information
    portfolio: '',
    references: '',
    additionalInfo: ''
  });
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [submissionMessage, setSubmissionMessage] = useState('');

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, 4));
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    setSubmissionStatus('loading');
    setSubmissionMessage('');

    try {
      const response = await fetch('/api/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmissionStatus('success');
        setSubmissionMessage('Thank you for your application! We will review your information and get back to you within 48 hours.');
      } else {
        setSubmissionStatus('error');
        setSubmissionMessage(result.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmissionStatus('error');
      setSubmissionMessage('Network error. Please check your connection and try again.');
    }
  };

  const positions = [
    'Senior AI Engineer',
    'Business Development Manager',
    'UX/UI Designer',
    'Customer Success Specialist',
    'Full Stack Developer',
    'Data Scientist',
    'Product Manager',
    'Marketing Specialist',
    'Other'
  ];

  const experienceLevels = [
    '0-2 years',
    '3-5 years',
    '6-10 years',
    '10+ years'
  ];

  const educationLevels = [
    'High School',
    'Associate Degree',
    'Bachelor\'s Degree',
    'Master\'s Degree',
    'PhD',
    'Other'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a2a3a] via-[#0a2233] to-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-cyan-300">Join Our Team</h1>
        <p className="text-xl md:text-2xl text-cyan-100 mb-8">Apply for a position at Auralix AI</p>
        <p className="text-gray-300">Help us revolutionize business automation with AI technology</p>
      </section>

      {/* Application Form */}
      <section className="max-w-4xl mx-auto py-16 px-4">
        <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${currentStep >= 1 ? 'bg-cyan-500 text-black' : 'bg-gray-600 text-gray-300'}`}>
                1
              </div>
              <div className={`flex-1 h-1 mx-4 ${currentStep >= 2 ? 'bg-cyan-500' : 'bg-gray-600'}`}></div>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${currentStep >= 2 ? 'bg-cyan-500 text-black' : 'bg-gray-600 text-gray-300'}`}>
                2
              </div>
              <div className={`flex-1 h-1 mx-4 ${currentStep >= 3 ? 'bg-cyan-500' : 'bg-gray-600'}`}></div>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${currentStep >= 3 ? 'bg-cyan-500 text-black' : 'bg-gray-600 text-gray-300'}`}>
                3
              </div>
              <div className={`flex-1 h-1 mx-4 ${currentStep >= 4 ? 'bg-cyan-500' : 'bg-gray-600'}`}></div>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${currentStep >= 4 ? 'bg-cyan-500 text-black' : 'bg-gray-600 text-gray-300'}`}>
                4
              </div>
            </div>
            <div className="flex justify-between text-sm text-gray-400">
              <span>Personal Info</span>
              <span>Professional</span>
              <span>Application</span>
              <span>Review</span>
            </div>
          </div>

          {/* Step 1: Personal Information */}
          {currentStep === 1 && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Personal Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">First Name *</label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="w-full px-4 py-3 bg-[#333] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Last Name *</label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="w-full px-4 py-3 bg-[#333] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-4 py-3 bg-[#333] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Phone *</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full px-4 py-3 bg-[#333] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Location *</label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    placeholder="City, Province"
                    className="w-full px-4 py-3 bg-[#333] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">LinkedIn Profile</label>
                  <input
                    type="url"
                    value={formData.linkedin}
                    onChange={(e) => handleInputChange('linkedin', e.target.value)}
                    placeholder="https://linkedin.com/in/yourprofile"
                    className="w-full px-4 py-3 bg-[#333] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">GitHub Profile</label>
                  <input
                    type="url"
                    value={formData.github}
                    onChange={(e) => handleInputChange('github', e.target.value)}
                    placeholder="https://github.com/yourusername"
                    className="w-full px-4 py-3 bg-[#333] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  />
                </div>
              </div>
              <div className="mt-8 flex justify-end">
                <button
                  onClick={nextStep}
                  disabled={!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.location}
                  className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 disabled:bg-gray-600 disabled:cursor-not-allowed text-black font-bold rounded-lg transition-all duration-200"
                >
                  Next Step
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Professional Information */}
          {currentStep === 2 && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Professional Information</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Position You're Applying For *</label>
                  <select
                    value={formData.position}
                    onChange={(e) => handleInputChange('position', e.target.value)}
                    className="w-full px-4 py-3 bg-[#333] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    required
                  >
                    <option value="">Select a position</option>
                    {positions.map((position) => (
                      <option key={position} value={position}>{position}</option>
                    ))}
                  </select>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Years of Experience *</label>
                    <select
                      value={formData.experience}
                      onChange={(e) => handleInputChange('experience', e.target.value)}
                      className="w-full px-4 py-3 bg-[#333] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                      required
                    >
                      <option value="">Select experience level</option>
                      {experienceLevels.map((level) => (
                        <option key={level} value={level}>{level}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Education Level *</label>
                    <select
                      value={formData.education}
                      onChange={(e) => handleInputChange('education', e.target.value)}
                      className="w-full px-4 py-3 bg-[#333] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                      required
                    >
                      <option value="">Select education level</option>
                      {educationLevels.map((level) => (
                        <option key={level} value={level}>{level}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Current Company</label>
                  <input
                    type="text"
                    value={formData.currentCompany}
                    onChange={(e) => handleInputChange('currentCompany', e.target.value)}
                    className="w-full px-4 py-3 bg-[#333] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Current Role</label>
                  <input
                    type="text"
                    value={formData.currentRole}
                    onChange={(e) => handleInputChange('currentRole', e.target.value)}
                    className="w-full px-4 py-3 bg-[#333] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Key Skills & Technologies *</label>
                  <textarea
                    value={formData.skills}
                    onChange={(e) => handleInputChange('skills', e.target.value)}
                    placeholder="List your key skills, technologies, and tools (e.g., React, Python, AWS, etc.)"
                    rows={4}
                    className="w-full px-4 py-3 bg-[#333] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    required
                  />
                </div>
              </div>
              <div className="mt-8 flex justify-between">
                <button
                  onClick={prevStep}
                  className="px-6 py-3 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold rounded-lg transition-all duration-200"
                >
                  Previous
                </button>
                <button
                  onClick={nextStep}
                  disabled={!formData.position || !formData.experience || !formData.education || !formData.skills}
                  className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 disabled:bg-gray-600 disabled:cursor-not-allowed text-black font-bold rounded-lg transition-all duration-200"
                >
                  Next Step
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Application Details */}
          {currentStep === 3 && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Application Details</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Cover Letter *</label>
                  <textarea
                    value={formData.coverLetter}
                    onChange={(e) => handleInputChange('coverLetter', e.target.value)}
                    placeholder="Tell us why you're interested in this position and what makes you a great fit for Auralix AI..."
                    rows={6}
                    className="w-full px-4 py-3 bg-[#333] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Salary Expectation</label>
                    <input
                      type="text"
                      value={formData.salaryExpectation}
                      onChange={(e) => handleInputChange('salaryExpectation', e.target.value)}
                      placeholder="e.g., $60,000 - $80,000 CAD"
                      className="w-full px-4 py-3 bg-[#333] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Earliest Start Date</label>
                    <input
                      type="date"
                      value={formData.startDate}
                      onChange={(e) => handleInputChange('startDate', e.target.value)}
                      className="w-full px-4 py-3 bg-[#333] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Work Authorization *</label>
                    <select
                      value={formData.workAuthorization}
                      onChange={(e) => handleInputChange('workAuthorization', e.target.value)}
                      className="w-full px-4 py-3 bg-[#333] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                      required
                    >
                      <option value="">Select authorization</option>
                      <option value="Canadian Citizen">Canadian Citizen</option>
                      <option value="Permanent Resident">Permanent Resident</option>
                      <option value="Work Permit">Work Permit</option>
                      <option value="Student Visa">Student Visa</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Remote Work Preference</label>
                    <select
                      value={formData.remotePreference}
                      onChange={(e) => handleInputChange('remotePreference', e.target.value)}
                      className="w-full px-4 py-3 bg-[#333] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    >
                      <option value="">Select preference</option>
                      <option value="Remote Only">Remote Only</option>
                      <option value="Hybrid">Hybrid</option>
                      <option value="On-site">On-site</option>
                      <option value="Flexible">Flexible</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Portfolio/Website</label>
                  <input
                    type="url"
                    value={formData.portfolio}
                    onChange={(e) => handleInputChange('portfolio', e.target.value)}
                    placeholder="https://yourportfolio.com"
                    className="w-full px-4 py-3 bg-[#333] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  />
                </div>
              </div>
              <div className="mt-8 flex justify-between">
                <button
                  onClick={prevStep}
                  className="px-6 py-3 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold rounded-lg transition-all duration-200"
                >
                  Previous
                </button>
                <button
                  onClick={nextStep}
                  disabled={!formData.coverLetter || !formData.workAuthorization}
                  className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 disabled:bg-gray-600 disabled:cursor-not-allowed text-black font-bold rounded-lg transition-all duration-200"
                >
                  Review Application
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Review and Submit */}
          {currentStep === 4 && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Review Your Application</h2>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-cyan-400 mb-3">Personal Information</h3>
                    <div className="space-y-2 text-gray-300">
                      <p><strong>Name:</strong> {formData.firstName} {formData.lastName}</p>
                      <p><strong>Email:</strong> {formData.email}</p>
                      <p><strong>Phone:</strong> {formData.phone}</p>
                      <p><strong>Location:</strong> {formData.location}</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-cyan-400 mb-3">Professional Information</h3>
                    <div className="space-y-2 text-gray-300">
                      <p><strong>Position:</strong> {formData.position}</p>
                      <p><strong>Experience:</strong> {formData.experience}</p>
                      <p><strong>Education:</strong> {formData.education}</p>
                      <p><strong>Current Role:</strong> {formData.currentRole || 'N/A'}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-3">Cover Letter</h3>
                  <div className="bg-[#333] p-4 rounded-lg">
                    <p className="text-gray-300">{formData.coverLetter}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-cyan-400 mb-3">Additional Details</h3>
                    <div className="space-y-2 text-gray-300">
                      <p><strong>Salary Expectation:</strong> {formData.salaryExpectation || 'Not specified'}</p>
                      <p><strong>Start Date:</strong> {formData.startDate || 'Not specified'}</p>
                      <p><strong>Work Authorization:</strong> {formData.workAuthorization}</p>
                      <p><strong>Remote Preference:</strong> {formData.remotePreference || 'Not specified'}</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-cyan-400 mb-3">Skills</h3>
                    <div className="bg-[#333] p-4 rounded-lg">
                      <p className="text-gray-300">{formData.skills}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-between">
                <button
                  onClick={prevStep}
                  className="px-6 py-3 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold rounded-lg transition-all duration-200"
                >
                  Edit Application
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={submissionStatus === 'loading'}
                  className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 disabled:bg-gray-600 disabled:cursor-not-allowed text-black font-bold rounded-lg transition-all duration-200"
                >
                  {submissionStatus === 'loading' ? 'Submitting...' : 'Submit Application'}
                </button>
              </div>
            </div>
          )}

          {/* Submission Status */}
          {submissionStatus === 'success' && (
            <div className="mt-8 p-6 bg-green-900 border border-green-500 rounded-lg">
              <div className="text-center">
                <div className="text-green-400 text-6xl mb-4">✓</div>
                <h3 className="text-2xl font-bold text-white mb-2">Application Submitted!</h3>
                <p className="text-gray-300 mb-4">{submissionMessage}</p>
                <button
                  onClick={() => {
                    setCurrentStep(1);
                    setFormData({
                      firstName: '', lastName: '', email: '', phone: '', location: '', linkedin: '', github: '',
                      position: '', experience: '', education: '', skills: '', currentCompany: '', currentRole: '',
                      coverLetter: '', salaryExpectation: '', startDate: '', workAuthorization: '', remotePreference: '',
                      portfolio: '', references: '', additionalInfo: ''
                    });
                    setSubmissionStatus('idle');
                  }}
                  className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-lg transition-all duration-200"
                >
                  Apply for Another Position
                </button>
              </div>
            </div>
          )}

          {submissionStatus === 'error' && (
            <div className="mt-8 p-6 bg-red-900 border border-red-500 rounded-lg">
              <div className="text-center">
                <div className="text-red-400 text-6xl mb-4">✗</div>
                <h3 className="text-2xl font-bold text-white mb-2">Submission Error</h3>
                <p className="text-gray-300 mb-4">{submissionMessage}</p>
                <button
                  onClick={() => setSubmissionStatus('idle')}
                  className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-lg transition-all duration-200"
                >
                  Try Again
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Additional Information */}
      <section className="max-w-4xl mx-auto py-16 px-4">
        <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">What Happens Next?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center text-black font-bold text-xl mx-auto mb-4">1</div>
              <h3 className="text-lg font-bold text-white mb-2">Application Review</h3>
              <p className="text-gray-300 text-sm">Our team will review your application within 48 hours and contact qualified candidates.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center text-black font-bold text-xl mx-auto mb-4">2</div>
              <h3 className="text-lg font-bold text-white mb-2">Interview Process</h3>
              <p className="text-gray-300 text-sm">Selected candidates will be invited for technical and cultural fit discussions.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center text-black font-bold text-xl mx-auto mb-4">3</div>
              <h3 className="text-lg font-bold text-white mb-2">Offer & Onboarding</h3>
              <p className="text-gray-300 text-sm">Successful candidates will receive an offer and begin their onboarding process.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}