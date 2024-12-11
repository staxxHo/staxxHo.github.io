// Scroll-to-Top Functionality
const scrollToTopBtn = document.getElementById('scroll-top');
scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Dynamic Leaderboard Updates
const leaderboardItems = document.querySelectorAll('.carousel-item');
setInterval(() => {
  leaderboardItems.forEach(item => {
    const randomAmount = (Math.random() * 100000).toFixed(0);
    const name = item.textContent.split(' - ')[0]; // Extract name
    item.textContent = ${name} - $${randomAmount} wager;
  });
}, 5000); // Update every 5 seconds

// FAQ Expand/Collapse Functionality
const faqItems = document.querySelectorAll('.faq-item h3');
faqItems.forEach(item => {
  item.addEventListener('click', () => {
    const answer = item.nextElementSibling;
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
  });
});

// Scroll Animation Trigger
const scrollElements = document.querySelectorAll('[data-animate]');

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const displayScrollElement = (element) => {
  element.classList.add("visible");
};

const hideScrollElement = (element) => {
  element.classList.remove("visible");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else {
      hideScrollElement(el);
    }
  });
};

window.addEventListener("scroll", () => {
  handleScrollAnimation();
});
