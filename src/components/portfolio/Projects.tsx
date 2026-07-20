import { Section, FadeIn } from "./Section";
import { portfolio, type Project } from "@/config/portfolio";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected Projects"
      description="A few things I've designed, built, and shipped end-to-end."
    >
      <div className="space-y-6">
        {portfolio.projects.map((p, i) => (
          <FadeIn key={p.title} delay={i * 0.05}>
            <ProjectCard project={p} index={i} />
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="group rounded-xl border border-border bg-card overflow-hidden transition-colors hover:border-foreground/20">
      <div className="grid md:grid-cols-12">
        <div className="md:col-span-5 relative bg-secondary/40 border-b md:border-b-0 md:border-r border-border">
          {project.image ? (
            // eslint-disable-next-line jsx-a11y/img-redundant-alt
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              className="w-full h-full object-cover aspect-[16/10]"
            />
          ) : (
            <div className="w-full h-full aspect-[16/10] flex items-center justify-center relative">
              <div className="absolute inset-0 [background-image:linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />
              <div className="relative text-center px-6">
                <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  Project 0{index + 1}
                </div>
                <div className="mt-2 text-lg font-medium text-foreground">
                  {project.title}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="md:col-span-7 p-6 md:p-8">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <h3 className="text-xl font-medium text-foreground tracking-tight">
              {project.title}
            </h3>
            <div className="flex items-center gap-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Live demo"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          <p className="mt-2 text-[14.5px] leading-relaxed text-muted-foreground">
            {project.overview}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-md border border-border bg-secondary/50 px-2 py-0.5 text-[11.5px] text-foreground/90"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-6 grid sm:grid-cols-2 gap-x-8 gap-y-5 text-[13.5px]">
            <Block label="Problem" text={project.problem} />
            <div>
              <div className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                Features
              </div>
              <ul className="mt-2 space-y-1.5 text-foreground/90">
                {project.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/70" />
                    <span className="leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Block label="Challenges" text={project.challenges} />
            <Block label="What I Learned" text={project.learnings} />
          </div>

          {(project.github || project.demo) && (
            <div className="mt-6 flex flex-wrap gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-secondary/40 px-3.5 py-1.5 text-[13px] text-foreground/90 transition-all hover:border-foreground/30 hover:bg-secondary/70 hover:text-foreground"
                >
                  <Github className="w-3.5 h-3.5" />
                  GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-secondary/40 px-3.5 py-1.5 text-[13px] text-foreground/90 transition-all hover:border-foreground/30 hover:bg-secondary/70 hover:text-foreground"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Live Demo
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

function Block({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <div className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
        {label}
      </div>
      <p className="mt-2 leading-relaxed text-foreground/90">{text}</p>
    </div>
  );
}
