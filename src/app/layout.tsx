import "../styles/index.scss";
import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://studiogrowth360.com";
const siteBaseUrl = `${siteUrl.replace(/\/+$/, "")}/`;
const heroImageUrl = new URL("assets/img/podcast/wj/podcast_banner.webp", siteBaseUrl).toString();

export const metadata: Metadata = {
  metadataBase: new URL(siteBaseUrl),
  title: {
    default: "Studio360 | Premier 4K Podcast Recording Studio & Media Network",
    template: "%s | Studio360",
  },
  description:
    "Studio360 is a premier luxury podcast recording studio and full-service media production network. 4K Sony cinema multi-cam recording, Shure SM7B broadcast audio, viral shorts retention engine, and global syndication.",
  applicationName: "Studio360",
  icons: {
    icon: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/icon.svg`,
  },
  openGraph: {
    type: "website",
    siteName: "Studio360",
    title: "Studio360 | Premier 4K Podcast Recording Studio & Media Network",
    description:
      "Premier luxury podcast recording studio and turnkey production network. 4K multi-cam capture, broadcast audio engineering, viral shorts, and global syndication.",
    images: [
      {
        url: heroImageUrl,
        alt: "Studio360 Premier 4K Podcast Recording Suite",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio360 | Premier 4K Podcast Recording Studio & Media Network",
    description:
      "Premier luxury podcast recording studio and turnkey production network. 4K multi-cam capture, broadcast audio engineering, viral shorts, and global syndication.",
    images: [heroImageUrl],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="dark" suppressHydrationWarning={true}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Studio360",
              url: siteUrl,
              logo: new URL("assets/img/studiogrowth360-logo.svg", siteBaseUrl).toString(),
              description:
                "Premier luxury 4K podcast recording studio and full-service media production network offering acoustically tuned suites, multi-cam live switching, viral shorts clipping, and global RSS syndication.",
              telephone: "+1-773-757-9417",
              email: "grow@360growthlab.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "1S280 Summit Ave Unit E2 Suite 1B",
                addressLocality: "Oakbrook Terrace",
                addressRegion: "IL",
                postalCode: "60181",
                addressCountry: "US",
              },
              sameAs: [
                "https://www.linkedin.com",
                "https://dribbble.com",
                "https://twitter.com",
                "https://github.com",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
