'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Shield, Lock, CheckCircle, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function TrustOverview() {
  const pillars = [
    {
      icon: Shield,
      title: 'Security',
      description: 'Enterprise-grade security controls, encryption, and infrastructure protection to keep your data safe.',
      link: '/trust/security',
    },
    {
      icon: Lock,
      title: 'Privacy',
      description: 'Transparent data handling, clear privacy policies, and compliance with Canadian privacy regulations.',
      link: '/trust/privacy',
    },
    {
      icon: CheckCircle,
      title: 'Reliability',
      description: '99.9% uptime, redundant systems, and comprehensive monitoring to ensure your service never goes down.',
      link: '/trust/security',
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
            Trust Center
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-neutral-300 mb-8"
          >
            Security, privacy, and reliability are at the core of everything we do. Learn how we protect your business data.
          </motion.p>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-16 sm:py-20 px-4 bg-section-main bg-neutral-900/60 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-neutral-800 border-neutral-700 h-full hover:border-primary-500/50 transition-colors">
                  <CardHeader>
                    <pillar.icon className="w-12 h-12 text-primary-400 mb-4" />
                    <CardTitle className="text-2xl">{pillar.title}</CardTitle>
                    <CardDescription className="text-neutral-300 text-base">
                      {pillar.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="outline" className="w-full">
                      <Link href={pillar.link}>
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

      {/* Quick Links */}
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
              Documentation
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button asChild variant="outline" size="lg" className="justify-start">
              <Link href="/trust/security">
                <Shield className="w-5 h-5 mr-2" />
                Security Practices
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="justify-start">
              <Link href="/trust/privacy">
                <Lock className="w-5 h-5 mr-2" />
                Privacy Policy
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="justify-start">
              <Link href="/trust/terms">
                <CheckCircle className="w-5 h-5 mr-2" />
                Terms of Service
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="justify-start">
              <Link href="/contact">
                Contact Security Team
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
