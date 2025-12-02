'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "How do I know it works?",
    answer: "We provide a live demo line (+1 (782) 882-8635) where you can experience our AI receptionist firsthand. We also offer case studies from real restaurants showing 40% increase in bookings and 60% reduction in admin time. Our 48-hour setup guarantee means if we can't get your system working, we refund your setup fee."
  },
  {
    question: "What's required to install?",
    answer: "Installation is simple and requires minimal technical setup. We need access to your phone system (landline or VoIP), your website (for chatbot integration), and your social media accounts (Instagram, Facebook). Our team handles all technical configuration during the 48-hour setup process. No complex hardware or software installation required."
  },
  {
    question: "Is there any commitment?",
    answer: "No long-term contracts required. You can cancel anytime with 30 days notice. We're confident in our service - that's why we offer the 48-hour setup guarantee. If we can't deliver results, you're not locked into anything. Our goal is to help your restaurant succeed, not trap you in a contract."
  },
  {
    question: "How does the pricing work?",
    answer: "We have two simple plans: Pro ($199/month + $499 setup) for single locations, and Premium ($599/month + $599 setup) for multi-location chains. The setup fee covers professional installation, configuration, staff training, and 48-hour monitoring. Monthly fees include ongoing support, updates, and maintenance. No hidden costs or surprise charges."
  }
];

export default function FAQAccordion() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about Auralix AI
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 rounded-2xl"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {item.question}
                </h3>
                <div className="flex-shrink-0">
                  {openItems.includes(index) ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </div>
              </button>
              
              <motion.div
                initial={false}
                animate={{
                  height: openItems.includes(index) ? 'auto' : 0,
                  opacity: openItems.includes(index) ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-primary-50 border border-primary-200 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-700 mb-6">
              Our team is here to help. Contact us directly for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:marufzaman@auralixai.ca"
                className="bg-primary-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors duration-200"
              >
                Email Us
              </a>
              <a
                href="tel:+17828828635"
                className="bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200"
              >
                Call +1 (782) 882-8635
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
