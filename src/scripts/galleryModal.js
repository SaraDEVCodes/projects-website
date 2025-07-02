// src/scripts/galleryModal.js

export function openModal(imgSrc) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  if (modalImg) modalImg.src = imgSrc;
  if (modal) modal.classList.remove("hidden");
}

export function setupGalleryClickHandlers() {
  document.querySelectorAll(".gallery-image").forEach((img) => {
    img.addEventListener("click", () => {
      openModal(img.dataset.img);
    });
  });
}

export function setupModalClose() {
  const closeBtn = document.getElementById("closeModal");
  if (closeBtn) {
    closeBtn.onclick = () => {
      const modal = document.getElementById("imageModal");
      if (modal) modal.classList.add("hidden");
    };
  }

  const modal = document.getElementById("imageModal");
  if (modal) {
    modal.onclick = (e) => {
      if (e.target.id === "imageModal") {
        modal.classList.add("hidden");
      }
    };
  }
}