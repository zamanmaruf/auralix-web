import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>AURALIX AI</title>
      </head>
      <body className="bg-[#0a0a0a] text-[#ededed] font-sans">
        <header className="sticky top-0 z-50 w-full bg-[#0a0a0a] bg-opacity-95 border-b border-[#1a1a1a] shadow-lg">
          <nav className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
            <div className="flex-1 flex items-center">
              <Link href="/" className="text-2xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-glow select-none">
                AURALIX AI
              </Link>
            </div>
            <div className="flex-1 flex justify-end gap-10 text-lg items-center">
              <Link href="/automate-with-ai" className="hover:text-cyan-400 transition-colors">Automate with <span className="text-cyan-400">AI</span></Link>
              <Link href="/pricing" className="hover:text-cyan-400 transition-colors">Pricing</Link>
              <Link href="/about-us" className="hover:text-cyan-400 transition-colors">About Us</Link>
              <a href="#contact" className="ml-2 px-5 py-2 border-2 border-cyan-400 text-cyan-300 rounded-lg hover:bg-cyan-400 hover:text-black transition-all font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2">Get Started</a>
            </div>
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
