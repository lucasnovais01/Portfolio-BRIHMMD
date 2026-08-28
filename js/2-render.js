// Renderiza o conteúdo de js/1-data.js dentro dos containers definidos no index.html

// Ícones de marca (Simple Icons, licença CC0) usados no bloco de contato
const BRAND_ICON_PATHS = {
  whatsapp: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z",
  github: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
};

function brandIcon(name) {
  const d = BRAND_ICON_PATHS[name];
  if (!d) return "";
  return `<svg class="contact-icon contact-icon--${name}" viewBox="0 0 24 24" aria-hidden="true"><path d="${d}" /></svg>`;
}

function sectionHead(el, { eyebrow, heading }) {
  if (!el) return;
  el.innerHTML = `
    <span class="eyebrow">${eyebrow}</span>
    <h2>${heading}</h2>
  `;
}

function renderMeta({ meta }) {
  document.title = meta.title;
  document.querySelector('meta[name="description"]')?.setAttribute("content", meta.description);
}

function renderNav({ nav }) {
  const brand = document.getElementById("nav-brand");
  if (brand) {
    brand.textContent = nav.brand.label;
    brand.setAttribute("href", nav.brand.href);
  }

  const baseLinksHTML = nav.links.map((link) => `<li><a href="${link.href}">${link.label}</a></li>`).join("");

  const dropdownLinksHTML = nav.projectsMenu.links
    .map((link) => `<li><a href="${link.href}" target="_blank" rel="noopener">${link.label}</a></li>`)
    .join("");

  const dropdownHTML = `
    <li class="nav-dropdown" id="nav-projects">
      <button class="nav-dropdown-btn" id="nav-projects-btn" type="button" aria-expanded="false">
        ${nav.projectsMenu.label}
        <svg class="nav-dropdown-icon" viewBox="0 0 12 8" aria-hidden="true">
          <path d="M1 1l5 5 5-5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
      <ul class="nav-dropdown-menu" id="nav-projects-menu">${dropdownLinksHTML}</ul>
    </li>
  `;

  const navLinks = document.getElementById("nav-links");
  if (navLinks) navLinks.innerHTML = dropdownHTML + baseLinksHTML;

  const footerLinks = document.getElementById("footer-links");
  if (footerLinks) footerLinks.innerHTML = baseLinksHTML;
}

function renderIntro({ sidebar }) {
  const el = document.getElementById("intro");
  if (!el) return;

  el.innerHTML = `
    <p class="intro-title">${sidebar.eyebrow}</p>
    <h1 class="intro-name">${sidebar.name}</h1>
  `;
}

function renderSidebar({ sidebar }) {
  const el = document.getElementById("sidebar");
  if (!el) return;

  const badges = sidebar.badges.map((badge) => `<span class="badge">${badge}</span>`).join("");
  const actions = sidebar.actions
    .map(
      (action) =>
        `<a class="btn btn--${action.variant}" href="${action.href}">${action.label}</a>`
    )
    .join("");

  el.innerHTML = `
    <div class="sidebar-photo-wrap">
      <img class="sidebar-photo" src="${sidebar.photo.src}" alt="${sidebar.photo.alt}" />
    </div>
    <div class="sidebar-body">
      <span class="sidebar-eyebrow">${sidebar.eyebrow}</span>
      <p class="sidebar-name">${sidebar.name}</p>
      <p class="sidebar-tagline">${sidebar.tagline}</p>
      <div class="sidebar-badges">${badges}</div>
      <div class="sidebar-actions">${actions}</div>
    </div>
  `;
}

function renderTextSection(sectionKey, data) {
  const section = data[sectionKey];
  const head = document.getElementById(`${sectionKey}-head`);
  const body = document.getElementById(`${sectionKey}-body`);

  sectionHead(head, section);
  if (body) {
    body.innerHTML = section.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("");
  }
}

function renderProject({ project }) {
  sectionHead(document.getElementById("project-head"), project);

  const body = document.getElementById("project-body");
  if (!body) return;

  const stack = project.stack.map((item) => `<span class="tag">${item}</span>`).join("");
  const highlights = project.highlights
    .map(
      (item) => `
      <div class="card">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </div>`
    )
    .join("");

  body.innerHTML = `
    <div class="project-card__header">
      <h3 class="project-card__name">${project.name}</h3>
      <div class="grid--tags">${stack}</div>
    </div>
    <p class="project-card__summary">${project.summary}</p>
    <div class="grid grid--cards">${highlights}</div>
  `;
}

function renderArticle({ article }) {
  sectionHead(document.getElementById("article-head"), article);

  const body = document.getElementById("article-body");
  if (!body) return;

  const link = article.href
    ? `<a class="btn btn--primary" href="${article.href}" target="_blank" rel="noopener">Ler artigo</a>`
    : `<span class="badge">${article.pendingLabel}</span>`;

  body.innerHTML = `
    <div>
      <h3>${article.title}</h3>
      <p>${article.description}</p>
    </div>
    ${link}
  `;
}

function renderSkills({ skills }) {
  sectionHead(document.getElementById("skills-head"), skills);

  const body = document.getElementById("skills-body");
  if (!body) return;

  body.innerHTML = skills.categories
    .map(
      (category) => `
      <div class="card">
        <h3>${category.name}</h3>
        <div class="grid--tags">
          ${category.items
            .map((item) => `<a class="tag" href="${item.href}" target="_blank" rel="noopener">${item.label}</a>`)
            .join("")}
        </div>
      </div>`
    )
    .join("");
}

function renderInterests({ interests }) {
  sectionHead(document.getElementById("interests-head"), interests);

  const body = document.getElementById("interests-body");
  if (!body) return;

  body.innerHTML = interests.items
    .map((item) => `<span class="tag">${item.icon} ${item.label}</span>`)
    .join("");
}

function renderContact({ contact }) {
  sectionHead(document.getElementById("contact-head"), contact);

  const body = document.getElementById("contact-body");
  if (!body) return;

  body.innerHTML = contact.items
    .map((item) => {
      const value = item.href
        ? `<a href="${item.href}" target="_blank" rel="noopener">${item.value}</a>`
        : `<strong>${item.value}</strong>`;
      return `
      <div class="contact-item">
        <span class="contact-item__label">${brandIcon(item.icon)}${item.label}</span>
        ${value}
      </div>`;
    })
    .join("");
}

function renderFooter({ footer }) {
  const el = document.getElementById("footer-org");
  if (!el) return;

  el.setAttribute("href", footer.org.href);
  el.innerHTML = `
    <span class="footer-logo"><img src="${footer.org.logo.src}" alt="${footer.org.logo.alt}" /></span>
    <span>${footer.org.name}</span>
  `;
}

export function renderAll(data) {
  renderMeta(data);
  renderNav(data);
  renderIntro(data);
  renderSidebar(data);
  renderTextSection("about", data);
  renderArticle(data);
  renderProject(data);
  renderSkills(data);
  renderInterests(data);
  renderContact(data);
  renderFooter(data);
}
