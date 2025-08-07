'use client';

import React, { useState, useEffect } from 'react';
import { FaBrain, FaEye, FaHeart, FaMicrophone, FaCog, FaMagic, FaRocket, FaCheck, FaArrowRight, FaClock, FaDatabase, FaNetworkWired, FaChartLine, FaUser, FaPhone, FaEnvelope, FaMapMarkerAlt, FaCalendar, FaDollarSign, FaStar, FaGem, FaPlay, FaPause, FaRedo, FaRobot, FaComments, FaChartBar, FaThumbsUp, FaLightbulb, FaShieldAlt, FaBolt, FaCrown, FaInfinity, FaUsers, FaBullseye, FaChartPie, FaHandshake, FaGift, FaFire, FaSearch, FaFilter, FaAnalytics, FaCogs, FaGlobe, FaMobile, FaDesktop, FaTablet } from 'react-icons/fa';

interface LeadData {
  name: string;
  email: string;
  phone: string;
  company: string;
  budget: string;
  timeline: string;
  source: string;
  score: number;
  status: 'new' | 'qualified' | 'contacted' | 'converted';
}

interface LeadSource {
  name: string;
  count: number;
  conversionRate: number;
  revenue: number;
  icon: React.ReactNode;
  color: string;
}

interface WorkflowStep {
  id: number;
  title: string;
  description: string;
  technology: string;
  businessValue: string;
  icon: React.ReactNode;
  status: 'pending' | 'active' | 'completed';
  details: string[];
}

export default function IntelligentLeadGenerationDemo() {
  const [isDemoActive, setIsDemoActive] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [leads, setLeads] = useState<LeadData[]>([]);
  const [leadSources, setLeadSources] = useState<LeadSource[]>([]);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [conversionRate, setConversionRate] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [showWorkflow, setShowWorkflow] = useState(false);
  const [workflowSteps, setWorkflowSteps] = useState<WorkflowStep[]>([]);

  useEffect(() => {
    setIsClient(true);
    console.log('Component mounted, isClient set to true');
    // Ensure metrics start at zero
    setTotalRevenue(0);
    setConversionRate(0);
  }, []);

  // Update metrics whenever lead sources change
  useEffect(() => {
    console.log('Lead sources changed:', leadSources.length);
    if (leadSources.length > 0) {
      const totalRev = leadSources.reduce((sum, source) => sum + source.revenue, 0);
      const avgConversion = leadSources.reduce((sum, source) => sum + source.conversionRate, 0) / leadSources.length;
      
      console.log('Updating metrics from useEffect:', { totalRev, avgConversion });
      setTotalRevenue(totalRev);
      setConversionRate(Math.round(avgConversion));
    } else {
      // Reset to zero when no lead sources
      console.log('No lead sources - resetting metrics to zero');
      setTotalRevenue(0);
      setConversionRate(0);
    }
  }, [leadSources]);

  // Initialize workflow steps
  useEffect(() => {
    const steps: WorkflowStep[] = [
      {
        id: 1,
        title: 'Visitor Detection & Tracking',
        description: 'AI monitors website visitors in real-time',
        technology: 'Machine Learning + Behavioral Analytics',
        businessValue: 'Identify high-intent visitors before they convert',
        icon: <FaEye />,
        status: 'pending',
        details: [
          'Tracks mouse movements, scroll patterns, and time on page',
          'Analyzes page navigation and content engagement',
          'Identifies returning visitors and their behavior patterns',
          'Monitors form interactions and button clicks'
        ]
      },
      {
        id: 2,
        title: 'Intent Prediction & Scoring',
        description: 'AI predicts purchase intent and assigns lead scores',
        technology: 'Predictive Analytics + Neural Networks',
        businessValue: 'Prioritize leads with highest conversion probability',
        icon: <FaBrain />,
        status: 'pending',
        details: [
          'Analyzes 50+ behavioral signals in real-time',
          'Predicts purchase intent before visitor expresses it',
          'Assigns lead scores from 0-100 based on engagement',
          'Identifies urgent vs. research-oriented visitors'
        ]
      },
      {
        id: 3,
        title: 'Multi-Channel Lead Capture',
        description: 'Captures leads across all digital touchpoints',
        technology: 'Omnichannel Integration + API Connectors',
        businessValue: 'Never miss a potential customer opportunity',
        icon: <FaGlobe />,
        status: 'pending',
        details: [
          'Website chat widgets with AI-powered responses',
          'Social media lead generation and tracking',
          'Email campaign automation and follow-up',
          'Phone call tracking and transcription'
        ]
      },
      {
        id: 4,
        title: 'AI-Powered Qualification',
        description: 'Automatically qualifies leads based on criteria',
        technology: 'Natural Language Processing + Decision Trees',
        businessValue: 'Focus sales efforts on qualified prospects only',
        icon: <FaFilter />,
        status: 'pending',
        details: [
          'Analyzes company size, industry, and budget',
          'Evaluates decision-making authority and timeline',
          'Checks for budget availability and purchasing power',
          'Identifies technical requirements and pain points'
        ]
      },
      {
        id: 5,
        title: 'Real-Time Lead Routing',
        description: 'Routes qualified leads to appropriate sales reps',
        technology: 'Smart Routing + CRM Integration',
        businessValue: 'Ensure leads are handled by the right person',
        icon: <FaCogs />,
        status: 'pending',
        details: [
          'Matches leads to reps based on expertise and availability',
          'Prioritizes leads by score and urgency',
          'Integrates with Salesforce, HubSpot, and other CRMs',
          'Provides instant notifications to sales teams'
        ]
      },
      {
        id: 6,
        title: 'Automated Follow-Up Sequences',
        description: 'Engages leads with personalized messaging',
        technology: 'Marketing Automation + Personalization Engine',
        businessValue: 'Increase conversion rates through timely engagement',
        icon: <FaRocket />,
        status: 'pending',
        details: [
          'Sends personalized emails based on lead behavior',
          'Creates custom landing pages for different segments',
          'Schedules follow-up calls and meetings automatically',
          'Tracks engagement and adjusts messaging accordingly'
        ]
      },
      {
        id: 7,
        title: 'Performance Analytics & Optimization',
        description: 'Continuously improves lead generation performance',
        technology: 'Advanced Analytics + A/B Testing',
        businessValue: 'Maximize ROI through data-driven optimization',
        icon: <FaChartLine />,
        status: 'pending',
        details: [
          'Tracks conversion rates by source and campaign',
          'Identifies best-performing lead sources and content',
          'Optimizes lead scoring algorithms based on results',
          'Provides ROI analysis and revenue attribution'
        ]
      }
    ];
    setWorkflowSteps(steps);
  }, []);

  const startDemo = () => {
    console.log('Start Demo clicked!');
    setIsDemoActive(true);
    setCurrentStep(1);
    // Reset metrics to zero at start
    setTotalRevenue(0);
    setConversionRate(0);
    setLeads([]);
    setLeadSources([]);
    console.log('Demo state updated:', { isDemoActive: true, currentStep: 1 });
    
    // Step 1: Show lead capture
    setTimeout(() => {
      setCurrentStep(2);
      setLeads([
        {
          name: 'Sarah Johnson',
          email: 'sarah@techstartup.com',
          phone: '+1 (555) 123-4567',
          company: 'TechStartup Inc',
          budget: '$50K - $100K',
          timeline: 'Next 30 days',
          source: 'Website Chat',
          score: 95,
          status: 'qualified'
        }
      ]);
      // Update workflow step 1
      setWorkflowSteps(prev => prev.map(step => 
        step.id === 1 ? { ...step, status: 'completed' } : 
        step.id === 2 ? { ...step, status: 'active' } : step
      ));
    }, 2000);

    // Step 2: Show AI qualification
    setTimeout(() => {
      setCurrentStep(3);
      setLeads(prev => [
        ...prev,
        {
          name: 'Mike Chen',
          email: 'mike@innovatecorp.com',
          phone: '+1 (555) 987-6543',
          company: 'InnovateCorp',
          budget: '$25K - $50K',
          timeline: 'Next 60 days',
          source: 'Social Media',
          score: 87,
          status: 'qualified'
        }
      ]);
      // Update workflow steps 2-3
      setWorkflowSteps(prev => prev.map(step => 
        step.id === 2 ? { ...step, status: 'completed' } : 
        step.id === 3 ? { ...step, status: 'active' } : step
      ));
    }, 4000);

    // Step 3: Show lead sources gradually
    setTimeout(() => {
      setCurrentStep(4);
      
      // Add lead sources one by one with delays
      setTimeout(() => {
        setLeadSources([{
          name: 'Website Chat',
          count: 45,
          conversionRate: 23,
          revenue: 125000,
          icon: <FaComments />,
          color: 'from-blue-500 to-cyan-600'
        }]);
        setTotalRevenue(125000);
        setConversionRate(23);
      }, 1000);
      
      setTimeout(() => {
        setLeadSources(prev => [...prev, {
          name: 'Social Media',
          count: 32,
          conversionRate: 18,
          revenue: 89000,
          icon: <FaUsers />,
          color: 'from-purple-500 to-pink-600'
        }]);
        setTotalRevenue(214000);
        setConversionRate(21);
      }, 3000);
      
      setTimeout(() => {
        setLeadSources(prev => [...prev, {
          name: 'Email Campaign',
          count: 28,
          conversionRate: 15,
          revenue: 67000,
          icon: <FaEnvelope />,
          color: 'from-green-500 to-emerald-600'
        }]);
        setTotalRevenue(281000);
        setConversionRate(19);
      }, 5000);

      // Update workflow steps 3-4
      setWorkflowSteps(prev => prev.map(step => 
        step.id === 3 ? { ...step, status: 'completed' } : 
        step.id === 4 ? { ...step, status: 'active' } : step
      ));
    }, 6000);

    // Step 4: Show results
    setTimeout(() => {
      setCurrentStep(5);
      // Complete all workflow steps
      setWorkflowSteps(prev => prev.map(step => ({ ...step, status: 'completed' })));
    }, 8000);
  };

  const resetDemo = () => {
    setIsDemoActive(false);
    setCurrentStep(0);
    setLeads([]);
    setLeadSources([]);
    setTotalRevenue(0);
    setConversionRate(0);
    setWorkflowSteps(prev => prev.map(step => ({ ...step, status: 'pending' })));
    console.log('Demo reset - metrics should be zero:', { totalRevenue: 0, conversionRate: 0 });
  };

  const getStepTitle = () => {
    switch(currentStep) {
      case 0: return 'Ready to Start';
      case 1: return 'Lead Capture Active';
      case 2: return 'AI Qualification';
      case 3: return 'Multi-Channel Tracking';
      case 4: return 'Revenue Generation';
      case 5: return 'Demo Complete';
      default: return 'Ready to Start';
    }
  };

  const getStepDescription = () => {
    switch(currentStep) {
      case 0: return 'Click "Start Demo" to see how our AI captures and qualifies leads';
      case 1: return 'AI is monitoring your website and capturing visitor information';
      case 2: return 'AI is analyzing lead quality and predicting conversion probability';
      case 3: return 'Tracking leads across multiple channels and sources';
      case 4: return 'Watching revenue build up in real-time as leads are captured';
      case 5: return 'See how AI-powered lead generation transforms your business';
      default: return 'Click "Start Demo" to begin';
    }
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'completed': return 'text-green-400';
      case 'active': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusBg = (status: string) => {
    switch(status) {
      case 'completed': return 'bg-green-500/20 border-green-500/30';
      case 'active': return 'bg-blue-500/20 border-blue-500/30';
      default: return 'bg-gray-500/20 border-gray-500/30';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      {isClient && (
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
      )}

      {/* Header */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            🚀 Intelligent Lead Generation System
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform anonymous website visitors into qualified leads with AI-powered intelligence
          </p>
          
          {/* Demo Controls */}
          <div className="flex gap-4 justify-center mb-8">
            <button
              onClick={() => {
                console.log('Button clicked!');
                startDemo();
              }}
              disabled={isDemoActive}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 disabled:opacity-50"
            >
              <FaPlay className="w-4 h-4" />
              Start Demo
            </button>
            <button
              onClick={resetDemo}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300"
            >
              <FaRedo className="w-4 h-4" />
              Reset Demo
            </button>
            <button
              onClick={() => setShowWorkflow(!showWorkflow)}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300"
            >
              <FaCogs className="w-4 h-4" />
              {showWorkflow ? 'Hide Workflow' : 'Show Workflow'}
            </button>
          </div>
        </div>

        {/* Current Step Indicator */}
        <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/20 rounded-2xl p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">{getStepTitle()}</h2>
              <p className="text-gray-300">{getStepDescription()}</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 font-semibold">Active</span>
            </div>
          </div>
        </div>

        {/* Workflow Details Section */}
        {showWorkflow && (
          <div className="mb-8 bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/20 rounded-2xl p-6">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">🔧 Detailed Workflow Process</h3>
            <p className="text-gray-300 mb-6 text-center">
              See exactly how our AI-powered system transforms anonymous visitors into qualified leads
            </p>
            
            <div className="space-y-4">
              {workflowSteps.map((step) => (
                <div key={step.id} className={`p-4 rounded-xl border ${getStatusBg(step.status)} transition-all duration-300`}>
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${getStatusColor(step.status)}`}>
                      {step.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="text-lg font-bold text-white">{step.title}</h4>
                        <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(step.status)} bg-opacity-20`}>
                          {step.status === 'completed' ? '✓ Completed' : 
                           step.status === 'active' ? '⚡ Active' : '⏳ Pending'}
                        </span>
                      </div>
                      <p className="text-gray-300 mb-3">{step.description}</p>
                      
                      <div className="grid md:grid-cols-2 gap-4 mb-3">
                        <div>
                          <h5 className="text-sm font-semibold text-blue-400 mb-1">Technology Used</h5>
                          <p className="text-sm text-gray-400">{step.technology}</p>
                        </div>
                        <div>
                          <h5 className="text-sm font-semibold text-green-400 mb-1">Business Value</h5>
                          <p className="text-sm text-gray-400">{step.businessValue}</p>
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="text-sm font-semibold text-purple-400 mb-2">Key Features:</h5>
                        <ul className="space-y-1">
                          {step.details.map((detail, index) => (
                            <li key={index} className="text-sm text-gray-400 flex items-start gap-2">
                              <span className="text-purple-400 mt-1">•</span>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Left Column - Lead Capture & Qualification */}
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/20 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <FaUsers className="text-blue-400" />
                Captured Leads
              </h3>
              
              {leads.length === 0 ? (
                <div className="text-center py-8">
                  <FaUsers className="w-12 h-12 text-gray-500 mx-auto mb-4" />
                  <p className="text-gray-400">No leads captured yet</p>
                  <p className="text-sm text-gray-500 mt-2">Leads will appear here as they're captured</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {leads.map((lead, index) => (
                    <div key={index} className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                            <FaUser className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-white">{lead.name}</h4>
                            <p className="text-sm text-gray-400">{lead.company}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-green-400">{lead.score}%</div>
                          <div className="text-xs text-gray-400">Score</div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div>
                          <span className="text-gray-400">Email:</span>
                          <p className="text-white">{lead.email}</p>
                        </div>
                        <div>
                          <span className="text-gray-400">Phone:</span>
                          <p className="text-white">{lead.phone}</p>
                        </div>
                        <div>
                          <span className="text-gray-400">Budget:</span>
                          <p className="text-white">{lead.budget}</p>
                        </div>
                        <div>
                          <span className="text-gray-400">Timeline:</span>
                          <p className="text-white">{lead.timeline}</p>
                        </div>
                      </div>
                      
                      <div className="mt-3 flex items-center justify-between">
                        <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full">
                          {lead.source}
                        </span>
                        <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
                          {lead.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Analytics & Results */}
          <div className="space-y-6">
            {/* Lead Sources */}
            <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/20 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <FaChartPie className="text-purple-400" />
                Lead Sources
              </h3>
              
              {leadSources.length === 0 ? (
                <div className="text-center py-8">
                  <FaChartPie className="w-12 h-12 text-gray-500 mx-auto mb-4" />
                  <p className="text-gray-400">No data available yet</p>
                  <p className="text-sm text-gray-500 mt-2">Lead source analytics will appear here</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {leadSources.map((source, index) => (
                    <div key={index} className="bg-white/5 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 bg-gradient-to-r ${source.color} rounded-full flex items-center justify-center`}>
                            {source.icon}
                          </div>
                          <div>
                            <h4 className="font-semibold text-white">{source.name}</h4>
                            <p className="text-sm text-gray-400">{source.count} leads</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-green-400">{source.conversionRate}%</div>
                          <div className="text-xs text-gray-400">Conversion</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Revenue:</span>
                        <span className="text-white font-semibold">${source.revenue.toLocaleString()}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Key Metrics */}
            <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/20 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <FaChartLine className="text-green-400" />
                Key Metrics
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white/5 rounded-xl">
                  <div className="text-3xl font-bold text-green-400 mb-2">${totalRevenue.toLocaleString()}</div>
                  <div className="text-sm text-gray-400">Total Revenue</div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-xl">
                  <div className="text-3xl font-bold text-blue-400 mb-2">{conversionRate}%</div>
                  <div className="text-sm text-gray-400">Conversion Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Benefits */}
        <div className="mt-12 bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/20 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Why This System is Revolutionary</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <FaBrain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">AI-Powered Intelligence</h3>
              <p className="text-gray-300 text-sm">
                Automatically qualifies leads based on behavior, intent, and engagement patterns
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <FaBullseye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">10x Higher Conversion</h3>
              <p className="text-gray-300 text-sm">
                Convert anonymous visitors into qualified leads with precision targeting
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <FaFire className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Real-Time Results</h3>
              <p className="text-gray-300 text-sm">
                See leads captured, qualified, and converted in real-time with live analytics
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 