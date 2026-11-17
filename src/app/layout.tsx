import "../styles/index.scss";
import "../styles/agency.scss";
import type { Metadata } from "next";
import { StudioPlatformProvider } from "@/context/StudioPlatformContext";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://studiogrowth360.com";
const siteBaseUrl = `${siteUrl.replace(/\/+$/, "")}/`;
const logoUrl = new URL("assets/img/studiogrowth360-logo.svg", siteBaseUrl).toString();

export const metadata: Metadata = {
  metadataBase: new URL(siteBaseUrl),
  title: {
    default: "StudioGrowth360 | Automate. Grow. Scale. — CRM & Business Automation for Studios",
    template: "%s | StudioGrowth360",
  },
  description:
    "StudioGrowth360 provides CRM solutions, business automation, AI automation, lead generation, and digital growth services to photography, podcast, yoga, and craft studios across the United States.",
  applicationName: "StudioGrowth360",
  icons: {
    icon: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/icon.svg`,
  },
  openGraph: {
    type: "website",
    siteName: "StudioGrowth360",
    title: "StudioGrowth360 | Automate. Grow. Scale.",
    description:
      "Your All-in-One Studio Growth, CRM & Automation Partner for Photography, Podcast, Yoga, and Craft Studios across the USA.",
    images: [
      {
        url: new URL("assets/img/podcast/wj/podcast_banner.webp", siteBaseUrl).toString(),
        alt: "StudioGrowth360 Studio Automation Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "StudioGrowth360 | Automate. Grow. Scale.",
    description:
      "Your All-in-One Studio Growth, CRM & Automation Partner for Photography, Podcast, Yoga, and Craft Studios across the USA.",
    images: [new URL("assets/img/podcast/wj/podcast_banner.webp", siteBaseUrl).toString()],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="sg_agency_body" suppressHydrationWarning>
        <StudioPlatformProvider>{children}</StudioPlatformProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "StudioGrowth360",
              url: siteUrl,
              logo: logoUrl,
              description:
                "Digital growth and automation agency providing GoHighLevel CRM, n8n automation, AI receptionists, and lead generation to US studios.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "1S280 Summit Ave Unit E2 Suite 1B",
                addressLocality: "Oakbrook Terrace",
                addressRegion: "IL",
                postalCode: "60181",
                addressCountry: "US",
              },
              telephone: "+1-773-757-9417",
            }),
          }}
        />
      </body>
    </html>
  );
}
