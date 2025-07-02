import { FaGlobe, FaSearchDollar, FaRobot, FaChartBar, FaCogs, FaGift } from "react-icons/fa";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a2a3a] via-[#0a2233] to-[#0a0a0a] text-white pb-20">
      {/* Hero Section */}
      <section className="max-w-3xl mx-auto text-center py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-cyan-300">Affordable AI-Powered Solutions for Small Businesses</h1>
        <p className="text-xl md:text-2xl text-cyan-100 mb-8">We make automation, websites, SEO, chatbots, and analytics accessible and cost-effective — built for Nova Scotia's local businesses. Choose a package that fits your growth stage.</p>
      </section>

      {/* Service-Based Pricing Cards */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 mb-20">
        {/* AI-Powered Websites */}
        <div className="bg-[#11202a] rounded-2xl p-8 flex flex-col items-center shadow-xl border border-cyan-700">
          <FaGlobe className="text-4xl text-cyan-400 mb-4" />
          <div className="font-bold text-lg mb-2">AI-Powered Websites</div>
          <div className="text-cyan-200 font-semibold mb-2">$1,500 – $3,000 <span className="text-xs">(one-time)</span></div>
          <ul className="text-cyan-100 text-sm mb-4 list-disc list-inside">
            <li>5–10 pages, booking system or e-commerce</li>
            <li>Mobile-optimized</li>
            <li>Optional: Monthly Maintenance ($50–$200)</li>
          </ul>
          <a href="#contact" className="px-6 py-2 bg-cyan-400 hover:bg-cyan-300 text-black font-bold rounded-full text-md shadow-lg transition-all duration-200">Get Quote</a>
        </div>
        {/* Local SEO */}
        <div className="bg-[#11202a] rounded-2xl p-8 flex flex-col items-center shadow-xl border border-cyan-700">
          <FaSearchDollar className="text-4xl text-cyan-400 mb-4" />
          <div className="font-bold text-lg mb-2">Local SEO</div>
          <div className="text-cyan-200 font-semibold mb-2">$500 – $2,500 <span className="text-xs">/month</span></div>
          <ul className="text-cyan-100 text-sm mb-4 list-disc list-inside">
            <li>On-page SEO, local citations, Google ranking boost</li>
            <li>Optional: SEO Audit ($500–$2,000 one-time)</li>
          </ul>
          <a href="#contact" className="px-6 py-2 bg-cyan-400 hover:bg-cyan-300 text-black font-bold rounded-full text-md shadow-lg transition-all duration-200">Get Quote</a>
        </div>
        {/* Business Process Automation */}
        <div className="bg-[#11202a] rounded-2xl p-8 flex flex-col items-center shadow-xl border border-cyan-700">
          <FaCogs className="text-4xl text-cyan-400 mb-4" />
          <div className="font-bold text-lg mb-2">Business Process Automation</div>
          <div className="text-cyan-200 font-semibold mb-2">$500 – $5,000 <span className="text-xs">(project-based)</span></div>
          <ul className="text-cyan-100 text-sm mb-4 list-disc list-inside">
            <li>Zapier/Make workflows, email automation, CRM triggers</li>
            <li>Maintenance: $100–$500/month</li>
          </ul>
          <a href="#contact" className="px-6 py-2 bg-cyan-400 hover:bg-cyan-300 text-black font-bold rounded-full text-md shadow-lg transition-all duration-200">Get Quote</a>
        </div>
        {/* Chatbots & Virtual Assistants */}
        <div className="bg-[#11202a] rounded-2xl p-8 flex flex-col items-center shadow-xl border border-cyan-700">
          <FaRobot className="text-4xl text-cyan-400 mb-4" />
          <div className="font-bold text-lg mb-2">Chatbots & Virtual Assistants</div>
          <div className="text-cyan-200 font-semibold mb-2">$500 – $1,500 <span className="text-xs">(setup)</span></div>
          <ul className="text-cyan-100 text-sm mb-4 list-disc list-inside">
            <li>Rule-based chatbot, basic AI FAQ automation</li>
            <li>Hosting/updates: $50–$200/month</li>
          </ul>
          <a href="#contact" className="px-6 py-2 bg-cyan-400 hover:bg-cyan-300 text-black font-bold rounded-full text-md shadow-lg transition-all duration-200">Get Quote</a>
        </div>
        {/* Analytics Dashboards */}
        <div className="bg-[#11202a] rounded-2xl p-8 flex flex-col items-center shadow-xl border border-cyan-700">
          <FaChartBar className="text-4xl text-cyan-400 mb-4" />
          <div className="font-bold text-lg mb-2">Analytics Dashboards</div>
          <div className="text-cyan-200 font-semibold mb-2">$500 – $2,000 <span className="text-xs">(one-time)</span></div>
          <ul className="text-cyan-100 text-sm mb-4 list-disc list-inside">
            <li>Sales/traffic dashboards, up to 3 data sources</li>
            <li>Support: $100–$300/month</li>
          </ul>
          <a href="#contact" className="px-6 py-2 bg-cyan-400 hover:bg-cyan-300 text-black font-bold rounded-full text-md shadow-lg transition-all duration-200">Get Quote</a>
        </div>
      </section>

      {/* Package Deal */}
      <section className="max-w-3xl mx-auto py-12 px-4 text-center">
        <div className="bg-gradient-to-r from-cyan-700 via-blue-700 to-cyan-900 rounded-2xl p-10 shadow-2xl border-2 border-cyan-400">
          <div className="flex flex-col items-center mb-4">
            <FaGift className="text-5xl text-yellow-300 mb-2" />
            <h2 className="text-2xl font-bold text-yellow-200 mb-2">Launch & Grow Package</h2>
            <div className="text-lg text-cyan-100 mb-2">$4,400 one-time + $600/month</div>
          </div>
          <ul className="text-cyan-100 text-base mb-4 list-disc list-inside text-left max-w-md mx-auto">
            <li>AI Website</li>
            <li>SEO Setup</li>
            <li>Chatbot Integration</li>
            <li>Analytics Dashboard</li>
            <li>Monthly Support Plan</li>
          </ul>
          <a href="#contact" className="px-8 py-3 bg-yellow-300 hover:bg-yellow-200 text-black font-bold rounded-full text-lg shadow-lg transition-all duration-200">Book a Free Consultation</a>
        </div>
      </section>

      {/* FAQs */}
      <section className="max-w-3xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold text-cyan-200 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="bg-[#181f2a] rounded-xl p-5 shadow-md">
            <div className="font-semibold text-cyan-300 mb-1">What if I just want a one-time project?</div>
            <div className="text-cyan-100 text-sm">Absolutely! We offer both one-time and ongoing solutions. You only pay for what you need.</div>
          </div>
          <div className="bg-[#181f2a] rounded-xl p-5 shadow-md">
            <div className="font-semibold text-cyan-300 mb-1">Are your prices fixed?</div>
            <div className="text-cyan-100 text-sm">Our pricing is transparent and tailored to your business needs. We provide clear quotes before starting any work.</div>
          </div>
          <div className="bg-[#181f2a] rounded-xl p-5 shadow-md">
            <div className="font-semibold text-cyan-300 mb-1">What kind of results can I expect?</div>
            <div className="text-cyan-100 text-sm">Most clients see time savings, increased bookings, and improved online presence within the first few months.</div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-200 mb-6">Ready to Automate & Scale Your Business?</h2>
        <a href="/automate-with-ai" className="px-10 py-4 bg-cyan-400 hover:bg-cyan-300 text-black font-bold rounded-full text-lg shadow-lg transition-all duration-200">
          Let's Talk AI &rarr;
        </a>
      </section>
    </div>
  );
} 