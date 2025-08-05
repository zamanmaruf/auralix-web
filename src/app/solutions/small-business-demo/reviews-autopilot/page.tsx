'use client';

import React, { useState, useEffect } from 'react';
import { FaStar, FaClock, FaDollarSign, FaUsers, FaChartLine, FaCheckCircle, FaExclamationTriangle, FaPlay, FaPause, FaRedo, FaEye, FaRobot, FaComments, FaChartBar, FaThumbsUp } from 'react-icons/fa';

interface ReviewData {
  customerName: string;
  rating: number;
  comment: string;
  responseTime: string;
  businessImpact: string;
  status: 'pending' | 'responded' | 'resolved';
  timestamp: string;
}

interface DemoStep {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  duration: number;
  reviews?: ReviewData[];
  metrics?: any;
}

export default function ReviewsAutopilotDemo() {
  const [isDemoRunning, setIsDemoRunning] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [reviews, setReviews] = useState<ReviewData[]>([]);
  const [businessMetrics, setBusinessMetrics] = useState({
    totalReviews: 8,
    averageRating: 3.2,
    responseTime: 'Never',
    monthlyRevenue: '$8,500',
    newCustomers: 12
  });
  const [demoProgress, setDemoProgress] = useState(0);
  const [currentStepDetails, setCurrentStepDetails] = useState('');

  const demoSteps: DemoStep[] = [
    {
      id: 1,
      title: "Initial State: Manual Review Management",
      description: "Restaurant owner manually checks reviews once a week, missing critical customer feedback",
      icon: <FaExclamationTriangle className="text-red-400" />,
      duration: 2000,
      reviews: [
        {
          customerName: "Sarah M.",
          rating: 2,
          comment: "Food was cold and service was slow. Waited 45 minutes for our order.",
          responseTime: "No response",
          businessImpact: "Lost customer + negative word-of-mouth",
          status: 'pending' as const,
          timestamp: "2 days ago"
        },
        {
          customerName: "Mike R.",
          rating: 1,
          comment: "Terrible experience. Staff was rude and food was overpriced.",
          responseTime: "No response", 
          businessImpact: "Lost customer + bad online reputation",
          status: 'pending' as const,
          timestamp: "1 week ago"
        }
      ],
      metrics: {
        totalReviews: 8,
        averageRating: 3.2,
        responseTime: 'Never',
        monthlyRevenue: '$8,500',
        newCustomers: 12
      }
    },
    {
      id: 2,
      title: "AI Detection: Monitoring Reviews 24/7",
      description: "AI system automatically detects new reviews and analyzes sentiment in real-time",
      icon: <FaEye className="text-blue-400" />,
      duration: 2500,
      reviews: [
        {
          customerName: "Sarah M.",
          rating: 2,
          comment: "Food was cold and service was slow. Waited 45 minutes for our order.",
          responseTime: "Detected",
          businessImpact: "AI flagged as urgent - negative sentiment detected",
          status: 'pending' as const,
          timestamp: "2 minutes ago"
        },
        {
          customerName: "Mike R.",
          rating: 1,
          comment: "Terrible experience. Staff was rude and food was overpriced.",
          responseTime: "Detected", 
          businessImpact: "AI flagged as critical - high negative impact",
          status: 'pending' as const,
          timestamp: "5 minutes ago"
        },
        {
          customerName: "Lisa T.",
          rating: 4,
          comment: "Great food but took too long to get our bill.",
          responseTime: "Detected",
          businessImpact: "AI flagged as moderate - opportunity for improvement",
          status: 'pending' as const,
          timestamp: "1 minute ago"
        }
      ],
      metrics: {
        totalReviews: 11,
        averageRating: 3.1,
        responseTime: 'Detected',
        monthlyRevenue: '$8,200',
        newCustomers: 10
      }
    },
    {
      id: 3,
      title: "AI Response Generation",
      description: "AI creates personalized, empathetic responses for each review type",
      icon: <FaRobot className="text-cyan-400" />,
      duration: 3000,
      reviews: [
        {
          customerName: "Sarah M.",
          rating: 2,
          comment: "Food was cold and service was slow. Waited 45 minutes for our order.",
          responseTime: "Generating...",
          businessImpact: "AI crafting personalized apology + compensation offer",
          status: 'pending' as const,
          timestamp: "30 seconds ago"
        },
        {
          customerName: "Mike R.",
          rating: 1,
          comment: "Terrible experience. Staff was rude and food was overpriced.",
          responseTime: "Generating...", 
          businessImpact: "AI creating detailed response addressing each concern",
          status: 'pending' as const,
          timestamp: "1 minute ago"
        },
        {
          customerName: "Lisa T.",
          rating: 4,
          comment: "Great food but took too long to get our bill.",
          responseTime: "Generating...",
          businessImpact: "AI thanking customer + explaining process improvements",
          status: 'pending' as const,
          timestamp: "45 seconds ago"
        }
      ],
      metrics: {
        totalReviews: 11,
        averageRating: 3.1,
        responseTime: 'Generating...',
        monthlyRevenue: '$8,200',
        newCustomers: 10
      }
    },
    {
      id: 4,
      title: "Human Review & Approval",
      description: "Business owner reviews AI-generated responses and approves with one click",
      icon: <FaCheckCircle className="text-green-400" />,
      duration: 2000,
      reviews: [
        {
          customerName: "Sarah M.",
          rating: 2,
          comment: "Food was cold and service was slow. Waited 45 minutes for our order.",
          responseTime: "Approved",
          businessImpact: "Response approved: 'We sincerely apologize and would like to offer you a complimentary meal'",
          status: 'responded' as const,
          timestamp: "1 minute ago"
        },
        {
          customerName: "Mike R.",
          rating: 1,
          comment: "Terrible experience. Staff was rude and food was overpriced.",
          responseTime: "Approved", 
          businessImpact: "Response approved: 'We take your feedback seriously and would like to discuss this personally'",
          status: 'responded' as const,
          timestamp: "2 minutes ago"
        },
        {
          customerName: "Lisa T.",
          rating: 4,
          comment: "Great food but took too long to get our bill.",
          responseTime: "Approved",
          businessImpact: "Response approved: 'Thank you for your patience. We've implemented a new billing system'",
          status: 'responded' as const,
          timestamp: "1 minute ago"
        }
      ],
      metrics: {
        totalReviews: 11,
        averageRating: 3.1,
        responseTime: '2 minutes',
        monthlyRevenue: '$8,200',
        newCustomers: 10
      }
    },
    {
      id: 5,
      title: "Customer Engagement & Resolution",
      description: "Customers respond positively to quick, personalized responses",
      icon: <FaComments className="text-purple-400" />,
      duration: 3000,
      reviews: [
        {
          customerName: "Sarah M.",
          rating: 4,
          comment: "Thank you for the quick response and free meal offer. I'll definitely return!",
          responseTime: "Resolved",
          businessImpact: "Customer satisfied + rating improved from 2★ to 4★ + returning customer",
          status: 'resolved' as const,
          timestamp: "30 seconds ago"
        },
        {
          customerName: "Mike R.",
          rating: 3,
          comment: "Appreciate the personal attention. Will give you another chance.",
          responseTime: "Resolved", 
          businessImpact: "Customer retained + rating improved from 1★ to 3★ + second chance",
          status: 'resolved' as const,
          timestamp: "1 minute ago"
        },
        {
          customerName: "Lisa T.",
          rating: 5,
          comment: "Great to see you're improving! Love the new billing system.",
          responseTime: "Resolved",
          businessImpact: "Customer delighted + rating improved from 4★ to 5★ + process improvement",
          status: 'resolved' as const,
          timestamp: "45 seconds ago"
        }
      ],
      metrics: {
        totalReviews: 14,
        averageRating: 3.8,
        responseTime: '2 minutes',
        monthlyRevenue: '$9,800',
        newCustomers: 15
      }
    },
    {
      id: 6,
      title: "Proactive Review Generation",
      description: "AI automatically requests reviews from satisfied customers",
      icon: <FaThumbsUp className="text-yellow-400" />,
      duration: 2500,
      reviews: [
        {
          customerName: "John D.",
          rating: 5,
          comment: "Amazing experience! Food was perfect and service was excellent.",
          responseTime: "30 seconds",
          businessImpact: "AI detected happy customer + automatically requested review",
          status: 'responded' as const,
          timestamp: "30 seconds ago"
        },
        {
          customerName: "Emma L.",
          rating: 5,
          comment: "Best restaurant in town! Will definitely recommend to friends.",
          responseTime: "1 minute",
          businessImpact: "AI detected positive experience + generated review request",
          status: 'responded' as const,
          timestamp: "1 minute ago"
        }
      ],
      metrics: {
        totalReviews: 16,
        averageRating: 4.2,
        responseTime: '1 minute',
        monthlyRevenue: '$11,200',
        newCustomers: 18
      }
    },
    {
      id: 7,
      title: "Business Transformation Complete",
      description: "Restaurant now has excellent online reputation and increased revenue",
      icon: <FaChartBar className="text-green-400" />,
      duration: 2000,
      reviews: [
        {
          customerName: "Sarah M.",
          rating: 4,
          comment: "Thank you for the quick response and free meal offer. I'll definitely return!",
          responseTime: "Resolved",
          businessImpact: "Customer satisfied + rating improved from 2★ to 4★ + returning customer",
          status: 'resolved' as const,
          timestamp: "2 minutes ago"
        },
        {
          customerName: "Mike R.",
          rating: 3,
          comment: "Appreciate the personal attention. Will give you another chance.",
          responseTime: "Resolved", 
          businessImpact: "Customer retained + rating improved from 1★ to 3★ + second chance",
          status: 'resolved' as const,
          timestamp: "3 minutes ago"
        },
        {
          customerName: "Lisa T.",
          rating: 5,
          comment: "Great to see you're improving! Love the new billing system.",
          responseTime: "Resolved",
          businessImpact: "Customer delighted + rating improved from 4★ to 5★ + process improvement",
          status: 'resolved' as const,
          timestamp: "2 minutes ago"
        },
        {
          customerName: "John D.",
          rating: 5,
          comment: "Amazing experience! Food was perfect and service was excellent.",
          responseTime: "30 seconds",
          businessImpact: "AI detected happy customer + automatically requested review",
          status: 'responded' as const,
          timestamp: "30 seconds ago"
        },
        {
          customerName: "Emma L.",
          rating: 5,
          comment: "Best restaurant in town! Will definitely recommend to friends.",
          responseTime: "1 minute",
          businessImpact: "AI detected positive experience + generated review request",
          status: 'responded' as const,
          timestamp: "1 minute ago"
        }
      ],
      metrics: {
        totalReviews: 24,
        averageRating: 4.6,
        responseTime: '2 minutes',
        monthlyRevenue: '$12,800',
        newCustomers: 31
      }
    }
  ];

  const runDemo = () => {
    setIsDemoRunning(true);
    setCurrentStepIndex(0);
    setDemoProgress(0);
    setReviews([]);
    setBusinessMetrics({
      totalReviews: 8,
      averageRating: 3.2,
      responseTime: 'Never',
      monthlyRevenue: '$8,500',
      newCustomers: 12
    });

    // Start the step-by-step demo
    demoSteps.forEach((step, index) => {
      setTimeout(() => {
        setCurrentStepIndex(index);
        setDemoProgress(((index + 1) / demoSteps.length) * 100);
        setReviews(step.reviews || []);
        setBusinessMetrics(step.metrics || businessMetrics);
        setCurrentStepDetails(step.description);
        
        if (index === demoSteps.length - 1) {
          setIsDemoRunning(false);
        }
      }, demoSteps.slice(0, index).reduce((acc, s) => acc + s.duration, 0));
    });
  };

  const resetDemo = () => {
    setIsDemoRunning(false);
    setCurrentStepIndex(0);
    setDemoProgress(0);
    setReviews([]);
    setCurrentStepDetails('');
    setBusinessMetrics({
      totalReviews: 8,
      averageRating: 3.2,
      responseTime: 'Never',
      monthlyRevenue: '$8,500',
      newCustomers: 12
    });
  };

  const currentStep = demoSteps[currentStepIndex];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a2a3a] via-[#0a2233] to-[#0a0a0a] text-white">
      {/* Header */}
      <div className="bg-[#11202a] border-b border-[#1a2a3a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-teal-600 rounded-xl flex items-center justify-center">
                <FaStar className="text-white text-xl" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Auralix AI</h1>
                <p className="text-cyan-300 text-sm font-medium">Google Reviews Management Demo</p>
              </div>
            </div>
            
            <div className="text-right">
              <div className="text-sm text-cyan-300">
                {isDemoRunning ? '🔄 Demo Running...' : 'Ready to Demo'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Complete AI Review Management Workflow
          </h2>
          <p className="text-xl text-cyan-200 mb-8 max-w-3xl mx-auto">
            See the step-by-step transformation from manual review management to AI-powered automation
          </p>
          
          {/* Demo Controls */}
          <div className="flex justify-center space-x-4 mb-8">
            <button
              onClick={runDemo}
              disabled={isDemoRunning}
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-teal-600 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-teal-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center space-x-2"
            >
              <FaPlay className="text-sm" />
              <span>{isDemoRunning ? 'Demo Running...' : 'Start Complete Demo'}</span>
            </button>
            <button
              onClick={resetDemo}
              className="px-8 py-3 bg-[#1a2a3a] text-gray-300 font-semibold rounded-lg hover:bg-[#2a3a4a] transition-all duration-200 flex items-center space-x-2"
            >
              <FaRedo className="text-sm" />
              <span>Reset Demo</span>
            </button>
          </div>

          {/* Progress Bar */}
          {isDemoRunning && (
            <div className="w-full max-w-2xl mx-auto mb-8">
              <div className="bg-[#1a2a3a] rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-cyan-500 to-teal-600 h-3 rounded-full transition-all duration-1000"
                  style={{ width: `${demoProgress}%` }}
                ></div>
              </div>
              <p className="text-cyan-300 text-sm mt-2">
                Step {currentStepIndex + 1} of {demoSteps.length}: {currentStepDetails}
              </p>
            </div>
          )}
        </div>

        {/* Current Step Display */}
        {currentStep && (
          <div className="mb-8">
            <div className="bg-[#11202a] rounded-xl p-6 shadow-xl border border-[#1a2a3a]">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-teal-600 rounded-xl flex items-center justify-center mr-4">
                  {currentStep.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{currentStep.title}</h3>
                  <p className="text-cyan-200">{currentStep.description}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Business Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-12">
          <div className="bg-[#11202a] rounded-xl p-6 shadow-xl border border-[#1a2a3a] hover:border-cyan-500 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-cyan-300">Total Reviews</p>
                <p className="text-2xl font-bold text-white">{businessMetrics.totalReviews}</p>
              </div>
              <FaStar className="text-yellow-400 text-xl" />
            </div>
          </div>
          
          <div className="bg-[#11202a] rounded-xl p-6 shadow-xl border border-[#1a2a3a] hover:border-cyan-500 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-cyan-300">Average Rating</p>
                <p className="text-2xl font-bold text-white">{businessMetrics.averageRating}★</p>
              </div>
              <FaChartLine className="text-green-400 text-xl" />
            </div>
          </div>
          
          <div className="bg-[#11202a] rounded-xl p-6 shadow-xl border border-[#1a2a3a] hover:border-cyan-500 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-cyan-300">Response Time</p>
                <p className="text-2xl font-bold text-white">{businessMetrics.responseTime}</p>
              </div>
              <FaClock className="text-blue-400 text-xl" />
            </div>
          </div>
          
          <div className="bg-[#11202a] rounded-xl p-6 shadow-xl border border-[#1a2a3a] hover:border-cyan-500 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-cyan-300">Monthly Revenue</p>
                <p className="text-2xl font-bold text-white">{businessMetrics.monthlyRevenue}</p>
              </div>
              <FaDollarSign className="text-green-400 text-xl" />
            </div>
          </div>
          
          <div className="bg-[#11202a] rounded-xl p-6 shadow-xl border border-[#1a2a3a] hover:border-cyan-500 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-cyan-300">New Customers</p>
                <p className="text-2xl font-bold text-white">{businessMetrics.newCustomers}</p>
              </div>
              <FaUsers className="text-purple-400 text-xl" />
            </div>
          </div>
        </div>

        {/* Demo Steps Overview */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">Demo Workflow Steps</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {demoSteps.map((step, index) => (
              <div 
                key={step.id}
                className={`bg-[#11202a] rounded-xl p-4 border transition-all duration-300 ${
                  currentStepIndex === index 
                    ? 'border-cyan-500 bg-[#0a2a3a]' 
                    : 'border-[#1a2a3a] hover:border-cyan-500/50'
                }`}
              >
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-teal-600 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-white text-sm font-bold">{step.id}</span>
                  </div>
                  <div className="w-6 h-6 rounded-full flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>
                <h4 className="font-semibold text-white text-sm mb-2">{step.title}</h4>
                <p className="text-gray-400 text-xs">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Live Reviews Feed */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">Live Reviews Feed</h3>
          <div className="bg-[#11202a] rounded-xl shadow-xl border border-[#1a2a3a] overflow-hidden">
            <div className="p-6 border-b border-[#1a2a3a] bg-[#0a2a3a]">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-white">Recent Customer Reviews</h4>
                <div className="text-sm text-cyan-300">
                  {reviews.length > 0 ? `${reviews.length} reviews` : 'No reviews yet'}
                </div>
              </div>
            </div>
            
            <div className="divide-y divide-[#1a2a3a]">
              {reviews.map((review, index) => (
                <div key={index} className="p-6 hover:bg-[#0a2a3a] transition-all duration-200">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-teal-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold">
                          {review.customerName.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-white">{review.customerName}</p>
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <FaStar 
                              key={i} 
                              className={`text-sm ${i < review.rating ? 'text-yellow-400' : 'text-gray-600'}`} 
                            />
                          ))}
                          <span className="text-sm text-gray-400 ml-2">{review.rating}.0</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-cyan-300">Response Time</p>
                      <p className="font-semibold text-white">{review.responseTime}</p>
                      <p className="text-xs text-gray-500">{review.timestamp}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-3">{review.comment}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm">
                      <span className="text-cyan-300">Business Impact: </span>
                      <span className="font-medium text-white">{review.businessImpact}</span>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      review.status === 'resolved' ? 'bg-green-900/30 text-green-300 border border-green-500/30' :
                      review.status === 'responded' ? 'bg-blue-900/30 text-blue-300 border border-blue-500/30' :
                      'bg-red-900/30 text-red-300 border border-red-500/30'
                    }`}>
                      {review.status === 'resolved' ? 'Resolved' :
                       review.status === 'responded' ? 'Responded' : 'Pending'}
                    </div>
                  </div>
                </div>
              ))}
              
              {reviews.length === 0 && (
                <div className="p-12 text-center">
                  <FaStar className="text-gray-600 text-4xl mx-auto mb-4" />
                  <p className="text-gray-500">No reviews yet. Start the demo to see the transformation!</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-600 to-teal-600 rounded-xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-cyan-100 mb-6 max-w-2xl mx-auto">
              Join hundreds of small businesses that have increased their revenue by 50% 
              simply by managing their online reviews better.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="px-8 py-3 bg-white text-cyan-600 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-200">
                Book Free Consultation
              </button>
              <button className="px-8 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-cyan-600 transition-all duration-200">
                See Pricing
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 