import type { Metadata } from 'next';
import { HomePageContent } from './HomePageContent';

export const metadata: Metadata = {
  title: 'Never Miss Another Service Call | Auralix AI',
  description: 'Auralix Voice Agent answers calls 24/7, books jobs, and routes urgent requests—using your rules. Never miss another service call.',
  openGraph: {
    title: 'Never Miss Another Service Call | Auralix AI',
    description: 'Auralix Voice Agent answers calls 24/7, books jobs, and routes urgent requests—using your rules.',
    url: 'https://auralix.ai',
  },
};

export default function HomePage() {
  return <HomePageContent />;
}
