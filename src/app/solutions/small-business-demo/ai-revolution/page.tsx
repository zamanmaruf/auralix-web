'use client';

export default function AIRevolutionDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 text-white p-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-8">
          🚀 AI Revolution
        </h1>
        <p className="text-2xl mb-12">Experience the Future of Quantum AI</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-purple-900/50 p-6 rounded-2xl">
            <h3 className="text-2xl font-bold text-purple-400 mb-4">Quantum AI</h3>
            <p className="text-4xl font-bold text-green-400">99.999%</p>
            <p className="text-gray-300">Accuracy</p>
          </div>
          <div className="bg-blue-900/50 p-6 rounded-2xl">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">Revenue Impact</h3>
            <p className="text-4xl font-bold text-blue-400">$25M+</p>
            <p className="text-gray-300">Potential</p>
          </div>
          <div className="bg-cyan-900/50 p-6 rounded-2xl">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">Revolutionary</h3>
            <p className="text-4xl font-bold text-cyan-400">100%</p>
            <p className="text-gray-300">Innovation</p>
          </div>
        </div>
        
        <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-12 py-6 rounded-2xl text-2xl font-bold hover:scale-105 transition-transform">
          Experience the Revolution
        </button>
      </div>
    </div>
  );
}
