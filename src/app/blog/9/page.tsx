'use client';
import Link from 'next/link';
import { FaArrowLeft, FaIndustry, FaCogs, FaChartLine, FaShieldAlt } from 'react-icons/fa';

export default function BlogPost9() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a2a3a] via-[#0a2233] to-[#0a0a0a] text-white">
      {/* Navigation */}
      <nav className="max-w-4xl mx-auto px-4 py-6">
        <Link href="/blog" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
          <FaArrowLeft />
          Back to Blog
        </Link>
      </nav>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 pb-16">
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
            <span>Manufacturing</span>
            <span>•</span>
            <span>AI Automation</span>
            <span>•</span>
            <span>April 5, 2024</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-cyan-300">
            AI Automation in Manufacturing: The Future of Industry in Nova Scotia
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            How AI automation is revolutionizing manufacturing processes in Nova Scotia, 
            improving efficiency, quality, and competitiveness in the global market.
          </p>
        </header>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          <div className="bg-[#1a1a1a] rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">The Manufacturing Revolution</h2>
            <p className="text-gray-300 mb-6">
              Nova Scotia&apos;s manufacturing sector is embracing AI automation to compete globally, 
              reduce costs, and improve product quality. The results are transforming the industry.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <FaIndustry className="text-4xl text-green-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">30-50%</div>
                <div className="text-gray-400 text-sm">Increase in Productivity</div>
              </div>
              <div className="text-center">
                <FaCogs className="text-4xl text-blue-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">90%</div>
                <div className="text-gray-400 text-sm">Reduction in Defects</div>
              </div>
              <div className="text-center">
                <FaChartLine className="text-4xl text-purple-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">25%</div>
                <div className="text-gray-400 text-sm">Cost Reduction</div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-white mb-6">Case Study: Halifax Manufacturing Plant</h2>
          <p className="text-gray-300 mb-6">
            A manufacturing plant in Halifax implemented AI automation across their production line, 
            achieving remarkable improvements in efficiency and quality:
          </p>

          <div className="bg-[#1a1a1a] rounded-2xl p-8 mb-8">
            <h3 className="text-xl font-bold text-cyan-400 mb-4">The Challenge</h3>
            <ul className="space-y-3 text-gray-300 mb-6">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <span>High defect rates in production</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <span>Manual quality control was time-consuming</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <span>Equipment downtime was unpredictable</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <span>Inventory management was inefficient</span>
              </li>
            </ul>

            <h3 className="text-xl font-bold text-green-400 mb-4">The AI Solution</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>AI-powered quality control systems</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Predictive maintenance for equipment</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Automated inventory management</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Real-time production monitoring</span>
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-white mb-6">Key AI Applications in Manufacturing</h2>
          
          <div className="space-y-6 mb-8">
            <div className="bg-[#1a1a1a] rounded-2xl p-6">
              <h3 className="text-xl font-bold text-cyan-400 mb-3">Predictive Maintenance</h3>
              <p className="text-gray-300 mb-3">
                AI systems monitor equipment performance and predict when maintenance is needed, 
                preventing costly breakdowns and reducing downtime.
              </p>
              <div className="text-sm text-gray-400">
                <strong>Benefits:</strong> 50% reduction in unplanned downtime, 30% lower maintenance costs
              </div>
            </div>

            <div className="bg-[#1a1a1a] rounded-2xl p-6">
              <h3 className="text-xl font-bold text-cyan-400 mb-3">Quality Control</h3>
              <p className="text-gray-300 mb-3">
                AI-powered vision systems inspect products in real-time, detecting defects 
                with higher accuracy than human inspectors.
              </p>
              <div className="text-sm text-gray-400">
                <strong>Benefits:</strong> 90% reduction in defects, 24/7 quality monitoring
              </div>
            </div>

            <div className="bg-[#1a1a1a] rounded-2xl p-6">
              <h3 className="text-xl font-bold text-cyan-400 mb-3">Supply Chain Optimization</h3>
              <p className="text-gray-300 mb-3">
                AI algorithms optimize inventory levels, predict demand, and streamline 
                supplier relationships for maximum efficiency.
              </p>
              <div className="text-sm text-gray-400">
                <strong>Benefits:</strong> 40% reduction in inventory costs, 60% faster order processing
              </div>
            </div>

            <div className="bg-[#1a1a1a] rounded-2xl p-6">
              <h3 className="text-xl font-bold text-cyan-400 mb-3">Production Planning</h3>
              <p className="text-gray-300 mb-3">
                AI optimizes production schedules, resource allocation, and workflow 
                to maximize output while minimizing costs.
              </p>
              <div className="text-sm text-gray-400">
                <strong>Benefits:</strong> 25% increase in production efficiency, 20% reduction in waste
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-white mb-6">Smart Factory Implementation</h2>
          <p className="text-gray-300 mb-6">
            The smart factory concept integrates AI automation across all manufacturing processes:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-[#1a1a1a] rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Connected Equipment</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• IoT sensors on all machinery</li>
                <li>• Real-time performance monitoring</li>
                <li>• Automated data collection</li>
                <li>• Predictive analytics</li>
                <li>• Remote monitoring capabilities</li>
              </ul>
            </div>
            <div className="bg-[#1a1a1a] rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Intelligent Automation</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Robotic process automation</li>
                <li>• AI-powered decision making</li>
                <li>• Adaptive manufacturing systems</li>
                <li>• Self-optimizing processes</li>
                <li>• Continuous improvement loops</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-white mb-6">Implementation Roadmap</h2>
          
          <div className="space-y-6 mb-8">
            <div className="bg-[#1a1a1a] rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-black font-bold">1</div>
                <h3 className="text-xl font-bold text-white">Assess Current Infrastructure</h3>
              </div>
              <p className="text-gray-300">
                Evaluate existing equipment, systems, and processes to identify automation 
                opportunities and integration requirements.
              </p>
            </div>

            <div className="bg-[#1a1a1a] rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-black font-bold">2</div>
                <h3 className="text-xl font-bold text-white">Start with Data Collection</h3>
              </div>
              <p className="text-gray-300">
                Implement IoT sensors and data collection systems to gather information 
                about equipment performance and production processes.
              </p>
            </div>

            <div className="bg-[#1a1a1a] rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-black font-bold">3</div>
                <h3 className="text-xl font-bold text-white">Implement Predictive Maintenance</h3>
              </div>
              <p className="text-gray-300">
                Deploy AI systems to monitor equipment health and predict maintenance needs, 
                reducing downtime and extending equipment life.
              </p>
            </div>

            <div className="bg-[#1a1a1a] rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-black font-bold">4</div>
                <h3 className="text-xl font-bold text-white">Optimize Production Processes</h3>
              </div>
              <p className="text-gray-300">
                Use AI to optimize production schedules, quality control, and resource 
                allocation for maximum efficiency and quality.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-white mb-6">Safety and Compliance</h2>
          <p className="text-gray-300 mb-6">
            AI automation in manufacturing must prioritize safety and regulatory compliance:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-[#1a1a1a] rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Safety Systems</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• AI-powered safety monitoring</li>
                <li>• Automated emergency shutdowns</li>
                <li>• Real-time hazard detection</li>
                <li>• Predictive safety analytics</li>
                <li>• Worker protection systems</li>
              </ul>
            </div>
            <div className="bg-[#1a1a1a] rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Regulatory Compliance</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Automated compliance reporting</li>
                <li>• Quality standards monitoring</li>
                <li>• Environmental impact tracking</li>
                <li>• Safety protocol enforcement</li>
                <li>• Audit trail maintenance</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-white mb-6">Measuring Manufacturing Success</h2>
          <p className="text-gray-300 mb-6">
            Key performance indicators for AI automation in manufacturing:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-[#1a1a1a] rounded-2xl p-6 text-center">
              <FaIndustry className="text-4xl text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Operational Efficiency</h3>
              <ul className="space-y-1 text-gray-300 text-sm text-left">
                <li>• Overall Equipment Effectiveness (OEE)</li>
                <li>• Production cycle time</li>
                <li>• Equipment uptime</li>
                <li>• Energy consumption</li>
              </ul>
            </div>
            <div className="bg-[#1a1a1a] rounded-2xl p-6 text-center">
              <FaCogs className="text-4xl text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Quality Metrics</h3>
              <ul className="space-y-1 text-gray-300 text-sm text-left">
                <li>• Defect rate reduction</li>
                <li>• First-pass yield</li>
                <li>• Customer returns</li>
                <li>• Quality cost savings</li>
              </ul>
            </div>
            <div className="bg-[#1a1a1a] rounded-2xl p-6 text-center">
              <FaChartLine className="text-4xl text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Financial Impact</h3>
              <ul className="space-y-1 text-gray-300 text-sm text-left">
                <li>• Cost per unit produced</li>
                <li>• Inventory turnover</li>
                <li>• Maintenance cost reduction</li>
                <li>• ROI on automation investment</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-white mb-6">The Future of Manufacturing AI</h2>
          <p className="text-gray-300 mb-6">
            Emerging technologies that will shape the future of manufacturing:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <FaShieldAlt className="text-4xl text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Autonomous Factories</h3>
              <p className="text-gray-300 text-sm">
                Fully automated production lines with minimal human intervention
              </p>
            </div>
            <div className="text-center">
              <FaIndustry className="text-4xl text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Digital Twins</h3>
              <p className="text-gray-300 text-sm">
                Virtual replicas of physical systems for simulation and optimization
              </p>
            </div>
            <div className="text-center">
              <FaCogs className="text-4xl text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Adaptive Manufacturing</h3>
              <p className="text-gray-300 text-sm">
                Systems that automatically adjust to changing requirements and conditions
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Manufacturing?</h2>
            <p className="text-cyan-100 mb-6">
              Discover how AI automation can revolutionize your manufacturing processes 
              and give you a competitive edge in the global market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/industries" 
                className="px-8 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Manufacturing Solutions
              </Link>
              <Link 
                href="/contact" 
                className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-black transition-colors"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}