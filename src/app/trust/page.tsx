import type { Metadata } from 'next';
import { TrustOverview } from './TrustOverview';

export const metadata: Metadata = {
  title: 'Trust Center | Auralix AI',
  description: 'Learn about Auralix AI\'s commitment to security, privacy, and reliability. Enterprise-grade protection for your business data.',
  openGraph: {
    title: 'Trust Center | Auralix AI',
    description: 'Learn about Auralix AI\'s commitment to security, privacy, and reliability. Enterprise-grade protection for your business data.',
    url: 'https://auralix.ai/trust',
  },
};

export default function TrustPage() {
  return <TrustOverview />;
}
