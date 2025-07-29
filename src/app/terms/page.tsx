'use client';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a2a3a] via-[#0a2233] to-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-cyan-300">Terms of Service</h1>
        <p className="text-xl md:text-2xl text-cyan-100 mb-8">The terms and conditions governing your use of Auralix AI services.</p>
        <p className="text-gray-300">Last updated: December 2024</p>
      </section>

      {/* Terms Content */}
      <section className="max-w-4xl mx-auto py-16 px-4">
        <div className="space-y-12">
          {/* Agreement */}
          <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-6">Agreement to Terms</h2>
            <p className="text-gray-300 mb-4">
              By accessing and using Auralix AI's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
            <p className="text-gray-300">
              These Terms of Service ("Terms") govern your use of our AI automation services, including our website, mobile applications, and any related services (collectively, the "Service").
            </p>
          </div>

          {/* Service Description */}
          <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-6">Service Description</h2>
            <p className="text-gray-300 mb-4">
              Auralix AI provides enterprise-grade AI automation solutions including:
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>AI-powered chatbots and virtual assistants</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Business intelligence and analytics dashboards</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Workflow automation and process optimization</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Website design and development services</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Consultation and implementation support</span>
              </li>
            </ul>
          </div>

          {/* User Accounts */}
          <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-6">User Accounts</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold text-cyan-400 mb-3">Account Creation</h3>
                <p className="text-gray-300">You must provide accurate and complete information when creating an account. You are responsible for maintaining the security of your account credentials.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-cyan-400 mb-3">Account Responsibilities</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                    <span>Maintain the confidentiality of your account information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                    <span>Notify us immediately of any unauthorized use</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                    <span>Ensure all account activities comply with these Terms</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Acceptable Use */}
          <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-6">Acceptable Use Policy</h2>
            <p className="text-gray-300 mb-4">You agree not to use the Service to:</p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Violate any applicable laws or regulations</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Infringe on intellectual property rights</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Transmit harmful, offensive, or inappropriate content</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Attempt to gain unauthorized access to our systems</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Interfere with the proper functioning of the Service</span>
              </li>
            </ul>
          </div>

          {/* Payment Terms */}
          <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-6">Payment Terms</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold text-cyan-400 mb-3">Billing</h3>
                <p className="text-gray-300">Fees are billed in advance on a monthly or annual basis. All fees are non-refundable except as expressly stated in these Terms.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-cyan-400 mb-3">Payment Methods</h3>
                <p className="text-gray-300">We accept major credit cards and other payment methods as indicated during the checkout process. Payment information is processed securely through our payment partners.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-cyan-400 mb-3">Late Payments</h3>
                <p className="text-gray-300">Late payments may result in service suspension or termination. We reserve the right to charge late fees and collection costs.</p>
              </div>
            </div>
          </div>

          {/* Intellectual Property */}
          <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-6">Intellectual Property</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold text-cyan-400 mb-3">Our Rights</h3>
                <p className="text-gray-300">The Service and its original content, features, and functionality are owned by Auralix AI and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-cyan-400 mb-3">Your Content</h3>
                <p className="text-gray-300">You retain ownership of content you submit to our Service. By submitting content, you grant us a license to use, modify, and display such content in connection with providing the Service.</p>
              </div>
            </div>
          </div>

          {/* Privacy & Data */}
          <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-6">Privacy & Data Protection</h2>
            <p className="text-gray-300 mb-4">
              Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference.
            </p>
            <p className="text-gray-300">
              We implement appropriate technical and organizational measures to protect your data in accordance with applicable data protection laws.
            </p>
          </div>

          {/* Limitation of Liability */}
          <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-6">Limitation of Liability</h2>
            <p className="text-gray-300 mb-4">
              To the maximum extent permitted by law, Auralix AI shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
            </p>
            <p className="text-gray-300">
              Our total liability to you for any claims arising from these Terms or your use of the Service shall not exceed the amount you paid to us in the twelve months preceding the claim.
            </p>
          </div>

          {/* Termination */}
          <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-6">Termination</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold text-cyan-400 mb-3">Termination by You</h3>
                <p className="text-gray-300">You may terminate your account at any time by contacting us or using the account deletion feature in your dashboard.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-cyan-400 mb-3">Termination by Us</h3>
                <p className="text-gray-300">We may terminate or suspend your account immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users or our business.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-cyan-400 mb-3">Effect of Termination</h3>
                <p className="text-gray-300">Upon termination, your right to use the Service will cease immediately. We may delete your account and data in accordance with our data retention policies.</p>
              </div>
            </div>
          </div>

          {/* Changes to Terms */}
          <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-6">Changes to Terms</h2>
            <p className="text-gray-300 mb-4">
              We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page and updating the "Last updated" date.
            </p>
            <p className="text-gray-300">
              Your continued use of the Service after any changes constitutes acceptance of the new Terms. If you do not agree to the new Terms, you should discontinue use of the Service.
            </p>
          </div>

          {/* Contact Information */}
          <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
            <p className="text-gray-300 mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="space-y-2 text-gray-300">
              <p><strong>Email:</strong> legal@auralixai.com</p>
              <p><strong>Address:</strong> Halifax, Nova Scotia, Canada</p>
              <p><strong>Phone:</strong> +1 (902) 555-0123</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}