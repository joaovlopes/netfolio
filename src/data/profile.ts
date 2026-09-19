// Dados reais — fontes: LinkedIn (linkedin.com/in/joaovlopesmartins) e portfólio
// anterior (joaovlopes.github.io/Portifolio). Em caso de conflito, prevaleceu o LinkedIn.

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
  name: "João Victor Lopes Martins",
  displayName: "João Lopes",
  handle: "joaovlopes",
  role: "Analista de Redes e Infraestrutura & Desenvolvedor Front-end",
  tagline:
    "Do cabeamento ao código — infraestrutura de rede e interfaces web na mesma trajetória.",
  location: "Porto Alegre, RS - Brasil",
  email: "joaovlopesmartins@gmail.com",
  github: "https://github.com/joaovlopes",
  linkedin: "https://www.linkedin.com/in/joaovlopesmartins/",
  resumeUrl: "#",
  about: [
    "Atuo como Analista de Redes e Infraestrutura na RL NET, onde cuido do suporte e da manutenção dos ambientes de rede corporativos no dia a dia. Antes disso, construí experiência como desenvolvedor front-end, criando interfaces web modernas, responsivas e acessíveis com HTML, CSS, JavaScript e frameworks como React e Angular.",
    "Gosto de trabalhar em equipe e de transformar ideias em soluções funcionais — seja configurando um switch, seja ajustando um componente de interface. Tenho atenção aos detalhes e busco aprendizado contínuo, hoje dividido entre a graduação em Engenharia de Software na Descomplica e a rotina como analista de redes.",
    "Minha base técnica vem da eletrônica (Técnico em Eletrônica pelo IFRS), o que me deu fundamentos práticos que uso tanto na infraestrutura de rede quanto no desenvolvimento de software.",
  ],
  skillGroups: [
    {
      category: "Redes & Infraestrutura",
      description: "Suporte, administração e sistemas",
      items: [
        "Administração de Redes",
        "Infraestrutura de TI",
        "Sistemas de Informação",
        "Suporte Técnico & Hardware",
      ],
    },
    {
      category: "Programação",
      description: "Desenvolvimento front-end",
      items: [
        "JavaScript / TypeScript",
        "React.js & Next.js",
        "Angular & AngularJS",
        "HTML5, CSS & SASS",
        "Bootstrap & Bulma",
        "Consumo de API REST",
      ],
    },
    {
      category: "Ferramentas & Sistemas",
      description: "Ambiente de trabalho",
      items: ["Git & GitHub", "Figma", "Ciência de Dados (fundamentos)"],
    },
  ] satisfies SkillGroup[],
  experience: [
    {
      role: "Analista de Redes e Infraestrutura",
      org: "RL NET",
      period: "mar de 2026 — atual",
      location: "Porto Alegre, RS",
      summary:
        "Atuação full-time em infraestrutura de redes corporativas: suporte, manutenção e administração de ambientes de TI, dando continuidade ao trabalho iniciado como estagiário na mesma empresa.",
      tags: ["Redes", "Infraestrutura de TI", "Suporte"],
    },
    {
      role: "Estagiário em Análise de Redes e Infraestrutura",
      org: "RL NET",
      period: "ago de 2025 — fev de 2026",
      location: "Porto Alegre, RS",
      summary:
        "Estágio em análise de redes e infraestrutura, com foco em sistemas de informação computacionais e suporte à infraestrutura de TI da empresa.",
      tags: ["Redes", "Infraestrutura de TI", "Sistemas de Informação"],
    },
    {
      role: "Bacharelado em Engenharia de Software (em andamento)",
      org: "Descomplica Faculdade Digital",
      period: "jul de 2025 — jun de 2029",
      location: "EAD",
      summary:
        "Graduação em andamento com foco em engenharia de software, ampliando a base teórica em desenvolvimento de sistemas para complementar a atuação prática em redes e programação.",
      tags: ["Formação", "Engenharia de Software"],
    },
    {
      role: "Desenvolvedor Web",
      org: "Infocap TI",
      period: "ago de 2022 — abr de 2023",
      location: "Novo Hamburgo, RS",
      summary:
        "Desenvolvimento front-end com Angular e Angular Material, implementação de UI a partir de protótipos de alta fidelidade, consumo de APIs REST e boas práticas de Clean Code e Clean Architecture, participando do planejamento técnico das funcionalidades.",
      tags: ["Angular", "API REST", "Front-end"],
    },
    {
      role: "Auxiliar Técnico em Eletrônica",
      org: "Centro de Serviços Samsung",
      period: "ago de 2021 — fev de 2022",
      location: "Porto Alegre, RS",
      summary:
        "Controle de qualidade em laboratório técnico, emissão de laudos e gestão de garantias no sistema Samsung, além de consertos, manutenção e atendimento técnico in loco de dispositivos eletrônicos.",
      tags: ["Suporte Técnico", "Hardware", "Atendimento"],
    },
    {
      role: "Técnico em Eletrônica",
      org: "IFRS - Campus Restinga",
      period: "fev de 2018 — mar de 2022",
      location: "Porto Alegre, RS",
      summary:
        "Formação técnica em eletrônica, base para a atuação posterior em suporte técnico e infraestrutura de TI.",
      tags: ["Formação", "Eletrônica"],
    },
  ] satisfies ExperienceItem[],
  projects: [
    {
      slug: "todo-list",
      name: "ToDo List",
      description:
        "Mini projeto em React com foco em fixar os conhecimentos básicos de controle de formulário, gerenciamento de estado e lógica de programação.",
      stack: ["React", "Sass", "TypeScript"],
      category: "software",
      repoUrl: "https://github.com/joaovlopes/ToDo-List",
      liveUrl: "https://joaovlopes.github.io/ToDo-List/",
      highlight: true,
    },
    {
      slug: "ignite-feed",
      name: "Ignite Feed",
      description:
        "Projeto de publicações e curtidas para praticar os conceitos básicos do React, com plataforma responsiva e interativa.",
      stack: ["React", "Sass", "TypeScript"],
      category: "software",
      repoUrl: "https://github.com/joaovlopes/ignite-feed",
      liveUrl: "https://joaovlopes.github.io/ignite-feed/",
      highlight: true,
    },
    {
      slug: "business-card",
      name: "Business Card",
      description:
        "Projeto em Angular com foco em formulários reativos: gera um cartão de visitas personalizável, com cores, ícones e fontes à escolha do usuário.",
      stack: ["Angular", "Sass", "TypeScript"],
      category: "software",
      repoUrl: "https://github.com/joaovlopes/business-card",
      liveUrl: "https://joaovlopes.github.io/business-card/",
    },
    {
      slug: "control-tower",
      name: "Torre de Controle",
      description:
        "Tela desenvolvida com foco total em praticar habilidades em JavaScript, em que o usuário se torna o piloto de uma nave.",
      stack: ["HTML", "Sass", "JavaScript"],
      category: "software",
      repoUrl: "https://github.com/joaovlopes/Control-tower-of-a-spaceship",
      liveUrl: "https://joaovlopes.github.io/Control-tower-of-a-spaceship/",
    },
    {
      slug: "landing-natal",
      name: "Landing Page de Natal",
      description:
        "Primeiro projeto desenvolvido apenas com HTML e CSS — uma tela que serviu de aprendizado para fixar os fundamentos dessas duas tecnologias.",
      stack: ["HTML5", "CSS3"],
      category: "software",
      repoUrl: "https://github.com/joaovlopes/layout-de-natal",
      liveUrl: "https://joaovlopes.github.io/layout-de-natal/",
    },
    {
      slug: "jordan-shoes",
      name: "Jordan Shoes",
      description:
        "Tela responsiva inspirada em um desafio da comunidade iuricode — a primeira usando o framework Bootstrap, essencial para aprender na prática como utilizá-lo.",
      stack: ["HTML5", "CSS3", "Bootstrap"],
      category: "software",
      repoUrl: "https://github.com/joaovlopes/Jordan-Shoes",
      liveUrl: "https://joaovlopes.github.io/Jordan-Shoes/",
    },
  ] satisfies ProjectItem[],
  certifications: [
    { name: "Introdução à Ciência de Dados", issuer: "Santander", year: "2025" },
    { name: "Lógica de Programação: deixando os seus programas espertos", issuer: "IFRS", year: "2022" },
    { name: "HTML: Introdução ao desenvolvimento de páginas web", issuer: "IFRS", year: "2022" },
    { name: "HTML: tabelas e formulários", issuer: "IFRS", year: "2022" },
    { name: "Lógica de Programação: começando a desenvolver seus primeiros programas", issuer: "IFRS", year: "2022" },
    { name: "CSS: Folha de estilo", issuer: "IFRS", year: "2022" },
    { name: "Startup In School: Edição Google Brasil (finalista nacional)", issuer: "Startup In School", year: "2019" },
  ] satisfies CertificationItem[],
};

export type Profile = typeof profile;
