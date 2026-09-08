import { MetadataRoute } from "next";
import { getStaticPublicNotes } from "@/data/notes/public-notes";

export default function sitemap(): MetadataRoute.Sitemap {
  const notes = getStaticPublicNotes();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const notesUrls = notes.map((note) => ({
    url: `${siteUrl}/notes/${note.slug}`,
    lastModified: new Date(note.created_at),
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/notes`,
      lastModified: new Date(),
    },
    ...notesUrls,
  ];
}