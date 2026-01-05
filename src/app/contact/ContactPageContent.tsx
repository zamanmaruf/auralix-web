'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { ContactFormNew } from '@/components/ContactFormNew';
import { VoiceAgentWidget } from '@/components/VoiceAgentWidget';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function ContactPageContent() {
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
            Get in touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-neutral-300 mb-8"
          >
            Ready to transform your customer communication? Fill out the form below or try our voice agent demo.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20 px-4 bg-section-main bg-neutral-900/60 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-neutral-800 border-neutral-700">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a message</CardTitle>
                  <CardDescription className="text-neutral-300">
                    Fill out the form and we&apos;ll contact you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ContactFormNew />
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info & Voice Agent */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-white mb-6 font-heading">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary-400" />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-lg">Email</div>
                      <a href="mailto:info@auralixai.ca" className="text-primary-400 hover:text-primary-300">
                        info@auralixai.ca
                      </a>
                      <div className="text-sm text-neutral-400">We respond within 24 hours</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-lg">Phone</div>
                      <a href="tel:+17828828635" className="text-primary-400 hover:text-primary-300">
                        +1 (782) 882-8635
                      </a>
                      <div className="text-sm text-neutral-400">Mon-Fri: 9:00 AM - 6:00 PM AST</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-lg">Address</div>
                      <div className="text-neutral-300">
                        1800 Argyle Street<br />
                        Halifax, Nova Scotia, Canada
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-6 font-heading">Prefer to try it now?</h2>
                <p className="text-neutral-300 mb-4">
                  Experience our voice agent in action. Click below to start a conversation.
                </p>
                <VoiceAgentWidget mode="inline" defaultIndustry="home-services" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
