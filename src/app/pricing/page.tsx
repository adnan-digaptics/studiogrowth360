import type { Metadata } from "next";
import { PricingPage } from "@/components/agency/AgencyPages";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "StudioGrowth360 scopes lead generation, CRM, website, and automation projects around your studio's goals and requirements.",
};

export default function PricingRoute() {
  return <PricingPage />;
}
