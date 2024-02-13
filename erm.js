const iframeContainer = document.getElementById("iframe-container");
const iframe = document.getElementById("iframe");
const fullscreenButton = document.getElementById("fullscreen-button");

fullscreenButton.addEventListener("click", () => {
  if (
    iframeContainer.requestFullscreen ||
    iframeContainer.webkitRequestFullscreen ||
    iframeContainer.msRequestFullscreen
  ) {
    iframeContainer.requestFullscreen();
  }
});

document.addEventListener("fullscreenchange", () => {
  if (document.fullscreenElement) {
    iframe.style.width = "100vw";
    iframe.style.height = "100vh";
    fullscreenButton.textContent = "Exit Fullscreen";
  } else {
    iframe.style.width = "80vw";
    iframe.style.height = "60vh";
    fullscreenButton.textContent = "Fullscreen";
  }
});

document.addEventListener("webkitfullscreenchange", () => {
  if (document.webkitFullscreenElement) {
    iframe.style.width = "100vw";
    iframe.style.height = "100vh";
    fullscreenButton.textContent = "Exit Fullscreen";
  } else {
    iframe.style.width = "80vw";
    iframe.style.height = "60vh";
    fullscreenButton.textContent = "Fullscreen";
  }
});

document.addEventListener("msfullscreenchange", () => {
  if (document.msFullscreenElement) {
    iframe.style.width = "100vw";
    iframe.style.height = "100vh";
    fullscreenButton.textContent = "Exit Fullscreen";
  } else {
    iframe.style.width = "80vw";
    iframe.style.height = "60vh";
    fullscreenButton.textContent = "Fullscreen";
  }
});
