'use client';

import { useState } from 'react';

interface LeadData {
  name: string;
  phone: string;
  email: string;
  intent: string;
  service?: string;
}

interface LeadCaptureFormProps {
  onSubmit: (data: LeadData) => void;
  isVisible: boolean;
}

export default function LeadCaptureForm({ onSubmit, isVisible }: LeadCaptureFormProps) {
  const [formData, setFormData] = useState<LeadData>({
    name: '',
    phone: '',
    email: '',
    intent: '',
    service: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleInputChange = (field: keyof LeadData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (!isVisible) return null;

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg max-w-md mx-auto">
      <h3 className="text-xl font-bold text-gray-800 mb-4">📝 Quick Details</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name *
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number *
          </label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="(555) 123-4567"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email (Optional)
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="your@email.com"
          />
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
          >
            📱 Send Me Details
          </button>
        </div>

        <p className="text-xs text-gray-700 text-center font-medium">
          By providing your number, you agree to receive messages. Reply STOP to opt-out.
        </p>
      </form>
    </div>
  );
} 