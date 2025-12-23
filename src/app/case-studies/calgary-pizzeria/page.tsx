'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, TrendingUp, Clock, DollarSign } from 'lucide-react';
import Link from 'next/link';

export default function CalgaryPizzeriaCaseStudy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-900 text-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Case Studies
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 font-heading">
            Calgary Pizzeria Automates Order Taking
          </h1>
          
          <div className="bg-neutral-800/80 rounded-2xl p-8 border border-neutral-700 mb-8">
            <p className="text-neutral-300 text-lg mb-6">
              This case study is currently being updated. Full details coming soon.
            </p>
            <p className="text-neutral-400">
              Mountain View Pizzeria in Calgary, Alberta, implemented Auralix AI to handle peak-hour calls and automate order taking.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-neutral-800 rounded-xl p-4 text-center">
              <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-green-400">35%</div>
              <div className="text-xs text-neutral-400">Bookings</div>
            </div>
            <div className="bg-neutral-800 rounded-xl p-4 text-center">
              <Clock className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-blue-400">50%</div>
              <div className="text-xs text-neutral-400">Admin Time</div>
            </div>
            <div className="bg-neutral-800 rounded-xl p-4 text-center">
              <DollarSign className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-purple-400">30%</div>
              <div className="text-xs text-neutral-400">Revenue</div>
            </div>
          </div>

          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-400 text-white font-bold px-6 py-3 rounded-lg transition-all duration-200"
          >
            View All Case Studies
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

