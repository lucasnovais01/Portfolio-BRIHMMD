// Fonte única de conteúdo do portfólio. Editar aqui reflete em todo o site.
export const PORTFOLIO_DATA = {
  meta: {
    title: "Lucas Novais de Oliveira - Portfólio Reflexivo",
    description:
      "Portfólio reflexivo de Lucas Novais de Oliveira, estudante de Tecnologia em Sistemas para Internet no IFSP Birigui.",
  },

  nav: {
    brand: { label: "Início", href: "#inicio" },
    // Textos lidos por leitor de tela (não aparecem na tela)
    menuButtonLabel: "Abrir menu",
    quickLinksLabel: "Navegação rápida entre seções",
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
      { label: "Trabalhos", href: "#multimidia" },
      { label: "TCC", href: "#projeto" },
      { label: "Skills", href: "#skills" },
      { label: "Contato", href: "#contato" },
    ],
    // Bolinhas de navegação rápida (lateral direita): mais detalhadas que o menu do topo
    quickLinks: [
      { label: "Sobre", href: "#sobre" },
      { label: "Hipermídia e Multimídia", href: "#multimidia" },
      { label: "Artigo científico", href: "#artigo" },
      { label: "TCC", href: "#projeto" },
      { label: "Skills", href: "#skills" },
      { label: "Interesses", href: "#interesses" },
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
      "Cursando Tecnologia em Sistemas para Internet no Instituto Federal de São Paulo\nIFSP - Campus Birigui\nMatrícula: BI303268X",
    ],
    actions: [
      { label: "Ver projeto de TCC", href: "#projeto", variant: "principal" },
      { label: "Ver trabalhos", href: "#multimidia", variant: "contorno" },
    ],
  },

  about: {
    eyebrow: "Quem sou eu",
    heading: "Sobre mim",
    // Tooltip que aparece ao passar o mouse no card (só em computador)
    tooltip: { closed: "Clique para ler", open: "Clique para recolher" },
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
    stack: ["PostgreSQL", "NestJS", "React", "Vite"],
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

  // Trabalhos da disciplina BRIHMMD, exibidos em abas: só a aba selecionada aparece,
  // sempre no mesmo espaço (a primeira começa aberta). Campos de cada item: title, description e
  // - YouTube: "youtube" com o link normal do vídeo (watch?v=..., youtu.be/...): mostra a thumbnail
  //   e toca dentro do site ao clicar. Com um único item, o vídeo ocupa a aba inteira
  // - áudio: "src" (ex.: ./assets/audio/arquivo.mp3) toca na página; ou "href" para link externo
  // - jogo:  "href" com o link jogável (itch.io, GitHub Pages...)
  multimedia: {
    eyebrow: "Trabalhos Desenvolvidos",
    heading: "Hipermídia E Multimídia (BRIHMMD)",
    intro: "Provas e trabalhos",
    // Modo foco: item "Atividades" no menu Projetos, que abre cada trabalho sozinho na tela (js/7-modo-foco.js)
    focusMode: { menuLabel: "Atividades", backLabel: "← Voltar ao portfólio", backHref: "#multimidia" },
    // Botão que abre/fecha a descrição do vídeo (só aparece no celular)
    readMore: { closed: "Ler mais", open: "Ler menos" },
    // Botão dos itens que abrem em outra aba (ex.: jogos)
    openLabel: "Abrir",
    // Textos lidos por leitor de tela: "Reproduzir: <título do vídeo>" e "Tocar a partir de 0:07"
    playLabel: "Reproduzir",
    seekLabel: "Tocar a partir de",
    categories: [
      {
        id: "audio",
        name: "Áudio",
        items: [
          {
            title: "Trabalho áudio 1 - BRIHMMD - IFSP Campus Birigui",
            youtube: "https://www.youtube.com/watch?v=1yj_0FQEiC8&t=1s",
            // Descrição exibida embaixo do vídeo (ver renderDescription em js/2-render.js).
            // Todos os campos são opcionais; links https://... viram clicáveis automaticamente
            description: {
              heading: "Discord",
              reference:
                "DISCORD Inc. Discord: sua vaga para conversar e passar o tempo. São Francisco, c2026. Disponível em: https://discord.com/. Acesso em: 17 set. 2026.",
              fields: [
                {
                  label: "Público-alvo",
                  text: "Qualquer pessoa, de todas idades que queira se comunicar pela internet. O Discord é mais popular com a geração mais jovem, de 15 a 35 anos.",
                },
                { label: "Objetivo", text: "Mostrar as funcionalidades e vantagens perante a concorrência." },
              ],
              // "start" e "end" no formato m:ss. Clicar no tempo toca o vídeo a partir dali
              timelineTitle: "Roteiro (começo a falar nos 07 segundos do clipe)",
              timeline: [
                {
                  start: "0:00",
                  end: "0:07",
                  label: "Bloco 01 - Introdução",
                  text: "0 até 6 segundos, sons de notificação do Discord. Logo em seguida, no 0:06, começa a tocar Retro - Wayne Jones.mp3 no fundo, e a música vai seguir até 0:59.",
                },
                {
                  start: "0:07",
                  end: "0:19",
                  label: "Bloco 02",
                  quote: "Você quer conversar com alguém pela internet? E não quer sofrer para isto? No Discord, você pode conversar diretamente com as pessoas, não é obrigatório criar conta e é possível utilizar diretamente do browser de qualquer lugar.",
                },
                {
                  start: "0:19",
                  end: "0:25",
                  label: "Bloco 03",
                  quote: "Sem burocracia, sem lentidão ou quedas. A melhor ferramenta de comunicação na internet e de graça.",
                },
                {
                  start: "0:25",
                  end: "0:31",
                  label: "Bloco 04",
                  quote: "Não perca seu tempo e paciência com a burocracia do Google Meet, Skype, Teamspeak.",
                },
                {
                  start: "0:31",
                  end: "0:38",
                  label: "Bloco 05",
                  quote: "Aqui, você pode até mesmo entrar ou criar um servidor, encontra as pessoas que quer, e quando vc quiser.",
                },
                {
                  start: "0:38",
                  end: "0:50",
                  label: "Bloco 06",
                  quote: "Sem anúncios, e multiplataforma, compatível com computador, tablet e celular. Com cancelamento de ruído automático e otimizado para todo tipo de conexão.",
                },
                {
                  start: "0:50",
                  end: "0:57",
                  label: "Bloco 07",
                  quote: "Texto, voz, imagens, vídeo e compartilhamento de tela, tudo no mesmo lugar.",
                },
              ],
              sections: [
                {
                  title: "Efeitos e músicas utilizadas",
                  paragraphs: [
                    "Utilizei os efeitos do próprio Discord: começo com a ligação, o som de notificação de entrando na sala, e no final o som de notificação de saindo da sala.",
                  ],
                },
                {
                  title: "Produção",
                  paragraphs: [
                    "O áudio foi gravado utilizando a ferramenta de gravação do Windows mesmo. Tentei editar com o Audacity, mas não ficou bom. Depois tentei utilizar o site Auphonic, e também não ficou bom, e o Auphonic coloca propaganda no final do seu áudio e aumenta muito o volume.",
                    "Quem mais me ajudou a controlar os ruídos foi o https://podcast.adobe.com/, ferramenta gratuita, e depois utilizei o CapCut para juntar música, frases e notificações em uma coisa só. Controlando o som individualmente de cada um, e colocando efeitos, como por exemplo o fadeout na música no final. Controle de som e equalizando a música para ela terminar com aquele toque dos 55 segundos.",
                  ],
                },
              ],
              credits: [
                { label: "Professor", value: "Renato Correia de Barros" },
                { label: "Disciplina", value: "Hipermídia e Multimídia" },
                { label: "Aluno", value: "Lucas Novais de Oliveira" },
                { label: "Matrícula", value: "BI303268X" },
              ],
            },
          },
        ],
      },
      {
        id: "video-ifsp",
        name: "Vídeo: IFSP",
        items: [
          {
            title: "Trabalho vídeo IFSP - BRIHMMD - IFSP Campus Birigui",
            youtube: "https://www.youtube.com/watch?v=YL1yWVcCnt8",
            description: {
              heading: "Cursos do IFSP",
              sections: [
                {
                  title: "Cursos apresentados",
                  paragraphs: [
                    "Técnico em Administração: Ana Claudia Bansi (ana_bansi@ifsp.edu.br).",
                    "Técnico em Comércio Integrado ao Ensino Médio na Modalidade de Educação de Jovens e Adultos (EJA): Prof. Ma. Joyce Helena Ferreira dos Santos (joyce.helena@ifsp.edu.br).",
                  ],
                },
                {
                  title: "Produção",
                  paragraphs: [
                    "O vídeo foi feito em grupo, por mim e pela Alexia Eduarda. A principal ferramenta utilizada foi o CapCut, com fotos do IFSP e fotos que nós mesmos tiramos com nossos celulares, com a permissão dos professores. Conforme solicitado pela atividade, foram usados IA (inteligência artificial), tanto para gerar imagens quanto para dar movimento/animá-las.",
                    "As fotos principais do campus foram retiradas do Tour Virtual do IFSP Campus Birigui: https://bri.ifsp.edu.br/index.php/informativos/3896-tour-virtual-ifsp-campus-birigui.",
                  ],
                },
              ],
              credits: [
                { label: "Professor", value: "Renato Correia de Barros" },
                { label: "Disciplina", value: "Hipermídia e Multimídia" },
              ],
              // Trabalho em grupo: integrantes listados abaixo dos créditos
              team: {
                title: "Equipe",
                members: [
                  { label: "Aluno", value: "Lucas Novais de Oliveira" },
                  { label: "Matrícula", value: "BI303268X" },
                  { label: "Aluna", value: "Alexia Eduarda Celice Ferreira" },
                  { label: "Matrícula", value: "BI3032272" },
                ],
              },
            },
          },
        ],
      },
      {
        id: "video-tema-livre",
        name: "Vídeo: Tema Livre",
        items: [
          {
            title: "Entre Páginas & Pixels",
            youtube: "https://www.youtube.com/watch?v=y8txYWmMFXo",
            description: {
              heading: "Entre Páginas & Pixels",
              fields: [{ label: "Tema", text: "Livre." }],
              sections: [
                {
                  title: "Enredo / Sinopse",
                  paragraphs: [
                    "EDITAR: blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá.",
                  ],
                },
                {
                  title: "Produção",
                  paragraphs: [
                    "O vídeo foi feito em grupo, por mim e pela Alexia Eduarda. A principal ferramenta de edição utilizada foi o DaVinci Resolve.",
                    "As cenas foram gravadas com Chroma Key (fundo verde), na sala de Multimídia do IFSP, usando a câmera da própria sala, com o auxílio do professor Renato.",
                  ],
                },
              ],
              credits: [
                { label: "Professor", value: "Renato Correia de Barros" },
                { label: "Disciplina", value: "Hipermídia e Multimídia" },
              ],
              team: {
                title: "Equipe",
                members: [
                  { label: "Aluno", value: "Lucas Novais de Oliveira" },
                  { label: "Matrícula", value: "BI303268X" },
                  { label: "Aluna", value: "Alexia Eduarda Celice Ferreira" },
                  { label: "Matrícula", value: "BI3032272" },
                ],
              },
            },
          },
        ],
      },
      { id: "jogos", name: "Jogos", items: [] },
    ],
  },

  article: {
    eyebrow: "Trabalhos Desenvolvidos",
    heading: "Artigo científico",
    title: "Sistema de Tutoria Inteligente (STI) e Agentes Conversacionais na Educação",
    description: "Artigo científico sobre o uso de inteligência artificial na Educação para personalizar o aprendizado e dar feedback em tempo real aos alunos.",
    href: "https://drive.google.com/file/d/1ukJRUhwa6_i1PajEJlR639xAFosxTYuq/view?usp=sharing",
    linkLabel: "Ler artigo",
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
      // sidebarIcon: ícone só na coluna da foto; na seção Contato o e-mail fica sem ícone
      { label: "E-mail", value: "novais.oliveira@aluno.ifsp.edu.br", sidebarIcon: "email" },
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
    // tooltip: dica que aparece ao passar o mouse no botão (só em computador)
    cta: { label: "Como este site foi feito", href: "./tecnologias.html", tooltip: "Clique para ver os bastidores" },
  },
};
