const openBtn = document.getElementById("openModal");
  const modal = document.querySelector(".modal");
  const closeBtn = document.querySelector(".close-modal");
  openBtn.addEventListener("click", () => {
    modal.style.display = "block";
  });

  closeBtn.onclick = () => {
    modal.style.display = "none";
  }

  window.onclick = (e) => {
    if (e.target == modal) {
      modal.style.display = "none";
    }
  }