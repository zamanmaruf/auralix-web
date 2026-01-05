'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  CheckCircle, 
  ArrowRight, 
  Shield, 
  Clock, 
  Settings,
  MessageSquare,
  AlertCircle,
  FileText
} from 'lucide-react';
import { VoiceAgentWidget } from '@/components/VoiceAgentWidget';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function ProductOverview() {
  const features = [
    {
      title: '24/7 Call Answering',
      description: 'Never miss a call, even during peak hours, weekends, or after business hours.',
      outcome: 'Capture every lead and customer inquiry',
    },
    {
      title: 'Intelligent Appointment Booking',
      description: 'Schedule jobs directly into your calendar based on real availability.',
      outcome: 'Reduce no-shows and double-bookings',
    },
    {
      title: 'Emergency Routing',
      description: 'Urgent calls are immediately routed to your on-call team with full context.',
      outcome: 'Faster response times for critical issues',
    },
    {
      title: 'Lead Qualification',
      description: 'Ask qualifying questions and capture lead information automatically.',
      outcome: 'Higher quality leads for your sales team',
    },
    {
      title: 'Call Summaries & Transcripts',
      description: 'Receive detailed summaries and full transcripts of every call.',
      outcome: 'Complete visibility into customer interactions',
    },
    {
      title: 'Integration with Your Tools',
      description: 'Works with Google Calendar, Outlook, ServiceTitan, Jobber, and more.',
      outcome: 'Seamless workflow without switching tools',
    },
  ];

  const guardrails = [
    {
      title: 'Escalation Rules',
      description: 'Define when calls should be transferred to a human team member.',
    },
    {
      title: 'What It Won\'t Do',
      description: 'Set boundaries: the agent won\'t make promises, quote prices without approval, or handle sensitive information inappropriately.',
    },
    {
      title: 'Business Hours',
      description: 'Configure operating hours and after-hours handling preferences.',
    },
    {
      title: 'Emergency Routing',
      description: 'Immediate escalation for urgent situations like no heat, burst pipes, or electrical emergencies.',
    },
  ];

  const teamReceives = [
    {
      icon: FileText,
      title: 'Call Summary',
      description: 'Concise summary with key information: caller name, reason for call, action taken, and next steps.',
    },
    {
      icon: MessageSquare,
      title: 'Full Transcript',
      description: 'Complete conversation transcript for review and quality assurance.',
    },
    {
      icon: CheckCircle,
      title: 'Booked Appointment',
      description: 'Confirmation of scheduled appointments with all details synced to your calendar.',
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
            Auralix Voice Agent
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-neutral-300 mb-8"
          >
            An AI voice agent that answers your business phone calls, books appointments, captures leads, and routes emergencies—using your rules and integrated with your existing tools.
          </motion.p>
        </div>
      </section>

      {/* Features mapped to outcomes */}
      <section className="py-16 sm:py-20 px-4 bg-section-main bg-neutral-900/60 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-heading">
              Features that drive results
            </h2>
            <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
              Every feature is designed to solve real business problems
            </p>
          </motion.div>

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
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription className="text-neutral-300">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-primary-400">
                      <ArrowRight className="w-4 h-4" />
                      <span className="font-semibold">{feature.outcome}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Embedded Voice Agent Demo */}
      <section className="py-16 sm:py-20 px-4 bg-section-main bg-neutral-800/60 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-heading">
              Try it yourself
            </h2>
            <p className="text-lg text-neutral-300">
              Experience the voice agent in action
            </p>
          </motion.div>

          <div className="max-w-md mx-auto">
            <VoiceAgentWidget mode="inline" defaultIndustry="home-services" />
          </div>
        </div>
      </section>

      {/* Controls & Guardrails */}
      <section className="py-16 sm:py-20 px-4 bg-section-main bg-neutral-900/60 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-heading">
              Controls & guardrails
            </h2>
            <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
              You maintain full control over how the agent handles calls
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {guardrails.map((guardrail, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-neutral-800 border-neutral-700">
                  <CardHeader>
                    <CardTitle className="text-xl">{guardrail.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-neutral-300">{guardrail.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Your Team Receives */}
      <section className="py-16 sm:py-20 px-4 bg-section-main bg-neutral-800/60 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-heading">
              What your team receives
            </h2>
            <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
              Complete visibility into every customer interaction
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamReceives.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-neutral-800 border-neutral-700 h-full">
                  <CardHeader>
                    <item.icon className="w-8 h-8 text-primary-400 mb-2" />
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-neutral-300">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Mock UI Components */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-neutral-800 border-neutral-700">
              <CardHeader>
                <CardTitle className="text-lg">Call Summary Example</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="bg-neutral-900 rounded p-4 space-y-2">
                  <p className="text-sm text-neutral-400">Caller: John Smith</p>
                  <p className="text-sm text-neutral-400">Reason: Emergency - No heat</p>
                  <p className="text-sm text-neutral-400">Action: Routed to on-call technician</p>
                  <p className="text-sm text-neutral-400">Status: Urgent - Response within 1 hour</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-neutral-800 border-neutral-700">
              <CardHeader>
                <CardTitle className="text-lg">Booked Appointment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-neutral-900 rounded p-4 space-y-2">
                  <p className="text-sm text-neutral-400">Service: HVAC Maintenance</p>
                  <p className="text-sm text-neutral-400">Date: March 15, 2025</p>
                  <p className="text-sm text-neutral-400">Time: 10:00 AM - 12:00 PM</p>
                  <p className="text-sm text-neutral-400">Customer: Jane Doe</p>
                  <p className="text-sm text-primary-400">✓ Synced to Google Calendar</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 px-4 bg-section-main bg-neutral-900/60 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 font-heading">
              Ready to get started?
            </h2>
            <p className="text-lg text-neutral-300 mb-8">
              See how Auralix Voice Agent can transform your customer communication
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary-500 hover:bg-primary-400">
                <Link href="/contact">Contact Sales</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/how-it-works">Learn how it works</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
