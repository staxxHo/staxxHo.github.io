// Utility: Show or Hide Elements
const toggleVisibility = (element, condition) => {
  element.style.display = condition ? "block" : "none";
};

// Scroll-to-Top Button
const scrollTopBtn = document.getElementById("scroll-top");

window.addEventListener("scroll", () => {
  toggleVisibility(scrollTopBtn, window.scrollY > 300);
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Intersection Observer for Section Animations
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  },
  { threshold: 0.5 }
);

sections.forEach((section) => observer.observe(section));

// Leaderboard Carousel Interaction
const carousel = document.querySelector(".carousel");

if (carousel) {
  let carouselIndex = 0;

  setInterval(() => {
    carouselIndex = (carouselIndex + 1) % carousel.children.length;
    carousel.style.transform = translateX(-${carouselIndex * 100}%);
  }, 3000);
}

// Filter Leaderboard
const filterInput = document.getElementById("filter-input");

if (filterInput) {
  filterInput.addEventListener("input", (event) => {
    const query = event.target.value.toLowerCase();
    const rows = document.querySelectorAll(".leaderboard-table tbody tr");
    rows.forEach((row) => {
      const username = row.cells[1].textContent.toLowerCase();
      row.style.display = username.includes(query) ? "" : "none";
    });
  });
}

// Real-Time Prize Pool Update
const prizePoolElements = document.querySelectorAll(".prize-pool .highlight");

if (prizePoolElements.length) {
  setInterval(() => {
    prizePoolElements.forEach((element) => {
      const currentAmount = parseInt(element.textContent.replace(/[$,]/g, ""));
      const newAmount = currentAmount + Math.floor(Math.random() * 100);
      element.textContent = $${newAmount.toLocaleString()};
    });
  }, 5000);
}
