'use client';
import { FaPhone, FaComments, FaGlobe, FaCheck, FaArrowRight } from "react-icons/fa";
import { TbSettingsAutomation } from "react-icons/tb";

export default function PricingPage() {
  const products = [
    {
      icon: <TbSettingsAutomation className="text-4xl text-cyan-400" />,
      title: 'Workflow Automation',
      description: 'Automate review requests, follow-ups, order updates, and payment reminders',
      pricing: 'Custom Pricing',
      priceDetail: 'Based on your workflow complexity',
      features: [
        'Review request automation',
        'Email & SMS follow-ups',
        'Order update workflows',
        'Payment reminders',
        'Custom workflow builder',
        'Unlimited automations',
        'Analytics & reporting',
        'Integration support'
      ],
      cta: 'Get Custom Quote',
      color: 'cyan'
    },
    {
      icon: <FaPhone className="text-4xl text-blue-400" />,
      title: 'Voice Agents',
      description: 'AI that answers calls like a human receptionist',
      pricing: 'Custom Pricing',
      priceDetail: 'Based on call volume',
      features: [
        'Human-like conversation',
        'Take & cancel orders',
        'Provide wait times',
        'Intelligent call routing',
        'Multi-language support',
        '24/7 availability',
        'Call analytics',
        'CRM integration'
      ],
      cta: 'Get Custom Quote',
      color: 'blue',
      popular: true
    },
    {
      icon: <FaComments className="text-4xl text-purple-400" />,
      title: 'AI Chatbots',
      description: 'Multi-platform chatbots for websites, Instagram, Facebook, and WhatsApp',
      pricing: 'Custom Pricing',
      priceDetail: 'Based on features & platforms',
      features: [
        'Lead capture automation',
        'FAQ automation',
        'Appointment booking',
        'Website integration',
        'Instagram DM automation',
        'Facebook Messenger',
        'WhatsApp Business',
        '24/7 support automation'
      ],
      cta: 'Get Custom Quote',
      color: 'purple'
    },
    {
      icon: <FaGlobe className="text-4xl text-teal-400" />,
      title: 'AI-Powered Websites',
      description: 'Modern websites with AI features built in from day one',
      pricing: 'Custom Pricing',
      priceDetail: 'Based on complexity & features',
      features: [
        'AI chatbot included',
        'Automation workflows',
        'Customer engagement tools',
        'Modern responsive design',
        'SEO optimized',
        'Fast loading speeds',
        'Mobile-first',
        'Analytics dashboard'
      ],
      cta: 'Get Custom Quote',
      color: 'teal'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: {[key: string]: any} = {
      cyan: {
        bg: 'bg-cyan-500',
        text: 'text-cyan-400',
        border: 'border-cyan-400',
        hover: 'hover:bg-cyan-400',
        from: 'from-cyan-500',
        to: 'to-cyan-600'
      },
      blue: {
        bg: 'bg-blue-500',
        text: 'text-blue-400',
        border: 'border-blue-400',
        hover: 'hover:bg-blue-400',
        from: 'from-blue-500',
        to: 'to-blue-600'
      },
      purple: {
        bg: 'bg-purple-500',
        text: 'text-purple-400',
        border: 'border-purple-400',
        hover: 'hover:bg-purple-400',
        from: 'from-purple-500',
        to: 'to-purple-600'
      },
      teal: {
        bg: 'bg-teal-500',
        text: 'text-teal-400',
        border: 'border-teal-400',
        hover: 'hover:bg-teal-400',
        from: 'from-teal-500',
        to: 'to-teal-600'
      }
    };
    return colors[color];
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a2a3a] via-[#0a2233] to-[#0a0a0a] text-white pb-20">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center py-12 sm:py-16 px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-cyan-300">Transparent Pricing</h1>
        <p className="text-lg sm:text-xl md:text-2xl text-cyan-100 mb-6 sm:mb-8">Custom solutions tailored to your business needs</p>
        <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
          All our solutions are customized to fit your specific requirements. Get a personalized quote based on your business size, features needed, and usage volume.
        </p>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-4 mb-16 sm:mb-20">
        {products.map((product, index) => {
          const colors = getColorClasses(product.color);
          return (
            <div 
              key={index} 
              className={`bg-[#11202a] rounded-2xl p-6 sm:p-8 shadow-xl border ${colors.border} relative ${product.popular ? 'transform scale-105' : ''}`}
            >
              {product.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-xs sm:text-sm font-bold">
                  MOST POPULAR
                </div>
              )}
              
              <div className="text-center mb-6">
                <div className="mb-4 flex justify-center">{product.icon}</div>
                <h3 className={`text-xl sm:text-2xl font-bold ${colors.text} mb-2`}>{product.title}</h3>
                <p className="text-sm text-gray-300 mb-4">{product.description}</p>
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                  {product.pricing}
                </div>
                <p className="text-xs sm:text-sm text-gray-400">{product.priceDetail}</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-300">
                    <FaCheck className={`${colors.text} mt-1 flex-shrink-0`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="https://calendly.com/auralixai/30min" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`w-full ${colors.bg} ${colors.hover} text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 text-center block text-sm sm:text-base`}
              >
                {product.cta}
              </a>
            </div>
          );
        })}
      </section>

      {/* How Pricing Works */}
      <section className="max-w-4xl mx-auto mb-20 px-4">
        <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-white">How Our Pricing Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-cyan-500 text-black w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-lg font-bold text-white mb-2">Book Consultation</h3>
              <p className="text-gray-300 text-sm">Schedule a free 30-minute consultation to discuss your needs</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-lg font-bold text-white mb-2">Get Custom Quote</h3>
              <p className="text-gray-300 text-sm">Receive a tailored pricing proposal based on your requirements</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-lg font-bold text-white mb-2">Launch & Scale</h3>
              <p className="text-gray-300 text-sm">Deploy your solution and scale as your business grows</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto mb-20 px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-white">Pricing FAQs</h2>
        <div className="space-y-6">
          <div className="bg-[#1a1a1a] rounded-xl p-6">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-3">Why custom pricing?</h3>
            <p className="text-gray-300 text-sm sm:text-base">Every business is unique. We customize our solutions to fit your specific needs, team size, and usage volume to ensure you only pay for what you need.</p>
          </div>
          <div className="bg-[#1a1a1a] rounded-xl p-6">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-3">What factors affect pricing?</h3>
            <p className="text-gray-300 text-sm sm:text-base">Pricing depends on: number of users, features required, integration complexity, call/message volume, and level of customization needed.</p>
          </div>
          <div className="bg-[#1a1a1a] rounded-xl p-6">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-3">Are there any setup fees?</h3>
            <p className="text-gray-300 text-sm sm:text-base">Setup and implementation fees vary based on complexity. Most standard deployments have minimal to no setup fees.</p>
          </div>
          <div className="bg-[#1a1a1a] rounded-xl p-6">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-3">Can I combine multiple solutions?</h3>
            <p className="text-gray-300 text-sm sm:text-base">Absolutely! Many customers combine solutions (e.g., AI-Powered Website + Chatbots + Workflow Automation) for maximum impact. We offer bundle discounts.</p>
          </div>
          <div className="bg-[#1a1a1a] rounded-xl p-6">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-3">Do you offer payment plans?</h3>
            <p className="text-gray-300 text-sm sm:text-base">Yes, we offer flexible monthly and annual payment plans. Annual plans typically include a discount.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-4xl mx-auto text-center px-4">
        <div className="bg-gradient-to-r from-[#1a1a1a] to-[#0a2a3a] rounded-2xl p-8 sm:p-12 border border-cyan-500">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
          <p className="text-base sm:text-lg text-gray-300 mb-8">Book a free consultation to get a custom quote tailored to your needs.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://calendly.com/auralixai/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-lg transition-all duration-200 shadow-lg"
            >
              Book Free Consultation
              <FaArrowRight />
            </a>
            <a href="/solutions" className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold rounded-lg transition-all duration-200">
              View Solutions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
