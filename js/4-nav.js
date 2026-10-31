import { stopVideos } from "./5-media.js";

// Abre/fecha um menu: o botão alterna a classe no "box" e atualiza aria-expanded (para leitores
// de tela); o menu fecha sozinho ao clicar fora dele ou apertar Esc. Devolve a função que fecha
function initToggleMenu(box, button, openClass) {
  if (!box || !button) return null;

  const close = () => {
    box.classList.remove(openClass);
    button.setAttribute("aria-expanded", "false");
  };

  button.addEventListener("click", (event) => {
    event.stopPropagation();
    const isOpen = box.classList.toggle(openClass);
    button.setAttribute("aria-expanded", String(isOpen));
  });

  document.addEventListener("click", (event) => {
    if (!box.contains(event.target)) close();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") close();
  });

  return close;
}

// Menu "Projetos" (lista que abre embaixo do botão) e menu do celular (botão hambúrguer).
// No celular, o menu também fecha ao tocar num link
function initMenus() {
  const byId = (id) => document.getElementById(id);
  initToggleMenu(byId("menu-projetos"), byId("menu-projetos-botao"), "aberto");

  const closeMobileMenu = initToggleMenu(byId("cabecalho"), byId("menu-hamburguer"), "menu-aberto");
  byId("menu-links")?.addEventListener("click", (event) => {
    if (event.target.tagName === "A") closeMobileMenu?.();
  });
}

// Destaca a seção atual em um grupo de links: o ativo é o último alvo cujo topo
// já passou de 40% da tela (no fim da página, o último alvo do grupo)
function initScrollSpy(links) {
  const targets = links
    .map((link) => ({ link, section: document.getElementById(link.hash.slice(1)) }))
    .filter((target) => target.section);
  if (!targets.length) return;

  const update = () => {
    const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
    const line = window.innerHeight * 0.4;
    // Só seções visíveis (no modo foco, as seções da página ficam escondidas)
    const visible = targets.filter((target) => target.section.getClientRects().length);
    const passed = visible.filter((target) => target.section.getBoundingClientRect().top <= line);
    const active = atBottom ? visible[visible.length - 1] : passed[passed.length - 1];
    targets.forEach((target) => target.link.classList.toggle("ativo", target === active));
  };

  let ticking = false;
  window.addEventListener("scroll", () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      update();
      ticking = false;
    });
  });
  update();
}

// Bolinhas (mobile/tablet) e menu do topo (desktop) destacam a seção visível.
// Só links de âncora da própria página: em tecnologias.html eles apontam para index.html
function initSectionHighlight() {
  const anchorLinks = (selector) =>
    Array.from(document.querySelectorAll(selector)).filter((link) => link.getAttribute("href").startsWith("#"));

  initScrollSpy(anchorLinks("#bolinhas a"));
  initScrollSpy(anchorLinks("#menu-links > li > a"));
}

// Seções recolhíveis ("Sobre mim"): clicar em qualquer parte do card abre/fecha o texto
function initCollapsibles() {
  document.querySelectorAll(".card-recolhivel-botao").forEach((button) => {
    const card = button.closest(".card-recolhivel");
    const panel = document.getElementById(button.getAttribute("aria-controls"));
    if (!card || !panel) return;

    card.addEventListener("click", () => {
      // Não fecha o card se a pessoa estiver só selecionando um trecho do texto
      if (window.getSelection()?.toString()) return;

      const isOpen = button.getAttribute("aria-expanded") !== "true";
      button.setAttribute("aria-expanded", String(isOpen));
      card.classList.toggle("aberto", isOpen); // para o brilho do card (ver LUZES QUE CONVIDAM AO CLIQUE em 4-componentes.css)
      panel.classList.toggle("aberto", isOpen);
    });
  });
}

// Tooltip que acompanha o mouse (classe "com-dica", ver 4-componentes.css): passa a posição
// do mouse dentro do elemento para o CSS (--dica-x / --dica-y). Sem mouse (teclado), fica no canto
function initTooltips() {
  document.querySelectorAll(".com-dica").forEach((el) => {
    el.addEventListener("mousemove", (event) => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--dica-x", `${event.clientX - rect.left}px`);
      el.style.setProperty("--dica-y", `${event.clientY - rect.top}px`);
      el.classList.add("dica-no-mouse");
    });

    el.addEventListener("mouseleave", () => el.classList.remove("dica-no-mouse"));
  });
}

// Abas de "Provas e trabalhos": mostra só o painel da aba selecionada.
// Setas ←/→ (e Home/End) trocam de aba pelo teclado, como no padrão de abas do WAI-ARIA
function initTabs() {
  document.querySelectorAll('[role="tablist"]').forEach((tablist) => {
    const tabs = Array.from(tablist.querySelectorAll('[role="tab"]'));

    const select = (tab) => {
      tabs.forEach((other) => {
        const isSelected = other === tab;
        other.setAttribute("aria-selected", String(isSelected));
        other.tabIndex = isSelected ? 0 : -1;
        const panel = document.getElementById(other.getAttribute("aria-controls"));
        if (!panel) return;
        panel.hidden = !isSelected;
        if (!isSelected) stopVideos(panel);
      });
    };

    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => select(tab));
      tab.addEventListener("keydown", (event) => {
        const moves = { ArrowRight: index + 1, ArrowLeft: index - 1, Home: 0, End: tabs.length - 1 };
        if (!(event.key in moves)) return;
        event.preventDefault();
        const next = tabs[(moves[event.key] + tabs.length) % tabs.length];
        select(next);
        next.focus();
      });
    });
  });
}

// "Ler mais" da descrição do vídeo (só aparece no celular, ver 7-responsivo.css): abre e fecha
// a descrição. Ao recolher, rola a tela de volta para o começo da descrição
function initReadMore() {
  document.querySelectorAll(".aba-ler-mais").forEach((button) => {
    const description = button.previousElementSibling;
    if (!description) return;

    button.addEventListener("click", () => {
      const isOpen = button.getAttribute("aria-expanded") !== "true";
      button.setAttribute("aria-expanded", String(isOpen));
      button.textContent = isOpen ? button.dataset.textoAberto : button.dataset.textoFechado;
      description.classList.toggle("expandida", isOpen);
      if (!isOpen) description.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  });
}

export function initNav() {
  initTabs();
  initReadMore();
  initTooltips();
  initCollapsibles();
  initMenus();
  initSectionHighlight();
}
