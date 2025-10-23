'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  businessName: z.string().min(2, 'Business name is required'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface ContactFormProps {
  onSubmit?: (data: ContactFormData) => Promise<void>;
  showCalendly?: boolean;
}

export default function ContactForm({ onSubmit, showCalendly = true }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const handleFormSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitMessage('');

    try {
      if (onSubmit) {
        await onSubmit(data);
      } else {
        // Default API call
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        const result = await response.json();

        if (response.ok) {
          setSubmitStatus('success');
          setSubmitMessage(result.message || 'Message sent successfully!');
          reset();
          
          // Redirect to Calendly if enabled
          if (showCalendly) {
            setTimeout(() => {
              window.open('https://calendly.com/auralix-ai/strategy-call', '_blank');
            }, 2000);
          }
        } else {
          throw new Error(result.error || 'Something went wrong');
        }
      }
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-white mb-2">Message Sent Successfully!</h3>
        <p className="text-neutral-300 mb-4">{submitMessage}</p>
        {showCalendly && (
          <p className="text-sm text-neutral-400 mb-6">
            Redirecting to schedule your strategy call...
          </p>
        )}
        <button
          onClick={() => {
            setSubmitStatus('idle');
            setSubmitMessage('');
          }}
          className="px-6 py-3 bg-primary-500 hover:bg-primary-400 text-white font-bold rounded-lg transition-all duration-200"
        >
          Send Another Message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-white font-semibold mb-2">Name *</label>
          <input
            {...register('name')}
            className="w-full px-4 py-3 bg-neutral-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 border border-neutral-600"
            placeholder="Your full name"
          />
          {errors.name && (
            <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              {errors.name.message}
            </p>
          )}
        </div>
        
        <div>
          <label className="block text-white font-semibold mb-2">Email *</label>
          <input
            {...register('email')}
            type="email"
            className="w-full px-4 py-3 bg-neutral-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 border border-neutral-600"
            placeholder="your@email.com"
          />
          {errors.email && (
            <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-white font-semibold mb-2">Phone *</label>
          <input
            {...register('phone')}
            type="tel"
            className="w-full px-4 py-3 bg-neutral-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 border border-neutral-600"
            placeholder="(555) 123-4567"
          />
          {errors.phone && (
            <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              {errors.phone.message}
            </p>
          )}
        </div>
        
        <div>
          <label className="block text-white font-semibold mb-2">Restaurant Name *</label>
          <input
            {...register('businessName')}
            className="w-full px-4 py-3 bg-neutral-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 border border-neutral-600"
            placeholder="Your restaurant name"
          />
          {errors.businessName && (
            <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              {errors.businessName.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-white font-semibold mb-2">Service Interest *</label>
        <select
          {...register('service')}
          className="w-full px-4 py-3 bg-neutral-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 border border-neutral-600"
        >
          <option value="">Select Service</option>
          <option value="ai-receptionist">AI Receptionist</option>
          <option value="chatbot">Chatbot for Website/Social</option>
          <option value="order-automation">Order & Review Automation</option>
          <option value="restaurant-website">Restaurant Website with AI</option>
          <option value="consultation">Free Consultation</option>
        </select>
        {errors.service && (
          <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
            <AlertCircle className="w-4 h-4" />
            {errors.service.message}
          </p>
        )}
      </div>

      <div>
        <label className="block text-white font-semibold mb-2">Message *</label>
        <textarea
          {...register('message')}
          rows={4}
          className="w-full px-4 py-3 bg-neutral-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 border border-neutral-600"
          placeholder="Tell us about your restaurant needs..."
        />
        {errors.message && (
          <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
            <AlertCircle className="w-4 h-4" />
            {errors.message.message}
          </p>
        )}
      </div>

      {submitMessage && (
        <div className={`p-4 rounded-lg flex items-center gap-2 ${
          submitStatus === 'error' 
            ? 'bg-red-500/20 text-red-400 border border-red-500/30' 
            : 'bg-green-500/20 text-green-400 border border-green-500/30'
        }`}>
          {submitStatus === 'error' ? (
            <AlertCircle className="w-5 h-5" />
          ) : (
            <CheckCircle className="w-5 h-5" />
          )}
          {submitMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-8 py-4 bg-primary-500 hover:bg-primary-400 disabled:bg-neutral-600 disabled:cursor-not-allowed text-white font-bold rounded-lg transition-all duration-200 shadow-lg flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </button>

      <p className="text-sm text-neutral-400 text-center">
        By submitting this form, you agree to our Terms of Service and Privacy Policy.
        {showCalendly && ' We\'ll redirect you to schedule a strategy call after submission.'}
      </p>
    </form>
  );
}
