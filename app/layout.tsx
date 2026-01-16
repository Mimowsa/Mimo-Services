import type { Metadata } from "next";
import { Space_Grotesk, DM_Serif_Text } from "next/font/google";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import "@/app/globals.css";

export const viewport = {
  width: "device-width",
  initialScale: 1
};

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans"
});

const dmSerif = DM_Serif_Text({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-serif"
});

const site = {
  name: "Mimo Services",
  description:
    "Freelance Power Platform à Paris spécialisé Power Apps, Power Automate et automatisation Microsoft 365. Accompagnement projets métier.",
  url: "https://example.com"
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Freelance Power Platform Paris | Power Apps & Power Automate",
    template: "%s | Freelance Power Platform Paris"
  },
  description: site.description,
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: site.url,
    siteName: site.name,
    title: "Freelance Power Platform Paris | Power Apps & Power Automate",
    description: site.description,
    images: [
      {
        url: "/og-power-platform-paris.svg",
        width: 1200,
        height: 630,
        alt: "Freelance Power Platform Paris"
      }
    ]
  },
  alternates: {
    canonical: site.url
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${spaceGrotesk.variable} ${dmSerif.variable}`}>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
