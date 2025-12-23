'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, X, ArrowRight, Calendar } from 'lucide-react';
import { trackEvent } from '@/lib/ga4';

const CALENDLY_LINK = 'https://calendly.com/auralixai/strategy-call';

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      // Show after scrolling down 200px
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const handlePhoneClick = () => {
    trackEvent('calendly_click', {
      event_category: 'conversion',
      event_label: 'Sticky CTA',
      location: isMobile ? 'mobile_bottom' : 'desktop_top',
    });
  };

  const handleCTAClick = () => {
    trackEvent('cta_click', {
      event_category: 'conversion',
      event_label: 'Demo Call',
      location: isMobile ? 'mobile_bottom' : 'desktop_top',
    });
  };

  // Desktop: Sticky top bar
  if (!isMobile) {
    return (
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 border-b border-primary-500/30 shadow-lg"
          >
            <div className="max-w-7xl mx-auto px-4 py-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <button
                    onClick={() => {
                      handleCTAClick();
                      if ((window as any).triggerVapiCall) {
                        (window as any).triggerVapiCall();
                      } else {
                        window.dispatchEvent(new Event('trigger-vapi-call'));
                      }
                    }}
                    className="inline-flex items-center gap-2 px-6 py-2 bg-accent-orange hover:bg-accent-orange/90 text-white font-bold rounded-lg transition-all duration-200 hover:scale-105 text-sm sm:text-base"
                  >
                    Demo Call
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <a
                    href={CALENDLY_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handlePhoneClick}
                    className="inline-flex items-center gap-2 px-6 py-2 border-2 border-primary-400 text-primary-400 hover:bg-primary-400 hover:text-black font-bold rounded-lg transition-all duration-200 text-sm sm:text-base"
                  >
                    <Calendar className="w-4 h-4" />
                    Free Consultation
                  </a>
                </div>
                <button
                  onClick={() => setIsVisible(false)}
                  className="text-neutral-400 hover:text-white transition-colors p-1"
                  aria-label="Close sticky CTA"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }

  // Mobile: Sticky bottom button
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-neutral-900 to-neutral-800 border-t border-primary-500/30 shadow-2xl"
        >
          <div className="px-4 py-3">
            <div className="flex items-center justify-between gap-3">
              <button
                onClick={() => {
                  handleCTAClick();
                  if ((window as any).triggerVapiCall) {
                    (window as any).triggerVapiCall();
                  } else {
                    window.dispatchEvent(new Event('trigger-vapi-call'));
                  }
                }}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-accent-orange hover:bg-accent-orange/90 text-white font-bold rounded-lg transition-all duration-200 text-sm"
              >
                Demo Call
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href={CALENDLY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handlePhoneClick}
                className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-primary-400 text-primary-400 hover:bg-primary-400 hover:text-black font-bold rounded-lg transition-all duration-200 text-sm"
                aria-label="Free Consultation"
              >
                <Calendar className="w-4 h-4" />
              </a>
              <button
                onClick={() => setIsVisible(false)}
                className="text-neutral-400 hover:text-white transition-colors p-2"
                aria-label="Close sticky CTA"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

