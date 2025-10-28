let currentSlide = 0;
const carousel = document.getElementById('productCarousel');
const cards = carousel.querySelectorAll('.product-card');
const totalSlides = cards.length; // dynamic

let autoScrollInterval;

function moveCarousel(direction) {
  currentSlide += direction;

  if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  } else if (currentSlide >= totalSlides) {
    currentSlide = 0;
  }

  updateCarousel();
  resetAutoScroll();
}

function goToSlide(index) {
  currentSlide = index;
  updateCarousel();
  resetAutoScroll();
}

function updateCarousel() {
  carousel.style.transform = `translateX(-${currentSlide * 100}%)`;

  document.querySelectorAll('.dot').forEach((dot, index) => {
    dot.classList.toggle('active', index === currentSlide);
  });
}

function autoScroll() {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateCarousel();
}

function startAutoScroll() {
  autoScrollInterval = setInterval(autoScroll, 4000);
}

function resetAutoScroll() {
  clearInterval(autoScrollInterval);
  startAutoScroll();
}

startAutoScroll();