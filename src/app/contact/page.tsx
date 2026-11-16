import type { Metadata } from "next";
import { ContactPage } from "@/components/agency/AgencyPages";

export const metadata: Metadata = {
  title: "Contact StudioGrowth360",
  description:
    "Contact StudioGrowth360 to discuss lead generation, CRM, websites, and automation for your studio.",
};

export default function ContactRoute() {
  return <ContactPage />;
}
