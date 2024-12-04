// Utility: Show or Hide Elements
const toggleVisibility = (element, condition) => {
  if (element) {
    element.style.display = condition ? "block" : "none";
  } else {
    console.error("toggleVisibility: Element not found.");
  }
};

// Scroll-to-Top Button
const scrollTopBtn = document.getElementById("scroll-top");

if (scrollTopBtn) {
  window.addEventListener("scroll", () => {
    toggleVisibility(scrollTopBtn, window.scrollY > 300);
  });

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
} else {
  console.warn("Scroll-to-Top button not found.");
}

// Intersection Observer for Section Animations
const sections = document.querySelectorAll("section");

if (sections.length > 0) {
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
} else {
  console.warn("No sections found for Intersection Observer.");
}

// Leaderboard Carousel Interaction
const carousel = document.querySelector(".carousel");

if (carousel) {
  let carouselIndex = 0;

  setInterval(() => {
    carouselIndex = (carouselIndex + 1) % carousel.children.length;
    carousel.style.transform = translateX(-${carouselIndex * 100}%);
  }, 3000);
} else {
  console.warn("Carousel not found.");
}

// Filter Leaderboard
const filterInput = document.getElementById("filter-input");

if (filterInput) {
  filterInput.addEventListener("input", (event) => {
    const query = event.target.value.toLowerCase();
    const rows = document.querySelectorAll(".leaderboard-table tbody tr");
    rows.forEach((row) => {
      const username = row.cells[1]?.textContent.toLowerCase();
      row.style.display = username && username.includes(query) ? "" : "none";
    });
  });
} else {
  console.warn("Filter input not found.");
}

// Real-Time Prize Pool Update
const prizePoolElements = document.querySelectorAll(".prize-pool .highlight");

if (prizePoolElements.length > 0) {
  setInterval(() => {
    prizePoolElements.forEach((element) => {
      const currentAmount = parseInt(element.textContent.replace(/[$,]/g, ""));
      if (!isNaN(currentAmount)) {
        const newAmount = currentAmount + Math.floor(Math.random() * 100);
        element.textContent = $${newAmount.toLocaleString()};
      } else {
        console.error("Invalid prize pool amount in element:", element);
      }
    });
  }, 5000);
} else {
  console.warn("No prize pool elements found.");
}

// Roll Game Function
function startRoll() {
  const slots = [
    document.getElementById("roll1"),
    document.getElementById("roll2"),
    document.getElementById("roll3"),
  ];

  if (slots.some((slot) => slot === null)) {
    console.error("Roll game slots (roll1, roll2, roll3) not found.");
    return;
  }

  const rollingIntervals = slots.map((slot) =>
    setInterval(() => {
      slot.textContent = Math.floor(Math.random() * 10);
    }, 100)
  );

  setTimeout(() => clearInterval(rollingIntervals[2]), 1000);
  setTimeout(() => clearInterval(rollingIntervals[1]), 2000);
  setTimeout(() => {
    clearInterval(rollingIntervals[0]);
    const results = slots.map((slot) => parseInt(slot.textContent));
    if (results.some(isNaN)) {
      console.error("Invalid roll results:", results);
      document.getElementById("rollResult").textContent = "❌ Error: Invalid results.";
      return;
    }

    const resultText = results.join(", ");
    let message = Results: ${resultText};
    if (new Set(results).size === 1) {
      message += " 🎉 Jackpot!";
    } else if (results[0] === results[1] || results[1] === results[2]) {
      message += " 🥈 Small prize!";
    } else {
      message += " ❌ Try again!";
    }

    const resultContainer = document.getElementById("rollResult");
    if (resultContainer) {
      resultContainer.textContent = message;
    } else {
      console.error("Result container (rollResult) not found.
                    ");
    }
  }, 3000);
}

// Poll Submission Function
function submitPoll() {
  const form = document.getElementById("pollForm");
  if (!form) {
    console.error("Poll form (pollForm) not found.");
    return;
  }

  const formData = new FormData(form);
  const results = {};

  formData.forEach((value, key) => {
    results[key] = value;
  });

  alert(`Your choices have been submitted: ${JSON.stringify(results, null, 2)}`);

  // Update mock stats
  const game1Stats = document.getElementById("game1Stats");
  const game2Stats = document.getElementById("game2Stats");

  if (game1Stats && game2Stats) {
    game1Stats.textContent = "Win: 45%, Draw: 35%, Loss: 20%";
    game2Stats.textContent = "Win: 50%, Draw: 30%, Loss: 20%";
  } else {
    console.error("Game stats elements not found.");
  }
}
