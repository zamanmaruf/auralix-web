'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Phone } from 'lucide-react';
import Image from 'next/image';

interface HeroProps {
  title: string;
  subtitle: string;
  primaryCta: {
    text: string;
    href: string;
  };
  secondaryCta: {
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
    <section className="relative h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt="AI transformation background"
        fill
        style={{ objectFit: "cover" }}
        className="opacity-90"
        priority
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4 leading-tight font-heading"
        >
          {title}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl text-primary-200 mb-6 px-4 max-w-4xl"
        >
          {subtitle}
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col gap-6 mb-8 justify-center items-center"
        >
          {/* Vapi Voice Assistant CTA */}
          <button
            onClick={() => {
              console.log('🎯 [Hero CTA] Button clicked!');
              if ((window as any).triggerVapiCall) {
                console.log('🎯 [Hero CTA] Calling triggerVapiCall()');
                (window as any).triggerVapiCall();
              } else {
                console.log('🎯 [Hero CTA] triggerVapiCall not found, dispatching event');
                window.dispatchEvent(new Event('trigger-vapi-call'));
              }
            }}
            className="group px-8 sm:px-12 py-5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-2xl text-lg sm:text-xl shadow-2xl hover:shadow-3xl transition-all duration-200 text-center min-w-[300px] flex items-center justify-center gap-3 border-2 border-cyan-400/50 hover:scale-105 cursor-pointer"
          >
            <Phone className="w-6 h-6 animate-pulse group-hover:rotate-12 transition-transform" />
            <span>Talk to Auralix AI Voice Agent</span>
          </button>
          
          <p className="text-primary-200 text-lg font-semibold text-center max-w-2xl">
            Click the voice button in the bottom-right corner to start a live conversation with our AI agent. Ask about our solutions, pricing, or how we can help your business.
          </p>
          
          {/* Primary CTA */}
          <div className="flex justify-center">
            <a 
              href={primaryCta.href} 
              className="px-8 sm:px-12 py-4 bg-accent-orange hover:bg-accent-orange/90 text-white font-bold rounded-full text-lg sm:text-xl shadow-lg transition-all duration-200 text-center min-w-[250px] hover:scale-105"
            >
              {primaryCta.text}
            </a>
          </div>
        </motion.div>
        
        {/* Trust Signals */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 mt-8 opacity-80 px-4"
        >
          <div className="text-white text-xs sm:text-sm">99.9% Uptime</div>
          <div className="text-white text-xs sm:text-sm">&lt;2s Response Time</div>
          <div className="text-white text-xs sm:text-sm">15+ Languages</div>
          <div className="text-white text-xs sm:text-sm">SOC 2 & GDPR Compliant</div>
        </motion.div>
      </div>
      
      {/* Scroll Cue */}
      {showScrollCue && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white/70 hover:text-white transition-colors cursor-pointer"
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
