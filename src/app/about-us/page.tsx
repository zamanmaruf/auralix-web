'use client';
import { FaShieldAlt, FaUsers, FaChartLine } from "react-icons/fa";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-[#0a2a3a] to-[#0a0a0a]">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Building the Future of Intelligent Business Systems
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            From the neighborhood to the enterprise, we empower companies to unlock real-time efficiency, 
            customer intelligence, and operational transformation using modular, secure, and practical AI automation.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <FaShieldAlt className="text-green-400" />
              <span>SOC 2 Ready</span>
            </div>
            <div className="flex items-center gap-2">
              <FaUsers className="text-blue-400" />
              <span>100+ Clients Served</span>
            </div>
            <div className="flex items-center gap-2">
              <FaChartLine className="text-purple-400" />
              <span>97% Success Rate</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-cyan-300 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-300 mb-6">
                We democratize enterprise-grade AI by designing intelligent systems that help businesses 
                of all sizes—from independent cafes to multi-location operations—automate workflows, 
                serve customers smarter, and make better decisions powered by real-time insights.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                We prioritize practical deployment, measurable outcomes, and scalable architecture 
                tailored to each business's stage and size.
              </p>
              <div className="bg-[#1a1a1a] rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Our Core Belief</h3>
                <p className="text-gray-300">
                  The future of AI is not just smart—it's accessible, actionable, and accountable.
                </p>
              </div>
            </div>
            <div className="bg-[#1a1a1a] rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-blue-400 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-300 mb-6">
                We are building the most trusted AI automation partner for modern businesses—whether 
                you're running a single storefront or scaling operations across regions.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-white">Full-Stack Enterprise AI</h4>
                    <p className="text-sm text-gray-300">Design intelligent workflows, train business-specific models, and deploy systems that grow with your brand.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-white">Cross-Industry Solutions</h4>
                    <p className="text-sm text-gray-300">From restaurants and retailers to law firms and logistics.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-white">Scalable Intelligence</h4>
                    <p className="text-sm text-gray-300">From one store to thousands, one workflow to dozens.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founding Story */}
      <section className="py-20 px-4 bg-[#111]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-orange-400 mb-4">The Auralix Story</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Founded in Nova Scotia by Computer Science graduates, Auralix AI was born from a simple 
              but urgent observation: while large enterprises were rapidly adopting AI, local businesses 
              were left behind.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-[#1a1a1a] rounded-xl p-8">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">The Problem We Solved</h3>
              <p className="text-gray-300 mb-4">
                We noticed that small and medium businesses were struggling with the same operational 
                challenges that AI could solve—customer service bottlenecks, manual data entry, 
                inefficient scheduling, and lack of actionable insights.
              </p>
              <p className="text-gray-300 mb-4">
                But existing AI solutions were either too expensive, too complex, or too generic 
                for their specific needs. They needed enterprise-grade AI that was accessible, 
                practical, and designed for their unique business requirements.
              </p>
              <div className="bg-[#0a2a3a] rounded-lg p-4">
                <p className="text-sm text-cyan-300 font-semibold">
                  "We believe every business deserves access to intelligent automation, regardless of size."
                </p>
              </div>
            </div>
            
            <div className="bg-[#1a1a1a] rounded-xl p-8">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Our Approach</h3>
              <p className="text-gray-300 mb-4">
                Instead of building one-size-fits-all solutions, we created a modular AI platform 
                that could be customized for different industries and business sizes.
              </p>
              <p className="text-gray-300 mb-4">
                We started with local businesses in Nova Scotia—restaurants, salons, retail stores—and 
                worked closely with them to understand their specific pain points and operational needs.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">Industry-specific AI models</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">Scalable architecture</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">Practical implementation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Meet Our Founders</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Two Computer Science graduates with a shared vision of democratizing AI for businesses of all sizes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Founder 1 */}
            <div className="bg-[#1a1a1a] rounded-xl p-8">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">MU</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Md Maruf Uzzaman</h3>
                <p className="text-cyan-400 font-semibold">Co-Founder & CEO</p>
              </div>
              <p className="text-gray-300 mb-4">
                A Computer Science graduate with expertise in machine learning and software architecture. 
                Maruf leads our technical vision and product development, ensuring our AI solutions 
                are both powerful and practical.
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Machine Learning & AI</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Software Architecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Product Strategy</span>
                </div>
              </div>
            </div>
            
            {/* Founder 2 */}
            <div className="bg-[#1a1a1a] rounded-xl p-8">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">FI</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Fardeenul Islam</h3>
                <p className="text-purple-400 font-semibold">Co-Founder & CTO</p>
              </div>
              <p className="text-gray-300 mb-4">
                A Computer Science graduate specializing in artificial intelligence and business systems. 
                Fardeen drives our technical innovation and ensures our solutions deliver measurable 
                business outcomes.
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <span className="text-purple-400">•</span>
                  <span>Artificial Intelligence</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-purple-400">•</span>
                  <span>Business Systems</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-purple-400">•</span>
                  <span>Technical Innovation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founding Philosophy */}
      <section className="py-20 px-4 bg-[#111]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-400 mb-4">Our Founding Philosophy</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We believe that AI should work for businesses, not the other way around.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <FaShieldAlt className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Practical First</h3>
              <p className="text-gray-300">
                We focus on real-world problems and measurable outcomes, not just cutting-edge technology.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <FaUsers className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Customer-Centric</h3>
              <p className="text-gray-300">
                Every solution is designed around the specific needs and workflows of our customers.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <FaChartLine className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Scalable Growth</h3>
              <p className="text-gray-300">
                Our solutions grow with your business, from startup to enterprise scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses that have already automated their operations with Auralix AI. 
            Start your journey toward intelligent automation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/trial" className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-lg transition-all duration-200 shadow-lg">
              Start Free Trial
            </a>
            <a href="/solutions" className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold rounded-lg transition-all duration-200">
              Explore Solutions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}