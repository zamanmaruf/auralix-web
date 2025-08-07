'use client';

import React, { useState, useMemo } from 'react';

interface MenuItem {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
}

interface CartItem extends MenuItem {
  quantity: number;
}

export default function MenuOrderingDemo() {
  const [isLoading, setIsLoading] = useState(false);
  const [automatedFlow, setAutomatedFlow] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [aiSuggestion, setAiSuggestion] = useState('');
  const [demoStep, setDemoStep] = useState('');

  const executiveMetrics = useMemo(() => ({
    avgOrderValue: '$24.50',
    orderIncrease: '+35%',
    upsellRate: '68%',
    customerSatisfaction: '4.7★',
    orderTime: '2.1 min'
  }), []);

  const businessImpact = useMemo(() => ({
    revenueIncrease: '$18K/month',
    costSavings: '$8K/month',
    customerRetention: '+45%',
    orderAccuracy: '99.2%'
  }), []);

  const menuItems: MenuItem[] = [
    { name: 'Classic Burger', description: 'Beef patty with lettuce, tomato, cheese', price: 12, category: 'burgers', tags: ['popular', 'beef'] },
    { name: 'Veggie Bowl', description: 'Quinoa, roasted vegetables, tahini sauce', price: 14, category: 'bowls', tags: ['vegan', 'healthy', 'protein'] },
    { name: 'Chicken Sandwich', description: 'Grilled chicken with avocado spread', price: 11, category: 'burgers', tags: ['chicken', 'healthy'] },
    { name: 'Protein Bowl', description: 'Grilled chicken, brown rice, vegetables', price: 16, category: 'bowls', tags: ['protein', 'healthy'] },
    { name: 'Smoothie Bowl', description: 'Acai, granola, fresh fruits', price: 9, category: 'bowls', tags: ['vegan', 'healthy'] },
    { name: 'Fries', description: 'Crispy golden fries with sea salt', price: 4, category: 'sides', tags: ['popular'] },
    { name: 'Iced Coffee', description: 'Cold brew with cream', price: 5, category: 'drinks', tags: ['popular'] },
    { name: 'Green Tea', description: 'Organic green tea', price: 3, category: 'drinks', tags: ['healthy'] }
  ];

  const startOrderingDemo = () => {
    console.log('🚀 Starting demo...');
    setIsLoading(true);
    setAiSuggestion(''); // Clear any previous suggestions
    setCart([]); // Clear cart
    setDemoStep('Starting...');
    
    // Step 1: Show loading (2 seconds)
    setTimeout(() => {
      console.log('✅ Loading complete, starting AI analysis...');
      setIsLoading(false);
      setAutomatedFlow(true);
      setDemoStep('AI Analysis');
      
      // Step 2: Show AI thinking (1 second)
      setTimeout(() => {
        console.log('🤖 Showing AI thinking...');
        setAiSuggestion('🤖 Analyzing your preferences...');
        setDemoStep('AI Thinking');
        
        // Step 3: Show AI recommendation (2 seconds)
        setTimeout(() => {
          console.log('💡 Showing AI recommendation...');
          setAiSuggestion('Based on your preference for high-protein options under $15, I recommend the Protein Bowl ($16) or Chicken Sandwich ($11) with a side of fries ($4).');
          setDemoStep('AI Recommendation');
          
          // Step 4: Add items to cart (1.5 seconds)
          setTimeout(() => {
            console.log('🛒 Adding items to cart...');
            setDemoStep('Adding to Cart');
            const proteinBowl = menuItems.find(item => item.name === 'Protein Bowl');
            const fries = menuItems.find(item => item.name === 'Fries');
            if (proteinBowl && fries) {
              setCart([
                { ...proteinBowl, quantity: 1 },
                { ...fries, quantity: 1 }
              ]);
              
              // Step 5: Show success message (2 seconds)
              setTimeout(() => {
                console.log('🎉 Showing success message...');
                setDemoStep('Success!');
                const successMessage = '✅ Perfect! I\'ve added your recommended items to the cart. The Protein Bowl provides the protein you need, and fries make it a complete meal!';
                setAiSuggestion(successMessage);
                console.log('Success message set:', successMessage);
              }, 2000);
            }
          }, 1500);
        }, 2000);
      }, 1000);
    }, 2000);
  };

  const placeOrder = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      // Simulate order placement
      console.log('Order placed successfully');
    }, 2000);
  };

  const addToCart = (item: MenuItem) => {
    setCart(prev => {
      const existing = prev.find(cartItem => cartItem.name === item.name);
      if (existing) {
        return prev.map(cartItem => 
          cartItem.name === item.name 
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  const filteredItems = selectedCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/30 to-pink-900/30 backdrop-blur-sm"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Business Impact */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg blur opacity-25 animate-pulse"></div>
                  <h1 className="relative text-4xl lg:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
                    🍔 AI Menu & Ordering
                  </h1>
                </div>
                <p className="text-xl text-red-200 mb-6 animate-fade-in">
                  Smart suggestions and upsell automation
                </p>
                
                {/* Executive Metrics */}
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                  <div className="group relative bg-gradient-to-r from-red-500 to-red-600 rounded-xl p-4 text-white shadow-lg border border-red-400 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/25">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-600 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <div className="relative">
                      <div className="text-2xl font-bold animate-pulse">{executiveMetrics.avgOrderValue}</div>
                      <div className="text-sm opacity-90">Avg Order Value</div>
                    </div>
                  </div>
                  <div className="group relative bg-gradient-to-r from-pink-500 to-pink-600 rounded-xl p-4 text-white shadow-lg border border-pink-400 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/25">
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-pink-600 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <div className="relative">
                      <div className="text-2xl font-bold animate-pulse">{executiveMetrics.orderIncrease}</div>
                      <div className="text-sm opacity-90">Order Increase</div>
                    </div>
                  </div>
                  <div className="group relative bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-4 text-white shadow-lg border border-orange-400 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/25">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <div className="relative">
                      <div className="text-2xl font-bold animate-pulse">{executiveMetrics.upsellRate}</div>
                      <div className="text-sm opacity-90">Upsell Rate</div>
                    </div>
                  </div>
                </div>

                {/* Business Impact */}
                <div className="group relative bg-gradient-to-r from-red-900/50 to-pink-900/50 backdrop-blur-sm border border-red-400/20 rounded-2xl p-6 mb-8 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/25">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-400/10 to-pink-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                      <span className="mr-2">💼</span>
                      Business Impact
                      <div className="ml-2 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="group/item">
                        <div className="text-2xl font-bold text-red-400 group-hover/item:scale-110 transition-transform duration-300">{businessImpact.revenueIncrease}</div>
                        <div className="text-sm text-red-200">Revenue Increase</div>
                      </div>
                      <div className="group/item">
                        <div className="text-2xl font-bold text-pink-400 group-hover/item:scale-110 transition-transform duration-300">{businessImpact.costSavings}</div>
                        <div className="text-sm text-pink-200">Cost Savings</div>
                      </div>
                      <div className="group/item">
                        <div className="text-2xl font-bold text-orange-400 group-hover/item:scale-110 transition-transform duration-300">{businessImpact.customerRetention}</div>
                        <div className="text-sm text-orange-200">Customer Retention</div>
                      </div>
                      <div className="group/item">
                        <div className="text-2xl font-bold text-yellow-400 group-hover/item:scale-110 transition-transform duration-300">{businessImpact.orderAccuracy}</div>
                        <div className="text-sm text-yellow-200">Order Accuracy</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={startOrderingDemo}
                    disabled={isLoading}
                    className="group relative bg-gradient-to-r from-red-500 to-pink-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-red-600 hover:to-pink-700 transition-all duration-300 shadow-2xl transform hover:scale-105 disabled:opacity-50 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative flex items-center space-x-2">
                      {isLoading ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                          <span>Starting Demo...</span>
                        </>
                      ) : (
                        <>
                          <span className="animate-bounce">🚀</span>
                          <span>Start Ordering Demo</span>
                        </>
                      )}
                    </div>
                  </button>
                  
                  {/* Demo Status Indicator */}
                  {automatedFlow && (
                    <div className="mt-4 p-3 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg border border-green-400/30">
                      <div className="flex items-center space-x-2 text-green-400">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-sm font-semibold">Demo Active - Watch the AI in action!</span>
                      </div>
                      {demoStep && (
                        <div className="mt-2 text-xs text-green-300">
                          Current step: {demoStep}
                        </div>
                      )}
                    </div>
                  )}
                  <button 
                    onClick={placeOrder}
                    disabled={isLoading}
                    className="group relative border-2 border-red-400 text-red-400 px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-400 hover:text-white transition-all duration-300 disabled:opacity-50 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-red-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative flex items-center space-x-2">
                      <span className="animate-pulse">🛒</span>
                      <span>Place Order</span>
                    </div>
                  </button>
                </div>
                
                {/* Revolutionary Systems Links */}
                <div className="mt-6 space-y-4">
                  <div className="text-center group">
                    <a 
                      href="/solutions/small-business-demo/workflow-automation"
                      className="group relative inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-2xl transform hover:scale-105 overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative flex items-center space-x-2">
                        <span className="animate-spin">🔄</span>
                        <span>Workflow Automation Demo</span>
                        <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                      </div>
                    </a>
                    <p className="text-sm text-red-200 mt-2">
                      Step-by-step demonstration of how it all works
                    </p>
                  </div>
                  
                  <div className="text-center group">
                    <a 
                      href="/solutions/small-business-demo/quantum-consciousness"
                      className="group relative inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 shadow-2xl transform hover:scale-105 overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative flex items-center space-x-2">
                        <span className="animate-pulse">🧠</span>
                        <span>Quantum Consciousness Menu</span>
                        <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                      </div>
                    </a>
                    <p className="text-sm text-red-200 mt-2">
                      Menu that adapts to your consciousness state
                    </p>
                  </div>
                  
                  <div className="text-center group">
                    <a 
                      href="/solutions/small-business-demo/neural-interface"
                      className="group relative inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 shadow-2xl transform hover:scale-105 overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative flex items-center space-x-2">
                        <span className="animate-bounce">⚡</span>
                        <span>Neural Interface Ordering</span>
                        <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                      </div>
                    </a>
                    <p className="text-sm text-red-200 mt-2">
                      Order with your thoughts - The future of dining
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Menu & AI Assistant */}
            <div className="space-y-6">
              {/* AI Assistant */}
              <div className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-2xl border border-gray-700 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/25">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <span className="mr-2 animate-pulse">🤖</span>
                    AI Menu Assistant
                    <div className="ml-2 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  </h3>
                  
                                     {/* Chat Messages */}
                   <div className="space-y-3 mb-4">
                     <div className="flex items-start space-x-3 animate-fade-in">
                       <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                         <span className="text-white text-sm">🤖</span>
                       </div>
                       <div className="bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg p-3 max-w-xs shadow-lg border border-gray-600">
                         <p className="text-sm text-white">Hi! What are you in the mood for? I can suggest based on your preferences!</p>
                       </div>
                     </div>
                     <div className="flex items-start space-x-3 justify-end animate-fade-in delay-500">
                       <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-lg p-3 max-w-xs shadow-lg">
                         <p className="text-sm text-white">I want something high-protein under $15</p>
                       </div>
                       <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                         <span className="text-white text-sm">👤</span>
                       </div>
                     </div>
                     {aiSuggestion && (
                       <div className="flex items-start space-x-3 animate-fade-in delay-1000">
                         <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                           <span className="text-white text-sm">🤖</span>
                         </div>
                         <div className="bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg p-3 max-w-xs shadow-lg border border-gray-600">
                           <p className="text-sm text-white">{aiSuggestion}</p>
                           {aiSuggestion.includes('Analyzing') && (
                             <div className="mt-2 flex space-x-1">
                               <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                               <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                               <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                             </div>
                           )}
                         </div>
                       </div>
                     )}
                   </div>

                  {/* Quick Actions */}
                  <div className="grid grid-cols-2 gap-2">
                    <button 
                      onClick={() => addToCart(menuItems.find(item => item.name === 'Protein Bowl')!)}
                      className="group/item p-2 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white rounded-lg text-sm transition-all duration-300 hover:scale-105 shadow-lg"
                    >
                      <div className="flex items-center space-x-1">
                        <span className="group-hover/item:animate-pulse">➕</span>
                        <span>Add Protein Bowl</span>
                      </div>
                    </button>
                    <button 
                      onClick={() => addToCart(menuItems.find(item => item.name === 'Fries')!)}
                      className="group/item p-2 bg-gradient-to-r from-gray-600 to-gray-500 hover:from-gray-500 hover:to-gray-400 text-white rounded-lg text-sm transition-all duration-300 hover:scale-105 shadow-lg"
                    >
                      <div className="flex items-center space-x-1">
                        <span className="group-hover/item:animate-pulse">➕</span>
                        <span>Add Fries</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Shopping Cart */}
              <div className="group relative bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl p-6 text-white shadow-2xl border border-red-400 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/25">
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <span className="mr-2 animate-pulse">🛒</span>
                    Your Order
                    <div className="ml-2 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  </h3>
                  {cart.length > 0 ? (
                    <>
                      <div className="space-y-3 mb-4">
                        {cart.map((item, index) => (
                          <div key={index} className="group/item flex justify-between items-center p-3 bg-white bg-opacity-20 rounded-lg hover:bg-white bg-opacity-30 transition-all duration-300 hover:scale-105">
                            <div>
                              <div className="font-bold">{item.name}</div>
                              <div className="text-sm opacity-80">Qty: {item.quantity}</div>
                            </div>
                            <div className="text-right">
                              <div className="font-bold group-hover/item:scale-110 transition-transform duration-300">${(item.price * item.quantity).toFixed(2)}</div>
                              <div className="text-sm opacity-80">${item.price} each</div>
                            </div>
                          </div>
                        ))}
                        <div className="border-t border-white border-opacity-30 pt-3">
                          <div className="flex justify-between font-bold">
                            <span>Total:</span>
                            <span className="text-2xl animate-pulse">${total.toFixed(2)}</span>
                          </div>
                        </div>
                      </div>
                      <button className="group/checkout w-full bg-white text-red-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:scale-105 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-transparent opacity-0 group-hover/checkout:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative flex items-center justify-center space-x-2">
                          <span className="animate-bounce">💳</span>
                          <span>Checkout</span>
                        </div>
                      </button>
                    </>
                  ) : (
                    <div className="text-center py-8">
                      <div className="text-4xl mb-4 animate-bounce">🛒</div>
                      <p className="text-white opacity-80">Your cart is empty</p>
                      <p className="text-sm text-white opacity-60">Add items to get started</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/20 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">🍽️ Menu Categories</h3>
          
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {['all', 'burgers', 'bowls', 'sides', 'drinks'].map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-red-500 to-pink-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Menu Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="text-lg font-bold text-white">{item.name}</h4>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-white">${item.price}</div>
                    <div className="text-xs text-gray-400">{item.category}</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-red-500/20 text-red-300 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => addToCart(item)}
                  className="w-full bg-gradient-to-r from-red-500 to-pink-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-red-600 hover:to-pink-700 transition-all"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Ordering Analysis */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-r from-purple-900/50 to-indigo-900/50 backdrop-blur-sm border border-purple-400/20 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">🤖 AI Ordering Analysis</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-purple-200">Smart Features</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span>AI-powered menu suggestions based on preferences</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span>Intelligent upselling with personalized recommendations</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span>Dietary restriction filtering and alternatives</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span>Real-time inventory and availability updates</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-purple-200">Business Benefits</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center space-x-2">
                  <span className="text-purple-400">→</span>
                  <span>35% increase in average order value</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-purple-400">→</span>
                  <span>68% upsell success rate</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-purple-400">→</span>
                  <span>50% reduction in order time</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-purple-400">→</span>
                  <span>99.2% order accuracy rate</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 