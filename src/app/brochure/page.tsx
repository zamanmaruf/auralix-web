'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, TrendingUp, 
  Building, MapPin, Phone, Mail, Languages,
  Rocket, Star, CheckCircle, Bot, Home, Utensils, ShoppingCart, Calculator,
  Brain, Settings, ArrowRight, Download, Calendar, Users, DollarSign
} from 'lucide-react';
import OnePagerPDF from '@/components/OnePagerPDF';

const BrochurePage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // CTA Handler Functions
  const handleEmailClick = () => {
    window.open('mailto:auralixai@gmail.com?subject=Restaurant AI Consultation&body=Hi Auralix AI team,%0D%0A%0D%0AI am interested in learning more about your AI automation services for my restaurant.%0D%0A%0D%0APlease contact me with more information.%0D%0A%0D%0ABest regards,', '_blank');
  };

  const handlePhoneClick = () => {
    window.open('tel:+17828820525', '_blank');
  };

  const handleWebsiteClick = () => {
    window.open('https://www.auralixai.ca', '_blank');
  };

  const handleBookConsultation = () => {
    window.open('mailto:auralixai@gmail.com?subject=Book Restaurant AI Consultation&body=Hi Auralix AI team,%0D%0A%0D%0AI would like to book a consultation to discuss AI automation for my restaurant.%0D%0A%0D%0APlease include:%0D%0A- Restaurant type and size%0D%0A- Current challenges with missed calls%0D%0A- Goals for automation%0D%0A%0D%0AThank you!', '_blank');
  };

  const handleStartJourney = () => {
    window.open('mailto:auralixai@gmail.com?subject=Start Restaurant AI Journey&body=Hi Auralix AI team,%0D%0A%0D%0AI am ready to start my restaurant AI automation journey with Auralix AI.%0D%0A%0D%0APlease include:%0D%0A- Restaurant details%0D%0A- Current challenges%0D%0A- Goals and timeline%0D%0A%0D%0AThank you!', '_blank');
  };

  const handleRequestQuote = () => {
    window.open('mailto:auralixai@gmail.com?subject=Request Restaurant AI Quote&body=Hi Auralix AI team,%0D%0A%0D%0AI would like to request a quote for restaurant AI automation services.%0D%0A%0D%0APlease include:%0D%0A- Restaurant requirements%0D%0A- Budget range%0D%0A- Timeline%0D%0A%0D%0AThank you!', '_blank');
  };

  const handleViewCaseStudies = () => {
    window.open('/case-studies', '_blank');
  };

  const handleDownload = () => {
    // In a real implementation, this would download a PDF
    window.open('mailto:auralixai@gmail.com?subject=Request Restaurant AI Brochure PDF&body=Hi Auralix AI team,%0D%0A%0D%0AI would like to receive the restaurant AI automation brochure PDF.%0D%0A%0D%0AThank you!', '_blank');
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const testimonials = [
    {
      name: "Sarah Mitchell",
      business: "Halifax Seafood Co.",
      quote: "We never miss a call anymore — our bookings jumped 40%. The AI handles everything so naturally, customers can't tell the difference.",
      rating: 5,
      avatar: "SM"
    },
    {
      name: "David Chen",
      business: "Nova Scotia Pizzeria",
      quote: "The AI receptionist takes orders perfectly during our busy dinner rush. We've recovered thousands in lost revenue from missed calls.",
      rating: 5,
      avatar: "DC"
    },
    {
      name: "Maria Rodriguez",
      business: "Atlantic Café",
      quote: "Auralix AI saved us 15 hours per week on phone management. The ROI was immediate and the support team is exceptional.",
      rating: 5,
      avatar: "MR"
    }
  ];

  const services = [
    {
      icon: <Settings className="text-4xl text-cyan-400" />,
      title: "AI Receptionist",
      description: "24/7 voice AI that answers calls like a real host, takes reservations, and captures orders",
      features: ["Human-like conversation", "Reservation management", "Order taking", "Call routing"]
    },
    {
      icon: <Bot className="text-4xl text-blue-400" />,
      title: "Website & Social Chatbot",
      description: "Multi-platform chatbot that books tables and takes orders across your website, Instagram, and WhatsApp",
      features: ["Table booking", "Order automation", "FAQ handling", "Multi-platform support"]
    },
    {
      icon: <ShoppingCart className="text-4xl text-purple-400" />,
      title: "Order & Review Automation",
      description: "Automatically confirm takeout orders, send follow-up texts, and collect 5-star reviews",
      features: ["Order confirmations", "Review requests", "Follow-up sequences", "Customer satisfaction"]
    },
    {
      icon: <Globe className="text-4xl text-teal-400" />,
      title: "Restaurant Websites with AI",
      description: "Modern designs with built-in AI chat, online ordering, and automated workflows",
      features: ["AI chatbot included", "Online ordering", "Table booking", "SEO optimized"]
    }
  ];

  const stats = [
    { icon: <TrendingUp className="w-6 h-6" />, value: "40%", label: "Increase in Bookings" },
    { icon: <Users className="w-6 h-6" />, label: "60%", value: "Less Admin Time" },
    { icon: <DollarSign className="w-6 h-6" />, value: "25%", label: "Revenue Growth" },
    { icon: <Star className="w-6 h-6" />, value: "4.8/5", label: "Customer Rating" }
  ];

  const pages = [
    // Page 1: Cover
    <motion.div
      key="cover"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 flex flex-col items-center justify-center text-center p-8"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 font-heading">
            Never Miss Another Restaurant Call
          </h1>
          <p className="text-xl md:text-2xl text-neutral-300 mb-8">
            Auralix AI helps Canadian restaurants recover thousands in missed calls and orders every month
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center gap-2 text-neutral-400">
              {stat.icon}
              <span>{stat.value} {stat.label}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-lg text-neutral-400 mb-4">Halifax, Nova Scotia • Serving Canada Coast-to-Coast</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleBookConsultation}
              className="px-8 py-4 bg-accent-orange hover:bg-accent-orange/90 text-white font-bold rounded-lg transition-all duration-200 hover:scale-105"
            >
              Book Free Consultation
            </button>
            <button
              onClick={handleViewCaseStudies}
              className="px-8 py-4 border-2 border-primary-400 text-primary-400 hover:bg-primary-400 hover:text-black font-bold rounded-lg transition-all duration-200"
            >
              View Case Studies
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>,

    // Page 2: Problem
    <motion.div
      key="problem"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-br from-red-900/20 via-neutral-900 to-neutral-800 flex items-center p-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading"
            >
              The Hidden Cost of Missed Calls
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-neutral-300 mb-8"
            >
              Every missed call is lost revenue. During peak hours, 43% of restaurant calls go unanswered, 
              costing the average restaurant $2,000 per month in lost orders and reservations.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <span className="text-neutral-300">43% of calls go unanswered during peak hours</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <span className="text-neutral-300">$2,000+ lost per month per location</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <span className="text-neutral-300">Staff overwhelmed during busy periods</span>
              </div>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-6 text-center">
              <div className="text-4xl font-bold text-red-400 mb-2">43%</div>
              <div className="text-white font-semibold mb-2">Missed Calls</div>
              <div className="text-neutral-400 text-sm">Industry average during peak hours</div>
            </div>
            <div className="bg-orange-500/10 border border-orange-500/30 rounded-2xl p-6 text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">$2,000</div>
              <div className="text-white font-semibold mb-2">Lost Monthly</div>
              <div className="text-neutral-400 text-sm">From missed calls and orders</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>,

    // Page 3: Solution
    <motion.div
      key="solution"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-br from-primary-900/20 via-neutral-900 to-neutral-800 flex items-center p-8"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
            AI Solutions That Run Your Front Desk Automatically
          </h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Four powerful tools designed specifically for restaurants to never miss a call, order, or booking again.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-neutral-800/80 backdrop-blur-sm rounded-2xl p-8 border border-neutral-700"
            >
              <div className="mb-6">
                {service.icon}
                <h3 className="text-2xl font-bold text-white mb-4 font-heading">{service.title}</h3>
                <p className="text-neutral-300 mb-6">{service.description}</p>
              </div>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-neutral-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>,

    // Page 4: Success Story
    <motion.div
      key="success"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-br from-green-900/20 via-neutral-900 to-neutral-800 flex items-center p-8"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
            Success Story: Halifax Restaurant Chain
          </h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Before Auralix, their phones went unanswered during peak hours. After implementing our AI receptionist, 
            bookings increased 40%, admin workload dropped 60%, and monthly revenue climbed 25%.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-gradient-to-r from-primary-500/20 to-blue-500/20 rounded-2xl p-8 border border-primary-500/30">
            <blockquote className="text-2xl text-white italic mb-6">
              "We never miss a call anymore — our bookings jumped 40%. The AI handles everything so naturally, 
              customers can't tell the difference."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">SM</span>
              </div>
              <div>
                <div className="text-white font-semibold">Sarah Mitchell</div>
                <div className="text-neutral-400 text-sm">Owner, Halifax Seafood Co.</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-neutral-800 rounded-xl p-6 text-center">
              <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-green-400 mb-2">40%</div>
              <div className="text-neutral-300 text-sm">Increase in Bookings</div>
            </div>
            <div className="bg-neutral-800 rounded-xl p-6 text-center">
              <Users className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-blue-400 mb-2">60%</div>
              <div className="text-neutral-300 text-sm">Reduction in Admin Time</div>
            </div>
            <div className="bg-neutral-800 rounded-xl p-6 text-center">
              <DollarSign className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-purple-400 mb-2">25%</div>
              <div className="text-neutral-300 text-sm">Increase in Revenue</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>,

    // Page 5: Contact
    <motion.div
      key="contact"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 flex items-center p-8"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
            Ready to Stop Losing Orders to Missed Calls?
          </h2>
          <p className="text-xl text-neutral-300 mb-8">
            Join hundreds of restaurants that have already automated their operations with Auralix AI.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          <div className="bg-neutral-800/80 backdrop-blur-sm rounded-xl p-6 border border-neutral-700">
            <h3 className="text-xl font-bold text-white mb-4 font-heading">Get Started Today</h3>
            <div className="space-y-3">
              <button
                onClick={handleBookConsultation}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-accent-orange hover:bg-accent-orange/90 text-white font-bold rounded-lg transition-all duration-200"
              >
                <Calendar className="w-5 h-5" />
                Book Free Consultation
              </button>
              <button
                onClick={handleStartJourney}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 border-2 border-primary-400 text-primary-400 hover:bg-primary-400 hover:text-black font-bold rounded-lg transition-all duration-200"
              >
                <Rocket className="w-5 h-5" />
                Start AI Journey
              </button>
            </div>
          </div>

          <div className="bg-neutral-800/80 backdrop-blur-sm rounded-xl p-6 border border-neutral-700">
            <h3 className="text-xl font-bold text-white mb-4 font-heading">Contact Information</h3>
            <div className="space-y-3 text-neutral-300">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-400" />
                <span>auralixai@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-400" />
                <span>+1 (782) 882-0525</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary-400" />
                <span>Halifax, Nova Scotia, Canada</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-sm text-neutral-400 mb-4">
            No setup fees. Cancel anytime. Our team will activate your trial within 24 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-neutral-500">
            <span>© 2025 Auralix AI Inc.</span>
            <span>•</span>
            <span>Made in Nova Scotia</span>
            <span>•</span>
            <span>Serving Canada Coast-to-Coast</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  ];

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % pages.length);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + pages.length) % pages.length);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navigation */}
      <div className="fixed top-4 left-4 right-4 z-50 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <button
            onClick={prevPage}
            disabled={currentPage === 0}
            className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg transition-all duration-200"
          >
            Previous
          </button>
          <span className="text-sm text-neutral-400">
            {currentPage + 1} of {pages.length}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={handleDownload}
            className="px-4 py-2 bg-primary-500 hover:bg-primary-400 text-white rounded-lg transition-all duration-200 flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Download PDF
          </button>
          <button
            onClick={nextPage}
            disabled={currentPage === pages.length - 1}
            className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg transition-all duration-200"
          >
            Next
          </button>
        </div>
      </div>

      {/* Page Content */}
      <div className="relative">
        {pages[currentPage]}
      </div>

      {/* Page Indicators */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {pages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentPage ? 'bg-primary-400' : 'bg-neutral-600'
            }`}
          />
        ))}
      </div>

      {/* One-Pager PDF Section */}
      <div className="fixed bottom-20 right-4 z-50">
        <OnePagerPDF />
      </div>
    </div>
  );
};

export default BrochurePage;