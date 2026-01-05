'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Phone, 
  Calendar, 
  MessageSquare, 
  AlertCircle, 
  BarChart3,
  Shield,
  Zap,
  Users,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function FeaturesContent() {
  const features = [
    {
      icon: Phone,
      title: '24/7 Call Answering',
      description: 'Never miss a call, even during peak hours, weekends, or holidays. Your voice agent is always available.',
      benefits: [
        'Answer every call instantly',
        'No busy signals or voicemail',
        'Professional greeting every time',
      ],
    },
    {
      icon: Calendar,
      title: 'Appointment Booking',
      description: 'Schedule jobs directly into your calendar based on real-time availability. Reduces double-bookings and no-shows.',
      benefits: [
        'Syncs with Google Calendar, Outlook',
        'Checks availability in real-time',
        'Sends confirmation to customers',
      ],
    },
    {
      icon: MessageSquare,
      title: 'Lead Capture & Qualification',
      description: 'Ask qualifying questions and capture lead information automatically. Route high-value leads to your sales team.',
      benefits: [
        'Capture name, phone, email',
        'Qualify leads with questions',
        'Route to appropriate team member',
      ],
    },
    {
      icon: AlertCircle,
      title: 'Emergency Routing',
      description: 'Urgent calls are immediately routed to your on-call team with full context and priority handling.',
      benefits: [
        'Instant escalation for emergencies',
        'Full context passed to team',
        'Priority notification system',
      ],
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reporting',
      description: 'Track call volume, conversion rates, and performance metrics. Get insights into customer interactions.',
      benefits: [
        'Call volume and duration stats',
        'Conversion rate tracking',
        'Custom reporting dashboards',
      ],
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with encryption, access controls, and compliance with privacy regulations.',
      benefits: [
        'Encryption in transit and at rest',
        'Access controls and audit logs',
        'PIPEDA and GDPR-informed practices',
      ],
    },
    {
      icon: Zap,
      title: 'Smart Integrations',
      description: 'Works with your existing tools: ServiceTitan, Jobber, Housecall Pro, Google Calendar, Outlook, and more.',
      benefits: [
        'Native calendar integrations',
        'CRM and job management tools',
        'Webhooks and Zapier support',
      ],
    },
    {
      icon: Users,
      title: 'Multi-Location Support',
      description: 'Manage multiple locations from one dashboard. Each location can have its own rules and configurations.',
      benefits: [
        'Centralized management',
        'Location-specific rules',
        'Unified reporting',
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-16 sm:py-24 px-4 bg-section-main bg-neutral-900/60 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 font-heading"
          >
            Powerful features for your business
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-neutral-300 mb-8"
          >
            Everything you need to automate customer communication and never miss a call
          </motion.p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 sm:py-20 px-4 bg-section-main bg-neutral-900/60 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-neutral-800 border-neutral-700 h-full">
                  <CardHeader>
                    <feature.icon className="w-8 h-8 text-primary-400 mb-2" />
                    <CardTitle className="text-2xl">{feature.title}</CardTitle>
                    <CardDescription className="text-neutral-300 text-base">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                          <span className="text-neutral-300">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 px-4 bg-section-main bg-neutral-800/60 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 font-heading">
              Ready to see it in action?
            </h2>
            <p className="text-lg text-neutral-300 mb-8">
              Experience the voice agent yourself or talk to our team
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary-500 hover:bg-primary-400">
                <Link href="/product">View Product Overview</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
