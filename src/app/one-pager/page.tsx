'use client';
import { motion } from 'framer-motion';
import OnePagerPDF from '@/components/OnePagerPDF';

export default function OnePagerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a2a3a] via-[#0a2233] to-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto text-center py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-cyan-300 font-heading">
            Auralix AI One-Pager
          </h1>
          <p className="text-xl md:text-2xl text-cyan-100 mb-8 max-w-4xl mx-auto">
            Download our comprehensive one-page overview of restaurant AI automation solutions
          </p>
          <div className="flex items-center justify-center gap-4 text-gray-300">
            <span>Perfect for sharing with stakeholders</span>
            <span>•</span>
            <span>Complete solution overview</span>
            <span>•</span>
            <span>Pricing & ROI details</span>
          </div>
        </motion.div>
      </section>

      {/* One-Pager PDF Component */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <OnePagerPDF />
      </section>

      {/* Additional Information */}
      <section className="max-w-4xl mx-auto py-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 rounded-2xl p-8 shadow-2xl border border-neutral-700"
        >
          <h2 className="text-3xl font-bold text-white mb-6 text-center font-heading">
            What's Included in the One-Pager
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">Content Overview</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Problem statement with restaurant statistics</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Complete solution overview</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Key features and benefits</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Clear pricing tiers and ROI</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Success story and metrics</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">Perfect For</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Sharing with restaurant owners</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Investor presentations</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Partner discussions</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Sales team materials</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Email attachments</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
