const images = [
  { title: "Photo 1", source: "./images/photo1.jpg" },
  { title: "Photo 2", source: "./images/photo2.webp" },
  { title: "Photo 3", source: "./images/photo3.jpg" },
  { title: "Photo 4", source: "./images/photo4.avif" },
  { title: "Photo 5", source: "./images/photo5.jpg" },
  { title: "Photo 6", source: "./images/photo6.jpg" },
  { title: "Photo 7", source: "./images/photo7.png" },
  { title: "Photo 8", source: "./images/photo8.webp" },
  { title: "Photo 9", source: "./images/photo9.jpg" },
];

const body = document.querySelector("body");
const galleryContainer = document.querySelector(".js-gallery");

function createImageCard(image) {
  const imageCard = `
    <li class="gallery__item">
      <a class="gallery__link" href="${image.source}">
        <img class="gallery__image" src="${image.source}" alt="${image.title}" data-source="${image.source}">
      </a>
    </li>`;
  return imageCard;
}

const imageList = images.map((image) => createImageCard(image)).join("");
galleryContainer.innerHTML = imageList;

function createModal(image) {
  const modalHtml = `
    <div class="lightbox is-open">
      <div class="lightbox__overlay"></div>
      <div class="lightbox__content">
        <img class="lightbox__image" src="${image.source}" alt="${image.title}">
        <button type="button" class="lightbox__button" data-action="close-lightbox">Close</button>
      </div>
    </div>`;
  return modalHtml;
}

function openLightbox(image) {
  const modalHtml = createModal(image);
  body.insertAdjacentHTML("afterbegin", modalHtml);

  const closeButton = document.querySelector(".lightbox__button");
  closeButton.addEventListener("click", closeLightbox);
}

function closeLightbox() {
  const lightbox = document.querySelector(".lightbox");
  if (lightbox) {
    lightbox.remove();
  }
}

function handleGalleryClick(event) {
  event.preventDefault();
  if (event.target.classList.contains("gallery__image")) {
    const image = {
      title: event.target.alt,
      source: event.target.dataset.source,
    };
    openLightbox(image);
  }
}

galleryContainer.addEventListener("click", handleGalleryClick);
