// Coluna da foto mais alta que a tela (notebooks, telas baixas): em vez de ganhar uma barra de
// rolagem própria, ela rola junto com a página até o fim dela aparecer e só então gruda.
// Isso é feito com um "top" negativo no position: sticky. Se ela couber na tela, nada muda.
function initStickySidebar() {
  const sidebar = document.getElementById("lateral");
  const header = document.getElementById("cabecalho");
  if (!sidebar || !header) return;

  const adjust = () => {
    // No tablet/celular a coluna não gruda (position: static): não há o que ajustar
    if (getComputedStyle(sidebar).position !== "sticky") {
      sidebar.style.top = "";
      return;
    }
    const gap = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--espaco-p"));
    const normalTop = header.offsetHeight + gap;
    const fittingTop = window.innerHeight - sidebar.offsetHeight - gap;
    sidebar.style.top = fittingTop < normalTop ? `${fittingTop}px` : "";
  };

  adjust();
  window.addEventListener("resize", adjust);
  // A foto e as fontes carregam depois: recalcula quando a altura da coluna mudar
  new ResizeObserver(adjust).observe(sidebar);
}

// Luz que percorre a borda (classe "luz-percorre", ver 4-componentes.css): coloca dentro do
// elemento um contorno em SVG com várias camadas que, somadas, formam uma luz em degradê.
// A volta inteira vale 100. Ajustes:
//   TRAIL_LENGTH = tamanho do rastro (em % da volta) · LAYERS = nº de camadas (mais = mais suave)
//   LAYER_OPACITY = transparência de cada camada (perto da ponta elas se somam e a luz fica forte)
const TRAIL_LENGTH = 30;
const LAYERS = 20;
const LAYER_OPACITY = 0.14;

function initTravelingLight() {
  document.querySelectorAll(".luz-percorre").forEach((el) => {
    const styles = getComputedStyle(el);
    const lapSeconds = parseFloat(styles.getPropertyValue("--luz-volta")) || 4;
    // rx = arredondamento dos cantos (o do card + 1px, porque o contorno fica por cima da borda)
    const radius = parseFloat(styles.borderTopLeftRadius) + 1;

    // Uma camada: comprimento (em % da volta), cor, transparência.
    // O atraso negativo adianta as camadas curtas, para todas terminarem no mesmo ponto (a ponta)
    const layer = (length, color, opacity) => {
      const delay = -((TRAIL_LENGTH - length) / 100) * lapSeconds;
      const style = `stroke-dasharray: ${length} ${100 - length}; stroke: ${color}; opacity: ${opacity}; animation-delay: ${delay}s`;
      return `<rect width="100%" height="100%" rx="${radius}" pathLength="100" style="${style}" />`;
    };

    // Rastro: da camada mais comprida (roxa) até a mais curta (ciano)
    const trail = Array.from({ length: LAYERS }, (_, i) => {
      const progress = i / (LAYERS - 1); // 0 = cauda, 1 = perto da ponta
      const length = TRAIL_LENGTH - progress * (TRAIL_LENGTH - 2);
      const color = `color-mix(in srgb, var(--cor-ciano) ${Math.round(progress * 100)}%, var(--cor-roxo))`;
      return layer(length, color, LAYER_OPACITY);
    });
    // Ponta: curtinha, ciano e totalmente acesa, por cima de tudo
    const tip = layer(1.5, "var(--cor-ciano)", 1);

    el.insertAdjacentHTML("beforeend", `<svg class="luz-percorre-svg" aria-hidden="true">${trail.join("")}${tip}</svg>`);
  });
}

// Revelação suave das seções ao rolar a página + sombra no header fixo
export function initAnimations() {
  initStickySidebar();
  initTravelingLight();

  const revealTargets = document.querySelectorAll("[data-reveal]");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visivel");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealTargets.forEach((target) => observer.observe(target));

  const header = document.getElementById("cabecalho");
  if (header) {
    window.addEventListener("scroll", () => {
      header.classList.toggle("rolou", window.scrollY > 12);
    });
  }
}
