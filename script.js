// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Fade In Animation
const fadeInElements = document.querySelectorAll('.fade-in');

function isVisible(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleFadeIn() {
  fadeInElements.forEach(element => {
    if (isVisible(element)) {
      element.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', handleFadeIn);
window.addEventListener('resize', handleFadeIn);

// Flip Card Animation
const flipCards = document.querySelectorAll('.flip-card');

flipCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.classList.add('flip');
  });

  card.addEventListener('mouseleave', () => {
    card.classList.remove('flip');
  });
});
