// Conteúdo da página "Como este site foi feito" (tecnologias.html): tecnologias usadas e o tutorial
// com trechos do código. Fica separado do js/1-data.js, que guarda só o conteúdo do portfólio.
// Atenção: os trechos em "code" são cópias do código real; se mudar o código, atualize aqui também.
export const TUTORIAL_DATA = {
  backLabel: "← Voltar ao portfólio",
  eyebrow: "Bastidores",
  heading: "Como este site foi feito",
  intro: "Este portfólio é um site estático, sem frameworks pesados, pensado para carregar rápido e ser fácil de manter. Aqui está o que foi usado para construir e publicar ele.",
  categories: [
    {
      name: "Front-end",
      items: [
        {
          label: "HTML5",
          description: "Estrutura semântica, com papéis e atributos de acessibilidade (ARIA) para leitores de tela.",
        },
        {
          label: "CSS3",
          description: "Grid e Flexbox para o layout; variáveis (custom properties) e color-mix para cores, fontes e espaços; animações que respeitam a opção de reduzir movimento.",
        },
        {
          label: "JavaScript (ES Modules)",
          description: "Sem framework: o conteúdo fica separado em módulos e é montado no navegador a partir de um arquivo de dados.",
        },
      ],
    },
    {
      name: "Design e mídia",
      items: [
        {
          label: "Google Fonts",
          description: "Space Grotesk nos títulos e Inter no texto corrido.",
        },
        {
          label: "SVG inline",
          description: "Ícones de marca (Simple Icons, CC0) e o envelope (Material Icons, Apache 2.0) embutidos direto no código, sem imagens externas.",
        },
        {
          label: "YouTube",
          description: "Vídeos incorporados no próprio site, carregados só quando alguém clica para assistir.",
        },
      ],
    },
    {
      name: "Ferramentas e publicação",
      items: [
        {
          label: "VS Code + Live Server",
          description: "Editor de código e servidor local para testar o site enquanto ele é construído.",
        },
        {
          label: "Git & GitHub",
          description: "Versionamento e hospedagem do código-fonte.",
        },
        {
          label: "GitHub Pages",
          description: "Publicação do site, gratuita e direto do repositório.",
        },
        {
          label: "Assistência de IA",
          description: "Contei com ferramentas de IA generativa, como o Claude e outras integradas ao editor de código, para ajudar a escrever e organizar o código a partir do conteúdo e das decisões que eu defini.",
        },
      ],
    },
  ],
  tutorialEyebrow: "Na prática",
  tutorialHeading: "Técnicas usadas (com código de verdade)",
  tutorialIntro: "É um site simples de olhar, mas por baixo usa algumas técnicas que valem a pena explicar caso você queira montar algo parecido. Os passos seguem a ordem em que o site é construído, e os trechos são recortados exatamente do código deste portfólio.",
  steps: [
    {
      title: "Antes de tudo: como abrir o projeto no computador",
      description: "O JavaScript do site usa módulos (import/export), e o navegador bloqueia módulos abertos direto do disco (endereço file://): com dois cliques no index.html, a página aparece vazia. Por isso, abra sempre por um servidor local. O mais simples: no VS Code, instale a extensão Live Server, clique com o botão direito no index.html e escolha \"Open with Live Server\". Publicado no GitHub Pages, funciona normalmente.",
      files: [],
    },
    {
      title: "Arquivos numerados, um ponto de entrada só",
      description: "Cada pasta (css/ e js/) tem um arquivo 0 cuja única função é juntar os outros, numerados na ordem em que são carregados. O HTML referencia só esse arquivo 0 de cada pasta. No CSS a ordem importa: quando duas regras empatam, ganha a que vem depois.",
      files: [
        {
          path: "css/0-estilo.css",
          code: "@import \"./1-tokens.css\";\n@import \"./2-base.css\";\n@import \"./3-estrutura.css\";\n@import \"./4-componentes.css\";\n@import \"./5-secoes.css\";\n@import \"./6-animations.css\";\n@import \"./7-responsivo.css\";\n@import \"./8-modo-foco.css\";",
        },
        {
          path: "js/0-script.js",
          code: "import { PORTFOLIO_DATA } from \"./1-data.js\";\nimport { renderAll } from \"./2-render.js\";\nimport { initAnimations } from \"./3-animations.js\";\nimport { initNav } from \"./4-nav.js\";\nimport { initMedia } from \"./5-media.js\";\nimport { TUTORIAL_DATA } from \"./6-data-tutorial.js\";\nimport { initFocusMode } from \"./7-modo-foco.js\";\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  renderAll({ ...PORTFOLIO_DATA, makingOf: TUTORIAL_DATA });\n  initFocusMode(PORTFOLIO_DATA);\n  initAnimations();\n  initNav();\n  initMedia();\n});",
        },
      ],
    },
    {
      title: "Tokens: cores, fontes e espaços declarados uma única vez",
      description: "Nada de cor ou tamanho espalhado pelo CSS: tudo é uma variável no :root, e os outros arquivos usam var(--nome). As versões transparentes das cores são feitas com color-mix a partir das principais, então trocar --cor-roxo atualiza bordas, brilhos e até o fundo da página. Os espaços seguem tamanhos de roupa: PP, P, M, G, GG.",
      files: [
        {
          path: "css/1-tokens.css",
          code: "--cor-roxo: #7c5cff;\n--cor-ciano: #22d3ee;\n--cor-rosa: #ff5fa2;\n\n--cor-roxo-borda: color-mix(in srgb, var(--cor-roxo) 40%, transparent);      /* borda dos cards no hover */\n\n--espaco-pp: 8px;\n--espaco-p: 16px;\n--espaco-m: 28px;\n--espaco-g: 48px;\n--espaco-gg: 96px;",
        },
      ],
    },
    {
      title: "Conteúdo separado do HTML",
      description: "Nenhum texto fica escrito direto no HTML: o index.html só tem \"caixas\" vazias com um id. Cada seção existe como um objeto em js/1-data.js, e uma função lê esse objeto e monta o HTML na hora. Para editar qualquer texto, inclusive os lidos por leitor de tela, mexe-se só no arquivo de dados.",
      files: [
        {
          path: "index.html",
          code: "<section id=\"skills\">\n        <div class=\"secao-titulo\" id=\"skills-titulo\" data-reveal></div>\n        <div class=\"grade-cards\" id=\"skills-cards\" data-reveal></div>\n      </section>",
        },
        {
          path: "js/1-data.js",
          code: "skills: {\n  eyebrow: \"Caixa de ferramentas\",\n  heading: \"Skills\",\n  categories: [\n    {\n      name: \"Backend\",\n        ...",
        },
        {
          path: "js/2-render.js",
          code: "function renderSkills({ skills }) {\n  sectionHead(document.getElementById(\"skills-titulo\"), skills);\n\n  const body = document.getElementById(\"skills-cards\");\n  if (!body) return;\n\n  body.innerHTML = skills.categories\n    .map(\n      (category) => `\n      <div class=\"card card-flutua\">\n        <h3>${category.name}</h3>\n        <div class=\"lista-etiquetas lista-etiquetas-cheia\">\n          ${category.items\n            .map((item) => `<a class=\"etiqueta\" href=\"${item.href}\" target=\"_blank\" rel=\"noopener\">${item.label}</a>`)\n            .join(\"\")}\n        </div>\n      </div>`\n    )\n    .join(\"\");\n}",
        },
      ],
    },
    {
      title: "Layout de duas colunas só com CSS Grid",
      description: "A coluna da foto e o conteúdo saem de uma única regra de grid-template-columns. O position: sticky faz a coluna da foto acompanhar a rolagem. Em telas baixas, onde a coluna não cabe, um pequeno cálculo em JS ajusta o \"top\" para ela rolar junto até o fim aparecer e só então grudar, em vez de ganhar uma barra de rolagem própria.",
      files: [
        {
          path: "css/3-estrutura.css",
          code: ".pagina {\n  width: 100%;\n  max-width: var(--largura-site);\n  margin-inline: auto;\n  padding-inline: var(--espaco-p);\n  display: grid;\n  grid-template-columns: var(--largura-lateral) 1fr;\n  gap: var(--espaco-g);\n  align-items: start;\n}\n\n.lateral {\n  position: sticky;\n  top: calc(var(--altura-cabecalho) + var(--espaco-p));\n  display: flex;\n  flex-direction: column;\n}",
        },
        {
          path: "js/3-animations.js",
          code: "const adjust = () => {\n  // No tablet/celular a coluna não gruda (position: static): não há o que ajustar\n  if (getComputedStyle(sidebar).position !== \"sticky\") {\n    sidebar.style.top = \"\";\n    return;\n  }\n  const gap = parseFloat(getComputedStyle(document.documentElement).getPropertyValue(\"--espaco-p\"));\n  const normalTop = header.offsetHeight + gap;\n  const fittingTop = window.innerHeight - sidebar.offsetHeight - gap;\n  sidebar.style.top = fittingTop < normalTop ? `${fittingTop}px` : \"\";\n};",
        },
      ],
    },
    {
      title: "Componentes reutilizáveis com nomes em português",
      description: "Peças que aparecem em vários lugares viram classes curtas, combináveis no HTML: \"botao botao-principal\", \"card card-flutua\", \"etiqueta\". Uma delas, lista-etiquetas-cheia, faz as etiquetas dividirem a linha em partes iguais: flex: 1 1 0 divide o espaço, e min-width: max-content impede que alguma fique menor que o próprio texto.",
      files: [
        {
          path: "css/4-componentes.css",
          code: ".lista-etiquetas-cheia {\n  width: 100%;\n}\n\n.lista-etiquetas-cheia > .etiqueta {\n  flex: 1 1 0;\n  min-width: max-content;\n  justify-content: center;\n  padding-inline: 6px;\n}",
        },
      ],
    },
    {
      title: "Animações de entrada sem travar a rolagem",
      description: "Em vez de recalcular a posição de cada elemento a todo scroll (caro para o navegador), o IntersectionObserver avisa quando um elemento entra na tela, e só aí entra a classe que dispara a animação. Quem pediu ao sistema para reduzir movimento vê tudo direto, sem animação.",
      files: [
        {
          path: "js/3-animations.js",
          code: "const revealTargets = document.querySelectorAll(\"[data-reveal]\");\n\nconst observer = new IntersectionObserver(\n  (entries) => {\n    entries.forEach((entry) => {\n      if (entry.isIntersecting) {\n        entry.target.classList.add(\"visivel\");\n        observer.unobserve(entry.target);\n      }\n    });\n  },\n  { threshold: 0.15 }\n);\n\nrevealTargets.forEach((target) => observer.observe(target));",
        },
        {
          path: "css/6-animations.css",
          code: "[data-reveal] {\n  opacity: 0;\n  transform: translateY(24px);\n  transition: opacity var(--transicao-surgir), transform var(--transicao-surgir);\n}\n\n[data-reveal].visivel {\n  opacity: 1;\n  transform: translateY(0);\n}",
        },
      ],
    },
    {
      title: "Menu que mostra onde você está",
      description: "Ao rolar, o link da seção atual fica destacado no menu do topo (computador) e nas bolinhas da lateral (celular). A regra: a seção ativa é a última cujo topo já passou de 40% da altura da tela. requestAnimationFrame evita recalcular mais vezes do que a tela consegue desenhar.",
      files: [
        {
          path: "js/4-nav.js",
          code: "const update = () => {\n  const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;\n  const line = window.innerHeight * 0.4;\n  // Só seções visíveis (no modo foco, as seções da página ficam escondidas)\n  const visible = targets.filter((target) => target.section.getClientRects().length);\n  const passed = visible.filter((target) => target.section.getBoundingClientRect().top <= line);\n  const active = atBottom ? visible[visible.length - 1] : passed[passed.length - 1];\n  targets.forEach((target) => target.link.classList.toggle(\"ativo\", target === active));\n};\n\nlet ticking = false;\nwindow.addEventListener(\"scroll\", () => {\n  if (ticking) return;\n  ticking = true;\n  requestAnimationFrame(() => {\n    update();",
        },
      ],
    },
    {
      title: "Menu do celular acessível",
      description: "O botão hambúrguer não é só visual: ele atualiza aria-expanded para leitores de tela, e o menu fecha sozinho ao clicar fora dele, num link, ou apertando Esc.",
      files: [
        {
          path: "js/4-nav.js",
          code: "toggle.addEventListener(\"click\", (event) => {\n  event.stopPropagation();\n  const isOpen = header.classList.toggle(\"menu-aberto\");\n  toggle.setAttribute(\"aria-expanded\", String(isOpen));\n});\n\nnavLinks.addEventListener(\"click\", (event) => {\n  if (event.target.tagName === \"A\") close();\n});\n\ndocument.addEventListener(\"click\", (event) => {\n  if (!header.contains(event.target)) close();\n});\n\ndocument.addEventListener(\"keydown\", (event) => {\n  if (event.key === \"Escape\") close();\n});",
        },
      ],
    },
    {
      title: "Letra capitular e texto com gradiente, só com CSS",
      description: "O \"P\" grande no início não é imagem: é o pseudo-elemento ::first-letter, que estiliza só a primeira letra. O truque do gradiente dentro das letras é background-clip: text com a cor do texto transparente; como ele se repete (marca, nomes, TCC), virou a classe texto-gradiente.",
      files: [
        {
          path: "css/5-secoes.css",
          code: ".abertura-titulo::first-letter {\n  font-size: 2.4em;\n  font-weight: var(--peso-negrito);\n  background: var(--gradiente-principal);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n}",
        },
        {
          path: "css/4-componentes.css",
          code: ".texto-gradiente {\n  background-image: var(--gradiente-texto);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n}",
        },
      ],
    },
    {
      title: "Card que abre e fecha com animação (\"Sobre mim\")",
      description: "Animar a altura de um texto de tamanho desconhecido costuma ser difícil. O truque: o painel é um grid com uma linha de altura 0fr (fechado) que vira 1fr (aberto), e o navegador anima entre os dois. O título é um botão de verdade, com aria-expanded, para funcionar no teclado e no leitor de tela.",
      files: [
        {
          path: "css/5-secoes.css",
          code: ".recolhivel-painel {\n  display: grid;\n  grid-template-rows: 0fr;\n  opacity: 0;\n  transition: grid-template-rows var(--transicao-lenta), opacity var(--transicao-lenta);\n}\n\n.recolhivel-painel.aberto {\n  grid-template-rows: 1fr;\n  opacity: 1;\n}\n\n.recolhivel-interno {\n  min-height: 0;\n  overflow: hidden;\n}",
        },
        {
          path: "js/4-nav.js",
          code: "const isOpen = button.getAttribute(\"aria-expanded\") !== \"true\";\nbutton.setAttribute(\"aria-expanded\", String(isOpen));\ncard.classList.toggle(\"aberto\", isOpen); // para o brilho do card (ver LUZES QUE CONVIDAM AO CLIQUE em 4-componentes.css)\npanel.classList.toggle(\"aberto\", isOpen);",
        },
      ],
    },
    {
      title: "Luz que convida ao clique",
      description: "As laterais do card \"Sobre mim\" e o botão do rodapé têm uma luz que acende e apaga devagar. Ela é uma camada (::before) do tamanho do elemento, com o mesmo arredondamento, desenhada com sombras internas (inset): por isso acompanha a curva dos cantos. A animação só muda a opacidade, e para quando o card é aberto.",
      files: [
        {
          path: "css/4-componentes.css",
          code: ".luz-lateral::before {\n  content: \"\";\n  position: absolute;\n  inset: -1px; /* cobre a borda de 1px do card: a luz encosta na lateral */\n  border-radius: inherit;\n  pointer-events: none;\n  box-shadow:\n    inset 3px 0 0 0 var(--cor-ciano),\n    inset -3px 0 0 0 var(--cor-ciano),\n    inset 10px 0 12px -6px color-mix(in srgb, var(--cor-roxo) 80%, transparent),\n    inset -10px 0 12px -6px color-mix(in srgb, var(--cor-roxo) 80%, transparent);\n  animation: luz-respirando 5s ease-in-out infinite;\n  transition: opacity var(--transicao-lenta), box-shadow var(--transicao);\n}\n\n@keyframes luz-respirando {\n  0%,\n  100% {\n    opacity: 0.25;\n  }\n\n  50% {\n    opacity: 1;\n  }\n}",
        },
      ],
    },
    {
      title: "Tooltip que acompanha o mouse",
      description: "O JS só informa ao CSS onde está o mouse, em duas variáveis (--dica-x e --dica-y). O próprio CSS posiciona o tooltip, que é um pseudo-elemento (::after) cujo texto vem de um atributo data-dica. Funciona em qualquer elemento com a classe com-dica.",
      files: [
        {
          path: "js/4-nav.js",
          code: "el.addEventListener(\"mousemove\", (event) => {\n  const rect = el.getBoundingClientRect();\n  el.style.setProperty(\"--dica-x\", `${event.clientX - rect.left}px`);\n  el.style.setProperty(\"--dica-y\", `${event.clientY - rect.top}px`);\n  el.classList.add(\"dica-no-mouse\");\n});",
        },
        {
          path: "css/4-componentes.css",
          code: ".com-dica.dica-no-mouse::after {\n  left: var(--dica-x);\n  top: var(--dica-y);\n  bottom: auto;\n  right: auto;\n  transform: translate(calc(-100% - var(--espaco-pp)), calc(-100% - var(--espaco-pp)));\n}",
        },
      ],
    },
    {
      title: "Abas que mostram um conteúdo por vez",
      description: "As provas e trabalhos ficam em abas: só o painel da aba selecionada aparece (atributo hidden), sempre no mesmo espaço. Os papéis role=\"tab\" e role=\"tabpanel\" e o aria-selected fazem o leitor de tela entender a estrutura; as setas do teclado também trocam de aba. Ao sair de uma aba, o vídeo dela para.",
      files: [
        {
          path: "js/4-nav.js",
          code: "const select = (tab) => {\n  tabs.forEach((other) => {\n    const isSelected = other === tab;\n    other.setAttribute(\"aria-selected\", String(isSelected));\n    other.tabIndex = isSelected ? 0 : -1;\n    const panel = document.getElementById(other.getAttribute(\"aria-controls\"));\n    if (!panel) return;\n    panel.hidden = !isSelected;\n    if (!isSelected) stopVideos(panel);\n  });\n};",
        },
      ],
    },
    {
      title: "Modo foco: uma página própria sem sair da página única",
      description: "Pelo menu Projetos > Atividades, cada trabalho abre sozinho na tela, com o vídeo grande, como se fosse uma página própria. Quem decide o que aparece é o endereço: #atividade/audio mostra o Áudio. Por isso o botão Voltar do navegador funciona e dá para mandar o link direto de um trabalho. Ao entrar, uma classe no <body> esconde o resto da página; o vídeo e a descrição são os mesmos das abas, reaproveitados sem copiar código. Tudo fica em arquivos próprios (js/7-modo-foco.js e css/8-modo-foco.css).",
      files: [
        {
          path: "js/7-modo-foco.js",
          code: "const ROUTE = \"#atividade/\";\n\nconst id = location.hash.startsWith(ROUTE) ? location.hash.slice(ROUTE.length) : null;\nconst panel = id && area.querySelector(`[data-atividade=\"${id}\"]`);\nconst wasFocused = document.body.classList.contains(\"em-modo-foco\");\n\ndocument.body.classList.toggle(\"em-modo-foco\", Boolean(panel));\narea.hidden = !panel;\n\nwindow.addEventListener(\"hashchange\", show);",
        },
        {
          path: "css/8-modo-foco.css",
          code: ".em-modo-foco .pagina,\n.em-modo-foco .bolinhas {\n  display: none;\n}",
        },
      ],
    },
    {
      title: "Vídeo do YouTube tocando dentro do site",
      description: "Basta colar o link normal do vídeo nos dados. O site mostra a capa (thumbnail) do próprio YouTube com um botão de play, e só cria o player (iframe) no clique: assim a página não carrega o YouTube até alguém querer assistir. O player usa o domínio youtube-nocookie.com, sem cookies de rastreamento.",
      files: [
        {
          path: "js/5-media.js",
          code: "export const youtubeThumbnail = (id, quality = \"maxresdefault\") => `https://i.ytimg.com/vi/${id}/${quality}.jpg`;\nconst youtubeEmbed = (id) => `https://www.youtube-nocookie.com/embed/${id}`;\n\nconst iframe = document.createElement(\"iframe\");\niframe.className = \"video-player\";\niframe.src = `${youtubeEmbed(videoId)}?${params}`;\niframe.title = videoTitle;\niframe.allow = \"autoplay; encrypted-media; picture-in-picture; fullscreen\";\niframe.allowFullscreen = true;\niframe.referrerPolicy = \"strict-origin-when-cross-origin\";\n\nvideo.querySelector(\".video-capa\").hidden = true;\nvideo.append(iframe);",
        },
      ],
    },
    {
      title: "Roteiro com tempos clicáveis",
      description: "Na descrição do vídeo, cada bloco do roteiro tem um botão com o tempo (ex.: 0:07). O texto \"0:07\" vira segundos, e o clique recria o player começando naquele ponto.",
      files: [
        {
          path: "js/2-render.js",
          code: "function toSeconds(time) {\n  return time.split(\":\").reduce((total, part) => total * 60 + Number(part), 0);\n}",
        },
        {
          path: "js/5-media.js",
          code: "  document.querySelectorAll(\"[data-seek]\").forEach((button) => {\n    button.addEventListener(\"click\", () => {\n      const video = button.closest(\".aba-painel\")?.querySelector(\".video\");\n      if (!video) return;\n      play(video, button.dataset.seek);\n      video.scrollIntoView({ behavior: \"smooth\", block: \"nearest\" });\n    });\n  });\n}",
        },
      ],
    },
    {
      title: "Texto justificado sem buracos",
      description: "Os parágrafos ficam alinhados dos dois lados, como o \"Justificar\" do Word. Para não abrir buracos entre as palavras em telas estreitas, hyphens: auto quebra palavras longas com hífen; isso funciona em português porque o <html> tem lang=\"pt-BR\".",
      files: [
        {
          path: "css/4-componentes.css",
          code: ".texto-justificado p,\n.texto-justificado blockquote {\n  text-align: justify;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}",
        },
      ],
    },
    {
      title: "Ajustes para o celular",
      description: "Todas as regras de tela pequena ficam num arquivo só, por largura (tablet até 860px, celular até 640px). Um exemplo: no celular, a descrição do vídeo mostra só o começo, sumindo num degradê feito com mask-image, e um botão \"Ler mais\" abre o resto.",
      files: [
        {
          path: "css/7-responsivo.css",
          code: ".aba-descricao {\n  height: auto;\n  max-height: 180px;\n  overflow: hidden;\n  -webkit-mask-image: linear-gradient(var(--cor-preto) 50%, transparent);\n  mask-image: linear-gradient(var(--cor-preto) 50%, transparent);\n}\n\n.aba-descricao.expandida {\n  max-height: none;\n  -webkit-mask-image: none;\n  mask-image: none;\n}",
        },
      ],
    },
  ]
};
