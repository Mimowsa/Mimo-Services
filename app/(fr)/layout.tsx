import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import { dmSerif, spaceGrotesk } from "@/app/config/fonts";
import { getLayoutMetadata } from "@/app/i18n/seo";
import "@/app/globals.css";

export const viewport = {
  width: "device-width",
  initialScale: 1
};

export const metadata: Metadata = getLayoutMetadata("fr");

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${spaceGrotesk.variable} ${dmSerif.variable}`}>
      <body>
        <SiteHeader locale="fr" />
        {children}
        <SiteFooter locale="fr" />
        <Analytics />
      </body>
    </html>
  );
}
