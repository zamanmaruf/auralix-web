'use client';

import { motion } from 'framer-motion';
import { 
  CheckCircle, Settings, Zap, Globe, ArrowRight, Shield, 
  FileText, Link as LinkIcon, AlertCircle, Phone, Calendar
} from 'lucide-react';
import Link from 'next/link';

const integrations = [
  {
    name: 'ServiceTitan',
    description: 'Native API integration for automatic job creation and real-time sync',
    method: 'API',
    requirements: 'ServiceTitan partner API access required',
    features: [
      'Automatic job/lead creation',
      'Real-time appointment sync',
      'Customer data synchronization',
      'Service history access',
      'Technician assignment support'
    ],
    documentation: 'https://partnerapis.servicetitan.io/docs/overview/',
    status: 'Available'
  },
  {
    name: 'Jobber',
    description: 'Seamless API integration for appointment scheduling and job management',
    method: 'API',
    requirements: 'Jobber API credentials required',
    features: [
      'Automatic appointment booking',
      'Job creation and updates',
      'Customer information sync',
      'Schedule management',
      'Invoice integration'
    ],
    documentation: 'https://developer.getjobber.com/',
    status: 'Available'
  },
  {
    name: 'Housecall Pro',
    description: 'Full API integration for leads, jobs, and customer management',
    method: 'API',
    requirements: 'Housecall Pro API access (plan-gated - requires appropriate subscription tier)',
    features: [
      'Lead and job creation',
      'Customer data sync',
      'Appointment scheduling',
      'Payment processing integration',
      'Route optimization data'
    ],
    documentation: 'https://developer.housecallpro.com/',
    status: 'Available'
  },
  {
    name: 'Zapier',
    description: 'Connect to 5,000+ apps with custom workflows and automations',
    method: 'Zapier',
    requirements: 'Zapier account',
    features: [
      '5,000+ app integrations',
      'Custom workflow automation',
      'Multi-step zaps',
      'Real-time triggers',
      'Data transformation'
    ],
    documentation: 'https://zapier.com/apps/auralix-ai/integrations',
    status: 'Available'
  },
  {
    name: 'Webhooks',
    description: 'Custom webhook integration for any system with real-time data sync',
    method: 'Webhook',
    requirements: 'Webhook endpoint URL',
    features: [
      'Real-time event notifications',
      'Custom payload formatting',
      'Retry logic and error handling',
      'Multiple webhook endpoints',
      'Event filtering'
    ],
    documentation: null,
    status: 'Available'
  },
  {
    name: 'SMS/Email',
    description: 'Built-in automated confirmations and notifications',
    method: 'Built-in',
    requirements: 'No additional setup required',
    features: [
      'SMS appointment confirmations',
      'Email notifications',
      'Two-way SMS support',
      'Automated reminders',
      'Custom message templates'
    ],
    documentation: null,
    status: 'Included'
  }
];

export default function IntegrationsPage() {
  return (
    <div className="min-h-screen text-white">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 font-heading"
          >
            Integrations
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-neutral-300 mb-8 max-w-4xl mx-auto"
          >
            Connect Auralix AI with your existing CRM, scheduling, and business management tools. 
            Seamless integrations for home services businesses.
          </motion.p>
        </div>
      </section>

      {/* Integration Flow */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4 font-heading">How Integrations Work</h2>
            <p className="text-lg text-neutral-300">Call → AI → CRM → Team</p>
          </motion.div>

          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-cyan-500/30 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-2 font-heading">Seamless Data Flow</h3>
                <p className="text-neutral-300">
                  When a job is booked, Auralix AI automatically creates the lead/job in your CRM, 
                  sends notifications to your team, and triggers SMS confirmations—all in real-time.
                </p>
              </div>
              <div className="flex items-center gap-2 text-cyan-400">
                <Phone className="w-8 h-8" />
                <ArrowRight className="w-6 h-6" />
                <Zap className="w-8 h-8" />
                <ArrowRight className="w-6 h-6" />
                <Settings className="w-8 h-8" />
                <ArrowRight className="w-6 h-6" />
                <Globe className="w-8 h-8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Details */}
      <section className="py-16 px-4 bg-section-main bg-neutral-800/60 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4 font-heading">Available Integrations</h2>
            <p className="text-lg text-neutral-300">Connect with the tools your home services business already uses</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrations.map((integration, index) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-neutral-800/80 backdrop-blur-sm rounded-xl p-6 border border-neutral-700 hover:border-primary-500/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 font-heading">{integration.name}</h3>
                    <span className="inline-block px-3 py-1 bg-primary-500/20 text-primary-300 text-xs font-semibold rounded-full">
                      {integration.method}
                    </span>
                  </div>
                  {integration.status === 'Included' && (
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  )}
                </div>
                
                <p className="text-neutral-300 text-sm mb-4">{integration.description}</p>
                
                {integration.requirements && (
                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3 mb-4">
                    <div className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                      <p className="text-yellow-300 text-xs">{integration.requirements}</p>
                    </div>
                  </div>
                )}
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Features:</h4>
                  <ul className="space-y-1">
                    {integration.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-xs text-neutral-300">
                        <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {integration.documentation && (
                  <a
                    href={integration.documentation}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-primary-400 hover:text-primary-300 transition-colors"
                  >
                    <LinkIcon className="w-4 h-4" />
                    View API Documentation
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Details */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4 font-heading">Implementation Details</h2>
            <p className="text-lg text-neutral-300">What you need to know about API access and setup</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-neutral-800/80 backdrop-blur-sm rounded-xl p-6 border border-neutral-700"
            >
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-cyan-400" />
                <h3 className="text-xl font-bold text-white font-heading">ServiceTitan</h3>
              </div>
              <p className="text-neutral-300 mb-4">
                ServiceTitan provides a partner API portal for integrations. Our team will work with you to:
              </p>
              <ul className="space-y-2 text-neutral-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Obtain API credentials through ServiceTitan&apos;s partner program</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Configure job creation endpoints and data mapping</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Set up real-time sync for appointments and customer data</span>
                </li>
              </ul>
              <a
                href="https://partnerapis.servicetitan.io/docs/overview/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 mt-4 text-sm"
              >
                <FileText className="w-4 h-4" />
                ServiceTitan API Documentation
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-neutral-800/80 backdrop-blur-sm rounded-xl p-6 border border-neutral-700"
            >
              <div className="flex items-center gap-3 mb-4">
                <Settings className="w-6 h-6 text-cyan-400" />
                <h3 className="text-xl font-bold text-white font-heading">Housecall Pro</h3>
              </div>
              <p className="text-neutral-300 mb-4">
                Housecall Pro&apos;s public API access is plan-gated. Important notes:
              </p>
              <ul className="space-y-2 text-neutral-300">
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span>API access requires an appropriate Housecall Pro subscription tier</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>We&apos;ll verify your plan level and configure API access accordingly</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Full integration supports leads, jobs, customers, and scheduling</span>
                </li>
              </ul>
              <a
                href="https://developer.housecallpro.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 mt-4 text-sm"
              >
                <FileText className="w-4 h-4" />
                Housecall Pro API Documentation
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Setup Process */}
      <section className="py-16 px-4 bg-section-main bg-neutral-800/60 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4 font-heading">Integration Setup</h2>
            <p className="text-lg text-neutral-300">Our team handles the technical setup for you</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: '1',
                title: 'API Access',
                description: 'We verify your CRM API access and obtain necessary credentials'
              },
              {
                step: '2',
                title: 'Configuration',
                description: 'We configure data mapping, endpoints, and sync settings'
              },
              {
                step: '3',
                title: 'Testing',
                description: 'We test the integration with sample data to ensure everything works'
              },
              {
                step: '4',
                title: 'Go Live',
                description: 'Integration is activated and monitored for the first few days'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-neutral-800/80 backdrop-blur-sm rounded-xl p-6 border border-neutral-700 text-center"
              >
                <div className="w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 font-heading">{item.title}</h3>
                <p className="text-neutral-300 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
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
            <h2 className="text-3xl font-bold text-white mb-6 font-heading">Ready to Connect Your Systems?</h2>
            <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto">
              Our team will handle the integration setup and ensure everything works seamlessly with your existing tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/auralixai/strategy-call"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent-orange hover:bg-accent-orange/90 text-white font-bold rounded-lg transition-all duration-200 hover:scale-105"
              >
                <Calendar className="w-5 h-5" />
                Schedule Integration Call
              </a>
              <Link
                href="/pricing"
                className="px-8 py-4 border-2 border-primary-400 text-primary-400 hover:bg-primary-400 hover:text-black font-bold rounded-lg transition-all duration-200"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

