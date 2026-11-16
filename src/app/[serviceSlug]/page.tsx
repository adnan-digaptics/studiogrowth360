import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetailPage, IndustryDetailPage } from "@/components/agency/AgencyPages";
import { mainServices, industrySolutions } from "@/data/agency";

type Props = { params: Promise<{ serviceSlug: string }> };

export function generateStaticParams() {
  const serviceParams = mainServices.map(({ slug }) => ({ serviceSlug: slug }));
  const industryParams = industrySolutions.map(({ slug }) => ({ serviceSlug: slug }));
  return [...serviceParams, ...industryParams];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { serviceSlug } = await params;
  const service = mainServices.find(({ slug }) => slug === serviceSlug);
  if (service) {
    return {
      title: `${service.title} | StudioGrowth360`,
      description: service.shortDesc,
    };
  }

  const industry = industrySolutions.find(({ slug }) => slug === serviceSlug);
  if (industry) {
    return {
      title: `${industry.name} Automation & CRM Solutions | StudioGrowth360`,
      description: industry.heroSubheadline,
    };
  }

  return {};
}

export default async function DynamicSlugPage({ params }: Props) {
  const { serviceSlug } = await params;

  if (mainServices.some(({ slug }) => slug === serviceSlug)) {
    return <ServiceDetailPage slug={serviceSlug} />;
  }

  if (industrySolutions.some(({ slug }) => slug === serviceSlug)) {
    return <IndustryDetailPage slug={serviceSlug} />;
  }

  notFound();
}
