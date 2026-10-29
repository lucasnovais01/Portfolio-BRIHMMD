import { stopVideos } from "./5-media.js";

// Comportamento do menu dropdown "Projetos" no cabeçalho
function initProjectsDropdown() {
  const dropdown = document.getElementById("nav-projects");
  const button = document.getElementById("nav-projects-btn");
  if (!dropdown || !button) return;

  const close = () => {
    dropdown.classList.remove("is-open");
    button.setAttribute("aria-expanded", "false");
  };

  button.addEventListener("click", (event) => {
    event.stopPropagation();
    const isOpen = dropdown.classList.toggle("is-open");
    button.setAttribute("aria-expanded", String(isOpen));
  });

  document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target)) close();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") close();
  });
}

// Botão hambúrguer: abre/fecha o menu completo no mobile
function initMobileMenu() {
  const header = document.getElementById("site-header");
  const toggle = document.getElementById("nav-toggle");
  const navLinks = document.getElementById("nav-links");
  if (!header || !toggle || !navLinks) return;

  const close = () => {
    header.classList.remove("nav-open");
    toggle.setAttribute("aria-expanded", "false");
  };

  toggle.addEventListener("click", (event) => {
    event.stopPropagation();
    const isOpen = header.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.addEventListener("click", (event) => {
    if (event.target.tagName === "A") close();
  });

  document.addEventListener("click", (event) => {
    if (!header.contains(event.target)) close();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") close();
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
    const passed = targets.filter((target) => target.section.getBoundingClientRect().top <= line);
    const active = atBottom ? targets[targets.length - 1] : passed[passed.length - 1];
    targets.forEach((target) => target.link.classList.toggle("is-active", target === active));
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

  initScrollSpy(anchorLinks("#dot-nav a"));
  initScrollSpy(anchorLinks("#nav-links > li > a"));
}

// Seções recolhíveis ("Sobre mim"): clicar em qualquer parte do card abre/fecha o texto
function initCollapsibles() {
  document.querySelectorAll(".section-toggle").forEach((button) => {
    const card = button.closest(".toggle-card");
    const panel = document.getElementById(button.getAttribute("aria-controls"));
    if (!card || !panel) return;

    card.addEventListener("click", () => {
      // Não fecha o card se a pessoa estiver só selecionando um trecho do texto
      if (window.getSelection()?.toString()) return;

      const isOpen = button.getAttribute("aria-expanded") !== "true";
      button.setAttribute("aria-expanded", String(isOpen));
      card.classList.toggle("is-open", isOpen);
      panel.classList.toggle("is-open", isOpen);
    });
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

export function initNav() {
  initTabs();
  initCollapsibles();
  initProjectsDropdown();
  initMobileMenu();
  initSectionHighlight();
}
