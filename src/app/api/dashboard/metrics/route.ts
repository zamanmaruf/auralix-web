import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

// Data file path
const dataPath = path.join(process.cwd(), 'data', 'dashboard.json');

// Initialize default data if file doesn't exist
async function initializeData() {
  try {
    await fs.access(dataPath);
  } catch {
    const defaultData = {
      metrics: {
        totalUsers: 0,
        aiAutomations: 0,
        timeSaved: 0,
        costSavings: 0
      },
      activities: [],
      users: [],
      automations: [],
      systemHealth: {
        uptime: 99.9,
        responseTime: 45,
        errorRate: 0.1,
        activeUsers: 0,
        apiCalls: 0
      },
      lastUpdated: new Date().toISOString()
    };
    
    // Ensure data directory exists
    await fs.mkdir(path.dirname(dataPath), { recursive: true });
    await fs.writeFile(dataPath, JSON.stringify(defaultData, null, 2));
  }
}

// Read current data
async function readData() {
  await initializeData();
  const data = await fs.readFile(dataPath, 'utf-8');
  return JSON.parse(data);
}

// Write data
async function writeData(data: any) {
  await fs.writeFile(dataPath, JSON.stringify(data, null, 2));
}

export async function GET() {
  try {
    const data = await readData();
    
    // Calculate real-time metrics
    const now = new Date();
    const lastUpdate = new Date(data.lastUpdated);
    const timeDiff = now.getTime() - lastUpdate.getTime();
    
    // Simulate real-time growth (for demo purposes)
    const growthFactor = Math.min(timeDiff / (1000 * 60 * 60), 1); // Max 1 hour of growth
    
    const realTimeMetrics = {
      totalUsers: Math.floor(data.metrics.totalUsers + (growthFactor * 5)),
      aiAutomations: Math.floor(data.metrics.aiAutomations + (growthFactor * 3)),
      timeSaved: Math.floor(data.metrics.timeSaved + (growthFactor * 2)),
      costSavings: Math.floor(data.metrics.costSavings + (growthFactor * 150))
    };
    
    return NextResponse.json({
      metrics: realTimeMetrics,
      activities: data.activities.slice(-10), // Last 10 activities
      users: data.users.slice(-5), // Top 5 users
      automations: data.automations,
      systemHealth: {
        ...data.systemHealth,
        activeUsers: realTimeMetrics.totalUsers,
        apiCalls: Math.floor(Math.random() * 1000) + 40000 // Simulate API calls
      },
      lastUpdated: now.toISOString()
    });
  } catch (error) {
    console.error('Dashboard metrics error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch dashboard metrics' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const { action, data: actionData } = await request.json();
    const currentData = await readData();
    
    switch (action) {
      case 'addUser':
        currentData.metrics.totalUsers++;
        currentData.users.push({
          name: actionData.name,
          automations: 0,
          timeSaved: 0,
          joinedAt: new Date().toISOString()
        });
        break;
        
      case 'addAutomation':
        currentData.metrics.aiAutomations++;
        currentData.automations.push({
          type: actionData.type,
          userId: actionData.userId,
          createdAt: new Date().toISOString()
        });
        break;
        
      case 'addActivity':
        currentData.activities.push({
          id: Date.now(),
          action: actionData.action,
          user: actionData.user,
          time: new Date().toISOString(),
          type: actionData.type
        });
        break;
        
      case 'updateTimeSaved':
        currentData.metrics.timeSaved += actionData.hours;
        break;
        
      case 'updateCostSavings':
        currentData.metrics.costSavings += actionData.amount;
        break;
    }
    
    currentData.lastUpdated = new Date().toISOString();
    await writeData(currentData);
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Dashboard update error:', error);
    return NextResponse.json(
      { error: 'Failed to update dashboard' },
      { status: 500 }
    );
  }
} 