'use client';
import { FaArrowRight, FaUser, FaRobot, FaEye, FaGavel } from 'react-icons/fa';
import { MdAnalytics } from 'react-icons/md';
import Link from 'next/link';

const workflowSteps = [
  {
    id: 1,
    title: "Claim Submission",
    description: "Customer submits claim with required documents",
    icon: <FaUser className="text-2xl" />,
    details: [
      "Online claim form submission",
      "Document upload (Policy, Photos, Reports)",
      "Initial data validation",
      "Claim number generation"
    ]
  },
  {
    id: 2,
    title: "Document Processing",
    description: "AI analyzes and verifies all uploaded documents",
    icon: <FaRobot className="text-2xl" />,
    details: [
      "OCR text extraction",
      "Document authenticity verification",
      "Policy coverage validation",
      "Damage assessment from photos",
      "Fraud detection analysis"
    ]
  },
  {
    id: 3,
    title: "AI Risk Assessment",
    description: "Machine learning models evaluate claim risk and validity",
    icon: <MdAnalytics className="text-2xl" />,
    details: [
      "Historical pattern analysis",
      "Risk scoring algorithm",
      "Fraud probability calculation",
      "Claim amount validation",
      "Policy compliance check"
    ]
  },
  {
    id: 4,
    title: "Human Review (if needed)",
    description: "Complex cases flagged for human expert review",
    icon: <FaEye className="text-2xl" />,
    details: [
      "High-risk claim review",
      "Complex damage assessment",
      "Policy interpretation",
      "Legal compliance check",
      "Expert decision making"
    ]
  },
  {
    id: 5,
    title: "Decision & Approval",
    description: "Final claim decision and payment processing",
    icon: <FaGavel className="text-2xl" />,
    details: [
      "Automated approval (low-risk claims)",
      "Manual approval (complex cases)",
      "Payment processing setup",
      "Customer notification",
      "Claim closure"
    ]
  }
];

export default function ClaimsAutomationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a2a3a] via-[#0a2233] to-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto text-center py-16 px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-cyan-300">
          Claims Automation Platform
        </h1>
        <p className="text-xl md:text-2xl text-cyan-100 mb-8">
          Enterprise-grade AI-powered claims processing with real-time document verification
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="bg-[#1a1a1a] rounded-lg px-6 py-3">
            <span className="text-cyan-400 font-semibold">99.7%</span> Accuracy Rate
          </div>
          <div className="bg-[#1a1a1a] rounded-lg px-6 py-3">
            <span className="text-cyan-400 font-semibold">85%</span> Faster Processing
          </div>
          <div className="bg-[#1a1a1a] rounded-lg px-6 py-3">
            <span className="text-cyan-400 font-semibold">24/7</span> Real-time Processing
          </div>
        </div>
        
        {/* View Demo Button */}
        <div className="mt-8">
          <Link 
            href="/solutions/claims-automation/demo"
            className="bg-cyan-500 hover:bg-cyan-400 text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 flex items-center gap-3 mx-auto inline-flex"
          >
            View Interactive Demo
          </Link>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">Claims Processing Workflow</h2>
          <p className="text-xl text-cyan-100 mb-6">How claims are processed from submission to decision</p>
        </div>

        {/* Workflow Steps */}
        <div className="space-y-8">
          {workflowSteps.map((step, index) => (
            <div key={step.id} className="bg-[#1a1a1a] rounded-2xl p-6">
              <div className="flex items-start gap-6">
                {/* Step Number */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold bg-gray-600 text-white">
                  {step.id}
                </div>

                {/* Step Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="text-cyan-400">
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{step.title}</h3>
                      <p className="text-gray-300">{step.description}</p>
                    </div>
                  </div>

                  {/* Step Details */}
                  <div className="mt-4">
                    <h4 className="font-semibold text-cyan-300 mb-2">How it works:</h4>
                    <ul className="space-y-1 text-sm text-gray-300">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Arrow to next step */}
              {index < workflowSteps.length - 1 && (
                <div className="flex justify-center mt-6">
                  <FaArrowRight className="text-cyan-400 text-2xl" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* How it works summary */}
        <div className="mt-12 bg-[#1a1a1a] rounded-2xl p-6">
          <h3 className="text-2xl font-bold text-white mb-6">How Claims Are Processed</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#0a0a0a] rounded-lg p-4">
              <h4 className="font-semibold text-cyan-400 mb-3">Automated Processing</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• AI analyzes documents and extracts information</li>
                <li>• Machine learning models assess risk and validity</li>
                <li>• Low-risk claims are automatically approved</li>
                <li>• High-risk claims are flagged for human review</li>
              </ul>
            </div>

            <div className="bg-[#0a0a0a] rounded-lg p-4">
              <h4 className="font-semibold text-cyan-400 mb-3">Human Review</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Complex cases reviewed by insurance experts</li>
                <li>• Policy interpretation and legal compliance</li>
                <li>• Final decision and payment processing</li>
                <li>• Customer notification and claim closure</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 