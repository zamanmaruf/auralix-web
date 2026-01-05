'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Phone, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Shield, 
  Clock, 
  Calendar, 
  MessageSquare,
  Zap,
  Users,
  TrendingUp,
  AlertCircle,
  BookOpen,
  Settings,
  BarChart3
} from 'lucide-react';
import { VoiceAgentWidget } from '@/components/VoiceAgentWidget';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { homepageFaqs } from '@/content/faqs';
import { industries } from '@/content/industries';
import { pricingPlans } from '@/content/pricing';

export function HomePageContent() {
  const whatItHandles = [
    {
      icon: Phone,
      title: 'Answer every call instantly',
      description: '24/7 availability means no call goes unanswered, even during peak hours.',
    },
    {
      icon: Calendar,
      title: 'Book appointments + capture leads',
      description: 'Schedule jobs directly into your calendar and qualify leads automatically.',
    },
    {
      icon: AlertCircle,
      title: 'Route emergencies + send summaries',
      description: 'Urgent calls go straight to your team with full context and summaries.',
    },
    {
      icon: MessageSquare,
      title: 'Handle customer inquiries',
      description: 'Answer questions about services, pricing, and availability professionally.',
    },
    {
      icon: BookOpen,
      title: 'Provide information',
      description: 'Share business hours, service areas, and company information accurately.',
    },
    {
      icon: BarChart3,
      title: 'Track and analyze',
      description: 'Get detailed call summaries, transcripts, and analytics for every interaction.',
    },
  ];

  const howItWorksSteps = [
    {
      step: 1,
      title: 'Forward number',
      description: 'Forward your business phone number to Auralix. No hardware changes needed.',
    },
    {
      step: 2,
      title: 'Configure',
      description: 'We set up your service areas, availability, booking calendar, and escalation rules.',
    },
    {
      step: 3,
      title: 'Go live',
      description: 'Your voice agent starts answering calls within 24-48 hours of setup.',
    },
    {
      step: 4,
      title: 'Summaries',
      description: 'Receive call summaries and transcripts via email or your preferred integration.',
    },
    {
      step: 5,
      title: 'Analytics',
      description: 'Monitor performance, call volume, and conversion rates in your dashboard.',
    },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Above the fold - Hero with Voice Agent */}
      <section className="py-16 sm:py-24 px-4 bg-section-main bg-neutral-900/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Headline + Bullets + CTAs */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 font-heading">
                Never miss another service call.
              </h1>
              <p className="text-xl text-neutral-300 mb-8">
                Auralix Voice Agent answers calls 24/7, books jobs, and routes urgent requests—using your rules.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary-400 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-200 text-lg">Answer every call instantly</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary-400 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-200 text-lg">Book appointments + capture leads</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary-400 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-200 text-lg">Route emergencies + send summaries to your team</span>
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary-500 hover:bg-primary-400 text-white"
                >
                  <Link href="#voice-agent">
                    Talk to Auralix
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                >
                  <Link href="/pricing">
                    See Pricing
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* Right: Embedded Voice Agent Panel */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              id="voice-agent"
            >
              <VoiceAgentWidget mode="panel" defaultIndustry="home-services" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What it handles */}
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
              What it handles
            </h2>
            <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
              Your voice agent manages every aspect of customer communication
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatItHandles.map((item, index) => (
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
        </div>
      </section>

      {/* How it works - 5-step timeline */}
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
              How it works
            </h2>
            <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
              Get started in 24-48 hours with our streamlined setup process
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary-500/30 transform -translate-x-1/2" />
            
            <div className="space-y-12">
              {howItWorksSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex flex-col lg:flex-row items-center gap-6 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className="lg:w-1/2">
                    <Card className="bg-neutral-800 border-neutral-700">
                      <CardHeader>
                        <div className="flex items-center gap-4 mb-2">
                          <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                            {step.step}
                          </div>
                          <CardTitle className="text-2xl">{step.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-neutral-300">{step.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="lg:w-1/2" /> {/* Spacer */}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
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
              Industries we serve
            </h2>
            <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
              While we specialize in home services, we support businesses across multiple verticals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.slice(0, 6).map((industry, index) => (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-neutral-800 border-neutral-700 h-full hover:border-primary-500/50 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-xl">{industry.name}</CardTitle>
                    <CardDescription className="text-neutral-300">
                      {industry.headline}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      asChild
                      variant="ghost"
                      className="w-full justify-start"
                    >
                      <Link href={`/industries/${industry.slug}`}>
                        Learn more <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
              Early feedback
            </h2>
            <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
              We&apos;re onboarding our first cohort of customers. Here&apos;s what they&apos;re saying:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 - Michael Hauke */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-neutral-800 border-neutral-700 h-full">
                <CardHeader>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-neutral-300 text-lg italic">
                    &quot;We&apos;re capturing significantly more service calls. Auralix AI handles our phone calls so naturally that customers can&apos;t tell they&apos;re talking to AI. It&apos;s a no-brainer for multi-location HVAC businesses.&quot;
                  </blockquote>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">MH</span>
                    </div>
                    <div>
                      <div className="text-white font-semibold text-lg">Michael Hauke</div>
                      <div className="text-neutral-400 text-sm">Multi-Location Operator</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Testimonial 2 - Costa Alexandrou */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-neutral-800 border-neutral-700 h-full">
                <CardHeader>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-neutral-300 text-lg italic">
                    &quot;I can focus on service calls because Auralix AI manages the phones. The voice agent handles everything so naturally — customers can&apos;t tell they&apos;re talking to AI. Game changer for our operations.&quot;
                  </blockquote>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">CA</span>
                    </div>
                    <div>
                      <div className="text-white font-semibold text-lg">Costa Alexandrou</div>
                      <div className="text-neutral-400 text-sm">Business Owner</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Testimonial 3 - Dru */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="bg-neutral-800 border-neutral-700 h-full">
                <CardHeader>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-neutral-300 text-lg italic">
                    &quot;Without Auralix, we would be losing substantial revenue annually in missed service calls. The voice agent handles everything so naturally that customers can&apos;t tell they&apos;re talking to AI. It&apos;s essential for our business.&quot;
                  </blockquote>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">D</span>
                    </div>
                    <div>
                      <div className="text-white font-semibold text-lg">Dru</div>
                      <div className="text-neutral-400 text-sm">Business Owner</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="py-12 px-4 bg-section-main bg-neutral-900/60 backdrop-blur-sm border-y border-neutral-700/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-primary-400" />
              <span className="text-white font-semibold">Security-first</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-primary-400" />
              <span className="text-white font-semibold">Data handling transparency</span>
            </div>
            <Button asChild variant="outline">
              <Link href="/trust">
                Visit Trust Center <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing teaser */}
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
              Simple, transparent pricing
            </h2>
            <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
              Plans that scale with your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`bg-neutral-800 border-neutral-700 h-full ${plan.popular ? 'border-primary-500' : ''}`}>
                  <CardHeader>
                    {plan.popular && (
                      <div className="bg-primary-500 text-white text-xs font-semibold px-3 py-1 rounded-full w-fit mb-2">
                        Most Popular
                      </div>
                    )}
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription className="text-neutral-300">{plan.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-white">${plan.price}</span>
                      <span className="text-neutral-400">/month</span>
                    </div>
                    <p className="text-sm text-neutral-400 mt-2">{plan.callLimit} calls included</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {plan.features.slice(0, 4).map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                          <span className="text-neutral-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full" variant={plan.popular ? 'default' : 'outline'}>
                      <Link href="/pricing">View Plan</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/pricing">
                See full pricing <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20 px-4 bg-section-main bg-neutral-900/60 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-heading">
              Frequently asked questions
            </h2>
          </motion.div>

          <Accordion type="single" collapsible className="w-full">
            {homepageFaqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-white">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-neutral-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 px-4 bg-section-main bg-neutral-800/60 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 font-heading">
              Go live in 24–48 hours
            </h2>
            <p className="text-lg text-neutral-300 mb-8">
              Professional setup included. No contracts. Our team will contact you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary-500 hover:bg-primary-400">
                <Link href="/contact">
                  Book a demo
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/pricing">
                  See pricing
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
