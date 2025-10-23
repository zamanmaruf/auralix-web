'use client';

import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Clock, DollarSign } from 'lucide-react';
import Image from 'next/image';

interface CaseStudyCardProps {
  title: string;
  restaurant: string;
  location: string;
  image: string;
  metrics: {
    bookings: string;
    adminTime: string;
    revenue: string;
  };
  quote: string;
  author: string;
  role: string;
  delay?: number;
}

export default function CaseStudyCard({
  title,
  restaurant,
  location,
  image,
  metrics,
  quote,
  author,
  role,
  delay = 0
}: CaseStudyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="bg-neutral-800/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-neutral-700"
    >
      {/* Image */}
      <div className="relative h-48 sm:h-64">
        <Image
          src={image}
          alt={`${restaurant} restaurant`}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-xl font-bold font-heading">{restaurant}</h3>
          <p className="text-sm text-neutral-200">{location}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8">
        <h4 className="text-lg font-bold text-white mb-4 font-heading">
          {title}
        </h4>

        {/* Metrics Grid */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center">
            <TrendingUp className="w-6 h-6 text-green-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-green-400">{metrics.bookings}</div>
            <div className="text-xs text-neutral-400">Bookings</div>
          </div>
          <div className="text-center">
            <Clock className="w-6 h-6 text-blue-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-blue-400">{metrics.adminTime}</div>
            <div className="text-xs text-neutral-400">Admin Time</div>
          </div>
          <div className="text-center">
            <DollarSign className="w-6 h-6 text-purple-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-purple-400">{metrics.revenue}</div>
            <div className="text-xs text-neutral-400">Revenue</div>
          </div>
        </div>

        {/* Quote */}
        <blockquote className="bg-neutral-900/50 rounded-lg p-4 mb-6 border-l-4 border-primary-400">
          <p className="text-neutral-300 italic mb-3">"{quote}"</p>
          <div className="text-sm">
            <div className="font-semibold text-white">{author}</div>
            <div className="text-neutral-400">{role}</div>
          </div>
        </blockquote>

        {/* CTA */}
        <a
          href="/case-studies/halifax-chain"
          className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-400 text-white font-bold px-6 py-3 rounded-lg transition-all duration-200 hover:scale-105"
        >
          Read Full Case Study
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </motion.div>
  );
}
