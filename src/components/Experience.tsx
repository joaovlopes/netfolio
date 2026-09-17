import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/About";

export default function Experience() {
  return (
    <section id="experiencia" className="mx-auto max-w-4xl px-6 py-24">
      <SectionHeading eyebrow="traceroute experiencia" title="Trajetória" />

      <ol className="relative space-y-10 border-l border-border pl-8">
        {profile.experience.map((exp) => (
          <li key={`${exp.role}-${exp.org}`} className="relative">
            <span className="absolute -left-[2.35rem] top-1 h-3 w-3 rounded-full border-2 border-background bg-accent" />

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
                  className="rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
