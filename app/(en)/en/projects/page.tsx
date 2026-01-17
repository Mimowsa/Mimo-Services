import type { Metadata } from "next";
import ProjectsContent from "@/app/components/pages/ProjectsContent";
import { getPageMetadata } from "@/app/i18n/seo";

export const metadata: Metadata = getPageMetadata("en", "projects");

export default function ProjectsPage() {
  return <ProjectsContent locale="en" />;
}
