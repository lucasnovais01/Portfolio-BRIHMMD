// Fonte única de conteúdo do portfólio. Editar aqui reflete em todo o site.
export const PORTFOLIO_DATA = {
  meta: {
    title: "Lucas Novais de Oliveira - Portfólio Reflexivo",
    description:
      "Portfólio reflexivo de Lucas Novais de Oliveira, estudante de Tecnologia em Sistemas para Internet no IFSP Birigui.",
  },

  nav: {
    brand: { label: "Início", href: "#inicio" },
    projectsMenu: {
      label: "Projetos",
      links: [
        { label: "Portfólio WIX", href: "https://novaisoliveira2.wixsite.com/portfoliolucasnovais" },
        { label: "Portfólio BRIPRW1", href: "https://lucasnovais01.github.io/Portfolio-BRIPRW1/" },
        { label: "MEDINA", href: "https://novaisoliveira2.wixsite.com/asspcopialucasnovais" },
      ],
    },
    links: [
      { label: "Sobre", href: "#sobre" },
      { label: "TCC", href: "#projeto" },
      { label: "Skills", href: "#skills" },
      { label: "Contato", href: "#contato" },
    ],
  },

  sidebar: {
    eyebrow: "Portfólio reflexivo",
    name: "Lucas Novais de Oliveira",
    tagline: "Programador full-stack em formação",
    photo: {
      src: "./assets/img/lucas-novais.png",
      alt: "Foto de Lucas Novais de Oliveira",
    },
    badges: [
      "34 anos",
      "Funcionário público",
      "Cursando Tecnologia em Sistemas para Internet no Instituto Federal de São Paulo - Campus Birigui\nMatrícula: BI303268X",
    ],
    actions: [
      { label: "Ver projeto de TCC", href: "#projeto", variant: "primary" },
      { label: "Contato", href: "#contato", variant: "ghost" },
    ],
  },

  about: {
    eyebrow: "Quem sou eu",
    heading: "Sobre mim",
    paragraphs: [
      "Tenho 34 anos e sou aluno do curso de Tecnologia em Sistemas para Internet no IFSP Campus Birigui. Sou funcionário público e já possuo outra formação técnica em Administração pela Etec Centro  Paula Souza. Voltei a estudar por escolha pessoal, para aprofundar conhecimentos técnicos em uma área que genuinamente me interessa: programação.",
      "Essa maturidade profissional e pessoal influencia diretamente a forma como vivencio o curso. Trago uma régua de comparação construída a partir de outras experiências formativas e profissionais, o que me permite observar com mais clareza tanto os pontos fortes quanto as fragilidades do processo educacional, não com a intenção de julgar, mas de refletir criticamente, como este próprio instrumento de portfólio propõe.",
      "Sou programador full-stack. Fora do código, gosto de jogos, livros, filmes e cultura pop.",
    ],
  },

  project: {
    eyebrow: "Trabalho de Conclusão de Curso",
    heading: "Projeto em destaque",
    name: "CrowdAcadêmico",
    summary:
      "Plataforma de crowdfunding voltada especificamente para pesquisa científica brasileira. Conecta pesquisadores que precisam de financiamento a apoiadores dispostos a contribuir, com um sistema de reputação que dá credibilidade aos pesquisadores com base no histórico de campanhas, atualizações e engajamento acadêmico.",
    stack: ["PostgreSQL", "NestJS", "React", "Vite", "PL/pgSQL"],
    highlights: [
      {
        title: "39 tabelas normalizadas",
        description:
          "Banco de dados desenhado à mão, cobrindo o núcleo do sistema (usuários, campanhas, contribuições) e subsistemas completos de RBAC, moderação de conteúdo e recompensas.",
      },
      {
        title: "Motor de reputação",
        description:
          "Score do pesquisador calculado a partir de 4 dimensões: perfil acadêmico, histórico de campanhas, engajamento em atualizações e reputação.",
      },
      {
        title: "Autenticação própria",
        description:
          "O projeto começou com Supabase Auth, mas migrei para uma autenticação construída do zero no NestJS. Decisão deliberada para reduzir dependência de terceiros e manter portabilidade do banco.",
      },
      {
        title: "Defesa em profundidade",
        description:
          "Todas as tabelas usam Row Level Security (RLS) do PostgreSQL como camada adicional de segurança, além da autorização feita na aplicação.",
      },
      {
        title: "Regras de negócio no banco",
        description:
          "Triggers e funções em PL/pgSQL garantem integridade que uma constraint simples não cobre: limite de campanhas simultâneas por pesquisador, congelamento de regras financeiras após aprovação e recálculo de score em tempo real.",
      },
    ],
  },

  article: {
    eyebrow: "Trabalhos Desenvolvidos",
    heading: "Artigo científico",
    title: "Sistema de tutoria com inteligência artificial",
    description: "Artigo científico sobre o uso de inteligência artificial em sistemas de tutoria educacional.",
    href: null,
    pendingLabel: "Link em breve",
  },

  skills: {
    eyebrow: "Caixa de ferramentas",
    heading: "Skills",
    categories: [
      { name: "Backend", items: ["Node.js", "NestJS", "Autenticação & Segurança", "PL/pgSQL"] },
      { name: "Frontend", items: ["React", "Vite", "JavaScript", "HTML5 & CSS3"] },
      { name: "Banco de dados", items: ["PostgreSQL", "Modelagem de dados", "Row Level Security"] },
      { name: "Ferramentas", items: ["Git & GitHub", "VS Code"] },
    ],
  },

  interests: {
    eyebrow: "Fora do código",
    heading: "Interesses",
    items: [
      { icon: "🎮", label: "Jogos" },
      { icon: "📚", label: "Livros" },
      { icon: "🎬", label: "Filmes" },
      { icon: "🎌", label: "Animes & Mangás" },
    ],
  },

  contact: {
    eyebrow: "Vamos conversar",
    heading: "Contato",
    items: [
      { label: "E-mail", value: "novais.oliveira@aluno.ifsp.edu.br", href: "mailto:novais.oliveira@aluno.ifsp.edu.br" },
      { label: "Telefone", value: "(18) 99153-4544", href: "tel:+5518991534544", icon: "whatsapp" },
      { label: "GitHub", value: "github.com/lucasnovais01", href: "https://github.com/lucasnovais01", icon: "github" },
    ],
  },

  footer: {
    org: {
      name: "Instituto Federal de São Paulo Campus Birigui",
      href: "https://bri.ifsp.edu.br/",
      logo: { src: "./assets/img/ifsp-logo.svg", alt: "Logo do IFSP" },
    },
  },
};
