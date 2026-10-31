import { youtubeThumbnail } from "./5-media.js";

// Renderiza o conteúdo de js/1-data.js dentro dos containers definidos no index.html

// Ícones usados nos contatos: marcas (Simple Icons, licença CC0) e envelope (Material Icons, licença Apache 2.0)
const BRAND_ICON_PATHS = {
  whatsapp: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z",
  github: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
  email: "M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z",
};

function brandIcon(name) {
  const d = BRAND_ICON_PATHS[name];
  if (!d) return "";
  return `<svg class="contato-icone contato-icone-${name}" viewBox="0 0 24 24" aria-hidden="true"><path d="${d}" /></svg>`;
}

// Escapa código antes de jogar dentro de <pre><code>, senão tags e templates do próprio JS quebram o HTML
function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// A coluna da foto (#lateral) só existe na página inicial: usamos isso para saber se os links
// de âncora (#sobre, #projeto...) precisam apontar de volta pra index.html
export function homePrefix() {
  return document.getElementById("lateral") ? "" : "./index.html";
}

// Coloca o HTML dentro do elemento com esse id (se ele existir nesta página)
function setHTML(id, html) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = html;
}

// Monta uma lista de HTML: um pedaço para cada item
const list = (items, template) => items.map(template).join("");

// Título de seção: sobretítulo pequeno + título grande (+ parágrafo de introdução, se houver)
function sectionHead(id, { eyebrow, heading, intro }) {
  setHTML(
    id,
    `
    <span class="sobretitulo">${eyebrow}</span>
    <h2>${heading}</h2>
    ${intro ? `<p>${intro}</p>` : ""}
  `
  );
}

function renderMeta({ meta, makingOf }) {
  const onMakingOfPage = document.getElementById("bastidores-titulo") !== null;
  document.title = onMakingOfPage ? `${makingOf.heading} - ${meta.title}` : meta.title;
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute("content", onMakingOfPage ? makingOf.intro : meta.description);
}

function renderNav({ nav }) {
  const prefix = homePrefix();

  const brand = document.getElementById("menu-marca");
  if (brand) {
    brand.textContent = nav.brand.label;
    brand.setAttribute("href", `${prefix}${nav.brand.href}`);
  }
  document.getElementById("menu-hamburguer")?.setAttribute("aria-label", nav.menuButtonLabel);

  const baseLinksHTML = list(nav.links, (link) => `<li><a href="${prefix}${link.href}">${link.label}</a></li>`);
  const dropdownLinksHTML = list(
    nav.projectsMenu.links,
    (link) => `<li><a href="${link.href}" target="_blank" rel="noopener">${link.label}</a></li>`
  );

  setHTML(
    "menu-links",
    `
    <li class="menu-projetos" id="menu-projetos">
      <button class="menu-projetos-botao" id="menu-projetos-botao" type="button" aria-expanded="false">
        ${nav.projectsMenu.label}
        <svg class="menu-projetos-seta" viewBox="0 0 12 8" aria-hidden="true">
          <path d="M1 1l5 5 5-5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
      <ul class="menu-projetos-lista" id="menu-projetos-lista">${dropdownLinksHTML}</ul>
    </li>
    ${baseLinksHTML}
  `
  );
  setHTML("rodape-links", baseLinksHTML);
}

function renderIntro({ sidebar }) {
  setHTML(
    "abertura",
    `
    <p class="abertura-titulo">${sidebar.eyebrow}</p>
    <h1 class="abertura-nome texto-gradiente">${sidebar.name}</h1>
  `
  );
}

function renderSidebar({ sidebar, contact }) {
  // Contatos vêm da seção "Contato" do js/1-data.js (mudou lá, muda aqui também)
  const contacts = list(contact.items, (item) => {
    const content = `${brandIcon(item.sidebarIcon ?? item.icon)}<span>${item.value}</span>`;
    return item.href
      ? `<a class="selo lateral-contato" href="${item.href}" target="_blank" rel="noopener">${content}</a>`
      : `<span class="selo lateral-contato">${content}</span>`;
  });
  const badges = list(sidebar.badges, (badge) => `<span class="selo">${badge}</span>`);
  const actions = list(
    sidebar.actions,
    (action) => `<a class="botao botao-${action.variant}" href="${action.href}">${action.label}</a>`
  );

  setHTML(
    "lateral",
    `
    <div class="lateral-foto-moldura">
      <img class="lateral-foto" src="${sidebar.photo.src}" alt="${sidebar.photo.alt}" />
    </div>
    <div class="lateral-corpo">
      <span class="lateral-sobretitulo">${sidebar.eyebrow}</span>
      <p class="lateral-nome texto-gradiente">${sidebar.name}</p>
      <p class="lateral-frase">${sidebar.tagline}</p>
      <div class="lateral-selos">${contacts}${badges}</div>
      <div class="lateral-botoes">${actions}</div>
    </div>
  `
  );
}

// "Sobre mim": o título é um botão que abre/fecha o texto (o painel #sobre-painel fica no index.html)
function renderAbout({ about }) {
  setHTML(
    "sobre-titulo",
    `
    <span class="sobretitulo">${about.eyebrow}</span>
    <h2>
      <button class="card-recolhivel-botao" type="button" aria-expanded="false" aria-controls="sobre-painel">
        ${about.heading}
      </button>
    </h2>
  `
  );
  setHTML("sobre-texto", list(about.paragraphs, (paragraph) => `<p>${paragraph}</p>`));

  // Textos do tooltip (classe com-dica): um para o card fechado, outro para o aberto
  const card = document.querySelector(".card-recolhivel");
  card?.setAttribute("data-dica", about.tooltip.closed);
  card?.setAttribute("data-dica-aberto", about.tooltip.open);
}

function renderProject({ project }) {
  sectionHead("projeto-titulo", project);

  const stack = list(project.stack, (item) => `<span class="etiqueta">${item}</span>`);
  const highlights = list(
    project.highlights,
    (item) => `
      <div class="card card-flutua">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </div>`
  );

  setHTML(
    "projeto-card",
    `
    <div class="card-projeto-topo">
      <h3 class="card-projeto-nome texto-gradiente">${project.name}</h3>
      <div class="lista-etiquetas lista-etiquetas-cheia">${stack}</div>
    </div>
    <p class="card-projeto-resumo">${project.summary}</p>
    <div class="grade-cards">${highlights}</div>
  `
  );
}

function renderArticle({ article }) {
  sectionHead("artigo-titulo", article);

  const link = article.href
    ? `<a class="botao botao-principal" href="${article.href}" target="_blank" rel="noopener">${article.linkLabel}</a>`
    : `<span class="selo">${article.pendingLabel}</span>`;

  setHTML(
    "artigo-card",
    `
    <div>
      <h3>${article.title}</h3>
      <p>${article.description}</p>
    </div>
    ${link}
  `
  );
}

function renderSkills({ skills }) {
  sectionHead("skills-titulo", skills);
  setHTML(
    "skills-cards",
    list(
      skills.categories,
      (category) => `
      <div class="card card-flutua">
        <h3>${category.name}</h3>
        <div class="lista-etiquetas lista-etiquetas-cheia">
          ${list(category.items, (item) => `<a class="etiqueta" href="${item.href}" target="_blank" rel="noopener">${item.label}</a>`)}
        </div>
      </div>`
    )
  );
}

function renderInterests({ interests }) {
  sectionHead("interesses-titulo", interests);
  setHTML("interesses-etiquetas", list(interests.items, (item) => `<span class="etiqueta">${item.icon} ${item.label}</span>`));
}

function renderContact({ contact }) {
  sectionHead("contato-titulo", contact);
  setHTML(
    "contato-itens",
    list(contact.items, (item) => {
      const value = item.href
        ? `<a href="${item.href}" target="_blank" rel="noopener">${item.value}</a>`
        : `<strong>${item.value}</strong>`;
      return `
      <div class="contato">
        <span class="contato-rotulo">${brandIcon(item.icon)}${item.label}</span>
        ${value}
      </div>`;
    })
  );
}

function renderFooter({ footer }) {
  setHTML(
    "rodape-instituicao",
    `
    <span class="rodape-logo"><img src="${footer.org.logo.src}" alt="${footer.org.logo.alt}" /></span>
    <span>${footer.org.name}</span>
  `
  );
  document.getElementById("rodape-instituicao")?.setAttribute("href", footer.org.href);

  const cta = document.getElementById("rodape-botao");
  if (cta) {
    cta.setAttribute("href", footer.cta.href);
    cta.setAttribute("data-dica", footer.cta.tooltip);
    cta.textContent = footer.cta.label;
  }
}

function renderMakingOf({ makingOf }) {
  const back = document.getElementById("voltar-botao");
  if (back) back.textContent = makingOf.backLabel;

  sectionHead("bastidores-titulo", makingOf);
  setHTML(
    "bastidores-cards",
    list(
      makingOf.categories,
      (category) => `
      <div class="card card-flutua">
        <h3>${category.name}</h3>
        ${list(category.items, (item) => `<p><strong>${item.label}:</strong> ${item.description}</p>`)}
      </div>`
    )
  );

  sectionHead("tutorial-titulo", {
    eyebrow: makingOf.tutorialEyebrow,
    heading: makingOf.tutorialHeading,
    intro: makingOf.tutorialIntro,
  });
  setHTML(
    "tutorial-passos",
    list(
      makingOf.steps,
      (step) => `
      <article class="passo-tutorial" data-reveal>
        <h3>${step.title}</h3>
        <p>${step.description}</p>
        ${list(
          step.files,
          (file) => `
          <div class="bloco-codigo">
            <span class="bloco-codigo-arquivo">${file.path}</span>
            <pre><code>${escapeHtml(file.code)}</code></pre>
          </div>`
        )}
      </article>`
    )
  );
}

function renderDotNav({ nav }) {
  const prefix = homePrefix();
  document.getElementById("bolinhas")?.setAttribute("aria-label", nav.quickLinksLabel);
  setHTML(
    "bolinhas",
    list(
      nav.quickLinks,
      (link) => `<a href="${prefix}${link.href}" aria-label="${link.label}"><span class="bolinha-rotulo">${link.label}</span></a>`
    )
  );
}

// Extrai o ID e o tempo inicial (&t=1s) de links watch?v=..., youtu.be/... ou /embed/...
function parseYouTube(url) {
  const parsed = new URL(url);
  const id = parsed.hostname.includes("youtu.be")
    ? parsed.pathname.slice(1)
    : parsed.searchParams.get("v") ?? parsed.pathname.split("/").pop();
  const start = parseInt(parsed.searchParams.get("t") ?? parsed.searchParams.get("start") ?? "0", 10) || 0;
  return { id, start };
}

// Capa com a thumbnail do próprio YouTube + botão de play. O player (iframe) só é criado
// no clique (ver js/5-media.js): a página não carrega o YouTube até alguém querer assistir
function youtubePlayer(item, labels) {
  const { id, start } = parseYouTube(item.youtube);
  return `
    <div class="video" data-video-id="${id}" data-video-start="${start}" data-video-title="${item.title}">
      <button class="video-capa" type="button" aria-label="${labels.playLabel}: ${item.title}">
        <img class="video-thumbnail" src="${youtubeThumbnail(id)}" alt="" loading="lazy" />
        <span class="video-thumbnail-titulo">${item.title}</span>
        <span class="botao-play botao-play-youtube" aria-hidden="true">
          <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
        </span>
      </button>
    </div>`;
}

// Mídia de cada item: player na própria página quando há youtube/src, senão botão de link.
// preload="none" evita baixar o áudio antes de o visitante dar play
function mediaItem(item, labels) {
  const player = item.youtube
    ? youtubePlayer(item, labels)
    : item.src
      ? `<audio controls preload="none" src="${item.src}"></audio>`
      : "";
  const link = item.href
    ? `<a class="botao botao-contorno" href="${item.href}" target="_blank" rel="noopener">${labels.openLabel}</a>`
    : "";

  return `
    <div class="card card-flutua item-midia">
      ${player}
      <h3>${item.title}</h3>
      ${typeof item.description === "string" ? `<p>${item.description}</p>` : ""}
      ${link}
    </div>`;
}

// Transforma links https://... do texto em <a> (o ponto final da frase fica fora do link)
function linkify(text) {
  return text.replace(
    /https?:\/\/[^\s]+?(?=[.,;:]?(\s|$))/g,
    (url) => `<a href="${url}" target="_blank" rel="noopener">${url}</a>`
  );
}

// "0:07" → 7 segundos (usado pelos botões de tempo do roteiro)
function toSeconds(time) {
  return time.split(":").reduce((total, part) => total * 60 + Number(part), 0);
}

// Descrição embaixo do vídeo: título, referência, campos, roteiro com tempos, seções e créditos
function renderDescription(description, labels) {
  if (!description) return "";
  if (typeof description === "string") return `<p>${linkify(description)}</p>`;

  const { heading, reference, fields = [], timelineTitle, timeline = [], sections = [], credits = [], team } = description;
  const creditList = (items) => list(items, (item) => `<div><dt>${item.label}</dt><dd>${item.value}</dd></div>`);

  const timelineHTML = timeline.length
    ? `
      <div class="descricao-bloco">
        ${timelineTitle ? `<h4>${timelineTitle}</h4>` : ""}
        <ol class="roteiro">
          ${list(
            timeline,
            (step) => `
            <li class="roteiro-item">
              <button class="roteiro-tempo" type="button" data-seek="${toSeconds(step.start)}"
                aria-label="${labels.seekLabel} ${step.start}">${step.start}${step.end ? ` - ${step.end}` : ""}</button>
              <div>
                <strong>${step.label}</strong>
                ${step.quote ? `<blockquote>${step.quote}</blockquote>` : ""}
                ${step.text ? `<p>${step.text}</p>` : ""}
              </div>
            </li>`
          )}
        </ol>
      </div>`
    : "";

  return `
    ${heading ? `<h3 class="texto-gradiente">${heading}</h3>` : ""}
    ${reference ? `<p class="descricao-referencia">${linkify(reference)}</p>` : ""}
    ${list(fields, (field) => `<p><strong>${field.label}:</strong> ${linkify(field.text)}</p>`)}
    ${timelineHTML}
    ${list(
      sections,
      (section) => `
      <div class="descricao-bloco">
        <h4>${section.title}</h4>
        ${list(section.paragraphs, (paragraph) => `<p>${linkify(paragraph)}</p>`)}
      </div>`
    )}
    ${credits.length ? `<dl class="descricao-creditos">${creditList(credits)}</dl>` : ""}
    ${
      team
        ? `<p class="descricao-equipe">${team.title}</p>
          <dl class="descricao-creditos descricao-creditos-equipe">${creditList(team.members)}</dl>`
        : ""
    }
  `;
}

// Toda aba tem as mesmas duas áreas de tamanho fixo: mídia (16:9) em cima e descrição embaixo.
// Um único vídeo ocupa a área de mídia inteira e a descrição dele vai embaixo;
// vários itens viram uma grade de cards (cada um com a própria descrição curta)
// labels = textos da seção (multimedia no js/1-data.js): botões, "Ler mais" e textos para leitor de tela
export function panelContent(items, labels) {
  const single = items.length === 1 && items[0].youtube ? items[0] : null;
  const media = single
    ? youtubePlayer(single, labels)
    : items.length
      ? `<div class="grade-cards aba-grade">${list(items, (item) => mediaItem(item, labels))}</div>`
      : "";

  const hasDescription = Boolean(single?.description);
  const readMoreButton = hasDescription
    ? `<button class="botao botao-contorno aba-ler-mais" type="button" aria-expanded="false"
        data-texto-fechado="${labels.readMore.closed}" data-texto-aberto="${labels.readMore.open}">${labels.readMore.closed}</button>`
    : "";

  return `
    <div class="aba-midia">${media}</div>
    <div class="aba-descricao">${hasDescription ? renderDescription(single.description, labels) : ""}</div>
    ${readMoreButton}
  `;
}

// Abas: cada categoria tem um botão e um painel; só o painel selecionado fica visível
// (a troca é feita por initTabs em js/4-nav.js). A primeira aba começa selecionada
function renderMultimedia({ multimedia }) {
  sectionHead("trabalhos-titulo", multimedia);

  document.getElementById("trabalhos-abas")?.setAttribute("aria-label", multimedia.intro);
  setHTML(
    "trabalhos-abas",
    list(
      multimedia.categories,
      (category, index) => `
        <button class="etiqueta aba" type="button" role="tab" id="aba-${category.id}"
          aria-controls="painel-${category.id}" aria-selected="${index === 0}" tabindex="${index === 0 ? 0 : -1}">
          ${category.name}
        </button>`
    )
  );

  setHTML(
    "trabalhos-conteudo",
    list(
      multimedia.categories,
      (category, index) => `
      <div class="aba-painel" role="tabpanel" id="painel-${category.id}" aria-labelledby="aba-${category.id}"
        tabindex="0" ${index === 0 ? "" : "hidden"}>
        ${panelContent(category.items, multimedia)}
      </div>`
    )
  );
}

export function renderAll(data) {
  renderMeta(data);
  renderNav(data);
  renderDotNav(data);
  renderIntro(data);
  renderSidebar(data);
  renderAbout(data);
  renderMultimedia(data);
  renderArticle(data);
  renderProject(data);
  renderSkills(data);
  renderInterests(data);
  renderContact(data);
  renderFooter(data);
  renderMakingOf(data);
}
