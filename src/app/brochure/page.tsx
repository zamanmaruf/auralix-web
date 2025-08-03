'use client';

import React, { useState, useEffect } from 'react';
import { 
  MdChat, MdAutoAwesome, MdWeb, MdTrendingUp, 
  MdBusiness, MdSpeed, MdAnalytics, MdSecurity,
  MdLocationOn, MdPhone, MdEmail, MdLanguage,
  MdRocket, MdStars, MdVerified, MdTimeline
} from 'react-icons/md';
import { 
  FaRobot, FaChartLine, FaShieldAlt, FaUsers,
  FaHome, FaUtensils, FaShoppingCart, FaCalculator,
  FaBrain, FaCogs, FaGlobe, FaLightbulb
} from 'react-icons/fa';
import { TbSettingsAutomation, TbWorld, TbTarget } from 'react-icons/tb';
import { BiBrain, BiTrendingUp } from 'react-icons/bi';

const BrochurePage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // CTA Handler Functions
  const handleEmailClick = () => {
    window.open('mailto:auralixai@gmail.com?subject=AI Automation Inquiry&body=Hi Auralix AI team,%0D%0A%0D%0AI am interested in learning more about your AI automation services.%0D%0A%0D%0APlease contact me with more information.%0D%0A%0D%0ABest regards,', '_blank');
  };

  const handlePhoneClick = () => {
    window.open('tel:+17828820525', '_blank');
  };

  const handleWebsiteClick = () => {
    window.open('https://www.auralixai.ca', '_blank');
  };

  const handleBookAudit = () => {
    window.open('mailto:auralixai@gmail.com?subject=Book Free AI Audit&body=Hi Auralix AI team,%0D%0A%0D%0AI would like to book a free AI audit for my business.%0D%0A%0D%0APlease include:%0D%0A- Business name and industry%0D%0A- Current challenges%0D%0A- Preferred contact method%0D%0A%0D%0AThank you!', '_blank');
  };

  const handleScheduleDemo = () => {
    window.open('mailto:auralixai@gmail.com?subject=Schedule AI Demo&body=Hi Auralix AI team,%0D%0A%0D%0AI would like to schedule a demo of your AI automation solutions.%0D%0A%0D%0APlease include:%0D%0A- Preferred date and time%0D%0A- Business type%0D%0A- Specific areas of interest%0D%0A%0D%0AThank you!', '_blank');
  };

  const handleGetStarted = () => {
    window.open('mailto:auralixai@gmail.com?subject=Get Started with AI Automation&body=Hi Auralix AI team,%0D%0A%0D%0AI am ready to get started with AI automation for my business.%0D%0A%0D%0APlease provide:%0D%0A- Next steps%0D%0A- Timeline%0D%0A- Investment required%0D%0A%0D%0AThank you!', '_blank');
  };

  const handleLearnMore = () => {
    window.open('/solutions', '_blank');
  };

  const handleCalculateSavings = () => {
    window.open('mailto:auralixai@gmail.com?subject=Calculate AI Savings&body=Hi Auralix AI team,%0D%0A%0D%0AI would like to calculate potential savings from AI automation.%0D%0A%0D%0APlease include:%0D%0A- Current business size%0D%0A- Industry%0D%0A- Monthly operational costs%0D%0A- Pain points%0D%0A%0D%0AThank you!', '_blank');
  };

  const handleBookConsultation = () => {
    window.open('mailto:auralixai@gmail.com?subject=Book AI Consultation&body=Hi Auralix AI team,%0D%0A%0D%0AI would like to book a consultation to discuss AI automation for my business.%0D%0A%0D%0APlease include:%0D%0A- Preferred consultation time%0D%0A- Business overview%0D%0A- Specific goals%0D%0A%0D%0AThank you!', '_blank');
  };

  const handleStartJourney = () => {
    window.open('mailto:auralixai@gmail.com?subject=Start AI Journey&body=Hi Auralix AI team,%0D%0A%0D%0AI am ready to start my AI automation journey with Auralix AI.%0D%0A%0D%0APlease include:%0D%0A- Business details%0D%0A- Current challenges%0D%0A- Goals and timeline%0D%0A%0D%0AThank you!', '_blank');
  };

  const handleLocalPartnership = () => {
    window.open('mailto:auralixai@gmail.com?subject=Local Partnership Inquiry&body=Hi Auralix AI team,%0D%0A%0D%0AI am interested in exploring a local partnership with Auralix AI.%0D%0A%0D%0APlease include:%0D%0A- Partnership type%0D%0A- Business details%0D%0A- Contact information%0D%0A%0D%0AThank you!', '_blank');
  };

  const handleRequestQuote = () => {
    window.open('mailto:auralixai@gmail.com?subject=Request AI Quote&body=Hi Auralix AI team,%0D%0A%0D%0AI would like to request a quote for AI automation services.%0D%0A%0D%0APlease include:%0D%0A- Business requirements%0D%0A- Budget range%0D%0A- Timeline%0D%0A%0D%0AThank you!', '_blank');
  };

  const handleViewCaseStudies = () => {
    window.open('/blog', '_blank');
  };

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const testimonials = [
    {
      name: "Sarah Mitchell",
      business: "The Coastal Kitchen",
      quote: "Our AI chatbot handles 80% of customer inquiries automatically. We've seen a 35% increase in online orders since implementing Auralix's solution.",
      rating: 5,
      avatar: "SK"
    },
    {
      name: "David Chen",
      business: "Halifax Real Estate Group",
      quote: "The automated lead qualification system has reduced our response time from hours to minutes. Our conversion rate increased by 40% in just 3 months.",
      rating: 5,
      avatar: "DC"
    },
    {
      name: "Maria Rodriguez",
      business: "Atlantic Accounting Services",
      quote: "Auralix's workflow automation saved us 15 hours per week on repetitive tasks. The ROI was immediate and the support team is exceptional.",
      rating: 5,
      avatar: "MR"
    }
  ];

  const services = [
    {
      icon: <FaBrain className="text-4xl text-cyan-400" />,
      title: "AI-Powered Intelligence",
      description: "Advanced neural networks that learn and adapt to your business",
      features: ["Predictive Analytics", "Natural Language Processing", "Machine Learning"]
    },
    {
      icon: <TbSettingsAutomation className="text-4xl text-purple-400" />,
      title: "Hyper-Automation",
      description: "End-to-end workflow automation with zero human intervention",
      features: ["Process Mining", "RPA Integration", "Smart Workflows"]
    },
    {
      icon: <MdWeb className="text-4xl text-blue-400" />,
      title: "Quantum Web Development",
      description: "Next-generation websites with AI-driven optimization",
      features: ["Real-time Optimization", "Voice Search", "Progressive Web Apps"]
    },
    {
      icon: <MdTrendingUp className="text-4xl text-green-400" />,
      title: "Predictive Marketing",
      description: "AI-powered campaigns that anticipate customer behavior",
      features: ["Behavioral Analysis", "A/B Testing AI", "Conversion Optimization"]
    },
    {
      icon: <MdBusiness className="text-4xl text-orange-400" />,
      title: "Industry-Specific AI",
      description: "Custom neural networks for your specific business domain",
      features: ["Domain Expertise", "Custom Training", "Specialized Models"]
    }
  ];

  const benefits = [
    {
      icon: <MdRocket className="text-3xl text-cyan-400" />,
      title: "Lightning-Fast Response",
      description: "Respond to leads in seconds, not hours",
      metric: "99.9% Uptime"
    },
    {
      icon: <BiTrendingUp className="text-3xl text-green-400" />,
      title: "Massive Cost Reduction",
      description: "Cut operational costs by up to 60%",
      metric: "60% Savings"
    },
    {
      icon: <MdStars className="text-3xl text-purple-400" />,
      title: "Conversion Explosion",
      description: "Boost customer conversions by 20-40%",
      metric: "40% Increase"
    },
    {
      icon: <MdVerified className="text-3xl text-blue-400" />,
      title: "Enterprise-Grade Security",
      description: "Bank-level security with SOC 2 compliance",
      metric: "SOC 2 Type II"
    }
  ];

  const industrySolutions = [
    { 
      icon: <FaHome className="text-3xl" />, 
      title: "Real Estate AI", 
      color: "text-cyan-400",
      description: "Lead qualification, market analysis, virtual tours"
    },
    { 
      icon: <FaUtensils className="text-3xl" />, 
      title: "Restaurant Intelligence", 
      color: "text-green-400",
      description: "Order automation, inventory management, customer insights"
    },
    { 
      icon: <FaShoppingCart className="text-3xl" />, 
      title: "Retail AI", 
      color: "text-purple-400",
      description: "Upsell optimization, demand forecasting, personalized recommendations"
    },
    { 
      icon: <FaCalculator className="text-3xl" />, 
      title: "Financial Automation", 
      color: "text-orange-400",
      description: "Invoice processing, fraud detection, financial reporting"
    }
  ];

  const renderCoverPage = () => (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-blue-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(138,43,226,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,123,255,0.1),transparent_50%)]"></div>
        
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
        </div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
              style={{
                left: `${(i * 7) % 100}%`,
                top: `${(i * 11) % 100}%`,
                animationDelay: `${(i * 0.2)}s`,
                animationDuration: `${2 + (i % 3)}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white p-8">
        <div className="text-center max-w-6xl mx-auto">
          {/* Holographic Logo */}
          <div className="mb-12 relative">
            <div className="text-6xl font-black mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
              AURALIX AI
            </div>
            <div className="text-xl text-cyan-300 font-light tracking-wider">
              NOVA SCOTIA'S AI INNOVATION HUB
            </div>
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-cyan-400 rounded-full opacity-50 animate-ping"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-purple-400 rounded-full opacity-50 animate-ping" style={{animationDelay: '0.5s'}}></div>
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              AI AUTOMATION
            </span>
            <span className="block text-4xl md:text-6xl font-bold text-white mt-4">
              THAT SCALES WITH YOU
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-cyan-300 mb-8 font-light">
            From Local Business to Enterprise
          </h2>
          
          <p className="text-xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed">
            Nova Scotia's First Full-Service AI Automation & Digital Transformation Company
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              { number: '99.9%', label: 'Uptime' },
              { number: '60%', label: 'Cost Reduction' },
              { number: '40%', label: 'Conversion Boost' },
              { number: '24/7', label: 'AI Support' }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-8">
            <button 
              onClick={handleBookAudit}
              className="group relative px-10 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold rounded-full text-lg overflow-hidden transition-all duration-300 hover:scale-105 border border-cyan-400/30 cursor-pointer"
            >
              <span className="relative z-10">Book Free AI Audit</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button 
              onClick={handleScheduleDemo}
              className="px-10 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-full text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 cursor-pointer"
            >
              Schedule Demo
            </button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col md:flex-row gap-8 text-lg justify-center">
            <button 
              onClick={handleEmailClick}
              className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full hover:bg-white/20 transition-all duration-300 cursor-pointer"
            >
              <MdEmail className="text-cyan-400" />
              <span>auralixai@gmail.com</span>
            </button>
            <button 
              onClick={handlePhoneClick}
              className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full hover:bg-white/20 transition-all duration-300 cursor-pointer"
            >
              <MdPhone className="text-cyan-400" />
              <span>7828820525</span>
            </button>
            <button 
              onClick={handleWebsiteClick}
              className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full hover:bg-white/20 transition-all duration-300 cursor-pointer"
            >
              <MdLanguage className="text-cyan-400" />
              <span>www.auralixai.ca</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderServicesPage = () => (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            WHAT WE DO
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Auralix AI transforms Nova Scotia businesses through cutting-edge AI automation, 
            helping them compete in the digital age with enterprise-grade solutions 
            that scale from startup to enterprise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-500 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-cyan-300">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* AI Assistant Showcase */}
        <div className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 backdrop-blur-sm rounded-3xl p-12 border border-cyan-500/20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">AI-Powered Customer Engagement</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Our intelligent chatbots handle customer inquiries 24/7, providing instant responses 
                and seamless escalation to human agents when needed. Powered by advanced NLP and machine learning.
              </p>
              <div className="flex gap-4 text-sm">
                <div className="bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full border border-cyan-500/30">99.9% Uptime</div>
                <div className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full border border-purple-500/30">Instant Response</div>
                <div className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full border border-blue-500/30">Multi-language</div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl p-8 text-white text-center">
              <FaRobot className="text-8xl mx-auto mb-6 text-cyan-300" />
              <h4 className="text-2xl font-bold mb-3">AI Assistant</h4>
              <p className="text-cyan-200">Ready to help 24/7</p>
              <div className="mt-6 flex justify-center">
                <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse ml-2" style={{animationDelay: '0.2s'}}></div>
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse ml-2" style={{animationDelay: '0.4s'}}>                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <h3 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h3>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <button 
                onClick={handleGetStarted}
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold rounded-full text-lg overflow-hidden transition-all duration-300 hover:scale-105 border border-cyan-400/30 cursor-pointer"
              >
                <span className="relative z-10">Get Started Today</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button 
                onClick={handleLearnMore}
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-full text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 cursor-pointer"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderBenefitsPage = () => (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            WHY IT WORKS
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Our AI solutions deliver measurable results through intelligent automation, 
            data-driven insights, and enterprise-grade reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{benefit.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{benefit.description}</p>
                <div className="text-cyan-400 font-bold text-lg">{benefit.metric}</div>
              </div>
            </div>
          ))}
        </div>

        {/* ROI Comparison */}
        <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-3xl p-12 border border-cyan-500/20">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">AI Automation vs Traditional Methods</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-6 bg-red-500/20 rounded-xl border border-red-500/30">
                <span className="font-semibold text-red-300">Traditional Response Time</span>
                <span className="text-3xl font-bold text-red-400">2-4 hours</span>
              </div>
              <div className="flex items-center justify-between p-6 bg-red-500/20 rounded-xl border border-red-500/30">
                <span className="font-semibold text-red-300">Manual Task Processing</span>
                <span className="text-3xl font-bold text-red-400">8-10 hours/day</span>
              </div>
              <div className="flex items-center justify-between p-6 bg-red-500/20 rounded-xl border border-red-500/30">
                <span className="font-semibold text-red-300">Customer Conversion Rate</span>
                <span className="text-3xl font-bold text-red-400">5-8%</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-6 bg-green-500/20 rounded-xl border border-green-500/30">
                <span className="font-semibold text-green-300">AI Response Time</span>
                <span className="text-3xl font-bold text-green-400">Seconds</span>
              </div>
              <div className="flex items-center justify-between p-6 bg-green-500/20 rounded-xl border border-green-500/30">
                <span className="font-semibold text-green-300">Automated Processing</span>
                <span className="text-3xl font-bold text-green-400">24/7</span>
              </div>
              <div className="flex items-center justify-between p-6 bg-green-500/20 rounded-xl border border-green-500/30">
                <span className="font-semibold text-green-300">Customer Conversion Rate</span>
                <span className="text-3xl font-bold text-green-400">20-40%</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold text-white mb-6">Ready to See the ROI?</h3>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <button 
              onClick={handleCalculateSavings}
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold rounded-full text-lg overflow-hidden transition-all duration-300 hover:scale-105 border border-cyan-400/30 cursor-pointer"
            >
              <span className="relative z-10">Calculate Your Savings</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button 
              onClick={handleBookConsultation}
              className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-full text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 cursor-pointer"
            >
              Book Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderLocalPage = () => (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            LOCAL ADVANTAGE & ROI
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We focus on Nova Scotia businesses first, understanding local challenges and 
            delivering solutions that drive real growth in our community.
          </p>
        </div>

        {/* ROI Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center bg-gradient-to-br from-cyan-500 to-cyan-600 text-white p-10 rounded-2xl border border-cyan-400/30">
            <div className="text-5xl font-black mb-3">60%</div>
            <div className="text-xl font-semibold mb-4">Task Automation</div>
            <p className="text-cyan-200">Reduce manual work by up to 60%</p>
          </div>
          <div className="text-center bg-gradient-to-br from-purple-500 to-purple-600 text-white p-10 rounded-2xl border border-purple-400/30">
            <div className="text-5xl font-black mb-3">40%</div>
            <div className="text-xl font-semibold mb-4">Conversion Increase</div>
            <p className="text-purple-200">Boost customer conversions by 20-40%</p>
          </div>
          <div className="text-center bg-gradient-to-br from-blue-500 to-blue-600 text-white p-10 rounded-2xl border border-blue-400/30">
            <div className="text-5xl font-black mb-3">Months</div>
            <div className="text-xl font-semibold mb-4">Payback Period</div>
            <p className="text-blue-200">See ROI within months, not years</p>
          </div>
        </div>

        {/* Local Focus */}
        <div className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 backdrop-blur-sm rounded-3xl p-12 border border-cyan-500/20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Built for Nova Scotia</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                We understand local business challenges and regulations. Our solutions are 
                designed specifically for Nova Scotia's unique market needs while maintaining 
                enterprise-grade capabilities.
              </p>
              <div className="flex gap-4 text-sm">
                <div className="bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full border border-cyan-500/30">Local Support</div>
                <div className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full border border-purple-500/30">Nova Scotia Focus</div>
                <div className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full border border-blue-500/30">Community Growth</div>
              </div>
            </div>
            <div className="text-center">
              <MdLocationOn className="text-8xl mx-auto mb-6 text-cyan-400" />
              <h4 className="text-2xl font-bold text-white mb-3">Halifax, Nova Scotia</h4>
              <p className="text-cyan-300">Your local AI partner</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold text-white mb-6">Join Nova Scotia's AI Revolution</h3>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <button 
              onClick={handleStartJourney}
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold rounded-full text-lg overflow-hidden transition-all duration-300 hover:scale-105 border border-cyan-400/30 cursor-pointer"
            >
              <span className="relative z-10">Start Your Journey</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button 
              onClick={handleLocalPartnership}
              className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-full text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 cursor-pointer"
            >
              Local Partnership
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTestimonialsPage = () => (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            BEYOND BASIC AI & TESTIMONIALS
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Industry-specific solutions that understand your business and deliver 
            measurable results that drive growth.
          </p>
        </div>

        {/* Industry Solutions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {industrySolutions.map((solution, index) => (
            <div key={index} className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 text-center hover:border-cyan-400/40 transition-all duration-500 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className={`mx-auto mb-6 ${solution.color} group-hover:scale-110 transition-transform duration-300`}>
                  {solution.icon}
                </div>
                <h3 className="font-bold text-white text-lg mb-3">{solution.title}</h3>
                <p className="text-gray-400 text-sm">{solution.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed">"{testimonial.quote}"</p>
                <div className="border-t border-gray-700 pt-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.business}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm rounded-3xl p-12 border border-cyan-500/20 text-center">
          <h3 className="text-4xl font-black mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            YOUR COMPETITORS ARE ADOPTING AI. ARE YOU?
          </h3>
          <p className="text-xl mb-10 text-gray-300 leading-relaxed">
            Don't get left behind. Join the AI revolution and transform your business today.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-8">
            <button 
              onClick={handleRequestQuote}
              className="group relative px-10 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold rounded-full text-lg overflow-hidden transition-all duration-300 hover:scale-105 border border-cyan-400/30 cursor-pointer"
            >
              <span className="relative z-10">Request Quote</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button 
              onClick={handleViewCaseStudies}
              className="px-10 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-full text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 cursor-pointer"
            >
              View Case Studies
            </button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-lg">
            <button 
              onClick={handleEmailClick}
              className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-full hover:bg-white/20 transition-all duration-300 cursor-pointer"
            >
              <MdEmail className="text-cyan-400" />
              <span>auralixai@gmail.com</span>
            </button>
            <button 
              onClick={handlePhoneClick}
              className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-full hover:bg-white/20 transition-all duration-300 cursor-pointer"
            >
              <MdPhone className="text-cyan-400" />
              <span>7828820525</span>
            </button>
            <button 
              onClick={handleWebsiteClick}
              className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-full hover:bg-white/20 transition-all duration-300 cursor-pointer"
            >
              <MdLanguage className="text-cyan-400" />
              <span>www.auralixai.ca</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPage = () => {
    switch (currentPage) {
      case 0:
        return renderCoverPage();
      case 1:
        return renderServicesPage();
      case 2:
        return renderBenefitsPage();
      case 3:
        return renderLocalPage();
      case 4:
        return renderTestimonialsPage();
      default:
        return renderCoverPage();
    }
  };

  return (
    <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Navigation */}
      <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-black/80 backdrop-blur-sm rounded-full px-8 py-3 border border-cyan-500/30">
        <div className="flex gap-3">
          {[0, 1, 2, 3, 4].map((index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                currentPage === index ? 'bg-cyan-400 scale-125' : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Page Content */}
      <div className="relative">
        {renderPage()}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => setCurrentPage((prev) => (prev > 0 ? prev - 1 : 4))}
        className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 bg-black/80 backdrop-blur-sm rounded-full p-4 border border-cyan-500/30 hover:bg-black/90 transition-all duration-300"
      >
        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={() => setCurrentPage((prev) => (prev < 4 ? prev + 1 : 0))}
        className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 bg-black/80 backdrop-blur-sm rounded-full p-4 border border-cyan-500/30 hover:bg-black/90 transition-all duration-300"
      >
        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Footer */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 bg-black/80 backdrop-blur-sm rounded-full px-8 py-3 border border-cyan-500/30 text-sm text-gray-300">
        <div className="flex items-center gap-6">
          <span className="font-bold text-cyan-400">AURALIX AI</span>
          <span>•</span>
          <span>Nova Scotia's AI Innovation Hub</span>
          <span>•</span>
          <span>auralixai@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default BrochurePage; 