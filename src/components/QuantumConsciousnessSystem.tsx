'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { FaBrain, FaHeart, FaEye, FaMicrophone, FaCog, FaMagic } from 'react-icons/fa';

// Quantum Consciousness State Interface
interface ConsciousnessState {
  mood: 'stressed' | 'happy' | 'focused' | 'relaxed' | 'energetic' | 'tired';
  healthMetrics: {
    heartRate: number;
    stressLevel: number;
    energyLevel: number;
    focusLevel: number;
  };
  context: {
    timeOfDay: string;
    weather: string;
    socialContext: string;
    upcomingEvents: string[];
    location: string;
  };
  preferences: {
    conscious: string[];
    unconscious: string[]; // AI-detected patterns
  };
  quantumState: {
    superposition: number; // 0-1, how many states the menu exists in
    entanglement: number; // 0-1, how connected to other users
    coherence: number; // 0-1, how stable the consciousness state is
  };
}

// Quantum Menu Item Interface
interface QuantumMenuItem {
  baseItem: MenuItem;
  consciousnessVariants: {
    [mood: string]: MenuItem;
    [healthState: string]: MenuItem;
    [context: string]: MenuItem;
  };
  probabilityMatrix: number[][]; // Quantum probability of selection
  quantumProperties: {
    superposition: boolean; // Exists in multiple states
    entanglement: string[]; // Connected to other items
    coherence: number; // Stability of the item state
  };
}

interface MenuItem {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  consciousnessTags: string[]; // Tags for consciousness matching
  quantumProperties?: {
    moodEnhancement: string[];
    healthBenefits: string[];
    cognitiveEffects: string[];
  };
}

export default function QuantumConsciousnessSystem() {
  const [consciousnessState, setConsciousnessState] = useState<ConsciousnessState>({
    mood: 'focused',
    healthMetrics: {
      heartRate: 72,
      stressLevel: 0.3,
      energyLevel: 0.7,
      focusLevel: 0.8,
    },
    context: {
      timeOfDay: 'afternoon',
      weather: 'sunny',
      socialContext: 'working',
      upcomingEvents: ['meeting in 2 hours'],
      location: 'office',
    },
    preferences: {
      conscious: ['healthy', 'protein'],
      unconscious: ['caffeine', 'comfort'],
    },
    quantumState: {
      superposition: 0.7,
      entanglement: 0.4,
      coherence: 0.8,
    },
  });

  const [quantumMenu, setQuantumMenu] = useState<QuantumMenuItem[]>([]);
  const [activeQuantumState, setActiveQuantumState] = useState(0);
  const [isDetecting, setIsDetecting] = useState(false);
  const [consciousnessInsights, setConsciousnessInsights] = useState<string[]>([]);

  // Quantum Menu Items with Consciousness Variants
  const baseMenuItems: MenuItem[] = [
    {
      name: 'Quantum Focus Bowl',
      description: 'Adaptive nutrition based on your cognitive state',
      price: 18,
      category: 'quantum',
      tags: ['quantum', 'focus', 'adaptive'],
      consciousnessTags: ['focused', 'productive', 'cognitive'],
      quantumProperties: {
        moodEnhancement: ['clarity', 'concentration'],
        healthBenefits: ['brain-boosting', 'sustained-energy'],
        cognitiveEffects: ['memory-enhancement', 'focus-improvement'],
      },
    },
    {
      name: 'Consciousness Calm Tea',
      description: 'Brewed based on your current stress levels',
      price: 8,
      category: 'quantum',
      tags: ['quantum', 'calming', 'adaptive'],
      consciousnessTags: ['stressed', 'anxious', 'relaxed'],
      quantumProperties: {
        moodEnhancement: ['calm', 'peace'],
        healthBenefits: ['stress-reduction', 'heart-health'],
        cognitiveEffects: ['anxiety-reduction', 'mental-clarity'],
      },
    },
    {
      name: 'Entangled Energy Smoothie',
      description: 'Connected to global energy patterns',
      price: 12,
      category: 'quantum',
      tags: ['quantum', 'energy', 'entangled'],
      consciousnessTags: ['energetic', 'tired', 'motivated'],
      quantumProperties: {
        moodEnhancement: ['vitality', 'enthusiasm'],
        healthBenefits: ['energy-boost', 'immune-support'],
        cognitiveEffects: ['alertness', 'creativity'],
      },
    },
    {
      name: 'Superposition Salad',
      description: 'Exists in multiple states simultaneously',
      price: 15,
      category: 'quantum',
      tags: ['quantum', 'healthy', 'superposition'],
      consciousnessTags: ['healthy', 'balanced', 'conscious'],
      quantumProperties: {
        moodEnhancement: ['balance', 'harmony'],
        healthBenefits: ['nutrition', 'wellness'],
        cognitiveEffects: ['mental-balance', 'clarity'],
      },
    },
  ];

  // Consciousness Detection Functions
  const detectMood = useCallback(() => {
    // Simulate mood detection through various sensors
    const moods = ['stressed', 'happy', 'focused', 'relaxed', 'energetic', 'tired'];
    const detectedMood = moods[Math.floor(Math.random() * moods.length)];
    return detectedMood as ConsciousnessState['mood'];
  }, []);

  const detectHealthMetrics = useCallback(() => {
    // Simulate health metrics from wearables
    return {
      heartRate: Math.floor(Math.random() * 40) + 60, // 60-100
      stressLevel: Math.random(), // 0-1
      energyLevel: Math.random(), // 0-1
      focusLevel: Math.random(), // 0-1
    };
  }, []);

  const analyzeContext = useCallback(() => {
    const timeOfDay = new Date().getHours() < 12 ? 'morning' : 
                     new Date().getHours() < 17 ? 'afternoon' : 'evening';
    const weathers = ['sunny', 'cloudy', 'rainy', 'stormy'];
    const weather = weathers[Math.floor(Math.random() * weathers.length)];
    
    return {
      timeOfDay,
      weather,
      socialContext: 'working',
      upcomingEvents: ['meeting in 2 hours'],
      location: 'office',
    };
  }, []);

  // Quantum State Management
  const updateQuantumState = useCallback(() => {
    setIsDetecting(true);
    
    setTimeout(() => {
      const newMood = detectMood();
      const newHealthMetrics = detectHealthMetrics();
      const newContext = analyzeContext();
      
      // Generate consciousness insights
      const insights = [
        `Detected ${newMood} mood - adapting menu for optimal experience`,
        `Heart rate: ${newHealthMetrics.heartRate} BPM - suggesting energy-appropriate items`,
        `Stress level: ${(newHealthMetrics.stressLevel * 100).toFixed(0)}% - recommending calming options`,
        `Focus level: ${(newHealthMetrics.focusLevel * 100).toFixed(0)}% - optimizing for cognitive enhancement`,
      ];
      
      setConsciousnessState(prev => ({
        ...prev,
        mood: newMood,
        healthMetrics: newHealthMetrics,
        context: newContext,
        quantumState: {
          superposition: Math.random(),
          entanglement: Math.random(),
          coherence: Math.random(),
        },
      }));
      
      setConsciousnessInsights(insights);
      setIsDetecting(false);
    }, 2000);
  }, [detectMood, detectHealthMetrics, analyzeContext]);

  // Generate Quantum Menu
  const generateQuantumMenu = useCallback(() => {
    const quantumItems: QuantumMenuItem[] = baseMenuItems.map(item => {
      const variants: any = {};
      
      // Create consciousness variants
      ['stressed', 'happy', 'focused', 'relaxed', 'energetic', 'tired'].forEach(mood => {
        variants[mood] = {
          ...item,
          name: `${mood.charAt(0).toUpperCase() + mood.slice(1)} ${item.name}`,
          description: `Optimized for ${mood} state: ${item.description}`,
          price: item.price + (Math.random() * 5 - 2.5), // Slight price variation
        };
      });
      
      return {
        baseItem: item,
        consciousnessVariants: variants,
        probabilityMatrix: Array(6).fill(0).map(() => Array(6).fill(Math.random())),
        quantumProperties: {
          superposition: Math.random() > 0.5,
          entanglement: baseMenuItems.filter(i => i !== item).map(i => i.name),
          coherence: Math.random(),
        },
      };
    });
    
    setQuantumMenu(quantumItems);
  }, []);

  // Get current quantum menu based on consciousness state
  const getCurrentQuantumMenu = useCallback(() => {
    return quantumMenu.map(item => {
      const variant = item.consciousnessVariants[consciousnessState.mood];
      return variant || item.baseItem;
    });
  }, [quantumMenu, consciousnessState.mood]);

  useEffect(() => {
    generateQuantumMenu();
    updateQuantumState();
    
    // Continuous consciousness monitoring
    const interval = setInterval(updateQuantumState, 10000);
    return () => clearInterval(interval);
  }, [generateQuantumMenu, updateQuantumState]);

  const currentMenu = getCurrentQuantumMenu();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* Quantum Consciousness Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-purple-900/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              🧠 Quantum Consciousness Menu
            </h1>
            <p className="text-xl text-blue-200 mb-8">
              The world's first menu that adapts to your consciousness state
            </p>
            
            {/* Quantum State Indicators */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-4 text-white">
                <div className="text-2xl font-bold">
                  {(consciousnessState.quantumState.superposition * 100).toFixed(0)}%
                </div>
                <div className="text-sm">Quantum Superposition</div>
              </div>
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-4 text-white">
                <div className="text-2xl font-bold">
                  {(consciousnessState.quantumState.entanglement * 100).toFixed(0)}%
                </div>
                <div className="text-sm">Global Entanglement</div>
              </div>
              <div className="bg-gradient-to-r from-pink-500 to-pink-600 rounded-xl p-4 text-white">
                <div className="text-2xl font-bold">
                  {(consciousnessState.quantumState.coherence * 100).toFixed(0)}%
                </div>
                <div className="text-sm">Consciousness Coherence</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Consciousness Detection Panel */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/20 rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            🧠 Consciousness Detection System
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Current State */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-blue-200">Current Consciousness State</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-300">Mood:</span>
                  <span className="text-white font-semibold capitalize">{consciousnessState.mood}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Heart Rate:</span>
                  <span className="text-white font-semibold">{consciousnessState.healthMetrics.heartRate} BPM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Stress Level:</span>
                  <span className="text-white font-semibold">
                    {(consciousnessState.healthMetrics.stressLevel * 100).toFixed(0)}%
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Energy Level:</span>
                  <span className="text-white font-semibold">
                    {(consciousnessState.healthMetrics.energyLevel * 100).toFixed(0)}%
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Focus Level:</span>
                  <span className="text-white font-semibold">
                    {(consciousnessState.healthMetrics.focusLevel * 100).toFixed(0)}%
                  </span>
                </div>
              </div>
            </div>

            {/* Detection Controls */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-purple-200">Quantum Detection Controls</h4>
              <div className="space-y-3">
                <button
                  onClick={updateQuantumState}
                  disabled={isDetecting}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all disabled:opacity-50"
                >
                  {isDetecting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span>Detecting Consciousness...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-2">
                      <FaBrain className="text-lg" />
                      <span>Detect Consciousness State</span>
                    </div>
                  )}
                </button>
                
                <div className="grid grid-cols-2 gap-2">
                  <button className="p-3 bg-green-600 hover:bg-green-500 text-white rounded-lg text-sm transition-all">
                    <FaHeart className="mx-auto mb-1" />
                    Heart Rate
                  </button>
                  <button className="p-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm transition-all">
                    <FaEye className="mx-auto mb-1" />
                    Eye Tracking
                  </button>
                  <button className="p-3 bg-purple-600 hover:bg-purple-500 text-white rounded-lg text-sm transition-all">
                    <FaMicrophone className="mx-auto mb-1" />
                    Voice Analysis
                  </button>
                  <button className="p-3 bg-pink-600 hover:bg-pink-500 text-white rounded-lg text-sm transition-all">
                    <FaCog className="mx-auto mb-1" />
                    Brain Waves
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Consciousness Insights */}
          {consciousnessInsights.length > 0 && (
            <div className="mt-6 p-4 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg border border-blue-400/20">
              <h4 className="text-lg font-semibold text-blue-200 mb-3">🧠 Consciousness Insights</h4>
              <div className="space-y-2">
                {consciousnessInsights.map((insight, index) => (
                  <div key={index} className="flex items-center space-x-2 text-sm text-gray-300">
                    <FaMagic className="text-blue-400" />
                    <span>{insight}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Quantum Menu Display */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-sm border border-purple-400/20 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            🌌 Quantum Menu - Adapted for {consciousnessState.mood} State
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {currentMenu.map((item, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="text-lg font-bold text-white">{item.name}</h4>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-white">${item.price}</div>
                    <div className="text-xs text-gray-400">quantum</div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                  {item.consciousnessTags?.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                {item.quantumProperties && (
                  <div className="mb-4 space-y-2">
                    <div className="text-xs text-gray-400">Quantum Effects:</div>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div className="bg-green-500/10 text-green-300 p-2 rounded">
                        {item.quantumProperties.moodEnhancement.join(', ')}
                      </div>
                      <div className="bg-blue-500/10 text-blue-300 p-2 rounded">
                        {item.quantumProperties.healthBenefits.join(', ')}
                      </div>
                      <div className="bg-purple-500/10 text-purple-300 p-2 rounded">
                        {item.quantumProperties.cognitiveEffects.join(', ')}
                      </div>
                    </div>
                  </div>
                )}
                
                <button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all">
                  Add to Quantum Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quantum Entanglement Visualization */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gradient-to-r from-indigo-900/50 to-blue-900/50 backdrop-blur-sm border border-indigo-400/20 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            🌐 Quantum Entanglement Network
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <FaBrain className="text-white text-2xl" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Consciousness Nodes</h4>
              <p className="text-gray-300 text-sm">
                {Math.floor(Math.random() * 1000) + 500} active consciousness states detected globally
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <FaMagic className="text-white text-2xl" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Quantum Entanglements</h4>
              <p className="text-gray-300 text-sm">
                {Math.floor(Math.random() * 500) + 200} quantum connections established
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <FaCog className="text-white text-2xl" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Reality Shifts</h4>
              <p className="text-gray-300 text-sm">
                {Math.floor(Math.random() * 50) + 10} reality modifications per second
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
