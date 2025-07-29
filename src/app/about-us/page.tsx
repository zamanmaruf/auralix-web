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
          
          <div className="bg-[#1a1a1a] rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">The Gap We Saw</h3>
            <p className="text-lg text-gray-300 mb-6">
              Local businesses were forced to choose between expensive vendor solutions or outdated manual processes. 
              We saw the gap and decided to build the bridge.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">$0</div>
                <div className="text-gray-300">AI Budget for Small Business</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">20+</div>
                <div className="text-gray-300">Hours Wasted Weekly</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
                <div className="text-gray-300">Manual Processes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Meet the Founders</h2>
            <p className="text-lg text-gray-300">
              The technical minds and strategic visionaries behind Auralix AI
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Maruf */}
            <div className="bg-[#1a1a1a] rounded-2xl p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Md Maruf Uzzaman</h3>
                <p className="text-cyan-400 font-semibold">Co-Founder & Chief Automation Strategist</p>
              </div>
              
              <div className="space-y-4 text-gray-300">
                <p>
                  A systems thinker, automation architect, and AI problem-solver with a bold vision—to make 
                  intelligent automation accessible to every business, regardless of size or budget.
                </p>
                
                <div>
                  <h4 className="font-semibold text-white mb-2">Technical Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-cyan-900 text-cyan-300 rounded-full text-sm">Data Science</span>
                    <span className="px-3 py-1 bg-cyan-900 text-cyan-300 rounded-full text-sm">Python</span>
                    <span className="px-3 py-1 bg-cyan-900 text-cyan-300 rounded-full text-sm">NLP</span>
                    <span className="px-3 py-1 bg-cyan-900 text-cyan-300 rounded-full text-sm">LangChain</span>
                    <span className="px-3 py-1 bg-cyan-900 text-cyan-300 rounded-full text-sm">OpenAI</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-white mb-2">Key Achievements</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Built semantic AI recommendation engines</li>
                    <li>• Developed real-time reconciliation systems</li>
                    <li>• Computer Science graduate from Dalhousie University</li>
                    <li>• Multi-business founder and musician</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Fardeen */}
            <div className="bg-[#1a1a1a] rounded-2xl p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Fardeenul Islam</h3>
                <p className="text-blue-400 font-semibold">Co-Founder & Head of AI Delivery and Infrastructure</p>
              </div>
              
              <div className="space-y-4 text-gray-300">
                <p>
                  The operational brain behind Auralix AI's smooth client delivery and advanced backend systems. 
                  Specializes in translating deep technical complexity into deployable solutions.
                </p>
                
                <div>
                  <h4 className="font-semibold text-white mb-2">Core Strengths</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-900 text-blue-300 rounded-full text-sm">Software Engineering</span>
                    <span className="px-3 py-1 bg-blue-900 text-blue-300 rounded-full text-sm">Data Infrastructure</span>
                    <span className="px-3 py-1 bg-blue-900 text-blue-300 rounded-full text-sm">UI/UX</span>
                    <span className="px-3 py-1 bg-blue-900 text-blue-300 rounded-full text-sm">API Integration</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-white mb-2">Key Achievements</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Built chatbot interfaces and automated pipelines</li>
                    <li>• Streamlined analytics dashboards</li>
                    <li>• Multi-platform deployment expertise</li>
                    <li>• Enterprise scalability specialist</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founding Philosophy */}
      <section className="py-20 px-4 bg-[#111]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-purple-400 mb-6">Founding Philosophy</h2>
          <div className="bg-[#1a1a1a] rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              "Why should world-class AI tools be limited to billion-dollar enterprises?"
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              Together, Maruf and Fardeen founded Auralix AI to answer this simple question. Their shared 
              belief is that small and mid-size businesses deserve access to the same quality of automation, 
              intelligence, and workflow transformation that powers tech giants—without needing a massive 
              budget, a tech team, or weeks of onboarding.
            </p>
            <p className="text-lg text-gray-300">
              They don't build "nice-to-have" tools. They build critical infrastructure for growth.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-teal-500 to-blue-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white mb-8">
            Join the AI revolution and discover how Auralix AI can scale with your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="px-10 py-4 bg-black hover:bg-[#222] text-teal-300 font-bold rounded-full text-lg shadow-lg transition-all duration-200">
              Get Free Consultation
            </a>
            <a href="/solutions" className="px-10 py-4 bg-white hover:bg-gray-100 text-blue-600 font-bold rounded-full text-lg shadow-lg transition-all duration-200">
              View Our Solutions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}