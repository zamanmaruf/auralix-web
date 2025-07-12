import "./globals.css";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <html lang="en">
      <head>
        <title>AURALIX AI</title>
        <meta name="description" content="Affordable AI automation, chatbots, dashboards, and analytics for local businesses. Get a free quote today!" />
        <meta property="og:title" content="Auralix AI - AI Automation for Small Business" />
        <meta property="og:description" content="Affordable AI automation, chatbots, dashboards, and analytics for local businesses." />
        <meta property="og:image" content="/hero-ai-bg.jpg" />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Auralix AI - AI Automation for Small Business" />
        <meta name="twitter:description" content="Affordable AI automation, chatbots, dashboards, and analytics for local businesses." />
        <meta name="twitter:image" content="/hero-ai-bg.jpg" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Auralix AI",
          "url": "https://yourdomain.com",
          "logo": "https://yourdomain.com/logo.png",
          "description": "Affordable AI automation, chatbots, dashboards, and analytics for local businesses.",
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
        <header className="sticky top-0 z-50 w-full bg-[#0a0a0a] bg-opacity-95 border-b border-[#1a1a1a] shadow-lg">
          <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-4 relative">
            <div className="flex-1 flex items-center">
              <Link href="/" className="text-2xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-glow select-none">
                AURALIX AI
              </Link>
            </div>
            {/* Desktop Nav */}
            <div className="hidden md:flex flex-1 justify-end gap-10 text-lg items-center">
              <Link href="/automate-with-ai" className="hover:text-cyan-400 transition-colors">Automate with <span className="text-cyan-400">AI</span></Link>
              <Link href="/pricing" className="hover:text-cyan-400 transition-colors">Pricing</Link>
              <Link href="/about-us" className="hover:text-cyan-400 transition-colors">About Us</Link>
              <a href="#contact" className="ml-2 px-5 py-2 border-2 border-cyan-400 text-cyan-300 rounded-lg hover:bg-cyan-400 hover:text-black transition-all font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2">Get Started</a>
            </div>
            {/* Hamburger Icon */}
            <button className="md:hidden text-2xl text-cyan-300 focus:outline-none z-50" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
            {/* Mobile Menu */}
            {menuOpen && (
              <div className="fixed inset-0 bg-[#0a0a0a] bg-opacity-95 flex flex-col items-center justify-center gap-8 text-2xl text-cyan-200 z-40 transition-all">
                <Link href="/automate-with-ai" className="hover:text-cyan-400" onClick={() => setMenuOpen(false)}>Automate with <span className="text-cyan-400">AI</span></Link>
                <Link href="/pricing" className="hover:text-cyan-400" onClick={() => setMenuOpen(false)}>Pricing</Link>
                <Link href="/about-us" className="hover:text-cyan-400" onClick={() => setMenuOpen(false)}>About Us</Link>
                <a href="#contact" className="px-6 py-3 border-2 border-cyan-400 text-cyan-300 rounded-lg hover:bg-cyan-400 hover:text-black font-semibold shadow-md" onClick={() => setMenuOpen(false)}>Get Started</a>
              </div>
            )}
          </nav>
        </header>
        <main>{children}</main>
        <footer className="w-full bg-[#0a0a0a] border-t border-[#222] py-6 mt-10">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-4">
            <div className="text-lg font-bold tracking-widest text-teal-400">AURALIX AI</div>
            <div className="flex gap-6 text-sm text-cyan-200">
              <Link href="/automate-with-ai" className="hover:text-cyan-400">Automate with AI</Link>
              <Link href="/pricing" className="hover:text-cyan-400">Pricing</Link>
              <Link href="/about-us" className="hover:text-cyan-400">About Us</Link>
              <a href="#contact" className="hover:text-cyan-400">Get Started</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
