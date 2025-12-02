'use client';
import { motion } from 'framer-motion';
import { Shield, Eye, Database, User, Lock, Globe, FileText, AlertTriangle, CheckCircle, Clock, Building } from 'lucide-react';

export default function PrivacyPage() {
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
            <Shield className="w-16 h-16 text-cyan-400" />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-cyan-300 font-heading">Privacy Policy</h1>
          <p className="text-xl md:text-2xl text-cyan-100 mb-8 max-w-4xl mx-auto">
            Comprehensive data protection for Canadian restaurants using Auralix AI automation services.
          </p>
          <div className="flex items-center justify-center gap-4 text-gray-300">
            <Clock className="w-5 h-5" />
            <span>Last updated: January 2025</span>
            <span>•</span>
            <span>Effective: January 1, 2025</span>
          </div>
        </motion.div>
      </section>

      {/* Privacy Content */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <div className="space-y-16">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 rounded-2xl p-8 shadow-2xl border border-neutral-700"
          >
            <div className="flex items-center gap-4 mb-6">
              <FileText className="w-8 h-8 text-cyan-400" />
              <h2 className="text-3xl font-bold text-white font-heading">Introduction</h2>
            </div>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Auralix AI Inc. (&quot;we,&quot; &quot;our,&quot; &quot;us,&quot; or &quot;Company&quot;) is a Halifax-based artificial intelligence company specializing in restaurant automation solutions. We are committed to protecting the privacy and security of personal information collected from Canadian restaurants and their customers.
              </p>
              <p>
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI receptionist, chatbot, order automation, and website services. It applies to all information collected through our website, mobile applications, and AI services.
              </p>
              <p>
                By using our services, you consent to the data practices described in this policy. If you do not agree with our practices, please do not use our services.
              </p>
            </div>
          </motion.div>

          {/* Information We Collect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 rounded-2xl p-8 shadow-2xl border border-neutral-700"
          >
            <div className="flex items-center gap-4 mb-8">
              <Database className="w-8 h-8 text-cyan-400" />
              <h2 className="text-3xl font-bold text-white font-heading">Information We Collect</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Restaurant Information */}
              <div className="space-y-6">
                <div className="bg-neutral-800/50 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Building className="w-6 h-6 text-cyan-400" />
                    <h3 className="text-xl font-bold text-white">Restaurant Business Information</h3>
                  </div>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Restaurant name, address, phone number, and business registration details</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Owner/manager contact information and emergency contacts</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Menu items, pricing, and operational hours</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Payment processing information and billing details</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Staff information for system access and training</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Customer Information */}
              <div className="space-y-6">
                <div className="bg-neutral-800/50 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <User className="w-6 h-6 text-cyan-400" />
                    <h3 className="text-xl font-bold text-white">Customer Information</h3>
                  </div>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Customer names, phone numbers, and email addresses from reservations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Order history, preferences, and dietary restrictions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Voice recordings from AI receptionist interactions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Chat conversations and chatbot interactions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Feedback, reviews, and satisfaction ratings</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Technical Information */}
            <div className="mt-8 bg-neutral-800/50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-6 h-6 text-cyan-400" />
                <h3 className="text-xl font-bold text-white">Technical & Usage Information</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">System Data</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• IP addresses, device information, and browser data</li>
                    <li>• Service usage patterns and performance metrics</li>
                    <li>• Error logs and system diagnostics</li>
                    <li>• API usage and integration data</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Analytics Data</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Website traffic and user behavior</li>
                    <li>• AI interaction success rates</li>
                    <li>• Feature usage and adoption metrics</li>
                    <li>• Performance optimization data</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* How We Use Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 rounded-2xl p-8 shadow-2xl border border-neutral-700"
          >
            <div className="flex items-center gap-4 mb-8">
              <Eye className="w-8 h-8 text-cyan-400" />
              <h2 className="text-3xl font-bold text-white font-heading">How We Use Your Information</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-neutral-800/50 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="w-6 h-6 text-cyan-400" />
                    <h3 className="text-xl font-bold text-white">Service Operations</h3>
                  </div>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Process reservations, orders, and customer requests through AI</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Maintain and improve AI model accuracy and performance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Provide customer support and technical assistance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Process payments and manage billing</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-neutral-800/50 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Database className="w-6 h-6 text-cyan-400" />
                    <h3 className="text-xl font-bold text-white">Business Intelligence</h3>
                  </div>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Analyze customer behavior and preferences</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Generate insights and performance reports</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Optimize AI responses and service delivery</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Develop new features and capabilities</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-neutral-800/50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-6 h-6 text-cyan-400" />
                <h3 className="text-xl font-bold text-white">Legal & Compliance</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Regulatory Compliance</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Comply with Canadian privacy laws (PIPEDA)</li>
                    <li>• Meet restaurant industry regulations</li>
                    <li>• Respond to legal requests and court orders</li>
                    <li>• Maintain audit trails and records</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Security & Protection</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Detect and prevent fraud and abuse</li>
                    <li>• Protect against security threats</li>
                    <li>• Monitor system performance and reliability</li>
                    <li>• Ensure data integrity and availability</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Data Sharing & Third Parties */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 rounded-2xl p-8 shadow-2xl border border-neutral-700"
          >
            <div className="flex items-center gap-4 mb-8">
              <Globe className="w-8 h-8 text-cyan-400" />
              <h2 className="text-3xl font-bold text-white font-heading">Data Sharing & Third Parties</h2>
            </div>
            
            <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-red-400" />
                <h3 className="text-xl font-bold text-red-400">We Do NOT Sell Your Data</h3>
              </div>
              <p className="text-gray-300">
                Auralix AI does not sell, trade, or rent your personal information to third parties for marketing purposes. Your restaurant and customer data remains confidential and is used solely to provide our AI automation services.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-neutral-800/50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Limited Sharing Scenarios</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>With your explicit written consent</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>To comply with Canadian legal obligations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>With trusted service providers under strict contracts</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>To protect rights, property, or safety</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-neutral-800/50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Trusted Service Providers</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Cloud hosting providers (AWS, Google Cloud)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Payment processors (Stripe, PayPal)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Email service providers (Resend, SendGrid)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>AI model providers (OpenAI, Anthropic)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Data Security */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 rounded-2xl p-8 shadow-2xl border border-neutral-700"
          >
            <div className="flex items-center gap-4 mb-8">
              <Lock className="w-8 h-8 text-cyan-400" />
              <h2 className="text-3xl font-bold text-white font-heading">Data Security & Protection</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-neutral-800/50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Encryption & Access Control</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>AES-256 encryption for data at rest and in transit</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Multi-factor authentication for all system access</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Role-based access controls and permissions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Regular security audits and penetration testing</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-neutral-800/50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Monitoring & Compliance</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>24/7 security monitoring and threat detection</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Employee training on data protection practices</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Incident response procedures and breach notification</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Compliance with PIPEDA and Canadian privacy laws</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Your Rights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 rounded-2xl p-8 shadow-2xl border border-neutral-700"
          >
            <div className="flex items-center gap-4 mb-8">
              <User className="w-8 h-8 text-cyan-400" />
              <h2 className="text-3xl font-bold text-white font-heading">Your Privacy Rights</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-neutral-800/50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Access & Control</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Access and review your personal data</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Request correction of inaccurate information</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Request deletion of your personal data</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Data portability and transfer requests</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-neutral-800/50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Communication Preferences</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Opt-out of marketing communications</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Control notification preferences</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Withdraw consent for data processing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>File complaints with privacy authorities</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-cyan-900/20 border border-cyan-500/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">How to Exercise Your Rights</h3>
              <p className="text-gray-300 mb-4">
                To exercise any of your privacy rights, contact us at auralixai@gmail.com with your request. We will respond within 30 days and may require identity verification to protect your privacy.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">
                <div>
                  <strong>Email:</strong> auralixai@gmail.com
                </div>
                <div>
                  <strong>Phone:</strong> +1 (782) 882-8635
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 rounded-2xl p-8 shadow-2xl border border-neutral-700"
          >
            <div className="flex items-center gap-4 mb-8">
              <FileText className="w-8 h-8 text-cyan-400" />
              <h2 className="text-3xl font-bold text-white font-heading">Contact Information</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-neutral-800/50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Privacy Questions</h3>
                  <div className="space-y-3 text-gray-300">
                    <p><strong>Email:</strong> auralixai@gmail.com</p>
                    <p><strong>Phone:</strong> +1 (782) 882-8635</p>
                    <p><strong>Response Time:</strong> Within 48 hours</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-neutral-800/50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Company Information</h3>
                  <div className="space-y-3 text-gray-300">
                    <p><strong>Company:</strong> Auralix AI Inc.</p>
                    <p><strong>Address:</strong> 1800 Argyle Street, Halifax, Nova Scotia, Canada</p>
                    <p><strong>Legal Entity:</strong> Canadian Corporation</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-neutral-800/50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Policy Updates</h3>
              <p className="text-gray-300">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date. Your continued use of our services after any modifications constitutes acceptance of the updated policy.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}