'use client';
import { MdRestaurant, MdLocalHospital, MdStore, MdContentCut } from 'react-icons/md';
import { FaIndustry, FaGraduationCap, FaChartBar, FaCar, FaHome } from 'react-icons/fa';

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a2a3a] via-[#0a2233] to-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-cyan-300">Industries We Serve</h1>
        <p className="text-xl md:text-2xl text-cyan-100 mb-8">Tailored AI automation solutions for businesses across Nova Scotia and beyond.</p>
        <p className="text-gray-300">From restaurants to healthcare, we help local businesses thrive with intelligent automation.</p>
      </section>

      {/* Industries Grid */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Restaurants & Food Service */}
          <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
            <MdRestaurant className="text-5xl mb-4 text-cyan-400" />
            <h3 className="text-xl font-bold text-white mb-4">Restaurants & Food Service</h3>
            <p className="text-gray-300 mb-6">Streamline operations, improve customer service, and boost efficiency in your restaurant or food service business.</p>
            <ul className="space-y-2 text-gray-300 mb-6">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Automated order management</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Customer feedback systems</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Inventory optimization</span>
              </li>
            </ul>
            <a href="/contact" className="inline-block px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-lg transition-all duration-200">
              Learn More
            </a>
          </div>

          {/* Healthcare */}
          <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
            <MdLocalHospital className="text-5xl mb-4 text-cyan-400" />
            <h3 className="text-xl font-bold text-white mb-4">Healthcare & Clinics</h3>
            <p className="text-gray-300 mb-6">Enhance patient care, streamline administrative tasks, and improve operational efficiency in healthcare settings.</p>
            <ul className="space-y-2 text-gray-300 mb-6">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Appointment scheduling automation</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Patient communication systems</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Medical record management</span>
              </li>
            </ul>
            <a href="/contact" className="inline-block px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-lg transition-all duration-200">
              Learn More
            </a>
          </div>

          {/* Retail */}
          <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
            <MdStore className="text-5xl mb-4 text-cyan-400" />
            <h3 className="text-xl font-bold text-white mb-4">Retail & E-commerce</h3>
            <p className="text-gray-300 mb-6">Optimize inventory, enhance customer experience, and drive sales with intelligent retail automation.</p>
            <ul className="space-y-2 text-gray-300 mb-6">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Inventory management systems</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Customer service chatbots</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Sales analytics dashboards</span>
              </li>
            </ul>
            <a href="/contact" className="inline-block px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-lg transition-all duration-200">
              Learn More
            </a>
          </div>

          {/* Professional Services */}
          <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
            <FaGraduationCap className="text-5xl mb-4 text-cyan-400" />
            <h3 className="text-xl font-bold text-white mb-4">Professional Services</h3>
            <p className="text-gray-300 mb-6">Streamline client management, automate routine tasks, and focus on delivering exceptional service.</p>
            <ul className="space-y-2 text-gray-300 mb-6">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Client relationship management</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Document automation</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Billing and invoicing systems</span>
              </li>
            </ul>
            <a href="/contact" className="inline-block px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-lg transition-all duration-200">
              Learn More
            </a>
          </div>

          {/* Manufacturing */}
          <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
            <FaIndustry className="text-5xl mb-4 text-cyan-400" />
            <h3 className="text-xl font-bold text-white mb-4">Manufacturing</h3>
            <p className="text-gray-300 mb-6">Optimize production processes, improve quality control, and enhance operational efficiency.</p>
            <ul className="space-y-2 text-gray-300 mb-6">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Production monitoring systems</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Quality control automation</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Supply chain optimization</span>
              </li>
            </ul>
            <a href="/contact" className="inline-block px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-lg transition-all duration-200">
              Learn More
            </a>
          </div>

          {/* Real Estate */}
          <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
            <FaHome className="text-5xl mb-4 text-cyan-400" />
            <h3 className="text-xl font-bold text-white mb-4">Real Estate</h3>
            <p className="text-gray-300 mb-6">Streamline property management, enhance client communication, and automate routine tasks.</p>
            <ul className="space-y-2 text-gray-300 mb-6">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Property listing automation</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Client communication systems</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Lead management automation</span>
              </li>
            </ul>
            <a href="/contact" className="inline-block px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-lg transition-all duration-200">
              Learn More
            </a>
          </div>

          {/* Automotive */}
          <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
            <FaCar className="text-5xl mb-4 text-cyan-400" />
            <h3 className="text-xl font-bold text-white mb-4">Automotive Services</h3>
            <p className="text-gray-300 mb-6">Optimize service scheduling, improve customer communication, and streamline operations.</p>
            <ul className="space-y-2 text-gray-300 mb-6">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Service appointment automation</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Customer notification systems</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Parts inventory management</span>
              </li>
            </ul>
            <a href="/contact" className="inline-block px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-lg transition-all duration-200">
              Learn More
            </a>
          </div>

          {/* Beauty & Wellness */}
          <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
            <MdContentCut className="text-5xl mb-4 text-cyan-400" />
            <h3 className="text-xl font-bold text-white mb-4">Beauty & Wellness</h3>
            <p className="text-gray-300 mb-6">Enhance client experience, streamline booking processes, and grow your beauty or wellness business.</p>
            <ul className="space-y-2 text-gray-300 mb-6">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Appointment booking automation</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Client management systems</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Marketing automation</span>
              </li>
            </ul>
            <a href="/contact" className="inline-block px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-lg transition-all duration-200">
              Learn More
            </a>
          </div>

          {/* Technology */}
          <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
            <FaChartBar className="text-5xl mb-4 text-cyan-400" />
            <h3 className="text-xl font-bold text-white mb-4">Technology & Startups</h3>
            <p className="text-gray-300 mb-6">Scale your operations, automate customer support, and focus on innovation and growth.</p>
            <ul className="space-y-2 text-gray-300 mb-6">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Customer support automation</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Product analytics dashboards</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <span>Lead generation systems</span>
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
              <h3 className="text-xl font-bold text-white mb-2">Nova Scotia Restaurant Chain</h3>
              <p className="text-gray-300 mb-2">&quot;Auralix AI helped us automate our order management system, reducing manual errors by 85% and improving customer satisfaction significantly.&quot;</p>
              <p className="text-cyan-400 font-semibold">- Sarah Johnson, Operations Manager</p>
            </div>
            <div className="border-l-4 border-cyan-400 pl-6">
              <h3 className="text-xl font-bold text-white mb-2">Halifax Medical Clinic</h3>
              <p className="text-gray-300 mb-2">&quot;The automated appointment system has streamlined our scheduling process and reduced no-shows by 40%. Our staff can focus more on patient care.&quot;</p>
              <p className="text-cyan-400 font-semibold">- Dr. Michael Chen, Clinic Director</p>
            </div>
            <div className="border-l-4 border-cyan-400 pl-6">
              <h3 className="text-xl font-bold text-white mb-2">Dartmouth Retail Store</h3>
              <p className="text-gray-300 mb-2">&quot;Our inventory management automation has saved us countless hours and helped us reduce stockouts by 60%. Sales have increased by 25%.&quot;</p>
              <p className="text-cyan-400 font-semibold">- Lisa Thompson, Store Owner</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto py-16 px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
        <p className="text-xl text-gray-300 mb-8">No matter your industry, we have the AI automation solutions to help your business thrive.</p>
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