// Vídeos do YouTube tocando dentro do site: a capa (thumbnail) vira o player ao clicar

// Endereços do YouTube, num lugar só: capa (thumbnail) e player sem cookies de rastreamento
// quality: "maxresdefault" (alta, nem todo vídeo tem) ou "hqdefault" (sempre existe)
export const youtubeThumbnail = (id, quality = "maxresdefault") => `https://i.ytimg.com/vi/${id}/${quality}.jpg`;
const youtubeEmbed = (id) => `https://www.youtube-nocookie.com/embed/${id}`;
// "start" opcional: usado pelos tempos do roteiro (ex.: 0:07) para tocar a partir daquele ponto
function play(video, start = video.dataset.videoStart) {
  const { videoId, videoTitle } = video.dataset;
  const params = new URLSearchParams({ autoplay: "1", rel: "0", start });

  // Se já estiver tocando, troca o player pelo novo (no tempo pedido)
  video.querySelector(".video-player")?.remove();

  const iframe = document.createElement("iframe");
  iframe.className = "video-player";
  iframe.src = `${youtubeEmbed(videoId)}?${params}`;
  iframe.title = videoTitle;
  iframe.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
  iframe.allowFullscreen = true;
  iframe.referrerPolicy = "strict-origin-when-cross-origin";

  video.querySelector(".video-capa").hidden = true;
  video.append(iframe);
  iframe.focus();
}

// Botões de tempo do roteiro: tocam o vídeo da mesma aba a partir do segundo indicado
function initSeekButtons() {
  document.querySelectorAll("[data-seek]").forEach((button) => {
    button.addEventListener("click", () => {
      const video = button.closest(".aba-painel")?.querySelector(".video");
      if (!video) return;
      play(video, button.dataset.seek);
      video.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  });
}

// Volta para a capa: usado ao trocar de aba e ao entrar/sair do modo foco, senão o vídeo escondido continua tocando
export function stopVideos(container) {
  container.querySelectorAll(".video").forEach((video) => {
    video.querySelector(".video-player")?.remove();
    video.querySelector(".video-capa").hidden = false;
  });
}

export function initMedia() {
  initSeekButtons();

  document.querySelectorAll(".video").forEach((video) => {
    video.querySelector(".video-capa").addEventListener("click", () => play(video));

    // Nem todo vídeo tem a thumbnail em alta (maxresdefault): no lugar dela o YouTube
    // devolve uma imagem cinza de 120px, então trocamos pela hqdefault, que sempre existe
    const thumb = video.querySelector(".video-thumbnail");
    const fallback = () => {
      if (thumb.naturalWidth <= 120) thumb.src = youtubeThumbnail(video.dataset.videoId, "hqdefault");
    };
    if (thumb.complete) fallback();
    else thumb.addEventListener("load", fallback, { once: true });
  });
}
