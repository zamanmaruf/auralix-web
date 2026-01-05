'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from '@/components/Logo';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [trustOpen, setTrustOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const productRef = useRef<HTMLDivElement>(null);
  const industriesRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);
  const companyRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (productRef.current && !productRef.current.contains(event.target as Node)) {
        setProductOpen(false);
      }
      if (industriesRef.current && !industriesRef.current.contains(event.target as Node)) {
        setIndustriesOpen(false);
      }
      if (trustRef.current && !trustRef.current.contains(event.target as Node)) {
        setTrustOpen(false);
      }
      if (companyRef.current && !companyRef.current.contains(event.target as Node)) {
        setCompanyOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const closeMobileMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0a0a0a]/80 backdrop-blur-md border-b border-[#1a1a1a]/50 shadow-lg" role="banner">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-4" role="navigation" aria-label="Main navigation">
        <Link href="/" className="flex items-center" aria-label="Auralix AI Home">
          <Logo width={70} height={25} className="drop-shadow-glow" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6 text-base">
          {/* Product Dropdown */}
          <div className="relative" ref={productRef}>
            <button
              onClick={() => setProductOpen(!productOpen)}
              className="flex items-center gap-1 hover:text-primary-400 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded px-2 py-1"
              aria-expanded={productOpen}
              aria-haspopup="true"
            >
              Product
              <ChevronDown className={`w-4 h-4 transition-transform ${productOpen ? 'rotate-180' : ''}`} />
            </button>
            {productOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg shadow-xl py-2 z-50">
                <Link
                  href="/product"
                  className="block px-4 py-2 text-sm hover:bg-[#1a1a1a] hover:text-primary-400 transition-colors"
                  onClick={() => setProductOpen(false)}
                >
                  Overview
                </Link>
                <Link
                  href="/how-it-works"
                  className="block px-4 py-2 text-sm hover:bg-[#1a1a1a] hover:text-primary-400 transition-colors"
                  onClick={() => setProductOpen(false)}
                >
                  How it works
                </Link>
                <Link
                  href="/features"
                  className="block px-4 py-2 text-sm hover:bg-[#1a1a1a] hover:text-primary-400 transition-colors"
                  onClick={() => setProductOpen(false)}
                >
                  Features
                </Link>
              </div>
            )}
          </div>

          {/* Industries Dropdown */}
          <div className="relative" ref={industriesRef}>
            <button
              onClick={() => setIndustriesOpen(!industriesOpen)}
              className="flex items-center gap-1 hover:text-primary-400 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded px-2 py-1"
              aria-expanded={industriesOpen}
              aria-haspopup="true"
            >
              Industries
              <ChevronDown className={`w-4 h-4 transition-transform ${industriesOpen ? 'rotate-180' : ''}`} />
            </button>
            {industriesOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg shadow-xl py-2 z-50">
                <Link
                  href="/industries"
                  className="block px-4 py-2 text-sm hover:bg-[#1a1a1a] hover:text-primary-400 transition-colors"
                  onClick={() => setIndustriesOpen(false)}
                >
                  All Industries
                </Link>
                <div className="border-t border-[#1a1a1a] my-1" />
                <Link
                  href="/industries/home-services"
                  className="block px-4 py-2 text-sm hover:bg-[#1a1a1a] hover:text-primary-400 transition-colors"
                  onClick={() => setIndustriesOpen(false)}
                >
                  Home Services
                </Link>
                <Link
                  href="/industries/clinics"
                  className="block px-4 py-2 text-sm hover:bg-[#1a1a1a] hover:text-primary-400 transition-colors"
                  onClick={() => setIndustriesOpen(false)}
                >
                  Clinics & Wellness
                </Link>
                <Link
                  href="/industries/restaurants"
                  className="block px-4 py-2 text-sm hover:bg-[#1a1a1a] hover:text-primary-400 transition-colors"
                  onClick={() => setIndustriesOpen(false)}
                >
                  Restaurants
                </Link>
                <Link
                  href="/industries/property-management"
                  className="block px-4 py-2 text-sm hover:bg-[#1a1a1a] hover:text-primary-400 transition-colors"
                  onClick={() => setIndustriesOpen(false)}
                >
                  Property Management
                </Link>
                <Link
                  href="/industries/professional-services"
                  className="block px-4 py-2 text-sm hover:bg-[#1a1a1a] hover:text-primary-400 transition-colors"
                  onClick={() => setIndustriesOpen(false)}
                >
                  Professional Services
                </Link>
                <Link
                  href="/industries/other"
                  className="block px-4 py-2 text-sm hover:bg-[#1a1a1a] hover:text-primary-400 transition-colors"
                  onClick={() => setIndustriesOpen(false)}
                >
                  Other
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/integrations"
            className="hover:text-primary-400 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded px-2 py-1"
          >
            Integrations
          </Link>

          <Link
            href="/pricing"
            className="hover:text-primary-400 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded px-2 py-1"
          >
            Pricing
          </Link>

          {/* Trust Dropdown */}
          <div className="relative" ref={trustRef}>
            <button
              onClick={() => setTrustOpen(!trustOpen)}
              className="flex items-center gap-1 hover:text-primary-400 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded px-2 py-1"
              aria-expanded={trustOpen}
              aria-haspopup="true"
            >
              Trust
              <ChevronDown className={`w-4 h-4 transition-transform ${trustOpen ? 'rotate-180' : ''}`} />
            </button>
            {trustOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg shadow-xl py-2 z-50">
                <Link
                  href="/trust"
                  className="block px-4 py-2 text-sm hover:bg-[#1a1a1a] hover:text-primary-400 transition-colors"
                  onClick={() => setTrustOpen(false)}
                >
                  Trust Center
                </Link>
                <Link
                  href="/trust/security"
                  className="block px-4 py-2 text-sm hover:bg-[#1a1a1a] hover:text-primary-400 transition-colors"
                  onClick={() => setTrustOpen(false)}
                >
                  Security
                </Link>
                <Link
                  href="/trust/privacy"
                  className="block px-4 py-2 text-sm hover:bg-[#1a1a1a] hover:text-primary-400 transition-colors"
                  onClick={() => setTrustOpen(false)}
                >
                  Privacy
                </Link>
                <Link
                  href="/trust/terms"
                  className="block px-4 py-2 text-sm hover:bg-[#1a1a1a] hover:text-primary-400 transition-colors"
                  onClick={() => setTrustOpen(false)}
                >
                  Terms
                </Link>
              </div>
            )}
          </div>

          {/* Company Dropdown */}
          <div className="relative" ref={companyRef}>
            <button
              onClick={() => setCompanyOpen(!companyOpen)}
              className="flex items-center gap-1 hover:text-primary-400 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded px-2 py-1"
              aria-expanded={companyOpen}
              aria-haspopup="true"
            >
              Company
              <ChevronDown className={`w-4 h-4 transition-transform ${companyOpen ? 'rotate-180' : ''}`} />
            </button>
            {companyOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg shadow-xl py-2 z-50">
                <Link
                  href="/company/about"
                  className="block px-4 py-2 text-sm hover:bg-[#1a1a1a] hover:text-primary-400 transition-colors"
                  onClick={() => setCompanyOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="block px-4 py-2 text-sm hover:bg-[#1a1a1a] hover:text-primary-400 transition-colors"
                  onClick={() => setCompanyOpen(false)}
                >
                  Contact
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white hover:text-primary-400 p-3 rounded-lg hover:bg-[#1a1a1a] transition-all focus:outline-none focus:ring-2 focus:ring-primary-500 min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Toggle mobile menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#0a0a0a] border-t border-[#1a1a1a] shadow-lg">
          <div className="px-6 py-8 space-y-4">
            <div>
              <Link href="/product" className="block text-lg py-3 hover:text-primary-400 transition-colors" onClick={closeMobileMenu}>
                Product Overview
              </Link>
              <Link href="/how-it-works" className="block text-base py-2 pl-4 text-neutral-400 hover:text-primary-400 transition-colors" onClick={closeMobileMenu}>
                How it works
              </Link>
              <Link href="/features" className="block text-base py-2 pl-4 text-neutral-400 hover:text-primary-400 transition-colors" onClick={closeMobileMenu}>
                Features
              </Link>
            </div>
            <div>
              <Link href="/industries" className="block text-lg py-3 hover:text-primary-400 transition-colors" onClick={closeMobileMenu}>
                Industries
              </Link>
              <Link href="/industries/home-services" className="block text-base py-2 pl-4 text-neutral-400 hover:text-primary-400 transition-colors" onClick={closeMobileMenu}>
                Home Services
              </Link>
              <Link href="/industries/clinics" className="block text-base py-2 pl-4 text-neutral-400 hover:text-primary-400 transition-colors" onClick={closeMobileMenu}>
                Clinics & Wellness
              </Link>
              <Link href="/industries/restaurants" className="block text-base py-2 pl-4 text-neutral-400 hover:text-primary-400 transition-colors" onClick={closeMobileMenu}>
                Restaurants
              </Link>
              <Link href="/industries/property-management" className="block text-base py-2 pl-4 text-neutral-400 hover:text-primary-400 transition-colors" onClick={closeMobileMenu}>
                Property Management
              </Link>
              <Link href="/industries/professional-services" className="block text-base py-2 pl-4 text-neutral-400 hover:text-primary-400 transition-colors" onClick={closeMobileMenu}>
                Professional Services
              </Link>
              <Link href="/industries/other" className="block text-base py-2 pl-4 text-neutral-400 hover:text-primary-400 transition-colors" onClick={closeMobileMenu}>
                Other
              </Link>
            </div>
            <Link href="/integrations" className="block text-lg py-3 hover:text-primary-400 transition-colors border-t border-[#333] pt-4" onClick={closeMobileMenu}>
              Integrations
            </Link>
            <Link href="/pricing" className="block text-lg py-3 hover:text-primary-400 transition-colors" onClick={closeMobileMenu}>
              Pricing
            </Link>
            <div>
              <Link href="/trust" className="block text-lg py-3 hover:text-primary-400 transition-colors" onClick={closeMobileMenu}>
                Trust
              </Link>
              <Link href="/trust/security" className="block text-base py-2 pl-4 text-neutral-400 hover:text-primary-400 transition-colors" onClick={closeMobileMenu}>
                Security
              </Link>
              <Link href="/trust/privacy" className="block text-base py-2 pl-4 text-neutral-400 hover:text-primary-400 transition-colors" onClick={closeMobileMenu}>
                Privacy
              </Link>
              <Link href="/trust/terms" className="block text-base py-2 pl-4 text-neutral-400 hover:text-primary-400 transition-colors" onClick={closeMobileMenu}>
                Terms
              </Link>
            </div>
            <div>
              <Link href="/company/about" className="block text-lg py-3 hover:text-primary-400 transition-colors" onClick={closeMobileMenu}>
                About
              </Link>
              <Link href="/contact" className="block text-lg py-3 hover:text-primary-400 transition-colors" onClick={closeMobileMenu}>
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
