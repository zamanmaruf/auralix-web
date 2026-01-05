import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { IndustryPageContent } from './IndustryPageContent';
import { industries, getIndustryBySlug } from '@/content/industries';

export async function generateStaticParams() {
  return industries.map((industry) => ({
    slug: industry.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const industry = getIndustryBySlug(params.slug);
  
  if (!industry) {
    return {
      title: 'Industry Not Found | Auralix AI',
    };
  }

  return {
    title: `${industry.name} | Auralix AI`,
    description: industry.description,
  };
}

export default function IndustryPage({ params }: { params: { slug: string } }) {
  const industry = getIndustryBySlug(params.slug);

  if (!industry) {
    notFound();
  }

  return <IndustryPageContent industry={industry} />;
}
