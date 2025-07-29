'use client';
import { FaShieldAlt, FaEye, FaDatabase, FaUserShield } from 'react-icons/fa';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a2a3a] via-[#0a2233] to-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-cyan-300">Privacy Policy</h1>
        <p className="text-xl md:text-2xl text-cyan-100 mb-8">How we protect and handle your data with transparency and care.</p>
        <p className="text-gray-300">Last updated: December 2024</p>
      </section>

      {/* Privacy Content */}
      <section className="max-w-4xl mx-auto py-16 px-4">
        <div className="space-y-12">
          {/* Introduction */}
          <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-6">Introduction</h2>
            <p className="text-gray-300 mb-4">
              Auralix AI ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI automation services.
            </p>
            <p className="text-gray-300">
              By using our services, you agree to the collection and use of information in accordance with this policy.
            </p>
          </div>

          {/* Information We Collect */}
          <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-6">Information We Collect</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-cyan-400 mb-3">Personal Information</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                    <span>Name, email address, phone number, and business information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                    <span>Payment information (processed securely through our payment partners)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                    <span>Communication preferences and marketing consent</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-cyan-400 mb-3">Usage Information</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                    <span>Service usage data and analytics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                    <span>Device information and browser data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                    <span>IP address and location data</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* How We Use Information */}
          <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-6">How We Use Your Information</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FaShieldAlt className="text-cyan-400 text-xl mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Service Delivery</h3>
                  <p className="text-gray-300">To provide, maintain, and improve our AI automation services</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaEye className="text-cyan-400 text-xl mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Analytics & Improvement</h3>
                  <p className="text-gray-300">To analyze usage patterns and enhance our platform performance</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaDatabase className="text-cyan-400 text-xl mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Customer Support</h3>
                  <p className="text-gray-300">To respond to inquiries and provide technical assistance</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaUserShield className="text-cyan-400 text-xl mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Security & Compliance</h3>
                  <p className="text-gray-300">To ensure platform security and comply with legal obligations</p>
                </div>
              </div>
            </div>
          </div>

          {/* Data Sharing */}
          <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-6">Data Sharing & Disclosure</h2>
            <p className="text-gray-300 mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>With your explicit consent</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>To comply with legal obligations or court orders</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>With trusted service providers who assist in our operations</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>To protect our rights, property, or safety</span>
              </li>
            </ul>
          </div>

          {/* Data Security */}
          <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-6">Data Security</h2>
            <p className="text-gray-300 mb-4">
              We implement industry-standard security measures to protect your information:
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>AES-256 encryption for data at rest and in transit</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Multi-factor authentication and access controls</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Regular security audits and vulnerability assessments</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Employee training on data protection practices</span>
              </li>
            </ul>
          </div>

          {/* Your Rights */}
          <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-6">Your Privacy Rights</h2>
            <p className="text-gray-300 mb-4">
              You have the following rights regarding your personal information:
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Access and review your personal data</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Request correction of inaccurate information</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Request deletion of your personal data</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Opt-out of marketing communications</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Data portability and transfer requests</span>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-6">Contact Us</h2>
            <p className="text-gray-300 mb-4">
              If you have questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="space-y-2 text-gray-300">
              <p><strong>Email:</strong> privacy@auralixai.com</p>
              <p><strong>Address:</strong> Halifax, Nova Scotia, Canada</p>
              <p><strong>Phone:</strong> +1 (902) 555-0123</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}