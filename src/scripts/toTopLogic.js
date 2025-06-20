// const toTop = document.querySelector(".to-top-btn");

// window.addEventListener("scroll", () => {
//   if (window.pageYOffset > 100) {
//     toTop.classList.add("active");
//   } else {
//     toTop.classList.remove("active");
//   }
// });

const ToTopBtn = document.querySelector(".to-top-btn");

function toggleBackToTopButton() {
  if (window.scrollY > 300) {
    ToTopBtn.classList.add("active");
  } else {
    ToTopBtn.classList.remove("active");
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

window.addEventListener("scroll", toggleBackToTopButton);
ToTopBtn.addEventListener("click", scrollToTop);
