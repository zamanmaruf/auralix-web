'use client';
import { motion } from 'framer-motion';
import { FileText, Shield, CreditCard, User, AlertTriangle, CheckCircle, Clock, Building, Globe, Lock, Scale, Phone } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a2a3a] via-[#0a2233] to-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto text-center py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center mb-6">
            <Scale className="w-16 h-16 text-cyan-400" />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-cyan-300 font-heading">Terms of Service</h1>
          <p className="text-xl md:text-2xl text-cyan-100 mb-8 max-w-4xl mx-auto">
            Legal terms governing your use of Auralix AI restaurant automation services.
          </p>
          <div className="flex items-center justify-center gap-4 text-gray-300">
            <Clock className="w-5 h-5" />
            <span>Last updated: January 2025</span>
            <span>•</span>
            <span>Effective: January 1, 2025</span>
          </div>
        </motion.div>
      </section>

      {/* Terms Content */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <div className="space-y-16">
          {/* Agreement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 rounded-2xl p-8 shadow-2xl border border-neutral-700"
          >
            <div className="flex items-center gap-4 mb-6">
              <FileText className="w-8 h-8 text-cyan-400" />
              <h2 className="text-3xl font-bold text-white font-heading">Agreement to Terms</h2>
            </div>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you (&quot;Restaurant,&quot; &quot;you,&quot; or &quot;your&quot;) and Auralix AI Inc. (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) regarding your use of our restaurant AI automation services.
              </p>
              <p>
                By accessing, using, or subscribing to our AI receptionist, chatbot, order automation, or website services, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, you may not use our services.
              </p>
              <p>
                These Terms apply to all restaurants, cafes, bars, and food service establishments that use our AI automation platform to enhance customer service, manage reservations, process orders, and streamline operations.
              </p>
            </div>
          </motion.div>

          {/* Service Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 rounded-2xl p-8 shadow-2xl border border-neutral-700"
          >
            <div className="flex items-center gap-4 mb-8">
              <Building className="w-8 h-8 text-cyan-400" />
              <h2 className="text-3xl font-bold text-white font-heading">Restaurant AI Services</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-neutral-800/50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Core AI Solutions</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>AI Receptionist - 24/7 voice AI for phone calls and reservations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Website & Social Chatbot - Multi-platform customer service</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Order & Review Automation - Streamlined operations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Restaurant Websites - Modern design with AI integration</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-neutral-800/50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Support Services</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Implementation and setup assistance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>24/7 technical support and monitoring</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Performance analytics and reporting</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Custom training and optimization</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-cyan-900/20 border border-cyan-500/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">Service Availability</h3>
              <p className="text-gray-300">
                Our AI services are designed to operate 24/7 to ensure your restaurant never misses a call, order, or reservation. We maintain 99.9% uptime and provide real-time monitoring to ensure optimal performance for your restaurant operations.
              </p>
            </div>
          </motion.div>

          {/* Restaurant Accounts */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 rounded-2xl p-8 shadow-2xl border border-neutral-700"
          >
            <div className="flex items-center gap-4 mb-8">
              <User className="w-8 h-8 text-cyan-400" />
              <h2 className="text-3xl font-bold text-white font-heading">Restaurant Account Management</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-neutral-800/50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Account Setup</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Provide accurate restaurant information and contact details</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Verify business registration and operating licenses</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Designate authorized users and access levels</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Configure AI settings and restaurant preferences</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-neutral-800/50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Account Security</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Maintain confidentiality of login credentials</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Notify us immediately of unauthorized access</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Ensure all staff comply with these Terms</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Regularly update contact information and preferences</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Acceptable Use */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 rounded-2xl p-8 shadow-2xl border border-neutral-700"
          >
            <div className="flex items-center gap-4 mb-8">
              <Shield className="w-8 h-8 text-cyan-400" />
              <h2 className="text-3xl font-bold text-white font-heading">Restaurant Use Guidelines</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-neutral-800/50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Permitted Uses</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Process customer reservations and orders</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Provide customer service and support</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Manage restaurant operations and staff</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Generate business analytics and reports</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-neutral-800/50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Prohibited Uses</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span>Violate Canadian laws or restaurant regulations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span>Transmit harmful, offensive, or inappropriate content</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span>Attempt unauthorized access to our systems</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span>Interfere with service performance or availability</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-red-900/20 border border-red-500/30 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-red-400" />
                <h3 className="text-xl font-bold text-red-400">Restaurant Industry Compliance</h3>
              </div>
              <p className="text-gray-300">
                You must comply with all applicable restaurant industry regulations, food safety standards, and local business laws. Any misuse of our AI services that violates restaurant industry standards may result in immediate service termination.
              </p>
            </div>
          </motion.div>

          {/* Payment Terms */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 rounded-2xl p-8 shadow-2xl border border-neutral-700"
          >
            <div className="flex items-center gap-4 mb-8">
              <CreditCard className="w-8 h-8 text-cyan-400" />
              <h2 className="text-3xl font-bold text-white font-heading">Restaurant Payment Terms</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-neutral-800/50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Billing & Pricing</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Monthly billing in advance for all services</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Starter: $99/mo, Pro: $199/mo, Premium: $399/mo</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Founder's Special: 20% off for first 100 restaurants</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>14-day free trial with credit card required</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-neutral-800/50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Payment Processing</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Secure payment processing via Stripe</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Major credit cards and bank transfers accepted</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Automatic billing and invoice generation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Canadian tax compliance and reporting</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-yellow-900/20 border border-yellow-500/30 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-yellow-400" />
                <h3 className="text-xl font-bold text-yellow-400">Late Payment Policy</h3>
              </div>
              <p className="text-gray-300">
                Late payments may result in service suspension after 15 days. We reserve the right to charge late fees of 2% per month and collection costs. Service will be restored upon payment of all outstanding amounts.
              </p>
            </div>
          </motion.div>

          {/* Intellectual Property */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 rounded-2xl p-8 shadow-2xl border border-neutral-700"
          >
            <div className="flex items-center gap-4 mb-8">
              <Lock className="w-8 h-8 text-cyan-400" />
              <h2 className="text-3xl font-bold text-white font-heading">Intellectual Property Rights</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-neutral-800/50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Auralix AI Rights</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>AI models, algorithms, and proprietary technology</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Software, interfaces, and user experience designs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Branding, trademarks, and marketing materials</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Training data and model improvements</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-neutral-800/50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Restaurant Content</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>You retain ownership of your restaurant data</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Menu items, pricing, and operational information</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Customer data and interaction history</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Grant us license to use data for service provision</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Data Protection */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 rounded-2xl p-8 shadow-2xl border border-neutral-700"
          >
            <div className="flex items-center gap-4 mb-8">
              <Shield className="w-8 h-8 text-cyan-400" />
              <h2 className="text-3xl font-bold text-white font-heading">Data Protection & Privacy</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-neutral-800/50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Privacy Compliance</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>PIPEDA compliance for Canadian restaurants</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>AES-256 encryption for all data transmission</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Secure data storage and access controls</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Regular security audits and monitoring</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-neutral-800/50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Restaurant Data Rights</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Access and download your restaurant data</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Request data correction or deletion</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Control data sharing and processing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Export data in standard formats</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Liability & Termination */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 rounded-2xl p-8 shadow-2xl border border-neutral-700"
          >
            <div className="flex items-center gap-4 mb-8">
              <AlertTriangle className="w-8 h-8 text-cyan-400" />
              <h2 className="text-3xl font-bold text-white font-heading">Liability & Service Termination</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-neutral-800/50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Liability Limitations</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                      <span>Service provided &quot;as is&quot; without warranties</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                      <span>Liability limited to fees paid in last 12 months</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                      <span>No liability for indirect or consequential damages</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                      <span>Restaurant responsible for backup and data security</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-neutral-800/50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Service Termination</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>30-day notice for voluntary termination</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Immediate termination for Terms violations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Data export available for 90 days post-termination</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Refund policy as per payment terms</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 rounded-2xl p-8 shadow-2xl border border-neutral-700"
          >
            <div className="flex items-center gap-4 mb-8">
              <Phone className="w-8 h-8 text-cyan-400" />
              <h2 className="text-3xl font-bold text-white font-heading">Contact Information</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-neutral-800/50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Legal Questions</h3>
                  <div className="space-y-3 text-gray-300">
                    <p><strong>Email:</strong> auralixai@gmail.com</p>
                    <p><strong>Phone:</strong> +1 9024414928</p>
                    <p><strong>Response Time:</strong> Within 48 hours</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-neutral-800/50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Company Information</h3>
                  <div className="space-y-3 text-gray-300">
                    <p><strong>Company:</strong> Auralix AI Inc.</p>
                    <p><strong>Address:</strong> Halifax, Nova Scotia, Canada</p>
                    <p><strong>Legal Entity:</strong> Canadian Corporation</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-neutral-800/50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Terms Updates</h3>
              <p className="text-gray-300">
                We may update these Terms from time to time. We will notify you of any material changes by email and posting the updated Terms on this page. Your continued use of our services after changes constitutes acceptance of the new Terms.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}