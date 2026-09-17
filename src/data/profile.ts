// Dados fictícios de demonstração — substituir pelos dados reais depois.

export type SkillGroup = {
  category: string;
  description: string;
  items: string[];
};

export type ExperienceItem = {
  role: string;
  org: string;
  period: string;
  location: string;
  summary: string;
  tags: string[];
};

export type ProjectItem = {
  slug: string;
  name: string;
  description: string;
  stack: string[];
  category: "redes" | "software" | "infra";
  repoUrl?: string;
  liveUrl?: string;
  highlight?: boolean;
};

export type CertificationItem = {
  name: string;
  issuer: string;
  year: string;
};

export const profile = {
  name: "João Silva",
  handle: "joaosilva",
  role: "Técnico em Redes de Computadores & Desenvolvedor",
  tagline:
    "Conectando pacotes e código — infraestrutura de rede por trás, aplicações por cima.",
  location: "Brasil",
  email: "contato@example.com",
  github: "https://github.com/example",
  linkedin: "https://linkedin.com/in/example",
  resumeUrl: "#",
  about: [
    "Sou um profissional em formação na área de Tecnologia da Informação, com foco em redes de computadores e desenvolvimento de software. Gosto de entender como a informação viaja — de um roteador a um banco de dados — e de construir as duas pontas dessa jornada.",
    "No dia a dia, transito entre configurar uma topologia no Packet Tracer/GNS3 e escrever uma API em Node.js ou um componente em React. Essa mistura me dá uma visão mais completa de como sistemas realmente funcionam, da camada física ao front-end.",
    "Este portfólio é fictício por enquanto — os dados serão substituídos pela minha trajetória real em breve.",
  ],
  skillGroups: [
    {
      category: "Redes",
      description: "Infraestrutura, protocolos e administração",
      items: [
        "TCP/IP & Sub-redes (VLSM/CIDR)",
        "Roteamento (OSPF, RIP, estático)",
        "Switching & VLANs",
        "Firewall & ACLs",
        "Cabeamento estruturado",
        "Cisco Packet Tracer / GNS3",
      ],
    },
    {
      category: "Programação",
      description: "Desenvolvimento web e automação",
      items: [
        "JavaScript / TypeScript",
        "React & Next.js",
        "Node.js",
        "Python (automação de redes)",
        "SQL",
      ],
    },
    {
      category: "Ferramentas & Sistemas",
      description: "Ambiente de trabalho",
      items: ["Linux (administração básica)", "Wireshark", "Git & GitHub", "Docker"],
    },
  ] satisfies SkillGroup[],
  experience: [
    {
      role: "Estagiário de Suporte & Redes",
      org: "Empresa Fictícia LTDA",
      period: "2024 — Atual",
      location: "Remoto",
      summary:
        "Suporte técnico de nível 1/2, manutenção de switches e access points, documentação de topologia de rede interna e pequenos scripts de automação para monitoramento de uptime.",
      tags: ["Redes", "Suporte", "Monitoramento"],
    },
    {
      role: "Desenvolvedor Front-end Júnior (projeto acadêmico)",
      org: "Projeto Integrador",
      period: "2023 — 2024",
      location: "Presencial",
      summary:
        "Desenvolvimento de aplicação web para gestão de chamados de TI, com foco em interface responsiva e integração com API REST.",
      tags: ["React", "API REST", "UI"],
    },
    {
      role: "Curso Técnico em Redes de Computadores",
      org: "Instituição Fictícia",
      period: "2022 — 2024",
      location: "Brasil",
      summary:
        "Formação técnica com ênfase em infraestrutura de redes, cabeamento estruturado, protocolos de roteamento e fundamentos de segurança da informação.",
      tags: ["Formação", "Redes"],
    },
  ] satisfies ExperienceItem[],
  projects: [
    {
      slug: "netmapper",
      name: "NetMapper",
      description:
        "Ferramenta de linha de comando em Python que varre uma sub-rede local, identifica hosts ativos e gera um mapa visual da topologia em SVG.",
      stack: ["Python", "Scapy", "SVG"],
      category: "redes",
      repoUrl: "#",
      highlight: true,
    },
    {
      slug: "uptime-pulse",
      name: "Uptime Pulse",
      description:
        "Dashboard web que monitora a disponibilidade de hosts via ICMP/HTTP e exibe histórico de latência em tempo real.",
      stack: ["Next.js", "Node.js", "WebSockets"],
      category: "infra",
      repoUrl: "#",
      liveUrl: "#",
      highlight: true,
    },
    {
      slug: "vlan-lab",
      name: "VLAN Lab Simulator",
      description:
        "Laboratório documentado no GNS3 simulando segmentação de VLANs, roteamento entre redes e regras de firewall para um cenário corporativo fictício.",
      stack: ["GNS3", "Cisco IOS", "Documentação"],
      category: "redes",
      repoUrl: "#",
    },
    {
      slug: "task-orbit",
      name: "TaskOrbit",
      description:
        "Aplicação full-stack de gerenciamento de tarefas em equipe, com autenticação, quadros kanban e API REST própria.",
      stack: ["React", "Node.js", "PostgreSQL"],
      category: "software",
      repoUrl: "#",
      liveUrl: "#",
    },
  ] satisfies ProjectItem[],
  certifications: [
    { name: "CCNA: Introduction to Networks (em andamento)", issuer: "Cisco Networking Academy", year: "2025" },
    { name: "Python para Automação de Redes", issuer: "Curso Fictício", year: "2024" },
  ] satisfies CertificationItem[],
};

export type Profile = typeof profile;
