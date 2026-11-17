import type { Metadata } from "next";
import { AboutPage } from "@/components/agency/AgencyPages";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet StudioGrowth360, your studio growth, CRM, and automation partner for creative businesses across the United States.",
};

export default function AboutRoute() {
  return <AboutPage />;
}
