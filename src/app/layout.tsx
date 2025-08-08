import type { Metadata } from 'next'
import './globals.css'
import ClientLayout from './ClientLayout'

export const metadata: Metadata = {
  title: 'Auralix AI - Enterprise AI Automation Solutions',
  description: 'AI automation solutions for businesses in Nova Scotia. From chatbots to workflow automation, we help businesses scale with intelligent technology.',
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