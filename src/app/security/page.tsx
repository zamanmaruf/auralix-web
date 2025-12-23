'use client';
import { motion } from 'framer-motion';
import { Shield, Lock, User, Database, Server, Eye, Download, CheckCircle, Award, Globe, FileText } from 'lucide-react';

export default function SecurityPage() {
  const certifications = [
    {
      name: 'SOC 2 (Type II – planned)',
      description: 'Implementing controls aligned to SOC 2 Trust Services Criteria; formal Type II attestation on our roadmap.',
      icon: Shield,
      color: 'green',
      status: 'In Progress'
    },
    {
      name: 'GDPR',
      description: 'GDPR-informed data protection and privacy compliance',
      icon: Globe,
      color: 'blue',
      status: 'Implemented'
    },
    {
      name: 'ISO 27001',
      description: 'Information security management system',
      icon: Award,
      color: 'purple',
      status: 'In Progress'
    },
    {
      name: 'PCI DSS',
      description: 'We rely on PCI DSS–validated payment processors and follow their integration best practices.',
      icon: Lock,
      color: 'orange',
      status: 'Implemented'
    }
  ];

  const securityFeatures = [
    {
      icon: Shield,
      title: 'SOC 2–aligned controls',
      description: 'Our systems implement controls aligned to SOC 2 Trust Services Criteria for enterprise-grade security that protects your business data.',
      color: 'cyan'
    },
    {
      icon: Lock,
      title: 'End-to-End Encryption',
      description: 'All data is encrypted in transit and at rest using industry-standard AES-256 encryption protocols.',
      color: 'cyan'
    },
    {
      icon: User,
      title: 'Role-Based Access Control',
      description: 'Granular permissions ensure only authorized staff can access specific business data and AI configurations.',
      color: 'cyan'
    },
    {
      icon: Database,
      title: 'Secure Data Storage',
      description: 'Data is stored in encrypted databases with regular backups and disaster recovery protocols.',
      color: 'cyan'
    },
    {
      icon: Server,
      title: 'Infrastructure Security',
      description: 'Our cloud infrastructure is built on secure, compliant platforms with 99.9% uptime for your business operations.',
      color: 'cyan'
    },
    {
      icon: Eye,
      title: 'Audit Logging',
      description: 'Comprehensive logging and monitoring ensure complete visibility into all AI interactions and data access.',
      color: 'cyan'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-900 text-white">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 font-heading"
          >
            Data Security & Compliance
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-neutral-300 mb-8 max-w-4xl mx-auto"
          >
            Enterprise-grade security that protects your customers' data, 
            payment information, and operational details with industry-leading compliance standards.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 text-sm text-neutral-400"
          >
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-400" />
              <span>SOC 2–aligned controls</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-blue-400" />
              <span>GDPR-informed data protection</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-purple-400" />
              <span>AES-256 Encryption</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 px-4 bg-neutral-800/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4 font-heading">Security Certifications</h2>
            <p className="text-lg text-neutral-300">Industry-recognized security standards for business data protection</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-neutral-800/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-neutral-700 hover:border-primary-500/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-${cert.color}-500/20 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <cert.icon className={`w-8 h-8 text-${cert.color}-400`} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 font-heading">{cert.name}</h3>
                <p className="text-sm text-neutral-300 mb-3">{cert.description}</p>
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold ${
                  cert.status === 'Implemented' 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                    : cert.status === 'In Progress'
                    ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                    : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                }`}>
                  <CheckCircle className="w-3 h-3" />
                  {cert.status}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4 font-heading">Data Protection</h2>
            <p className="text-lg text-neutral-300">Comprehensive security measures designed for your business operations</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-neutral-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-neutral-700 hover:border-primary-500/50 transition-all duration-300"
              >
                <feature.icon className={`text-5xl mb-6 text-${feature.color}-400`} />
                <h3 className="text-xl font-bold text-white mb-4 font-heading">{feature.title}</h3>
                <p className="text-neutral-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business-Specific Security */}
      <section className="py-16 px-4 bg-neutral-800/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4 font-heading">Business-Specific Protections</h2>
            <p className="text-lg text-neutral-300">Security measures tailored for your business data and operations</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-neutral-800/80 backdrop-blur-sm rounded-xl p-6 border border-neutral-700">
                <h3 className="text-xl font-bold text-white mb-4 font-heading">Customer Data Protection</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-300">Encrypted storage of customer contact information</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-300">Secure handling of service requests and booking data</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-300">PCI DSS–aware payment integrations using validated payment processors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-300">Automatic data retention and deletion policies</span>
                  </li>
                </ul>
              </div>

              <div className="bg-neutral-800/80 backdrop-blur-sm rounded-xl p-6 border border-neutral-700">
                <h3 className="text-xl font-bold text-white mb-4 font-heading">Operational Security</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-300">Secure AI model training with anonymized data</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-300">Multi-location access controls for multi-location businesses</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-300">Real-time monitoring of AI interactions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-300">Automated backup of business configurations</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-500/20 to-blue-500/20 rounded-2xl p-8 border border-primary-500/30"
            >
              <h3 className="text-2xl font-bold text-white mb-6 font-heading">Security Documentation</h3>
              <p className="text-neutral-300 mb-6">
                Security overview and documentation available on request. Contact us to discuss your specific security requirements 
                and compliance needs.
              </p>
              
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-400 text-white font-bold rounded-lg transition-all duration-200"
              >
                <Download className="w-5 h-5" />
                Request Security Overview
              </motion.a>
              
              <div className="mt-6 space-y-3 text-sm text-neutral-400">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  <span>Security overview available on request</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  <span>Compliance documentation available</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  <span>Data protection guide available</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vendor Due-Diligence Pack */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4 font-heading">Vendor Due-Diligence Pack</h2>
            <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
              For financial institutions and enterprise customers, we can provide comprehensive documentation 
              to support your vendor due-diligence and risk assessment processes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary-500/20 to-blue-500/20 rounded-2xl p-8 border border-primary-500/30"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4 font-heading">Available Documentation</h3>
                <ul className="space-y-3">
                  {[
                    'Security overview and architecture diagrams',
                    'Data-flow diagrams and system integration maps',
                    'Standard responses for information-security questionnaires',
                    'Business continuity and disaster recovery documentation',
                    'Data processing agreements (DPA) templates',
                    'Sub-processor lists and data residency information'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4 font-heading">Due-Diligence Support</h3>
                <ul className="space-y-3">
                  {[
                    'Information security assessments and questionnaires',
                    'Operational risk reviews and documentation',
                    'Financial stability and business continuity information',
                    'Regulatory compliance verification (PIPEDA, GDPR, etc.)',
                    'Data residency and sovereignty documentation',
                    'Custom security questionnaires and audit support'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-primary-500/30">
              <p className="text-neutral-300 mb-4">
                This documentation supports the operational, financial, and information-security factors 
                that financial institutions evaluate during third-party risk assessments, in alignment 
                with OSFI guidelines and bank vendor due-diligence processes.
              </p>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-400 text-white font-bold rounded-lg transition-all duration-200"
              >
                Request Vendor Due-Diligence Pack
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary-500/20 to-blue-500/20 rounded-2xl p-8 border border-primary-500/30"
          >
            <h2 className="text-3xl font-bold text-white mb-6 font-heading">Questions About Security?</h2>
            <p className="text-lg text-neutral-300 mb-8">
              Our security team is available to discuss your organization's specific security requirements 
              and compliance needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://calendly.com/auralixai/strategy-call"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-accent-orange hover:bg-accent-orange/90 text-white font-bold rounded-lg transition-all duration-200"
              >
                Schedule Security Review
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-primary-400 text-primary-400 hover:bg-primary-400 hover:text-black font-bold rounded-lg transition-all duration-200"
              >
                Contact Security Team
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}