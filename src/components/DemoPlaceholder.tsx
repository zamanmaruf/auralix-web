'use client';

import { motion } from 'framer-motion';
import { Play, Code, ExternalLink, Phone } from 'lucide-react';

export default function DemoPlaceholder() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            See Auralix AI in Action
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience how our AI receptionist handles your restaurant's calls
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-primary-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary-500 text-white p-3 rounded-full">
                  <Play className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Live Demo
                  </h3>
                  <p className="text-gray-600">
                    Call our demo line to experience the AI
                  </p>
                </div>
              </div>
              
              <div className="bg-primary-50 border-2 border-primary-500 rounded-lg p-6 mb-6">
                <div className="text-center">
                  <button
                    onClick={() => {
                      if ((window as any).triggerVapiCall) {
                        (window as any).triggerVapiCall();
                      } else {
                        window.dispatchEvent(new Event('trigger-vapi-call'));
                      }
                    }}
                    className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-bold text-xl flex items-center justify-center gap-3 mx-auto max-w-sm shadow-lg border-2 border-cyan-400/50 hover:scale-105 transition-all duration-200 cursor-pointer"
                  >
                    <Phone className="w-6 h-6 animate-pulse group-hover:rotate-12 transition-transform" />
                    Talk to Auralix AI Voice Agent
                  </button>
                  <p className="text-primary-800 font-semibold mt-3 mb-2">
                    Click the voice button in the bottom-right corner to start a live conversation with our AI agent
                  </p>
                  <p className="text-sm text-primary-700">
                    Try asking: "I'd like to make a reservation for tonight" or 
                    "What are your specials today?"
                  </p>
                </div>
              </div>

              <div className="bg-primary-50 border border-primary-200 rounded-lg p-4">
                <h4 className="font-semibold text-primary-800 mb-2">
                  What You'll Experience:
                </h4>
                <ul className="space-y-2 text-sm text-primary-700">
                  <li>• Natural conversation flow</li>
                  <li>• Instant reservation booking</li>
                  <li>• Menu and hours information</li>
                  <li>• Seamless handoff to staff when needed</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gray-900 text-white p-3 rounded-full">
                <Code className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  n8n Voice Agent Integration
                </h3>
                <p className="text-gray-600">
                  Connect your existing n8n workflow
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Integration Options:
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                    <div>
                      <strong>Iframe Embed:</strong> Direct integration with your n8n voice widget
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                    <div>
                      <strong>Custom Component:</strong> React component with n8n webhook
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                    <div>
                      <strong>API Integration:</strong> Direct API calls to your n8n endpoints
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-2">
                  Setup Instructions:
                </h4>
                <ol className="space-y-2 text-sm text-blue-700">
                  <li>1. Configure your n8n voice agent workflow</li>
                  <li>2. Get your webhook URL or widget embed code</li>
                  <li>3. Contact our team for integration assistance</li>
                  <li>4. Test the connection in your restaurant</li>
                </ol>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <ExternalLink className="w-4 h-4 text-orange-600" />
                  <span className="font-semibold text-orange-800">Need Help?</span>
                </div>
                <p className="text-sm text-orange-700">
                  Our technical team will guide you through the n8n integration process. 
                  Contact us at marufzaman@auralixai.ca for assistance.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
