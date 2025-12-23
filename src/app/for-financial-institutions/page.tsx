'use client';

import { motion } from 'framer-motion';
import { 
  Shield, Lock, Database, ArrowRight, CheckCircle, Building, 
  Phone, Globe, FileText, Users, CreditCard, Activity, Link as LinkIcon
} from 'lucide-react';
import Link from 'next/link';
import ContactForm from '../../components/ContactForm';

export default function FinancialInstitutionsPage() {
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
            Voice AI & Automation for Financial Institutions and Regulated Partners
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-neutral-300 mb-8 max-w-4xl mx-auto"
          >
            Halifax-built voice agent and orchestration layer that plugs into your existing contact-center, CRM, and core systems — designed with SOC 2–aligned controls, vendor due-diligence processes, and audit-ready logging.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="#request-briefing"
              className="px-8 py-4 bg-accent-orange hover:bg-accent-orange/90 text-white font-bold rounded-lg transition-all duration-200 hover:scale-105"
            >
              Request a Partner Briefing
            </Link>
            <Link
              href="/security"
              className="px-8 py-4 border-2 border-primary-400 text-primary-400 hover:bg-primary-400 hover:text-black font-bold rounded-lg transition-all duration-200"
            >
              View Security & Compliance
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Where We Fit Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4 font-heading">Where We Fit</h2>
            <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
              Auralix AI is a technology vendor that integrates into your existing infrastructure. 
              We never act as a bank or financial institution — all regulated activities remain under your control.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary-500/20 to-blue-500/20 rounded-2xl p-8 border border-primary-500/30"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Callers</h3>
                <p className="text-neutral-300">Inbound customer calls and inquiries</p>
              </div>
              
              <div className="flex justify-center">
                <ArrowRight className="w-12 h-12 text-primary-400" />
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Activity className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Auralix Voice Agent</h3>
                <p className="text-neutral-300">Natural language processing and routing</p>
              </div>
              
              <div className="flex justify-center md:col-span-3">
                <ArrowRight className="w-12 h-12 text-primary-400 rotate-90 md:rotate-0" />
              </div>
              
              <div className="text-center md:col-span-3">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Your Systems</h3>
                <p className="text-neutral-300">Contact center, CRM, core banking, and human agents</p>
              </div>
            </div>

            <div className="mt-8 bg-neutral-800/50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 font-heading">Key Principles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Never a Bank</h4>
                    <p className="text-neutral-300 text-sm">We are a technology vendor, not a financial institution</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Regulated Activities Stay Under Your Control</h4>
                    <p className="text-neutral-300 text-sm">KYC, payments, investment advice remain with your institution</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">API-First Integration</h4>
                    <p className="text-neutral-300 text-sm">Plugs into existing systems without disrupting workflows</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Audit-Ready Logging</h4>
                    <p className="text-neutral-300 text-sm">Full call transcripts and interaction logs for compliance</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Security & Compliance Summary */}
      <section className="py-16 px-4 bg-neutral-800/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4 font-heading">Security & Compliance</h2>
            <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
              Built with the security and compliance standards that financial institutions require
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { name: 'SOC 2 (Type II – planned)', icon: Shield, color: 'green', status: 'In Progress' },
              { name: 'GDPR-Informed', icon: Globe, color: 'blue', status: 'Implemented' },
              { name: 'ISO 27001', icon: FileText, color: 'purple', status: 'In Progress' },
              { name: 'PCI DSS', icon: CreditCard, color: 'orange', status: 'Via Processors' }
            ].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-neutral-800/80 backdrop-blur-sm rounded-xl p-6 text-center border border-neutral-700"
              >
                <cert.icon className={`w-8 h-8 text-${cert.color}-400 mx-auto mb-3`} />
                <h3 className="text-lg font-bold text-white mb-2 font-heading">{cert.name}</h3>
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold ${
                  cert.status === 'Implemented' 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                    : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                }`}>
                  {cert.status}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link
              href="/security"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 hover:bg-primary-400 text-white font-bold rounded-lg transition-all duration-200 hover:scale-105"
            >
              View Full Security & Compliance Details
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Vendor Due-Diligence Readiness */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4 font-heading">Vendor Due-Diligence Readiness</h2>
            <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
              We understand the requirements for third-party risk assessment and vendor due-diligence processes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-neutral-800/80 backdrop-blur-sm rounded-2xl p-8 border border-neutral-700"
            >
              <h3 className="text-2xl font-bold text-white mb-6 font-heading">Available Documentation</h3>
              <ul className="space-y-4">
                {[
                  'Security overview & architecture diagrams',
                  'Standard responses for information-security questionnaires',
                  'Support for DPAs, sub-processor lists, and data-flow mapping',
                  'Business continuity and disaster recovery documentation',
                  'Data processing agreements and compliance certifications',
                  'Audit logs and interaction transcripts for compliance review'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-300">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-500/20 to-blue-500/20 rounded-2xl p-8 border border-primary-500/30"
            >
              <h3 className="text-2xl font-bold text-white mb-6 font-heading">What We Support</h3>
              <ul className="space-y-4">
                {[
                  'Information security assessments',
                  'Operational risk reviews',
                  'Financial stability documentation',
                  'Regulatory compliance verification',
                  'Data residency and sovereignty requirements',
                  'Custom security questionnaires'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-300">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Example Use Cases */}
      <section className="py-16 px-4 bg-neutral-800/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4 font-heading">Example Use Cases</h2>
            <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
              How financial institutions use Auralix Voice Agent to enhance customer service while maintaining security and compliance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'IVR Replacement or Augmentation',
                description: 'Replace or enhance traditional IVR systems with natural language understanding, reducing customer frustration and improving first-call resolution rates.',
                icon: Phone,
                color: 'primary'
              },
              {
                title: 'Balance, Branch & Card FAQs',
                description: 'Handle common customer inquiries about account balances, branch locations, hours, and card services — with or without backend system access.',
                icon: CreditCard,
                color: 'blue'
              },
              {
                title: 'Secure Call Logging & Routing',
                description: 'Route calls to appropriate departments or human agents with full audit trails, ensuring compliance with regulatory requirements.',
                icon: Database,
                color: 'purple'
              },
              {
                title: 'Non-Advisory Investment FAQs',
                description: 'Provide information about investment products, savings accounts, and general financial education without providing investment advice.',
                icon: FileText,
                color: 'green'
              },
              {
                title: 'White-Label Voice Agent',
                description: 'Deploy Auralix as a white-label solution for partner channels, maintaining your brand while leveraging our voice AI technology.',
                icon: LinkIcon,
                color: 'orange'
              },
              {
                title: 'Contact Center Integration',
                description: 'Integrate with existing contact center platforms, CRM systems, and core banking infrastructure via REST APIs and webhooks.',
                icon: Activity,
                color: 'cyan'
              }
            ].map((useCase, index) => {
              const UseCaseIcon = useCase.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-neutral-800/80 backdrop-blur-sm rounded-2xl p-8 border border-neutral-700 hover:border-primary-500/50 transition-all duration-300"
                >
                  <div className={`w-12 h-12 bg-${useCase.color}-500/20 rounded-lg flex items-center justify-center mb-4`}>
                    <UseCaseIcon className={`w-6 h-6 text-${useCase.color}-400`} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 font-heading">{useCase.title}</h3>
                  <p className="text-neutral-300">{useCase.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Request Partner Briefing Form */}
      <section id="request-briefing" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4 font-heading">Request a Partner Briefing</h2>
            <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
              For financial institutions, stock exchanges, and regulated partners. We can sign NDAs and provide security documentation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-neutral-800/80 backdrop-blur-sm rounded-2xl p-8 border border-neutral-700"
          >
            <ContactForm showCalendly={false} hideTrade={true} />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
