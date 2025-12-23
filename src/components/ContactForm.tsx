'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { CheckCircle, AlertCircle, Loader2, Save } from 'lucide-react';

const createContactSchema = (hideTrade: boolean = false) => z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number').regex(/^[\+]?[1-9][\d\s\-\(\)]{9,}$/, 'Please enter a valid phone number'),
  businessName: z.string().min(2, 'Business name is required'),
  cityProvince: z.string().min(1, 'City/Province is required'),
  trade: hideTrade ? z.string().optional() : z.string().min(1, 'Trade is required'),
  bookingSoftware: z.string().optional(),
  callVolume: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters').optional(),
});

type ContactFormData = z.infer<ReturnType<typeof createContactSchema>>;

interface ContactFormProps {
  onSubmit?: (data: ContactFormData) => Promise<void>;
  showCalendly?: boolean;
  hideTrade?: boolean;
}

const FORM_STORAGE_KEY = 'auralix_contact_form_data';

export default function ContactForm({ onSubmit, showCalendly = true, hideTrade = false }: ContactFormProps) {
  const contactSchema = createContactSchema(hideTrade);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');
  const [autoSaved, setAutoSaved] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    reset,
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: (() => {
      if (typeof window !== 'undefined') {
        const saved = localStorage.getItem(FORM_STORAGE_KEY);
        if (saved) {
          try {
            return JSON.parse(saved);
          } catch {
            return undefined;
          }
        }
      }
      return undefined;
    })(),
  });

  // Auto-save form data to localStorage
  const formData = watch();
  useEffect(() => {
    if (isDirty && typeof window !== 'undefined') {
      const timeoutId = setTimeout(() => {
        localStorage.setItem(FORM_STORAGE_KEY, JSON.stringify(formData));
        setAutoSaved(true);
        setTimeout(() => setAutoSaved(false), 2000);
      }, 1000); // Debounce auto-save

      return () => clearTimeout(timeoutId);
    }
  }, [formData, isDirty]);

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
          
          // Clear saved form data on successful submission
          if (typeof window !== 'undefined') {
            localStorage.removeItem(FORM_STORAGE_KEY);
          }
          
          // Redirect to Calendly if enabled
          if (showCalendly) {
            setTimeout(() => {
              window.open('https://calendly.com/auralixai/strategy-call', '_blank');
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
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6" aria-label="Contact form">
      {/* Auto-save indicator */}
      {autoSaved && (
        <div className="flex items-center gap-2 text-sm text-primary-400 bg-primary-500/10 px-4 py-2 rounded-lg border border-primary-500/20">
          <Save className="w-4 h-4" aria-hidden="true" />
          <span>Form auto-saved</span>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-white font-semibold mb-2">Name *</label>
          <input
            id="name"
            {...register('name')}
            className="w-full px-4 py-3 bg-neutral-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 border border-neutral-600"
            placeholder="Your full name"
            aria-invalid={errors.name ? 'true' : 'false'}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <p id="name-error" className="text-error-500 text-sm mt-1 flex items-center gap-1" role="alert">
              <AlertCircle className="w-4 h-4" aria-hidden="true" />
              {errors.name.message}
            </p>
          )}
        </div>
        
        <div>
          <label htmlFor="email" className="block text-white font-semibold mb-2">Email *</label>
          <input
            id="email"
            {...register('email')}
            type="email"
            className="w-full px-4 py-3 bg-neutral-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 border border-neutral-600"
            placeholder="your@email.com"
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p id="email-error" className="text-error-500 text-sm mt-1 flex items-center gap-1" role="alert">
              <AlertCircle className="w-4 h-4" aria-hidden="true" />
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-white font-semibold mb-2">Phone *</label>
          <input
            id="phone"
            {...register('phone')}
            type="tel"
            className="w-full px-4 py-3 bg-neutral-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 border border-neutral-600"
            placeholder="(555) 123-4567"
            aria-invalid={errors.phone ? 'true' : 'false'}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
          />
          {errors.phone && (
            <p id="phone-error" className="text-error-500 text-sm mt-1 flex items-center gap-1" role="alert">
              <AlertCircle className="w-4 h-4" aria-hidden="true" />
              {errors.phone.message}
            </p>
          )}
        </div>
        
        <div>
          <label htmlFor="businessName" className="block text-white font-semibold mb-2">Business Name *</label>
          <input
            id="businessName"
            {...register('businessName')}
            className="w-full px-4 py-3 bg-neutral-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 border border-neutral-600"
            placeholder="Your business name"
            aria-invalid={errors.businessName ? 'true' : 'false'}
            aria-describedby={errors.businessName ? 'businessName-error' : undefined}
          />
          {errors.businessName && (
            <p id="businessName-error" className="text-error-500 text-sm mt-1 flex items-center gap-1" role="alert">
              <AlertCircle className="w-4 h-4" aria-hidden="true" />
              {errors.businessName.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="cityProvince" className="block text-white font-semibold mb-2">City/Province *</label>
        <input
          id="cityProvince"
          {...register('cityProvince')}
          className="w-full px-4 py-3 bg-neutral-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 border border-neutral-600"
          placeholder="Halifax, NS"
          aria-invalid={errors.cityProvince ? 'true' : 'false'}
          aria-describedby={errors.cityProvince ? 'cityProvince-error' : undefined}
        />
        {errors.cityProvince && (
          <p id="cityProvince-error" className="text-error-500 text-sm mt-1 flex items-center gap-1" role="alert">
            <AlertCircle className="w-4 h-4" aria-hidden="true" />
            {errors.cityProvince.message}
          </p>
        )}
      </div>

      {!hideTrade && (
        <div>
          <label htmlFor="trade" className="block text-white font-semibold mb-2">Trade *</label>
          <select
            id="trade"
            {...register('trade')}
            className="w-full px-4 py-3 bg-neutral-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 border border-neutral-600"
            aria-invalid={errors.trade ? 'true' : 'false'}
            aria-describedby={errors.trade ? 'trade-error' : undefined}
          >
            <option value="">Select Trade</option>
            <option value="hvac">HVAC</option>
            <option value="plumbing">Plumbing</option>
            <option value="electrical">Electrical</option>
            <option value="other">Other</option>
          </select>
          {errors.trade && (
            <p id="trade-error" className="text-error-500 text-sm mt-1 flex items-center gap-1" role="alert">
              <AlertCircle className="w-4 h-4" aria-hidden="true" />
              {errors.trade.message}
            </p>
          )}
        </div>
      )}

      {!hideTrade ? (
        <div>
          <label htmlFor="bookingSoftware" className="block text-white font-semibold mb-2">What booking software do you use? (Optional)</label>
          <select
            id="bookingSoftware"
            {...register('bookingSoftware')}
            className="w-full px-4 py-3 bg-neutral-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 border border-neutral-600"
          >
            <option value="">Select Software</option>
            <option value="servicetitan">ServiceTitan</option>
            <option value="jobber">Jobber</option>
            <option value="housecallpro">Housecall Pro</option>
            <option value="other">Other</option>
            <option value="none">None</option>
          </select>
        </div>
      ) : (
        <div>
          <label htmlFor="bookingSoftware" className="block text-white font-semibold mb-2">What contact center platform do you use? (Optional)</label>
          <select
            id="bookingSoftware"
            {...register('bookingSoftware')}
            className="w-full px-4 py-3 bg-neutral-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 border border-neutral-600"
          >
            <option value="">Select Platform</option>
            <option value="genesys">Genesys</option>
            <option value="five9">Five9</option>
            <option value="nice">NICE</option>
            <option value="avaya">Avaya</option>
            <option value="cisco">Cisco</option>
            <option value="twilio">Twilio</option>
            <option value="other">Other</option>
            <option value="none">None / Building</option>
          </select>
        </div>
      )}

      <div>
        <label htmlFor="callVolume" className="block text-white font-semibold mb-2">Approximate monthly call volume (Optional)</label>
        <select
          id="callVolume"
          {...register('callVolume')}
          className="w-full px-4 py-3 bg-neutral-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 border border-neutral-600"
        >
          <option value="">Select Volume</option>
          <option value="0-300">0-300 calls/month</option>
          <option value="300-1000">300-1,000 calls/month</option>
          <option value="1000+">1,000+ calls/month</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-white font-semibold mb-2">How can we help? (Optional)</label>
        <textarea
          id="message"
          {...register('message')}
          rows={4}
          className="w-full px-4 py-3 bg-neutral-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 border border-neutral-600"
          placeholder="Tell us about your business needs..."
          aria-invalid={errors.message ? 'true' : 'false'}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && (
          <p id="message-error" className="text-error-500 text-sm mt-1 flex items-center gap-1" role="alert">
            <AlertCircle className="w-4 h-4" aria-hidden="true" />
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
        className="w-full px-8 py-4 bg-primary-500 hover:bg-primary-400 disabled:bg-neutral-600 disabled:cursor-not-allowed text-white font-bold rounded-lg transition-all duration-200 shadow-lg flex items-center justify-center gap-2 focus:outline-none focus:ring-4 focus:ring-primary-400/50"
        aria-label={isSubmitting ? 'Submitting form' : 'Submit contact form'}
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
