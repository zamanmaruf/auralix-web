'use client';
import { FaRobot, FaPhone, FaComments, FaGlobe, FaCheck, FaArrowRight } from "react-icons/fa";
import { TbSettingsAutomation } from "react-icons/tb";

export default function SolutionsPage() {
  const solutions = [
    {
      id: 'workflow-automation',
      icon: <TbSettingsAutomation className="text-5xl sm:text-6xl text-cyan-400" />,
      title: 'Workflow Automation',
      subtitle: 'Automate repetitive tasks and free up your staff',
      description: 'Automate review requests, email/SMS follow-ups, order updates, and payment reminders. Free up your staff from busywork so they can focus on real customers.',
      features: [
        'Review request automation',
        'Email & SMS follow-up sequences',
        'Automated order updates',
        'Payment reminder workflows',
        'Customer onboarding automation',
        'Data entry automation',
        'Appointment reminders',
        'Custom workflow builder'
      ],
      benefits: [
        'Save 10-15 hours per week',
        'Never miss a follow-up',
        'Improve customer satisfaction',
        'Reduce manual errors'
      ],
      idealFor: 'Restaurants, Salons, Retail Stores, Service Businesses',
      color: 'cyan'
    },
    {
      id: 'voice-agents',
      icon: <FaPhone className="text-5xl sm:text-6xl text-blue-400" />,
      title: 'Voice Agents',
      subtitle: 'AI that answers calls like a human front desk',
      description: 'AI voice agents that answer your calls just like a human receptionist. Can take orders, cancel orders, provide wait times, and route calls without needing staff.',
      features: [
        'Human-like conversation',
        'Take customer orders',
        'Cancel or modify bookings',
        'Provide real-time wait times',
        'Intelligent call routing',
        'Multi-language support',
        '24/7 availability',
        'Call analytics & insights'
      ],
      benefits: [
        'Never miss a call',
        'Reduce front desk workload',
        'Handle multiple calls simultaneously',
        'Improve customer experience'
      ],
      idealFor: 'Restaurants, Salons, Medical Clinics, Service Businesses',
      color: 'blue'
    },
    {
      id: 'ai-chatbots',
      icon: <FaComments className="text-5xl sm:text-6xl text-purple-400" />,
      title: 'AI Chatbots',
      subtitle: 'Multi-platform customer engagement',
      description: 'Chatbots that capture leads, answer FAQs, book appointments, and automate customer support. Works across websites, Instagram, Facebook, and WhatsApp.',
      features: [
        'Lead capture & qualification',
        'FAQ automation',
        'Appointment booking',
        'Customer support automation',
        'Website integration',
        'Instagram DM automation',
        'Facebook Messenger',
        'WhatsApp Business API'
      ],
      benefits: [
        'Capture more leads 24/7',
        'Respond instantly to inquiries',
        'Book appointments automatically',
        'Reduce support tickets by 60%'
      ],
      idealFor: 'E-commerce, Professional Services, Agencies, Local Businesses',
      color: 'purple'
    },
    {
      id: 'ai-websites',
      icon: <FaGlobe className="text-5xl sm:text-6xl text-teal-400" />,
      title: 'AI-Powered Websites',
      subtitle: 'Modern websites with AI built in from day one',
      description: 'Enterprise-grade websites built with AI features integrated. Includes chatbots, automation workflows, and customer engagement tools built in from the start.',
      features: [
        'AI chatbot integrated',
        'Automation workflows included',
        'Customer engagement tools',
        'Modern, responsive design',
        'SEO optimized',
        'Fast loading speeds',
        'Mobile-first approach',
        'Analytics dashboard'
      ],
      benefits: [
        'Complete AI-first solution',
        'No separate integrations needed',
        'Professional design',
        'Higher conversion rates'
      ],
      idealFor: 'All Business Types, Startups, Growing Companies',
      color: 'teal'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: {[key: string]: any} = {
      cyan: {
        bg: 'bg-cyan-500',
        text: 'text-cyan-400',
        border: 'border-cyan-400',
        hover: 'hover:bg-cyan-400'
      },
      blue: {
        bg: 'bg-blue-500',
        text: 'text-blue-400',
        border: 'border-blue-400',
        hover: 'hover:bg-blue-400'
      },
      purple: {
        bg: 'bg-purple-500',
        text: 'text-purple-400',
        border: 'border-purple-400',
        hover: 'hover:bg-purple-400'
      },
      teal: {
        bg: 'bg-teal-500',
        text: 'text-teal-400',
        border: 'border-teal-400',
        hover: 'hover:bg-teal-400'
      }
    };
    return colors[color];
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a2a3a] via-[#0a2233] to-[#0a0a0a] text-white pb-20">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center py-12 sm:py-16 px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-cyan-300">Our Ready Solutions</h1>
        <p className="text-lg sm:text-xl md:text-2xl text-cyan-100 mb-6 sm:mb-8">Production-ready AI solutions you can deploy immediately</p>
        <div className="inline-block bg-[#1a1a1a] rounded-xl p-6 mt-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            {solutions.map((solution, index) => (
              <a 
                key={index}
                href={`#${solution.id}`}
                className="flex flex-col items-center gap-2 hover:scale-110 transition-transform"
              >
                {solution.icon}
                <span className="text-sm font-semibold text-center">{solution.title}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="max-w-6xl mx-auto px-4 space-y-12 sm:space-y-16">
        {solutions.map((solution, index) => {
          const colors = getColorClasses(solution.color);
          return (
            <div 
              key={index} 
              id={solution.id}
              className="bg-[#1a1a1a] rounded-2xl p-8 sm:p-12 shadow-xl scroll-mt-20"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Left Column */}
                <div>
                  <div className="mb-6">{solution.icon}</div>
                  <h2 className={`text-3xl sm:text-4xl font-bold ${colors.text} mb-3`}>{solution.title}</h2>
                  <p className="text-xl text-gray-300 mb-6">{solution.subtitle}</p>
                  <p className="text-lg text-gray-300 mb-8 leading-relaxed">{solution.description}</p>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-white mb-4">Perfect For:</h3>
                    <p className={`${colors.text} font-semibold`}>{solution.idealFor}</p>
                  </div>

                  <a 
                    href="https://calendly.com/auralixai/30min" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-3 ${colors.bg} ${colors.hover} text-white font-bold px-8 py-4 rounded-lg transition-all duration-200 shadow-lg`}
                  >
                    Get Started
                    <FaArrowRight />
                  </a>
                </div>

                {/* Right Column */}
                <div>
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-white mb-4">Features</h3>
                    <ul className="space-y-3">
                      {solution.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <FaCheck className={`${colors.text} mt-1 flex-shrink-0`} />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={`bg-[#11202a] rounded-xl p-6 border ${colors.border}`}>
                    <h3 className="text-xl font-bold text-white mb-4">Key Benefits</h3>
                    <ul className="space-y-3">
                      {solution.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className={`w-2 h-2 ${colors.bg} rounded-full mt-2 flex-shrink-0`}></div>
                          <span className="text-gray-300 font-semibold">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto text-center px-4 mt-20">
        <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
        <p className="text-lg text-gray-300 mb-8">Choose the solution that fits your business needs and start your AI transformation journey.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://calendly.com/auralixai/30min" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-lg transition-all duration-200 shadow-lg">
            Book Free Consultation
          </a>
          <a href="/pricing" className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold rounded-lg transition-all duration-200">
            View Pricing
          </a>
        </div>
      </section>
    </div>
  );
}
