'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  TrendingUp, 
  Clock, 
  Shield,
  Zap,
  MessageSquare,
  Calendar,
  Users,
  BarChart3,
  Settings,
  AlertCircle,
  Star,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { useState } from 'react';
import { VoiceAgentWidget } from '@/components/VoiceAgentWidget';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import type { IndustryData } from '@/content/industries';

interface IndustryPageContentProps {
  industry: IndustryData;
}

export function IndustryPageContent({ industry }: IndustryPageContentProps) {
  const [expandedScenario, setExpandedScenario] = useState<number | null>(null);

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
            {industry.headline}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-neutral-300 mb-8"
          >
            {industry.description}
          </motion.p>
          {industry.pricingNote && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-primary-400 font-semibold"
            >
              {industry.pricingNote}
            </motion.p>
          )}
        </div>
      </section>

      {/* Metrics & ROI */}
      {industry.metrics && industry.metrics.length > 0 && (
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
                The impact for {industry.name.toLowerCase()}
              </h2>
              <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
                Real results from businesses using Auralix Voice Agent
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {industry.metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-neutral-800 border-neutral-700 text-center h-full">
                    <CardContent className="pt-6">
                      <div className="text-4xl sm:text-5xl font-bold text-primary-400 mb-2">
                        {metric.stat}
                      </div>
                      <div className="text-xl font-semibold text-white mb-2">
                        {metric.label}
                      </div>
                      <p className="text-sm text-neutral-300">
                        {metric.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Detailed Call Scenarios */}
      {industry.detailedScenarios && industry.detailedScenarios.length > 0 && (
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
                Real call examples
              </h2>
              <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
                See exactly how Auralix Voice Agent handles calls in {industry.name.toLowerCase()}
              </p>
            </motion.div>

            <div className="space-y-6">
              {industry.detailedScenarios.map((scenario, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-neutral-800 border-neutral-700">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-2xl mb-2">{scenario.title}</CardTitle>
                          <CardDescription className="text-neutral-300 text-base">
                            {scenario.description}
                          </CardDescription>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => setExpandedScenario(expandedScenario === index ? null : index)}
                          className="text-neutral-400 hover:text-white"
                        >
                          {expandedScenario === index ? (
                            <ChevronUp className="h-5 w-5" />
                          ) : (
                            <ChevronDown className="h-5 w-5" />
                          )}
                        </Button>
                      </div>
                    </CardHeader>
                    {expandedScenario === index && (
                      <CardContent className="space-y-4">
                        <div className="bg-neutral-900 rounded-lg p-4 space-y-3">
                          {scenario.conversation.map((line, lineIndex) => (
                            <div
                              key={lineIndex}
                              className={`flex gap-3 ${
                                line.speaker === 'AI' ? 'text-primary-300' : 'text-neutral-200'
                              }`}
                            >
                              <span className="font-semibold min-w-[60px]">
                                {line.speaker}:
                              </span>
                              <span>{line.text}</span>
                            </div>
                          ))}
                        </div>
                        <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                          <div className="flex items-start gap-3">
                            <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                            <div>
                              <div className="font-semibold text-green-400 mb-1">Outcome:</div>
                              <p className="text-neutral-200">{scenario.outcome}</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    )}
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Use Cases & Workflows */}
      {industry.useCases && industry.useCases.length > 0 && (
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
                How it works in practice
              </h2>
              <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
                Step-by-step workflows for common scenarios
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {industry.useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-neutral-800 border-neutral-700 h-full">
                    <CardHeader>
                      <CardTitle className="text-2xl mb-2">{useCase.title}</CardTitle>
                      <CardDescription className="text-neutral-300 text-base">
                        {useCase.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                          <Zap className="w-5 h-5 text-primary-400" />
                          Workflow
                        </h4>
                        <ol className="space-y-2">
                          {useCase.workflow.map((step, stepIndex) => (
                            <li key={stepIndex} className="flex gap-3 text-neutral-300">
                              <span className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                                {stepIndex + 1}
                              </span>
                              <span>{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                      <div className="pt-4 border-t border-neutral-700">
                        <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                          <TrendingUp className="w-5 h-5 text-green-400" />
                          Benefits
                        </h4>
                        <ul className="space-y-2">
                          {useCase.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-start gap-2 text-neutral-300">
                              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Industry-Specific Features */}
      {industry.features && industry.features.length > 0 && (
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
                Features built for {industry.name.toLowerCase()}
              </h2>
              <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
                Capabilities specifically designed for your industry
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industry.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-neutral-800 border-neutral-700 h-full hover:border-primary-500/50 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-neutral-300">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Integration Details */}
      {industry.integrations && industry.integrations.length > 0 && (
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
                Seamless integrations
              </h2>
              <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
                Connect with the tools you already use
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {industry.integrations.map((integration, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-neutral-800 border-neutral-700 h-full">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle className="text-xl">{integration.name}</CardTitle>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          integration.status === 'Available' 
                            ? 'bg-green-500/20 text-green-400' 
                            : 'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {integration.status}
                        </span>
                      </div>
                      <CardDescription className="text-neutral-300 text-base">
                        {integration.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {integration.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start gap-2 text-neutral-300">
                            <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                            <span>{benefit}</span>
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
      )}

      {/* Before/After Comparison */}
      {industry.beforeAfter && (
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
                Before vs. after Auralix
              </h2>
              <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
                See the transformation in your operations
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Before */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-red-500/10 border-red-500/30 h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl text-red-400 flex items-center gap-2">
                      <AlertCircle className="w-6 h-6" />
                      Before
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {industry.beforeAfter.before.map((item, index) => (
                        <li key={index} className="flex items-start gap-3 text-neutral-300">
                          <span className="text-red-400 font-bold">×</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              {/* After */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-green-500/10 border-green-500/30 h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl text-green-400 flex items-center gap-2">
                      <CheckCircle className="w-6 h-6" />
                      After
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {industry.beforeAfter.after.map((item, index) => (
                        <li key={index} className="flex items-start gap-3 text-neutral-300">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      {industry.testimonials && industry.testimonials.length > 0 && (
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
                What {industry.name.toLowerCase()} businesses are saying
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industry.testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
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
                        &quot;{testimonial.quote}&quot;
                      </blockquote>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-lg">
                            {testimonial.author.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <div className="text-white font-semibold text-lg">{testimonial.author}</div>
                          <div className="text-neutral-400 text-sm">{testimonial.role}</div>
                          {testimonial.company && (
                            <div className="text-neutral-500 text-sm">{testimonial.company}</div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why It Works */}
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
              Why it works here
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industry.whyItWorks.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-neutral-800 border-neutral-700">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary-400 flex-shrink-0 mt-0.5" />
                      <p className="text-neutral-300 text-lg">{reason}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Voice Agent Demo */}
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
              Try it for {industry.name.toLowerCase()}
            </h2>
            <p className="text-lg text-neutral-300">
              Experience the voice agent configured for your industry
            </p>
          </motion.div>

          <div className="max-w-md mx-auto">
            <VoiceAgentWidget mode="inline" defaultIndustry={industry.id} />
          </div>
        </div>
      </section>

      {/* Setup Requirements */}
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
              Simple setup process
            </h2>
            <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
              Here&apos;s what we need from you to get started
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industry.setupRequirements.map((requirement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-neutral-800 border-neutral-700">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                        {index + 1}
                      </div>
                      <p className="text-neutral-300 text-lg">{requirement}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
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
              Get configured for {industry.name.toLowerCase()}
            </h2>
            <p className="text-lg text-neutral-300 mb-8">
              Let&apos;s discuss how Auralix Voice Agent can work for your {industry.name.toLowerCase()} business
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
