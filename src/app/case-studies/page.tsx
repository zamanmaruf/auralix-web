'use client';

import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Clock, DollarSign, MapPin, Users } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const caseStudies = [
  {
    id: 'halifax-hvac',
    title: 'Multi-Location HVAC Company Captures More Service Calls',
    business: 'Halifax HVAC Services',
    location: 'Halifax, Nova Scotia',
    industry: 'HVAC',
    image: '/dashboard.jpg',
    metrics: {
      calls: 'Significantly more',
      adminTime: 'Reduced',
      revenue: 'Increased'
    },
    quote: "We never miss a call anymore. The AI handles everything so naturally, customers can't tell the difference. It's essential for our multi-location operations.",
    author: 'Michael Hauke',
    role: 'Multi-Location Operator',
    featured: true
  },
  {
    id: 'calgary-plumbing',
    title: 'Plumbing Business Automates After-Hours Calls',
    business: 'Calgary Plumbing Co.',
    location: 'Calgary, Alberta',
    industry: 'Plumbing',
    image: '/dashboard.jpg',
    metrics: {
      calls: 'More captured',
      adminTime: 'Reduced',
      revenue: 'Increased'
    },
    quote: "Our phone was ringing off the hook during peak hours and after-hours. Now Auralix handles every call perfectly, even on weekends.",
    author: 'Costa Alexandrou',
    role: 'Business Owner',
    featured: false
  },
  {
    id: 'toronto-electrical',
    title: 'Electrical Contractor Captures Emergency Calls',
    business: 'Toronto Electrical Services',
    location: 'Toronto, Ontario',
    industry: 'Electrical',
    image: '/dashboard.jpg',
    metrics: {
      calls: 'More captured',
      adminTime: 'Reduced',
      revenue: 'Increased'
    },
    quote: "We were losing so many emergency calls during busy periods. Auralix AI never misses a beat and captures every lead.",
    author: 'Dru',
    role: 'Business Owner',
    featured: false
  }
];

export default function CaseStudiesPage() {
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
            Success Stories
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-neutral-300 mb-4 max-w-3xl mx-auto"
          >
            See how Canadian businesses use Auralix AI to never miss a call and grow revenue.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base text-neutral-400 mb-8 max-w-3xl mx-auto"
          >
            See how home services businesses (HVAC, plumbing, and electrical contractors) are using Auralix Voice Agent 
            to capture more revenue, never miss a call, and cut admin time.
          </motion.p>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4 font-heading">Featured Success Story</h2>
            <p className="text-lg text-neutral-300">Our most impressive transformation yet</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-neutral-800 to-neutral-900 rounded-2xl overflow-hidden border border-neutral-700"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">MH</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white font-heading">Halifax HVAC Services</h3>
                    <div className="flex items-center gap-2 text-neutral-400">
                      <MapPin className="w-4 h-4" />
                      <span>Halifax, Nova Scotia</span>
                    </div>
                  </div>
                </div>
                
                <blockquote className="text-lg text-neutral-300 italic mb-6">
                  &quot;We never miss a call anymore. The AI handles everything so naturally, customers can&apos;t tell the difference. 
                  It&apos;s essential for our multi-location operations.&quot;
                </blockquote>
                
                <div className="text-sm text-neutral-400 mb-6">
                  <div className="font-semibold text-white">Michael Hauke</div>
                  <div>Multi-Location Operator</div>
                  <div className="text-xs text-neutral-500 mt-2 italic">Atlantic Canada HVAC (multi-location) — anonymized at customer request</div>
                </div>
                
                  <a
                  href="https://calendly.com/auralixai/strategy-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-400 text-white font-bold px-6 py-3 rounded-lg transition-all duration-200 hover:scale-105"
                >
                  Book a Demo
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-neutral-800 rounded-xl p-4 text-center">
                  <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-400">+22%</div>
                  <div className="text-xs text-neutral-400">Calls Captured</div>
                </div>
                <div className="bg-neutral-800 rounded-xl p-4 text-center">
                  <Clock className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-400">-40%</div>
                  <div className="text-xs text-neutral-400">Admin Time</div>
                </div>
                <div className="bg-neutral-800 rounded-xl p-4 text-center">
                  <DollarSign className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-purple-400">+14</div>
                  <div className="text-xs text-neutral-400">Booked Jobs/Week</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* All Case Studies */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4 font-heading">All Success Stories</h2>
            <p className="text-lg text-neutral-300">Real results from businesses across Canada</p>
            <p className="text-base text-neutral-400 mt-4 max-w-3xl mx-auto">
              These home services businesses are using Auralix Voice Agent to capture every call, book more jobs, and reduce administrative overhead.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-neutral-800/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-neutral-700 hover:border-primary-500/50 transition-all duration-300 group"
              >
                <div className="relative h-48">
                  <Image
                    src={study.image}
                    alt={`${study.business} ${study.industry} business`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-bold font-heading">{study.business}</h3>
                    <div className="flex items-center gap-1 text-sm text-neutral-200">
                      <MapPin className="w-3 h-3" />
                      <span>{study.location}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="text-lg font-bold text-white mb-3 font-heading">
                    {study.title}
                  </h4>

                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className="text-center">
                      <TrendingUp className="w-5 h-5 text-green-400 mx-auto mb-1" />
                      <div className="text-sm font-bold text-green-400">+18%</div>
                      <div className="text-xs text-neutral-400">Calls</div>
                    </div>
                    <div className="text-center">
                      <Clock className="w-5 h-5 text-blue-400 mx-auto mb-1" />
                      <div className="text-sm font-bold text-blue-400">-35%</div>
                      <div className="text-xs text-neutral-400">Admin Time</div>
                    </div>
                    <div className="text-center">
                      <DollarSign className="w-5 h-5 text-purple-400 mx-auto mb-1" />
                      <div className="text-sm font-bold text-purple-400">+12</div>
                      <div className="text-xs text-neutral-400">Jobs/Week</div>
                    </div>
                  </div>

                  <blockquote className="text-sm text-neutral-300 italic mb-4">
                    &quot;{study.quote}&quot;
                  </blockquote>

                  <div className="text-xs text-neutral-400 mb-4">
                    <div className="font-semibold text-white">{study.author}</div>
                    <div>{study.role}</div>
                    <div className="text-xs text-neutral-500 mt-1 italic">Anonymized pilot results</div>
                  </div>

                  <a
                    href="https://calendly.com/auralixai/strategy-call"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-400 text-white font-bold px-4 py-2 rounded-lg transition-all duration-200 text-sm"
                  >
                    Book a Demo
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
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
            <h2 className="text-3xl font-bold text-white mb-4 font-heading">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-lg text-neutral-300 mb-8">
              Join these businesses and start your AI transformation journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/pricing"
                className="px-8 py-4 bg-accent-orange hover:bg-accent-orange/90 text-white font-bold rounded-lg transition-all duration-200 hover:scale-105"
              >
                Get Started
              </a>
              <a
                href="https://calendly.com/auralixai/strategy-call"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-primary-400 text-primary-400 hover:bg-primary-400 hover:text-black font-bold rounded-lg transition-all duration-200"
              >
                Book Strategy Call
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
