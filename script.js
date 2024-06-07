let menu = document.querySelector("#menu");
let openMenu = document.querySelector("header");
let blockBody = document.querySelector("body");
let headerItems = document.querySelectorAll(".btn-close");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  openMenu.classList.toggle("active");
  blockBody.classList.toggle("active");
};

headerItems.forEach((btn) => {
  btn.addEventListener("click", () => {
    menu.classList.toggle("fa-times");
    blockBody.classList.toggle("active");

    openMenu.classList.remove("active");
  });
});

// video popup start
// Общая функция для открытия всплывающего окна
function openPopup(videoSrc) {
  const popupVideo = document.querySelector(".popup-video");
  const popupVideoElement = popupVideo.querySelector("video");
  popupVideoElement.src = videoSrc;
  popupVideo.style.display = "flex";

  // Добавляем обработчик для закрытия по клику вне видео
  popupVideo.addEventListener("click", closePopupOnOutsideClick);
}

// Общая функция для закрытия всплывающего окна
function closePopup() {
  const popupVideo = document.querySelector(".popup-video");
  popupVideo.style.display = "none";
  popupVideo.querySelector("video").src = "";
  popupVideo.removeEventListener("click", closePopupOnOutsideClick);
}

// Функция для закрытия по клику вне видео
function closePopupOnOutsideClick(event) {
  const popupVideo = document.querySelector(".popup-video");
  if (event.target === popupVideo) {
    closePopup();
  }
}

// Функция для добавления обработчиков событий на видео и overlay-text
function addPopupEventHandlers(box) {
  const video = box.querySelector("video");
  const overlayText = box.querySelector(".overlay-text");

  const openPopupHandler = () => openPopup(video.getAttribute("src"));

  if (video) {
    video.addEventListener("click", openPopupHandler);
  }
  if (overlayText) {
    overlayText.addEventListener("click", openPopupHandler);
  }
}

// Добавляем обработчики событий для всех видео и overlay-text
document.querySelectorAll(".box-container .box").forEach((box) => {
  addPopupEventHandlers(box);
});

// Обработчик для закрытия по клику на крестик
const closeIcon = document.querySelector(".popup-video span");
if (closeIcon) {
  // Проверка на существование
  closeIcon.onclick = closePopup;
}

// Обработчик для закрытия по клавише Escape
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closePopup();
  }
});

// video popup end
