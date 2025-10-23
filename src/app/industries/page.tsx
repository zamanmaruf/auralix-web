'use client';
import { MdRestaurant, MdLocalHospital, MdStore, MdContentCut } from 'react-icons/md';
import { FaIndustry, FaGraduationCap, FaChartBar, FaCar, FaHome } from 'react-icons/fa';

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a2a3a] via-[#0a2233] to-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-cyan-300">Built Exclusively for Restaurants — Serving Canada Coast-to-Coast</h1>
        <p className="text-xl md:text-2xl text-cyan-100 mb-8">Tailored AI automation solutions for Canadian restaurants.</p>
        <p className="text-gray-300">Auralix AI helps Canadian restaurants recover thousands in missed calls and orders every month.</p>
      </section>

      {/* Restaurant Categories Grid */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Full-Service Restaurants */}
          <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
            <MdRestaurant className="text-5xl mb-4 text-cyan-400" />
            <h3 className="text-xl font-bold text-white mb-4">Full-Service Restaurants</h3>
            <p className="text-gray-300 mb-6">Never miss a reservation or order. Our AI receptionist handles calls, bookings, and customer inquiries 24/7.</p>
            <ul className="space-y-2 text-gray-300 mb-6">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>AI receptionist for reservations</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Automated order taking</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Review collection automation</span>
              </li>
            </ul>
            <a href="/contact" className="inline-block px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-lg transition-all duration-200">
              Learn More
            </a>
          </div>

          {/* Cafés & Coffee Shops */}
          <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
            <MdStore className="text-5xl mb-4 text-cyan-400" />
            <h3 className="text-xl font-bold text-white mb-4">Cafés & Coffee Shops</h3>
            <p className="text-gray-300 mb-6">Streamline your morning rush with AI that takes orders, manages pickups, and handles customer inquiries.</p>
            <ul className="space-y-2 text-gray-300 mb-6">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Order automation for busy periods</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Pickup notification systems</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Customer feedback automation</span>
              </li>
            </ul>
            <a href="/contact" className="inline-block px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-lg transition-all duration-200">
              Learn More
            </a>
          </div>

          {/* Pizzerias & Italian */}
          <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
            <FaIndustry className="text-5xl mb-4 text-cyan-400" />
            <h3 className="text-xl font-bold text-white mb-4">Pizzerias & Italian</h3>
            <p className="text-gray-300 mb-6">Handle high-volume orders and delivery requests with AI that never gets overwhelmed during peak times.</p>
            <ul className="space-y-2 text-gray-300 mb-6">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>High-volume order management</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Delivery time automation</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Custom order handling</span>
              </li>
            </ul>
            <a href="/contact" className="inline-block px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-lg transition-all duration-200">
              Learn More
            </a>
          </div>

          {/* Bars & Breweries */}
          <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
            <FaHome className="text-5xl mb-4 text-cyan-400" />
            <h3 className="text-xl font-bold text-white mb-4">Bars & Breweries</h3>
            <p className="text-gray-300 mb-6">Manage reservations, private events, and customer inquiries with AI that understands your bar's unique needs.</p>
            <ul className="space-y-2 text-gray-300 mb-6">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Event booking automation</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Private party management</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Customer inquiry handling</span>
              </li>
            </ul>
            <a href="/contact" className="inline-block px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-lg transition-all duration-200">
              Learn More
            </a>
          </div>

          {/* Takeout & Delivery */}
          <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
            <FaCar className="text-5xl mb-4 text-cyan-400" />
            <h3 className="text-xl font-bold text-white mb-4">Takeout & Delivery</h3>
            <p className="text-gray-300 mb-6">Optimize your delivery operations with AI that manages orders, tracks deliveries, and communicates with customers.</p>
            <ul className="space-y-2 text-gray-300 mb-6">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Delivery order automation</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Customer notification systems</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Order tracking automation</span>
              </li>
            </ul>
            <a href="/contact" className="inline-block px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-lg transition-all duration-200">
              Learn More
            </a>
          </div>

          {/* Catering Services */}
          <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
            <MdContentCut className="text-5xl mb-4 text-cyan-400" />
            <h3 className="text-xl font-bold text-white mb-4">Catering Services</h3>
            <p className="text-gray-300 mb-6">Streamline event planning and customer communication with AI that handles inquiries and manages bookings.</p>
            <ul className="space-y-2 text-gray-300 mb-6">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Event booking automation</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Menu consultation handling</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Customer follow-up automation</span>
              </li>
            </ul>
            <a href="/contact" className="inline-block px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-lg transition-all duration-200">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="max-w-4xl mx-auto py-16 px-4">
        <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Success Stories</h2>
          <div className="space-y-8">
            <div className="border-l-4 border-cyan-400 pl-6">
              <h3 className="text-xl font-bold text-white mb-2">Halifax Restaurant Chain</h3>
              <p className="text-gray-300 mb-2">&quot;Auralix AI helped us never miss a call again. Our bookings increased 40%, admin workload dropped 60%, and monthly revenue climbed 25%.&quot;</p>
              <p className="text-cyan-400 font-semibold">- Sarah Johnson, Operations Manager</p>
            </div>
            <div className="border-l-4 border-cyan-400 pl-6">
              <h3 className="text-xl font-bold text-white mb-2">Dartmouth Café</h3>
              <p className="text-gray-300 mb-2">&quot;The AI receptionist handles our morning rush perfectly. We never miss an order during peak hours, and customer satisfaction has improved dramatically.&quot;</p>
              <p className="text-cyan-400 font-semibold">- Mike Chen, Café Owner</p>
            </div>
            <div className="border-l-4 border-cyan-400 pl-6">
              <h3 className="text-xl font-bold text-white mb-2">Halifax Pizzeria</h3>
              <p className="text-gray-300 mb-2">&quot;Our AI handles high-volume orders during dinner rush without breaking a sweat. We've recovered thousands in previously missed orders.&quot;</p>
              <p className="text-cyan-400 font-semibold">- Lisa Thompson, Restaurant Owner</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto py-16 px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Restaurant?</h2>
        <p className="text-xl text-gray-300 mb-8">No matter your restaurant type, we have the AI automation solutions to help you never miss a call or order again.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-lg transition-all duration-200"
          >
            Get Started Today
          </a>
          <a
            href="/trial"
            className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold rounded-lg transition-all duration-200"
          >
            Start Free Trial
          </a>
        </div>
      </section>
    </div>
  );
}