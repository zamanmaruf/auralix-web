import type { Metadata } from 'next'
// next-seo configuration handled via metadata export
import './globals.css'
import ClientLayout from './ClientLayout'

export const dynamic = 'force-dynamic'
export const revalidate = 0
export const fetchCache = 'force-no-store'

export const metadata: Metadata = {
  title: 'Auralix AI — Enterprise Voice & Automation Platform',
  description: 'Never miss a call again. Enterprise-grade voice AI that handles phone calls, appointments, and customer service 24/7 for service businesses.',
  keywords: 'AI receptionist, voice AI, business automation, missed calls, Halifax AI, Canadian businesses, voice agent, appointment automation, customer service AI, enterprise voice AI, dental AI, hotel automation, service business AI',
  openGraph: {
    title: 'Auralix AI — Enterprise Voice & Automation Platform',
    description: 'Never miss a call again. Enterprise-grade voice AI that handles phone calls, appointments, and customer service 24/7 for service businesses.',
    url: 'https://auralix.ai',
    siteName: 'Auralix AI',
    images: [
      {
        url: '/hero-ai-bg.jpg',
        width: 1200,
        height: 630,
        alt: 'Auralix AI - Restaurant AI Automation',
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Auralix AI — Enterprise Voice & Automation Platform',
    description: 'Never miss a call again. Enterprise-grade voice AI that handles phone calls, appointments, and customer service 24/7 for service businesses.',
    images: ['/hero-ai-bg.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Structured Data (JSON-LD) for Organization
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Auralix AI',
    url: 'https://auralix.ai',
    logo: 'https://auralix.ai/auralix_logo.jpeg',
    description: 'Enterprise-grade voice AI that handles phone calls, appointments, and customer service 24/7 for restaurants, dental practices, and service businesses.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1800 Argyle Street',
      addressLocality: 'Halifax',
      addressRegion: 'Nova Scotia',
      addressCountry: 'CA',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-782-882-8635',
      contactType: 'Customer Service',
      email: 'info@auralixai.ca',
      areaServed: 'CA',
      availableLanguage: ['en', 'fr'],
    },
    sameAs: [
      'https://linkedin.com/company/auralix-ai',
    ],
  };

  // LocalBusiness Schema
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Auralix AI',
    image: 'https://auralix.ai/auralix_logo.jpeg',
    '@id': 'https://auralix.ai',
    url: 'https://auralix.ai',
    telephone: '+1-782-882-8635',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1800 Argyle Street',
      addressLocality: 'Halifax',
      addressRegion: 'Nova Scotia',
      postalCode: 'B3J',
      addressCountry: 'CA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 44.6488,
      longitude: -63.5752,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
      ],
      opens: '09:00',
      closes: '18:00',
      timeZone: 'America/Halifax',
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}