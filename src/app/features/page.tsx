import type { Metadata } from 'next';
import { FeaturesContent } from './FeaturesContent';

export const metadata: Metadata = {
  title: 'Features | Auralix AI',
  description: 'Discover all the features of Auralix Voice Agent: 24/7 call answering, appointment booking, lead capture, and more.',
  openGraph: {
    title: 'Features | Auralix AI',
    description: 'Discover all the features of Auralix Voice Agent: 24/7 call answering, appointment booking, lead capture, and more.',
    url: 'https://auralix.ai/features',
  },
};

export default function FeaturesPage() {
  return <FeaturesContent />;
}
