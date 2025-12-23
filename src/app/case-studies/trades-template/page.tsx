'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, TrendingUp, Clock, DollarSign, Phone, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function TradesCaseStudyTemplate() {
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
            [Company Name] Case Study Template
          </h1>
          
          {/* Before Section */}
          <section className="bg-red-500/10 border border-red-500/30 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 font-heading">Before Auralix</h2>
            <ul className="space-y-3 text-neutral-300">
              <li className="flex items-start gap-2">
                <span className="text-red-400">•</span>
                <span><strong>Missed calls:</strong> [X]% of calls went unanswered</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">•</span>
                <span><strong>Staff time:</strong> [X] hours/week wasted on call handling</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">•</span>
                <span><strong>Leads slipping:</strong> [X] leads lost per month</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">•</span>
                <span><strong>After-hours calls:</strong> [X]% went to voicemail</span>
              </li>
            </ul>
          </section>

          {/* After Section */}
          <section className="bg-green-500/10 border border-green-500/30 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 font-heading">After Auralix</h2>
            <ul className="space-y-3 text-neutral-300">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span><strong>Leads captured:</strong> [X] leads per month</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span><strong>Booked estimates:</strong> [X]% increase</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span><strong>Emergency calls handled:</strong> [X]% of after-hours calls</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span><strong>Ad spend ROI protected:</strong> [X]% of Google Ads calls captured</span>
              </li>
            </ul>
          </section>

          {/* Metrics */}
          <section className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-neutral-800 rounded-xl p-4 text-center">
              <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-green-400">[X]%</div>
              <div className="text-xs text-neutral-400">Booked Jobs</div>
            </div>
            <div className="bg-neutral-800 rounded-xl p-4 text-center">
              <Clock className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-blue-400">[X]%</div>
              <div className="text-xs text-neutral-400">Admin Time</div>
            </div>
            <div className="bg-neutral-800 rounded-xl p-4 text-center">
              <DollarSign className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-purple-400">$[X]K</div>
              <div className="text-xs text-neutral-400">Revenue</div>
            </div>
          </section>

          {/* Screenshot Placeholder */}
          <section className="bg-neutral-800/50 rounded-xl p-8 mb-8 border border-neutral-700">
            <h2 className="text-xl font-bold text-white mb-4 font-heading">Lead Log Screenshot</h2>
            <div className="bg-neutral-900 rounded-lg p-8 text-center">
              <p className="text-neutral-500">Screenshot placeholder</p>
            </div>
          </section>

          {/* Call Transcript Placeholder */}
          <section className="bg-neutral-800/50 rounded-xl p-8 mb-8 border border-neutral-700">
            <h2 className="text-xl font-bold text-white mb-4 font-heading">Call Transcript Snippet</h2>
            <div className="bg-neutral-900 rounded-lg p-6">
              <p className="text-neutral-400 italic">"[Call transcript snippet placeholder]"</p>
            </div>
          </section>

          {/* Audio Clip Placeholder */}
          <section className="bg-neutral-800/50 rounded-xl p-8 mb-8 border border-neutral-700">
            <h2 className="text-xl font-bold text-white mb-4 font-heading">Audio Clip</h2>
            <div className="bg-neutral-900 rounded-lg p-8 text-center">
              <Phone className="w-12 h-12 text-neutral-600 mx-auto mb-4" />
              <p className="text-neutral-500">Audio player placeholder</p>
            </div>
          </section>

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

