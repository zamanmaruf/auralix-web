import type { Metadata } from 'next';
import { ProductOverview } from './ProductOverview';

export const metadata: Metadata = {
  title: 'Product Overview | Auralix AI',
  description: 'Learn how Auralix Voice Agent answers calls, books appointments, and routes emergencies using your business rules.',
  openGraph: {
    title: 'Product Overview | Auralix AI',
    description: 'Learn how Auralix Voice Agent answers calls, books appointments, and routes emergencies using your business rules.',
    url: 'https://auralix.ai/product',
  },
};

export default function ProductPage() {
  return <ProductOverview />;
}
