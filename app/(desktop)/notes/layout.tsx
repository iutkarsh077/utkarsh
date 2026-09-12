import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Portfolio notes",
  description: siteConfig.description,
};

export default function NotesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Simple layout - inherits from root layout
  // This folder only contains utility routes (error, api/og, revalidate)
  return children;
}
