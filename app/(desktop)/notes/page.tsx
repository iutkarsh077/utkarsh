import type { Metadata } from "next";
import { isMobileRequest } from "@/lib/is-mobile-request";
import { NotesDesktopPage } from "./[slug]/notes-desktop-page";

export async function generateMetadata(): Promise<Metadata> {
  const description =
    "Portfolio notes from Utkarsh Singh: background, work experience, projects, skills, and services.";

  return {
    title: "Portfolio notes",
    description,
    alternates: { canonical: "/notes" },
    openGraph: {
      title: "Portfolio notes | Utkarsh Singh",
      description,
      url: "/notes",
      type: "website",
      images: ["/notes/api/og/?title=notes&emoji=%E2%9C%8F%EF%B8%8F"],
    },
    twitter: {
      card: "summary_large_image",
      title: "Portfolio notes | Utkarsh Singh",
      description,
    },
  };
}

export default async function NotesPage() {
  const initialIsMobile = await isMobileRequest();

  return <NotesDesktopPage initialIsMobile={initialIsMobile} />;
}
