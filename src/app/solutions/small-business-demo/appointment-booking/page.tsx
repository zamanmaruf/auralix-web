'use client';

import React, { useState, useMemo } from 'react';

interface AppointmentData {
  service: string;
  date: string;
  time: string;
  name: string;
  phone: string;
  email: string;
}

export default function AppointmentBookingDemo() {
  const [isLoading, setIsLoading] = useState(false);
  const [automatedFlow, setAutomatedFlow] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('');
  const [appointmentData, setAppointmentData] = useState<AppointmentData>({
    service: '',
    date: '',
    time: '',
    name: '',
    phone: '',
    email: ''
  });

  const executiveMetrics = useMemo(() => ({
    bookingRate: '85%',
    noShowReduction: '60%',
    avgBookingTime: '2.3 min',
    revenueIncrease: '$45K',
    customerSatisfaction: '4.8★'
  }), []);

  const businessImpact = useMemo(() => ({
    costSavings: '$28K/year',
    timeSaved: '15 hours/week',
    conversionRate: '+40%',
    customerRetention: '+65%'
  }), []);

  const startBookingDemo = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setAutomatedFlow(true);
      // Simulate automated booking flow
      setTimeout(() => {
        setSelectedService('Teeth Cleaning - $129');
        setTimeout(() => {
          setSelectedSlot('Tomorrow, 3:00 PM');
          setTimeout(() => {
            setAppointmentData({
              service: 'Teeth Cleaning - $129',
              date: 'Tomorrow',
              time: '3:00 PM',
              name: 'Sarah Johnson',
              phone: '(555) 123-4567',
              email: 'sarah.j@email.com'
            });
          }, 2000);
        }, 2000);
      }, 2000);
    }, 1000);
  };

  const bookAppointment = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      // Simulate booking confirmation
      console.log('Appointment booked successfully');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/50 to-teal-900/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Business Impact */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  📅 AI Appointment Booking
                </h1>
                <p className="text-xl text-green-200 mb-6">
                  24/7 calendar-aware booking with auto-confirm
                </p>
                
                {/* Executive Metrics */}
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-4 text-white shadow-lg border border-green-400">
                    <div className="text-2xl font-bold">{executiveMetrics.bookingRate}</div>
                    <div className="text-sm opacity-90">Booking Rate</div>
                  </div>
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-4 text-white shadow-lg border border-blue-400">
                    <div className="text-2xl font-bold">{executiveMetrics.noShowReduction}</div>
                    <div className="text-sm opacity-90">No-Show Reduction</div>
                  </div>
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-4 text-white shadow-lg border border-purple-400">
                    <div className="text-2xl font-bold">{executiveMetrics.avgBookingTime}</div>
                    <div className="text-sm opacity-90">Avg Booking Time</div>
                  </div>
                </div>

                {/* Business Impact */}
                <div className="bg-gradient-to-r from-green-900/50 to-teal-900/50 backdrop-blur-sm border border-green-400/20 rounded-2xl p-6 mb-8">
                  <h3 className="text-xl font-bold text-white mb-4">💼 Business Impact</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-2xl font-bold text-green-400">{businessImpact.costSavings}</div>
                      <div className="text-sm text-green-200">Annual Savings</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-400">{businessImpact.timeSaved}</div>
                      <div className="text-sm text-blue-200">Time Saved</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-400">{businessImpact.conversionRate}</div>
                      <div className="text-sm text-purple-200">Conversion Rate</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-teal-400">{businessImpact.customerRetention}</div>
                      <div className="text-sm text-teal-200">Customer Retention</div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={startBookingDemo}
                    disabled={isLoading}
                    className="bg-gradient-to-r from-green-500 to-teal-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-green-600 hover:to-teal-700 transition-all duration-200 shadow-2xl transform hover:scale-105 disabled:opacity-50"
                  >
                    {isLoading ? (
                      <div className="flex items-center space-x-2">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        <span>Starting Demo...</span>
                      </div>
                    ) : (
                      "🚀 Start Booking Demo"
                    )}
                  </button>
                  <button 
                    onClick={bookAppointment}
                    disabled={isLoading}
                    className="border-2 border-green-400 text-green-400 px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-400 hover:text-white transition-all duration-200 disabled:opacity-50"
                  >
                    📅 Book Appointment
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side - Booking Interface */}
            <div className="space-y-6">
              {/* Service Selection */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-2xl border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-4">🦷 Available Services</h3>
                <div className="space-y-3">
                  {[
                    { name: 'Teeth Cleaning', desc: 'Professional cleaning & checkup', price: '$129', duration: '45 min' },
                    { name: 'Whitening', desc: 'Professional teeth whitening', price: '$299', duration: '60 min' },
                    { name: 'Full Checkup', desc: 'Comprehensive examination', price: '$199', duration: '30 min' }
                  ].map((service, index) => (
                    <div 
                      key={index}
                      className={`flex justify-between items-center p-4 rounded-lg transition-all cursor-pointer ${
                        selectedService.includes(service.name) 
                          ? 'bg-green-600 text-white' 
                          : 'bg-white bg-opacity-10 text-white hover:bg-opacity-20'
                      }`}
                      onClick={() => setSelectedService(`${service.name} - ${service.price}`)}
                    >
                      <div>
                        <div className="font-bold">{service.name}</div>
                        <div className="text-sm opacity-80">{service.desc}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold">{service.price}</div>
                        <div className="text-sm opacity-80">{service.duration}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Calendar Interface */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-2xl border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-4">📅 Available Slots</h3>
                
                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                    <div key={day} className="text-center text-sm text-gray-400 p-2">
                      {day}
                    </div>
                  ))}
                  {Array.from({length: 35}, (_, i) => {
                    const day = i + 1;
                    const isAvailable = day >= 15 && day <= 30 && day % 2 === 0;
                    return (
                      <button
                        key={day}
                        className={`p-2 rounded-lg text-sm transition-all ${
                          isAvailable 
                            ? 'bg-green-600 hover:bg-green-500 text-white' 
                            : 'text-gray-600'
                        }`}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>

                {/* Time Slots */}
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold text-white">Today&apos;s Available Times</h4>
                  <div className="grid grid-cols-3 gap-2">
                    {['9:00 AM', '10:30 AM', '2:00 PM', '3:30 PM', '5:00 PM'].map(time => (
                      <button
                        key={time}
                        className={`p-3 rounded-lg text-sm font-medium transition-all ${
                          selectedSlot.includes(time)
                            ? 'bg-green-600 text-white'
                            : 'bg-green-600 hover:bg-green-500 text-white'
                        }`}
                        onClick={() => setSelectedSlot(`Tomorrow, ${time}`)}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Booking Confirmation */}
              {appointmentData.name && (
                <div className="bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl p-6 text-white shadow-2xl border border-green-400">
                  <h3 className="text-xl font-bold mb-4">✅ Booking Confirmation</h3>
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between">
                      <span>Service:</span>
                      <span className="font-bold">{appointmentData.service}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Date:</span>
                      <span className="font-bold">{appointmentData.date}, {appointmentData.time}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Name:</span>
                      <span className="font-bold">{appointmentData.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Phone:</span>
                      <span className="font-bold">{appointmentData.phone}</span>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-green-400 bg-opacity-30 rounded-lg border border-green-300">
                    <div className="text-sm text-white font-medium">
                      <strong className="text-green-200">SMS Sent:</strong> &quot;Hi {appointmentData.name}, your appointment is confirmed for {appointmentData.date} at {appointmentData.time}. Reply RESCHEDULE to change.&quot;
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* AI Booking Analysis */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-r from-blue-900/50 to-indigo-900/50 backdrop-blur-sm border border-blue-400/20 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">🤖 AI Booking Analysis</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-blue-200">Smart Features</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span>Calendar integration with real-time availability</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span>Intelligent slot suggestions based on preferences</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span>Automatic confirmation and reminder system</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span>Easy rescheduling with one-click options</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-blue-200">Business Benefits</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center space-x-2">
                  <span className="text-blue-400">→</span>
                  <span>85% reduction in booking time</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-blue-400">→</span>
                  <span>60% decrease in no-shows</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-blue-400">→</span>
                  <span>40% increase in booking conversion</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-blue-400">→</span>
                  <span>24/7 availability without staff overhead</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 