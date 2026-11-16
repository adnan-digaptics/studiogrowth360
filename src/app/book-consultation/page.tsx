import type { Metadata } from "next";
import { ConsultationPage } from "@/components/agency/AgencyPages";

export const metadata: Metadata = {
  title: "Book a Free Consultation",
  description:
    "Book a free, no-pressure studio growth consultation with StudioGrowth360. Explore practical CRM, marketing, and automation opportunities.",
};

export default function ConsultationRoute() {
  return <ConsultationPage />;
}
