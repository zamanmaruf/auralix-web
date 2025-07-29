import "./globals.css";
import Link from "next/link";
import { FaLinkedin, FaTwitter, FaYoutube, FaShieldAlt, FaEnvelope, FaPhone } from "react-icons/fa";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Auralix AI - Enterprise AI Automation Solutions</title>
        <meta name="description" content="AI Automation That Scales With You — From Startup to Enterprise. Revolutionizing business operations with enterprise-grade AI solutions." />
        <meta name="keywords" content="AI automation, enterprise solutions, business intelligence, workflow automation, Nova Scotia, Halifax" />
      </head>
      <body className="bg-[#0a0a0a] text-[#ededed] font-sans">
        <header className="sticky top-0 z-50 w-full bg-[#0a0a0a] bg-opacity-95 border-b border-[#1a1a1a] shadow-lg backdrop-blur-sm">
          <nav className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
            <div className="flex-1 flex items-center">
              <Link href="/" className="text-2xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-glow select-none">
                AURALIX AI
              </Link>
            </div>
            <div className="hidden md:flex flex-1 justify-end gap-8 text-lg items-center">
              <Link href="/solutions" className="hover:text-cyan-400 transition-colors">Solutions</Link>
              <Link href="/pricing" className="hover:text-cyan-400 transition-colors">Pricing</Link>
              <Link href="/about-us" className="hover:text-cyan-400 transition-colors">About Us</Link>
              <Link href="/blog" className="hover:text-cyan-400 transition-colors">Blog</Link>
              <a href="#contact" className="ml-2 px-5 py-2 border-2 border-cyan-400 text-cyan-300 rounded-lg hover:bg-cyan-400 hover:text-black transition-all font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2">Get Started</a>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-white hover:text-cyan-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        
        {/* Professional Footer */}
        <footer className="w-full bg-[#0a0a0a] border-t border-[#222] py-12 mt-10">
          <div className="max-w-7xl mx-auto px-6">
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              {/* Company Info */}
              <div className="col-span-1 md:col-span-2">
                <div className="text-2xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
                  AURALIX AI
                </div>
                <p className="text-gray-300 mb-4 max-w-md">
                  Empowering service businesses with AI tools once reserved for tech giants. 
                  From startup to enterprise, we scale with you.
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <FaShieldAlt className="text-green-400" />
                    <span>SOC 2 Ready</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaShieldAlt className="text-blue-400" />
                    <span>GDPR Compliant</span>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Solutions</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li><Link href="/solutions/small-business" className="hover:text-cyan-400 transition-colors">Small Business</Link></li>
                  <li><Link href="/solutions/mid-market" className="hover:text-cyan-400 transition-colors">Mid-Market</Link></li>
                  <li><Link href="/solutions/enterprise" className="hover:text-cyan-400 transition-colors">Enterprise</Link></li>
                  <li><Link href="/industries" className="hover:text-cyan-400 transition-colors">Industries</Link></li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li><Link href="/about-us" className="hover:text-cyan-400 transition-colors">About Us</Link></li>
                  <li><Link href="/blog" className="hover:text-cyan-400 transition-colors">Blog</Link></li>
                  <li><Link href="/careers" className="hover:text-cyan-400 transition-colors">Careers</Link></li>
                  <li><Link href="/contact" className="hover:text-cyan-400 transition-colors">Contact</Link></li>
                </ul>
              </div>
            </div>

            {/* Contact & Social */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 pt-8 border-t border-[#333]">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex items-center gap-2">
                    <FaEnvelope className="text-cyan-400" />
                    <span>auralixai@gmail.com</span>
                  </div>
                  <div className="text-gray-400">
                    Halifax, Nova Scotia, Canada
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="https://linkedin.com/company/auralix-ai" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    <FaLinkedin className="text-xl" />
                  </a>
                  <a href="https://twitter.com/auralix_ai" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    <FaTwitter className="text-xl" />
                  </a>
                  <a href="https://youtube.com/@auralix-ai" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    <FaYoutube className="text-xl" />
                  </a>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-[#1a1a1a] rounded-lg p-6 mb-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Stay Updated</h3>
                  <p className="text-sm text-gray-300">Get the latest AI automation insights and industry updates.</p>
                </div>
                <div className="flex gap-2 w-full md:w-auto">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-1 md:w-64 px-4 py-2 bg-[#333] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  />
                  <button className="px-6 py-2 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-lg transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Footer */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-[#333] text-sm text-gray-400">
              <div className="flex flex-wrap gap-6">
                <Link href="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-cyan-400 transition-colors">Terms of Service</Link>
                <Link href="/cookies" className="hover:text-cyan-400 transition-colors">Cookie Policy</Link>
                <Link href="/security" className="hover:text-cyan-400 transition-colors">Security</Link>
              </div>
              <div className="flex items-center gap-2">
                <FaShieldAlt className="text-green-400" />
                <span>SSL Secured</span>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
