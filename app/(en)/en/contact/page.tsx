import type { Metadata } from "next";
import ContactContent from "@/app/components/pages/ContactContent";
import { getPageMetadata } from "@/app/i18n/seo";

export const metadata: Metadata = getPageMetadata("en", "contact");

export default function ContactPage() {
  return <ContactContent locale="en" />;
}
