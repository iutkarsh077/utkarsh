import { cache } from "react";
import { redirect } from "next/navigation";
import type { Metadata } from "next";
import { isMobileRequest } from "@/lib/is-mobile-request";
import { NotesDesktopPage } from "./notes-desktop-page";
import {
  getStaticNoteBySlug,
  getStaticPublicNoteSlugs,
} from "@/data/notes/public-notes";

const getNote = cache(async (slug: string) => getStaticNoteBySlug(slug) ?? null);

function getDescription(markdown: string) {
  return markdown
    .replace(/^#{1,6}\s+.*$/gm, "")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/[*_`>#]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 155);
}

export async function generateStaticParams() {
  return getStaticPublicNoteSlugs();
}

export const dynamicParams = true;

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const cleanSlug = slug.replace(/^notes\//, "");
  const note = await getNote(cleanSlug);

  if (!note) return { title: "Note not found", robots: { index: false, follow: false } };

  const title = note.title || "Portfolio note";
  const description = getDescription(note.content);
  const image = `/notes/api/og/?title=${encodeURIComponent(title)}&emoji=${encodeURIComponent(note.emoji || "")}`;
  const url = `/notes/${cleanSlug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | Utkarsh Singh`,
      description,
      url,
      type: "article",
      publishedTime: note.created_at,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Utkarsh Singh`,
      description,
      images: [image],
    },
  };
}

export default async function NotePage({ params }: PageProps) {
  const { slug } = await params;
  const cleanSlug = slug.replace(/^notes\//, "");
  const note = await getNote(cleanSlug);
  const initialIsMobile = await isMobileRequest();

  if (!note) redirect("/notes");

  return (
    <NotesDesktopPage
      slug={cleanSlug}
      initialIsMobile={initialIsMobile}
      initialNote={note}
    />
  );
}
