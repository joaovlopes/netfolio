import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/About";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-border/60 bg-surface/30">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <SectionHeading eyebrow="cat skills.json" title="Habilidades" />

        <div className="grid gap-8 md:grid-cols-3">
          {profile.skillGroups.map((group) => (
            <div key={group.category}>
              <h3 className="font-mono text-sm font-semibold text-accent">
                {group.category}
              </h3>
              <p className="mt-1 text-xs text-muted">{group.description}</p>

              <ul className="mt-5 space-y-4">
                {group.items.map((item) => (
                  <li key={item.name}>
                    <div className="mb-1.5 flex items-center justify-between">
                      <span className="text-sm text-foreground/85">
                        {item.name}
                      </span>
                      <span className="font-mono text-xs text-muted">
                        {item.level}%
                      </span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-border">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-accent to-signal"
                        style={{ width: `${item.level}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
