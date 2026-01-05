import type { Metadata } from 'next';
import { OtherIndustryForm } from './OtherIndustryForm';

export const metadata: Metadata = {
  title: 'Other Industries | Auralix AI',
  description: 'Request custom configuration for your industry. We can configure Auralix Voice Agent for any business vertical.',
};

export default function OtherIndustryPage() {
  return <OtherIndustryForm />;
}
