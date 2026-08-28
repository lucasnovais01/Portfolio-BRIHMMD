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
      "Cursando Tecnologia em Sistemas para Internet no Instituto Federal de São Paulo\nIFSP - Campus Birigui\nMatrícula: BI303268X",
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
      "Tenho 34 anos e sou aluno do curso de Tecnologia em Sistemas para Internet no IFSP Campus Birigui. Sou funcionário público e já possuo outra formação técnica em Administração pela Etec Centro  Paula Souza. Voltei a estudar por escolha pessoal, para aprofundar conhecimentos técnicos em uma área que genuinamente me interessa: A programação.",
      "Essa maturidade profissional e pessoal influencia diretamente a forma como vivencio o curso. Trago uma régua de comparação construída a partir de outras experiências formativas e profissionais, o que me permite observar com mais clareza tanto os pontos fortes quanto as fragilidades do processo educacional, não com a intenção de julgar, mas de refletir criticamente, como este próprio instrumento de portfólio propõe.",
      "Estou me formando como programador full-stack. Fora do código, encontro equilíbrio em jogos, livros, filmes e na cultura pop em geral. São interesses que me acompanham há anos e que, de certa forma, também influenciam a forma como penso e resolvo problemas.",
    ],
  },

  project: {
    eyebrow: "Trabalho de Conclusão de Curso",
    heading: "Projeto em destaque",
    name: "CrowdAcadêmico",
    summary:
      "Plataforma de crowdfunding voltada especificamente para pesquisa científica brasileira. Conecta pesquisadores que precisam de financiamento a apoiadores dispostos a contribuir, com um sistema de reputação que dá credibilidade aos pesquisadores com base no histórico na plataforma, atualizações e engajamento acadêmico.",
    stack: ["PostgreSQL", "NestJS", "React", "Vite", "PL/pgSQL"],
    highlights: [
      {
        title: "42 tabelas normalizadas",
        description:
          "Banco de dados desenhado à mão, cobrindo o núcleo do sistema (usuários, campanhas, contribuições) e subsistemas completos de RBAC, moderação de conteúdo e recompensas.",
      },
      {
        title: "Motor de reputação",
        description:
          "Score do pesquisador calculado a partir de 4 dimensões: perfil acadêmico, histórico na plataforma, engajamento em atualizações e reputação da comunidade (baseada no histórico de denúncias).",
      },
      {
        title: "Autenticação própria",
        description:
          "O projeto começou com Supabase Auth, mas migramos para uma autenticação construída do zero no NestJS. Decisão deliberada para reduzir dependência de terceiros e manter portabilidade do banco.",
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
      {
        title: "Equipe",
        description:
          "Trabalho de Conclusão de Curso desenvolvido em dupla com a aluna Alexia Eduarda Celice Ferreira (Matrícula: BI3032272), sob orientação do Prof. Dr. Rogério Pinto Alexandre.",
      },
    ],
  },

  article: {
    eyebrow: "Trabalhos Desenvolvidos",
    heading: "Artigo científico",
    title: "Sistema de Tutoria Inteligente (STI) e Agentes Conversacionais na Educação",
    description: "Artigo científico sobre o uso de inteligência artificial na Educação para personalizar o aprendizado e dar feedback em tempo real aos alunos.",
    href: "https://drive.google.com/file/d/1ukJRUhwa6_i1PajEJlR639xAFosxTYuq/view?usp=sharing",
    pendingLabel: "Link em breve",
  },

  skills: {
    eyebrow: "Caixa de ferramentas",
    heading: "Skills",
    categories: [
      {
        name: "Backend",
        items: [
          { label: "Node.js", href: "https://developer.mozilla.org/pt-BR/docs/Glossary/Node.js" },
          { label: "NestJS", href: "https://docs.nestjs.com/" },
          { label: "Autenticação & Segurança", href: "https://developer.mozilla.org/pt-BR/docs/Web/Security" },
          { label: "PL/pgSQL", href: "https://www.postgresql.org/docs/current/plpgsql.html" },
        ],
      },
      {
        name: "Frontend",
        items: [
          { label: "React", href: "https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Core/Frameworks_libraries/React_getting_started" },
          { label: "Vite", href: "https://vite.dev/" },
          { label: "JavaScript", href: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" },
          { label: "HTML5", href: "https://developer.mozilla.org/pt-BR/docs/Web/HTML" },
          { label: "CSS3", href: "https://developer.mozilla.org/pt-BR/docs/Web/CSS" },
        ],
      },
      {
        name: "Banco de dados",
        items: [
          { label: "PostgreSQL", href: "https://www.postgresql.org/docs/" },
          { label: "MySQL", href: "https://dev.mysql.com/doc/" },
          { label: "Oracle", href: "https://docs.oracle.com/en/database/oracle/oracle-database/" },
          { label: "Modelagem de dados", href: "https://pt.wikipedia.org/wiki/Modelagem_de_dados" },
          { label: "Row Level Security", href: "https://www.postgresql.org/docs/current/ddl-rowsecurity.html" },
        ],
      },
      {
        name: "Ferramentas",
        items: [
          { label: "Git", href: "https://git-scm.com/book/pt-br/v2" },
          { label: "GitHub", href: "https://docs.github.com/pt" },
          { label: "VS Code", href: "https://code.visualstudio.com/docs" },
        ],
      },
    ],
  },

  interests: {
    eyebrow: "Fora do código",
    heading: "Interesses",
    items: [
      { icon: "📚", label: "Livros" },
      { icon: "🎬", label: "Filmes" },
      { icon: "🎮", label: "Jogos" },
      { icon: "🎵", label: "Música" },
      { icon: "✨", label: "Cultura Pop" },
    ],
  },

  contact: {
    eyebrow: "Vamos conversar",
    heading: "Contato",
    items: [
      { label: "E-mail", value: "novais.oliveira@aluno.ifsp.edu.br" },
      { label: "Telefone", value: "(18) 99153-4544", icon: "whatsapp" },
      { label: "GitHub", value: "github.com/lucasnovais01", href: "https://github.com/lucasnovais01", icon: "github" },
    ],
  },

  footer: {
    org: {
      name: "Instituto Federal de São Paulo Campus Birigui",
      href: "https://bri.ifsp.edu.br/",
      logo: { src: "./assets/img/ifsp-logo.svg", alt: "Logo do IFSP" },
    },
    cta: { label: "Como este site foi feito", href: "./tecnologias.html" },
  },

  makingOf: {
    eyebrow: "Bastidores",
    heading: "Como este site foi feito",
    intro:
      "Este portfólio é um site estático, sem frameworks pesados, pensado para carregar rápido e ser fácil de manter. Aqui está o que foi usado para construir e publicar ele.",
    categories: [
      {
        name: "Front-end",
        items: [
          { label: "HTML5", description: "Estrutura semântica de uma página única." },
          { label: "CSS3", description: "Grid e Flexbox para o layout, com variáveis (custom properties) fazendo o papel de constantes de cor, fonte e espaçamento." },
          { label: "JavaScript (ES Modules)", description: "Sem framework: o conteúdo fica separado em módulos e é renderizado dinamicamente no navegador a partir de um único arquivo de dados." },
        ],
      },
      {
        name: "Design",
        items: [
          { label: "Google Fonts", description: "Space Grotesk nos títulos e Inter no texto corrido." },
          { label: "SVG inline", description: "Ícones de marca (Simple Icons, licença CC0) embutidos direto no código, sem depender de imagens externas." },
        ],
      },
      {
        name: "Ferramentas e publicação",
        items: [
          { label: "Git & GitHub", description: "Versionamento e hospedagem do código-fonte." },
          { label: "GitHub Pages", description: "Publicação do site, gratuita e direto do repositório." },
          { label: "Assistência de IA", description: "Contei com ferramentas de IA generativa, como o Claude e outras integradas ao editor de código, para ajudar a escrever e organizar o código a partir do conteúdo e das decisões que eu defini." },
        ],
      },
    ],
  },
};
