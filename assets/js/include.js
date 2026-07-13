async function loadComponent(id, file) {
  const element = document.getElementById(id);

  if (!element) return;

  const response = await fetch(file);
  const html = await response.text();

  element.innerHTML = html;

  if (id === "navbar") {
    setActiveNav();
    initMobileMenu();
  }
}

function setActiveNav() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  const links = document.querySelectorAll(".nav-links a");

  links.forEach((link) => {
    link.classList.remove("active");

    const href = link.getAttribute("href");

    if (href === currentPage) {
      link.classList.add("active");
    }
  });
}

async function loadComponent(id, file) {
  const element = document.getElementById(id);

  if (!element) return;

  const response = await fetch(file);
  const html = await response.text();

  element.innerHTML = html;

  if (id === "navbar") {
    setActiveNav();
    initMobileMenu();
  }

  // Initialize Swiper AFTER Videos.html is loaded
  if (id === "videos") {
    initVideoSlider();
  }

  if (id === "gallery") {
    initGallerySlider();
  }
}

loadComponent("navbar", "components/Navbar.html");
loadComponent("hero", "components/Hero.html");
loadComponent("about", "components/About.html");
loadComponent("news", "components/News.html");
loadComponent("gallery", "components/Gallery.html");
loadComponent("videos", "components/Videos.html");
loadComponent("footer", "components/Footer.html");
loadComponent("timeline", "components/Timeline.html");
loadComponent("experience", "components/Experience.html");
