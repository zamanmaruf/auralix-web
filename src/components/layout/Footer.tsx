'use client';

import Link from 'next/link';
import { Linkedin, Shield } from 'lucide-react';
import Logo from '@/components/Logo';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscriptionStatus, setSubscriptionStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [subscriptionMessage, setSubscriptionMessage] = useState('');

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

  return (
    <footer className="w-full bg-[#0a0a0a]/80 backdrop-blur-md border-t border-[#222]/50 py-12 mt-10" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <Logo width={256} height={96} className="drop-shadow-glow w-56 h-20 object-contain" />
            </div>
            <p className="text-gray-300 mb-6 max-w-md text-sm">
              Auralix AI — Halifax-built automation helping businesses answer every call and grow revenue effortlessly.
            </p>
            <p className="text-gray-400 text-xs mb-4">
              Auralix AI Inc., Halifax, Nova Scotia, Canada
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/company/auralix-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors p-2 rounded-lg hover:bg-[#1a1a1a]"
                aria-label="LinkedIn"
              >
                <Linkedin className="text-xl" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/product" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  Overview
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  How it works
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/integrations" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  Integrations
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries & Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/industries" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/compare/servicetitan" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  Compare
                </Link>
              </li>
              <li>
                <Link href="/trust" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  Trust Center
                </Link>
              </li>
              <li>
                <Link href="/company/about" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Support & Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support & Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/trust/security" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  Security
                </Link>
              </li>
              <li>
                <Link href="/trust/privacy" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/trust/terms" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

          {/* Newsletter Signup */}
          <div className="bg-[#1a1a1a]/80 backdrop-blur-sm rounded-lg p-6 mb-8 border border-neutral-700/50">
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
                className="flex-1 px-4 py-3 bg-[#333] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-base"
                disabled={subscriptionStatus === 'loading'}
                aria-label="Email address"
              />
              <button
                type="submit"
                disabled={subscriptionStatus === 'loading' || !email.trim()}
                className="px-6 py-3 bg-primary-500 hover:bg-primary-400 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors text-base"
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
            <Link href="/trust/privacy" className="hover:text-primary-400 transition-colors py-1">
              Privacy Policy
            </Link>
            <Link href="/trust/terms" className="hover:text-primary-400 transition-colors py-1">
              Terms of Service
            </Link>
            <Link href="/cookies" className="hover:text-primary-400 transition-colors py-1">
              Cookie Policy
            </Link>
            <Link href="/trust/security" className="hover:text-primary-400 transition-colors py-1">
              Security
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="text-green-400" />
            <span>© 2025 Auralix AI Inc. | Made in Nova Scotia</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
