document.addEventListener("click", function (e) {
  const img = e.target.closest("img.zoomable");
  if (!img) return;

  let modal = document.getElementById("imgModal");
  let modalImg = document.getElementById("modalImage");

  // Create modal once if it doesn't exist
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "imgModal";
    modal.className = "img-modal";
    modal.innerHTML = `
      <span class="img-close" aria-label="Close">&times;</span>
      <img class="img-modal-content" id="modalImage" alt="Expanded image">
    `;
    document.body.appendChild(modal);

    modalImg = document.getElementById("modalImage");

    // close on X
    modal.querySelector(".img-close").addEventListener("click", () => {
      modal.style.display = "none";
    });

    // close on background click
    modal.addEventListener("click", (ev) => {
      if (ev.target === modal) modal.style.display = "none";
    });

    // close on ESC
    document.addEventListener("keydown", (ev) => {
      if (ev.key === "Escape") modal.style.display = "none";
    });
  }

  modal.style.display = "flex";
  modalImg.src = img.src;
});
