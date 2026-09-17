import { Mail, FolderGit2, Briefcase } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/About";
import Reveal from "@/components/Reveal";

const CHANNELS = [
  {
    label: "Email",
    icon: Mail,
    value: (p: typeof profile) => p.email,
    href: (p: typeof profile) => `mailto:${p.email}`,
  },
  {
    label: "GitHub",
    icon: FolderGit2,
    value: (p: typeof profile) => p.github.replace("https://", ""),
    href: (p: typeof profile) => p.github,
  },
  {
    label: "LinkedIn",
    icon: Briefcase,
    value: (p: typeof profile) => p.linkedin.replace("https://", ""),
    href: (p: typeof profile) => p.linkedin,
  },
];

export default function Contact() {
  return (
    <section id="contato" className="mx-auto max-w-3xl px-6 py-24">
      <Reveal>
        <SectionHeading eyebrow="ping contato --resolve" title="Vamos conversar" />

        <p className="max-w-xl text-sm leading-relaxed text-foreground/75">
          Aberto a oportunidades de estágio, projetos e trocas de ideia sobre redes
          e desenvolvimento. É só chamar em qualquer um dos canais abaixo.
        </p>
      </Reveal>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {CHANNELS.map((channel, i) => (
          <Reveal key={channel.label} delay={0.1 + i * 0.08}>
            <a
              href={channel.href(profile)}
              className="group block rounded-lg border border-border bg-surface p-4 transition-all hover:-translate-y-1 hover:border-accent/60 hover:bg-surface-hover hover:shadow-lg hover:shadow-accent/5"
            >
              <channel.icon
                className="h-4 w-4 text-accent transition-transform group-hover:scale-110"
                strokeWidth={1.75}
              />
              <p className="mt-2 font-mono text-xs text-accent">{channel.label}</p>
              <p className="mt-1 truncate text-sm text-foreground/85">
                {channel.value(profile)}
              </p>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
