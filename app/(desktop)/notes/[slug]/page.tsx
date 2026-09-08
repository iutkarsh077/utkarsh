import { cache } from "react";
import { redirect } from "next/navigation";
import { Metadata } from "next";
import { isMobileRequest } from "@/lib/is-mobile-request";
import { NotesDesktopPage } from "./notes-desktop-page";
import {
  getStaticNoteBySlug,
  getStaticPublicNoteSlugs,
} from "@/data/notes/public-notes";
import { siteConfig } from "@/config/site";

// Cached function to fetch a note by slug - eliminates duplicate fetches
const getNote = cache(async (slug: string) => {
  return getStaticNoteBySlug(slug) ?? null;
});

// Dynamically determine if this is a user note
export async function generateStaticParams() {
  return getStaticPublicNoteSlugs();
}

// Use dynamic rendering for non-public notes
export const dynamicParams = true;

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const cleanSlug = slug.replace(/^notes\//, "");
  const note = await getNote(cleanSlug);

  if (!note) {
    return { title: "Note not found" };
  }

  const title = note.title || "new note";
  const emoji = note.emoji || "👋🏼";

  return {
    title: siteConfig.title,
    openGraph: {
      images: [
        `/notes/api/og/?title=${encodeURIComponent(title)}&emoji=${encodeURIComponent(emoji)}`,
      ],
    },
  };
}

export default async function NotePage({ params }: PageProps) {
  const { slug } = await params;
  const cleanSlug = slug.replace(/^notes\//, "");
  const note = await getNote(cleanSlug);
  const initialIsMobile = await isMobileRequest();

  // Invalid slug - redirect back to the notes app
  if (!note) {
    return redirect("/notes");
  }

  // Render Desktop with notes app focused on this specific note
  return (
    <NotesDesktopPage
      slug={cleanSlug}
      initialIsMobile={initialIsMobile}
      initialNote={note}
    />
  );
}
