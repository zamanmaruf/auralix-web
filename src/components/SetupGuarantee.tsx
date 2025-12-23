'use client';

import { motion } from 'framer-motion';
import { Shield, Clock, DollarSign } from 'lucide-react';

export default function SetupGuarantee() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Setup Guarantee
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We&apos;re so confident in our setup process that we guarantee it
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8 border-2 border-primary-500"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-primary-500 text-white p-3 rounded-full">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  48-Hour Setup Guarantee
                </h3>
                <p className="text-gray-600">
                  Or we refund your setup fee
                </p>
              </div>
            </div>
            
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                Professional setup and configuration
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                Complete system testing and optimization
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                Staff training and documentation
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                Live monitoring for first 48 hours
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl shadow-lg p-8 border-2 border-orange-200"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-orange-500 text-white p-3 rounded-full">
                <DollarSign className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Founders&apos; Launch Special
                </h3>
                <p className="text-gray-600">
                  Limited time offer
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border border-orange-200">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-900">After Hours Plan</span>
                  <span className="text-2xl font-bold text-orange-600">$699</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">Setup fee (one-time)</p>
              </div>
              
              <div className="bg-orange-500 text-white rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-5 h-5" />
                  <span className="font-semibold">Professional Setup Included</span>
                </div>
                <p className="text-sm opacity-90">
                  All plans include professional setup and configuration. No contracts, cancel anytime.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
