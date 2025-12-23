'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calculator, TrendingUp, Phone, DollarSign, CheckCircle } from 'lucide-react';

interface RevenueCalculatorProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RevenueCalculator({ isOpen, onClose }: RevenueCalculatorProps) {
  const [formData, setFormData] = useState({
    monthlyAdSpend: 2000,
    avgTicket: 500,
    closeRate: 25,
    missedCallRate: 27
  });

  const calculateLoss = () => {
    // Calculate leads from ad spend (assuming $50 per lead)
    const totalLeads = formData.monthlyAdSpend / 50;
    const missedLeads = (totalLeads * formData.missedCallRate) / 100;
    const monthlyLoss = missedLeads * formData.avgTicket * (formData.closeRate / 100);
    const dailyLoss = monthlyLoss / 30;
    const yearlyLoss = monthlyLoss * 12;
    
    return {
      daily: Math.round(dailyLoss),
      monthly: Math.round(monthlyLoss),
      yearly: Math.round(yearlyLoss)
    };
  };

  const loss = calculateLoss();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: parseFloat(value) || 0
    }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            className="bg-neutral-900 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-neutral-700"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent-orange rounded-lg flex items-center justify-center">
                  <Calculator className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white font-heading">Calculate Your Lost Revenue</h2>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </motion.button>
            </div>

            <div className="space-y-6">
              <div className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
                <h3 className="text-lg font-semibold text-white mb-4">Business Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-300 mb-2">
                      Monthly Ad Spend ($)
                    </label>
                    <input
                      type="number"
                      value={formData.monthlyAdSpend}
                      onChange={(e) => handleInputChange('monthlyAdSpend', e.target.value)}
                      className="w-full px-4 py-3 bg-neutral-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 border border-neutral-600"
                      placeholder="2000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-300 mb-2">
                      Average Ticket ($)
                    </label>
                    <input
                      type="number"
                      value={formData.avgTicket}
                      onChange={(e) => handleInputChange('avgTicket', e.target.value)}
                      className="w-full px-4 py-3 bg-neutral-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 border border-neutral-600"
                      placeholder="500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-300 mb-2">
                      Close Rate (%)
                    </label>
                    <input
                      type="number"
                      value={formData.closeRate}
                      onChange={(e) => handleInputChange('closeRate', e.target.value)}
                      className="w-full px-4 py-3 bg-neutral-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 border border-neutral-600"
                      placeholder="25"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-300 mb-2">
                      Missed Call Rate (%)
                    </label>
                    <input
                      type="number"
                      value={formData.missedCallRate}
                      onChange={(e) => handleInputChange('missedCallRate', e.target.value)}
                      className="w-full px-4 py-3 bg-neutral-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 border border-neutral-600"
                      placeholder="27"
                    />
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl p-6 border border-red-500/30"
              >
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-red-400" />
                  Your Lost Revenue
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-400 mb-1">${loss.daily}</div>
                    <div className="text-sm text-neutral-300">Per Day</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-400 mb-1">${loss.monthly.toLocaleString()}</div>
                    <div className="text-sm text-neutral-300">Per Month</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-500 mb-1">${loss.yearly.toLocaleString()}</div>
                    <div className="text-sm text-neutral-300">Per Year</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-gradient-to-r from-primary-500/20 to-blue-500/20 rounded-xl p-6 border border-primary-500/30"
              >
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Phone className="w-5 h-5 text-primary-400" />
                  Auralix AI Solution
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-neutral-300">Answer 100% of calls with AI Receptionist</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-neutral-300">Capture every lead and book every job</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-neutral-300">Protect your ad spend ROI</span>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-primary-500/10 rounded-lg border border-primary-500/30">
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="w-4 h-4 text-primary-400" />
                    <span className="text-sm font-semibold text-primary-300">Potential Recovery</span>
                  </div>
                  <div className="text-2xl font-bold text-white">
                    ${loss.monthly.toLocaleString()}/month
                  </div>
                  <div className="text-sm text-neutral-400">
                    That&apos;s ${loss.yearly.toLocaleString()} per year you could recover!
                  </div>
                </div>
              </motion.div>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="https://calendly.com/auralixai/strategy-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 px-6 py-3 bg-accent-orange hover:bg-accent-orange/90 text-white font-bold rounded-lg transition-all duration-200 text-center"
                >
                  Schedule a Demo
                </motion.a>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onClose}
                  className="flex-1 px-6 py-3 border-2 border-primary-400 text-primary-400 hover:bg-primary-400 hover:text-black font-bold rounded-lg transition-all duration-200"
                >
                  Close Calculator
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}