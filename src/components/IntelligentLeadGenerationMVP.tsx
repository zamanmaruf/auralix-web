'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  FaBrain, FaEye, FaHeart, FaMicrophone, FaCog, FaMagic, FaRocket, 
  FaCheck, FaArrowRight, FaClock, FaDatabase, FaNetworkWired, 
  FaChartLine, FaUser, FaPhone, FaEnvelope, FaMapMarkerAlt, 
  FaCalendar, FaDollarSign, FaStar, FaGem, FaPlay, FaPause, 
  FaRedo, FaRobot, FaComments, FaChartBar, FaThumbsUp, 
  FaLightbulb, FaShieldAlt, FaBolt, FaCrown, FaInfinity, 
  FaUsers, FaBullseye, FaChartPie, FaHandshake, FaGift, 
  FaFire, FaSearch, FaFilter, FaAnalytics, FaCogs, FaGlobe, 
  FaMobile, FaDesktop, FaTablet, FaMousePointer, FaScroll, 
  FaKeyboard, FaEyeDropper, FaSatellite
} from 'react-icons/fa';

interface VisitorData {
  id: string;
  sessionId: string;
  timestamp: Date;
  behavior: {
    pagesVisited: string[];
    timeOnSite: number;
    scrollDepth: number;
    mouseMovements: number;
    clicks: number;
    formInteractions: number;
  };
  intent: {
    score: number;
    predictedAction: string;
    confidence: number;
    urgency: 'low' | 'medium' | 'high';
  };
  company: {
    name?: string;
    size?: string;
    industry?: string;
    location?: string;
  };
}

interface LeadScore {
  visitorId: string;
  score: number;
  factors: {
    behaviorScore: number;
    companyScore: number;
    engagementScore: number;
    intentScore: number;
  };
  predictedRevenue: number;
  conversionProbability: number;
  recommendedAction: string;
  priority: 'low' | 'medium' | 'high' | 'critical';
}

interface LeadCapture {
  id: string;
  visitorId: string;
  source: 'chat' | 'form' | 'social' | 'phone' | 'ai_detection';
  data: {
    name: string;
    email: string;
    phone?: string;
    company?: string;
    role?: string;
    budget?: string;
    timeline?: string;
  };
  timestamp: Date;
  score: number;
  status: 'new' | 'qualified' | 'contacted' | 'converted';
}

interface LiveDashboard {
  activeVisitors: number;
  qualifiedLeads: LeadScore[];
  revenuePredictions: {
    today: number;
    thisWeek: number;
    thisMonth: number;
  };
  conversionOptimizations: {
    suggestion: string;
    impact: number;
    implementation: string;
  }[];
}

const IntelligentLeadGenerationMVP: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [visitors, setVisitors] = useState<VisitorData[]>([]);
  const [leadScores, setLeadScores] = useState<LeadScore[]>([]);
  const [capturedLeads, setCapturedLeads] = useState<LeadCapture[]>([]);
  const [dashboard, setDashboard] = useState<LiveDashboard>({
    activeVisitors: 0,
    qualifiedLeads: [],
    revenuePredictions: { today: 0, thisWeek: 0, thisMonth: 0 },
    conversionOptimizations: []
  });
  const [currentVisitor, setCurrentVisitor] = useState<VisitorData | null>(null);
  const [isTracking, setIsTracking] = useState(false);
  const [aiProcessing, setAiProcessing] = useState(false);
  const [captureMode, setCaptureMode] = useState<'automatic' | 'manual'>('automatic');

  // Real-time visitor tracking
  const trackVisitor = () => {
    const newVisitor: VisitorData = {
      id: `visitor_${Date.now()}`,
      sessionId: `session_${Math.random().toString(36).substr(2, 9)}`,
      timestamp: new Date(),
      behavior: {
        pagesVisited: ['/solutions', '/pricing', '/contact'],
        timeOnSite: Math.floor(Math.random() * 300) + 60,
        scrollDepth: Math.floor(Math.random() * 100) + 20,
        mouseMovements: Math.floor(Math.random() * 500) + 100,
        clicks: Math.floor(Math.random() * 20) + 5,
        formInteractions: Math.floor(Math.random() * 3) + 1
      },
      intent: {
        score: Math.floor(Math.random() * 100) + 20,
        predictedAction: ['request_demo', 'contact_sales', 'download_brochure'][Math.floor(Math.random() * 3)],
        confidence: Math.floor(Math.random() * 40) + 60,
        urgency: ['low', 'medium', 'high'][Math.floor(Math.random() * 3)] as 'low' | 'medium' | 'high'
      },
      company: {
        name: ['TechCorp', 'InnovateLabs', 'DigitalFlow', 'CloudScale', 'DataVault'][Math.floor(Math.random() * 5)],
        size: ['1-10', '11-50', '51-200', '201-1000', '1000+'][Math.floor(Math.random() * 5)],
        industry: ['Technology', 'Healthcare', 'Finance', 'Education', 'Manufacturing'][Math.floor(Math.random() * 5)],
        location: ['San Francisco', 'New York', 'Austin', 'Seattle', 'Boston'][Math.floor(Math.random() * 5)]
      }
    };

    setVisitors(prev => [...prev, newVisitor]);
    setCurrentVisitor(newVisitor);
    return newVisitor;
  };

  // AI-powered lead scoring
  const calculateLeadScore = (visitor: VisitorData): LeadScore => {
    const behaviorScore = Math.min(100, 
      (visitor.behavior.timeOnSite / 300) * 30 +
      (visitor.behavior.scrollDepth / 100) * 25 +
      (visitor.behavior.clicks / 20) * 20 +
      (visitor.behavior.formInteractions / 3) * 25
    );

    const companyScore = visitor.company.size === '1000+' ? 90 :
                        visitor.company.size === '201-1000' ? 80 :
                        visitor.company.size === '51-200' ? 70 :
                        visitor.company.size === '11-50' ? 60 : 40;

    const engagementScore = Math.min(100,
      (visitor.behavior.mouseMovements / 500) * 40 +
      (visitor.intent.score / 100) * 60
    );

    const intentScore = visitor.intent.confidence;

    const totalScore = Math.round(
      (behaviorScore * 0.3) +
      (companyScore * 0.25) +
      (engagementScore * 0.25) +
      (intentScore * 0.2)
    );

    const predictedRevenue = totalScore > 80 ? 50000 :
                           totalScore > 60 ? 25000 :
                           totalScore > 40 ? 10000 : 5000;

    const conversionProbability = totalScore > 80 ? 0.85 :
                                totalScore > 60 ? 0.65 :
                                totalScore > 40 ? 0.45 : 0.25;

    const priority = totalScore > 85 ? 'critical' :
                    totalScore > 70 ? 'high' :
                    totalScore > 50 ? 'medium' : 'low';

    const recommendedAction = totalScore > 80 ? 'Immediate follow-up call' :
                            totalScore > 60 ? 'Send personalized demo' :
                            totalScore > 40 ? 'Add to nurture sequence' : 'Monitor behavior';

    return {
      visitorId: visitor.id,
      score: totalScore,
      factors: {
        behaviorScore: Math.round(behaviorScore),
        companyScore,
        engagementScore: Math.round(engagementScore),
        intentScore
      },
      predictedRevenue,
      conversionProbability,
      recommendedAction,
      priority
    };
  };

  // Start the intelligent lead generation system
  const startSystem = () => {
    setIsActive(true);
    setIsTracking(true);
    setAiProcessing(true);

    // Simulate real-time visitor tracking
    const trackingInterval = setInterval(() => {
      if (isTracking) {
        const newVisitor = trackVisitor();
        const leadScore = calculateLeadScore(newVisitor);
        
        setLeadScores(prev => [...prev, leadScore]);
        
        // Auto-capture high-scoring leads
        if (leadScore.score > 70 && captureMode === 'automatic') {
          const capturedLead: LeadCapture = {
            id: `lead_${Date.now()}`,
            visitorId: newVisitor.id,
            source: 'ai_detection',
            data: {
              name: `Lead from ${newVisitor.company.name}`,
              email: `contact@${newVisitor.company.name?.toLowerCase().replace(/\s+/g, '')}.com`,
              company: newVisitor.company.name,
              role: 'Decision Maker',
              budget: newVisitor.company.size === '1000+' ? '$100K+' : '$25K-$100K',
              timeline: 'Next 30 days'
            },
            timestamp: new Date(),
            score: leadScore.score,
            status: 'new'
          };
          
          setCapturedLeads(prev => [...prev, capturedLead]);
        }
      }
    }, 3000); // New visitor every 3 seconds

    // Update dashboard
    const dashboardInterval = setInterval(() => {
      setDashboard(prev => ({
        activeVisitors: visitors.length,
        qualifiedLeads: leadScores.filter(score => score.score > 60),
        revenuePredictions: {
          today: leadScores.reduce((sum, score) => sum + score.predictedRevenue, 0),
          thisWeek: leadScores.reduce((sum, score) => sum + score.predictedRevenue, 0) * 7,
          thisMonth: leadScores.reduce((sum, score) => sum + score.predictedRevenue, 0) * 30
        },
        conversionOptimizations: [
          {
            suggestion: 'Add more CTAs on pricing page',
            impact: 15,
            implementation: 'Add 3 new CTAs with A/B testing'
          },
          {
            suggestion: 'Optimize form fields for mobile',
            impact: 12,
            implementation: 'Reduce form fields by 40%'
          },
          {
            suggestion: 'Implement exit-intent popup',
            impact: 8,
            implementation: 'Show demo request on exit'
          }
        ]
      }));
    }, 2000);

    return () => {
      clearInterval(trackingInterval);
      clearInterval(dashboardInterval);
    };
  };

  const stopSystem = () => {
    setIsActive(false);
    setIsTracking(false);
    setAiProcessing(false);
  };

  const resetSystem = () => {
    setVisitors([]);
    setLeadScores([]);
    setCapturedLeads([]);
    setCurrentVisitor(null);
    setDashboard({
      activeVisitors: 0,
      qualifiedLeads: [],
      revenuePredictions: { today: 0, thisWeek: 0, thisMonth: 0 },
      conversionOptimizations: []
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            🧠 Intelligent Lead Generation MVP
          </h1>
          <p className="text-xl text-gray-300">
            Real-time visitor tracking • AI-powered scoring • Automatic lead capture
          </p>
        </div>

        {/* Control Panel */}
        <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-purple-500/30">
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <button
              onClick={startSystem}
              disabled={isActive}
              className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 disabled:bg-gray-600 rounded-lg text-white font-semibold transition-all"
            >
              <FaPlay /> Start System
            </button>
            
            <button
              onClick={stopSystem}
              disabled={!isActive}
              className="flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 disabled:bg-gray-600 rounded-lg text-white font-semibold transition-all"
            >
              <FaPause /> Stop System
            </button>
            
            <button
              onClick={resetSystem}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold transition-all"
            >
              <FaRedo /> Reset
            </button>

            <div className="flex items-center gap-2">
              <span className="text-gray-300">Capture Mode:</span>
              <select
                value={captureMode}
                onChange={(e) => setCaptureMode(e.target.value as 'automatic' | 'manual')}
                className="bg-black/50 text-white px-3 py-2 rounded-lg border border-purple-500/30"
              >
                <option value="automatic">Automatic</option>
                <option value="manual">Manual</option>
              </select>
            </div>
          </div>

          {/* Status Indicators */}
          <div className="flex justify-center gap-6 mt-6">
            <div className={`flex items-center gap-2 ${isTracking ? 'text-green-400' : 'text-gray-400'}`}>
              <div className={`w-3 h-3 rounded-full ${isTracking ? 'bg-green-400' : 'bg-gray-400'}`}></div>
              <span>Visitor Tracking</span>
            </div>
            
            <div className={`flex items-center gap-2 ${aiProcessing ? 'text-blue-400' : 'text-gray-400'}`}>
              <div className={`w-3 h-3 rounded-full ${aiProcessing ? 'bg-blue-400' : 'bg-gray-400'}`}></div>
              <span>AI Processing</span>
            </div>
            
            <div className={`flex items-center gap-2 ${isActive ? 'text-purple-400' : 'text-gray-400'}`}>
              <div className={`w-3 h-3 rounded-full ${isActive ? 'bg-purple-400' : 'bg-gray-400'}`}></div>
              <span>System Active</span>
            </div>
          </div>
        </div>

        {/* Live Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Active Visitors */}
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30">
            <div className="flex items-center gap-3 mb-4">
              <FaUsers className="text-2xl text-blue-400" />
              <h3 className="text-xl font-semibold text-white">Active Visitors</h3>
            </div>
            <div className="text-4xl font-bold text-blue-400 mb-2">{dashboard.activeVisitors}</div>
            <div className="text-gray-400">Real-time tracking</div>
            
            {currentVisitor && (
              <div className="mt-4 p-4 bg-black/20 rounded-lg">
                <div className="text-sm text-gray-300 mb-2">Current Visitor:</div>
                <div className="text-white font-medium">{currentVisitor.company.name}</div>
                <div className="text-sm text-gray-400">{currentVisitor.company.size} employees</div>
                <div className="text-sm text-gray-400">{currentVisitor.company.industry}</div>
              </div>
            )}
          </div>

          {/* Qualified Leads */}
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30">
            <div className="flex items-center gap-3 mb-4">
              <FaBullseye className="text-2xl text-green-400" />
              <h3 className="text-xl font-semibold text-white">Qualified Leads</h3>
            </div>
            <div className="text-4xl font-bold text-green-400 mb-2">{dashboard.qualifiedLeads.length}</div>
            <div className="text-gray-400">Score > 60</div>
            
            {dashboard.qualifiedLeads.length > 0 && (
              <div className="mt-4 space-y-2">
                {dashboard.qualifiedLeads.slice(0, 3).map((lead, index) => (
                  <div key={index} className="flex justify-between items-center p-2 bg-black/20 rounded">
                    <span className="text-white text-sm">Lead {index + 1}</span>
                    <span className={`text-sm font-medium ${
                      lead.priority === 'critical' ? 'text-red-400' :
                      lead.priority === 'high' ? 'text-orange-400' :
                      lead.priority === 'medium' ? 'text-yellow-400' : 'text-gray-400'
                    }`}>
                      Score: {lead.score}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Revenue Predictions */}
        <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-purple-500/30">
          <div className="flex items-center gap-3 mb-6">
            <FaChartLine className="text-2xl text-purple-400" />
            <h3 className="text-xl font-semibold text-white">Revenue Predictions</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">
                ${dashboard.revenuePredictions.today.toLocaleString()}
              </div>
              <div className="text-gray-400">Today</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">
                ${dashboard.revenuePredictions.thisWeek.toLocaleString()}
              </div>
              <div className="text-gray-400">This Week</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">
                ${dashboard.revenuePredictions.thisMonth.toLocaleString()}
              </div>
              <div className="text-gray-400">This Month</div>
            </div>
          </div>
        </div>

        {/* Captured Leads */}
        <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-purple-500/30">
          <div className="flex items-center gap-3 mb-6">
            <FaHandshake className="text-2xl text-yellow-400" />
            <h3 className="text-xl font-semibold text-white">Captured Leads</h3>
            <span className="text-sm text-gray-400">({capturedLeads.length} total)</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {capturedLeads.slice(-6).map((lead, index) => (
              <div key={lead.id} className="bg-black/20 rounded-lg p-4 border border-gray-700">
                <div className="flex justify-between items-start mb-2">
                  <div className="text-white font-medium">{lead.data.name}</div>
                  <span className={`text-xs px-2 py-1 rounded ${
                    lead.score > 80 ? 'bg-red-500/20 text-red-400' :
                    lead.score > 60 ? 'bg-orange-500/20 text-orange-400' :
                    'bg-green-500/20 text-green-400'
                  }`}>
                    Score: {lead.score}
                  </span>
                </div>
                <div className="text-sm text-gray-400 mb-1">{lead.data.email}</div>
                <div className="text-sm text-gray-400 mb-2">{lead.data.company}</div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">{lead.source}</span>
                  <span className={`text-xs px-2 py-1 rounded ${
                    lead.status === 'converted' ? 'bg-green-500/20 text-green-400' :
                    lead.status === 'contacted' ? 'bg-blue-500/20 text-blue-400' :
                    lead.status === 'qualified' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-gray-500/20 text-gray-400'
                  }`}>
                    {lead.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Optimization Suggestions */}
        <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30">
          <div className="flex items-center gap-3 mb-6">
            <FaBrain className="text-2xl text-cyan-400" />
            <h3 className="text-xl font-semibold text-white">AI Optimization Suggestions</h3>
          </div>
          
          <div className="space-y-4">
            {dashboard.conversionOptimizations.map((optimization, index) => (
              <div key={index} className="bg-black/20 rounded-lg p-4 border border-gray-700">
                <div className="flex justify-between items-start mb-2">
                  <div className="text-white font-medium">{optimization.suggestion}</div>
                  <span className="text-green-400 font-semibold">+{optimization.impact}%</span>
                </div>
                <div className="text-sm text-gray-400">{optimization.implementation}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntelligentLeadGenerationMVP;
