// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Fade In and Fade Out Animations
const fadeInElements = document.querySelectorAll('.fade-in');
const fadeOutElements = document.querySelectorAll('.fade-out');

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

function handleFadeOut() {
  fadeOutElements.forEach(element => {
    if (!isVisible(element)) {
      element.classList.remove('visible');
    }
  });
}

window.addEventListener('scroll', () => {
  handleFadeIn();
  handleFadeOut();
});

window.addEventListener('resize', () => {
  handleFadeIn();
  handleFadeOut();
});