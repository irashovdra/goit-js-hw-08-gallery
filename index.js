const galleryContainer = document.querySelector(".js-gallery");
const lightbox = document.querySelector(".js-lightbox");
const lightboxImage = document.querySelector(".lightbox__image");
const closeButton = document.querySelector(".lightbox__button");

const onGalleryClick = (event) => {
  event.preventDefault();
  const isGalleryImage = event.target.classList.contains("gallery__image");

  if (!isGalleryImage) {
    return;
  }

  const originalImageUrl = event.target.dataset.source;
  openLightbox(originalImageUrl);
};

const openLightbox = (url) => {
  lightbox.classList.add("is-open");
  lightboxImage.src = url;
};

const closeLightbox = () => {
  lightbox.classList.remove("is-open");
  lightboxImage.src = "";
};

galleryContainer.addEventListener("click", onGalleryClick);

closeButton.addEventListener("click", closeLightbox);
