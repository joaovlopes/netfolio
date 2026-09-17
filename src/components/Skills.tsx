import { Network, Code2, Wrench } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/About";
import Reveal from "@/components/Reveal";

const CATEGORY_ICON: Record<string, typeof Network> = {
  Redes: Network,
  Programação: Code2,
  "Ferramentas & Sistemas": Wrench,
};

export default function Skills() {
  return (
    <section id="skills" className="border-t border-border/60 bg-surface/30">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <Reveal>
          <SectionHeading eyebrow="cat skills.json" title="Habilidades" />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {profile.skillGroups.map((group, i) => {
            const Icon = CATEGORY_ICON[group.category] ?? Code2;
            return (
              <Reveal key={group.category} delay={i * 0.1}>
                <div className="group h-full rounded-xl border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:border-accent/60 hover:shadow-lg hover:shadow-accent/5">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-soft text-accent transition-colors group-hover:bg-accent group-hover:text-background">
                      <Icon className="h-4.5 w-4.5" strokeWidth={1.75} />
                    </span>
                    <h3 className="font-mono text-sm font-semibold text-foreground">
                      {group.category}
                    </h3>
                  </div>
                  <p className="mt-2 text-xs text-muted">{group.description}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-border bg-background/40 px-3 py-1.5 text-sm text-foreground/85 transition-colors hover:border-accent/60 hover:text-accent"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
