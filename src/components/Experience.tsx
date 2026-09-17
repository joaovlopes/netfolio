import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/About";
import Reveal from "@/components/Reveal";

export default function Experience() {
  return (
    <section id="experiencia" className="mx-auto max-w-4xl px-6 py-24">
      <Reveal>
        <SectionHeading eyebrow="traceroute experiencia" title="Trajetória" />
      </Reveal>

      <ol className="relative space-y-10 border-l border-border pl-8">
        {profile.experience.map((exp, i) => (
          <Reveal key={`${exp.role}-${exp.org}`} delay={i * 0.1}>
            <li className="group relative">
              <span className="absolute -left-[2.35rem] top-1 h-3 w-3 rounded-full border-2 border-background bg-accent transition-transform group-hover:scale-125" />

              <div className="-mx-4 rounded-lg p-4 transition-colors group-hover:bg-surface">
                <p className="font-mono text-xs text-muted">{exp.period} · {exp.location}</p>
                <h3 className="mt-1 text-lg font-semibold text-foreground">
                  {exp.role}
                </h3>
                <p className="text-sm text-accent">{exp.org}</p>
                <p className="mt-2 text-sm leading-relaxed text-foreground/75">
                  {exp.summary}
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-background/60 px-3 py-1 font-mono text-xs text-muted transition-colors hover:border-accent/60 hover:text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
