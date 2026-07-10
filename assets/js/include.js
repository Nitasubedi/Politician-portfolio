async function loadComponent(id, file) {
  const response = await fetch(file);

  const html = await response.text();

  document.getElementById(id).innerHTML = html;
}

document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop();

  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach((link) => {
    link.classList.remove("active");

    const href = link.getAttribute("href");

    if (href === currentPage || (currentPage === "" && href === "index.html")) {
      link.classList.add("active");
    }
  });
});

loadComponent("navbar", "components/Navbar.html");
loadComponent("hero", "components/Hero.html");
loadComponent("about", "components/About.html");
loadComponent("news", "components/News.html");
loadComponent("gallery", "components/Gallery.html");
loadComponent("videos", "components/Videos.html");
loadComponent("footer", "components/Footer.html");
