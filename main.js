const sections = document.querySelectorAll("main section");
const navLinks = document.querySelectorAll(".nav-links a");

function setActiveNav() {
  let current = "";

  sections.forEach((sec) => {
    const rect = sec.getBoundingClientRect();
    if (rect.top <= 90 && rect.bottom >= 90) {
      current = "#" + sec.id;
    }
  });

  navLinks.forEach((link) => {
    if (link.getAttribute("href") === current) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", setActiveNav);
window.addEventListener("load", setActiveNav);