'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  color: 'primary' | 'blue' | 'purple' | 'teal';
  delay?: number;
}

const colorClasses = {
  primary: {
    icon: 'text-primary-400',
    bg: 'bg-primary-500/10',
    border: 'border-primary-500/20',
    hover: 'hover:border-primary-400/40',
  },
  blue: {
    icon: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    hover: 'hover:border-blue-400/40',
  },
  purple: {
    icon: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
    hover: 'hover:border-purple-400/40',
  },
  teal: {
    icon: 'text-teal-400',
    bg: 'bg-teal-500/10',
    border: 'border-teal-500/20',
    hover: 'hover:border-teal-400/40',
  },
};

export default function FeatureCard({ 
  icon: Icon, 
  title, 
  description, 
  features, 
  color, 
  delay = 0 
}: FeatureCardProps) {
  const colors = colorClasses[color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5, scale: 1.02 }}
      className={`bg-neutral-800/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl border ${colors.border} ${colors.hover} transition-all duration-300 group`}
    >
      <div className="mb-6">
        <div className={`w-16 h-16 ${colors.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className={`w-8 h-8 ${colors.icon}`} />
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 font-heading">
          {title}
        </h3>
        <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
          {description}
        </p>
      </div>
      
      <div className="space-y-2">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className={`w-2 h-2 ${colors.icon.replace('text-', 'bg-')} rounded-full flex-shrink-0`} />
            <span className="text-neutral-300 text-sm">{feature}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
