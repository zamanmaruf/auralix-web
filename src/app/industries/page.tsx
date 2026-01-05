import type { Metadata } from 'next';
import { IndustriesOverview } from './IndustriesOverview';

export const metadata: Metadata = {
  title: 'Industries | Auralix AI',
  description: 'Auralix Voice Agent serves multiple industries: home services, clinics, restaurants, property management, and professional services.',
  openGraph: {
    title: 'Industries | Auralix AI',
    description: 'Auralix Voice Agent serves multiple industries: home services, clinics, restaurants, property management, and professional services.',
    url: 'https://auralix.ai/industries',
  },
};

export default function IndustriesPage() {
  return <IndustriesOverview />;
}
