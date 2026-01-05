import type { Metadata } from 'next';
import { ContactPageContent } from './ContactPageContent';

export const metadata: Metadata = {
  title: 'Contact Us | Auralix AI',
  description: 'Get in touch with Auralix AI. Fill out our contact form or try our voice agent demo. We\'ll respond within 24 hours.',
  openGraph: {
    title: 'Contact Us | Auralix AI',
    description: 'Get in touch with Auralix AI. Fill out our contact form or try our voice agent demo.',
  },
};

export default function ContactPage() {
  return <ContactPageContent />;
}
