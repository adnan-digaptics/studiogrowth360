import type { Metadata } from "next";
import { ServicesIndexPage } from "@/components/agency/AgencyPages";

export const metadata: Metadata = {
  title: "Studio Growth Services",
  description:
    "Explore lead generation, n8n automation, GoHighLevel, CRM, AI automation, website development, and digital marketing services for studios.",
};

export default function ServicesPage() {
  return <ServicesIndexPage />;
}
