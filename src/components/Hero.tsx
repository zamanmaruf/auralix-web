'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Phone, CheckCircle } from 'lucide-react';
import Image from 'next/image';

interface HeroProps {
  title: string;
  subtitle: string;
  primaryCta: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  backgroundImage?: string;
  showScrollCue?: boolean;
}

export default function Hero({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  backgroundImage = '/hero-ai-bg.jpg',
  showScrollCue = true
}: HeroProps) {
  return (
    <section className="relative h-screen flex items-center justify-center bg-black overflow-hidden" aria-label="Hero section">
      {/* Background Image - Optimized */}
      <Image
        src={backgroundImage}
        alt="AI transformation background"
        fill
        style={{ objectFit: "cover" }}
        className="opacity-90"
        priority
        quality={85}
        sizes="100vw"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//Z"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white drop-shadow-2xl mb-6 leading-tight font-heading"
        >
          {title}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl sm:text-2xl md:text-3xl text-primary-200 mb-8 px-4 max-w-5xl font-medium"
        >
          {subtitle}
        </motion.p>
        
        {/* Simplified Single Primary CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-8"
        >
          <a 
            href={primaryCta.href}
            target={primaryCta.href.startsWith('http') ? '_blank' : undefined}
            rel={primaryCta.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="inline-flex items-center gap-3 px-10 sm:px-14 py-5 sm:py-6 bg-accent-orange hover:bg-accent-orange/90 text-white font-bold rounded-2xl text-lg sm:text-xl md:text-2xl shadow-2xl hover:shadow-3xl transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-accent-orange/50"
            aria-label={primaryCta.text}
          >
            {primaryCta.text}
            <Phone className="w-6 h-6 sm:w-7 sm:h-7" aria-hidden="true" />
          </a>
        </motion.div>
        
        {/* Enhanced Trust Signals with Icons */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 mt-4 px-4"
        >
          <div className="flex items-center gap-2 text-white text-sm sm:text-base bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
            <CheckCircle className="w-4 h-4 text-green-400" aria-hidden="true" />
            <span>99.9% Uptime</span>
          </div>
          <div className="flex items-center gap-2 text-white text-sm sm:text-base bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
            <CheckCircle className="w-4 h-4 text-green-400" aria-hidden="true" />
            <span>&lt;2s Response Time</span>
          </div>
          <div className="flex items-center gap-2 text-white text-sm sm:text-base bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
            <CheckCircle className="w-4 h-4 text-green-400" aria-hidden="true" />
            <span>15+ Languages</span>
          </div>
          <div className="flex items-center gap-2 text-white text-sm sm:text-base bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
            <CheckCircle className="w-4 h-4 text-green-400" aria-hidden="true" />
            <span>SOC 2–aligned controls & GDPR-informed design</span>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Cue */}
      {showScrollCue && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          aria-label="Scroll down"
        >
          <motion.a
            href="#main-content"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white/70 hover:text-white transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/50 rounded-full p-2"
            aria-label="Scroll to main content"
          >
            <ChevronDown className="w-6 h-6" aria-hidden="true" />
          </motion.a>
        </motion.div>
      )}
    </section>
  );
}
