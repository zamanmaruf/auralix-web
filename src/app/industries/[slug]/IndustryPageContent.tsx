'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { VoiceAgentWidget } from '@/components/VoiceAgentWidget';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { IndustryData } from '@/content/industries';

interface IndustryPageContentProps {
  industry: IndustryData;
}

export function IndustryPageContent({ industry }: IndustryPageContentProps) {
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
        </div>
      </section>

      {/* Common Call Scenarios */}
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
              Common call scenarios
            </h2>
            <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
              Here&apos;s how Auralix Voice Agent handles typical calls in {industry.name.toLowerCase()}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {industry.callScenarios.map((scenario, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-neutral-800 border-neutral-700 h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">{scenario}</CardTitle>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Works */}
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
              Setup requirements
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
