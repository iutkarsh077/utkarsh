import { portfolio } from "@/data/portfolio";
import { siteConfig } from "@/config/site";

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export function PortfolioStructuredData() {
  const currentRole = portfolio.workExperience[0];

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        mainEntity: {
          "@type": "Person",
          name: portfolio.name,
          url: siteConfig.url,
          image: portfolio.image,
          jobTitle: currentRole.role,
          worksFor: { "@type": "Organization", name: currentRole.company },
          knowsAbout: portfolio.skills,
          sameAs: [
            portfolio.socials.linkedin,
            portfolio.socials.github,
            portfolio.socials.twitter,
            portfolio.socials.youtube,
          ],
        },
      }}
    />
  );
}

/**
 * The desktop is intentionally an immersive client-side experience. This
 * server-rendered outline keeps its professional content available in the
 * initial HTML for search engines and assistive technologies without creating
 * a competing visual landing page.
 */
export function PortfolioOutline() {
  return (
    <main className="sr-only" aria-label="Utkarsh Singh portfolio">
      <h1>Utkarsh Singh — Full-Stack Engineer specializing in Next.js and AI products</h1>
      <p>{portfolio.summary}</p>

      <nav aria-label="Portfolio sections">
        <ul>
          <li><a href="/notes/about-me">About Utkarsh Singh</a></li>
          <li><a href="/notes/experience">Work experience</a></li>
          <li><a href="/notes/projects">Projects</a></li>
          <li><a href="/notes/skills">Skills and services</a></li>
        </ul>
      </nav>

      <section aria-labelledby="experience-heading">
        <h2 id="experience-heading">Work experience</h2>
        {portfolio.workExperience.map((job) => (
          <article key={`${job.company}-${job.role}`}>
            <h3>{job.role} at {job.company}</h3>
            <p>{job.duration} · {job.location}</p>
            <ul>{job.work.map((achievement) => <li key={achievement}>{achievement}</li>)}</ul>
          </article>
        ))}
      </section>

      <section aria-labelledby="projects-heading">
        <h2 id="projects-heading">Selected projects</h2>
        {portfolio.projects.map((project) => (
          <article key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.live && <a href={project.live}>View {project.title}</a>}
          </article>
        ))}
      </section>

      <section aria-labelledby="skills-heading">
        <h2 id="skills-heading">Skills</h2>
        <ul>{portfolio.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
      </section>

      <p>
        <a href={portfolio.socials.linkedin}>Connect on LinkedIn</a>
        {" · "}
        <a href={portfolio.socials.github}>View GitHub profile</a>
        {" · "}
        <a href={portfolio.socials.resume}>Download resume</a>
      </p>
    </main>
  );
}
