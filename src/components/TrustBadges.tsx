'use client';

import { motion } from 'framer-motion';
import { MapPin, Clock, FileText, Shield } from 'lucide-react';

const trustSignals = [
  {
    icon: MapPin,
    text: 'Canadian-Based',
    description: 'Proudly serving businesses across Canada'
  },
  {
    icon: Clock,
    text: 'Fast 48-Hour Setup',
    description: 'Get up and running in just 2 days'
  },
  {
    icon: FileText,
    text: 'No Contract',
    description: 'Cancel anytime, no long-term commitments'
  },
  {
    icon: Shield,
    text: 'GDPR-informed data protection',
    description: 'Your data is secure and protected'
  }
];

export default function TrustBadges() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Why Businesses Trust Auralix AI
          </h2>
          <p className="text-gray-600">
            Built for Canadian service businesses, with Canadian values
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustSignals.map((signal, index) => (
            <motion.div
              key={signal.text}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors duration-200">
                <div className="bg-primary-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                  <signal.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {signal.text}
                </h3>
                <p className="text-sm text-gray-600">
                  {signal.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
