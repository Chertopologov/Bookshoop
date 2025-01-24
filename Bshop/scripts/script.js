const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;
let slideInterval;
let isPaused = false;

function updateSlider() {
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function updateDots() {
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

function goToSlide(index) {
    isPaused = true;
    clearInterval(slideInterval);
    currentIndex = index;
    updateSlider();
    updateDots();
    setTimeout(() => {
      isPaused = false;
      startInterval()
    }, 300);
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
    updateDots();
}

function prevSlide(){
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
    updateDots();
}

function startInterval() {
  if (!isPaused) {
    slideInterval = setInterval(nextSlide, 5000);
  }
}


dots.forEach(dot => {
    dot.addEventListener('click', function() {
        goToSlide(parseInt(this.dataset.index));
    });
});

startInterval();