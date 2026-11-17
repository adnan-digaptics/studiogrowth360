import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetailPage } from "@/components/agency/AgencyPages";
import { mainServices } from "@/data/agency";

type Props = { params: Promise<{ serviceSlug: string }> };

export function generateStaticParams() {
  return mainServices.map(({ slug }) => ({ serviceSlug: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { serviceSlug } = await params;
  const service = mainServices.find(({ slug }) => slug === serviceSlug);
  if (!service) return {};
  return {
    title: `${service.title} | StudioGrowth360`,
    description: service.shortDesc,
  };
}

export default async function ServiceSubPage({ params }: Props) {
  const { serviceSlug } = await params;
  if (!mainServices.some(({ slug }) => slug === serviceSlug)) notFound();
  return <ServiceDetailPage slug={serviceSlug} />;
}
