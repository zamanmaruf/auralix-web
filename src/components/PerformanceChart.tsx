'use client';

import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface PerformanceChartProps {
  data: {
    metrics: {
      totalUsers: number;
      aiAutomations: number;
      timeSaved: number;
      costSavings: number;
    };
    activities: any[];
    users: any[];
    automations: any[];
    systemHealth: {
      uptime: number;
      responseTime: number;
      errorRate: number;
      activeUsers: number;
      apiCalls: number;
    };
    lastUpdated: string;
  };
}

const PerformanceChart: React.FC<PerformanceChartProps> = ({ data }) => {
  // Generate time labels for the last 7 days
  const generateTimeLabels = () => {
    const labels = [];
    for (let i = 6; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      labels.push(date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }));
    }
    return labels;
  };

  // Generate mock data based on current metrics (in real app, this would come from historical data)
  const generateChartData = () => {
    const labels = generateTimeLabels();
    const baseUsers = Math.max(0, data.metrics.totalUsers - 50);
    const baseAutomations = Math.max(0, data.metrics.aiAutomations - 30);
    const baseTimeSaved = Math.max(0, data.metrics.timeSaved - 20);
    const baseCostSavings = Math.max(0, data.metrics.costSavings - 1000);

    return {
      labels,
      datasets: [
        {
          label: 'Total Users',
          data: labels.map((_, index) => {
            const progress = index / (labels.length - 1);
            return Math.floor(baseUsers + (data.metrics.totalUsers - baseUsers) * progress);
          }),
          borderColor: '#3B82F6',
          backgroundColor: 'rgba(59, 130, 246, 0.1)',
          fill: true,
          tension: 0.4,
        },
        {
          label: 'AI Automations',
          data: labels.map((_, index) => {
            const progress = index / (labels.length - 1);
            return Math.floor(baseAutomations + (data.metrics.aiAutomations - baseAutomations) * progress);
          }),
          borderColor: '#10B981',
          backgroundColor: 'rgba(16, 185, 129, 0.1)',
          fill: true,
          tension: 0.4,
        },
        {
          label: 'Time Saved (hrs)',
          data: labels.map((_, index) => {
            const progress = index / (labels.length - 1);
            return Math.floor(baseTimeSaved + (data.metrics.timeSaved - baseTimeSaved) * progress);
          }),
          borderColor: '#8B5CF6',
          backgroundColor: 'rgba(139, 92, 246, 0.1)',
          fill: true,
          tension: 0.4,
        },
      ],
    };
  };

  const chartData = generateChartData();

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: '#ffffff',
          font: {
            size: 12,
          },
        },
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        borderColor: '#3B82F6',
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#9CA3AF',
          font: {
            size: 11,
          },
        },
        grid: {
          color: 'rgba(156, 163, 175, 0.1)',
        },
      },
      y: {
        ticks: {
          color: '#9CA3AF',
          font: {
            size: 11,
          },
        },
        grid: {
          color: 'rgba(156, 163, 175, 0.1)',
        },
      },
    },
    interaction: {
      intersect: false,
      mode: 'index' as const,
    },
  };

  return (
    <div className="h-64">
      <Line data={chartData} options={options} />
    </div>
  );
};

export default PerformanceChart; 