'use client';

import { motion } from 'framer-motion';
import { Shield, Users, TrendingUp, MapPin, Calendar, ArrowRight, CheckCircle, Phone } from 'lucide-react';

export default function AboutUsPage() {
  const timeline = [
    {
      year: '2024',
      title: 'Launch',
      description: 'Founded in Halifax with a mission to help Canadian restaurants never miss another call',
      icon: Calendar,
      color: 'primary'
    },
    {
      year: '2025',
      title: 'Restaurant Success',
      description: 'Proven results with Halifax Seafood Co. - 40% increase in bookings, 60% less admin time',
      icon: TrendingUp,
      color: 'green'
    },
    {
      year: '2025+',
      title: 'Canada-wide Expansion',
      description: 'Scaling across Canada to serve restaurants from coast to coast',
      icon: MapPin,
      color: 'blue'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-900 text-white">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 font-heading"
          >
            Built in Halifax for Canadian Restaurants
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-neutral-300 mb-8 max-w-4xl mx-auto"
          >
            From small cafés to national chains, we help Canadian restaurants recover thousands 
            in missed calls and orders every month using intelligent AI automation.
          </motion.p>
          
          {/* Primary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8"
          >
            <a
              href="/contact"
              className="bg-accent-orange hover:bg-accent-orange/90 text-white px-8 py-4 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-200 hover:scale-105 flex items-center justify-center gap-3 mx-auto max-w-md"
            >
              <Users className="w-6 h-6" />
              Learn More About Us
            </a>
            <p className="text-primary-200 text-lg font-semibold mt-3">
              Discover our story and how we're helping Canadian restaurants succeed
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 text-sm text-neutral-400"
          >
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-400" />
              <span>SOC 2 Ready</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-blue-400" />
              <span>100+ Restaurants Served</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-purple-400" />
              <span>97% Success Rate</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-primary-400 mb-6 font-heading">Our Mission</h2>
              <p className="text-lg text-neutral-300 mb-6">
                We democratize enterprise-grade AI by designing intelligent systems that help 
                Canadian restaurants of all sizes—from independent cafés to multi-location 
                operations—automate workflows, serve customers better, and never miss another call.
              </p>
              <p className="text-lg text-neutral-300 mb-6">
                We prioritize practical deployment, measurable outcomes, and scalable architecture 
                tailored to each restaurant's stage and size.
              </p>
              <div className="bg-neutral-800/80 backdrop-blur-sm rounded-xl p-6 border border-primary-500/30">
                <h3 className="text-xl font-semibold text-white mb-3 font-heading">Our Core Belief</h3>
                <p className="text-neutral-300">
                  Every restaurant deserves to never miss a call or order again.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-neutral-800/80 backdrop-blur-sm rounded-2xl p-8 border border-neutral-700"
            >
              <h2 className="text-3xl font-bold text-blue-400 mb-6 font-heading">Our Vision</h2>
              <p className="text-lg text-neutral-300 mb-6">
                We are building the most trusted AI automation partner for Canadian restaurants—whether 
                you're running a single café or scaling operations across regions.
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: 'Full-Stack Restaurant AI',
                    description: 'Design intelligent workflows, train restaurant-specific models, and deploy systems that grow with your brand.'
                  },
                  {
                    title: 'Restaurant-Focused Solutions',
                    description: 'From cafés and pizzerias to bars and catering services.'
                  },
                  {
                    title: 'Scalable Intelligence',
                    description: 'From one store to thousands, one workflow to dozens.'
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white">{item.title}</h4>
                      <p className="text-sm text-neutral-300">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4 bg-neutral-800/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4 font-heading">Our Journey</h2>
            <p className="text-lg text-neutral-300">From Halifax startup to Canada-wide restaurant AI leader</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`w-16 h-16 bg-${item.color}-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4`}>
                  <item.icon className="w-8 h-8" />
                </div>
                <div className="text-2xl font-bold text-white mb-2">{item.year}</div>
                <h3 className="text-xl font-bold text-white mb-3 font-heading">{item.title}</h3>
                <p className="text-neutral-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founding Story */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-orange-400 mb-4 font-heading">The Auralix Story</h2>
            <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
              Founded in Nova Scotia by Computer Science graduates, Auralix AI was born from a simple 
              but urgent observation: while large enterprises were rapidly adopting AI, local restaurants 
              were losing thousands in missed calls and orders.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-neutral-800/80 backdrop-blur-sm rounded-xl p-8 border border-neutral-700"
            >
              <h3 className="text-2xl font-bold text-primary-400 mb-4 font-heading">The Problem We Solved</h3>
              <p className="text-neutral-300 mb-4">
                We noticed that Canadian restaurants were struggling with missed calls during peak hours, 
                manual order taking, inefficient scheduling, and lost revenue from unanswered phones.
              </p>
              <p className="text-neutral-300 mb-4">
                But existing AI solutions were either too expensive, too complex, or too generic 
                for restaurant needs. They needed restaurant-specific AI that was accessible, 
                practical, and designed for their unique operational requirements.
              </p>
              <div className="bg-primary-500/20 rounded-lg p-4 border border-primary-500/30">
                <p className="text-sm text-primary-300 font-semibold">
                  "We believe every restaurant deserves to never miss a call or order again."
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-neutral-800/80 backdrop-blur-sm rounded-xl p-8 border border-neutral-700"
            >
              <h3 className="text-2xl font-bold text-blue-400 mb-4 font-heading">Our Approach</h3>
              <p className="text-neutral-300 mb-4">
                Instead of building one-size-fits-all solutions, we created a restaurant-focused AI platform 
                that could be customized for different restaurant types and sizes.
              </p>
              <p className="text-neutral-300 mb-4">
                We started with local restaurants in Nova Scotia—cafés, pizzerias, bars—and 
                worked closely with them to understand their specific pain points and operational needs.
              </p>
              <div className="space-y-3">
                {[
                  'Restaurant-specific AI models',
                  'Scalable architecture',
                  'Practical implementation'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full" />
                    <span className="text-neutral-300">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">Meet Our Founders</h2>
            <p className="text-xl text-neutral-300 max-w-4xl mx-auto">
              Two Computer Science graduates with a shared vision of democratizing AI for Canadian restaurants.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Founder 1 - Maruf */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 rounded-2xl p-8 border border-neutral-700 hover:border-primary-500/50 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              <div className="flex flex-col items-center text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-blue-500 rounded-full mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">MU</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 font-heading">Md Maruf Uzzaman</h3>
                <p className="text-primary-400 font-semibold text-lg mb-3">Co-Founder & CEO</p>
                <p className="text-neutral-400 text-sm font-medium">Computer Science Graduate | AI Architect | Product Visionary</p>
              </div>
              
              <p className="text-neutral-300 mb-6 leading-relaxed">
                Maruf combines deep expertise in machine learning, software architecture, and automation strategy to lead Auralix AI's vision and execution. As CEO, he drives end-to-end product innovation — from research to deployment — ensuring every AI system is practical, measurable, and scalable for real-world restaurant operations.
              </p>
              
              <p className="text-neutral-300 mb-8 leading-relaxed">
                He also oversees partnerships, GTM strategy, and long-term product direction, shaping Auralix into Canada's most trusted AI automation brand for restaurants.
              </p>
              
              <div className="space-y-3">
                <h4 className="text-white font-semibold mb-3">Core Expertise</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    'Machine Learning & Applied AI',
                    'Scalable System Architecture',
                    'Product Vision & Strategy',
                    'Growth & Go-to-Market Leadership'
                  ].map((expertise, index) => (
                    <div key={index} className="flex items-center gap-3 text-sm text-neutral-300">
                      <div className="w-2 h-2 bg-primary-400 rounded-full flex-shrink-0"></div>
                      <span>{expertise}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            {/* Founder 2 - Fardeen */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 rounded-2xl p-8 border border-neutral-700 hover:border-blue-500/50 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              <div className="flex flex-col items-center text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">FI</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 font-heading">Fardeenul Islam</h3>
                <p className="text-blue-400 font-semibold text-lg mb-3">Co-Founder & CTO</p>
                <p className="text-neutral-400 text-sm font-medium">AI Systems Engineer | Business Process Automation Expert</p>
              </div>
              
              <p className="text-neutral-300 mb-6 leading-relaxed">
                Fardeen leads Auralix's technical innovation and platform development. With a strong background in artificial intelligence and business systems, he architects the intelligent workflows and restaurant-specific AI models that power our automation engine.
              </p>
              
              <p className="text-neutral-300 mb-8 leading-relaxed">
                He ensures our solutions deliver measurable efficiency and operational intelligence for restaurants across Canada.
              </p>
              
              <div className="space-y-3">
                <h4 className="text-white font-semibold mb-3">Core Expertise</h4>
                <div className="space-y-3">
                  {[
                    'Artificial Intelligence',
                    'Workflow Automation & Business Systems',
                    'Technical Innovation & Delivery'
                  ].map((expertise, index) => (
                    <div key={index} className="flex items-center gap-3 text-sm text-neutral-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                      <span>{expertise}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Founders' Vision Quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-r from-primary-500/10 to-blue-500/10 rounded-2xl p-8 border border-primary-500/30">
              <blockquote className="text-xl md:text-2xl text-white italic mb-6 leading-relaxed">
                "We founded Auralix AI to give every restaurant — from cafés to national chains — the power of enterprise-grade automation. Our mission is simple: no restaurant should ever miss a call, an order, or an opportunity again."
              </blockquote>
              <cite className="text-primary-400 font-semibold text-lg">
                — Maruf & Fardeen
              </cite>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founding Philosophy */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-green-400 mb-4 font-heading">Our Founding Philosophy</h2>
            <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
              We believe that AI should work for restaurants, not the other way around.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Practical First',
                description: 'We focus on real-world problems and measurable outcomes, not just cutting-edge technology.',
                color: 'green'
              },
              {
                icon: Users,
                title: 'Restaurant-Centric',
                description: 'Every solution is designed around the specific needs and workflows of Canadian restaurants.',
                color: 'blue'
              },
              {
                icon: TrendingUp,
                title: 'Scalable Growth',
                description: 'Our solutions grow with your restaurant, from small cafés to national chains.',
                color: 'purple'
              }
            ].map((philosophy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`w-16 h-16 bg-${philosophy.color}-500 text-white rounded-full mx-auto mb-4 flex items-center justify-center`}>
                  <philosophy.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-heading">{philosophy.title}</h3>
                <p className="text-neutral-300">{philosophy.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary-500/20 to-blue-500/20 rounded-2xl p-8 border border-primary-500/30"
          >
            <h2 className="text-3xl font-bold text-white mb-6 font-heading">Ready to Transform Your Restaurant?</h2>
            <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of restaurants that have already automated their operations with Auralix AI. 
              Start your journey toward intelligent automation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/trial"
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent-orange hover:bg-accent-orange/90 text-white font-bold rounded-lg transition-all duration-200 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/solutions"
                className="px-8 py-4 border-2 border-primary-400 text-primary-400 hover:bg-primary-400 hover:text-black font-bold rounded-lg transition-all duration-200"
              >
                Explore Solutions
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}