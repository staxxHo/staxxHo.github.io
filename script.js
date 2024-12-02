// Dark/Light Theme Toggle
const toggleTheme = () => {
  const themeToggle = document.getElementById('theme-toggle');
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });
};

// Scroll-to-Top Button
const setupScrollToTop = () => {
  const scrollTopButton = document.getElementById('scroll-top');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollTopButton.classList.add('show');
    } else {
      scrollTopButton.classList.remove('show');
    }
  });

  scrollTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
};

// Content Animation on Scroll
const setupContentAnimations = () => {
  const animatedSections = document.querySelectorAll('.fade-in');
  const showOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.9;
    animatedSections.forEach((section) => {
      if (section.getBoundingClientRect().top < triggerBottom) {
        section.classList.add('show');
      }
    });
  };

  window.addEventListener('scroll', showOnScroll);
  document.addEventListener('DOMContentLoaded', showOnScroll);
};

// Initialize Scripts
document.addEventListener('DOMContentLoaded', () => {
  toggleTheme();
  setupScrollToTop();
  setupContentAnimations();
});
