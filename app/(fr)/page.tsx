import type { Metadata } from "next";
import HomeContent from "@/app/components/pages/HomeContent";
import { getPageMetadata } from "@/app/i18n/seo";

export const metadata: Metadata = getPageMetadata("fr", "home");

export default function HomePage() {
  return <HomeContent locale="fr" />;
}
