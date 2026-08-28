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

// Bolinhas de navegação rápida (mobile): destaca a seção visível na tela
function initDotNav() {
  const dotNav = document.getElementById("dot-nav");
  if (!dotNav) return;

  const dots = Array.from(dotNav.querySelectorAll("a"));
  const sections = dots
    .map((dot) => document.querySelector(dot.getAttribute("href")))
    .filter(Boolean);
  if (!sections.length) return;

  const setActive = (id) => {
    dots.forEach((dot) => dot.classList.toggle("is-active", dot.getAttribute("href").endsWith(`#${id}`)));
  };

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries.find((entry) => entry.isIntersecting);
      if (visible) setActive(visible.target.id);
    },
    { rootMargin: "-40% 0px -40% 0px" }
  );

  sections.forEach((section) => observer.observe(section));
}

export function initNav() {
  initProjectsDropdown();
  initMobileMenu();
  initDotNav();
}
