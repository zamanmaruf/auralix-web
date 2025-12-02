'use client';

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a2a3a] via-[#0a2233] to-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-cyan-300">Cookie Policy</h1>
        <p className="text-xl md:text-2xl text-cyan-100 mb-8">How we use cookies and similar technologies to enhance your experience.</p>
        <p className="text-gray-300">Last updated: December 2024</p>
      </section>

      {/* Cookie Content */}
      <section className="max-w-4xl mx-auto py-16 px-4">
        <div className="space-y-12">
          {/* Introduction */}
          <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-6">What Are Cookies?</h2>
            <p className="text-gray-300 mb-4">
              Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences, analyzing site usage, and personalizing content.
            </p>
            <p className="text-gray-300">
              This Cookie Policy explains how Auralix AI uses cookies and similar technologies on our website and services.
            </p>
          </div>

          {/* Types of Cookies */}
          <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-6">Types of Cookies We Use</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-cyan-400 mb-3">Essential Cookies</h3>
                <p className="text-gray-300 mb-3">These cookies are necessary for the website to function properly and cannot be disabled.</p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                    <span>Authentication and security cookies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                    <span>Session management cookies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                    <span>Load balancing cookies</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-cyan-400 mb-3">Analytics Cookies</h3>
                <p className="text-gray-300 mb-3">These cookies help us understand how visitors interact with our website.</p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                    <span>Google Analytics cookies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                    <span>Page view and session tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                    <span>User behavior analysis</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-cyan-400 mb-3">Functional Cookies</h3>
                <p className="text-gray-300 mb-3">These cookies enable enhanced functionality and personalization.</p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                    <span>Language and region preferences</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                    <span>Form auto-fill preferences</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                    <span>User interface customization</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-cyan-400 mb-3">Marketing Cookies</h3>
                <p className="text-gray-300 mb-3">These cookies are used to deliver relevant advertisements and track marketing campaign performance.</p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                    <span>Social media integration cookies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                    <span>Retargeting and remarketing cookies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                    <span>Conversion tracking cookies</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Third-Party Cookies */}
          <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-6">Third-Party Cookies</h2>
            <p className="text-gray-300 mb-4">
              We may use third-party services that place cookies on your device. These services include:
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span><strong>Google Analytics:</strong> Website analytics and performance monitoring</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span><strong>Calendly:</strong> Appointment scheduling and booking</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span><strong>Formspree:</strong> Contact form processing</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span><strong>Social Media Platforms:</strong> Social sharing and integration</span>
              </li>
            </ul>
          </div>

          {/* Cookie Management */}
          <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-6">Managing Your Cookie Preferences</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold text-cyan-400 mb-3">Browser Settings</h3>
                <p className="text-gray-300 mb-3">You can control and manage cookies through your browser settings:</p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                    <span>Chrome: Settings → Privacy and security → Cookies and other site data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                    <span>Firefox: Options → Privacy & Security → Cookies and Site Data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                    <span>Safari: Preferences → Privacy → Manage Website Data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                    <span>Edge: Settings → Cookies and site permissions → Cookies and site data</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-cyan-400 mb-3">Cookie Consent</h3>
                <p className="text-gray-300">When you first visit our website, you&apos;ll see a cookie consent banner that allows you to accept or decline non-essential cookies. You can change your preferences at any time.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-cyan-400 mb-3">Impact of Disabling Cookies</h3>
                <p className="text-gray-300">Please note that disabling certain cookies may affect the functionality of our website and your user experience. Essential cookies cannot be disabled as they are necessary for basic site functionality.</p>
              </div>
            </div>
          </div>

          {/* Data Retention */}
          <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-6">Cookie Retention Periods</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold text-cyan-400 mb-3">Session Cookies</h3>
                <p className="text-gray-300">These cookies are deleted when you close your browser and are used to maintain your session during your visit.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-cyan-400 mb-3">Persistent Cookies</h3>
                <p className="text-gray-300">These cookies remain on your device for a set period (usually 30 days to 2 years) and are used to remember your preferences across visits.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-cyan-400 mb-3">Third-Party Cookies</h3>
                <p className="text-gray-300">Retention periods for third-party cookies are determined by the respective service providers and may vary.</p>
              </div>
            </div>
          </div>

          {/* Updates to Policy */}
          <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-6">Updates to This Policy</h2>
            <p className="text-gray-300 mb-4">
              We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.
            </p>
            <p className="text-gray-300">
              We will notify you of any material changes by posting the updated policy on our website and updating the &quot;Last updated&quot; date.
            </p>
          </div>

          {/* Contact Information */}
          <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-6">Contact Us</h2>
            <p className="text-gray-300 mb-4">
              If you have any questions about our use of cookies or this Cookie Policy, please contact us:
            </p>
            <div className="space-y-2 text-gray-300">
              <p><strong>Email:</strong> privacy@auralixai.com</p>
              <p><strong>Address:</strong> 1800 Argyle Street, Halifax, Nova Scotia, Canada</p>
              <p><strong>Phone:</strong> +1 (782) 882-8635</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}