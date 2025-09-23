// Scroll observer for section animations
export const initScrollAnimations = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      } else {
        // Reset animation when scrolling back up
        entry.target.classList.remove('animate');
      }
    });
  }, observerOptions);

  // Observe all section titles
  const titles = document.querySelectorAll('.stats-title, .testimonials-title, .features-title, .cta-title');
  titles.forEach((title) => {
    observer.observe(title);
  });

  // Observe all content elements
  const contentElements = document.querySelectorAll('.stats-subtitle, .community-avatars, .live-counter, .value-props-grid, .value-prop-card, .features-grid, .feature-item, .email-form, .cta-subtitle, .disclaimer');
  contentElements.forEach((element) => {
    observer.observe(element);
  });
};
