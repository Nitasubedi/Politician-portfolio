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

const dropdown = document.querySelector(".dropdown");

if (dropdown) {
  const link = dropdown.querySelector("a");

  link.addEventListener("click", function (e) {
    e.preventDefault();

    dropdown.classList.toggle("active");
  });

  document.addEventListener("click", function (e) {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove("active");
    }
  });
}
function initVideoSlider() {
  new Swiper(".videoSlider", {
    loop: true,

    centeredSlides: true,

    slidesPerView: 3,

    spaceBetween: 25,

    speed: 700,

    grabCursor: true,

    allowTouchMove: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 25,
      },
    },
  });
}

function initGallerySlider() {
  const track = document.querySelector(".gallery-track");

  if (!track) return;

  const prev = document.getElementById("galleryPrev");
  const next = document.getElementById("galleryNext");

  function updateActive() {
    const cards = [...track.children];

    cards.forEach((card) => card.classList.remove("active"));

    cards[2].classList.add("active");
  }

  next.addEventListener("click", () => {
    track.appendChild(track.firstElementChild);

    updateActive();
  });

  prev.addEventListener("click", () => {
    track.insertBefore(track.lastElementChild, track.firstElementChild);

    updateActive();
  });

  updateActive();
}
