'use client';

import "./globals.css";
import Link from "next/link";
import { useState } from "react";
import { FaLinkedin, FaTwitter, FaYoutube, FaShieldAlt, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import Chatbot from "../components/Chatbot";
import Logo from "../components/Logo";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
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

  const closeMobileMenu = () => setMenuOpen(false);

  return (
    <html lang="en">
      <head>
        <title>Auralix AI - Enterprise AI Automation Solutions</title>
        <meta name="description" content="AI Automation That Scales With You — From Startup to Enterprise. Revolutionizing business operations with enterprise-grade AI solutions." />
        <meta name="keywords" content="AI automation, enterprise solutions, business intelligence, workflow automation, Nova Scotia, Halifax" />
        <meta property="og:title" content="Auralix AI - Enterprise AI Automation Solutions" />
        <meta property="og:description" content="AI Automation That Scales With You — From Startup to Enterprise." />
        <meta property="og:image" content="/hero-ai-bg.jpg" />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Auralix AI - Enterprise AI Automation Solutions" />
        <meta name="twitter:description" content="AI Automation That Scales With You — From Startup to Enterprise." />
        <meta name="twitter:image" content="/hero-ai-bg.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Auralix AI",
          "url": "https://yourdomain.com",
          "logo": "https://yourdomain.com/logo.png",
          "description": "AI Automation That Scales With You — From Startup to Enterprise.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Nova Scotia",
            "addressCountry": "Canada"
          }
        }` }} />
        <script
          type="text/javascript"
          src="https://assets.calendly.com/assets/external/widget.js"
          async
        ></script>
      </head>
      <body className="bg-[#0a0a0a] text-[#ededed] font-sans">
        <header className="sticky top-0 z-50 w-full bg-[#0a0a0a] bg-opacity-95 border-b border-[#1a1a1a] shadow-lg backdrop-blur-sm">
          <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-4 relative">
            <div className="flex-1 flex items-center">
              <Link href="/" className="flex items-center">
                <Logo width={70} height={25} className="drop-shadow-glow" />
              </Link>
            </div>
            {/* Desktop Nav */}
            <div className="hidden md:flex flex-1 justify-end gap-10 text-lg items-center">
              <Link href="/solutions" className="hover:text-cyan-400 transition-colors">Solutions</Link>
              <Link href="/pricing" className="hover:text-cyan-400 transition-colors">Pricing</Link>
              <Link href="/about-us" className="hover:text-cyan-400 transition-colors">About Us</Link>
              <Link href="/blog" className="hover:text-cyan-400 transition-colors">Blog</Link>
              <a href="https://calendly.com/auralixai/30min" target="_blank" rel="noopener noreferrer" className="ml-2 px-5 py-2 border-2 border-cyan-400 text-cyan-300 rounded-lg hover:bg-cyan-400 hover:text-black transition-all font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2">Book Consultation</a>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-white hover:text-cyan-400 p-3 rounded-lg hover:bg-[#1a1a1a] transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400"
                aria-label="Toggle mobile menu"
              >
                {menuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
              </button>
            </div>
          </nav>
          
          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-[#0a0a0a] border-t border-[#1a1a1a] shadow-lg">
              <div className="px-6 py-8 space-y-6">
                <Link 
                  href="/solutions" 
                  className="block text-lg py-3 hover:text-cyan-400 transition-colors border-b border-[#333]"
                  onClick={closeMobileMenu}
                >
                  Solutions
                </Link>
                <Link 
                  href="/pricing" 
                  className="block text-lg py-3 hover:text-cyan-400 transition-colors border-b border-[#333]"
                  onClick={closeMobileMenu}
                >
                  Pricing
                </Link>
                <Link 
                  href="/about-us" 
                  className="block text-lg py-3 hover:text-cyan-400 transition-colors border-b border-[#333]"
                  onClick={closeMobileMenu}
                >
                  About Us
                </Link>
                <Link 
                  href="/blog" 
                  className="block text-lg py-3 hover:text-cyan-400 transition-colors border-b border-[#333]"
                  onClick={closeMobileMenu}
                >
                  Blog
                </Link>
                <a 
                  href="https://calendly.com/auralixai/30min" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block px-6 py-4 border-2 border-cyan-400 text-cyan-300 rounded-lg hover:bg-cyan-400 hover:text-black transition-all font-semibold text-center mt-6"
                  onClick={closeMobileMenu}
                >
                  Book Consultation
                </a>
              </div>
            </div>
          )}
        </header>
        <main className="min-h-screen">{children}</main>
        
        {/* Professional Footer */}
        <footer className="w-full bg-[#0a0a0a] border-t border-[#222] py-12 mt-10">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              {/* Company Info */}
              <div className="col-span-1 md:col-span-2">
                <div className="mb-4">
                  <Logo width={160} height={50} className="drop-shadow-glow" />
                </div>
                <p className="text-gray-300 mb-6 max-w-md text-sm md:text-base">
                  Enterprise-grade AI automation solutions that scale with your business. 
                  From startup to enterprise, we deliver intelligent automation that drives results.
                </p>
                <div className="flex gap-4">
                  <a href="https://linkedin.com/company/auralix-ai" className="text-gray-400 hover:text-cyan-400 transition-colors p-2 rounded-lg hover:bg-[#1a1a1a]">
                    <FaLinkedin className="text-xl" />
                  </a>
                  <a href="https://twitter.com/auralix_ai" className="text-gray-400 hover:text-cyan-400 transition-colors p-2 rounded-lg hover:bg-[#1a1a1a]">
                    <FaTwitter className="text-xl" />
                  </a>
                  <a href="https://youtube.com/@auralix-ai" className="text-gray-400 hover:text-cyan-400 transition-colors p-2 rounded-lg hover:bg-[#1a1a1a]">
                    <FaYoutube className="text-xl" />
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Solutions</h3>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li><Link href="/solutions/small-business" className="hover:text-cyan-400 transition-colors block py-1">Small Business</Link></li>
                  <li><Link href="/solutions/mid-market" className="hover:text-cyan-400 transition-colors block py-1">Mid-Market</Link></li>
                  <li><Link href="/solutions/enterprise" className="hover:text-cyan-400 transition-colors block py-1">Enterprise</Link></li>
                  <li><Link href="/industries" className="hover:text-cyan-400 transition-colors block py-1">Industries</Link></li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li><Link href="/about-us" className="hover:text-cyan-400 transition-colors block py-1">About Us</Link></li>
                  <li><Link href="/blog" className="hover:text-cyan-400 transition-colors block py-1">Blog</Link></li>
                  <li><Link href="/careers" className="hover:text-cyan-400 transition-colors block py-1">Careers</Link></li>
                  <li><Link href="/contact" className="hover:text-cyan-400 transition-colors block py-1">Contact</Link></li>
                </ul>
              </div>
            </div>

            {/* Contact & Social */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 pt-8 border-t border-[#333]">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
                <div className="space-y-3 text-sm text-gray-300">
                  <div className="flex items-center gap-3">
                    <FaEnvelope className="text-cyan-400 flex-shrink-0" />
                    <span className="break-all">auralixai@gmail.com</span>
                  </div>
                  <div className="text-gray-400">
                    Halifax, Nova Scotia, Canada
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="https://linkedin.com/company/auralix-ai" className="text-gray-400 hover:text-cyan-400 transition-colors p-2 rounded-lg hover:bg-[#1a1a1a]">
                    <FaLinkedin className="text-xl" />
                  </a>
                  <a href="https://twitter.com/auralix_ai" className="text-gray-400 hover:text-cyan-400 transition-colors p-2 rounded-lg hover:bg-[#1a1a1a]">
                    <FaTwitter className="text-xl" />
                  </a>
                  <a href="https://youtube.com/@auralix-ai" className="text-gray-400 hover:text-cyan-400 transition-colors p-2 rounded-lg hover:bg-[#1a1a1a]">
                    <FaYoutube className="text-xl" />
                  </a>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-[#1a1a1a] rounded-lg p-6 mb-8">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="w-full md:w-auto">
                  <h3 className="text-lg font-semibold text-white mb-2">Stay Updated</h3>
                  <p className="text-sm text-gray-300">Get the latest AI automation insights and industry updates.</p>
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
                <FaShieldAlt className="text-green-400" />
                <span>SSL Secured</span>
              </div>
            </div>
          </div>
        </footer>
        
        {/* AI Chatbot */}
        <Chatbot />
      </body>
    </html>
  );
}
