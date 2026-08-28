// Comportamento do menu dropdown "Projetos" no cabeçalho
export function initNav() {
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
