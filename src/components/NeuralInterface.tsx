'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { FaBrain, FaWaveSquare, FaEye, FaMicrophone, FaCog, FaMagic, FaRocket } from 'react-icons/fa';

interface NeuralSignal {
  type: 'thought' | 'emotion' | 'intention' | 'memory';
  strength: number; // 0-1
  frequency: number; // Hz
  coherence: number; // 0-1
  timestamp: number;
}

interface BrainWavePattern {
  alpha: number; // 8-13 Hz - relaxed, creative
  beta: number;  // 13-30 Hz - focused, alert
  theta: number; // 4-8 Hz - meditation, intuition
  delta: number; // 0.5-4 Hz - deep sleep, healing
  gamma: number; // 30-100 Hz - insight, high-level processing
}

interface NeuralOrder {
  item: string;
  confidence: number;
  thoughtPattern: string;
  emotionalContext: string;
  neuralPathway: string[];
}

export default function NeuralInterface() {
  const [isConnected, setIsConnected] = useState(false);
  const [neuralSignals, setNeuralSignals] = useState<NeuralSignal[]>([]);
  const [brainWaves, setBrainWaves] = useState<BrainWavePattern>({
    alpha: 0.3,
    beta: 0.4,
    theta: 0.2,
    delta: 0.05,
    gamma: 0.05,
  });
  const [currentThought, setCurrentThought] = useState('');
  const [neuralOrders, setNeuralOrders] = useState<NeuralOrder[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [consciousnessLevel, setConsciousnessLevel] = useState(0.7);

  // Simulate neural signal generation
  const generateNeuralSignal = useCallback(() => {
    const signalTypes: NeuralSignal['type'][] = ['thought', 'emotion', 'intention', 'memory'];
    const randomType = signalTypes[Math.floor(Math.random() * signalTypes.length)];
    
    const newSignal: NeuralSignal = {
      type: randomType,
      strength: Math.random(),
      frequency: Math.random() * 100 + 1,
      coherence: Math.random(),
      timestamp: Date.now(),
    };
    
    setNeuralSignals(prev => [...prev.slice(-9), newSignal]); // Keep last 10 signals
  }, []);

  // Simulate brain wave patterns
  const updateBrainWaves = useCallback(() => {
    setBrainWaves(prev => ({
      alpha: Math.max(0, Math.min(1, prev.alpha + (Math.random() - 0.5) * 0.1)),
      beta: Math.max(0, Math.min(1, prev.beta + (Math.random() - 0.5) * 0.1)),
      theta: Math.max(0, Math.min(1, prev.theta + (Math.random() - 0.5) * 0.1)),
      delta: Math.max(0, Math.min(1, prev.delta + (Math.random() - 0.5) * 0.05)),
      gamma: Math.max(0, Math.min(1, prev.gamma + (Math.random() - 0.5) * 0.05)),
    }));
  }, []);

  // Process neural signals into orders
  const processNeuralSignals = useCallback(() => {
    setIsProcessing(true);
    
    setTimeout(() => {
      const recentSignals = neuralSignals.slice(-5);
      const dominantSignal = recentSignals.reduce((max, signal) => 
        signal.strength > max.strength ? signal : max
      );
      
      const menuItems = [
        'Quantum Focus Bowl',
        'Consciousness Calm Tea',
        'Entangled Energy Smoothie',
        'Superposition Salad',
        'Neural Nourishment Plate',
        'Mindful Meditation Meal',
      ];
      
      const thoughtPatterns = [
        'Hunger + Focus',
        'Stress + Calm',
        'Energy + Vitality',
        'Balance + Harmony',
        'Creativity + Inspiration',
        'Healing + Restoration',
      ];
      
      const emotionalContexts = [
        'Seeking clarity and focus',
        'Need for stress relief',
        'Desire for energy boost',
        'Wanting balance and peace',
        'Feeling creative and inspired',
        'Seeking healing and restoration',
      ];
      
      const neuralPathways = [
        ['prefrontal-cortex', 'hippocampus', 'amygdala'],
        ['limbic-system', 'hypothalamus', 'brainstem'],
        ['reticular-activating-system', 'thalamus', 'cortex'],
        ['default-mode-network', 'salience-network', 'executive-network'],
        ['creative-center', 'inspiration-node', 'innovation-hub'],
        ['healing-center', 'restoration-node', 'recovery-hub'],
      ];
      
      const randomIndex = Math.floor(Math.random() * menuItems.length);
      
      const newOrder: NeuralOrder = {
        item: menuItems[randomIndex],
        confidence: dominantSignal.strength,
        thoughtPattern: thoughtPatterns[randomIndex],
        emotionalContext: emotionalContexts[randomIndex],
        neuralPathway: neuralPathways[randomIndex],
      };
      
      setNeuralOrders(prev => [...prev, newOrder]);
      setCurrentThought(`Detected: ${newOrder.thoughtPattern} - ${newOrder.emotionalContext}`);
      setIsProcessing(false);
    }, 2000);
  }, [neuralSignals]);

  // Connect to neural interface
  const connectNeuralInterface = () => {
    setIsConnected(true);
    setCurrentThought('Neural interface connected. Reading brain waves...');
    
    // Start continuous monitoring
    const signalInterval = setInterval(generateNeuralSignal, 1000);
    const waveInterval = setInterval(updateBrainWaves, 500);
    
    return () => {
      clearInterval(signalInterval);
      clearInterval(waveInterval);
    };
  };

  useEffect(() => {
    if (isConnected) {
      const cleanup = connectNeuralInterface();
      return cleanup;
    }
  }, [isConnected]);

  useEffect(() => {
    if (neuralSignals.length >= 5 && !isProcessing) {
      processNeuralSignals();
    }
  }, [neuralSignals, processNeuralSignals, isProcessing]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* Neural Interface Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-purple-900/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              🧠 Neural Interface Menu
            </h1>
            <p className="text-xl text-blue-200 mb-8">
              Order with your thoughts - The future of dining
            </p>
            
            {/* Connection Status */}
            <div className="flex justify-center mb-8">
              <button
                onClick={() => setIsConnected(!isConnected)}
                className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 shadow-2xl transform hover:scale-105 ${
                  isConnected
                    ? 'bg-gradient-to-r from-green-500 to-green-600 text-white'
                    : 'bg-gradient-to-r from-red-500 to-red-600 text-white'
                }`}
              >
                {isConnected ? '🟢 Neural Interface Connected' : '🔴 Connect Neural Interface'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Brain Wave Visualization */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/20 rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            🌊 Brain Wave Analysis
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Brain Wave Patterns */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-blue-200">Real-time Brain Waves</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Alpha (Relaxed):</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-32 bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${brainWaves.alpha * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-white font-semibold">{(brainWaves.alpha * 100).toFixed(0)}%</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Beta (Focused):</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-32 bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-green-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${brainWaves.beta * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-white font-semibold">{(brainWaves.beta * 100).toFixed(0)}%</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Theta (Intuitive):</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-32 bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-purple-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${brainWaves.theta * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-white font-semibold">{(brainWaves.theta * 100).toFixed(0)}%</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Gamma (Insight):</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-32 bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-pink-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${brainWaves.gamma * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-white font-semibold">{(brainWaves.gamma * 100).toFixed(0)}%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Neural Signals */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-purple-200">Neural Signal Processing</h4>
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {neuralSignals.map((signal, index) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-white/5 rounded">
                    <div className="flex items-center space-x-2">
                      <div className={`w-3 h-3 rounded-full ${
                        signal.type === 'thought' ? 'bg-blue-500' :
                        signal.type === 'emotion' ? 'bg-red-500' :
                        signal.type === 'intention' ? 'bg-green-500' : 'bg-purple-500'
                      }`}></div>
                      <span className="text-sm text-gray-300 capitalize">{signal.type}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-400">{(signal.strength * 100).toFixed(0)}%</div>
                      <div className="text-xs text-gray-400">{signal.frequency.toFixed(0)}Hz</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Current Thought Display */}
          {currentThought && (
            <div className="mt-6 p-4 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg border border-blue-400/20">
              <h4 className="text-lg font-semibold text-blue-200 mb-2">🧠 Current Neural Thought</h4>
              <p className="text-white">{currentThought}</p>
            </div>
          )}
        </div>
      </div>

      {/* Neural Orders */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-sm border border-purple-400/20 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            🧠 Neural Orders Generated
          </h3>
          
          {isProcessing && (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
              <p className="text-white">Processing neural signals...</p>
            </div>
          )}
          
          <div className="grid md:grid-cols-2 gap-6">
            {neuralOrders.map((order, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="text-lg font-bold text-white">{order.item}</h4>
                    <p className="text-gray-300 text-sm">{order.thoughtPattern}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-white">{(order.confidence * 100).toFixed(0)}%</div>
                    <div className="text-xs text-gray-400">confidence</div>
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="text-sm text-gray-300">
                    <span className="text-purple-300">Emotional Context:</span> {order.emotionalContext}
                  </div>
                  <div className="text-sm text-gray-300">
                    <span className="text-blue-300">Neural Pathway:</span> {order.neuralPathway.join(' → ')}
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <button className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all">
                    Confirm Order
                  </button>
                  <button className="flex-1 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-red-600 hover:to-red-700 transition-all">
                    Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {neuralOrders.length === 0 && !isProcessing && (
            <div className="text-center py-8">
              <div className="text-4xl mb-4">🧠</div>
              <p className="text-white opacity-80">No neural orders detected yet</p>
              <p className="text-sm text-white opacity-60">Think about what you want to eat...</p>
            </div>
          )}
        </div>
      </div>

      {/* Consciousness Level Monitor */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gradient-to-r from-indigo-900/50 to-blue-900/50 backdrop-blur-sm border border-indigo-400/20 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            🌟 Consciousness Level Monitor
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <FaBrain className="text-white text-2xl" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Consciousness Level</h4>
              <div className="text-3xl font-bold text-blue-400">
                {(consciousnessLevel * 100).toFixed(0)}%
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <FaWaveSquare className="text-white text-2xl" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Signal Strength</h4>
              <div className="text-3xl font-bold text-purple-400">
                {neuralSignals.length > 0 
                  ? (neuralSignals[neuralSignals.length - 1].strength * 100).toFixed(0)
                  : '0'}%
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <FaRocket className="text-white text-2xl" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Orders Generated</h4>
              <div className="text-3xl font-bold text-pink-400">
                {neuralOrders.length}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
