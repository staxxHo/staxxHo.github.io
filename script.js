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

// Roll Game Function
function startRoll() {
  // Get slot elements
  const slots = [
    document.getElementById("roll1"),
    document.getElementById("roll2"),
    document.getElementById("roll3")
  ];

  // Check if all slot elements are present
  if (slots.some(slot => slot === null)) {
    console.error("Error: One or more slot elements (roll1, roll2, roll3) are missing from the DOM.");
    return;
  }

  // Start rolling the slots
  const rollingIntervals = slots.map(slot =>
    setInterval(() => {
      slot.textContent = Math.floor(Math.random() * 10); // Random number between 0-9
    }, 100)
  );

  // Stop the slots at staggered intervals
  setTimeout(() => clearInterval(rollingIntervals[2]), 1000); // Third slot stops after 1 second
  setTimeout(() => clearInterval(rollingIntervals[1]), 2000); // Second slot stops after 2 seconds
  setTimeout(() => {
    clearInterval(rollingIntervals[0]); // First slot stops after 3 seconds

    // Collect and validate results
    const results = slots.map(slot => parseInt(slot.textContent));
    if (results.some(isNaN)) {
      console.error("Error: One or more slots have invalid values.");
      document.getElementById("rollResult").textContent = "❌ Error: Invalid roll results.";
      return;
    }

    // Generate result message
    const resultText = results.join(", ");
    let message = Results: ${resultText};
    if (new Set(results).size === 1) {
      message += " 🎉 Jackpot!";
    } else if (results[0] === results[1] || results[1] === results[2]) {
      message += " 🥈 Small prize!";
    } else {
      message += " ❌ Try again!";
    }

    // Display result
    const resultContainer = document.getElementById("rollResult");
    if (resultContainer) {
      resultContainer.textContent = message;
    } else {
      console.error("Error: Result container (rollResult) not found.");
    }
  }, 3000);
}
