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
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setAutomatedFlow(true);
      // Simulate AI suggestion
      setTimeout(() => {
        setAiSuggestion('Based on your preference for high-protein options under $15, I recommend the Protein Bowl ($16) or Chicken Sandwich ($11) with a side of fries ($4).');
        setTimeout(() => {
          // Add items to cart
          const proteinBowl = menuItems.find(item => item.name === 'Protein Bowl');
          const fries = menuItems.find(item => item.name === 'Fries');
          if (proteinBowl && fries) {
            setCart([
              { ...proteinBowl, quantity: 1 },
              { ...fries, quantity: 1 }
            ]);
          }
        }, 2000);
      }, 2000);
    }, 1000);
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/50 to-pink-900/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Business Impact */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  🍔 AI Menu & Ordering
                </h1>
                <p className="text-xl text-red-200 mb-6">
                  Smart suggestions and upsell automation
                </p>
                
                {/* Executive Metrics */}
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                  <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-xl p-4 text-white shadow-lg border border-red-400">
                    <div className="text-2xl font-bold">{executiveMetrics.avgOrderValue}</div>
                    <div className="text-sm opacity-90">Avg Order Value</div>
                  </div>
                  <div className="bg-gradient-to-r from-pink-500 to-pink-600 rounded-xl p-4 text-white shadow-lg border border-pink-400">
                    <div className="text-2xl font-bold">{executiveMetrics.orderIncrease}</div>
                    <div className="text-sm opacity-90">Order Increase</div>
                  </div>
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-4 text-white shadow-lg border border-orange-400">
                    <div className="text-2xl font-bold">{executiveMetrics.upsellRate}</div>
                    <div className="text-sm opacity-90">Upsell Rate</div>
                  </div>
                </div>

                {/* Business Impact */}
                <div className="bg-gradient-to-r from-red-900/50 to-pink-900/50 backdrop-blur-sm border border-red-400/20 rounded-2xl p-6 mb-8">
                  <h3 className="text-xl font-bold text-white mb-4">💼 Business Impact</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-2xl font-bold text-red-400">{businessImpact.revenueIncrease}</div>
                      <div className="text-sm text-red-200">Revenue Increase</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-pink-400">{businessImpact.costSavings}</div>
                      <div className="text-sm text-pink-200">Cost Savings</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-orange-400">{businessImpact.customerRetention}</div>
                      <div className="text-sm text-orange-200">Customer Retention</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-yellow-400">{businessImpact.orderAccuracy}</div>
                      <div className="text-sm text-yellow-200">Order Accuracy</div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={startOrderingDemo}
                    disabled={isLoading}
                    className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-red-600 hover:to-pink-700 transition-all duration-200 shadow-2xl transform hover:scale-105 disabled:opacity-50"
                  >
                    {isLoading ? (
                      <div className="flex items-center space-x-2">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        <span>Starting Demo...</span>
                      </div>
                    ) : (
                      "🚀 Start Ordering Demo"
                    )}
                  </button>
                  <button 
                    onClick={placeOrder}
                    disabled={isLoading}
                    className="border-2 border-red-400 text-red-400 px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-400 hover:text-white transition-all duration-200 disabled:opacity-50"
                  >
                    🛒 Place Order
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side - Menu & AI Assistant */}
            <div className="space-y-6">
              {/* AI Assistant */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-2xl border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-4">🤖 AI Menu Assistant</h3>
                
                {/* Chat Messages */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">🤖</span>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-3 max-w-xs">
                      <p className="text-sm text-white">Hi! What are you in the mood for? I can suggest based on your preferences!</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 justify-end">
                    <div className="bg-red-500 rounded-lg p-3 max-w-xs">
                      <p className="text-sm text-white">I want something high-protein under $15</p>
                    </div>
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">👤</span>
                    </div>
                  </div>
                  {aiSuggestion && (
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">🤖</span>
                      </div>
                      <div className="bg-gray-700 rounded-lg p-3 max-w-xs">
                        <p className="text-sm text-white">{aiSuggestion}</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-2 gap-2">
                  <button 
                    onClick={() => addToCart(menuItems.find(item => item.name === 'Protein Bowl')!)}
                    className="p-2 bg-red-600 hover:bg-red-500 text-white rounded-lg text-sm transition-all"
                  >
                    Add Protein Bowl
                  </button>
                  <button 
                    onClick={() => addToCart(menuItems.find(item => item.name === 'Fries')!)}
                    className="p-2 bg-gray-600 hover:bg-gray-500 text-white rounded-lg text-sm transition-all"
                  >
                    Add Fries
                  </button>
                </div>
              </div>

              {/* Shopping Cart */}
              <div className="bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl p-6 text-white shadow-2xl border border-red-400">
                <h3 className="text-xl font-bold mb-4">🛒 Your Order</h3>
                {cart.length > 0 ? (
                  <>
                    <div className="space-y-3 mb-4">
                      {cart.map((item, index) => (
                        <div key={index} className="flex justify-between items-center p-3 bg-white bg-opacity-20 rounded-lg">
                          <div>
                            <div className="font-bold">{item.name}</div>
                            <div className="text-sm opacity-80">Qty: {item.quantity}</div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold">${(item.price * item.quantity).toFixed(2)}</div>
                            <div className="text-sm opacity-80">${item.price} each</div>
                          </div>
                        </div>
                      ))}
                      <div className="border-t border-white border-opacity-30 pt-3">
                        <div className="flex justify-between font-bold">
                          <span>Total:</span>
                          <span>${total.toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                    <button className="w-full bg-white text-red-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all duration-200 shadow-lg">
                      Checkout
                    </button>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <div className="text-4xl mb-4">🛒</div>
                    <p className="text-white opacity-80">Your cart is empty</p>
                    <p className="text-sm text-white opacity-60">Add items to get started</p>
                  </div>
                )}
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