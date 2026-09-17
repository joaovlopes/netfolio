import { profile } from "@/data/profile";
import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section id="sobre" className="mx-auto max-w-4xl px-6 py-24">
      <Reveal>
        <SectionHeading eyebrow="whoami" title="Sobre mim" />
      </Reveal>

      <Reveal delay={0.1}>
        <div className="space-y-5">
          {profile.about.map((paragraph, i) => (
            <p key={i} className="text-base leading-relaxed text-foreground/80">
              {paragraph}
            </p>
          ))}
        </div>
      </Reveal>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {profile.certifications.map((cert, i) => (
          <Reveal key={cert.name} delay={0.15 + i * 0.08}>
            <div className="h-full rounded-lg border border-border bg-surface p-4 transition-all hover:-translate-y-1 hover:border-accent/60 hover:shadow-lg hover:shadow-accent/5">
              <p className="font-mono text-xs text-accent">{cert.year}</p>
              <p className="mt-1 text-sm font-medium text-foreground">{cert.name}</p>
              <p className="mt-1 text-xs text-muted">{cert.issuer}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-10">
      <p className="font-mono text-xs text-accent">
        <span className="text-muted">$</span> {eyebrow}
      </p>
      <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
        {title}
      </h2>
      <div className="mt-4 h-px w-16 bg-gradient-to-r from-accent to-transparent" />
    </div>
  );
}
