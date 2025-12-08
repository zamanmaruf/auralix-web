'use client';
import { MdLocalHospital } from 'react-icons/md';
import { FaHome } from 'react-icons/fa';
import { Phone, Users, Globe, ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function IndustriesPage() {
  const industries = [
    {
      id: 'dental',
      icon: Users,
      title: 'Dental Practices',
      subtitle: 'Never miss an appointment call',
      description: 'Transform your dental practice phone experience with a voice agent that schedules appointments, handles patient inquiries, and manages your front desk 24/7.',
      color: 'blue',
      useCases: [
        'Appointment scheduling and rescheduling',
        'Patient inquiry handling',
        'Insurance verification assistance',
        'Emergency call routing to on-call dentist',
        'Treatment reminders and follow-ups',
        'Office hours and location information',
        'Payment and billing inquiries'
      ],
      benefits: [
        'Reduce no-shows with automated reminders',
        'Handle peak call volumes during lunch hours',
        'Free up staff for patient care',
        'Improve patient satisfaction with instant responses'
      ],
      testimonial: {
        quote: 'Our voice agent handles all appointment calls flawlessly. We never miss a booking, and our staff can focus on what matters most — patient care.',
        author: 'Dr. Sarah Johnson',
        role: 'Dental Practice Owner'
      }
    },
    {
      id: 'restaurants',
      icon: Phone,
      title: 'Restaurants',
      subtitle: 'Answer every call, even during rush hour',
      description: 'Never miss a reservation or order again. Our voice agent handles table bookings, takeout orders, and customer inquiries 24/7, even during your busiest times.',
      color: 'primary',
      useCases: [
        'Reservation management and booking',
        'Takeout and delivery order taking',
        'Wait time information',
        'Menu inquiries and recommendations',
        'Special event bookings',
        'Cancellation and modification handling',
        'Hours and location questions'
      ],
      benefits: [
        'Capture every order during peak hours',
        'Reduce staff workload during busy periods',
        'Increase bookings with 24/7 availability',
        'Improve customer experience with instant service'
      ],
      testimonial: {
        quote: 'During dinner rush, we used to miss calls constantly. Now our voice agent handles everything — reservations, orders, inquiries. Our revenue has increased significantly.',
        author: 'Marcus Chen',
        role: 'Restaurant Owner'
      }
    },
    {
      id: 'hotels',
      icon: Globe,
      title: 'Hotel Chains',
      subtitle: 'Professional guest services 24/7',
      description: 'Elevate your guest experience with a voice agent that handles room bookings, check-in inquiries, concierge services, and guest requests around the clock.',
      color: 'purple',
      useCases: [
        'Room booking and reservations',
        'Check-in and check-out inquiries',
        'Guest services and concierge assistance',
        'Amenity information and availability',
        'Cancellation and modification handling',
        'Loyalty program support',
        'Local recommendations and directions'
      ],
      benefits: [
        'Handle high call volumes during peak seasons',
        'Provide consistent service across all locations',
        'Reduce front desk workload',
        'Improve guest satisfaction with instant responses'
      ],
      testimonial: {
        quote: 'Our voice agent provides professional guest services 24/7. It handles bookings, inquiries, and even provides local recommendations. Guests can\'t tell they\'re talking to AI.',
        author: 'Jennifer Martinez',
        role: 'Hotel Operations Manager'
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a2a3a] via-[#0a2233] to-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center py-16 px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-4 text-cyan-300"
        >
          Voice Agent Solutions Built for Your Industry
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-cyan-100 mb-8"
        >
          Tailored voice AI automation for dental practices, restaurants, hotel chains, and service businesses.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-gray-300"
        >
          Auralix Voice Agent helps service businesses never miss a call, improve customer experience, and scale operations across multiple locations.
        </motion.p>
      </section>

      {/* Industries Grid */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <div className="space-y-24">
          {industries.map((industry, index) => {
            const IndustryIcon = industry.icon;
            const colorClasses = {
              blue: {
                gradient: 'from-blue-500 to-blue-600',
                bg: 'bg-blue-500/10',
                border: 'border-blue-500/30',
                text: 'text-blue-400'
              },
              primary: {
                gradient: 'from-primary-500 to-primary-600',
                bg: 'bg-primary-500/10',
                border: 'border-primary-500/30',
                text: 'text-primary-400'
              },
              purple: {
                gradient: 'from-purple-500 to-purple-600',
                bg: 'bg-purple-500/10',
                border: 'border-purple-500/30',
                text: 'text-purple-400'
              }
            };
            const colors = colorClasses[industry.color as keyof typeof colorClasses];

            return (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`bg-[#1a1a1a] rounded-2xl p-8 sm:p-12 shadow-xl ${colors.border} border-2`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Left Column - Content */}
                  <div>
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center mb-6`}>
                      <IndustryIcon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{industry.title}</h2>
                    <p className={`text-xl font-semibold mb-4 ${colors.text}`}>{industry.subtitle}</p>
                    <p className="text-gray-300 mb-8 text-lg leading-relaxed">{industry.description}</p>

                    {/* Use Cases */}
                    <div className="mb-8">
                      <h3 className="text-xl font-bold text-white mb-4">Voice Agent Capabilities:</h3>
                      <ul className="space-y-3">
                        {industry.useCases.map((useCase, useCaseIndex) => (
                          <li key={useCaseIndex} className="flex items-start gap-3">
                            <CheckCircle className={`w-5 h-5 ${colors.text} flex-shrink-0 mt-0.5`} />
                            <span className="text-gray-300">{useCase}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div className={`${colors.bg} rounded-xl p-6 mb-8`}>
                      <h3 className="text-lg font-bold text-white mb-4">Key Benefits:</h3>
                      <ul className="space-y-2">
                        {industry.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start gap-2 text-gray-300">
                            <div className={`w-2 h-2 ${colors.text.replace('text-', 'bg-')} rounded-full mt-2`}></div>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href="/contact"
                      className={`inline-block px-8 py-4 bg-gradient-to-r ${colors.gradient} hover:opacity-90 text-white font-bold rounded-lg transition-all duration-200 hover:scale-105`}
                    >
                      Get Started for {industry.title}
                      <ArrowRight className="inline-block ml-2 w-5 h-5" />
                    </Link>
                  </div>

                  {/* Right Column - Testimonial */}
                  <div>
                    <div className={`bg-gradient-to-br ${colors.gradient} bg-opacity-20 rounded-2xl p-8 border ${colors.border}`}>
                      <div className="mb-6">
                        <svg className="w-12 h-12 text-white opacity-50 mb-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                      </div>
                      <blockquote className="text-xl text-white italic mb-6 leading-relaxed">
                        &quot;{industry.testimonial.quote}&quot;
                      </blockquote>
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${colors.gradient} flex items-center justify-center`}>
                          <span className="text-white font-bold text-lg">
                            {industry.testimonial.author.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <div className="text-white font-semibold">{industry.testimonial.author}</div>
                          <div className={`${colors.text} text-sm`}>{industry.testimonial.role}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Other Industries Section */}
      <section className="max-w-4xl mx-auto py-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-[#1a1a1a] rounded-2xl p-8 sm:p-12 shadow-xl border border-cyan-500/30"
        >
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Other Industries</h2>
          <p className="text-gray-300 text-center mb-8 text-lg">
            Our voice agent is designed to scale across service-based industries. Whether you run a medical clinic, 
            law firm, retail chain, or any business that handles customer calls, Auralix Voice Agent can be customized 
            for your specific needs.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {['Medical Clinics', 'Law Firms', 'Retail Stores', 'Salons & Spas', 'Fitness Centers', 'Real Estate', 'Travel Agencies', 'Consulting'].map((industry, index) => (
              <div key={index} className="bg-neutral-800 rounded-lg p-4 text-center">
                <div className="text-cyan-400 font-semibold text-sm">{industry}</div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-lg transition-all duration-200 hover:scale-105"
            >
              Contact Us for Custom Solutions
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto py-16 px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white mb-6"
        >
          Ready to Transform Your Phone Calls?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-gray-300 mb-8"
        >
          No matter your industry, we have a voice agent solution to help you never miss a call and improve customer experience.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/contact"
            className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-lg transition-all duration-200 hover:scale-105"
          >
            Get Started Today
          </Link>
          <Link
            href="/solutions"
            className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold rounded-lg transition-all duration-200"
          >
            Learn More
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
