if (window.innerWidth <= 767) {
  var swiper = new Swiper(".swiper", {
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    mousewhell: true,
    keyboard: true,
  })
}

const descriptionContinueButton = document.querySelector('.description-continue-button');
const slides = document.querySelectorAll('.brands-services__slide');

descriptionContinueButton.addEventListener('click', () => {
  if (descriptionContinueButton.classList.contains('show-less')) {
    slides.forEach((slide, index) => {
      if (index >= 6) {
        slide.style.display = 'none';
      }
    });
    descriptionContinueButton.classList.remove('show-less');
  } else {
    slides.forEach((slide, index) => {
      if (index >= 6) {
        slide.style.display = 'block';
      }
    });
    descriptionContinueButton.classList.add('show-less');
  }
});