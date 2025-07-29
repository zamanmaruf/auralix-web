'use client';
import { useState } from 'react';
import { FaUpload, FaFileAlt, FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaCheckCircle } from 'react-icons/fa';

export default function SendResumePage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: '',
    message: '',
    linkedin: '',
    github: '',
    portfolio: ''
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [submissionMessage, setSubmissionMessage] = useState('');

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        alert('Please upload a PDF, DOC, or DOCX file.');
        return;
      }
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('File size must be less than 5MB.');
        return;
      }
      setResumeFile(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionStatus('loading');
    setSubmissionMessage('');

    if (!resumeFile) {
      setSubmissionStatus('error');
      setSubmissionMessage('Please upload your resume.');
      return;
    }

    try {
      // Create FormData for file upload
      const formDataToSend = new FormData();
      formDataToSend.append('resume', resumeFile);
      formDataToSend.append('data', JSON.stringify(formData));

      const response = await fetch('/api/send-resume', {
        method: 'POST',
        body: formDataToSend,
      });

      const result = await response.json();

      if (response.ok) {
        setSubmissionStatus('success');
        setSubmissionMessage('Thank you for your application! We will review your resume and get back to you within 48 hours.');
        // Reset form
        setFormData({
          firstName: '', lastName: '', email: '', phone: '', position: '', message: '',
          linkedin: '', github: '', portfolio: ''
        });
        setResumeFile(null);
      } else {
        setSubmissionStatus('error');
        setSubmissionMessage(result.error || 'Failed to send resume. Please try again.');
      }
    } catch (error) {
      console.error('Resume submission error:', error);
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
    'General Application',
    'Other'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a2a3a] via-[#0a2233] to-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-cyan-300">Send Your Resume</h1>
        <p className="text-xl md:text-2xl text-cyan-100 mb-8">Quick and easy application process</p>
        <p className="text-gray-300">Upload your resume and we'll get back to you within 48 hours</p>
      </section>

      {/* Resume Upload Form */}
      <section className="max-w-4xl mx-auto py-16 px-4">
        <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Application Form</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Resume Upload */}
            <div className="border-2 border-dashed border-cyan-400 rounded-lg p-8 text-center">
              <FaUpload className="text-4xl text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Upload Your Resume</h3>
              <p className="text-gray-300 mb-4">PDF, DOC, or DOCX files accepted (max 5MB)</p>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="hidden"
                id="resume-upload"
                required
              />
              <label
                htmlFor="resume-upload"
                className="inline-block px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-lg transition-all duration-200 cursor-pointer"
              >
                Choose File
              </label>
              {resumeFile && (
                <div className="mt-4 flex items-center justify-center space-x-2 text-green-400">
                  <FaCheckCircle />
                  <span>{resumeFile.name}</span>
                </div>
              )}
            </div>

            {/* Personal Information */}
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
            </div>

            {/* Position */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Position You're Interested In</label>
              <select
                value={formData.position}
                onChange={(e) => handleInputChange('position', e.target.value)}
                className="w-full px-4 py-3 bg-[#333] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <option value="">Select a position (optional)</option>
                {positions.map((position) => (
                  <option key={position} value={position}>{position}</option>
                ))}
              </select>
            </div>

            {/* Social Links */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Additional Message (Optional)</label>
              <textarea
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                placeholder="Tell us why you're interested in joining Auralix AI, or any additional information you'd like to share..."
                rows={4}
                className="w-full px-4 py-3 bg-[#333] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={submissionStatus === 'loading'}
              className="w-full bg-cyan-500 hover:bg-cyan-400 disabled:bg-gray-600 disabled:cursor-not-allowed text-black font-bold py-4 px-6 rounded-lg transition-all duration-200"
            >
              {submissionStatus === 'loading' ? 'Sending Resume...' : 'Send Resume'}
            </button>

            {/* Status Messages */}
            {submissionStatus === 'success' && (
              <div className="p-4 bg-green-900 border border-green-500 rounded-lg text-center">
                <div className="text-green-400 text-4xl mb-2">✓</div>
                <h3 className="text-xl font-bold text-white mb-2">Resume Sent Successfully!</h3>
                <p className="text-gray-300">{submissionMessage}</p>
              </div>
            )}

            {submissionStatus === 'error' && (
              <div className="p-4 bg-red-900 border border-red-500 rounded-lg text-center">
                <div className="text-red-400 text-4xl mb-2">✗</div>
                <h3 className="text-xl font-bold text-white mb-2">Submission Error</h3>
                <p className="text-gray-300">{submissionMessage}</p>
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-4xl mx-auto py-16 px-4">
        <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Why Send Your Resume?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center text-black font-bold text-xl flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Quick Application</h3>
                <p className="text-gray-300">Simple form with resume upload. No lengthy application process.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center text-black font-bold text-xl flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Fast Response</h3>
                <p className="text-gray-300">We review all resumes within 48 hours and contact qualified candidates.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center text-black font-bold text-xl flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Open Positions</h3>
                <p className="text-gray-300">We're always looking for talented individuals to join our growing team.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center text-black font-bold text-xl flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Future Opportunities</h3>
                <p className="text-gray-300">Even if no current position fits, we keep resumes on file for future openings.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Application Methods */}
      <section className="max-w-4xl mx-auto py-16 px-4">
        <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Other Ways to Apply</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center p-6 border border-cyan-400 rounded-lg">
              <FaFileAlt className="text-4xl text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Detailed Application</h3>
              <p className="text-gray-300 mb-4">Complete our comprehensive application form with detailed questions.</p>
              <a
                href="/apply"
                className="inline-block px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-lg transition-all duration-200"
              >
                Apply Now
              </a>
            </div>
            <div className="text-center p-6 border border-cyan-400 rounded-lg">
              <FaEnvelope className="text-4xl text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Email Application</h3>
              <p className="text-gray-300 mb-4">Send your resume directly to our HR team via email.</p>
              <a
                href="mailto:careers@auralixai.com"
                className="inline-block px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-lg transition-all duration-200"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}