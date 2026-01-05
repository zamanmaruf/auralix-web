'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { industries } from '@/content/industries';

export function IndustriesOverview() {
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
            Industries we serve
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-neutral-300 mb-8"
          >
            While we specialize in home services, Auralix Voice Agent works across multiple verticals. Each industry gets a customized configuration.
          </motion.p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 sm:py-20 px-4 bg-section-main bg-neutral-900/60 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-neutral-800 border-neutral-700 h-full hover:border-primary-500/50 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-2xl">{industry.name}</CardTitle>
                    <CardDescription className="text-neutral-300">
                      {industry.headline}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-neutral-300 mb-4">{industry.description}</p>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full"
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

      {/* Other Industry CTA */}
      <section className="py-16 sm:py-20 px-4 bg-section-main bg-neutral-800/60 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 font-heading">
              Don&apos;t see your industry?
            </h2>
            <p className="text-lg text-neutral-300 mb-8">
              We can configure Auralix Voice Agent for your specific industry and use case.
            </p>
            <Button asChild size="lg" className="bg-primary-500 hover:bg-primary-400">
              <Link href="/industries/other">
                Request Custom Configuration
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
