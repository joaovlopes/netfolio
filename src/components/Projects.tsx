import { profile, type ProjectItem } from "@/data/profile";
import { SectionHeading } from "@/components/About";
import Reveal from "@/components/Reveal";

const CATEGORY_LABEL: Record<ProjectItem["category"], string> = {
  redes: "Redes",
  software: "Software",
  infra: "Infraestrutura",
};

export default function Projects() {
  return (
    <section id="projetos" className="border-t border-border/60 bg-surface/30">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <Reveal>
          <SectionHeading eyebrow="ls -la projetos/" title="Projetos" />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2">
          {profile.projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.08}>
              <article className="group flex h-full flex-col rounded-xl border border-border bg-surface p-6 transition-all hover:-translate-y-1.5 hover:border-accent/60 hover:bg-surface-hover hover:shadow-xl hover:shadow-accent/5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-accent">
                    {project.name}
                  </h3>
                  {project.highlight && (
                    <span className="rounded-full bg-signal-soft px-2.5 py-0.5 font-mono text-[11px] text-signal">
                      destaque
                    </span>
                  )}
                </div>

                <span className="mt-1 font-mono text-xs text-accent">
                  {CATEGORY_LABEL[project.category]}
                </span>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/75">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted transition-colors hover:border-accent/60 hover:text-accent"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex gap-4 font-mono text-xs">
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      className="group/link inline-flex items-center gap-1 text-muted transition-colors hover:text-accent"
                    >
                      código-fonte
                      <span className="transition-transform group-hover/link:translate-x-0.5">→</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      className="group/link inline-flex items-center gap-1 text-muted transition-colors hover:text-accent"
                    >
                      ver online
                      <span className="transition-transform group-hover/link:translate-x-0.5">→</span>
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
