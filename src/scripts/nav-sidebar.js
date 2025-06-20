const navBtn = document.querySelector(".nav-btn");
const navLinks = document.querySelector(".nav-links");

navBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show-links");
  navBtn.classList.toggle("show-close");
  if (navBtn.classList.contains("show-close")) {
    navBtn.setAttribute("aria-expanded", "true");
  } else {
    navBtn.setAttribute("aria-expanded", "false");
  }
});
