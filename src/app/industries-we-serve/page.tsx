import type { Metadata } from "next";
import { IndustriesIndexPage } from "@/components/agency/AgencyPages";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Studio growth, CRM, and automation solutions for photography, podcast, yoga, and arts and crafts studios across the United States.",
};

export default function IndustriesPage() {
  return <IndustriesIndexPage />;
}
