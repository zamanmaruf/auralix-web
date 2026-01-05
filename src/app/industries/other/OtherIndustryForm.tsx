'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function OtherIndustryForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    industryName: '',
    callGoals: '',
    bookingWorkflow: '',
    toolsUsed: '',
    phoneVolume: '',
    additionalInfo: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          subject: 'Custom Industry Configuration Request',
          message: `Industry: ${formData.industryName}\n\nCall Goals: ${formData.callGoals}\n\nBooking Workflow: ${formData.bookingWorkflow}\n\nTools Used: ${formData.toolsUsed}\n\nMonthly Call Volume: ${formData.phoneVolume}\n\nAdditional Info: ${formData.additionalInfo}`,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setTimeout(() => {
          router.push('/contact?success=true');
        }, 2000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-16 sm:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 font-heading"
          >
            We&apos;ll configure it
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-neutral-300 mb-8"
          >
            Don&apos;t see your industry listed? We can configure Auralix Voice Agent for your specific business needs.
          </motion.p>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 sm:py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="bg-neutral-800 border-neutral-700">
            <CardHeader>
              <CardTitle className="text-2xl">Custom Industry Configuration Request</CardTitle>
              <CardDescription className="text-neutral-300">
                Tell us about your industry and requirements, and we&apos;ll configure Auralix Voice Agent for you.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="industryName" className="block text-sm font-medium text-white mb-2">
                    Industry Name *
                  </label>
                  <input
                    type="text"
                    id="industryName"
                    name="industryName"
                    required
                    value={formData.industryName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="e.g., Auto Repair, Legal Services, etc."
                  />
                </div>

                <div>
                  <label htmlFor="callGoals" className="block text-sm font-medium text-white mb-2">
                    What are your main call goals? *
                  </label>
                  <textarea
                    id="callGoals"
                    name="callGoals"
                    required
                    rows={3}
                    value={formData.callGoals}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="e.g., Schedule appointments, answer service questions, capture leads..."
                  />
                </div>

                <div>
                  <label htmlFor="bookingWorkflow" className="block text-sm font-medium text-white mb-2">
                    Describe your booking workflow
                  </label>
                  <textarea
                    id="bookingWorkflow"
                    name="bookingWorkflow"
                    rows={3}
                    value={formData.bookingWorkflow}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="How do you currently handle appointments or bookings?"
                  />
                </div>

                <div>
                  <label htmlFor="toolsUsed" className="block text-sm font-medium text-white mb-2">
                    What tools do you currently use?
                  </label>
                  <input
                    type="text"
                    id="toolsUsed"
                    name="toolsUsed"
                    value={formData.toolsUsed}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="e.g., Google Calendar, ServiceTitan, custom CRM..."
                  />
                </div>

                <div>
                  <label htmlFor="phoneVolume" className="block text-sm font-medium text-white mb-2">
                    Monthly call volume
                  </label>
                  <input
                    type="text"
                    id="phoneVolume"
                    name="phoneVolume"
                    value={formData.phoneVolume}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="e.g., 200-500 calls/month"
                  />
                </div>

                <div>
                  <label htmlFor="additionalInfo" className="block text-sm font-medium text-white mb-2">
                    Additional information
                  </label>
                  <textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    rows={4}
                    value={formData.additionalInfo}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Anything else we should know about your industry or requirements?"
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 text-green-400">
                    Thank you! We&apos;ll be in touch soon to discuss your custom configuration.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 text-red-400">
                    Something went wrong. Please try again or contact us directly.
                  </div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary-500 hover:bg-primary-400"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Request'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
