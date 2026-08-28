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
    tutorialEyebrow: "Na prática",
    tutorialHeading: "Técnicas usadas (com código de verdade)",
    tutorialIntro:
      "É um site simples de olhar, mas por baixo usa algumas técnicas que valem a pena explicar caso você queira montar algo parecido. Os trechos abaixo são exatamente o código deste portfólio, só que resumidos.",
    steps: [
      {
        title: "Tokens de design em vez de valores soltos",
        description:
          "Cor, fonte e espaçamento não ficam espalhados pelo CSS. Tudo é uma variável (custom property) declarada uma única vez no :root. Pra mudar a paleta do site inteiro, troco um valor aqui em vez de caçar cada cor usada.",
        files: [
          {
            path: "css/1-tokens.css",
            code: ":root {\n  --font-display: \"Space Grotesk\", system-ui, sans-serif;\n  --font-body: \"Inter\", system-ui, sans-serif;\n\n  --color-primary: #7c5cff;\n  --color-secondary: #22d3ee;\n  --color-bg: #0a0e17;\n\n  --space-sm: 1rem;\n  --space-md: 1.75rem;\n  --radius-md: 16px;\n}",
          },
        ],
      },
      {
        title: "Layout de duas colunas só com CSS Grid",
        description:
          "A coluna lateral fixa e o conteúdo que rola por baixo saem de uma única regra de grid-template-columns, sem float nem position: absolute. O position: sticky faz a coluna acompanhar a rolagem da página.",
        files: [
          {
            path: "css/3-layout.css",
            code: ".page {\n  display: grid;\n  grid-template-columns: var(--sidebar-width) 1fr;\n  gap: var(--space-lg);\n  align-items: start;\n}\n\n.sidebar {\n  position: sticky;\n  top: calc(var(--header-height) + var(--space-sm));\n}",
          },
        ],
      },
      {
        title: "Conteúdo separado do HTML",
        description:
          "Nenhum texto fica escrito direto no HTML. Cada seção existe como um objeto de dados; uma função lê esse objeto e monta o HTML na hora, no navegador. Pra editar qualquer texto do site, eu mexo só no arquivo de dados, nunca no HTML.",
        files: [
          {
            path: "js/1-data.js",
            code: "skills: {\n  categories: [\n    {\n      name: \"Frontend\",\n      items: [\n        { label: \"React\", href: \"https://react.dev/\" },\n      ],\n    },\n  ],\n},",
          },
          {
            path: "js/2-render.js",
            code: "function renderSkills({ skills }) {\n  const body = document.getElementById(\"skills-body\");\n  body.innerHTML = skills.categories\n    .map(\n      (category) => `\n      <div class=\"card\">\n        <h3>${category.name}</h3>\n        ${category.items\n          .map((item) => `<a class=\"tag\" href=\"${item.href}\">${item.label}</a>`)\n          .join(\"\")}\n      </div>`\n    )\n    .join(\"\");\n}",
          },
        ],
      },
      {
        title: "Animações de entrada sem travar a rolagem",
        description:
          "Em vez de recalcular a posição de cada elemento a todo scroll (caro pro navegador), uso o IntersectionObserver: o próprio navegador avisa quando um elemento entra na tela, e só aí eu adiciono a classe que dispara a animação.",
        files: [
          {
            path: "js/3-animations.js",
            code: "export function initAnimations() {\n  const revealTargets = document.querySelectorAll(\"[data-reveal]\");\n\n  const observer = new IntersectionObserver((entries) => {\n    entries.forEach((entry) => {\n      if (entry.isIntersecting) {\n        entry.target.classList.add(\"is-visible\");\n        observer.unobserve(entry.target);\n      }\n    });\n  }, { threshold: 0.15 });\n\n  revealTargets.forEach((target) => observer.observe(target));\n}",
          },
        ],
      },
      {
        title: "Menu mobile acessível",
        description:
          "O botão hambúrguer não é só visual: ele atualiza aria-expanded pra leitores de tela e o menu fecha sozinho ao clicar fora dele, num link, ou apertando Esc.",
        files: [
          {
            path: "js/4-nav.js",
            code: "toggle.addEventListener(\"click\", (event) => {\n  event.stopPropagation();\n  const isOpen = header.classList.toggle(\"nav-open\");\n  toggle.setAttribute(\"aria-expanded\", String(isOpen));\n});\n\ndocument.addEventListener(\"click\", (event) => {\n  if (!header.contains(event.target)) close();\n});\n\ndocument.addEventListener(\"keydown\", (event) => {\n  if (event.key === \"Escape\") close();\n});",
          },
        ],
      },
      {
        title: "Letra capitular só com CSS",
        description:
          "O \"P\" grande no início da página não é imagem nem fonte especial: é o pseudo-elemento ::first-letter, que estiliza só o primeiro caractere de um texto.",
        files: [
          {
            path: "css/4-components.css",
            code: ".intro-title::first-letter {\n  font-size: 2.4em;\n  font-weight: var(--fw-bold);\n  background: var(--gradient-primary);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n}",
          },
        ],
      },
      {
        title: "Arquivos numerados, um ponto de entrada só",
        description:
          "Cada pasta (css/ e js/) tem um arquivo 0 cuja única função é importar os outros, numerados na ordem que fizer sentido carregar. O HTML referencia só esse arquivo 0 de cada pasta, e a ordem de carregamento fica explícita no nome de cada um.",
        files: [
          {
            path: "css/0-style.css",
            code: "@import \"./1-tokens.css\";\n@import \"./2-reset.css\";\n@import \"./3-layout.css\";\n@import \"./4-components.css\";\n@import \"./5-animations.css\";\n@import \"./6-responsive.css\";",
          },
          {
            path: "js/0-script.js",
            code: "import { PORTFOLIO_DATA } from \"./1-data.js\";\nimport { renderAll } from \"./2-render.js\";\nimport { initAnimations } from \"./3-animations.js\";\nimport { initNav } from \"./4-nav.js\";\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  renderAll(PORTFOLIO_DATA);\n  initAnimations();\n  initNav();\n});",
          },
        ],
      },
    ],
  },
};
