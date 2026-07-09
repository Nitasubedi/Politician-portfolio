async function loadComponent(id, file) {
  const response = await fetch(file);

  const html = await response.text();

  document.getElementById(id).innerHTML = html;
}

loadComponent("navbar", "components/Navbar.html");
loadComponent("hero", "components/Hero.html");
loadComponent("about", "components/About.html");
loadComponent("news", "components/News.html");
loadComponent("gallery", "components/Gallery.html");
loadComponent("videos", "components/Videos.html");
loadComponent("footer", "components/Footer.html");
