import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IndustryDetailPage } from "@/components/agency/AgencyPages";
import { studioIndustries } from "@/data/agency";

type Props = { params: Promise<{ industrySlug: string }> };

export function generateStaticParams() {
  return studioIndustries.map(({ slug }) => ({ industrySlug: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { industrySlug } = await params;
  const industry = studioIndustries.find(({ slug }) => slug === industrySlug);
  if (!industry) return {};
  return {
    title: `${industry.title} Automation & CRM Solutions | StudioGrowth360`,
    description: `${industry.description} StudioGrowth360 creates practical CRM, booking, lead generation, and automation systems for ${industry.title.toLowerCase()}.`,
  };
}

export default async function IndustryAliasRoute({ params }: Props) {
  const { industrySlug } = await params;
  if (!studioIndustries.some(({ slug }) => slug === industrySlug)) notFound();
  return <IndustryDetailPage slug={industrySlug} />;
}
