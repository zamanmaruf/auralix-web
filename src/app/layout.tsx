import type { Metadata } from 'next'
// next-seo configuration handled via metadata export
import './globals.css'
import ClientLayout from './ClientLayout'

export const metadata: Metadata = {
  title: 'Auralix AI — AI Receptionist for Restaurants in Canada',
  description: 'Never miss a call again. Auralix AI answers restaurant phones 24/7, books tables, and captures orders — increasing bookings by 40%.',
  keywords: 'AI receptionist, restaurant automation, missed calls, Halifax AI, Canadian restaurants, voice AI, chatbot, order automation',
  openGraph: {
    title: 'Auralix AI — AI Receptionist for Restaurants in Canada',
    description: 'Never miss a call again. Auralix AI answers restaurant phones 24/7, books tables, and captures orders — increasing bookings by 40%.',
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
    title: 'Auralix AI — AI Receptionist for Restaurants in Canada',
    description: 'Never miss a call again. Auralix AI answers restaurant phones 24/7, books tables, and captures orders — increasing bookings by 40%.',
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
  return (
    <html lang="en">
      <body>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}