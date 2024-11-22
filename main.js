// Inisialisasi variabel untuk carousel atas
let currentIndexTop = 0;

// Ambil semua elemen slide untuk carousel atas
const slidesTop = document.querySelectorAll('#carousel-top > div');
const totalSlidesTop = slidesTop.length;

// Ambil elemen carousel atas
const carouselTop = document.getElementById('carousel-top');

// Fungsi untuk mengupdate posisi carousel
function updateCarousel(carousel, currentIndex, totalSlides) {
  const offset = -currentIndex * 100;
  carousel.style.transform = `translateX(${offset}%)`;
}

// Fungsi untuk menangani navigasi (next/prev)
function setupNavigation(buttonId, direction, carousel, currentIndex, totalSlides) {
  document.getElementById(buttonId).addEventListener('click', () => {
    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
    updateCarousel(carousel, currentIndex, totalSlides);
  });
}

// Setup tombol navigasi untuk carousel atas
setupNavigation('next-top', 1, carouselTop, currentIndexTop, totalSlidesTop);
setupNavigation('prev-top', -1, carouselTop, currentIndexTop, totalSlidesTop);

// Autoplay untuk carousel atas
setInterval(() => {
  currentIndexTop = (currentIndexTop + 1) % totalSlidesTop;
  updateCarousel(carouselTop, currentIndexTop, totalSlidesTop);
}, 3000); // Slide otomatis setiap 3 detik
