// Modo foco: abre um trabalho (Áudio, Vídeo IFSP...) sozinho na tela, como uma página própria,
// mas sem sair da página única. O endereço muda para #atividade/<id> (ex.: #atividade/audio):
// assim o botão Voltar do navegador funciona e dá para mandar o link direto de um trabalho.
// Visual em css/8-modo-foco.css. Textos em focusMode, no js/1-data.js
import { homePrefix, panelContent } from "./2-render.js";
import { stopVideos } from "./5-media.js";

const ROUTE = "#atividade/";

// Submenu "Atividades" dentro do menu Projetos, com um link para cada trabalho
function renderSubmenu(multimedia) {
  const list = document.getElementById("menu-projetos-lista");
  if (!list) return;

  const links = multimedia.categories
    .map((category) => `<li><a href="${homePrefix()}${ROUTE}${category.id}">${category.name}</a></li>`)
    .join("");

  list.insertAdjacentHTML(
    "beforeend",
    `<li>
      <button class="menu-atividades-botao" type="button" aria-expanded="false">${multimedia.focusMode.menuLabel}</button>
      <ul class="menu-atividades-lista" hidden>${links}</ul>
    </li>`
  );

  const button = list.querySelector(".menu-atividades-botao");
  const submenu = list.querySelector(".menu-atividades-lista");
  button.addEventListener("click", () => {
    submenu.hidden = !submenu.hidden;
    button.setAttribute("aria-expanded", String(!submenu.hidden));
  });
}

// Área do modo foco: um painel para cada trabalho, todos escondidos até serem abertos
function renderFocusArea(multimedia) {
  const page = document.querySelector(".pagina");
  if (!page) return null;

  const panels = multimedia.categories
    .map(
      (category) => `
      <div class="aba-painel" data-atividade="${category.id}" hidden>
        <div class="secao-titulo">
          <span class="sobretitulo">${multimedia.heading}</span>
          <h2>${category.name}</h2>
        </div>
        <div class="card abas-conteudo">${panelContent(category.items, multimedia)}</div>
      </div>`
    )
    .join("");

  page.insertAdjacentHTML(
    "afterend",
    `<section class="container modo-foco" id="modo-foco" hidden>
      <a class="botao botao-contorno modo-foco-voltar" href="${multimedia.focusMode.backHref}">${multimedia.focusMode.backLabel}</a>
      ${panels}
    </section>`
  );
  return document.getElementById("modo-foco");
}

export function initFocusMode({ multimedia }) {
  renderSubmenu(multimedia);
  const area = renderFocusArea(multimedia);
  if (!area) return;

  const show = () => {
    const id = location.hash.startsWith(ROUTE) ? location.hash.slice(ROUTE.length) : null;
    const panel = id && area.querySelector(`[data-atividade="${id}"]`);
    const wasFocused = document.body.classList.contains("em-modo-foco");

    document.body.classList.toggle("em-modo-foco", Boolean(panel));
    area.hidden = !panel;
    area.querySelectorAll("[data-atividade]").forEach((item) => {
      item.hidden = item !== panel;
      if (item !== panel) stopVideos(item);
    });

    if (panel) {
      stopVideos(document.querySelector(".pagina")); // o vídeo da página, se estiver tocando
      document.body.click(); // fecha os menus abertos
      window.scrollTo(0, 0);
    } else if (wasFocused) {
      // Saindo do modo foco para uma seção (ex.: #multimidia): rola até ela, agora visível
      document.getElementById(location.hash.slice(1))?.scrollIntoView();
    }
  };

  window.addEventListener("hashchange", show);
  show();
}
