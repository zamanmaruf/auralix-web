'use client';

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Linkedin, Shield, Mail, Menu, X, ChevronDown } from "lucide-react";
import VapiVoiceAssistant from "../components/VapiVoiceAssistant";
import Logo from "../components/Logo";
import ErrorBoundary from "../components/ErrorBoundary";
import CookieConsent from "../components/CookieConsent";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState('');
  const [subscriptionStatus, setSubscriptionStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [subscriptionMessage, setSubscriptionMessage] = useState('');

  useEffect(() => {
    console.log("ClientLayout mounted");
    
    // Initialize GA4 only if user has consented to cookies
    if (typeof window !== 'undefined') {
      const consent = localStorage.getItem('auralix_cookie_consent');
      if (consent) {
        try {
          const consentData = JSON.parse(consent);
          if (consentData.accepted) {
            import('@/lib/ga4').then(({ initGA4 }) => {
              initGA4();
            });
          }
        } catch {
          // Invalid consent data, don't initialize
        }
      }
    }
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setSubscriptionStatus('loading');
    setSubscriptionMessage('');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubscriptionStatus('success');
        setSubscriptionMessage(data.message);
        setEmail('');
      } else {
        setSubscriptionStatus('error');
        setSubscriptionMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setSubscriptionStatus('error');
      setSubscriptionMessage('Something went wrong. Please try again.');
    }
  };

  const closeMobileMenu = () => setMenuOpen(false);

  return (
    <div>
      {/* Skip to main content link for accessibility */}
      <a href="#main-content" className="skip-to-main">
        Skip to main content
      </a>
      <header className="sticky top-0 z-50 w-full bg-[#0a0a0a] bg-opacity-95 border-b border-[#1a1a1a] shadow-lg backdrop-blur-sm" role="banner">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-4 relative" role="navigation" aria-label="Main navigation">
          <div className="flex-1 flex items-center">
            <Link href="/" className="flex items-center" aria-label="Auralix AI Home">
              <Logo width={70} height={25} className="drop-shadow-glow" />
            </Link>
          </div>
          {/* Desktop Nav */}
          <div className="hidden md:flex flex-1 justify-end gap-6 text-lg items-center">
            <Link href="/home-services" className="hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 rounded px-2" aria-label="For Home Services">For Home Services</Link>
            <Link href="/how-it-works" className="hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 rounded px-2" aria-label="How It Works">How It Works</Link>
            <Link href="/pricing" className="hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 rounded px-2" aria-label="View Pricing">Pricing</Link>
            
            {/* More Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1 hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 rounded px-2"
                aria-label="More options"
                aria-expanded={dropdownOpen}
              >
                More
                <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg shadow-xl py-2 z-50">
                  <Link
                    href="/case-studies"
                    className="block px-4 py-2 text-sm hover:bg-[#1a1a1a] hover:text-cyan-400 transition-colors"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Case Studies
                  </Link>
                  <Link
                    href="/security"
                    className="block px-4 py-2 text-sm hover:bg-[#1a1a1a] hover:text-cyan-400 transition-colors"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Security
                  </Link>
                  <Link
                    href="/for-financial-institutions"
                    className="block px-4 py-2 text-sm text-neutral-400 hover:bg-[#1a1a1a] hover:text-cyan-400 transition-colors"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Financial Institutions
                  </Link>
                </div>
              )}
            </div>

            <Link href="/contact" className="hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 rounded px-2" aria-label="Contact Us">Contact</Link>
          </div>
          {/* Mobile menu button - Ensure minimum touch target size (44x44px) */}
          <div className="md:hidden">
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white hover:text-cyan-400 p-3 rounded-lg hover:bg-[#1a1a1a] transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Toggle mobile menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
        
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#0a0a0a] border-t border-[#1a1a1a] shadow-lg">
            <div className="px-6 py-8 space-y-6">
              <Link 
                href="/home-services" 
                className="block text-lg py-3 hover:text-cyan-400 transition-colors border-b border-[#333]"
                onClick={closeMobileMenu}
              >
                For Home Services
              </Link>
              <Link 
                href="/how-it-works" 
                className="block text-lg py-3 hover:text-cyan-400 transition-colors border-b border-[#333]"
                onClick={closeMobileMenu}
              >
                How It Works
              </Link>
              <Link 
                href="/pricing" 
                className="block text-lg py-3 hover:text-cyan-400 transition-colors border-b border-[#333]"
                onClick={closeMobileMenu}
              >
                Pricing
              </Link>
              
              <Link 
                href="/case-studies" 
                className="block text-lg py-3 hover:text-cyan-400 transition-colors border-b border-[#333]"
                onClick={closeMobileMenu}
              >
                Case Studies
              </Link>
              <Link 
                href="/security" 
                className="block text-lg py-3 hover:text-cyan-400 transition-colors border-b border-[#333]"
                onClick={closeMobileMenu}
              >
                Security
              </Link>
              <Link 
                href="/for-financial-institutions" 
                className="block text-sm py-3 text-neutral-400 hover:text-cyan-400 transition-colors border-b border-[#333]"
                onClick={closeMobileMenu}
              >
                Financial Institutions
              </Link>

              <Link 
                href="/contact" 
                className="block text-lg py-3 hover:text-cyan-400 transition-colors border-b border-[#333]"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </header>
      <main id="main-content" className="min-h-screen" role="main">
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
      </main>
      
      {/* Professional Footer */}
      <footer className="w-full bg-[#0a0a0a] border-t border-[#222] py-12 mt-10" role="contentinfo">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* Main Footer Content */}
          <div className="mb-8">
            {/* Company Info */}
            <div>
              <div className="mb-6">
                <div className="w-56 h-20 sm:w-64 sm:h-24">
                  <Logo width={256} height={96} className="drop-shadow-glow w-full h-full object-contain" />
                </div>
              </div>
              <p className="text-gray-300 mb-6 max-w-md text-xs sm:text-sm md:text-base">
                Auralix AI — Halifax-built automation helping businesses answer every call and grow revenue effortlessly.
              </p>
              <p className="text-gray-400 text-xs mb-4">
                Auralix AI Inc., Halifax, Nova Scotia, Canada (Nova Scotia corporation)
              </p>
              <div className="flex gap-4">
                <a href="https://linkedin.com/company/auralix-ai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors p-2 rounded-lg hover:bg-[#1a1a1a]">
                  <Linkedin className="text-xl" />
                </a>
              </div>
            </div>

          </div>


          {/* Newsletter Signup */}
          <div className="bg-[#1a1a1a] rounded-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="w-full md:w-auto">
                <h3 className="text-lg font-semibold text-white mb-2">Stay Updated</h3>
                <p className="text-sm text-gray-300">Get the latest business automation insights and industry updates.</p>
              </div>
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email" 
                  className="flex-1 px-4 py-3 bg-[#333] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-base"
                  disabled={subscriptionStatus === 'loading'}
                />
                <button 
                  type="submit"
                  disabled={subscriptionStatus === 'loading' || !email.trim()}
                  className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 disabled:bg-gray-600 disabled:cursor-not-allowed text-black font-semibold rounded-lg transition-colors text-base"
                >
                  {subscriptionStatus === 'loading' ? 'Subscribing...' : 'Subscribe'}
                </button>
              </form>
            </div>
            {subscriptionMessage && (
              <div className={`mt-3 text-sm ${subscriptionStatus === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                {subscriptionMessage}
              </div>
            )}
          </div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-[#333] text-sm text-gray-400">
            <div className="flex flex-wrap gap-4 md:gap-6 justify-center md:justify-start">
              <Link href="/privacy" className="hover:text-cyan-400 transition-colors py-1">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-cyan-400 transition-colors py-1">Terms of Service</Link>
              <Link href="/cookies" className="hover:text-cyan-400 transition-colors py-1">Cookie Policy</Link>
              <Link href="/security" className="hover:text-cyan-400 transition-colors py-1">Security</Link>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="text-green-400" />
              <span>© 2025 Auralix AI Inc. | Made in Nova Scotia</span>
            </div>
          </div>
        </div>
      </footer>
      
      {/* AI Voice Assistant */}
      <VapiVoiceAssistant />
      
      {/* Cookie Consent Banner */}
      <CookieConsent />
    </div>
  );
} 