'use client';

import React, { useState, useEffect } from 'react';
import { 
  FaChartLine, 
  FaUsers, 
  FaRobot, 
  FaClock, 
  FaDollarSign, 
  FaArrowUp, 
  FaArrowDown,
  FaDownload,
  FaFilter,
  FaCalendarAlt,
  FaSync
} from 'react-icons/fa';
import PerformanceChart from '../../components/PerformanceChart';

interface MetricCard {
  title: string;
  value: string;
  change: number;
  changeType: 'increase' | 'decrease';
  icon: React.ReactNode;
  color: string;
}

interface Activity {
  id: number;
  action: string;
  user: string;
  time: string;
  type: string;
}

interface User {
  name: string;
  automations: number;
  timeSaved: number;
  joinedAt: string;
}

interface SystemHealth {
  uptime: number;
  responseTime: number;
  errorRate: number;
  activeUsers: number;
  apiCalls: number;
}

interface DashboardData {
  metrics: {
    totalUsers: number;
    aiAutomations: number;
    timeSaved: number;
    costSavings: number;
  };
  activities: Activity[];
  users: User[];
  automations: any[];
  systemHealth: SystemHealth;
  lastUpdated: string;
}

const Dashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('30d');
  const [isLoading, setIsLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);
  const [lastRefresh, setLastRefresh] = useState<Date>(new Date());

  // Fetch real-time data
  const fetchDashboardData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/dashboard/metrics');
      if (!response.ok) {
        throw new Error('Failed to fetch dashboard data');
      }
      const data = await response.json();
      setDashboardData(data);
      setLastRefresh(new Date());
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Initial data fetch
  useEffect(() => {
    fetchDashboardData();
  }, []);

  // Auto-refresh every 30 seconds
  useEffect(() => {
    const interval = setInterval(fetchDashboardData, 30000);
    return () => clearInterval(interval);
  }, []);

  if (isLoading && !dashboardData) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400 mx-auto mb-4"></div>
          <p className="text-gray-400">Loading real-time dashboard data...</p>
        </div>
      </div>
    );
  }

  if (!dashboardData) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-400 mb-4">Failed to load dashboard data</p>
          <button 
            onClick={fetchDashboardData}
            className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg transition-all duration-200"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  // Convert dashboard data to metric cards
  const metrics: MetricCard[] = [
    {
      title: 'Total Users',
      value: dashboardData.metrics.totalUsers.toLocaleString(),
      change: 12.5,
      changeType: 'increase',
      icon: <FaUsers className="text-2xl" />,
      color: 'bg-blue-500'
    },
    {
      title: 'AI Automations',
      value: dashboardData.metrics.aiAutomations.toLocaleString(),
      change: 8.3,
      changeType: 'increase',
      icon: <FaRobot className="text-2xl" />,
      color: 'bg-green-500'
    },
    {
      title: 'Time Saved',
      value: `${dashboardData.metrics.timeSaved} hrs`,
      change: 15.2,
      changeType: 'increase',
      icon: <FaClock className="text-2xl" />,
      color: 'bg-purple-500'
    },
    {
      title: 'Cost Savings',
      value: `$${dashboardData.metrics.costSavings.toLocaleString()}`,
      change: 22.1,
      changeType: 'increase',
      icon: <FaDollarSign className="text-2xl" />,
      color: 'bg-yellow-500'
    }
  ];

  const exportData = () => {
    const dataStr = JSON.stringify(dashboardData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `dashboard-data-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Real-Time Analytics Dashboard
              </h1>
              <p className="text-gray-300 mt-2">
                Live insights and performance metrics • Last updated: {new Date(dashboardData.lastUpdated).toLocaleTimeString()}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-gray-800/50 rounded-lg px-3 py-2">
                <FaCalendarAlt className="text-cyan-400" />
                <select 
                  value={selectedPeriod} 
                  onChange={(e) => setSelectedPeriod(e.target.value)}
                  className="bg-transparent text-white border-none outline-none"
                >
                  <option value="7d">Last 7 days</option>
                  <option value="30d">Last 30 days</option>
                  <option value="90d">Last 90 days</option>
                  <option value="1y">Last year</option>
                </select>
              </div>
              <button 
                onClick={fetchDashboardData}
                className="flex items-center gap-2 px-3 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-all duration-200"
                title="Refresh data"
              >
                <FaSync className={`text-sm ${isLoading ? 'animate-spin' : ''}`} />
              </button>
              <button 
                onClick={exportData}
                className="flex items-center gap-2 px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg transition-all duration-200"
              >
                <FaDownload />
                Export
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-200">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg ${metric.color}`}>
                  {metric.icon}
                </div>
                <div className={`flex items-center gap-1 text-sm ${
                  metric.changeType === 'increase' ? 'text-green-400' : 'text-red-400'
                }`}>
                  {metric.changeType === 'increase' ? <FaArrowUp /> : <FaArrowDown />}
                  {metric.change}%
                </div>
              </div>
              <h3 className="text-gray-300 text-sm font-medium mb-1">{metric.title}</h3>
              <p className="text-2xl font-bold text-white">{metric.value}</p>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Performance Chart */}
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-white">Performance Overview</h3>
              <div className="flex items-center gap-2">
                <FaFilter className="text-gray-400" />
                <span className="text-sm text-gray-400">Filter</span>
              </div>
            </div>
            <PerformanceChart data={dashboardData} />
          </div>

          {/* Activity Feed */}
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-white">Recent Activity</h3>
              <button className="text-cyan-400 text-sm hover:text-cyan-300 transition-colors">
                View All
              </button>
            </div>
            <div className="space-y-4">
              {dashboardData.activities.length > 0 ? (
                dashboardData.activities.map((activity) => (
                  <div key={activity.id} className="flex items-center gap-3 p-3 bg-gray-700/30 rounded-lg">
                    <div className={`w-2 h-2 rounded-full ${
                      activity.type === 'automation' ? 'bg-blue-400' :
                      activity.type === 'workflow' ? 'bg-green-400' :
                      activity.type === 'user' ? 'bg-purple-400' :
                      activity.type === 'integration' ? 'bg-yellow-400' :
                      'bg-gray-400'
                    }`}></div>
                    <div className="flex-1">
                      <p className="text-white text-sm">{activity.action}</p>
                      <p className="text-gray-400 text-xs">{activity.user} • {new Date(activity.time).toLocaleTimeString()}</p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-400">No recent activity</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Detailed Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Top Users */}
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
            <h3 className="text-xl font-semibold text-white mb-6">Top Users</h3>
            <div className="space-y-4">
              {dashboardData.users.length > 0 ? (
                dashboardData.users.map((user, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg">
                    <div>
                      <p className="text-white font-medium">{user.name}</p>
                      <p className="text-gray-400 text-sm">{user.automations} automations</p>
                    </div>
                    <div className="text-right">
                      <p className="text-cyan-400 font-medium">{user.timeSaved} hrs</p>
                      <p className="text-gray-400 text-sm">time saved</p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-400">No users yet</p>
                </div>
              )}
            </div>
          </div>

          {/* Automation Types */}
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
            <h3 className="text-xl font-semibold text-white mb-6">Automation Types</h3>
            <div className="space-y-4">
              {dashboardData.automations.length > 0 ? (
                dashboardData.automations.map((automation, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">{automation.type}</span>
                      <span className="text-white">1</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: '100%' }}
                      ></div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-400">No automations yet</p>
                </div>
              )}
            </div>
          </div>

          {/* System Health */}
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
            <h3 className="text-xl font-semibold text-white mb-6">System Health</h3>
            <div className="space-y-4">
              {[
                { metric: 'Uptime', value: `${dashboardData.systemHealth.uptime}%`, status: 'healthy', color: 'text-green-400' },
                { metric: 'Response Time', value: `${dashboardData.systemHealth.responseTime}ms`, status: 'optimal', color: 'text-green-400' },
                { metric: 'Error Rate', value: `${dashboardData.systemHealth.errorRate}%`, status: 'low', color: 'text-green-400' },
                { metric: 'Active Users', value: dashboardData.systemHealth.activeUsers.toLocaleString(), status: 'high', color: 'text-blue-400' },
                { metric: 'API Calls', value: `${(dashboardData.systemHealth.apiCalls / 1000).toFixed(1)}K/min`, status: 'normal', color: 'text-yellow-400' }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg">
                  <div>
                    <p className="text-gray-300 text-sm">{item.metric}</p>
                    <p className="text-white font-medium">{item.value}</p>
                  </div>
                  <div className="text-right">
                    <p className={`text-sm ${item.color}`}>{item.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 