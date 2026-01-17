import type { Metadata } from "next";
import AboutContent from "@/app/components/pages/AboutContent";
import { getPageMetadata } from "@/app/i18n/seo";

export const metadata: Metadata = getPageMetadata("fr", "about");

export default function AboutPage() {
  return <AboutContent locale="fr" />;
}
