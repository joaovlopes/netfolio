"use client";

import { useState } from "react";
import { profile } from "@/data/profile";

const LINKS = [
  { id: "sobre", label: "Sobre" },
  { id: "skills", label: "Skills" },
  { id: "experiencia", label: "Experiência" },
  { id: "projetos", label: "Projetos" },
  { id: "contato", label: "Contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  function go(id: string) {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/75 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <button
          onClick={() => go("home")}
          className="group font-mono text-sm font-semibold tracking-tight text-foreground"
        >
          <span className="text-accent transition-colors group-hover:text-signal">~/</span>
          <span className="transition-colors group-hover:text-accent">{profile.handle}</span>
        </button>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => go(link.id)}
                className="group relative font-mono text-sm text-muted transition-colors hover:text-accent"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
          aria-expanded={open}
          className="group flex flex-col gap-1.5 md:hidden"
        >
          <span className="h-0.5 w-6 bg-foreground transition-colors group-hover:bg-accent" />
          <span className="h-0.5 w-6 bg-foreground transition-colors group-hover:bg-accent" />
          <span className="h-0.5 w-4 bg-foreground transition-colors group-hover:bg-accent" />
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-border/80 px-6 py-3 md:hidden">
          {LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => go(link.id)}
                className="w-full py-2 text-left font-mono text-sm text-muted transition-colors hover:text-accent"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
