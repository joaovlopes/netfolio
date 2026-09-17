"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { profile } from "@/data/profile";

type Line = {
  id: number;
  kind: "input" | "output" | "error" | "success" | "muted";
  text: string;
};

let lineId = 0;
const nextId = () => (lineId += 1);

const SECTION_ALIASES: Record<string, string> = {
  sobre: "sobre",
  about: "sobre",
  skills: "skills",
  habilidades: "skills",
  experiencia: "experiencia",
  experience: "experiencia",
  projetos: "projetos",
  projects: "projetos",
  contato: "contato",
  contact: "contato",
};

const HELP_TEXT = [
  "Comandos disponiveis:",
  "  help                 mostra esta lista",
  "  whoami               quem sou eu",
  "  about | sobre        um pouco sobre mim",
  "  skills               minhas habilidades (redes + codigo)",
  "  experience|experiencia  trajetoria profissional",
  "  projects | projetos  projetos que já construí",
  "  contact | contato    formas de contato",
  "  ping <host>          simula um ping ate <host>",
  "  traceroute <host>    traça a rota até <host>",
  "  netstat              conexões ativas (simulado)",
  "  ifconfig             interfaces de rede (simulado)",
  "  open <secao>         rola a página até a seção",
  "  banner               reexibe o cabeçalho",
  "  clear | cls           limpa a tela",
];

function randLatency(min: number, max: number) {
  return (Math.random() * (max - min) + min).toFixed(1);
}

function pingOutput(target: string): string[] {
  const host = target || "localhost";
  const lines = [`PING ${host}: 56 data bytes`];
  for (let i = 0; i < 4; i++) {
    lines.push(
      `64 bytes from ${host}: icmp_seq=${i} ttl=58 time=${randLatency(4, 38)} ms`
    );
  }
  lines.push("");
  lines.push(`--- ${host} ping statistics ---`);
  lines.push("4 packets transmitted, 4 packets received, 0% packet loss");
  return lines;
}

function tracerouteOutput(target: string): string[] {
  const host = target || "objetivo-desconhecido";
  const hops = [
    "sua-maquina.local",
    "gateway-redes.local",
    "backbone.skills.dev",
    "roteador-experiencia.dev",
    `${host}`,
  ];
  const lines = [`traceroute to ${host}, ${hops.length} hops max`];
  hops.forEach((hop, i) => {
    lines.push(`  ${i + 1}  ${hop}  ${randLatency(2, 60)} ms`);
  });
  lines.push("");
  lines.push(`Destino alcançado: ${host}. Digite "open ${
    SECTION_ALIASES[host.toLowerCase()] ?? "projetos"
  }" para chegar lá na página também.`);
  return lines;
}

function netstatOutput(): string[] {
  const lines = ["Proto  Local Address        Foreign Address       State"];
  profile.projects.forEach((p, i) => {
    lines.push(
      `tcp    127.0.0.1:${4000 + i}       ${p.slug}.dev:443       ESTABLISHED`
    );
  });
  return lines;
}

function ifconfigOutput(): string[] {
  return [
    "eth0: flags=UP,BROADCAST,RUNNING mtu 1500",
    `        inet 10.0.${new Date().getMonth() + 1}.${new Date().getDate()}  netmask 255.255.255.0`,
    `        ether ${profile.handle
      .padEnd(12, "0")
      .slice(0, 12)
      .replace(/(.{2})/g, "$1:")
      .slice(0, -1)}`,
    "        status: link ativo — pronto para novas oportunidades",
  ];
}

export default function Terminal() {
  const [lines, setLines] = useState<Line[]>([
    { id: nextId(), kind: "success", text: `bem-vindo ao terminal de ${profile.name}` },
    { id: nextId(), kind: "muted", text: 'digite "help" para ver os comandos disponíveis' },
  ]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [lines]);

  function push(kind: Line["kind"], text: string) {
    setLines((prev) => [...prev, { id: nextId(), kind, text }]);
  }

  function pushMany(kind: Line["kind"], texts: string[]) {
    setLines((prev) => [
      ...prev,
      ...texts.map((text) => ({ id: nextId(), kind, text })),
    ]);
  }

  function scrollToSection(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function run(raw: string) {
    const trimmed = raw.trim();
    push("input", trimmed || "");
    if (!trimmed) return;

    const [cmdRaw, ...rest] = trimmed.split(/\s+/);
    const cmd = cmdRaw.toLowerCase();
    const arg = rest.join(" ");

    switch (cmd) {
      case "help":
      case "man":
        pushMany("output", HELP_TEXT);
        break;

      case "whoami":
        push("output", `${profile.handle} — ${profile.role}`);
        break;

      case "about":
      case "sobre":
        pushMany("output", profile.about);
        scrollToSection("sobre");
        break;

      case "skills":
      case "habilidades":
        profile.skillGroups.forEach((group) => {
          push("success", `## ${group.category}`);
          push("output", `  ${group.items.join(", ")}`);
        });
        break;

      case "experience":
      case "experiencia":
        profile.experience.forEach((exp) => {
          push("success", `${exp.period}  ${exp.role} @ ${exp.org}`);
          push("output", `  ${exp.summary}`);
        });
        break;

      case "projects":
      case "projetos":
        profile.projects.forEach((p) => {
          push("success", `${p.name}  [${p.category}]`);
          push("output", `  ${p.description}`);
          push("muted", `  stack: ${p.stack.join(", ")}`);
        });
        break;

      case "contact":
      case "contato":
        push("output", `email: ${profile.email}`);
        push("output", `github: ${profile.github}`);
        push("output", `linkedin: ${profile.linkedin}`);
        scrollToSection("contato");
        break;

      case "ping":
        pushMany("output", pingOutput(arg));
        break;

      case "traceroute":
      case "tracert":
        pushMany("output", tracerouteOutput(arg));
        break;

      case "netstat":
        pushMany("output", netstatOutput());
        break;

      case "ifconfig":
      case "ip":
        pushMany("output", ifconfigOutput());
        break;

      case "open": {
        const key = arg.toLowerCase();
        const section = SECTION_ALIASES[key];
        if (section) {
          scrollToSection(section);
          push("success", `abrindo secao "${key}"...`);
        } else {
          push("error", `secao desconhecida: "${arg}". tente: sobre, skills, experiencia, projetos, contato`);
        }
        break;
      }

      case "sudo":
        push("error", `${profile.handle} não está no arquivo sudoers. Essa tentativa foi registrada. :)`);
        break;

      case "banner":
        push("success", `bem-vindo ao terminal de ${profile.name}`);
        push("muted", 'digite "help" para ver os comandos disponíveis');
        break;

      case "echo":
        push("output", arg);
        break;

      case "date":
        push("output", new Date().toString());
        break;

      case "clear":
      case "cls":
        setLines([]);
        break;

      case "exit":
        push("muted", "não há como sair de um bom portfólio ;)");
        break;

      default:
        push("error", `comando não encontrado: ${cmd}. digite "help"`);
    }
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      run(input);
      if (input.trim()) setHistory((h) => [...h, input]);
      setInput("");
      setHistoryIndex(null);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (!history.length) return;
      const idx = historyIndex === null ? history.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(idx);
      setInput(history[idx]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex === null) return;
      const idx = historyIndex + 1;
      if (idx >= history.length) {
        setHistoryIndex(null);
        setInput("");
      } else {
        setHistoryIndex(idx);
        setInput(history[idx]);
      }
    }
  }

  const colorFor: Record<Line["kind"], string> = {
    input: "text-foreground",
    output: "text-foreground/80",
    error: "text-rose-400",
    success: "text-signal",
    muted: "text-muted",
  };

  return (
    <div
      className="w-full max-w-3xl rounded-lg border border-border bg-surface/90 text-left shadow-2xl shadow-black/40 backdrop-blur"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-rose-500/70" />
        <span className="h-3 w-3 rounded-full bg-amber-400/70" />
        <span className="h-3 w-3 rounded-full bg-signal/70" />
        <span className="ml-3 font-mono text-xs text-muted">
          {profile.handle}@netfolio:~
        </span>
      </div>

      <div
        ref={scrollRef}
        className="h-72 overflow-y-auto px-4 py-3 font-mono text-[13px] leading-relaxed sm:text-sm"
      >
        {lines.map((line) => (
          <div key={line.id} className={colorFor[line.kind]}>
            {line.kind === "input" ? (
              <span>
                <span className="text-accent">{profile.handle}@netfolio</span>
                <span className="text-muted">:~$ </span>
                {line.text}
              </span>
            ) : (
              <span className="whitespace-pre-wrap">{line.text}</span>
            )}
          </div>
        ))}

        <div className="flex items-center gap-2">
          <span className="text-accent">{profile.handle}@netfolio</span>
          <span className="text-muted">:~$</span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            autoComplete="off"
            autoCapitalize="off"
            spellCheck={false}
            aria-label="terminal input"
            className="flex-1 bg-transparent outline-none placeholder:text-muted/60"
            placeholder="digite um comando…"
          />
          <span className="caret-blink text-accent">▋</span>
        </div>
      </div>
    </div>
  );
}
