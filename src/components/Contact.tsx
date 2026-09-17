import { Mail, FolderGit2, Briefcase } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/About";

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
      <SectionHeading eyebrow="ping contato --resolve" title="Vamos conversar" />

      <p className="max-w-xl text-sm leading-relaxed text-foreground/75">
        Aberto a oportunidades de estágio, projetos e trocas de ideia sobre redes
        e desenvolvimento. É só chamar em qualquer um dos canais abaixo.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {CHANNELS.map((channel) => (
          <a
            key={channel.label}
            href={channel.href(profile)}
            className="rounded-lg border border-border bg-surface p-4 transition-colors hover:border-accent/60 hover:bg-surface-hover"
          >
            <channel.icon className="h-4 w-4 text-accent" strokeWidth={1.75} />
            <p className="mt-2 font-mono text-xs text-accent">{channel.label}</p>
            <p className="mt-1 truncate text-sm text-foreground/85">
              {channel.value(profile)}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
