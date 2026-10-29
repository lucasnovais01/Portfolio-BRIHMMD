// Vídeos do YouTube tocando dentro do site: a capa (thumbnail) vira o player ao clicar
function play(video) {
  const { videoId, videoStart, videoTitle } = video.dataset;
  const params = new URLSearchParams({ autoplay: "1", rel: "0", start: videoStart });

  const iframe = document.createElement("iframe");
  iframe.className = "video__frame";
  iframe.src = `https://www.youtube-nocookie.com/embed/${videoId}?${params}`;
  iframe.title = videoTitle;
  iframe.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
  iframe.allowFullscreen = true;
  iframe.referrerPolicy = "strict-origin-when-cross-origin";

  video.querySelector(".video__cover").hidden = true;
  video.append(iframe);
  iframe.focus();
}

// Volta para a capa: usado ao trocar de aba, senão o vídeo escondido continua tocando
export function stopVideos(container) {
  container.querySelectorAll(".video").forEach((video) => {
    video.querySelector(".video__frame")?.remove();
    video.querySelector(".video__cover").hidden = false;
  });
}

export function initMedia() {
  document.querySelectorAll(".video").forEach((video) => {
    video.querySelector(".video__cover").addEventListener("click", () => play(video));

    // Nem todo vídeo tem a thumbnail em alta (maxresdefault): no lugar dela o YouTube
    // devolve uma imagem cinza de 120px, então trocamos pela hqdefault, que sempre existe
    const thumb = video.querySelector(".video__thumb");
    const fallback = () => {
      if (thumb.naturalWidth <= 120) thumb.src = `https://i.ytimg.com/vi/${video.dataset.videoId}/hqdefault.jpg`;
    };
    if (thumb.complete) fallback();
    else thumb.addEventListener("load", fallback, { once: true });
  });
}
