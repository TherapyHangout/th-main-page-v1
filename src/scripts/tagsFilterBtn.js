const tagsBtn = document.querySelector(".tags-btn");
const tagLinks = document.querySelector(".tag-links");
const tagsMenu = document.querySelector(".tags-menu");

tagsBtn.addEventListener("click", () => {
  tagLinks.classList.toggle("show-links");
  if (tagLinks.classList.contains("show-links")) {
    tagsBtn.setAttribute("aria-expanded", "true");
  } else {
    tagsBtn.setAttribute("aria-expanded", "false");
  }
});

tagsBtn.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "Escape":
      if (tagLinks.classList.contains("show-links")) {
        tagLinks.classList.toggle("show-links");
        tagsBtn.setAttribute("aria-expanded", "false");
      }
      break;
    case "ArrowUp":
      if (!tagLinks.classList.contains("show-links")) {
        tagLinks.classList.toggle("show-links");
        tagsBtn.setAttribute("aria-expanded", "true");
      }
      break;
    case "ArrowDown":
      if (!tagLinks.classList.contains("show-links")) {
        tagLinks.classList.toggle("show-links");
        tagsBtn.setAttribute("aria-expanded", "true");
      }
      break;
  }
});

tagLinks.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    tagLinks.classList.toggle("show-links");
    tagsBtn.setAttribute("aria-expanded", "false");
  }
});
