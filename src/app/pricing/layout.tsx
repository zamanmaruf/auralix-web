import type { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Pricing - Auralix AI Voice Agent | Simple, Transparent Pricing',
  description: 'Simple pricing for enterprise-grade voice AI. Choose from After Hours ($399/mo), Overflow + After Hours ($799/mo), or Dispatcher ($1,299/mo) plans. White-glove setup included on annual plans. No contracts.',
  keywords: 'voice AI pricing, AI receptionist pricing, HVAC AI cost, plumbing AI pricing, electrical AI pricing, home services voice agent pricing, AI phone system pricing',
  openGraph: {
    title: 'Pricing - Auralix AI Voice Agent',
    description: 'Simple pricing for enterprise-grade voice AI. Professional setup included with all plans.',
    url: 'https://auralix.ai/pricing',
    siteName: 'Auralix AI',
    images: [
      {
        url: '/hero-ai-bg.jpg',
        width: 1200,
        height: 630,
        alt: 'Auralix AI Pricing',
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing - Auralix AI Voice Agent',
    description: 'Simple pricing for enterprise-grade voice AI. Professional setup included.',
    images: ['/hero-ai-bg.jpg'],
  },
  alternates: {
    canonical: 'https://auralix.ai/pricing',
  },
}

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Structured Data for Product/Service
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Auralix AI Voice Agent',
    description: 'Enterprise-grade voice AI that handles phone calls, appointments, and customer service 24/7',
    brand: {
      '@type': 'Brand',
      name: 'Auralix AI',
    },
    offers: [
      {
        '@type': 'Offer',
        name: 'After Hours Plan',
        price: '399',
        priceCurrency: 'CAD',
        priceValidUntil: '2025-12-31',
        availability: 'https://schema.org/InStock',
        url: 'https://auralix.ai/pricing',
      },
      {
        '@type': 'Offer',
        name: 'Overflow + After Hours Plan',
        price: '799',
        priceCurrency: 'CAD',
        priceValidUntil: '2025-12-31',
        availability: 'https://schema.org/InStock',
        url: 'https://auralix.ai/pricing',
      },
      {
        '@type': 'Offer',
        name: 'Dispatcher Plan',
        price: '1299',
        priceCurrency: 'CAD',
        priceValidUntil: '2025-12-31',
        availability: 'https://schema.org/InStock',
        url: 'https://auralix.ai/pricing',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '127',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      {children}
    </>
  );
}

