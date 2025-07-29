'use client';
import { FaUsers, FaRocket, FaHeart, FaLightbulb, FaGlobe, FaGraduationCap } from 'react-icons/fa';

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a2a3a] via-[#0a2233] to-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-cyan-300">Join Our Team</h1>
        <p className="text-xl md:text-2xl text-cyan-100 mb-8">Help us revolutionize business automation with AI technology.</p>
        <p className="text-gray-300">Build the future of AI automation from Nova Scotia, Canada</p>
      </section>

      {/* Why Work With Us */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Why Work With Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl">
            <FaRocket className="text-5xl mb-4 text-cyan-400" />
            <h3 className="text-xl font-bold text-white mb-4">Innovation First</h3>
            <p className="text-gray-300">Work on cutting-edge AI technology that's transforming how businesses operate and grow.</p>
          </div>
          
          <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl">
            <FaHeart className="text-5xl mb-4 text-cyan-400" />
            <h3 className="text-xl font-bold text-white mb-4">Impact-Driven</h3>
            <p className="text-gray-300">Help local businesses thrive by providing them with powerful AI automation solutions.</p>
          </div>
          
          <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl">
            <FaGlobe className="text-5xl mb-4 text-cyan-400" />
            <h3 className="text-xl font-bold text-white mb-4">Remote-First</h3>
            <p className="text-gray-300">Enjoy flexible work arrangements with remote and hybrid options available.</p>
          </div>
          
          <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl">
            <FaGraduationCap className="text-5xl mb-4 text-cyan-400" />
            <h3 className="text-xl font-bold text-white mb-4">Continuous Learning</h3>
            <p className="text-gray-300">Access to training, conferences, and resources to keep your skills sharp and current.</p>
          </div>
          
          <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl">
            <FaUsers className="text-5xl mb-4 text-cyan-400" />
            <h3 className="text-xl font-bold text-white mb-4">Collaborative Culture</h3>
            <p className="text-gray-300">Join a team that values collaboration, creativity, and mutual support.</p>
          </div>
          
          <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl">
            <FaLightbulb className="text-5xl mb-4 text-cyan-400" />
            <h3 className="text-xl font-bold text-white mb-4">Creative Freedom</h3>
            <p className="text-gray-300">Bring your ideas to life with the autonomy to innovate and experiment.</p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-4xl mx-auto py-16 px-4">
        <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Benefits & Perks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-cyan-400 mb-4">Health & Wellness</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <span>Comprehensive health insurance</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <span>Mental health support</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <span>Gym membership reimbursement</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <span>Flexible work hours</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-cyan-400 mb-4">Professional Growth</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <span>Conference and training budgets</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <span>Mentorship programs</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <span>Career development planning</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <span>Skill development courses</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-cyan-400 mb-4">Work-Life Balance</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <span>Unlimited paid time off</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <span>Remote work options</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <span>Flexible scheduling</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <span>Family-friendly policies</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-cyan-400 mb-4">Compensation</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <span>Competitive salaries</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <span>Performance bonuses</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <span>Stock options</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <span>Retirement savings plan</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="max-w-4xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Open Positions</h2>
        <div className="space-y-6">
          <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-4">Senior AI Engineer</h3>
            <p className="text-gray-300 mb-4">Join our AI team to develop cutting-edge automation solutions for businesses across Nova Scotia and beyond.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-cyan-500 text-black text-sm rounded-full">Full-time</span>
              <span className="px-3 py-1 bg-cyan-500 text-black text-sm rounded-full">Remote</span>
              <span className="px-3 py-1 bg-cyan-500 text-black text-sm rounded-full">Halifax</span>
            </div>
            <a href="/apply" className="inline-block px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-lg transition-all duration-200">
              Apply Now
            </a>
          </div>

          <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-4">Business Development Manager</h3>
            <p className="text-gray-300 mb-4">Help us grow our client base and expand our reach across Nova Scotia's business community.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-cyan-500 text-black text-sm rounded-full">Full-time</span>
              <span className="px-3 py-1 bg-cyan-500 text-black text-sm rounded-full">Hybrid</span>
              <span className="px-3 py-1 bg-cyan-500 text-black text-sm rounded-full">Halifax</span>
            </div>
            <a href="/apply" className="inline-block px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-lg transition-all duration-200">
              Apply Now
            </a>
          </div>

          <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-4">UX/UI Designer</h3>
            <p className="text-gray-300 mb-4">Create beautiful, intuitive interfaces for our AI automation platform and client websites.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-cyan-500 text-black text-sm rounded-full">Full-time</span>
              <span className="px-3 py-1 bg-cyan-500 text-black text-sm rounded-full">Remote</span>
              <span className="px-3 py-1 bg-cyan-500 text-black text-sm rounded-full">Canada</span>
            </div>
            <a href="/apply" className="inline-block px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-lg transition-all duration-200">
              Apply Now
            </a>
          </div>

          <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-4">Customer Success Specialist</h3>
            <p className="text-gray-300 mb-4">Ensure our clients get the most value from our AI solutions through excellent support and guidance.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-cyan-500 text-black text-sm rounded-full">Full-time</span>
              <span className="px-3 py-1 bg-cyan-500 text-black text-sm rounded-full">Hybrid</span>
              <span className="px-3 py-1 bg-cyan-500 text-black text-sm rounded-full">Halifax</span>
            </div>
            <a href="/apply" className="inline-block px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-lg transition-all duration-200">
              Apply Now
            </a>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="max-w-4xl mx-auto py-16 px-4">
        <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Application Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center text-black font-bold text-xl mx-auto mb-4">1</div>
              <h3 className="text-lg font-bold text-white mb-2">Apply</h3>
              <p className="text-gray-300 text-sm">Submit your resume and cover letter through our application form.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center text-black font-bold text-xl mx-auto mb-4">2</div>
              <h3 className="text-lg font-bold text-white mb-2">Review</h3>
              <p className="text-gray-300 text-sm">Our team will review your application within 48 hours.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center text-black font-bold text-xl mx-auto mb-4">3</div>
              <h3 className="text-lg font-bold text-white mb-2">Interview</h3>
              <p className="text-gray-300 text-sm">Meet with our team for technical and cultural fit discussions.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center text-black font-bold text-xl mx-auto mb-4">4</div>
              <h3 className="text-lg font-bold text-white mb-2">Join</h3>
              <p className="text-gray-300 text-sm">Welcome to the Auralix AI team! Let's build the future together.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto py-16 px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Don&apos;t See the Right Role?</h2>
        <p className="text-xl text-gray-300 mb-8">We&apos;re always looking for talented individuals to join our team. Send us your resume and let&apos;s discuss how you can contribute to our mission.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/send-resume"
            className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-lg transition-all duration-200"
          >
            Send Your Resume
          </a>
          <a
            href="mailto:careers@auralixai.com"
            className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold rounded-lg transition-all duration-200"
          >
            Email Us
          </a>
        </div>
      </section>
    </div>
  );
}