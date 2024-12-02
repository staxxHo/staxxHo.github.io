// Scroll-to-Top Button
const scrollTopBtn = document.getElementById("scroll-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Intersection Observer for Animations
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  },
  { threshold: 1.5 }
);

sections.forEach((section) => observer.observe(section));

// Leaderboard Carousel Interaction
const carousel = document.querySelector(".carousel");
let carouselIndex = 0;

setInterval(() => {
  carouselIndex = (carouselIndex + 1) % carousel.children.length;
  carousel.style.transform = translateX(-${carouselIndex * 100}%);
}, 3000);
