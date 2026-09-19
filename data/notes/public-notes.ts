import { Note } from "@/lib/notes/types";
import { portfolio } from "@/data/portfolio";

const OWNER_SESSION = "00000000-0000-4000-8000-000000000001";

function note(
  partial: Omit<Note, "session_id" | "public" | "created_at"> & {
    created_at?: string;
  }
): Note {
  return {
    session_id: OWNER_SESSION,
    public: true,
    created_at: partial.created_at ?? "2026-09-08T10:00:00.000Z",
    ...partial,
  };
}

function experienceMarkdown() {
  return portfolio.workExperience
    .map((job) => {
      const bullets = job.work.map((item) => `- ${item}`).join("\n");
      return `## ${job.company}\n**${job.role}** · ${job.duration} · ${job.location}\n\n${bullets}`;
    })
    .join("\n\n");
}

function projectsMarkdown() {
  return portfolio.projects
    .map((project) => {
      const links = [
        project.live ? `[live](${project.live})` : null,
        "github" in project && project.github
          ? `[github](${project.github})`
          : null,
      ]
        .filter(Boolean)
        .join(" · ");

      return `## ${project.title}\n*${project.date}*\n\n${project.description}\n\n${links}`;
    })
    .join("\n\n");
}

export const STATIC_PUBLIC_NOTES: Note[] = [
  note({
    id: "11111111-1111-4111-8111-111111111111",
    slug: "about-me",
    title: "about me",
    emoji: "👋",
    created_at: "2026-09-08T12:00:00.000Z",
    content: `# about me

Hey, I'm ${portfolio.shortName} 👋

I'm a Full-Stack Engineer at **Phrontier AI**, building products end-to-end with MERN, Next.js, and Agentic AI.

I like taking ideas from 0 → 1 and turning them into things people actually use.

Over the last 2+ years, I've:
* Build HRMS System in Phrontier AI that got acquired by a **US based company**
* Worked with developers from **Google** and **Intuit** at SoarX to launch a Python course, which attracted **250+** students and generated **₹28K+** in revenue.
* Built and shipped AI-powered developer tools, including an AI code-review system that processed **967 PRs** for ~**$3** in AI/API costs
* Built **Nourish**, an AI nutrition system that turns meal images into structured nutrition data using a vision model and AWS infrastructure
* Built a **company discovery map** covering 5 major Indian tech hubs that has reached **1,500+** real users
* Built and shipped multiple full-stack products for developer collaboration, code sharing, AI workflows, and company discovery
* Worked with a **US-based startup (Thinkact AI)** to build a document management system for processing different tax forms, including Forms 1065 and 1120.

## what I care about

* Building products people actually use
* Simple, usable interfaces
* Reliable and scalable backend systems
* Using AI where it genuinely improves a workflow

## find me

[LinkedIn](${portfolio.socials.linkedin}) · [GitHub](${portfolio.socials.github}) · [X](${portfolio.socials.twitter}) · [YouTube](${portfolio.socials.youtube}) · [Resume](${portfolio.socials.resume})
`,
  }),
  note({
    id: "22222222-2222-4222-8222-222222222222",
    slug: "experience",
    title: "experience",
    emoji: "💼",
    created_at: "2026-09-07T12:00:00.000Z",
    content: `# experience

${experienceMarkdown()}
`,
  }),
  note({
    id: "33333333-3333-4333-8333-333333333333",
    slug: "projects",
    title: "projects",
    emoji: "🚀",
    created_at: "2026-09-06T12:00:00.000Z",
    content: `# projects

A selection of things I've built — personal products, internship work, and experiments.

${projectsMarkdown()}
`,
  }),
  note({
    id: "44444444-4444-4444-8444-444444444444",
    slug: "skills",
    title: "skills & services",
    emoji: "🛠️",
    created_at: "2026-09-05T12:00:00.000Z",
    content: `# skills & services

## tech stack

${portfolio.skills.map((skill) => `* ${skill}`).join("\n")}

## services

${portfolio.services
  .map((item) => `### ${item.service}\n${item.description}`)
  .join("\n\n")}
`,
  }),
  note({
    id: "55555555-5555-4555-8555-555555555555",
    slug: "quick-links",
    title: "quick links",
    emoji: "🔗",
    created_at: "2026-09-04T12:00:00.000Z",
    content: `# quick links

* [resume](${portfolio.socials.resume})
* [github](${portfolio.socials.github})
* [linkedin](${portfolio.socials.linkedin})
* [twitter](${portfolio.socials.twitter})
* [youtube](${portfolio.socials.youtube})
* [snippets](https://snippets-saas-production.vercel.app/)
* [GPT - API PR Reviewer](https://github.com/iutkarsh077/gpt)
`,
  }),
  note({
    id: "66666666-6666-4666-8666-666666666666",
    slug: "credits",
    title: "credits",
    emoji: "✨",
    created_at: "2026-09-03T12:00:00.000Z",
    content: `# credits

this macOS-style portfolio is  Alana Goyal's personal site, with inspiration from Xiaohan Zou's playground-macos and Apple's design language.
`,
  }),
];

export function getStaticPublicNotes(): Note[] {
  return STATIC_PUBLIC_NOTES;
}

export function getStaticNoteBySlug(slug: string): Note | null {
  const cleanSlug = slug.replace(/^notes\//, "");
  return STATIC_PUBLIC_NOTES.find((item) => item.slug === cleanSlug) ?? null;
}

export function getStaticPublicNoteSlugs(): { slug: string }[] {
  return STATIC_PUBLIC_NOTES.map(({ slug }) => ({ slug }));
}
