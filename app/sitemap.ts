import { MetadataRoute } from "next";
import { getStaticPublicNotes } from "@/data/notes/public-notes";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const notes = getStaticPublicNotes();
  const siteUrl = siteConfig.url;

  const notesUrls: MetadataRoute.Sitemap = notes.map((note) => ({
    url: `${siteUrl}/notes/${note.slug}`,
    lastModified: new Date(note.created_at),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/notes`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...notesUrls,
  ];
}
