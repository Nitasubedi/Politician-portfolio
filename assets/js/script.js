function initMobileMenu() {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (!menuToggle || !navLinks) return;

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const icon = menuToggle.querySelector("i");

    if (navLinks.classList.contains("active")) {
      icon.className = "ri-close-line";
    } else {
      icon.className = "ri-menu-line";
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".gallery-track");
  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");

  if (!track || !prev || !next) return;

  function updateCards() {
    const cards = document.querySelectorAll(".gallery-card");

    cards.forEach((card) => card.classList.remove("active"));

    if (cards.length >= 3) {
      cards[2].classList.add("active");
    }
  }

  next.addEventListener("click", () => {
    track.appendChild(track.firstElementChild);
    updateCards();
  });

  prev.addEventListener("click", () => {
    track.prepend(track.lastElementChild);
    updateCards();
  });
});
